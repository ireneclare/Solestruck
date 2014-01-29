package com.veroniqa.frontend.util;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.ObjectInputStream;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.logging.Logger;

import org.apache.commons.codec.digest.DigestUtils;
import org.restlet.data.Cookie;
import org.restlet.resource.ClientResource;


/*
 * this class comprises methods for getting data from rest services
 * author ss2 
 * 
 */
public class RestClientUtil {
	
	 /**
     * this rest client method will retrieve data from rest server, by setting some input params we can use this for all Service classes
     *
     * @param inputList - List of inputs for service method in which it will be set
     * @param methodName - Name of service method to be called
     * @param serviceName  - Name of the service class 
     * @return Object- the response object 
     * 
     */
	private Logger log=Logger.getLogger("RestClientUtil");
	
	public static Object callService(List<?> inputList,String methodName,String serviceName)
	{
		Object retval=null;
		try
		{
			
			HashMap actionparam=new HashMap();
			actionparam.put(methodName, inputList);
			//System.out.println("server url:"+VeroniqaConstants.DB_SERVICE_URL+serviceName);
			ClientResource cr = new ClientResource(VeroniqaConstants.DB_SERVICE_URL+"java/"+serviceName);
			attachRequestCookies(cr);
			HashMap<String,Object> result =null;
			cr.post(actionparam);
			if(cr.getStatus().isSuccess())
			{    
			    ByteArrayOutputStream out = new ByteArrayOutputStream();    
			    cr.getResponseEntity().write(out);    
			    if(out.toByteArray().length > 0)
			    {
			     ByteArrayInputStream in = new ByteArrayInputStream(out.toByteArray());
			     ObjectInputStream ois = new ObjectInputStream(in);    
			      Object val = ois.readObject();
			      result=(HashMap<String,Object>)val;
			    }
			}
			
			if(result.containsKey(methodName))
				retval=result.get(methodName);
			if(result.containsKey("ExceptionGenerated"))
			{
				Exception exp=(Exception)result.get("ExceptionGenerated");
		
				throw exp;
			}
			
			cr.release();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
		return retval;
		
	}
	
	public static Object callService1(List<?> inputList,String methodName,String serviceName)
	{
		Object retval=null;
		try
		{
			//log.info("in callService1.........");
			HashMap actionparam=new HashMap();
			actionparam.put(methodName, inputList);
			ClientResource cr=null;
			String appMode=EnvironmentUtil.getEnvironmentValue("AppMode");
			//log.info("appmode..."+appMode);
			//System.out.println("server url:"+VeroniqaConstants.DB_SERVICE_URL+serviceName);184.73.121.128;www1.solestruck.com;10.4.1.140;10.4.1.181
			if(appMode.equals("STAGING")){
				//cr = new ClientResource("http://localhost:1988/"+serviceName+"/"+methodName);
				//cr = new ClientResource("http://115.111.6.204:1988/"+serviceName+"/"+methodName);
				cr = new ClientResource("http://www1.solestruck.com:1988/"+serviceName+"/"+methodName);
				//log.info("in callService1..of staging......."+cr);
			}
			else if(appMode.equals("LIVE"))
			{
				cr = new ClientResource("http://www1.solestruck.com:1989/"+serviceName+"/"+methodName);
				//log.info("in callService1.of Live......."+cr);	
			}
			attachRequestCookies(cr);
			HashMap<String,Object> result =null;
			cr.post(actionparam);
			if(cr.getStatus().isSuccess())
			{    
			    ByteArrayOutputStream out = new ByteArrayOutputStream();    
			    cr.getResponseEntity().write(out);    
			    if(out.toByteArray().length > 0)
			    {
			     ByteArrayInputStream in = new ByteArrayInputStream(out.toByteArray());
			     ObjectInputStream ois = new ObjectInputStream(in);    
			      Object val = ois.readObject();
			      result=(HashMap<String,Object>)val;
			    }
			}
			
			if(result.containsKey(methodName))
				retval=result.get(methodName);
			if(result.containsKey("ExceptionGenerated"))
			{
				Exception exp=(Exception)result.get("ExceptionGenerated");
		
				throw exp;
			}
			
			cr.release();
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
		return retval;
		
	}
	
	private static void attachRequestCookies(ClientResource cr) throws Exception
	{
		Long timeStamp=new Date().getTime();
		
	   Cookie md5Cookie=new Cookie("X-SecureToken", new String(DigestUtils.md5(EnvironmentUtil.getEnvironmentValue("aGoodTeamWorkAlwaysWins")+timeStamp.toString())));
	   Cookie timeCookie=new Cookie("X-Timestamp", timeStamp.toString());
	   cr.getRequest().getCookies().add(md5Cookie);
	   cr.getRequest().getCookies().add(timeCookie);
	}

}
