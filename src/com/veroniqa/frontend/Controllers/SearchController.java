package com.veroniqa.frontend.Controllers;

import java.io.ByteArrayOutputStream;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;
import java.util.zip.GZIPOutputStream;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.veroniqa.bean.UserDetail;
import com.veroniqa.dto.FrontEndDTO;
import com.veroniqa.dto.PageDTO;
import com.veroniqa.dto.ProductDTO;
import com.veroniqa.dto.ProductFilterDTO;
import com.veroniqa.dto.ShoppingCart;
import com.veroniqa.frontend.service.ShoppingCartService;
import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.MemcachedConstants;
import com.veroniqa.frontend.util.MemcachedUtil;
import com.veroniqa.frontend.util.RestClientUtil;
import com.veroniqa.frontend.util.VeroniqaConstants;
import com.veroniqa.frontend.util.VeroniqaUtil;
import com.veroniqa.jdo.Event;

@Controller
public class SearchController {
	private static final Logger log=Logger.getLogger(SearchController.class.getSimpleName());
	@RequestMapping(value="/search.htm")
	public ModelAndView searchAndReturnFirstPage(@RequestParam(value="q",required=false)String searchPhrase,@ModelAttribute("myProductFilter") ProductFilterDTO productFilter,HttpServletRequest req)
	{
		ModelAndView mv=new ModelAndView("searchPage");
		FrontEndDTO fd=new FrontEndDTO();
		 PageDTO productList=null;
		 
			try
			{
				List<Event> retVal=null;
				retVal=(List<Event>)MemcachedUtil.get("onLiveEvents", MemcachedConstants.EVENTS_FEATURES);
				
				if(retVal==null)
				{
					ArrayList<Object> objects=new ArrayList<Object>();
				
					retVal=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
					if(retVal!=null && retVal.size()>0)
						MemcachedUtil.set("onLiveEvents", retVal,  MemcachedConstants.EVENTS_FEATURES);
					
				}
				if(retVal!=null&&retVal.size()>0)
					mv.addObject("eventList",retVal);
				
				log.info("EventList size is "+retVal.size()+"and "+retVal.get(0).getEventName());
				
				
			}
			catch(Exception e)
			{
				log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
			}
		try
		{
			if(searchPhrase!=null){
				if(searchPhrase.endsWith("/"))
				{
					searchPhrase=searchPhrase.substring(0,searchPhrase.length()-1);
				}
				
			log.info("---------------------searching for "+searchPhrase);
			
			productList=(PageDTO)MemcachedUtil.get("searchPage_"+searchPhrase+"_"+1, MemcachedConstants.SEARCH_PRODUCTS_NAMESPACE);
			if(productList==null)
			{
				ArrayList<Object> params = new ArrayList<Object>();
				params.add(searchPhrase.toLowerCase());
				params.add(1);
				//productList=(PageDTO)RestClientUtil.callService(params, "getSearchPageResults_ProductData", "SearchEntryBusinessService");
				productList=(PageDTO)RestClientUtil.callService(params, "getSearchPageResults", "SearchEntryProductDataBusinessService");
				MemcachedUtil.set("searchPage_"+searchPhrase+"_"+1,productList,MemcachedConstants.SEARCH_PRODUCTS_NAMESPACE);
			}
			ArrayList<Object> params = new ArrayList<Object>();
			params.add(searchPhrase);
			params.add(1);
			//productList=(PageDTO)RestClientUtil.callService(params, "getSearchPageResults_ProductData", "SearchEntryBusinessService");
			productList=(PageDTO)RestClientUtil.callService(params, "getSearchPageResults", "SearchEntryProductDataBusinessService");
	
			
			}
			else
			{
				ArrayList<Object> params = new ArrayList<Object>();
				params.add("blankSearch");
				params.add(1);
				//productList=(PageDTO)RestClientUtil.callService(params, "getSearchPageResults_ProductData", "SearchEntryBusinessService");
				productList=(PageDTO)RestClientUtil.callService(params, "getSearchPageResults", "SearchEntryProductDataBusinessService");

			}
			//log.info("Products retrieved size:"+productList.getData().size());
			
			String brandstr="";
			try
			{
				brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
			}
			catch(Exception e)
			{
				e.printStackTrace();
				
			}
			fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			if(fd!=null)
			{
				
				log.info("FrontEndDTO Retrived from cache");
			}
			else
			{
				ArrayList<Object> objectsFirst=new ArrayList<Object>();
				objectsFirst.add(new Long(brandstr));
				fd=(FrontEndDTO) RestClientUtil.callService(objectsFirst, "getFrontEndDTOFromCache", "ListingBusinessService");
					 
				MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
			}
			req.getSession().setAttribute("youAreHere","searchpage");
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
			mv.addObject("pageDTO", productList);
			mv.addObject("phrase",searchPhrase);
			mv.addObject("styles", fd.getStyles());
			mv.addObject("colors", fd.getColors());
			mv.addObject("sizes", fd.getSizes());
			mv.addObject("womenvendorlst", fd.getWomenVendors());
			mv.addObject("menvendorlst", fd.getMenVendors());
			mv.addObject("brandid", Long.parseLong(brandstr));
			mv.addObject("myProductFilter",new ProductFilterDTO());
			mv.addObject("customerRegistration",new UserDetail());
			//ShoppingCart cart=ShoppingCartService.getShoppingCart(req); // Commented for not being used by YES
			//mv.addObject("ShoppingCart", cart);
			mv.addObject("pageno", 1);
			mv.addObject("server",req.getRequestURL());
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestrucksearch.min.js");
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return mv;
	}
	
	@SuppressWarnings("deprecation")
	@RequestMapping(value="/getSearchPage.htm")
	public ModelAndView searchPage(@RequestParam("q")String searchPhrase,@RequestParam("page")Integer pageNo)
	{
		ModelAndView mv=new ModelAndView("searchPageChunk");
		PageDTO retVal=null;
		
		try
		{
			log.info("---------------------searching for "+searchPhrase+"page no"+pageNo);
			retVal=(PageDTO)MemcachedUtil.get("searchPage_"+searchPhrase+"_"+pageNo, MemcachedConstants.SEARCH_PRODUCTS_NAMESPACE);
			if(retVal==null)
			{
				ArrayList<Object> params = new ArrayList<Object>();
				params.add(URLDecoder.decode(searchPhrase.toLowerCase()));
				params.add(pageNo);
				//retVal=(PageDTO)RestClientUtil.callService(params, "getSearchPageResults_ProductData", "SearchEntryBusinessService");
				retVal=(PageDTO)RestClientUtil.callService(params, "getSearchPageResults", "SearchEntryProductDataBusinessService");
				MemcachedUtil.set("searchPage_"+searchPhrase+"_"+pageNo,retVal,MemcachedConstants.SEARCH_PRODUCTS_NAMESPACE);
			}
			
			
			mv.addObject("pageDTO", retVal);
			mv.addObject("nextAvailForMore", retVal.getNextAvailable());
			mv.addObject("pagenoForMore", pageNo);
			log.info("$$$$$$$$********** Next Available is $$$$$$$$$********** : " +retVal.getNextAvailable());
			if(retVal!=null)
				log.info("Products retrieved size:"+retVal.getData().size());
			else
				log.info("product lis is empty");
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return mv;
	}
	
	@RequestMapping(value="/clearSearchCache.htm")
	public String clearPartialCache(@RequestParam("ns")String nameSpace)
	{
		MemcachedUtil.flushCache(nameSpace);
	
		return "clearCache";
	}

	
	@RequestMapping(value="/getSearchKeyWords.htm")
	public @ResponseBody List<String> getSearchKeyWords(HttpServletRequest req,HttpServletResponse res)
	{
		List<String> retVal=null;
		ObjectMapper mapper=new ObjectMapper();
		try
		{
			retVal=(List<String>)MemcachedUtil.get("getKeyWordsFromCache", MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
			if(retVal==null)
			{
				ArrayList<Object> params = new ArrayList<Object>();
				params.add("dummyValue");
				retVal=(List<String>)RestClientUtil.callService(params, "getKeyWordsFromCache", "SearchEntryProductDataBusinessService");
				MemcachedUtil.set("getKeyWordsFromCache",retVal, MemcachedConstants.CATEGORY_LISTING_VENDOR_NS);
			}
			
			if(req.getHeader("Accept-Encoding")!=null){
				if(req.getHeader("Accept-Encoding").indexOf("gzip")!=-1 || req.getHeader("Accept-Encoding").indexOf("deflate")!=-1)
				{
					ByteArrayOutputStream bout=new ByteArrayOutputStream();
					GZIPOutputStream gout=new GZIPOutputStream(bout);
					gout.write(mapper.writeValueAsString(retVal).getBytes());
					gout.close();
					res.setContentType("application/json");
					res.addHeader("Content-Encoding", "gzip");
					res.addHeader("Vary", "Accept-Encoding");
					res.addHeader("Cache-Control", "max-age=0, no-cache");
					res.setContentLength(bout.toByteArray().length);
					res.getOutputStream().write(bout.toByteArray());
					res.flushBuffer();
					return null;
				}
				
			}
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return retVal;
	}

}
