package com.veroniqa.frontend.Controllers;

import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.veroniqa.frontend.util.BusinessException;
import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.VeroniqaConstants;
import com.veroniqa.frontend.util.VeroniqaCookieUtil;
import com.veroniqa.jdo.Attribute;
import com.veroniqa.service.GlobalNavigationCommonService;


@Controller
public class VeroniqaURLController {
	private static Logger log=Logger.getLogger(VeroniqaURLController.class.getSimpleName());
	
	
	@RequestMapping(value = "/")
    public void homePage1(HttpServletRequest request,HttpServletResponse response) throws Exception {            
       
		log.info("This is the url hhhehheeheh"+request.getServerName());
		String brand=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		if(brand!=null && brand.length()>0)
		{
			RequestDispatcher rd = request.getRequestDispatcher("/homePage.htm?brandid="+brand);
			response.reset();
			rd.forward(request, response);
		}
     
    }
	
	@RequestMapping(value = "/setbrandId")
    public @ResponseBody String setBrandId(HttpServletRequest request,HttpServletResponse response) throws Exception {            
       
		/*String brandstr=VeroniqaCookieUtil.getCookieValue(request, VeroniqaConstants.BRAND_ID_KEY);
		Since we are getting brandid from environmental variable , there is no use of getting it from cookies.So it is commented
		if(brandstr==null)
		{
			
			String brand=EnvironmentUtil.getEnvironmentValue(request.getServerName());
			if(brand!=null && brand.length()>0)
			{
				VeroniqaCookieUtil.createNewCookie(request, response, "brandid", brand, 365*24*60*60);
			}
		}
		*/
		return "done";
     
    }
	
	@RequestMapping(value = "/index.jspx")
    public void homePage(HttpServletRequest request,HttpServletResponse response) throws Exception {            
       
		
		log.info("This is the url"+request.getServerName());
		String brand=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		if(brand!=null && brand.length()>0)
		{
			RequestDispatcher rd = request.getRequestDispatcher("/homePage.htm?brandid="+brand);
			response.reset();
			rd.forward(request, response);
		}
       
		
     
    }
	
	@RequestMapping(value = "/{categoryListingPage}/")
    public void categoryListingPage(@PathVariable("categoryListingPage") String categoryListingPath,HttpServletRequest request,HttpServletResponse response) throws Exception {            
       
		String pathName=categoryListingPath;
		String pathParts[]=categoryListingPath.split("-");
		String pathNameNoHyphen=pathName.replaceAll("-"," ");
		GlobalNavigationCommonService ancs=new GlobalNavigationCommonService();
		String redirectUrl="/";
		try
		{	
			
			
			
			if(pathName.equals(pathNameNoHyphen))
			{
				//this is a style or lookbok or newarrivals or shopping cart or wishlist or login or cs pages or checkout page or affiliates
				log.info("this is a style or lookbok or newarrivals or shopping cart or wishlist or login or cs pages or checkout page or affiliates or vintage");
			}			
			else if( pathParts.length>=2 & (pathParts[pathParts.length-1].equals("shoes") && pathParts[pathParts.length-2].equals("womens")))
			 {
				 //this is womens shoes
				 log.info("this is womens shoes");
				 String vendorName=pathNameNoHyphen.substring(0,pathNameNoHyphen.indexOf("womens shoes")).trim();
				 log.info("the vendor name is "+vendorName);
				 //get the vendor attribute and name then forward to category listing page
				 String brandId=VeroniqaCookieUtil.getCookieValue(request, VeroniqaConstants.BRAND_ID_KEY);
				 log.info(brandId);
				 if(brandId==null)
				 {
					 String brand=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
					 brandId=brand;			
					 log.info(brandId);
					 VeroniqaCookieUtil.createNewCookie(request, response, "brandid", brand, 365*24*60*60);
				 }
				 Attribute attr=ancs.getTheVendor(vendorName.toLowerCase(),Long.parseLong(brandId));
				 if(attr!=null)
				 {
					 redirectUrl="/getProductListForVendor.htm?attributeid="+attr.getKey().getId()+"&vendorName="+URLEncoder.encode(attr.getName(), "UTF-8");
				 }
			 }
			 
			else if(pathParts.length>=2 & ((pathParts[pathParts.length-1].equals("shoes") && pathParts[pathParts.length-2].equals("mens")) || pathParts[0].equals("mens")))
			 {
				 //this is mens shoes
				 log.info("this is mens shoes");
				 String vendorName=pathNameNoHyphen.substring(0,pathNameNoHyphen.indexOf("mens shoes")).trim();
				 log.info("the vendor name is "+vendorName);
				 
			 }
			 
			else if( pathParts.length>=2 & (pathParts[pathParts.length-1].equals("shoes") && pathParts[pathParts.length-2].equals("sale")))
			 {
				 //this is womens shoes
				 log.info("this is sale shoes");
				 
			 }
		 
		 
		}
		catch(Exception ex)
		{
			redirectUrl="/";
			throw new BusinessException("This is the exception from category listing page", ex.getStackTrace());
			
		}
		finally
		{
			log.info("This is the category listing page controller "+request.getServerName());
			log.info("this is the param "+categoryListingPath);
			RequestDispatcher rd = request.getRequestDispatcher(redirectUrl);
			response.reset();
			rd.forward(request, response);
		}
		
		
       
		
     
    }
	
	@RequestMapping(value = "/{itemDetailPage}/index.html")
    public void itemDetailPage(@PathVariable("itemDetailPage") String itemDetailPath,HttpServletRequest request,HttpServletResponse response) throws Exception {            
       
		String pathName=itemDetailPath;
		String pathParts[]=itemDetailPath.split("-");
		String pathNameNoHyphen=pathName.replaceAll("-"," ");
		String redirectUrl="/";
		GlobalNavigationCommonService ancs=new GlobalNavigationCommonService();
		
		try
		{	
			String productId=request.getParameter("productId").toString();
			String vendorName=request.getParameter("vendorName").toString();
			String colorId=request.getParameter("colorId").toString();
			
			if(productId!=null & vendorName!=null & colorId!=null){
				redirectUrl="/idp.htm?productId="+productId+"&colorId="+colorId+"&vendorName="+vendorName;
			}
			else
			{
				List<String> vendorSuggLst=new ArrayList<String>();
				vendorSuggLst.add(itemDetailPath.replaceAll("-"," "));
				String temp=itemDetailPath;
				while(temp.lastIndexOf("-")!=-1)
				{
					temp=temp.substring(0, temp.lastIndexOf("-"));
					vendorSuggLst.add(temp.replaceAll("-"," ").trim());
				}
				Attribute vendor=ancs.getTheVendor(vendorName,Long.parseLong(EnvironmentUtil.getEnvironmentValue(request.getServerName())));
				String tempProduct=pathName.replace(vendor.getName().replaceAll(" ","-"),"").trim();
			}
		 
		 
		}
		catch(Exception ex)
		{
			redirectUrl="/";
			throw new BusinessException("This is the exception from itemDetailPage", ex.getStackTrace());
			
		}
		finally
		{
			log.info("This is the category listing page controller "+request.getServerName());
			log.info("this is the param "+itemDetailPath);
			//return "this is item detail page";
			RequestDispatcher rd = request.getRequestDispatcher(redirectUrl);
			response.reset();
			rd.forward(request, response);
		}
		
       
		
     
    }
	
//	@RequestMapping(value = "/search/{searchPhrase}")
//    public void searchPage(@PathVariable("searchPhrase") String searchPhrase,HttpServletRequest request,HttpServletResponse response) throws Exception {            
//       
//		log.info("This is the url searchPage");
//		//String brand=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
//		//if(brand!=null && brand.length()>0)
//		//{
//			RequestDispatcher rd = request.getRequestDispatcher("/search.htm?q="+searchPhrase);
//			response.reset();
//			rd.forward(request, response);
//		//}
//     
//    }
	
//	@RequestMapping(value = "/search/{searchPhrase}/page/{pageNo}")
//    public void searchPageNo(@PathVariable("searchPhrase") String searchPhrase,@PathVariable("pageNo") String pageNo,HttpServletRequest request,HttpServletResponse response) throws Exception {            
//       
//		log.info("This is the url searchPage");
//		
//			RequestDispatcher rd = request.getRequestDispatcher("/search.htm?q="+searchPhrase);
//			response.reset();
//			rd.forward(request, response);
//		
//     
//    }
	
}
