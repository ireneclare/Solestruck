package com.veroniqa.frontend.Controllers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.logging.Logger;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.tools.ant.taskdefs.condition.Http;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.veroniqa.bean.UserDetail;
import com.veroniqa.dto.FrontEndDTO;
import com.veroniqa.dto.ShippingServiceDTO;
import com.veroniqa.dto.ShoppingCart;
import com.veroniqa.frontend.service.ShoppingCartService;
import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.MemcachedConstants;
import com.veroniqa.frontend.util.MemcachedUtil;
import com.veroniqa.frontend.util.RestClientUtil;
import com.veroniqa.frontend.util.VeroniqaConstants;
import com.veroniqa.frontend.util.VeroniqaUtil;
import com.veroniqa.jdo.Country;
import com.veroniqa.jdo.CustomerServicePage;
import com.veroniqa.jdo.Event;
import com.veroniqa.jdo.States;

@Controller
public class CustomerServicePageLoadController {
	
	private Logger log =Logger.getLogger(CustomerServicePageLoadController.class.getSimpleName());
	
	@RequestMapping(value="/loadCustomerServicePage.htm",method=RequestMethod.GET)
	public void loadCustomerServiceManager(@RequestParam("page")String page,
			@RequestParam(value="deleteCookie",required=false) String deleteCookie,
			HttpServletRequest req,HttpServletResponse response)
	{
		ModelAndView mv = null;
		Long pageID = 0L;
		//get the chosen text and set the id , 
		//cal service method to fetch the static content,
		//add the content to the mv object
		log.info(" page chosen = " + page);
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
	
		
		Long brandId=0l;
		String custServicePgName = "";
		FrontEndDTO fd=new FrontEndDTO();
		ShoppingCart cart=null;
		
		String resetPassword    = req.getParameter("resetpassword");
		String activateAccount  = req.getParameter("activateAccount");
		String emailId 		    = req.getParameter("emailId");
		String accsessStringStr = req.getParameter("accsessString");
		Long accsessString		= 0L;
		if(accsessStringStr!=null)
		accsessString=Long.parseLong(accsessStringStr);
		try
		{
			Long orderid=null;
			cart=(ShoppingCart)req.getSession().getAttribute("ShoppingCart");
			if(cart!=null)
			{
				orderid=cart.getOrderId();
			}
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			page = page.replace(" ", "");
			log.info("The value of the page is :: "+page);
			if(page.equalsIgnoreCase("privacysecurity"))
			{
				page = "privacynotice";
				log.info("coming inside the condition and the new page value is :: "+page);
			}
			else if(page.equalsIgnoreCase("internationalcustomers"))
			{
				page = "international";
				log.info("coming inside the condition and the new page value is :: "+page);
			}
			else if(page.equalsIgnoreCase("termsconditions"))
			{
				page = "termsofuse";
				log.info("coming inside the condition and the new page value is :: "+page);
			}
			else if(page.equalsIgnoreCase("myaccount"))
			{
				page = "accountinfo";
				log.info("coming inside the condition and the new page value is :: "+page);
			}
			else if(page.equalsIgnoreCase("shoesizechart"))
			{
				page = "sizechart";
				log.info("coming inside the condition and the new page value is :: "+page);
			}
			else if(page.equalsIgnoreCase("giftcertificates"))
			{
				page = "giftcertificates";
				log.info("coming inside the condition and the new page value is :: "+page);
			}
			/*else if(page.equalsIgnoreCase("FacebookShop"))
			{
				custServicePgName = "paypalcustomerservice";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("FACEBOOK_SHOP"));
				mv = new ModelAndView("FacebookShop");
			}*/
			else if(page.equalsIgnoreCase("FacebookShop"))
			{
				page = "fb-shop";
				log.info("coming inside the condition and the new page value is :: "+page);
			}
			response.setStatus(HttpServletResponse.SC_MOVED_PERMANENTLY);
			response.setHeader("Location",VeroniqaConstants.LIVE_FRONTEND_URL+page.toLowerCase());
			/*if(page.equalsIgnoreCase("shipping"))
			{
				custServicePgName = "shipping";
				//pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("SHIPPING"));
				mv = new ModelAndView("shipping");
			}
			else if(page.equalsIgnoreCase("faq"))
			{
				custServicePgName = "faq";
				//pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("FAQ"));
				mv = new ModelAndView("faq");
			}
			else if(page.equalsIgnoreCase("returns"))
			{
				custServicePgName = "returns";
				//pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("RETURNS"));
				mv = new ModelAndView("returns");
			}
			else if(page.equalsIgnoreCase("international"))
			{
				custServicePgName = "international";
				//pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("INTERNATIONAL"));
				mv = new ModelAndView("International");
			}	
			else if(page.equalsIgnoreCase("privacy notice"))
			{
				custServicePgName = "privacynotice";
				//pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("PRIVACY_NOTICE"));
				mv = new ModelAndView("Privacypolicy");
			}
			else if(page.equalsIgnoreCase("about us"))
			{
				custServicePgName = "aboutus";
				//pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("ABOUT_US"));
				mv = new ModelAndView("Aboutus");
			}
			else if(page.equalsIgnoreCase("terms of use"))
			{
				custServicePgName = "termsofuse";
				//pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("TERMS_OF_USE"));
				mv = new ModelAndView("TermsOfUse");
			}
			else if(page.equalsIgnoreCase("size chart"))
			{
				custServicePgName = "sizechart";
				//pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("SIZE_CHART"));
				mv = new ModelAndView("sizechart");
			}
			else if(page.equalsIgnoreCase("customer service"))
			{
				custServicePgName = "customerservice";
				//pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("CUSTOMER_SERVICE"));
				mv = new ModelAndView("customerservice");
			}
			else if(page.equalsIgnoreCase("bio"))
			{
				custServicePgName = "aboutus";
				//pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("ABOUT_US"));
				mv = new ModelAndView("Aboutus");
			}
			else if(page.equalsIgnoreCase("my account"))
			{
				custServicePgName = "myaccount";
				//pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("MY_ACCOUNT"));
				mv = new ModelAndView("myAccount");
			}
			else if(page.equalsIgnoreCase("order status"))
			{
				custServicePgName = "orderstatus";
				//pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("ORDER_STATUS"));
				mv = new ModelAndView("order_status");
			}*/
			
			/*if(page.equalsIgnoreCase("shipping"))
			{
				log.info("coming inside the customerservice page for shipping");
				custServicePgName = "shipping";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("SHIPPING"));
				List<States> sList=null;
				List serviceParams=new ArrayList();
				try
				{
					serviceParams.add(brandId);
					serviceParams.add("US");
					sList=(List<States>)RestClientUtil.callService(serviceParams,"getAllEnabledStates","ShippingBusinessService");
					Collections.sort(sList);					
				}
				catch(Exception e)
				{
					e.printStackTrace();
					log.warning("An error occured in the getAllStates"+e.getMessage());
				}
				//mv = new ModelAndView("shipping");
				//mv.addObject("stateList", sList);
				mv=new ModelAndView(new RedirectView("/shipping"));
				//return mv;
			}
			else if(page.equalsIgnoreCase("faq"))
			{
				custServicePgName = "faq";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("FAQ"));
				//mv = new ModelAndView("faq");
				log.info("------------->>>>> coming to faq <<<<<<--------------");
				mv=new ModelAndView(new RedirectView("/faq"));
				//return mv;
			}
			else if(page.equalsIgnoreCase("returns"))
			{
				custServicePgName = "returns";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("RETURNS"));
				//mv = new ModelAndView("returns");
				log.info("************************** Before  Retruns Page *******************");
				mv=new ModelAndView(new RedirectView("/returns"));
				//return mv;
				
			}
			else if(page.equalsIgnoreCase("international")||page.equalsIgnoreCase("internationalcustomers"))
			{
				custServicePgName = "international";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("INTERNATIONAL"));
				
				List<Country> cList=null;
				List serviceParams=new ArrayList();
				try
				{
					serviceParams.add(brandId);
					cList=(List<Country>)RestClientUtil.callService(serviceParams,"getAllEnabledCountries","ShippingBusinessService");
					Collections.sort(cList);
				}
				catch(Exception e)
				{
					e.printStackTrace();
					log.warning("An error occured in the getAllCountries"+e.getMessage());
				}
				//mv = new ModelAndView("International");
				mv.addObject("countryList", cList);
				mv=new ModelAndView(new RedirectView("/international"));
				//return mv;
			}	
			else if(page.equalsIgnoreCase("privacy notice")||page.equalsIgnoreCase("privacysecurity"))
			{
				custServicePgName = "privacynotice";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("PRIVACY_NOTICE"));
				//mv = new ModelAndView("Privacypolicy");
				mv=new ModelAndView(new RedirectView("/privacynotice"));
				//return mv;
			}
			else if(page.equalsIgnoreCase("about us")||page.equalsIgnoreCase("aboutus"))
			{
				custServicePgName = "aboutus";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("ABOUT_US"));
				//mv = new ModelAndView("Aboutus");
				mv=new ModelAndView(new RedirectView("/aboutus"));
				//return mv;
			}
			else if(page.equalsIgnoreCase("terms of use")||page.equalsIgnoreCase("termsconditions"))
			{
				custServicePgName = "termsofuse";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("TERMS_OF_USE"));
				//mv = new ModelAndView("TermsOfUse");
				mv=new ModelAndView(new RedirectView("/termsofuse"));
				//return mv;
			}
			else if(page.equalsIgnoreCase("size chart")||page.equalsIgnoreCase("shoesizechart"))
			{
				custServicePgName = "sizechart";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("SIZE_CHART"));
				//mv = new ModelAndView("sizechart");
				mv=new ModelAndView(new RedirectView("/sizechart"));
				//return mv;
			}
			else if(page.equalsIgnoreCase("customer service")||page.equalsIgnoreCase("customerservice"))
			{
				custServicePgName = "customerservice";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("CUSTOMER_SERVICE"));
				//mv = new ModelAndView("customerservice");
				mv=new ModelAndView(new RedirectView("/customerservice"));
				//return mv;
			}
			else if(page.equalsIgnoreCase("GiftCertificates")||page.equalsIgnoreCase("GiftCertificates"))
			{
				custServicePgName = "paypalcustomerservice";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("PAYPAL_CUSTOMER_SERVICE"));
				mv = new ModelAndView("paypalcustomerservice");
			}
			
			else if(page.equalsIgnoreCase("bio"))
			{
				custServicePgName = "aboutus";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("ABOUT_US"));
				//mv = new ModelAndView("Aboutus");
				mv=new ModelAndView(new RedirectView("/aboutus"));
				//return mv;
			}
			else if(page.equalsIgnoreCase("my account")||page.equalsIgnoreCase("accountinfo"))
			{
				custServicePgName = "myaccount";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("MY_ACCOUNT"));
				//mv = new ModelAndView("myAccount");
				mv=new ModelAndView(new RedirectView("/myaccount"));
				//return mv;
			}
			else if(page.equalsIgnoreCase("order status")||page.equalsIgnoreCase("orderstatus"))
			{
				custServicePgName = "orderstatus";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("ORDER_STATUS"));
				//mv = new ModelAndView("order_status");
				mv=new ModelAndView(new RedirectView("/orderstatus"));
				//return mv;
			}
			else if(page.equalsIgnoreCase("jobs"))
			{
				custServicePgName = "jobs";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("JOBS"));
				//mv = new ModelAndView("jobs");
				mv=new ModelAndView(new RedirectView("/jobs"));
				//return mv;
			}
			
			else if(page.equalsIgnoreCase("affiliates"))
			{
				custServicePgName="affiliates";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("AFFILIATES"));
				//mv = new ModelAndView("Affiliates");
				mv=new ModelAndView(new RedirectView("/affiliates"));
				//return mv;
			}
			else if(page.equalsIgnoreCase("instantEmail"))
			{
				custServicePgName = "aboutus";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("ABOUT_US"));
				mv = new ModelAndView("Aboutus");
				mv.addObject("InstantEmail", true);
			}
			
			else if(page.equalsIgnoreCase("MyAccount"))
			{
				custServicePgName = "myaccount";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("MY_ACCOUNT"));
				mv = new ModelAndView("myAccount");
				mv.addObject("myaccount", true);
				
			}
			CustomerServicePage csPage = new CustomerServicePage();
			
			//csPage = csLoad.getCSPageContentClient(custServicePgName,brandId);
			if(MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES)!=null)
			{
				csPage = (CustomerServicePage) MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from cache");
			}
			else
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList.add(pageID);
				csPage = (CustomerServicePage) RestClientUtil.callService(inputList, "getCSPageById", "CustomerServiceBusinessService");
				if(csPage.getKey()!=null)
				MemcachedUtil.set(custServicePgName,csPage,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from DB");
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			if(MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS)!=null)
			{
				fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				log.info("FrontEndDTO Retrived from cache");
			}
			else
			{
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				if(fd!=null)
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			cart=ShoppingCartService.getShoppingCart(req);
			
			if(resetPassword!=null )
			{
				mv.addObject("resetPassword", true);
			}
			else
			{
				mv.addObject("resetPassword", false);
			}
			if(activateAccount!=null)
			{
				mv.addObject("activateAccount", true);
				mv.addObject("activateaccount", "ActivateAccount");
			}
			else
			{
				mv.addObject("activateAccount", false);
				mv.addObject("activateaccount", "null");
			}
			
			if(emailId!=null)
			{
				mv.addObject("emailId",emailId);
			}
			else
			{
				mv.addObject("emailId","");
			}
			
			if(accsessString!=null)
			{
				mv.addObject("accsessString",accsessString);
			}
			else
			{
				mv.addObject("accsessString",0L);
			}
			
			mv.addObject("csPage", csPage.getHtmlMessage());
			mv.addObject("brandid", brandId);
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("orderid", orderid);
			mv.addObject("ShoppingCart", cart);
			//mv.addObject("customerRegistration",new UserDetail() );
			
			//mv.addObject("common_css",VeroniqaUtil.getCommonURLAsString("solestruck_min_css", VeroniqaConstants.CSS_URL()+"solestruck.min.css"));
			//mv.addObject("common_js",VeroniqaUtil.getCommonURLAsString("solestruck_min_js", VeroniqaConstants.JS_URL()+"solestruck.min.js"));
			List<Integer> womenDropDown=VeroniqaUtil.getWomenDropDown(fd);
			if(womenDropDown!=null && womenDropDown.size()>0)
			{
				mv.addObject("firstColumn",womenDropDown.get(0));
				mv.addObject("secondColumn",womenDropDown.get(1));
				mv.addObject("thirdColumn",womenDropDown.get(2));
				mv.addObject("fourthColumn",womenDropDown.get(3));
			}
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestruck.min.js");
			mv.addObject("server",req.getRequestURL());
			*/
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the loadCustomerServiceManager"+e.getMessage());
			e.printStackTrace();
		}
		
		//return mv;
	}
	
	
	@RequestMapping(value="/loadSaleFaqCSpage.htm")
	public @ResponseBody ModelAndView loadSaleFaqCSpage(HttpServletRequest request,HttpServletResponse response)
	{
		ModelAndView mv = new ModelAndView("salefaq");
		try
		{
			RequestDispatcher rd = request.getRequestDispatcher("/errorPage.htm");
			response.setStatus(HttpServletResponse.SC_NOT_FOUND);
			rd.forward(request, response);
//			String brandstr="";
//			try
//			{
//				brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
//			}
//			catch(Exception e)
//			{
//				e.printStackTrace();
//			}
//			try
//			{
//				List<Event> retval=null;
//				retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
//				if(retval==null)
//				{
//					ArrayList<Object> objects=new ArrayList<Object>();
//					retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
//					if(retval!=null && retval.size()>0)
//						MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
//				}
//				if(retval!=null&&retval.size()>0)
//					mv.addObject("eventList",retval);
//			}
//			catch(Exception e)
//			{
//				log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
//			}
//			FrontEndDTO fd=new FrontEndDTO();
//			Long brandId=0l;
//			if(brandstr!=null)
//			{
//				brandId=Long.parseLong(brandstr);
//			}
//			ArrayList<Object> objects=new ArrayList<Object>();
//			objects.add(brandId);
//			if(MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS)!=null)
//			{
//				fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
//				log.info("FrontEndDTO Retrived from cache");
//			}
//			else
//			{
//				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
//				if(fd!=null)
//					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
//			}
//			mv.addObject("sizes", fd.getSizes());
//			mv.addObject("womenvendorlst", fd.getWomenVendors());
//			mv.addObject("menvendorlst", fd.getMenVendors());
//			//mv.addObject("ShoppingCart", cart);
//			//mv.addObject("customerRegistration",new UserDetail() );
//			
//			//mv.addObject("common_css",VeroniqaUtil.getCommonURLAsString("solestruck_min_css", VeroniqaConstants.CSS_URL()+"solestruck.min.css"));
//			//mv.addObject("common_js",VeroniqaUtil.getCommonURLAsString("solestruck_min_js", VeroniqaConstants.JS_URL()+"solestruck.min.js"));
//			List<Integer> womenDropDown=VeroniqaUtil.getWomenDropDown(fd);
//			if(womenDropDown!=null && womenDropDown.size()>0)
//			{
//				mv.addObject("firstColumn",womenDropDown.get(0));
//				mv.addObject("secondColumn",womenDropDown.get(1));
//				mv.addObject("thirdColumn",womenDropDown.get(2));
//				mv.addObject("fourthColumn",womenDropDown.get(3));
//			}
//			List<Integer> menDropDown=VeroniqaUtil.getMenDropDown(fd);
//			if(menDropDown!=null && menDropDown.size()>0)
//			{
//				mv.addObject("firstColumnMen", menDropDown.get(0));
//				mv.addObject("secondColumnMen", menDropDown.get(1));
//				mv.addObject("thirdColumnMen", menDropDown.get(2));
//				mv.addObject("fourthColumnMen", menDropDown.get(3));
//			}
//						
//			mv.addObject("common_css","solestruck.min.css");
//			mv.addObject("common_js","solestruck.min.js");
		}
		catch(Exception e)
		{
			log.info("******** Excpetion in loadSaleFaqCSpage() *******"+e.getMessage());
		}
		return mv;
	}
	
	@RequestMapping(value="/getShippingServicesForCSPage.htm")
	public @ResponseBody List<ShippingServiceDTO> getShippingServices(@RequestParam("countryCode")String countryCode,
			   @RequestParam(value="deleteCookie",required=false) String deleteCookie,					
				@RequestParam("stateCode")String stateCode,HttpServletRequest request)
	{
		List<ShippingServiceDTO> retVal=null;
		List<Object> inputList = new ArrayList<Object>();
		log.info(">>>>>>>>>>>>>> getShippingServicesForCSPage >>>>>>>>> ");
		
		try {
			String strBrandId=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
			//String strBrandId=VeroniqaCookieUtil.getCookieValue(request, VeroniqaConstants.BRAND_ID_KEY);
			Long brandId=Long.parseLong(strBrandId);
				inputList.add(brandId);
				inputList.add(countryCode);
				if(stateCode==null||stateCode.equals("null")){
					stateCode=null;
				}
				inputList.add(stateCode);
				retVal=(List<ShippingServiceDTO>) RestClientUtil.callService(inputList, "getAllShippingServiceZonesDTOForShippingCalc", "ShippingBusinessService");

		} catch (Exception e) {

			e.printStackTrace();
			log.warning("Exception in getShippingServices"); 
		}
		return retVal;
	}
	
	@RequestMapping(value="/loadFaqCustomerServicePage.htm",method=RequestMethod.GET)
	public ModelAndView loadfaqCustomerServicePage(HttpServletRequest req)
	{
		log.info("------>>>>>>>>>>>>> Inside loadReturnsCustomerServicePage.htm  -------->>>>>>>>>>>>>>>");
		ModelAndView mv = null;
		Long pageID = 0L;
		//get the chosen text and set the id , 
		//cal service method to fetch the static content,
		//add the content to the mv object
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		String custServicePgName = "";
		FrontEndDTO fd=new FrontEndDTO();
		ShoppingCart cart=null;
		
		String resetPassword    = req.getParameter("resetpassword");
		String activateAccount  = req.getParameter("activateAccount");
		String emailId 		    = req.getParameter("emailId");
		String accsessStringStr = req.getParameter("accsessString");
		Long accsessString		= 0L;
		if(accsessStringStr!=null)
		accsessString=Long.parseLong(accsessStringStr);
		try
		{
			Long orderid=null;
			cart=(ShoppingCart)req.getSession().getAttribute("ShoppingCart");
			if(cart!=null)
			{
				orderid=cart.getOrderId();
			}
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			
			
			
				custServicePgName = "faq";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("FAQ"));
				mv = new ModelAndView("faq");
				try
				{
					List<Event> retval=null;
					retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
					
					if(retval==null)
					{	
						ArrayList<Object> objects=new ArrayList<Object>();
					
						retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
						if(retval!=null && retval.size()>0)
							MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
						
					}
					if(retval!=null&&retval.size()>0)
						mv.addObject("eventList",retval);
					
					log.info("Ph Event List is "+retval.size());
					
				}
				catch(Exception e)
				{
					log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
				}
			CustomerServicePage csPage = new CustomerServicePage();
			
			//csPage = csLoad.getCSPageContentClient(custServicePgName,brandId);
			if(MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES)!=null)
			{
				csPage = (CustomerServicePage) MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from cache");
			}
			else
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList.add(pageID);
				csPage = (CustomerServicePage) RestClientUtil.callService(inputList, "getCSPageById", "CustomerServiceBusinessService");
				if(csPage.getKey()!=null)
				MemcachedUtil.set(custServicePgName,csPage,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from DB");
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			if(MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS)!=null)
			{
				fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				log.info("FrontEndDTO Retrived from cache");
			}
			else
			{
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				if(fd!=null)
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			//cart=ShoppingCartService.getShoppingCart(req); // Commented for not being used by YES
			
			if(resetPassword!=null )
			{
				mv.addObject("resetPassword", true);
			}
			else
			{
				mv.addObject("resetPassword", false);
			}
			if(activateAccount!=null)
			{
				mv.addObject("activateAccount", true);
				mv.addObject("activateaccount", "ActivateAccount");
			}
			else
			{
				mv.addObject("activateAccount", false);
				mv.addObject("activateaccount", "null");
			}
			
			if(emailId!=null)
			{
				mv.addObject("emailId",emailId);
			}
			else
			{
				mv.addObject("emailId","");
			}
			
			if(accsessString!=null)
			{
				mv.addObject("accsessString",accsessString);
			}
			else
			{
				mv.addObject("accsessString",0L);
			}
			
			mv.addObject("csPage", csPage.getHtmlMessage());
			mv.addObject("brandid", brandId);
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("orderid", orderid);
			//mv.addObject("ShoppingCart", cart);
			//mv.addObject("customerRegistration",new UserDetail() );
			
			//mv.addObject("common_css",VeroniqaUtil.getCommonURLAsString("solestruck_min_css", VeroniqaConstants.CSS_URL()+"solestruck.min.css"));
			//mv.addObject("common_js",VeroniqaUtil.getCommonURLAsString("solestruck_min_js", VeroniqaConstants.JS_URL()+"solestruck.min.js"));
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
						
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestruck.min.js");
			mv.addObject("server",req.getRequestURL());
			
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the loadCustomerServiceManager"+e.getMessage());
			e.printStackTrace();
		}
		
		return mv;
		
	}
	
	@RequestMapping(value="/loadReturnsCustomerServicePage.htm",method=RequestMethod.GET)
	public ModelAndView loadReturnsCustomerServiceManager(HttpServletRequest req)
	{
		log.info("------>>>>>>>>>>>>> Inside loadReturnsCustomerServicePage.htm  -------->>>>>>>>>>>>>>>");
		ModelAndView mv = null;
		Long pageID = 0L;
		//get the chosen text and set the id , 
		//cal service method to fetch the static content,
		//add the content to the mv object
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		String custServicePgName = "";
		FrontEndDTO fd=new FrontEndDTO();
		ShoppingCart cart=null;
		
		String resetPassword    = req.getParameter("resetpassword");
		String activateAccount  = req.getParameter("activateAccount");
		String emailId 		    = req.getParameter("emailId");
		String accsessStringStr = req.getParameter("accsessString");
		Long accsessString		= 0L;
		if(accsessStringStr!=null)
		accsessString=Long.parseLong(accsessStringStr);
		try
		{
			Long orderid=null;
			cart=(ShoppingCart)req.getSession().getAttribute("ShoppingCart");
			if(cart!=null)
			{
				orderid=cart.getOrderId();
			}
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			
			
			
				custServicePgName = "returns";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("RETURNS"));
				mv = new ModelAndView("returns");
				
				try
				{
					List<Event> retval=null;
					retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
					
					if(retval==null)
					{
						ArrayList<Object> objects=new ArrayList<Object>();
					
						retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
						if(retval!=null && retval.size()>0)
							MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
						
					}
					if(retval!=null&&retval.size()>0)
						mv.addObject("eventList",retval);
					
					
					
				}
				catch(Exception e)
				{
					log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
				}
			
			CustomerServicePage csPage = new CustomerServicePage();
			
			//csPage = csLoad.getCSPageContentClient(custServicePgName,brandId);
			if(MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES)!=null)
			{
				csPage = (CustomerServicePage) MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from cache");
			}
			else
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList.add(pageID);
				csPage = (CustomerServicePage) RestClientUtil.callService(inputList, "getCSPageById", "CustomerServiceBusinessService");
				if(csPage.getKey()!=null)
				MemcachedUtil.set(custServicePgName,csPage,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from DB");
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			if(MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS)!=null)
			{
				fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				log.info("FrontEndDTO Retrived from cache");
			}
			else
			{
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				if(fd!=null)
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			//cart=ShoppingCartService.getShoppingCart(req); // Commented for not being used by YES
			
			if(resetPassword!=null )
			{
				mv.addObject("resetPassword", true);
			}
			else
			{
				mv.addObject("resetPassword", false);
			}
			if(activateAccount!=null)
			{
				mv.addObject("activateAccount", true);
				mv.addObject("activateaccount", "ActivateAccount");
			}
			else
			{
				mv.addObject("activateAccount", false);
				mv.addObject("activateaccount", "null");
			}
			
			if(emailId!=null)
			{
				mv.addObject("emailId",emailId);
			}
			else
			{
				mv.addObject("emailId","");
			}
			
			if(accsessString!=null)
			{
				mv.addObject("accsessString",accsessString);
			}
			else
			{
				mv.addObject("accsessString",0L);
			}
			
			mv.addObject("csPage", csPage.getHtmlMessage());
			mv.addObject("brandid", brandId);
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("orderid", orderid);
			//mv.addObject("ShoppingCart", cart);
			//mv.addObject("customerRegistration",new UserDetail() );
			
			//mv.addObject("common_css",VeroniqaUtil.getCommonURLAsString("solestruck_min_css", VeroniqaConstants.CSS_URL()+"solestruck.min.css"));
			//mv.addObject("common_js",VeroniqaUtil.getCommonURLAsString("solestruck_min_js", VeroniqaConstants.JS_URL()+"solestruck.min.js"));
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
			
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestruck.min.js");
			mv.addObject("server",req.getRequestURL());
			
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the loadCustomerServiceManager"+e.getMessage());
			e.printStackTrace();
		}
		
		return mv;
	}
	
	@RequestMapping(value="/loadPrivacyNoticeCustomerServicePage.htm",method=RequestMethod.GET)
	public ModelAndView loadPrivacyNoticeCustomerServicePage(HttpServletRequest req)
	{
		log.info("------>>>>>>>>>>>>> Inside loadPrivacyNoticeCustomerServicePage.htm  -------->>>>>>>>>>>>>>>");
		ModelAndView mv = null;
		Long pageID = 0L;
		//get the chosen text and set the id , 
		//cal service method to fetch the static content,
		//add the content to the mv object
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		String custServicePgName = "";
		FrontEndDTO fd=new FrontEndDTO();
		ShoppingCart cart=null;
		
		String resetPassword    = req.getParameter("resetpassword");
		String activateAccount  = req.getParameter("activateAccount");
		String emailId 		    = req.getParameter("emailId");
		String accsessStringStr = req.getParameter("accsessString");
		Long accsessString		= 0L;
		if(accsessStringStr!=null)
		accsessString=Long.parseLong(accsessStringStr);
		try
		{
			Long orderid=null;
			cart=(ShoppingCart)req.getSession().getAttribute("ShoppingCart");
			if(cart!=null)
			{
				orderid=cart.getOrderId();
			}
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			
			
			
				custServicePgName = "Privacypolicy";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("PRIVACY_NOTICE"));
				mv = new ModelAndView("Privacypolicy");
				
				try
				{
					List<Event> retval=null;
					retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
					
					if(retval==null)
					{
						ArrayList<Object> objects=new ArrayList<Object>();
					
						retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
						if(retval!=null && retval.size()>0)
							MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
						
					}
					if(retval!=null&&retval.size()>0)
						mv.addObject("eventList",retval);
					
					
					
				}
				catch(Exception e)
				{
					log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
				}
			
			CustomerServicePage csPage = new CustomerServicePage();
			
			//csPage = csLoad.getCSPageContentClient(custServicePgName,brandId);
			if(MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES)!=null)
			{
				csPage = (CustomerServicePage) MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from cache");
			}
			else
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList.add(pageID);
				csPage = (CustomerServicePage) RestClientUtil.callService(inputList, "getCSPageById", "CustomerServiceBusinessService");
				if(csPage.getKey()!=null)
				MemcachedUtil.set(custServicePgName,csPage,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from DB");
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			if(MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS)!=null)
			{
				fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				log.info("FrontEndDTO Retrived from cache");
			}
			else
			{
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				if(fd!=null)
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			//cart=ShoppingCartService.getShoppingCart(req); // Commented for not being used by YES
			
			if(resetPassword!=null )
			{
				mv.addObject("resetPassword", true);
			}
			else
			{
				mv.addObject("resetPassword", false);
			}
			if(activateAccount!=null)
			{
				mv.addObject("activateAccount", true);
				mv.addObject("activateaccount", "ActivateAccount");
			}
			else
			{
				mv.addObject("activateAccount", false);
				mv.addObject("activateaccount", "null");
			}
			
			if(emailId!=null)
			{
				mv.addObject("emailId",emailId);
			}
			else
			{
				mv.addObject("emailId","");
			}
			
			if(accsessString!=null)
			{
				mv.addObject("accsessString",accsessString);
			}
			else
			{
				mv.addObject("accsessString",0L);
			}
			
			mv.addObject("csPage", csPage.getHtmlMessage());
			mv.addObject("brandid", brandId);
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("orderid", orderid);
			//mv.addObject("ShoppingCart", cart);
			//mv.addObject("customerRegistration",new UserDetail() );
			
			//mv.addObject("common_css",VeroniqaUtil.getCommonURLAsString("solestruck_min_css", VeroniqaConstants.CSS_URL()+"solestruck.min.css"));
			//mv.addObject("common_js",VeroniqaUtil.getCommonURLAsString("solestruck_min_js", VeroniqaConstants.JS_URL()+"solestruck.min.js"));
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
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestruck.min.js");
			mv.addObject("server",req.getRequestURL());
			
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the loadCustomerServiceManager"+e.getMessage());
			e.printStackTrace();
		}
		
		return mv;
		
	}
	
	@RequestMapping(value="/loadTermsOfUseCustomerServicePage.htm",method=RequestMethod.GET)
	public ModelAndView loadTermsOfUseCustomerServicePage(HttpServletRequest req)
	{
		log.info("------>>>>>>>>>>>>> Inside loadTermsOfUseCustomerServicePage.htm  -------->>>>>>>>>>>>>>>");
		ModelAndView mv = null;
		Long pageID = 0L;
		//get the chosen text and set the id , 
		//cal service method to fetch the static content,
		//add the content to the mv object
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		String custServicePgName = "";
		FrontEndDTO fd=new FrontEndDTO();
		ShoppingCart cart=null;
		
		String resetPassword    = req.getParameter("resetpassword");
		String activateAccount  = req.getParameter("activateAccount");
		String emailId 		    = req.getParameter("emailId");
		String accsessStringStr = req.getParameter("accsessString");
		Long accsessString		= 0L;
		if(accsessStringStr!=null)
		accsessString=Long.parseLong(accsessStringStr);
		try
		{
			Long orderid=null;
			cart=(ShoppingCart)req.getSession().getAttribute("ShoppingCart");
			if(cart!=null)
			{
				orderid=cart.getOrderId();
			}
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			
			
			
				custServicePgName = "TermsOfUse";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("TERMS_OF_USE"));
				mv = new ModelAndView("TermsOfUse");
				
				try
				{
					List<Event> retval=null;
					retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
					
					if(retval==null)
					{
						ArrayList<Object> objects=new ArrayList<Object>();
					
						retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
						if(retval!=null && retval.size()>0)
							MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
						
					}
					if(retval!=null&&retval.size()>0)
						mv.addObject("eventList",retval);
					
					
					
				}
				catch(Exception e)
				{
					log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
				}
			
			CustomerServicePage csPage = new CustomerServicePage();
			
			//csPage = csLoad.getCSPageContentClient(custServicePgName,brandId);
			if(MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES)!=null)
			{
				csPage = (CustomerServicePage) MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from cache");
			}
			else
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList.add(pageID);
				csPage = (CustomerServicePage) RestClientUtil.callService(inputList, "getCSPageById", "CustomerServiceBusinessService");
				if(csPage.getKey()!=null)
				MemcachedUtil.set(custServicePgName,csPage,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from DB");
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			if(MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS)!=null)
			{
				fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				log.info("FrontEndDTO Retrived from cache");
			}
			else
			{
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				if(fd!=null)
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			//cart=ShoppingCartService.getShoppingCart(req); // Commented for not being used by YES
			
			if(resetPassword!=null )
			{
				mv.addObject("resetPassword", true);
			}
			else
			{
				mv.addObject("resetPassword", false);
			}
			if(activateAccount!=null)
			{
				mv.addObject("activateAccount", true);
				mv.addObject("activateaccount", "ActivateAccount");
			}
			else
			{
				mv.addObject("activateAccount", false);
				mv.addObject("activateaccount", "null");
			}
			
			if(emailId!=null)
			{
				mv.addObject("emailId",emailId);
			}
			else
			{
				mv.addObject("emailId","");
			}
			
			if(accsessString!=null)
			{
				mv.addObject("accsessString",accsessString);
			}
			else
			{
				mv.addObject("accsessString",0L);
			}
			
			mv.addObject("csPage", csPage.getHtmlMessage());
			mv.addObject("brandid", brandId);
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("orderid", orderid);
			//mv.addObject("ShoppingCart", cart);
			//mv.addObject("customerRegistration",new UserDetail() );
			
			//mv.addObject("common_css",VeroniqaUtil.getCommonURLAsString("solestruck_min_css", VeroniqaConstants.CSS_URL()+"solestruck.min.css"));
			//mv.addObject("common_js",VeroniqaUtil.getCommonURLAsString("solestruck_min_js", VeroniqaConstants.JS_URL()+"solestruck.min.js"));
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
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestruck.min.js");
			mv.addObject("server",req.getRequestURL());
			
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the loadCustomerServiceManager"+e.getMessage());
			e.printStackTrace();
		}
		
		return mv;
		
	}
	
	@RequestMapping(value="/loadSizeChartCustomerServicePage.htm",method=RequestMethod.GET)
	public ModelAndView loadSizeChartCustomerServicePage(HttpServletRequest req)
	{
		log.info("------>>>>>>>>>>>>> Inside loadSizeChartCustomerServicePage.htm  -------->>>>>>>>>>>>>>>");
		ModelAndView mv = null;
		Long pageID = 0L;
		//get the chosen text and set the id , 
		//cal service method to fetch the static content,
		//add the content to the mv object
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		String custServicePgName = "";
		FrontEndDTO fd=new FrontEndDTO();
		ShoppingCart cart=null;
		
		String resetPassword    = req.getParameter("resetpassword");
		String activateAccount  = req.getParameter("activateAccount");
		String emailId 		    = req.getParameter("emailId");
		String accsessStringStr = req.getParameter("accsessString");
		Long accsessString		= 0L;
		if(accsessStringStr!=null)
		accsessString=Long.parseLong(accsessStringStr);
		try
		{
			Long orderid=null;
			cart=(ShoppingCart)req.getSession().getAttribute("ShoppingCart");
			if(cart!=null)
			{
				orderid=cart.getOrderId();
			}
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			
			
			
				custServicePgName = "sizechart";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("SIZE_CHART"));
				mv = new ModelAndView("sizechart");
			
				
				try
				{
					List<Event> retval=null;
					retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
					
					if(retval==null)
					{
						ArrayList<Object> objects=new ArrayList<Object>();
					
						retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
						if(retval!=null && retval.size()>0)
							MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
						
					}
					if(retval!=null&&retval.size()>0)
						mv.addObject("eventList",retval);
					
					
					
				}
				catch(Exception e)
				{
					log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
				}
				
			CustomerServicePage csPage = new CustomerServicePage();
			
			//csPage = csLoad.getCSPageContentClient(custServicePgName,brandId);
			if(MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES)!=null)
			{
				csPage = (CustomerServicePage) MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from cache");
			}
			else
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList.add(pageID);
				csPage = (CustomerServicePage) RestClientUtil.callService(inputList, "getCSPageById", "CustomerServiceBusinessService");
				if(csPage.getKey()!=null)
				MemcachedUtil.set(custServicePgName,csPage,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from DB");
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			if(MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS)!=null)
			{
				fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				log.info("FrontEndDTO Retrived from cache");
			}
			else
			{
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				if(fd!=null)
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			//cart=ShoppingCartService.getShoppingCart(req); // Commented for not being used by YES
			
			if(resetPassword!=null )
			{
				mv.addObject("resetPassword", true);
			}
			else
			{
				mv.addObject("resetPassword", false);
			}
			if(activateAccount!=null)
			{
				mv.addObject("activateAccount", true);
				mv.addObject("activateaccount", "ActivateAccount");
			}
			else
			{
				mv.addObject("activateAccount", false);
				mv.addObject("activateaccount", "null");
			}
			
			if(emailId!=null)
			{
				mv.addObject("emailId",emailId);
			}
			else
			{
				mv.addObject("emailId","");
			}
			
			if(accsessString!=null)
			{
				mv.addObject("accsessString",accsessString);
			}
			else
			{
				mv.addObject("accsessString",0L);
			}
			
			mv.addObject("csPage", csPage.getHtmlMessage());
			mv.addObject("brandid", brandId);
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("orderid", orderid);
			//mv.addObject("ShoppingCart", cart);
			//mv.addObject("customerRegistration",new UserDetail() );
			
			//mv.addObject("common_css",VeroniqaUtil.getCommonURLAsString("solestruck_min_css", VeroniqaConstants.CSS_URL()+"solestruck.min.css"));
			//mv.addObject("common_js",VeroniqaUtil.getCommonURLAsString("solestruck_min_js", VeroniqaConstants.JS_URL()+"solestruck.min.js"));
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
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestruck.min.js");
			mv.addObject("server",req.getRequestURL());
			
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the loadCustomerServiceManager"+e.getMessage());
			e.printStackTrace();
		}
		
		return mv;
		
	}
	
	@RequestMapping(value="/loadCSCustomerServicePage.htm",method=RequestMethod.GET)
	public ModelAndView loadCSCustomerServicePage(HttpServletRequest req)
	{
		log.info("------>>>>>>>>>>>>> Inside loadCSCustomerServicePage.htm  -------->>>>>>>>>>>>>>>");
		ModelAndView mv = null;
		Long pageID = 0L;
		//get the chosen text and set the id , 
		//cal service method to fetch the static content,
		//add the content to the mv object
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		String custServicePgName = "";
		FrontEndDTO fd=new FrontEndDTO();
		ShoppingCart cart=null;
		
		String resetPassword    = req.getParameter("resetpassword");
		String activateAccount  = req.getParameter("activateAccount");
		String emailId 		    = req.getParameter("emailId");
		String accsessStringStr = req.getParameter("accsessString");
		Long accsessString		= 0L;
		if(accsessStringStr!=null)
		accsessString=Long.parseLong(accsessStringStr);
		try
		{
			Long orderid=null;
			cart=(ShoppingCart)req.getSession().getAttribute("ShoppingCart");
			if(cart!=null)
			{
				orderid=cart.getOrderId();
			}
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			
			
			
				custServicePgName = "customerservice";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("CUSTOMER_SERVICE"));
				mv = new ModelAndView("customerservice");
			
				
				try
				{
					List<Event> retval=null;
					retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
					
					if(retval==null)
					{
						ArrayList<Object> objects=new ArrayList<Object>();
					
						retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
						if(retval!=null && retval.size()>0)
							MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
						
					}
					if(retval!=null&&retval.size()>0)
						mv.addObject("eventList",retval);
					
					
					
				}
				catch(Exception e)
				{
					log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
				}
				
			CustomerServicePage csPage = new CustomerServicePage();
			
			//csPage = csLoad.getCSPageContentClient(custServicePgName,brandId);
			if(MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES)!=null)
			{
				csPage = (CustomerServicePage) MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from cache");
			}
			else
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList.add(pageID);
				csPage = (CustomerServicePage) RestClientUtil.callService(inputList, "getCSPageById", "CustomerServiceBusinessService");
				if(csPage.getKey()!=null)
				MemcachedUtil.set(custServicePgName,csPage,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from DB");
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			if(MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS)!=null)
			{
				fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				log.info("FrontEndDTO Retrived from cache");
			}
			else
			{
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				if(fd!=null)
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			//cart=ShoppingCartService.getShoppingCart(req);  // Commented for not being used by YES
			
			if(resetPassword!=null )
			{
				mv.addObject("resetPassword", true);
			}
			else
			{
				mv.addObject("resetPassword", false);
			}
			if(activateAccount!=null)
			{
				mv.addObject("activateAccount", true);
				mv.addObject("activateaccount", "ActivateAccount");
			}
			else
			{
				mv.addObject("activateAccount", false);
				mv.addObject("activateaccount", "null");
			}
			
			if(emailId!=null)
			{
				mv.addObject("emailId",emailId);
			}
			else
			{
				mv.addObject("emailId","");
			}
			
			if(accsessString!=null)
			{
				mv.addObject("accsessString",accsessString);
			}
			else
			{
				mv.addObject("accsessString",0L);
			}
			
			mv.addObject("csPage", csPage.getHtmlMessage());
			mv.addObject("brandid", brandId);
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("orderid", orderid);
			//mv.addObject("ShoppingCart", cart);
			//mv.addObject("customerRegistration",new UserDetail() );
			
			//mv.addObject("common_css",VeroniqaUtil.getCommonURLAsString("solestruck_min_css", VeroniqaConstants.CSS_URL()+"solestruck.min.css"));
			//mv.addObject("common_js",VeroniqaUtil.getCommonURLAsString("solestruck_min_js", VeroniqaConstants.JS_URL()+"solestruck.min.js"));
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
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestruck.min.js");
			mv.addObject("server",req.getRequestURL());
			
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the loadCustomerServiceManager"+e.getMessage());
			e.printStackTrace();
		}
		
		return mv;
		
	}
	
	@RequestMapping(value="/loadAccountInfoCustomerServicePage.htm",method=RequestMethod.GET)
	public ModelAndView loadAccountInfoCustomerServicePage(HttpServletRequest req)
	{
		log.info("------>>>>>>>>>>>>> Inside loadAccountInfoCustomerServicePage.htm  -------->>>>>>>>>>>>>>>");
		ModelAndView mv = null;
		Long pageID = 0L;
		//get the chosen text and set the id , 
		//cal service method to fetch the static content,
		//add the content to the mv object
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		String custServicePgName = "";
		FrontEndDTO fd=new FrontEndDTO();
		ShoppingCart cart=null;
		
		String resetPassword    = req.getParameter("resetpassword");
		String activateAccount  = req.getParameter("activateAccount");
		String emailId 		    = req.getParameter("emailId");
		String accsessStringStr = req.getParameter("accsessString");
		Long accsessString		= 0L;
		if(accsessStringStr!=null)
		accsessString=Long.parseLong(accsessStringStr);
		try
		{
			Long orderid=null;
			cart=(ShoppingCart)req.getSession().getAttribute("ShoppingCart");
			if(cart!=null)
			{
				orderid=cart.getOrderId();
			}
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			
			
			
				custServicePgName = "myAccount";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("MY_ACCOUNT"));
				mv = new ModelAndView("myAccount");
			
			CustomerServicePage csPage = new CustomerServicePage();
			
			//csPage = csLoad.getCSPageContentClient(custServicePgName,brandId);
			if(MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES)!=null)
			{
				csPage = (CustomerServicePage) MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from cache");
			}
			else
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList.add(pageID);
				csPage = (CustomerServicePage) RestClientUtil.callService(inputList, "getCSPageById", "CustomerServiceBusinessService");
				if(csPage.getKey()!=null)
				MemcachedUtil.set(custServicePgName,csPage,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from DB");
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			if(MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS)!=null)
			{
				fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				log.info("FrontEndDTO Retrived from cache");
			}
			else
			{
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				if(fd!=null)
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			try
			{
				List<Event> eventList=null;
				eventList=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
				
				if(eventList==null)
				{
					eventList=(List<Event>)RestClientUtil.callService(new ArrayList<Object>(), "getAllOnLiveEvents", "EventManagerBusinessService");
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
			
			//cart=ShoppingCartService.getShoppingCart(req); // Commented for not being used by YES
			
			if(resetPassword!=null )
			{
				mv.addObject("resetPassword", true);
			}
			else
			{
				mv.addObject("resetPassword", false);
			}
			if(activateAccount!=null)
			{
				mv.addObject("activateAccount", true);
				mv.addObject("activateaccount", "ActivateAccount");
			}
			else
			{
				mv.addObject("activateAccount", false);
				mv.addObject("activateaccount", "null");
			}
			
			if(emailId!=null)
			{
				mv.addObject("emailId",emailId);
			}
			else
			{
				mv.addObject("emailId","");
			}
			
			if(accsessString!=null)
			{
				mv.addObject("accsessString",accsessString);
			}
			else
			{
				mv.addObject("accsessString",0L);
			}
			
			mv.addObject("csPage", csPage.getHtmlMessage());
			mv.addObject("brandid", brandId);
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("orderid", orderid);
			//mv.addObject("ShoppingCart", cart);
			//mv.addObject("customerRegistration",new UserDetail() );
			
			//mv.addObject("common_css",VeroniqaUtil.getCommonURLAsString("solestruck_min_css", VeroniqaConstants.CSS_URL()+"solestruck.min.css"));
			//mv.addObject("common_js",VeroniqaUtil.getCommonURLAsString("solestruck_min_js", VeroniqaConstants.JS_URL()+"solestruck.min.js"));
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
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestruck.min.js");
			mv.addObject("server",req.getRequestURL());
			
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the loadCustomerServiceManager"+e.getMessage());
			e.printStackTrace();
		}
		
		return mv;
		
	}
	
	@RequestMapping(value="/loadAboutUsCustomerServicePage.htm",method=RequestMethod.GET)
	public ModelAndView loadAboutUsCustomerServicePage(HttpServletRequest req)
	{
		log.info("------>>>>>>>>>>>>> Inside loadAboutUsCustomerServicePage.htm  -------->>>>>>>>>>>>>>>");
		ModelAndView mv = null;
		Long pageID = 0L;
		//get the chosen text and set the id , 
		//cal service method to fetch the static content,
		//add the content to the mv object
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		String custServicePgName = "";
		FrontEndDTO fd=new FrontEndDTO();
		ShoppingCart cart=null;
		
		String resetPassword    = req.getParameter("resetpassword");
		String activateAccount  = req.getParameter("activateAccount");
		String emailId 		    = req.getParameter("emailId");
		String accsessStringStr = req.getParameter("accsessString");
		Long accsessString		= 0L;
		if(accsessStringStr!=null)
		accsessString=Long.parseLong(accsessStringStr);
		try
		{
			Long orderid=null;
			cart=(ShoppingCart)req.getSession().getAttribute("ShoppingCart");
			if(cart!=null)
			{
				orderid=cart.getOrderId();
			}
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			
			
			
				custServicePgName = "Aboutus";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("ABOUT_US"));
				mv = new ModelAndView("Aboutus");
				
				try
				{
					List<Event> retval=null;
					retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
					
					if(retval==null)
					{
						ArrayList<Object> objects=new ArrayList<Object>();
					
						retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
						if(retval!=null && retval.size()>0)
							MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
						
					}
					if(retval!=null&&retval.size()>0)
						mv.addObject("eventList",retval);
					
					
					
				}
				catch(Exception e)
				{
					log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
				}
			
			CustomerServicePage csPage = new CustomerServicePage();
			
			//csPage = csLoad.getCSPageContentClient(custServicePgName,brandId);
			if(MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES)!=null)
			{
				csPage = (CustomerServicePage) MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from cache");
			}
			else
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList.add(pageID);
				csPage = (CustomerServicePage) RestClientUtil.callService(inputList, "getCSPageById", "CustomerServiceBusinessService");
				if(csPage.getKey()!=null)
				MemcachedUtil.set(custServicePgName,csPage,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from DB");
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			if(MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS)!=null)
			{
				fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				log.info("FrontEndDTO Retrived from cache");
			}
			else
			{
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				if(fd!=null)
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			//cart=ShoppingCartService.getShoppingCart(req); // Commented for not being used by YES
			
			if(resetPassword!=null )
			{
				mv.addObject("resetPassword", true);
			}
			else
			{
				mv.addObject("resetPassword", false);
			}
			if(activateAccount!=null)
			{
				mv.addObject("activateAccount", true);
				mv.addObject("activateaccount", "ActivateAccount");
			}
			else
			{
				mv.addObject("activateAccount", false);
				mv.addObject("activateaccount", "null");
			}
			
			if(emailId!=null)
			{
				mv.addObject("emailId",emailId);
			}
			else
			{
				mv.addObject("emailId","");
			}
			
			if(accsessString!=null)
			{
				mv.addObject("accsessString",accsessString);
			}
			else
			{
				mv.addObject("accsessString",0L);
			}
			
			mv.addObject("csPage", csPage.getHtmlMessage());
			mv.addObject("brandid", brandId);
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("orderid", orderid);
			//mv.addObject("ShoppingCart", cart);
			//mv.addObject("customerRegistration",new UserDetail() );
			
			//mv.addObject("common_css",VeroniqaUtil.getCommonURLAsString("solestruck_min_css", VeroniqaConstants.CSS_URL()+"solestruck.min.css"));
			//mv.addObject("common_js",VeroniqaUtil.getCommonURLAsString("solestruck_min_js", VeroniqaConstants.JS_URL()+"solestruck.min.js"));
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
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestruck.min.js");
			mv.addObject("server",req.getRequestURL());
			
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the loadCustomerServiceManager"+e.getMessage());
			e.printStackTrace();
		}
		
		return mv;
		
	}
	
	@RequestMapping(value="/loadOrderStatusCustomerServicePage.htm",method=RequestMethod.GET)
	public ModelAndView loadOrderStatusCustomerServicePage(HttpServletRequest req)
	{
		log.info("------>>>>>>>>>>>>> Inside loadOrderStatusCustomerServicePage.htm  -------->>>>>>>>>>>>>>>");
		ModelAndView mv = null;
		Long pageID = 0L;
		//get the chosen text and set the id , 
		//cal service method to fetch the static content,
		//add the content to the mv object
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		String custServicePgName = "";
		FrontEndDTO fd=new FrontEndDTO();
		ShoppingCart cart=null;
		
		String resetPassword    = req.getParameter("resetpassword");
		String activateAccount  = req.getParameter("activateAccount");
		String emailId 		    = req.getParameter("emailId");
		String accsessStringStr = req.getParameter("accsessString");
		Long accsessString		= 0L;
		if(accsessStringStr!=null)
		accsessString=Long.parseLong(accsessStringStr);
		try
		{
			Long orderid=null;
			cart=(ShoppingCart)req.getSession().getAttribute("ShoppingCart");
			if(cart!=null)
			{
				orderid=cart.getOrderId();
			}
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			
			
			
				custServicePgName = "order_status";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("ORDER_STATUS"));
				mv = new ModelAndView("order_status");
				
				try
				{
					List<Event> retval=null;
					retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
					
					if(retval==null)
					{
						ArrayList<Object> objects=new ArrayList<Object>();
					
						retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
						if(retval!=null && retval.size()>0)
							MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
						
					}
					if(retval!=null&&retval.size()>0)
						mv.addObject("eventList",retval);
					
					
					
				}
				catch(Exception e)
				{
					log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
				}
			
			CustomerServicePage csPage = new CustomerServicePage();
			
			//csPage = csLoad.getCSPageContentClient(custServicePgName,brandId);
			if(MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES)!=null)
			{
				csPage = (CustomerServicePage) MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from cache");
			}
			else
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList.add(pageID);
				csPage = (CustomerServicePage) RestClientUtil.callService(inputList, "getCSPageById", "CustomerServiceBusinessService");
				if(csPage.getKey()!=null)
				MemcachedUtil.set(custServicePgName,csPage,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from DB");
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			if(MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS)!=null)
			{
				fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				log.info("FrontEndDTO Retrived from cache");
			}
			else
			{
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				if(fd!=null)
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			//cart=ShoppingCartService.getShoppingCart(req); // Commented for not being used by YES
			
			if(resetPassword!=null )
			{
				mv.addObject("resetPassword", true);
			}
			else
			{
				mv.addObject("resetPassword", false);
			}
			if(activateAccount!=null)
			{
				mv.addObject("activateAccount", true);
				mv.addObject("activateaccount", "ActivateAccount");
			}
			else
			{
				mv.addObject("activateAccount", false);
				mv.addObject("activateaccount", "null");
			}
			
			if(emailId!=null)
			{
				mv.addObject("emailId",emailId);
			}
			else
			{
				mv.addObject("emailId","");
			}
			
			if(accsessString!=null)
			{
				mv.addObject("accsessString",accsessString);
			}
			else
			{
				mv.addObject("accsessString",0L);
			}
			
			mv.addObject("csPage", csPage.getHtmlMessage());
			mv.addObject("brandid", brandId);
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("orderid", orderid);
			//mv.addObject("ShoppingCart", cart);
			//mv.addObject("customerRegistration",new UserDetail() );
			
			//mv.addObject("common_css",VeroniqaUtil.getCommonURLAsString("solestruck_min_css", VeroniqaConstants.CSS_URL()+"solestruck.min.css"));
			//mv.addObject("common_js",VeroniqaUtil.getCommonURLAsString("solestruck_min_js", VeroniqaConstants.JS_URL()+"solestruck.min.js"));
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
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestruck.min.js");
			mv.addObject("server",req.getRequestURL());
			
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the loadCustomerServiceManager"+e.getMessage());
			e.printStackTrace();
		}
		
		return mv;
		
	}
	
	@RequestMapping(value="/loadJobsCustomerServicePage.htm",method=RequestMethod.GET)
	public ModelAndView loadJobsCustomerServicePage(HttpServletRequest req)
	{
		log.info("------>>>>>>>>>>>>> Inside loadJobsCustomerServicePage.htm  -------->>>>>>>>>>>>>>>");
		ModelAndView mv = null;
		Long pageID = 0L;
		//get the chosen text and set the id , 
		//cal service method to fetch the static content,
		//add the content to the mv object
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		String custServicePgName = "";
		FrontEndDTO fd=new FrontEndDTO();
		ShoppingCart cart=null;
		
		String resetPassword    = req.getParameter("resetpassword");
		String activateAccount  = req.getParameter("activateAccount");
		String emailId 		    = req.getParameter("emailId");
		String accsessStringStr = req.getParameter("accsessString");
		Long accsessString		= 0L;
		if(accsessStringStr!=null)
		accsessString=Long.parseLong(accsessStringStr);
		try
		{
			Long orderid=null;
			cart=(ShoppingCart)req.getSession().getAttribute("ShoppingCart");
			if(cart!=null)
			{
				orderid=cart.getOrderId();
			}
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			
			
			
				custServicePgName = "jobs";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("JOBS"));
				mv = new ModelAndView("jobs");
				
				
			
			CustomerServicePage csPage = new CustomerServicePage();
			
			//csPage = csLoad.getCSPageContentClient(custServicePgName,brandId);
			if(MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES)!=null)
			{
				csPage = (CustomerServicePage) MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from cache");
			}
			else
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList.add(pageID);
				csPage = (CustomerServicePage) RestClientUtil.callService(inputList, "getCSPageById", "CustomerServiceBusinessService");
				if(csPage.getKey()!=null)
				MemcachedUtil.set(custServicePgName,csPage,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from DB");
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			if(MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS)!=null)
			{
				fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				log.info("FrontEndDTO Retrived from cache");
			}
			else
			{
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				if(fd!=null)
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			//cart=ShoppingCartService.getShoppingCart(req); // Commented for not being used by YES
			
			if(resetPassword!=null )
			{
				mv.addObject("resetPassword", true);
			}
			else
			{
				mv.addObject("resetPassword", false);
			}
			if(activateAccount!=null)
			{
				mv.addObject("activateAccount", true);
				mv.addObject("activateaccount", "ActivateAccount");
			}
			else
			{
				mv.addObject("activateAccount", false);
				mv.addObject("activateaccount", "null");
			}
			
			if(emailId!=null)
			{
				mv.addObject("emailId",emailId);
			}
			else
			{
				mv.addObject("emailId","");
			}
			
			if(accsessString!=null)
			{
				mv.addObject("accsessString",accsessString);
			}
			else
			{
				mv.addObject("accsessString",0L);
			}
			
			try
			{
				List<Event> retval=null;
				retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
				
				if(retval==null)
				{
					ArrayList<Object> object=new ArrayList<Object>();
				
					retval=(List<Event>)RestClientUtil.callService(object, "getAllOnLiveEvents", "EventManagerBusinessService");
					if(retval!=null && retval.size()>0)
						MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
					
				}
				if(retval!=null&&retval.size()>0)
					mv.addObject("eventList",retval);
				
				
				
			}
			catch(Exception e)
			{
				log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
			}
			
			mv.addObject("csPage", csPage.getHtmlMessage());
			mv.addObject("brandid", brandId);
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("orderid", orderid);
			//mv.addObject("ShoppingCart", cart);
			//mv.addObject("customerRegistration",new UserDetail() );
			
			//mv.addObject("common_css",VeroniqaUtil.getCommonURLAsString("solestruck_min_css", VeroniqaConstants.CSS_URL()+"solestruck.min.css"));
			//mv.addObject("common_js",VeroniqaUtil.getCommonURLAsString("solestruck_min_js", VeroniqaConstants.JS_URL()+"solestruck.min.js"));
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
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestruck.min.js");
			mv.addObject("server",req.getRequestURL());
			
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the loadCustomerServiceManager"+e.getMessage());
			e.printStackTrace();
		}
		
		return mv;
		
	}
	
	@RequestMapping(value="/loadAffiliatesCustomerServicePage.htm",method=RequestMethod.GET)
	public ModelAndView loadAffiliatesCustomerServicePage(HttpServletRequest req)
	{
		log.info("------>>>>>>>>>>>>> Inside loadAffiliatesCustomerServicePage.htm  -------->>>>>>>>>>>>>>>");
		ModelAndView mv = null;
		Long pageID = 0L;
		//get the chosen text and set the id , 
		//cal service method to fetch the static content,
		//add the content to the mv object
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		String custServicePgName = "";
		FrontEndDTO fd=new FrontEndDTO();
		ShoppingCart cart=null;
		
		String resetPassword    = req.getParameter("resetpassword");
		String activateAccount  = req.getParameter("activateAccount");
		String emailId 		    = req.getParameter("emailId");
		String accsessStringStr = req.getParameter("accsessString");
		Long accsessString		= 0L;
		if(accsessStringStr!=null)
		accsessString=Long.parseLong(accsessStringStr);
		try
		{
			Long orderid=null;
			cart=(ShoppingCart)req.getSession().getAttribute("ShoppingCart");
			if(cart!=null)
			{
				orderid=cart.getOrderId();
			}
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			
			
			
				custServicePgName = "Affiliates";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("AFFILIATES"));
				mv = new ModelAndView("Affiliates");
			
			CustomerServicePage csPage = new CustomerServicePage();
			
			//csPage = csLoad.getCSPageContentClient(custServicePgName,brandId);
			if(MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES)!=null)
			{
				csPage = (CustomerServicePage) MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from cache");
			}
			else
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList.add(pageID);
				csPage = (CustomerServicePage) RestClientUtil.callService(inputList, "getCSPageById", "CustomerServiceBusinessService");
				if(csPage.getKey()!=null)
				MemcachedUtil.set(custServicePgName,csPage,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from DB");
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			if(MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS)!=null)
			{
				fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				log.info("FrontEndDTO Retrived from cache");
			}
			else
			{
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				if(fd!=null)
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			try
			{
				List<Event> eventList=null;
				eventList=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
				
				if(eventList==null)
				{
					ArrayList<Object> params=new ArrayList<Object>();
				
					eventList=(List<Event>)RestClientUtil.callService(params, "getAllOnLiveEvents", "EventManagerBusinessService");
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
			
			//cart=ShoppingCartService.getShoppingCart(req); // Commented for not being used by YES
			
			if(resetPassword!=null )
			{
				mv.addObject("resetPassword", true);
			}
			else
			{
				mv.addObject("resetPassword", false);
			}
			if(activateAccount!=null)
			{
				mv.addObject("activateAccount", true);
				mv.addObject("activateaccount", "ActivateAccount");
			}
			else
			{
				mv.addObject("activateAccount", false);
				mv.addObject("activateaccount", "null");
			}
			
			if(emailId!=null)
			{
				mv.addObject("emailId",emailId);
			}
			else
			{
				mv.addObject("emailId","");
			}
			
			if(accsessString!=null)
			{
				mv.addObject("accsessString",accsessString);
			}
			else
			{
				mv.addObject("accsessString",0L);
			}
			
			mv.addObject("csPage", csPage.getHtmlMessage());
			mv.addObject("brandid", brandId);
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("orderid", orderid);
			//mv.addObject("ShoppingCart", cart);
			//mv.addObject("customerRegistration",new UserDetail() );
			
			//mv.addObject("common_css",VeroniqaUtil.getCommonURLAsString("solestruck_min_css", VeroniqaConstants.CSS_URL()+"solestruck.min.css"));
			//mv.addObject("common_js",VeroniqaUtil.getCommonURLAsString("solestruck_min_js", VeroniqaConstants.JS_URL()+"solestruck.min.js"));
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
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestruck.min.js");
			mv.addObject("server",req.getRequestURL());
			
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the loadCustomerServiceManager"+e.getMessage());
			e.printStackTrace();
		}
		
		return mv;
	}
	
	@RequestMapping(value="/loadShippingCustomerServicePage.htm",method=RequestMethod.GET)
	public ModelAndView loadShippingCustomerServicePage(HttpServletRequest req) throws NumberFormatException, Exception
	{

		log.info("------>>>>>>>>>>>>> Inside loadShippingCustomerServicePage.htm  -------->>>>>>>>>>>>>>>");
		ModelAndView mv = null;
		Long pageID = 0L;
		//get the chosen text and set the id , 
		//cal service method to fetch the static content,
		//add the content to the mv object
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		String custServicePgName = "";
		FrontEndDTO fd=new FrontEndDTO();
		ShoppingCart cart=null;
		
		String resetPassword    = req.getParameter("resetpassword");
		String activateAccount  = req.getParameter("activateAccount");
		String emailId 		    = req.getParameter("emailId");
		String accsessStringStr = req.getParameter("accsessString");
		Long accsessString		= 0L;
		if(accsessStringStr!=null)
		accsessString=Long.parseLong(accsessStringStr);
		try
		{
			Long orderid=null;
			cart=(ShoppingCart)req.getSession().getAttribute("ShoppingCart");
			if(cart!=null)
			{
				orderid=cart.getOrderId();
			}
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			List<States> sList=null;
			List serviceParams=new ArrayList();
			
				serviceParams.add(brandId);
				serviceParams.add("US");
				sList=(List<States>)RestClientUtil.callService(serviceParams,"getAllEnabledStates","ShippingBusinessService");
				Collections.sort(sList);					
				log.info("shipping list :: "+sList.size());
				custServicePgName = "shipping";
				pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("SHIPPING"));
				mv = new ModelAndView("shipping");
				
				try
				{
					List<Event> retval=null;
					retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
					
					if(retval==null)
					{
						ArrayList<Object> objects=new ArrayList<Object>();
					
						retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
						if(retval!=null && retval.size()>0)
							MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
						
					}
					if(retval!=null&&retval.size()>0)
						mv.addObject("eventList",retval);
					
					
					
				}
				catch(Exception e)
				{
					log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
				}
				mv.addObject("stateList", sList);
			CustomerServicePage csPage = new CustomerServicePage();
			
			//csPage = csLoad.getCSPageContentClient(custServicePgName,brandId);
			if(MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES)!=null)
			{
				csPage = (CustomerServicePage) MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from cache");
			}
			else
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList.add(pageID);
				csPage = (CustomerServicePage) RestClientUtil.callService(inputList, "getCSPageById", "CustomerServiceBusinessService");
				if(csPage.getKey()!=null)
				MemcachedUtil.set(custServicePgName,csPage,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from DB");
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			if(MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS)!=null)
			{
				fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				log.info("FrontEndDTO Retrived from cache");
			}
			else
			{
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				if(fd!=null)
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			//cart=ShoppingCartService.getShoppingCart(req);  // Commented for not being used by YES
			
			if(resetPassword!=null )
			{
				mv.addObject("resetPassword", true);
			}
			else
			{
				mv.addObject("resetPassword", false);
			}
			if(activateAccount!=null)
			{
				mv.addObject("activateAccount", true);
				mv.addObject("activateaccount", "ActivateAccount");
			}
			else
			{
				mv.addObject("activateAccount", false);
				mv.addObject("activateaccount", "null");
			}
			
			if(emailId!=null)
			{
				mv.addObject("emailId",emailId);
			}
			else
			{
				mv.addObject("emailId","");
			}
			
			if(accsessString!=null)
			{
				mv.addObject("accsessString",accsessString);
			}
			else
			{
				mv.addObject("accsessString",0L);
			}
			
			mv.addObject("csPage", csPage.getHtmlMessage());
			mv.addObject("brandid", brandId);
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("orderid", orderid);
			//mv.addObject("ShoppingCart", cart);
			//mv.addObject("customerRegistration",new UserDetail() );
			
			//mv.addObject("common_css",VeroniqaUtil.getCommonURLAsString("solestruck_min_css", VeroniqaConstants.CSS_URL()+"solestruck.min.css"));
			//mv.addObject("common_js",VeroniqaUtil.getCommonURLAsString("solestruck_min_js", VeroniqaConstants.JS_URL()+"solestruck.min.js"));
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
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestruck.min.js");
			mv.addObject("server",req.getRequestURL());
			
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the loadCustomerServiceManager"+e.getMessage());
			e.printStackTrace();
		}
		
		return mv;
	}
			
	@RequestMapping(value="/loadInternationalCustomerServicePage.htm",method=RequestMethod.GET)
	public ModelAndView loadInternationalCustomerServicePage(HttpServletRequest req) throws NumberFormatException, Exception
	{
		log.info("------>>>>>>>>>>>>> Inside loadInternationalCustomerServicePage.htm  -------->>>>>>>>>>>>>>>");
		ModelAndView mv = null;
		Long pageID = 0L;
		//get the chosen text and set the id , 
		//cal service method to fetch the static content,
		//add the content to the mv object
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		String custServicePgName = "";
		FrontEndDTO fd=new FrontEndDTO();
		ShoppingCart cart=null;
		
		String resetPassword    = req.getParameter("resetpassword");
		String activateAccount  = req.getParameter("activateAccount");
		String emailId 		    = req.getParameter("emailId");
		String accsessStringStr = req.getParameter("accsessString");
		Long accsessString		= 0L;
		if(accsessStringStr!=null)
		accsessString=Long.parseLong(accsessStringStr);
		try
		{
			Long orderid=null;
			cart=(ShoppingCart)req.getSession().getAttribute("ShoppingCart");
			if(cart!=null)
			{
				orderid=cart.getOrderId();
			}
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			
			List<Country> cList=null;
			List serviceParams=new ArrayList();
			try
			{
				serviceParams.add(brandId);
				cList=(List<Country>)RestClientUtil.callService(serviceParams,"getAllEnabledCountries","ShippingBusinessService");
				Collections.sort(cList);
			}
			catch(Exception e)
			{
				e.printStackTrace();
				log.warning("An error occured in the getAllCountries"+e.getMessage());
			}
			custServicePgName = "International";
			log.info("size of the country list :: "+cList.size());
			pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("INTERNATIONAL"));
			mv = new ModelAndView("International");
			
			try
			{
				List<Event> retval=null;
				retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
				
				if(retval==null)
				{
					ArrayList<Object> objects=new ArrayList<Object>();
				
					retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
					if(retval!=null && retval.size()>0)
						MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
					
				}
				if(retval!=null&&retval.size()>0)
					mv.addObject("eventList",retval);
				
				
				
			}
			catch(Exception e)
			{
				log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
			}
			
			mv.addObject("countryList", cList);
			CustomerServicePage csPage = new CustomerServicePage();
			
			//csPage = csLoad.getCSPageContentClient(custServicePgName,brandId);
			if(MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES)!=null)
			{
				csPage = (CustomerServicePage) MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from cache");
			}
			else
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList.add(pageID);
				csPage = (CustomerServicePage) RestClientUtil.callService(inputList, "getCSPageById", "CustomerServiceBusinessService");
				if(csPage.getKey()!=null)
				MemcachedUtil.set(custServicePgName,csPage,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from DB");
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			if(MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS)!=null)
			{
				fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				log.info("FrontEndDTO Retrived from cache");
			}
			else
			{
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				if(fd!=null)
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			//cart=ShoppingCartService.getShoppingCart(req); // Commented for not being used by YES
			
			if(resetPassword!=null )
			{
				mv.addObject("resetPassword", true);
			}
			else
			{
				mv.addObject("resetPassword", false);
			}
			if(activateAccount!=null)
			{
				mv.addObject("activateAccount", true);
				mv.addObject("activateaccount", "ActivateAccount");
			}
			else
			{
				mv.addObject("activateAccount", false);
				mv.addObject("activateaccount", "null");
			}
			
			if(emailId!=null)
			{
				mv.addObject("emailId",emailId);
			}
			else
			{
				mv.addObject("emailId","");
			}
			
			if(accsessString!=null)
			{
				mv.addObject("accsessString",accsessString);
			}
			else
			{
				mv.addObject("accsessString",0L);
			}
			
			mv.addObject("csPage", csPage.getHtmlMessage());
			mv.addObject("brandid", brandId);
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("orderid", orderid);
			//mv.addObject("ShoppingCart", cart);
			//mv.addObject("customerRegistration",new UserDetail() );
			
			//mv.addObject("common_css",VeroniqaUtil.getCommonURLAsString("solestruck_min_css", VeroniqaConstants.CSS_URL()+"solestruck.min.css"));
			//mv.addObject("common_js",VeroniqaUtil.getCommonURLAsString("solestruck_min_js", VeroniqaConstants.JS_URL()+"solestruck.min.js"));
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
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestruck.min.js");
			mv.addObject("server",req.getRequestURL());
			
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the loadCustomerServiceManager"+e.getMessage());
			e.printStackTrace();
		}
		
		return mv;
	}
	
	@RequestMapping(value="/loadGiftcertificatesCustomerServicePage.htm",method=RequestMethod.GET)
	public ModelAndView loadGiftcertificatesCustomerServicePage(HttpServletRequest req) throws NumberFormatException, Exception
	{
		log.info("------>>>>>>>>>>>>> Inside loadGiftcertificatesCustomerServicePage.htm  -------->>>>>>>>>>>>>>>");
		ModelAndView mv = null;
		Long pageID = 0L;
		//get the chosen text and set the id , 
		//cal service method to fetch the static content,
		//add the content to the mv object
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		String custServicePgName = "";
		FrontEndDTO fd=new FrontEndDTO();
		ShoppingCart cart=null;
		
		String resetPassword    = req.getParameter("resetpassword");
		String activateAccount  = req.getParameter("activateAccount");
		String emailId 		    = req.getParameter("emailId");
		String accsessStringStr = req.getParameter("accsessString");
		Long accsessString		= 0L;
		if(accsessStringStr!=null)
		accsessString=Long.parseLong(accsessStringStr);
		try
		{
			Long orderid=null;
			cart=(ShoppingCart)req.getSession().getAttribute("ShoppingCart");
			if(cart!=null)
			{
				orderid=cart.getOrderId();
			}
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			
			List<Country> cList=null;
			List serviceParams=new ArrayList();
			try
			{
				serviceParams.add(brandId);
				cList=(List<Country>)RestClientUtil.callService(serviceParams,"getAllEnabledCountries","ShippingBusinessService");
				Collections.sort(cList);
			}
			catch(Exception e)
			{
				e.printStackTrace();
				log.warning("An error occured in the getAllCountries"+e.getMessage());
			}
			custServicePgName = "paypalcustomerservice";
			log.info("size of the country list :: "+cList.size());
			pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("PAYPAL_CUSTOMER_SERVICE"));
			mv = new ModelAndView("paypalcustomerservice");
			
			try
			{
				List<Event> retval=null;
				retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
				
				if(retval==null)
				{
					ArrayList<Object> objects=new ArrayList<Object>();
				
					retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
					if(retval!=null && retval.size()>0)
						MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
					
				}
				if(retval!=null&&retval.size()>0)
					mv.addObject("eventList",retval);
				
				
				
			}
			catch(Exception e)
			{
				log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
			}
			mv.addObject("countryList", cList);
			CustomerServicePage csPage = new CustomerServicePage();
			
			//csPage = csLoad.getCSPageContentClient(custServicePgName,brandId);
			if(MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES)!=null)
			{
				csPage = (CustomerServicePage) MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from cache");
			}
			else
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList.add(pageID);
				csPage = (CustomerServicePage) RestClientUtil.callService(inputList, "getCSPageById", "CustomerServiceBusinessService");
				if(csPage.getKey()!=null)
				MemcachedUtil.set(custServicePgName,csPage,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
				log.info("CUSTOMER_SERVICE_PAGES data retrived from DB");
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			if(MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS)!=null)
			{
				fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				log.info("FrontEndDTO Retrived from cache");
			}
			else
			{
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				if(fd!=null)
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			//cart=ShoppingCartService.getShoppingCart(req); // Commented for not being used by YES
			
			if(resetPassword!=null )
			{
				mv.addObject("resetPassword", true);
			}
			else
			{
				mv.addObject("resetPassword", false);
			}
			if(activateAccount!=null)
			{
				mv.addObject("activateAccount", true);
				mv.addObject("activateaccount", "ActivateAccount");
			}
			else
			{
				mv.addObject("activateAccount", false);
				mv.addObject("activateaccount", "null");
			}
			
			if(emailId!=null)
			{
				mv.addObject("emailId",emailId);
			}
			else
			{
				mv.addObject("emailId","");
			}
			
			if(accsessString!=null)
			{
				mv.addObject("accsessString",accsessString);
			}
			else
			{
				mv.addObject("accsessString",0L);
			}
			
			mv.addObject("csPage", csPage.getHtmlMessage());
			mv.addObject("brandid", brandId);
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("orderid", orderid);
			//mv.addObject("ShoppingCart", cart);
			//mv.addObject("customerRegistration",new UserDetail() );
			
			//mv.addObject("common_css",VeroniqaUtil.getCommonURLAsString("solestruck_min_css", VeroniqaConstants.CSS_URL()+"solestruck.min.css"));
			//mv.addObject("common_js",VeroniqaUtil.getCommonURLAsString("solestruck_min_js", VeroniqaConstants.JS_URL()+"solestruck.min.js"));
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
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestruck.min.js");
			mv.addObject("server",req.getRequestURL());
			
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the loadCustomerServiceManager"+e.getMessage());
			e.printStackTrace();
		}
		
		return mv;
	}
	
	@RequestMapping(value="/loadFacebookShopCSpage.htm")
	public ModelAndView loadFacebookShopCSpage(HttpServletRequest req) throws NumberFormatException, Exception
	{
		log.info("------>>>>>>>>>>>>> Inside loadFacebookShopCSpage.htm  -------->>>>>>>>>>>>>>>");
		ModelAndView mv = null;
		Long pageID = 0L;
		String custServicePgName = "";
		try
		{
		pageID = Long.parseLong(EnvironmentUtil.getEnvironmentValue("FACEBOOK_SHOP"));
		mv = new ModelAndView("FacebookShop");
		CustomerServicePage csPage = new CustomerServicePage();
		custServicePgName="FacebookShop";
		if(MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES)!=null)
		{
			csPage = (CustomerServicePage) MemcachedUtil.get(custServicePgName,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
			log.info("CUSTOMER_SERVICE_PAGES data retrived from cache");
		}
		else
		{
			List<Object> inputList = new ArrayList<Object>();
			inputList.add(pageID);
			csPage = (CustomerServicePage) RestClientUtil.callService(inputList, "getCSPageById", "CustomerServiceBusinessService");
			if(csPage.getKey()!=null)
			MemcachedUtil.set(custServicePgName,csPage,MemcachedConstants.CUSTOMER_SERVICE_PAGES);
			log.info("CUSTOMER_SERVICE_PAGES data retrived from DB");
		}
			mv.addObject("csPage", csPage.getHtmlMessage());
		
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the loadCustomerServiceManager"+e.getMessage());
			e.printStackTrace();
		}
		
		return mv;
	}
}

