package com.veroniqa.commonservices;

import java.text.DecimalFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

import org.apache.commons.lang.StringUtils;

import com.google.appengine.api.datastore.Blob;
import com.veroniqa.dto.CheckoutDetailDTO;
import com.veroniqa.dto.LineItemDTO;
import com.veroniqa.dto.OrderLineDTO;
import com.veroniqa.dto.ShippingAddressDTO;
import com.veroniqa.dto.ShippingServiceDTO;
import com.veroniqa.dto.ShoppingCart;
import com.veroniqa.email.dto.EmailDTO;
import com.veroniqa.email.emailclientservice.EmailClientService;
import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.MemcachedConstants;
import com.veroniqa.frontend.util.MemcachedUtil;
import com.veroniqa.frontend.util.ObjectToBytes;
import com.veroniqa.frontend.util.RestClientUtil;
import com.veroniqa.frontend.util.VelocityUtil;
import com.veroniqa.frontend.util.VeroniqaConstants;
import com.veroniqa.frontend.util.VeroniqaUtil;
import com.veroniqa.jdo.EmailTemplate;
import com.veroniqa.jdo.Lookup;
import com.veroniqa.jdo.Order;
import com.veroniqa.jdo.OrderLine;

public abstract class CheckoutActionService  {
	Logger log =Logger.getLogger(CheckoutActionService.class.getSimpleName());
	
	public CheckoutDetailDTO getCheckoutDetails(String orderId)
	{
		CheckoutDetailDTO checkoutDetails=null;
		try
		{
			log.info("Inside the getCheckoutDetails "+orderId);
			if(orderId!=null)
			{
				checkoutDetails=(CheckoutDetailDTO)MemcachedUtil.get(MemcachedConstants.CHECKOUT_DETAILS+orderId, MemcachedConstants.SHOPPING_CART_NAMESPACE);
				if(checkoutDetails==null)
				{
					log.info("Checkout Detail Not Found in memcache going to pull from DB!");
					List<Object> paramList=new ArrayList<Object>();
					paramList.add(MemcachedConstants.CHECKOUT_DETAILS+orderId);
					Lookup lookUp=(Lookup) RestClientUtil.callService(paramList, "getLookupByName_", "LookupBusinessService");
					if(lookUp==null)
					{
						log.info("Lookup not found in DB");
						throw new Exception("Lookup not there in datastore");
					}
					else
					{
					 checkoutDetails=(CheckoutDetailDTO)ObjectToBytes.getObjectFromBytes(lookUp.getBlobValue().getBytes());
					 MemcachedUtil.set(MemcachedConstants.CHECKOUT_DETAILS+orderId,checkoutDetails,MemcachedConstants.SHOPPING_CART_NAMESPACE);
					}
					//log.info("The value of the login type from the getCheckoutDetails is :: "+checkoutDetails.getLoginType());
				}
				
			}
		}
		catch(Exception e)
		{
			log.warning("Exception in the getCheckOutDetails "+e);
			e.printStackTrace();
		}
		return checkoutDetails;
	}
	
	public Lookup setCheckoutDetails(CheckoutDetailDTO checkOutDetails,String orderId,boolean updateOnly)
	{
		Lookup returnedLookup=null;
		log.info("Inside setCheckoutDetails "+orderId);
		try
		{
			MemcachedUtil.set(MemcachedConstants.CHECKOUT_DETAILS+orderId,checkOutDetails, MemcachedConstants.SHOPPING_CART_NAMESPACE);
			Lookup lookup=new Lookup();
			lookup.setName(MemcachedConstants.CHECKOUT_DETAILS+orderId);
			lookup.setBlobValue(new Blob(ObjectToBytes.getBytesFromObject(checkOutDetails)));
			//log.info("login type value in set checkoutdetail method :: "+checkOutDetails.getLoginType());
			List<Object> params=new ArrayList<Object>();
			params.add(lookup);
			params.add(new Boolean(updateOnly));
			returnedLookup=(Lookup)RestClientUtil.callService(params,"saveLookup","LookupBusinessService");
		}
		catch(Exception e)
		{
			log.warning("Exception in the setCheckOutDetails "+e);
			e.printStackTrace();
		}
		return returnedLookup;
	}
	
	public void sendConfirmationMail(CheckoutDetailDTO checkoutDetail)
	{
		try
		{
			log.info("Sending the Confirmation Mail");
			boolean isPreOrder=false;
			for(LineItemDTO ld:checkoutDetail.getShoppingCart().getLineItems())
			{
				if(ld.getIsPreOrder().equals(true))
				{	
					isPreOrder=true;
					break;
				}
			}
			EmailDTO emailDTO=new EmailDTO();
			HashMap<String,String> mailList=new HashMap<String, String>();
			String customerName=checkoutDetail.getCustomerDetailDTO().getFirstName()+" "+checkoutDetail.getCustomerDetailDTO().getLastName();
			mailList.put(checkoutDetail.getCustomerDetailDTO().getEmail(),customerName);
			emailDTO.setTo(mailList);
			emailDTO.setFrom(VeroniqaConstants.CUSTOMER_SERVICE_MAIL);			
			emailDTO.setFromName("Solestruck");
			emailDTO.setSubject("Thanks for your purchase.");
			Map<String,String> contentMap=new HashMap<String,String>();
			if(isPreOrder)
			{
				contentMap=getEmailConfirmationContent(checkoutDetail, "PURCHASE_CONFIRMATION_PREORDER");
			}
			else
				contentMap=getEmailConfirmationContent(checkoutDetail, "PURCHASE_CONFIRMATION");
			if(contentMap.size()>1){
				String htmlContent=contentMap.get("html");
				String textContent=contentMap.get("text");
				emailDTO.setHtmlMessage(htmlContent);
				emailDTO.setTextMessage(textContent);
				//log.info("HTML CONTENT : "+htmlContent);
			}
			EmailClientService.sendMailtoMailService(emailDTO);

		}
		catch(Exception e)
		{
			log.warning("Exception while sending Confirmation Mail:"+e);
		}
	}
	
	public void sendFBConfirmationMail(CheckoutDetailDTO checkoutDetail)
	{
		try
		{
			log.info("@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@ coming to call the getFBEmailConfirmationContent ");
			log.info("Sending the Confirmation Mail");
			boolean isPreOrder=false;
			for(LineItemDTO ld:checkoutDetail.getShoppingCart().getLineItems())
			{
				if(ld.getIsPreOrder().equals(true))
				{	
					isPreOrder=true;
					break;
				}
			}
			EmailDTO emailDTO=new EmailDTO();
			HashMap<String,String> mailList=new HashMap<String, String>();
			String customerName=checkoutDetail.getCustomerDetailDTO().getFirstName()+" "+checkoutDetail.getCustomerDetailDTO().getLastName();
			mailList.put(checkoutDetail.getCustomerDetailDTO().getEmail(),customerName);
			emailDTO.setTo(mailList);
			emailDTO.setFrom(VeroniqaConstants.CUSTOMER_SERVICE_MAIL);			
			emailDTO.setFromName("Solestruck");
			emailDTO.setSubject("Thanks for your purchase.");
			Map<String,String> contentMap=new HashMap<String,String>();
			if(isPreOrder)
			{
				contentMap=getFBEmailConfirmationContent(checkoutDetail, "PURCHASE_CONFIRMATION_PREORDER");
			}
			else
				contentMap=getFBEmailConfirmationContent(checkoutDetail, "PURCHASE_CONFIRMATION");
			if(contentMap.size()>1){
				String htmlContent=contentMap.get("html");
				String textContent=contentMap.get("text");
				emailDTO.setHtmlMessage(htmlContent);
				emailDTO.setTextMessage(textContent);
				//log.info("HTML CONTENT : "+htmlContent);
			}
			EmailClientService.sendMailtoMailService(emailDTO);

		}
		catch(Exception e)
		{
			log.warning("Exception while sending Confirmation Mail:"+e);
		}
	}
	
	private  Map<String,String> getEmailConfirmationContent(CheckoutDetailDTO detail,String templateType)
	{
		Map<String,String> contentMap=new HashMap<String,String>();
		HashMap<String,Object> velocityDataMap=new HashMap<String,Object>();
		//String imageServerName="http://images2.solestruck.com";
		String imageServerName="http://commondatastorage.googleapis.com/images2.solestruck.com";
		String pServerName=null;
		
		
		List<Object> inputList = new ArrayList<Object>();
		try{
			String mode=EnvironmentUtil.getEnvironmentValue("AppMode");
			if("LIVE".equals(mode))
				pServerName=VeroniqaConstants.LIVE_FRONTEND_URL_FOR_MAIL;
			else
				pServerName=VeroniqaConstants.TESTING_FRONTEND_URL;
			velocityDataMap.put("recipient_FirstName", detail.getCustomerDetailDTO().getFirstName());
			velocityDataMap.put("recipient_LastName", detail.getCustomerDetailDTO().getLastName());
			velocityDataMap.put("phone", detail.getCustomerDetailDTO().getPhone());
			velocityDataMap.put("customerId", detail.getCustomerDetailDTO().getCustomerId());
			log.info("customer id"+detail.getCustomerDetailDTO().getCustomerId());
			velocityDataMap.put("emailId", detail.getCustomerDetailDTO().getEmail());
			velocityDataMap.put("shippingFirstName", detail.getCustomerDetailDTO().getShippingAddress().getFirstName());
			velocityDataMap.put("shippingLastName", detail.getCustomerDetailDTO().getShippingAddress().getLastName());
			velocityDataMap.put("shippingStreet1", detail.getCustomerDetailDTO().getShippingAddress().getStreet1());
			velocityDataMap.put("shippingStreet2", detail.getCustomerDetailDTO().getShippingAddress().getStreet2());
			velocityDataMap.put("shippingStreet3", detail.getCustomerDetailDTO().getShippingAddress().getStreet3());
			velocityDataMap.put("shippingState", detail.getCustomerDetailDTO().getShippingAddress().getState());
			velocityDataMap.put("shippingProvince", detail.getCustomerDetailDTO().getShippingAddress().getProvince());
			velocityDataMap.put("shippingCountryName", detail.getCustomerDetailDTO().getShippingAddress().getCountryName());
			velocityDataMap.put("shippingZip", detail.getCustomerDetailDTO().getShippingAddress().getZipCode());
			velocityDataMap.put("billingStreet1", detail.getCustomerDetailDTO().getBillingAddress().getStreet1());
			velocityDataMap.put("billingStreet2", detail.getCustomerDetailDTO().getBillingAddress().getStreet2());
			velocityDataMap.put("billingStreet3", detail.getCustomerDetailDTO().getBillingAddress().getStreet3());
			velocityDataMap.put("billingState", detail.getCustomerDetailDTO().getBillingAddress().getState());
			velocityDataMap.put("billingProvince", detail.getCustomerDetailDTO().getBillingAddress().getProvince());
			velocityDataMap.put("countryCode", detail.getCustomerDetailDTO().getBillingAddress().getCountry());
			velocityDataMap.put("billingCountryName", detail.getCustomerDetailDTO().getBillingAddress().getCountryName());
			velocityDataMap.put("zipCode", detail.getCustomerDetailDTO().getBillingAddress().getZipCode());
			
			velocityDataMap.put("ltempItems",detail.getShoppingCart().getLineItems());
			log.info("Subtotal"+detail.getShoppingCart().getSubTotal());
			
			velocityDataMap.put("lCustomerOrderNumber", detail.getShoppingCart().getOrderId());
			log.info("Grand total"+detail.getGrandTotal());
			//log.info("the value of the login type is :: "+detail.getLoginType());
//			if(VeroniqaUtil.getDiscountProgramForFB()!=null && VeroniqaUtil.getDiscountProgramForFB().getProgramTypeName().equalsIgnoreCase("Order") && VeroniqaUtil.getThresholdValues()!=null && detail.getLoginType()!=null && detail.getLoginType().equalsIgnoreCase("Facebook"))
//			{
//				//log.info("Coming inside the condition and the checkout detail dto is working fine :: "+detail.getLoginType());
//				Double subtotal = detail.getShoppingCart().getSubTotal();
//				Double discountAmount = 0.00;
//				Double grandTotal = 0.00;
//				Double subTotal = 0.00;
//				for(int i=0; i<VeroniqaUtil.getThresholdSize(); i++)
//				{
//					if(subtotal>=VeroniqaUtil.getThresholdValues().get(i).getThresholdMin() && subtotal<VeroniqaUtil.getThresholdValues().get(i).getThresholdMax())
//					{
//						discountAmount = VeroniqaUtil.getThresholdValues().get(i).getThresholdDiscount();
//						log.info("the grand total before calculation is :: "+detail.getGrandTotal());
//						grandTotal = detail.getGrandTotal()-discountAmount;
//						subTotal = detail.getShoppingCart().getSubTotal()-discountAmount;
//						log.info("the grandtotal after calculation is :: "+grandTotal);
//					}
//					else
//					{
//						subTotal = detail.getShoppingCart().getSubTotal();
//						grandTotal = detail.getGrandTotal(); 
//					}
//				}
//				velocityDataMap.put("purchaseTotalPrice", new DecimalFormat("$#0.00").format(subTotal));
//				velocityDataMap.put("lTotalPrice", new DecimalFormat("$#0.00").format(grandTotal));	
//			}
//			else
//			{
				velocityDataMap.put("purchaseTotalPrice", new DecimalFormat("$#0.00").format(detail.getShoppingCart().getSubTotal()));
				velocityDataMap.put("lTotalPrice", new DecimalFormat("$#0.00").format(detail.getGrandTotal()));
			//}
			velocityDataMap.put("shippingMethod", detail.getShippingMethod());
			velocityDataMap.put("paymentType", detail.getPaymentType());
			velocityDataMap.put("discountPrice", detail.getDiscountPrice());
			log.info("shipping price "+detail.getShippingPrice());
			velocityDataMap.put("lShippingCost", new DecimalFormat("$#0.00").format(detail.getShippingPrice()));
			
			velocityDataMap.put("lServername", pServerName);
			velocityDataMap.put("imageServername", imageServerName);
			if(VeroniqaConstants.PAYPAL_EXPRESS_PURCHASE.equals(detail.getPaymentType()))
			{
				log.info("paypal customer");
				log.info("acc activated"+detail.getCustomerDetailDTO().getIsAccountActivated());
				velocityDataMap.put("ispaypalExpressOrder", true);
				
				velocityDataMap.put("isAccActivated", detail.getCustomerDetailDTO().getIsAccountActivated());
			}
			else
			{
				log.info("not paypal customer");
			}
			
			inputList.add(Long.parseLong(EnvironmentUtil.getEnvironmentValue(templateType)));
			EmailTemplate emailTemp=(EmailTemplate) RestClientUtil.callService(inputList, "getEmailTemplateById", "EmailTemplateBusinessService");
			String textMsg=emailTemp.getTextMessage();
			String htmlMsg=emailTemp.getHtmlMessage();
			
			String textMailContent=VelocityUtil.getMappedString(velocityDataMap,textMsg);
			String htmlMailContent=VelocityUtil.getMappedString(velocityDataMap,htmlMsg);
			
			contentMap.put("text", textMailContent);
			contentMap.put("html", htmlMailContent);
			
			log.info("EmailConfirmation Template processed");
		}
		catch(Exception e){
			log.warning("Exception in getEmailConfirmationContent : "+e);
			
		}
		return contentMap;
	}
	
	private  Map<String,String> getFBEmailConfirmationContent(CheckoutDetailDTO detail,String templateType)
	{
		log.info("########################## coming inside the getFBEmailConfirmationContent");
		Map<String,String> contentMap=new HashMap<String,String>();
		HashMap<String,Object> velocityDataMap=new HashMap<String,Object>();
		//String imageServerName="http://images2.solestruck.com";
		String imageServerName="http://commondatastorage.googleapis.com/images2.solestruck.com";
		String pServerName=null;
		
		
		List<Object> inputList = new ArrayList<Object>();
		try{
			String mode=EnvironmentUtil.getEnvironmentValue("AppMode");
			if("LIVE".equals(mode))
				pServerName=VeroniqaConstants.LIVE_FRONTEND_URL_FOR_MAIL;
			else
				pServerName=VeroniqaConstants.TESTING_FRONTEND_URL;
			velocityDataMap.put("recipient_FirstName", detail.getCustomerDetailDTO().getFirstName());
			velocityDataMap.put("recipient_LastName", detail.getCustomerDetailDTO().getLastName());
			velocityDataMap.put("phone", detail.getCustomerDetailDTO().getPhone());
			velocityDataMap.put("customerId", detail.getCustomerDetailDTO().getCustomerId());
			log.info("customer id"+detail.getCustomerDetailDTO().getCustomerId());
			velocityDataMap.put("emailId", detail.getCustomerDetailDTO().getEmail());
			velocityDataMap.put("shippingFirstName", detail.getCustomerDetailDTO().getShippingAddress().getFirstName());
			velocityDataMap.put("shippingLastName", detail.getCustomerDetailDTO().getShippingAddress().getLastName());
			velocityDataMap.put("shippingStreet1", detail.getCustomerDetailDTO().getShippingAddress().getStreet1());
			velocityDataMap.put("shippingStreet2", detail.getCustomerDetailDTO().getShippingAddress().getStreet2());
			velocityDataMap.put("shippingStreet3", detail.getCustomerDetailDTO().getShippingAddress().getStreet3());
			velocityDataMap.put("shippingState", detail.getCustomerDetailDTO().getShippingAddress().getState());
			velocityDataMap.put("shippingProvince", detail.getCustomerDetailDTO().getShippingAddress().getProvince());
			velocityDataMap.put("shippingCountryName", detail.getCustomerDetailDTO().getShippingAddress().getCountryName());
			velocityDataMap.put("shippingZip", detail.getCustomerDetailDTO().getShippingAddress().getZipCode());
			velocityDataMap.put("billingStreet1", detail.getCustomerDetailDTO().getBillingAddress().getStreet1());
			velocityDataMap.put("billingStreet2", detail.getCustomerDetailDTO().getBillingAddress().getStreet2());
			velocityDataMap.put("billingStreet3", detail.getCustomerDetailDTO().getBillingAddress().getStreet3());
			velocityDataMap.put("billingState", detail.getCustomerDetailDTO().getBillingAddress().getState());
			velocityDataMap.put("billingProvince", detail.getCustomerDetailDTO().getBillingAddress().getProvince());
			velocityDataMap.put("countryCode", detail.getCustomerDetailDTO().getBillingAddress().getCountry());
			velocityDataMap.put("billingCountryName", detail.getCustomerDetailDTO().getBillingAddress().getCountryName());
			velocityDataMap.put("zipCode", detail.getCustomerDetailDTO().getBillingAddress().getZipCode());
			
			velocityDataMap.put("ltempItems",detail.getShoppingCart().getLineItems());
			log.info("Subtotal"+detail.getShoppingCart().getSubTotal());
			
			velocityDataMap.put("lCustomerOrderNumber", detail.getShoppingCart().getOrderId());
			log.info("Grand total"+detail.getGrandTotal());
			
			Double subtotal = detail.getShoppingCart().getSubTotal();
			Double discountAmount = 0.00;
			Double grandTotal = 0.00;
			Double subTotal = 0.00;
			Boolean conditionSatisfied = false;
			for(int i=0; i<VeroniqaUtil.getThresholdSize(); i++)
			{
				if(subtotal>=VeroniqaUtil.getThresholdValues().get(i).getThresholdMin() && subtotal<VeroniqaUtil.getThresholdValues().get(i).getThresholdMax() && conditionSatisfied==false)
				{
					conditionSatisfied=true;
					discountAmount = VeroniqaUtil.getThresholdValues().get(i).getThresholdDiscount();
					log.info("the grand total before calculation is :: "+detail.getGrandTotal());
					grandTotal = detail.getGrandTotal()-discountAmount;
					subTotal = detail.getShoppingCart().getSubTotal()-discountAmount;
					log.info("the grandtotal after calculation is :: "+grandTotal);
					break;
				}
				else
				{
					log.info("COMING TO THE ELSE CONDITION");
					subTotal = detail.getShoppingCart().getSubTotal();
					grandTotal = detail.getGrandTotal(); 
				}
			}
			log.info(" THE GRAND TOTAL IS :: "+grandTotal);
			velocityDataMap.put("purchaseTotalPrice", new DecimalFormat("$#0.00").format(subTotal));
			velocityDataMap.put("lTotalPrice", new DecimalFormat("$#0.00").format(grandTotal));	
			

			velocityDataMap.put("shippingMethod", detail.getShippingMethod());
			velocityDataMap.put("paymentType", detail.getPaymentType());
			velocityDataMap.put("discountPrice", detail.getDiscountPrice());
			log.info("shipping price "+detail.getShippingPrice());
			velocityDataMap.put("lShippingCost", new DecimalFormat("$#0.00").format(detail.getShippingPrice()));
			
			velocityDataMap.put("lServername", pServerName);
			velocityDataMap.put("imageServername", imageServerName);
			if(VeroniqaConstants.PAYPAL_EXPRESS_PURCHASE.equals(detail.getPaymentType()))
			{
				log.info("paypal customer");
				log.info("acc activated"+detail.getCustomerDetailDTO().getIsAccountActivated());
				velocityDataMap.put("ispaypalExpressOrder", true);
				
				velocityDataMap.put("isAccActivated", detail.getCustomerDetailDTO().getIsAccountActivated());
			}
			else
			{
				log.info("not paypal customer");
			}
			
			inputList.add(Long.parseLong(EnvironmentUtil.getEnvironmentValue(templateType)));
			EmailTemplate emailTemp=(EmailTemplate) RestClientUtil.callService(inputList, "getEmailTemplateById", "EmailTemplateBusinessService");
			String textMsg=emailTemp.getTextMessage();
			String htmlMsg=emailTemp.getHtmlMessage();
			
			String textMailContent=VelocityUtil.getMappedString(velocityDataMap,textMsg);
			String htmlMailContent=VelocityUtil.getMappedString(velocityDataMap,htmlMsg);
			
			contentMap.put("text", textMailContent);
			contentMap.put("html", htmlMailContent);
			
			log.info("EmailConfirmation Template processed");
		}
		catch(Exception e){
			log.warning("Exception in getEmailConfirmationContent : "+e);
			
		}
		return contentMap;
	}
	
	public void setShippingServiceZone(Long serviceZoneId,ShoppingCart cart,CheckoutDetailDTO checkoutDetails,Boolean isFB)
	{
		try {
			log.info("Inside setShippingService.shippingServiceTypeId :"+serviceZoneId);
			Long orderid=cart.getOrderId();
			log.info("orderid:"+orderid);
			
			if(checkoutDetails==null){
				log.info("CheckoutDetail couldn't be retrieved");
				throw new Exception("CheckoutDetail couldn't be retrieved");
			}
			if(cart!=null)
			{
				int quantity=0;
				for(LineItemDTO item:cart.getLineItems()){
					quantity=quantity+item.getQuantity();
				}
				Double subTotal=cart.getSubTotal();
				if(isFB)
					subTotal=cart.getSubTotal_FB();
				else
					subTotal=cart.getSubTotal();
					
				List<Object> inputList = new ArrayList<Object>();
				inputList.add(quantity);
				
				inputList.add(subTotal);
				inputList.add(serviceZoneId);
				inputList.add(orderid);
				Order updatedOrder=(Order) RestClientUtil.callService(inputList, "updateShippingServiceForOrder", "OrderBusinessService");
				if(updatedOrder!=null)
				{
					checkoutDetails.setGrandTotal(cart.getSubTotal()+updatedOrder.getShippingPrice());
					checkoutDetails.setShippingPrice(updatedOrder.getShippingPrice());
					checkoutDetails.setShoppingCart(cart);
					checkoutDetails.setShippingMethod(updatedOrder.getShippingMethod());
					checkoutDetails.setShippingServiceZoneId(serviceZoneId);
					log.info("Shipping charge"+checkoutDetails.getShippingPrice());
				}	
				else
					log.info("Updated order ------->null");
				int checkout_step=3;
				if(checkoutDetails.getCheckoutStep()==null)
					checkoutDetails.setCheckoutStep(1);
				checkoutDetails.setCheckoutStep(checkout_step>checkoutDetails.getCheckoutStep().intValue()?checkout_step:checkoutDetails.getCheckoutStep());
	
				setCheckoutDetails(checkoutDetails,orderid.toString(),true);				
			}
			else
				log.info("cart-------->null");
				
		} 
		catch (Exception e) {
			e.printStackTrace();
			log.warning("Exception in setShippingService : "+e); 
		}
	}
		
	public Boolean checkForPOInAddress(ShippingAddressDTO shippingAddress)
	{
		Boolean returnVal=false;
		try
		{
			if(shippingAddress!=null){
			if(StringUtils.containsIgnoreCase(shippingAddress.getStreet1(),"box"))
				returnVal=true;
			else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet2(),"box"))
				returnVal=true;
			else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet2(),"box"))
				returnVal=true;
			}
			log.info("Inside the checkForPOInAddress final return value is "+returnVal);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("Exception in checkForPOInAddress "+e.getMessage());
		}
		return returnVal;
	}
	
		public List<ShippingServiceDTO> getShippingServiceForPO(Boolean poexists,ShippingAddressDTO shippingAddress,List<ShippingServiceDTO> shippingServices)
		{
			try
			{
				String countryCode=shippingAddress.getCountry();
				log.info("poexists is "+poexists+" countryCode "+countryCode);
				if(countryCode.equalsIgnoreCase("us"))
				{
					if(poexists)
					{
						List<ShippingServiceDTO> uspsShippingServices=new ArrayList<ShippingServiceDTO>();
						for(ShippingServiceDTO service:shippingServices)
						{
							if(service.getZone().getShippingServiceName().equalsIgnoreCase("usps"))
							{
								uspsShippingServices.add(service);
							}
						}
						if(uspsShippingServices!=null && uspsShippingServices.size()>0)
		                    shippingServices=uspsShippingServices;
					}
					else
					{
						List<ShippingServiceDTO> uspsShippingServices=new ArrayList<ShippingServiceDTO>();
						for(ShippingServiceDTO service:shippingServices)
						{
							if(service.getZone().getShippingServiceName().equalsIgnoreCase("fedex"))
							{
								uspsShippingServices.add(service);
							}
						}
						if(uspsShippingServices!=null && uspsShippingServices.size()>0)
		                    shippingServices=uspsShippingServices;
					}
				}
				else
				{
					if(poexists)
					{
						List<ShippingServiceDTO> pshippingServices=new ArrayList<ShippingServiceDTO>();
						for(ShippingServiceDTO service:shippingServices)
						{
							if(service.getZone().getShippingServiceName().equalsIgnoreCase("usps"))
							{
								pshippingServices.add(service);
							}
						}
						if(pshippingServices!=null && pshippingServices.size()>0)
		                    shippingServices=pshippingServices;
					}
					else
					{
						List<ShippingServiceDTO> pshippingServices=new ArrayList<ShippingServiceDTO>();
						for(ShippingServiceDTO service:shippingServices)
						{
							if(service.getZone().getShippingServiceName().equalsIgnoreCase("usps") && service.getZone().getShippingServiceTypeName().equalsIgnoreCase("priority international"))
							{
								pshippingServices.add(service);
							}
							else if(service.getZone().getShippingServiceName().equalsIgnoreCase("fedex") && service.getZone().getShippingServiceTypeName().equalsIgnoreCase("international economy"))
							{
								pshippingServices.add(service);
							}
							else if(service.getZone().getShippingServiceName().equalsIgnoreCase("fedex") && service.getZone().getShippingServiceTypeName().equalsIgnoreCase("international priority"))
							{
								pshippingServices.add(service);
							}
						}
						if(pshippingServices!=null && pshippingServices.size()>0)
						{
		                    log.info("List of services after filtering PO is "+pshippingServices.size());
							shippingServices=pshippingServices;
						}
					}
				}
			}
			catch(Exception e)
			{
				e.printStackTrace();
				log.warning("Exception in getShippingServiceForPO "+e.getMessage());
			}
			
			return shippingServices;
		}
		
		
		 public int countThePairs(Long customerId,String customerName,String emailId,boolean flag,int count,List lst,Order orderDetForQty,List pairsLst)
		 {
			 try
			 {
				 log.info("****** Inside the method countThePairs() & value of the count: "+count);
				 String appMode=EnvironmentUtil.getEnvironmentValue("AppMode");
				 Date recentlyShippedOrderDate = null;
				 List inputList=new ArrayList();
				 inputList.add(customerId);
				 log.info("customerId: "+customerId);
				 List<Order> orderlst = (List<Order>) RestClientUtil.callService(inputList, "getOrderByCustomerId", "OrderBusinessService");
				 if(orderlst!=null && orderlst.size()>0)
				 {
					 log.info("size of orderlist: "+orderlst.size());
					 for(int i=0;i<orderlst.size();i++)
					 {
						 if(orderlst.get(i).getIsOrderFromAmazon()!= null && orderlst.get(i).getIsOrderFromAmazon()!=true && orderlst.get(i).getOrderLinesShipped()!=null && orderlst.get(i).getOrderLinesShipped().size()>0)
						 {
							 log.info("orderid: "+orderlst.get(i).getKey().getId()+"size of the orderline: "+orderlst.get(i).getOrderLinesPurchased().size());
							 int pairsLstCount = 0;
							 for(int orderLine = 0; orderLine<orderlst.get(i).getOrderLinesPurchased().size();orderLine++)
							 {
								 List orderLineList=new ArrayList();
								 orderLineList.add(orderlst.get(i).getOrderLinesPurchased().get(orderLine).getId());
								 OrderLine orderLineVal = (OrderLine) RestClientUtil.callService(orderLineList, "getOrderLineById", "OrderLineBusinessService");
								 if(orderLineVal!=null && orderLineVal.getStatus().equalsIgnoreCase("SHIPPED") && orderLineVal.getUnitPriceAtPurchase()>=20)
								 {
									 log.info("************* orderLineVal.getUnitPriceAtPurchase() ************"+orderLineVal.getUnitPriceAtPurchase()+" "+(orderLineVal.getUnitPriceAtPurchase()>=20));
									 count+=1;
									 pairsLstCount++;
									 log.info("pairsLstCount: "+pairsLstCount+" ************ count "+count);
								 }
								 log.info("Shipped case, before adding pairsLstCount: "+pairsLstCount);
							 }
							 if(pairsLstCount>0)
							 {
								 lst.add(orderlst.get(i).getKey().getId());
								 pairsLst.add(pairsLstCount);
							 }
						 }
					 }
				 }
				 
				 log.info("************ total number shipped orders map "+lst.size()+" "+pairsLst.size());
				 // For getting the date of the recently shipped order
				 if(lst.size()>1)
				 {
					 Long shippedOrderOrNot = (Long) lst.get(1);
					 List inputLst=new ArrayList();
					 inputLst.add(shippedOrderOrNot);
					 Order orderToGetShippedDate = (Order) RestClientUtil.callService(inputLst, "getOrderById", "OrderBusinessService");
					 if(orderToGetShippedDate!=null)
						 recentlyShippedOrderDate = orderToGetShippedDate.getOrderShippedDate();
					 
				 }
				 
				 
				 if(orderlst!=null && orderlst.size()>0)
				 {
					 for(int k=0;k<orderlst.size();k++)
					 {
						 if(orderlst.get(k).getIsOrderFromAmazon()!=null && !orderlst.get(k).getIsOrderFromAmazon() && orderlst.get(k).getOrderLinesPurchased().size()>0 && orderlst.get(k).getOrderStatus().equalsIgnoreCase("PENDING"))
						 {
							 log.info("Status of the order: "+orderlst.get(k).getOrderStatus());
							 
							 Date recentlyPlacedOrderDate = orderlst.get(k).getOrderPlacedDate();
							 if(recentlyShippedOrderDate != null && recentlyShippedOrderDate.compareTo(recentlyPlacedOrderDate)<0 && orderlst.get(k).getKey().getId()!=orderDetForQty.getKey().getId())
							 {
								 log.info("recentlyShippedOrderDate:  "+recentlyShippedOrderDate+" recentlyPlacedOrderDate: "+recentlyPlacedOrderDate);
								 log.info("*********** Order id "+orderlst.get(k).getKey().getId()+" orderlines in this id "+orderlst.get(k).getOrderLinesPurchased().size());
								 int pairsLstCount = 0;
								 for(int orderLine = 0; orderLine<orderlst.get(k).getOrderLinesPurchased().size();orderLine++)
								 {
									 List orderLineList=new ArrayList();
									 orderLineList.add(orderlst.get(k).getOrderLinesPurchased().get(orderLine).getId());
									 OrderLine orderLineVal = (OrderLine) RestClientUtil.callService(orderLineList, "getOrderLineById", "OrderLineBusinessService");
									 if(orderLineVal!=null && orderLineVal.getStatus().equalsIgnoreCase("PENDING") && orderLineVal.getUnitPriceAtPurchase()>=20)
									 {
										 count+=1;
										 pairsLstCount++;
										 log.info("after shipping, in pending, pairsLstCount: inside if "+pairsLstCount+" ************ count "+count);
									 }
									 else
									 {
										 log.info("after shipping, in pending, pairsLstCount: inside else "+pairsLstCount+" ************ count "+count);
									 }
								 }
								 if(pairsLstCount>0)
								 {
									 lst.add(orderlst.get(k).getKey().getId());
									 pairsLst.add(pairsLstCount);
								 }
							 }
							 else if(recentlyShippedOrderDate == null && orderDetForQty.getOrderStatus().equalsIgnoreCase("PENDING") && orderlst.get(k).getKey().getId()!=orderDetForQty.getKey().getId())
							 {
								 int pairsLstCount = 0;
								 log.info("inside else if");
								 log.info("*********** Order id "+orderlst.get(k).getKey().getId()+" orderlines in this id "+orderlst.get(k).getOrderLinesPurchased().size());
								 for(int orderLine = 0; orderLine<orderlst.get(k).getOrderLinesPurchased().size();orderLine++)
								 {
									 List orderLineList=new ArrayList();
									 orderLineList.add(orderlst.get(k).getOrderLinesPurchased().get(orderLine).getId());
									 OrderLine orderLineVal = (OrderLine) RestClientUtil.callService(orderLineList, "getOrderLineById", "OrderLineBusinessService");
									 //log.info("status of the orderline: "+orderLineVal.getStatus());
									 if(orderLineVal!=null && orderLineVal.getStatus().equalsIgnoreCase("PENDING") && orderLineVal.getUnitPriceAtPurchase()>=20)
									 {
										 count+=1;
										 pairsLstCount++;
										 log.info("not shipping, in pending, pairsLstCount: inside if "+pairsLstCount+" ************ count "+count);
									 }
									 else
									 {
										 log.info("not shipping, in pending, pairsLstCount: inside else "+pairsLstCount+" ************ count "+count);
									 }
								 }
								 if(pairsLstCount>0)
								 {
									 lst.add(orderlst.get(k).getKey().getId());
									 pairsLst.add(pairsLstCount);
								 }
							 }
						 }
					 }
				 }
				 int countBefore = count;
				 log.info("countBefore: "+countBefore+" count: "+count);
				 log.info("Value of count, after getting the immediate pending pair:"+count);
				 
				 int tenthPairInTheMiddle = 0;
				 boolean flagForMidPair = false;
				 List notifyCount = new ArrayList();
				 log.info("orderDetForQty.getOrderLinesPurchased().size(): "+orderDetForQty.getOrderLinesPurchased().size());
//				 for(int mid=0;mid<orderDetForQty.getOrderLinesPurchased().size();mid++)
//				 {
					 List orderLineList=new ArrayList();
					 orderLineList.add(orderDetForQty.getKey().getId());
					 List<OrderLineDTO> orderLineVal = (List<OrderLineDTO>) RestClientUtil.callService(orderLineList, "getOrderLineDetailsForOrderAction", "OrderLineBusinessService");
					 List<OrderLineDTO> orderLineLst = new ArrayList();
					 if(orderLineVal!=null && orderLineVal.size()>0)
					 {
						 log.info("********** this order contains many orderlines ************"+orderLineVal.size());
						
						 for(int i=0;i<orderLineVal.size();i++)
						 {
							 if(orderLineVal.get(i).getUnitPriceAtPurchase()>=20)
							 {
								 orderLineLst.add(orderLineVal.get(i));
							 }
						 }
						 for(int i=0;i<orderLineLst.size();i++)
						 {
							 if(orderLineVal.get(i).getUnitPriceAtPurchase()>=20)
							 {
								 tenthPairInTheMiddle=countBefore+i+1;
								 log.info("************* before if condn, tenthPairInTheMiddle **********"+tenthPairInTheMiddle);
								 if(tenthPairInTheMiddle%10==0 || tenthPairInTheMiddle%10==1 && tenthPairInTheMiddle!=1)
								 {
									 count=tenthPairInTheMiddle;
									 notifyCount.add(tenthPairInTheMiddle);
									 log.info("tenthPairInTheMiddle: "+tenthPairInTheMiddle);
									 
									 flagForMidPair = true;
									 
									// break;
								 }
								log.info("flagForMidPair should be false: "+flagForMidPair);	
							 }
						 }
					 }
//				 }
				 log.info("value of count after tenthPairInTheMiddle: "+count);
				 
				// lst.add(cart.getOrderId());
				 log.info("Before if condn, tenthPairInTheMiddle: "+tenthPairInTheMiddle+" flagForMidPair: "+flagForMidPair+" countBefore: "+countBefore+" count: "+count);
				 if(countBefore==count)
				 {
					 count+=orderLineLst.size();
					 log.info("Its coming inside this condition as flag is true");
				 }
				 log.info("Count after adding the current items: "+count);
				 int tenthPair=count%10;
				 //lst.add(orderId);
				 log.info(" size of the lst: "+lst.size());
				 log.info("flag: "+flag);
				 log.info("Count after the completion of the loop: "+count);
				 log.info("tenthPair: "+tenthPair);
				 if((tenthPair==0 || tenthPair==1) && flag==true && count!=1 && orderLineLst.size()>0)
				 {
					//if(flagForMidPair==true)
						// count=tenthPairInTheMiddle;
					 EmailDTO dto = new EmailDTO();
					 HashMap<String,String> toList=new HashMap<String,String>();
					String emailAddress[]=EnvironmentUtil.getEnvironmentValue(appMode+"_Tenth_Pair_MailingList").split(",");
					String emailAddressNames[]=EnvironmentUtil.getEnvironmentValue(appMode+"_Tenth_Pair_MailingList").split(",");
					for(int i=0;i<emailAddress.length;i++)
					{
						toList.put(emailAddress[i],emailAddressNames[i]);
					}
						dto.setTo(toList);
						 dto.setFrom(VeroniqaConstants.CUSTOMER_SERVICE_MAIL);
						 dto.setFromName("Solestruck");
						 
						 //if(flagForMidPair==true && tenthPairInTheMiddle%10==0)
							 
						 if(count%10==0 && count==11)
						 {
							 log.info("*********** inside if, count ************"+count);
							 dto.setSubject(count+"st Pair Customer Service Notification");
						 }
						 else
						 {
							 log.info("********** inside else, count ***********"+count);
							 dto.setSubject(count+"th Pair Customer Service Notification");
						 }
						 /*String textContent="10th Pair Customer Service Notification";
						 String htmlContent="<h2><b>"+count+"</b>th Pair Customer Service Notification</h2><br><label><b>Customer Name:</b>"+customerName+"</label><br><label><b>Email ID:</b>"+emailId+"</label><br><label><b>Order Id:</b>";
						 
						 dto.setSubject(count+"th Pair Customer Service Notification");
						 
						 for(int i=0;i<lst.size();i++)
						 {
							 log.info("lst.get("+i+"): "+lst.get(i)+" - ("+pairsLst.get(i)+" Pairs)");
							 htmlContent+=lst.get(i)+" - ("+pairsLst.get(i)+" Pairs)";
							 if(i==0)
								 htmlContent+=" <b>(Pair No:"+count+")</b><br><b>Other Shipped Orders:</b><br>";
							 else
								 htmlContent+="<br>";
						 }
						 dto.setTextMessage(textContent);
						 dto.setHtmlMessage(htmlContent);*/
						
						String pServerName = null;
						HashMap<String,Object> velocityDataMap=new HashMap<String,Object>();
						HashMap<String,Object> contentMap=new HashMap<String,Object>();
						String mode=EnvironmentUtil.getEnvironmentValue("AppMode");
						if("LIVE".equals(mode))
							pServerName=VeroniqaConstants.LIVE_FRONTEND_URL_FOR_MAIL;
						else
							pServerName=VeroniqaConstants.TESTING_FRONTEND_URL;
						
						LinkedHashMap orderPairMap = new LinkedHashMap();
						int iteratePair = 0;
						List lstForTemp = new ArrayList();
						log.info("lst size: "+lst.size()+" "+pairsLst.size());
						for(int i=0;i<lst.size();i++)
						{
							orderPairMap.put(lst.get(i),pairsLst.get(iteratePair));
							iteratePair++;
							lstForTemp.add(iteratePair);
						}
						
						velocityDataMap.put("customerName", customerName);
						velocityDataMap.put("emailId", emailId);
						 if(count%10==0 && count==11)
						 {
							 log.info("*********** inside if, count ************"+count);
							 velocityDataMap.put("countHeader", count+"st");
						 }
						 else
						 {
							 log.info("********** inside else, count ***********"+count);
							 velocityDataMap.put("countHeader", count+"th");
						 }
						velocityDataMap.put("count", count);
						velocityDataMap.put("notifyCount", notifyCount);
						velocityDataMap.put("iteratePair",lstForTemp);
						/*velocityDataMap.put("orderId", lst);
						velocityDataMap.put("pairNumber", pairsLst);*/
						velocityDataMap.put("orderPairMap", orderPairMap);
						velocityDataMap.put("lServername", pServerName);
						
						List inputlst = new ArrayList();
						inputlst.add(Long.parseLong(EnvironmentUtil.getEnvironmentValue("TENTH_PAIR_NOTIFICATION")));
						EmailTemplate emailTemp=(EmailTemplate) RestClientUtil.callService(inputlst, "getEmailTemplateById", "EmailTemplateBusinessService");
						String textMsg=emailTemp.getTextMessage();
						String htmlMsg=emailTemp.getHtmlMessage();
						
						String textMailContent=VelocityUtil.getMappedString(velocityDataMap,textMsg);
						String htmlMailContent=VelocityUtil.getMappedString(velocityDataMap,htmlMsg);
						
						dto.setTextMessage(textMailContent);
						dto.setHtmlMessage(htmlMailContent);
						
						log.info("Before sending the mail");
						EmailClientService.sendMailtoMailService(dto);
						log.info("Mail sent successfully");
						
						List params = new ArrayList();
						params.add(notifyCount);
						params.add(orderDetForQty.getKey().getId());
						RestClientUtil.callService(params, "updateAutoNotesForTenthPair", "ShoppingCartBusinessService");
					//}
				}

			 
			 }
			 catch(Exception e)
			 {
				 log.warning("Exception in countThePairs: "+e.getMessage());
				 e.printStackTrace();
			 }
			 return count;
		 }
		
		/*public Boolean checkForPOInAddress(ShippingAddressDTO shippingAddress)
		{
			Boolean returnVal=false;
			try
			{
				boolean address1=isPOBox(shippingAddress.getStreet1());
				boolean address2=isPOBox(shippingAddress.getStreet2());
				boolean address3=isPOBox(shippingAddress.getStreet3());
				if(address1||address2||address3)
					returnVal=true;
			}
			catch(Exception e)
			{
				e.printStackTrace();
				log.warning("Exception in checkForPOInAddress "+e.getMessage());
			}
			return returnVal;
		}
		/*public Boolean checkForPOInAddress(ShippingAddressDTO shippingAddress)
			{
				Boolean poexists=false;
				try
				{
					//String poRegex="pobo?x?[0-9a-z]+";
					String poRegex="([\\w\\s*\\W]*(P(OST)?.?\\s*((O(FF(ICE)?)?)?.?\\s*(B(IN|OX|.?))|B(IN|OX))+))[\\w\\s*\\W]*"; 
					String po="PO";
					String po1="P.O";
					String po2="P.O.";
					String po3="P O";
					
					if(StringUtils.containsIgnoreCase(shippingAddress.getStreet1(), po))
					{
						if(checkForDigit(shippingAddress.getStreet1()))
							poexists=true;
					}
					else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet2(), po))
					{
						if(checkForDigit(shippingAddress.getStreet2()))
							poexists=true;
					}
					else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet3(), po))
					{
						if(checkForDigit(shippingAddress.getStreet3()))
							poexists=true;
					}
					else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet1(), po1))
					{
						if(checkForDigit(shippingAddress.getStreet1()))
							poexists=true;
					}
						
					else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet2(), po1))
					{
						if(checkForDigit(shippingAddress.getStreet2()))
							poexists=true;
					}
					else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet3(), po1))
					{
						if(checkForDigit(shippingAddress.getStreet3()))
							poexists=true;
					}
					else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet1(), po2))
					{
						if(checkForDigit(shippingAddress.getStreet1()))
							poexists=true;
					}
					else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet2(), po2))
					{
						if(checkForDigit(shippingAddress.getStreet2()))
							poexists=true;
					}
					else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet3(), po2))
					{
						if(checkForDigit(shippingAddress.getStreet3()))
							poexists=true;
					}
					else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet1(), po3))
					{
						if(checkForDigit(shippingAddress.getStreet1()))
							poexists=true;
					}
					else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet2(), po3))
					{
						if(checkForDigit(shippingAddress.getStreet1()))
							poexists=true;
					}
					else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet3(), po3))
					{
						if(checkForDigit(shippingAddress.getStreet1()))
							poexists=true;
					}
					//Pattern pattern=Pattern.compile("\b[P|p]?(OST|ost)?\.?\s*[O|o|0]?(ffice|FFICE)?\.?\s*[B|b][O|o|0]?[X|x]?\.?\s+[#]?(\d+)\b",Pattern.);
					if(Pattern.matches(poRegex,shippingAddress.getStreet1().toUpperCase()))
					{
						poexists=true;
					}
					else if(Pattern.matches(poRegex,shippingAddress.getStreet2().toUpperCase()))
					{
						poexists=true;
					}
					else if(Pattern.matches(poRegex,shippingAddress.getStreet3().toUpperCase()))
					{
						poexists=true;
					}
					log.info("poexists is "+poexists);
				}
				catch(Exception e)
				{
					e.printStackTrace();
					log.warning("Exception in the checkForPOInAddress "+e.getMessage());
				}
				return poexists;
			}*/
		/*public Boolean checkForPOInAddress(ShippingAddressDTO shippingAddress)
		{
			Boolean returnVal=false;
			try
			{
				boolean address1=isPOBox(shippingAddress.getStreet1());
				boolean address2=isPOBox(shippingAddress.getStreet2());
				boolean address3=isPOBox(shippingAddress.getStreet3());
				if(address1||address2||address3)
					returnVal=true;
			}
			catch(Exception e)
			{
				e.printStackTrace();
				log.warning("Exception in checkForPOInAddress "+e.getMessage());
			}
			return returnVal;
		}
		/*public Boolean checkForPOInAddress(ShippingAddressDTO shippingAddress)
			{
				Boolean poexists=false;
				try
				{
					//String poRegex="pobo?x?[0-9a-z]+";
					String poRegex="([\\w\\s*\\W]*(P(OST)?.?\\s*((O(FF(ICE)?)?)?.?\\s*(B(IN|OX|.?))|B(IN|OX))+))[\\w\\s*\\W]*"; 
					String po="PO";
					String po1="P.O";
					String po2="P.O.";
					String po3="P O";
					
					if(StringUtils.containsIgnoreCase(shippingAddress.getStreet1(), po))
					{
						if(checkForDigit(shippingAddress.getStreet1()))
							poexists=true;
					}
					else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet2(), po))
					{
						if(checkForDigit(shippingAddress.getStreet2()))
							poexists=true;
					}
					else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet3(), po))
					{
						if(checkForDigit(shippingAddress.getStreet3()))
							poexists=true;
					}
					else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet1(), po1))
					{
						if(checkForDigit(shippingAddress.getStreet1()))
							poexists=true;
					}
						
					else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet2(), po1))
					{
						if(checkForDigit(shippingAddress.getStreet2()))
							poexists=true;
					}
					else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet3(), po1))
					{
						if(checkForDigit(shippingAddress.getStreet3()))
							poexists=true;
					}
					else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet1(), po2))
					{
						if(checkForDigit(shippingAddress.getStreet1()))
							poexists=true;
					}
					else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet2(), po2))
					{
						if(checkForDigit(shippingAddress.getStreet2()))
							poexists=true;
					}
					else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet3(), po2))
					{
						if(checkForDigit(shippingAddress.getStreet3()))
							poexists=true;
					}
					else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet1(), po3))
					{
						if(checkForDigit(shippingAddress.getStreet1()))
							poexists=true;
					}
					else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet2(), po3))
					{
						if(checkForDigit(shippingAddress.getStreet1()))
							poexists=true;
					}
					else if(StringUtils.containsIgnoreCase(shippingAddress.getStreet3(), po3))
					{
						if(checkForDigit(shippingAddress.getStreet1()))
							poexists=true;
					}
					//Pattern pattern=Pattern.compile("\b[P|p]?(OST|ost)?\.?\s*[O|o|0]?(ffice|FFICE)?\.?\s*[B|b][O|o|0]?[X|x]?\.?\s+[#]?(\d+)\b",Pattern.);
					if(Pattern.matches(poRegex,shippingAddress.getStreet1().toUpperCase()))
					{
						poexists=true;
					}
					else if(Pattern.matches(poRegex,shippingAddress.getStreet2().toUpperCase()))
					{
						poexists=true;
					}
					else if(Pattern.matches(poRegex,shippingAddress.getStreet3().toUpperCase()))
					{
						poexists=true;
					}
					log.info("poexists is "+poexists);
				}
				catch(Exception e)
				{
					e.printStackTrace();
					log.warning("Exception in the checkForPOInAddress "+e.getMessage());
				}
				return poexists;
			}*/
		/*public boolean checkForDigit(String address)
		{
			boolean flag = false;
			try
			{
				
			    for(int i=0; i<address.length(); i++) {
			        if(Character.isDigit(address.charAt(i))) {
			            flag = true;
			        }
			    }
			    return flag;
			}
			catch(Exception e)
			{
				e.printStackTrace();
				log.warning("Exception in checkForDigit "+e.getMessage());
			}
			return flag;
		}*/
				
	}
	
	


