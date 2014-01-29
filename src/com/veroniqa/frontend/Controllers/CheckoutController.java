package com.veroniqa.frontend.Controllers;

import static com.google.appengine.api.taskqueue.TaskOptions.Builder.withUrl;

import java.math.BigDecimal;
import java.text.DateFormat;
import java.text.DecimalFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.logging.Logger;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.acti.payment.paypal.bean.CreditCard;
import com.google.appengine.api.taskqueue.Queue;
import com.google.appengine.api.taskqueue.QueueFactory;
import com.google.appengine.api.taskqueue.RetryOptions;
import com.google.appengine.api.taskqueue.TaskOptions.Method;
import com.veroniqa.commonservices.CheckoutActionService;
import com.veroniqa.dto.CheckoutDetailDTO;
import com.veroniqa.dto.CheckoutResponseDTO;
import com.veroniqa.dto.ColorSizeDTO;
import com.veroniqa.dto.ColorVariantDTO;
import com.veroniqa.dto.CountryDTO;
import com.veroniqa.dto.CustomerDetailDTO;
import com.veroniqa.dto.FrontEndDTO;
import com.veroniqa.dto.IPhoneDTO;
import com.veroniqa.dto.LineItemDTO;
import com.veroniqa.dto.PaymentDetailDTO;
import com.veroniqa.dto.ProductDetailDTO;
import com.veroniqa.dto.ShippingAddressDTO;
import com.veroniqa.dto.ShippingServiceDTO;
import com.veroniqa.dto.ShoppingCart;
import com.veroniqa.dto.ShoppingResponseDTO;
import com.veroniqa.frontend.service.CheckoutService;
import com.veroniqa.frontend.service.ShoppingCartService;
import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.MemcachedConstants;
import com.veroniqa.frontend.util.MemcachedUtil;
import com.veroniqa.frontend.util.RestClientUtil;
import com.veroniqa.frontend.util.VeroniqaConstants;
import com.veroniqa.frontend.util.VeroniqaCookieUtil;
import com.veroniqa.frontend.util.VeroniqaUtil;
import com.veroniqa.jdo.Attribute;
import com.veroniqa.jdo.BillingAddress;
import com.veroniqa.jdo.Customer;
import com.veroniqa.jdo.DiscountProgram;
import com.veroniqa.jdo.IDPUrl;
import com.veroniqa.jdo.Lookup;
import com.veroniqa.jdo.Order;
import com.veroniqa.jdo.OrderLine;
import com.veroniqa.jdo.OrderThreshold;
import com.veroniqa.jdo.ProductData;
import com.veroniqa.jdo.ShippingAddress;
import com.veroniqa.jdo.States;
import com.veroniqa.jdo.WhiteListIPsJdo;
import com.veroniqa.payment.PaymentClientService;
import com.veroniqa.payment.PaymentMessageUtil;


@Controller
public class CheckoutController extends CheckoutActionService{
	private static Logger log=Logger.getLogger(CheckoutController.class.getSimpleName());
	
	@RequestMapping(value="/checkout/sign-in.htm")
	public ModelAndView signInCheckout(HttpServletRequest req,HttpServletResponse res) throws Exception
	{
		ModelAndView mv=new ModelAndView("checkout");
		ShoppingResponseDTO shoppingResponse=null;
		try
		{
			log.info("Inside Checkout-SignIn.");
			int checkout_step=1;
			ShoppingCart shoppingCart=ShoppingCartService.getShoppingCart(req);
			if(shoppingCart==null){
				log.warning("Shopping Cart NOT Found in Checkout-SignIn!");
				mv=new ModelAndView(new RedirectView("/redirectToNonSecurePage.htm?rdirectURL=/"));
				return mv;
			}
			if(shoppingCart.getLineItems()==null||shoppingCart.getLineItems().size()==0){
				log.warning("Shopping Cart is Empty in Checkout-SignIn!");
				mv=new ModelAndView(new RedirectView("/redirectToNonSecurePage.htm?rdirectURL=/"));
				return mv;
			}
			
			Set<Long> productIds=new HashSet<Long>();
			for(LineItemDTO ld:shoppingCart.getLineItems())	{
					productIds.add(ld.getProductId());
			}
			List<Object> inputList = new ArrayList<Object>();
			inputList.add(productIds);
			Map<Long,Set<ColorVariantDTO>> inventoryMap = (Map<Long, Set<ColorVariantDTO>>) RestClientUtil.callService(inputList, "getInventoryDetailForAllProducts", "ShoppingCartBusinessService");
			shoppingResponse=new ShoppingResponseDTO();
			shoppingResponse.setInventory(inventoryMap);
			shoppingResponse.setShoppingCart(shoppingCart);
			
			String orderId=VeroniqaCookieUtil.getCookieValue(req, VeroniqaConstants.ORDER_ID);	
			//Domain changes done so no need to forward the order id cookie as url parameter
			/*if(req.getParameter(VeroniqaConstants.ORDER_ID)!=null)
			{
				orderId=req.getParameter(VeroniqaConstants.ORDER_ID);
				VeroniqaCookieUtil.createNewCookie(req, res,VeroniqaConstants.ORDER_ID,orderId, 86400*7);
			}*/
			log.info("Order ID in Checkout-SignIn:"+orderId);
			CheckoutDetailDTO checkoutDetails=getCheckoutDetails(orderId);
			checkoutDetails=checkoutDetails==null?new CheckoutDetailDTO():checkoutDetails;
			checkoutDetails.setShoppingCart(shoppingCart);
			//if(checkoutDetails.getCheckoutStep()==null)
			checkoutDetails.setCheckoutStep(0);
			//checkoutDetails.setCheckoutStep(checkout_step>checkoutDetails.getCheckoutStep().intValue()?checkout_step:checkoutDetails.getCheckoutStep());
			
			// This is added for Solestruck Single Sign-On by YES
			
			String cusId="";
			if(req.getSession().getAttribute("customerid")!=null)
				cusId=req.getSession().getAttribute("customerid").toString();
			log.info("*******  Inside CheckoutSignIn And Customer ID is  ***************  : "  +cusId);
			if(cusId!=null && !cusId.equalsIgnoreCase(""))
			{
				log.info("Customer ID Found in Session for Checkout-SignIn!");
				checkout_step=2;
				mv=new ModelAndView(new RedirectView("/checkout/account-info.htm"));
				String brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY)==null?"1":EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
				Long brandid=Long.parseLong(brandstr);
				Set<CountryDTO> countryList=(Set<CountryDTO>)MemcachedUtil.get(MemcachedConstants.COUNTRYLIST, MemcachedConstants.SHOPPING_CART_NAMESPACE);
				if(countryList==null)
				{
					List<Object> serviceParams=new ArrayList<Object>();
					serviceParams.add(brandid);
					countryList=(Set<CountryDTO>)RestClientUtil.callService(serviceParams,"getCountryWithStates","ShippingBusinessService");
					MemcachedUtil.set(MemcachedConstants.COUNTRYLIST,countryList,MemcachedConstants.SHOPPING_CART_NAMESPACE);
				}
				Map<String,CountryDTO> countryMap=new LinkedHashMap<String,CountryDTO>();
				if(countryList!=null){
					for(CountryDTO country:countryList)
						countryMap.put(country.getCountryCode(), country);
				}
				List<Object> inputList1 = new ArrayList<Object>();
				inputList1.add(Long.parseLong(cusId));
				CustomerDetailDTO customerDetail=(CustomerDetailDTO) RestClientUtil.callService(inputList1, "getCustomerDetailByCustomerId", "CustomerBusinessService");
				checkoutDetails.setCustomerDetailDTO(customerDetail);
				checkoutDetails.setCheckoutStep(checkout_step);
				setCheckoutDetails(checkoutDetails,orderId,false);
				mv.addObject("CART_DETAILS", shoppingResponse);
				//mv.addObject("brandid", brandid);
				//log.info(" size :"+countryMap.size());
				mv.addObject("countryMap",countryMap);
				//mv.addObject("CHECKOUT_STEP",checkout_step);
				mv.addObject("CHECKOUT_DETAILS",checkoutDetails);
				
				res.setHeader("Cache-Control","no-cache, no-store, must-revalidate");
				res.setHeader("Pragma","no-cache");
				res.setHeader("Expires", "0");
				return mv;
			}
		
		// Upto here This is added for Solestruck Single Sign-On by YES
			Map<String,CountryDTO> countryMap= new CheckoutService().getListOfCountriesForCheckOut();	
			setCheckoutDetails(checkoutDetails,orderId,false);
			mv.addObject("countryMap",countryMap);
			mv.addObject("CART_DETAILS", shoppingResponse);
			mv.addObject("CHECKOUT_STEP",checkout_step);
			mv.addObject("CHECKOUT_DETAILS",checkoutDetails);
			//mv.addObject("ZineDTO",new CheckoutService().getSolestruckMagazineDetails());
			mv.addObject("KoozieDTO",new CheckoutService().getCheckoutSplItemKoozie());
			res.setHeader("Cache-Control","no-cache, no-store, must-revalidate");
			res.setHeader("Pragma","no-cache");
			res.setHeader("Expires", "0");
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("An error occured in the Checkout-SignIn:"+e.getMessage());
			throw e;
		}

		return mv;
	}
	
	@RequestMapping(value="/checkout/account-info.htm")
	public ModelAndView checkoutAccountInfo(HttpServletRequest req,HttpServletResponse res) throws Exception
	{
		ModelAndView mv=new ModelAndView("checkout");
		try
		{
			String orderId=VeroniqaCookieUtil.getCookieValue(req, VeroniqaConstants.ORDER_ID);
			String brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY)==null?"1":EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
			Long brandid=Long.parseLong(brandstr);
			/*String email ="";
			String fname="";
			String lname="";
			
			if(req.getSession().getAttribute("email")!="" && req.getSession().getAttribute("email")!=null){
				email = (String) req.getSession().getAttribute("email");
			}
			
			if(req.getSession().getAttribute("fname")!="" && req.getSession().getAttribute("fname")!=null){
				fname = (String) req.getSession().getAttribute("fname");
			}
			
			if(req.getSession().getAttribute("lname")!="" && req.getSession().getAttribute("lname")!=null){
				lname = (String) req.getSession().getAttribute("lname");
			}*/
			log.info("Inside Checkout Account Info.orderId:"+orderId);
			final int checkout_step=2;
			ShoppingCart shoppingCart=ShoppingCartService.getShoppingCart(req);
			if(shoppingCart==null){
				log.warning("Shopping Cart NOT Found in Checkout-AccountInfo!");
				mv=new ModelAndView(new RedirectView("/redirectToNonSecurePage.htm?rdirectURL=/"));
				return mv;
			}
			if(shoppingCart.getLineItems()==null||shoppingCart.getLineItems().size()==0){
				log.warning("Shopping Cart is Empty in Checkout-AccountInfo!");
				mv=new ModelAndView(new RedirectView("/redirectToNonSecurePage.htm?rdirectURL=/"));
				return mv;
			}
			
			String cusId="";
			
			CheckoutDetailDTO checkoutDetails= null;
			
			if(req.getSession().getAttribute("customerid")!=null)

				cusId=req.getSession().getAttribute("customerid").toString();
			
			if(cusId!=null && !cusId.equalsIgnoreCase(""))
			{
			
				 checkoutDetails=getCheckoutDetails(orderId);
				
				checkoutDetails=checkoutDetails==null?new CheckoutDetailDTO():checkoutDetails;
	
				checkoutDetails.setShoppingCart(shoppingCart);
	
				//if(checkoutDetails.getCheckoutStep()==null)
	
				checkoutDetails.setCheckoutStep(2);
			}

			//checkoutDetails.setCheckoutStep(checkout_step>checkoutDetails.getCheckoutStep().intValue()?checkout_step:checkoutDetails.getCheckoutStep());


			// This is added for Solestruck Single Sign-On by YES


			

			

			log.info("*******  Inside CheckoutAccountInfo---------- And Customer ID is  ***************  : "  +cusId);
			
			Map<String,CountryDTO> countryMap=new LinkedHashMap<String,CountryDTO>();

			if(cusId!=null && !cusId.equalsIgnoreCase(""))

			{

			log.info("Customer ID Found in Session for Checkout-SignIn!");

			Set<CountryDTO> countryList=(Set<CountryDTO>)MemcachedUtil.get(MemcachedConstants.COUNTRYLIST, MemcachedConstants.SHOPPING_CART_NAMESPACE);

			if(countryList==null)
			{
				List<Object> serviceParams=new ArrayList<Object>();
				serviceParams.add(brandid);
				countryList=(Set<CountryDTO>)RestClientUtil.callService(serviceParams,"getCountryWithStates","ShippingBusinessService");
				MemcachedUtil.set(MemcachedConstants.COUNTRYLIST,countryList,MemcachedConstants.SHOPPING_CART_NAMESPACE);
			}


			if(countryList!=null){
				for(CountryDTO country:countryList)
				countryMap.put(country.getCountryCode(), country);
			}

			List<Object> inputList1 = new ArrayList<Object>();
			inputList1.add(Long.parseLong(cusId));
			CustomerDetailDTO customerDetail=(CustomerDetailDTO) RestClientUtil.callService(inputList1, "getCustomerDetailByCustomerId", "CustomerBusinessService");
			checkoutDetails.setCustomerDetailDTO(customerDetail);
			checkoutDetails.setCheckoutStep(checkout_step);
			setCheckoutDetails(checkoutDetails,orderId,false);
			}
			
			if(checkoutDetails==null||checkoutDetails.getCheckoutStep()==null||checkoutDetails.getCheckoutStep().intValue()<1){
				log.warning("Either CheckoutDetails NOT Found. Or Tried to skip the Checkout Step");
				mv=new ModelAndView(new RedirectView("/checkout/sign-in.htm"));
				return mv;
			}
			
			
			Set<Long> productIds=new HashSet<Long>();
			for(LineItemDTO ld:shoppingCart.getLineItems()){
					productIds.add(ld.getProductId());
			}
			List<Object> inputList = new ArrayList<Object>();
			inputList.add(productIds);
			Map<Long,Set<ColorVariantDTO>> inventoryMap = (Map<Long, Set<ColorVariantDTO>>) RestClientUtil.callService(inputList, "getInventoryDetailForAllProducts", "ShoppingCartBusinessService");
			ShoppingResponseDTO shoppingResponse=new ShoppingResponseDTO();
			shoppingResponse.setInventory(inventoryMap);
			shoppingResponse.setShoppingCart(shoppingCart);
			
			
					// This is added for Solestruck Single Sign-On by YES
			//log.info("******* Customer ID is  ***************  : "  +req.getSession().getAttribute("customerid"));
//			if(req.getSession().getAttribute("customerid")==null || req.getSession().getAttribute("customerid").equals(""))
//			{
				//log.info("**********>>>>>>   CustomerId in Session is  ***********>>>>>>>>>  : " +checkoutDetails.getCustomerDetailDTO().getCustomerId());
				//req.getSession().setAttribute("username", checkoutDetails.getCustomerDetailDTO().getEmail());
				if(checkoutDetails!=null & checkoutDetails.getCustomerDetailDTO().getCustomerId()!=null)
				{
					req.getSession().setAttribute("loggedin", true);
					req.getSession().setAttribute("customerid",checkoutDetails.getCustomerDetailDTO().getCustomerId().toString());
					MemcachedUtil.remove("HOMEPAGE", MemcachedConstants.PAGE_CACHE);
				}
				
				
			//}
			
			// Upto here This is added for Solestruck Single Sign-On by YES
			
			
			//FinalSale changes by v2m
			Boolean cookieExists=true;
			if(VeroniqaCookieUtil.getCookieValue(req, VeroniqaConstants.FACEBOOK)==null && VeroniqaUtil.getDiscountProgramForFB()!=null && checkoutDetails.getCustomerDetailDTO().getCustomerId()!=null && !VeroniqaUtil.getDiscountProgramForFB().getProgramTypeName().equalsIgnoreCase("order"))
			{
				
				log.info("facebook cookie is "+VeroniqaCookieUtil.getCookieValue(req, VeroniqaConstants.FACEBOOK)+"discount program is "+VeroniqaUtil.getDiscountProgramForFB()+" customer id is "+checkoutDetails.getCustomerDetailDTO().getCustomerId()+"");
				cookieExists=false;
				Cookie cookie=VeroniqaCookieUtil.createNewCookie(req, res, VeroniqaConstants.FACEBOOK, VeroniqaConstants.FACEBOOK,1*24*60*60);
				res.addCookie(cookie);
			}
			req.getSession().setAttribute("acccheckoutDetails", checkoutDetails);
			/*Double salePercentage = VeroniqaUtil.getDiscountPercentageForFB(); 
			String salePercentageStr=salePercentage.toString();
			salePercentageStr=salePercentageStr.substring(0, salePercentageStr.indexOf('.'));			
			log.info("the sale percentage is :: "+salePercentageStr);
			String Status = (String) req.getSession().getAttribute("status");
			log.info(" status ============== :"+Status);
			/*if(Status!=null && Status.equalsIgnoreCase("checkout") && !"".equals(email) && !"".equals(fname) && !"".equals(lname) && email!=null && fname!=null && lname!=null)
			{
				mv.addObject("fromga", "facebook");
				log.info("from inside the if ----------- ");
				mv.addObject("from","fb");
				mv.addObject("email", email);
				mv.addObject("fname", fname);
				mv.addObject("lname", lname);
				req.getSession().setAttribute("status", null);
			}
			else
			{
				log.info("from inside the else ----------- ");
				mv.addObject("from","");
				mv.addObject("email", "");
				mv.addObject("fname", "");
				mv.addObject("lname", "");
			}
			mv.addObject("percentage", salePercentageStr);*/
			//log.info(" checkoutDetails  "+checkoutDetails.getCustomerDetailDTO().getBillingAddress().getFirstName());
			mv.addObject("cookieExists", cookieExists);
			mv.addObject("CART_DETAILS", shoppingResponse);
			mv.addObject("brandid", brandid);
			
			mv.addObject("countryMap",countryMap);
			mv.addObject("CHECKOUT_STEP",checkout_step);
			mv.addObject("CHECKOUT_DETAILS",checkoutDetails);
			//mv.addObject("ZineDTO",new CheckoutService().getSolestruckMagazineDetails());
			mv.addObject("KoozieDTO",new CheckoutService().getCheckoutSplItemKoozie());
			
			res.setHeader("Cache-Control","no-cache, no-store, must-revalidate");
			res.setHeader("Pragma","no-cache");
			res.setHeader("Expires", "0");

		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("An error occured in the Checkout-account:"+e.getMessage());
			throw e;
		}

		return mv;
	}

	@RequestMapping(value="/checkout/complete-purchase.htm")
	public ModelAndView checkoutShippingMethods(HttpServletRequest req,HttpServletResponse res) throws Exception
	{
		ModelAndView mv=new ModelAndView("checkout");
		ShoppingResponseDTO shoppingResponse=null;
		try
		{
			String facebook=VeroniqaCookieUtil.getCookieValue(req,VeroniqaConstants.FACEBOOK);
			Boolean fromFB=false;
			if(facebook!=null && facebook.equals(VeroniqaConstants.FACEBOOK) && VeroniqaUtil.getDiscountProgramForFB()!=null)
			{
				//DiscountProgram program=VeroniqaUtil.getDiscountProgramForFB();
				//if(program!=null)
					fromFB=true;
			}
			String orderId=VeroniqaCookieUtil.getCookieValue(req, VeroniqaConstants.ORDER_ID);
			log.info("Inside Checkout Shipping Methods.orderId:"+orderId);
			final int checkout_step=3;
			ShoppingCart shoppingCart=ShoppingCartService.getShoppingCart(req);
			if(shoppingCart==null){
				log.warning("Shopping Cart NOT Found in Checkout-Shipping Methods!");
				mv=new ModelAndView(new RedirectView("/redirectToNonSecurePage.htm?rdirectURL=/"));
				return mv;
			}
			if(shoppingCart.getLineItems()==null||shoppingCart.getLineItems().size()==0){
				log.warning("Shopping Cart is Empty in Checkout-Shipping Methods!");
				mv=new ModelAndView(new RedirectView("/redirectToNonSecurePage.htm?rdirectURL=/"));
				return mv;
			}
			CheckoutDetailDTO checkoutDetails=getCheckoutDetails(orderId);
			if(checkoutDetails==null||checkoutDetails.getCheckoutStep()==null||checkoutDetails.getCheckoutStep().intValue()<2){
				log.warning("Either CheckoutDetails NOT Found. Or Tried to skip the Checkout Step");
				mv=new ModelAndView(new RedirectView("/checkout/sign-in.htm"));
				return mv;
			}

			Set<Long> productIds=new HashSet<Long>();
			for(LineItemDTO ld:shoppingCart.getLineItems()){
					productIds.add(ld.getProductId());
			}
			List<Object> inputList = new ArrayList<Object>();
			inputList.add(productIds);
			Map<Long,Set<ColorVariantDTO>> inventoryMap = (Map<Long, Set<ColorVariantDTO>>) RestClientUtil.callService(inputList, "getInventoryDetailForAllProducts", "ShoppingCartBusinessService");
			shoppingResponse=new ShoppingResponseDTO();
			shoppingResponse.setInventory(inventoryMap);
			shoppingResponse.setShoppingCart(shoppingCart);
			Boolean cookieExists=true;
			if(VeroniqaCookieUtil.getCookieValue(req, VeroniqaConstants.FACEBOOK)==null && VeroniqaUtil.getDiscountProgramForFB()!=null && !VeroniqaUtil.getDiscountProgramForFB().getProgramTypeName().equalsIgnoreCase("order"))
			{
				cookieExists=false;
				Cookie cookie=VeroniqaCookieUtil.createNewCookie(req, res, VeroniqaConstants.FACEBOOK, VeroniqaConstants.FACEBOOK,1*24*60*60);
				res.addCookie(cookie);
			}
			log.info("Items in Shopping Cart:"+shoppingCart.getLineItems().size());
			String countryCode=checkoutDetails.getCustomerDetailDTO().getShippingAddress().getCountry();
			String stateCode=checkoutDetails.getCustomerDetailDTO().getShippingAddress().getState();
			List<ShippingServiceDTO> shippingServices=getShippingServices(countryCode,stateCode,req);
			ShippingAddressDTO shippingAddress=checkoutDetails.getCustomerDetailDTO().getShippingAddress();
			Boolean poexists=checkForPOInAddress(shippingAddress);
			shippingServices=getShippingServiceForPO(poexists, shippingAddress, shippingServices);
			//Setting Default Shipping Service
			Long shipServiceZoneId=null;
			if(shippingServices!=null && shippingServices.size()>0){
				log.info("Shipping Service List Size:"+shippingServices.size());
				boolean shippingServiceSet=false;
				if(checkoutDetails.getShippingServiceZoneId()!=null){
					for(ShippingServiceDTO serviceZone:shippingServices){
						if(checkoutDetails.getShippingServiceZoneId().longValue()==serviceZone.getZone().getKey().getId()){
							shipServiceZoneId=serviceZone.getZone().getKey().getId();
							shippingServiceSet=true;
							break;
						}
					}
				}
				if(!shippingServiceSet){
					shipServiceZoneId=shippingServices.get(0).getZone().getKey().getId();
				}
				Double subTotal=0.0;
				if(fromFB)
				{
					subTotal=shoppingCart.getSubTotal_FB();
					log.info("inside fromfb and total is "+subTotal);
				}
				else
					subTotal=shoppingCart.getSubTotal();
			
				int quantity=0;
				for(LineItemDTO item:shoppingCart.getLineItems()){
					quantity=quantity+item.getQuantity();
				}
				
				inputList = new ArrayList<Object>();
				inputList.add(quantity);
				
				inputList.add(subTotal);
				inputList.add(shipServiceZoneId);
				inputList.add(Long.parseLong(orderId));
				Order updatedOrder=(Order) RestClientUtil.callService(inputList, "updateShippingServiceForOrder", "OrderBusinessService");
				if(updatedOrder!=null)
				{
					checkoutDetails.setGrandTotal(shoppingCart.getSubTotal()+updatedOrder.getShippingPrice());
					checkoutDetails.setShippingPrice(updatedOrder.getShippingPrice());
					checkoutDetails.setShippingMethod(updatedOrder.getShippingMethod());
					checkoutDetails.setShippingServiceZoneId(shipServiceZoneId);
					log.info("Shipping charge"+checkoutDetails.getShippingPrice());
				}	
				}
			

				checkoutDetails.setShoppingCart(shoppingCart);
				checkoutDetails.setCheckoutStep(checkout_step>checkoutDetails.getCheckoutStep().intValue()?checkout_step:checkoutDetails.getCheckoutStep());
				setCheckoutDetails(checkoutDetails,orderId,false);
			
			// This is added for Solestruck Single Sign-On by YES
				//log.info("******* Customer ID is  ***************  : "  +req.getSession().getAttribute("customerid"));
				if(req.getSession().getAttribute("customerid")==null || req.getSession().getAttribute("customerid").equals(""))
				{
					log.info("**********>>>>>>   CustomerId in Session is  ***********>>>>>>>>>  : " +checkoutDetails.getCustomerDetailDTO().getCustomerId());
					//req.getSession().setAttribute("username", checkoutDetails.getCustomerDetailDTO().getEmail());
					if(checkoutDetails.getCustomerDetailDTO().getCustomerId()!=null)
					{
						req.getSession().setAttribute("loggedin", true);
						req.getSession().setAttribute("customerid",checkoutDetails.getCustomerDetailDTO().getCustomerId() );
						MemcachedUtil.remove("HOMEPAGE", MemcachedConstants.PAGE_CACHE);
					}
					
					
				}
			Map<String,CountryDTO> countryMap= new CheckoutService().getListOfCountriesForCheckOut();	
			// Upto here This is added for Solestruck Single Sign-On by YES
			mv.addObject("countryMap",countryMap);
			mv.addObject("cookieExists", cookieExists);
			mv.addObject("SHIPPING_SERVICES",shippingServices);
			mv.addObject("CHECKOUT_DETAILS",checkoutDetails);
			mv.addObject("CART_DETAILS", shoppingResponse);
			mv.addObject("CHECKOUT_STEP",checkout_step);
			mv.addObject("poexists", poexists);
			//mv.addObject("ZineDTO",new CheckoutService().getSolestruckMagazineDetails());
			mv.addObject("KoozieDTO",new CheckoutService().getCheckoutSplItemKoozie());
			res.setHeader("Cache-Control","no-cache, no-store, must-revalidate");
			res.setHeader("Pragma","no-cache");
			res.setHeader("Expires", "0");


		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("An error occured in Checkout-Shipping Methods:"+e.getMessage());
			throw e;
		}

		return mv;
	}

	@RequestMapping(value="/checkout/payment.htm")
	public ModelAndView checkoutPayment(HttpServletRequest req,HttpServletResponse res) throws Exception
	{
		ModelAndView mv=new ModelAndView("CheckoutPayment");
		ShoppingResponseDTO shoppingResponse=null;
		try
		{
			String orderId=VeroniqaCookieUtil.getCookieValue(req, VeroniqaConstants.ORDER_ID);
			log.info("Inside Checkout Payment.OrderID:"+orderId);
			final int checkout_step=4;
			ShoppingCart shoppingCart=ShoppingCartService.getShoppingCart(req);
			if(shoppingCart==null){
				log.warning("Shopping Cart NOT Found in Checkout-Payment!");
				mv=new ModelAndView(new RedirectView("/"));
				return mv;
			}
			if(shoppingCart.getLineItems()==null||shoppingCart.getLineItems().size()==0){
				log.warning("Shopping Cart is Empty in Checkout-Payment!");
				mv=new ModelAndView(new RedirectView("/"));
				return mv;
			}
			CheckoutDetailDTO checkoutDetails=getCheckoutDetails(orderId);
			if(checkoutDetails==null||checkoutDetails.getCheckoutStep()==null||checkoutDetails.getCheckoutStep().intValue()<3){
				log.warning("Either CheckoutDetails NOT Found. Or Tried to skip the Checkout Step");
				mv=new ModelAndView(new RedirectView("/checkout/sign-in.htm"));
				return mv;
			}

			Set<Long> productIds=new HashSet<Long>();
			for(LineItemDTO ld:shoppingCart.getLineItems()){
					productIds.add(ld.getProductId());
				}
			List<Object> inputList = new ArrayList<Object>();
			inputList.add(productIds);
			Map<Long,Set<ColorVariantDTO>> inventoryMap = (Map<Long, Set<ColorVariantDTO>>) RestClientUtil.callService(inputList, "getInventoryDetailForAllProducts", "ShoppingCartBusinessService");
			shoppingResponse=new ShoppingResponseDTO();
			shoppingResponse.setInventory(inventoryMap);
			shoppingResponse.setShoppingCart(shoppingCart);
			
			checkoutDetails.setShoppingCart(shoppingCart);
			//checkoutDetails.setCheckoutStep(checkout_step>checkoutDetails.getCheckoutStep().intValue()?checkout_step:checkoutDetails.getCheckoutStep());
			setCheckoutDetails(checkoutDetails,orderId,false);
			
			mv.addObject("CART_DETAILS", shoppingResponse);
			mv.addObject("CHECKOUT_STEP",checkout_step);
			mv.addObject("CHECKOUT_DETAILS",checkoutDetails);
			
			res.setHeader("Cache-Control","no-cache, no-store, must-revalidate");
			res.setHeader("Pragma","no-cache");
			res.setHeader("Expires", "0");

		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("An error occured in the Checkout-Payment:"+e.getMessage());
			throw e;
		}

		return mv;
	}

	@RequestMapping(value="/getCountryList.htm")
	public @ResponseBody Map<String,CountryDTO> getCountryList()
	{
		Map<String,CountryDTO> countryMap=new HashMap<String,CountryDTO>();
		Set<CountryDTO> countryList=null;
		try
		{
			String brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
			Long brandid=0l;
			if(brandstr!=null)
				brandid=Long.parseLong(brandstr);
			List<Object> serviceParams=new ArrayList<Object>();
			serviceParams.add(brandid);
			countryList=(Set<CountryDTO>)RestClientUtil.callService(serviceParams,"getCountryWithStates","ShippingBusinessService");
			if(countryList==null){
				log.info("No CountryList Available");
				return countryMap;
			}
			for(CountryDTO country:countryList)
				countryMap.put(country.getCountryCode(), country);
		}
		catch(Exception e)
		{
			log.warning("Exception in the getCountryList "+e.getMessage());
		}
		return countryMap;
	}

	@RequestMapping(value="/checkEmailAccount.htm",method=RequestMethod.GET)
	public @ResponseBody CheckoutDetailDTO checkEmailAccount(@RequestParam("email")String email,HttpServletRequest req)
	{
		String retVal="false";
		CheckoutDetailDTO checkoutDetails=null;
		try
		{
			String orderId=VeroniqaCookieUtil.getCookieValue(req, VeroniqaConstants.ORDER_ID);
			checkoutDetails=getCheckoutDetails(orderId);
			if(checkoutDetails==null){
				log.info("Checkout Detail Not Found!");
				return checkoutDetails;
			}
			ArrayList<Object> params = new ArrayList<Object>();
			if(email!=null){
			params.add(email.toLowerCase());
			}

			Customer customer=(Customer)RestClientUtil.callService(params, "getCustomerByOnlyEmailId", "CustomerBusinessService");
			//We should set checkout step only if user doesn't exist.Otherwise he has to login.
			if(customer!=null)
			{
				retVal="true";
				if(customer.getEmailId()==null)
					checkoutDetails.setCheckoutStep(1);
				
				if(req.getSession().getAttribute("status")!=null)
				{
					req.getSession().setAttribute("status",null);
				}
			}
			else
				checkoutDetails.setCheckoutStep(1);
			
			CustomerDetailDTO customerDetailDTO=new CustomerDetailDTO();
			customerDetailDTO.setEmail(email);
			checkoutDetails.setCustomerDetailDTO(customerDetailDTO);
			if(req.getSession().getAttribute("acccheckoutDetails")!=null)
			{
				checkoutDetails=(CheckoutDetailDTO)req.getSession().getAttribute("acccheckoutDetails");
			}
			setCheckoutDetails(checkoutDetails,orderId, true);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info(" Seems to be an exception while checkEmailAccount : "+e.getMessage());
		}
		return checkoutDetails;
	}
	
	@RequestMapping(value="/getCustomerDetailByAuthentication.htm",method=RequestMethod.POST)
	public @ResponseBody CustomerDetailDTO getCustomerDetailByAuthentication(@RequestParam("emailId") String emailId,
			@RequestParam("password") String password,HttpServletRequest req,HttpServletResponse res)
	{
		CustomerDetailDTO customerDetail=null;
		List<Object> inputList = new ArrayList<Object>();
		try{
			if(emailId!=null){
			inputList.add(emailId.toLowerCase());
			}
			inputList.add(password);
			customerDetail = (CustomerDetailDTO) RestClientUtil.callService(inputList, "getCustomerDetailByAuthentication", "CustomerBusinessService");
			if(customerDetail==null)
				log.info("Customer with Email :"+emailId+" and password :"+password+" is invalid");
			else{
				VeroniqaCookieUtil.createNewCookie(req, res, "customerId", customerDetail.getCustomerId()+"",365*24*60*60);
				req.getSession().setAttribute("loggedin", true);
				if(customerDetail.getCustomerId()!=null){
				req.getSession().setAttribute("customerid", customerDetail.getCustomerId().toString());
				}
				
				log.info("Customer is authenticated successfully");
			}
			String orderId=VeroniqaCookieUtil.getCookieValue(req, VeroniqaConstants.ORDER_ID);
			CheckoutDetailDTO checkoutDetails=getCheckoutDetails(orderId);
			
			if(customerDetail!=null && customerDetail.getEmail()!=null)
				checkoutDetails.setCheckoutStep(1);
			checkoutDetails.setCustomerDetailDTO(customerDetail);
			
			req.getSession().setAttribute("acccheckoutDetails", checkoutDetails);
			setCheckoutDetails(checkoutDetails,orderId,true);
		}
		catch(Exception e){
			log.warning("Exception in getCustomerDetailByAuthentication "+e);
			e.printStackTrace();
		}
		return customerDetail;
	}
	
	@RequestMapping(value="/createNewCustomerDetail.htm",method=RequestMethod.POST)
	public @ResponseBody CustomerDetailDTO createCustomerNewDetail(@RequestBody CustomerDetailDTO customerDetail,
			HttpServletRequest req,HttpServletResponse res)
	{
		CustomerDetailDTO createdCustomerDetail=null;
		List<Object> inputList = new ArrayList<Object>();
		try{
			if(customerDetail==null)
				log.info("Customer is NULL");
			else
				log.info("Customer is "+customerDetail.getEmail()+" and CustomerID "+customerDetail.getCustomerId());
			String strOrderId=VeroniqaCookieUtil.getCookieValue(req, VeroniqaConstants.ORDER_ID);
			String fbUser=VeroniqaCookieUtil.getCookieValue(req, VeroniqaConstants.FBLOGIN);
			CheckoutDetailDTO checkoutDetails=getCheckoutDetails(strOrderId);
			
			if(strOrderId==null)
				throw new Exception("OrderID not Found!");
			String facebook=VeroniqaCookieUtil.getCookieValue(req,VeroniqaConstants.FACEBOOK);
			Boolean fromFB=false;
			if(facebook!=null && facebook.equals(VeroniqaConstants.FACEBOOK) && VeroniqaUtil.getDiscountProgramForFB()!=null)
			{
				//DiscountProgram program=VeroniqaUtil.getDiscountProgramForFB();
				//if(program!=null)
					fromFB=true;
			}
			if(fbUser!=null && fbUser.equals(VeroniqaConstants.FBLOGIN))
			{
				customerDetail.setLoginType(VeroniqaConstants.FACEBOOK);
			}
			Long orderId=Long.parseLong(strOrderId);
			
			if(customerDetail.getEmail()!=null){
				customerDetail.setEmail(customerDetail.getEmail().toLowerCase());
			}
			
			inputList.add(customerDetail);
			inputList.add(orderId);
			createdCustomerDetail=(CustomerDetailDTO) RestClientUtil.callService(inputList, "createNewCustomerDetail", "CustomerBusinessService");
			if(createdCustomerDetail!=null)
			{
				log.info(" cusotmer id "+createdCustomerDetail.getCustomerId().toString());
				req.getSession().setAttribute("loggedin", true);
				VeroniqaCookieUtil.createNewCookie(req, res, "customerId", createdCustomerDetail.getCustomerId().toString()+"",365*24*60*60);
				req.getSession().setAttribute("customerid",createdCustomerDetail.getCustomerId().toString());
			}
			checkoutDetails.setCustomerDetailDTO(createdCustomerDetail);
			ShoppingCart cart=ShoppingCartService.getShoppingCart(req);
			checkoutDetails.setShoppingCart(cart);
			int checkout_step=2;
			/*if(checkoutDetails.getCheckoutStep()==null)
				checkoutDetails.setCheckoutStep(1);*/
			checkoutDetails.setCheckoutStep(checkout_step>checkoutDetails.getCheckoutStep().intValue()?checkout_step:checkoutDetails.getCheckoutStep());
			setCheckoutDetails(checkoutDetails,strOrderId,true);
		}
		catch(Exception e){
			log.warning("Exception in createCustomerNewDetail "+e);
			e.printStackTrace();
		}
		return createdCustomerDetail;
	}
	
	@RequestMapping(value="/updateCustomerDetail.htm",method=RequestMethod.POST)
	public @ResponseBody CustomerDetailDTO updateCustomerDetail(@RequestBody CustomerDetailDTO customerDetail,
			HttpServletRequest req,HttpServletResponse res)
	{
		CustomerDetailDTO updatedCustomerDetail=null;
		List<Object> inputList = new ArrayList<Object>();
		try{
			if(customerDetail==null)
				log.info("Customer is NULL");
			else
				log.info("Customer is "+customerDetail.getEmail());
			
			String strOrderId=VeroniqaCookieUtil.getCookieValue(req, VeroniqaConstants.ORDER_ID);
			if(strOrderId==null)
				throw new Exception("OrderID not Found!");
			String facebook=VeroniqaCookieUtil.getCookieValue(req,VeroniqaConstants.FACEBOOK);
			String fbUser=VeroniqaCookieUtil.getCookieValue(req, VeroniqaConstants.FBLOGIN);
			Boolean fromFB=false;
			if(facebook!=null && facebook.equals(VeroniqaConstants.FACEBOOK))
			{
				//DiscountProgram program=VeroniqaUtil.getDiscountProgramForFB();
				//if(program!=null)
					fromFB=true;
					//customerDetail.setLoginType(VeroniqaConstants.FACEBOOK);
			}
			if(fbUser!=null && fbUser.equals(VeroniqaConstants.FBLOGIN))
			{
				customerDetail.setLoginType(VeroniqaConstants.FACEBOOK);
			}
			CheckoutDetailDTO checkoutDetails =getCheckoutDetails(strOrderId);
			Long orderId=Long.parseLong(strOrderId);
			inputList.add(customerDetail);
			inputList.add(orderId);
			updatedCustomerDetail=(CustomerDetailDTO) RestClientUtil.callService(inputList, "updateCustomerDetail", "CustomerBusinessService");
			ShoppingCart cart=ShoppingCartService.getShoppingCart(req);
			checkoutDetails.setShoppingCart(cart);
			checkoutDetails.setCustomerDetailDTO(updatedCustomerDetail);
			log.info("Updated Country Code:"+updatedCustomerDetail.getShippingAddress().getCountry());
			int checkout_step=2;
			/*if(checkoutDetails.getCheckoutStep()==null)
				checkoutDetails.setCheckoutStep(1);*/
			checkoutDetails.setCheckoutStep(checkout_step>checkoutDetails.getCheckoutStep().intValue()?checkout_step:checkoutDetails.getCheckoutStep());
			checkoutDetails.setShippingServiceZoneId(null);
			setCheckoutDetails(checkoutDetails,strOrderId,true);
		
		}
		catch(Exception e){
			log.warning("Exception in updateCustomerDetail "+e);
			e.printStackTrace();
		}
		return updatedCustomerDetail;
	}
	
	@RequestMapping(value="/getShippingServices.htm")
	public @ResponseBody List<ShippingServiceDTO> getShippingServices(@RequestParam(value="countryCode",required = false)String countryCode,
									@RequestParam(value="stateCode",required = false)String stateCode,HttpServletRequest request)
	{
		List<ShippingServiceDTO> serviceList=null;
		
		try {
			String facebook=VeroniqaCookieUtil.getCookieValue(request,VeroniqaConstants.FACEBOOK);
			Boolean fromFB=false;
			if(facebook!=null && facebook.equals(VeroniqaConstants.FACEBOOK) && VeroniqaUtil.getDiscountProgramForFB()!=null)
			{
				//DiscountProgram program=VeroniqaUtil.getDiscountProgramForFB();
				//if(program!=null)
					fromFB=true;
			}
			String strOrderId=VeroniqaCookieUtil.getCookieValue(request, VeroniqaConstants.ORDER_ID);
			CheckoutDetailDTO checkoutDetails=getCheckoutDetails(strOrderId);
			if(checkoutDetails!=null && checkoutDetails.getCustomerDetailDTO()!=null){
				log.info("CheckoutDetails Found and checkout details is "+checkoutDetails+" and customerDetailDTO is "+checkoutDetails.getCustomerDetailDTO());
				if(countryCode==null)
					countryCode=checkoutDetails.getCustomerDetailDTO().getShippingAddress().getCountry();
				if(stateCode==null)
					stateCode=checkoutDetails.getCustomerDetailDTO().getShippingAddress().getState();
			}
			log.info("Country CODE:"+countryCode+" state CODE:"+stateCode);
			ShoppingCart cart=ShoppingCartService.getShoppingCart(request);
			
			Integer quantity=0;
			if(cart!=null){
				for(LineItemDTO lineItem:cart.getLineItems())
				{
					quantity=quantity+lineItem.getQuantity();
				}
			}
			String strBrandId=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
			Long brandId=Long.parseLong(strBrandId);

			if("".equals(stateCode)|| "null".equals(stateCode)){
				stateCode=null;
			}
			if(countryCode!=null)
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList.add(brandId);
				if(fromFB)
				{
					log.info("inside the from fb and total is "+cart.getSubTotal_FB());
					inputList.add(cart.getSubTotal_FB());
				}
				else
				inputList.add(cart.getSubTotal());
				inputList.add(countryCode);
				inputList.add(stateCode);
				inputList.add(quantity);
				log.info("Country CODE:"+countryCode+" state CODE:"+stateCode);
				serviceList=(List<ShippingServiceDTO>) RestClientUtil.callService(inputList, "getAllShippingServiceZonesDTO", "ShippingBusinessService");
				log.info("List of services before filtering got from DB is "+serviceList.size());
				Boolean poexists=checkForPOInAddress(checkoutDetails.getCustomerDetailDTO().getShippingAddress());
				serviceList=getShippingServiceForPO(poexists, checkoutDetails.getCustomerDetailDTO().getShippingAddress(), serviceList);
				
				if(checkoutDetails!=null && serviceList!=null&&  serviceList.size()>0){
						if(checkoutDetails.getShippingServiceZoneId()==null)
						{
						Long serviceZoneId=serviceList.get(0).getZone().getKey().getId();
						setShippingService(serviceZoneId,request);
						}					
				}
			}
			for(ShippingServiceDTO dto:serviceList)
			{
				if(dto.getZone().getShippingServiceName().equalsIgnoreCase("HK") || 
						dto.getZone().getShippingServiceName().equalsIgnoreCase("TW") || dto.getZone().getShippingServiceName().equalsIgnoreCase("SG") || 
						dto.getZone().getShippingServiceName().equalsIgnoreCase("NZ") || dto.getZone().getShippingServiceName().equalsIgnoreCase("AU") || 
						dto.getZone().getShippingServiceName().equalsIgnoreCase("KR") || dto.getZone().getShippingServiceName().equalsIgnoreCase("MY") || 
						dto.getZone().getShippingServiceName().equalsIgnoreCase("JP") || dto.getZone().getShippingServiceName().equalsIgnoreCase("PH") || 
						dto.getZone().getShippingServiceName().equalsIgnoreCase("MO") || dto.getZone().getShippingServiceName().equalsIgnoreCase("IE") || 
						dto.getZone().getShippingServiceName().equalsIgnoreCase("IT") || dto.getZone().getShippingServiceName().equalsIgnoreCase("LU") || 
						dto.getZone().getShippingServiceName().equalsIgnoreCase("CY") || dto.getZone().getShippingServiceName().equalsIgnoreCase("BE") || 
						dto.getZone().getShippingServiceName().equalsIgnoreCase("NL") || dto.getZone().getShippingServiceName().equalsIgnoreCase("DE") || 
						dto.getZone().getShippingServiceName().equalsIgnoreCase("MX") || dto.getZone().getShippingServiceName().equalsIgnoreCase("FR") || 
						dto.getZone().getShippingServiceName().equalsIgnoreCase("QA") || dto.getZone().getShippingServiceName().equalsIgnoreCase("TR") || 
						dto.getZone().getShippingServiceName().equalsIgnoreCase("SW") || dto.getZone().getShippingServiceName().equalsIgnoreCase("KW") || 
						dto.getZone().getShippingServiceName().equalsIgnoreCase("NO") || dto.getZone().getShippingServiceName().equalsIgnoreCase("FI") || 
						dto.getZone().getShippingServiceName().equalsIgnoreCase("TH") || dto.getZone().getShippingServiceName().equalsIgnoreCase("DK") || 
						dto.getZone().getShippingServiceName().equalsIgnoreCase("ES") || dto.getZone().getShippingServiceName().equalsIgnoreCase("GR") || 
						dto.getZone().getShippingServiceName().equalsIgnoreCase("IS") || dto.getZone().getShippingServiceName().equalsIgnoreCase("CH") || 
						dto.getZone().getShippingServiceName().equalsIgnoreCase("IN") || dto.getZone().getShippingServiceName().equalsIgnoreCase("CN") ||
						dto.getZone().getShippingServiceName().equalsIgnoreCase("SA") || dto.getZone().getShippingServiceName().equalsIgnoreCase("AE"))
						
				{
					Collections.sort(serviceList, new Comparator<ShippingServiceDTO>() {

						@Override
						public int compare(ShippingServiceDTO dto1,
								ShippingServiceDTO dto2) {
							// TODO Auto-generated method stub
							return dto1.getZone().getShippingServiceName().compareTo(dto2.getZone().getShippingServiceName());
						}
					});
				}
			}
			
		} 
		catch (Exception e) {

			e.printStackTrace();
			log.warning("Exception in getShippingServices "+e.getMessage()); 
		}
		return serviceList;
	}

	@RequestMapping(value="/setShippingService.htm")
	public @ResponseBody CheckoutDetailDTO setShippingService(@RequestParam("serviceZoneId")Long serviceZoneId,
																	HttpServletRequest request)
	{
		CheckoutDetailDTO checkoutDetails=null;
		try {
			
			ShoppingCart cart=ShoppingCartService.getShoppingCart(request);
			checkoutDetails=getCheckoutDetails(cart.getOrderId().toString());
			String facebook=VeroniqaCookieUtil.getCookieValue(request,VeroniqaConstants.FACEBOOK);
			Boolean fromFB=false;
			if(facebook!=null && facebook.equals(VeroniqaConstants.FACEBOOK) && VeroniqaUtil.getDiscountProgramForFB()!=null)
			{
				//DiscountProgram program=VeroniqaUtil.getDiscountProgramForFB();
				//if(program!=null)
					fromFB=true;
			}
			setShippingServiceZone(serviceZoneId, cart,checkoutDetails,fromFB);
		} 
		catch (Exception e) {
			e.printStackTrace();
			log.warning("Exception in setShippingService : "+e); 
		}
		return checkoutDetails;
	}

	@RequestMapping(value="/updateShippingService.htm")
	public @ResponseBody CheckoutDetailDTO updateShippingService(HttpServletRequest request)
	{
		CheckoutDetailDTO checkoutDetails=null;
		try {
			
			String facebook=VeroniqaCookieUtil.getCookieValue(request,VeroniqaConstants.FACEBOOK);
			Boolean fromFB=false;
			if(facebook!=null && facebook.equals(VeroniqaConstants.FACEBOOK) && VeroniqaUtil.getDiscountProgramForFB()!=null)
			{
				//DiscountProgram program=VeroniqaUtil.getDiscountProgramForFB();
				//if(program!=null)
					fromFB=true;
			}
			log.info("Inside updateShippingService.");
			String strOrderId=VeroniqaCookieUtil.getCookieValue(request, VeroniqaConstants.ORDER_ID);
			log.info("orderid:"+strOrderId);
			checkoutDetails=getCheckoutDetails(strOrderId);
			if(checkoutDetails==null){
				log.info("CheckoutDetail couldn't be retrieved");
				throw new Exception("CheckoutDetail couldn't be retrieved");
			}
			ShoppingCart cart=ShoppingCartService.getShoppingCart(request);
			if(cart==null)
			{
				log.info("No Shopping Cart Found!");
				throw new Exception("No Shopping Cart Found");
			}

			Long orderid=Long.parseLong(VeroniqaCookieUtil.getCookieValue(request, VeroniqaConstants.ORDER_ID));
			int quantity=0;
			for(LineItemDTO item:cart.getLineItems()){
				quantity=quantity+item.getQuantity();
			}
			Double subTotal=0.0;
			if(fromFB)
				subTotal=cart.getSubTotal_FB();
			else
				subTotal=cart.getSubTotal();
			List<Object> inputList = new ArrayList<Object>();
			inputList.add(quantity);
			inputList.add(subTotal);
			inputList.add(checkoutDetails.getShippingServiceZoneId());
			inputList.add(orderid);
			Order updatedOrder=(Order) RestClientUtil.callService(inputList, "updateShippingServiceForOrder", "OrderBusinessService");
			if(updatedOrder!=null)
			{
				checkoutDetails.setGrandTotal(cart.getSubTotal()+updatedOrder.getShippingPrice());
				checkoutDetails.setShippingPrice(updatedOrder.getShippingPrice());
				checkoutDetails.setShoppingCart(cart);
				checkoutDetails.setShippingMethod(updatedOrder.getShippingMethod());
				log.info("Shipping charge"+checkoutDetails.getShippingPrice());
			}	
			else
				log.info("Updated order ------->null");
			setCheckoutDetails(checkoutDetails,orderid.toString(),true);				
			
		} 
		catch (Exception e) {
			e.printStackTrace();
			log.warning("Exception in updateShippingService : "+e); 
		}
		return checkoutDetails;
	}

	
	@RequestMapping(value="/completePurchase.htm",method=RequestMethod.POST)
	public @ResponseBody CheckoutResponseDTO completePurchase(@RequestParam("cardType")String cardType,
												  @RequestParam("cardNumber")String cardNumber,@RequestParam("expmonth")String expMonth,
												  @RequestParam("expyear")String expYear,@RequestParam("ccv")String ccv,
												  @RequestParam("cardHolderName")String cardHolderName,
												  @RequestParam("deliveryDays")String deliveryDays,
												  HttpServletRequest req,HttpServletResponse res)
	{
		DateFormat dateFormat = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		SimpleDateFormat formatter = new SimpleDateFormat("yyyy/MM/dd HH:mm:ss");
		String responseMessage="success";
		ShoppingCart cart=null;
		CheckoutResponseDTO checkoutResponseDTO=new CheckoutResponseDTO();
		try
		{
			Date startTime = new Date();
			startTime = formatter.parse(dateFormat.format(startTime));
			log.info("Start time is :: "+startTime);
			log.info("########Inside complete purchase###########");
			String orderid=VeroniqaCookieUtil.getCookieValue(req, VeroniqaConstants.ORDER_ID);
			String facebook=VeroniqaCookieUtil.getCookieValue(req,VeroniqaConstants.FACEBOOK);
			String fblogin=VeroniqaCookieUtil.getCookieValue(req,VeroniqaConstants.FBLOGIN);
			Boolean fromFB=false;
			Boolean fbUser=false;
			Boolean validAmazonOrder=false;
			Long userId=0L;
			DiscountProgram prog=VeroniqaUtil.getDiscountProgramForFB();
			if(facebook!=null && facebook.equals(VeroniqaConstants.FACEBOOK) &&prog !=null)
			{
				//DiscountProgram program=VeroniqaUtil.getDiscountProgramForFB();
				//if(program!=null)
				log.info("Making fb user value true");
					fromFB=true;
			}
			if(fblogin!=null && fblogin.equals(VeroniqaConstants.FBLOGIN))
			{
				fbUser=true;
			}
			log.info("fbUser is "+fbUser);
			int checkout_step=4;
			CheckoutDetailDTO checkOutDetail=getCheckoutDetails(orderid);
			if(checkOutDetail==null){
				checkoutResponseDTO.setResponseMessage("Sorry.Either Session Expired/Order Already Completed!");
				return checkoutResponseDTO;
			}
			String appMode=EnvironmentUtil.getEnvironmentValue("AppMode");
			CreditCard creditCard=new CreditCard();
			PaymentClientService paymentService=new PaymentClientService(); 			
			List<Long> productsNotAvailable=new ArrayList<Long>();
			List<Integer> sequencesNotAvailable=new ArrayList<Integer>();
			cart=ShoppingCartService.getShoppingCart(req);
			checkOutDetail.setGrandTotal(cart.getSubTotal()+checkOutDetail.getShippingPrice());
			String last4Digits=cardNumber;
			if(cardNumber.length()>4){
				int startIndex=cardNumber.length()-4;
				last4Digits=cardNumber.substring(startIndex);
			}
			checkOutDetail.setShoppingCart(cart);
			checkOutDetail.setCardNumber(last4Digits);
			checkOutDetail.setCardType(cardType);
			checkOutDetail.setDeliveryDays(deliveryDays);
			checkOutDetail.setCheckoutStep(checkout_step);
			
		   //log.info("facebook cookie is :: "+facebook);
		   //log.info("discount program values are :: "+prog.getWebDiscountOn()+ " && " +prog.getProgramTypeName());
		   BigDecimal grandTotal=new BigDecimal(checkOutDetail.getGrandTotal());
		   if(facebook!=null && facebook.equalsIgnoreCase(VeroniqaConstants.FACEBOOK) && prog!=null && prog.getWebDiscountOn()==true && prog.getProgramTypeName().equalsIgnoreCase("order"))
		   {
				log.info("coming inside the facebook cookie condition");
				log.info("Grand total value is :: "+checkOutDetail.getGrandTotal());
				log.info("shoppingcart subtotal value is :: "+checkOutDetail.getShoppingCart().getSubTotal());
				List<OrderThreshold> threshold = VeroniqaUtil.getThresholdValues();
				log.info("threshold value is :: "+threshold.size());
				BigDecimal discountPrice=new BigDecimal(0.00);
				Boolean conditionSatisfied = false;
				BigDecimal cartSubtotal = new BigDecimal(checkOutDetail.getShoppingCart().getSubTotal());
				cartSubtotal = cartSubtotal.setScale(2, BigDecimal.ROUND_HALF_UP);
				//BigDecimal grandTotal=new BigDecimal(checkOutDetail.getGrandTotal());
				grandTotal =grandTotal.setScale(2, BigDecimal.ROUND_HALF_UP);
				//req.getSession().setAttribute("grandTotal", checkOutDetail.getShoppingCart().getSubTotal());
				for(int i=0; i<threshold.size(); i++)
				{
					if(cartSubtotal.doubleValue()>=threshold.get(i).getThresholdMin() && cartSubtotal.doubleValue()<threshold.get(i).getThresholdMax() && conditionSatisfied==false)
					{
						conditionSatisfied = true;
						discountPrice=new BigDecimal(threshold.get(i).getThresholdDiscount());
						//BigDecimal discountLineitemPrice = new BigDecimal(0.00);
						//BigDecimal discountLineitemPercentage = new BigDecimal(0.00);
						//discountLineitemPrice=discountLineitemPrice.setScale(2, BigDecimal.ROUND_HALF_UP);
						grandTotal=grandTotal.subtract(discountPrice);
						grandTotal=grandTotal.setScale(2, BigDecimal.ROUND_HALF_UP);
						//checkOutDetail.setGrandTotal(grandTotal.doubleValue());
						log.info("GRAND TOTAL VALUE IS :: "+grandTotal);
						//checkOutDetail.getShoppingCart().setSubTotal(grandTotal.doubleValue());
//						log.info("savings field of cart is :: "+checkOutDetail.getShoppingCart().getSavings());
//						BigDecimal savings = new BigDecimal(checkOutDetail.getShoppingCart().getSavings());
//						savings = savings.add(discountPrice);
//						log.info("updated savings price is :: "+savings);
//						//checkOutDetail.getShoppingCart().setSavings(savings.doubleValue());
//						log.info("size of the cart is :: "+checkOutDetail.getShoppingCart().getLineItems().size());
//						BigDecimal updatedPrice=new BigDecimal(0.00);
//						BigDecimal DiscountedPriceTotal = new BigDecimal(0.00);
						//BigDecimal cartSubtotal = new BigDecimal(checkOutDetail.getShoppingCart().getSubTotal());
//						for(int j=0; j<checkOutDetail.getShoppingCart().getLineItems().size(); j++)
//						{
//							log.info("unit price of the line item is :: "+checkOutDetail.getShoppingCart().getLineItems().get(j).getUnitPrice());
//							log.info(" price of the line item is :: "+checkOutDetail.getShoppingCart().getLineItems().get(j).getPrice());
//							log.info("subtotal of the shopping cart is :: "+checkOutDetail.getShoppingCart().getSubTotal());
//							BigDecimal price = new BigDecimal(checkOutDetail.getShoppingCart().getLineItems().get(j).getPrice());
//							price = price.setScale(2, BigDecimal.ROUND_HALF_UP);
//							log.info("price :: "+price+" cart subtotal ::"+cartSubtotal);
//							//discountLineitemPercentage = (price.divide(cartSubtotal, BigDecimal.ROUND_HALF_UP)).multiply(new BigDecimal(100));
//							discountLineitemPercentage = (price.multiply(new BigDecimal(100)).divide(cartSubtotal, BigDecimal.ROUND_HALF_UP));
//							log.info("discountline item percentage is :: "+discountLineitemPercentage);
//							discountLineitemPercentage = discountLineitemPercentage.setScale(2, BigDecimal.ROUND_HALF_UP); 
//							log.info("updated discount line item percentage is :: "+discountLineitemPercentage);
//							//discountLineitemPrice = (discountLineitemPercentage.divide(new BigDecimal(100), BigDecimal.ROUND_HALF_UP)).multiply(discountPrice);
//							discountLineitemPrice = (discountLineitemPercentage.multiply(discountPrice)).divide(new BigDecimal(100), BigDecimal.ROUND_HALF_UP);
//							log.info("discount line item price is :: "+discountLineitemPrice);
//							discountLineitemPrice = discountLineitemPrice.setScale(2, BigDecimal.ROUND_HALF_UP);
//							log.info("updated discount line item price is :: "+discountLineitemPrice);
////							discountLineitemPrice = discountLineitemPrice.setScale(2, BigDecimal.ROUND_HALF_UP);
//							DiscountedPriceTotal = DiscountedPriceTotal.add(discountLineitemPrice);
//							log.info("discounted price total iniside is :: "+DiscountedPriceTotal);
//							updatedPrice=price.subtract(discountLineitemPrice);
//							updatedPrice=updatedPrice.setScale(2, BigDecimal.ROUND_HALF_UP); 
//							log.info("line item price is :: "+checkOutDetail.getShoppingCart().getLineItems().get(j).getPrice());
//							log.info("line item unit price is :: "+checkOutDetail.getShoppingCart().getLineItems().get(j).getUnitPrice());
//							log.info("updated Price is :: "+updatedPrice);
//							checkOutDetail.getShoppingCart().getLineItems().get(j).setPrice(updatedPrice.doubleValue());
//							checkOutDetail.getShoppingCart().getLineItems().get(j).setUnitPrice(updatedPrice.doubleValue());
//						}
//						log.info("discounted price total outside is :: "+DiscountedPriceTotal);
						//checkOutDetail.setGrandTotal(grandTotal.doubleValue());
					}
				}
			}
		    
			String brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
			List<Object> paramList=new ArrayList<Object>();
			paramList.add(brandstr);
			paramList.add(req.getRemoteAddr());
			paramList.add(cardNumber);
			paramList.add(ccv);
			paramList.add(expYear);
			paramList.add(expMonth);
			//String pattern = "[a-zA-Z0-9]+";
			Boolean isAlphaNumeric = false;
//			log.info("condition value :: "+cardNumber.matches(pattern));
//			if(cardNumber.matches(pattern))
//				isAlphaNumeric = "true";
//			else
//				isAlphaNumeric = "false";
			for(int i=0; i<cardNumber.length(); i++)
			{
				char c = cardNumber.charAt(i);
				if(Character.isLetter(c))
					isAlphaNumeric = true;
				else
					isAlphaNumeric = false;
				if(isAlphaNumeric)
					break;
			}
			log.info("Value of isAlphaNumeric is :: "+isAlphaNumeric+". To check whether is it a amazon order or a real customer order.");
			Date sDate = new Date();
			sDate = formatter.parse(dateFormat.format(sDate));
			HashMap<Object, Object> hmp = new HashMap<>();
			
			Lookup lookup=setCheckoutDetails(checkOutDetail,cart.getOrderId()+"",true);
			
			if(isAlphaNumeric)
			{
				log.info("Coming inside to check is it a valid warehouse user..!");
				hmp=(HashMap<Object, Object>)RestClientUtil.callService(paramList, "isValidWarehouseUser", "OrderBusinessService");
			
				if(hmp.size()>1&&hmp.get("isValidAmazonOrder")!=null)
				{
					validAmazonOrder=(Boolean) hmp.get("isValidAmazonOrder");
					if(hmp.get("userId")!=null)
						userId=(Long) hmp.get("userId");
				}
				log.info("Is Amazon Order : "+hmp.get("isValidAmazonOrder"));
				if(validAmazonOrder&&userId!=0L)
				{
					paramList=new ArrayList<Object>();
					paramList.add(cart.getOrderId());
					paramList.add(req.getRemoteAddr());
					paramList.add(lookup);
					paramList.add(userId);
					Map<Long,Boolean> result=new HashMap<Long,Boolean>();
					if(fromFB)
					{
						log.info("Inside the facebook amazon block and orderid is "+orderid);
						paramList.add(fromFB);
						paramList.add(fbUser);
						paramList.add(false);
						checkOutDetail=(CheckoutDetailDTO) RestClientUtil.callService(paramList, "completeAmazonPurchaseForFB", "ShoppingCartBusinessService");
						lookup=setCheckoutDetails(checkOutDetail, orderid,true);
						result=checkOutDetail.getProductMap();
					}
					else
					{
						paramList.add(fbUser);
						paramList.add(false);
						result=(Map<Long, Boolean>) RestClientUtil.callService(paramList, "completeAmazonPurchase", "ShoppingCartBusinessService");
					}
					log.info("The Size is : "+result.size());
					Iterator<Long> it=result.keySet().iterator();
					while(it.hasNext())
					{
						Long key=it.next();
						if(result.get(key)==false)
						{
							productsNotAvailable.add(key);
						}
					}
					for(int i=0;i<productsNotAvailable.size();i++)
					{
						for(LineItemDTO ld:checkOutDetail.getShoppingCart().getLineItems())
						{
							if(ld.getProductVariantId()==productsNotAvailable.get(i))
							{
								sequencesNotAvailable.add(ld.getSequenceId());
							}
						}
					}
					checkoutResponseDTO.setSequenceIds(sequencesNotAvailable);
					checkoutResponseDTO.setResponseMessage(responseMessage);
					checkoutResponseDTO.setCheckoutDetailDTO(checkOutDetail);
					/*
					if("LIVE".equals(appMode)||"STAGING".equals(appMode))
						VeroniqaCookieUtil.deleteCookie(req,res,VeroniqaConstants.ORDER_ID);
					*/
					if(sequencesNotAvailable==null || sequencesNotAvailable.size()==0)
					{
						log.info("going to send purchase conf mail for amazon order "+cart.getOrderId());
						ShoppingCartService.removeShoppingCart(req, cart.getOrderId());
						Queue queue = QueueFactory.getDefaultQueue();
						RetryOptions retryOptions=RetryOptions.Builder.withTaskRetryLimit(3);
					    queue.add(withUrl("/taskQueue/requestForConfirmationMail.htm")
					    		.retryOptions(retryOptions).param("orderId", cart.getOrderId()+"")
					    		.countdownMillis(4000L)
					    		.method(Method.GET));
					    
					    log.info("Before 10th pair task queue: "+checkOutDetail.getCustomerDetailDTO().getEmail()+" "+cart.getOrderId().toString());
					    RetryOptions retryOpt=RetryOptions.Builder.withTaskRetryLimit(1);
					    queue.add(withUrl("/checkTenthPair.htm")
					    		.retryOptions(retryOpt).param("emailId",checkOutDetail.getCustomerDetailDTO().getEmail()).param("orderId", cart.getOrderId().toString())
					    		.method(Method.GET));
					    //checkTenthPair(checkOutDetail.getCustomerDetailDTO().getEmail(),cart);
					}
				}
			Date eDate = new Date();
			eDate = formatter.parse(dateFormat.format(eDate));
			long difference = eDate.getTime() - sDate.getTime();
			log.info("differnce for checking the valid warehouse user or not :: "+difference);
			}
			
			else
			{
				log.info("This is real card order");
				paramList=new ArrayList<Object>();
				paramList.add(cart.getOrderId());
				Map<Long,Boolean> result=new HashMap<Long,Boolean>();
				if(fromFB)
				{
					log.info("inside the facebook updateInventory method");
					paramList.add(fromFB);
					paramList.add(false);
					log.info("calling updateInventoryForFB");
					checkOutDetail=(CheckoutDetailDTO) RestClientUtil.callService(paramList, "updateInventoryForFB", "ShoppingCartBusinessService");
					result=checkOutDetail.getProductMap();
					lookup=setCheckoutDetails(checkOutDetail, orderid,true);
				}
				else if(prog==null&&facebook!=null && facebook.equals(VeroniqaConstants.FACEBOOK))
				{
					log.info("calling updateInventoryForFBAndCalculateShipping");
					paramList.add(fromFB);
					paramList.add(false);
					checkOutDetail=(CheckoutDetailDTO) RestClientUtil.callService(paramList, "updateInventoryForFBAndCalculateShipping", "ShoppingCartBusinessService");
					result=checkOutDetail.getProductMap();
					lookup=setCheckoutDetails(checkOutDetail, orderid,true);
				}
				else
				{
					log.info("inside the normal order updateInventory method");
					result=(Map<Long, Boolean>) RestClientUtil.callService(paramList, "updateInventory", "ShoppingCartBusinessService");
				}
				Iterator<Long> it=result.keySet().iterator();
				while(it.hasNext())
				{
					Long key=it.next();
					if(result.get(key)==false)
					{
						productsNotAvailable.add(key);
					}
				}
				log.info("The Size is : "+result.size());
				log.info("Not avail products are "+productsNotAvailable);
//				if(facebook!=null && facebook.equalsIgnoreCase(VeroniqaConstants.FACEBOOK))
//			    {
//			    	checkOutDetail.setLoginType("Facebook");
//			    	log.info("login type value in checkout controller is :: "+checkOutDetail.getLoginType());
//			    }
				setCheckoutDetails(checkOutDetail, orderid, true);
				if(productsNotAvailable.size()==0)
				{
					creditCard.setHolderName(cardHolderName);
					creditCard.setCardNumber(cardNumber);
					creditCard.setCardType(cardType);
					creditCard.setCvv2(ccv);
					if(expYear!=null && expYear.length()>2)
						expYear=expYear.substring(expYear.length()-2,expYear.length());
					log.info("********* Year is *********"+expYear);
					creditCard.setExpYear(expYear);
					creditCard.setExpMonth(expMonth);
									
					BillingAddress billAddr=new BillingAddress();
					ShippingAddress shipAddr=new ShippingAddress();
					CustomerDetailDTO customerDTO=checkOutDetail.getCustomerDetailDTO();
					customerDTO.copyTo(billAddr);
					customerDTO.copyTo(shipAddr);
					
					
					PaymentDetailDTO paymentdetail=new PaymentDetailDTO();
					log.info("GRAND TOTAL VALUE IS :: "+checkOutDetail.getGrandTotal());
					if(facebook!=null && facebook.equalsIgnoreCase(VeroniqaConstants.FACEBOOK) && prog!=null && prog.getWebDiscountOn()==true && prog.getProgramTypeName().equalsIgnoreCase("order"))
					{
						log.info("setting amount with the grandtotal variable :: "+grandTotal);
						req.getSession().setAttribute("grandTotal", grandTotal);
						paymentdetail.setAmount(Double.parseDouble(new DecimalFormat("#0.00").format(grandTotal)));
					}
					else
						paymentdetail.setAmount(Double.parseDouble(new DecimalFormat("#0.00").format(checkOutDetail.getGrandTotal())));
					
					paymentdetail.setBillingAddress(billAddr);
					paymentdetail.setShippingAddress(shipAddr);
					paymentdetail.setOrderId(cart.getOrderId());
					paymentdetail.setCreditcard(creditCard);
					paymentdetail.setEmailId(customerDTO.getEmail());
					paymentdetail.setPhoneNum(customerDTO.getPhone());
					
					String responseString=paymentService.processCreditCard(paymentdetail);
					//String errorMsg=PaymentMessageUtil.getMessageDesc(responseString);
					int responseCode=Integer.parseInt(responseString);

					log.info("Response Code:"+responseCode);
					if(responseCode==0 || responseCode==126)
					{
						paramList=new ArrayList<Object>();
						paramList.add(checkOutDetail.getShoppingCart().getOrderId());
						paramList.add(req.getRemoteAddr());
						paramList.add(true);
						paramList.add(lookup);
						if(fromFB)
						{
							log.info("Inside the facebook completepurchase normal order block and orderid is "+orderid);
							paramList.add(fromFB);
							paramList.add(fbUser);
							paramList.add(false);
							//For LIVE and STAGING we have delete cookies in appspot.com domain and custom domain(which we will do in showThakYou.htm url)
						/*
						 if("LIVE".equals(appMode)||"STAGING".equals(appMode))
							VeroniqaCookieUtil.deleteCookie(req,res,VeroniqaConstants.ORDER_ID);
						*/
						//req.getSession().removeAttribute(MemcachedConstants.CHECKOUT_DETAILS);
							ShoppingCartService.removeShoppingCart(req, cart.getOrderId());	
							RestClientUtil.callService(paramList, "completePurchaseForFB", "ShoppingCartBusinessService");
						}
						else
						{
							paramList.add(fbUser);
							ShoppingCartService.removeShoppingCart(req, cart.getOrderId());
							RestClientUtil.callService(paramList, "completePurchase", "ShoppingCartBusinessService");
						}
						Queue queue = QueueFactory.getDefaultQueue();
						
						if(facebook!=null && facebook.equalsIgnoreCase(VeroniqaConstants.FACEBOOK) && prog!=null && prog.getWebDiscountOn()==true && prog.getProgramTypeName().equalsIgnoreCase("order"))
						{
							log.info("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ coming to call the requestForFBConfirmationMail ");
							RetryOptions retryOptions=RetryOptions.Builder.withTaskRetryLimit(3);
							queue.add(withUrl("/taskQueue/requestForFBConfirmationMail.htm")
						    		.retryOptions(retryOptions).param("orderId", cart.getOrderId()+"")
						    		.countdownMillis(4000L).method(Method.GET));
						    String clientid=VeroniqaCookieUtil.getCookieValue(req, "JSESSIONID");
						   
						}
						else
						{
							RetryOptions retryOptions=RetryOptions.Builder.withTaskRetryLimit(3);
							queue.add(withUrl("/taskQueue/requestForConfirmationMail.htm")
						    		.retryOptions(retryOptions).param("orderId", cart.getOrderId()+"")
						    		.countdownMillis(4000L).method(Method.GET));
						    String clientid=VeroniqaCookieUtil.getCookieValue(req, "JSESSIONID");
						   
						}
						// checkTenthPair(checkOutDetail.getCustomerDetailDTO().getEmail(),cart);
					    log.info("Before 10th pair task queue: "+checkOutDetail.getCustomerDetailDTO().getEmail()+" "+cart.getOrderId().toString());
					    RetryOptions retryOpt=RetryOptions.Builder.withTaskRetryLimit(1);
					    queue.add(withUrl("/checkTenthPair.htm")
					    		.retryOptions(retryOpt).param("emailId",checkOutDetail.getCustomerDetailDTO().getEmail()).param("orderId", cart.getOrderId().toString())
					    		.method(Method.GET));
					   /* if(clientid!=null)
					    {
					    	Queue q=QueueFactory.getQueue("RealTime");
						    q.add(withUrl("/deActivateRealtimeCustomer.htm")
						    		.param("clientid", clientid)
						    		.etaMillis(1000L).method(Method.GET));
					    }*/
					    
					}
					else
					{
						responseMessage=PaymentMessageUtil.getMessageDesc(responseString);
						if(responseMessage==null)
							responseMessage=responseString;
						paramList=new ArrayList<Object>();
						paramList.add(checkOutDetail.getShoppingCart().getOrderId());
						paramList.add(req.getRemoteAddr());
						paramList.add(false);
						paramList.add(lookup);
						if(fromFB)
						{
							paramList.add(fromFB);
							paramList.add(fbUser);
							paramList.add(false);
							RestClientUtil.callService(paramList, "completePurchaseForFB", "ShoppingCartBusinessService");
						}
						else
						{
							paramList.add(fbUser);
							RestClientUtil.callService(paramList, "completePurchase", "ShoppingCartBusinessService");
						}
						log.info("Reverting back the inventory");
					}
					
						
				}
				else
				{
					responseMessage="failure";
					for(int i=0;i<productsNotAvailable.size();i++)
					{
						for(LineItemDTO ld:checkOutDetail.getShoppingCart().getLineItems())
						{
							if(ld.getProductVariantId().equals(productsNotAvailable.get(i)))
							{
								sequencesNotAvailable.add(ld.getSequenceId());
							}
						}
					}
					//we need to alert the user that Inventory not available
				}
				log.info("not available sequence ids are "+sequencesNotAvailable.size());
				checkoutResponseDTO.setSequenceIds(sequencesNotAvailable);
				checkoutResponseDTO.setResponseMessage(responseMessage);
				checkoutResponseDTO.setCheckoutDetailDTO(checkOutDetail);
			}
			
			Date endTime = new Date();
			endTime = formatter.parse(dateFormat.format(endTime));
			log.info("end time is :: "+endTime);
			long diff = endTime.getTime() - startTime.getTime();
			log.info("Difference is :: "+diff);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception in the completePurchase "+e.getMessage());
			responseMessage="Error while completing the order";
		}
		
		return checkoutResponseDTO;
	}
	//This method is used to switch from HTTPS to HTTP since by default Spring's redirect will redirect to HTTP only unless we have configured 
	@RequestMapping(value="/redirectToNonSecurePage.htm")
	public String redirectToNonSecurePage(@RequestParam("rdirectURL") String redirectURL,HttpServletRequest req)
	{
		//RedirectView view=new RedirectView("showThankyou.htm");
		String baseURL="";
		try{
			if("/".equals(redirectURL))
				redirectURL="";
			log.info("**************Redirecting to the URL "+redirectURL);
			if("localhost".equalsIgnoreCase(req.getServerName()))
				baseURL = String.format("redirect:%s://%s:%d/%s","http",  req.getServerName(), req.getServerPort(),redirectURL);
			else
				baseURL = String.format("redirect:%s://%s/%s","http",  req.getServerName(),redirectURL);
			log.info("The absolute URL : "+baseURL);
			
			//view.setHttp10Compatible(true);
		}
		catch(Exception e){
			log.warning("Exception in redirectToThankYouPage : "+e);
		}
		return baseURL;
	}
	
	/*@RequestMapping(value="/redirectSecurePage.htm")
	public String redirectSecurePage(@RequestParam("rdirectURL") String redirectURL,HttpServletRequest req)
	{
		//RedirectView view=new RedirectView("showThankyou.htm");
		String baseURL="";
		try{
			if("/".equals(redirectURL))
				redirectURL="";
			log.info("**************Redirecting to the URL "+redirectURL);
			if("localhost".equalsIgnoreCase(req.getServerName()))
				baseURL = String.format("redirect:%s://%s:%d/%s","http",  req.getServerName(), req.getServerPort(),redirectURL);
			else
				baseURL = String.format("redirect:%s://%s/%s","https",  req.getServerName(),redirectURL);
			log.info("The absolute URL : "+baseURL);
			
			//view.setHttp10Compatible(true);
		}
		catch(Exception e){
			log.warning("Exception in redirectToThankYouPage : "+e);
		}
		return baseURL;
	}*/
	
	@RequestMapping(value="/showThankyou.htm")
	public ModelAndView showThankyou(HttpServletRequest req,HttpServletResponse res)
	{
		ModelAndView mv=new ModelAndView("thanksForOrder");
		CheckoutService cs=new CheckoutService();
		String strOrderId=VeroniqaCookieUtil.getCookieValue(req, VeroniqaConstants.ORDER_ID);
		try
		{
			CheckoutDetailDTO checkoutDetail=getCheckoutDetails(strOrderId);
			String url="";
			String secureUrl="";
			if(EnvironmentUtil.getEnvironmentValue("AppMode").equalsIgnoreCase("live"))
			{
				url="http://www.solestruck.com";
				secureUrl="https://www.solestruck.com";
			}
			else if(EnvironmentUtil.getEnvironmentValue("AppMode").equalsIgnoreCase("staging"))
			{
				url="http://testing.solestruck.com";
				secureUrl="https://testing.solestruck.com";
			}
			else
			{
				url="http://localhost:"+req.getServerPort();
				secureUrl="http://localhost:"+req.getServerPort();
			}
			String fname = checkoutDetail.getCustomerDetailDTO().getFirstName();
			String accessToken = (String) req.getSession().getAttribute("accessToken");
			log.info("the accesstoken is :: " +accessToken);
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestruckthankyou.min.js");
			if(accessToken != null){
			//	CheckoutService.dopostingTimeLine(req,fname,"checkout");
			}
			else {
				log.info("coming to else for share button");
				mv.addObject("share", "button");
			}
			log.info("Inside showThankYou method OrderID" +strOrderId);
			String loginType=VeroniqaCookieUtil.getCookieValue(req, VeroniqaConstants.FBLOGIN);
			Boolean isFBOrder=false;
			if(loginType!=null && loginType.equalsIgnoreCase(VeroniqaConstants.FBLOGIN))
			{
				isFBOrder=true;
			}
			log.info("fbuser is "+isFBOrder);
			if(checkoutDetail==null)
				throw new Exception("Checkout Details Not Found!");
			mv.addObject("detail",checkoutDetail);
			mv.addObject("lineItemsSizes",checkoutDetail.getShoppingCart().getLineItems().size());
			mv.addObject("lineItemsDetail", checkoutDetail.getShoppingCart().getLineItems());
			mv.addObject("isFBOrder", isFBOrder);
			// This is for Implemented CJ Tracking Pixel Code ( SSGA-297 ) by YES
			Boolean isReturningCustomer=cs.isReturningCustomerbyEmailIdOnly(checkoutDetail.getCustomerDetailDTO().getEmail());
			//log.info("----->>>>>>>>> isReturningCustormer  ----------->>>>>>>>>  : " + isReturningCustomer);
			mv.addObject("isReturningCustomer",isReturningCustomer);
			mv.addObject("url",url);
			mv.addObject("secureUrl",secureUrl);
			mv.addObject("grandTotal", req.getSession().getAttribute("grandTotal"));
			VeroniqaCookieUtil.deleteCookie(req,res,VeroniqaConstants.ORDER_ID);
			//VeroniqaCookieUtil.deleteCookie(req,res,VeroniqaConstants.FACEBOOK);
			
			// For  PepperJam tracking pixel Code (SSGA-270) And COMMISSION JUNCTION TRACKING CODE ( SSGA-297 ) by YES
			String str1="";
			String str2="";
			String str3="";
			if(isReturningCustomer==false)
				str1+="https://www.emjcd.com/tags/c?containerTagId=5541";
			else if(isReturningCustomer==true)
				str1+="https://www.emjcd.com/tags/c?containerTagId=5542";
			
			str2+="https://t.pepperjamnetwork.com/track?PID=6763&INT=ITEMIZED";
			str3+="https://www.polyvore.com/cgi/img-conversion/adv/solestruck.com/amt/"+checkoutDetail.getShoppingCart().getSubTotal()+"/oid/"+checkoutDetail.getShoppingCart().getOrderId()+"/skus/";
			int count=0;
			for(LineItemDTO lidto:checkoutDetail.getShoppingCart().getLineItems())
			{
				count++;
				str1+="&ITEM"+count+"="+lidto.getProductVariantId()+"&AMT"+count+"="+Double.parseDouble(new DecimalFormat("#0.00").format(lidto.getUnitPrice()))+"&QTY"+count+"="+lidto.getQuantity()+"";
				str2+="&ITEM"+count+"="+lidto.getProductVariantId()+"&QTY"+count+"="+lidto.getQuantity()+"&TOTALAMOUNT"+count+"="+Double.parseDouble(new DecimalFormat("#0.00").format(lidto.getUnitPrice()*lidto.getQuantity()))+"";
				if(checkoutDetail.getShoppingCart().getLineItems().size()==1)
					str3+=""+lidto.getProductVariantId()+"";
				if(checkoutDetail.getShoppingCart().getLineItems().size()>1 && checkoutDetail.getShoppingCart().getLineItems().size()>count)
					str3+=""+lidto.getProductVariantId()+"%2C";
				else if(checkoutDetail.getShoppingCart().getLineItems().size()>1 && checkoutDetail.getShoppingCart().getLineItems().size()==count)
					str3+=""+lidto.getProductVariantId()+"";
			}
			str3+="/cur/usd.jpg";
			if(isReturningCustomer==false)
				str1+="&CID=1528547&OID="+checkoutDetail.getShoppingCart().getOrderId()+"&TYPE=363765&CURRENCY=USD";
			else if(isReturningCustomer==true)
				str1+="&CID=1528547&OID="+checkoutDetail.getShoppingCart().getOrderId()+"&TYPE=363766&CURRENCY=USD";
			str2+="&OID="+checkoutDetail.getShoppingCart().getOrderId()+"";
			
			
			// This is for Blocked Internal orders from getting to GTS and Affiliate channels ( SSGA-346 ) by YES
			
			   String clientExternalIp = req.getRemoteAddr();
			    log.info("*********     Your IP Address is  *********   : "+clientExternalIp);
			   List<Object> ips = new ArrayList<Object>();
			   ips.add(clientExternalIp);
			   boolean isExists = false;
			   List<WhiteListIPsJdo> existedIps = new ArrayList<WhiteListIPsJdo>();
			   WhiteListIPsJdo WLIPs = new WhiteListIPsJdo(); 
			   if(MemcachedUtil.get("WIPs", "whiteListIPs")==null)
			   {
				  // log.info("Memcache is not available");
				  // existedIps = (List<WhiteListIPsJdo>)RestClientUtil.callService(ips, "getExistedIPs", "WhiteListIpsBusinessService");
				  // MemcachedUtil.set("WIPs", existedIps, "whiteListIPs");
					
					
					log.info("############################### Memcache is not available");
					existedIps = (List<WhiteListIPsJdo>)RestClientUtil.callService(ips, "getExistedIPs", "WhiteListIpsBusinessService");
					MemcachedUtil.set("WIPs", existedIps, "whiteListIPs");
					
					if(existedIps!=null)
					{
						if(existedIps.size()>0)
						{
							Iterator it = existedIps.iterator();
							while (it.hasNext()){
								//log.info(it.next());
								WLIPs = (WhiteListIPsJdo) it.next();
								if(WLIPs.getIpAddress().equals(clientExternalIp) && WLIPs.getIsActive()==true)
								{
									isExists=true;
									break;
								}
						   }
					   }
					   else
					   {
						   isExists=false;
					   }
				   }
				   else
				   {
						log.info("null came");
				   }
			   }
			   else
			   {
					log.info("Memcache is available");
					existedIps = (List<WhiteListIPsJdo>)MemcachedUtil.get("WIPs", "whiteListIPs");
					if(existedIps.size()>0)
					{
						Iterator it = existedIps.iterator();
						while (it.hasNext()){
							WLIPs = (WhiteListIPsJdo) it.next();
							if(WLIPs.getIpAddress().equals(clientExternalIp) && WLIPs.getIsActive()==true)
							{
								isExists=true;
								break;
							}
						}
					}
					else
					{
						isExists=false;
					}
				}
			   
			   
			   if(!isExists)
				{
					log.info("----->>>>>> This is External IP and this is not available in our whitelistIP list");
					mv.addObject("showTrackingCode", true);
				}
			   else
			   {
				   log.info("----->>>>>> This is Internal IP and this is available in our whitelistIP list");
					mv.addObject("showTrackingCode", false);
			   }
			   
			// Upto here This is for Blocked Internal orders from getting to GTS and Affiliate channels ( SSGA-346 ) by YES
			   
		    log.info(" ------->>>>>>>> cj_Iframe_Src is  ------>>>>>>>>>> : "+ str1);
			log.info(" ------->>>>>>>> pj_Iframe_Src is  ------>>>>>>>>>> : "+ str2);
			log.info(" ------->>>>>>>> pj_Iframe_Src is  ------>>>>>>>>>> : "+ str3);   
			
			mv.addObject("cj_Iframe_Src", str1);
			mv.addObject("pj_Iframe_Src", str2);
			mv.addObject("polyvore_Src", str3);
			
			// Upto here For  PepperJam tracking pixel Code (SSGA-270) And COMMISSION JUNCTION TRACKING CODE ( SSGA-297 ) by YES
		}
		catch(Exception e)
		{
			log.warning("Exception in showThankYou Page: "+e);
			try
			{
				res.sendRedirect("/");
			}
			catch(Exception ex)
			{
				ex.printStackTrace();
			}
		}
		return mv;
	}
	
	@ResponseStatus(value=HttpStatus.OK)
	@RequestMapping(value="/taskQueue/requestForConfirmationMail.htm",method=RequestMethod.GET)
	 public void requestForConfirmationMail(@RequestParam("orderId") String orderId)
	 {
		  try{
		   log.info("*****Inside sendConfirmationMail*****");
		   CheckoutDetailDTO checkoutDetail=getCheckoutDetails(orderId);
		   checkoutDetail=getCheckoutDetails(orderId);
		   log.info("Grand total at the request for confirmation mail is :: "+checkoutDetail.getGrandTotal());
		   log.info("price at the request for confirmation mail is :: "+checkoutDetail.getShoppingCart().getLineItems().get(0).getPrice());
		   //log.info("!!!!!!!!!!!!!!!!!!!!!!!!!--------------------------Login Type value is --------------------------!!!!!!!!!!!!!!!!!!!!!!!!! :: "+checkoutDetail.getLoginType());
		   if(checkoutDetail==null)
		    throw new Exception("No Checkout Detail Found For Email");
		   sendConfirmationMail(checkoutDetail);
		   List<Object> paramList = new ArrayList<Object>();
		   paramList.add(MemcachedConstants.CHECKOUT_DETAILS+orderId);
		   RestClientUtil.callService(paramList, "deleteLookupByName", "LookupBusinessService");
		   
		  }
		  catch(Exception e){
		   log.warning("Exception in sendConfimrationMail"+e);
		  }
	 }
	
	@ResponseStatus(value=HttpStatus.OK)
	@RequestMapping(value="/taskQueue/requestForFBConfirmationMail.htm",method=RequestMethod.GET)
	 public void requestForFBConfirmationMail(@RequestParam("orderId") String orderId)
	 {
		  try{
		   log.info("*****Inside sendFBConfirmationMail*****");
		   CheckoutDetailDTO checkoutDetail=getCheckoutDetails(orderId);
		   checkoutDetail=getCheckoutDetails(orderId);
		   log.info("Grand total at the request for confirmation mail is :: "+checkoutDetail.getGrandTotal());
		   log.info("price at the request for confirmation mail is :: "+checkoutDetail.getShoppingCart().getLineItems().get(0).getPrice());
		   if(checkoutDetail==null)
		    throw new Exception("No Checkout Detail Found For Email");
		   sendFBConfirmationMail(checkoutDetail);
		   List<Object> paramList = new ArrayList<Object>();
		   paramList.add(MemcachedConstants.CHECKOUT_DETAILS+orderId);
		   RestClientUtil.callService(paramList, "deleteLookupByName", "LookupBusinessService");
		   
		  }
		  catch(Exception e){
		   log.warning("Exception in sendFBConfimrationMail"+e);
		  }
	 }
	
	/**
	 * By SHI
	 * It returns the inventory details for the products in Shopping Cart.
	 * @return : returns Map where key being ProductId and Value being Set of ColorVariants for that product.
	 */
	@RequestMapping(value="/getInventroyForCart.htm")
	public @ResponseBody Map<Long,Set<ColorVariantDTO>> getInventroyForCart(HttpServletRequest request)
	{
		Map<Long,Set<ColorVariantDTO>> inventory=new HashMap<Long,Set<ColorVariantDTO>>();
		try{
			ShoppingCart shoppingCart=ShoppingCartService.getShoppingCart(request);
			if(shoppingCart==null)
				throw new Exception("Shopping Cart NOT Found in getInventroyForCart!");
			if(shoppingCart.getLineItems()==null||shoppingCart.getLineItems().size()==0)
				throw new  Exception("ShoppingCart is Empty in getInventroyForCart!");

			Set<Long> productIds=new HashSet<Long>();
			for(LineItemDTO ld:shoppingCart.getLineItems())	{
					productIds.add(ld.getProductId());
			}
			List<Object> inputList = new ArrayList<Object>();
			inputList.add(productIds);
			inventory=(Map<Long, Set<ColorVariantDTO>>) RestClientUtil.callService(inputList, "getInventoryDetailForAllProducts", "ShoppingCartBusinessService");
			log.info("Inventory Retrieved.");

		}
		catch(Exception e){
			log.warning("Exception while retrieving Inventory For Shopping Cart:"+e);
		}
		return inventory;
	}
	
	
	//added for getting the enabled states for US and CA - shp
	
	@RequestMapping(value="/getStatesForCountry.htm")
	public @ResponseBody List<States> getAllStates(@RequestParam(value="countryCode",required=true)String countryCode, HttpServletRequest req)
	{
		log.info("fetching states for country = "+countryCode);
		List<States> retVal=null;
		List serviceParams=new ArrayList();
		Long brandid=0l;
		try
		{
			String brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
			
			if(brandstr!=null)
			{
				brandid=Long.parseLong(brandstr);
			}
			
			if(MemcachedUtil.get("getStatesForCountry_"+countryCode,MemcachedConstants.STATES_COUNTRY)==null)
			   {
				   serviceParams.add(brandid);
				   serviceParams.add(countryCode);
				   retVal=(List<States>)RestClientUtil.callService(serviceParams,"getAllEnabledStates","ShippingBusinessService");
				   //productlist=pmcs.getProductsListForVendorClient(vendorid);
				   	
				   log.info("states list size"+retVal.size());
				   if(retVal!=null)
				   {
					   MemcachedUtil.set("getStatesForCountry_"+countryCode, retVal, MemcachedConstants.STATES_COUNTRY);
				   }
				  // productlist=(productlist==null)?new ArrayList<Product>():productlist;
			   }
			else
			{
				log.info("Fetching from memcache");
				retVal = (List<States>)MemcachedUtil.get("getStatesForCountry_"+countryCode,MemcachedConstants.STATES_COUNTRY);
			}
			Collections.sort(retVal);
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("An error occured in the getAllStates"+e.getMessage());
		}
		return retVal;
	}

	@RequestMapping(value="/requireDeliverySignature.htm")
	public @ResponseBody Boolean requireDeliverySignature(@RequestParam("requireSign") Boolean require,HttpServletRequest req)
	{
		Boolean updated=true;
		try{
			log.info("Inside requireDeliverySignature :"+require);
			String strOrderId=VeroniqaCookieUtil.getCookieValue(req, VeroniqaConstants.ORDER_ID);
			if(strOrderId==null)
				throw new Exception("OrderId not found in Cookie");
			Long orderId=Long.parseLong(strOrderId);
			List<Object> paramList=new ArrayList<Object>();
			paramList.add(orderId);
			paramList.add(require);
			updated=(Boolean)RestClientUtil.callService(paramList,"updateRequireSignature","ShoppingCartBusinessService");
			log.info("Result is "+updated);
		}
		catch(Exception e){
			log.warning("Exception while updating Require Signature for Shipping Delivery");
			updated=false;
		}
		return updated;
	}
	
	@RequestMapping(value="/getcountries.htm")
	public @ResponseBody Map<String,CountryDTO> getCountriesForStates()
	{
		Map<String,CountryDTO> countryMap=new LinkedHashMap<String,CountryDTO>();
		
		try 
		{
			String brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY)==null?"1":EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
			Long brandid=Long.parseLong(brandstr);
			Set<CountryDTO> countryList=(Set<CountryDTO>)MemcachedUtil.get(MemcachedConstants.COUNTRYLIST, MemcachedConstants.SHOPPING_CART_NAMESPACE);
			if(countryList==null)
			{
				List<Object> serviceParams=new ArrayList<Object>();
				serviceParams.add(brandid);
				countryList=(Set<CountryDTO>)RestClientUtil.callService(serviceParams,"getCountryWithStates","ShippingBusinessService");
				MemcachedUtil.set(MemcachedConstants.COUNTRYLIST,countryList,MemcachedConstants.SHOPPING_CART_NAMESPACE);
			}
		
			if(countryList!=null){
				for(CountryDTO country:countryList)
					countryMap.put(country.getCountryCode(), country);
			}
			
		} catch (NumberFormatException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		return countryMap;
		
	}
	
	@RequestMapping(value="/checkTenthPair.htm")
	public @ResponseBody void checkTenthPair(@RequestParam("emailId")String emailId,@RequestParam("orderId")String orderId)
	 {
		 try
		 {
			 List lstOfOrders=new ArrayList();
			 boolean flag=false;
			 List inputList = new ArrayList();
			 inputList.add(emailId); 
			 log.info("Before call");
			 List<Customer> lst = (List<Customer>) RestClientUtil.callService(inputList, "getCustomerByEmail", "CustomerBusinessService");
			 log.info("parameter for the previous call (email): "+emailId);
			 int count=0;
			 List pairsList = new ArrayList();
			 
			 List paramLst = new ArrayList();
			 paramLst.add(Long.parseLong(orderId));
			 List<LineItemDTO> retVal = (List<LineItemDTO>) RestClientUtil.callService(paramLst, "getLineItems", "ShoppingCartBusinessService");
			 
			 //Long orderQty = ;
			 List qtylst = new ArrayList();
			 qtylst.add(Long.parseLong(orderId));
			 Order orderDetForQty = (Order) RestClientUtil.callService(qtylst, "getOrderById", "OrderBusinessService");
			 //log.info("orderDetForQty.getOrderLinesPurchased().size(): "+orderDetForQty.getOrderLinesPurchased().size());
			 if(orderDetForQty!=null && !orderDetForQty.getIsOrderFromAmazon())
			 {
				 int count_OLP = 0;
				 List lstForOLP = new ArrayList();
				 for(int i=0;i<orderDetForQty.getOrderLinesPurchased().size();i++)
				 {
					 List orderLineList=new ArrayList();
					 orderLineList.add(orderDetForQty.getOrderLinesPurchased().get(i).getId());
					 OrderLine orderLineVal = (OrderLine) RestClientUtil.callService(orderLineList, "getOrderLineById", "OrderLineBusinessService");
					 if(orderLineVal.getUnitPriceAtPurchase()>=20)
						 count_OLP++;
					 //lstForOLP.add(orderDetForQty)
				 }
				 log.info("*********** count_OLP *************"+count_OLP);
				 pairsList.add(count_OLP);
				 lstOfOrders.add(Long.parseLong(orderId));
				 if(lst!=null)
				 {
					 for(int i=0;i<lst.size();i++)
					 {
						 if((i+1)==lst.size())
							 flag=true;
						 log.info("Size of the list of the customer: "+lst.size()+" lst.get(i).getKey().getId(): "+lst.get(i).getKey().getId());
						 log.info("value of the flag while sending: "+flag);
						 count = countThePairs(lst.get(i).getKey().getId(),lst.get(i).getFirstName()+" "+lst.get(i).getLastName(),lst.get(i).getEmailId(),flag,count,lstOfOrders,orderDetForQty,pairsList);
					 }
				 }
			 }
		 }
		 catch(Exception e)
		 {
			 log.warning("Exception in checkTenthPair: "+e.getMessage());
			 e.printStackTrace();
		 }
	 }
	
	@RequestMapping(value="/getCheckoutSplItemCases.htm")
	public @ResponseBody IPhoneDTO getCheckoutSplItemCases(@RequestParam("color") String color, @RequestParam("type") int type)
	{
		log.info(" inside getCheckoutSplItem4Case method ");
		IPhoneDTO iPhoneDTO = new IPhoneDTO();
		try {
			String idpurl = "";
			Long productId=null;
			Long colorId=null;
			String vendorName=null;
			IDPUrl jdo=null;
			log.info("color value is :: "+color+ " type value is :: "+type);
			if(color.equalsIgnoreCase("omgshoes"))
			{
				if(type == 4 && type != 5)
					idpurl = "solestruck-iphone-4-case-omgshoes";
				else if(type == 5 && type != 4)
					idpurl = "solestruck-iphone-5-case-omgshoes";
			}
				
			else if(color.equalsIgnoreCase("shoeaddict"))
			{
				if(type == 4 && type != 5)
					idpurl = "solestruck-iphone-4-case-shoeaddict";
				else if(type == 5 && type != 4)
					idpurl = "solestruck-iphone-5-case-shoeaddict";
			}
			jdo=(IDPUrl)MemcachedUtil.get(idpurl, MemcachedConstants.IDP_NAME_SPACE);
			if(jdo==null)
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList.add(idpurl);
				jdo=(IDPUrl) RestClientUtil.callService(inputList, "getIdpJdoByUrl", "IDPUrlBusinessService");
				MemcachedUtil.set(idpurl,jdo, MemcachedConstants.IDP_NAME_SPACE);
				log.info("url is from DB");
			}
			else
			{
			  log.info("url is from Memcache");	
			}
			if(jdo!=null){
				productId=jdo.getProductId();
				colorId=jdo.getColorId();
				vendorName=jdo.getVendorName();
				log.info("productid is :: "+productId+" color id is :: "+colorId+" vendor name is :: "+vendorName);
			}
			
			ProductData pd=null;
			FrontEndDTO fd=new FrontEndDTO();
			List<Attribute> sizes=new ArrayList<Attribute>();
			ProductDetailDTO productdtldto=(ProductDetailDTO)MemcachedUtil.get(MemcachedConstants.ITEM_DETAILS_KEY+"_"+productId.toString(), MemcachedConstants.IDP_NAME_SPACE);
			if(productdtldto==null)
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList.add(productId);
				productdtldto=(ProductDetailDTO) RestClientUtil.callService(inputList, "getItemDetails", "ProductDetailBusinessService");
				MemcachedUtil.set(MemcachedConstants.ITEM_DETAILS_KEY+"_"+productId.toString(),productdtldto, MemcachedConstants.IDP_NAME_SPACE);
				log.info("productId url is from DB");
			}
			else{
				 log.info("productId url is from Memcache");	
			}
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
			if(brandstr!=null)
			{
					brandId=Long.parseLong(brandstr);
					List<Object> inputList = new ArrayList<Object>();
					inputList.add(brandId);
					if(MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS)!=null)
					{
						fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
						log.info("FrontEndDTO Retrived from cache");
					}
					else
					{
						fd=(FrontEndDTO) RestClientUtil.callService(inputList, "getFrontEndDTOFromCache", "ListingBusinessService");
						 
							MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
					}
			}
			
			sizes=fd.getSizes();
			if(sizes.size()>0)
			log.info("sizes = " + sizes.get(1).getName());
			Long variantId=0l;
			for(ColorSizeDTO cs:productdtldto.getColourDto())
			{
				if(cs.getColorId().compareTo(colorId)==0)
				{
					log.info("the condition is satisfied");
					if(cs.getSizeDetails()!=null && cs.getSizeDetails().size()>0)
						variantId=cs.getSizeDetails().get(0).getProVarID();
				}
					
				log.info("variantId is :: "+variantId);
			}
			
			List<Object> inputList = new ArrayList<Object>();
			inputList.add(colorId);
			pd=(ProductData) RestClientUtil.callService(inputList, "getProductDataByColorid", "ProductDataBusinessService");
			if(pd!=null)
				log.info("Is sale :: "+pd.getIsSale()+ " Is pre order :: "+pd.getIsPreorder()+ " product name is :: "+productdtldto.getProductName()+ " get inventory check value is :: "+pd.getInventoryCheck());
			
			iPhoneDTO.setVendorName(vendorName);
			iPhoneDTO.setSale(pd.getIsSale());
			iPhoneDTO.setPreorder(pd.getIsPreorder());
			iPhoneDTO.setColorId(colorId);
			iPhoneDTO.setProductId(productId);
			iPhoneDTO.setProductName(productdtldto.getProductName());
			iPhoneDTO.setVariantId(variantId);
			iPhoneDTO.setInventoryCheck(pd.getInventoryCheck());
		}
		catch (Exception e)
		{
			e.printStackTrace();
			log.warning("Exception in getCheckoutSplItem4Case method :: "+e.getMessage());
		}
	return iPhoneDTO;
	}
	
	
}