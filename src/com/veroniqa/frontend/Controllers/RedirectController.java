package com.veroniqa.frontend.Controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.veroniqa.dto.FrontEndDTO;
import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.MemcachedConstants;
import com.veroniqa.frontend.util.MemcachedUtil;
import com.veroniqa.frontend.util.RestClientUtil;
import com.veroniqa.frontend.util.VeroniqaConstants;
import com.veroniqa.jdo.Attribute;
import com.veroniqa.jdo.IDPUrl;


@Controller
public class RedirectController {
	private static Logger log=Logger.getLogger(RedirectController.class.getSimpleName());
	
	
	@RequestMapping(value = "homeController.htm")
    public void homePage1(HttpServletRequest request,HttpServletResponse response) throws Exception {            
       
		String lTempURI = request.getRequestURI();
		log.info("******************************** lTempURI before modify= "+ lTempURI);
		String brand=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		
		/*if(brand!=null && brand.length()>0)
		{
			log.info("brandid avialable for brandurl -- "+ lTempURI+" is ------> "+brand);
			String redirectURL = "/homePage.htm?brandid="+brand;
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		
		else
		{
			String redirectURL = "/homePage.htm?brandid=1";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}*/
		
		String redirectURL = "/homePage.htm?brandid="+brand;
		log.info("redirectURL is ---- "+redirectURL);
		RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
		//response.reset();
		rd.forward(request, response);
		
     
    }
	
	@RequestMapping(value = "topNavigation1.htm")
    public void topNavigation1(@RequestParam("section")String section,@RequestParam(value="page",required=false)String pageStr,@RequestParam(value="size",required=false)String receivesize,HttpServletRequest request,HttpServletResponse response) throws Exception 
    {            
       log.info("section : "+section+":page:"+pageStr+":receivesize:"+receivesize);
       
		String lTempURI = request.getRequestURI();
		log.info("******************************** lTempURI before modify= "+ lTempURI);
		log.info("category is ------> "+section);
		String[] temp = {};
		String reqSize = "";
		String brandstr="";
		
		if(section.equals("abandonmentMailCart"))
		{
			log.info("************** abandonment cart *************");
			String redirectURL = "/abandonmentMailService.htm?type=cart&interval=3";
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		
		else if(section.contains("abandonmentMailWishlist"))
		{
			log.info("*************** ----ProductsForEventsCategory  ****************"+pageStr);
			String redirectURL ="/abandonmentMailService.htm?type=wishlist&interval=14";
			log.info("ProductsForEventsCategory redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		
		else if(section.equals("wishlist"))
		{
			String redirectURL = "/getWishList.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		
		else if(section.equals("search-womens-shoes"))
		{
			String redirectURL = "/getProductsForCategory.htm?category=women";
			log.info("redirectURL is ---- "+redirectURL);
			request.setAttribute("sortPage", section);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equals("search-womens-styles"))
		{
			String redirectURL = "/getProductsForCategory.htm?category=women";
			log.info("redirectURL is ---- "+redirectURL);
			request.setAttribute("sortPage", section);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equals("mens"))
		{
			request.setAttribute("sortPage", section);
			String redirectURL = "/getProductsForCategory.htm?category=men";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equals("new-arrivals"))
		{
			String SocialCategory=null;
			if(section.contains("women"))
			{
				SocialCategory="women";
			}
			else if(section.contains("men"))
			{
				SocialCategory="men";
			}
			String redirectURL = "/getNewArrivalProduct.htm?SocialCategory="+SocialCategory;
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equalsIgnoreCase("new-arrivals-womens-shoes") || section.equalsIgnoreCase("new-arrivals-mens-shoes"))
		{
			String SocialCategory=null;
			if(section.contains("women"))
			{
				SocialCategory="women";
			}
			else if(section.contains("men"))
			{
				SocialCategory="men";
			}
			//log.info("SocialCategory :"+socialCatagory+" size :"+temp[1]+"in top1 ");
			String redirectURL = "/getNewArrivalProduct.htm?SocialCategory="+SocialCategory;
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}

		
		else if(section.equals("sale-shoes")&&receivesize==null)
		{
			String SocialCategory=null;
			if(section.contains("women"))
			{
				SocialCategory="women";
			}
			else if(section.contains("men"))
			{
				SocialCategory="men";
			}
			String redirectURL = "/getSaleItems.htm?socialCatagory="+SocialCategory;
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
			
		}
		else if(section.equals("sale-shoes")&&receivesize!=null)
		{
			//temp = receivesize.split("-");
			//log.info("temp[1] is --------- "+temp[1]);
			//reqSize = Long.parseLong(temp[1]);
			//reqSize = temp[1];
			String redirectURL = "/getSaleItemsBySize.htm";
			log.info("redirectURL is ---- "+redirectURL);
			//log.info(""+receivesize+""+section);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
			
		else if(section.equalsIgnoreCase("sale-womens-shoes") || section.equalsIgnoreCase("sale-mens-shoes"))
		{
			String SocialCategory=null;
			if(section.contains("women"))
			{
				SocialCategory="women";
			}
			else if(section.contains("men"))
			{
				SocialCategory="men";
			}
			String redirectURL = "/getSaleItemsBySize.htm?socialCatagory="+SocialCategory;
			//redirectURL = "/getVintageProductBySize.htm?style=vintage&attId="+reqSize;
			log.info("redirectURL is ----> "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		
		else if(section.equalsIgnoreCase("vintage-womens-shoes") || section.equalsIgnoreCase("vintage-mens-shoes"))
		{
			String SocialCategory=null;
			if(section.contains("women"))
			{
				SocialCategory="women";
			}
			else if(section.contains("men"))
			{
				SocialCategory="men";
			}
			
			String redirectURL = "/getVintageProductBySize.htm?socialCatagory="+SocialCategory;
			
			//redirectURL = "/getVintageProductBySize.htm?style=vintage&attId="+reqSize;
			log.info("redirectURL is ----> "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		/*else if(section.equals("lookbook"))
			{
				String redirectURL = "/getlookbook.htm";
				log.info("redirectURL is ---- "+redirectURL);
				RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
				response.reset();
				rd.forward(request, response);
			}*/
		else if(section.equalsIgnoreCase("featured")&&pageStr==null)
		{
			String redirectURL = "/getFeaturedPage.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.contains("featured"))
		{
			log.info("*************** ----ProductsForEventsCategory  ****************"+pageStr);
			String redirectURL ="/getProductsForEventsCategory.htm?eventURL="+pageStr;
			log.info("ProductsForEventsCategory redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equals("lookbook"))
		{
			String redirectURL = "/betalookbook.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equals("streetcred"))
		{
			String redirectURL = "/streetcredpage.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equals("vintage-shoes"))
		{
			String SocialCategory=null;
			if(section.contains("women"))
			{
				SocialCategory="women";
			}
			else if(section.contains("men"))
			{
				SocialCategory="men";
			}
			String redirectURL = "/getVintageProduct.htm?style=vintage&SocialCategory="+SocialCategory;
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.contains("vintage-")&&!section.contains("-shoes"))
		{
			String pathName=section;
			//String pathParts[]=section.split("mens-");
			String pathNameNoHyphen=pathName.replaceFirst("vintage-"," ").trim();
			//String vendorName=pathName.substring(0,pathNameNoHyphen.indexOf("mens-")).trim();
			String styleName= pathNameNoHyphen;
			String splitstyle=pathNameNoHyphen.replaceFirst("mens-","*");
			//String vendorName=pathName.substring(0,pathNameNoHyphen.indexOf("mens-")).trim();
			styleName=splitstyle.split("\\*")[1];
			styleName = styleName.replaceAll("-", " ");
			if(pathNameNoHyphen.split(" ")[0].equals("mens"))
			{
				request.getSession().setAttribute("sc", "men");
			}
			else
				request.getSession().setAttribute("sc", "women");
			log.info("styleName is -------> "+styleName);
			String redirectURL = "/getVintageProduct.htm?style=vintage&filterby=style&styleatt="+styleName;
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.contains("-womens-shoes"))
		{
			log.info("*************** ----womens-shoes  ****************");
			String pathName=section;
			String pathParts[]=section.split("-");
			String pathNameNoHyphen=pathName.replaceAll("-"," ");
			String vendorName=pathNameNoHyphen.substring(0,pathNameNoHyphen.indexOf("womens shoes")).trim();
			if(!vendorName.equals(""))
			{
				log.info("----- VendorName is  Available in this URL -------"+vendorName);
			String redirectURL ="/getProductListForVendor.htm?&vendorName="+vendorName+"&socialcategory=women";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
			}
			else
			{
				log.info("----- VendorName is not Available in this URL -------");
				log.info("-----> Sorry This ---- page is not Available");
				RequestDispatcher rd = request.getRequestDispatcher("/errorPage.htm");
				response.setStatus(HttpServletResponse.SC_NOT_FOUND);
				rd.forward(request, response);	
			}
		}
		
		else if(section.contains("mens-")&&!section.contains("-womens-")&&!section.contains("-shoes"))
		{
			log.info("*************** ----mens-shoes  ****************");
			String pathName=section;
			//String pathParts[]=section.split("mens-");
			String pathNameNoHyphen=pathName.replaceFirst("mens-"," ");
			//String vendorName=pathName.substring(0,pathNameNoHyphen.indexOf("mens-")).trim();
			String vendorName= pathNameNoHyphen.trim();
			vendorName = vendorName.replaceAll("-", " ");
			log.info("vendorName is -------> "+vendorName);
			String redirectURL ="/getProductListForVendor.htm?&vendorName="+vendorName+"&socialcategory=men";
			log.info("######page str"+pageStr);
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.contains("-shoes")&&!section.contains("-womens-shoes")&&!section.contains("-mens-shoes")&&!section.contains("sale")&&!section.contains("vintage")&&!section.contains("size"))
		{
			log.info("*************** ----color-shoes  ****************");
			String pathName=section;
			String category;
			//String pathParts[]=section.split("mens-");
			String pathNameNoHyphen=pathName.replaceFirst("mens-"," ");
			//String vendorName=pathName.substring(0,pathNameNoHyphen.indexOf("mens-")).trim();
			String colorName= pathNameNoHyphen.trim();
			if(pathName.contains("mens"))
			{
				category="men";
				request.setAttribute("sortPage", "mens");
			}
			else
			{
				category="women";
				request.setAttribute("sortPage", "search-womens-shoes");
			}
			colorName = colorName.replaceAll("-", " ");
			colorName=colorName.replace("shoes", " ").trim();
			colorName=colorName.substring(0, 1).toUpperCase()+colorName.substring(1).toLowerCase();
			log.info("colorName is -------> "+colorName);
			String redirectURL ="/getProductsForCategory.htm?category="+category+"&filterby=color&attval="+colorName;
			log.info("######page str"+pageStr);
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.contains("-shoes")&&section.contains("size")&&!section.contains("-womens-shoes")&&!section.contains("-mens-shoes")&&!section.contains("sale")&&!section.contains("vintage"))
		{
			log.info("*************** ----size-shoes  ****************");
			String pathName=section;
			String category;
			//String pathParts[]=section.split("mens-");
			String pathNameNoHyphen=pathName.replaceFirst("mens-"," ");
			//String vendorName=pathName.substring(0,pathNameNoHyphen.indexOf("mens-")).trim();
			String size= pathNameNoHyphen.trim();
			if(pathName.contains("mens"))
			{
				category="men";
				request.setAttribute("sortPage", "mens");
			}
			else
			{
				category="women";
				request.setAttribute("sortPage", "search-womens-shoes");
			}
			size = size.replaceAll("-", " ");
			size=size.replace("shoes", " ").trim();
			size=size.replace("size", " ").trim();
			log.info("size is -------> "+size);
			String redirectURL ="/getProductsForCategory.htm?category="+category+"&filterby=size&attval="+size;
			log.info("######page str"+pageStr);
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		
		else if(section.contains("-womens-")&&!section.contains("-womens-shoes")&&!section.contains("sale-womens-shoes")&&!section.contains("search-women-styles"))
		{
			log.info("*************** ----womens-shoes  ****************");
			String pathName=section;
			//String pathParts[]=section.split("mens-");
			String pathNameNoHyphen=pathName.replaceFirst("-womens-"," ");
			String splitstyle=pathName.replaceFirst("-womens-","*");
			//String vendorName=pathName.substring(0,pathNameNoHyphen.indexOf("mens-")).trim();
			String vendorName= splitstyle.split("\\*")[0];
			String nvendorName = vendorName.replaceAll("-", " ");
			String style=splitstyle.split("\\*")[1];
			String vname=nvendorName.replace(style, " ").trim();
			log.info("vendorName is -------> "+vendorName+"Style is "+style+"vname"+vname);
			style=style.replaceAll("-", " ");
			String redirectURL ="/getProductListForVendor.htm?&vendorName="+vname+"&socialcategory=women&style="+style;
			log.info("######page str"+pageStr);
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		
		else if(section.contains("preorders"))
		{
			log.info("*************** ----preorders  ****************");
			String redirectURL ="/getProductListForComingSoon.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.contains("Loo"))
		{
			log.info("**** betalookbook ****");
			/*String bannerid=origin.substring(origin.lastIndexOf('/'), origin.length());
			String lkbkURL = origin.substring(0, origin.lastIndexOf('/'));
			log.info("lbURL:"+lkbkURL);*/
			String redirectURL ="/common_LookBook.htm?section="+section;
			//String lburl = lkbkURL;
			//log.info("lburl----------"+lburl);
			log.info("redirectURL:"+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
			
		}
		
		else if(section.equals("first-time-vol1-issue1"))
		{
			String redirectURL = "/showZinePage.htm";
			log.info("redirectURL is ---- "+redirectURL);
			request.setAttribute("sortPage", section);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equals("fb-shop"))
		  {
		   String redirectURL = "/loadFacebookShopCSpage.htm";
		   log.info("redirectURL is ---- "+redirectURL);
		   RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
		   response.reset();
		   rd.forward(request, response);
		  }
		
		else if(section.contains("featured"))
		{
			log.info("*************** ----ProductsForEventsCategory  ****************"+pageStr);
			String redirectURL ="/getProductsForEventsCategory.htm?eventURL="+pageStr;
			log.info("ProductsForEventsCategory redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		
		else
		{
			log.info("Inside else");
			try{
			try
			{
				brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
			}
			catch(Exception e)
			{
				e.printStackTrace();
				
			}
			Long brandId=1l;
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objectsFirst=new ArrayList<Object>();
			objectsFirst.add(brandId);
			FrontEndDTO fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				log.info("Fd is null");
				fd=(FrontEndDTO) RestClientUtil.callService(objectsFirst, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			log.info("outside if condition");
			List<Attribute> listofstyles=fd.getStyles();
			String pathName=section;
			String category;
			String redirectURL = null;
			section=section.replace("-", " ");
			if(pathName.contains("mens"))
			{
				category="men";
				section=section.replace("mens", " ").trim();
				request.setAttribute("sortPage", "mens");
			}
			else
			{
				category="women";
				request.setAttribute("sortPage", "search-womens-shoes");
			}
			for(Attribute ab:listofstyles)
			{
				if(section.equalsIgnoreCase(ab.getName()))
				{
					redirectURL ="/getProductsForCategory.htm?category="+category+"&filterby=style&attval="+ab.getName();
					log.info("redirect URL is-->"+redirectURL);
					break;
				}		
			}
			
			  if(redirectURL!=null)
			  {
				  log.info("------------>>> redirectURL ------------>>>"+redirectURL);
				  RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
				  response.reset();
				  rd.forward(request, response);
			  }
			  else
			  {
			    log.info("-----> Sorry This ---- page is not Available");
				RequestDispatcher rd = request.getRequestDispatcher("/errorPage.htm");
				response.setStatus(HttpServletResponse.SC_NOT_FOUND);
				rd.forward(request, response);
			  }
			}
			catch(Exception e)
			{
				log.info(e.getMessage());
			}
			
			
			try{
				try
				{
					brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
				}
				catch(Exception e)
				{
					e.printStackTrace();
					
				}
				Long brandId=0l;
				if(brandstr!=null)
				{
					brandId=Long.parseLong(brandstr);
				}
				ArrayList<Object> objectsFirst=new ArrayList<Object>();
				objectsFirst.add(brandId);
				FrontEndDTO fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				if(fd==null)
				{
					fd=(FrontEndDTO) RestClientUtil.callService(objectsFirst, "getFrontEndDTOFromCache", "ListingBusinessService");
					 
						MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				}
				List<Attribute> listofstyles=fd.getStyles();
				String pathName=section;
				String category;
				String style;
				String redirectURL = null;
				style=pathName.split(" ")[0];
				String vname=pathName.split(" ")[1];
				category="women";
				request.setAttribute("sortPage", "search-womens-shoes");
				for(Attribute ab:listofstyles)
				{
					log.info(section.toLowerCase());
					log.info(ab.getName().toLowerCase());
					if(section.toLowerCase().contains(ab.getName().toLowerCase()))
					{
						section=section.replace(ab.getName().toLowerCase(), "*");
						vname=section.split("\\*")[1].trim();
						redirectURL ="/getProductListForVendor.htm?&vendorName="+vname+"&socialcategory=women&style="+ab.getName();
						log.info("redirect URL is-->"+redirectURL);
						break;
					}		
				}
				RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
				response.reset();
				rd.forward(request, response);
				}
				catch(Exception e)
				{
					log.info(e.getMessage());
				}
			
		}
		/*else if(section.equals("weekenderLooKbook"))
		{
			String redirectURL="/weekender.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
			
		}
		else if(section.equals("tba_ss_2012_LooKbook"))
		{
			String redirectURL="/TBA_SS_2012_LookBook.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equals("room_service_Lookboook"))
		{
			String redirectURL="/room_service.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equals("senso_Lookboook"))
		{
			String redirectURL="/senso.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equals("tess_pare_mayer_Lookboook"))
		{
			String redirectURL="/tess_pare_mayer.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equals("to_the_source_LooKbook"))
		{
			String redirectURL="/to_the_source_LooKbook.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equals("up_on_it_Lookboook"))
		{
			String redirectURL="/up_on_it.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equals("checkList_Lookbook"))
		{
			String redirectURL="/checklistlookbook.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equals("department_of_antiquities_LooKbook"))
		{
			String redirectURL="/department_of_antiquities_LooKbook.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equals("indian_summer_LooKbook"))
		{
			String redirectURL="/Indiansummer_LookBook.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equals("la_isla_LooKbook"))
		{
			String redirectURL="/Laisla_LookBook.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equals("solestruckxbridgeburn_LooKbook"))
		{
			String redirectURL="/solestruckxbridgeburn_LookBook.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equals("to_be_announced_LooKbook"))
		{
			String redirectURL="/ToBeAnnounced_LookBook.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equals("in_the_spirit_LooKbook"))
		{
			String redirectURL="/InTheSpirit_LookBook.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equals("night_rider_LooKbook"))
		{
			String redirectURL="/NightRider_LookBook.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equals("on_the_road_LooKbook"))
		{
			String icon=request.getParameter("icon");
			log.info("icon::"+icon);
			String redirectURL="/On_The_Road_LookBook.htm?"+icon;
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
			log.info("redirectURL:"+redirectURL);
		}*/
		
		
		
    }
	
	
	
	@RequestMapping(value = "topNavigation2.htm")
    public void topNavigation2(@RequestParam(value="orginURL",required=false)String orginURL, @RequestParam(value="section",required=false)String section,@RequestParam("size")String size,@RequestParam(value="page",required=false)String pageStr,HttpServletRequest request,HttpServletResponse response) throws Exception 
    {      
		log.info(" inside topNavigation2 method ");
		String[] temp = {};
		String reqSize = "";
			log.info("section:"+section+":size:"+size+":page:"+pageStr);
		//String redirectURL = "";
		if(size.contains("size"))
		{
			temp = size.split("-");
			log.info("temp[1] is --------- "+temp[1]);
			//reqSize = Long.parseLong(temp[1]);
			reqSize = temp[1];
		}
		if(section.equals("sale-shoes")&&size.contains("size"))
		{
			temp = size.split("-");
			log.info("temp[1] is --------- "+temp[1]);
			//reqSize = Long.parseLong(temp[1]);
			reqSize = temp[1];
			String redirectURL = "/getSaleItemsBySize.htm?attId="+reqSize;
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		
		if(size.contains("brand-"))
		{
			log.info("section:"+section);
			String pathName=size;
			String pathNameNoHyphen=pathName.replaceFirst("brand-"," ");
			String vendorName= pathNameNoHyphen.trim();
			vendorName = vendorName.replaceAll("-", " ");
			log.info("vendorName :"+vendorName);
			String redirectURL = "/getSaleItems.htm?vendorname="+vendorName;
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);			
		}
		
		if(section.equals("sale-shoes")&&!section.contains("brand-"))
		{
			String redirectURL = "/getSaleItems.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);			
		}
		
		
		if(section.equalsIgnoreCase("new-arrivals-womens-shoes") || section.equalsIgnoreCase("new-arrivals-mens-shoes"))
		{
			log.info(" checking .........................");
			/*temp = size.split("-");
			String[] tempString=section.split("-");
			String socialCatagory=tempString[2];
			log.info("socialCatagory: "+socialCatagory+":size:"+temp[1]);*/
			String SocialCategory="";
			if(section.contains("women"))
			{
				SocialCategory="women";
			}
			else if(section.contains("men"))
			{
				SocialCategory="men";
			}
			String redirectURL = "/getNewArrivalProduct.htm?SocialCategory="+SocialCategory;
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}

		
		if(section.equalsIgnoreCase("sale-womens-shoes") || section.equalsIgnoreCase("sale-mens-shoes"))
		{
			String SocialCategory=null;
			if(section.contains("women"))
			{
				SocialCategory="women";
			}
			else if(section.contains("men"))
			{
				SocialCategory="men";
			}
			String redirectURL = "/getSaleItemsBySize.htm?socialCatagory="+SocialCategory;
			//redirectURL = "/getVintageProductBySize.htm?style=vintage&attId="+reqSize;
			log.info("redirectURL is ----> "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		
		if(section.equalsIgnoreCase("vintage-womens-shoes") || section.equalsIgnoreCase("vintage-mens-shoes"))
		{
			String SocialCategory=null;
			if(section.contains("women"))
			{
				SocialCategory="women";
			}
			else if(section.contains("men"))
			{
				SocialCategory="men";
			}
			String redirectURL = "/getVintageProductBySize.htm?socialCatagory="+SocialCategory;
			//redirectURL = "/getVintageProductBySize.htm?style=vintage&attId="+reqSize;
			log.info("redirectURL is ----> "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		
		if(section.equals("search-womens-shoes"))
		{
			String redirectURL = "/getProductsForCategory.htm?category=women";
			log.info("redirectURL is ---- "+redirectURL);
			request.setAttribute("sortPage", section);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equals("mens"))
		{
			request.setAttribute("sortPage", section);
			String redirectURL = "/getProductsForCategory.htm?category=men";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else if(section.equals("new-arrivals"))
		{
			String redirectURL = "/getNewArrivalProduct.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		
		
		
       /*log.info(" inside topNavigation2  method "+section);
		String lTempURI = request.getRequestURI();
		String originURL = (String) request.getAttribute("orginURL");
		log.info("orginURL:"+originURL);
		log.info("******************************** lTempURI before modify= "+ lTempURI);
		log.info(" topNavigation2 is ------> section:"+section+",size:"+size+":pagestr:"+pageStr);
		
		log.info("reqSize is ************** "+reqSize);
	       
	    	    redirectURL = "/getSaleItemsBySize.htm?attId="+temp[1];
				log.info("redirectURL is ---- "+redirectURL);
				RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
				response.reset();
				rd.forward(request, response);
		if(originURL.endsWith("/"))
		{
			redirectURL = "/getSaleItemsBySize.htm?attId="+temp[1];
			log.info("redirectURL is ----> "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else
		{
			originURL = originURL+"/";
			redirectURL = "/getSaleItemsBySize.htm?attId="+temp[1];
			log.info("redirectURL is ---- "+redirectURL+"::originURL:"+originURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			response.sendRedirect(originURL);
		}*/
		
     
    }
	
	
	@RequestMapping(value = "topNavigation3.htm")
    public void topNavigation3(@RequestParam(value="reqURI",required=false)String reqURI, @RequestParam("size")String size,@RequestParam(value="page",required=false)String pageStr,HttpServletRequest request,HttpServletResponse response) throws Exception {            
       
		String lTempURI = request.getRequestURI();
		String reqURL = (String) request.getAttribute("reqURI");
		log.info("******************************** lTempURI before modify= "+ lTempURI);
		log.info("size in topNavigation3 is ------> "+size);
		String[] temp = {};
		String reqSize = "";
		String redirectURL ="";
		if(size.contains("size"))
		{
			temp = size.split("-");
			log.info("temp[1] is "+temp[1]);
			reqSize = temp[1];
		}
		log.info("reqSize is "+reqSize);
	       
		if(reqURL.endsWith("/"))
		{
 	   		redirectURL = "/getVintageProductBySize.htm?style=vintage&attId="+reqSize;
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else
		{
			reqURL = reqURL+"/";
			redirectURL = "/getVintageProductBySize.htm?style=vintage&attId="+reqSize;
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			response.sendRedirect(reqURL);
		}
	       
    }
	
	@RequestMapping(value = "topNavigation4.htm")
    public void topNavigation4(@RequestParam(value="reqURI",required=false)String reqURI,@RequestParam(value="section",required=false)String section,@RequestParam(value="page",required=false)String pageStr,HttpServletRequest request,HttpServletResponse response) throws Exception 
    {            
       log.info(" inside topNavigation4 method ");
		String lTempURI = request.getRequestURI();
		log.info("******************************** lTempURI before modify= "+ lTempURI);
		log.info("category is ------> "+section);
		
		String reqURL = (String) request.getAttribute("reqURI");
		log.info(" reqURL : "+reqURL);
		
		if(reqURL.endsWith("/") && section.equals("search-womens-shoes"))
		{
			String redirectURL = "/getProductsForCategory.htm?category=women";
			log.info("redirectURL is ---- "+redirectURL);
			request.setAttribute("sortPage", section);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
		}
		else
		{
			reqURL = reqURL+"/";
			String redirectURL = "/getProductsForCategory.htm?category=women";
			log.info("redirectURL is ---- "+redirectURL);
			request.setAttribute("sortPage", section);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
			
		}
    }
	
	
	@RequestMapping(value = "idpRewriteUrl.htm")
    public void idpRewriteUrl(@RequestParam("text")String text,HttpServletRequest request,HttpServletResponse response) throws Exception {  
		
		log.info("text is "+text);
		IDPUrl jdo=null;
		jdo=(IDPUrl)MemcachedUtil.get(text, MemcachedConstants.IDP_NAME_SPACE);
		if(jdo==null)
		{
			List<Object> inputList = new ArrayList<Object>();
			inputList.add(text);
			jdo=(IDPUrl) RestClientUtil.callService(inputList, "getIdpJdoByUrl", "IDPUrlBusinessService");
			MemcachedUtil.set(text,jdo, MemcachedConstants.IDP_NAME_SPACE);
			log.info("url is from DB");
		}
		else
		{
		  log.info("url is from Memcache");	
		}
		
		try
		{
			if(jdo!=null)
			{
				log.info(" *********** Orginial Url to load IDP is "+jdo.getOriginalUrl());
				RequestDispatcher rd = request.getRequestDispatcher("/"+jdo.getOriginalUrl());
				response.reset();
				rd.forward(request, response);
			}
			else
			{
				log.info("-----> Sorry This IDP  page is not Available");
				RequestDispatcher rd = request.getRequestDispatcher("/errorPage.htm");
				response.setStatus(HttpServletResponse.SC_NOT_FOUND);
				rd.forward(request, response);
			}
		}
		catch(Exception e)
		{
			log.warning("Exception in idpRewriteUrl"+e.getMessage());
			e.printStackTrace();
		}
	}
	
	@RequestMapping(value = "loadReturnsCSpage.htm")
    public void loadReturnsCSpage(HttpServletRequest request,HttpServletResponse response) throws Exception 
    {            
       log.info(" $$$$$$$$$$$$$$$$$$ ******** inside loadReturnsCSpage method ******  $$$$$$$$$$$$$$$$$$$$$$");
	
			String redirectURL = "/loadReturnsCustomerServicePage.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
    }
	
	@RequestMapping(value = "loadFaqCSpage.htm")
    public void loadfaqCSpage(HttpServletRequest request,HttpServletResponse response) throws Exception 
    {            
       log.info(" $$$$$$$$$$$$$$$$$$ ******** inside loadfaqCSpage method ******  $$$$$$$$$$$$$$$$$$$$$$");
	
			String redirectURL = "/loadFaqCustomerServicePage.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
    }
	
	@RequestMapping(value = "loadPrivacyNoticeCSpage.htm")
    public void loadPrivacyNoticeCSpage(HttpServletRequest request,HttpServletResponse response) throws Exception 
    {            
       log.info(" $$$$$$$$$$$$$$$$$$ ******** inside loadfaqCSpage method ******  $$$$$$$$$$$$$$$$$$$$$$");
	
			String redirectURL = "/loadPrivacyNoticeCustomerServicePage.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
    }
	
	@RequestMapping(value = "loadAboutUsCSpage.htm")
    public void loadAboutUsCSpage(HttpServletRequest request,HttpServletResponse response) throws Exception 
    {            
       log.info(" $$$$$$$$$$$$$$$$$$ ******** inside loadfaqCSpage method ******  $$$$$$$$$$$$$$$$$$$$$$");
	
			String redirectURL = "/loadAboutUsCustomerServicePage.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
    }
	
	@RequestMapping(value = "loadTermsOfUseCSpage.htm")
    public void loadTermsOfUseCSpage(HttpServletRequest request,HttpServletResponse response) throws Exception 
    {            
       log.info(" $$$$$$$$$$$$$$$$$$ ******** inside loadfaqCSpage method ******  $$$$$$$$$$$$$$$$$$$$$$");
	
			String redirectURL = "/loadTermsOfUseCustomerServicePage.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
    }
	
	@RequestMapping(value = "loadSizeChartCSpage.htm")
    public void loadSizeChartCSpage(HttpServletRequest request,HttpServletResponse response) throws Exception 
    {            
       log.info(" $$$$$$$$$$$$$$$$$$ ******** inside loadfaqCSpage method ******  $$$$$$$$$$$$$$$$$$$$$$");
	
			String redirectURL = "/loadSizeChartCustomerServicePage.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
    }
	
	@RequestMapping(value = "loadCustomerServiceCSpage.htm")
    public void loadCustomerServiceCSpage(HttpServletRequest request,HttpServletResponse response) throws Exception 
    {            
       log.info(" $$$$$$$$$$$$$$$$$$ ******** inside loadfaqCSpage method ******  $$$$$$$$$$$$$$$$$$$$$$");
	
			String redirectURL = "/loadCSCustomerServicePage.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
    }
	
	@RequestMapping(value = "loadAccountInfoCSpage.htm")
    public void loadMyAccountCSpage(HttpServletRequest request,HttpServletResponse response) throws Exception 
    {            
       log.info(" $$$$$$$$$$$$$$$$$$ ******** inside loadAccountInfoCSpage method ******  $$$$$$$$$$$$$$$$$$$$$$");
	
			String redirectURL = "/loadAccountInfoCustomerServicePage.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
    }
	
	@RequestMapping(value = "loadOrderStatusCSpage.htm")
    public void loadOrderStatusCSpage(HttpServletRequest request,HttpServletResponse response) throws Exception 
    {            
       log.info(" $$$$$$$$$$$$$$$$$$ ******** inside loadOrderStatusCSpage method ******  $$$$$$$$$$$$$$$$$$$$$$");
	
			String redirectURL = "/loadOrderStatusCustomerServicePage.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
    }
	
	@RequestMapping(value = "loadJobsCSpage.htm")
    public void loadJobsCSpage(HttpServletRequest request,HttpServletResponse response) throws Exception 
    {            
       log.info(" $$$$$$$$$$$$$$$$$$ ******** inside loadfaqCSpage method ******  $$$$$$$$$$$$$$$$$$$$$$");
	
			String redirectURL = "/loadJobsCustomerServicePage.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
    }
	
	@RequestMapping(value = "loadAffiliatesCSpage.htm")
    public void loadAffiliatesCSpage(HttpServletRequest request,HttpServletResponse response) throws Exception 
    {            
       log.info(" $$$$$$$$$$$$$$$$$$ ******** inside loadfaqCSpage method ******  $$$$$$$$$$$$$$$$$$$$$$");
	
			String redirectURL = "/loadAffiliatesCustomerServicePage.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
    }
	
	@RequestMapping(value = "loadShippingCSpage.htm")
    public void loadShippingCSpage(HttpServletRequest request,HttpServletResponse response) throws Exception 
    {            
       log.info(" $$$$$$$$$$$$$$$$$$ ******** inside loadShippingCSpage method ******  $$$$$$$$$$$$$$$$$$$$$$");
	
			String redirectURL = "/loadShippingCustomerServicePage.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
    }
	@RequestMapping(value = "loadInternationalCSpage.htm")
    public void loadInternationalCSpage(HttpServletRequest request,HttpServletResponse response) throws Exception 
    {            
       log.info(" $$$$$$$$$$$$$$$$$$ ******** inside loadInternationalCSpage method ******  $$$$$$$$$$$$$$$$$$$$$$");
	
			String redirectURL = "/loadInternationalCustomerServicePage.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
    }
	
	@RequestMapping(value = "loadGiftcertificatesCSpage.htm")
    public void loadGiftcertificatesCSpage(HttpServletRequest request,HttpServletResponse response) throws Exception 
    {            
       log.info(" $$$$$$$$$$$$$$$$$$ ******** inside loadGiftcertificatesCSpage method ******  $$$$$$$$$$$$$$$$$$$$$$");
	
			String redirectURL = "/loadGiftcertificatesCustomerServicePage.htm";
			log.info("redirectURL is ---- "+redirectURL);
			RequestDispatcher rd = request.getRequestDispatcher(redirectURL);
			response.reset();
			rd.forward(request, response);
    }
	
	
	}
