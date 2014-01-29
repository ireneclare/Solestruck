package com.veroniqa.frontend.Controllers;

import static com.google.appengine.api.taskqueue.TaskOptions.Builder.withUrl;

import java.util.ArrayList;

import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.UUID;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.codec.binary.Base64;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

import com.google.appengine.api.taskqueue.Queue;
import com.google.appengine.api.taskqueue.QueueFactory;
import com.google.appengine.api.taskqueue.TaskOptions.Method;
import com.google.appengine.labs.repackaged.org.json.JSONObject;
import com.veroniqa.dto.AbandonedShoeMailDTO;
import com.veroniqa.dto.AbandonedWishListDTO;
import com.veroniqa.dto.ProductDetailDTO;
import com.veroniqa.email.dto.EmailDTO;
import com.veroniqa.email.emailclientservice.EmailClientService;
import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.RestClientUtil;
import com.veroniqa.frontend.util.VelocityUtil;
import com.veroniqa.frontend.util.VeroniqaConstants;
import com.veroniqa.jdo.Color;
import com.veroniqa.jdo.EmailTemplate;

@Controller
public class ClickToEmailController {
	private Logger log=Logger.getLogger(ClickToEmailController.class.getSimpleName());
	
	//code for storing image bytes in session by IRI
	
	@RequestMapping(value="/storeImages.htm",method=RequestMethod.POST)
	public void storeImageBytesInSession(@RequestParam(value="key") String key, @RequestParam(value="singleImage", required = false) String singleImage, @RequestParam(value="mode") String mode,HttpServletRequest req, HttpServletResponse resp)
	{
		if(mode != null && key != null)
		{
//			HttpSession session		= req.getSession();
			
			if("add".equals(mode))
			{
//				session.setAttribute(key, singleImage);
				
				VeroniqaConstants.instance.put(key, singleImage);
			}
			else if("remove".equals(mode))
			{
				VeroniqaConstants.instance.remove(key);
			}
		}
	}
	
	
	@RequestMapping(value="/sendEmailTaskQueue.htm",method=RequestMethod.POST)
	public void TaskQueueController(@RequestParam("mailDetials")String mailDetials,HttpServletRequest request, HttpServletResponse response)
	{
		log.info("*********** Inside the method sendEmail *****************");

		try
		{
			JSONObject mailObj						=	new JSONObject(mailDetials);
			
			String operatingSystem 					= 	null;				
			String browser							= 	null;						
			String version							= 	null;	
			String emailId							= 	null;  					
			String subject							= 	null;
			String orderNumber 						= 	null;
			
			
			if(mailObj.has("sysProp"))
			{
				
				JSONObject systemProperties			=	new JSONObject(mailObj.getString("sysProp"));
				
				     operatingSystem				=    systemProperties.getString("OS");
				     browser						=	 systemProperties.getString("browser");
				     version						=	 systemProperties.getString("version");
			}
			
			if(mailObj.has("mailProp"))
			{
				JSONObject emailProperties			=	new JSONObject(mailObj.getString("mailProp"));
				
				 orderNumber						= 	emailProperties.getString("orderNO");
				
				if(orderNumber == "" || orderNumber == null)
				{
					orderNumber="Not Specified";
				}
				
				 emailId  							=	emailProperties.getString("emailID");
				 subject							=	emailProperties.getString("subject");
			}
			
			
			String mode="";
			
			try
			{
				mode = EnvironmentUtil.getEnvironmentValue("AppMode");
			}
			catch(Exception e)
			{
				e.printStackTrace();
				
			}

			if(mode.equalsIgnoreCase("dev") || mode.equalsIgnoreCase("staging"))
			{
				String lToAddress="development@solestruck.com";
			}
			else if(mode.equalsIgnoreCase("live"))
			{
				
				String lToAddress="customerservice@solestruck.com";
			}
			
			String htmlText=getHtmlCode(emailId,orderNumber,subject,operatingSystem,browser,version);
			
			subject 							  = 	subject.replaceAll("\\<.*?>"," ");
			String lSubject						  = 	"Solestruck - I have a question!";
			
			EmailDTO emailDto = new EmailDTO();
			emailDto.setTextMessage(subject+"; Order Number:"+orderNumber+"; Email:"+emailId);
			emailDto.setFrom("Developer@solestruck.com");
			byte[] byteArrayFromImageObject 	  =		null;
			if(mailObj.has("attachments"))
			{
				JSONObject attachmentsKeys		  =		new JSONObject(mailObj.getString("attachments"));
				
				Iterator<String> itr			  =		attachmentsKeys.keys();
				
				List<String> attachment 	 	  = 	new ArrayList<String>();
				List<byte[]> attachmentsData      = 	new ArrayList<byte[]>();
				
				while(itr.hasNext())
				{	
					String key					  =	itr.next();
					System.out.println("For loop "+attachmentsKeys.get(key));
					JSONObject	singleAttachment			=		new JSONObject(attachmentsKeys.getString(key));
					
					System.out.println(singleAttachment.toString());
					
					
					attachment.add(singleAttachment.getString("name")+","+singleAttachment.getString("type"));
					attachmentsData.add(key.getBytes("UTF-8"));
				}
				
				emailDto.setAttachments(attachment);
				emailDto.setAttachmentsData(attachmentsData);
			}
				
			try
			{
				
			String lMode = EnvironmentUtil.getEnvironmentValue("AppMode");
			if(lMode.equals("DEV"))
			{
				log.info("DEV");
				List<String> bccList=new ArrayList<String>();
				//bccList.add(VeroniqaConstants.BACKUP_MAIL);
				//emailDto.setBcc(bccList);
			}
			}catch(Exception e)
			{
				e.printStackTrace();
			}
			emailDto.setFromName("Solestruck");
			emailDto.setSubject(lSubject);
			emailDto.setHtmlMessage(htmlText);
			HashMap<String,String> map = new HashMap<String, String>();
			map.put("customerservice@solestruck.com", "customerservice@solestruck.com");
			emailDto.setTo(map);
			emailDto.setReplyTo(emailId);
			emailDto.setEmailType("EmailUs");
			
			EmailClientService emailclientService = new EmailClientService();
			try { 
				log.info("********* Sending Email");
				emailclientService.sendMailtoMailService(emailDto);
				log.info("Email is Sent *******************8");
			} catch (Exception e) {
				
				e.printStackTrace();
			}

		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
		
//		String fromAddress="";
//		String text="";
//		boolean sendStatus=false;
//		log.info("browser name: "+request.getHeader("User-Agent"));
//		String mode="";
//		
//		try
//		{
//			mode = EnvironmentUtil.getEnvironmentValue("AppMode");
//		}
//		catch(Exception e)
//		{
//			e.printStackTrace();
//			
//		}
//
//		if(mode.equalsIgnoreCase("dev") || mode.equalsIgnoreCase("staging"))
//		{
//			String lToAddress="development@solestruck.com";
//		}
//		else if(mode.equalsIgnoreCase("live"))
//		{
//			
//			String lToAddress="customerservice@solestruck.com";
//		}
//		
//	
//		fromAddress=emailId;
//		if(orderNumber=="" || orderNumber==null)
//		{
//			orderNumber="Not Specified";
//		}
//		text=msg;
//		
//		log.info("######### Parameters From ClickToEmail Form ############");
//		log.info("SendEmailAction:: fromaddress::"+fromAddress);
//		log.info("SendEmailAction:: emailtext::"+text);
//		log.info("SendEmailAction:: ordernumber::"+orderNumber);
//		//String det = ;
//		String htmlText=getHtmlCode(fromAddress,orderNumber,text,sysdet);
//		
//		text = text.replaceAll("\\<.*?>"," ");
//		String lSubject="Solestruck - I have a question!";
////		if(text.length()>35)
////			lSubject = text.substring(0,35);
////		 else
////			 lSubject = text;
//		
//		EmailDTO emailDto = new EmailDTO();
//		emailDto.setTextMessage(text+"; Order Number:"+orderNumber+"; Email:"+fromAddress);
//		emailDto.setFrom("Developer@solestruck.com");
//		//log.info("myFile.getContentType(): "+myFile.getContentType());
//	//	List<String> attachments = new ArrayList<String>();
//		//List<byte[]> attachmentsData = new ArrayList<byte[]>();
//		if(myFile1!=null && !myFile1.getContentType().equalsIgnoreCase("application/octet-stream"))
//		{
//			log.info("file1-->> content type: "+myFile1.getContentType()+" size in bytes: "+myFile1.getBytes().length+" name: "+myFile1.getOriginalFilename());
//			attachments.add(myFile1.getOriginalFilename()+","+myFile1.getContentType());
//			attachmentsData.add(myFile1.getBytes());
//		}
//		if(myFile2!=null && !myFile2.getContentType().equalsIgnoreCase("application/octet-stream"))
//		{
//			attachments.add(myFile2.getOriginalFilename()+","+myFile2.getContentType());
//			attachmentsData.add(myFile2.getBytes());
//		}
//		if(myFile3!=null && !myFile3.getContentType().equalsIgnoreCase("application/octet-stream"))
//		{
//			attachments.add(myFile3.getOriginalFilename()+","+myFile3.getContentType());
//			attachmentsData.add(myFile3.getBytes());
//		}
//		if(myFile4!=null && !myFile4.getContentType().equalsIgnoreCase("application/octet-stream"))
//		{
//			attachments.add(myFile4.getOriginalFilename()+","+myFile4.getContentType());
//			attachmentsData.add(myFile4.getBytes());
//		}
//		if(myFile5!=null && !myFile5.getContentType().equalsIgnoreCase("application/octet-stream"))
//		{
//			attachments.add(myFile5.getOriginalFilename()+","+myFile5.getContentType());
//			attachmentsData.add(myFile5.getBytes());
//		}
//		
//		for(int i=0;i<attachments.size();i++)
//		{
//			System.out.println("attachment: "+i+" "+attachments.get(i));
//		}
//		emailDto.setAttachments(attachments);
//		
//		System.out.println(emailDto.getAttachments().size());
//		for(int i=0;i<emailDto.getAttachments().size();i++)
//		{
//			System.out.println("emaildto attachment: "+i+" "+emailDto.getAttachments().get(i));
//		}
//		
//		log.info("1---->"+attachmentsData.size());
//		
//		emailDto.setAttachmentsData(attachmentsData);
//		
//		log.info("2------>"+emailDto.getAttachmentsData().size());
//		log.info("Outside if condition for checking whether we have attachment or not");
//		//a.setData(new Blob(myFile.getBytes());
//		//abs.createAttachment(a);
//		//log.info("attachment: "+emailDto.getAttachments().get(0)+" "+emailDto.getAttachments().size()+" data: "+emailDto.getAttachmentsData().size()+" "+emailDto.getAttachmentsData().get(0));
//		try{
//		String lMode = EnvironmentUtil.getEnvironmentValue("AppMode");
//		if(lMode.equals("DEV"))
//		{
//			log.info("DEV");
//			List<String> bccList=new ArrayList<String>();
//			//bccList.add(VeroniqaConstants.BACKUP_MAIL);
//			//emailDto.setBcc(bccList);
//		}
//		}catch(Exception e)
//		{
//			e.printStackTrace();
//		}
//		emailDto.setFromName("Solestruck");
//		emailDto.setSubject(lSubject);
//		emailDto.setHtmlMessage(htmlText);
//		HashMap<String,String> map = new HashMap<String, String>();
//		map.put("customerservice@solestruck.com", "customerservice@solestruck.com");
//		emailDto.setTo(map);
//		emailDto.setReplyTo(fromAddress);
//		emailDto.setEmailType("EmailUs");
//		
//		EmailClientService emailclientService = new EmailClientService();
//		try { 
//			log.info("********* Sending Email");
//			emailclientService.sendMailtoMailService(emailDto);
//			log.info("Email is Sent *******************8");
//		} catch (Exception e) {
//			// TODO Auto-generated catch block
//			e.printStackTrace();
//		}
	}
	
	//code for email-Us by IRI
	
	@RequestMapping(value="/sendEmailToUs.htm")
	public void sendEmail(@RequestParam("mailDetials")String mailDetials,HttpServletRequest request, HttpServletResponse response) throws Exception
	{
		try
		{
			Queue taskQueue					= QueueFactory.getQueue("sendEmailUs");
			taskQueue.add(withUrl("/sendEmailTaskQueue.htm").param("mailDetials",mailDetials).method(Method.POST));
		}
		catch(Exception e)
		{
			Queue taskQueue					= QueueFactory.getQueue("sendEmailUs");
			taskQueue.purge();
		}
	}
			 
		
	
	public String getHtmlCode(String fromAddress,String orderNumber,String text,String operatingSystem,String browser,String version){
		
        StringBuilder sb = new StringBuilder();
       
        
        sb.append("<html><head></head><body>\n");
        sb.append("<h3> I have a problem </h3> \n\n\n");
        sb.append("<table border=\"0\" align=\"left\" style=\"margin-left: 20px;\" width=\"100%\">");
      
        sb.append("<tr>");
        sb.append("<td width=\"15%\"><b>From Address<b></td>");
        sb.append("<td width=\"85%\">"+fromAddress+"</td>");
        sb.append("</tr>\n");
        
        
        sb.append("<tr>");
        sb.append("<td width=\"15%\"> <b>Order Number </b> </td>");
        sb.append("<td width=\"85%\">"+orderNumber+"</td>");
        sb.append("</tr>\n");
        
        
        
        sb.append("<tr>");
        sb.append("<td width=\"15%\"> <b>Email Message </b></td>");
        sb.append("<td width=\"85%\">"+text+"</td>");
        sb.append("</tr>\n");
        
        sb.append("<tr>");
        sb.append("<td width=\"15%\"> <b>System Details </b></td>");
        sb.append("<td width=\"85%\">"+operatingSystem+""+""+browser+""+""+version+"</td>");
//        sb.append("<td width=\"85%\">"+browser+"</td>");
//        sb.append("<td width=\"85%\">"+version+"</td>");
        sb.append("</tr>\n");
        
        sb.append("</table>");
        sb.append("</body>");
        sb.append("</html>");

        return sb.toString();
		
	}
	
	@RequestMapping(value="/sendiosEmailToUs.htm")
	public void sendIosEmail(@RequestParam("email")String pAddress,@RequestParam("help")String pText,@RequestParam("order_number")String pOrderNumber,
			@RequestParam(value="sysdet")String sysdetail,@RequestParam(value="deleteCookie",required=false) String deleteCookie,
			
//			,@RequestParam("sysdet")String sysdetail
			HttpServletRequest request,HttpServletResponse response){
		System.out.println("inside sendemailtous");
		//ModelAndView mv=new ModelAndView("emailUsSent");
		log.info("Start ---- ClickToEmailAction:::");		
		String fromAddress="";
		String orderNumber="";
		String text="";
		String sysDet= sysdetail;
		boolean sendStatus=false;
		String lToAddress="development@solestruck.com";
		String lSubject="Solestruck,I have a question! This is from Solestruck Mobile App";
		
		fromAddress=pAddress;
		if(pOrderNumber=="" || pOrderNumber==null || pOrderNumber=="null")
		{
			orderNumber="Not Specified";
		}
		else
		{			
			orderNumber= pOrderNumber;
		}
		
		text=pText;
		
		log.info("######### Parameters From ClickToEmail Form ############");
		
		try {
			log.info("SendEmailAction:: attachimagedata::");
		} catch (Exception e) {
			
			e.printStackTrace();
		}
		
		String deviceName = sysdetail.split("--")[0];
		String appVersion = sysdetail.split("--")[1];
		
		
		log.info("device name "+deviceName);
		 
		 String htmlText=getiosHtmlCode(fromAddress,orderNumber,text,deviceName,appVersion);
		
		EmailDTO emailDto = new EmailDTO();
		emailDto.setTextMessage(text);
		emailDto.setFrom("Developer@solestruck.com");
		
		
		try{

			
		/*String lMode = EnvironmentUtil.getEnvironmentValue("AppMode");
		if(lMode.equals("DEV"))
		{
			log.info("DEV");
			List<String> bccList=new ArrayList<String>();
			bccList.add(VeroniqaConstants.BACKUP_MAIL);
			emailDto.setBcc(bccList);
		}*/
		}catch(Exception e)
		{
			e.printStackTrace();
		}
		emailDto.setFromName("Solestruck");
		emailDto.setSubject(lSubject);
		emailDto.setHtmlMessage(htmlText);
		HashMap<String,String> map = new HashMap<String, String>();
		map.put("emailId", "srinivasan.gunasekar@a-cti.com");
		emailDto.setTo(map);
		
		EmailClientService emailclientService = new EmailClientService();
		try { 
			
			log.info("********* Sending Email");
			emailclientService.sendMailtoMailService(emailDto);
			log.info("Email is Send *******************8");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		}
		//return mv;	 
		
	public String getiosHtmlCode(String fromAddress,String orderNumber,String text,String deviceName,String appVersion){
//		public String getHtmlCode(String fromAddress,String orderNumber,String text){
		int i=1;
        StringBuilder sb = new StringBuilder();
       
        
        sb.append("<html><head></head><body>\n");
        sb.append("<h3> I have a problem </h3> \n\n\n");
        sb.append("<table border=\"0\" align=\"left\" style=\"margin-left: 20px;\" width=\"100%\">");
      
        sb.append("<tr>");
        sb.append("<td width=\"15%\"><b>From Address<b></td>");
        sb.append("<td width=\"85%\">"+fromAddress+"</td>");
        sb.append("</tr>\n");
        
        
        sb.append("<tr>");
        sb.append("<td width=\"15%\"> <b>Order Number </b> </td>");
        sb.append("<td width=\"85%\">"+orderNumber+"</td>");
        sb.append("</tr>\n");
        
        
        
        sb.append("<tr>");
        sb.append("<td width=\"15%\"> <b>Email Message </b></td>");
        sb.append("<td width=\"85%\">"+text+"</td>");
        sb.append("</tr>\n");
        
        sb.append("<tr>");
        sb.append("<td width=\"15%\"> <b>System Details </b></td>");
        sb.append("<td width=\"85%\">"+deviceName+"</td>");
        sb.append("</tr>\n");
        
        sb.append("<tr>");
        sb.append("<td width=\"15%\"></td>");
        sb.append("<td width=\"85%\">"+appVersion+"</td>");
        sb.append("</tr>\n");
        
        sb.append("</table>");
        sb.append("</body>");
        sb.append("</html>");

        return sb.toString();
		
	}

	@RequestMapping("/troubleWithOpenShoeBoxMail.htm")
	public ModelAndView troubleWithOpenShoeBoxMail(@RequestParam("orderid")Long orderid) throws NumberFormatException, Exception
	{
		ModelAndView mv=new ModelAndView("emptyPage");
		List inputList=new ArrayList();
		inputList.add(orderid);
		AbandonedShoeMailDTO asm=(AbandonedShoeMailDTO) RestClientUtil.callService(inputList, "getContentForAbandonedShoeMail", "IDPMailBusinessService");
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
		velocityReferences.put("orderid",orderid);
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
    	String htmlMsg=emailTemp.getHtmlMessage();
    	String htmlMailContent=VelocityUtil.getMappedString(velocityReferences,htmlMsg);
		if(htmlMailContent!=null)
			mv.addObject("pageContent", htmlMailContent);
		return mv;
	}
	
	@RequestMapping("/troubleWithOpenWishlistMail.htm")
	public ModelAndView troubleWithOpenWishlistMail(@RequestParam("customerid")Long customerid) throws NumberFormatException, Exception
	{
		ModelAndView mv=new ModelAndView("emptyPage");
		List inputList=new ArrayList();
		inputList.add(customerid);
		AbandonedWishListDTO awm=(AbandonedWishListDTO) RestClientUtil.callService(inputList, "getContentForAbandonedWishlistMail", "IDPMailBusinessService");
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
		velocityReferences.put("lServername", lServerName);
    	velocityReferences.put("lImageServerName", lImageServerName);
		velocityReferences.put("ltempItems",awm.getLineitems());
		velocityReferences.put("custID",customerid);
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
		if(htmlMailContent!=null)
			mv.addObject("pageContent", htmlMailContent);
		return mv;
	}
	
	@RequestMapping("/troubleWithPerfectFitMail.htm")
	public ModelAndView troubleWithPerfectFitMail(@RequestParam("productname")String productName,@RequestParam("vendorname")String vendorName,@RequestParam("retailprice")Double retailPrice,@RequestParam("size")Double size,@RequestParam("colorid")Long colorid,@RequestParam("productid")Long productid,@RequestParam("emailid")String emailid) throws NumberFormatException, Exception
	{
		ModelAndView mv=new ModelAndView("emptyPage");
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
		inputList.add(productid);
		ProductDetailDTO productdtldto=(ProductDetailDTO) RestClientUtil.callService(inputList, "getItemDetails", "ProductDetailBusinessService");
		List<Object> inputList1 = new ArrayList<Object>();
		inputList1.add(colorid);
		Color color =(Color) RestClientUtil.callService(inputList1, "getColorById", "ColorBusinessService");
		String colorName = color.getCustomColor();
		velocityReferences.put("lServername", lServerName);
    	velocityReferences.put("lImageServername", lImageServerName);
    	velocityReferences.put("vendorName", vendorName);
    	velocityReferences.put("productName", productName);
    	velocityReferences.put("size", size);
    	velocityReferences.put("retailprice", retailPrice);
    	velocityReferences.put("shoedescription",productdtldto.getProductDescription());
    	velocityReferences.put("custEmailID", emailid);
    	velocityReferences.put("productID", productid);
    	velocityReferences.put("colorID", colorid);
    	velocityReferences.put("colorname", color.getCustomColor());
		lVendorURL = vendorName.replaceAll(" ", "-").toLowerCase();
		lVendorURL1 = vendorName.replaceAll(" ", "-");
		lProductURL = productName_titlecase.replaceAll(" ","-");
		lColorURL = colorName.replaceAll(" ","-");
		lShoeImageURL= lImageServerName + "/" + lVendorURL + "-shoes/" + lVendorURL1 + "-shoes-" + lProductURL +"(" + lColorURL + ")-010604.jpg"; 
		log.info(" lShoeImageURL  = " +  lShoeImageURL );
		velocityReferences.put("lShoeImageURL", lShoeImageURL);
    	EmailDTO dto=new EmailDTO();
    	HashMap<String,String> orgToList=new HashMap<String, String>();
    	orgToList.put(emailid , emailid);
    	dto.setTo(orgToList);
    	dto.setFrom(VeroniqaConstants.CUSTOMER_SERVICE_MAIL);
    	dto.setFromName("Solestruck");
    	dto.setSubject(" Perfect Match For " + emailid );
    	List<Object> inputList2 = new ArrayList<Object>();
    	inputList2.add(Long.parseLong(EnvironmentUtil.getEnvironmentValue("DONT_SEE_YOUR_SIZE")));
    	EmailTemplate emailTemp=(EmailTemplate) RestClientUtil.callService(inputList2, "getEmailTemplateById", "EmailTemplateBusinessService");    	
    	String textMssg=emailTemp.getTextMessage();
    	String htmlMsg=emailTemp.getHtmlMessage();	
    	String textMailContent=VelocityUtil.getMappedString(velocityReferences,textMssg);
    	String htmlMailContent=VelocityUtil.getMappedString(velocityReferences,htmlMsg);
		if(htmlMailContent!=null)
			mv.addObject("pageContent", htmlMailContent);
		
		return mv;
	}

}