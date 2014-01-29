package com.veroniqa.frontend.Controllers;

import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.Iterator;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Set;
import java.util.logging.Logger;

import javax.servlet.RequestDispatcher;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.veroniqa.bean.UserDetail;
import com.veroniqa.commonservices.IDPMailsCommonServiceClient;
import com.veroniqa.dto.AbandonedShoeMailDTO;
import com.veroniqa.dto.AbandonedWishListDTO;
import com.veroniqa.dto.EventDTO;
import com.veroniqa.dto.FrontEndDTO;
import com.veroniqa.dto.HomePageBannerServiceDTO;
import com.veroniqa.dto.LookBookBannerServiceDTO;
import com.veroniqa.dto.PageDTO;
import com.veroniqa.dto.ProductFilterDTO;
import com.veroniqa.dto.ShoppingCart;
import com.veroniqa.frontend.service.ShoppingCartService;
import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.MemcachedConstants;
import com.veroniqa.frontend.util.MemcachedUtil;
import com.veroniqa.frontend.util.RestClientUtil;
import com.veroniqa.frontend.util.VeroniqaConstants;
import com.veroniqa.frontend.util.VeroniqaCookieUtil;
import com.veroniqa.frontend.util.VeroniqaUtil;
import com.veroniqa.jdo.Attribute;
import com.veroniqa.jdo.DiscountProgram;
import com.veroniqa.jdo.Event;
import com.veroniqa.jdo.HomePageBanner;
import com.veroniqa.jdo.IDPUrl;
import com.veroniqa.jdo.LookBookBanner;
import com.veroniqa.jdo.ProductData;
import com.veroniqa.jdo.Vendor;
import com.veroniqa.realtime.RealTimeCustomersChannelService;


@Controller
public class GlobalNavigationController 
{
	private static final Logger log=Logger.getLogger(GlobalNavigationController.class.getSimpleName());
	
	@RequestMapping(value="/homePage.htm")
	public ModelAndView loadHomePage(@RequestParam(value="orderid",required=false) String orderid,@RequestParam(value="from",required=false) String from,HttpServletRequest req,HttpServletResponse res)
	{
		long startHomeTime = System.currentTimeMillis();
		ModelAndView mv=new ModelAndView("Home");
		String content=null;
		byte[] contentByte=null;
		String source=null;
		String holidayshipping=req.getParameter("holidayshipping");
		
		log.info(" Loading Home Page");
		/*if(req.getParameter("contest")!=null && req.getParameter("contest").toLowerCase().indexOf("unifmens")!=-1)
		{
			mv=new ModelAndView("emptyPageForUNIF");
			mv.addObject("botbFlag","showPopup");
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestruck.min.js");
			return mv;
		}*/
		
		
		
		 /* if(req.getSession().getAttribute("loggedin")==null)
		  {
			  content=(String)MemcachedUtil.get("HOMEPAGE", MemcachedConstants.PAGE_CACHE);  
			  contentByte=(byte[])MemcachedUtil.get("HOMEPAGE"+"_gzip", MemcachedConstants.PAGE_CACHE);  
		  }*/
		
		try
		{
// Code for color level sales, storing the colorid's in the respective discount program by passing event id and discount program id - Viswanth.			
//			List list = new ArrayList<>();
//			List list2 = new ArrayList<>();
//			List<Long> colorids = new ArrayList<>();
//			list.add(90749072);
//			list.add(211307064);
//			colorids=(List<Long>)RestClientUtil.callService(list, "getListOfColorIdsForSale", "DiscountBusinessService");
//			System.out.println("size of the colorids list is :: "+colorids.size());
//			for(int i=0; i<colorids.size(); i++)
//			{
//				System.out.println("Color ids are :: "+colorids.get(i));
//			}
//			list2.add(Long.valueOf(88359062));
//			DiscountProgram prgs =(DiscountProgram)RestClientUtil.callService(list2, "getDiscountProgramById", "DiscountBusinessService");
			//System.out.println("color ids from the discount program is :: "+prgs.getSaleColorIds());
			
			long startFeaturedTime = System.currentTimeMillis();
			log.info(" ----- Collecting the Featured Pages "+startFeaturedTime);
			List<Event> retVal=null;
			retVal=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retVal==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
				
				log.info(" ----- Collecting the Featured Pages from DB");
			
				retVal=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retVal!=null && retVal.size()>0)
				{
				   MemcachedUtil.set("onLiveEvents", retVal,  MemcachedConstants.EVENTS_FEATURES);
				   mv.addObject("eventList",retVal);
				   log.info("EventList size is "+retVal.size()+"and "+retVal.get(0).getEventName());
				   log.info("Featured Pages are added to the Model View Object");
				}
			}
			
			else
			{
				log.info(" ----- Collecting the Featured Pages from Cache");
				if(retVal!=null&&retVal.size()>0)
				{
					mv.addObject("eventList",retVal);
				
				    log.info("EventList size is "+retVal.size()+"and "+retVal.get(0).getEventName());
				    
				    log.info("Featured Pages are added to the Model View Object");
				}
			}
			
			long endFeaturedTime = System.currentTimeMillis();
			long totalTime = endFeaturedTime-startFeaturedTime;
			log.info("The Total time for Featured is "+totalTime+" ms");
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
			 e.printStackTrace();
		}
		
		
		  try
		  {
			  if(req.getSession().getAttribute("loggedin")!=null)
			  {
				  log.info("Inside the session exists block");
				  if((Boolean)req.getSession().getAttribute("loggedin") && VeroniqaUtil.getDiscountProgramForFB()!=null && !VeroniqaUtil.getDiscountProgramForFB().getProgramTypeName().equalsIgnoreCase("order"))
				  {
					  Cookie cookie=VeroniqaCookieUtil.createNewCookie(req, res,VeroniqaConstants.FACEBOOK,VeroniqaConstants.FACEBOOK,1*24*60*60);
					  res.addCookie(cookie);
				  }
			  }
		  }
		  catch(Exception e)
		  {
			  e.printStackTrace();
		  }
		  if(("mail").equals(from))
		  {
			  source="mail";
		  try
			{
			  String strOrderId = VeroniqaCookieUtil.getCookieValue(req, "orderid");
				if (strOrderId==null || "".equals(strOrderId.trim())) 
		        {
					Cookie cookie = VeroniqaCookieUtil.createNewCookie(req, res, "orderid", orderid.toString(),365*24*60*60);
					res.addCookie(cookie);
					
		        } 
				else
				{
					VeroniqaCookieUtil.deleteCookie(req, "orderid");
					Cookie cookie = VeroniqaCookieUtil.createNewCookie(req, res, "orderid", orderid.toString(),365*24*60*60);
					res.addCookie(cookie);
				}
			  
			}
			catch(Exception e)
			{
	    		log.warning("Exception while setting orderid:"+e.getMessage());
	    	} 
		  }
		  else if(from!=null&&("wishlistmail").equals(from))
			  source="wishlistmail";
		  else
			  source="site";
		try
		{
		if(content==null && contentByte==null)
		{
			log.info("----> content is Served Without ZGipping");
		FrontEndDTO fd=new FrontEndDTO();
		log.info("*** inside load homepage");
		PageDTO newProducts=new PageDTO();
		PageDTO newArrivalForInitial=new PageDTO();
		
		List<HomePageBanner> hpbanners=null;
		List<HomePageBanner> hpbannersForCache=null;
		HomePageBannerServiceDTO dto=new HomePageBannerServiceDTO();
		dto.setFlag("EXISTS");
		dto.setSortBy("dateAdded desc");
		dto.setStartIndex(0);
		dto.setEndIndex(0);
		dto.setOnLive(true);
		String hpBannerUrl="";
		String hpBannerLink="";
		List<HomePageBanner> bannerUrl = new ArrayList<HomePageBanner>();
		//Video Part added by FAE
				String hpBannerVideoThumbNailUrl="";
				String hpBannerVideoTitle="";
				String hpBannerVideoUrl="";
				
		//Video Part added ends by FAE
		
		//String externalIp=req.getRemoteAddr().toString();
		//String s[] = externalIp.split("\\.");
   
       /* int lw = Integer.parseInt(s[0]);

        int  lx = Integer.parseInt(s[1]);

        int ly = Integer.parseInt(s[2]);

        int lz = Integer.parseInt(s[3]);

        long lipnumber = (256*256*256*lw)+(256*256*lx)+(256*ly)+lz;*/
        
        //String countryCodeFromClient=null;

	
			String brandstr="";
			try
			{
				brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
			}
			catch(Exception e)
			{
				e.printStackTrace();
				
			}
			Long brandid=null;
			ArrayList<Object> objectsFirst=new ArrayList<Object>();
			objectsFirst.add(new Long(brandstr));
			
			long frontEndDetailsStartTime = System.currentTimeMillis();
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd!=null)
			{
				
				log.info("FrontEndDTO Retrived from cache");
			}
			else
			{
				fd=(FrontEndDTO) RestClientUtil.callService(objectsFirst, "getFrontEndDTOFromCache", "ListingBusinessService");
					 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			long frontEndDetailsEndTime = System.currentTimeMillis();
			long totalFrontendDetailTime = frontEndDetailsEndTime-frontEndDetailsStartTime;
			log.info("totalFrontendDetailTime is "+totalFrontendDetailTime);
			
			log.info("*************** Session set **************");
			if(req.getSession().getAttribute("youAreHere")!=null)
				log.info("breadCrumb Navigation  ----> "+(String)req.getSession().getAttribute("youAreHere"));
				
			if(brandstr!=null)
			{
				brandid=Long.parseLong(brandstr);
				VeroniqaCookieUtil.createNewCookie(req, res, "brandid", brandstr, 365*24*60*60);
			}
			
			long newArrivalsStartTime = System.currentTimeMillis();
			newProducts=(PageDTO)MemcachedUtil.get("newArrival",MemcachedConstants.NEW_ARRIVALS);
			if(newProducts==null)
			{ 
				log.info("Fetching NewArrivals from DB");
				ArrayList<Object> objects=new ArrayList<Object>();
				objects.add("women");
				newProducts=(PageDTO) RestClientUtil.callService(objects, "getInitialAllNewArrivalProductDetails", "ListingBusinessService");
				MemcachedUtil.set("newArrival",newProducts,MemcachedConstants.NEW_ARRIVALS);
			}
			else
			{
				log.info("Fetching NewArrivals from Cache");
			}
			
			long newArrivalsEndTime = System.currentTimeMillis();
			long totalNewArrivalsTime = newArrivalsEndTime-newArrivalsStartTime;
			log.info("totalNewArrivalsTime is "+totalNewArrivalsTime);
			
			ArrayList<Object> params3=new ArrayList<Object>();
			params3.add(dto);
			
			
			long bannersStartTime = System.currentTimeMillis();
			hpbanners=(List<HomePageBanner>)MemcachedUtil.get("homepagebanner",MemcachedConstants.NEW_ARRIVALS);
			if(hpbanners==null)
			{
				hpbanners=(List<HomePageBanner>)RestClientUtil.callService(params3, "getAllHomePageBanners", "HomePageBannerBusinessService");
				for(HomePageBanner hpb:hpbanners)
				{
					if(hpb.getImageLink()=="")
						hpb.setImageLink("#");
					if(hpb.getVideoThumbNailImageURL()=="")
						hpb.setVideoThumbNailImageURL("#");
					
					bannerUrl.add(hpb);
					//video part - added FAE
				}
				MemcachedUtil.set("homepagebanner",hpbanners,MemcachedConstants.NEW_ARRIVALS);
				log.info("size of the list: "+bannerUrl.size());
			}
			else
			{
				for(HomePageBanner hpb:hpbanners)
				{
					//video part added by FAE
					bannerUrl.add(hpb);
					
				}
			}
			hpBannerUrl=hpbanners.get(0).getImageUrl();
			
			
			long bannersEndTime = System.currentTimeMillis();
			long totalbannersTime = bannersEndTime-bannersStartTime;
			log.info("totalbannersTime is "+totalbannersTime);
			
			if(req.getSession().getAttribute("loggedin")!=null)
			{
				if((Boolean)req.getSession().getAttribute("loggedin"))
				{
					//log.info(" inside loggedin session is true ");
					mv.addObject("loggedin", req.getSession().getAttribute("loggedin"));
					req.getSession().setAttribute("loggedin",true);
				}
				
			}
			//this is for BOTB contest
			/*if(req.getParameter("contest")!=null && req.getParameter("contest").toLowerCase().indexOf("botb")!=-1)
			{
				mv=new ModelAndView("emptyPageForBOBT");
				mv.addObject("botbFlag","showPopup");
			}
			else
			{
				mv.addObject("botbFlag","hidePopup");
			}*/
			
			List<Integer> womenDropDown=VeroniqaUtil.getWomenDropDown(fd);
			if(womenDropDown!=null && womenDropDown.size()>0)
			{
				mv.addObject("firstColumn",womenDropDown.get(0));
				mv.addObject("secondColumn",womenDropDown.get(1));
				mv.addObject("thirdColumn",womenDropDown.get(2));
				mv.addObject("fourthColumn",womenDropDown.get(3));
			}
			List<Integer> menDropDown=VeroniqaUtil.getMenDropDown(fd);
			if(menDropDown!=null && menDropDown.size()>0)
			{
				mv.addObject("firstColumnMen", menDropDown.get(0));
				mv.addObject("secondColumnMen", menDropDown.get(1));
				mv.addObject("thirdColumnMen", menDropDown.get(2));
				mv.addObject("fourthColumnMen", menDropDown.get(3));
			}
			else 
				log.info("the value of the men drop down is empty :: "+menDropDown.size());
			
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", brandid);
			mv.addObject("pageDTO", newProducts);
			
			mv.addObject("hpBannerUrl",hpBannerUrl);
			log.info("hpBannerUrl: "+hpBannerUrl);
			mv.addObject("bannerUrl", bannerUrl);
						
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("from",source);
			mv.addObject("server",req.getRequestURL());
			log.info("Request URL****************"+req.getRequestURL());
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestruck.min.js");
			if(holidayshipping!=null)
			{
				if(holidayshipping.equals("true"))
				{
					//log.info("**************** holidayshipping status is **************** : "+holidayshipping);
					mv.addObject("holidayshipping",holidayshipping);
				}
			}
			
			//this is for BOTB contest
			/*if(req.getParameter("contest")!=null && req.getParameter("contest").toLowerCase().indexOf("botb")!=-1)
			{
				mv.addObject("botbFlag","showPopup");
			}
			else
			{
				mv.addObject("botbFlag","hidePopup");
			}*/
			
			//mv.addObject("isMobile",VeroniqaUtil.isMobilePlatform(req));
		}
		else
		{
			log.info("----> With Content , Content is not Null");
			
			if(req.getHeader("Accept-Encoding")!=null){
					if(req.getHeader("Accept-Encoding").indexOf("gzip")!=-1 || req.getHeader("Accept-Encoding").indexOf("deflate")!=-1)
					{
						log.info("----> content is Served With ZGipping");
						res.setContentType("text/html; charset=utf-8");
						res.addHeader("Content-Encoding", "gzip");
						res.addHeader("Vary", "Accept-Encoding");
						res.addHeader("Cache-Control", "max-age=0, no-cache");
						res.setContentLength(contentByte.length);
						res.getOutputStream().write(contentByte);
						res.flushBuffer();
						return null;
					}
					else
					{
						log.info("----> content is Served With emptyPage");
						mv=new ModelAndView("emptyPage");
						mv.addObject("pageContent",content);
					}
				}
		}
		req.getSession().setAttribute("youAreHere","home");	
		log.info("youAreHere:"+req.getSession().getAttribute("youAreHere"));
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An error occured in the loadHomePage"+e.getMessage());
		}
		
		long endHomeTime = System.currentTimeMillis();
		long totalHomeTime = endHomeTime-startHomeTime;
		log.info("totalHomeTime is"+totalHomeTime);
		
		return mv;
	}
	
	
	
	@RequestMapping(value="/getHomePageBanner.htm")
	public @ResponseBody Boolean getHomePageBanner(HttpServletRequest request,HttpServletResponse response)
	
	{
		log.info("inside getHomePageBanner");
		Boolean liveStatus=true;
		
		try
		{
			
			
		}
		catch(Exception e)
		{
			liveStatus=false;
			e.printStackTrace();
			log.warning("An error occured in getHomePageBanner");
		}
		return liveStatus;
	}
	
	@RequestMapping(value="/getProductsForCategory.htm")
	public ModelAndView getProductsForCategory(@ModelAttribute("myProductFilter") ProductFilterDTO productFilter,@RequestParam("category")String category,@RequestParam(value="page",required=false)String pageStr,@RequestParam(value="filterby",required=false)String filterby,@RequestParam(value="attval",required=false)String attval,HttpServletRequest req)
	{
		
		log.info(" inside getProductForCategory! "+category);
		
		ModelAndView mv						=	new ModelAndView("SortPage");
		FrontEndDTO fd						=	new FrontEndDTO();
		PageDTO retVal						=	null;
		String brandstr						=	"";
		String currentPage					=	"SortPage";
		try
		{
			brandstr						=	EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}//women_sort_count
		Long brandId=0l;
		try
		{
			Integer  fromRecord				=	0;
			Integer toRecord				=	12;
			int itemsPerPage				=  48;
			
			String categoryTitleCase=category.substring(0, 1).toUpperCase()+category.substring(1);
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			int pageno=1;
			log.info("Pagestr : "+pageStr);
			
			if(pageStr!=null && pageStr.trim().length()>0)
			{
				pageno=Integer.parseInt(pageStr);
				
			}
			
			if(req.getSession().getAttribute("itemsPerPage")!=null)
			   {
				   itemsPerPage=Integer.parseInt((String)req.getSession().getAttribute("itemsPerPage"));
				   log.info("inside not null session For men "+itemsPerPage);
				  
			   }
			if(filterby!=null)
			{
				mv.addObject("filterby", filterby);
				if(filterby.equals("color"))
				{
				if(attval!=null)
				{
					ArrayList inp=new ArrayList();
					inp.add(attval);
					Attribute at=(Attribute) RestClientUtil.callService(inp, "getAttributeByNameColor", "AttributeBusinessService");
					Long attid=at.getKey().getId();
					mv.addObject("attributeId", attid.toString());
					mv.addObject("attVal",attval);
				}
				}
				else if(filterby.equals("style"))
				{
				if(attval!=null)
				{
					ArrayList inp=new ArrayList();
					inp.add(attval);
					Attribute at=(Attribute) RestClientUtil.callService(inp, "getAttributeByNameForStyle", "AttributeBusinessService");
					Long attid=at.getKey().getId();
					mv.addObject("attributeId", attid.toString());
					mv.addObject("attVal",attval.substring(0,1).toUpperCase()+attval.substring(1).toLowerCase());
				}
				}
				else if(filterby.equals("size"))
				{
					if(attval!=null)
					{
						ArrayList inp=new ArrayList();
						inp.add(attval);
						Attribute at=(Attribute) RestClientUtil.callService(inp, "getAttributeByNameForSize", "AttributeBusinessService");
						Long attid=at.getKey().getId();
						mv.addObject("attributeId", attid.toString());
						mv.addObject("attVal",attval);
					}
				}
			}
			log.info("final items per page "+itemsPerPage); 
			   
			req.getSession().setAttribute("youAreHere",category);
			if(req.getSession().getAttribute("youAreHere")!=null)
				log.info("Inside the show idp "+(String)req.getSession().getAttribute("youAreHere"));
			log.info("FromRecord is "+fromRecord.intValue()+" and toRecord is "+toRecord.intValue());
			
			
			try
			{
				List<Event> retval=null;
				retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
				
				if(retval==null)
				{
					ArrayList<Object> objects=new ArrayList<Object>();
				
					retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
					if(retval!=null && retval.size()>0)
						MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
					
				}
				if(retval!=null&&retval.size()>0)
					mv.addObject("eventList",retval);
				
				log.info("EventList size is "+retval.size()+"and "+retval.get(0).getEventName());
				
				
			}
			catch(Exception e)
			{
				log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
			}
			boolean cacheSwitch=true;
			Boolean tempBool=(Boolean)MemcachedUtil.get(MemcachedConstants.CATEGORY_CACHE_SWITCH,MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
			
			if(tempBool!=null)
				cacheSwitch=tempBool;
			if(cacheSwitch)
				retVal=(PageDTO)MemcachedUtil.get("getProductsBySocialCategoryWithPagination_"+category+"_"+pageno+"_"+itemsPerPage, MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
			if(retVal==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
				objects.add(category);
				objects.add(pageno);
				objects.add(itemsPerPage);
				retVal=(PageDTO)RestClientUtil.callService(objects, "getProductsBySocialCategoryWithPagination", "ListingBusinessService");
				MemcachedUtil.set("getProductsBySocialCategoryWithPagination_"+category+"_"+pageno+"_"+itemsPerPage,retVal,MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
			}
			
			
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList .add(brandId);
				fd=(FrontEndDTO) RestClientUtil.callService(inputList, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			String serverName=VeroniqaConstants.getServerName(req);
			
			//ShoppingCart cart=ShoppingCartService.getShoppingCart(req); // Commented for not being used by YES
			List<Integer> womenDropDown=VeroniqaUtil.getWomenDropDown(fd);
			if(womenDropDown!=null && womenDropDown.size()>0)
			{
				mv.addObject("firstColumn",womenDropDown.get(0));
				mv.addObject("secondColumn",womenDropDown.get(1));
				mv.addObject("thirdColumn",womenDropDown.get(2));
				mv.addObject("fourthColumn",womenDropDown.get(3));
			}
			List<Integer> menDropDown=VeroniqaUtil.getMenDropDown(fd);
			if(menDropDown!=null && menDropDown.size()>0)
			{
				mv.addObject("firstColumnMen", menDropDown.get(0));
				mv.addObject("secondColumnMen", menDropDown.get(1));
				mv.addObject("thirdColumnMen", menDropDown.get(2));
				mv.addObject("fourthColumnMen", menDropDown.get(3));
			}
			
			mv.addObject("colors", fd.getColors());
			log.info("------->>>>>> category is  ----->>>>>>>>> : " + category);
			if(category.equals("women"))
			{
				
				log.info("------->>>>>> Womensizes are  ----->>>>>>>>> : " + fd.getWomenSizes());
				mv.addObject("sizes", fd.getWomenSizes());
				mv.addObject("styles", fd.getWomenStyles());
			}
			else if (category.equals("men"))
			{
				log.info("------->>>>>> Mensizes are  ----->>>>>>>>> : " + fd.getMenSizes());
				mv.addObject("sizes", fd.getMenSizes());
				mv.addObject("styles", fd.getMenStyles());
			}
			else
			{
				log.info("------->>>>>> Allsizes are  ----->>>>>>>>> : " + fd.getSizes());
				mv.addObject("sizes", fd.getSizes());
				mv.addObject("styles", fd.getStyles());
				
			}
			mv.addObject("youAreHere", categoryTitleCase);
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("womenfiltervendorlst", fd.getWomenFilterVendors());
			mv.addObject("menfiltervendorlst", fd.getMenFilterVendors());
			mv.addObject("brandid", brandId);
			mv.addObject("myProductFilter",new ProductFilterDTO());
			//mv.addObject("ShoppingCart", cart);
			mv.addObject("category", category);
			mv.addObject("currentPage", currentPage);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("pageDTO", retVal);
			mv.addObject("sortPage", req.getAttribute("sortPage"));
			mv.addObject("pageno", pageno);
			mv.addObject("serverName", serverName);
			mv.addObject("server",req.getRequestURL());
			if(retVal.getData().size()>0)
			{
				log.info("Retrived ProductList size:"+retVal.getData().size());
			}
			
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucksort.min.js");
			//mv.addObject("currentCurrency",VeroniqaUtil.getCurrencyPreference(req));
			
			log.info("------------------->>>>>>>>>>>   womenfiltervendorlst size is  " + fd.getWomenFilterVendors().size() +"------------>>>>> menfiltervendorlst size is   " +fd.getMenFilterVendors().size()+"-----sortPage--------->"+req.getAttribute("sortPage")+"--------------->"+retVal.getSelectedPage()+"------------>"+pageno);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("An exception occured in the getProductsForWomen"+e.getMessage());
			
		}
		return mv;
	}
	
	
	
	@RequestMapping(value="/getProductsForEventsCategory.htm")
	public ModelAndView getProductsForEventsCategory(@ModelAttribute("myProductFilter") ProductFilterDTO productFilter,@RequestParam("eventURL")String eventURL,HttpServletRequest req,HttpServletResponse res)
	{
		eventURL=eventURL.replaceAll("/", "").trim();
		log.info(" inside getProductForCategory! "+eventURL);
		
		ModelAndView mv						=	new ModelAndView("EventLanding");
		FrontEndDTO fd						=	new FrontEndDTO();
		PageDTO retVal						=	null;
		String brandstr						=	"";
		String currentPage					=	"EventLanding";
		try
		{
			brandstr						=	EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}//women_sort_count
		
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
				mv.addObject("eventList",retval);
			
			log.info("EventList size is "+retval.size()+" and "+retval.get(0).getEventName());
			if(eventURL.equals("solestruck-knows-you"))
			{
				//log.info("---->>>>.............isCustomSalePageFilter true");
				mv.addObject("isCustomSalePageFilter",true);
			}

			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		Long brandId=0l;
		try
		{
			Integer  fromRecord				=	0;
			Integer toRecord				=	12;
			int itemsPerPage				=  48;
			int pageno			            =   1;
			
			/*String categoryTitleCase=category.substring(0, 1).toUpperCase()+category.substring(1);
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			int pageno=1;
			log.info("Pagestr : "+pageStr);
			
			if(pageStr!=null && pageStr.trim().length()>0)
			{
				pageno=Integer.parseInt(pageStr);
				
			}*/
			
			
			
			if(req.getSession().getAttribute("itemsPerPage")!=null)
			   {
				   itemsPerPage=Integer.parseInt((String)req.getSession().getAttribute("itemsPerPage"));
				   log.info("inside not null session For men "+itemsPerPage);
				  
			   }
			
			log.info("final items per page "+itemsPerPage); 
			   
			//req.getSession().setAttribute("youAreHere",category);
			if(req.getSession().getAttribute("youAreHere")!=null)
				log.info("Inside the show idp "+(String)req.getSession().getAttribute("youAreHere"));
			log.info("FromRecord is "+fromRecord.intValue()+" and toRecord is "+toRecord.intValue());
			
			/*boolean cacheSwitch=true;
			Boolean tempBool=(Boolean)MemcachedUtil.get(MemcachedConstants.CATEGORY_CACHE_SWITCH,MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
			
			if(tempBool!=null)
				cacheSwitch=tempBool;
			if(cacheSwitch)*/
			
			retVal=(PageDTO)MemcachedUtil.get("getProductsByEventCategory"+eventURL, MemcachedConstants.EVENTS_BY_URL);
			
			if(retVal==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
				/*objects.add(category);*/
				//objects.add(pageno);
				objects.add(eventURL);
				//objects.add(itemsPerPage);
				retVal=(PageDTO)RestClientUtil.callService(objects, "getProductsByEventCategory", "ListingBusinessService");
				if(retVal.getData()!=null)
				MemcachedUtil.set("getProductsByEventCategory"+eventURL,retVal,MemcachedConstants.EVENTS_BY_URL);
				else if(retVal.getData()==null||retVal.getData().size()==0)
				{
					RequestDispatcher rd=req.getRequestDispatcher("/errorPage.htm");
					res.setStatus(HttpServletResponse.SC_MOVED_PERMANENTLY);
					res.setHeader( "Location", "/");
					res.reset();
					rd.forward(req, res);
					return null;
				}
				
			}
			
			
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList .add(brandId);
				fd=(FrontEndDTO) RestClientUtil.callService(inputList, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			String serverName=VeroniqaConstants.getServerName(req);
			
			
			log.info("*********** this is for image"+eventURL);
			List url = new ArrayList();
			url.add(eventURL);
			Event event = (Event) RestClientUtil.callService(url, "getEventProgramByURL", "EventManagerBusinessService");
			if(event!=null)
			{
				mv.addObject("eventDescription", event.getDescription());
				LinkedHashMap<String, List<EventDTO>> map = (LinkedHashMap<String, List<EventDTO>>) event.getListValues().getListValues().get(0);
				for(String keys:map.keySet())
				{
					List<EventDTO> lstForBanner = map.get(keys);
					if(lstForBanner.get(0).getBannerStatus())
					{
						log.info("banner image: "+keys);
						mv.addObject("bannerImage", keys);
						log.info("status: "+lstForBanner.get(0).getBannerStatus());
						log.info("date created: "+lstForBanner.get(0).getBannerDateCreated());
					}
				}
			
			}
			//ShoppingCart cart=ShoppingCartService.getShoppingCart(req); // Commented for not being used by YES
			List<Integer> womenDropDown=VeroniqaUtil.getWomenDropDown(fd);
			if(womenDropDown!=null && womenDropDown.size()>0)
			{
				mv.addObject("firstColumn",womenDropDown.get(0));
				mv.addObject("secondColumn",womenDropDown.get(1));
				mv.addObject("thirdColumn",womenDropDown.get(2));
				mv.addObject("fourthColumn",womenDropDown.get(3));
			}
			List<Integer> menDropDown=VeroniqaUtil.getMenDropDown(fd);
			if(menDropDown!=null && menDropDown.size()>0)
			{
				mv.addObject("firstColumnMen", menDropDown.get(0));
				mv.addObject("secondColumnMen", menDropDown.get(1));
				mv.addObject("thirdColumnMen", menDropDown.get(2));
				mv.addObject("fourthColumnMen", menDropDown.get(3));
			}
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			//mv.addObject("youAreHere", categoryTitleCase);
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("womenfiltervendorlst", fd.getWomenFilterVendors());
			mv.addObject("menfiltervendorlst", fd.getMenFilterVendors());
			mv.addObject("brandid", brandId);
			mv.addObject("myProductFilter",new ProductFilterDTO());
			//mv.addObject("ShoppingCart", cart);
			//mv.addObject("category", category);
			mv.addObject("currentPage", currentPage);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("pageDTO", retVal);
			mv.addObject("sortPage", req.getAttribute("sortPage"));
			//mv.addObject("pageno", pageno);
			mv.addObject("serverName", serverName);
			mv.addObject("server",req.getRequestURL());
			if(retVal!=null && retVal.getData().size()>0)
			{
				log.info("Retrived ProductList for Event is size:"+retVal.getData().size());
			}
			
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucksort.min.js");
			
			//mv.addObject("currentCurrency",VeroniqaUtil.getCurrencyPreference(req));
			//log.info("------------------->>>>>>>>>>>   womenvendorlst size is  " + fd.getWomenVendors().size() +"------------>>>>> menvendorlst size is   " +fd.getMenVendors().size()+"-----sortPage--------->"+req.getAttribute("sortPage")+"--------------->"+retVal.getSelectedPage()+"------------>"+pageno);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("An exception occured in the getProductsForWomen"+e.getMessage());
			
		}
		return mv;
	}
	
	
	
	@RequestMapping(value="/getFeaturedPage.htm")
	public ModelAndView getFeaturedPage(HttpServletRequest req,HttpServletResponse res)
	{
		log.info("Inside the Featured Page Controller");
		ModelAndView mv						=	new ModelAndView("Featured");
		FrontEndDTO fd						=	new FrontEndDTO();
		PageDTO retVal						=	null;
		String brandstr						=	"";
		String currentPage					=	"Featured";
		try
		{
			brandstr						=	EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}//women_sort_count
		
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
				
				for(Event e:retval)
				{
					//System.out.println(e.getDescription());
					if(e.getDescription()!=null&&!"".equals(e.getDescription()))
					{
						//System.out.println(e.getDescription());
						String[] description	= e.getDescription().split(" ");
						//System.out.println("Event "+e.getEventName() +"and its length is"+description.length);
						String _25words="";
						if(description.length>25)
						{
						for(int i=0;i<25;i++)
							_25words+=description[i]+" ";
						/*System.out.println("Event Name is "+e.getEventName() +" and 25 words length is "+_25words.split(" ").length);
						System.out.println("Event "+e.getEventName()+"and _25words" +_25words);*/
						e.setDescription(_25words);
						}
						//System.out.println("Limited Desc is "+e.getDescription());
						
					}
				}
				mv.addObject("eventList",retval);	
			log.info("EventList size is "+retval.size()+" and "+retval.get(0).getEventName());
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents in featured page is" +e.getMessage());
		}
		Long brandId=0l;
		try
		{
		
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList .add(brandId);
				fd=(FrontEndDTO) RestClientUtil.callService(inputList, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			String serverName=VeroniqaConstants.getServerName(req);
			

			//ShoppingCart cart=ShoppingCartService.getShoppingCart(req);
			List<Integer> womenDropDown=VeroniqaUtil.getWomenDropDown(fd);
			if(womenDropDown!=null && womenDropDown.size()>0)
			{
				mv.addObject("firstColumn",womenDropDown.get(0));
				mv.addObject("secondColumn",womenDropDown.get(1));
				mv.addObject("thirdColumn",womenDropDown.get(2));
				mv.addObject("fourthColumn",womenDropDown.get(3));
			}
			List<Integer> menDropDown=VeroniqaUtil.getMenDropDown(fd);
			if(menDropDown!=null && menDropDown.size()>0)
			{
				mv.addObject("firstColumnMen", menDropDown.get(0));
				mv.addObject("secondColumnMen", menDropDown.get(1));
				mv.addObject("thirdColumnMen", menDropDown.get(2));
				mv.addObject("fourthColumnMen", menDropDown.get(3));
			}
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			//mv.addObject("youAreHere", categoryTitleCase);
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", brandId);
			//mv.addObject("ShoppingCart", cart);
			//mv.addObject("category", category);
			mv.addObject("currentPage", currentPage);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("pageDTO", retVal);
			mv.addObject("sortPage", req.getAttribute("sortPage"));
			//mv.addObject("pageno", pageno);
			mv.addObject("serverName", serverName);
			mv.addObject("server",req.getRequestURL());
			/*if(retVal!=null && retVal.getData().size()>0)
			{
				log.info("Retrived ProductList for Event is size:"+retVal.getData().size());
			}
			*/
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucksort.min.js");
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("An exception occured in the getProductsForWomen"+e.getMessage());
			
		}
		return mv;
	}
	
	@RequestMapping(value="/getProductListForVendor.htm")
	public ModelAndView getProductListForVendor(@ModelAttribute("myProductFilter") ProductFilterDTO productFilter,@RequestParam("vendorName")String vendorName,@RequestParam("socialcategory")String socialcategory,@RequestParam(value="page",required=false)String pageStr,@RequestParam(value="style",required=false)String style,HttpServletRequest req,HttpServletResponse res)
	{
		log.info("vendorName "+vendorName.replaceAll(" ", "-"));
		ModelAndView mv=new ModelAndView("VendorPage");
		PageDTO retVal=null;
		FrontEndDTO fd=new FrontEndDTO();
		String brandstr="";
		String currentPage					=	"VendorPage";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			log.info("Event List is "+retval.size());
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		Long brandId=0l;
		//String lImageServerName="http://images2.solestruck.com/";
		String lImageServerName="http://commondatastorage.googleapis.com/images2.solestruck.com";
		List<Object> inputList = new ArrayList<Object>();
		try{
			try
			{
				brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
			}
			catch(Exception e)
			{
				e.printStackTrace();
				
			}
			
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objectsFirst=new ArrayList<Object>();
			objectsFirst.add(brandId);
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
			
				fd=(FrontEndDTO) RestClientUtil.callService(objectsFirst, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			List<Attribute> listofstyles=fd.getStyles();
			String category;
			String redirectURL = null;
			
			for(Attribute ab:listofstyles)
			{
				if(vendorName.equalsIgnoreCase(ab.getName()))
				{
					redirectURL ="/getProductsForCategory.htm?category=men&filterby=style&attval="+ab.getName();
					log.info("redirect URL is-->"+redirectURL);
					RequestDispatcher rd = req.getRequestDispatcher(redirectURL);
					res.reset();
					rd.forward(req, res);
					break;
				}
			}
		}
		catch(Exception e)
		{
			log.info("Exception is"+e.getMessage());
		}
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			String vendorname=GlobalNavigationController.toTitleCase(vendorName);
			String vendorAndCategory=vendorName+"-"+socialcategory;
			Vendor vendor=null;
			
			vendor=(Vendor) MemcachedUtil.get("getVendorByName_"+vendorname, MemcachedConstants.BRAND_FEATURES);
			if(vendor==null)
			{
				log.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  vendor data from DB");
				List<Object> inputList1 = new ArrayList<Object>();
				inputList1.add(vendorName);
				vendor=(Vendor) RestClientUtil.callService(inputList1, "getVendorByNameLowercase", "VendorBusinessService");
				MemcachedUtil.set("getVendorByName_"+vendorname,vendor,MemcachedConstants.BRAND_FEATURES);
			}
			if(vendor==null)
			{
				res.sendRedirect("/errorPage.htm");
				return mv;
			}
			int pageno=1;
			int itemsPerPage=48;
			log.info("Pagestr"+pageStr);
			ArrayList l=new ArrayList();
			Long styleid=null;
			if(style!=null)
			{
				HashMap<Long,String> hm=(HashMap<Long, String>) RestClientUtil.callService(l, "getAllAttributeMapForStyle", "AttributeBusinessService");			
				Set stylekeys=hm.keySet();
				Iterator i=stylekeys.iterator();
				while(i.hasNext())
				{
					Long tempId=(Long) i.next();
					String val=hm.get(tempId);
					if(val.toLowerCase().equals(style.toLowerCase()))
					{
						styleid=tempId;
						mv.addObject("filterby","styleonly");
						mv.addObject("selstyleid", styleid.toString());
						break;
					}
				}
				log.info("Styleid is"+styleid);
			}
			if(pageStr!=null && pageStr.trim().length()>0)
			{
				
				pageno=Integer.parseInt(pageStr);
			}
			log.info("Pagestr"+pageStr);
			
			
		   if(req.getSession().getAttribute("itemsPerPage")!=null)
		   {
			   itemsPerPage=Integer.parseInt((String)req.getSession().getAttribute("itemsPerPage"));
		   }
			  
			req.getSession().setAttribute("youAreHere",vendorAndCategory);

			req.getSession().setAttribute("youAreHere",socialcategory);
			if(req.getSession().getAttribute("youAreHere")!=null)
				log.info("Inside the show idp "+(String)req.getSession().getAttribute("youAreHere"));
			inputList.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			
			if(fd==null)
			{
			
				fd=(FrontEndDTO) RestClientUtil.callService(inputList, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			boolean cacheSwitch=true;
			Boolean tempBool=(Boolean)MemcachedUtil.get(MemcachedConstants.CATEGORY_CACHE_SWITCH,MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
			if(tempBool!=null)
				cacheSwitch=tempBool;
			if(cacheSwitch)	
				retVal=(PageDTO)MemcachedUtil.get("getProductsByVendorWithPagination"+"_"+vendorName+"_"+socialcategory+"_"+pageno+"_"+itemsPerPage, MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
			if(retVal==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
				objects.add(vendorName);
				objects.add(socialcategory);
				objects.add(pageno);
				objects.add(itemsPerPage);
				retVal=(PageDTO)RestClientUtil.callService(objects, "getProductsByVendorWithPagination", "ListingBusinessService");
				MemcachedUtil.set("getProductsByVendorWithPagination"+"_"+vendorName+"_"+socialcategory+"_"+pageno+"_"+itemsPerPage,retVal, MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
			}
			
			String serverName=VeroniqaConstants.getServerName(req);
			String appMode=EnvironmentUtil.getEnvironmentValue("AppMode");
						
			Long attributeid=null;
			log.info("------------------->>>>>>>>>>>   socialcategory is  ------>>>>>>>>>> " +socialcategory+ "------>>>>> vendorName is ---->>>>>>>>> " +vendorname);
			List<Integer> womenDropDown=VeroniqaUtil.getWomenDropDown(fd);
			if(womenDropDown!=null && womenDropDown.size()>0)
			{
				mv.addObject("firstColumn",womenDropDown.get(0));
				mv.addObject("secondColumn",womenDropDown.get(1));
				mv.addObject("thirdColumn",womenDropDown.get(2));
				mv.addObject("fourthColumn",womenDropDown.get(3));
			}
			List<Integer> menDropDown=VeroniqaUtil.getMenDropDown(fd);
			if(menDropDown!=null && menDropDown.size()>0)
			{
				mv.addObject("firstColumnMen", menDropDown.get(0));
				mv.addObject("secondColumnMen", menDropDown.get(1));
				mv.addObject("thirdColumnMen", menDropDown.get(2));
				mv.addObject("fourthColumnMen", menDropDown.get(3));
			}
			mv.addObject("pageDTO", retVal);
			mv.addObject("vendor", vendor);
			mv.addObject("appMode",appMode);
			mv.addObject("Newvendor",vendorName.replaceAll(" ", "-"));
			mv.addObject("vendorName", vendorname);
			mv.addObject("youAreHere", vendorName);
			mv.addObject("colors", fd.getColors());
			//log.info("------->>>>>> socialcategory is  ----->>>>>>>>> : " + socialcategory);
			if(socialcategory.equals("women"))
			{
				mv.addObject("sizes", fd.getWomenCPageSizes());
				mv.addObject("styles", fd.getWomenStyles());
			}
			else if (socialcategory.equals("men"))
			{
				mv.addObject("sizes", fd.getMenCPageSizes());
				mv.addObject("styles", fd.getMenStyles());
			}
			else
			{
				mv.addObject("sizes", fd.getSizes());
				mv.addObject("styles", fd.getStyles());
			}
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("womenfiltervendorlst", fd.getWomenFilterVendors());
			mv.addObject("menfiltervendorlst", fd.getMenFilterVendors());
			mv.addObject("brandid", brandId);
			mv.addObject("myProductFilter",new ProductFilterDTO());
			mv.addObject("socialcategory", socialcategory);
			mv.addObject("currentPage", currentPage);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("pageno",pageno);
			mv.addObject("serverName", serverName);
			mv.addObject("server",req.getRequestURL());
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucklist.min.js");
			if(retVal!=null)
			{
				log.info("Retrived product list size"+retVal.getData().size()+":selected Page:"+retVal.getSelectedPage()+":pageno:"+pageno);
			}
			//mv.addObject("currentCurrency",VeroniqaUtil.getCurrencyPreference(req));
			
		}
		catch(Exception e )
		{
			e.printStackTrace();
			log.info("An exception occured in getProductListForVendor"+e.getMessage());
		}
		return mv;
	}
	
	@RequestMapping(value="/getSaleItems.htm")
	public ModelAndView getSaleItems(@RequestParam(value="socialCatagory", required=false)String socialCatagory,HttpServletRequest req,@RequestParam(value="page",required=false)String pageStr,@RequestParam(value="vendorname",required=false)String vendorName)
	{
		log.info( " inside ger Sale Items "+vendorName);
		ModelAndView mv		= new ModelAndView("Sale");
		FrontEndDTO fd		= new FrontEndDTO();
		String brandstr		= "";
		String currentPage	= "SalePage";
		int pageno			= 1;
		int itemsPerPage	= 48;
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			log.info("EventList size is "+retval.size()+"and "+retval.get(0).getEventName());
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			
			if(pageStr!=null && pageStr!="")
			{
				pageno=Integer.parseInt(pageStr);
			}
			
			
		   if(req.getSession().getAttribute("itemsPerPage")!=null)
		   {
			   itemsPerPage=Integer.parseInt((String)req.getSession().getAttribute("itemsPerPage"));
			   
		   }
		   if(vendorName!=null)
		   {
			   ArrayList inp=new ArrayList();
			   inp.add(vendorName);
			   Attribute at=(Attribute) RestClientUtil.callService(inp, "getAttributeByName", "AttributeBusinessService");
			   Long attid=at.getKey().getId();
			   mv.addObject("vendorId", attid.toString());
			   log.info("Vendor id"+attid.toString());
		   }
			
			req.getSession().setAttribute("youAreHere","Sale");
			if(req.getSession().getAttribute("youAreHere")!=null)
				log.info("Inside the show idp "+(String)req.getSession().getAttribute("youAreHere"));
			
			
			PageDTO retVal=null;
			
			boolean cacheSwitch=true;
			Boolean tempBool=(Boolean)MemcachedUtil.get(MemcachedConstants.CATEGORY_CACHE_SWITCH,MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
			if(tempBool!=null)
				cacheSwitch=tempBool;
			if(cacheSwitch)	
				retVal=(PageDTO)MemcachedUtil.get("getSaleProductsWithPagination_"+pageno+"_"+itemsPerPage,MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
			if(retVal==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
				objects.add(null);
				if("null".equals(socialCatagory))
				{
					socialCatagory=null;
				}
				
				objects.add(socialCatagory);
				objects.add(pageno);
				objects.add(itemsPerPage);
				retVal=(PageDTO)RestClientUtil.callService(objects, "getSaleProductsWithPagination", "ListingBusinessService");
				MemcachedUtil.set("getSaleProductsWithPagination_"+pageno+"_"+itemsPerPage,retVal,MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
			}
				
			ArrayList<Object> objectsFirst=new ArrayList<Object>();
			objectsFirst.add(brandId);
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
			
				fd=(FrontEndDTO) RestClientUtil.callService(objectsFirst, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			String serverName=VeroniqaConstants.getServerName(req);
			
			List<Integer> womenDropDown=VeroniqaUtil.getWomenDropDown(fd);
			if(womenDropDown!=null && womenDropDown.size()>0)
			{
				mv.addObject("firstColumn",womenDropDown.get(0));
				mv.addObject("secondColumn",womenDropDown.get(1));
				mv.addObject("thirdColumn",womenDropDown.get(2));
				mv.addObject("fourthColumn",womenDropDown.get(3));
			}
			List<Integer> menDropDown=VeroniqaUtil.getMenDropDown(fd);
			if(menDropDown!=null && menDropDown.size()>0)
			{
				mv.addObject("firstColumnMen", menDropDown.get(0));
				mv.addObject("secondColumnMen", menDropDown.get(1));
				mv.addObject("thirdColumnMen", menDropDown.get(2));
				mv.addObject("fourthColumnMen", menDropDown.get(3));
			}
			//mv.addObject("pageDTO", retVal);
			mv.addObject("colors", fd.getColors());
			//log.info("------->>>>>> socialCatagory is  ----->>>>>>>>> : " + socialCatagory);
			if(socialCatagory!=null && socialCatagory.equals("women"))
			{
				mv.addObject("sizes", fd.getWomenSizes());
				mv.addObject("styles", fd.getWomenStyles());
			}
			else if (socialCatagory!=null && socialCatagory.equals("men"))
			{
				mv.addObject("sizes", fd.getMenSizes());
				mv.addObject("styles", fd.getMenStyles());
			}
			else
			{
				mv.addObject("sizes", fd.getSizes());
				mv.addObject("styles", fd.getStyles());
			}
			mv.addObject("gender", fd.getSocialCategory());
			mv.addObject("youAreHere", "Sale");
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("allvendorlst", fd.getAllVendors());
			mv.addObject("womenfiltervendorlst", fd.getWomenFilterVendors());
			mv.addObject("menfiltervendorlst", fd.getMenFilterVendors());
			mv.addObject("allfiltervendorlst", fd.getAllFilterVendors());
			mv.addObject("brandid", brandId);
			mv.addObject("myProductFilter",new ProductFilterDTO());
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("currentPage", currentPage);
			mv.addObject("serverName", serverName);
			mv.addObject("server",req.getRequestURL());
			mv.addObject("pageno", pageno);
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucksale.min.js");
			log.info("---------->>>>>>>>>>>>>>>>>>>Retrived Social Category list size"+fd.getSocialCategory().size());
			log.info("Retrived Sale Product size"+retVal.getData().size());
			//mv.addObject("currentCurrency",VeroniqaUtil.getCurrencyPreference(req));
			
			log.info(" Avaiable pages :: "+retVal.getAvailablePages());
			
			
			DiscountProgram program=VeroniqaUtil.getDiscountProgramForFB();
			if(program!=null&&program.getShowCartCount())
			{
				//realtime customers tracking code
				RealTimeCustomersChannelService rltmservice=new RealTimeCustomersChannelService();
				rltmservice.setInCartDetails(retVal);
				String clientid=VeroniqaCookieUtil.getCookieValue(req, "JSESSIONID");
				String token=rltmservice.getRealTimeToken_CategoryPages(clientid, retVal);
				mv.addObject("realtimetoken",token);
				mv.addObject("showcartcount","true");
			}
			mv.addObject("pageDTO", retVal);
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getSaleItems"+e.getMessage());
		}
		return mv;
	}
	
	
	@RequestMapping(value="/getSaleItemsBySize.htm")
	public ModelAndView getSaleItemsBySize(@RequestParam(value="socialCatagory",required=false)String socialCatagory,@RequestParam(value="page",required=false)String pageStr,@RequestParam(value="size",required=false)String size,HttpServletRequest req)
	{
		//log.info("attId: new attid values::"+attId+":pageStr:"+pageStr);
		ModelAndView mv=new ModelAndView("Sale");
		FrontEndDTO fd=new FrontEndDTO();
		String brandstr="";
		String currentPage = "SalePageBySize";
		Double requiredSize = 0.0;
		int itemsPerPage=48;
		int pageno=1;
		try
		{
			try
			{
				List<Event> retval=null;
				retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
				
				if(retval==null)
				{
					ArrayList<Object> objects=new ArrayList<Object>();
				
					retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
					if(retval!=null && retval.size()>0)
						MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
					
				}
				if(retval!=null&&retval.size()>0)
					mv.addObject("eventList",retval);
				
				log.info("EventList size is "+retval.size()+"and "+retval.get(0).getEventName());
				
				
			}
			catch(Exception e)
			{
				log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
			}
			
			if(socialCatagory!=null)
			{
			socialCatagory=socialCatagory.replace("s", "");
			mv.addObject("filterby", "normal");
			}
			else
			{
				socialCatagory="women";
				mv.addObject("filterby", "sizeonly");
			}
			if(size!=null && size.contains("size"))
			{
				String sizeArray[]=size.split("-");
				size=sizeArray[1];
			}
			if(size!=null && size!="")
			{
				requiredSize=Double.parseDouble(size);
			}
			else
			{
				requiredSize=null;
			}
			if(pageStr!=null &&  pageStr!="")
			{
				pageno=Integer.parseInt(pageStr);
			}
			log.info("socialCatagory:"+socialCatagory+":pageno:"+pageno+":requiredSize:"+requiredSize);
			
				
				brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
		   if(req.getSession().getAttribute("itemsPerPage")!=null)
		   {
			   itemsPerPage=Integer.parseInt((String)req.getSession().getAttribute("itemsPerPage"));
		   }
			
			PageDTO retVal=null;
			
			//log.info(" size :: "+size+":socialCatagory:"+socialCatagory);
			
			
			boolean cacheSwitch=true;
			Boolean tempBool=(Boolean)MemcachedUtil.get(MemcachedConstants.CATEGORY_CACHE_SWITCH,MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
			if(tempBool!=null)
				cacheSwitch=tempBool;
			if(cacheSwitch)	
				retVal=(PageDTO)MemcachedUtil.get("getSaleProductsWithPagination_"+socialCatagory.trim()+"_"+requiredSize+"_"+pageno+"_"+itemsPerPage, MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
			if(retVal==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
				objects.add(requiredSize);
				objects.add(socialCatagory.trim());
				objects.add(pageno);
				objects.add(itemsPerPage);
				retVal=(PageDTO)RestClientUtil.callService(objects, "getSaleProductsWithPagination", "ListingBusinessService");
				MemcachedUtil.set("getSaleProductsWithPagination_"+socialCatagory.trim()+"_"+requiredSize+"_"+pageno+"_"+itemsPerPage, retVal,MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
			}
				
			ArrayList<Object> objectsFirst=new ArrayList<Object>();
			objectsFirst.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
			
				fd=(FrontEndDTO) RestClientUtil.callService(objectsFirst, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			String serverName=VeroniqaConstants.getServerName(req);
			
			req.getSession().setAttribute("youAreHere","Sale");
			if(req.getSession().getAttribute("youAreHere")!=null)
				log.info("Inside the show idp "+(String)req.getSession().getAttribute("youAreHere"));
			List<Integer> womenDropDown=VeroniqaUtil.getWomenDropDown(fd);
			if(womenDropDown!=null && womenDropDown.size()>0)
			{
				mv.addObject("firstColumn",womenDropDown.get(0));
				mv.addObject("secondColumn",womenDropDown.get(1));
				mv.addObject("thirdColumn",womenDropDown.get(2));
				mv.addObject("fourthColumn",womenDropDown.get(3));
			}
			List<Integer> menDropDown=VeroniqaUtil.getMenDropDown(fd);
			if(menDropDown!=null && menDropDown.size()>0)
			{
				mv.addObject("firstColumnMen", menDropDown.get(0));
				mv.addObject("secondColumnMen", menDropDown.get(1));
				mv.addObject("thirdColumnMen", menDropDown.get(2));
				mv.addObject("fourthColumnMen", menDropDown.get(3));
			}
			//mv.addObject("pageDTO", retVal);
			mv.addObject("colors", fd.getColors());
			//log.info("------->>>>>> socialCatagory is  ----->>>>>>>>> : " + socialCatagory);
			if(socialCatagory!=null && socialCatagory.equals("women"))
			{
				mv.addObject("sizes", fd.getWomenSizes());
				mv.addObject("styles", fd.getWomenStyles());
			}
			else if (socialCatagory!=null && socialCatagory.equals("men"))
			{
				mv.addObject("sizes", fd.getMenSizes());
				mv.addObject("styles", fd.getMenStyles());
			}
			else
			{
				mv.addObject("sizes", fd.getSizes());
				mv.addObject("styles", fd.getStyles());
			}
			mv.addObject("gender", fd.getSocialCategory());
			mv.addObject("youAreHere", "Sale");
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("allvendorlst", fd.getAllVendors());
			mv.addObject("womenfiltervendorlst", fd.getWomenFilterVendors());
			mv.addObject("menfiltervendorlst", fd.getMenFilterVendors());
			mv.addObject("allfiltervendorlst", fd.getAllFilterVendors());
			mv.addObject("brandid", brandId);
			mv.addObject("socialCatogery", socialCatagory);
			mv.addObject("saleSize",requiredSize);
			mv.addObject("currentPage", currentPage);
			mv.addObject("myProductFilter",new ProductFilterDTO());
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("serverName", serverName);
			mv.addObject("server",req.getRequestURL());
			//log.info("Retrived Sale Product size"+retVal.getData().size());
		   //log.info("Retrived Sale Available pages :"+retVal.getAvailablePages());
			
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucksale.min.js");
			//mv.addObject("currentCurrency",VeroniqaUtil.getCurrencyPreference(req));
			
			DiscountProgram program=VeroniqaUtil.getDiscountProgramForFB();
			if(program!=null&&program.getShowCartCount())
			{
				//realtime customers tracking code
				RealTimeCustomersChannelService rltmservice=new RealTimeCustomersChannelService();
				rltmservice.setInCartDetails(retVal);
				String clientid=VeroniqaCookieUtil.getCookieValue(req, "JSESSIONID");
				String token=rltmservice.getRealTimeToken_CategoryPages(clientid, retVal);
				mv.addObject("realtimetoken",token);
				mv.addObject("showcartcount","true");
			}
			mv.addObject("pageDTO", retVal);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getSaleItemsBySize"+e.getMessage());
		}
		return mv;
	}
	
	
	@RequestMapping(value="/getNewArrivalProduct.htm") 
	public ModelAndView getNewArrivalProduct(HttpServletRequest req,@RequestParam(value="SocialCategory",required=false)String sc,@RequestParam(value="size",required=false)String size,@RequestParam(value="page",required=false)String pageStr)
	{
		log.info("sc:"+sc+" page: "+pageStr+":size:"+size);
		if(sc==null || sc=="")
		{
			sc=null;
		}
		Double requiredSize=0.0;
		//log.info("***Inside getNewArrivalProduct Model And View*****"+" Social Category ::"+sc);
		PageDTO retVal=null;
		ModelAndView mv=new ModelAndView("NewArrival");
		FrontEndDTO fd=new FrontEndDTO();
		String brandstr="";
		String currentPage					=	"NewArrivalPage";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			log.info("EventList size is "+retval.size()+"and "+retval.get(0).getEventName());
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			
			int pageno=1;
			int itemsPerPage=48;
			
			if(size!=null && size!="")
			{
				requiredSize=Double.parseDouble(size);
			}
			else
			{
				requiredSize=null;
			}
			if(pageStr!=null &&  pageStr!="")
			{
				pageno=Integer.parseInt(pageStr);
			}
			log.info("socialCatagory:"+sc+":pageno:"+pageno+":requiredSize:"+requiredSize);
			//log.info("Pagestr"+pageStr);
			
			log.info("pageNumber:"+pageno+":sc:"+sc+":requiredSize:"+requiredSize);
			
		   if(req.getSession().getAttribute("itemsPerPage")!=null)
		   {
			   itemsPerPage=Integer.parseInt((String)req.getSession().getAttribute("itemsPerPage"));
			  
		   }
		  
			/*String socialCatogery="women"; 
			 if(req.getSession().getAttribute("sc")!=null)
			   {
				 socialCatogery=(String)req.getSession().getAttribute("sc");
				 req.getSession().setAttribute("sc", null);
			   }*/
			req.getSession().setAttribute("youAreHere","New Arrivals");
			if(req.getSession().getAttribute("youAreHere")!=null)
				log.info("Inside the show idp "+(String)req.getSession().getAttribute("youAreHere"));
			
			boolean cacheSwitch=true;
			Boolean tempBool=(Boolean)MemcachedUtil.get(MemcachedConstants.CATEGORY_CACHE_SWITCH,MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
			if(tempBool!=null)
				cacheSwitch=tempBool;
			if(cacheSwitch)	
				retVal=(PageDTO)MemcachedUtil.get("getNewArrivalProductDetailsBasedOnSizesWithPagination"+sc+"_"+requiredSize+"_"+pageno+"_"+itemsPerPage, MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
			if(retVal==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
				if("null".equals(sc))
				{
					sc=null;
				}
				objects.add(sc);
				objects.add(requiredSize);
				objects.add(pageno);
				objects.add(itemsPerPage);
				retVal=(PageDTO)RestClientUtil.callService(objects, "getNewArrivalProductDetailsBasedOnSizesWithPagination", "ListingBusinessService");
				MemcachedUtil.set("getNewArrivalProductDetailsBasedOnSizesWithPagination"+sc+"_"+requiredSize+"_"+pageno+"_"+itemsPerPage,retVal, MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
			}
			
			log.info("FromRecord is 0 and toRecord is 5 in getNewArrivalProductJSON.htm");
			ArrayList<Object> objectsFirst=new ArrayList<Object>();
			objectsFirst.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				fd=(FrontEndDTO) RestClientUtil.callService(objectsFirst, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			String serverName=VeroniqaConstants.getServerName(req);
			
			log.info(" page no:"+pageno+":size :"+requiredSize+": sc :"+sc);
			
			List<Integer> womenDropDown=VeroniqaUtil.getWomenDropDown(fd);
			if(womenDropDown!=null && womenDropDown.size()>0)
			{
				mv.addObject("firstColumn",womenDropDown.get(0));
				mv.addObject("secondColumn",womenDropDown.get(1));
				mv.addObject("thirdColumn",womenDropDown.get(2));
				mv.addObject("fourthColumn",womenDropDown.get(3));
			}
			List<Integer> menDropDown=VeroniqaUtil.getMenDropDown(fd);
			if(menDropDown!=null && menDropDown.size()>0)
			{
				mv.addObject("firstColumnMen", menDropDown.get(0));
				mv.addObject("secondColumnMen", menDropDown.get(1));
				mv.addObject("thirdColumnMen", menDropDown.get(2));
				mv.addObject("fourthColumnMen", menDropDown.get(3));
			}
			mv.addObject("pageDTO", retVal);
			mv.addObject("colors", fd.getColors());
			//log.info("------->>>>>> socialCatagory is  ----->>>>>>>>> : " + sc);
			if(sc!=null && sc.equals("women"))
			{
				mv.addObject("sizes", fd.getWomenSizes());
				mv.addObject("styles", fd.getWomenStyles());
			}
			else if (sc!=null && sc.equals("men"))
			{
				mv.addObject("sizes", fd.getMenSizes());
				mv.addObject("styles", fd.getMenStyles());
			}
			else
			{
				mv.addObject("sizes", fd.getSizes());
				mv.addObject("styles", fd.getStyles());
			}
			mv.addObject("womensizes", fd.getWomenSizes());
			mv.addObject("mensizes", fd.getMenSizes());
			mv.addObject("allsizes", fd.getSizes());
			mv.addObject("gender", fd.getSocialCategory());
			mv.addObject("youAreHere","New Arrivals");
			if(fd.getWomenVendors()!=null)
				//log.info("----->>>>>>>> All Vendor List is ------>>>>>>>>>> : " + fd.getWomenVendors().size());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			if(fd.getMenVendors()!=null)
				//log.info("----->>>>>>>> All Vendor List is ------>>>>>>>>>> : " + fd.getMenVendors().size());
			mv.addObject("menvendorlst", fd.getMenVendors());
			if(fd.getAllVendors()!=null)
			//log.info("----->>>>>>>> All Vendor List is ------>>>>>>>>>> : " + fd.getAllVendors().size());
			mv.addObject("allvendorlst", fd.getAllVendors());
			mv.addObject("womenfiltervendorlst", fd.getWomenFilterVendors());
			mv.addObject("menfiltervendorlst", fd.getMenFilterVendors());
			mv.addObject("allfiltervendorlst", fd.getAllFilterVendors());
			mv.addObject("brandid", brandId);
			mv.addObject("myProductFilter",new ProductFilterDTO());
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("currentPage", currentPage);
			mv.addObject("pageno",pageno);
			mv.addObject("newSize",requiredSize);
			mv.addObject("serverName", serverName);
			mv.addObject("server",req.getRequestURL());
			mv.addObject("sc", sc);
			
			if(retVal!=null)
			{
				log.info("Inside getNewArrivalProduct: "+retVal.getData().size());
				log.info("Inside getNew styles size  : "+fd.getStyles().size());
				mv.addObject("checkData", retVal.getData().size());
			}
			
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucknewarrival.min.js");
			//mv.addObject("currentCurrency",VeroniqaUtil.getCurrencyPreference(req));
		
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getNewArrivalProduct"+e.getMessage());
		}
		return mv;

	}
	
	@RequestMapping(value="/getVintageProduct.htm")
	public ModelAndView getVintageProduct(@RequestParam(value="style",required=false  )String style,@RequestParam(value="SocialCategory",required=false )String  socialCatogery,@RequestParam(value="page",required=false)String pageStr,@RequestParam(value="filterby",required=false)String filterby,@RequestParam(value="styleatt",required=false)String styleatt,HttpServletRequest req)
	{
	log.info("socialCatogery:"+socialCatogery);	
	ModelAndView mv				= new ModelAndView("Style");
	FrontEndDTO fd				= new FrontEndDTO();
	String brandstr				= "";
	String currentPage			= "VintagePage";
	int pageno					= 1;
	int itemsPerPage			= 48;
	try
	{
		brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
	}
	catch(Exception e)
	{
		e.printStackTrace();
		
	}
	
	try
	{
		List<Event> retval=null;
		retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
		
		if(retval==null)
		{
			ArrayList<Object> objects=new ArrayList<Object>();
		
			retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
			if(retval!=null && retval.size()>0)
				MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
			
		}
		if(retval!=null&&retval.size()>0)
			mv.addObject("eventList",retval);
		
		
		
	}
	catch(Exception e)
	{
		log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
	}
	Long brandId=0l;
	try
	{
		if(brandstr!=null)
		{
			brandId=Long.parseLong(brandstr);
		}
		
		
		
		if(pageStr!=null &&  pageStr!="")
		{
			pageno=Integer.parseInt(pageStr);
		}
		ArrayList<Object> objectsFirst=new ArrayList<Object>();
		objectsFirst.add(brandId);
		
		fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
		if(fd==null)
		{
		
			fd=(FrontEndDTO) RestClientUtil.callService(objectsFirst, "getFrontEndDTOFromCache", "ListingBusinessService");
			 
				MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
		}
		
		   if(req.getSession().getAttribute("itemsPerPage")!=null)
		   {
			   itemsPerPage=Integer.parseInt((String)req.getSession().getAttribute("itemsPerPage"));
		   }
	  
		req.getSession().setAttribute("youAreHere",style);
		if(req.getSession().getAttribute("youAreHere")!=null)
			log.info("Inside the show idp "+(String)req.getSession().getAttribute("youAreHere"));
		String styleTitleCase=style.substring(0, 1).toUpperCase()+style.substring(1);
		if(filterby!=null)
		{
			mv.addObject("filterby", filterby);
			if(filterby.equals("style"))
			{
			if(styleatt!=null)
			{
				ArrayList inp=new ArrayList();
				for(Attribute fdstyle:fd.getStyles())
				{
					if(fdstyle.getName()!=null && styleatt!=null && fdstyle.getName().equalsIgnoreCase(styleatt))
					{
						styleatt=fdstyle.getName();
						break;
					}
				}
				inp.add(styleatt);
				Attribute at=(Attribute) RestClientUtil.callService(inp, "getAttributeByNameForStyle", "AttributeBusinessService");
				Long attid=at.getKey().getId();
				mv.addObject("attributeId", attid.toString());
				mv.addObject("attVal",styleatt.substring(0,1).toUpperCase()+styleatt.substring(1).toLowerCase());
			}
			}
		}
		
		PageDTO retVal=null;
		boolean cacheSwitch=true;
		Boolean tempBool=(Boolean)MemcachedUtil.get(MemcachedConstants.CATEGORY_CACHE_SWITCH,MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
		if(tempBool!=null)
			cacheSwitch=tempBool;
			
		if(cacheSwitch)
			retVal=(PageDTO)MemcachedUtil.get("getVintageProductsWithPagination_"+socialCatogery+"_"+pageno+"_"+itemsPerPage, MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
		if(retVal==null)
		{
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(null);
			if("null".equals(socialCatogery))
			{
				socialCatogery=null;
			}
			objects.add(socialCatogery);
			objects.add(pageno);
			objects.add(itemsPerPage);
			retVal=(PageDTO)RestClientUtil.callService(objects, "getVintageProductsWithPagination", "ListingBusinessService");
			MemcachedUtil.set("getVintageProductsWithPagination_"+socialCatogery+"_"+pageno+"_"+itemsPerPage,retVal,MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
		}
		String vendorname="vintage";
		String vendorAndCategory=vendorname+"-"+socialCatogery;
		Vendor vendor=null;
		
		vendor=(Vendor) MemcachedUtil.get("getVendorByName_"+vendorname, MemcachedConstants.BRAND_FEATURES);
		if(vendor==null)
		{
			log.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  vendor data from DB");
			List<Object> inputList1 = new ArrayList<Object>();
			inputList1.add(vendorname);
			vendor=(Vendor) RestClientUtil.callService(inputList1, "getVendorByNameLowercase", "VendorBusinessService");
			MemcachedUtil.set("getVendorByName_"+vendorname,vendor,MemcachedConstants.BRAND_FEATURES);
		}
		
		String serverName=VeroniqaConstants.getServerName(req);
		
		List<Integer> womenDropDown=VeroniqaUtil.getWomenDropDown(fd);
		if(womenDropDown!=null && womenDropDown.size()>0)
		{
			mv.addObject("firstColumn",womenDropDown.get(0));
			mv.addObject("secondColumn",womenDropDown.get(1));
			mv.addObject("thirdColumn",womenDropDown.get(2));
			mv.addObject("fourthColumn",womenDropDown.get(3));
		}
		List<Integer> menDropDown=VeroniqaUtil.getMenDropDown(fd);
		if(menDropDown!=null && menDropDown.size()>0)
		{
			mv.addObject("firstColumnMen", menDropDown.get(0));
			mv.addObject("secondColumnMen", menDropDown.get(1));
			mv.addObject("thirdColumnMen", menDropDown.get(2));
			mv.addObject("fourthColumnMen", menDropDown.get(3));
		}
		mv.addObject("pageDTO", retVal);
		mv.addObject("colors", fd.getColors());
		//log.info("------->>>>>> socialCatogery is  ----->>>>>>>>> : " + socialCatogery);
		if(socialCatogery!=null && socialCatogery.equals("women"))
		{
			mv.addObject("sizes", fd.getWomenSizes());
			mv.addObject("styles", fd.getWomenStyles());
		}
		else if (socialCatogery!=null && socialCatogery.equals("men"))
		{
			mv.addObject("sizes", fd.getMenSizes());
			mv.addObject("styles", fd.getMenStyles());
		}
		else
		{
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("styles", fd.getStyles());
		}
		mv.addObject("gender", fd.getSocialCategory());
		mv.addObject("youAreHere", styleTitleCase);
		mv.addObject("womenvendorlst", fd.getWomenVendors());
		mv.addObject("menvendorlst", fd.getMenVendors());
		mv.addObject("allvendorlst", fd.getAllVendors());
		mv.addObject("womenfiltervendorlst", fd.getWomenFilterVendors());
		mv.addObject("menfiltervendorlst", fd.getMenFilterVendors());
		mv.addObject("allfiltervendorlst", fd.getAllFilterVendors());
		mv.addObject("socialCatogery", socialCatogery);
		mv.addObject("currentPage", currentPage);
		mv.addObject("brandid", brandId);
		mv.addObject("pageno", pageno);
		mv.addObject("vendor",vendor);
		mv.addObject("vendorName","Vintage Collections");
		mv.addObject("myProductFilter",new ProductFilterDTO());
		//mv.addObject("customerRegistration",new UserDetail() );
		mv.addObject("serverName", serverName);
		mv.addObject("server",req.getRequestURL());
		mv.addObject("common_css","solestruck.min.css");
		mv.addObject("common_js","solestruckstyle.min.js");
		log.info("Retrived Vintage Product size"+retVal.getData().size()+":selected page number :"+retVal.getSelectedPage()+":Available pages:"+retVal.getAvailablePages());
		//mv.addObject("currentCurrency",VeroniqaUtil.getCurrencyPreference(req));
	}
	catch(Exception e)
	{
		e.printStackTrace();
		log.info("An exception occured in the getVintageProduct"+e.getMessage());
	}
	return mv;
}
	
	@RequestMapping(value="/getVintageProductBySize.htm")
	public ModelAndView getVintageProductBySize(@RequestParam(value="socialCatagory",required=false )String socialCatagory,@RequestParam(value="page",required=false)String pageStr,@RequestParam(value="size",required=false)String size,HttpServletRequest req)
	{
		//log.info("attId::"+attId);
		log.info("sc:"+socialCatagory+":pageStr:"+pageStr+":size:"+size);
		ModelAndView mv=new ModelAndView("Style");
		FrontEndDTO fd=new FrontEndDTO();
		String brandstr="";
		String currentPage	=	"VintagePageBySize";
		Double requiredSize=0.0;
		socialCatagory=socialCatagory.replace("s", "");
		int pageno=1;
		if(size!=null && size!="")
		{
			requiredSize=Double.parseDouble(size);
		}
		else
		{
			requiredSize=null;
		}
		if(pageStr!=null &&  pageStr!="")
		{
			pageno=Integer.parseInt(pageStr);
		}
		
		log.info("socialCatagory:"+socialCatagory+":pageno:"+pageno+":requiredSize:"+requiredSize);
		
		
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		try
		{
			//size = Double.valueOf(attId.trim()).doubleValue();
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			int itemsPerPage=48;
			
		   if(req.getSession().getAttribute("itemsPerPage")!=null)
		   {
			   itemsPerPage=Integer.parseInt((String)req.getSession().getAttribute("itemsPerPage"));
		   }
		  // log.info(" size :: "+size+":socialCatagory:"+socialCatagory);
			PageDTO retVal=null;
			boolean cacheSwitch=true;
			Boolean tempBool=(Boolean)MemcachedUtil.get(MemcachedConstants.CATEGORY_CACHE_SWITCH,MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);;
			if(tempBool!=null)
				cacheSwitch=tempBool;
			if(cacheSwitch)	
				retVal=(PageDTO)MemcachedUtil.get("getVintageProductsWithPagination_"+socialCatagory.trim()+"_"+requiredSize+"_"+socialCatagory.trim()+"_"+pageno+"_"+itemsPerPage, MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
			if(retVal==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
				objects.add(requiredSize);
				objects.add(socialCatagory.trim());
				objects.add(pageno);
				objects.add(itemsPerPage);
				retVal=(PageDTO)RestClientUtil.callService(objects, "getVintageProductsWithPagination", "ListingBusinessService");
				MemcachedUtil.set("getVintageProductsWithPagination_"+socialCatagory.trim()+"_"+requiredSize+"_"+socialCatagory.trim()+"_"+pageno+"_"+itemsPerPage,retVal, MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
			}
			
			
			ArrayList<Object> objectsFirst=new ArrayList<Object>();
			objectsFirst.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				fd=(FrontEndDTO) RestClientUtil.callService(objectsFirst, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			String vendorname="vintage";
			String vendorAndCategory=vendorname+"-"+socialCatagory;
			Vendor vendor=null;
			
			vendor=(Vendor) MemcachedUtil.get("getVendorByName_"+vendorname, MemcachedConstants.BRAND_FEATURES);
			if(vendor==null)
			{
				log.info(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>  vendor data from DB");
				List<Object> inputList1 = new ArrayList<Object>();
				inputList1.add(vendorname);
				vendor=(Vendor) RestClientUtil.callService(inputList1, "getVendorByNameLowercase", "VendorBusinessService");
				MemcachedUtil.set("getVendorByName_"+vendorname,vendor,MemcachedConstants.BRAND_FEATURES);
			}
			
			String serverName=VeroniqaConstants.getServerName(req);
			
			req.getSession().setAttribute("youAreHere","vintage");
			if(req.getSession().getAttribute("youAreHere")!=null)
				log.info("Inside the show idp "+(String)req.getSession().getAttribute("youAreHere"));
			mv.addObject("pageDTO", retVal);
			List<Integer> womenDropDown=VeroniqaUtil.getWomenDropDown(fd);
			if(womenDropDown!=null && womenDropDown.size()>0)
			{
				mv.addObject("firstColumn",womenDropDown.get(0));
				mv.addObject("secondColumn",womenDropDown.get(1));
				mv.addObject("thirdColumn",womenDropDown.get(2));
				mv.addObject("fourthColumn",womenDropDown.get(3));
			}
			List<Integer> menDropDown=VeroniqaUtil.getMenDropDown(fd);
			if(menDropDown!=null && menDropDown.size()>0)
			{
				mv.addObject("firstColumnMen", menDropDown.get(0));
				mv.addObject("secondColumnMen", menDropDown.get(1));
				mv.addObject("thirdColumnMen", menDropDown.get(2));
				mv.addObject("fourthColumnMen", menDropDown.get(3));
			}
			mv.addObject("colors", fd.getColors());
			//log.info("------->>>>>> socialCatagory is  ----->>>>>>>>> : " + socialCatagory);
			if(socialCatagory!=null && socialCatagory.equals("women"))
			{
				mv.addObject("sizes", fd.getWomenSizes());
				mv.addObject("styles", fd.getWomenStyles());
			}
			else if (socialCatagory!=null && socialCatagory.equals("men"))
			{
				mv.addObject("sizes", fd.getMenSizes());
				mv.addObject("styles", fd.getMenStyles());
			}
			else
			{
				mv.addObject("sizes", fd.getSizes());
				mv.addObject("styles", fd.getStyles());
			}
			mv.addObject("youAreHere", "Vintage");
			mv.addObject("gender", fd.getSocialCategory());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("allvendorlst", fd.getAllVendors());
			mv.addObject("womenfiltervendorlst", fd.getWomenFilterVendors());
			mv.addObject("menfiltervendorlst", fd.getMenFilterVendors());
			mv.addObject("allfiltervendorlst", fd.getAllFilterVendors());
			mv.addObject("currentPage", currentPage);
			mv.addObject("vintageSize", requiredSize);
			mv.addObject("vendor",vendor);
			mv.addObject("vendorName","Vintage Collections");
			mv.addObject("brandid", brandId);
			mv.addObject("socialCatogery", socialCatagory);
			mv.addObject("myProductFilter",new ProductFilterDTO());
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("serverName", serverName);
			mv.addObject("server",req.getRequestURL());
			log.info("Retrived Vintage Product sizeL:"+retVal.getData().size());
			log.info("Retrived Vintage Available pages :"+retVal.getAvailablePages());
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestruckstyle.min.js");
			//mv.addObject("currentCurrency",VeroniqaUtil.getCurrencyPreference(req));
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getVintageProduct"+e.getMessage());
		}
		return mv;
	}
	@RequestMapping(value="/getProductListForComingSoon.htm")
	public ModelAndView getProductsForComingSoon(@ModelAttribute("myProductFilter") ProductFilterDTO productFilter,@RequestParam(value="page",required=false)String pageStr,HttpServletRequest req)
	{
		
		log.info(" inside getProductsForComingSoon! ");
		String category="women";
		ModelAndView mv						=	new ModelAndView("ComingSoon");
		FrontEndDTO fd						=	new FrontEndDTO();
		PageDTO retVal						=	null;
		String brandstr						=	"";
		String currentPage					=	"ComingSoonPage";
		try
		{
			brandstr						=	EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}//women_sort_count
		
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			log.info("Event List is "+retval.size());
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		Long brandId=0l;
		try
		{
			Integer  fromRecord				=	0;
			Integer toRecord				=	12;
			String categoryTitleCase=category.substring(0, 1).toUpperCase()+category.substring(1);
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			
			int pageno=1;
			int itemsPerPage=48;
			
			
			
			   if(req.getSession().getAttribute("itemsPerPage")!=null)
			   {
				   itemsPerPage=Integer.parseInt((String)req.getSession().getAttribute("itemsPerPage"));
			   }
		  
			if(pageStr!=null && pageStr.trim().length()>0)
			{
				
				pageno=Integer.parseInt(pageStr);
			}
		
			String youareHere=null;
			req.getSession().setAttribute("youAreHere","Coming Soon");
			if(req.getSession().getAttribute("youAreHere")!=null)
			{
				log.info("Inside the show idp "+(String)req.getSession().getAttribute("youAreHere"));
				youareHere=(String)req.getSession().getAttribute("youAreHere");
			}
			
			boolean cacheSwitch=true;
			Boolean tempBool=(Boolean)MemcachedUtil.get(MemcachedConstants.CATEGORY_CACHE_SWITCH,MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
			if(tempBool!=null)
				cacheSwitch=tempBool;
			if(cacheSwitch)	
				retVal=(PageDTO)MemcachedUtil.get("getComingSoonProductDetailsWithPagination_"+pageno+"_"+itemsPerPage, MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
			if(retVal==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
				objects.add("women");
				objects.add(pageno);
				objects.add(itemsPerPage);
				retVal=(PageDTO)RestClientUtil.callService(objects, "getComingSoonProductDetailsWithPagination", "ListingBusinessService");
				MemcachedUtil.set("getComingSoonProductDetailsWithPagination_"+pageno+"_"+itemsPerPage, retVal,MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
				
			}
			ArrayList<Object> list=new ArrayList<Object>();
			list.add(brandId);
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				fd=(FrontEndDTO) RestClientUtil.callService(list, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			String serverName=VeroniqaConstants.getServerName(req);
			
			//ShoppingCart cart=ShoppingCartService.getShoppingCart(req);
			List<Integer> womenDropDown=VeroniqaUtil.getWomenDropDown(fd);
			if(womenDropDown!=null && womenDropDown.size()>0)
			{
				mv.addObject("firstColumn",womenDropDown.get(0));
				mv.addObject("secondColumn",womenDropDown.get(1));
				mv.addObject("thirdColumn",womenDropDown.get(2));
				mv.addObject("fourthColumn",womenDropDown.get(3));
			}
			List<Integer> menDropDown=VeroniqaUtil.getMenDropDown(fd);
			if(menDropDown!=null && menDropDown.size()>0)
			{
				mv.addObject("firstColumnMen", menDropDown.get(0));
				mv.addObject("secondColumnMen", menDropDown.get(1));
				mv.addObject("thirdColumnMen", menDropDown.get(2));
				mv.addObject("fourthColumnMen", menDropDown.get(3));
			}
			mv.addObject("colors", fd.getColors());
			//log.info("------->>>>>> socialCatagory is  ----->>>>>>>>> : " + category);
			if(category.equals("women"))
			{
				mv.addObject("sizes", fd.getWomenSizes());
				mv.addObject("styles", fd.getWomenStyles());
			}
			else if (category.equals("men"))
			{
				mv.addObject("sizes", fd.getMenSizes());
				mv.addObject("styles", fd.getMenStyles());
			}
			else
			{
				mv.addObject("sizes", fd.getSizes());
				mv.addObject("styles", fd.getStyles());
			}
			mv.addObject("gender", fd.getSocialCategory());
			mv.addObject("youAreHere", "Coming Soon");
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("allvendorlst", fd.getAllVendors());
			mv.addObject("womenfiltervendorlst", fd.getWomenFilterVendors());
			mv.addObject("menfiltervendorlst", fd.getMenFilterVendors());
			mv.addObject("allfiltervendorlst", fd.getAllFilterVendors());
			mv.addObject("brandid", brandId);
			mv.addObject("myProductFilter",new ProductFilterDTO());
			//mv.addObject("ShoppingCart", cart);
			mv.addObject("category", category);
			mv.addObject("currentPage", currentPage);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("pageDTO", retVal);
			mv.addObject("pageno", pageno);
			mv.addObject("serverName", serverName);
			mv.addObject("server",req.getRequestURL());
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestruckcoming.min.js");
			log.info("Retrived ProductList size:"+retVal.getData().size());
			//mv.addObject("currentCurrency",VeroniqaUtil.getCurrencyPreference(req));
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("An exception occured in the getProductsForComingSoon"+e.getMessage());
			
		}
		return mv;
	}
	
	
	/*@RequestMapping(value="/getProductsForCategoryJSON.htm")
	public @ResponseBody PageDTO getProductsForCategoryJSON(@RequestParam("category")String category,@RequestParam("loopVar") Integer loopVar,@RequestParam("offSet") Integer offSet,HttpServletRequest req)
	{
		log.info(" Inside getProductsForCategoryJSON ");
		log.info("category"+category+":loopVar:"+loopVar+":offSet:"+offSet);
		
		FrontEndDTO fd						=	new FrontEndDTO();
		PageDTO retVal						=	new PageDTO();
	//	List<ProductDTO> retVal=new ArrayList<ProductDTO>();
		ListingBusinessServiceClient lbsc   =   new ListingBusinessServiceClient();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		try
		{
			Integer  fromRecord=(loopVar-1)*offSet;
			Integer toRecord=loopVar*offSet;
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			log.info("FromRecord is "+fromRecord.intValue()+" and toRecord is "+toRecord.intValue()+ "in getProductForJSONmethod");
			//retVal=(List<ProductDTO>) lbsc.getProductsBySocialCategoryClient(category,brandId,fromRecord,toRecord);
			retVal=lbsc.getProductsBySocialCategoryClient(category,brandId,loopVar,offSet);
			
			log.info("size::"+retVal.getData().size());
			log.info("itemsperpage::"+retVal.getItemsPerPage());
			log.info("availabepages::"+retVal.getAvailablePages());
			log.info("selectedpage::"+retVal.getSelectedPage());
			
			
			
			
			if(retVal.size()>0)
			{
				log.info("nextAvailable in productDTO is "+retVal.get(0).getNextAvailable());
				log.info("nextAvailable for last product is "+retVal.get(retVal.size()-1).getNextAvailable()+" and productName is"+retVal.get(retVal.size()-1).getProductName());
				//log.info("nextAvailable for last product is "+retVal.get(retVal.size()-2).getNextAvailable()+" and productName is"+retVal.get(retVal.size()-2).getProductName());
			}
			log.info("Retrived ProductList size "+retVal.size()+"FromRecord is "+fromRecord.intValue()+" and toRecord is "+toRecord.intValue());
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("An exception occured in the getProductsForWomen"+e.getMessage());
			 
		}
		return retVal;
	}*/
	
	
	
	public static String toTitleCase(String input) {
	     StringBuilder titleCase = new StringBuilder();
	     boolean nextTitleCase = true;

	     for (char c : input.toCharArray()) {
	         if (Character.isSpaceChar(c)) {
	             nextTitleCase = true;
	         } else if (nextTitleCase) {
	             c = Character.toTitleCase(c);
	             nextTitleCase = false;
	         }

	         titleCase.append(c);
	     }

	     return titleCase.toString();
	 }
	
	/*@RequestMapping(value="/getProductListForVendorJSON.htm")
	public @ResponseBody PageDTO getProductListForVendorJSON(@RequestParam("vendorName")String vendorName,@RequestParam("socialcategory")String socialcategory,@RequestParam("loopVar") Integer loopVar,@RequestParam("offSet") Integer offSet,HttpServletRequest req)
	{
		log.info("inside getProductListForVendorJSON method "+vendorName+","+socialcategory+","+loopVar+","+offSet);
		
		PageDTO retVal=new PageDTO();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ListingBusinessServiceClient lbcs=new ListingBusinessServiceClient();
			retVal=lbcs.getProductsListForVendorNameClient(vendorName,socialcategory,loopVar,offSet);
			log.info("Retrived product list size"+retVal.getData().size());
			log.info("Available pages:"+retVal.getAvailablePages());
		}
		catch(Exception e )
		{
			e.printStackTrace();
			log.info("An exception occured in getProductListForVendor"+e.getMessage());
		}
		return retVal;
	}
	
	
	
	@RequestMapping(value="/getNewArrivalProductJSON.htm")
	public @ResponseBody PageDTO getNewArrivalProductJSON(HttpServletRequest req,@RequestParam("loopVar") Integer loopVar,@RequestParam("offSet") Integer offSet)
	{
		log.info("*****Inside getNewArrivalProductJSON.htm*****");
		ListingBusinessServiceClient lbsc=new ListingBusinessServiceClient();
		PageDTO retVal=new PageDTO();
		
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			
			Integer  fromRecord=(loopVar-1)*offSet;
			Integer toRecord=loopVar*offSet;
			//log.info("FromRecord is "+fromRecord.intValue()+" and toRecord is "+toRecord.intValue()+ "in getNewArrivalProductJSON.htm");
			retVal=lbsc.getNewArrivalProductDetailsClient("women",loopVar,offSet);
			//fd=lbsc.getForntEndDetailsClient(brandId);
			
			mv.addObject("newProducts", retVal);
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", brandId);
			Collection<ProductDTO> pdto=retVal.values();
			for(ProductDTO pd:pdto)
			{
				log.info("PVs for the prodcut--------------------------- "+pd.getProductName());
				List<ProductVariant>pvs=pd.getProductVariants();
				for(ProductVariant pv:pvs)
				{
					log.info("Recent arrival is "+pv.getRecentArrival().booleanValue());
				}
				
			}
			
			
			log.info("Inside getNewArrivalProduct "+retVal.getData().size());
			//log.info("Inside getNew styles size"+fd.getStyles().size());
			
		
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getNewArrivalProduct");
		}
		return retVal;
	}
	
	@RequestMapping(value="/getHomeNewArrivalProductJSON.htm")
	public @ResponseBody PageDTO getHomeNewArrivalProductJSON(HttpServletRequest req,@RequestParam("loopVar") Integer loopVar,@RequestParam("offSet") Integer offSet)
	{
		log.info("*****Inside getNewArrivalProductJSON.htm*****");
		ListingBusinessServiceClient lbsc=new ListingBusinessServiceClient();
		PageDTO retVal=new PageDTO();
		
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			
			Integer  fRecord=11;
			Integer tRecord=1000;
			log.info("FromRecord is "+fRecord.intValue()+" and toRecord is "+tRecord.intValue()+ "in getHomeNewArrivalProductJSON.htm");
			retVal=lbsc.getNewArrivalProductDetailsClient("women",fRecord,tRecord);
			//fd=lbsc.getForntEndDetailsClient(brandId);
			
			mv.addObject("newProducts", retVal);
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", brandId);
			Collection<ProductDTO> pdto=retVal.values();
			for(ProductDTO pd:pdto)
			{
				log.info("PVs for the prodcut--------------------------- "+pd.getProductName());
				List<ProductVariant>pvs=pd.getProductVariants();
				for(ProductVariant pv:pvs)
				{
					log.info("Recent arrival is "+pv.getRecentArrival().booleanValue());
				}
				
			}
			
			
			log.info("Inside getHomeNewArrivalProduct "+retVal.getData().size());
			//log.info("Inside getNew styles size"+fd.getStyles().size());
			
		
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getHomeNewArrivalProduct");
		}
		return retVal;
	}
	
	
	@RequestMapping(value="/getVintageProductJSON.htm")
	public @ResponseBody PageDTO getVintageProductForJSON(@RequestParam("style")String style,@RequestParam("socialCategory")String socialCategory,HttpServletRequest req,@RequestParam("loopVar") Integer loopVar,@RequestParam("offSet") Integer offSet)
	{
		log.info(" get getVintageProductForJSON method ");
		ListingBusinessServiceClient lbsc=new ListingBusinessServiceClient();
		PageDTO retVal=new PageDTO();
		String brandstr="";
		try
		{
			if(socialCategory==null || socialCategory=="")
			{
				socialCategory="women";
			}
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
			log.info("socialCategory:"+socialCategory);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			Integer  fromRecord=(loopVar-1)*offSet;
			Integer toRecord=loopVar*offSet;
			log.info("FromRecord is "+fromRecord.intValue()+" and toRecord is "+toRecord.intValue()+ "in getVintageProductForJSON");
			retVal=lbsc.getProductsByStyleClient(null,socialCategory,loopVar,offSet);
			//fd=lbsc.getForntEndDetailsClient(brandId);
			//List<ProductDTO> pDTO=new ArrayList<ProductDTO>(retVal.keySet());
			
			log.info("Retrived Vintage Product size"+retVal.getData().size());
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getVintageProduct"+e.getMessage());
		}
		return retVal;
	}
	
	
	@RequestMapping(value="/getVintageWomenShoes.htm")
	public @ResponseBody List<ProductDTO> getVintageProductForWomen(@RequestParam("category")String category,@RequestParam("style")String style,HttpServletRequest req,@RequestParam("loopVar") Integer loopVar,@RequestParam("offSet") Integer offSet)
	{
		ListingBusinessServiceClient lbsc=new ListingBusinessServiceClient();
		List<ProductDTO> retVal=new ArrayList<ProductDTO>();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			Integer  fromRecord=(loopVar-1)*offSet;
			Integer toRecord=loopVar*offSet;
			log.info("FromRecord is "+fromRecord.intValue()+" and toRecord is "+toRecord.intValue()+ "in getVintageProductForJSON");
			retVal=lbsc.getProductsByStyleWithCategoryClient(style,category, brandId, fromRecord, toRecord);
			//fd=lbsc.getForntEndDetailsClient(brandId);
			//List<ProductDTO> pDTO=new ArrayList<ProductDTO>(retVal.keySet());
			
			log.info("Retrived Vintage Product size"+retVal.size());
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getVintageProduct"+e.getMessage());
		}
		return retVal;
	}
	
	@RequestMapping(value="/getVintageMenShoes.htm")
	public @ResponseBody List<ProductDTO> getVintageProductForMen(@RequestParam("category")String category,@RequestParam("style")String style,HttpServletRequest req,@RequestParam("loopVar") Integer loopVar,@RequestParam("offSet") Integer offSet)
	{
		ListingBusinessServiceClient lbsc=new ListingBusinessServiceClient();
		List<ProductDTO> retVal=new ArrayList<ProductDTO>();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			Integer  fromRecord=(loopVar-1)*offSet;
			Integer toRecord=loopVar*offSet;
			log.info("FromRecord is "+fromRecord.intValue()+" and toRecord is "+toRecord.intValue()+ "in getVintageProductForJSON");
			retVal=lbsc.getProductsByStyleWithCategoryClient(style,category, brandId, fromRecord, toRecord);
			//fd=lbsc.getForntEndDetailsClient(brandId);
			//List<ProductDTO> pDTO=new ArrayList<ProductDTO>(retVal.keySet());
			
			log.info("Retrived Vintage Product size"+retVal.size());
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getVintageProduct"+e.getMessage());
		}
		return retVal;
	}
	
	
	
	
	@RequestMapping(value="/getVintageProductBySizeJSON.htm")
	public @ResponseBody PageDTO getVintageProductBySizeJSON(@RequestParam("attId")String attId,@RequestParam("socialCategory")String socialCategory,HttpServletRequest req,@RequestParam("loopVar") Integer loopVar,@RequestParam("offSet") Integer offSet)
	{
		ListingBusinessServiceClient lbsc=new ListingBusinessServiceClient();
		ModelAndView mv=new ModelAndView("Style");
		FrontEndDTO fd=new FrontEndDTO();
		String brandstr="";
		Double size=0.0;
		try
		{
			if(socialCategory== null || socialCategory=="")
			{
				socialCategory="women";
			}
			
			size = Double.valueOf(attId.trim()).doubleValue();
			log.info("socialCategory:"+socialCategory+":size:"+size);
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		PageDTO retVal=new PageDTO();
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			Integer  fromRecord=(loopVar-1)*offSet;
			Integer toRecord=loopVar*offSet;
			retVal=lbsc.getStyleProductsBySizeStringClient(size,socialCategory,loopVar,offSet);
			fd=lbsc.getForntEndDetailsClient(brandId);
			mv.addObject("PageDTO", retVal);
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", brandId);
			log.info("Retrived Vintage Product size"+retVal.getData().size());
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getVintageProduct"+e.getMessage());
		}
		return retVal;
	}
	
	
	
	@RequestMapping(value="/getSaleItemsJSON.htm")
	public @ResponseBody PageDTO getSaleItemsJSON(@RequestParam("loopVar")Integer loopVar,@RequestParam("offSet")Integer offSet,@RequestParam("socialcategory") String socialcategory, HttpServletRequest req)
	{
		ListingBusinessServiceClient lbsc=new ListingBusinessServiceClient();
		
		String brandstr="";
		try
		{
			if(socialcategory==null || socialcategory=="")
			{
				socialcategory="women";
			}
			log.info("socialcategory:"+socialcategory);
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		PageDTO retVal=new PageDTO();
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			Integer fromRecord=(loopVar-1)*offSet;
			Integer toRecord=loopVar*offSet;
			log.info("In getSaleItemsJSON From Record is "+loopVar+" and toRecord "+offSet);
			retVal=lbsc.getAllSalesItemsClient(null,socialcategory,loopVar,offSet);
			
			//mv.addObject("saleMap", retVal);
			
			log.info("Retrived Sale Product size"+retVal.getData().size());
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getSaleItems"+e.getMessage());
		}
		return retVal;
	}

	
	
	@RequestMapping(value="/getSaleItemsBySizeJSON.htm")
	public @ResponseBody PageDTO getSaleItemsBySizeJSON(@RequestParam("loopVar")Integer loopVar,@RequestParam("offSet")Integer offSet,@RequestParam("attId")String attId,@RequestParam("socialcategory") String socialCategory, HttpServletRequest req)
	{
		ListingBusinessServiceClient lbsc=new ListingBusinessServiceClient();
		String brandstr="";
		Double size=0.0;
		if(socialCategory==null || socialCategory=="")
		{
			socialCategory="women";
		}
		
		
		log.info("socialCategory:"+socialCategory);
		try
		{
			size = Double.valueOf(attId.trim()).doubleValue();
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		PageDTO retVal=new PageDTO();
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			Integer fromRecord=(loopVar-1)*offSet;
			Integer toRecord=loopVar*offSet;
			retVal=lbsc.getAllSalesItemsBySizeStringClient(size, socialCategory,loopVar,offSet);
			
			log.info("Retrived Sale Product size"+retVal.getData().size());
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getSaleItems "+e.getMessage());
		}
		return retVal;
	}*/

	// This is added for Filter the items(like Style,size,color and price) in CategoryPage by YES
	@RequestMapping(value="/getFilteredProductsForVendorPageFilter.htm")
	public ModelAndView getFilteredProductsForVendorPageFilter(@RequestParam(value="filterPageNumber",required=false)Integer filterPageNumber,@RequestParam(value="browserBackClicked",required=false)String browserBackClicked,@ModelAttribute("myProductFilter") ProductFilterDTO productFilter,HttpServletRequest req)
	{
		log.info("****************************** We are in getFilteredProductsForVendorPageFilter ******************************************** And filterPageNumber is : " + filterPageNumber);
		//log.info("******************************minPrice ************************* :"+productFilter.getMinPrice());
		//log.info("******************************maxPrice ************************* :"+productFilter.getMaxPrice());
		//log.info("******************************isPriceLowHigh ************************* :"+productFilter.getIsPriceLowHigh());
		//log.info("******************************isPriceHighLow ************************* :"+productFilter.getIsPriceHighLow());
		//log.info("******************************minSalePercentage ************************* :"+productFilter.getMinSalePercentage()+"%");
		//log.info("******************************maxSalePercentage ************************* :"+productFilter.getMaxSalePercentage()+"%");
		//log.info("****************************** isSortPage ******************** : " +productFilter.getIsSort());
		//log.info("****************************** SocialCategory is ******************** : " +productFilter.getSocialCategory());
		//log.info("******************************  vendorname    is ******************** : " +productFilter.getVendorName());
		//log.info("******************************  filterPageNumber    is ******************** : " +filterPageNumber);
		log.info("******************************  browserBackClicked    is ******************** : " +browserBackClicked);
		ModelAndView mv=new ModelAndView("FilteredProducts");
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		Long brandId=0l;
		String vendorName="";
		if(productFilter.getVendorName()!=null)
		{
			vendorName=productFilter.getVendorName();
		}
		
		try
		{
			Integer  pageno=1;
			Integer itemsPerPage=48;
			PageDTO retVal;
			List pDataList=new ArrayList();
			if(filterPageNumber>1)
				itemsPerPage=48*filterPageNumber;
			log.info("itemsPerPage is  --->>>>>>>>>    : "   + itemsPerPage);	
			Integer  retrivedfilterpages=1;
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			
			Attribute at=new Attribute();
			ArrayList<Object> atobjects=new ArrayList<Object>();
			atobjects.add(vendorName);
			at=(Attribute)RestClientUtil.callService(atobjects, "getAttributeByName", "AttributeBusinessService");
			log.info("************* Vendor Id is ************* : " +at.getKey().getId());
			List<Long> brands=new ArrayList<Long>();
			brands.add(0, at.getKey().getId());
			productFilter.setBrands(brands);
			
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(productFilter);
			objects.add(pageno);
			objects.add(itemsPerPage);
			//log.info(" ---->>>>>$$$$$$$$$$  Styles Size is   $$$$$$$$ ------>>>>>>    : " + productFilter.getStyles().size());
			//PageDTO retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPagination", "ListingBusinessService");
			
			if(productFilter.getIsPriceLowHigh()!=null && productFilter.getIsPriceLowHigh())
			{
				 if(browserBackClicked!=null && browserBackClicked!="" && browserBackClicked.equals("true"))
				 {
					 log.info("For getFilteredProductsForVendorPageFilter Data is getting from MemCache And browserBackClicked is : " + browserBackClicked);
					 retVal=(PageDTO)MemcachedUtil.get("getFilteredProductsWithPaginationForLowHighPrice_"+req.getSession().getId(), MemcachedConstants.CATEGORY_LISTING_FILTER_NS);
				 }
				 else
				 {
					 log.info("For getFilteredProductsForVendorPageFilter Data is getting from DB");
					 retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPaginationForLowHighPrice", "ListingBusinessService");
					 MemcachedUtil.set("getFilteredProductsWithPaginationForLowHighPrice_"+req.getSession().getId(), retVal, MemcachedConstants.CATEGORY_LISTING_FILTER_NS);
				 }
				 log.info("-------->>>>>>>>>  PriceLowHigh is Selected  ------>>>>>>>>>>  And Items per Page is : " + itemsPerPage);
				 if(retVal.getData().size()>49)
				 {
					 log.info("%%%%%%%%%%%  List>49  %%%%%%%%%%%%");
					 Integer fromIndex=(retVal.getData().size()-1)-itemsPerPage;
					 Integer toIndex=retVal.getData().size()-1;
					 if(fromIndex<0)
					 {
						 fromIndex=0;
						 retVal.setNextAvailable(false);
					 }
					 log.info("$$$$$$$$$$$$    Starting Index is : " + fromIndex + " Ending Index is $$$$$$$$$$$$ : " + toIndex);
					 pDataList=retVal.getData().subList(fromIndex, toIndex);
				 }
				 else
				 {
					 log.info("%%%%%%%%%%%  List<49  %%%%%%%%%%%%");
					 pDataList=retVal.getData();
				 }
				 
				Collections.reverse(pDataList);
				retVal.setData(pDataList);
				
			}
			else
			{
				log.info("-------->>>>>>>>>@@@@@@  PriceLowHigh is Not Selected  @@@@@@------>>>>>>>>>>");
				 retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPagination", "ListingBusinessService");
			}
			
			
			log.info("*************   We are in getFilteredProductsForVendorPageFilter   *****************: " +retVal);
			log.info("********>>>>>>>>-----retVal size is  : " +retVal.getData().size());
			log.info("*************   nextAvail   ***************** : " +retVal.getNextAvailable());
			mv.addObject("pageDTO", retVal);
			mv.addObject("retrivedfilterpages", retrivedfilterpages);
			//mv.addObject("customerRegistration",new UserDetail() );
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in getFilteredProductsForVendorPageFilter : "+e.getMessage());
		}
		return mv;
		
	}
	// Upto here this is added for Filter the items(like Style,size,color and price) in CategoryPage by YES
	
// This is added for Filter the Load More Items(like Style,size,color and price) in VendorPage by YES
		@RequestMapping(value="/getFilteredLoadeMoreProductsForVendorPageFilter.htm")
		public ModelAndView getFilteredLoadeMoreProductsForVendorPageFilter(@RequestParam("filterPageNumber")Integer filterPageNumber,@ModelAttribute("myProductFilter") ProductFilterDTO productFilter,HttpServletRequest req)
		{
			
			log.info("****************************** We are in getFilteredLoadeMoreProductsForVendorPageFilter ********************************** And filterPageNumber is : " + filterPageNumber);
			//log.info("******************************minPrice ************************* :"+productFilter.getMinPrice());
			//log.info("******************************maxPrice ************************* :"+productFilter.getMaxPrice());
			//log.info("******************************minSalePercentage ************************* :"+productFilter.getMinSalePercentage()+"%");
			//log.info("******************************maxSalePercentage ************************* :"+productFilter.getMaxSalePercentage()+"%");
			//log.info("****************************** isSortPage ******************** : " +productFilter.getIsSort());
			//log.info("****************************** SocialCategory is ******************** : " +productFilter.getSocialCategory());
			ModelAndView mv=new ModelAndView("FilteredLoadMoreProductsForVendorPage");
			String brandstr="";
			try
			{
				brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
			}
			catch(Exception e)
			{
				e.printStackTrace();
				
			}
			Long brandId=0l;
			String vendorName="";
			if(productFilter.getVendorName()!=null)
			{
				vendorName=productFilter.getVendorName();
			}
			try
			{
				Integer  pageno=filterPageNumber;
				Integer itemsPerPage=48;
				PageDTO retVal;
				List pDataList=new ArrayList();
				if(brandstr!=null)
				{
					brandId=Long.parseLong(brandstr);
				}
				
				Attribute at=new Attribute();
				ArrayList<Object> atobjects=new ArrayList<Object>();
				atobjects.add(vendorName);
				at=(Attribute)RestClientUtil.callService(atobjects, "getAttributeByName", "AttributeBusinessService");
				log.info("************* Vendor Id is ************* : " +at.getKey().getId());
				List<Long> brands=new ArrayList<Long>();
				brands.add(0, at.getKey().getId());
				productFilter.setBrands(brands);
				
				ArrayList<Object> objects=new ArrayList<Object>();
				objects.add(productFilter);
				objects.add(pageno);
				objects.add(itemsPerPage);
				
				//PageDTO retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPagination", "ListingBusinessService");
				
				if(productFilter.getIsPriceLowHigh()!=null && productFilter.getIsPriceLowHigh())
				{
					log.info("-------->>>>>>>>>  PriceLowHigh is Selected  ------>>>>>>>>>>  And FilterPageNumber is  : " + filterPageNumber);
					retVal=(PageDTO)MemcachedUtil.get("getFilteredProductsWithPaginationForLowHighPrice_"+req.getSession().getId(), MemcachedConstants.CATEGORY_LISTING_FILTER_NS);
					if(retVal==null)
					{
						log.info("For LoadMore getFilteredProductsWithPaginationForLowHighPrice Data is getting from DB");
						retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPaginationForLowHighPrice", "ListingBusinessService");
					}
					 log.info("$$$$$$$$$$$$$ Starting Index : " +((retVal.getData().size()-1)-(48*filterPageNumber))+   "And Ending Index : " + ((retVal.getData().size()-1)-(48*(filterPageNumber-1))));
					 if((retVal.getData().size()-1)-(48*(filterPageNumber-1))>48)
					 {
						 log.info("^^^^^%%%%%%%%%%%  List>48  %%%%%%%%%%%%^^^^^^^");
						 pDataList=retVal.getData().subList(((retVal.getData().size()-1)-(48*filterPageNumber)), ((retVal.getData().size()-1)-(48*(filterPageNumber-1)))); 
					 }
					 else
					 {
						 log.info("^^^^^%%%%%%%%%%%  List<48  %%%%%%%%%%%%^^^^^^^");
						 pDataList=retVal.getData().subList(0, ((retVal.getData().size()-1)-(48*(filterPageNumber-1)))); 
						 retVal.setNextAvailable(false);
						 
					 }
					Collections.reverse(pDataList);
					retVal.setData(pDataList);
					
				}
				else
				{
					log.info("-------->>>>>>>>>@@@@@@  PriceLowHigh is Not Selected  @@@@@@------>>>>>>>>>>");
					 retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPagination", "ListingBusinessService");
				}
				
				
				log.info("*************   filterpageno   ***************** : " +pageno);
				log.info("*************   nextAvail   ***************** : " +retVal.getNextAvailable());
				log.info("********>>>>>>>>-----retVal size is : " +retVal.getData().size());
				mv.addObject("pageDTO", retVal);
				//mv.addObject("customerRegistration",new UserDetail() );
				mv.addObject("nextAvailForMore", retVal.getNextAvailable());
				mv.addObject("pagenoForMore", pageno);
			}
			catch(Exception e)
			{
				e.printStackTrace();
				log.info("An exception occured in getFilteredLoadeMoreProductsForVendorPageFilter : "+e.getMessage());
			}
			return mv;
		}
// Upto here this is added for Filter the Load More Items(like Style,size,color and price) in VendorPage by YES
			
	
	// This is for Pagination in SortPage Filters by YES
	/*@RequestMapping(value="/getFilteredProductsForVendorJSON.htm")
	public  @ResponseBody List<ProductColorDTO> getFilteredProductsForVendorJSON(@ModelAttribute("myProductFilter") ProductFilterDTO productFilter,@RequestParam("loopVar") Integer loopVar,@RequestParam("offSet") Integer offSet,HttpServletRequest req)
	{

		
		log.info("****************************** We are in getFilteredProductsForVendorJSON ********************************************");
		log.info("******************************minPrice ************************* :"+productFilter.getMinPrice());
		log.info("******************************maxPrice ************************* :"+productFilter.getMaxPrice());
		log.info("****************************** SocialCategory is ******************** : " +productFilter.getSocialCategory());
		log.info("************************* loopVar is *************************** : " +loopVar + "***** offSet is  ********* : " + offSet);
		String brandstr="";
		Long brandId=0l;
		List<ProductColorDTO> retVal=new ArrayList<ProductColorDTO>();
		try
		{
			Integer  fromRecord=(loopVar-1)*offSet;
			Integer toRecord=loopVar*offSet;
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			log.info("FromRecord is : "+fromRecord.intValue()+" and toRecord is : "+toRecord.intValue()+ "in getFilteredProductsForVendorJSON method");
			 
				ArrayList<Object> objects=new ArrayList<Object>();
				objects.add(productFilter);
				objects.add(fromRecord);
				objects.add(fromRecord);
				
				retVal=(List<ProductColorDTO>)RestClientUtil.callService(objects, "getFilteredProductsForPagination", "ListingBusinessService");
				
				
			log.info("*************   We are in getFilteredProductsForVendorJSON   ***************** : " +retVal);
			log.info("********>>>>>>>>-----retVal size is : " +retVal.size());
			if(retVal.size()>0)
			{
				log.info("nextAvailable in productDTO is : " +retVal.get(0).getNextAvailable());
				log.info("nextAvailable for last product is : " +retVal.get(retVal.size()-1).getNextAvailable()+" and productName is : " +retVal.get(retVal.size()-1).getProductName());
			}
			log.info("Retrived ProductList size : " +retVal.size()+"FromRecord is : " +fromRecord.intValue()+" and toRecord is : " +toRecord.intValue());
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in getFilteredProductsForVendorJSON : "+e.getMessage());
		}
		return retVal;
	}*/
	// Upto here This is for Pagination in SortPage Filters by YES
	
	// This is added for Filter the items(like Style,size,color and price) in SortPage by YES
	@RequestMapping(value="/getFilteredProductsForSortPageFilter.htm")
	public ModelAndView getFilteredProductsForSortPageFilter(@RequestParam(value="filterPageNumber",required=false)Integer filterPageNumber,@RequestParam(value="browserBackClicked",required=false)String browserBackClicked,@ModelAttribute("myProductFilter") ProductFilterDTO productFilter,HttpServletRequest req)
	{
		
		log.info("****************************** We are in getFilteredProductsForSortPageFilter ************************************ And filterPageNumber is : " + filterPageNumber);
		//log.info("******************************minPrice ************************* :"+productFilter.getMinPrice());
		//log.info("******************************maxPrice ************************* :"+productFilter.getMaxPrice());
		//log.info("******************************isPriceLowHigh ************************* :"+productFilter.getIsPriceLowHigh());
		//log.info("******************************isPriceHighLow ************************* :"+productFilter.getIsPriceHighLow());
		//log.info("******************************minSalePercentage ************************* :"+productFilter.getMinSalePercentage()+"%");
		//log.info("******************************maxSalePercentage ************************* :"+productFilter.getMaxSalePercentage()+"%");
		//log.info("****************************** isSortPage ******************** : " +productFilter.getIsSort());
		log.info("****************************** SocialCategory is ******************** : " +productFilter.getSocialCategory());
		//log.info("******************************  filterPageNumber    is ******************** : " +filterPageNumber);
		log.info("******************************  browserBackClicked    is ******************** : " +browserBackClicked);
		ModelAndView mv=new ModelAndView("FilteredProductsForSortPage");
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		Long brandId=0l;
		try
		{
			Integer  pageno=1;
			Integer itemsPerPage=48;
			PageDTO retVal;
			List pDataList=new ArrayList();
			if(filterPageNumber>1)
				itemsPerPage=48*filterPageNumber;
			log.info("itemsPerPage is  --->>>>>>>>>    : "   + itemsPerPage);
			Integer  retrivedfilterpages=1;
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(productFilter);
			objects.add(pageno);
			objects.add(itemsPerPage);
			if(productFilter.getIsPriceLowHigh()!=null && productFilter.getIsPriceLowHigh())
			{
				 if(browserBackClicked!=null && browserBackClicked!="" && browserBackClicked.equals("true"))
				 {
					 log.info("For  getFilteredProductsForSortPageFilter Data is getting from MemCache And browserBackClicked is : " + browserBackClicked);
					 retVal=(PageDTO)MemcachedUtil.get("getFilteredProductsWithPaginationForLowHighPrice_"+req.getSession().getId(), MemcachedConstants.CATEGORY_LISTING_FILTER_NS);
				 }
				 else
				 {
					 log.info("For getFilteredProductsForSortPageFilter Data is getting from DB");
					 retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPaginationForLowHighPrice", "ListingBusinessService");
					 MemcachedUtil.set("getFilteredProductsWithPaginationForLowHighPrice_"+req.getSession().getId(), retVal, MemcachedConstants.CATEGORY_LISTING_FILTER_NS);
				 }
				 log.info("-------->>>>>>>>>  PriceLowHigh is Selected  ------>>>>>>>>>>  And Items per Page is : " + itemsPerPage);
				 if(retVal.getData().size()>49)
				 {
					 log.info("%%%%%%%%%%%  List>49  %%%%%%%%%%%%");
					 Integer fromIndex=(retVal.getData().size()-1)-itemsPerPage;
					 Integer toIndex=retVal.getData().size()-1;
					 if(fromIndex<0)
					 {
						 fromIndex=0;
						 retVal.setNextAvailable(false);
					 }
					 log.info("$$$$$$$$$$$$    Starting Index is : " + fromIndex + " Ending Index is $$$$$$$$$$$$ : " + toIndex);
					 pDataList=retVal.getData().subList(fromIndex, toIndex); 
				 }
				 else
				 {
					 log.info("%%%%%%%%%%%  List<49  %%%%%%%%%%%%");
					 pDataList=retVal.getData();
				 }
				 
				Collections.reverse(pDataList);
				retVal.setData(pDataList);
				
			}
			else
			{
				log.info("-------->>>>>>>>>@@@@@@  PriceLowHigh is Not Selected  @@@@@@------>>>>>>>>>>");
				 retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPagination", "ListingBusinessService");
			}
			
			
			
			log.info("*************   We are in getFilteredProductsForSortPageFilter   *****************: " +retVal);
			log.info("********>>>>>>>>-----retVal size is  : " +retVal.getData().size());
			log.info("*************   nextAvail   ***************** : " +retVal.getNextAvailable());
			mv.addObject("pageDTO", retVal);
			mv.addObject("retrivedfilterpages", retrivedfilterpages);
			//mv.addObject("customerRegistration",new UserDetail() );
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in getFilteredProductsForSortPageFilter : "+e.getMessage());
		}
		return mv;
	}
	// Upto here this is added for Filter the items(like Style,size,color and price) in SortPage by YES
	
	// This is added for Filter the Load More Items(like Style,size,color and price) in SortPage by YES
		@RequestMapping(value="/getFilteredLoadeMoreProductsForSortPageFilter.htm")
		public ModelAndView getFilteredLoadeMoreProductsForSortPageFilter(@RequestParam("filterPageNumber")Integer filterPageNumber,@ModelAttribute("myProductFilter") ProductFilterDTO productFilter,HttpServletRequest req)
		{
			
			log.info("****************************** We are in getFilteredLoadeMoreProductsForSortPageFilter ********************************* And filterPageNumber is : " + filterPageNumber);
			//log.info("******************************minPrice ************************* :"+productFilter.getMinPrice());
			//log.info("******************************maxPrice ************************* :"+productFilter.getMaxPrice());
			//log.info("******************************minSalePercentage ************************* :"+productFilter.getMinSalePercentage()+"%");
			//log.info("******************************maxSalePercentage ************************* :"+productFilter.getMaxSalePercentage()+"%");
			//log.info("****************************** isSortPage ******************** : " +productFilter.getIsSort());
			log.info("****************************** SocialCategory is ******************** : " +productFilter.getSocialCategory());
			ModelAndView mv=new ModelAndView("FilteredLoadMoreProductsForSortPage");
			String brandstr="";
			try
			{
				brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
			}
			catch(Exception e)
			{
				e.printStackTrace();
				
			}
			Long brandId=0l;
			try
			{
				Integer  pageno=filterPageNumber;
				Integer itemsPerPage=48;
				PageDTO retVal;
				List pDataList=new ArrayList();
				if(brandstr!=null)
				{
					brandId=Long.parseLong(brandstr);
				}
				ArrayList<Object> objects=new ArrayList<Object>();
				objects.add(productFilter);
				objects.add(pageno);
				objects.add(itemsPerPage);
				
				if(productFilter.getIsPriceLowHigh()!=null && productFilter.getIsPriceLowHigh())
				{
					log.info("-------->>>>>>>>>  PriceLowHigh is Selected  ------>>>>>>>>>>  And FilterPageNumber is  : " + filterPageNumber);
					retVal=(PageDTO)MemcachedUtil.get("getFilteredProductsWithPaginationForLowHighPrice_"+req.getSession().getId(), MemcachedConstants.CATEGORY_LISTING_FILTER_NS);
					if(retVal==null)
					{
						log.info("For LoadMore getFilteredProductsWithPaginationForLowHighPrice Data is getting from DB");
						retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPaginationForLowHighPrice", "ListingBusinessService");
					}
					 log.info("$$$$$$$$$$$$$ Starting Index : " +((retVal.getData().size()-1)-(48*filterPageNumber))+   "And Ending Index : " + ((retVal.getData().size()-1)-(48*(filterPageNumber-1))));
					 if((retVal.getData().size()-1)-(48*(filterPageNumber-1))>48)
					 {
						 log.info("^^^^^%%%%%%%%%%%  List>48  %%%%%%%%%%%%^^^^^^^");
						 pDataList=retVal.getData().subList(((retVal.getData().size()-1)-(48*filterPageNumber)), ((retVal.getData().size()-1)-(48*(filterPageNumber-1)))); 
					 }
					 else
					 {
						 log.info("^^^^^%%%%%%%%%%%  List<48  %%%%%%%%%%%%^^^^^^^");
						 pDataList=retVal.getData().subList(0, ((retVal.getData().size()-1)-(48*(filterPageNumber-1)))); 
						 retVal.setNextAvailable(false);
						 
					 }
					Collections.reverse(pDataList);
					retVal.setData(pDataList);
					
				}
				else
				{
					log.info("-------->>>>>>>>>@@@@@@  PriceLowHigh is Not Selected  @@@@@@------>>>>>>>>>>");
					 retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPagination", "ListingBusinessService");
				}
				
				
				log.info("*************   filterpageno   ***************** : " +pageno);
				log.info("*************   nextAvail   ***************** : " +retVal.getNextAvailable());
				log.info("********>>>>>>>>-----retVal size is : " +retVal.getData().size());
				mv.addObject("pageDTO", retVal);
				//mv.addObject("customerRegistration",new UserDetail() );
				mv.addObject("nextAvailForMore", retVal.getNextAvailable());
				mv.addObject("pagenoForMore", pageno);
			}
			catch(Exception e)
			{
				e.printStackTrace();
				log.info("An exception occured in getFilteredLoadeMoreProductsForSortPageFilter : "+e.getMessage());
			}
			return mv;
		}
		// Upto here this is added for Filter the Load More Items(like Style,size,color and price) in SortPage by YES
	
	// This is for Pagination in SortPage Filters by YES
	/*@RequestMapping(value="/getFilteredProductsForSortJSON.htm")
	public  @ResponseBody PageDTO getFilteredProductsForSortJSON(@ModelAttribute("myProductFilter") ProductFilterDTO productFilter,@RequestParam("loopVar") Integer loopVar,@RequestParam("offSet") Integer offSet,HttpServletRequest req)
	{

		
		log.info("****************************** We are in getFilteredProductsForSortJSON ********************************************");
		log.info("******************************minPrice ************************* :"+productFilter.getMinPrice());
		log.info("******************************maxPrice ************************* :"+productFilter.getMaxPrice());
		log.info("****************************** SocialCategory is ******************** : " +productFilter.getSocialCategory());
		log.info("************************* loopVar is *************************** : " +loopVar + "***** offSet is  ********* : " + offSet);
		PageDTO retVal						=	null;
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		try
		{
			Integer  pageno=(loopVar-1)*offSet;
			Integer itemsPerPage=loopVar*offSet;
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			log.info("FromRecord is : " +pageno.intValue()+" and toRecord is : " +itemsPerPage.intValue()+ "in getFilteredProductsForSortJSON method");
				ArrayList<Object> objects=new ArrayList<Object>();
				objects.add(productFilter);
				objects.add(pageno);
				objects.add(itemsPerPage);
				
				retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPagination", "ListingBusinessService");
			 
			log.info("*************   We are in getFilteredProductsForSortJSON   *****************"+retVal);
			log.info("********>>>>>>>>-----retVal size is : " +retVal.getData().size());
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in getFilteredProductsForSortJSON : "+e.getMessage());
		}
		return retVal;
	}*/
	// Upto here This is for Pagination in SortPage Filters by YES
	
	
// This is added for Filter the items(like Style,size,color and price) in SalePage by YES
	@RequestMapping(value="/getFilteredProductsForSalePageFilter.htm")
	public ModelAndView getFilteredProductsForSalePageFilter(@RequestParam(value="filterPageNumber",required=false)Integer filterPageNumber,@RequestParam(value="browserBackClicked",required=false)String browserBackClicked,@ModelAttribute("myProductFilter") ProductFilterDTO productFilter,HttpServletRequest req)
	{
		
		log.info("****************************** We are in getFilteredProductsForSalePageFilter ********************************* And filterPageNumber is : " + filterPageNumber);
		//log.info("******************************minPrice ************************* :"+productFilter.getMinPrice());
		//log.info("******************************maxPrice ************************* :"+productFilter.getMaxPrice());
		//log.info("******************************isPriceLowHigh ************************* :"+productFilter.getIsPriceLowHigh());
		//log.info("******************************isPriceHighLow ************************* :"+productFilter.getIsPriceHighLow());
		//log.info("******************************minSalePercentage ************************* :"+productFilter.getMinSalePercentage()+"%");
		//log.info("******************************maxSalePercentage ************************* :"+productFilter.getMaxSalePercentage()+"%");
		//log.info("****************************** isSalePage ******************** : " +productFilter.getIsSale());
		if(productFilter.getSocialCategory()!=null)
		log.info("****************************** SocialCategory is ******************** : " +productFilter.getSocialCategory());
		//log.info("******************************  filterPageNumber    is ******************** : " +filterPageNumber);
		log.info("******************************  browserBackClicked    is ******************** : " +browserBackClicked);
		ModelAndView mv=new ModelAndView("FilteredProductsForSalePage");
		PageDTO retVal						=	new PageDTO();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		Long brandId=0l;
		try
		{
			Integer  pageno=1;
			Integer itemsPerPage=48;
			List pDataList=new ArrayList();
			if(filterPageNumber>1)
				itemsPerPage=48*filterPageNumber;
			log.info("itemsPerPage is  --->>>>>>>>>    : "   + itemsPerPage);
			Integer  retrivedfilterpages=1;
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(productFilter);
			objects.add(pageno);
			objects.add(itemsPerPage);
			
			//retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPagination", "ListingBusinessService");
			
			if(productFilter.getIsPriceLowHigh()!=null && productFilter.getIsPriceLowHigh())
			{
				 if(browserBackClicked!=null && browserBackClicked!="" && browserBackClicked.equals("true"))
				 {
					 log.info("For getFilteredProductsForSalePageFilter Data is getting from MemCache And browserBackClicked is : " + browserBackClicked);
					 retVal=(PageDTO)MemcachedUtil.get("getFilteredProductsWithPaginationForLowHighPrice_"+req.getSession().getId(), MemcachedConstants.CATEGORY_LISTING_FILTER_NS);
				 }
				 else
				 {
					 log.info("For getFilteredProductsForSalePageFilter Data is getting from DB");
					 retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPaginationForLowHighPrice", "ListingBusinessService");
					 MemcachedUtil.set("getFilteredProductsWithPaginationForLowHighPrice_"+req.getSession().getId(), retVal, MemcachedConstants.CATEGORY_LISTING_FILTER_NS);
				 }
				 log.info("-------->>>>>>>>>  PriceLowHigh is Selected  ------>>>>>>>>>>  And Items per Page is : " + itemsPerPage);
				 if(retVal.getData().size()>49)
				 {
					 log.info("%%%%%%%%%%%  List>49  %%%%%%%%%%%%");
					 Integer fromIndex=(retVal.getData().size()-1)-itemsPerPage;
					 Integer toIndex=retVal.getData().size()-1;
					 if(fromIndex<0)
					 {
						 fromIndex=0;
						 retVal.setNextAvailable(false);
					 }
					 log.info("$$$$$$$$$$$$    Starting Index is : " + fromIndex + " Ending Index is $$$$$$$$$$$$ : " + toIndex);
					 pDataList=retVal.getData().subList(fromIndex, toIndex); 
				 }
				 else
				 {
					 log.info("%%%%%%%%%%%  List<49  %%%%%%%%%%%%");
					 pDataList=retVal.getData();
				 }
				 
				Collections.reverse(pDataList);
				retVal.setData(pDataList);
				
			}
			else
			{
				log.info("-------->>>>>>>>>@@@@@@  PriceLowHigh is Not Selected  @@@@@@------>>>>>>>>>>");
				 retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPagination", "ListingBusinessService");
			}
			
			log.info("*************   We are in getFilteredProductsForSalePageFilter   ***************** : "+retVal);
			log.info("********>>>>>>>>-----retVal size is : "+retVal.getData().size());
			mv.addObject("pageDTO", retVal);
			if(productFilter.getSocialCategory()!=null)
				mv.addObject("socialCatogery", productFilter.getSocialCategory());
			mv.addObject("retrivedfilterpages", retrivedfilterpages);
			//mv.addObject("customerRegistration",new UserDetail() );
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in getFilteredProductsForSalePageFilter : "+e.getMessage());
		}
		return mv;
	}
// Upto here this is added for Filter the items(like Style,size,color and price) in SalePage by YES
	
// This is added for Filter the Load More Items(like Style,size,color and price) in SalePage by YES
	@RequestMapping(value="/getFilteredLoadeMoreProductsForSalePageFilter.htm")
	public ModelAndView getFilteredLoadeMoreProductsForSalePageFilter(@RequestParam("filterPageNumber")Integer filterPageNumber,@ModelAttribute("myProductFilter") ProductFilterDTO productFilter,HttpServletRequest req)
	{
		
		log.info("****************************** We are in getFilteredLoadeMoreProductsForSortPageFilter ***************************** And filterPageNumber is : " + filterPageNumber);
		//log.info("******************************minPrice ************************* :"+productFilter.getMinPrice());
		//log.info("******************************maxPrice ************************* :"+productFilter.getMaxPrice());
		//log.info("******************************minSalePercentage ************************* :"+productFilter.getMinSalePercentage()+"%");
		//log.info("******************************maxSalePercentage ************************* :"+productFilter.getMaxSalePercentage()+"%");
		//log.info("****************************** isSalePage ******************** : " +productFilter.getIsSale());
		if(productFilter.getSocialCategory()!=null)
		log.info("****************************** SocialCategory is ******************** : " +productFilter.getSocialCategory());
		
		ModelAndView mv=new ModelAndView("FilteredLoadMoreProductsForSalePage");
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		try
		{
			Integer  pageno=filterPageNumber;
			Integer itemsPerPage=48;
			PageDTO retVal;
			List pDataList=new ArrayList();
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(productFilter);
			objects.add(pageno);
			objects.add(itemsPerPage);
			
			//PageDTO retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPagination", "ListingBusinessService");
			
			if(productFilter.getIsPriceLowHigh()!=null && productFilter.getIsPriceLowHigh())
			{
				log.info("-------->>>>>>>>>  PriceLowHigh is Selected  ------>>>>>>>>>>  And FilterPageNumber is  : " + filterPageNumber);
				retVal=(PageDTO)MemcachedUtil.get("getFilteredProductsWithPaginationForLowHighPrice_"+req.getSession().getId(), MemcachedConstants.CATEGORY_LISTING_FILTER_NS);
				if(retVal==null)
				{
					log.info("For LoadMore getFilteredProductsWithPaginationForLowHighPrice Data is getting from DB");
					retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPaginationForLowHighPrice", "ListingBusinessService");
				}
				 log.info("$$$$$$$$$$$$$ Starting Index : " +((retVal.getData().size()-1)-(48*filterPageNumber))+   "And Ending Index : " + ((retVal.getData().size()-1)-(48*(filterPageNumber-1))));
				 if((retVal.getData().size()-1)-(48*(filterPageNumber-1))>48)
				 {
					 log.info("^^^^^%%%%%%%%%%%  List>48  %%%%%%%%%%%%^^^^^^^");
					 pDataList=retVal.getData().subList(((retVal.getData().size()-1)-(48*filterPageNumber)), ((retVal.getData().size()-1)-(48*(filterPageNumber-1)))); 
				 }
				 else
				 {
					 log.info("^^^^^%%%%%%%%%%%  List<48  %%%%%%%%%%%%^^^^^^^");
					 pDataList=retVal.getData().subList(0, ((retVal.getData().size()-1)-(48*(filterPageNumber-1)))); 
					 retVal.setNextAvailable(false);
					 
				 }
				Collections.reverse(pDataList);
				retVal.setData(pDataList);
				
			}
			else
			{
				log.info("-------->>>>>>>>>@@@@@@  PriceLowHigh is Not Selected  @@@@@@------>>>>>>>>>>");
				 retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPagination", "ListingBusinessService");
			}
			
			log.info("*************   filterpageno   ***************** :" +pageno);
			log.info("*************   nextAvail   ***************** : "+retVal.getNextAvailable());
			log.info("********>>>>>>>>-----retVal size is : "+retVal.getData().size());
			mv.addObject("pageDTO", retVal);
			if(productFilter.getSocialCategory()!=null)
				mv.addObject("socialCatogery", productFilter.getSocialCategory());
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("nextAvailForMore", retVal.getNextAvailable());
			mv.addObject("pagenoForMore", pageno);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in getFilteredLoadeMoreProductsForSortPageFilter : "+e.getMessage());
		}
		return mv;
	}
 // Upto here this is added for Filter the Load More Items(like Style,size,color and price) in SalePage by YES
			
// This is added for Filter the items(like Style,size,color and price) in NewArrivalsPage by YES
	@RequestMapping(value="/getFilteredProductsForNewArrivalPage.htm")
	public ModelAndView getFilteredProductsForNewArrivalPage(@RequestParam(value="filterPageNumber",required=false)Integer filterPageNumber,@RequestParam(value="browserBackClicked",required=false)String browserBackClicked,@ModelAttribute("myProductFilter") ProductFilterDTO productFilter,HttpServletRequest req)
	{
		
		log.info("****************************** We are in getFilteredProductsForNewArrivalPage ************************************ And filterPageNumber is : " + filterPageNumber);
		//log.info("******************************minPrice ************************* :"+productFilter.getMinPrice());
		//log.info("******************************maxPrice ************************* :"+productFilter.getMaxPrice());
		//log.info("******************************isPriceLowHigh ************************* :"+productFilter.getIsPriceLowHigh());
		//log.info("******************************isPriceHighLow ************************* :"+productFilter.getIsPriceHighLow());
		//log.info("******************************minSalePercentage ************************* :"+productFilter.getMinSalePercentage()+"%");
		//log.info("******************************maxSalePercentage ************************* :"+productFilter.getMaxSalePercentage()+"%");
		//log.info("****************************** isNewArrivalPage ******************** : " +productFilter.getIsNew());
		if(productFilter.getSocialCategory()!=null)
		log.info("****************************** SocialCategory is ******************** : " +productFilter.getSocialCategory());
		//log.info("******************************  filterPageNumber    is ******************** : " +filterPageNumber);
		log.info("******************************  browserBackClicked    is ******************** : " +browserBackClicked);
		ModelAndView mv=new ModelAndView("FilteredProductsForNewArrivals");
		PageDTO retVal						=	new PageDTO();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		Long brandId=0l;
		try
		{
			Integer  pageno=1;
			Integer itemsPerPage=48;
			List pDataList=new ArrayList();
			if(filterPageNumber>1)
				itemsPerPage=48*filterPageNumber;
			log.info("itemsPerPage is  --->>>>>>>>>    : "   + itemsPerPage);
			Integer  retrivedfilterpages=1;
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(productFilter);
			objects.add(pageno);
			objects.add(itemsPerPage);
			
			//retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPagination", "ListingBusinessService");
			
			if(productFilter.getIsPriceLowHigh()!=null && productFilter.getIsPriceLowHigh())
			{
				 if(browserBackClicked!=null && browserBackClicked!="" && browserBackClicked.equals("true"))
				 {
					 log.info("For getFilteredProductsForNewArrivalPage Data is getting from MemCache And browserBackClicked is : " + browserBackClicked);
					 retVal=(PageDTO)MemcachedUtil.get("getFilteredProductsWithPaginationForLowHighPrice_"+req.getSession().getId(), MemcachedConstants.CATEGORY_LISTING_FILTER_NS);
				 }
				 else
				 {
					 log.info("For getFilteredProductsForNewArrivalPage Data is getting from DB");
					 retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPaginationForLowHighPrice", "ListingBusinessService");
					 MemcachedUtil.set("getFilteredProductsWithPaginationForLowHighPrice_"+req.getSession().getId(), retVal, MemcachedConstants.CATEGORY_LISTING_FILTER_NS);
				 }
				 log.info("-------->>>>>>>>>  PriceLowHigh is Selected  ------>>>>>>>>>>  And Items per Page is : " + itemsPerPage);
				 if(retVal.getData().size()>49)
				 {
					 log.info("%%%%%%%%%%%  List>49  %%%%%%%%%%%%");
					 Integer fromIndex=(retVal.getData().size()-1)-itemsPerPage;
					 Integer toIndex=retVal.getData().size()-1;
					 if(fromIndex<0)
					 {
						 fromIndex=0;
						 retVal.setNextAvailable(false);
					 }
					 log.info("$$$$$$$$$$$$    Starting Index is : " + fromIndex + " Ending Index is $$$$$$$$$$$$ : " + toIndex);
					 pDataList=retVal.getData().subList(fromIndex, toIndex); 
				 }
				 else
				 {
					 log.info("%%%%%%%%%%%  List<49  %%%%%%%%%%%%");
					 pDataList=retVal.getData();
				 }
				 
				Collections.reverse(pDataList);
				retVal.setData(pDataList);
				
			}
			else
			{
				log.info("-------->>>>>>>>>@@@@@@  PriceLowHigh is Not Selected  @@@@@@------>>>>>>>>>>");
				 retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPagination", "ListingBusinessService");
			}
			
			log.info("*************   We are in getFilteredProductsForNewArrivalPage   ***************** : "+retVal);
			log.info("********>>>>>>>>-----retVal size is : "+retVal.getData().size());
			mv.addObject("pageDTO", retVal);
			mv.addObject("retrivedfilterpages", retrivedfilterpages);
			//mv.addObject("customerRegistration",new UserDetail() );
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in getFilteredProductsForNewArrivalPage : "+e.getMessage());
		}
		return mv;
	}
// Upto here this is added for Filter the items(like Style,size,color and price) in NewArrivalsPage by YES

// This is added for Filter the Load More Items(like Style,size,color and price) in NewArrivalsPage by YES
	@RequestMapping(value="/getFilteredLoadeMoreProductsForNewArrivalPageFilter.htm")
	public ModelAndView getFilteredLoadeMoreProductsForNewArrivalPageFilter(@RequestParam("filterPageNumber")Integer filterPageNumber,@ModelAttribute("myProductFilter") ProductFilterDTO productFilter,HttpServletRequest req)
	{
		
		log.info("****************************** We are in getFilteredLoadeMoreProductsForNewArrivalPageFilter ****************************** And filterPageNumber is : " + filterPageNumber);
		//log.info("******************************minPrice ************************* :"+productFilter.getMinPrice());
		//log.info("******************************maxPrice ************************* :"+productFilter.getMaxPrice());
		//log.info("******************************minSalePercentage ************************* :"+productFilter.getMinSalePercentage()+"%");
		//log.info("******************************maxSalePercentage ************************* :"+productFilter.getMaxSalePercentage()+"%");
		//log.info("****************************** isNewArrivalPage ******************** : " +productFilter.getIsNew());
		if(productFilter.getSocialCategory()!=null)
		log.info("****************************** SocialCategory is ******************** : " +productFilter.getSocialCategory());
		
		ModelAndView mv=new ModelAndView("FilteredLoadMoreProductsForNewArrivals");
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		try
		{
			Integer  pageno=filterPageNumber;
			Integer itemsPerPage=48;
			PageDTO retVal;
			List pDataList=new ArrayList();
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(productFilter);
			objects.add(pageno);
			objects.add(itemsPerPage);
			
			//PageDTO retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPagination", "ListingBusinessService");
			
			if(productFilter.getIsPriceLowHigh()!=null && productFilter.getIsPriceLowHigh())
			{
				log.info("-------->>>>>>>>>  PriceLowHigh is Selected  ------>>>>>>>>>>  And FilterPageNumber is  : " + filterPageNumber);
				retVal=(PageDTO)MemcachedUtil.get("getFilteredProductsWithPaginationForLowHighPrice_"+req.getSession().getId(), MemcachedConstants.CATEGORY_LISTING_FILTER_NS);
				if(retVal==null)
				{
					log.info("For LoadMore getFilteredProductsWithPaginationForLowHighPrice Data is getting from DB");
					retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPaginationForLowHighPrice", "ListingBusinessService");
				}
				 log.info("$$$$$$$$$$$$$ Starting Index : " +((retVal.getData().size()-1)-(48*filterPageNumber))+   "And Ending Index : " + ((retVal.getData().size()-1)-(48*(filterPageNumber-1))));
				 if((retVal.getData().size()-1)-(48*(filterPageNumber-1))>48)
				 {
					 log.info("^^^^^%%%%%%%%%%%  List>48  %%%%%%%%%%%%^^^^^^^");
					 pDataList=retVal.getData().subList(((retVal.getData().size()-1)-(48*filterPageNumber)), ((retVal.getData().size()-1)-(48*(filterPageNumber-1)))); 
				 }
				 else
				 {
					 log.info("^^^^^%%%%%%%%%%%  List<48  %%%%%%%%%%%%^^^^^^^");
					 pDataList=retVal.getData().subList(0, ((retVal.getData().size()-1)-(48*(filterPageNumber-1)))); 
					 retVal.setNextAvailable(false);
					 
				 }
				Collections.reverse(pDataList);
				retVal.setData(pDataList);
				
			}
			else
			{
				log.info("-------->>>>>>>>>@@@@@@  PriceLowHigh is Not Selected  @@@@@@------>>>>>>>>>>");
				 retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPagination", "ListingBusinessService");
			}
			
			log.info("*************   filterpageno   ***************** :" +pageno);
			log.info("*************   nextAvail   ***************** : "+retVal.getNextAvailable());
			log.info("********>>>>>>>>-----retVal size is : "+retVal.getData().size());
			mv.addObject("pageDTO", retVal);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("nextAvailForMore", retVal.getNextAvailable());
			mv.addObject("pagenoForMore", pageno);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in getFilteredLoadeMoreProductsForNewArrivalPageFilter : "+e.getMessage());
		}
		return mv;
	}
 // Upto here this is added for Filter the Load More Items(like Style,size,color and price) in NewArrivalsPage by YES
	
	
// This is added for Filter the items(like Style,size,color and price) in VintagePage by YES
	@RequestMapping(value="/getFilteredProductsForVintagePage.htm")
	public ModelAndView getFilteredProductsForVintagePage(@RequestParam(value="filterPageNumber",required=false)Integer filterPageNumber,@RequestParam(value="browserBackClicked",required=false)String browserBackClicked,@ModelAttribute("myProductFilter") ProductFilterDTO productFilter,HttpServletRequest req)
	{
		
		log.info("****************************** We are in getFilteredProductsForVintagePage ************************************ And filterPageNumber is : " + filterPageNumber);
		//log.info("******************************minPrice ************************* :"+productFilter.getMinPrice());
		//log.info("******************************maxPrice ************************* :"+productFilter.getMaxPrice());
		//log.info("******************************isPriceLowHigh ************************* :"+productFilter.getIsPriceLowHigh());
		//log.info("******************************isPriceHighLow ************************* :"+productFilter.getIsPriceHighLow());
		//log.info("******************************minSalePercentage ************************* :"+productFilter.getMinSalePercentage()+"%");
		//log.info("******************************maxSalePercentage ************************* :"+productFilter.getMaxSalePercentage()+"%");
		//log.info("****************************** isVintagePage ******************** : " +productFilter.getIsVintage());
		if(productFilter.getSocialCategory()!=null)
		log.info("****************************** SocialCategory is ******************** : " +productFilter.getSocialCategory());
		//log.info("******************************  filterPageNumber    is ******************** : " +filterPageNumber);
		log.info("******************************  browserBackClicked    is ******************** : " +browserBackClicked);
		ModelAndView mv=new ModelAndView("FilteredProductsForVintagePage");
		PageDTO retVal						=	new PageDTO();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		Long brandId=0l;
		String vendorName="Vintage";
		try
		{
			Integer  pageno=1;
			Integer itemsPerPage=48;
			List pDataList=new ArrayList();
			if(filterPageNumber>1)
				itemsPerPage=48*filterPageNumber;
			log.info("itemsPerPage is  --->>>>>>>>>    : "   + itemsPerPage);
			Integer  retrivedfilterpages=1;
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			
			Attribute at=new Attribute();
			ArrayList<Object> atobjects=new ArrayList<Object>();
			atobjects.add(vendorName);
			at=(Attribute)RestClientUtil.callService(atobjects, "getAttributeByName", "AttributeBusinessService");
			log.info("************* Vendor Id is ************* : " +at.getKey().getId());
			List<Long> brands=new ArrayList<Long>();
			brands.add(0, at.getKey().getId());
			productFilter.setBrands(brands);
			
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(productFilter);
			objects.add(pageno);
			objects.add(itemsPerPage);
			
			//retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPagination", "ListingBusinessService");
			
			if(productFilter.getIsPriceLowHigh()!=null && productFilter.getIsPriceLowHigh())
			{
				 if(browserBackClicked!=null && browserBackClicked!="" && browserBackClicked.equals("true"))
				 {
					 log.info("For getFilteredProductsForVintagePage Data is getting from MemCache And browserBackClicked is : " + browserBackClicked);
					 retVal=(PageDTO)MemcachedUtil.get("getFilteredProductsWithPaginationForLowHighPrice_"+req.getSession().getId(), MemcachedConstants.CATEGORY_LISTING_FILTER_NS);
				 }
				 else
				 {
					 log.info("For getFilteredProductsForVintagePage Data is getting from DB");
					 retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPaginationForLowHighPrice", "ListingBusinessService");
					 MemcachedUtil.set("getFilteredProductsWithPaginationForLowHighPrice_"+req.getSession().getId(), retVal, MemcachedConstants.CATEGORY_LISTING_FILTER_NS);
				 }
				 log.info("-------->>>>>>>>>  PriceLowHigh is Selected  ------>>>>>>>>>>  And Items per Page is : " + itemsPerPage);
				 if(retVal.getData().size()>49)
				 {
					 log.info("%%%%%%%%%%%  List>49  %%%%%%%%%%%%");
					 Integer fromIndex=(retVal.getData().size()-1)-itemsPerPage;
					 Integer toIndex=retVal.getData().size()-1;
					 if(fromIndex<0)
					 {
						 fromIndex=0;
						 retVal.setNextAvailable(false);
					 }
					 log.info("$$$$$$$$$$$$    Starting Index is : " + fromIndex + " Ending Index is $$$$$$$$$$$$ : " + toIndex);
					 pDataList=retVal.getData().subList(fromIndex, toIndex); 
				 }
				 else
				 {
					 log.info("%%%%%%%%%%%  List<49  %%%%%%%%%%%%");
					 pDataList=retVal.getData();
				 }
				 
				Collections.reverse(pDataList);
				retVal.setData(pDataList);
				
			}
			else
			{
				log.info("-------->>>>>>>>>@@@@@@  PriceLowHigh is Not Selected  @@@@@@------>>>>>>>>>>");
				 retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPagination", "ListingBusinessService");
			}
			
			log.info("*************   We are in getFilteredProductsForVintagePage   ***************** : "+retVal);
			log.info("********>>>>>>>>-----retVal size is : "+retVal.getData().size());
			mv.addObject("pageDTO", retVal);
			mv.addObject("retrivedfilterpages", retrivedfilterpages);
			//mv.addObject("customerRegistration",new UserDetail() );
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in getFilteredProductsForVintagePage : "+e.getMessage());
		}
		return mv;
	}
// Upto here this is added for Filter the items(like Style,size,color and price) in VintagePage by YES
	
// This is added for Filter the Load More Items(like Style,size,color and price) in VintagePage by YES
	@RequestMapping(value="/getFilteredLoadeMoreProductsForVintagePageFilter.htm")
	public ModelAndView getFilteredLoadeMoreProductsForVintagePageFilter(@RequestParam("filterPageNumber")Integer filterPageNumber,@ModelAttribute("myProductFilter") ProductFilterDTO productFilter,HttpServletRequest req)
	{
		
		log.info("****************************** We are in getFilteredLoadeMoreProductsForVintagePageFilter *********************************** And filterPageNumber " + filterPageNumber);
		//log.info("******************************minPrice ************************* :"+productFilter.getMinPrice());
		//log.info("******************************maxPrice ************************* :"+productFilter.getMaxPrice());
		//log.info("******************************minSalePercentage ************************* :"+productFilter.getMinSalePercentage()+"%");
		//log.info("******************************maxSalePercentage ************************* :"+productFilter.getMaxSalePercentage()+"%");
		//log.info("****************************** isVintagePage ******************** : " +productFilter.getIsVintage());
		if(productFilter.getSocialCategory()!=null)
		log.info("****************************** SocialCategory is ******************** : " +productFilter.getSocialCategory());
		
		ModelAndView mv=new ModelAndView("FilteredLoadMoreProductsForVintagePage");
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		String vendorName="Vintage";
		try
		{
			Integer  pageno=filterPageNumber;
			Integer itemsPerPage=48;
			PageDTO retVal;
			List pDataList=new ArrayList();
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			
			Attribute at=new Attribute();
			ArrayList<Object> atobjects=new ArrayList<Object>();
			atobjects.add(vendorName);
			at=(Attribute)RestClientUtil.callService(atobjects, "getAttributeByName", "AttributeBusinessService");
			log.info("************* Vendor Id is ************* : " +at.getKey().getId());
			List<Long> brands=new ArrayList<Long>();
			brands.add(0, at.getKey().getId());
			productFilter.setBrands(brands);
			
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(productFilter);
			objects.add(pageno);
			objects.add(itemsPerPage);
			
			//PageDTO retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPagination", "ListingBusinessService");
			
			if(productFilter.getIsPriceLowHigh()!=null && productFilter.getIsPriceLowHigh())
			{
				log.info("-------->>>>>>>>>  PriceLowHigh is Selected  ------>>>>>>>>>>  And FilterPageNumber is  : " + filterPageNumber);
				retVal=(PageDTO)MemcachedUtil.get("getFilteredProductsWithPaginationForLowHighPrice_"+req.getSession().getId(), MemcachedConstants.CATEGORY_LISTING_FILTER_NS);
				if(retVal==null)
				{
					log.info("For LoadMore getFilteredProductsWithPaginationForLowHighPrice Data is getting from DB");
					retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPaginationForLowHighPrice", "ListingBusinessService");
				}
				 log.info("$$$$$$$$$$$$$ Starting Index : " +((retVal.getData().size()-1)-(48*filterPageNumber))+   "And Ending Index : " + ((retVal.getData().size()-1)-(48*(filterPageNumber-1))));
				 if((retVal.getData().size()-1)-(48*(filterPageNumber-1))>48)
				 {
					 log.info("^^^^^%%%%%%%%%%%  List>48  %%%%%%%%%%%%^^^^^^^");
					 pDataList=retVal.getData().subList(((retVal.getData().size()-1)-(48*filterPageNumber)), ((retVal.getData().size()-1)-(48*(filterPageNumber-1)))); 
				 }
				 else
				 {
					 log.info("^^^^^%%%%%%%%%%%  List<48  %%%%%%%%%%%%^^^^^^^");
					 pDataList=retVal.getData().subList(0, ((retVal.getData().size()-1)-(48*(filterPageNumber-1)))); 
					 retVal.setNextAvailable(false);
					 
				 }
				Collections.reverse(pDataList);
				retVal.setData(pDataList);
				
			}
			else
			{
				log.info("-------->>>>>>>>>@@@@@@  PriceLowHigh is Not Selected  @@@@@@------>>>>>>>>>>");
				 retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPagination", "ListingBusinessService");
			}
			
			log.info("*************   filterpageno   ***************** :" +pageno);
			log.info("*************   nextAvail   ***************** : "+retVal.getNextAvailable());
			log.info("********>>>>>>>>-----retVal size is : "+retVal.getData().size());
			mv.addObject("pageDTO", retVal);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("nextAvailForMore", retVal.getNextAvailable());
			mv.addObject("pagenoForMore", pageno);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in getFilteredLoadeMoreProductsForVintagePageFilter : "+e.getMessage());
		}
		return mv;
	}
 // Upto here this is added for Filter the Load More Items(like Style,size,color and price) in VintagePage by YES
	
// This is added for Filter GetAttributeId in PageBySize by YES
	@RequestMapping(value="/getAttributeIdForPageBySize.htm")
	public @ResponseBody Long getAttributeIdForPageBySize(@RequestParam("size")String Size)
	{
		
		log.info("****************************** We are in getAttributeIdForPageBySize ********************************************");
		/*Double size=0.0;
		if(Size!=null && Size.trim().length()>0)
		{
			size=Double.parseDouble(Size);
		}*/
		
		log.info("****************************** Size is  ******************** : " +Size);
		Long retVal=0L;
		try
		{
			
			Attribute at=new Attribute();
			ArrayList<Object> atobjects=new ArrayList<Object>();
			
			if(Size!=null)
			{
				atobjects.add(Size);
				at=(Attribute)RestClientUtil.callService(atobjects, "getAttributeByNameForSize", "AttributeBusinessService");
			}
			
			if(at!=null)
			{
				retVal=at.getKey().getId();
			}
						
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in getAttributeIdForPageBySize : "+e.getMessage());
		}
		return retVal;
}
// Upto here This is added for Filter GetAttributeId in PageBySize by YES
	
// This is added for Filter the items(like Style,size,color and price) in ComingSoonPage by YES
	@RequestMapping(value="/getFilteredProductsForComingSoonPage.htm")
	public ModelAndView getFilteredProductsForComingSoonPage(@RequestParam(value="filterPageNumber",required=false)Integer filterPageNumber,@RequestParam(value="browserBackClicked",required=false)String browserBackClicked,@ModelAttribute("myProductFilter") ProductFilterDTO productFilter,HttpServletRequest req)
	{
		
		log.info("****************************** We are in getFilteredProductsForComingSoonPage ************************************* And filterPageNumber is : " + filterPageNumber);
		//log.info("******************************minPrice ************************* :"+productFilter.getMinPrice());
		//log.info("******************************maxPrice ************************* :"+productFilter.getMaxPrice());
		//log.info("******************************isPriceLowHigh ************************* :"+productFilter.getIsPriceLowHigh());
		//log.info("******************************isPriceHighLow ************************* :"+productFilter.getIsPriceHighLow());
		//log.info("******************************minSalePercentage ************************* :"+productFilter.getMinSalePercentage()+"%");
		//log.info("******************************maxSalePercentage ************************* :"+productFilter.getMaxSalePercentage()+"%");
		//log.info("****************************** isComingSoon ******************** : " +productFilter.getIsComingSoon());
		if(productFilter.getSocialCategory()!=null)
		log.info("****************************** SocialCategory is ******************** : " +productFilter.getSocialCategory());
		//log.info("******************************  filterPageNumber    is ******************** : " +filterPageNumber);
		log.info("******************************  browserBackClicked    is ******************** : " +browserBackClicked);
		ModelAndView mv=new ModelAndView("FilteredProductsForComingSoonPage");
		PageDTO retVal						=	new PageDTO();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		Long brandId=0l;
		try
		{
			Integer  pageno=1;
			Integer itemsPerPage=48;
			List pDataList=new ArrayList();
			if(filterPageNumber>1)
				itemsPerPage=48*filterPageNumber;
			log.info("itemsPerPage is  --->>>>>>>>>    : "   + itemsPerPage);
			Integer  retrivedfilterpages=1;
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(productFilter);
			objects.add(pageno);
			objects.add(itemsPerPage);
			
			//retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPagination", "ListingBusinessService");
			
			if(productFilter.getIsPriceLowHigh()!=null && productFilter.getIsPriceLowHigh())
			{
				 if(browserBackClicked!=null && browserBackClicked!="" && browserBackClicked.equals("true"))
				 {
					 log.info("For getFilteredProductsForSortPageFilter Data is getting from MemCache And browserBackClicked is : " + browserBackClicked);
					 retVal=(PageDTO)MemcachedUtil.get("getFilteredProductsWithPaginationForLowHighPrice_"+req.getSession().getId(), MemcachedConstants.CATEGORY_LISTING_FILTER_NS);
				 }
				 else
				 {
					 log.info("For getFilteredProductsForSortPageFilter Data is getting from DB");
					 retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPaginationForLowHighPrice", "ListingBusinessService");
					 MemcachedUtil.set("getFilteredProductsWithPaginationForLowHighPrice_"+req.getSession().getId(), retVal, MemcachedConstants.CATEGORY_LISTING_FILTER_NS);
				 }
				 log.info("-------->>>>>>>>>  PriceLowHigh is Selected  ------>>>>>>>>>>  And Items per Page is : " + itemsPerPage);
				 if(retVal.getData().size()>49)
				 {
					 log.info("%%%%%%%%%%%  List>49  %%%%%%%%%%%%");
					 Integer fromIndex=(retVal.getData().size()-1)-itemsPerPage;
					 Integer toIndex=retVal.getData().size()-1;
					 if(fromIndex<0)
					 {
						 fromIndex=0;
						 retVal.setNextAvailable(false);
					 }
					 log.info("$$$$$$$$$$$$    Starting Index is : " + fromIndex + " Ending Index is $$$$$$$$$$$$ : " + toIndex);
					 pDataList=retVal.getData().subList(fromIndex, toIndex);  
				 }
				 else
				 {
					 log.info("%%%%%%%%%%%  List<49  %%%%%%%%%%%%");
					 pDataList=retVal.getData();
				 }
				 
				Collections.reverse(pDataList);
				retVal.setData(pDataList);
				
			}
			else
			{
				log.info("-------->>>>>>>>>@@@@@@  PriceLowHigh is Not Selected  @@@@@@------>>>>>>>>>>");
				 retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPagination", "ListingBusinessService");
			}
			
			log.info("*************   We are in getFilteredProductsForComingSoonPage   ***************** : "+retVal);
			log.info("********>>>>>>>>-----retVal size is : "+retVal.getData().size());
			mv.addObject("pageDTO", retVal);
			mv.addObject("retrivedfilterpages", retrivedfilterpages);
			//mv.addObject("customerRegistration",new UserDetail() );
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in getFilteredProductsForComingSoonPage : "+e.getMessage());
		}
		return mv;
	}
// Upto here this is added for Filter the items(like Style,size,color and price) in ComingSoonPage by YES
		
// This is added for Filter the Load More Items(like Style,size,color and price) in ComingSoonPage by YES
	@RequestMapping(value="/getFilteredLoadeMoreProductsForComingSoonPageFilter.htm")
	public ModelAndView getFilteredLoadeMoreProductsForComingSoonPageFilter(@RequestParam("filterPageNumber")Integer filterPageNumber,@ModelAttribute("myProductFilter") ProductFilterDTO productFilter,HttpServletRequest req)
	{
		
		log.info("****************************** We are in getFilteredLoadeMoreProductsForComingSoonPageFilter ********************************* And filterPageNumber is " + filterPageNumber);
		//log.info("******************************minPrice ************************* :"+productFilter.getMinPrice());
		//log.info("******************************maxPrice ************************* :"+productFilter.getMaxPrice());
		//log.info("******************************minSalePercentage ************************* :"+productFilter.getMinSalePercentage()+"%");
		//log.info("******************************maxSalePercentage ************************* :"+productFilter.getMaxSalePercentage()+"%");
		//log.info("****************************** isComingSoonPage ******************** : " +productFilter.getIsComingSoon());
		if(productFilter.getSocialCategory()!=null)
		log.info("****************************** SocialCategory is ******************** : " +productFilter.getSocialCategory());
		
		ModelAndView mv=new ModelAndView("FilteredLoadMoreProductsForComingSoonPage");
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		try
		{
			Integer  pageno=filterPageNumber;
			Integer itemsPerPage=48;
			PageDTO retVal;
			List pDataList=new ArrayList();
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(productFilter);
			objects.add(pageno);
			objects.add(itemsPerPage);
			
			//PageDTO retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPagination", "ListingBusinessService");
			
			if(productFilter.getIsPriceLowHigh()!=null && productFilter.getIsPriceLowHigh())
			{
				log.info("-------->>>>>>>>>  PriceLowHigh is Selected  ------>>>>>>>>>>  And FilterPageNumber is  : " + filterPageNumber);
				retVal=(PageDTO)MemcachedUtil.get("getFilteredProductsWithPaginationForLowHighPrice_"+req.getSession().getId(), MemcachedConstants.CATEGORY_LISTING_FILTER_NS);
				if(retVal==null)
				{
					log.info("For LoadMore getFilteredProductsWithPaginationForLowHighPrice Data is getting from DB");
					retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPaginationForLowHighPrice", "ListingBusinessService");
				}
				 log.info("$$$$$$$$$$$$$ Starting Index : " +((retVal.getData().size()-1)-(48*filterPageNumber))+   "And Ending Index : " + ((retVal.getData().size()-1)-(48*(filterPageNumber-1))));
				 if((retVal.getData().size()-1)-(48*(filterPageNumber-1))>48)
				 {
					 log.info("^^^^^%%%%%%%%%%%  List>48  %%%%%%%%%%%%^^^^^^^");
					 pDataList=retVal.getData().subList(((retVal.getData().size()-1)-(48*filterPageNumber)), ((retVal.getData().size()-1)-(48*(filterPageNumber-1)))); 
				 }
				 else
				 {
					 log.info("^^^^^%%%%%%%%%%%  List<48  %%%%%%%%%%%%^^^^^^^");
					 pDataList=retVal.getData().subList(0, ((retVal.getData().size()-1)-(48*(filterPageNumber-1)))); 
					 retVal.setNextAvailable(false);
					 
				 }
				Collections.reverse(pDataList);
				retVal.setData(pDataList);
				
			}
			else
			{
				log.info("-------->>>>>>>>>@@@@@@  PriceLowHigh is Not Selected  @@@@@@------>>>>>>>>>>");
				 retVal=(PageDTO)RestClientUtil.callService(objects, "getFilteredProductsWithPagination", "ListingBusinessService");
			}
			
			log.info("*************   filterpageno   ***************** :" +pageno);
			log.info("*************   nextAvail   ***************** : "+retVal.getNextAvailable());
			log.info("********>>>>>>>>-----retVal size is : "+retVal.getData().size());
			mv.addObject("pageDTO", retVal);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("nextAvailForMore", retVal.getNextAvailable());
			mv.addObject("pagenoForMore", pageno);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in getFilteredLoadeMoreProductsForComingSoonPageFilter : "+e.getMessage());
		}
		return mv;
	}
// Upto here this is added for Filter the Load More Items(like Style,size,color and price) in ComingSoonPage by YES	
	
	
	
	// This is added for lookbook 
	@RequestMapping(value="/getlookbook.htm")
	public ModelAndView getlookbookPage(HttpServletRequest req, HttpServletResponse res)
	{
		
		log.info("****************************** lookbook Controller ************************* ");
		ModelAndView mv=new ModelAndView("lookbook");
		FrontEndDTO fd=new FrontEndDTO();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			List<Integer> womenDropDown=VeroniqaUtil.getWomenDropDown(fd);
			if(womenDropDown!=null && womenDropDown.size()>0)
			{
				mv.addObject("firstColumn",womenDropDown.get(0));
				mv.addObject("secondColumn",womenDropDown.get(1));
				mv.addObject("thirdColumn",womenDropDown.get(2));
				mv.addObject("fourthColumn",womenDropDown.get(3));
			}
			List<Integer> menDropDown=VeroniqaUtil.getMenDropDown(fd);
			if(menDropDown!=null && menDropDown.size()>0)
			{
				mv.addObject("firstColumnMen", menDropDown.get(0));
				mv.addObject("secondColumnMen", menDropDown.get(1));
				mv.addObject("thirdColumnMen", menDropDown.get(2));
				mv.addObject("fourthColumnMen", menDropDown.get(3));
			}
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", brandId);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucklookbook.min.js");
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getlookbookPage"+e.getMessage());
		}
		
		return mv;
	}
	// Upto here this is added for lookbook 
	
	@RequestMapping(value="/getLookBookById.htm")
	public @ResponseBody LookBookBanner getLookBookById(@RequestParam("bannerid")Long bannerid, HttpServletRequest req, HttpServletResponse res)
	{
		log.info("bannerid:"+bannerid);
		LookBookBanner lbbanner=new LookBookBanner();
		
		try
		{	

			log.info("inside if condn");
			List<Object> params=new ArrayList<Object>();
			params.add(bannerid);
			lbbanner=(LookBookBanner)RestClientUtil.callService(params, "getLookBookBannerById", "LookBookBannerBusinessService");
			log.info("lbbanners:"+lbbanner.getImageLink());
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return lbbanner;
		
	}

	@RequestMapping(value="/betalookbook.htm")
	public ModelAndView getBetaLookBook(HttpServletRequest req, HttpServletResponse res)
	{
		log.info("******* inside betalookbook ******");
		ModelAndView mv=new ModelAndView("betalookbook");
		FrontEndDTO fd=new FrontEndDTO();
		List<LookBookBanner> front=null; 
		LookBookBannerServiceDTO ldto=new LookBookBannerServiceDTO();
		List<LookBookBanner> lbbanners=null;
		String lbAlbumStripImageURL ="";
		String lbAlbumStripMouseOverImageURL="";
		String lbBannerLink="";
		String lbAlbumCoverImageURL="";
		String brandstrg="";
		String lbAlbumName="";
		String lbVideoImageURL="";
		Boolean lbdeleted=false;
		ldto.setFlag("EXISTS");
		ldto.setSortBy("dateAdded desc");
		ldto.setStartIndex(0);
		ldto.setEndIndex(0);
		ldto.setOnLive(true);
		
		try
		{
			brandstrg=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		
		Long brandId=0l;
		try
		{
			if(brandstrg!=null)
			{
				brandId=Long.parseLong(brandstrg);
			}
		lbbanners=(List<LookBookBanner>)MemcachedUtil.get("lookbookbanner",MemcachedConstants.LOOK_BOOK);
		//log.info("lbbanners:"+lbbanners.size());
		if(lbbanners==null)
		{
			ArrayList<Object> params=new ArrayList<Object>();
			params.add(ldto);
			lbbanners=(List<LookBookBanner>)RestClientUtil.callService(params, "getAllLookBookBanners", "LookBookBannerBusinessService");
			
			MemcachedUtil.set("lookbookbanner",lbbanners,MemcachedConstants.LOOK_BOOK);
		}
		else
		{   
            for (LookBookBanner element : lbbanners) 
            {
                    log.info("list: "+element.getAlbumCoverImageURL());
                    lbAlbumCoverImageURL= element.getAlbumCoverImageURL();
					lbAlbumStripImageURL=element.getAlbumStripImageURL();
					lbAlbumStripMouseOverImageURL=element.getAlbumStripMouseOverImageURL();
					lbBannerLink=element.getImageLink();
					lbdeleted=element.getDeleted();
					lbAlbumName=element.getAlbumName();
					/*lbVideoImageURL=element.getHtmlCodeForVideo();*/
					log.info("lbAlbumName:"+lbAlbumName);
					log.info("lbbanners.getDeleted():"+element.getDeleted());
            }
           
		}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getlookbookPage"+e.getMessage());
		}
		try
		{
			if(brandstrg!=null)
			{
				brandId=Long.parseLong(brandstrg);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			List<Integer> womenDropDown=VeroniqaUtil.getWomenDropDown(fd);
			if(womenDropDown!=null && womenDropDown.size()>0)
			{
				mv.addObject("firstColumn",womenDropDown.get(0));
				mv.addObject("secondColumn",womenDropDown.get(1));
				mv.addObject("thirdColumn",womenDropDown.get(2));
				mv.addObject("fourthColumn",womenDropDown.get(3));
			}
			List<Integer> menDropDown=VeroniqaUtil.getMenDropDown(fd);
			if(menDropDown!=null && menDropDown.size()>0)
			{
				mv.addObject("firstColumnMen", menDropDown.get(0));
				mv.addObject("secondColumnMen", menDropDown.get(1));
				mv.addObject("thirdColumnMen", menDropDown.get(2));
				mv.addObject("fourthColumnMen", menDropDown.get(3));
			}
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("lbAlbumCoverImageURL",lbAlbumCoverImageURL);
			mv.addObject("lbAlbumStripImageURL", lbAlbumStripImageURL);
			mv.addObject("lbAlbumStripMouseOverImageURL",lbAlbumStripMouseOverImageURL);
			mv.addObject("lbBannerLink", lbBannerLink);
			mv.addObject("lbbanners", lbbanners);
			mv.addObject("bannersize", lbbanners.size());
			mv.addObject("lbdeleted", lbdeleted);
			mv.addObject("lbAlbumName",lbAlbumName);
			mv.addObject("server", req.getRequestURL());
			/*if(lbVideoImageURL!=null)
			mv.addObject("lbVideoImageURL", lbVideoImageURL);*/
			mv.addObject("brandid", brandId);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucklookbook.min.js");
			
			
			log.info("The actual size is "+lbbanners.size());
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getlookbookPage"+e.getMessage());
		}
		return mv;
	}
	
	@RequestMapping(value="/common_LookBook.htm")
	public ModelAndView getDynamicLookBook(@RequestParam("section")String section, HttpServletRequest req, HttpServletResponse res)
	{
		log.info("******* Beta LookBook **********");
		log.info("******* inside betalookbook ******");
		ModelAndView mv=new ModelAndView("betaalbum");
		//String lblink=(String) req.getAttribute(lbid);
		//log.info("lblink -------->"+lblink);
		/*log.info("bannerid:::"+bannerid);
		String lookbookid=bannerid.substring(bannerid.indexOf('('), bannerid.indexOf(')'));*/
		//log.info("lookbookid:"+lookbookid);
		log.info("section:"+section);
		String[] imageLink = section.split(","); 
		//log.info("imageLink:"+imageLink[0]);
		FrontEndDTO fd=new FrontEndDTO();
		LookBookBanner front=null;
		LookBookBannerServiceDTO ldto=new LookBookBannerServiceDTO();
		List<LookBookBanner> lbbanners=null;
		String lbAlbumStripImageURL ="";
		String lbAlbumStripMouseOverImageURL="";
		String lbBannerLink="";
		String lbAlbumCoverImageURL="";
		String brandstrg="";
		String lbAlbumName="";
		String lbVideoImageURL="";
		String lbHtmlCodeForFlashPlugin = null;
		String lbBannerId ="";
		String lbVideoCoverImageURL="";
		String lbYouTubeURL="";
		Boolean lbdeleted=false;
		//ldto.getFlag();
		//log.info("ldto.getFlag():"+ldto.getFlag());
		ldto.getFlag();
		log.info("ldto.getFlag():"+ldto.getFlag());
		ldto.getSortBy();
		ldto.getStartIndex();
		ldto.getEndIndex();
		ldto.getOnLive();;
		String brandstr="";
		String lookbookId = null;
		
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		
		
		try
		{	
			lbbanners=(List<LookBookBanner>)MemcachedUtil.get("lookbookbanner",MemcachedConstants.LOOK_BOOK);
			if(lbbanners==null)
			{
				log.info("inside if condn");
				List<Object> params=new ArrayList<Object>();
				params.add(ldto);
				lbbanners=(List<LookBookBanner>)RestClientUtil.callService(params, "getAllLookBookBanners", "LookBookBannerBusinessService");
				log.info("lbbanners:"+lbbanners.size());
				
				MemcachedUtil.set("lookbookbanner",lbbanners,MemcachedConstants.LOOK_BOOK);
			}
			 if(lbbanners != null){
				log.info("if condn");
				for(LookBookBanner lbb:lbbanners)
				{
					log.info("image link:"+lbb.getImageLink());
					log.info("imageLink[0]:"+imageLink[0]);
					if(lbb.getImageLink().contains(imageLink[0]))
					{
						log.info("inside if block");
					lbAlbumName = lbb.getAlbumName();	
					lbAlbumStripImageURL=lbb.getAlbumStripImageURL();
					lbAlbumStripMouseOverImageURL=lbb.getAlbumStripMouseOverImageURL();
					lbBannerLink=lbb.getImageLink();
					lbHtmlCodeForFlashPlugin =lbb.getHtmlCodeForFlashPlugin();
					lbYouTubeURL = lbb.getYoutubeCode();
					lbVideoCoverImageURL = lbb.getVideoCoverImage();
					}
				}
			}
			//}
				//log.info("imgLink:"+imgLink);
				/*if(imageLink[0].contains(lbBannerLink))
				{
					log.info("inside if condn");
					lbAlbumName = ldto.getAlbumName();
					log.info("lbAlbumName:"+ldto.getAlbumName());
					lbBannerId = ldto.getBrandId();
					lbAlbumCoverImageURL = ldto.getAlbumCoverImageURL();
					lbHtmlCodeForFlashPlugin = ldto.getHtmlCodeForFlashPlugin();
					lbAlbumStripImageURL = ldto.getAlbumStripImageURL();
					List<Object> lb = new ArrayList<Object>();
					lb.add(lbBannerId);
					//log.info("brandId::::::::::"+brandId);
					lbbanners=(List<LookBookBanner>)RestClientUtil.callService(lb, "getLookBookBannerById", "LookBookBannerBusinessService");	
				}*/
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			log.info("lbHtmlCodeForFlashPlugin"+lbHtmlCodeForFlashPlugin);
			List<Integer> womenDropDown=VeroniqaUtil.getWomenDropDown(fd);
			if(womenDropDown!=null && womenDropDown.size()>0)
			{
				mv.addObject("firstColumn",womenDropDown.get(0));
				mv.addObject("secondColumn",womenDropDown.get(1));
				mv.addObject("thirdColumn",womenDropDown.get(2));
				mv.addObject("fourthColumn",womenDropDown.get(3));
			}
			List<Integer> menDropDown=VeroniqaUtil.getMenDropDown(fd);
			if(menDropDown!=null && menDropDown.size()>0)
			{
				mv.addObject("firstColumnMen", menDropDown.get(0));
				mv.addObject("secondColumnMen", menDropDown.get(1));
				mv.addObject("thirdColumnMen", menDropDown.get(2));
				mv.addObject("fourthColumnMen", menDropDown.get(3));
			}
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("lbAlbumCoverImageURL",lbAlbumCoverImageURL);
			mv.addObject("lbAlbumStripImageURL", lbAlbumStripImageURL);
			mv.addObject("lbAlbumStripMouseOverImageURL",lbAlbumStripMouseOverImageURL);
			mv.addObject("lbHtmlCodeForFlashPlugin", lbHtmlCodeForFlashPlugin);
			mv.addObject("lbBannerLink", lbBannerLink);
			mv.addObject("lbbanners", lbbanners);
			mv.addObject("lbdeleted", lbdeleted);
			mv.addObject("lbAlbumName",lbAlbumName);
			mv.addObject("server", req.getRequestURL());
			log.info("lbAlbumName:"+lbAlbumName);
			if(lbVideoImageURL!=null)
			mv.addObject("lbVideoImageURL", lbVideoImageURL);
			mv.addObject("brandid", brandId);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucklookbook.min.js");
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getSaleItemsBySize"+e.getMessage());
		}
		return mv;
		
	}
	
	/**
	 * This is for Zine Magazine
	 * @param First Time - Volume 1 - Issue - 1
	 * @param req
	 * @param res
	 * @return 
	 * @author shailyjha
	 */
	
	@RequestMapping(value="/showZinePage.htm")
	public ModelAndView showZinePage(@RequestParam("section")String section, HttpServletRequest req, HttpServletResponse res)
	{
		log.info("******* inside showZinePage() in globalnavigationcontroller **********");
		ModelAndView mv=new ModelAndView("FirstTime_Volume1");
		log.info("section:"+section);
		String[] imageLink = section.split(","); 
		//log.info("imageLink:"+imageLink[0]);
		FrontEndDTO fd=new FrontEndDTO();
		String brandstrg="";
		String brandstr="";
		
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			List<Integer> womenDropDown=VeroniqaUtil.getWomenDropDown(fd);
			if(womenDropDown!=null && womenDropDown.size()>0)
			{
				mv.addObject("firstColumn",womenDropDown.get(0));
				mv.addObject("secondColumn",womenDropDown.get(1));
				mv.addObject("thirdColumn",womenDropDown.get(2));
				mv.addObject("fourthColumn",womenDropDown.get(3));
			}
			List<Integer> menDropDown=VeroniqaUtil.getMenDropDown(fd);
			if(menDropDown!=null && menDropDown.size()>0)
			{
				mv.addObject("firstColumnMen", menDropDown.get(0));
				mv.addObject("secondColumnMen", menDropDown.get(1));
				mv.addObject("thirdColumnMen", menDropDown.get(2));
				mv.addObject("fourthColumnMen", menDropDown.get(3));
			}
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("server", req.getRequestURL());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", brandId);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucklookbook.min.js");
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getSaleItemsBySize"+e.getMessage());
		}
		return mv;
		
	}
	
	// This is added for department_of_antiquities_LooKbook 
	@RequestMapping(value="/department_of_antiquities_LooKbook.htm")
	public ModelAndView getdepartment_of_antiquities_LooKbook(HttpServletRequest req, HttpServletResponse res)
	{
		
		log.info("****************************** getdepartment_of_antiquities_LooKbook Controller ************************* ");
		ModelAndView mv=new ModelAndView("department_of_antiquitieslookbook");
		FrontEndDTO fd=new FrontEndDTO();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", brandId);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucklookbook.min.js");
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getSaleItemsBySize"+e.getMessage());
		}
		
		return mv;
	}
	// Upto here this is added for department_of_antiquities_LooKbook 
	
	
	
	
	// This is added for checklistlookbook 
	@RequestMapping(value="/checklistlookbook.htm")
	public ModelAndView getchecklistlookbook(HttpServletRequest req, HttpServletResponse res)
	{
		 
		log.info("****************************** getchecklistlookbook Controller ************************* ");
		ModelAndView mv=new ModelAndView("checklistlookbook");
		FrontEndDTO fd=new FrontEndDTO();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", brandId);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucklookbook.min.js");
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getSaleItemsBySize"+e.getMessage());
		}
		
		return mv;
	}
	// Upto here this is added for checklistlookbook 
	
	@RequestMapping(value="/to_the_source_LooKbook.htm")
	public ModelAndView gettothesource(HttpServletRequest req, HttpServletResponse res)
	{
		 
		log.info("****************************** to the source Controller ************************* ");
		ModelAndView mv=new ModelAndView("to_the_source");
		FrontEndDTO fd=new FrontEndDTO();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", brandId);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucklookbook.min.js");
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getSaleItemsBySize"+e.getMessage());
		}
		
		return mv;
	}
	
	@RequestMapping(value="/Indiansummer_LookBook.htm")
	public ModelAndView getindiansummer(HttpServletRequest req, HttpServletResponse res)
	{
		 
		log.info("****************************** to the source Controller ************************* ");
		ModelAndView mv=new ModelAndView("indiansummer");
		FrontEndDTO fd=new FrontEndDTO();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", brandId);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucklookbook.min.js");
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getSaleItemsBySize"+e.getMessage());
		}
		
		return mv;
	}
	
	@RequestMapping(value="/Laisla_LookBook.htm")
	public ModelAndView getlaisla(HttpServletRequest req, HttpServletResponse res)
	{
		 
		log.info("****************************** to the source Controller ************************* ");
		ModelAndView mv=new ModelAndView("laisla");
		FrontEndDTO fd=new FrontEndDTO();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", brandId);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucklookbook.min.js");
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getSaleItemsBySize"+e.getMessage());
		}
		
		return mv;
	}
	
	@RequestMapping(value="/solestruckxbridgeburn_LookBook.htm")
	public ModelAndView getsolestruckbridgeburn(HttpServletRequest req, HttpServletResponse res)
	{
		 
		log.info("****************************** to the source Controller ************************* ");
		ModelAndView mv=new ModelAndView("solestruckbridgeburn");
		FrontEndDTO fd=new FrontEndDTO();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", brandId);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucklookbook.min.js");
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getSaleItemsBySize"+e.getMessage());
		}
		
		return mv;
	}
	
	@RequestMapping(value="/ToBeAnnounced_LookBook.htm")
	public ModelAndView gettobeannounced(HttpServletRequest req, HttpServletResponse res)
	{
		 
		log.info("****************************** to the source Controller ************************* ");
		ModelAndView mv=new ModelAndView("tobeannounced");
		FrontEndDTO fd=new FrontEndDTO();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", brandId);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucklookbook.min.js");
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getSaleItemsBySize"+e.getMessage());
		}
		
		return mv;
	}
	
	@RequestMapping(value="/InTheSpirit_LookBook.htm")
	public ModelAndView getinthespirit(String icon, HttpServletRequest req, HttpServletResponse res)
	{
		 
		log.info("****************************** inthespirit Controller ************************* ");
		ModelAndView mv=new ModelAndView("inthespirit");
		FrontEndDTO fd=new FrontEndDTO();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", brandId);
			//mv.addObject("customerRegistration",new UserDetail() );
			log.info("icon:"+icon);
			mv.addObject("icon", icon);
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucklookbook.min.js");
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getSaleItemsBySize"+e.getMessage());
		}
		
		return mv;
	}
	
	@RequestMapping(value="/NightRider_LookBook.htm")
	public ModelAndView getnightrider(String icon, HttpServletRequest req, HttpServletResponse res)
	{
		 
		log.info("****************************** inthespirit Controller ************************* ");
		ModelAndView mv=new ModelAndView("nightrider");
		FrontEndDTO fd=new FrontEndDTO();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", brandId);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("icon", icon);
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucklookbook.min.js");
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getSaleItemsBySize"+e.getMessage());
		}
		
		return mv;
	}
	
	@RequestMapping(value="/TBA_SS_2012_LookBook.htm")
	public ModelAndView gettbass(HttpServletRequest req, HttpServletResponse res)
	{
		 
		log.info("****************************** inthespirit Controller ************************* ");
		ModelAndView mv=new ModelAndView("tbass");
		FrontEndDTO fd=new FrontEndDTO();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", brandId);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucklookbook.min.js");
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getSaleItemsBySize"+e.getMessage());
		}
		
		return mv;
	}
	
	@RequestMapping(value="/On_The_Road_LookBook.htm")
	public ModelAndView getontheroad(String icon, HttpServletRequest req, HttpServletResponse res)
	{
		 
		log.info("****************************** inthespirit Controller ************************* ");
		ModelAndView mv=new ModelAndView("ontheroad");
		FrontEndDTO fd=new FrontEndDTO();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			
			
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", brandId);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucklookbook.min.js");
			mv.addObject("icon",icon);
			log.info("icon:"+icon);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getSaleItemsBySize"+e.getMessage());
		}
		
		return mv;
	}
	
	
	// This is added for up_on_it 
	@RequestMapping(value="/up_on_it.htm")
	public ModelAndView getup_on_it(HttpServletRequest req, HttpServletResponse res)
	{
		
		log.info("****************************** getup_on_it Controller ************************* ");
		ModelAndView mv=new ModelAndView("up_on_it");
		FrontEndDTO fd=new FrontEndDTO();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", brandId);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucklookbook.min.js");
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getSaleItemsBySize"+e.getMessage());
		}
		
		return mv;
	}
	// Upto here this is added for up_on_it 
	
	
	
	// This is added for weekender 
	@RequestMapping(value="/weekender.htm")
	public ModelAndView getweekender(HttpServletRequest req, HttpServletResponse res)
	{
		
		log.info("****************************** getweekender Controller ************************* ");
		ModelAndView mv=new ModelAndView("weekender");
		FrontEndDTO fd=new FrontEndDTO();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", brandId);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucklookbook.min.js");
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getSaleItemsBySize"+e.getMessage());
		}
		
		return mv;
	}
	// Upto here this is added for weekender 
	
	
	
	// This is added for tess_pare_mayer 
	@RequestMapping(value="/tess_pare_mayer.htm")
	public ModelAndView gettess_pare_mayer(HttpServletRequest req, HttpServletResponse res)
	{
		
		log.info("****************************** gettess_pare_mayer Controller ************************* ");
		ModelAndView mv=new ModelAndView("tess_pare_mayer");
		FrontEndDTO fd=new FrontEndDTO();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", brandId);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucklookbook.min.js");
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getSaleItemsBySize"+e.getMessage());
		}
		
		return mv;
	}
	// Upto here this is added for tess_pare_mayer 
	
	
	
	// This is added for senso 
	@RequestMapping(value="/senso.htm")
	public ModelAndView getsenso(HttpServletRequest req, HttpServletResponse res)
	{
		
		log.info("****************************** getsenso Controller ************************* ");
		ModelAndView mv=new ModelAndView("senso");
		FrontEndDTO fd=new FrontEndDTO();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", brandId);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucklookbook.min.js");
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getSaleItemsBySize"+e.getMessage());
		}
		
		return mv;
	}
	// Upto here this is added for senso 
	
	
	
	// This is added for room_service 
	@RequestMapping(value="/room_service.htm")
	public ModelAndView getroom_service(HttpServletRequest req, HttpServletResponse res)
	{
		
		log.info("****************************** getroom_service Controller ************************* ");
		ModelAndView mv=new ModelAndView("room_service");
		FrontEndDTO fd=new FrontEndDTO();
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			ArrayList<Object> objects=new ArrayList<Object>();
			objects.add(brandId);
			
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd==null)
			{
				
				fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
					MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", brandId);
			//mv.addObject("customerRegistration",new UserDetail() );
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucklookbook.min.js");
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An exception occured in the getSaleItemsBySize"+e.getMessage());
		}
		
		return mv;
	}
	// Upto here this is added for room_service 
	
	
	
	/*@RequestMapping(value="/getProductListForComingSoonJson.htm")
	public  @ResponseBody PageDTO getProductsForComingSoonJson(@RequestParam("category")String category,@RequestParam("loopVar") Integer loopVar,@RequestParam("offSet") Integer offSet,HttpServletRequest req)
	{
		
		log.info(" inside getProductsForComingSoon! ");
		FrontEndDTO fd						=	new FrontEndDTO();
		PageDTO retVal						=	new PageDTO();
		ListingBusinessServiceClient lbsc	=	new ListingBusinessServiceClient();
		String brandstr						=	"";
		try
		{
			brandstr						=	EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}//women_sort_count
		Long brandId=0l;
		try
		{
			Integer  fromRecord				=	0;
			Integer toRecord				=	12;
			//String categoryTitleCase=category.substring(0, 1).toUpperCase()+category.substring(1);
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
			req.getSession().setAttribute("youAreHere",category);
			if(req.getSession().getAttribute("youAreHere")!=null)
				log.info("Inside the show idp "+(String)req.getSession().getAttribute("youAreHere"));
			retVal=lbsc.getProductsForComingSoon("women",loopVar,offSet);
			
			//fd=lbsc.getForntEndDetailsClient(brandId);
			fd=lbsc.getForntEndDetailsClient(brandId);
			//ShoppingCartService cartService=new ShoppingCartService();
			ShoppingCart cart=ShoppingCartService.getShoppingCart(req);
			log.info("Retrived ProductList size:"+retVal.getData().size());
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("An exception occured in the getProductsForWomen"+e.getMessage());
			
		}
		return retVal;
	}*/
	
	@RequestMapping(value="/changeItemsPerPage.htm")
	public @ResponseBody String changeItemsPerPage(@RequestParam("itemsperpage")String itemsperPage,HttpServletRequest req)
	{
		req.getSession().setAttribute("itemsPerPage", itemsperPage);
		return "success";
	}

	@RequestMapping(value="/listingPagesCacheSwitch.htm")
	public @ResponseBody String changeCacheSwitchForCategory(@RequestParam("useCache")Boolean cacheSwitch)
	{
		if(cacheSwitch!=null)
		{
			MemcachedUtil.set(MemcachedConstants.CATEGORY_CACHE_SWITCH, cacheSwitch, MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
			return "switch set successfully";
		}
		else
		{
			return "please provide true/false for useCache";
		}
		
	}
	
	@RequestMapping(value="/socialCategory.htm")
	public @ResponseBody String setSocialCatoryInSession(@RequestParam("socialCategory")String socialCategory,HttpServletRequest req)
	{
		req.getSession().setAttribute("sc", socialCategory);
		return "success";
	}
	
	@RequestMapping(value="/errorPage.htm")
	public ModelAndView renderErrorPage()
	{
		ModelAndView mv=new ModelAndView("CustomErrorPage");
		try
		{
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		FrontEndDTO fd=new FrontEndDTO();
		//ListingBusinessServiceClient lbsc=new ListingBusinessServiceClient();
		
		
		//fd=lbsc.getForntEndDetailsClient(new Long(brandstr));
		
		ArrayList<Object> objects=new ArrayList<Object>();
		objects.add(new Long(brandstr));
		
		fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
		if(fd==null)
		{
			
			fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
			 
				MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
		}
		List<Integer> womenDropDown=VeroniqaUtil.getWomenDropDown(fd);

		if(womenDropDown!=null && womenDropDown.size()>0)

		{

		mv.addObject("firstColumn",womenDropDown.get(0));

		mv.addObject("secondColumn",womenDropDown.get(1));

		mv.addObject("thirdColumn",womenDropDown.get(2));

		mv.addObject("fourthColumn",womenDropDown.get(3));

		}
		List<Integer> menDropDown=VeroniqaUtil.getMenDropDown(fd);
		if(menDropDown!=null && menDropDown.size()>0)
		{
			mv.addObject("firstColumnMen", menDropDown.get(0));
			mv.addObject("secondColumnMen", menDropDown.get(1));
			mv.addObject("thirdColumnMen", menDropDown.get(2));
			mv.addObject("fourthColumnMen", menDropDown.get(3));
		}
		mv.addObject("styles", fd.getStyles());
		mv.addObject("colors", fd.getColors());
		mv.addObject("sizes", fd.getSizes());
		mv.addObject("womenvendorlst", fd.getWomenVendors());
		mv.addObject("menvendorlst", fd.getMenVendors());		
	    //mv.addObject("customerRegistration",new UserDetail() );
	    mv.addObject("common_css","solestruck.min.css");
		mv.addObject("common_js","solestruck.min.js");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return mv;
	}
	
	@RequestMapping(value="/affiliates.htm")
	public ModelAndView affiliatesPage()
	{
		ModelAndView mv=new ModelAndView("Affiliates");
		
		try
		{
			List<Event> retval=null;
			retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
			
			if(retval==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
			
				retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
				if(retval!=null && retval.size()>0)
					MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
				
			}
			if(retval!=null&&retval.size()>0)
				mv.addObject("eventList",retval);
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
		}
		try
		{
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		FrontEndDTO fd=new FrontEndDTO();
		//ListingBusinessServiceClient lbsc=new ListingBusinessServiceClient();
				
		//fd=lbsc.getForntEndDetailsClient(new Long(brandstr));
		
		ArrayList<Object> objects=new ArrayList<Object>();
		objects.add(new Long(brandstr));
		
		fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
		if(fd==null)
		{
			
			fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
			 
				MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
		}
		mv.addObject("styles", fd.getStyles());
		mv.addObject("colors", fd.getColors());
		mv.addObject("sizes", fd.getSizes());
		mv.addObject("womenvendorlst", fd.getWomenVendors());
		mv.addObject("menvendorlst", fd.getMenVendors());		
	    //mv.addObject("customerRegistration",new UserDetail() );
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return mv;
	}
	
	
	@RequestMapping(value="/getRemainingNewArrivals.htm")
	public ModelAndView getRemainingNewArrivals(HttpServletRequest req,HttpServletResponse res)
	{
		ModelAndView mv=new ModelAndView("otherNewArrivals");
		
		PageDTO newProducts=new PageDTO();
		
		try
		{
			
			
			newProducts=(PageDTO)MemcachedUtil.get("restNewArrival",MemcachedConstants.NEW_ARRIVALS);
			if(newProducts==null)
			{
				ArrayList<Object> objects=new ArrayList<Object>();
				objects.add("women");
				newProducts=(PageDTO) RestClientUtil.callService(objects, "getRestAllNewArrivalProductDetails", "ListingBusinessService");
				MemcachedUtil.set("restNewArrival",newProducts,MemcachedConstants.NEW_ARRIVALS);
				
				
			}
		
			log.info("size of rest arrivals"+newProducts.getData().size());
			mv.addObject("pageDTO", newProducts);
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("An error occured in the loadHomePage"+e.getMessage());
		}
		
		return mv;
	}
	
	
	@RequestMapping(value="/imagesourcetests3.htm")
	public ModelAndView imagesourcetests3(HttpServletRequest req,HttpServletResponse res)
	{
		ModelAndView mv=new ModelAndView("imagesourcetest");
		mv.addObject("isS3", "true");
		
		return mv;
	}
	
	@RequestMapping(value="/imagesourcetestgs.htm")
	public ModelAndView imagesourcetestgs(HttpServletRequest req,HttpServletResponse res)
	{
		ModelAndView mv=new ModelAndView("imagesourcetest");
		mv.addObject("isS3", "false");
		
		return mv;
	}




@RequestMapping(value="/sendBrokenImageAlert.htm")
public @ResponseBody Boolean  sendBrokenImageAlert(@RequestParam("imageLink")String imageLink,HttpServletRequest req)
{
	String brandstr="";
	String imgLink = imageLink;
	Long brandid=0l;
	Boolean flag = false;
	String mode="";
	/*try
	{
		brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		mode = EnvironmentUtil.getEnvironmentValue("AppMode");
	}
	catch(Exception e)
	{
		e.printStackTrace();
		
	}

	log.info("mode ====== " + mode.toLowerCase() + "image link = " + imageLink);
	
	if(mode.equalsIgnoreCase("live"))
	{
		log.info("mode ====== " + mode.toLowerCase());
		try
		{
			if(brandstr!=null)
			{
				brandid=Long.parseLong(brandstr);
			}
				try
				{
					flag = true;
					HashMap  brokenLink  = new HashMap();
					brokenLink.put("imageLink", imageLink);
					log.info(">>>>>>>>>>>> imageLink >>>>>>>>>>> " + imageLink);
					EmailDTO dto=new EmailDTO();
					HashMap<String,String> orgToList=new HashMap<String, String>();
					
					orgToList.put("businesssupport@solestruck.com" , "Development@solestruck.com");
					dto.setTo(orgToList);
					dto.setFrom(VeroniqaConstants.CUSTOMER_SERVICE_MAIL);			
					dto.setFromName("Solestruck");
					dto.setSubject(mode.toUpperCase()+":::"+imageLink + ":::Broken Link");
					String textMsg="Broken Link ::::: " + imageLink;
					
					String htmlMsg="Broken Link ::::: " + imageLink;
					
					log.info("textMsg>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" + textMsg);
					log.info("htmlMsg>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" + htmlMsg);
					
					dto.setTextMessage(textMsg);
					dto.setHtmlMessage(htmlMsg);	
							
							
					log.info("Before calling sendMailToMailService: FOR BROKEN LINKS ");
					//EmailClientService.sendMailtoMailService(dto);
					log.info("After calling sendMailToMailService: FOR BROKEN LINKS");
					  
					  
				
				}	        	
				
				catch(Exception e)
				{
					flag = false;
					e.printStackTrace();
					log.info("Exception in the sendBrokenImageAlert()"+e.getMessage());
				}*/
				/*if(flag)
				{
					List<Object> inputList1 = new ArrayList<Object>();
					inputList1.add(imageLink);
					Boolean updateMail =(Boolean) RestClientUtil.callService(inputList1, "updateUserReviewStatus", "IDPMailBusinessService");
				}*/
				
		
			/*}
			catch(Exception e)
			{
				flag = false;
				e.printStackTrace();
				log.info("Exception in the sendBrokenImageAlert "+e.getMessage());
			}



	}*/
		return flag; 
	}


@RequestMapping(value="/SLConversion.htm")
public ModelAndView SLConversion(HttpServletRequest req,HttpServletResponse res)
{
	ModelAndView mv=new ModelAndView("abtesting");
	
	return mv;
}


@RequestMapping(value="/updateBannerToCache.htm")
public @ResponseBody String updateBannerCache(HttpServletRequest req,HttpServletResponse res)
{
	String retVal="done";
	
	MemcachedUtil.remove("homepagebanner",MemcachedConstants.NEW_ARRIVALS);
	MemcachedUtil.remove("lookbookbanner",MemcachedConstants.LOOK_BOOK);
	MemcachedUtil.remove("homebanner",MemcachedConstants.HOME_PAGE);
	MemcachedUtil.flushCache(MemcachedConstants.NEW_ARRIVALS);
	MemcachedUtil.flushCache(MemcachedConstants.LOOK_BOOK);
	MemcachedUtil.flushCache(MemcachedConstants.HOME_PAGE);
	if(req.getParameter("homebanner")!=null)
	{
		HomePageBannerServiceDTO dto=new HomePageBannerServiceDTO();
		dto.setFlag("EXISTS");
		dto.setSortBy(null);
		dto.setStartIndex(0);
		dto.setEndIndex(0);
		dto.setOnLive(true);
		ArrayList params3=new ArrayList();
		params3.add(dto);
		List<HomePageBanner> hpbanners=(List<HomePageBanner>)MemcachedUtil.get("homepagebanner",MemcachedConstants.NEW_ARRIVALS);
		List<HomePageBanner> hpbannersCache=(List<HomePageBanner>)MemcachedUtil.get("homebanner",MemcachedConstants.HOME_PAGE);
		if(hpbanners!=null||hpbannersCache!=null)
		{
			hpbanners=(List<HomePageBanner>)RestClientUtil.callService(params3, "getAllHomePageBanners", "HomePageBannerBusinessService");
			
			MemcachedUtil.set("homepagebanner",hpbanners,MemcachedConstants.NEW_ARRIVALS);
			MemcachedUtil.set("homebanner",hpbanners,MemcachedConstants.HOME_PAGE);
		}
		
	}
	else if(req.getParameter("lookbook")!=null)
	{
		LookBookBannerServiceDTO ldto=new LookBookBannerServiceDTO();
		ldto.setFlag("EXISTS");
		ldto.setSortBy("dateAdded desc");
		ldto.setStartIndex(0);
		ldto.setEndIndex(0);
		ldto.setOnLive(true);
		//ldto.setSortBy("dateAdded desc");
		ArrayList params=new ArrayList();
		params.add(ldto);
		List<LookBookBanner> lbbanners=(List<LookBookBanner>)MemcachedUtil.get("lookbookbanner",MemcachedConstants.LOOK_BOOK);
		//log.info("size of lbbanners:"+lbbanners.size());
		if(lbbanners!=null)
		{
			//ArrayList<Object> params=new ArrayList<Object>();
			//params.add(ldto);
			lbbanners=(List<LookBookBanner>)RestClientUtil.callService(params, "getAllLookBookBanners", "LookBookBannerBusinessService");
			//log.info("size of lbbanners in homepage:"+lbbanners.size());
			
			
			MemcachedUtil.set("lookbookbanner",lbbanners,MemcachedConstants.LOOK_BOOK);
		}
		
	}
	
	
	return retVal;
}

//This is added for robots.txt by YES

@RequestMapping(value="/robots.txt")
public @ResponseBody String robots(HttpServletRequest req,HttpServletResponse res) throws Exception
{
	String serverName=req.getServerName();
	log.info("********* serverName is ----->>>>>>>   :  "  +  serverName);
	//PrintWriter pw=res.getWriter();
	if("www.solestruck.com".equalsIgnoreCase(serverName))
	{
		log.info("INSIDE IF www.solestruck.com  -----   robots() and serverName is ----->>>>>>>   :  "  +  serverName);
		StringBuffer buf=new StringBuffer();
		if(req.getScheme().equalsIgnoreCase("http"))
		{
		buf.append("Sitemap: http://www.solestruck.com/sitemap.xml \n");
		}
		else if(req.getScheme().equalsIgnoreCase("https"))
		{
		buf.append("Sitemap: https://www.solestruck.com/sitemap.xml \n");
		}
		buf.append("User-agent: live\n");
		buf.append("Disallow:\n");
		buf.append("User-agent: *\n");
		buf.append("Disallow:\n");
		res.setContentType("text/plain");
		res.getOutputStream().write(buf.toString().getBytes());
		res.flushBuffer();
		//pw.print("User-agent: * \n\r");
		//pw.print("Sitemap: http://www.solestruck.com/sitemap.xml \n\r");
		//pw.close();
		
		
	}
	else 
	{
		log.info("INSIDE ELSE ----- robots() and serverName is ----->>>>>>>   :  "  +  serverName);
		StringBuffer buf=new StringBuffer();
		buf.append("User-agent: appspot\n");
		buf.append("Disallow: / \n");
		buf.append("User-agent: *\n");
		buf.append("Disallow: / \n");
		res.setContentType("text/plain");
		res.getOutputStream().write(buf.toString().getBytes());
		res.flushBuffer();
		//pw.print("User-agent: * \n\r");
		//pw.print("Disallow: / \n\r");
		//pw.close();
		
		
	}
	
	return null;
	
}

@RequestMapping(value="/getFrontEndDetails.htm")
public @ResponseBody FrontEndDTO getFrontEndDetails() throws Exception
{
	log.info("------>>>>>>>>>>> ******* INSIDE getFrontEndDetails()   *******  ------->>>>>>>>>>>>>");
	FrontEndDTO fd=new FrontEndDTO();
	try
	{
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandid=null;
		ArrayList<Object> objectsFirst=new ArrayList<Object>();
		objectsFirst.add(new Long(brandstr));
		fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
		if(fd!=null)
		{
			
			log.info("FrontEndDTO Retrived from cache");
		}
		else
		{
			log.info("--->>>>>>  FrontEndDTO Retrived from DB    ----->>>>>>>");
			fd=(FrontEndDTO) RestClientUtil.callService(objectsFirst, "getFrontEndDTOFromCache", "ListingBusinessService");
				 
				MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
		}
	}
	catch(Exception e)
	{
		e.printStackTrace();
		log.info("An error occured in the getFrontEndDetails"+e.getMessage());
	}
	return fd;
}

@RequestMapping("/getTimeStampForPreTimer.htm")
public @ResponseBody String getTimeStampForPreTimer()
{
	String retval="";
	try
	{
		retval=VeroniqaUtil.getHoursForSale()+"-"+VeroniqaUtil.getMinutesForSale()+"-"+VeroniqaUtil.getSecondsForSale();			
		System.out.println(retval);
	}
	catch(Exception e)
	{
		e.printStackTrace();
		log.warning("Exception in getTimeStampForPreTimer "+e.getMessage());
	}
	return retval;
}


@RequestMapping(value="/streetcredpage.htm")
public ModelAndView streetcredpage(HttpServletRequest req,HttpServletResponse res)
{
	
	ModelAndView mv=null;
	FrontEndDTO fd=new FrontEndDTO();
	mv = new ModelAndView("streetcred");
	String brandstr="";
	String frontEndUrl = com.veroniqa.frontend.util.VeroniqaConstants.LIVE_FRONTEND_URL;
	try
	{
		brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
	}
	catch(Exception e)
	{
		e.printStackTrace();
		
	}
	
	try
	{
		List<Event> retval=null;
		retval=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
		
		if(retval==null)
		{
			ArrayList<Object> objects=new ArrayList<Object>();
		
			retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
			if(retval!=null && retval.size()>0)
				MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
			
		}
		if(retval!=null&&retval.size()>0)
			mv.addObject("eventList",retval);
		
		
		
	}
	catch(Exception e)
	{
		log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
	}
	Long brandId=0l;
	try
	{
		if(brandstr!=null)
		{
			brandId=Long.parseLong(brandstr);
		}
		ArrayList<Object> objects=new ArrayList<Object>();
		objects.add(brandId);
		
		fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
		if(fd==null)
		{
			
			fd=(FrontEndDTO) RestClientUtil.callService(objects, "getFrontEndDTOFromCache", "ListingBusinessService");
			 
				MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
		}
		List<Integer> womenDropDown=VeroniqaUtil.getWomenDropDown(fd);
		if(womenDropDown!=null && womenDropDown.size()>0)
		{
			mv.addObject("firstColumn",womenDropDown.get(0));
			mv.addObject("secondColumn",womenDropDown.get(1));
			mv.addObject("thirdColumn",womenDropDown.get(2));
			mv.addObject("fourthColumn",womenDropDown.get(3));
		}
		List<Integer> menDropDown=VeroniqaUtil.getMenDropDown(fd);
		if(menDropDown!=null && menDropDown.size()>0)
		{
			mv.addObject("firstColumnMen", menDropDown.get(0));
			mv.addObject("secondColumnMen", menDropDown.get(1));
			mv.addObject("thirdColumnMen", menDropDown.get(2));
			mv.addObject("fourthColumnMen", menDropDown.get(3));
		}
		mv.addObject("styles", fd.getStyles());
		mv.addObject("colors", fd.getColors());
		mv.addObject("sizes", fd.getSizes());
		mv.addObject("womenvendorlst", fd.getWomenVendors());
		mv.addObject("menvendorlst", fd.getMenVendors());
		mv.addObject("brandid", brandId);
		//mv.addObject("customerRegistration",new UserDetail() );
		mv.addObject("common_css","solestruck.min.css");
		mv.addObject("common_js","solestruckstreetcred.min.js");
		mv.addObject("page", "streetcredpage");
	}
	catch(Exception e)
	{
		e.printStackTrace();
		log.info("An exception occured in the getlookbookPage"+e.getMessage());
	}
	res.setHeader("Cache-Control", "public,max-age=31536000");
	res.setHeader("Pragma", "Public");
	return mv;
}


//@RequestMapping(value="/idpmapper.htm",method=RequestMethod.GET)
//public @ResponseBody String getproductdetailsbyproductName(@RequestParam("productName") String productName,HttpServletRequest req,HttpServletResponse res)
//{
////	System.out.println("productName--->"+productName);
//	log.info(" *********** productName name from streetCred tag ***********  "+productName);
//	String vendorName =null;
//	String colorName =null;
//	Long productId =null;
//	ModelAndView mv=null;	
//	ProductData pd=null;
//	
//	String redirectUrl=null;
//	List<IDPUrl> idpUrl = new ArrayList<IDPUrl>();
//	Long styleId=null;
//	List<Object> inputList = new ArrayList<Object>();
//	inputList.add(productName);
//	
//	IDPUrl retVal = null;
//	pd=(ProductData) RestClientUtil.callService(inputList, "getProductDataByProductName", "ProductDataBusinessService");
//	if(pd!=null)
//	{
//		if(pd.getVendorName()!=null)
//		{
//			vendorName=pd.getVendorName();
//			productId =pd.getProductId();
//			colorName =pd.getCustomColorName();
//			
//		}
//	}
////	System.out.println("vendorName-->"+vendorName);
////	System.out.println("colorName-->"+colorName);
////	System.out.println("productId-->"+productId);
//	
//	List<Object> urlList = new ArrayList<Object>();
//	urlList.add(productId);
//	
//	if( vendorName != null)
//	{
//		idpUrl=(List<IDPUrl>) RestClientUtil.callService(urlList, "getIdpUrlByProductId", "IDPUrlBusinessService");
//		
//		try
//		{
//			if(idpUrl!=null && idpUrl.size() !=0)
//			{
//				retVal=idpUrl.get(0);
////				System.out.println("list--->"+retVal.getRedirectedUrl());
//				
//				if(retVal.getRedirectedUrl() == "")
//				{
//					redirectUrl ="nourl";
//				}
//				else
//				{
//					redirectUrl=retVal.getRedirectedUrl();
//				}
//				log.info(" *********** Orginial Url to load IDP is "+redirectUrl);
//			}
//			else
//			{
//				redirectUrl ="nourl";
//				log.info("This IDP  page is not Available");
//			}
//		}
//		catch(Exception e)
//		{
//			log.warning("Exception in idpRewriteUrl"+e.getMessage());
//			e.printStackTrace();
//		}
//	}
//	else
//	{
//		redirectUrl ="nourl";
//	}
//	return redirectUrl;
//}


/*@RequestMapping(value="/idpmapper.htm",method=RequestMethod.GET)

public @ResponseBody String getproductdetailsbyproductName(@RequestParam("productName") String productName,HttpServletRequest req,HttpServletResponse res)

{

//	System.out.println("productName--->"+productName);

log.info(" *********** productName name from streetCred tag ***********  "+productName);

String vendorName =null;

String colorName =null;

Long productId =null;

ModelAndView mv=null;

ProductData pd=null;


String redirectUrl=null;

IDPUrl idpUrl = null;

Long styleId=null;

List<Object> inputList = new ArrayList<Object>();

inputList.add(productName);


IDPUrl retVal = null;

//	pd=(ProductData) RestClientUtil.callService(inputList, "getProductDataByProductName", "ProductDataBusinessService");

//	if(pd!=null)

//	{

//	 if(pd.getVendorName()!=null)

//	 {

//	 vendorName=pd.getVendorName();

//	 productId =pd.getProductId();

//	 colorName =pd.getCustomColorName();

//

//	 }

//	}

////	System.out.println("vendorName-->"+vendorName);

////	System.out.println("colorName-->"+colorName);

////	System.out.println("productId-->"+productId);

//

//	List<Object> urlList = new ArrayList<Object>();

//	urlList.add(productId);

//	System.out.println("productId --->"+productId);

//	if( vendorName != null)

//	{

idpUrl=(IDPUrl) RestClientUtil.callService(inputList, "getIdpUrlByProductName", "IDPUrlBusinessService");


log.info("idpurl size--->"+idpUrl.getRedirectedUrl());


try

{

if(idpUrl!=null )

{

if(idpUrl.getRedirectedUrl() == "")

{

redirectUrl ="nourl";

}

else

{

redirectUrl=idpUrl.getRedirectedUrl();

}

log.info(" *********** Orginial Url to load IDP is "+redirectUrl);

}

else

{

redirectUrl ="nourl";

log.info("This IDP  page is not Available");

}

}

catch(Exception e)

{

log.warning("Exception in idpRewriteUrl"+e.getMessage());

e.printStackTrace();

}

//	}

//	else

//	{

//	 redirectUrl ="nourl";

//	}

return redirectUrl;

}*/

@RequestMapping(value="/idpmapper.htm")
public @ResponseBody String getproductdetailsbyproductName(@RequestParam("productName") String productName,HttpServletRequest req,HttpServletResponse res)
{
	
	log.info(" *********** productName name from streetCred tag ***********  "+productName);
	String vendorName =null;
	String colorName =null;
	Long productId =null;
	ModelAndView mv=null;	
	ProductData pd=null;
	
	String redirectUrl=null;
	IDPUrl idpUrl = null;
	Long styleId=null;
	productName=productName.toLowerCase();
	List<Object> inputList = new ArrayList<Object>();
	inputList.add(productName);
	
	log.info("productName--->"+productName);
	
	IDPUrl retVal = null;
	idpUrl=(IDPUrl) RestClientUtil.callService(inputList, "getIdpUrlBylcProductName", "IDPUrlBusinessService");
		
		try
		{
			if(idpUrl!=null )
			{
				log.info("idpurl size--->"+idpUrl.getRedirectedUrl());
				if(idpUrl.getRedirectedUrl() == "")
				{
					redirectUrl ="nourl";
				}
				else
				{
					redirectUrl=idpUrl.getRedirectedUrl();
				}
				log.info(" *********** Orginial Url to load IDP is "+redirectUrl);
			}
			else
			{
				redirectUrl ="nourl";
				log.info("This IDP  page is not Available");
			}
		}
		catch(Exception e)
		{
			log.warning("Exception in idpRewriteUrl"+e.getMessage());
			e.printStackTrace();
		}
//	}
//	else
//	{
//		redirectUrl ="nourl";
//	}
	return redirectUrl;
}



@RequestMapping("/abandonmentMailService.htm")
public void abandonmentMailService(@RequestParam("type") String type, @RequestParam("interval") String interval)
{
	log.info("********* type **********"+type+ "************ interval ***********"+interval);
	try {
		if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("LIVE")||EnvironmentUtil.getEnvironmentValue("AppMode").equals("STAGING"))
		{
		log.info("inside  AbandonedMailServlet" );
		Long brandid=null;
		try 
		{
			brandid = Long.parseLong(EnvironmentUtil.getEnvironmentValue("brandid"));
		} 
		catch (NumberFormatException e) 
		{
			e.printStackTrace();
		} 
		catch (Exception e) 
		{
			e.printStackTrace();
		}
		Integer diff;
		if(interval!=null && interval!="")
		{
			diff =  Integer.parseInt(interval);
		}
		else
			diff=3;
		
		log.info(" DIFF ==== " + diff ) ;
		IDPMailsCommonServiceClient imsc = new IDPMailsCommonServiceClient();
		List<AbandonedShoeMailDTO> Asm = new ArrayList<AbandonedShoeMailDTO>();
		List<AbandonedWishListDTO> Awm=new ArrayList<AbandonedWishListDTO>();
		
		boolean mailSent = false;
		if(type.equals("cart"))
		{
			log.info("inside abandoned cart");
		try
		{	
			log.info(">>>>>>>>>>> Inside try >>>>>>>>>>>> ");
			List<Object> list = new ArrayList<Object>();
			list.add(diff);
			Asm = (List<AbandonedShoeMailDTO>)RestClientUtil.callService(list, "getCustomersForAbandonedShoeMail", "IDPMailBusinessService");
			log.info("total mails to be sent = " + Asm.size());
			
			for(AbandonedShoeMailDTO asm:Asm)
			{
				log.info("got the order details >>>>>>>>> for  = " + asm.getCustFname());
				mailSent = imsc.sendAbandonedShoeMail(asm);
				log.info("mailsent = " + mailSent);
				
				if(mailSent)
				{
					log.info("going to update mail status >>>>>>>>>>>");
					Long orderid = asm.getOrderId();
					List<Object> listTwo = new ArrayList<Object>();
					listTwo.add(orderid);
					boolean  updateFlag = (Boolean)RestClientUtil.callService(listTwo, "updateOrderByIdForMailSent", "OrderBusinessService");
					
				}
				log.info("#################after calling send mail service for mailid:"+ asm.getCustomerEmail() +" #################3");
			}
		}
		catch(Exception ex)
		{
			log.warning("Exception in : sendEmailForCron"+ex.getMessage());
			ex.printStackTrace();
			
		}
		}
		else if(type.equals("wishlist"))
		{
			log.info("inside abandoned wishlist");
			try
			{	
				log.info(">>>>>>>>>>> Inside try >>>>>>>>>>>> ");
				List<Object> list = new ArrayList<Object>();
				list.add(diff);
				list.add(brandid);
				Awm = (List<AbandonedWishListDTO>)RestClientUtil.callService(list, "getCustomersForAbandonedWishListMail", "IDPMailBusinessService");
				log.info("total mails to be sent = " + Awm.size());
				
				for(AbandonedWishListDTO awm:Awm)
				{
					log.info("got the order details >>>>>>>>> for  = " + awm.getCustFname());
					mailSent = imsc.sendAbandonedWishListMail(awm);
					log.info("mailsent = " + mailSent);
					
					if(mailSent)
					{
						log.info("going to update mail status >>>>>>>>>>>");
						Long wishlistid = awm.getWishlistid();
						List<Object> listTwo = new ArrayList<Object>();
						listTwo.add(wishlistid);
						boolean  updateFlag = (Boolean)RestClientUtil.callService(listTwo, "updateStatusForWishlistMail", "WishListBusinessService");
						log.info("Mail Sent="+updateFlag);
					}
					log.info("#################after calling send mail service for mailid:"+ awm.getCustomerEmail());
				}
			}
			catch(Exception ex)
			{
				log.warning("Exception in : sendEmailForCron"+ex.getMessage());
				ex.printStackTrace();
				
			}
		}
				
}
		else
			log.info("Appmode is not LIVE...skipping emails");
	} catch (NumberFormatException e) {
		log.info("NumberFormatException occurred"+e.getMessage());
		e.printStackTrace();
	} catch (Exception e) {
		log.info("Exception occurred"+e.getMessage());
		e.printStackTrace();
	}
}
}




