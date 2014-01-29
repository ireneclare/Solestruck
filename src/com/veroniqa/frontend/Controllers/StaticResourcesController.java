package com.veroniqa.frontend.Controllers;

import java.net.URL;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.io.IOUtils;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import com.google.appengine.api.datastore.Blob;
import com.veroniqa.frontend.jdo.StaticResources;
import com.veroniqa.frontend.jdo.StaticResources1;
import com.veroniqa.frontend.service.StaticResources1BusinessService;
import com.veroniqa.frontend.service.StaticResourcesBusinessService;
import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.VeroniqaConstants;
import com.veroniqa.frontend.util.VeroniqaUtil;

@Controller
public class StaticResourcesController {
	
	private static final Logger log=Logger.getLogger(StaticResourcesController.class.getSimpleName());
	
	@RequestMapping(value="/{type}/{fileName}/{version}/getStatic.htm")
	public void getStatic(@PathVariable("type")String type,@PathVariable("fileName")String file,HttpServletRequest request,HttpServletResponse response) throws Exception
	{
		StaticResourcesBusinessService sbs=new StaticResourcesBusinessService();
		StaticResources1BusinessService sbs1=new StaticResources1BusinessService();
		if(!EnvironmentUtil.getEnvironmentValue("AppMode").equals("DEV"))
		{
			if(VeroniqaConstants.appVersion==1)
			
			{
				if(type.equals("style"))
				{
					if(request.getHeader("Accept-Encoding")!=null){
									if(request.getHeader("Accept-Encoding").indexOf("gzip")!=-1 || request.getHeader("Accept-Encoding").indexOf("deflate")!=-1)
									{
										StaticResources1 b=null;
										byte[] content=null;
										try
										{
											b=sbs1.get(file+".gz");
											//ArrayList params=new ArrayList();
											//params.add(file+".gz");
											//b=(StaticResources1)RestClientUtil.callService(params, "get", "StaticResources1BusinessService");
											content=b.getBlobValue().getBytes();
											response.addHeader("Cache-Control", "max-age=604800, private");
											
											//response.addHeader("ETag", b.getEtag());
											response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(b.getLastModified()));
										}
										catch(Exception ex)
										{
											content=VeroniqaUtil.getStaticURLAsString("/css/"+file+".gz");
											StaticResources1 s=new StaticResources1();
											//String etag=RandomStringUtils.random(20);
											//s.setEtag(etag);
											//response.addHeader("ETag", etag);
											s.setName(file+".gz");
											s.setBlobValue(new Blob(content));
											s.setLastModified(new Date());
											sbs1.createLookup(s);
											//ArrayList params=new ArrayList();
											//params.add(s);
											//RestClientUtil.callService(params, "createLookup", "StaticResources1BusinessService");
											response.addHeader("Cache-Control", "max-age=0, private");
											
											response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(s.getLastModified()));
										}
										
										
										
										
										response.setContentType("text/css");
										response.addHeader("Content-Encoding", "gzip");
										response.addHeader("Vary", "Accept-Encoding");
										//response.addHeader("Cache-Control", "max-age=43200, public");
										response.addHeader("Content-Length",""+content.length);
										response.getOutputStream().write(content);
										response.getOutputStream().flush();
									}
									else
									{
										StaticResources1 b=null;
										byte[] content=null;
										try
										{
											b=sbs1.get(file);
											//ArrayList params=new ArrayList();
											//params.add(file);
											//b=(StaticResources1)RestClientUtil.callService(params, "get", "StaticResources1BusinessService");
											content=b.getBlobValue().getBytes();
											
											//response.addHeader("ETag", b.getEtag());
											response.addHeader("Cache-Control", "max-age=604800, private");
											response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(b.getLastModified()));
										}
										catch(Exception ex)
										{
											content=VeroniqaUtil.getStaticURLAsString("/css/"+file);
											response.addHeader("Cache-Control", "max-age=0, public");
											StaticResources1 s=new StaticResources1();
											//String etag=RandomStringUtils.random(20);
											//s.setEtag(etag);
											//response.addHeader("ETag", etag);
											s.setName(file);
											s.setBlobValue(new Blob(content));
											s.setLastModified(new Date());
											sbs1.createLookup(s);
											
											//ArrayList params=new ArrayList();
											//params.add(s);
											//RestClientUtil.callService(params, "createLookup", "StaticResources1BusinessService");
											response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(b.getLastModified()));
										}
										response.setContentType("text/css");
										response.addHeader("Vary", "Accept-Encoding");
										//response.addHeader("Cache-Control", "max-age=43200, public");
										response.addHeader("Content-Length",""+content.length);
										response.getOutputStream().write(content);
										response.getOutputStream().flush();
									}
							}	
							else
							{
								StaticResources1 b=null;
								byte[] content=null;
								try
								{
									b=sbs1.get(file);
									//ArrayList params=new ArrayList();
									//params.add(file);
									//b=(StaticResources1)RestClientUtil.callService(params, "get", "StaticResources1BusinessService");
									content=b.getBlobValue().getBytes();
									
									//response.addHeader("ETag", b.getEtag());
									response.addHeader("Cache-Control", "max-age=604800, public");
									response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(b.getLastModified()));
								}
								catch(Exception ex)
								{
									content=VeroniqaUtil.getStaticURLAsString("/css/"+file);
									response.addHeader("Cache-Control", "max-age=0, public");
									StaticResources1 s=new StaticResources1();
									//String etag=RandomStringUtils.random(20);
									//s.setEtag(etag);
									//response.addHeader("ETag", etag);
									s.setName(file);
									s.setBlobValue(new Blob(content));
									s.setLastModified(new Date());
									response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(s.getLastModified()));
									sbs1.createLookup(s);
									//ArrayList params=new ArrayList();
									//params.add(s);
									//RestClientUtil.callService(params, "createLookup", "StaticResources1BusinessService");
								}
								response.setContentType("text/css");
								response.addHeader("Vary", "Accept-Encoding");
								//response.addHeader("Cache-Control", "max-age=43200, public");
								response.addHeader("Content-Length",""+content.length);
								response.getOutputStream().write(content);
								response.getOutputStream().flush();
							}
							
						}
						else if(type.equals("script"))
						{
							if(request.getHeader("Accept-Encoding")!=null){
									if(request.getHeader("Accept-Encoding").indexOf("gzip")!=-1 || request.getHeader("Accept-Encoding").indexOf("deflate")!=-1)
									{
										StaticResources1 b=null;
										byte[] content=null;
										try
										{
											b=sbs1.get(file+".gz");
											//ArrayList params=new ArrayList();
											//params.add(file+".gz");
											//b=(StaticResources1)RestClientUtil.callService(params, "get", "StaticResources1BusinessService");
											content=b.getBlobValue().getBytes();
											
											//response.addHeader("ETag", b.getEtag());
											response.addHeader("Cache-Control", "max-age=604800, public");
											response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(b.getLastModified()));
										}
										catch(Exception ex)
										{
											content=VeroniqaUtil.getStaticURLAsString("/js/"+file+".gz");
											response.addHeader("Cache-Control", "max-age=0, public");
											StaticResources1 s=new StaticResources1();
											//String etag=RandomStringUtils.random(20);
											//s.setEtag(etag);
											//response.addHeader("ETag", etag);
											s.setName(file+".gz");
											s.setBlobValue(new Blob(content));
											s.setLastModified(new Date());
											sbs1.createLookup(s);
											//ArrayList params=new ArrayList();
											//params.add(s);
											//RestClientUtil.callService(params, "createLookup", "StaticResources1BusinessService");
											response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(s.getLastModified()));
										}
										response.setContentType("text/javascript");
										response.addHeader("Vary", "Accept-Encoding");
										//response.addHeader("Cache-Control", "max-age=43200, public");
										response.addHeader("Content-Encoding", "gzip");
										response.addHeader("Content-Length",""+content.length);
										response.getOutputStream().write(content);
										response.getOutputStream().flush();
									}
									else
									{
										StaticResources1 b=null;
										byte[] content=null;
										try
										{
											b=sbs1.get(file);
											///ArrayList params=new ArrayList();
											//params.add(file);
											//b=(StaticResources1)RestClientUtil.callService(params, "get", "StaticResources1BusinessService");
											content=b.getBlobValue().getBytes();
											
											//response.addHeader("ETag", b.getEtag());
											response.addHeader("Cache-Control", "max-age=604800, public");
											response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(b.getLastModified()));
										}
										catch(Exception ex)
										{
											content=VeroniqaUtil.getStaticURLAsString("/js/"+file);
											response.addHeader("Cache-Control", "max-age=0, public");
											StaticResources1 s=new StaticResources1();
											//String etag=RandomStringUtils.random(20);
											//s.setEtag(etag);
											//response.addHeader("ETag", etag);
											s.setName(file);
											s.setBlobValue(new Blob(content));
											s.setLastModified(new Date());
											sbs1.createLookup(s);
											//ArrayList params=new ArrayList();
											//params.add(s);
											//RestClientUtil.callService(params, "createLookup", "StaticResources1BusinessService");
											response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(s.getLastModified()));
										}
										response.setContentType("text/javascript");
										//response.addHeader("Cache-Control", "max-age=43200, public");
										response.addHeader("Vary", "Accept-Encoding");
										response.addHeader("Content-Length",""+content.length);
										response.getOutputStream().write(content);
										response.getOutputStream().flush();
									}
								}
								else
								{
									StaticResources1 b=null;
									byte[] content=null;
									try
									{
										b=sbs1.get(file);
										//ArrayList params=new ArrayList();
										//params.add(file);
										//b=(StaticResources1)RestClientUtil.callService(params, "get", "StaticResources1BusinessService");
										content=b.getBlobValue().getBytes();
										
										//response.addHeader("ETag", b.getEtag());
										response.addHeader("Cache-Control", "max-age=604800, public");
										response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(b.getLastModified()));
									}
									catch(Exception ex)
									{
										content=VeroniqaUtil.getStaticURLAsString("/js/"+file);
										response.addHeader("Cache-Control", "max-age=0, public");
										StaticResources1 s=new StaticResources1();
										//String etag=RandomStringUtils.random(20);
										//s.setEtag(etag);
										//response.addHeader("ETag", etag);
										s.setName(file);
										s.setBlobValue(new Blob(content));
										s.setLastModified(new Date());
										sbs1.createLookup(s);
										//ArrayList params=new ArrayList();
										//params.add(s);
										//RestClientUtil.callService(params, "createLookup", "StaticResources1BusinessService");
										response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(s.getLastModified()));
									}
									response.setContentType("text/javascript");
									response.addHeader("Vary", "Accept-Encoding");
									//response.addHeader("Cache-Control", "max-age=43200, public");
									response.addHeader("Content-Length",""+content.length);
									response.getOutputStream().write(content);
									response.getOutputStream().flush();
								}
						}
			}
			else
			{
				if(type.equals("style"))
				{
					if(request.getHeader("Accept-Encoding")!=null){
									if(request.getHeader("Accept-Encoding").indexOf("gzip")!=-1 || request.getHeader("Accept-Encoding").indexOf("deflate")!=-1)
									{
										StaticResources b=null;
										byte[] content=null;
										try
										{
											b=sbs.get(file+".gz");
											//ArrayList params=new ArrayList();
											//params.add(file+".gz");
											//b=(StaticResources)RestClientUtil.callService(params, "get", "StaticResourcesBusinessService");
											content=b.getBlobValue().getBytes();
											response.addHeader("Cache-Control", "max-age=604800, private");
											
											//response.addHeader("ETag", b.getEtag());
											response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(b.getLastModified()));
										}
										catch(Exception ex)
										{
											content=VeroniqaUtil.getStaticURLAsString("/css/"+file+".gz");
											StaticResources s=new StaticResources();
											//String etag=RandomStringUtils.random(20);
											//s.setEtag(etag);
											//response.addHeader("ETag", etag);
											s.setName(file+".gz");
											s.setBlobValue(new Blob(content));
											s.setLastModified(new Date());
											sbs.createLookup(s);
											//ArrayList params=new ArrayList();
											//params.add(s);
											//RestClientUtil.callService(params, "createLookup", "StaticResourcesBusinessService");
											response.addHeader("Cache-Control", "max-age=0, private");
											
											response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(s.getLastModified()));
										}
										
										
										
										
										response.setContentType("text/css");
										response.addHeader("Content-Encoding", "gzip");
										response.addHeader("Vary", "Accept-Encoding");
										//response.addHeader("Cache-Control", "max-age=43200, public");
										response.addHeader("Content-Length",""+content.length);
										response.getOutputStream().write(content);
										response.getOutputStream().flush();
									}
									else
									{
										StaticResources b=null;
										byte[] content=null;
										try
										{
											b=sbs.get(file);
											//ArrayList params=new ArrayList();
											//params.add(file);
											//b=(StaticResources)RestClientUtil.callService(params, "get", "StaticResourcesBusinessService");
											content=b.getBlobValue().getBytes();
											
											//response.addHeader("ETag", b.getEtag());
											response.addHeader("Cache-Control", "max-age=604800, private");
											response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(b.getLastModified()));
										}
										catch(Exception ex)
										{
											content=VeroniqaUtil.getStaticURLAsString("/css/"+file);
											response.addHeader("Cache-Control", "max-age=0, public");
											StaticResources s=new StaticResources();
											//String etag=RandomStringUtils.random(20);
											//s.setEtag(etag);
											//response.addHeader("ETag", etag);
											s.setName(file);
											s.setBlobValue(new Blob(content));
											s.setLastModified(new Date());
											sbs.createLookup(s);
											
											//ArrayList params=new ArrayList();
											//params.add(s);
											//RestClientUtil.callService(params, "createLookup", "StaticResourcesBusinessService");
											response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(b.getLastModified()));
										}
										response.setContentType("text/css");
										response.addHeader("Vary", "Accept-Encoding");
										//response.addHeader("Cache-Control", "max-age=43200, public");
										response.addHeader("Content-Length",""+content.length);
										response.getOutputStream().write(content);
										response.getOutputStream().flush();
									}
							}	
							else
							{
								StaticResources b=null;
								byte[] content=null;
								try
								{
									b=sbs.get(file);
									//ArrayList params=new ArrayList();
									//params.add(file);
									//b=(StaticResources)RestClientUtil.callService(params, "get", "StaticResourcesBusinessService");
									content=b.getBlobValue().getBytes();
									
									//response.addHeader("ETag", b.getEtag());
									response.addHeader("Cache-Control", "max-age=604800, public");
									response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(b.getLastModified()));
								}
								catch(Exception ex)
								{
									content=VeroniqaUtil.getStaticURLAsString("/css/"+file);
									response.addHeader("Cache-Control", "max-age=0, public");
									StaticResources s=new StaticResources();
									//String etag=RandomStringUtils.random(20);
									//s.setEtag(etag);
									//response.addHeader("ETag", etag);
									s.setName(file);
									s.setBlobValue(new Blob(content));
									s.setLastModified(new Date());
									response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(s.getLastModified()));
									sbs.createLookup(s);
									//ArrayList params=new ArrayList();
									//params.add(s);
									//RestClientUtil.callService(params, "createLookup", "StaticResourcesBusinessService");
								}
								response.setContentType("text/css");
								response.addHeader("Vary", "Accept-Encoding");
								//response.addHeader("Cache-Control", "max-age=43200, public");
								response.addHeader("Content-Length",""+content.length);
								response.getOutputStream().write(content);
								response.getOutputStream().flush();
							}
							
						}
						else if(type.equals("script"))
						{
							if(request.getHeader("Accept-Encoding")!=null){
									if(request.getHeader("Accept-Encoding").indexOf("gzip")!=-1 || request.getHeader("Accept-Encoding").indexOf("deflate")!=-1)
									{
										StaticResources b=null;
										byte[] content=null;
										try
										{
											b=sbs.get(file+".gz");
											//ArrayList params=new ArrayList();
											//params.add(file+".gz");
											//b=(StaticResources)RestClientUtil.callService(params, "get", "StaticResourcesBusinessService");
											content=b.getBlobValue().getBytes();
											
											//response.addHeader("ETag", b.getEtag());
											response.addHeader("Cache-Control", "max-age=604800, public");
											response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(b.getLastModified()));
										}
										catch(Exception ex)
										{
											content=VeroniqaUtil.getStaticURLAsString("/js/"+file+".gz");
											response.addHeader("Cache-Control", "max-age=0, public");
											StaticResources s=new StaticResources();
											//String etag=RandomStringUtils.random(20);
											//s.setEtag(etag);
											//response.addHeader("ETag", etag);
											s.setName(file+".gz");
											s.setBlobValue(new Blob(content));
											s.setLastModified(new Date());
											sbs.createLookup(s);
											//ArrayList params=new ArrayList();
											//params.add(s);
											//RestClientUtil.callService(params, "createLookup", "StaticResourcesBusinessService");
											response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(s.getLastModified()));
										}
										response.setContentType("text/javascript");
										response.addHeader("Vary", "Accept-Encoding");
										//response.addHeader("Cache-Control", "max-age=43200, public");
										response.addHeader("Content-Encoding", "gzip");
										response.addHeader("Content-Length",""+content.length);
										response.getOutputStream().write(content);
										response.getOutputStream().flush();
									}
									else
									{
										StaticResources b=null;
										byte[] content=null;
										try
										{
											b=sbs.get(file);
											///ArrayList params=new ArrayList();
											//params.add(file);
											//b=(StaticResources)RestClientUtil.callService(params, "get", "StaticResourcesBusinessService");
											content=b.getBlobValue().getBytes();
											
											//response.addHeader("ETag", b.getEtag());
											response.addHeader("Cache-Control", "max-age=604800, public");
											response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(b.getLastModified()));
										}
										catch(Exception ex)
										{
											content=VeroniqaUtil.getStaticURLAsString("/js/"+file);
											response.addHeader("Cache-Control", "max-age=0, public");
											StaticResources s=new StaticResources();
											//String etag=RandomStringUtils.random(20);
											//s.setEtag(etag);
											//response.addHeader("ETag", etag);
											s.setName(file);
											s.setBlobValue(new Blob(content));
											s.setLastModified(new Date());
											sbs.createLookup(s);
											//ArrayList params=new ArrayList();
											//params.add(s);
											//RestClientUtil.callService(params, "createLookup", "StaticResourcesBusinessService");
											response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(s.getLastModified()));
										}
										response.setContentType("text/javascript");
										//response.addHeader("Cache-Control", "max-age=43200, public");
										response.addHeader("Vary", "Accept-Encoding");
										response.addHeader("Content-Length",""+content.length);
										response.getOutputStream().write(content);
										response.getOutputStream().flush();
									}
								}
								else
								{
									StaticResources b=null;
									byte[] content=null;
									try
									{
										b=sbs.get(file);
										//ArrayList params=new ArrayList();
										//params.add(file);
										//b=(StaticResources)RestClientUtil.callService(params, "get", "StaticResourcesBusinessService");
										content=b.getBlobValue().getBytes();
										
										//response.addHeader("ETag", b.getEtag());
										response.addHeader("Cache-Control", "max-age=604800, public");
										response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(b.getLastModified()));
									}
									catch(Exception ex)
									{
										content=VeroniqaUtil.getStaticURLAsString("/js/"+file);
										response.addHeader("Cache-Control", "max-age=0, public");
										StaticResources s=new StaticResources();
										//String etag=RandomStringUtils.random(20);
										//s.setEtag(etag);
										//response.addHeader("ETag", etag);
										s.setName(file);
										s.setBlobValue(new Blob(content));
										s.setLastModified(new Date());
										sbs.createLookup(s);
										//ArrayList params=new ArrayList();
										//params.add(s);
										//RestClientUtil.callService(params, "createLookup", "StaticResourcesBusinessService");
										response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(s.getLastModified()));
									}
									response.setContentType("text/javascript");
									response.addHeader("Vary", "Accept-Encoding");
									//response.addHeader("Cache-Control", "max-age=43200, public");
									response.addHeader("Content-Length",""+content.length);
									response.getOutputStream().write(content);
									response.getOutputStream().flush();
								}
						}
			}
			
		
		}
		else
		{
			log.info("==========this is from DEV JS CSS============");
					if(type.equals("style"))
					{
						
							
								byte content[]=VeroniqaUtil.getStaticURLAsString("/css/"+file);
								//response.addHeader("Cache-Control", "max-age=0, public");
								//StaticResources s=new StaticResources();
								//s.setName(file);
								//s.setBlobValue(new Blob(content));
								//sbs.createLookup(s);
								
							//response.addHeader("ETag", RandomStringUtils.random(20));
							response.setContentType("text/css");
							response.addHeader("Vary", "Accept-Encoding");
							response.addHeader("Cache-Control", "max-age=604800, public");
							response.addHeader("Content-Length",""+content.length);
							response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(new Date()));
							response.getOutputStream().write(content);
							response.getOutputStream().flush();
						
						
					}
					else if(type.equals("script"))
					{
						
							StaticResources b=null;
							byte[] content=null;
							
								content=VeroniqaUtil.getStaticURLAsString("/js/"+file);
								//response.addHeader("Cache-Control", "max-age=0, public");
								//StaticResources s=new StaticResources();
								//s.setName(file);
								//s.setBlobValue(new Blob(content));
								//sbs.createLookup(s);
							//response.addHeader("ETag", RandomStringUtils.random(20));
							response.setContentType("text/javascript");
							response.addHeader("Cache-Control", "max-age=604800, public");
							response.addHeader("Vary", "Accept-Encoding");
							response.addHeader("Last-Modified", new SimpleDateFormat("EEE, d MMM yyyy HH:mm:ss Z").format(new Date()));
							response.addHeader("Content-Length",""+content.length);
							response.getOutputStream().write(content);
							response.getOutputStream().flush();
						
					}
		}
		
	}
	
	
	
	
	@RequestMapping(value="/getImageFomURL.htm",method=RequestMethod.GET)
	public void getImageFomURL(@RequestParam("url") String url,@RequestParam("params") String params,@RequestParam("l") String l, @RequestParam("t") String t, @RequestParam("r") String r, @RequestParam("b") String b,HttpServletRequest req,HttpServletResponse res) throws Exception
	{
		
		
//		log.info(url+"?"+params.replaceAll("_", "&"));
//		if(req.getHeader("User-Agent").toLowerCase().indexOf("msie")!=-1)
//		{
//			log.info("browser is msie");
//			byte content[]=VeroniqaUtil.convertToPngBarcode(IOUtils.toString(new URL(url+"?"+params.replaceAll("_", "&")).openStream()),l,t,r,b);
//			res.setContentType("image/png");
//			res.setContentLength(content.length);
//			res.getOutputStream().write(content);
//			res.getOutputStream().flush();
//		
//		}
//		else
//		{
			log.info("browser not msie");
			byte content[]=IOUtils.toByteArray(new URL(url+"?"+params.replaceAll("_", "&")).openStream());
			res.setContentType("image/svg+xml");
			res.setContentLength(content.length);
			res.getOutputStream().write(content);
			res.getOutputStream().flush();
		//}
		
	}
	
	
	/*@RequestMapping(value="/getImageFromHTML.htm",method=RequestMethod.GET)
	public void getImageFromURL(@RequestParam("url") String url,@RequestParam(value="parameters", required = false) String[] params,HttpServletRequest req,HttpServletResponse res) throws Exception
	{
		
		
		
		
			if(params!=null && params.length>0)
			{
				StringBuilder strBuf=new StringBuilder();
				strBuf.append(url+"?");
				for(String s: params)
				{
					 String temp[]=s.split("_");
					strBuf.append(temp[0]+"="+temp[1]+"&");
				}
				
				log.info("url is :"+strBuf.toString());
				byte content[]=VeroniqaUtil.convertToPngFromHTML(IOUtils.toByteArray(new URL(strBuf.toString()).openStream()));
				res.setContentType("image/png");
				res.setContentLength(content.length);
				res.getOutputStream().write(content);
				res.getOutputStream().flush();
			}
			else
			{
				byte content[]=VeroniqaUtil.convertToPngFromHTML(IOUtils.toByteArray(new URL(url).openStream()));
				res.setContentType("image/png");
				res.setContentLength(content.length);
				res.getOutputStream().write(content);
				res.getOutputStream().flush();
			}
				
			
		
		
		
	}*/
	
	
	
}
