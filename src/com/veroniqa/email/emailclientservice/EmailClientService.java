package com.veroniqa.email.emailclientservice;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.ObjectInputStream;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.logging.Logger;

import org.restlet.resource.ClientResource;

import com.veroniqa.email.dto.EmailDTO;
import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.VeroniqaConstants;

public class EmailClientService {
	
	private static final Logger log=Logger.getLogger(EmailClientService.class.getName());
	
	public static void sendMailtoMailService(EmailDTO emailDto)throws Exception
	{

		log.info("Inside the FE Mailing Service::"+EnvironmentUtil.getEnvironmentValue("MailingService"));
		ClientResource cr = new ClientResource(EnvironmentUtil.getEnvironmentValue("MailingService"));
		
		String appMode=EnvironmentUtil.getEnvironmentValue("AppMode");
		
		if(appMode.equals("DEV"))
		{
			/*if(emailDto.getTo()!=null){
				HashMap<String,String> orgToList=emailDto.getTo();
				if(orgToList.size()>=1)
				{
					emailDto.setSubject(emailDto.getSubject()+" for ");
					Iterator it=orgToList.keySet().iterator();
						while(it.hasNext())
						{
							emailDto.setSubject(emailDto.getSubject()+" "+it.next());
						}
						
				}
			}*/
			emailDto.setSubject(emailDto.getSubject()+" from DEV");
			HashMap<String,String> toList=new HashMap<String,String>();
			String emailAddress[]=EnvironmentUtil.getEnvironmentValue(appMode+"_MailingList").split(",");
			String emailAddressNames[]=EnvironmentUtil.getEnvironmentValue(appMode+"_MailingListNames").split(",");
			for(int i=0;i<emailAddress.length;i++)
			{
				toList.put(emailAddress[i],emailAddressNames[i]);
			}
			
			emailDto.setTo(toList);		
			emailDto.setCc(Arrays.asList(emailAddress));
			
			/*List<String> bccList=new ArrayList<String>();
			bccList.add(VeroniqaConstants.BACKUP_MAIL);
			log.info("bccList"+bccList);
			emailDto.setBcc(bccList);
			*/
		}
		if(appMode.equals("STAGING"))
		{
			
			HashMap<String,String> orgToList=emailDto.getTo();
			/*if(orgToList.size()>=1)
			{
				emailDto.setSubject(emailDto.getSubject()+" for ");
				Iterator it=orgToList.keySet().iterator();
					while(it.hasNext())
					{
						emailDto.setSubject(emailDto.getSubject()+" ,"+it.next());
					}
					
			}*/
			emailDto.setSubject(emailDto.getSubject()+" from STAGING");
			HashMap<String,String> toList=new HashMap<String,String>();
			String emailAddress[]=EnvironmentUtil.getEnvironmentValue(appMode+"_MailingList").split(",");
			String emailAddressNames[]=EnvironmentUtil.getEnvironmentValue(appMode+"_MailingListNames").split(",");
			for(int i=0;i<emailAddress.length;i++)
			{
				toList.put(emailAddress[i],emailAddressNames[i]);
			}
			
			emailDto.setTo(toList);	
			
			log.info("email list--"+emailDto.getTo());
			//emailDto.setCc(Arrays.asList(emailAddress));
			
			//emailDto.setBcc(Arrays.asList(emailAddress));
		}
		
		if(appMode.equals("LIVE"))
		{
			
			String emailAddress[]=EnvironmentUtil.getEnvironmentValue(appMode+"_MailingList").split(",");
			
			
			List<String> bccList=new ArrayList<String>();
			bccList.add(VeroniqaConstants.BACKUP_MAIL);
			log.info("bccList"+bccList);
			
			//emailDto.setTo(toList);		
			//emailDto.setCc(Arrays.asList(emailAddress));
			if(!emailDto.getSubject().contains(":::Broken Link"))
				emailDto.setBcc(bccList);
		}
		
		ArrayList<Object> params=new ArrayList<Object>();
		 params.add(emailDto);
		 System.out.println("params list--"+params.size());
		HashMap<String,ArrayList<Object>> actionParam=new HashMap<String, ArrayList<Object>>();
		actionParam.put("sendEmail",params);
		System.out.println("action Params--"+actionParam.size());
		HashMap<String,Object> contact=null;
		  log.info("Before Posting Mail: ");
		cr.post(actionParam);
		  log.info("After Posting Mail: ");
		if(cr.getStatus().isSuccess()){    
		    ByteArrayOutputStream out = new ByteArrayOutputStream();    
		    cr.getResponseEntity().write(out);  
		    if(out.toByteArray().length > 0){
		     ByteArrayInputStream in = new ByteArrayInputStream(out.toByteArray());
		     ObjectInputStream ois = new ObjectInputStream(in);    
		      Object val = ois.readObject();
		      contact=(HashMap<String,Object>)val;
		    }
		   }
		
		
		if(contact.containsKey("sendEmail"))
		{
			Boolean i=(Boolean)contact.get("sendEmail");
	
			if (contact != null) {
			 
			   log.info("Returned value from Mailing Service: " + i);
			   
			}
			else
			{
				log.info("Returned Null from MAILING SERVICE");
			}
		}
		
		
		
		if(contact.containsKey("ExceptionGenerated"))
		{
			Exception i=(Exception)contact.get("ExceptionGenerated");
	
			if (i != null) {
			 
				log.info("Exception from mailing service: " + i.getMessage());
			    i.printStackTrace();
			   
			} 
			else
			{
				log.info("Returned Null for Exception key");
			}
		}
		
	}
	
	public static void sendMailstoMailService(List<EmailDTO> emailDtos)throws Exception
	{

		log.info(EnvironmentUtil.getEnvironmentValue("MailingService"));
		ClientResource cr = new ClientResource(EnvironmentUtil.getEnvironmentValue("MailingService"));
		
		String appMode=EnvironmentUtil.getEnvironmentValue("AppMode");
		
		for(EmailDTO emailDto:emailDtos){
		if(appMode.equals("DEV"))
		{
			/*if(emailDto.getTo()!=null){
				HashMap<String,String> orgToList=emailDto.getTo();
				if(orgToList.size()>=1)
				{
					emailDto.setSubject(emailDto.getSubject()+" for ");
					Iterator it=orgToList.keySet().iterator();
						while(it.hasNext())
						{
							emailDto.setSubject(emailDto.getSubject()+" "+it.next());
						}
						
				}
			}*/
			emailDto.setSubject(emailDto.getSubject()+" from DEV");
			HashMap<String,String> toList=new HashMap<String,String>();
			String emailAddress[]=EnvironmentUtil.getEnvironmentValue(appMode+"_MailingList").split(",");
			String emailAddressNames[]=EnvironmentUtil.getEnvironmentValue(appMode+"_MailingListNames").split(",");
			for(int i=0;i<emailAddress.length;i++)
			{
				toList.put(emailAddress[i],emailAddressNames[i]);
			}
			
			emailDto.setTo(toList);		
			emailDto.setCc(Arrays.asList(emailAddress));
			
			emailDto.setBcc(Arrays.asList(emailAddress));
			
		}
		if(appMode.equals("STAGING"))
		{
			
			HashMap<String,String> orgToList=emailDto.getTo();
			/*if(orgToList.size()>=1)
			{
				emailDto.setSubject(emailDto.getSubject()+" for ");
				Iterator it=orgToList.keySet().iterator();
					while(it.hasNext())
					{
						emailDto.setSubject(emailDto.getSubject()+" ,"+it.next());
					}
					
			}*/
			emailDto.setSubject(emailDto.getSubject()+" from STAGING");
			HashMap<String,String> toList=new HashMap<String,String>();
			String emailAddress[]=EnvironmentUtil.getEnvironmentValue(appMode+"_MailingList").split(",");
			String emailAddressNames[]=EnvironmentUtil.getEnvironmentValue(appMode+"_MailingListNames").split(",");
			for(int i=0;i<emailAddress.length;i++)
			{
				toList.put(emailAddress[i],emailAddressNames[i]);
			}
			
			emailDto.setTo(toList);		
			emailDto.setCc(Arrays.asList(emailAddress));
			
			emailDto.setBcc(Arrays.asList(emailAddress));
		}
		
		if(appMode.equals("LIVE"))
		{
			
			String emailAddress[]=EnvironmentUtil.getEnvironmentValue(appMode+"_MailingList").split(",");
			
			//emailDto.setTo(toList);		
			//emailDto.setCc(Arrays.asList(emailAddress));
			
			emailDto.setBcc(Arrays.asList(emailAddress));
		}
		
		}
		
		ArrayList<Object> params=new ArrayList<Object>();
		 params.add(emailDtos);
		 
		HashMap<String,ArrayList<Object>> actionParam=new HashMap<String, ArrayList<Object>>();
		actionParam.put("sendEmails",params);
		
		HashMap<String,Object> contact=null;
		  log.info("Before Posting Mail: ");
		cr.post(actionParam);
		  log.info("After Posting Mail: ");
		if(cr.getStatus().isSuccess()){    
		    ByteArrayOutputStream out = new ByteArrayOutputStream();    
		    cr.getResponseEntity().write(out);    
		    if(out.toByteArray().length > 0){
		     ByteArrayInputStream in = new ByteArrayInputStream(out.toByteArray());
		     ObjectInputStream ois = new ObjectInputStream(in);    
		      Object val = ois.readObject();
		      contact=(HashMap<String,Object>)val;
		    }
		   }
		
		
		if(contact.containsKey("sendEmails"))
		{
			Boolean i=(Boolean)contact.get("sendEmails");
	
			if (contact != null) {
			 
			   log.info("Returned value from Mailing Service: " + i);
			   
			}
			else
			{
				log.info("Returned Null from MAILING SERVICE");
			}
		}
		
		
		
		if(contact.containsKey("ExceptionGenerated"))
		{
			Exception i=(Exception)contact.get("ExceptionGenerated");
	
			if (i != null) {
			 
				log.info("Exception from mailing service: " + i.getMessage());
			    i.printStackTrace();
			   
			}
			else
			{
				log.info("Returned Null for Exception key");
			}
		}
		
	}

}
