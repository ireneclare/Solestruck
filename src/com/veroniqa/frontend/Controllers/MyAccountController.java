package com.veroniqa.frontend.Controllers;

import java.io.BufferedReader;
import java.io.DataOutputStream;
import java.io.InputStreamReader;
import java.math.BigDecimal;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.TimeZone;
import java.util.logging.Logger;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.json.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.veroniqa.bean.UserDetail;
import com.veroniqa.dto.AccountInfoDTO;
import com.veroniqa.dto.BillingAddressDTO;
import com.veroniqa.dto.FrontEndDTO;
import com.veroniqa.dto.MyAccountDTO;
import com.veroniqa.dto.OrderDTO;
import com.veroniqa.dto.OrderInfoPageDTO;
import com.veroniqa.dto.OrderLineDTO;
import com.veroniqa.dto.ShippingAddressDTO;
import com.veroniqa.email.dto.EmailDTO;
import com.veroniqa.email.emailclientservice.EmailClientService;
import com.veroniqa.frontend.util.BusinessException;
import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.MemcachedConstants;
import com.veroniqa.frontend.util.MemcachedUtil;
import com.veroniqa.frontend.util.RestClientUtil;
import com.veroniqa.frontend.util.VelocityUtil;
import com.veroniqa.frontend.util.VeroniqaConstants;
import com.veroniqa.frontend.util.VeroniqaCookieUtil;
import com.veroniqa.frontend.util.VeroniqaUtil;
import com.veroniqa.jdo.BillingAddress;
import com.veroniqa.jdo.BlobDetail;
import com.veroniqa.jdo.Country;
import com.veroniqa.jdo.Customer;
import com.veroniqa.jdo.EmailTemplate;
import com.veroniqa.jdo.Event;
import com.veroniqa.jdo.InvoiceTemplate;
import com.veroniqa.jdo.Shipment;
import com.veroniqa.jdo.ShippingAddress;

@Controller
public class MyAccountController 
{
	
	private static Logger log=Logger.getLogger("MyAccountController");
	
	@RequestMapping(value="/loadRegistration.htm",method=RequestMethod.GET)
	public ModelAndView loadRegistration(HttpServletRequest req)
	{
		ModelAndView mv=new ModelAndView("registration");
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		FrontEndDTO fd=new FrontEndDTO();
		Long brandId=0l;
		if(brandstr!=null)
		{
			brandId=Long.parseLong(brandstr);
			
			mv.addObject("brandid",brandId);
			//mv.addObject("customerRegistration",new UserDetail() );
			try
			{
				ArrayList<Object> paramsThree = new ArrayList<Object>();
				paramsThree.add(brandId);
				
				if(MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS)!=null)
				   {
				    fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				    log.info("FrontEndDTO Retrived from cache");
				   }
				   else
				   {
					   fd=(FrontEndDTO)RestClientUtil.callService(paramsThree, "getFrontEndDTOFromCache", "ListingBusinessService");
				    if(fd!=null)
				    {
				    	 MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				    }
				    
				   }

				List<Integer> womenDropDown=VeroniqaUtil.getWomenDropDown(fd);
				if(womenDropDown!=null && womenDropDown.size()>0)
				{
					mv.addObject("firstColumn",womenDropDown.get(0));
					mv.addObject("secondColumn",womenDropDown.get(1));
					mv.addObject("thirdColumn",womenDropDown.get(2));
					mv.addObject("fourthColumn",womenDropDown.get(3));
				}
				List<Integer> menDropDown=VeroniqaUtil.getMenDropDown(fd);
				if(menDropDown!=null && menDropDown.size()>0)
				{
					mv.addObject("firstColumnMen", menDropDown.get(0));
					mv.addObject("secondColumnMen", menDropDown.get(1));
					mv.addObject("thirdColumnMen", menDropDown.get(2));
					mv.addObject("fourthColumnMen", menDropDown.get(3));
				}
				mv.addObject("womenvendorlst", fd.getWomenVendors());
				mv.addObject("menvendorlst", fd.getMenVendors());
				mv.addObject("sizes", fd.getSizes());
				mv.addObject("server",req.getRequestURL());
			}
			catch(Exception e)
			{
				e.printStackTrace();
			}
		}
		return mv;
		
	}
	@RequestMapping(value="/registerCustomer.htm")
	public ModelAndView registerCustomer(@ModelAttribute("customerRegistration")UserDetail cg,HttpServletRequest req)
	{
		ModelAndView mv=new ModelAndView();
		FrontEndDTO fd=new FrontEndDTO();
		MyAccountDTO myaccountDTO=null;
		try
		{
			String brandstr="";
			try
			{
				brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
			}
			catch(Exception e)
			{
				e.printStackTrace();
				
			}
			long brandid=0L;
			if(brandstr!=null)
			{
				brandid=Long.parseLong(brandstr);
				ArrayList<Object> params = new ArrayList<Object>();
				params.add(cg);
				params.add(brandid);
				HashMap resultMap=(HashMap)RestClientUtil.callService(params, "registerCustomer", "CustomerBusinessService");
				
				if(resultMap!=null&&resultMap.containsKey("result")&&"success".equals((String)resultMap.get("result")))
				{
					Long customerid=(Long)resultMap.get("customerid");
					
					ArrayList<Object> paramstwo = new ArrayList<Object>();
					params.add(customerid);
					myaccountDTO=(MyAccountDTO)RestClientUtil.callService(params, "getMyAccountDetails", "CustomerBusinessService");
					
					mv.setViewName("my_account_info");
					mv.addObject("myaccountdto",myaccountDTO);
					mv.addObject("isMyAccPage",true);
					req.getSession().setAttribute("loggedin", true);
					req.getSession().setAttribute("customerid", customerid);
					mv.addObject("common_css","solestruck.min.css");
					mv.addObject("common_js","solestruckmyaccount.min.js");
					
									
				}
				else
				{
					mv.setViewName("topmenumain");
					mv.addObject("result",resultMap.get("result"));
					mv.addObject("customerRegistration",cg);
				}
				ArrayList<Object> paramsThree = new ArrayList<Object>();
				paramsThree.add(brandid);
				
				if(MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS)!=null)
				   {
				    fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				    log.info("FrontEndDTO Retrived from cache");
				   }
				   else
				   {
					   fd=(FrontEndDTO)RestClientUtil.callService(paramsThree, "getFrontEndDTOFromCache", "ListingBusinessService");
				    if(fd!=null)
				    {
				    	 MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				    }
				    
				   }
				List<Integer> womenDropDown=VeroniqaUtil.getWomenDropDown(fd);
				if(womenDropDown!=null && womenDropDown.size()>0)
				{
					mv.addObject("firstColumn",womenDropDown.get(0));
					mv.addObject("secondColumn",womenDropDown.get(1));
					mv.addObject("thirdColumn",womenDropDown.get(2));
					mv.addObject("fourthColumn",womenDropDown.get(3));
				}
				List<Integer> menDropDown=VeroniqaUtil.getMenDropDown(fd);
				if(menDropDown!=null && menDropDown.size()>0)
				{
					mv.addObject("firstColumnMen", menDropDown.get(0));
					mv.addObject("secondColumnMen", menDropDown.get(1));
					mv.addObject("thirdColumnMen", menDropDown.get(2));
					mv.addObject("fourthColumnMen", menDropDown.get(3));
				}
				mv.addObject("womenvendorlst", fd.getWomenVendors());
				mv.addObject("menvendorlst", fd.getMenVendors());
				mv.addObject("sizes", fd.getSizes());
				mv.addObject("brandid",brandid);
				mv.addObject("customerRegistration",new UserDetail());
				mv.addObject("server",req.getRequestURL());
				log.info("********Customer email id"+cg.getEmailid());
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return mv;
	}
	
	@RequestMapping(value="/createAccount.htm",method=RequestMethod.POST)
	public @ResponseBody HashMap createAccount(@RequestParam("email")String username,@RequestParam("password")String password,HttpServletRequest req, HttpServletResponse res)
	{
		log.info(" inside createAccount method "+username+":Password:"+password);
		ModelAndView mv=new ModelAndView("my_account_info");
		FrontEndDTO fd=new FrontEndDTO();
		MyAccountDTO myaccountDTO=null;
		HashMap resultMap = new HashMap();
		try
		{
			String brandstr="";
			try
			{
				brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
			}
			catch(Exception e)
			{
				e.printStackTrace();
				
			}
			UserDetail lUserDetail=new UserDetail();
			if(username!=null){
			lUserDetail.setEmailid(username.toLowerCase());
			}
			lUserDetail.setPassword(password);
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
					
					params = new ArrayList<Object>();
					params.add(customerid);
					myaccountDTO=(MyAccountDTO)RestClientUtil.callService(params, "getMyAccountDetails", "CustomerBusinessService");
					
					//mv.setViewName("my_account_info");
					req.getSession().setAttribute("username", username);
					mv.addObject("myaccountdto",myaccountDTO);
					mv.addObject("isMyAccPage",true);
					req.getSession().setAttribute("loggedin", true);
					req.getSession().setAttribute("customerid", customerid.toString());
					Cookie cookie=VeroniqaCookieUtil.createNewCookie(req, res,VeroniqaConstants.FACEBOOK,VeroniqaConstants.FACEBOOK,1*24*60*60);
				    res.addCookie(cookie);		
				    Cookie customerCookie=VeroniqaCookieUtil.createNewCookie(req, res,VeroniqaConstants.CUSTOMERID,customerid.toString(),30*24*60*60);
				    res.addCookie(customerCookie);
				}
				else
				{
					//mv.setViewName("topmenumain");
					log.info("Result map ::"+resultMap.get("result"));
					mv.addObject("result",resultMap.get("result"));
					mv.addObject("customerRegistration",lUserDetail);
				}
				ArrayList<Object> paramsThree = new ArrayList<Object>();
				paramsThree.add(brandid);
				
				if(MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS)!=null)
				   {
				    fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				    log.info("FrontEndDTO Retrived from cache");
				   }
				   else
				   {
					   fd=(FrontEndDTO)RestClientUtil.callService(paramsThree, "getFrontEndDTOFromCache", "ListingBusinessService");
				    if(fd!=null)
				    {
				    	 MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				    }
				    
				   }
				List<Integer> womenDropDown=VeroniqaUtil.getWomenDropDown(fd);
				if(womenDropDown!=null && womenDropDown.size()>0)
				{
					mv.addObject("firstColumn",womenDropDown.get(0));
					mv.addObject("secondColumn",womenDropDown.get(1));
					mv.addObject("thirdColumn",womenDropDown.get(2));
					mv.addObject("fourthColumn",womenDropDown.get(3));
				}
				List<Integer> menDropDown=VeroniqaUtil.getMenDropDown(fd);
				if(menDropDown!=null && menDropDown.size()>0)
				{
					mv.addObject("firstColumnMen", menDropDown.get(0));
					mv.addObject("secondColumnMen", menDropDown.get(1));
					mv.addObject("thirdColumnMen", menDropDown.get(2));
					mv.addObject("fourthColumnMen", menDropDown.get(3));
				}
				mv.addObject("womenvendorlst", fd.getWomenVendors());
				mv.addObject("menvendorlst", fd.getMenVendors());
				mv.addObject("sizes", fd.getSizes());
				mv.addObject("brandid",brandid);
				mv.addObject("server",req.getRequestURL());
				mv.addObject("customerRegistration",new UserDetail());
				log.info("********Customer email id"+lUserDetail.getEmailid());
				mv.addObject("common_css","solestruck.min.css");
				mv.addObject("common_js","solestruckmyaccount.min.js");
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info(" Seems to be an exception while creating an account : "+e.getMessage());
		}
		
		return resultMap;
	}
	
	@RequestMapping(value="/login.htm",method=RequestMethod.POST)
	public @ResponseBody HashMap login(@RequestParam("username")String username,@RequestParam("password")String password,HttpServletRequest req,HttpServletResponse res)
	{
		HashMap resultMap=null;
		try
		{
			ArrayList<Object> params = new ArrayList<Object>();
			if(username!=null){
				params.add(username.toLowerCase());
			}
			params.add(password);
			resultMap=(HashMap)RestClientUtil.callService(params, "login", "CustomerBusinessService");
			
			
			String login=(String)resultMap.get("login");
			if(login!=null&&"success".equals(login))
			{
				req.getSession().setAttribute("username", username);
				req.getSession().setAttribute("loggedin", true);
				req.getSession().setAttribute("customerid", resultMap.get("customerid").toString());
				String customerId=null;
				if(resultMap.get("customerid")!=null)
					customerId=resultMap.get("customerid").toString();
				Cookie cookie=VeroniqaCookieUtil.createNewCookie(req, res,VeroniqaConstants.FACEBOOK,VeroniqaConstants.FACEBOOK,1*24*60*60);
			    res.addCookie(cookie);
			    Cookie customerCookie=VeroniqaCookieUtil.createNewCookie(req, res,VeroniqaConstants.CUSTOMERID,customerId,30*24*60*60);
			    res.addCookie(customerCookie);
				MemcachedUtil.remove("HOMEPAGE", MemcachedConstants.PAGE_CACHE);
			}
			else
			{
				req.getSession().setAttribute("loggedin", false);
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info(" Seems to be an exception while loging in "+e.getMessage());
		}
		return resultMap;
	}
	
	@RequestMapping(value="/instagram.htm",method=RequestMethod.GET)
	public void instagram(HttpServletRequest req,HttpServletResponse resp)
	{
		try
		{
			String code			=	req.getParameter("code");
			
			if(code == null)
			{
				String url		=	"https://api.instagram.com/oauth/authorize/?client_id=f90b48725f844e61bb2672d83011fcd8&redirect_uri=http://testing.solestruck.com/instagram.htm&response_type=code";
				
				resp.sendRedirect(url);
			}
			else
			{
				String urlParameters = "client_id=f90b48725f844e61bb2672d83011fcd8&client_secret=8a3c35a329ad44fa82c0f006fc48a2d7&grant_type=authorization_code&redirect_uri=http://testing.solestruck.com/instagram.htm&code="+code+"";
				String request = "https://api.instagram.com/oauth/access_token";
				URL url = new URL(request); 
				HttpURLConnection connection = (HttpURLConnection) url.openConnection();           
				connection.setDoOutput(true);
				connection.setDoInput(true);
				connection.setInstanceFollowRedirects(false); 
				connection.setRequestMethod("POST"); 
				connection.setRequestProperty("Content-Type", "application/x-www-form-urlencoded"); 
				connection.setRequestProperty("charset", "utf-8");
				connection.setRequestProperty("Content-Length", "" + Integer.toString(urlParameters.getBytes().length));
				connection.setUseCaches (false);

				DataOutputStream wr = new DataOutputStream(connection.getOutputStream ());
				wr.writeBytes(urlParameters);
				wr.flush();
				wr.close();
				
				
				BufferedReader in 	=	 new BufferedReader(new InputStreamReader(connection.getInputStream()));
				String inputLine 	=	 "";
				
				StringBuilder builder = new StringBuilder();
				String aux = "";

				while ((aux = in.readLine()) != null) {
				    builder.append(aux);
				}

				String text = builder.toString();
				
				connection.disconnect();
				
				JSONObject json = new JSONObject(text);
				JSONObject user = new JSONObject(json.getString("user"));
			
				
				if(user != null)
				{

					Cookie cookie=VeroniqaCookieUtil.createNewCookie(req, resp,VeroniqaConstants.INSTAGRAM,VeroniqaConstants.INSTAGRAM,1*24*60*60);
					resp.addCookie(cookie);
				    Cookie cookieInstagram=VeroniqaCookieUtil.createNewCookie(req, resp, VeroniqaConstants.INSTAGRAMLOGIN,VeroniqaConstants.INSTAGRAMLOGIN,1*24*60*60);
				    resp.addCookie(cookieInstagram);
					String email    = user.getString("username");
					String fname    = user.getString("full_name");
					String lname    = "";
					String image	= user.getString("profile_picture");
					String Status						 = "";
					
					if(req.getSession().getAttribute("status")!=null)
					{
						Status = (String) req.getSession().getAttribute("status");
					}
					
					log.info(" INstagram email :: "+email+" INstagram  firstName :: "+fname+" INstagram lastName :: "+lname);
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
						
						
						if(customer!=null && customer.getKey() != null)
						{
							log.info("customer is not null");
							value = "true";
							req.getSession().setAttribute("loggedin", true);
							

							log.info(" Existing Instagram user ");
							Long customerid = customer.getKey().getId();
							
							log.info("the customer id is :: " +customerid);
							log.info(" customer id "+customerid);	
							req.getSession().setAttribute("customerid", customerid.toString());
							List<Country> retVal	  = null;
							List serviceParams		  = new ArrayList();
							MyAccountDTO myaccountDTO = null;
							FrontEndDTO fd			  = new FrontEndDTO();
							String brandstr			  = "";
							
//							if(Status.equals("home"))
//							{
								log.info(" Existing Instagram user  home page ");
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
								
//								if(currentpage == null || (currentpage != null && (currentpage.equalsIgnoreCase(serverName+"/customerservice") || currentpage.equalsIgnoreCase(serverName+"/returns") || currentpage.equalsIgnoreCase(serverName+"/orderstatus") ||currentpage.equalsIgnoreCase(serverName+"/accountinfo"))))
//								{
//									log.info("coming inside the condition");
//									resp.sendRedirect("/MyAccount.htm");
//								}
//								else
//								{
//									log.info("coming to the else of the condition");
//									resp.sendRedirect((String) req.getSession().getAttribute("currentpage"));
//								}
								
								
								req.getSession().setAttribute("loggedin", true);
								req.getSession().setAttribute("customerid", customerid.toString());
								log.info("customer id :: "+req.getSession().getAttribute("customerid"));
								
								resp.sendRedirect("/");
//							}
//							else if(Status.equals("checkout"))
//							{
//									log.info(" Existing facebook user  checkout page ");
//									mv = new ModelAndView("CheckoutAccountInfo");
//									CheckoutController ck = new CheckoutController();
//									String cusId="";
//									if(req.getSession().getAttribute("customerid")!=null)
//									{
//										cusId=req.getSession().getAttribute("customerid").toString();
//										req.getSession().setAttribute("email", "");
//										req.getSession().setAttribute("fname", "");
//										req.getSession().setAttribute("lname", "");
//									}
//									log.info("*******  Inside CheckoutSignIn And Customer ID is  ***************  : "  +cusId);
//									if(cusId!=null && !cusId.equalsIgnoreCase(""))
//									{
//										log.info("Customer ID Found in Session for Checkout-SignIn!");
//										int checkout_step=2;
//										mv=new ModelAndView(new RedirectView("/checkout/account-info.htm"));								
//								}						
//							}
//							else if(Status.equalsIgnoreCase("wishlist") || Status.equalsIgnoreCase("sale") || Status.equalsIgnoreCase("review"))
//							{
//								log.info("  Existing facebook user  in to the wishlist/sale condition "+Status);
//								 if(req.getSession().getAttribute("currentpage")!=null)
//							       {
//							        res.sendRedirect((String)req.getSession().getAttribute("currentpage"));   
//							       }
//								 req.getSession().setAttribute("loggedin", true);
//								 req.getSession().setAttribute("customerid", customerid.toString());
//							}						
						
							
						}
						else
						{
							log.info(" New Instagram user ");
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
//								if(Status.equals("home"))
//								{
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
									
									
//									if(currentpage == null || (currentpage != null && (currentpage.equalsIgnoreCase(serverName+"/customerservice") || currentpage.equalsIgnoreCase(serverName+"/returns") || currentpage.equalsIgnoreCase(serverName+"/orderstatus") ||currentpage.equalsIgnoreCase(serverName+"/accountinfo"))))
//									{
//										log.info("coming inside the condition");
//										resp.sendRedirect("/MyAccount.htm");
//									}
//									else
//									{
//										log.info("coming to the else of the condition");
//										resp.sendRedirect((String) req.getSession().getAttribute("currentpage"));
//									}
									
									//res.sendRedirect((String) req.getSession().getAttribute("currentpage"));
									req.getSession().setAttribute("loggedin", true);
									req.getSession().setAttribute("customerid", customerid.toString());
									
									resp.sendRedirect("/");
//								}
							
//									else if(Status.equalsIgnoreCase("checkout"))
//									{
//										log.info("  New facebook user check out page ");
//										/*mv = new ModelAndView("CheckoutAccountInfo");*/
//										CheckoutController ck = new CheckoutController();
//										String cusId="";
//										if(req.getSession().getAttribute("customerid")!=null)
//											cusId=req.getSession().getAttribute("customerid").toString();
//										
//										log.info("*******  Inside CheckoutSignIn And Customer ID is  ***************  : "  +cusId);
//										if(cusId!=null && !cusId.equalsIgnoreCase(""))
//										{
//											log.info("Customer ID Found in Session for Checkout-SignIn!");
//											int checkout_step=2;
//											mv=new ModelAndView(new RedirectView("/checkout/account-info.htm"));								
//										}
//									}
//									else if(Status.equalsIgnoreCase("wishlist") || Status.equalsIgnoreCase("sale") || Status.equalsIgnoreCase("review"))
//									{
//										log.info(" New facebook user  inside wishlist/sale condition " +Status);
//										 if(req.getSession().getAttribute("currentpage")!=null)
//									       {
//									        res.sendRedirect((String)req.getSession().getAttribute("currentpage"));   
//									       }
//										 req.getSession().setAttribute("loggedin", true);
//										 req.getSession().setAttribute("customerid", customerid.toString());
//									}						
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
				    		resp.sendRedirect("/");
				    	else if(Status.equalsIgnoreCase("review"))
				    		resp.sendRedirect((String)req.getSession().getAttribute("currentpage"));
//				    	else if(Status.equalsIgnoreCase("checkout"))
//				    		mv=new ModelAndView(new RedirectView("/checkout/sign-in.htm"));
					}
				   
				
				}
			
				
				
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
	}
	
	
	@RequestMapping(value="/logout.htm",method=RequestMethod.GET)
	public @ResponseBody Boolean logout(HttpServletRequest req,HttpServletResponse res)
	{
		Boolean flag=false;
		try
		{
			
			try {
				
				req.getSession().setAttribute("accessToken", null);
				req.getSession().setAttribute("loggedin", false);
				req.getSession().setAttribute("customerid", "");
				req.getSession().setAttribute("status", null);
				req.getSession().setAttribute("email", null);
				req.getSession().setAttribute("fname", null);
				req.getSession().setAttribute("lname", null);
				
				String orderId=VeroniqaCookieUtil.getCookieValue(req, VeroniqaConstants.ORDER_ID);
				
				MemcachedUtil.remove(MemcachedConstants.CHECKOUT_DETAILS+orderId, MemcachedConstants.SHOPPING_CART_NAMESPACE);
				
				VeroniqaCookieUtil.deleteCookie(req, res,VeroniqaConstants.FACEBOOK);
				VeroniqaCookieUtil.deleteCookie(req, res, VeroniqaConstants.FBLOGIN);
				VeroniqaCookieUtil.deleteCookie(req, res, VeroniqaConstants.CUSTOMERID);
				flag=true;
			} catch (Exception e) {
				e.printStackTrace();
				flag=false;
			}
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info(" Seems to be an exception while logout: "+e.getMessage());
		}
		return flag;
	}
	
	@RequestMapping(value="/mylogout.htm",method=RequestMethod.GET)
	public ModelAndView myaccountLogout(HttpServletRequest req,HttpServletResponse res)
	{
		ModelAndView mv=new ModelAndView("Home");
		try
		{
			req.getSession().setAttribute("accessToken", null);
			req.getSession().setAttribute("loggedin", false);
			req.getSession().setAttribute("customerid", "");
			req.getSession().setAttribute("status", null);
			req.getSession().setAttribute("email", null);
			req.getSession().setAttribute("fname", null);
			req.getSession().setAttribute("lname", null);
			VeroniqaCookieUtil.deleteCookie(req, res,VeroniqaConstants.FACEBOOK);
			res.sendRedirect("/");
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info(" Seems to be an exception while logout: "+e.getMessage());
		}
		return mv;
	}
	
	@RequestMapping(value="/MyAccount.htm",method=RequestMethod.GET)
	public ModelAndView loadMyAccount(HttpServletRequest req,HttpServletResponse res) throws Exception
	{
		String customerid		  = null;
		ModelAndView mv			  = new ModelAndView("my_account_info");
		List<Country> retVal	  = null;
		List serviceParams		  = new ArrayList();
		MyAccountDTO myaccountDTO = null;
		FrontEndDTO fd			  = new FrontEndDTO();
		String brandstr			  = "";
		Long brandId			  = 0l;
		try
		{
			if(req.getSession().getAttribute("customerid")!=null && req.getSession().getAttribute("customerid")!=""){
				customerid				  = req.getSession().getAttribute("customerid").toString();
			}
			else
			{
				res.sendRedirect("/");
			}
		
		log.info(" customer id "+customerid);
		brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		
		if(brandstr!=null)
		{
			brandId=Long.parseLong(brandstr);
			mv.addObject("brandid",brandId);
			
				ArrayList<Object> params = new ArrayList<Object>();
				if(customerid!=null)
				{
					params.add(Long.parseLong(customerid));
					myaccountDTO=(MyAccountDTO)RestClientUtil.callService(params, "getMyAccountDetails", "CustomerBusinessService");
				}
				if(req.getSession().getAttribute("loggedin")!=null && (Boolean)req.getSession().getAttribute("loggedin") && VeroniqaUtil.getDiscountProgramForFB()!=null && !VeroniqaUtil.getDiscountProgramForFB().getProgramTypeName().equalsIgnoreCase("order"))
				{
					Cookie cookie=VeroniqaCookieUtil.createNewCookie(req, res,VeroniqaConstants.FACEBOOK,VeroniqaConstants.FACEBOOK,1*24*60*60);
					res.addCookie(cookie);
				}
			    
				ArrayList<Object> paramsThree = new ArrayList<Object>();
				paramsThree.add(brandId);
				
				if(MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS)!=null)
			    {
				    fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				    log.info("FrontEndDTO Retrived from cache");
			    }
			    else
			    {
					fd=(FrontEndDTO)RestClientUtil.callService(paramsThree, "getFrontEndDTOFromCache", "ListingBusinessService");
				    if(fd!=null)
				    {
				    	 MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				    }
				    
				}
				try
				{
					List<Event> eventList=null;
					eventList=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
					
					if(eventList==null)
					{
						ArrayList<Object> objects=new ArrayList<Object>();
					
						eventList=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
						if(eventList!=null && eventList.size()>0)
							MemcachedUtil.set("onLiveEvents", eventList,  MemcachedConstants.EVENTS_FEATURES);
						
					}
					if(eventList!=null&&eventList.size()>0)
						mv.addObject("eventList",eventList);
					
					log.info("EventList size is "+eventList.size()+"and "+eventList.get(0).getEventName());
					
					
				}
				catch(Exception e)
				{
					log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
				}

				serviceParams.add(brandId);
				retVal=(List<Country>)RestClientUtil.callService(serviceParams,"getAllEnabledCountries","ShippingBusinessService");
				List<Integer> womenDropDown=VeroniqaUtil.getWomenDropDown(fd);
				if(womenDropDown!=null && womenDropDown.size()>0)
				{
					mv.addObject("firstColumn",womenDropDown.get(0));
					mv.addObject("secondColumn",womenDropDown.get(1));
					mv.addObject("thirdColumn",womenDropDown.get(2));
					mv.addObject("fourthColumn",womenDropDown.get(3));
				}
				List<Integer> menDropDown=VeroniqaUtil.getMenDropDown(fd);
				if(menDropDown!=null && menDropDown.size()>0)
				{
					mv.addObject("firstColumnMen", menDropDown.get(0));
					mv.addObject("secondColumnMen", menDropDown.get(1));
					mv.addObject("thirdColumnMen", menDropDown.get(2));
					mv.addObject("fourthColumnMen", menDropDown.get(3));
				}
				
				List<OrderDTO> oldOrderList=null;
				if(myaccountDTO.getOldOrderList().size()>0){
					oldOrderList=myaccountDTO.getOldOrderList();
					
					for(OrderDTO lOrderDTO:oldOrderList)
					{
						if(lOrderDTO.getShippingMethod()!=null){
							lOrderDTO.setTrackingURL(getTrackingURLForShippingMail(lOrderDTO.getTrackingNo(), lOrderDTO.getShippingMethod()));
						}
					}
					myaccountDTO.setOldOrderList(oldOrderList);
				}
				
				
				mv.addObject("womenvendorlst", fd.getWomenVendors());
				mv.addObject("menvendorlst", fd.getMenVendors());
				mv.addObject("sizes", fd.getSizes());
				mv.addObject("myaccountdto",myaccountDTO);
				mv.addObject("isMyAccPage",true);
				//mv.addObject("customerRegistration",new UserDetail() );
				mv.addObject("server", req.getRequestURL());
				mv.addObject("serverName", req.getServerName());
				Collections.sort(retVal);
				mv.addObject("countryList",retVal);	
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("Exception in loadMyAccount"+e.getMessage());
		}
		finally{
			
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestruckmyaccount.min.js");
		}
		
		return mv;
	}
	/*@RequestMapping(value="/updateShippingAddress.htm",method=RequestMethod.POST)
	public @ResponseBody ShippingAddress updateShippingAddress(@RequestParam("id")Long id,@RequestParam("fullName")String fullName,@RequestParam("address1")String address1,@RequestParam("address2")String address2,@RequestParam("city")String city,@RequestParam(value="state",required=false)String state,@RequestParam(value="province",required=false)String province,@RequestParam("zipcode")String zipcode,@RequestParam("country")String country)
	{
		ShippingAddress shippingAddress=new ShippingAddress();
		ShippingAddressClient shippingAddressService=new ShippingAddressClient();
		
		try
		{
			String firstName=fullName.split(" ")[0];
			String lastName=fullName.replaceAll(firstName, "");
			shippingAddress.setFirstName(firstName);
			shippingAddress.setLastName(lastName);
			shippingAddress.setStreet1(address1);
			shippingAddress.setStreet2(address2);
			shippingAddress.setStreet3(city);
			if(state!=null)
				shippingAddress.setState(state);
			else
				shippingAddress.setState("");
			if(province!=null)
				shippingAddress.setProvince(province);
			else
				shippingAddress.setProvince("");
			log.info("State in Shipping Address"+state);
			shippingAddress.setCountry(country);
			shippingAddress.setZipCode(zipcode);
			shippingAddress=shippingAddressService.updateShippingAddressByIdClient(shippingAddress, id);
			
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return shippingAddress;		
	}*/
	/*@RequestMapping(value="/updateBillingAddress.htm",method=RequestMethod.POST)
	public @ResponseBody BillingAddress updateBillingAddress(@RequestParam("id")Long id,@RequestParam("fullName")String fullName,@RequestParam("address1")String address1,@RequestParam("address2")String address2,@RequestParam("city")String city,@RequestParam(value="state",required=false)String state,@RequestParam(value="province",required=false)String province,@RequestParam("zipcode")String zipcode,@RequestParam("country")String country)
	{
		BillingAddress billingAddress=new BillingAddress();
		BillingAddressClient billingAddressService=new BillingAddressClient();
		
		try
		{
			String firstName=fullName.split(" ")[0];
			String lastName=fullName.replaceAll(firstName, "");
			billingAddress.setFirstName(firstName);
			billingAddress.setLastName(lastName);
			billingAddress.setStreet1(address1);
			billingAddress.setStreet2(address2);
			billingAddress.setStreet3(city);
			if(state!=null)
				billingAddress.setState(state);
			else
				billingAddress.setState("");
			if(province!=null)
				billingAddress.setProvince(province);
			else
				billingAddress.setProvince("");
			billingAddress.setCountry(country);
			billingAddress.setZipCode(zipcode);
			billingAddress=billingAddressService.updateBillingAddressById(billingAddress, id);
			
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return billingAddress;		
	}*/
	
	@RequestMapping(value="/changePassword.htm",method=RequestMethod.POST)
	public @ResponseBody HashMap changePassword(@RequestParam("emailid")String emailid,@RequestParam("password")String password)
	{
		log.info("------------>>>>>>>>>>>>> Inside changePassword ------------>>>>>>>>>>>>");
		HashMap retVal=null;
		//CustomerServiceClient customerService=new CustomerServiceClient();
		try
		{
			
			//retVal=customerService.changePasswordClient(emailid, password);
			ArrayList<Object> params = new ArrayList<Object>();
			params.add(emailid);
			params.add(password);
			
			retVal=(HashMap)RestClientUtil.callService(params, "changePassword", "CustomerBusinessService");
			
			ArrayList<Object> paramsForGetCustomer = new ArrayList<Object>();
			paramsForGetCustomer.add(emailid);
			Customer customer=(Customer)RestClientUtil.callService(paramsForGetCustomer, "getCustomerByOnlyEmailId", "CustomerBusinessService");
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info(" Seems to be an exception while change password "+e.getMessage());
		}
		return retVal;
		
		
	}
	
	@RequestMapping(value="/getOrderInvoice.htm",method=RequestMethod.GET)
	public ModelAndView getOrderInvoice(@RequestParam("orderId")String orderId)
	{
		log.info("inside getOrderInvoice method ");
		ModelAndView mv						  = new ModelAndView("orderInvoice");
		String invoiceContent				  = null;
		OrderInfoPageDTO orderInfoDTO		  = new OrderInfoPageDTO();
		SimpleDateFormat simpleDateFormat 	  = new SimpleDateFormat("MM/dd/yyyy");
		
		try
		{
				ArrayList<Object> clientParams  = new ArrayList<Object>();
				clientParams.add(Long.parseLong(orderId));
				orderInfoDTO					=   (OrderInfoPageDTO)RestClientUtil.callService(clientParams, "getOrderInfoPageDetailsForInvoice", "OrderBusinessService");
				BillingAddress baddr			=	orderInfoDTO.getBillingAddressDTO();
				ShippingAddress saddr			=	orderInfoDTO.getShippingAddressDTO();
				List<OrderLineDTO> orderlines	=	orderInfoDTO.getOrderDetailDTO().getOrderLines();
				
				HashMap mapp					=   new HashMap();
				mapp.put("orderNumber",orderId.toString());
				mapp.put("shipvia",orderInfoDTO.getOrderDetailDTO().getShippingMethod());
				mapp.put("billingAddress1", baddr.getFirstName()+" "+baddr.getLastName());
				mapp.put("billingAddress2", baddr.getStreet1());
				mapp.put("billingAddress3", baddr.getStreet2());
				if(baddr.getCountry()!=null && baddr.getCountry().equals("US"))
				{
					mapp.put("billingAddress4", baddr.getStreet3()+", "+baddr.getStateName()+" "+baddr.getZipCode());
					mapp.put("billingAddress7",baddr.getCountryName());
				}
				else if(baddr.getCountry()!=null && baddr.getCountry().equals("CA")){
					mapp.put("billingAddress4", baddr.getStreet3()+", "+baddr.getStateName()+", "+baddr.getCountryName()+" "+baddr.getZipCode());
				}
				else
				{
					mapp.put("billingAddress4",baddr.getStreet3());
					mapp.put("billingAddress5",baddr.getProvince());
					mapp.put("billingAddress6",baddr.getCountryName()+" "+baddr.getZipCode());
				}
			
				mapp.put("shippingAddress1", saddr.getFirstName()+" "+saddr.getLastName());
				mapp.put("shippingAddress2", saddr.getStreet1());
				mapp.put("shippingAddress3", saddr.getStreet2());
				if(saddr.getCountry()!=null && saddr.getCountry().equals("US"))
				{
					mapp.put("shippingAddress4", saddr.getStreet3()+", "+saddr.getStateName()+" "+saddr.getZipCode());
				}
				else if(saddr.getCountry()!=null && saddr.getCountry().equals("CA"))
				{
					mapp.put("shippingAddress4", saddr.getStreet3()+", "+saddr.getStateName()+","+saddr.getCountryName()+" "+saddr.getZipCode());
				}
				else
				{
					mapp.put("shippingAddress4",saddr.getStreet3());
					mapp.put("shippingAddress5",saddr.getProvince());
					mapp.put("shippingAddress6",saddr.getCountryName()+" "+saddr.getZipCode());
				}
				if(orderInfoDTO.getOrderDetailDTO().getOrderPlacedDate()!=null)
				{
					orderInfoDTO.getOrderDetailDTO().setOrderPlacedDate(this.convertFromUTC(orderInfoDTO.getOrderDetailDTO().getOrderPlacedDate(), "PST"));
				}
				
				String date=new String(simpleDateFormat.format(orderInfoDTO.getOrderDetailDTO().getOrderPlacedDate()));
				//String date=new String(simpleDateFormat.format(orderInfoDTO.getOrderDetailDTO().setOrderPlacedDate(this.convertFromUTC(orderInfoDTO.getOrderDetailDTO().getOrderPlacedDate(), "PST"))));
				
				mapp.put("orderlines", orderlines);
				mapp.put("totalAmount", orderInfoDTO.getOrderDetailDTO().getTotalOrderPrice());
				mapp.put("dateOfPurchase",date);
				List<OrderLineDTO> orderLines=orderInfoDTO.getOrderDetailDTO().getOrderLines();
				StringBuffer orderLinesText = new StringBuffer();
				StringBuffer returnLabel	= new StringBuffer();
				HashMap<Long, OrderLineDTO> orderLineMap=new HashMap<Long, OrderLineDTO>();
				
				if(orderLines!=null)
				{	
					for(OrderLineDTO orderLine:orderLines)
					{
//						if( && VeroniqaUtil.getDiscountProgramForFB().getWebDiscountOn())
//							orderLine.setUnitPriceAtPurchase(0.0);
						log.info("get unit price :: "+orderLine.getUnitPriceAtPurchase());
						if(orderLine.getVendorname().equalsIgnoreCase("solestruck magazine") && orderLine.getUnitPriceAtPurchase()==null)
						{
							orderLinesText.append("<tr><td>"+orderLine.getWarehouseLocation()+"</td><td>"+orderLine.getVendorname()+" - "+orderLine.getProductname()+" - "+orderLine.getColor()+"</td><td>"+orderLine.getSize().replace(".0","")+"</td><td>"+orderLine.getSelectedQty()+"</td><td>"+"$"+getRoundedValue(orderLine.getUnitPriceAtPurchase())+"</td><td>"+"$"+getRoundedValue(orderLine.getUnitPriceAtPurchase())+"</td></tr>");
						}
						else
						{
							orderLinesText.append("<tr><td>"+orderLine.getWarehouseLocation()+"</td><td>"+orderLine.getVendorname()+" - "+orderLine.getProductname()+" - "+orderLine.getColor()+"</td><td>"+orderLine.getSize().replace(".0","")+"</td><td>"+orderLine.getSelectedQty()+"</td><td>"+"$"+Math.round((orderLine.getUnitPriceAtPurchase())*100)/100.0d+"</td><td>"+"$"+Math.round((orderLine.getUnitPriceAtPurchase())*100)/100.0d+"</td></tr>");
						}
					}
				}
				
				if(orderLines!=null)
				{
					for(OrderLineDTO orderLine:orderLines)
					{
						if(orderLine.getVendorname().equalsIgnoreCase("solestruck magazine") && orderLine.getUnitPriceAtPurchase()==null)
						{
							returnLabel.append("<tr><td></td><td>"+orderLine.getVendorname()+" - "+orderLine.getProductname()+" - "+orderLine.getColor()+"</td><td>"+orderLine.getSize().replace(".0","")+"</td><td>"+"$"+getRoundedValue(orderLine.getUnitPriceAtPurchase())+"</td></tr>");
						}
						else
						{
							returnLabel.append("<tr><td></td><td>"+orderLine.getVendorname()+" - "+orderLine.getProductname()+" - "+orderLine.getColor()+"</td><td>"+orderLine.getSize().replace(".0","")+"</td><td>"+"$"+Math.round((orderLine.getUnitPriceAtPurchase())*100)/100.0d+"</td></tr>");
						}
						
					}
				}
				
				//System.out.println(" lservername :"+VeroniqaConstants.LIVE_FRONTEND_URL_FOR_MAIL);
				mapp.put("orderLines",orderLinesText.toString());
				mapp.put("returnLabel",returnLabel.toString()); 
				mapp.put("lServerName",VeroniqaConstants.LIVE_FRONTEND_URL_FOR_MAIL);
				
				ArrayList<Object> params = new ArrayList<Object>();
				
				params.add(Long.parseLong(EnvironmentUtil.getEnvironmentValue("ORDER_INVOICE")));
				
				InvoiceTemplate emailTemp=(InvoiceTemplate)RestClientUtil.callService(params, "getInvoiceTemplateById", "InvoiceTemplateBusinessService");
				
				String textMsg=emailTemp.getInvoiceContent();
				
				
				invoiceContent=VelocityUtil.getMappedString(mapp,textMsg);
				
				mv.addObject("invoice",invoiceContent);
				
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info(" Seems to be an exception while loading my acount page "+e.getMessage());
		}
		return mv;
	}
	public static String getRoundedValue(Double price)
	{
		String strPrice=price==null?"0.0":Double.toString(price);
		BigDecimal ret=new BigDecimal(strPrice);
		ret=ret.setScale(2, BigDecimal.ROUND_HALF_UP);
		DecimalFormat df=new DecimalFormat("0.00");
		return df.format(ret.doubleValue());
		
	}
	
	public static Date convertFromUTC(Date utcdate,String zoneIDToConvert)
	{
		Date retval=null;
		try
		{
			TimeZone pstZone=TimeZone.getTimeZone(zoneIDToConvert);
			retval=new Date(utcdate.getTime()+pstZone.getOffset(utcdate.getTime()));
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return utcdate;
			
		}
		
		return retval;
	}
	@RequestMapping(value="/isEmailAlreadyExists.htm",method=RequestMethod.GET)
	public @ResponseBody String isEmailAlreadyExists(@RequestParam("email")String email)
	{
		String retVal="false";
		try
		{
			ArrayList<Object> params = new ArrayList<Object>();
			if(email!=null){
				params.add(email.toLowerCase());
			}
			
			Customer customer=(Customer)RestClientUtil.callService(params, "getCustomerByOnlyEmailId", "CustomerBusinessService");
			
			
			if(customer!=null)
			{
				retVal="true";
			}
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info(" Seems to be an exception while isEmailAlreadyExists : "+e.getMessage());
		}
		return retVal;
	}
	@RequestMapping(value="/resetPassword.htm",method=RequestMethod.GET)
	public @ResponseBody String resetPassword(@RequestParam("email")String emailid)
	{
		String retVal="This email id  is not  registered one  in our site.";
		try
		{
			log.info("*************************  emailid is   *****************************  : " +emailid);
			ArrayList<Object> params = new ArrayList<Object>();
			if(emailid!=null)
			{
				params.add(emailid);
			}
			
			Customer customer=(Customer)RestClientUtil.callService(params, "getCustomerByOnlyEmailId", "CustomerBusinessService");
			
			if(customer!=null)
			{
				
				String password=customer.getPassword();
				String firstName=customer.getFirstName();
				Long accsessString=customer.getKey().getId();
				
				
				log.info("*************************  accsessString is   *****************************  : " +accsessString);
				log.info("*********************   EnvironmentUtil.getEnvironmentValue of Forgor_Password is  ********************** : " +EnvironmentUtil.getEnvironmentValue("Forgot_Password"));
				List<Object> serviceParams = new ArrayList<Object>();
				customer.setResetPassword(true);
				serviceParams.add(customer);
				RestClientUtil.callService(serviceParams, "updateCustomer", "CustomerBusinessService");
				Boolean resetPassword=customer.getResetPassword();
				log.info("*************************  resetPassword is   *****************************  : " +resetPassword);
				List<Object> list  = new ArrayList<Object>();
				list.add(Long.parseLong(EnvironmentUtil.getEnvironmentValue("Forgot_Password")));
				
				EmailTemplate emailTemp=(EmailTemplate)RestClientUtil.callService(list, "getEmailTemplateById", "EmailTemplateBusinessService");
				String textMsg=emailTemp.getTextMessage();
				String htmlMsg=emailTemp.getHtmlMessage();
				//String lServerName=VeroniqaConstants.LIVE_FRONTEND_URL_FOR_MAIL;
				HashMap velocityReferences=new HashMap();
				velocityReferences.put("FirstName", firstName);
				velocityReferences.put("emailId", emailid);
				velocityReferences.put("Password", password);
				velocityReferences.put("accsessString", accsessString);
				velocityReferences.put("resetpassword", resetPassword);
				//velocityReferences.put("ImageServername", "http://images2.solestruck.com");
				velocityReferences.put("ImageServername", "http://commondatastorage.googleapis.com/images2.solestruck.com");
				velocityReferences.put("lServerName", VeroniqaConstants.LIVE_FRONTEND_URL_FOR_MAIL);
				
				String htmlMailContent=VelocityUtil.getMappedString(velocityReferences,htmlMsg);
				String textContent=VelocityUtil.getMappedString(velocityReferences, textMsg);
				EmailDTO emailDTO=new EmailDTO();
				HashMap<String,String> orgToList=new HashMap<String, String>();
				orgToList.put(emailid,firstName);
				emailDTO.setTo(orgToList);
				emailDTO.setFrom(VeroniqaConstants.CUSTOMER_SERVICE_MAIL);			
				emailDTO.setFromName("Customer Service");
				emailDTO.setSubject("Solestruck.com - Your Link to set up a New Password");			
				emailDTO.setTextMessage(textContent);
				emailDTO.setHtmlMessage(htmlMailContent);	
				EmailClientService.sendMailtoMailService(emailDTO);
				retVal="Your password has been sent to your email.";
			}
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info(" Seems to be an exception while resetPassword  "+e.getMessage());
		}
		return retVal;
	}
	
	@RequestMapping(value="/isLoggedIn.htm",method=RequestMethod.GET)
	public @ResponseBody String isLoggedIn(HttpServletRequest req)
	{
		boolean loggedIn = false;
		String customerid=null;
		try
		{
			if(req.getSession().getAttribute("loggedin")!=null)
			{
				 loggedIn=(Boolean)req.getSession().getAttribute("loggedin");
			}
			
			if(loggedIn)
			{
				customerid=req.getSession().getAttribute("customerid").toString();
				
			}
		}
		catch (Exception e)
		{
			e.printStackTrace();
			log.info(" Seems to be an exception while isLoggedIn "+e.getMessage());
		}
		return customerid;
	}
	
	@RequestMapping(value="/savemyaccountdetails.htm",method=RequestMethod.POST)
	public @ResponseBody String updateByAccountDetails(@RequestBody AccountInfoDTO accountInfoDTO)
	{
		log.info("inside updateByAccountDetails method ! ");
			String response							 = null;
		try
		{
			String emailid 						  	 = accountInfoDTO.getMailId();
			String password						  	 = accountInfoDTO.getPassword();
			String phoneNumber						 = accountInfoDTO.getPhoneNumber();
			BillingAddressDTO lBillingAddressDTO  	 = accountInfoDTO.getBillingInfo();
			ShippingAddressDTO lshiShippingAddressDTO= accountInfoDTO.getShippingInfo();
			
			String bid                         	     = lBillingAddressDTO.getId().toString();
			String bfirstName                        = lBillingAddressDTO.getFirstName();
			String blastName                         = lBillingAddressDTO.getLastName();
			String baddress1                         = lBillingAddressDTO.getStreet1();
			String baddress2                         = lBillingAddressDTO.getStreet2();
			String bcity                             = lBillingAddressDTO.getStreet3();
			String bstate                            = lBillingAddressDTO.getState();
			String bstateName						 = lBillingAddressDTO.getStateName();
			String bprovince					     = lBillingAddressDTO.getProvince();
			String bcountry                          = lBillingAddressDTO.getCountry();
			String bcountryName						 = lBillingAddressDTO.getCountryName();
			String bzipcode                          = lBillingAddressDTO.getZipCode();
			
			String sid                         	     = lshiShippingAddressDTO.getId().toString();
			String sfirstName                        = lshiShippingAddressDTO.getFirstName();
			String slastName                         = lshiShippingAddressDTO.getLastName();
			String saddress1                         = lshiShippingAddressDTO.getStreet1();
			String saddress2                         = lshiShippingAddressDTO.getStreet2();
			String scity                             = lshiShippingAddressDTO.getStreet3();
			String sstate                            = lshiShippingAddressDTO.getState();
			String sstateName						 = lshiShippingAddressDTO.getStateName();
			String sprovince					     = lshiShippingAddressDTO.getProvince();
			String scountry                          = lshiShippingAddressDTO.getCountry();
			String scountryName                      = lshiShippingAddressDTO.getCountryName();
			String szipcode                          = lshiShippingAddressDTO.getZipCode();
			BillingAddress billingAddress			 = new BillingAddress();
			ShippingAddress shippingAddress			 = new ShippingAddress();
			HashMap retVal							 = null;
			
			
			log.info("emailid"+emailid+":password:"+password+":phoneNumber:"+phoneNumber);
			log.info("bid"+bid+":bfirstName:"+bfirstName+":blastName:"+blastName+":baddress1:"+baddress1+":baddress2:"+baddress2+":bcity:"+bcity+":bstate:"+bstate+":bstateName:"+bstateName+":bprovince:"+bprovince+":bcountry:"+bcountry+":bcountryName:"+bcountryName+":bzipcode:"+bzipcode);
			log.info("sid"+sid+":sfirstName:"+sfirstName+":slastName:"+slastName+":saddress1:"+saddress1+":asddress2:"+saddress2+":scity:"+scity+":sstate:"+sstate+":sstateName:"+sstateName+":sprovince:"+sprovince+":scountry:"+scountry+":scountry name:"+scountryName+":szipcode:"+szipcode);
			
			
			
			
			
			
			
			if( emailid!= null && emailid.trim().length()>0 &&  (password!=null && password.trim().length()>0 ||phoneNumber!= null && phoneNumber.trim().length()>0) )
			{
				ArrayList<Object> params = new ArrayList<Object>();
				params.add(emailid);
				params.add(password);
				params.add(phoneNumber);
				params.add(bfirstName);
				params.add(blastName);
				
				
				retVal=(HashMap)RestClientUtil.callService(params, "changePasswordForMyAccount", "CustomerBusinessService");
				response="success";
			}	
			
			if( bid!=null && bfirstName!=null && blastName!=null && baddress1!=null && baddress2!=null && bcity!=null && bcountry!=null && bzipcode!=null )
			{
				Long lbid=Long.parseLong(bid);
				billingAddress.setFirstName(bfirstName);
				billingAddress.setLastName(blastName);
				billingAddress.setStreet1(baddress1);
				billingAddress.setStreet2(baddress2);
				billingAddress.setStreet3(bcity);
				if(bstate!=null)
				{
					billingAddress.setState(bstate);
					billingAddress.setStateName(bstateName);
				}
				else
				{
					billingAddress.setState("");
					billingAddress.setStateName("");
				}
					
				if(bprovince!=null)
					billingAddress.setProvince(bprovince);
				else
					billingAddress.setProvince("");
				billingAddress.setCountry(bcountry);
				billingAddress.setCountryName(bcountryName);
				billingAddress.setZipCode(bzipcode);
				
				ArrayList<Object> paramsThree = new ArrayList<Object>();
				paramsThree.add(billingAddress);
				paramsThree.add(lbid);
				
				billingAddress=(BillingAddress)RestClientUtil.callService(paramsThree, "updateBillingAddressById", "BillingAddressBusinessService");
				    

				response="success";
			}
			if( sid!=null && sfirstName!=null && slastName!=null && saddress1!=null && saddress2!=null && scity!=null && scountry!=null && szipcode!=null )
			{
				
				Long lid		=Long.parseLong(sid);
				shippingAddress.setFirstName(sfirstName);
				shippingAddress.setLastName(slastName);
				shippingAddress.setStreet1(saddress1);
				shippingAddress.setStreet2(saddress2);
				shippingAddress.setStreet3(scity);
				if(sstate!=null)
				{
					shippingAddress.setState(sstate);
					shippingAddress.setStateName(sstateName);
				}
				else
				{
					shippingAddress.setState("");
					shippingAddress.setStateName("");
				}
					
				if(sprovince!=null)
					shippingAddress.setProvince(sprovince);
				else
					shippingAddress.setProvince("");
				log.info("State in Shipping Address"+sstate);
				shippingAddress.setCountry(scountry);
				shippingAddress.setCountryName(scountryName);
				shippingAddress.setZipCode(szipcode);
				
				ArrayList<Object> paramsThree = new ArrayList<Object>();
				paramsThree.add(shippingAddress);
				paramsThree.add(lid);
				
				shippingAddress=(ShippingAddress)RestClientUtil.callService(paramsThree, "updateShippingAddressById", "ShippingAddressBusinessService");
				
				response="success";
				
			}			
		}
		catch (Exception e) 
		{
			e.printStackTrace();
			log.info(" seems to be an exception while updating account info details"+e.getMessage());
		}
		
		return response;
	}
/*
 * This is for Reset Password Validation by YES
 */
	@RequestMapping(value="/getValidResetPasswordAccsessString.htm",method=RequestMethod.GET)
	public @ResponseBody Long getValidResetPasswordAccsessString(@RequestParam("email")String email)
	{
		log.info("---------->>>>>>>>>>>>    inside getValidResetPasswordAccsessString method   ------------------->>>>>>>>>>>>>>>> ");
		Long retVal=0L;
		try
		{
			ArrayList<Object> params = new ArrayList<Object>();
			params.add(email);
			
			Customer customer=(Customer)RestClientUtil.callService(params, "getCustomerByOnlyEmailId", "CustomerBusinessService");
			
			
			if(customer!=null)
			{
				retVal=customer.getKey().getId();
			}
			
			log.info("---------->>>>>>>>>>>>    ValidResetPasswordAccsessString is   ------------------->>>>>>>>>>>>>>>> " +retVal);
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return retVal;
		
	}
	
	@RequestMapping(value="/isresetPasswordFlag.htm",method=RequestMethod.GET)
	public @ResponseBody Boolean isresetPasswordFlag(@RequestParam("email")String email)
	{
		log.info("---------->>>>>>>>>>>>    inside isresetPasswordFlag method   ------------------->>>>>>>>>>>>>>>> ");
		Boolean retVal=false;
		try
		{
			ArrayList<Object> params = new ArrayList<Object>();
			params.add(email);
			
			Customer customer=(Customer)RestClientUtil.callService(params, "getCustomerByOnlyEmailId", "CustomerBusinessService");
			
			
			if(customer!=null)
			{
				retVal=customer.getResetPassword();
			}
			
			log.info("---------->>>>>>>>>>>>    isresetPasswordFlag is   ------------------->>>>>>>>>>>>>>>> " +retVal);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info(" Seems to be an exception while isresetPasswordFlag : "+e.getMessage());
		}
		return retVal;
		
	}
	
	@RequestMapping(value="/processReturnLabel.htm",method=RequestMethod.GET)
	 public @ResponseBody String  processOrderDetail1(@RequestParam("orderId")String orderId, @RequestParam("weight")String weight)
	 {
		  log.info(" ");
		  HashMap<String, String> result= new HashMap<String, String>();
		  List serviceParams=new ArrayList();
		  String returnLabel=null;
		  
		  try
		  {
			   log.info("Inside processFedexOrder.OrderId : "+orderId);
			   serviceParams.add(orderId);
			   serviceParams.add("2.2");

			   
			   
			   serviceParams.add(EnvironmentUtil.getEnvironmentValue("AppMode"));
			  // result= (HashMap<String, String>) RestClientUtil.callServiceForFedex(serviceParams, "processReturnLabel", "FedExWSDLUtilService");
			   log.info("result.... : "+result);
			   
			   returnLabel=result.get("label");
		  }
		  catch(Exception e)
		  {
			   log.warning("Exception while getting OrderDegtail : "+e);
			   new BusinessException("Exception in getOrderDetail :"+e.getMessage(),e.getStackTrace());
		  }
		  return returnLabel;
	 }
	
	@RequestMapping(value="/getblobkey.htm",method=RequestMethod.GET)
	 public @ResponseBody String  getBlobDetails(@RequestParam("orderId")String orderId,HttpServletRequest req)
	 {
		  log.info(" inside getBlobDetails method ");
		  ArrayList<Object> serviceParamsone =new ArrayList<Object>();
		  String blobKey=null;
		  String returnLabelUrl="";
		  List<BlobDetail> lBlobDetails=new ArrayList<BlobDetail>();
		  List<Shipment> shipmentDetails=new ArrayList<Shipment>();
		  BlobDetail lblobDetail = null;
		 
		  try
		  {
			  String appMode				  	    = EnvironmentUtil.getEnvironmentValue("AppMode");
			   log.info("Inside processFedexOrder.OrderId : "+orderId);
			   serviceParamsone.add("FEDEX_RETURNLABEL");
			   serviceParamsone.add("return_label"+"_"+orderId+".pdf");
			   String projMode=EnvironmentUtil.getEnvironmentValue("ProjectMode");
			   
			   lBlobDetails=(List<BlobDetail>) RestClientUtil.callService(serviceParamsone,"getBlobDetailWithFileName", "BlobBusinessService");
			   
			   if(lBlobDetails.size()==0)
			   {
				   HashMap<String, String> result 	    = new HashMap<String, String>();
				   
				   ArrayList<Object> serviceParamstwo   = new ArrayList<Object>();
				   ArrayList<Object> serviceParamsthree = new ArrayList<Object>();
				   serviceParamstwo.add(Long.parseLong(orderId));
				   shipmentDetails=(List<Shipment>) RestClientUtil.callService(serviceParamstwo,"getShipmentByOrderId", "ShipmentBusinessService");
				   Double weight=3.0;
				   if(shipmentDetails.size()>0){
				   for(Shipment lShipment:shipmentDetails){
					   if(lShipment.getWeight()!=null && lShipment.getWeight()>0)
					   {
						   weight=lShipment.getWeight();
					   }
				    }
				   }
				   log.info("weight:"+weight);
				   String email=(String)req.getSession().getAttribute("username");
				   log.info("email:"+email);
				    serviceParamsthree.add(orderId);
				    serviceParamsthree.add(weight.toString());
				    serviceParamsthree.add(email);
				    serviceParamsthree.add(appMode);
				    serviceParamsthree.add(projMode);
		            result= (HashMap<String, String>) RestClientUtil.callService1(serviceParamsthree, "processReturnLabel", "FedExWSDLUtilService");
		            log.info("result:"+result);
		            if(result!=null)
		            {
		            	  lBlobDetails=(List<BlobDetail>) RestClientUtil.callService(serviceParamsone,"getBlobDetailWithFileName", "BlobBusinessService");
		            }
			   }
			   
			   log.info("Size:"+lBlobDetails.size());
			   lblobDetail = lBlobDetails.get(0);
			   
				   if(lblobDetail.getGoogleStorageKey()!=null)
					   blobKey=lblobDetail.getGoogleStorageKey();
				   else
					   blobKey=lblobDetail.getBlobKey().getKeyString();
				   
				 log.info(blobKey);
			   
			   if(appMode.equalsIgnoreCase("LIVE")){
				   if(lblobDetail.getGoogleStorageKey()!=null)
					   returnLabelUrl= "http://live-solestruck-db.appspot.com/serveBlobDatafromGS?blobKey="+blobKey;
				   else
					   returnLabelUrl= "http://live-solestruck-db.appspot.com/serveBlobData?blobKey="+blobKey;
			   }
			   else{
				   if(lblobDetail.getGoogleStorageKey()!=null)
					   returnLabelUrl= "http://testing-solestruck-db.appspot.com/serveBlobDatafromGS?blobKey="+blobKey;
				   else
					   returnLabelUrl= "http://testing-solestruck-db.appspot.com/serveBlobData?blobKey="+blobKey;
			   }
			   
		  }
		  catch(Exception e)
		  {
			   log.warning("Exception while getting OrderDegtail : "+e);
			   new BusinessException("Exception in getOrderDetail :"+e.getMessage(),e.getStackTrace());
		  }
		  return returnLabelUrl;
	 }
	
	private static String getTrackingURLForShippingMail(String trackingNo, String shippingMethod)
	{
		String trackingURL="http://www.fedex.com/tracking?tracknumbers="+trackingNo+"&action=track$";
		log.info("Shipping Service : " + shippingMethod);
		
		if(shippingMethod.equals("FedEx-Standard Shipping") || shippingMethod.equals("FedEx-Express Shipping") || shippingMethod.equals("FedEx-Overnight Shipping") || shippingMethod.equals("FedEx-International Economy") || shippingMethod.equals("FedEx-International Priority") || shippingMethod.equals("FedEx-International Express"))
		{
			trackingURL="http://www.fedex.com/tracking?tracknumbers="+trackingNo+"&action=track$";
			log.info("Shipping Service :Fed-Ex ");
		}
		else if(shippingMethod.equals("USPS-Standard International") || shippingMethod.equals("USPS-Priority International") || shippingMethod.equals("USPS-Standard USPS") || shippingMethod.equals("USPS-Express USPS") || shippingMethod.equals("USPS-Express International"))
		{
			trackingURL="http://trkcnfrm1.smi.usps.com/PTSInternetWeb/InterLabelInquiry.do?strOrigTrackNum=" +trackingNo;
			log.info("Shipping Service :USPS ");
		}
		
		return trackingURL;
	}
	
}
