package com.veroniqa.frontend.Controllers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.List;
import java.util.logging.Logger;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.face4j.facebook.Client;
import com.face4j.facebook.Facebook;
import com.face4j.facebook.OAuthAccessToken;
import com.face4j.facebook.enums.HttpClientType;
import com.face4j.facebook.exception.FacebookException;
import com.face4j.facebook.factory.FacebookFactory;
import com.veroniqa.bean.UserDetail;
import com.veroniqa.dto.FrontEndDTO;
import com.veroniqa.dto.MyAccountDTO;
import com.veroniqa.email.dto.EmailDTO;
import com.veroniqa.frontend.service.CheckoutService;
import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.MemcachedConstants;
import com.veroniqa.frontend.util.MemcachedUtil;
import com.veroniqa.frontend.util.RestClientUtil;
import com.veroniqa.frontend.util.VeroniqaConstants;
import com.veroniqa.frontend.util.VeroniqaCookieUtil;
import com.veroniqa.frontend.util.VeroniqaUtil;
import com.veroniqa.jdo.Country;
import com.veroniqa.jdo.Customer;

@Controller
public class AuthenticationController 
{
	
	private Logger log=Logger.getLogger("AuthenticationController");
	public String serviceProvider = null;
	
	@RequestMapping(value="/setFbStatusFrom.htm", method = RequestMethod.GET)
	 public @ResponseBody String Status(@RequestParam("status") String status, @RequestParam(value="locations",required=false) String locations, HttpServletRequest req)
	 {
		 log.info(" load status method ");
	     String serverName="";
	     try {
			    if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("LIVE") ||EnvironmentUtil.getEnvironmentValue("AppMode").equals("STAGING"))
			    {
			    	serverName=req.getScheme()+"://"+req.getServerName();
			    }
			    else 
			    {
			    	serverName=req.getScheme()+"://"+req.getServerName()+":"+req.getServerPort();
			    }
			    serverName= serverName+""+locations;
			    log.info(" currentpage :"+serverName);
			    req.getSession().setAttribute("currentpage", serverName);
			    req.getSession().setAttribute("status", status);
			    log.info("this is an session value from fbstatus :: "+req.getSession().getAttribute("status"));
	     	}
	     	catch (Exception e)
	     	{
	     		e.printStackTrace();
	     	}
	     	return "success";
	 }
	
	@RequestMapping(value="/clearFBSessionValue.htm", method = RequestMethod.GET)
	public @ResponseBody String clearFBSessionValues(HttpServletRequest req)
	{
		try{
			req.getSession().setAttribute("reviewTitle", "");
			req.getSession().setAttribute("reviewText", "");
			req.getSession().setAttribute("reviewRating", "");
		}
		catch(Exception e)
		{
			log.info("Error from the clearFBSessionValues method :: "+e);
			e.printStackTrace();
		}
		return "success";
	}
	
	@RequestMapping(value="/retainReviewValues.htm", method = RequestMethod.GET)
	public @ResponseBody String retainReviewValues(@RequestParam("reviewTitle") String reviewTitle, @RequestParam("reviewText") String reviewText, @RequestParam("reviewRating") String reviewRating, HttpServletRequest req)
	{
		try 
		{
			//System.out.println("review title, text and rating is :: "+reviewTitle+ " && "+reviewText+ " && "+reviewRating);
			req.getSession().setAttribute("reviewTitle", reviewTitle);
			req.getSession().setAttribute("reviewText", reviewText);
			req.getSession().setAttribute("reviewRating", reviewRating);
		}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		return "success";
	}
	
	@RequestMapping(value="/renderPage.htm", method =  RequestMethod.GET)    
	public ModelAndView renderPage(HttpServletRequest req,HttpServletResponse res)
    {
    	ModelAndView mv=null;
    	try
    	{
    		log.info("INSIDE RENDER PAGE "+req.getParameter("page"));
    		mv=new ModelAndView(req.getParameter("page"));
    	}
    	catch(Exception e){
    		log.warning("Exception in renderPage:"+e);
    	}
    	return mv;
    } 
	
	@RequestMapping(value="/currentPageStatus.htm", method =  RequestMethod.GET)    
	public  @ResponseBody String getCurrentPageStatus(HttpServletRequest req)
    {
		String currentPageStatus="";
		if(req.getSession().getAttribute("status")!=null){
			currentPageStatus = (String) req.getSession().getAttribute("status");
			req.getSession().setAttribute("status",null);
			req.getSession().setAttribute("flag", null);
		}
    	return currentPageStatus;
    } 
	
	@RequestMapping(value="/wishlistValues.htm", method = RequestMethod.POST)
	public @ResponseBody String getWishlistValues(@RequestParam(value = "prodid",required=false) Long prodid, @RequestParam(value = "colorid",required=false) Long colorid, @RequestParam(value = "size",required=false) Double size, HttpServletResponse res, HttpServletRequest req)
	{
		log.info("coming inside the wishlistValues method");
		log.info("the prodid is:: "+prodid+" the colorid is:: "+colorid+" the size is:: "+size);
		String flag = "true";
		req.getSession().setAttribute("flag", flag);
		req.getSession().setAttribute("prodid", prodid);
		req.getSession().setAttribute("colorid", colorid);
		req.getSession().setAttribute("size", size);
		return "success";
	}
	
	@RequestMapping(value="/clearfbLoginErrorMessageSession.htm", method = RequestMethod.GET)
	public  @ResponseBody String clearfbLoginErrorMessageSession(HttpServletRequest req)
    {
		//System.out.println("coming into the clearfbLoginErrorMessageSession controller");
		req.getSession().setAttribute("fbLoginErrorMessage", null);
		return "success";
    }
	
	@RequestMapping( value ="/verifyFaceBookResponse.htm" , method =  RequestMethod.GET)	
	public ModelAndView facebookAuthentication(HttpServletRequest req, HttpServletResponse res) throws Exception {
	
		  
		ModelAndView mv 					 = null;
	    com.face4j.facebook.entity.User user = null;	    
	    OAuthAccessToken accessToken 		 = null;
	    String code 						 = req.getParameter("code");
	    String Status						 = "";
		try {
			
			if(req.getSession().getAttribute("status")!=null)
			{
				Status = (String) req.getSession().getAttribute("status");
			}
			 String protocol = req.getScheme();
			 if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("DEV"))
			 {
				Client client = new Client("102732789875589", "629718271b12cb4a039e7b99f70985a6");
			    FacebookFactory facebookFactory = new FacebookFactory(client,HttpClientType.URL_FETCH_SERVICE);
			    accessToken = facebookFactory.getOAuthAccessToken(code, "http://localhost:9999/renderPage.htm?page=redirect");
				if(accessToken!=null){
					Facebook facebook = facebookFactory.getInstance(accessToken);
				    log.info("the access token is :: " +accessToken.getAccessToken());
				    user = facebook.getCurrentUser();
				    req.getSession().setAttribute("accessToken", accessToken.getAccessToken());
			    }
			 }
			 else if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("STAGING"))
			{
				//Client client = new Client("355325974547159", "2bff70115b3ad2bd7d2d61559d750f65");
				Client client = new Client("360291777383552", "3352c5aa3b2e0b7ac1cd7423eeebd77e");  //new
			    FacebookFactory facebookFactory = new FacebookFactory(client,HttpClientType.URL_FETCH_SERVICE);
			   
				if((Status.equals("home") && code!=null) || (Status.equals("wishlist") && code!=null) || (Status.equals("sale") && code!=null) || (Status.equals("review") && code!=null))
				{
					if(protocol!=null && !protocol.equals(""))
					  {
						log.info("protocol is :: "+protocol);
						if(protocol.equals("http"))
						{
							//log.info("Inside verifyFaceBookResponse.htm : ------>>>>>>>>>>>>> And coming inside the IF of the condition ---->>>>>>>>>>>>>>>>>");
							accessToken = facebookFactory.getOAuthAccessToken(code, "http://testing.solestruck.com/renderPage.htm?page=redirect");
							
						}
						else
						{
							//log.info("Inside verifyFaceBookResponse.htm : ------>>>>>>>>>>>>> And coming inside the ELSE of the condition ---->>>>>>>>>>>>>>>>>");
							accessToken = facebookFactory.getOAuthAccessToken(code, "https://testing.solestruck.com/renderPage.htm?page=redirect");
						}
					  }
				}
				else if(code!=null && Status.equals("checkout"))
				{
					accessToken = facebookFactory.getOAuthAccessToken(code, "https://testing.solestruck.com/renderPage.htm?page=redirect");
				}
				if(accessToken!=null){
				Facebook facebook = facebookFactory.getInstance(accessToken);
			    log.info("the access token is :: " +accessToken.getAccessToken());
			    req.getSession().setAttribute("accessToken", accessToken.getAccessToken());
			    user = facebook.getCurrentUser();
				}
			}
			else if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("LIVE"))
			{
				Client client = new Client("421260994576981", "e4ed5353c4e302f41d3b2d7516a17f4d");
			    FacebookFactory facebookFactory = new FacebookFactory(client,HttpClientType.URL_FETCH_SERVICE);
			   	  
			    if((Status.equals("home") && code!=null) || (Status.equals("wishlist") && code!=null) || (Status.equals("sale") && code!=null) || (Status.equals("review") && code!=null))
				{
					if(protocol!=null && !protocol.equals(""))
					  {
						log.info("protocol is :: "+protocol);
						if(protocol.equals("http"))
						{
							//log.info("Inside verifyFaceBookResponse.htm : ------>>>>>>>>>>>>> And coming inside the IF of the condition ---->>>>>>>>>>>>>>>>>");
							accessToken = facebookFactory.getOAuthAccessToken(code, "http://www.solestruck.com/renderPage.htm?page=redirect");
							
						}
						else
						{
							//log.info("Inside verifyFaceBookResponse.htm : ------>>>>>>>>>>>>> And coming inside the ELSE of the condition ---->>>>>>>>>>>>>>>>>");
							accessToken = facebookFactory.getOAuthAccessToken(code, "https://www.solestruck.com/renderPage.htm?page=redirect");
						}
					  }
					
				}
				else if(code!=null && Status.equals("checkout"))
				{
					accessToken = facebookFactory.getOAuthAccessToken(code, "https://www.solestruck.com/renderPage.htm?page=redirect");
				}
				if(accessToken!=null){
				Facebook facebook = facebookFactory.getInstance(accessToken);
			    log.info("the access token is :: " +accessToken.getAccessToken());
			    req.getSession().setAttribute("accessToken", accessToken.getAccessToken());
			    user = facebook.getCurrentUser();
				}
			}
			
		}
			catch (FacebookException  e)
			{
				log.info("This is facebook exception "+e);
				e.printStackTrace();
			}
			
		
			if(user != null) 
			{
				Cookie cookie=VeroniqaCookieUtil.createNewCookie(req, res,VeroniqaConstants.FACEBOOK,VeroniqaConstants.FACEBOOK,1*24*60*60);
				res.addCookie(cookie);
			    Cookie cookieFB=VeroniqaCookieUtil.createNewCookie(req, res, VeroniqaConstants.FBLOGIN,VeroniqaConstants.FBLOGIN,1*24*60*60);
			    res.addCookie(cookieFB);
				String email    = user.getEmail();
				String fname    = user.getFirstName();
				String lname    = user.getLastName();
				String image	= user.getPictureURL();
				
				log.info(" facebook email :: "+email+" facebook  firstName :: "+fname+" facebook lastName :: "+lname);
				if(email!=null && email!="")
				{
					req.getSession().setAttribute("email", email);
					req.getSession().setAttribute("fname", fname);
					req.getSession().setAttribute("lname", lname);
					req.getSession().setAttribute("image", image);
					req.getSession().setAttribute("revEmail", email);
					req.getSession().setAttribute("revName", fname);
					
					//CheckoutService.dopostingTimeLine(req,fname,"login");
					String value = "false";
					ArrayList<Object> params1 = new ArrayList<Object>();
					params1.add(email);				
					Customer customer=(Customer)RestClientUtil.callService(params1, "getCustomerByOnlyEmailId", "CustomerBusinessService");	
					
					log.info("the value of the status is :: " +Status);
					if(customer!=null)
					{
						log.info("customer is not null");
						value = "true";
						req.getSession().setAttribute("loggedin", true);
					}
						log.info("the value of the existing customer is as follows ::" +value);
					if(value.equals("true"))
					{
							log.info(" Existing facebook user ");
							HashMap resultMap=null;
							ArrayList<Object> param = new ArrayList<Object>();
							param.add(email);
							resultMap = (HashMap)RestClientUtil.callService(param, "loginfb", "CustomerBusinessService");
							Long customerid = (Long) resultMap.get("customerid");
							log.info("the customer id is :: " +customerid);
							log.info(" customer id "+customerid);	
							req.getSession().setAttribute("customerid", customerid.toString());
							List<Country> retVal	  = null;
							List serviceParams		  = new ArrayList();
							MyAccountDTO myaccountDTO = null;
							FrontEndDTO fd			  = new FrontEndDTO();
							String brandstr			  = "";
							
							if(Status.equals("home"))
							{
								log.info(" Existing facebook user  home page ");
								log.info("the current page url is :: "+req.getSession().getAttribute("currentpage"));
								String serverName = "";
								if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("LIVE") ||EnvironmentUtil.getEnvironmentValue("AppMode").equals("STAGING"))
							    {
							    	serverName=req.getScheme()+"://"+req.getServerName();
							    }
							    else 
							    {
							    	serverName=req.getScheme()+"://"+req.getServerName()+":"+req.getServerPort();
							    }
								String currentpage = (String) req.getSession().getAttribute("currentpage");
								log.info(serverName+"/customerservice");
								
								if(currentpage.equalsIgnoreCase(serverName+"/customerservice") || currentpage.equalsIgnoreCase(serverName+"/returns") || currentpage.equalsIgnoreCase(serverName+"/orderstatus") ||currentpage.equalsIgnoreCase(serverName+"/accountinfo"))
								{
									log.info("coming inside the condition");
									res.sendRedirect("/MyAccount.htm");
								}
								else
								{
									log.info("coming to the else of the condition");
									res.sendRedirect((String) req.getSession().getAttribute("currentpage"));
								}
								req.getSession().setAttribute("loggedin", true);
								req.getSession().setAttribute("customerid", customerid.toString());
								log.info("customer id :: "+req.getSession().getAttribute("customerid"));
							}
							else if(Status.equals("checkout"))
							{
									log.info(" Existing facebook user  checkout page ");
									mv = new ModelAndView("CheckoutAccountInfo");
									CheckoutController ck = new CheckoutController();
									String cusId="";
									if(req.getSession().getAttribute("customerid")!=null)
									{
										cusId=req.getSession().getAttribute("customerid").toString();
										req.getSession().setAttribute("email", "");
										req.getSession().setAttribute("fname", "");
										req.getSession().setAttribute("lname", "");
									}
									log.info("*******  Inside CheckoutSignIn And Customer ID is  ***************  : "  +cusId);
									if(cusId!=null && !cusId.equalsIgnoreCase(""))
									{
										log.info("Customer ID Found in Session for Checkout-SignIn!");
										int checkout_step=2;
										mv=new ModelAndView(new RedirectView("/checkout/account-info.htm"));								
								}						
							}
							else if(Status.equalsIgnoreCase("wishlist") || Status.equalsIgnoreCase("sale") || Status.equalsIgnoreCase("review"))
							{
								log.info("  Existing facebook user  in to the wishlist/sale condition "+Status);
								 if(req.getSession().getAttribute("currentpage")!=null)
							       {
							        res.sendRedirect((String)req.getSession().getAttribute("currentpage"));   
							       }
								 req.getSession().setAttribute("loggedin", true);
								 req.getSession().setAttribute("customerid", customerid.toString());
							}						
						}
						else
						{
							log.info(" New facebook user ");
							String staticpassword 	  = null;											
							List<Country> retVal	  = null;
							List serviceParams		  = new ArrayList();
							MyAccountDTO myaccountDTO = null;
							FrontEndDTO fd			  = new FrontEndDTO();
							String brandstr			  = "";
							HashMap resultMap		  = new HashMap();
							try
							{
								brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
							}
							catch(Exception e)
							{
								e.printStackTrace();							
							}
							UserDetail lUserDetail=new UserDetail();
							lUserDetail.setEmailid(email);
							lUserDetail.setPassword(staticpassword);
							lUserDetail.setFirstName(fname);
							lUserDetail.setLastName(lname);
							long brandid=0L;
							if(brandstr!=null)
							{
								brandid=Long.parseLong(brandstr);
								ArrayList<Object> params = new ArrayList<Object>();
								params.add(lUserDetail);
								params.add(brandid);
								resultMap=(HashMap)RestClientUtil.callService(params, "registerCustomer", "CustomerBusinessService");	
								
								if(resultMap!=null&&resultMap.containsKey("result")&&"success".equals((String)resultMap.get("result")))
								{
									Long customerid=(Long)resultMap.get("customerid");	
									log.info(" Customer id "+customerid);
									params = new ArrayList<Object>();
									params.add(customerid);
									myaccountDTO=(MyAccountDTO)RestClientUtil.callService(params, "getMyAccountDetails", "CustomerBusinessService");
									req.getSession().setAttribute("loggedin", true);
									req.getSession().setAttribute("customerid", customerid.toString());
									
									//mv.setViewName("my_account_info");
								if(Status.equals("home"))
								{
									log.info("  New facebook user home page ");
									log.info("The current location is :: "+req.getSession().getAttribute("currentpage"));
									
									String serverName = "";
									if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("LIVE") ||EnvironmentUtil.getEnvironmentValue("AppMode").equals("STAGING"))
								    {
								    	serverName=req.getScheme()+"://"+req.getServerName();
								    }
								    else 
								    {
								    	serverName=req.getScheme()+"://"+req.getServerName()+":"+req.getServerPort();
								    }
									String currentpage = (String) req.getSession().getAttribute("currentpage");
									log.info(serverName+"/customerservice");
									
									if(currentpage.equalsIgnoreCase(serverName+"/customerservice") || currentpage.equalsIgnoreCase(serverName+"/returns") || currentpage.equalsIgnoreCase(serverName+"/orderstatus") ||currentpage.equalsIgnoreCase(serverName+"/accountinfo"))
									{
										log.info("coming inside the condition");
										res.sendRedirect("/MyAccount.htm");
									}
									else
									{
										log.info("coming to the else of the condition");
										res.sendRedirect((String) req.getSession().getAttribute("currentpage"));
									}
									
									//res.sendRedirect((String) req.getSession().getAttribute("currentpage"));
									req.getSession().setAttribute("loggedin", true);
									req.getSession().setAttribute("customerid", customerid.toString());
								}
							
								else if(Status.equalsIgnoreCase("checkout"))
								{
									log.info("  New facebook user check out page ");
									/*mv = new ModelAndView("CheckoutAccountInfo");*/
									CheckoutController ck = new CheckoutController();
									String cusId="";
									if(req.getSession().getAttribute("customerid")!=null)
										cusId=req.getSession().getAttribute("customerid").toString();
									
									log.info("*******  Inside CheckoutSignIn And Customer ID is  ***************  : "  +cusId);
									if(cusId!=null && !cusId.equalsIgnoreCase(""))
									{
										log.info("Customer ID Found in Session for Checkout-SignIn!");
										int checkout_step=2;
										mv=new ModelAndView(new RedirectView("/checkout/account-info.htm"));								
									}
								}
								else if(Status.equalsIgnoreCase("wishlist") || Status.equalsIgnoreCase("sale") || Status.equalsIgnoreCase("review"))
								{
									log.info(" New facebook user  inside wishlist/sale condition " +Status);
									 if(req.getSession().getAttribute("currentpage")!=null)
								       {
								        res.sendRedirect((String)req.getSession().getAttribute("currentpage"));   
								       }
									 req.getSession().setAttribute("loggedin", true);
									 req.getSession().setAttribute("customerid", customerid.toString());
								}						
							}
						}
											
						}	
				}
				else
				{
				    log.info(" inside the else of email is null && status is "+Status);				
				    log.info("inside the else of email is null && current page "+req.getSession().getAttribute("currentpage"));
				    req.getSession().setAttribute("fbLoginErrorMessage", "show");
				    if(!Status.equalsIgnoreCase("review"))
				    	req.getSession().setAttribute("status",null);
			    	req.getSession().setAttribute("accessToken", null);
			    	if(Status.equalsIgnoreCase("home") || Status.equals("sale") || Status.equals("wishlist"))
			    		res.sendRedirect("/");
			    	else if(Status.equalsIgnoreCase("review"))
			    		res.sendRedirect((String)req.getSession().getAttribute("currentpage"));
			    	else if(Status.equalsIgnoreCase("checkout"))
			    		mv=new ModelAndView(new RedirectView("/checkout/sign-in.htm"));
				}
			   
			}
			else if(Status.equals("home") || Status.equals("sale") || Status.equals("wishlist") || Status.equals("review"))
			{
			    log.info(" if status is "+Status);				
			    log.info("current page "+req.getSession().getAttribute("currentpage"));
			    if(req.getSession().getAttribute("currentpage")!=null)
			    {
			    	res.sendRedirect((String)req.getSession().getAttribute("currentpage"));   
			    	req.getSession().setAttribute("status",null);
			    }		       
			}
		   else if(Status.equals("checkout"))
		   {
			   log.info(" else status is "+Status);
			   req.getSession().setAttribute("status", null);
			   res.sendRedirect("/checkout/account-info.htm");			    
		   }
			
			//mv.addObject("ZineDTO",new CheckoutService().getSolestruckMagazineDetails());
	   		
	return mv;
	}
	
	
}
