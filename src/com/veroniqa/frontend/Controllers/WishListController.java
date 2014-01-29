package com.veroniqa.frontend.Controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.veroniqa.dto.FrontEndDTO;
import com.veroniqa.dto.WishListItemDTO;
import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.MemcachedConstants;
import com.veroniqa.frontend.util.MemcachedUtil;
import com.veroniqa.frontend.util.RestClientUtil;
import com.veroniqa.frontend.util.VeroniqaConstants;
import com.veroniqa.frontend.util.VeroniqaUtil;
import com.veroniqa.jdo.Event;

@Controller
public class WishListController
{
	
	Logger log=Logger.getLogger(WishListController.class.getSimpleName());
	@RequestMapping(value="/getWishList.htm",method=RequestMethod.GET)
	public ModelAndView getWishList(@RequestParam(value="custId",required=false)Long custid,HttpServletRequest req,HttpServletResponse res)
	{
	
		ModelAndView mv=new ModelAndView("wishlist");
		
		try
		{
			String customerid	 ="";
			if(req.getSession().getAttribute("customerid")!=null){
				customerid	 = (String) req.getSession().getAttribute("customerid");
			}
			
			if(customerid=="" || customerid.equals("null")){
				res.sendRedirect("/");
			}
			else
			{
				FrontEndDTO fd=new FrontEndDTO();
				log.info(" customer id "+customerid);
				ArrayList<Object> params = new ArrayList<Object>();
				params.add(Long.parseLong(customerid));
				List<WishListItemDTO>wishListItems=(List<WishListItemDTO>)RestClientUtil.callService(params, "getWishList", "WishListBusinessService");
				String brandstr="";
				brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
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
					fd=(FrontEndDTO) RestClientUtil.callService(objectsFirst, "getFrontEndDTOFromCache", "ListingBusinessService");
						 
						MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
				}
				try
				{
					List<Event> eventList=null;
					eventList=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
					
					if(eventList==null)
					{
						ArrayList<Object> objects=new ArrayList<Object>();
					
						eventList=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
						if(eventList!=null && eventList.size()>0)
							MemcachedUtil.set("onLiveEvents", eventList,  MemcachedConstants.EVENTS_FEATURES);
						
					}
					if(eventList!=null&&eventList.size()>0)
						mv.addObject("eventList",eventList);
					
					log.info("EventList size is "+eventList.size()+"and "+eventList.get(0).getEventName());
					
					
				}
				catch(Exception e)
				{
					log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
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
				mv.addObject("sizes", fd.getSizes());
				mv.addObject("womenvendorlst", fd.getWomenVendors());
				mv.addObject("menvendorlst", fd.getMenVendors());
				log.info("WishListItem size"+wishListItems.size());
				mv.addObject("wishListItemsSize",wishListItems.size());
				mv.addObject("wishListItems",wishListItems);
				mv.addObject("server",req.getRequestURL());
				mv.addObject("common_css","solestruck.min.css");
				mv.addObject("common_js","solestruckwishlist.min.js");
				
			}
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		finally{
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestruckwishlist.min.js");
		}
		return mv;
	}
	
	@RequestMapping(value="/wishList.htm",method=RequestMethod.GET)
	public @ResponseBody List<WishListItemDTO> getWishlistItems(HttpServletRequest req)
	{
	
		List<WishListItemDTO> wishListItems=null;
		try
		{
			String customerid	 =null;
			if(req.getSession().getAttribute("customerid")!=null){
				customerid	 = (String) req.getSession().getAttribute("customerid");
			}
			
			log.info(" customer id "+customerid);
			
			ArrayList<Object> params = new ArrayList<Object>();
			params.add(Long.parseLong(customerid));
			wishListItems=(List<WishListItemDTO>)RestClientUtil.callService(params, "getWishList", "WishListBusinessService");
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		
		return wishListItems;
	}
	@RequestMapping(value="/addToWishList.htm",method=RequestMethod.POST)
	public @ResponseBody String addToWishList(@RequestParam("customerId")Long customerId,@RequestParam("prodid")Long productid,@RequestParam("colorid")Long colorid,@RequestParam("size")Double size,HttpServletRequest req)
	{
		
		log.info("inside addtoWishList ");
		String  retVal="Problem in Adding item to wishlist!";
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
			Long brandid=Long.parseLong(brandstr);
			boolean result=false;
			if(brandid!=null)
			{
				ArrayList<Object> params = new ArrayList<Object>();
				params.add(brandid);
				params.add(customerId);
				params.add(productid);
				params.add(colorid);
				params.add(size);
				result=(Boolean)RestClientUtil.callService(params, "addToWishList", "WishListBusinessService");
				
			}
			if(result==true)
				retVal="One item added successfuly";
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("Exception in addToWishList"+e.getMessage());
		}
		return retVal;
	}
	
	@RequestMapping(value="/addItemAndLoadWishList.htm",method=RequestMethod.POST)
	public @ResponseBody String  addItemAndLoadWishList(@RequestParam("customerId")Long customerId,@RequestParam("prodid")Long productid,@RequestParam("colorid")Long colorid,@RequestParam("size")Double size,HttpServletRequest req)
	{
		
		log.info("inside addtoWishList()->customerid: "+customerId+" ;productid:"+productid+" ;colorid:"+colorid+"; size:"+size);
		ModelAndView mv=new ModelAndView("wishlist");
		List<WishListItemDTO> wishListItems=null;
		String brandstr="";
		boolean result=false;
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
			Long brandid=Long.parseLong(brandstr);
			
			if(brandid!=null)
			{
				ArrayList<Object> params = new ArrayList<Object>();
				params.add(brandid);
				params.add(customerId);
				params.add(productid);
				params.add(colorid);
				params.add(size);
				wishListItems=(List<WishListItemDTO>)RestClientUtil.callService(params, "addItemAndGetWishList", "WishListBusinessService");
				
				if(wishListItems!=null  && wishListItems.size()>0){
					result=true;
				}
				else{
					result=false;
				}
				
				log.info("WishListItem size"+wishListItems.size());
				mv.addObject("wishListItems",wishListItems);
				mv.addObject("server",req.getRequestURL());
			}
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("Exception in addToWishList"+e.getMessage());
		}
		return String.valueOf(result);
	}
	

	@RequestMapping(value="/removeWishListItem.htm",method=RequestMethod.POST)
	public @ResponseBody List<WishListItemDTO> removeItem(@RequestParam("itemid")String itemid,HttpServletRequest req)
	{
		String retVal="failure";
		String customerid	 =null;
		List<WishListItemDTO>  wishListItems= null;
		if(req.getSession().getAttribute("customerid")!=null){
			customerid	 = (String) req.getSession().getAttribute("customerid");
		}
		try
		{
			boolean removed=false;
			if(customerid!=null)
			{
				ArrayList<Object> params = new ArrayList<Object>();
				params.add(Long.parseLong(customerid));
				params.add(Long.parseLong(itemid));
				removed=(Boolean)RestClientUtil.callService(params, "removeItem", "WishListBusinessService");
				
			}
			
			if(removed==true)
			{
				log.info(" customer id "+customerid);
				ArrayList<Object> params = new ArrayList<Object>();
				params.add(Long.parseLong(customerid));
				wishListItems=(List<WishListItemDTO>)RestClientUtil.callService(params, "getWishList", "WishListBusinessService");
			}
				
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("Exception in removeItem:"+e.getMessage());
		}
		return wishListItems;
	}
	

	@RequestMapping(value="/editWishListItem.htm",method=RequestMethod.POST)
	public @ResponseBody String editItem(@RequestParam("itemid")Long itemid,@RequestParam("productid")Long productid,@RequestParam("colorid")Long colorid,@RequestParam("size")Double size,HttpServletRequest req)
	{
		String retVal="failure";
		Long customerid=(Long)req.getSession().getAttribute("customerid");
		
		try
		{
			ArrayList<Object> params=new ArrayList<Object>();
			int edited=0;
			if(customerid!=null)
			{
				params.add(customerid);
				params.add(itemid);
				params.add(productid);
				params.add(colorid);
				params.add(size);
				edited=(Integer)RestClientUtil.callService(params, "editItem", "WishListBusinessService");
			}
			if(edited==1)
			{
				retVal="update success";
			}
			
			else if(edited==2)
			{
				retVal="duplicate removed";
			}
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("Exception in removeItem:"+e.getMessage());
		}
		return retVal;
	}
	
}
