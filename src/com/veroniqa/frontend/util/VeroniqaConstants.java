package com.veroniqa.frontend.util;

import java.util.HashMap;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;



public class VeroniqaConstants {
	
	private static final Logger log=Logger.getLogger(VeroniqaConstants.class.getName());
	
	public static final String REST_SERVICE_USERNAME="SsSsKvY";
	public static final String REST_SERVICE_PASSWORD="SsSsKvY";
	public static final String VENDOR_SERVICE="vendorService";
	public static final String BRAND_SERVICE="brandService";
	public static final String ITEM_SERVICE="/itemService";
	public static final String CATEGORY_TYPE_SERVICE="/categoryTypeService";
	public static final String CATEGORY_SERVICE="/categoryService";
	public static final String SHOPPINGCART_SERVICE ="/shoppingCartService";
	//public static final String DB_SERVICE_URL="http://localhost:8888/";

	public static final String DB_SERVICE_URL="https://testing-solestruck-db.appspot.com/";
	//public static final String DB_SERVICE_URL="https://testing-solestruck-db.appspot.com/";
	//public static final String DB_SERVICE_URL="https://live-solestruck-db.appspot.com/";
	
	//public static final String LIVE_FRONTEND_URL="http://localhost:9999/";
	//public static final String LIVE_FRONTEND_URL_FOR_MAIL="http://localhost:9999";
	//public static final String LIVE_FRONTEND_URL="http://veroniqa-payment.appspot.com/";
	//public static final String LIVE_FRONTEND_URL_FOR_MAIL="http://veroniqa-payment.appspot.com";
	public static final String LIVE_FRONTEND_URL="http://testing.solestruck.com/";
	public static final String LIVE_FRONTEND_URL_FOR_MAIL="http://testing.solestruck.com";
	//public static final String LIVE_FRONTEND_URL="http://www.solestruck.com/";
	public static final String TESTING_FRONTEND_URL="http://testing-solestruck.appspot.com/";
	//public static final String LIVE_FRONTEND_URL_FOR_MAIL="http://www.solestruck.com";
	
	//public static final String IMAGE_URL ="http://images2.solestruck.com/";
	public static final String IMAGE_URL ="http://commondatastorage.googleapis.com/images2.solestruck.com/";
	public static final String IMAGE_URL_SECURED ="https://commondatastorage.googleapis.com/images2.solestruck.com/";
	public static final String ATTRIBUTE_SERVICE ="/attributeService";
	public static final String COLOR_SERVICE="/colorService";
	//public static final String LOOKUP_SERVICE = "/lookupService";
	public static final String BRAND_ID_KEY ="brandid";
	public static final String ORDER_ID="orderid";
	public static final String PRODUCT_ID_KEY ="productid";
	public static final String PRODUCT_DETAIL_PAGE_SERVICE="productDetailService";
	public static final String VENDOR_DETAIL_PAGE_SERVICE="vendorDetailService";
	public static final String ORDER_SERVICE="orderService";
	public static final String CUSTOMER_SERVICE="customerService";
	public static final String CUSTOMER_ORDERLINE_SERVICE="customerOrderlineService";	
	public static final String BILLING_ADDRESS_SERVICE="billingAddressService";
	public static final String SHIPPING_ADDRESS_SERVICE="shippingAddressService";
	public static final String ORDER_HISTORY_SERVICE="orderHistoryService";
	public static final String PRODUCT_VARIANT_SERVICE="productVariantService";
	public static final String LISTING_BUSINESS_SERVICE="listingBusinessService";
	public static final String HOME_PAGE_BANNER_SERVICE="/homePageBannerService";
	public static final String LOOK_BOOK_BANNER_SERVICE="/lookBookBannerService";
	public static final String IDPURL_SERVICE ="/idpUrlService";
	public static final String PRODUCT_DATA_SERVICE="/productDataService";
	public static final String PENDING="Pending";
	public static final String CHECKOUT_DETAILS="checkoutDetails";
	public static final String PAYPAL_EXPRESS_PURCHASE="PayPal Express Purchase";

	public static final String ORDER_PENDING_KEY="PENDING";
	public static final String STANDARD_SHIPPING_KEY="Standard Shipping"; 

	
	public static final String PRODUCT_SERVICE="productService";

	public static final String PAYMENT_GATEWAY_SERVICE_URL="http://10.4.2.112:8080//PaymentProcessor/processCreditCard";
	

	public static final String EMAIL_TEMPLATE_SERVICE="emailTemplateService";
	public static final String INVOICE_TEMPLATE_SERVICE="invoiceTemplateService";
	public static final String CUSTOMER_SERVICE_PAGE_SERVICE = "customerServicePagesService";


	public static final String COLOR_BUSINESS_SERVICE="colorBusinessService";
	public static final String CUSTOMER_SERVICE_MAIL="Developer@solestruck.com";
	public static final String BACKUP_MAIL="Sole.Email@solestruck.com";
	public static final String IDP_MAIL_SERVICE	="IDPMailService";
	public static final String PERFECT_FIT_MAIL_CRON_SERVICE = "/perfectFitMailCronService";
	public static final String PAYPAL_TRANSACTION_SERVICE_PATH="paypalTransactionService";
	public static final String MAIL_SUBSCRIPTION_SERVICE ="emailSubscriptionService";
	public static final String WISHLIST_SERVICE ="wishListService";
	//public static final String CSS_URL="http://localhost:9999";
	//public static final String JS_URL="http://localhost:9999";
	//public static final String CSS_URL="http://images2.solestruck.com.s3.amazonaws.com/gae/staging/newdesign/";
	//public static final String JS_URL="http://images2.solestruck.com.s3.amazonaws.com/gae/staging/newdesign/";
	public static final String CSS_URL="http://images2.solestruck.com.s3.amazonaws.com/gae/live/";
	public static final String JS_URL="http://images2.solestruck.com.s3.amazonaws.com/gae/live/";
	public static final String FACEBOOK="Facebook";
	public static final String FBLOGIN="FBUser";
	public static final String LOGIN="login";
	public static final String CUSTOMERID="customerId";
	public static final String INSTAGRAM="Instagram";
	public static final String INSTAGRAMLOGIN="InstagramUser";
	
	public static final String RESPONSEFEED="responseFeed";
	public static final String RESPONSETWITTER="responseTwitter";
	public static final String INSTAFEED="instaFeed";
	public static final String FACEBOOKFEED="facebookFeed";
	public static final String FACEBOOKFEED_FORTYEIGHT="facebookFeedFortyeight";
	public static final String TUMBLRFEED="tumblrFeed";
	
	public static final HashMap<String,String>	instance	= new HashMap<String,String>();
	
	public static String JS_URL()
	{
		//String str="http://images2.solestruck.com.s3.amazonaws.com/gae/js/";
		//String str="http://images2.solestruck.com.s3.amazonaws.com/gae/staging/newdesign/js/";
		String str="http://images2.solestruck.com.s3.amazonaws.com/gae/live/js/";
		try {
			if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("DEV"))
			{
				//str= "http://localhost:9999/js/";
				str=EnvironmentUtil.getEnvironmentValue(EnvironmentUtil.getEnvironmentValue("AppMode")+"_STATIC")+"/js/";
			}
			else if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("STAGING"))
			{
				//str= "http://localhost:9999/js/";
				//str= "http://images2.solestruck.com.s3.amazonaws.com/gae/js/";
				str=EnvironmentUtil.getEnvironmentValue(EnvironmentUtil.getEnvironmentValue("AppMode")+"_STATIC")+"/js/";
			}
			else 
			{
				str=EnvironmentUtil.getEnvironmentValue(EnvironmentUtil.getEnvironmentValue("AppMode")+"_STATIC")+"/js/";
				//str= "http://images2.solestruck.com.s3.amazonaws.com/gae/live/js/";
				//str="http://commondatastorage.googleapis.com/images2.solestruck.com/live_gae_js/";
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			log.warning("Exception in JS_URL");
			e.printStackTrace();
		}
		return str;
	}
	
	public static String JS_SECURED_URL()
	{
		String str="https://images2.solestruck.com/gae/live/js/";
		try {
			if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("DEV"))
			{
				//str= "http://localhost:9999/js/";
				str= "https://commondatastorage.googleapis.com/images2.solestruck.com/gae/CheckoutTesting/js/";
			}
			else if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("STAGING"))
			{
				//str= "http://localhost:9999/js/";
				//str= "https://s3.amazonaws.com/images2.solestruck.com/gae/staging/newdesign/js/";
				//str= "https://s3.amazonaws.com/images2.solestruck.com/gae/testing/js/";
				//str= "https://s3.amazonaws.com/images2.solestruck.com/gae/FBTesting/js/";
			//	str= "https://commondatastorage.googleapis.com/images2.solestruck.com/gae/FBTesting/js/";
				str= "https://commondatastorage.googleapis.com/images2.solestruck.com/gae/CheckoutTesting/js/";
			}
			else
			{
				//str= "https://s3.amazonaws.com/images2.solestruck.com/gae/betacheckout/js/";
				//str= "https://s3.amazonaws.com/images2.solestruck.com/gae/live/js/";
				//str= "https://s3.amazonaws.com/images2.solestruck.com/gae/FBLive/js/";
				str= "https://commondatastorage.googleapis.com/images2.solestruck.com/gae/CheckoutLive/js/";

			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			log.warning("Exception in JS_SECURED_URL");
			e.printStackTrace();
		}
		return str;
	}
	
	public static String CSS_URL()
	{
		//String str="http://images2.solestruck.com.s3.amazonaws.com/gae/css/";
		String str="http://images2.solestruck.com.s3.amazonaws.com/gae/live/css/";
		try {
			if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("DEV"))
			{
				//str= "http://localhost:9999/css/";
				str=EnvironmentUtil.getEnvironmentValue(EnvironmentUtil.getEnvironmentValue("AppMode")+"_STATIC")+"/css/";
			}
			else if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("STAGING"))
			{
				//str= "http://localhost:9999/css/";
				//str= "http://images2.solestruck.com.s3.amazonaws.com/gae/css/";
				//str="http://images2.solestruck.com.s3.amazonaws.com/gae/staging/newdesign/css/";
				str=EnvironmentUtil.getEnvironmentValue(EnvironmentUtil.getEnvironmentValue("AppMode")+"_STATIC")+"/css/";
			}
			else
			{
				str=EnvironmentUtil.getEnvironmentValue(EnvironmentUtil.getEnvironmentValue("AppMode")+"_STATIC")+"/css/";
				//str= "http://images2.solestruck.com.s3.amazonaws.com/gae/live/css/";
				//str="http://commondatastorage.googleapis.com/images2.solestruck.com/live_gae_css/";
			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			log.warning("Exception in JS_URL");
			e.printStackTrace();
		}
		return str;
	}
	
	public static String CSS_SECURED_URL()
	{
		String str="https://images2.solestruck.com/gae/live/css/";
		try {
			if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("DEV"))
			{
				//str= "http://localhost:9999/css/";
				str= "https://commondatastorage.googleapis.com/images2.solestruck.com/gae/CheckoutTesting/css/";
			}
			else if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("STAGING"))
			{
				//str= "http://localhost:9999/css/";
				//str= "https://s3.amazonaws.com/images2.solestruck.com/gae/staging/newdesign/css/";
				//str= "https://s3.amazonaws.com/images2.solestruck.com/gae/testing/css/";
				//str= "https://s3.amazonaws.com/images2.solestruck.com/gae/FBTesting/css/";
				//str= "https://commondatastorage.googleapis.com/images2.solestruck.com/gae/FBTesting/css/";
				str= "https://commondatastorage.googleapis.com/images2.solestruck.com/gae/CheckoutTesting/css/";
			}
			else
			{

				//str= "https://s3.amazonaws.com/images2.solestruck.com/gae/betacheckout/css/";
				//str= "https://s3.amazonaws.com/images2.solestruck.com/gae/live/css/";
				//str= "https://s3.amazonaws.com/images2.solestruck.com/gae/FBLive/css/";
				str= "https://commondatastorage.googleapis.com/images2.solestruck.com/gae/CheckoutLive/css/";

			}
		} catch (Exception e) {
			// TODO Auto-generated catch block
			log.warning("Exception in JS_SECURED_URL");
			e.printStackTrace();
		}
		return str;
	}
	public static String getAnalyticsID()
	  {
		  String analyticsID=null;
		   try
		  {
			  String lMode = EnvironmentUtil.getEnvironmentValue("AppMode");
			  //System.out.println(lMode); 
			  if(lMode.equals("DEV")) {
				  analyticsID = "UA-25993189-1";
				  
		    	} 		    		
		    	 else if(lMode.equals("LIVE")) {
		    		//analyticsID = "UA-29589340-1";
		    		 //analyticsID = "UA-25993189-1";
		    		 //analyticsID = "UA-213506-7"; This live-solestruck.appspot.com Google Analytics ID
		    		 analyticsID = "UA-213506-1"; 	// This is www.solestruck.com Google Analytics ID on 20-07-2012
		    		
		    		
		    	}else if(lMode.equals("STAGING")) {
		    		//analyticsID = "UA-25993189-1"; 
		    		//analyticsID = "UA-213506-8"; This testing-solestruck.appspot.com Google Analytics ID (WithOut FB Login) 
		    		analyticsID = "UA-213506-9"; // This testing-solestruck.a-cti.com Google Analytics ID (With FB Login)
		    		
		    	}
		  }
		  catch(BusinessException e)
		  {
			  analyticsID = "UA-213506-7";
			  log.warning("App mode not found for getting analytics id");
		  }
		  catch(Exception ex)
		  {
			  log.warning("Exception Found in getting the Analytics ID");
		  }
		  return analyticsID;
	  }
	
	public static String getNewCheckoutAnalyticsID()
	  {
		  String analyticsID=null;
		   try
		  {
			  String lMode = EnvironmentUtil.getEnvironmentValue("AppMode");
			  //System.out.println(lMode); 	    		
		    	 if(lMode.equals("LIVE")) {
		    		//analyticsID = "UA-29589340-1";
		    		 //analyticsID = "UA-25993189-1";
		    		 //analyticsID = "UA-213506-7"; This live-solestruck.appspot.com Google Analytics ID
		    		 analyticsID = "UA-213506-7"; 	// This is www.solestruck.com Google Analytics ID on 20-07-2012
		    		
		    		
		    	}else if(lMode.equals("STAGING")) {
		    		//analyticsID = "UA-25993189-1"; 
		    		//analyticsID = "UA-213506-8"; This testing-solestruck.appspot.com Google Analytics ID (WithOut FB Login) 
		    		analyticsID = "UA-213506-8"; // This testing-solestruck.a-cti.com Google Analytics ID (With FB Login)
		    		
		    	}
		  }
		  catch(BusinessException e)
		  {
			  analyticsID = "UA-213506-8";
			  log.warning("App mode not found for getting analytics id");
		  }
		  catch(Exception ex)
		  {
			  log.warning("Exception Found in getting the Analytics ID");
		  }
		  return analyticsID;
	  }
	
	public static String  getServerName(HttpServletRequest req)
	{
		log.info(" inside getServerName method ");
		String serverName="";
		try
		{
			if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("LIVE") ||EnvironmentUtil.getEnvironmentValue("AppMode").equals("STAGING"))
			{
				serverName=req.getScheme()+"://"+req.getServerName();
			}
			else 
			{
				serverName=req.getScheme()+"://"+req.getServerName()+":"+req.getServerPort();
				
			}
			log.info(" serverName : "+serverName);
			return serverName;
		}
		catch (Exception e)
		{
			e.printStackTrace();
			return null;
		}
		
	}
	
	public static String getServerNameCustomizedForAnalytics(HttpServletRequest req)
	{
		log.info(" inside getServerName method ");
		String serverName="";
		try
		{
			if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("LIVE"))
			{
				serverName="www.solestruck.com";
			}
			else if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("STAGING"))
			{
				serverName="testing-solestruck.a-cti.com";
			}
			else
			{
				serverName="localhost";
			}
			log.info("Server Name in getServerNameCustomizedForAnalytics is "+serverName);
			return serverName;
		}
		catch (Exception e)
		{
			e.printStackTrace();
			return null;
		}
	}
	
	public static String getGoogleTrustedStoreID()
    {
        String analyticsID=null;
         try
        {
            String lMode = EnvironmentUtil.getEnvironmentValue("AppMode");
            //System.out.println(lMode); 
            if(lMode.equals("DEV")) {
                analyticsID = "ABCD12345";
                
              }                     
               else if(lMode.equals("LIVE")) {

                   analyticsID = "3254223";     //This live-solestruck.appspot.com Google TURSTED Store ID
                  
                  
              }else if(lMode.equals("STAGING")) {
                   
                  analyticsID = "ABCD12345"; // This testing-solestruck.a-cti.com Google Analytics ID (With FB Login)
                  
              }
        }
        catch(BusinessException e)
        {
            analyticsID = "ABCD12345";
            log.warning("App mode not found for getting analytics id");
        }
        catch(Exception ex)
        {
            log.warning("Exception Found in getting the Analytics ID");
        }
        return analyticsID;
    }
	
	public static final int appVersion=2;

}
