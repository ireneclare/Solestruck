package com.veroniqa.frontend.service;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.ProtocolException;
import java.net.URL;
import java.util.ArrayList;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;

import com.veroniqa.dto.ColorSizeDTO;
import com.veroniqa.dto.CountryDTO;
import com.veroniqa.dto.FrontEndDTO;
import com.veroniqa.dto.KoozieDTO;
import com.veroniqa.dto.ProductDetailDTO;
import com.veroniqa.dto.ZineDTO;
import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.MemcachedConstants;
import com.veroniqa.frontend.util.MemcachedUtil;
import com.veroniqa.frontend.util.RestClientUtil;
import com.veroniqa.frontend.util.VeroniqaConstants;
import com.veroniqa.frontend.util.VeroniqaUtil;
import com.veroniqa.jdo.Attribute;
import com.veroniqa.jdo.Customer;
import com.veroniqa.jdo.IDPUrl;
import com.veroniqa.jdo.ProductData;

public class CheckoutService {
	private static Logger log=Logger.getLogger(CheckoutService.class.getSimpleName());
	
	public Boolean isReturningCustomer(String emailId,String password) throws Exception
	{
		List<Object> inputList = new ArrayList<Object>();
		inputList.add(emailId);
		inputList.add(password);
		return (Boolean) RestClientUtil.callService(inputList, "isReturningCustomerByEmailId", "CustomerBusinessService");
		
	}
	// This is for Implemented CJ Tracking Pixel Code ( SSGA-297 ) by YES
	public Boolean isReturningCustomerbyEmailIdOnly(String emailId) throws Exception
	{
		
		List<Object> inputList = new ArrayList<Object>();
		inputList.add(emailId);
		return (Boolean) RestClientUtil.callService(inputList, "isReturningCustomerByEmailIdOnly", "CustomerBusinessService");
	}
	
	public Customer getCustomer(String emailId,String password) throws Exception
	{
		List<Object> inputList = new ArrayList<Object>();
		inputList.add(emailId);
		inputList.add(password);
		return (Customer) RestClientUtil.callService(inputList, "getCustomerByEmailId", "CustomerBusinessService");
	}
	
	
	public Customer getCustomerByEmail(String emailId) throws Exception
	{
		List<Object> inputList = new ArrayList<Object>();
		inputList.add(emailId);
		return (Customer) RestClientUtil.callService(inputList, "getCustomerByOnlyEmailId", "CustomerBusinessService");
	}
	
	
	
	
	public List getShippingMethods(String countryCode)
	{
		return null;
	}
	
	
	
	public Integer doAuthorization()
	{
		return null;
	}
	
	public static void dopostingTimeLine(HttpServletRequest req,String fname,String service)
	{
		try 
		{
			String accessToken = (String) req.getSession().getAttribute("accessToken");
			log.info("the accesstoken is :: " +accessToken);
			if(accessToken != null)
			{
				String message =null;
				Double salePercentage = VeroniqaUtil.getDiscountPercentageForFB(); 
				String salePercentageStr=salePercentage.toString();
				salePercentageStr=salePercentageStr.substring(0, salePercentageStr.indexOf('.'));
				if(service!=null && service.equalsIgnoreCase("checkout"))
				{
					message = fname+"%20just%20saved%20an%20Extra%20"+salePercentageStr+"%25%20at%20Solestruck's%20exclusive%20FB%20100k%20Likes%20Sale.";
				}
				else
				{
					message = fname+"%20just%20entered%20Solestruck's%20exclusive%20FB%20100k%20Likes%20Sale.%20Extra%20"+salePercentageStr+"%25%20OFF%20all%20sale%20shoes%20today!";
				}
				
				String redirectUrl = "https://graph.facebook.com/me/feed?link=http://testing-solestruck.a-cti.com/sale-shoes/&caption=CLICK%20ABOVE%20TO%20JOIN%20IN!&picture=http://commondatastorage.googleapis.com/images2.solestruck.com/gae/live/images/100kSale.jpg&message="+message+"&description=Fast%20and%20Free%20Shipping%20Worldwide%20//%20We%20sell%20shoes%20LIKE%20no%20other&access_token="+accessToken+"&method=POST";
				if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("LIVE"))
				{
					redirectUrl = "https://graph.facebook.com/me/feed?link=http://www.solestruck.com/sale-shoes/&caption=CLICK%20ABOVE%20TO%20JOIN%20IN!&picture=http://commondatastorage.googleapis.com/images2.solestruck.com/gae/live/images/100kSale.jpg&message="+message+"&description=Fast%20and%20Free%20Shipping%20Worldwide%20//%20We%20sell%20shoes%20LIKE%20no%20other&access_token="+accessToken+"&method=POST";
				}
				else if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("STAGING"))
				{
					redirectUrl = "https://graph.facebook.com/me/feed?link=http://testing-solestruck.a-cti.com/sale-shoes/&caption=CLICK%20ABOVE%20TO%20JOIN%20IN!&picture=http://commondatastorage.googleapis.com/images2.solestruck.com/gae/live/images/100kSale.jpg&message="+message+"&description=Fast%20and%20Free%20Shipping%20Worldwide%20//%20We%20sell%20shoes%20LIKE%20no%20other&access_token="+accessToken+"&method=POST";
				}
				
				URL url = new URL(redirectUrl);
				String inputLine,inputid="";
				HttpURLConnection conn = (HttpURLConnection) url.openConnection();
				conn.setRequestMethod("POST");
				conn.connect();
				BufferedReader reader = new BufferedReader(new InputStreamReader(url.openStream()));	        
				while ((inputLine = reader.readLine()) != null)
				{  
					inputid+=inputLine;
					log.info("inputLine ::"+inputLine);
				}
			}
		}
		catch (MalformedURLException e)
		{
			log.info("Exception in MalformedURLException redirect url"+e);
			e.printStackTrace();
		} catch (ProtocolException e)
		{
			log.info("Exception in ProtocolException "+e);
			e.printStackTrace();
		} catch (IOException e)
		{
			log.info("Exception in IOException  "+e);
			e.printStackTrace();
		} catch (Exception e)
		{
			log.info("Exception in Exception "+e);
			e.printStackTrace();
		}
	}
	/*public static String getRedirectURL(String protocol)
	{
		
		 String redirectURL ="";
         try
         {
        	 
        	 
        	 if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("STAGING"))
        	 {
        		 Client client = new Client("360291777383552", "3352c5aa3b2e0b7ac1cd7423eeebd77e");
        		 FacebookFactory facebookFactory = new FacebookFactory(client,HttpClientType.URL_FETCH_SERVICE); 

        		 if(protocol!=null && !protocol.equals(""))
        		 {
        			 log.info("--------->>>>>>>>>>>>>>>>>protocol is ------>>>>>>>>>>>>>>>>>> : "+protocol);
        			 if(protocol.equals("http"))
        			 {
        				 //log.info("Inside getRedirectURL : ------>>>>>>>>>>>>> And coming inside the IF of the condition ---->>>>>>>>>>>>>>>>>");
        				 redirectURL = facebookFactory.getRedirectURL("http://testing.solestruck.com/renderPage.htm?page=redirect", Display.POPUP, Permission.EMAIL, Permission.OFFLINE_ACCESS,Permission.PUBLISH_STREAM);

        			 }
        			 else
        			 {
        				 //log.info("Inside getRedirectURL : ------>>>>>>>>>>>>> And coming inside the ELSE of the condition ---->>>>>>>>>>>>>>>>>");
        				 redirectURL = facebookFactory.getRedirectURL("https://testing.solestruck.com/renderPage.htm?page=redirect", Display.POPUP, Permission.EMAIL, Permission.OFFLINE_ACCESS,Permission.PUBLISH_STREAM);
        			 }
        		 }
        	 }
			 else if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("LIVE"))
			 {
			   Client client = new Client("421260994576981", "e4ed5353c4e302f41d3b2d7516a17f4d");                	
			   FacebookFactory facebookFactory = new FacebookFactory(client,HttpClientType.URL_FETCH_SERVICE); 
			   
			   if(protocol!=null && !protocol.equals(""))
				  {
					log.info("--------->>>>>>>>>>>>>>>>>protocol is ------>>>>>>>>>>>>>>>>>> : "+protocol);
					if(protocol.equals("http"))
					{
						//log.info("Inside getRedirectURL : ------>>>>>>>>>>>>> And coming inside the IF of the condition ---->>>>>>>>>>>>>>>>>");
						redirectURL = facebookFactory.getRedirectURL("http://www.solestruck.com/renderPage.htm?page=redirect", Display.POPUP, Permission.EMAIL, Permission.OFFLINE_ACCESS,Permission.PUBLISH_STREAM);
						
					}
					else
					{
						//log.info("Inside getRedirectURL : ------>>>>>>>>>>>>> And coming inside the ELSE of the condition ---->>>>>>>>>>>>>>>>>");
						redirectURL = facebookFactory.getRedirectURL("https://www.solestruck.com/renderPage.htm?page=redirect", Display.POPUP, Permission.EMAIL, Permission.OFFLINE_ACCESS,Permission.PUBLISH_STREAM);
					}
				  }
			   
			 }
			 else if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("DEV"))
			 {
			 	Client client = new Client("102732789875589", "629718271b12cb4a039e7b99f70985a6");                	
				FacebookFactory facebookFactory = new FacebookFactory(client,HttpClientType.URL_FETCH_SERVICE); 
				redirectURL = facebookFactory.getRedirectURL("http://localhost:9999/renderPage.htm?page=redirect",Display.POPUP,Permission.EMAIL,Permission.OFFLINE_ACCESS,Permission.PUBLISH_STREAM);					
			 }
			
		}
        catch (Exception e)
		{
			e.printStackTrace();
			
		}
         return redirectURL;
	}*/
	
	public Map<String,CountryDTO> getListOfCountriesForCheckOut()
	{
		Map<String,CountryDTO> countryMap=new LinkedHashMap<String,CountryDTO>();
		try {
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
		}
		catch (NumberFormatException e)
		{
			e.printStackTrace();
			
		} catch (Exception e)
		{
			e.printStackTrace();
		}
		return countryMap;
	}
	public ZineDTO getSolestruckMagazineDetails()
	{
		log.info(" inside getSolestruckMagazineDetails method ");
		ZineDTO zineDTO = new ZineDTO();
		try {
			
			Long productId=null;
			Long colorId=null;
			String vendorName=null;
			IDPUrl jdo=null;
			jdo=(IDPUrl)MemcachedUtil.get("solestruck-magazine-first-time-volume1-issue1", MemcachedConstants.IDP_NAME_SPACE);
			if(jdo==null)
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList.add("solestruck-magazine-first-time-volume1-issue1");
				jdo=(IDPUrl) RestClientUtil.callService(inputList, "getIdpJdoByUrl", "IDPUrlBusinessService");
				MemcachedUtil.set("solestruck-magazine-first-time-volume1-issue1",jdo, MemcachedConstants.IDP_NAME_SPACE);
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
			Long variantId=3746660l;
			for(ColorSizeDTO cs:productdtldto.getColourDto())
			{
				if(cs.getSizeDetails()!=null && cs.getSizeDetails().size()>0)
					variantId=cs.getSizeDetails().get(0).getProVarID();
			}
			
			List<Object> inputList = new ArrayList<Object>();
			inputList.add(colorId);
			pd=(ProductData) RestClientUtil.callService(inputList, "getProductDataByColorid", "ProductDataBusinessService");
			
			zineDTO.setVendorName(vendorName.replaceAll("-"," "));
			zineDTO.setSale(pd.getIsSale());
			zineDTO.setPreorder(pd.getIsPreorder());
			zineDTO.setColorId(colorId);
			zineDTO.setProductId(productId);
			zineDTO.setProductName(productdtldto.getProductName());
			zineDTO.setVariantId(3746660l);
			zineDTO.setInventoryCheck(pd.getInventoryCheck());
		}
		catch (Exception e)
		{
			e.printStackTrace();
			log.warning("Exception in getSolestruckMagazineDetails method :: "+e.getMessage());
		}
	return zineDTO;
}
	
	public KoozieDTO getCheckoutSplItemKoozie()
	{
		log.info(" inside getCheckoutSplItems method ");
		KoozieDTO koozieDTO = new KoozieDTO();
		try {
			
			Long productId=null;
			Long colorId=null;
			String vendorName=null;
			IDPUrl jdo=null;
			jdo=(IDPUrl)MemcachedUtil.get("otter-wax-leather-care-kit-brown", MemcachedConstants.IDP_NAME_SPACE);
			if(jdo==null)
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList.add("otter-wax-leather-care-kit-brown");
				jdo=(IDPUrl) RestClientUtil.callService(inputList, "getIdpJdoByUrl", "IDPUrlBusinessService");
				MemcachedUtil.set("otter-wax-leather-care-kit-brown",jdo, MemcachedConstants.IDP_NAME_SPACE);
				log.info("url is from DB");
				log.info("productid is :: "+jdo.getProductId()+" color id is :: "+jdo.getColorId()+" vendor name is :: "+jdo.getVendorName());
				
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
				if(cs.getSizeDetails()!=null && cs.getSizeDetails().size()>0)
					variantId=cs.getSizeDetails().get(0).getProVarID();
				log.info("variantId is :: "+variantId);
			}
			
			List<Object> inputList = new ArrayList<Object>();
			inputList.add(colorId);
			pd=(ProductData) RestClientUtil.callService(inputList, "getProductDataByColorid", "ProductDataBusinessService");
			log.info("Is sale :: "+pd.getIsSale()+ " Is pre order :: "+pd.getIsPreorder()+ " product name is :: "+productdtldto.getProductName()+ " get inventory check value is :: "+pd.getInventoryCheck());
			
			koozieDTO.setVendorName(vendorName);
			koozieDTO.setSale(pd.getIsSale());
			koozieDTO.setPreorder(pd.getIsPreorder());
			koozieDTO.setColorId(colorId);
			koozieDTO.setProductId(productId);
			koozieDTO.setProductName(productdtldto.getProductName());
			koozieDTO.setVariantId(variantId);
			koozieDTO.setInventoryCheck(pd.getInventoryCheck());
			koozieDTO.setRetailPrice(pd.getFinalPrice());
		}
		catch (Exception e)
		{
			e.printStackTrace();
			log.warning("Exception in getCheckoutSplItemKoozie method :: "+e.getMessage());
		}
	return koozieDTO;
	}	

/*	public KoozieDTO getCheckoutSplItemKoozie()
	{
		log.info(" inside getCheckoutSplItems method ");
		KoozieDTO koozieDTO = new KoozieDTO();
		try {
			
			Long productId=null;
			Long colorId=null;
			String vendorName=null;
			IDPUrl jdo=null;
			jdo=(IDPUrl)MemcachedUtil.get("solestruck-can-koozie-surprise", MemcachedConstants.IDP_NAME_SPACE);
			if(jdo==null)
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList.add("solestruck-can-koozie-surprise");
				jdo=(IDPUrl) RestClientUtil.callService(inputList, "getIdpJdoByUrl", "IDPUrlBusinessService");
				MemcachedUtil.set("solestruck-can-koozie-surprise",jdo, MemcachedConstants.IDP_NAME_SPACE);
				log.info("url is from DB");
				log.info("productid is :: "+jdo.getProductId()+" color id is :: "+jdo.getColorId()+" vendor name is :: "+jdo.getVendorName());
				
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
				if(cs.getSizeDetails()!=null && cs.getSizeDetails().size()>0)
					variantId=cs.getSizeDetails().get(0).getProVarID();
				log.info("variantId is :: "+variantId);
			}
			
			List<Object> inputList = new ArrayList<Object>();
			inputList.add(colorId);
			pd=(ProductData) RestClientUtil.callService(inputList, "getProductDataByColorid", "ProductDataBusinessService");
			log.info("Is sale :: "+pd.getIsSale()+ " Is pre order :: "+pd.getIsPreorder()+ " product name is :: "+productdtldto.getProductName()+ " get inventory check value is :: "+pd.getInventoryCheck());
			
			koozieDTO.setVendorName(vendorName);
			koozieDTO.setSale(pd.getIsSale());
			koozieDTO.setPreorder(pd.getIsPreorder());
			koozieDTO.setColorId(colorId);
			koozieDTO.setProductId(productId);
			koozieDTO.setProductName(productdtldto.getProductName());
			koozieDTO.setVariantId(variantId);
			koozieDTO.setInventoryCheck(pd.getInventoryCheck());
		}
		catch (Exception e)
		{
			e.printStackTrace();
			log.warning("Exception in getCheckoutSplItemKoozie method :: "+e.getMessage());
		}
	return koozieDTO;
	} */	
}
