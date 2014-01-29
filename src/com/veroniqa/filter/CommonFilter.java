package com.veroniqa.filter;
	
import java.io.IOException;
import java.util.logging.Logger;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class CommonFilter implements Filter {
	
	private Logger log=Logger.getLogger(CommonFilter.class.getSimpleName());
	
	public void destroy() {
		// TODO Auto-generated method stub
		
	}

	public void doFilter(ServletRequest arg0, ServletResponse arg1,FilterChain arg2) throws IOException, ServletException {
		
		log.info("This is the common filter doFilter method  ");
		
		try {
				HttpServletRequest request   = (HttpServletRequest)arg0;
				HttpServletResponse response = (HttpServletResponse)arg1;
				String requrl				 = request.getRequestURL().toString();
				
				log.info("this is from filter :"+requrl);
				if(!requrl.endsWith("stats")&&!requrl.endsWith("warmup") && !requrl.endsWith("CronService")&&!requrl.endsWith("gensvg")&&!requrl.endsWith(".htm")&&!requrl.endsWith(".txt")&&!requrl.endsWith("/")&&!requrl.contains("_ah") && !requrl.contains("sitemap.xml") && !requrl.contains("gss.xsl") && !requrl.contains("html") &&!requrl.contains(".htm") && !requrl.contains("solestrucksearch.do"))
				{
					log.info("**************this is from filter  IF *******************:");
					response.sendRedirect(request.getRequestURL()+"/");
					//changed
					response.addHeader("X-FRAME-OPTIONS", "SAMEORIGIN");
				}
				else
				{
					log.info("**************this is from filter  ELSE *******************:");
					arg2.doFilter(arg0, arg1);
				}
			}
		catch (Exception e)
		{
			e.printStackTrace();
		}
		
	}

	public void init(FilterConfig arg0) throws ServletException {
		// TODO Auto-generated method stub
		
	}
	
	

}
