package com.veroniqa.frontend.Controllers;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.HashMap;
import java.util.ResourceBundle;
import java.util.logging.Logger;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.veroniqa.frontend.jdo.TimerHandler;
import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.MemcachedConstants;
import com.veroniqa.frontend.util.MemcachedUtil;
import com.veroniqa.frontend.util.VeroniqaCookieUtil;

@Controller
public class CacheController {
	
	private static final Logger log=Logger.getLogger(CacheController.class.getSimpleName());
	@RequestMapping(value="/validateOauth2Response.htm")
	public ModelAndView validateOauth2Response(@RequestParam(value="code",required=false)String code,@RequestParam(value="pageuri",required=false)String pageuri,HttpServletRequest req,HttpServletResponse res)
	{
		//srinivas code for cache authorization.
		ModelAndView mv=null;
		String nameSpaceObject = null;
		String pagerespuri = null;
		if(pageuri != null && pageuri !="") 
        {
			System.out.println("inside if");
			Cookie cookie = VeroniqaCookieUtil.createNewCookie(req, res, "pagepathurl",pageuri ,365*24*60*60);
			res.addCookie(cookie);
        }
		
		try
		{		
			ResourceBundle rb=ResourceBundle.getBundle("oauth");
			String mode=EnvironmentUtil.getEnvironmentValue("AppMode").toLowerCase();
			String projectMode="SOLESTRUCK";
			String oauthurl;
			String clientid=rb.getString(mode+"_oauth_client_id");	
			String redirecturi=rb.getString(projectMode+"_"+mode+"_redirecturi");
			String versionString=req.getServerName().split("\\.")[0];
			Integer version=-1;
			/**
			 * This is to support appspot versions since Oauth2 requires the full URL of the application to return the token.
			 * To make oauth work in in non-default versions, add the full appspot uri in the oauth console : http://code.google.com/apis/console in the rediret uri block.
			 * The oauth console can be opened with Developer@solestruck.com account.
			 */
			try
				{version=Integer.parseInt(versionString);}
			catch(Exception e)
				{log.info("Not parseable");version=-1;}
			if(version!=-1)
				redirecturi=redirecturi.replace("http://", "http://"+version+".");
			String brandId=EnvironmentUtil.getEnvironmentValue("BrandId");
			String remoteHost = req.getServerName();
			String ip = req.getRemoteAddr();
			if(remoteHost.contains("localhost")){
				remoteHost = req.getServerName()+":"+req.getServerPort();
				if(mode.toLowerCase().equals("dev"))
					redirecturi=rb.getString("dev_"+req.getServerPort()+"_redirecturi");
				if(mode.toLowerCase().equals("staging"))
					redirecturi=rb.getString("staging_"+req.getServerPort()+"_redirecturi");
				if(mode.toLowerCase().equals("live"))
					redirecturi=rb.getString("live_"+req.getServerPort()+"_redirecturi");
			}else{
				remoteHost = req.getServerName();
			}
			log.info("code:"+code);
			if(code==null)
			{						
			oauthurl=rb.getString("oauthurl1");
			String redirectURL=oauthurl+"?scope=https://www.googleapis.com/auth/userinfo.email https://www.googleap" +
					"is.com/auth/userinfo.profile&redirect_uri="+redirecturi+"&response_type=code&client_id="+clientid;
			res.sendRedirect(redirectURL);
			}
			else
			{
			oauthurl=rb.getString("oauthurl2");
			String clientsecret=rb.getString(mode+"_oauth_client_secret");
			String paramstr="code="+code+"&client_id="+clientid+"&client_secret="+clientsecret+"&redirect_uri="+redirecturi+"&grant_type=authorization_code";
			HashMap tokenresultMap=getMapAsResponseByCallService(oauthurl, paramstr,"POST");
			if(tokenresultMap==null||tokenresultMap.containsKey("error"))
			{
				res.sendRedirect("/");
			}
			log.info("token result:"+tokenresultMap);
			String accesstoken=(String)tokenresultMap.get("access_token");
			String googleapiurl=rb.getString("googelapiurl");
			googleapiurl+="?access_token="+accesstoken;
			HashMap userInfoMap=getMapAsResponseByCallService(googleapiurl, paramstr, "GET");
			if(userInfoMap==null)
				res.sendRedirect("/");
			String email="";
			String fname="";
			String lname="";
			String uniquepin="";
			String serviceProvider="Google";
			String profileImage="";
			String googlePlusLink="";
			email=(String) userInfoMap.get("email");
			fname=(String) userInfoMap.get("given_name");
			lname=(String) userInfoMap.get("family_name");
			uniquepin=(String) userInfoMap.get("id");
			if(userInfoMap.get("picture")!=null)
				profileImage=(String) userInfoMap.get("picture");
			if(userInfoMap.get("link")!=null)
				googlePlusLink=(String) userInfoMap.get("link");
			log.info("user info result:"+userInfoMap);
			
			String pageuricookie = VeroniqaCookieUtil.getCookieValue(req, "pagepathurl");
			System.out.println("pageuricookie-->"+pageuricookie);
			// cookie created
			
			if(email.indexOf("@a-cti.com")!=-1 || email.indexOf("@solestruck.com")!=-1)
			{
				if( "clearAllFrontEndCache.htm".equals(pageuricookie))
		   		{
					VeroniqaCookieUtil.deleteCookie(req, "pageuricookie");
					
					MemcachedUtil.flushCache(MemcachedConstants.MENS_VENDOR_LIST);
					MemcachedUtil.flushCache(MemcachedConstants.WOMENS_VENDOR_LIST);
					MemcachedUtil.flushCache(MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
					MemcachedUtil.flushCache(MemcachedConstants.NEW_ARRIVALS);
					MemcachedUtil.flushCache(MemcachedConstants.SALE_ITEMS);
					MemcachedUtil.flushCache(MemcachedConstants.VINTAGE_ITEMS);
					MemcachedUtil.flushCache(MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
					MemcachedUtil.flushCache(MemcachedConstants.COMMON_JS_CSS);
					MemcachedUtil.flushCache(MemcachedConstants.PAGE_CACHE);
					//FAE
					MemcachedUtil.flushCache(MemcachedConstants.HOME_PAGE);
					//
					MemcachedUtil.flushCache(MemcachedConstants.LOOK_BOOK);
					MemcachedUtil.flushCache(MemcachedConstants.IDP_NAME_SPACE);
					MemcachedUtil.flushCache(MemcachedConstants.FINAL_SALE);
					
					//MemcachedUtil.flushCompleteCache();
					
					String msg = "Cache Cleared ...";
				    mv = new ModelAndView("clearAllFrontEndCache");
				    mv.addObject("msg",msg);
				    mv.addObject("urihistry", pageuricookie);
		   		}
				else if(pageuricookie.contains("nameSpace"))
		   		{
					nameSpaceObject = pageuricookie.split("=")[1];
					
					log.info("inside the clearPartialCache nameSpace is "+nameSpaceObject);
		    		MemcachedUtil.flushCache(nameSpaceObject);
		    		
		    		// nameSpace Cache Cleared
		    		VeroniqaCookieUtil.deleteCookie(req, "pageuricookie");
		    		String msg = "Cache Cleared ...";
		    		
				    mv = new ModelAndView("clearAllFrontEndCache");
				    mv.addObject("msg",msg);
				    mv.addObject("urihistry", pageuricookie);
		   		}
			}
			else
			   {
				   log.info("logging in from un authorized email id not allowed ");
				   String msg = "Logging in using unauthorized email id is not allowed, login either using solestruck or a-cti email ids";
				   mv = new ModelAndView("clearAllFrontEndCache");
				   mv.addObject("msg",msg);
				   mv.addObject("urihistry", pageuricookie);
			   }
			//need to handle failure cases
			
			}			
		}
		catch(Exception e)
		{
			for(StackTraceElement ele:e.getStackTrace())
				log.warning(ele.toString());
		}		
		return mv;
		
	}
	
	@RequestMapping(value="/clearAllFrontEndCache.htm")
	public @ResponseBody String clearAllCache(@RequestParam(value="code",required=false)String code,HttpServletRequest req,HttpServletResponse res)
	{
		MemcachedUtil.flushCache(MemcachedConstants.MENS_VENDOR_LIST);
		MemcachedUtil.flushCache(MemcachedConstants.WOMENS_VENDOR_LIST);
		MemcachedUtil.flushCache(MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
		MemcachedUtil.flushCache(MemcachedConstants.NEW_ARRIVALS);
		MemcachedUtil.flushCache(MemcachedConstants.SALE_ITEMS);
		MemcachedUtil.flushCache(MemcachedConstants.VINTAGE_ITEMS);
		MemcachedUtil.flushCache(MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
		MemcachedUtil.flushCache(MemcachedConstants.COMMON_JS_CSS);
		MemcachedUtil.flushCache(MemcachedConstants.PAGE_CACHE);
		//FAE
		MemcachedUtil.flushCache(MemcachedConstants.HOME_PAGE);
		//
		MemcachedUtil.flushCache(MemcachedConstants.LOOK_BOOK);
		MemcachedUtil.flushCache(MemcachedConstants.IDP_NAME_SPACE);
		MemcachedUtil.flushCache(MemcachedConstants.FINAL_SALE);
		//MemcachedUtil.flushCompleteCache();
		return "clearCache success";
	}
	private HashMap getMapAsResponseByCallService(String url,String paramstr,String method)
	{
		HashMap responseMap=null;
		try
		{
		   URL myurl = new URL(url);
	       HttpURLConnection connection = (HttpURLConnection) myurl.openConnection();
	       log.info("url connection set");
	       connection.setDoOutput(true);
	       connection.setRequestMethod(method);
	       connection.setConnectTimeout (300000); //300s = 5mins
	       connection.setReadTimeout (300000); //300s = 5mins
	      
	       if("POST".equals(method))
	       {
	    	   OutputStreamWriter writer = new OutputStreamWriter(connection.getOutputStream());
		       log.info("*******Parameter****"+paramstr);
		       try {
		    	   	writer.write(paramstr);
		       		} catch (IOException e1) {
		       			e1.printStackTrace();
		       }
		       try {
		    	   writer.close();
		       } catch (IOException e1) { 
		       e1.printStackTrace();
		       }
		       
	       }
	      
	       String responseString="";
	       if (connection.getResponseCode() == HttpURLConnection.HTTP_OK) 
	       {
		    	  String inputLine;
		    	  BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream(), "UTF-8"));
		    	  while ((inputLine = reader.readLine()) != null) {
		    		  responseString+=inputLine;
		    	   }
		    	  reader.close();
		    	   if(responseString.length() <= 0)
		    	   {
		    	   throw new Exception(responseString);
		    	   }
	    	  
	    	 }
	       else 
	    	 {
	    		 log.warning("exception :"+connection.getResponseCode()+"");
	    	     // Server returned HTTP error code.
	    	     throw new Exception(connection.getResponseCode()+"");
	    	 }
	       responseMap = new ObjectMapper().readValue(responseString, HashMap.class);
	       log.info("Response :"+responseString);
		}
		catch(Exception e)
		{
			responseMap=new HashMap();
			responseMap.put("exception",e.getMessage());
		}
		
		return responseMap;

	}
	
	@RequestMapping(value="/clearFrontEndCache.htm")
	public String clearPartialCache(@RequestParam("nameSpace")String nameSpace,HttpServletRequest req,HttpServletResponse res) throws IOException
	{
		log.info("inside the clearPartialCache nameSpace is "+nameSpace);
		MemcachedUtil.flushCache(nameSpace);
		return "clearCache";
	}
	
	/*@RequestMapping(value="/clearFrontEndCache.htm")
	public ModelAndView clearPartialCache(HttpServletRequest req,HttpServletResponse res)
	{
		ModelAndView mv=null;
		mv = new ModelAndView("clearAllFrontEndCache");
		return mv;
	}*/
	
	
	@RequestMapping(value="/clearCacheKey.htm")
	public String clearPartialCache(@RequestParam("nameSpace")String nameSpace,@RequestParam("key") String key)
	{
		MemcachedUtil.remove(key,nameSpace);
	
		return "clearCache";
	}
	
	@RequestMapping(value="/clearFrontEndCache_ListingPagesCronService.htm")
    public @ResponseBody String clearFrontEndCache_ListingPages(@RequestParam("nameSpace")String nameSpace,HttpServletRequest req)
    {
        MemcachedUtil.flushCache(nameSpace);
        log.info("clearFrontEndCache_ListingPages nameSpace"+nameSpace);
        return "clearCache";
    }
	@RequestMapping(value="/clearFrontEndCache_DSURSizeCronService.htm")
    public @ResponseBody String clearFrontEndCache_DSURSize(@RequestParam("nameSpace")String nameSpace,HttpServletRequest req)
    {
        MemcachedUtil.flushCache(nameSpace);
        log.info("clearFrontEndCache_DSURSize nameSpace"+nameSpace);
        return "clearCache";
    }
	@RequestMapping(value="/clearFinalSaleCache.htm")
	public @ResponseBody void clearFinalSaleCache()
	{
		log.info("Finalsale Cache cleared");
		MemcachedUtil.flushCache(MemcachedConstants.FINAL_SALE);
	}
	
	@RequestMapping(value="/clearPreTimerCache.htm")
	public @ResponseBody void clearPreTimerCache()
	{
		TimerHandlerController thc = new TimerHandlerController();
		log.info("Finalsale Cache cleared");
		TimerHandler th=(TimerHandler)MemcachedUtil.get("TimerHandler",MemcachedConstants.Timer_Handler);
		thc.deleteTimer(th.getKey());
		MemcachedUtil.flushCache(MemcachedConstants.Timer_Handler);
	}

	
	
	
	/*@RequestMapping("/clearAllFrontEndCache.htm")
	public ModelAndView clearAllCache(HttpServletRequest req,HttpServletResponse res)
	{
		ModelAndView mv=null;
		 mv = new ModelAndView("clearAllFrontEndCache");
		 return mv;
	}*/

}
