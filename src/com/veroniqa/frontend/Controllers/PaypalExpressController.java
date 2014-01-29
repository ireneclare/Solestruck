package com.veroniqa.frontend.Controllers;

import static com.google.appengine.api.taskqueue.TaskOptions.Builder.withUrl;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.math.BigDecimal;
import java.net.HttpURLConnection;
import java.net.URL;
import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.ResourceBundle;
import java.util.Set;
import java.util.logging.Logger;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.velocity.exception.ResourceNotFoundException;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.ModelAndView;

import com.google.appengine.api.datastore.Blob;
import com.google.appengine.api.taskqueue.Queue;
import com.google.appengine.api.taskqueue.QueueFactory;
import com.google.appengine.api.taskqueue.RetryOptions;
import com.google.appengine.api.taskqueue.TaskOptions.Method;
import com.veroniqa.commonservices.CheckoutActionService;
import com.veroniqa.dto.BillingAddressDTO;
import com.veroniqa.dto.CheckoutDetailDTO;
import com.veroniqa.dto.CheckoutResponseDTO;
import com.veroniqa.dto.ColorVariantDTO;
import com.veroniqa.dto.CustomerDetailDTO;
import com.veroniqa.dto.LineItemDTO;
import com.veroniqa.dto.PaymentDetailDTO;
import com.veroniqa.dto.ShippingAddressDTO;
import com.veroniqa.dto.ShippingServiceDTO;
import com.veroniqa.dto.ShoppingCart;
import com.veroniqa.dto.ShoppingResponseDTO;
import com.veroniqa.frontend.service.CheckoutService;
import com.veroniqa.frontend.service.ShoppingCartService;
import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.JSONUtil;
import com.veroniqa.frontend.util.MemcachedConstants;
import com.veroniqa.frontend.util.MemcachedUtil;
import com.veroniqa.frontend.util.ObjectToBytes;
import com.veroniqa.frontend.util.RestClientUtil;
import com.veroniqa.frontend.util.VeroniqaConstants;
import com.veroniqa.frontend.util.VeroniqaCookieUtil;
import com.veroniqa.frontend.util.VeroniqaUtil;
import com.veroniqa.jdo.BillingAddress;
import com.veroniqa.jdo.DiscountProgram;
import com.veroniqa.jdo.Lookup;
import com.veroniqa.jdo.OrderThreshold;
import com.veroniqa.jdo.ShippingAddress;
import com.veroniqa.payment.PaymentClientService;


@Controller
public class PaypalExpressController extends CheckoutActionService{
	protected static Logger log = Logger.getLogger("PaypalExpressController");
	private RestTemplate restTemplate = new RestTemplate();
	 @SuppressWarnings("rawtypes")
	ResponseEntity<HashMap> result;
	
	
	@RequestMapping(value="/redirectToPaypalExpress.htm",method=RequestMethod.GET)
	public ModelAndView redirectToPaypalExpress(HttpServletRequest req, HttpServletResponse res)
	{
		try
		{

			  log.info("inside redirectToPaypalExpress");
			 // String businessId="d255c725-5444-4e7e-968e-8a8505511e9f";//testing-solestruck;
			 // String businessId="d255c725-5444-4e7e-968e-8a8505511e9f";//veroniqa-payment
			  String mode=EnvironmentUtil.getEnvironmentValue("AppMode");
			  String businessId=null;
			  String restURL1=null;
			  String restURL2=null;
			  String redirectURL=null;
			  String cancelURL=null;
			  String postURL=null;
			  
			  try
			  {
				  ResourceBundle rbundle=ResourceBundle.getBundle("PayPal_Profile");
				  businessId=rbundle.getString(mode+"_express_BUSINESSID");
				  restURL1=rbundle.getString(mode+"_express_RESTURL1");
				  restURL2=rbundle.getString(mode+"_express_RESTURL2");
				  redirectURL=rbundle.getString(mode+"_express_REDIRECTURL");
				  cancelURL=rbundle.getString(mode+"_express_CANCELURL");
				  postURL=rbundle.getString(mode+"_express_POSTURL");
			  }
			  catch(ResourceNotFoundException e)
			  {
				  log.warning("Resource not found"+e.getMessage());
				  res.sendRedirect("/errorPage.htm");
				  
			  }
			  
			  
			  ShoppingCart cart=ShoppingCartService.getShoppingCart(req);
			  //String amount=cart.getSubTotal().toString();//request.getParameter("amount");
			  
			  String amount=(new Double(getLineItemsCalTotal(cart)).toString());
			  
			  String currency="USD";//request.getParameter("currency");
			  Long orderid=cart.getOrderId();
			  log.info("the amount"+amount+"businessid"+businessId+"currency"+currency+"url 1"+restURL1);
			  
			  
			  // setExpresssCheckoutWithAmount(businessId,amount.toString(),token,redirectUrl,cancelUrl);
		       URL myurl = new URL(restURL1);
		       HttpURLConnection connection = (HttpURLConnection) myurl.openConnection();
		       log.info("url connection set");
		       connection.setDoOutput(true);
		       connection.setRequestMethod("POST");
		       connection.setConnectTimeout (300000); //300s = 5mins
		       connection.setReadTimeout (300000); //300s = 5mins
		       
		       OutputStreamWriter writer = new OutputStreamWriter(connection.getOutputStream());
		       StringBuffer buffer=new StringBuffer();
		       buffer.append("BUSINESSID=");
		       buffer.append(businessId);
		       
		       buffer.append("&AMOUNT=");
		       buffer.append(amount.toString());
		       if(mode.equals("DEV")||mode.equals("STAGING"))
		    	   buffer.append("&TESTDOMAIN=TEST");
		       buffer.append("&CURRENCECODE=");
		       buffer.append(currency);
		       buffer.append("&POSTURL=");
		       buffer.append(postURL);
		       buffer.append("&CANCELURL=");
		       buffer.append(cancelURL);
		       buffer.append("&REDIRECTURL=");
		       buffer.append(redirectURL);
		       log.info("redirect url is "+redirectURL);
		       buffer.append("&ORDERID=");
		       buffer.append(orderid);
		       buffer.append("&ORDERDESC=Current purchase");
		       HashMap lineitemmap=getLineItemsAsMap(cart);
		       ObjectMapper objma=new ObjectMapper();
		       String lineitemstr=objma.writeValueAsString(lineitemmap);
		       log.info("lineitemmap value is :: "+lineitemmap+" && size of the lineitem map is :: "+lineitemmap.size()+" && lineitemster value is :: "+lineitemstr);
		       buffer.append("&lineitemJson="+lineitemstr);
		       buffer.append("&llineItemsize="+lineitemmap.size()/4);
		       
		       log.info("*******Parameter****"+buffer.toString());
		       try {
		    	   	writer.write(buffer.toString());
		       		} catch (IOException e1) {
		       			e1.printStackTrace();
		       }
		       try {
		    	   writer.close();
		       } catch (IOException e1) { 
		       e1.printStackTrace();
		       }
		       
		       String responseString="";
		       if (connection.getResponseCode() == HttpURLConnection.HTTP_OK) {
		    	  String inputLine;
		    	  BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream(), "UTF-8"));
		    	  while ((inputLine = reader.readLine()) != null) {
		    		  responseString+=inputLine;
		    	   }
		    	  reader.close();
		    	   if(responseString.length() <= 0){
		    	   throw new Exception(responseString);
		    	 }
		    	  
		    	 }else {
		    	  // Server returned HTTP error code.
		    	   throw new Exception(connection.getResponseCode()+"");
		    	   }
		       
		        @SuppressWarnings("unchecked") // suppresses typed/untype mismatch warnings, which is harmless
		       	Map<String,String> responseMap = new ObjectMapper().readValue(responseString, HashMap.class);
		    	log.info("Response from adaptive payments:"+responseString);
		    	for(String key:responseMap.keySet())
		    	{
		    		log.info("Key="+key+",value="+responseMap.get(key));
		    	}
		    		
		    	  
		    	if (connection != null) {
		    		   log.info("comming inside to stop the connection");
		    	   connection.disconnect();
		    	  }

		       CheckoutDetailDTO chkoutdetailDTO=new CheckoutDetailDTO();
		       chkoutdetailDTO.setPaypalExpressToken(responseMap.get("TOKEN"));
//		       if(VeroniqaUtil.getDiscountProgramForFB()!=null && VeroniqaUtil.getDiscountProgramForFB().getProgramTypeName().equalsIgnoreCase("Order"))
//		       {
//		    	   chkoutdetailDTO.setLoginType("Facebook");
//		       }
		       setCheckoutDetails(chkoutdetailDTO,cart.getOrderId().toString(), false);
		       log.info("The result which i have got from the response is "+responseMap);
		       //http://pravanjan1234.appspot.com/api/PayPalservices/ExpressPayment?
		       String redirurl=restURL2+"TOKEN="+responseMap.get("TOKEN")+"&"+"BUSINESSID="+businessId+"";
			   res.sendRedirect(redirurl);
			   log.info("done with paypal redirect");
			   return null;
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return null;
	}

	@RequestMapping(value="/setPayPalCustomerInfo.htm",method=RequestMethod.POST)
	public Integer setPayPalCustomerInfo(HttpServletRequest req,HttpServletResponse res)
	{
		
		try
		{
			log.info("inside setPayPalCustomerInfo() ");
			
			String email=req.getParameter("EMAIL");
			String firstname=req.getParameter("FIRSTNAME");
			String lastname=req.getParameter("LASTNAME");
			String street1=req.getParameter("SHIPTOSTREET");
			String street2=req.getParameter("SHIPTOSTREET2");
			String city=req.getParameter("SHIPTOCITY");
			String state=req.getParameter("SHIPTOSTATE");
			String countrycode=req.getParameter("COUNTRYCODE");
			String country=req.getParameter("SHIPTOCOUNTRY");
			String zipcode=req.getParameter("SHIPTOZIP");
			String shiptoname=req.getParameter("SHIPTONAME");
			String token=req.getParameter("TOKEN");
			String payerid=req.getParameter("PAYERID");
			String orderid=req.getParameter("INVNUM");
			
			//if(state != null && state.equalsIgnoreCase("Empty"))
              //  state="";
			
			
			log.info("firstname"+firstname+",lastname:"+lastname+",street1:"+street1+",city:"+city+",state:"+state+",countrycode:"+countrycode+",country:"+country+",shiptoname: "+shiptoname);
			log.info("email:"+email);
			log.info("token"+token);
			CheckoutDetailDTO chkoutdetailDTO=getCheckoutDetails(orderid);
			//log.info("login type value :: "+chkoutdetailDTO.getLoginType());
			ShippingAddressDTO shipAddressDTO=new ShippingAddressDTO();
			String shiptoFirstname="";
			String shiptoLastName="";
			try
			{
				shiptoFirstname=shiptoname.split(" ")[0];
				shiptoLastName=shiptoname.replaceFirst(shiptoFirstname, "").trim();
			}
			catch(Exception e)
			{
				log.warning("Error in setting last name"+e.getMessage());
			}
			shipAddressDTO.setFirstName(shiptoFirstname);
			shipAddressDTO.setLastName(shiptoLastName);
			shipAddressDTO.setStreet1(street1);
			if(street2!=null)
				shipAddressDTO.setStreet2(street2);
			shipAddressDTO.setStreet3(city);
			shipAddressDTO.setZipCode(zipcode);
			shipAddressDTO.setCountry(country);
			 
			String countryname=JSONUtil.getCountryName(country);
			if(countryname!=null)
			{
				shipAddressDTO.setCountryName(countryname);
			}
			
			if("US".equals(country))
			{
				String statename=JSONUtil.getStateName(state, country);
				if(statename!=null)
					shipAddressDTO.setStateName(statename);
				shipAddressDTO.setState(state);
			}
			else if("CA".equals(country))
			{
				String statecode=JSONUtil.getStateCode(state, country);
				log.info("state code"+statecode);
				shipAddressDTO.setStateName(state);
				if(statecode!=null)
					shipAddressDTO.setState(statecode);
			}
			else
				shipAddressDTO.setProvince(state);
			
			
			CustomerDetailDTO customerDTO=new CustomerDetailDTO();
			log.info("**************** email id with lowercase ***************"+email.toLowerCase());
            customerDTO.setEmail(email.toLowerCase());
            log.info("************ email id value in dto ***********"+customerDTO.getEmail());
			//customerDTO.setEmail(email);
			customerDTO.setFirstName(shiptoFirstname);
			customerDTO.setLastName(shiptoLastName);
			customerDTO.setShippingAddress(shipAddressDTO);
			chkoutdetailDTO.setCustomerDetailDTO(customerDTO);
			chkoutdetailDTO.setPaypalExpressPayerId(payerid);
			
			/*Lookup lookup=new Lookup();
			ObjectWrapper wraper=new ObjectWrapper();
			List lst =new ArrayList();
			lst.add(chkoutdetailDTO);
			wraper.setListValues(lst);
			lookup.setListValue(wraper);
			lookup.setDateAdded(new Date());
			lookup.setDeleted(false);
			lookup.setStringValue("PayPalExpress_CustomerInfo");
			lookup.setName(token);
			
			List lstinput=new ArrayList();
			lstinput.add(lookup);
			lookup=(Lookup)RestClientUtil.callService(lstinput, "createLookup", "LookupBusinessService");
			log.info("done with setting lookup"+lookup);
			if(lookup!=null)
				log.info("Lookup name"+lookup.getName());*/
			setCheckoutDetails(chkoutdetailDTO, orderid, true);
			//log.info("login type value at the end of the condition ::"+chkoutdetailDTO.getLoginType());
			return 1;
			

		}
		catch(Exception e)
		{
			log.warning("Exception in setPayPalCustomerInfo"+e);
			e.printStackTrace();
		}
		return 0;
	}
	
	@RequestMapping(value="/loadConfirmationAfterPaypalAuthorize.htm",method=RequestMethod.GET)
	public ModelAndView loadConfirmationAfterPaypalAuthorize(HttpServletRequest req,HttpServletResponse res)
	{
		ModelAndView mv=new ModelAndView("expressLandingAfterAuthorize");
		try
		{

			List<ShippingServiceDTO> retVal=null;
			ShoppingResponseDTO shoppingResponse=null;
			List<Object> inputList = new ArrayList<Object>();
			String orderId =req.getParameter("orderId");
			String token =req.getParameter("TOKEN");
			
			try {
				
				ShoppingCart cart=ShoppingCartService.getShoppingCart(orderId);
				log.info("size of the shopping cart is :: "+cart.getLineItems().size());
                if(cart==null||cart.getLineItems().size()==0)
                    res.sendRedirect("/redirectToNonSecurePage.htm?rdirectURL=/");
				
                Boolean cookieExists=true;
                Boolean applyDiscount=false;
				if(VeroniqaUtil.getDiscountProgramForFB()!=null && !VeroniqaUtil.getDiscountProgramForFB().getProgramTypeName().equalsIgnoreCase("order"))
				{
					log.info("Coming inside to set the cookie exists value to false");
					cookieExists=false;
					Cookie cookie=VeroniqaCookieUtil.createNewCookie(req, res, VeroniqaConstants.FACEBOOK, VeroniqaConstants.FACEBOOK,1*24*60*60);
					res.addCookie(cookie);
					applyDiscount=true;
				}
				//Boolean paypaldiscount=false;
				
//				if(VeroniqaUtil.getDiscountProgramForFB()!=null)
//				{
//					log.info("Inside the discount condition");
//					//DiscountProgram program=VeroniqaUtil.getDiscountProgramForFB();
//					//if(program!=null)
//					Cookie cookie=VeroniqaCookieUtil.createNewCookie(req, res,VeroniqaConstants.FACEBOOK,VeroniqaConstants.FACEBOOK,1*24*60*60);
//					res.addCookie(cookie);
//					applyDiscount=true;
//				}
				
				CheckoutDetailDTO chkdetailDTO=getCheckoutDetails(orderId);
				//log.info("coming inside the load confirmation method and the login value is:: "+chkdetailDTO.getLoginType()+" "+token);
				log.info("IS MY LOG COMING ..........!");
				chkdetailDTO.setPaypalExpressToken(token);
				
				BillingAddressDTO billingDTO=new BillingAddressDTO();
				ShippingAddressDTO shippingDTO=chkdetailDTO.getCustomerDetailDTO().getShippingAddress();
				billingDTO.setFirstName(chkdetailDTO.getCustomerDetailDTO().getFirstName());
				billingDTO.setLastName(chkdetailDTO.getCustomerDetailDTO().getLastName());
				billingDTO.setStreet1(shippingDTO.getStreet1());
				billingDTO.setStreet2(shippingDTO.getStreet2());
				billingDTO.setStreet3(shippingDTO.getStreet3());
				billingDTO.setState(shippingDTO.getState());
				billingDTO.setStateName(shippingDTO.getStateName());
				billingDTO.setProvince(shippingDTO.getProvince());
				billingDTO.setCountryName(shippingDTO.getCountryName());
				billingDTO.setCountry(shippingDTO.getCountry());
				billingDTO.setZipCode(shippingDTO.getZipCode());
				chkdetailDTO.getCustomerDetailDTO().setBillingAddress(billingDTO);
				/*if(fromFB)
					chkdetailDTO.getCustomerDetailDTO().setLoginType(VeroniqaConstants.FACEBOOK);*/
				log.info("IS MY LOG COMING 2..........!");
				List customerinputList=new ArrayList();
				customerinputList.add(chkdetailDTO.getCustomerDetailDTO());
				customerinputList.add(Long.parseLong(orderId));
				CustomerDetailDTO customerDet=(CustomerDetailDTO)RestClientUtil.callService(customerinputList, "createOrUpdateCustomerDetail", "CustomerBusinessService");
				log.info("IS MY LOG COMING 3..........!");
				log.info("customerid"+customerDet.getCustomerId()+"shipping address "+customerDet.getShippingAddress()+",billing address:"+customerDet.getBillingAddress());
				chkdetailDTO.setCustomerDetailDTO(customerDet);
				
				chkdetailDTO.setShoppingCart(cart);
				setCheckoutDetails(chkdetailDTO, orderId, true);
				//log.info("login value after setting in load confirmation "+chkdetailDTO.getLoginType());
				log.info("chekout dto"+chkdetailDTO);
				// This is added for Solestruck Single Sign-On by YES
				
				if(chkdetailDTO!=null & chkdetailDTO.getCustomerDetailDTO().getCustomerId()!=null)
				{
					req.getSession().setAttribute("loggedin", true);
					req.getSession().setAttribute("customerid",chkdetailDTO.getCustomerDetailDTO().getCustomerId().toString());
					MemcachedUtil.remove("HOMEPAGE", MemcachedConstants.PAGE_CACHE);
				}
				
				// Upto here This is added for Solestruck Single Sign-On by YES
				
				String strBrandId=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
				//String strBrandId=VeroniqaCookieUtil.getCookieValue(request, VeroniqaConstants.BRAND_ID_KEY);
				VeroniqaCookieUtil.createNewCookie(req, res, "orderid", orderId,365*24*60*60);
				Set<Long> productIds=new HashSet<Long>();
				for(LineItemDTO ld:cart.getLineItems()){
						productIds.add(ld.getProductId());
				}
				List<Object> inputList_product = new ArrayList<Object>();
				inputList_product.add(productIds);
				Map<Long,Set<ColorVariantDTO>> inventoryMap = (Map<Long, Set<ColorVariantDTO>>) RestClientUtil.callService(inputList_product, "getInventoryDetailForAllProducts", "ShoppingCartBusinessService");
				shoppingResponse=new ShoppingResponseDTO();
				shoppingResponse.setInventory(inventoryMap);
				shoppingResponse.setShoppingCart(cart);
				
				log.info("Items in Shopping Cart:"+cart.getLineItems().size());
				
				Integer quantity=0;
				if(cart!=null){
					for(LineItemDTO lineItem:cart.getLineItems())
					{
						log.info("price:"+lineItem.getUnitPrice());
						quantity=quantity+lineItem.getQuantity();
					}
				}
							//String strBrandId=VeroniqaCookieUtil.getCookieValue(request, VeroniqaConstants.BRAND_ID_KEY);
				Long brandId=Long.parseLong(strBrandId);
				inputList.add(brandId);
				//inputList.add(cart.getSubTotal());
				if(applyDiscount)
					inputList.add(cart.getSubTotal_FB());
				else
					inputList.add(cart.getSubTotal());
				String countrycode=chkdetailDTO.getCustomerDetailDTO().getShippingAddress().getCountry();
				inputList.add(chkdetailDTO.getCustomerDetailDTO().getShippingAddress().getCountry());
				//mv.addObject("countrycode",countrycode);
				log.info("country code:"+countrycode);
				
				if(countrycode.equalsIgnoreCase("US")||countrycode.equalsIgnoreCase("CA"))
				{
					String statecode=chkdetailDTO.getCustomerDetailDTO().getShippingAddress().getState();
					inputList.add(statecode);
					//mv.addObject("statecode",statecode);
					log.info("state code:"+statecode);
				}
				else
					inputList.add(null);
				inputList.add(quantity);
				retVal=(List<ShippingServiceDTO>) RestClientUtil.callService(inputList, "getAllShippingServiceZonesDTO", "ShippingBusinessService");
				log.info("*******retVal"+retVal);
				String countryCode=chkdetailDTO.getCustomerDetailDTO().getShippingAddress().getCountry();
				String stateCode=chkdetailDTO.getCustomerDetailDTO().getShippingAddress().getState();
				ShippingAddressDTO shippingAddress=chkdetailDTO.getCustomerDetailDTO().getShippingAddress();
				Boolean poexists=checkForPOInAddress(shippingAddress);
				retVal=getShippingServiceForPO(poexists, shippingAddress, retVal);
				
				if(retVal!=null&&retVal.size()>0)
				{
					if(chkdetailDTO.getShippingServiceZoneId()==null)
					{
						Long zoneid=retVal.get(0).getZone().getKey().getId();
						chkdetailDTO.setShippingServiceZoneId(zoneid);
						setShippingServiceZone(zoneid, chkdetailDTO.getShoppingCart(),chkdetailDTO,applyDiscount);
					}
				}
				
				mv.addObject("TOKEN",token);
				mv.addObject("SHIPPING_SERVICES",retVal);
				mv.addObject("CHECKOUT_DETAILS",chkdetailDTO);
				mv.addObject("CART_DETAILS", shoppingResponse);
				mv.addObject("poexists", poexists);
				mv.addObject("applyDiscount",applyDiscount);
				mv.addObject("cookieExists",cookieExists);
				//mv.addObject("ZineDTO",new CheckoutService().getSolestruckMagazineDetails());
				mv.addObject("KoozieDTO",new CheckoutService().getCheckoutSplItemKoozie());
			} 
			catch (Exception e) {

				e.printStackTrace();
				log.warning("Exception in getShippingServices"+e.getMessage()); 
			}
			
		log.info("Done with loadingConfirmation");	
		
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("Exception in loadConfirmation after authorize"+e.getMessage());
			for(StackTraceElement ele:e.getStackTrace())
				log.warning(ele.toString());
		}
		return mv;
	}
	
	@RequestMapping(value="/completePurchase_Express.htm",method=RequestMethod.POST)
	public @ResponseBody CheckoutResponseDTO completePurchase(@RequestParam("token")String token,
												  HttpServletRequest req,HttpServletResponse res)
	{
		String responseMessage="success";
		ShoppingCart cart=null;
		CheckoutResponseDTO checkoutResponseDTO=new CheckoutResponseDTO();
		try
		{
			log.info("########Inside complete purchase###########");
			String orderid=VeroniqaCookieUtil.getCookieValue(req, "orderid");
			String fblogin=VeroniqaCookieUtil.getCookieValue(req,VeroniqaConstants.FBLOGIN);
			Boolean paypaldiscount=false;
			Boolean fbUser=false;
			if( VeroniqaUtil.getDiscountProgramForFB()!=null)
			{
				//DiscountProgram program=VeroniqaUtil.getDiscountProgramForFB();
				//if(program!=null)
				paypaldiscount=true;
			}
			if(fblogin!=null && fblogin.equals(VeroniqaConstants.FBLOGIN))
			{
				fbUser=true;
			}
			CheckoutDetailDTO checkOutDetail=getCheckoutDetails(orderid);
			if(checkOutDetail==null){
				checkoutResponseDTO.setResponseMessage("Sorry.Either Session Expired/Order Already Completed!");
				log.warning("Checkout detail is null");
				return checkoutResponseDTO;
			}
			String appMode=EnvironmentUtil.getEnvironmentValue("AppMode");
			PaymentClientService paymentService=new PaymentClientService(); 			
			List<Long> notAvailProducts=new ArrayList<Long>();
			List<Integer> notAvailSequenceIds=new ArrayList<Integer>();
			//cart=checkOutDetail.getShoppingCart();
			cart=ShoppingCartService.getShoppingCart(req);
            for(int i=0;i<cart.getLineItems().size();i++)
            {
                log.info("Cart in memcache: "+cart.getLineItems().get(0).getSize()+" "+cart.getLineItems().get(0).getQuantity());
            }
            checkOutDetail.setShoppingCart(cart);
			Long orderId=cart.getOrderId();
			log.info("Cart in session is"+cart+",subtotal"+cart.getSubTotal()+",shipping price:"+checkOutDetail.getShippingPrice());
			String brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
			List<Object> paramList=new ArrayList<Object>();
			paramList.add(orderId);
			Map<Long,Boolean> result=null;
			if(paypaldiscount)
			{
				log.info("inside the facebook updateInventory method");
				paramList.add(paypaldiscount);
				paramList.add(false);
				checkOutDetail=(CheckoutDetailDTO) RestClientUtil.callService(paramList, "updateInventoryForFB", "ShoppingCartBusinessService");
				setCheckoutDetails(checkOutDetail, orderid, true);
				result=checkOutDetail.getProductMap();
				
			}
			else
			{
				log.info("inside the normal order updateInventory method");
				result=(Map<Long, Boolean>) RestClientUtil.callService(paramList, "updateInventory", "ShoppingCartBusinessService");
			}
			checkOutDetail.setPaymentType(VeroniqaConstants.PAYPAL_EXPRESS_PURCHASE);
//			if(VeroniqaUtil.getDiscountProgramForFB()!=null && VeroniqaUtil.getDiscountProgramForFB().getProgramTypeName().equalsIgnoreCase("Order"))
//		       {
//		    	   checkOutDetail.setLoginType("Facebook");
//		       }
			//log.info("login type value from the complete express purchase method ::"+checkOutDetail.getLoginType());
			//checkOutDetail.setShoppingCart(cart); //Commented out for final sale by m5k
			setCheckoutDetails(checkOutDetail, orderid, true);
			Lookup lookup=new Lookup();
			lookup.setName(MemcachedConstants.CHECKOUT_DETAILS+orderId);
			lookup.setBlobValue(new Blob(ObjectToBytes.getBytesFromObject(checkOutDetail)));
			log.info("update inventory result"+result);
			Iterator<Long> it=result.keySet().iterator();
			while(it.hasNext())
			{
				Long key=it.next();
				if(result.get(key)==false)
				{
					notAvailProducts.add(key);
				}
			}
			BigDecimal grandTotal=new BigDecimal(checkOutDetail.getGrandTotal());
			if(VeroniqaUtil.getDiscountProgramForFB()!=null && VeroniqaUtil.getDiscountProgramForFB().getWebDiscountOn()==true && VeroniqaUtil.getDiscountProgramForFB().getProgramTypeName().equalsIgnoreCase("order"))
		    {
				log.info("coming inside the facebook cookie condition");
				log.info("Grand total value is :: "+checkOutDetail.getGrandTotal());
				log.info("shoppingcart subtotal value is :: "+checkOutDetail.getShoppingCart().getSubTotal());
				List<OrderThreshold> threshold = VeroniqaUtil.getThresholdValues();
				log.info("threshold value is :: "+threshold.size());
				BigDecimal discountPrice=new BigDecimal(0.00);
				Boolean conditionSatisfied = false;
				BigDecimal cartSubtotal = new BigDecimal(checkOutDetail.getShoppingCart().getSubTotal());
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
						log.info("updated grand total value is :: "+grandTotal);
						//checkOutDetail.setGrandTotal(grandTotal.doubleValue());
						//log.info("savings field of cart is :: "+checkOutDetail.getShoppingCart().getSavings());
						//BigDecimal savings = new BigDecimal(checkOutDetail.getShoppingCart().getSavings());
						//savings = savings.add(discountPrice);
						//log.info("updated savings price is :: "+savings);
//						checkOutDetail.getShoppingCart().setSavings(savings.doubleValue());
						//log.info("size of the cart is :: "+checkOutDetail.getShoppingCart().getLineItems().size());
						//BigDecimal updatedPrice=new BigDecimal(0.00);
//						for(int j=0; j<checkOutDetail.getShoppingCart().getLineItems().size(); j++)
//						{
//							log.info("unit price of the line item is :: "+checkOutDetail.getShoppingCart().getLineItems().get(j).getUnitPrice());
//							log.info(" price of the line item is :: "+checkOutDetail.getShoppingCart().getLineItems().get(j).getPrice());
//							log.info("subtotal of the shopping cart is :: "+checkOutDetail.getShoppingCart().getSubTotal());
//							BigDecimal price = new BigDecimal(checkOutDetail.getShoppingCart().getLineItems().get(j).getPrice());
//							discountLineitemPercentage = (price.divide(cartSubtotal, BigDecimal.ROUND_HALF_UP)).multiply(new BigDecimal(100));
//							log.info("discountline item percentage is :: "+discountLineitemPercentage);
//							discountLineitemPercentage = discountLineitemPercentage.setScale(2, BigDecimal.ROUND_HALF_UP); 
//							log.info("updated discount line item percentage is :: "+discountLineitemPercentage);
//							discountLineitemPrice = (discountLineitemPercentage.divide(new BigDecimal(100), BigDecimal.ROUND_HALF_UP)).multiply(discountPrice);
//							log.info("discount line item price is :: "+discountLineitemPrice);
//							discountLineitemPrice = discountLineitemPrice.setScale(2, BigDecimal.ROUND_HALF_UP);
//							log.info("updated discount line item price is :: "+discountLineitemPrice);
//							updatedPrice=price.subtract(discountLineitemPrice);
//							updatedPrice=updatedPrice.setScale(2, BigDecimal.ROUND_HALF_UP); 
//							log.info("line item price is :: "+checkOutDetail.getShoppingCart().getLineItems().get(j).getPrice());
//							log.info("line item unit price is :: "+checkOutDetail.getShoppingCart().getLineItems().get(j).getUnitPrice());
//							log.info("updated Price is :: "+updatedPrice);
//							checkOutDetail.getShoppingCart().getLineItems().get(j).setPrice(updatedPrice.doubleValue());
//							checkOutDetail.getShoppingCart().getLineItems().get(j).setUnitPrice(updatedPrice.doubleValue());
//						}
					}
				}
				//setCheckoutDetails(checkOutDetail, orderid, true);
			 }
			
			log.info("The Size is : "+result.size());
			log.info("Not avail products are "+notAvailProducts);
			if(notAvailProducts.size()==0)
			{
				double tot=checkOutDetail.getGrandTotal();
				log.info("----------------->>>>>----------------->>>>>----------------->>>>>value of the amount is :: "+tot);
				PaymentDetailDTO paymentdetail=new PaymentDetailDTO();
				BillingAddress badd=new BillingAddress();
				ShippingAddress sadd=new ShippingAddress();
				checkOutDetail.getCustomerDetailDTO().copyTo(badd);
				checkOutDetail.getCustomerDetailDTO().copyTo(sadd);
				paymentdetail.setBillingAddress(badd);
				paymentdetail.setShippingAddress(sadd);
				paymentdetail.setEmailId(checkOutDetail.getCustomerDetailDTO().getEmail());
				paymentdetail.setPhoneNum(checkOutDetail.getCustomerDetailDTO().getPhone());
				if(VeroniqaUtil.getDiscountProgramForFB()!=null && VeroniqaUtil.getDiscountProgramForFB().getWebDiscountOn()==true && VeroniqaUtil.getDiscountProgramForFB().getProgramTypeName().equalsIgnoreCase("order"))
				{
					log.info("setting amount with the grandtotal variable :: "+grandTotal);
					req.getSession().setAttribute("grandTotal", grandTotal);
					paymentdetail.setAmount(Double.parseDouble(new DecimalFormat("#0.00").format(grandTotal)));
				}
				else
					paymentdetail.setAmount(Double.parseDouble(new DecimalFormat("#0.00").format(tot)));
				
				paymentdetail.setOrderId(cart.getOrderId());
				
				HashMap response=paymentService.processTransaction_PayPalExpress(paymentdetail,checkOutDetail.getPaypalExpressPayerId(),token);
				String errorMsg=(String)response.get("RESPMSG");
				int responseCode=Integer.parseInt((String)response.get("RESULT"));
				paramList=new ArrayList<Object>();
				paramList.add(orderId);
				paramList.add(req.getRemoteAddr());
				log.info("Response Code:"+responseCode);
				if(responseCode==0 || responseCode==126)
				{
					paramList=new ArrayList<Object>();
					paramList.add(orderId);
					paramList.add(req.getRemoteAddr());
					paramList.add(true);
					paramList.add(lookup);
					paramList.add(fbUser);
					ShoppingCartService.removeShoppingCart(req, orderId);
					//req.getSession().removeAttribute(MemcachedConstants.CHECKOUT_DETAILS);
					//RestClientUtil.callService(paramList, "completeExpressPurchase", "ShoppingCartBusinessService");
					
						if(!paypaldiscount)
						{
							paramList.add(false);
							log.info("----:>>>>>>>> Inside If !paypaldiscount ------->>>>>>>>>> ");
							RestClientUtil.callService(paramList, "completeExpressPurchase", "ShoppingCartBusinessService");
						}
						else
							RestClientUtil.callService(paramList, "completeExpressPurchaseFB", "ShoppingCartBusinessService");
				
						log.info("-------------------->>>>>>>>>>>>>>>>-------------------->>>>>>>>>>>>>>>>-------------------->>>>>>>>>>>>>>>>grand total is : "+checkOutDetail.getGrandTotal());
						log.info("-------------------->>>>>>>>>>>>>>>>-------------------->>>>>>>>>>>>>>>>-------------------->>>>>>>>>>>>>>>>lineitem price is :"+checkOutDetail.getShoppingCart().getLineItems().get(0).getPrice());
					Queue queue = QueueFactory.getDefaultQueue();
					
					if(VeroniqaUtil.getDiscountProgramForFB()!=null && VeroniqaUtil.getDiscountProgramForFB().getWebDiscountOn()==true && VeroniqaUtil.getDiscountProgramForFB().getProgramTypeName().equalsIgnoreCase("order"))
					{
						RetryOptions retryOptions=RetryOptions.Builder.withTaskRetryLimit(3);
						queue.add(withUrl("/taskQueue/requestForFBConfirmationMail.htm")
					    		.retryOptions(retryOptions).param("orderId", cart.getOrderId()+"")
					    		.countdownMillis(7000L).method(Method.GET));
					}
					else
					{
						RetryOptions retryOptions=RetryOptions.Builder.withTaskRetryLimit(3);
						queue.add(withUrl("/taskQueue/requestForConfirmationMail.htm")
					    		.retryOptions(retryOptions).param("orderId", cart.getOrderId()+"")
					    		.countdownMillis(7000L).method(Method.GET));
					}
				    
				    
				    //checkTenthPair(checkOutDetail.getCustomerDetailDTO().getEmail(),cart);
				    RetryOptions retryOpt=RetryOptions.Builder.withTaskRetryLimit(1);
				    queue.add(withUrl("/checkTenthPair.htm")
				    		.retryOptions(retryOpt).param("emailId",checkOutDetail.getCustomerDetailDTO().getEmail()).param("orderId", cart.getOrderId().toString())
				    		.method(Method.GET));
				}
				else
				{
					responseMessage=getResponseMessage(response);
					paramList=new ArrayList<Object>();
					paramList.add(orderId);
					paramList.add(req.getRemoteAddr());
					paramList.add(false);
					paramList.add(lookup);
					paramList.add(fbUser);
					//RestClientUtil.callService(paramList, "completeExpressPurchase", "ShoppingCartBusinessService");
					if(!paypaldiscount)
					{
						paramList.add(false);
						RestClientUtil.callService(paramList, "completeExpressPurchase", "ShoppingCartBusinessService");
					}
					
					else
						RestClientUtil.callService(paramList, "completeExpressPurchaseFB", "ShoppingCartBusinessService");
					log.info("Reverting back the inventory");
					//setting the old shopping cart in which discount is not applied
					 checkOutDetail.setShoppingCart(cart);
					 log.info("-------------------->>>>>>>>>>>>>>>>-------------------->>>>>>>>>>>>>>>>-------------------->>>>>>>>>>>>>>>>grand total is : "+checkOutDetail.getGrandTotal());
						log.info("-------------------->>>>>>>>>>>>>>>>-------------------->>>>>>>>>>>>>>>>-------------------->>>>>>>>>>>>>>>>lineitem price is :"+checkOutDetail.getShoppingCart().getLineItems().get(0).getPrice());
					 setCheckoutDetails(checkOutDetail, orderid,true);
				}
				
				
			}
			else
			{
				responseMessage="failure";
				for(int i=0;i<notAvailProducts.size();i++)
				{
					for(LineItemDTO ld:checkOutDetail.getShoppingCart().getLineItems())
					{
						if(ld.getProductVariantId().equals(notAvailProducts.get(i)))
						{
							notAvailSequenceIds.add(ld.getSequenceId());
						}
					}
				}
			//we need to alert the user that Inventory not avaible
			}
			//log.info("not available sequence ids are "+notAvailSequenceIds.size());
			checkoutResponseDTO.setSequenceIds(notAvailSequenceIds);
			checkoutResponseDTO.setResponseMessage(responseMessage);
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception in the completePurchase"+e.getMessage());
			for(StackTraceElement ele:e.getStackTrace())
			{
				log.warning(ele.toString());
			}
			responseMessage="Error while completing the order";
		}
		return checkoutResponseDTO;
	}
	
	private String getResponseMessage(HashMap responsemap)
	{
		if("7".equals((String)responsemap.get("RESULT")) && ((String)responsemap.get("RESPMSG")).indexOf("10728")!=-1)
		{
			return "There�s an error with this transaction. Please enter a city in the shipping address in your PayPal Account and try again!";
		}
		else if("7".equals((String)responsemap.get("RESULT")) && ((String)responsemap.get("RESPMSG")).indexOf("10411")!=-1)
		{
			return "Your Express Checkout session has expired. Please click <a href=\"/redirectToPaypalExpress.htm\">here </a> to login to PayPal again and complete your purchase!";
		}
		else if("12".equals((String)responsemap.get("RESULT")) && ((String)responsemap.get("RESPMSG")).indexOf("10417")!=-1)
		{
			return "The funding source you are trying to use to submit the payment with can't be used to complete the order please select an alternative payment method using your PayPal account.";
		}
		else
		{
			return (String)responsemap.get("RESPMSG");
		}
		
	}
	
	
	private HashMap getLineItemsAsMap(ShoppingCart cart)
		{
			HashMap map=new HashMap();
			Double lineItemSum = 0.0;
			Double lastDstPrice = 0.0;
//			int qty = 0;
			try
				{
				DiscountProgram dp = VeroniqaUtil.getDiscountProgramForFB();
					if(cart!=null&&cart.getLineItems()!=null&&cart.getLineItems().size()>0)
						{
							List<LineItemDTO> lineitems=cart.getLineItems();
							for(int i=0;i<lineitems.size();i++)
								{
									LineItemDTO dto=lineitems.get(i);
									map.put("L_NAME"+i, dto.getVendorName()+" "+dto.getProductName());
									map.put("L_DESC"+i, "Color:"+dto.getColorName()+" Size:"+dto.getSize());
									log.info("dto.getUnitPrice() is "+dto.getUnitPrice());
									double price = cart.getLineItems().get(i).getPrice();
									log.info("price is "+price);
									// dto.getUnitPrice() is Single Quantity Price
									// cart.getLineItems().get(i).getPrice()      is with Quantity Multiplied
									DecimalFormat df = new DecimalFormat("#.00");
									if(cart.getLineItems().get(i).getIsSale())
									{
										if(dp!=null && !dp.getProgramTypeName().equals("Brand") && dp.getProgramTypeName().equals("FF") && !dp.getProgramTypeName().equals("Order"))
										{
											log.info("Discount Exists Today");
											double discountedPrice = dto.getUnitPrice() -(dto.getUnitPrice()*dp.getDiscountPercentage()/100);
											log.info("discountedPrice for single Quantity is "+discountedPrice);
											map.put("L_COST"+i, df.format(discountedPrice));
											log.info("L_COST & I VALUE IS :: "+i+" and "+df.format(discountedPrice));
											log.info("discountedPrice for single Quantity is "+discountedPrice);
										}
										else if(dp!=null && dp.getProgramTypeName().equals("Brand") && !dp.getProgramTypeName().equals("FF") && !dp.getProgramTypeName().equals("Order"))
										{
											for(int j=0;j<dp.getVendorNames().size();j++)
											{
												if(dp.getVendorNames().get(j).toLowerCase().equals(lineitems.get(i).getVendorName().toLowerCase()))
												{
													log.info("Discount Exists Today");
													double discountedPrice = dto.getUnitPrice() -(dto.getUnitPrice()*dp.getDiscountPercentage()/100);
													log.info("discountedPrice for single Quantity is "+discountedPrice);
													map.put("L_COST"+i, df.format(discountedPrice));
													log.info("discountedPrice for single Quantity is "+discountedPrice);
												}
												else
												{
													  map.put("L_COST"+i, (dto.getUnitPrice()));
												}
											}
										}
										else if(dp==null || dp.equals(""))
										{
											log.info("There is no Discount Exists Today");
										    map.put("L_COST"+i, (dto.getUnitPrice()));
										    log.info("salePrice of the Item is "+dto.getUnitPrice());
										}
									
									}
									else
									{
										//DiscountProgram dp = VeroniqaUtil.getDiscountProgramForFB();
										if(dp!=null && !dp.getProgramTypeName().equals("Brand") && dp.getProgramTypeName().equals("FF") && !dp.getProgramTypeName().equals("Order"))
										{
											map.put("L_COST"+i, (dto.getUnitPrice()));
											log.info("NOT A SALE SHOE, L_COST & I VALUE IS :: "+i+" and "+(dto.getUnitPrice()));
										}
										else if(dp!=null && dp.getProgramTypeName().equals("Brand") && !dp.getProgramTypeName().equals("FF") && !dp.getProgramTypeName().equals("Order"))
										{
											for(int j=0;j<dp.getVendorNames().size();j++)
											{
												if(dp.getVendorNames().get(j).toLowerCase().equals(lineitems.get(i).getVendorName().toLowerCase()))
												{
													log.info("Discount Exists Today");
													double discountedPrice = dto.getUnitPrice() -(dto.getUnitPrice()*dp.getDiscountPercentage()/100);
													log.info("discountedPrice for single Quantity is "+discountedPrice);
													map.put("L_COST"+i, df.format(discountedPrice));
													log.info("discountedPrice for single Quantity is "+discountedPrice);
												}
												else
												{
													  map.put("L_COST"+i, (dto.getUnitPrice()));
												}
											}
										}
										else if(dp==null || dp.equals(""))
										{
											log.info("RetialPrice of the Item is "+dto.getUnitPrice());
										    map.put("L_COST"+i, (dto.getUnitPrice()));
										}
									}
									if(dp!=null && !dp.getProgramTypeName().equals("Brand") && !dp.getProgramTypeName().equals("FF") && dp.getProgramTypeName().equals("Order"))
									{
										log.info("********* INSIDE DISCOUNT PROGRAM *************");
										List<OrderThreshold> ot = VeroniqaUtil.getThresholdValues();
										Boolean conditionSatisfied = false;
										Double discountPrice = 0.00;
										Double cartSubtotal = cart.getSubTotal();
										Double discountLineitemPrice = 0.00;
										Double discountLPrice = 0.00;
										Double discountLineitemPercentage = 0.00;
										Double discountLPercentage = 0.00;
										Double ltPrice = 0.00;
										Double lPrice = 0.00;
										log.info("cart subtotal value is :: "+cart.getSubTotal());
										for(int t=0; t<ot.size(); t++)
										{
											if(cartSubtotal>=ot.get(t).getThresholdMin() && cartSubtotal<ot.get(t).getThresholdMax() && conditionSatisfied == false)
											{
												log.info("*********** sale or not ************"+dto.getIsSale());
												conditionSatisfied = true;
												discountPrice=ot.get(t).getThresholdDiscount();
												//log.info("line item is :: "+i+" && the price of the line item is :: "+dto.getPrice()+" && the unitprice of the line item is :: "+dto.getUnitPrice());
												ltPrice = dto.getUnitPrice();
												discountLineitemPercentage = (ltPrice*100.00)/cartSubtotal;
											//	log.info("discountline item percentage is :: "+discountLineitemPercentage);
												discountLineitemPrice = (discountLineitemPercentage*discountPrice)/100;
											//	log.info("discount line item price is :: "+discountLineitemPrice);
												ltPrice = ltPrice-discountLineitemPrice;
												log.info("*********** discountLineitemPrice ************** "+discountLineitemPrice);
												log.info("*********** ltPrice *************** "+ltPrice);
												//lPrice = dto.getPrice();
												//log.info("get price value is :: "+dto.getPrice()+"&& the get unit price :: "+dto.getUnitPrice()+" && lprice :: "+ltPrice);
//												discountLPercentage = (lPrice*100.00)/cartSubtotal;
//												discountLPrice = (discountLPercentage*discountPrice)/100;
//												lPrice = lPrice-discountLineitemPrice;
												lPrice=ltPrice*dto.getQuantity();
												log.info("**** lPrice *** "+lPrice);
												
											}
										}
										log.info("COST OF THE LINEITEM FINAL IS :: "+new DecimalFormat("#0.00").format(ltPrice));
										map.put("L_COST"+i,	new DecimalFormat("#0.00").format(ltPrice));
										lineItemSum +=lPrice;
										if(lineitems.size()-1==i)
										{
											lastDstPrice = ltPrice;
											//qty = dto.getQuantity();
										}
									}
									map.put("L_QTY"+i,dto.getQuantity());
								}
							log.info("This is after the for loop of the lineitem with quantity:: "+lineItemSum);
							if(dp!=null && !dp.getProgramTypeName().equals("Brand") && !dp.getProgramTypeName().equals("FF") && dp.getProgramTypeName().equals("Order"))
							{
								log.info("******** Sum of lineItemSum ********"+lineItemSum);
								Double amount = new Double(new DecimalFormat("#0.00").format(new Double(getLineItemsCalTotal(cart))));
								lineItemSum = new Double(new DecimalFormat("#0.00").format(lineItemSum));
								log.info("new Double(new DecimalFormat('#0.00').format(new Double(getLineItemsCalTotal(cart))))"+new Double(new DecimalFormat("#0.00").format(new Double(getLineItemsCalTotal(cart)))));
								if(lineItemSum!=amount)
								{
									double difference = amount - lineItemSum;
									
									log.info("********* Difference ********"+difference);
									int lastLineItem = lineitems.size()-1;
									String formattedDiff = new DecimalFormat("#0.00").format(difference);
									log.info("******* formatted difference **********"+formattedDiff+" "+(lastDstPrice-new Double(formattedDiff)));
									
									log.info("**** lineitems.get(lastLineItem).getUnitPrice() *** "+lastDstPrice+" ****"+new Double(formattedDiff));
//									if(qty==1)
//									{
										if(new Double(difference).toString().contains("-"))
										{
											map.put("L_COST"+lastLineItem, new DecimalFormat("#0.00").format(lastDstPrice-difference));
										}
										else
										{
											map.put("L_COST"+lastLineItem, new DecimalFormat("#0.00").format(lastDstPrice+difference));
										}
//									}
//									else
//									{
//										log.info("*************** inside the else part so qty>1 ******************");
//										log.info("*************** new DecimalFormat('#0.00').format((lastDstPrice/qty)-new Double(formattedDiff)) ******************"+new DecimalFormat("#0.00").format((lastDstPrice/qty)-new Double(formattedDiff)));
//										if(new Double(difference).toString().contains("-"))
//										{
//											map.put("L_COST"+lastLineItem, new DecimalFormat("#0.00").format((lastDstPrice/qty)-new Double(formattedDiff)));
//										}
//										else
//										{
//											map.put("L_COST"+lastLineItem, new DecimalFormat("#0.00").format((lastDstPrice/qty)+new Double(formattedDiff)));
//										}
//									}
								}
							}
							}
							
						}
						catch(Exception e)
						{
						e.printStackTrace();
						}
						return map;
					}
	
	/**
	 * This is to get the Line Item Final Sale Price if Discount Exists
	 * And it is a Fix for Live Bug - June 27th 2013 - Final Sale Time
	 */

	
	
	private double getLineItemsCalTotal(ShoppingCart cart)
	{
		double totalAmount = 0.00;
		DecimalFormat df = new DecimalFormat("#.00");
		try
			{
				if(cart!=null&&cart.getLineItems()!=null&&cart.getLineItems().size()>0)
				{
					List<LineItemDTO> lineitems=cart.getLineItems();
					for(int i=0;i<lineitems.size();i++)
					{
						LineItemDTO dto=lineitems.get(i);
						log.info("dto.getUnitPrice() is "+dto.getUnitPrice());
						double price = cart.getLineItems().get(i).getPrice();
						log.info("price is "+price);
						
						if(cart.getLineItems().get(i).getIsSale())
						{
							log.info("SALE SHOE");
							DiscountProgram dp = VeroniqaUtil.getDiscountProgramForFB();
							if(dp!=null && dp.getProgramTypeName().equals("FF"))
							{
								log.info("SALE SHOE AND DISCOUNT TYPE IS FF ");
								double discountedPrice = dto.getUnitPrice() -(dto.getUnitPrice()*dp.getDiscountPercentage()/100);
								log.info("discountedPrice for single Quantity is "+discountedPrice);
								double finalSalePrice = Double.parseDouble(df.format(discountedPrice))*dto.getQuantity();
								log.info("quantity is "+dto.getQuantity()+" and the finalSalePrice is "+finalSalePrice);
								log.info("df.format(finalSalePrice) is "+df.format(finalSalePrice));
								totalAmount = Double.parseDouble(df.format(totalAmount)) + Double.parseDouble(df.format(finalSalePrice));
							}
							else if(dp!=null && dp.getProgramTypeName().equals("Brand") && !dp.getProgramTypeName().equals("FF"))
							{
								for(int j=0;j<dp.getVendorNames().size();j++)
								{
									if(dp.getVendorNames().get(j).toLowerCase().equals(lineitems.get(i).getVendorName().toLowerCase()))
									{
										double discountedPrice = dto.getUnitPrice() -(dto.getUnitPrice()*dp.getDiscountPercentage()/100);
										log.info("discountedPrice for single Quantity is "+discountedPrice);
										double finalSalePrice = Double.parseDouble(df.format(discountedPrice))*dto.getQuantity();
										log.info("quantity is "+dto.getQuantity()+" and the finalSalePrice is "+finalSalePrice);
										log.info("df.format(finalSalePrice) is "+df.format(finalSalePrice));
										totalAmount = Double.parseDouble(df.format(totalAmount)) + Double.parseDouble(df.format(finalSalePrice));
									}
									else
									{
										totalAmount = Double.parseDouble(df.format(totalAmount)) + dto.getUnitPrice()* dto.getQuantity();
									}
								}
							}
							else
							{
							   log.info("SALE SHOE AND THE DISCOUNT TYPE DINT MATCH");
							   totalAmount = Double.parseDouble(df.format(totalAmount)) + dto.getUnitPrice()* dto.getQuantity();
							}
						}
						else
						{
							log.info("NOT A SALE SHOE");
						   DiscountProgram dp = VeroniqaUtil.getDiscountProgramForFB();
						   if(dp!=null && dp.getProgramTypeName().equals("Brand") && !dp.getProgramTypeName().equals("FF"))
							{
								for(int j=0;j<dp.getVendorNames().size();j++)
								{
									if(dp.getVendorNames().get(j).toLowerCase().equals(lineitems.get(i).getVendorName().toLowerCase()))
									{
										double discountedPrice = dto.getUnitPrice() -(dto.getUnitPrice()*dp.getDiscountPercentage()/100);
										log.info("discountedPrice for single Quantity is "+discountedPrice);
										double finalSalePrice = Double.parseDouble(df.format(discountedPrice))*dto.getQuantity();
										log.info("quantity is "+dto.getQuantity()+" and the finalSalePrice is "+finalSalePrice);
										log.info("df.format(finalSalePrice) is "+df.format(finalSalePrice));
										totalAmount = Double.parseDouble(df.format(totalAmount)) + Double.parseDouble(df.format(finalSalePrice));
									}
									else
									{
										totalAmount = Double.parseDouble(df.format(totalAmount)) + dto.getUnitPrice()* dto.getQuantity();
									}
								}
							}
						   else
						   {
							   log.info("NOT A SALE SHOE 2");
							   totalAmount = Double.parseDouble(df.format(totalAmount)) +dto.getUnitPrice()*dto.getQuantity();
						   }
						}
					}
					DiscountProgram dp = VeroniqaUtil.getDiscountProgramForFB();
					if(dp!=null && !dp.getProgramTypeName().equals("Brand") && !dp.getProgramTypeName().equals("FF") && dp.getProgramTypeName().equals("Order"))
					{
						List<OrderThreshold> ot = VeroniqaUtil.getThresholdValues();
						Boolean conditionSatisfied = false;
						Double discountPrice = 0.00;
						Double cartSubtotal = cart.getSubTotal();
						log.info("cart subtotal value is :: "+cart.getSubTotal());
						for(int t=0; t<ot.size(); t++)
						{
							if(cartSubtotal>=ot.get(t).getThresholdMin() && cartSubtotal<ot.get(t).getThresholdMax() && conditionSatisfied == false)
							{
								conditionSatisfied = true;
								discountPrice=ot.get(t).getThresholdDiscount();
								totalAmount = totalAmount-discountPrice;
								log.info("total amount price from getLineItemsCalTotal method is :: "+df.format(totalAmount));
								
							}
						}
					}
				}
			}
		catch(Exception e)
		{
		  e.printStackTrace();
		}
		 log.info("TOTAL AMOUNT AFTER ALTERATION IS :: "+df.format(totalAmount));
		 return Double.parseDouble(df.format(totalAmount));
	}
	


}
