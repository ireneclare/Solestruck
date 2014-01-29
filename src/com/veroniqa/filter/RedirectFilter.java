package com.veroniqa.filter;

import java.io.IOException;
import java.util.Enumeration;
import java.util.logging.Logger;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.jsoup.Jsoup;
import org.jsoup.safety.Whitelist;

import com.veroniqa.frontend.util.EnvironmentUtil;

/**
 * 
 * @author SHI
 *
 * This filter is meant for switching from appspot domain to our custom domain for the URLs other than
 * taskQueue,Cron Services and URLs using HTTPS scheme
 * 
 * Currently we have implemented the switching from our custom domain to appspot domain 
 * for the URLs using HTTPS in javascript level.
 */
public class RedirectFilter implements Filter {

	private static Logger log=Logger.getLogger(RedirectFilter.class.getSimpleName());
	private static String mainDomainURL="";
	@Override
	public void destroy() {
		// TODO Auto-generated method stub
	}

	@Override
	public void doFilter(ServletRequest req, ServletResponse res,
			FilterChain chain) throws IOException, ServletException {
		
		try{
			HttpServletRequest request=(HttpServletRequest)req;
			HttpServletResponse response=(HttpServletResponse)res;
			String appMode=EnvironmentUtil.getEnvironmentValue("AppMode");
			StringBuffer buf=new StringBuffer("");
			Enumeration emumeration=request.getParameterNames();
			if(emumeration.hasMoreElements())
				buf.append("&");
			while(emumeration.hasMoreElements()){
				String name=(String)emumeration.nextElement();
				buf.append(name+"="+request.getParameter(name));
				if(emumeration.hasMoreElements())
					buf.append("&");
			}
			String absoluteURL=request.getRequestURL().toString();
			String currentPath=request.getRequestURI();
			String schema=req.getScheme();
			String s=currentPath+buf.toString();
			if(!Jsoup.isValid(s,new Whitelist()))
			{
				response.sendRedirect(Jsoup.clean(s, new Whitelist()).replace("&amp;", "&"));
				return;
			}
			log.info("absoluteURL:"+absoluteURL+" and currentPath "+currentPath+" and schema "+schema);
			if("LIVE".equals(appMode)||"STAGING".equals(appMode)){						
				if(absoluteURL.indexOf("taskQueue")<0 && absoluteURL.indexOf("appspot.com")>=0 && 
						("http".equals(schema) || currentPath.indexOf("showThankyou")>=0)&&currentPath.indexOf("CronService")<0)
						//&& currentPath.indexOf("showThankyou")<0)
				{
					/*
					String orderId=VeroniqaCookieUtil.getCookieValue(request, VeroniqaConstants.ORDER_ID);
					if(orderId==null||orderId.trim().equals("")){
						buf.append("deleteCookie="+VeroniqaConstants.ORDER_ID);
					}
					*/
					if("/".equals(currentPath))
						currentPath="";
					String redirectURL=mainDomainURL+currentPath;
					if(!"".equals(buf.toString()))
						redirectURL=redirectURL+"?"+buf.toString();
					if(absoluteURL.contains("appspot.com"))
					{
						//log.info("*************** >>>>>>>>>> Setting response Status(301) absoluteURL >>>>>>>>>>>>>> ****************** :"+absoluteURL);
						response.setStatus(HttpServletResponse.SC_MOVED_PERMANENTLY);
						response.setHeader( "Location", redirectURL);
					}
					else
						response.sendRedirect(redirectURL);
				}
				else
					chain.doFilter(req,res);
			}
			/*
			else if("STAGING".equals(appMode)){
				if("https".equals(schema) && currentPath.indexOf("showThankyou")>=0){
					String redirectURL = String.format("%s://%s%s","http",  req.getServerName(),currentPath);
					response.sendRedirect(redirectURL);
				}
				else
					chain.doFilter(req,res);
			}*/
			else
				chain.doFilter(req,res);		}
		catch(Exception e){
			log.warning("Exception in doFilter of RedirectFilter:"+e);
		}
	}

	@Override
	public void init(FilterConfig config) throws ServletException {
		try{
			String appMode=EnvironmentUtil.getEnvironmentValue("AppMode");
			String paramName=appMode+"_Domain";
			mainDomainURL=config.getInitParameter(paramName)==null?"":config.getInitParameter(paramName);
			log.info("mainDomainURL:"+mainDomainURL);

		}
		catch(Exception e){
			log.warning("Exception in init:"+e);
		}
	}
	
		
 /* private static String getAppspotURL(boolean secure)
	{
		String URL="";
		try{
			String applicationId = EnvironmentUtil.getEnvironmentValue("com.google.appengine.application.id");
		   // String version = EnvironmentUtil.getEnvironmentValue("com.google.appengine.application.version");
		    //URL = "http://"+version+"."+applicationId+".appspot.com/";
			if(secure)
				URL = "https://"+applicationId+".appspot.com/";
			else
				URL = "http://"+applicationId+".appspot.com/";
		    log.info("The constructed URL is :::"+URL);
		}
		catch(Exception e){
			log.warning("Exception in getAppspotURL "+e);
		}
		return URL;
	}*/
	 
}
