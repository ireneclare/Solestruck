package com.veroniqa.frontend.Controllers;

import java.io.ByteArrayOutputStream;
import java.io.File;
import java.io.FileOutputStream;
import java.io.FileReader;
import java.io.IOException;
import java.io.StringReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.util.List;
import java.util.zip.GZIPOutputStream;

import org.apache.commons.io.IOUtils;
import org.apache.commons.lang.StringUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.MemcachedConstants;
import com.veroniqa.frontend.util.MemcachedUtil;

@Controller
public class PageCacheController {
	
	@RequestMapping(value="/cacheThePage.htm",method=RequestMethod.POST)
	public @ResponseBody String cacheThePage(@RequestParam("url")String url,@RequestParam("name")String name)
	{
		String content=(String)MemcachedUtil.get(name, MemcachedConstants.PAGE_CACHE);
		if(content==null)
		{
			try {
				content=IOUtils.toString(new URL(url));
				List<String> str=IOUtils.readLines(new StringReader(content));
				StringBuilder sb=new StringBuilder();
				for(String s:str)
				{
					sb.append(StringUtils.trim(s));
				}
				content=sb.toString();
				ByteArrayOutputStream bout=new ByteArrayOutputStream();
				GZIPOutputStream gout=new GZIPOutputStream(bout);
				gout.write(content.getBytes());
				gout.close();
				MemcachedUtil.setWithTime(name,content,MemcachedUtil.ONE_HOUR_SECONDS ,MemcachedConstants.PAGE_CACHE);
				MemcachedUtil.setWithTime(name+"_gzip",bout.toByteArray(),MemcachedUtil.ONE_HOUR_SECONDS ,MemcachedConstants.PAGE_CACHE);
			} catch (MalformedURLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		
		return "done";
		
	}
	
	@RequestMapping(value="/cacheTheHomePage.htm")
	public @ResponseBody String cacheTheHomePage() throws Exception
	{
		String name="HOMEPAGE";
		String url="http://www.solestruck.com/homePage.htm";
		String content=(String)MemcachedUtil.get(name, MemcachedConstants.PAGE_CACHE);
		if(content==null)
		{
			try {
				if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("DEV"))
				{
					url= "http://testing-solestruck.appspot.com/";
				}
				else if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("STAGING"))
				{
					
					url= "http://testing-solestruck.appspot.com/";
				}
				
				content=IOUtils.toString(new URL(url));
				List<String> str=IOUtils.readLines(new StringReader(content));
				StringBuilder sb=new StringBuilder();
				for(String s:str)
				{
					sb.append(StringUtils.trim(s));
				}
				content=sb.toString();
				ByteArrayOutputStream bout=new ByteArrayOutputStream();
				GZIPOutputStream gout=new GZIPOutputStream(bout);
				gout.write(content.getBytes());
				gout.close();
				MemcachedUtil.setWithTime(name,content,MemcachedUtil.ONE_HOUR_SECONDS*2 ,MemcachedConstants.PAGE_CACHE);
				MemcachedUtil.setWithTime(name+"_gzip",bout.toByteArray(),MemcachedUtil.ONE_HOUR_SECONDS*2 ,MemcachedConstants.PAGE_CACHE);
			} catch (MalformedURLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
			
		}
		
		return content;
		
	}

}
