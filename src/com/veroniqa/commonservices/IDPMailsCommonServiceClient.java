package com.veroniqa.commonservices;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.logging.Logger;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.veroniqa.dto.AbandonedShoeMailDTO;
import com.veroniqa.dto.AbandonedWishListDTO;
import com.veroniqa.dto.LineItemDTO;
import com.veroniqa.dto.ProductDetailDTO;
import com.veroniqa.dto.WriteAReviewMailDTO;
import com.veroniqa.email.dto.EmailDTO;
import com.veroniqa.email.emailclientservice.EmailClientService;
import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.RestClientUtil;
import com.veroniqa.frontend.util.VelocityUtil;
import com.veroniqa.frontend.util.VeroniqaConstants;
import com.veroniqa.jdo.Color;
import com.veroniqa.jdo.EmailTemplate;
import com.veroniqa.jdo.ProductVariant;

public class IDPMailsCommonServiceClient {

	private static final Logger log=Logger.getLogger(IDPMailsCommonServiceClient.class.getName());
	

	public boolean sendPerfectFitMail(String vendorName, String productName, Double retailprice, Double size, String custEmailID, Long productID, Long colorID,EmailTemplate emailTemp)
	{
		boolean flag=true;
		log.info("inside sendPerfectFitMail ");
		try
		{
			//String lImageServerName="http://images2.solestruck.com";
			String lImageServerName="http://commondatastorage.googleapis.com/images2.solestruck.com";
			//String lServerName="http://staging.solestruck.com";
			String lServerName=VeroniqaConstants.LIVE_FRONTEND_URL_FOR_MAIL;
			String lShoeImageURL="";
			String lVendorURL="";
			String lVendorURL1="";
			String lProductURL="";
			String lColorURL="";
			String productName_titlecase = "";
			String [] prodName = productName.split(" ");
			for(int x=0;x<prodName.length;x++){
				for (int i = 0; i < prodName[x].length(); i++)
				{
					String next = prodName[x].substring(i, i+1);
					if (i == 0){
						productName_titlecase += next.toUpperCase();
					} 	
					else {
						productName_titlecase += next.toLowerCase();
					}
				}
				productName_titlecase+="-";
			}
			HashMap velocityReferences = new HashMap();
			Boolean retval = false;
			List<Object> inputList = new ArrayList<Object>();
			inputList.add(productID);
			ProductDetailDTO productdtldto=(ProductDetailDTO) RestClientUtil.callService(inputList, "getItemDetails", "ProductDetailBusinessService");
			List<Object> inputList1 = new ArrayList<Object>();
			inputList1.add(colorID);
			Color color =(Color) RestClientUtil.callService(inputList1, "getColorById", "ColorBusinessService");
			String colorName = color.getCustomColor();
			velocityReferences.put("lServername", lServerName);
        	velocityReferences.put("lImageServername", lImageServerName);
        	velocityReferences.put("vendorName", vendorName);
        	velocityReferences.put("productName", productName);
        	velocityReferences.put("size", size);
        	velocityReferences.put("retailprice", retailprice);
        	velocityReferences.put("shoedescription",productdtldto.getProductDescription());
        	velocityReferences.put("custEmailID", custEmailID);
        	velocityReferences.put("productID", productID);
        	velocityReferences.put("colorID", colorID);
        	velocityReferences.put("colorname", color.getCustomColor());
			lVendorURL = vendorName.replaceAll(" ", "-").toLowerCase();
			lVendorURL1 = vendorName.replaceAll(" ", "-");
			lProductURL = productName_titlecase.replaceAll(" ","-");
			lColorURL = colorName.replaceAll(" ","-");
			lShoeImageURL= lImageServerName + "/" + lVendorURL + "-shoes/" + lVendorURL1 + "-shoes-" + lProductURL +"(" + lColorURL + ")-010604.jpg"; 
			String ColorURL=colorName.replaceAll(" ","-").toLowerCase();
			String VendorURL=vendorName.replaceAll(" ", "-").toLowerCase();
			String ProductURL=productName.replaceAll(" ", "-").toLowerCase();
			String idpURL=VendorURL+"-"+ProductURL+"-"+ColorURL+"/index.html";
			log.info(" lShoeImageURL  = " +  lShoeImageURL );
			velocityReferences.put("lShoeImageURL", lShoeImageURL);
			velocityReferences.put("IDPUrl", idpURL);
			velocityReferences.put("from", "GAE");
        	EmailDTO dto=new EmailDTO();
        	HashMap<String,String> orgToList=new HashMap<String, String>();
        	orgToList.put(custEmailID , custEmailID);
        	dto.setTo(orgToList);
        	dto.setFrom(VeroniqaConstants.CUSTOMER_SERVICE_MAIL);
        	dto.setFromName("Solestruck");
        	dto.setSubject(" Perfect Match");        	
        	String textMssg=emailTemp.getTextMessage();
        	String htmlMsg=emailTemp.getHtmlMessage();		
        	String textMailContent=VelocityUtil.getMappedString(velocityReferences,textMssg);
        	String htmlMailContent=VelocityUtil.getMappedString(velocityReferences,htmlMsg);
        	dto.setTextMessage(textMailContent);
        	dto.setHtmlMessage(htmlMailContent);	
		
		
        	log.info("Before calling sendMailToMailService: 3 ");
        	EmailClientService.sendMailtoMailService(dto);
        	log.info("After calling sendMailToMailService: 3");
	
		
	}
	
		catch(Exception e)
		{
			log.warning("sendPerfectFitMail :"+e);
			flag=false;
		}
	
		return flag;
	}
	
	public Long getproductvariantId(Long productID, Long colorID, Double size)
	{
		log.info("inside getproductvariantId");
		Long productVariantId=0L;
		ProductVariant retVal=new ProductVariant();
		log.info("productid=========="+productID+"colorid============="+colorID+"size=========="+size);
		try
		{
			List<Object> inputList = new ArrayList<Object>();
			inputList.add(productID);
			inputList.add(colorID);
			inputList.add(size);
			retVal=(ProductVariant) RestClientUtil.callService(inputList, "getProductDetailsForColorAndSize", "ProductDetailBusinessService");
			productVariantId=retVal.getProductvariantkey().getId();
			log.info("productVariantId === "+productVariantId);
		}
	
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return productVariantId ;
	}	
	
	
	
	public int getInventoryForProductVariant(Long productvariantId)
	{
		int inventory = 0;
		log.info("inside getInventoryForProductVariant");
		
		try
		{
		List<Object> inputList = new ArrayList<Object>();
		inputList.add(productvariantId);
		inventory =(Integer) RestClientUtil.callService(inputList, "getCurrentInventoryByProductVariantID", "ProductManagerBusinessService");
		log.info("inventory ==== " + inventory + "productvariantId ==== " + productvariantId);
		}
		catch(Exception ex)
		{
			ex.printStackTrace();
		}
		return inventory;
	}
	
	/* shp
	 * for checking inventory for
	 * given product n color id
	 * for dont see your size
	 */
	public List<ProductVariant> getProductVariantListToCheckInventory(Long productId, Long colorID)
	{
		List<ProductVariant> retVal = new ArrayList<ProductVariant>();
		try{
			
		}
		catch(Exception ex)
		{
			log.info("Exception in the SendToFriend"+ex.getMessage());
			ex.printStackTrace();
		}
		return retVal;
	}
	public boolean sendAbandonedShoeMail(AbandonedShoeMailDTO asm)
	{
		boolean flag=true;
		log.info("inside abandoned shoe mail ");
		try
		{
			//String lImageServerName="http://images2.solestruck.com";
			String lImageServerName="http://commondatastorage.googleapis.com/images2.solestruck.com";
			//String lServerName="http://staging.solestruck.com";
			String lServerName=VeroniqaConstants.LIVE_FRONTEND_URL_FOR_MAIL;
			HashMap velocityReferences = new HashMap();
			Boolean retval = false;
			velocityReferences.put("FirstName", asm.getCustFname());
			velocityReferences.put("custEmailID",asm.getCustomerEmail());
			velocityReferences.put("lServername", lServerName);
        	velocityReferences.put("lImageServerName", lImageServerName);
			velocityReferences.put("ltempItems",asm.getLineitems());
			velocityReferences.put("orderid",asm.getOrderId());
        	EmailDTO dto=new EmailDTO();
        	HashMap<String,String> orgToList=new HashMap<String, String>();
        	orgToList.put(asm.getCustomerEmail() ,asm.getCustomerEmail());
        	dto.setTo(orgToList);
        	dto.setFrom(VeroniqaConstants.CUSTOMER_SERVICE_MAIL);
        	dto.setFromName("Solestruck");
        	dto.setSubject("You have an open shoebox with Solestruck.com");
        	List<Object> inputList2 = new ArrayList<Object>();
        	inputList2.add(Long.parseLong(EnvironmentUtil.getEnvironmentValue("ABANDONED_CART")));
        	EmailTemplate emailTemp=(EmailTemplate) RestClientUtil.callService(inputList2, "getEmailTemplateById", "EmailTemplateBusinessService");
        	String textMssg=emailTemp.getTextMessage();
        	String htmlMsg=emailTemp.getHtmlMessage();
        	String textMailContent=VelocityUtil.getMappedString(velocityReferences,textMssg);
        	String htmlMailContent=VelocityUtil.getMappedString(velocityReferences,htmlMsg);
        	dto.setTextMessage(textMailContent);
        	dto.setHtmlMessage(htmlMailContent);	
        	log.info("Before calling sendMailToMailService: 7 ");
        	EmailClientService.sendMailtoMailService(dto);
        	log.info("After calling sendMailToMailService: 7");
	
	}
	
		catch(Exception e)
		{
			log.warning("sendAbandonedShoeMail :"+e);
			flag=false;
		}
	
		return flag;
	}
	
	public boolean sendAbandonedWishListMail(AbandonedWishListDTO awm)
	{
		boolean flag=true;
		log.info("inside abandoned shoe mail ");
		try
		{
			//String lImageServerName="http://images2.solestruck.com";
			String lImageServerName="http://commondatastorage.googleapis.com/images2.solestruck.com";
			//String lServerName="http://staging.solestruck.com";
			String lServerName=VeroniqaConstants.LIVE_FRONTEND_URL_FOR_MAIL;
			HashMap velocityReferences = new HashMap();
			Boolean retval = false;
			if(awm.getCustFname()!=null)
				velocityReferences.put("FirstName", awm.getCustFname());
			else
				velocityReferences.put("FirstName", "Customer");
			velocityReferences.put("custEmailID",awm.getCustomerEmail());
			velocityReferences.put("custID",awm.getCustomerId());
			velocityReferences.put("lServername", lServerName);
        	velocityReferences.put("lImageServerName", lImageServerName);
			velocityReferences.put("ltempItems",awm.getLineitems());
        	EmailDTO dto=new EmailDTO();
        	HashMap<String,String> orgToList=new HashMap<String, String>();
        	orgToList.put(awm.getCustomerEmail() ,awm.getCustomerEmail());
        	dto.setTo(orgToList);
        	dto.setFrom(VeroniqaConstants.CUSTOMER_SERVICE_MAIL);
        	dto.setFromName("Solestruck");
        	dto.setSubject("You have an open wishlist with Solestruck.com");
        	List<Object> inputList2 = new ArrayList<Object>();
        	inputList2.add(Long.parseLong(EnvironmentUtil.getEnvironmentValue("ABANDONED_WISHLIST")));
        	EmailTemplate emailTemp=(EmailTemplate) RestClientUtil.callService(inputList2, "getEmailTemplateById", "EmailTemplateBusinessService");
        	String textMssg=emailTemp.getTextMessage();
        	String htmlMsg=emailTemp.getHtmlMessage();
        	String textMailContent=VelocityUtil.getMappedString(velocityReferences,textMssg);
        	String htmlMailContent=VelocityUtil.getMappedString(velocityReferences,htmlMsg);
        	dto.setTextMessage(textMailContent);
        	dto.setHtmlMessage(htmlMailContent);	
        	log.info("Before calling sendMailToMailService: 7 ");
        	EmailClientService.sendMailtoMailService(dto);
        	log.info("After calling sendMailToMailService: 7");
	
	}
	
		catch(Exception e)
		{
			log.warning("sendAbandonedShoeMail :"+e);
			flag=false;
		}
	
		return flag;
	}
	public boolean sendWriteAReviewMail(WriteAReviewMailDTO wrm,LineItemDTO lid,EmailTemplate emailTemp)
	{
		boolean flag=true;
		log.info("inside abandoned shoe mail ");
		try
		{
			//String lImageServerName="http://images2.solestruck.com";
			String lImageServerName="http://commondatastorage.googleapis.com/images2.solestruck.com";
			//String lServerName="http://staging.solestruck.com";
			String lServerName=VeroniqaConstants.LIVE_FRONTEND_URL_FOR_MAIL;
			String lShoeImageURL="";
			String lVendorURL="";
			String lVendorURL1="";
			String lProductURL="";
			String VendorURL="";
			String ProductURL="";
			String ColorURL="";
			String idpURL="";
			String lColorURL="";
			String productName_titlecase = "";
			String [] prodName = lid.getProductName().split(" ");
			for(int x=0;x<prodName.length;x++){
				for (int i = 0; i < prodName[x].length(); i++)
				{
					String next = prodName[x].substring(i, i+1);
					if (i == 0){
						productName_titlecase += next.toUpperCase();
					} 	
					else {
						productName_titlecase += next.toLowerCase();
					}
				}
				productName_titlecase+="-";
			}
			HashMap velocityReferences = new HashMap();
			Boolean retval = false;
			velocityReferences.put("recipient_FirstName", wrm.getCustFname());
			velocityReferences.put("custEmailID",wrm.getCustomerEmail());
			velocityReferences.put("lServername", lServerName);
        	velocityReferences.put("lImageServerName", lImageServerName);
			velocityReferences.put("productId",lid.getProductId());
			velocityReferences.put("vendorName",lid.getVendorName());
			velocityReferences.put("productName",lid.getProductName());
			velocityReferences.put("colorName",lid.getColorName());
			velocityReferences.put("colorId",lid.getColorId());
			velocityReferences.put("size",lid.getSize());
			velocityReferences.put("description",lid.getDescription());
			lVendorURL = lid.getVendorName().replaceAll(" ", "-").toLowerCase();
			lVendorURL1 = lid.getVendorName().replaceAll(" ", "-");
			lProductURL = productName_titlecase.replaceAll(" ","-");
			lColorURL = lid.getColorName().replaceAll(" ","-");
			ColorURL=lid.getColorName().replaceAll(" ","-").toLowerCase();
			VendorURL=lid.getVendorName().replaceAll(" ", "-").toLowerCase();
			ProductURL=lid.getProductName().replaceAll(" ", "-").toLowerCase();
			idpURL=VendorURL+"-"+ProductURL+"-"+ColorURL+"/index.html";
			lShoeImageURL= lImageServerName + "/" + lVendorURL + "-shoes/" + lVendorURL1 + "-shoes-" + lProductURL +"(" + lColorURL + ")-010604.jpg";
			velocityReferences.put("shoeImageUrl", lShoeImageURL);
			velocityReferences.put("idpURL", idpURL);
			log.info("idp url is"+idpURL);
        	EmailDTO dto=new EmailDTO();
        	HashMap<String,String> orgToList=new HashMap<String, String>();
        	orgToList.put(wrm.getCustomerEmail() ,wrm.getCustomerEmail());
        	dto.setTo(orgToList);
        	dto.setFrom(VeroniqaConstants.CUSTOMER_SERVICE_MAIL);
        	dto.setFromName("Solestruck");
        	//dto.setSubject(wrm.getCustFname()+" review about the shoe");
            dto.setSubject(wrm.getCustFname()+", Do you love them?"); //shp
        	String textMssg=emailTemp.getTextMessage();
        	String htmlMsg=emailTemp.getHtmlMessage();
        	String textMailContent=VelocityUtil.getMappedString(velocityReferences,textMssg);
        	String htmlMailContent=VelocityUtil.getMappedString(velocityReferences,htmlMsg);
        	dto.setTextMessage(textMailContent);
        	dto.setHtmlMessage(htmlMailContent);	
        	log.info("Before calling sendMailToMailService: 7 ");
        	EmailClientService.sendMailtoMailService(dto);
        	log.info("After calling sendMailToMailService: 7");
	
	}
	
		catch(Exception e)
		{
			log.warning("sendPerfectFitMail :"+e);
			flag=false;
		}
	
		return flag;
	}
	
	
	
}
