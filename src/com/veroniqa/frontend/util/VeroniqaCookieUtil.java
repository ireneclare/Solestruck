package com.veroniqa.frontend.util;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class VeroniqaCookieUtil {
	
	public static Cookie createNewCookie(HttpServletRequest req, HttpServletResponse res,String cookieName,String cookievalue,int maxage )
	{
			 Cookie[] cookies = req.getCookies();
			 if(cookies!=null)
			 {
		     for(int i = 0; i < cookies.length; i++) { 
		         if (cookies[i].getName().equals(cookieName)) 
		         {
		         	cookies[i].setMaxAge(-1);
		         }
		     }  
			 }
		     Cookie cookie1 =new Cookie(cookieName,cookievalue);
		     cookie1.setPath("/");
		     cookie1.setMaxAge(maxage);
		     res.addCookie(cookie1);
		     return cookie1;
		     
	}
	public static Cookie updateCookie(HttpServletRequest req,String cookieName,String newcookieValue,int maxage )
	{
			 Cookie[] cookies = req.getCookies();
			 Cookie tcookie=null;
			 if(cookies!=null)
			 {
		     for(int i = 0; i < cookies.length; i++) { 
		         if (cookies[i].getName().equals(cookieName)) 
		         {
		         	cookies[i].setValue(newcookieValue);
		         	cookies[i].setMaxAge(maxage);
		         	tcookie=cookies[i];
		         }
		     }  
			 }
		     return tcookie;
		     
	}
	public static void deleteCookie(HttpServletRequest req,String cookieName )
	{
			 Cookie[] cookies = req.getCookies();
			 if(cookies!=null)
			 {
			 for(int i = 0; i < cookies.length; i++) { 
		         if (cookies[i].getName().equals(cookieName)) 
		         {
		         	cookies[i].setMaxAge(-1);
		         }
		     }  
			 }
		     
		     
		     
	}
	public static void deleteCookie(HttpServletRequest req,HttpServletResponse res,String cookieName )
	{
			 Cookie[] cookies = req.getCookies();
			 if(cookies!=null)
			 {
			 for(int i = 0; i < cookies.length; i++) { 
		         if (cookies[i].getName().equals(cookieName)) 
		         {
		         	cookies[i].setMaxAge(0);
		         	res.addCookie(cookies[i]);
		         }
		     }  
			 }
	}
	public static Cookie getCookie(HttpServletRequest req,String cookieName )
	{
			 Cookie[] cookies = req.getCookies();
			 if(cookies!=null)
			 {
			 for(int i = 0; i < cookies.length; i++) { 
		         if (cookies[i].getName().equals(cookieName)) 
		         {
		         	return cookies[i];
		         }
		     }  
		     
			 }
		     return null;
		     
	}
	public static String getCookieValue(HttpServletRequest req,String cookieName )
	{
			 Cookie[] cookies = req.getCookies();
			 if(cookies!=null)
			 {
				 for(int i = 0; i < cookies.length; i++) { 
			         if (cookies[i].getName().equals(cookieName)) 
			         {
			         	return cookies[i].getValue();
			         }
			     }  
				 
			 }
			 
		     
		     
		     return null;
		     
	}


	public static Cookie createNewCookie(HttpServletRequest req, HttpServletResponse res,String domainName,String cookieName,String cookievalue,int maxage )
	{
		     Cookie cookie =new Cookie(cookieName,cookievalue);
		     cookie.setDomain(domainName);
		     cookie.setMaxAge(maxage);
		     cookie.setPath("/");
		     res.addCookie(cookie);
		     return cookie;
		     
	}
}
