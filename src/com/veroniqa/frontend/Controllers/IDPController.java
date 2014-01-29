package com.veroniqa.frontend.Controllers;
import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Collections;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.google.appengine.api.datastore.Text;
import com.google.appengine.labs.repackaged.org.json.JSONObject;
import com.google.gson.Gson;
import com.google.apphosting.utils.remoteapi.RemoteApiPb.Request;
import com.veroniqa.bean.UserDetail;
import com.veroniqa.dto.ColorSizeDTO;
import com.veroniqa.dto.FrontEndDTO;
import com.veroniqa.dto.PerfectFitMailDTO;
import com.veroniqa.dto.ProductDetailDTO;
import com.veroniqa.dto.SizeQuantityPriceDTO;
import com.veroniqa.email.dto.EmailDTO;
import com.veroniqa.email.emailclientservice.EmailClientService;
import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.MemcachedConstants;
import com.veroniqa.frontend.util.MemcachedUtil;
import com.veroniqa.frontend.util.RestClientUtil;
import com.veroniqa.frontend.util.VelocityUtil;
import com.veroniqa.frontend.util.VeroniqaConstants;
import com.veroniqa.frontend.util.VeroniqaCookieUtil;
import com.veroniqa.frontend.util.VeroniqaUtil;
import com.veroniqa.jdo.Attribute;
import com.veroniqa.jdo.Color;
import com.veroniqa.jdo.DiscountProgram;
import com.veroniqa.jdo.DontSeeYourSize;
import com.veroniqa.jdo.EmailTemplate;
import com.veroniqa.jdo.Event;
import com.veroniqa.jdo.Lookup;
import com.veroniqa.jdo.Product;
import com.veroniqa.jdo.ProductData;
import com.veroniqa.jdo.ProductVariant;
import com.veroniqa.jdo.SendToFriend;
import com.veroniqa.jdo.UserReview;
import com.veroniqa.realtime.RealTimeCustomersChannelService;
import com.veroniqa.service.GlobalNavigationCommonService;

@Controller
public class IDPController {
	private Logger log=Logger.getLogger(IDPController.class.getSimpleName());
	
	@RequestMapping(value="/idp.htm")
	public ModelAndView showIDP(@RequestParam("productId")Long prodId,@RequestParam("vendorName") String vendorName,@RequestParam("colorId")Long colorId,HttpServletRequest req)
	{
		long starttime=System.currentTimeMillis();
		ModelAndView mv=new ModelAndView("item_detail");
		FrontEndDTO fd=new FrontEndDTO();
		List<Attribute> sizes=new ArrayList<Attribute>();
		ProductData pd=null;
		String page = "NA";
		String sortorvendor = "NA";
		String reviewFrom="";
		String userName="";
		String userEmail="";
		String r_title="";
		String reviewText="";
		String rating="";
		String syscolor=null;
		String style=null;
		Long styleId = null;
		String shoeDes = null;
		if(req.getParameter("reviewFrom")!=null)
		{
		reviewFrom=req.getParameter("reviewFrom").toString();
		mv.addObject("reviewFrom",reviewFrom);
		}
		if(req.getParameter("userName")!=null&&req.getParameter("userEmail")!=null&&req.getParameter("reviewTitle")!=null&&req.getParameter("reviewText")!=null&&req.getParameter("review_rating")!=null)
		{
		userName=req.getParameter("userName").toString();
		userEmail=req.getParameter("userEmail").toString();
		r_title=req.getParameter("reviewTitle").toString();
		reviewText=req.getParameter("reviewText").toString();
		rating=req.getParameter("review_rating").toString();
		mv.addObject("userName", userName);
		mv.addObject("userEmail", userEmail);
		mv.addObject("reviewtitle", r_title);
		mv.addObject("reviewText", reviewText);
		mv.addObject("ratingCount", rating);
		}
		if(req.getHeader("referer")!=null)
		{
		String urlReferer = req.getHeader("referer");
		log.info(urlReferer);
		String[] urlChunks = urlReferer.split("/");
		int len = urlChunks.length;
		
		mv.addObject("vendorName",vendorName);
		if(len>3)
		{
		String isSortPage = urlChunks[3];
		if(isSortPage.equals("search-womens-shoes")||isSortPage.equals("mens"))
		{
			
			sortorvendor="sort";
			mv.addObject("isSort",sortorvendor);
		}
		else
		{
			mv.addObject("isSort",sortorvendor);
		}
		}
		
		if(len>4)
		{
			page = urlChunks[4];
			
			String pageAr[] =  page.split("-");
			if((pageAr.length==2)&&(pageAr[0].equals("Page")))
			 {
				mv.addObject("page", page);
			 }
		}
		
		}
		HashMap<Long,ProductVariant> prodVari=new HashMap<Long,ProductVariant>();
		//String lImageServerName="http://images2.solestruck.com";
		String lImageServerName="http://commondatastorage.googleapis.com/images2.solestruck.com";
		try
		{
			ProductDetailDTO productdtldto=(ProductDetailDTO)MemcachedUtil.get(MemcachedConstants.ITEM_DETAILS_KEY+"_"+prodId.toString(), MemcachedConstants.IDP_NAME_SPACE);
			if(productdtldto==null)
			{
				log.info("Fetching the ProductDetailDTO from DB");
				List<Object> inputList = new ArrayList<Object>();
				inputList.add(prodId);
				productdtldto=(ProductDetailDTO) RestClientUtil.callService(inputList, "getItemDetails", "ProductDetailBusinessService");
				MemcachedUtil.set(MemcachedConstants.ITEM_DETAILS_KEY+"_"+prodId.toString(),productdtldto, MemcachedConstants.IDP_NAME_SPACE);
			}
			else
			{
				log.info("Fetching the ProductDetailDTO from Cache");
			}
					
			
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
					log.info("Fetching the FeaturedEvent from DB");
					ArrayList<Object> objects=new ArrayList<Object>();
				
					retval=(List<Event>)RestClientUtil.callService(objects, "getAllOnLiveEvents", "EventManagerBusinessService");
					if(retval!=null && retval.size()>0)
						MemcachedUtil.set("onLiveEvents", retval,  MemcachedConstants.EVENTS_FEATURES);
					
				}
				else
				{
					log.info("Fetching the FeaturedEvent from Cache");
				}
				
				
				if(retval!=null&&retval.size()>0)
					mv.addObject("eventList",retval);
				
				
				
			}
			catch(Exception e)
			{
				log.warning("Exception occured in getAllOnLiveEvents" +e.getMessage());
			}
			
			Long brandId=0l;
			if(brandstr!=null)
			{
					brandId=Long.parseLong(brandstr);
					List<Object> inputList = new ArrayList<Object>();
					inputList.add(brandId);
					if(MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS)!=null)
					{
						fd=(FrontEndDTO)MemcachedUtil.get("ForntEndDetails",MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
						log.info("FrontEndDTO Retrived from cache");
					}
					else
					{
						log.info("FrontEndDTO Retrived from DB");
						fd=(FrontEndDTO) RestClientUtil.callService(inputList, "getFrontEndDTOFromCache", "ListingBusinessService");
						 
							MemcachedUtil.set("ForntEndDetails",fd,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
					}
			}
			
			
			log.info("FrontEndDTO is Retrieved");
			
			
			try
			{
				if(fd.getSizes()!=null)
				{
					sizes=fd.getSizes();
					log.info("sizes available");
				}
				else
				{
					log.info("sizes not available");
				}
			
			}
			catch(Exception e)
			{
				log.warning("Exception in fd.getSizes()"+e.getMessage());
				e.printStackTrace();
			}
			
			/*
			if(sizes.size()>0)
			log.info("sizes = " + sizes.get(1).getName());//This is causing issue, and this is only for log.
			*/
			
			log.info("ColorMap Retrieval");
			
			HashMap<String,String> colorMap= null;
			
			
			//Get ProductDetailsForColor
			List<SizeQuantityPriceDTO> dtolst=null;
			try
			{
				List<Object> inputList = new ArrayList<Object>();
				inputList.add(prodId);
				inputList.add(colorId);
				dtolst=(List<SizeQuantityPriceDTO>) RestClientUtil.callService(inputList, "getProductDetailsForColor", "ProductDetailBusinessService");

				if((dtolst!=null) && (dtolst.size()!=0 || dtolst.size()>0))
				{
					log.info("Product dto las size"+dtolst.size());
					mv.addObject("buttonValue", "ADD TO CART");
					mv.addObject("dtosize", dtolst.size());
					mv.addObject("productDetails",dtolst);
				}
				else if(dtolst!=null && dtolst.size()==0)
					mv.addObject("buttonValue", "NOTIFY ME");
			}
			catch(Exception e)
			{
				log.warning("Exception in getting button value :: "+e.getMessage());
				e.printStackTrace();
			}
			
			
			//Code Structured
			if(productdtldto!=null)
			{
				log.info("productdtldto is not null");
				
				if(productdtldto.getProductDescription()!=null)
			    shoeDes=productdtldto.getProductDescription();
				
				if(shoeDes.equals("Description"))
				{
					shoeDes=shoeDes.replace("Description","");
				}
				
				if(shoeDes.contains("color=\"red\""))
				{
					shoeDes=shoeDes.replace("color=\"red\"","");
				}
				
				colorMap=getColorMapFromColorDTOList(productdtldto.getColourDto(),colorId);
				
			    // Getting User Reviews for the Respective IDP
				List<UserReview> userReviewList =(List<UserReview>) MemcachedUtil.get("UserReviews_"+prodId.toString(),MemcachedConstants.USER_REVIEWS);
				
				if(userReviewList!=null)
				{
					log.info("User Review Retrieved from cache");
				}
				else
				{
					if(colorMap!=null)
					userReviewList = getUserReview(prodId, colorId, vendorName, productdtldto.getProductName(), colorMap.get(colorId.toString()));
					
					if(userReviewList!=null)
					{
					Collections.sort(userReviewList);
					MemcachedUtil.set("UserReviews_"+prodId.toString(),userReviewList,MemcachedConstants.USER_REVIEWS);
					log.info("User Review Retrieved from DB");
					}
				}
				
				
				
				
				if(userReviewList!=null)
				{
						log.info("userReview size ========"+userReviewList.size());
						Integer avgRating = 0;
						Integer sumRating = 0;
						for(UserReview dto:userReviewList)
						{
							sumRating+=dto.getRatingCount();
							
						}
						if(userReviewList.size()>0)
							avgRating = sumRating/userReviewList.size();
						
						if(userReviewList.size()==0){
							mv.addObject("userReviewTitle", "No reviews available");
						}
						else{
							mv.addObject("userReviewTitle", "Reviews for "+productdtldto.getProductName());
						}
							mv.addObject("userReviewList", userReviewList);
							//mv.addObject("userReview", userReview);
							mv.addObject("avgRating", avgRating);
							mv.addObject("reviewCount", userReviewList.size());
							//mv.addObject("customerRegistration",new UserDetail() );
							
						    log.info("*************avRating "+avgRating+" count : "+userReviewList.size());
				    
				}
				 // User Review Code ended.
				
				
				
				//Getting VaraintID     
				Long variantId=0l;
				for(ColorSizeDTO cs:productdtldto.getColourDto())
				{
					if(cs.getSizeDetails()!=null && cs.getSizeDetails().size()>0)
						variantId=cs.getSizeDetails().get(0).getProVarID();
				}//--- Gettung VaraintID
				
				log.info("variatn id is "+variantId);
				mv.addObject("variantId",variantId);
				mv.addObject("productDetail", productdtldto);
				mv.addObject("productname",productdtldto.getProductName());
				mv.addObject("shoedescription",shoeDes);
				
				
				if(productdtldto.getSocialCategory() != null)
					mv.addObject("socialcategory",productdtldto.getSocialCategory());
				
				if(syscolor==null)
					syscolor=getSystemColor(colorId, productdtldto.getColourDto());
				
				if(syscolor!=null)
				{
				mv.addObject("syscolor",syscolor);
				mv.addObject("syscolorl",syscolor.toLowerCase());
				}
				
				if(colorMap!=null)
				{
				mv.addObject("colormap",colorMap);
				mv.addObject("colorMapSize", colorMap.size());
				mv.addObject("selected_color_Name",colorMap.get(colorId.toString()));
				}
				
				
				log.info("productddtldto info added to Model View  ------> ");
			}
			
			else
			{
				log.info("productddtldto is Null  ------> ");
			}
			
			
			
			try
			{
				if(style==null)
				{
					log.info("Style is null");
					List<Object> inputList = new ArrayList<Object>();
					inputList.add(colorId);
					pd=(ProductData) RestClientUtil.callService(inputList, "getProductDataByColorid", "ProductDataBusinessService");
					if(pd!=null)
					{
						if(pd.getStyleIds()!=null && pd.getStyleIds().size()>0)
						{
							log.info("pd is not null");
							styleId=pd.getStyleIds().get(0);
							List<Object> inputList1 = new ArrayList<Object>();
							inputList1.add(styleId);
							Attribute at=(Attribute) RestClientUtil.callService(inputList1, "getAttributeById", "AttributeBusinessService");
							if(at!=null)
							{
								log.info("at is not null");
								if(fd.getStyles()!=null)
								{
									log.info("fd.getStyles is not null");
									for(Attribute fdstyle:fd.getStyles())
									{
										if(fdstyle.getName()!=null && at.getName()!=null && fdstyle.getName().equals(at.getName()))
										{
											style=at.getName();
											mv.addObject("style",style);
											mv.addObject("stylel",style.toLowerCase().replace(" ", "-"));
											break;
										}
									}
								}
							}
							else
							{
								log.info("Attribute at is null");
							}
						}
						else
						{
							log.info("ProductData pd.getStyleIds is null");
						}
					}
				}
			}
			catch(Exception e)
			{
				log.warning("Exception in getting style ids :: "+e.getMessage());
				e.printStackTrace();
			}
			log.info("************* productData is "+pd.getIsPreorder());
			
			mv.addObject("productData", pd);
			if(pd!=null)
				mv.addObject("productDataId", pd.getKey().getId());
			
			
			mv.addObject("productid",prodId);
			mv.addObject("vendorName", vendorName.replaceAll("-"," "));
			mv.addObject("brandid", brandId);
			mv.addObject("selected_color_id",colorId);
			if(pd.getShotNumbers()!=null)
			mv.addObject("shotNumber",(pd.getShotNumbers()).toString().replace("["," ").replace("]"," "));
			if(fd.getWomenVendors()!=null)
				mv.addObject("womenvendorlst", fd.getWomenVendors());
			if(fd.getMenVendors()!=null)
				mv.addObject("menvendorlst", fd.getMenVendors());
			if(sizes != null)
			{
			  mv.addObject("sizes", sizes);
			}
			else
			{
				log.info("sizes not available");
			}
			
			
			
			// Getting Html Message.
			List serviceParams=new ArrayList();
			Product data=new Product();
			try
			{
				String htmlMessage =(String) MemcachedUtil.get("HtmlMessage_"+prodId.toString(),MemcachedConstants.HTML_MESSAGE);
				
				if(htmlMessage!=null && htmlMessage!="")
				{
					log.info("Html Message Retrieved from cache"+htmlMessage);
					mv.addObject("htmlMessageValue", true);
					mv.addObject("htmlMessage", htmlMessage);
				}
				else
				{
					serviceParams.add(prodId);
					data=(Product)RestClientUtil.callService(serviceParams,"getProductById","ProductBusinessService");
					if(data!=null && data.getHtmlMessage()!="" && data.getHtmlMessage()!=null)
					{
						log.info("product data return value :: "+data.getHtmlMessage());
						htmlMessage = data.getHtmlMessage();
						log.info("html message is :: "+htmlMessage);
						MemcachedUtil.set("HtmlMessage_"+prodId.toString(),htmlMessage,MemcachedConstants.HTML_MESSAGE);
						mv.addObject("htmlMessageValue", true);
						mv.addObject("htmlMessage", htmlMessage);
						log.info("Html Message Retrieved from DB");
					}
					else
					{
						log.info("coming to the else of the else condition");
						mv.addObject("htmlMessageValue", false);
					}
				}
				
			}
			catch(Exception e)
			{
				e.printStackTrace();
				log.warning("Exception in getProductDetails "+e.getMessage());
			}
			//Html Message.
			
			// getting u r here details
			String youareHere=null;
			if(req.getSession().getAttribute("youAreHere")!=null)
			{
				youareHere=(String)req.getSession().getAttribute("youAreHere");
			}
				 
			HashMap urMap=get_U_R_Here_URL(youareHere);
			
			if(urMap!=null)
			{
				mv.addObject("youAreHere", urMap.get("youAreHere"));
				mv.addObject("youAreHereUrl", urMap.get("youAreHereUrl"));
			}
			//--you R Here
			
			
			//Women and Men Drop down Calculation
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
			//-- Women and Men Drop down Calculation
			
			
			mv.addObject("server",req.getRequestURL());
			
			
			/*Integer colorcount=0;
			DiscountProgram program=VeroniqaUtil.getDiscountProgramForFB();
			if(program!=null&&program.getShowCartCount()&&hasSaleItem(productdtldto.getColourDto()))
			{
				log.info("show cart count"+program.getShowCartCount());
				//getting realtime token
				RealTimeCustomersChannelService chnlservice=new RealTimeCustomersChannelService();
				String jsessionid=VeroniqaCookieUtil.getCookieValue(req,"JSESSIONID");
				String token=chnlservice.getRealTimeToken_IDP(jsessionid, colorId);
				colorcount=chnlservice.getCustomerCount(colorId);
				mv.addObject("realtimetoken", token);
				mv.addObject("showcartcount","true");
			}
			mv.addObject("rltmcustmrcount",colorcount);*/
			//log.info("********About to leave`******");
			
		}
		catch(Exception e)
		{
			log.warning("Exception in showIDP"+e.getMessage());
			e.printStackTrace();
		}
		finally{
			mv.addObject("common_css","solestruck.min.css");
			mv.addObject("common_js","solestruckidp.min.js");
		}
		
		long endtime=System.currentTimeMillis();
		long totalTime = endtime-starttime;
		log.info("totalTime for IDP is "+totalTime+" ms");
		return mv;
	}
	public HashMap<String,String> getColorMapFromColorDTOList(List<ColorSizeDTO> dtolst,Long requestedColor)
	{
		HashMap<String, String> colorMap=new HashMap<String, String>();
		for(ColorSizeDTO dto:dtolst)
		{
			if(dto.getShowOnSite()==true||dto.getColorId().longValue()==requestedColor.longValue())//only adding colors which has showOnSite==true AND adding the requested color
				colorMap.put(dto.getColorId().toString(),dto.getColor());
		}
		
		return colorMap;
	}
	
	@RequestMapping(value="/getproductdetailsforcolor.htm",method=RequestMethod.GET)
	public @ResponseBody List getproductdetailsforcolor(@RequestParam("productid")Long productid,@RequestParam("colorid")Long colorid)
	{
		List<SizeQuantityPriceDTO> dtolst=null;
		try
		{
			List<Object> inputList = new ArrayList<Object>();
			inputList.add(productid);
			inputList.add(colorid);
			dtolst=(List<SizeQuantityPriceDTO>) RestClientUtil.callService(inputList, "getProductDetailsForColor", "ProductDetailBusinessService");
			
			log.info("Product dto las size"+dtolst.size());
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return dtolst ;
	}
	@RequestMapping(value="/getproductdetailsforallcolor.htm",method=RequestMethod.GET)
	public @ResponseBody String getproductdetailsforallcolor(@RequestParam("productid")Long productid)
	{
		
		HashMap<Long,List<Double>> colorsizelst=null;
		String json = "";
		try
		{
			List<Object> inputList = new ArrayList<Object>();
			inputList.add(productid);
			colorsizelst=(HashMap<Long,List<Double>>) RestClientUtil.callService(inputList, "getSizesforColorId", "ProductDetailBusinessService");
			log.info("Product dto list size"+colorsizelst.size());
			Gson gson = new Gson();
			json = gson.toJson(colorsizelst);
			/*Iterator it = colorsizelst.entrySet().iterator();
		    while (it.hasNext()) {
		        Map.Entry availableColorsSizes = (Map.Entry)it.next();
		        System.out.println(availableColorsSizes.getKey() + " = " + availableColorsSizes.getValue());
		        it.remove(); // avoids a ConcurrentModificationException
		    }*/
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		/*ProductDetailDTO productdtldto=(ProductDetailDTO)MemcachedUtil.get(MemcachedConstants.ITEM_DETAILS_KEY+"_"+productid.toString(), MemcachedConstants.IDP_NAME_SPACE);
		//HashMap<String,String> colorMap=getColorMapFromColorDTOList(productdtldto.getColourDto(),colorid);
		
		ArrayList colorMap=new ArrayList();
		for(ColorSizeDTO dto:productdtldto.getColourDto())
		{
				colorMap.add(dto.getColorId().toString());
		}
		System.out.println("coming outside the for loop");
		for(int i=0;i<=colorMap.size();i++)
		{
			System.out.println("color map :: "+colorMap.get(i));
		}
		System.out.println("coming after the for loop");*/
		return json;
		
	}
	/*@RequestMapping(value="/getproductvariantId.htm",method=RequestMethod.GET)
	public @ResponseBody Long getproductvariantId(@RequestParam("productID")Long productID,@RequestParam("colorID")Long colorID, @RequestParam("size")Double size)
	{
		log.info("inside getproductvariantId");
		Long productVariantId=0L;
		ProductVariant retVal=new ProductVariant();
		ProductManagerClientService PMCService=new ProductManagerClientService();	
		log.info("productid=========="+productID+"colorid============="+colorID+"size=========="+size);
		try
		{
			//List<ProductManagerServiceDTO> retVal=new ArrayList<ProductManagerServiceDTO>();
			
			retVal=PMCService.getProductVariantIDClient(productID, colorID, size);
			productVariantId=retVal.getProductvariantkey().getId();
			log.info("productVariantId === "+productVariantId);
		}
	
		catch(Exception e)
		{
			e.printStackTrace();
		}
		return productVariantId ;
	}*/
	
	/* This method sends a mail for Send to Friend
	 * as well as stores the details of
	 * the mails and the product
	 * in the DB
	 */
	@RequestMapping(value="/sendToFriendd.htm",method=RequestMethod.GET)
	public @ResponseBody Long sendToFriend(@RequestParam("productID") Long productID,@RequestParam("colorID") Long colorID,@RequestParam("vendorName") String vendorName,@RequestParam("productName") String productName,@RequestParam("custName") String custName,@RequestParam("custEmailID") String custEmailID,@RequestParam("friendName") String friendName,@RequestParam("friendEmailID") String friendEmailID,@RequestParam("textMsg") String textMsg, @RequestParam("retailprice") String retailprice, @RequestParam("saleprice") Double saleprice, HttpServletRequest req)
	{
		
	boolean flag = true;
	//String lImageServerName="http://images2.solestruck.com";
	String lImageServerName="http://commondatastorage.googleapis.com/images2.solestruck.com";
	String lServerName=VeroniqaConstants.LIVE_FRONTEND_URL_FOR_MAIL;
	HashMap velocityReferences = new HashMap();
	EmailDTO dto=new EmailDTO();
	String lShoeImageURL="";
	String lVendorURL="";
	String lVendorURL1="";
	String lProductURL="";
	String lColorURL="";
	String productName_titlecase = "";
	String [] prodName = productName.split(" ");
	
	if(retailprice.contains("$"))
	 {
	  retailprice=retailprice.replace("$", "");
	  retailprice=retailprice.trim();
	 }
	 Double lRetailPrice=Double.parseDouble(retailprice);

	
	for(int x=0;x<prodName.length;x++){
		for (int i = 0; i < prodName[x].length(); i++)
		{
			String next = prodName[x].substring(i, i+1);
			if (i == 0){
				productName_titlecase += next.toUpperCase();
			} 	
			else {
				productName_titlecase += next.toLowerCase();
			}
		}
		productName_titlecase+="-";
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
		Long brandid=0l;
		if(brandstr!=null)
		{
			brandid=Long.parseLong(brandstr);
		}
		List<Object> inputList = new ArrayList<Object>();
		inputList.add(productID);
		ProductDetailDTO productdtldto=(ProductDetailDTO) RestClientUtil.callService(inputList, "getItemDetails", "ProductDetailBusinessService");
		SendToFriend stf = new SendToFriend();
		if(textMsg.equals("default")){
			textMsg="";
		}
		stf.setProductID(productID);
		stf.setColorID(colorID);
		stf.setVendorName(vendorName);
		stf.setProductName(productName);
		stf.setRetailPrice(lRetailPrice);
		stf.setMailSent(false);
		stf.setDateAdded(new Date());
				
		stf.setCustName(custName);
		stf.setCustEmailID(custEmailID);
		stf.setFriendName(friendName);
		stf.setFriendEmailID(friendEmailID);
		stf.setCustomTextMsg(textMsg);
		List<Object> inputList1 = new ArrayList<Object>();
		inputList1.add(colorID);
		Color color = (Color) RestClientUtil.callService(inputList1, "getColorById", "ColorBusinessService");
		String colorName = color.getCustomColor();
		List<Object> inputList2 = new ArrayList<Object>();
		inputList2.add(stf);
		inputList2.add(brandid);
		SendToFriend sendToFriend = (SendToFriend) RestClientUtil.callService(inputList2, "storeSendToFriendMail", "IDPMailBusinessService");
		velocityReferences.put("vendorName", vendorName);
		velocityReferences.put("productName", productName);
		velocityReferences.put("shoedescription",productdtldto.getProductDescription());
		velocityReferences.put("custName", custName);
		velocityReferences.put("custEmailID", custEmailID);
		velocityReferences.put("friendName", friendName);
		velocityReferences.put("friendEmailID", friendEmailID);
		velocityReferences.put("textMsg", textMsg);
		velocityReferences.put("retailprice", retailprice);
		velocityReferences.put("saleprice", saleprice);
		velocityReferences.put("lServername", lServerName);
        velocityReferences.put("lImageServername", lImageServerName);

        lVendorURL = vendorName.replaceAll(" ", "-").toLowerCase();
        lVendorURL1 = vendorName.replaceAll(" ", "-");
        lProductURL = productName_titlecase.replaceAll(" ","-");
        lColorURL = colorName.replaceAll(" ","-");
        
        lShoeImageURL= lImageServerName + "/" + lVendorURL + "-shoes/" + lVendorURL1 + "-shoes-" + lProductURL +"(" + lColorURL + ")-010604.jpg"; 
		log.info(" lShoeImageURL  = " +  lShoeImageURL );
		
		velocityReferences.put("lShoeImageURL", lShoeImageURL);

		
		HashMap<String,String> orgToList=new HashMap<String, String>();
		orgToList.put(friendEmailID , friendName);
		dto.setTo(orgToList);
		dto.setFrom(VeroniqaConstants.CUSTOMER_SERVICE_MAIL);
		 /*String lMode = EnvironmentUtil.getEnvironmentValue("AppMode");
		if(lMode.equals("LIVE"))
		{
			List<String> bccList=new ArrayList<String>();
			bccList.add(VeroniqaConstants.BACKUP_MAIL);
			dto.setBcc(bccList);
		}*/
		dto.setFromName("Solestruck");
		dto.setSubject(custName +" thought you'd like this shoe on Solestruck.com");
		List<Object> inputList4 = new ArrayList<Object>();
		inputList4.add(Long.parseLong(EnvironmentUtil.getEnvironmentValue("SEND_TO_FRIEND")));
		EmailTemplate emailTemp=(EmailTemplate) RestClientUtil.callService(inputList4, "getEmailTemplateById", "EmailTemplateBusinessService");
		textMsg=emailTemp.getTextMessage();
		String htmlMsg=emailTemp.getHtmlMessage();
		
		String textMailContent=VelocityUtil.getMappedString(velocityReferences,textMsg);
		String htmlMailContent=VelocityUtil.getMappedString(velocityReferences,htmlMsg);
		dto.setTextMessage(textMailContent);
		dto.setHtmlMessage(htmlMailContent);
		dto.setReplyTo(custEmailID);
		
		
		log.info("Before calling sendMailToMailService: 2 ");
		EmailClientService.sendMailtoMailService(dto);
		log.info("After calling sendMailToMailService: 2");
		
		if(flag)
		{
			Long regID = sendToFriend.getKey().getId();
			List<Object> inputList3 = new ArrayList<Object>();
			inputList3.add(regID);
			boolean updateFlag =(Boolean) RestClientUtil.callService(inputList3, "updateSendToFriendMailStatus", "IDPMailBusinessService");
		}
	
		
	}
	catch(Exception e)
	{
		flag=false;
		try{
		EmailClientService.sendMailtoMailService(dto);
		}
		catch(Exception ex){
			ex.printStackTrace();
		}
		e.printStackTrace();
		log.info("Exception in the SendToFriend"+e.getMessage());
	}
	return 1L;
	
	}
	
	/* This method registers a customer for Don't see your size mail
	 * for a product.
	 */
	
	@RequestMapping(value="/dontSeeYourSizeRegister.htm",method=RequestMethod.GET)
	public @ResponseBody Long dontSeeYourSizeRegister(@RequestParam("vendorName")String vendorName,@RequestParam("productName")String productName,@RequestParam("colorName")String colorName,@RequestParam("productID")Long productID,@RequestParam("colorID")Long colorID, @RequestParam("size")Double size,@RequestParam(value="emailid", required=false) String emailid, @RequestParam(value="alertCheck", required=false) Boolean alertCheck,HttpServletRequest req)
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
		Long brandid=0l;
		Long productvariantId=0l;
		int inventory = 0;
		boolean mailSent = false;
		boolean toRegister = false;
		GlobalNavigationCommonService lCommonService= new GlobalNavigationCommonService();
		if(emailid==""){
			emailid=lCommonService.getCustomerEmailId(req);
		}
		log.info("inside controller for dont see ur sze!!!!!!");
		log.info("vendorName = " + vendorName + "productName = " + productName + "colorName = " + colorName + "productID = "+productID + "colorID = " + colorID + "size = "+ size + "emailid = " + emailid + "alertCheck = " + alertCheck);
		List<PerfectFitMailDTO> pFit = new ArrayList<PerfectFitMailDTO>();
		
		try
		{
			if(brandstr!=null)
			{
				brandid=Long.parseLong(brandstr);
			}
		DontSeeYourSize perfectFit = new DontSeeYourSize();
		
		perfectFit.setAlertCheck(alertCheck);
		perfectFit.setVendorName(vendorName);
		perfectFit.setEmailId(emailid);
		perfectFit.setProductID(productID);
		perfectFit.setProductName(productName);
		perfectFit.setColorName(colorName);
		perfectFit.setColorID(colorID);
		perfectFit.setSize(size);
		perfectFit.setDateAdded(new Date());
		perfectFit.setMailSent(false);
		
		List<Object> list=new ArrayList<Object>();
		list.add(emailid);
		list.add(vendorName);
		list.add(productName);
		list.add(colorName);
		list.add(size);
		toRegister=(Boolean)RestClientUtil.callService(list, "isAlreadyRegisteredForPerfectFit", "IDPMailBusinessService");
		
		
		
		log.info("toRegister = "+ toRegister);
		
		if(toRegister){
			List<Object> inputList = new ArrayList<Object>();
			inputList.add(perfectFit);
			inputList.add(brandid);
			DontSeeYourSize perfectFitRegistered = (DontSeeYourSize) RestClientUtil.callService(inputList, "registerForPerfectFitMail", "IDPMailBusinessService");
		}
		else{
			//show already registered 
			log.info("inside else");
		}
		
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("Exception in the registerCustomerForPerfectFit "+e.getMessage());
		}
		
		
		return 1l;
	}
	
	/* This method will store the user review in the jdo
	 * which wil be sent  
	 * for approval to be posted on site
	 * @shaily
	 */
	@RequestMapping(value="/submitUserReview.htm",method=RequestMethod.GET)
	public @ResponseBody Long submitUserReview(@RequestParam("userName") String userName, @RequestParam("userEmail") String userEmail, @RequestParam("review_rating") Integer review_rating, @RequestParam("reviewTitle") String reviewTitle, @RequestParam("reviewText") String reviewText, @RequestParam("anonymous") Boolean anonymous, @RequestParam("vendorName") String vendorName, @RequestParam("productName") String productName, @RequestParam("colorName") String colorName, @RequestParam("productID") Long productID, @RequestParam("colorID") Long colorID, @RequestParam("reviewType") String reviewType, HttpServletRequest req)
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
		Long brandid=0l;
		Boolean flag = false;
		
		try
		{
			if(brandstr!=null)
			{
				brandid=Long.parseLong(brandstr);
			}
			UserReview userRev = new UserReview();
			userRev.setUserName(userName);
			userRev.setUserEmail(userEmail);
			userRev.setTitle(reviewTitle);
			userRev.setReviewText(reviewText);
			userRev.setRatingCount(review_rating);
			userRev.setAnonymous(anonymous);
			userRev.setVendorName(vendorName);
			userRev.setProductName(productName);
			userRev.setColorName(colorName);
			userRev.setProductID(productID);
			userRev.setColorID(colorID);
			userRev.setDateAdded(new Date());
			userRev.setReviewType(reviewType);
			if(req.getSession().getAttribute("accessToken")!=null && req.getSession().getAttribute("accessToken")!="" && reviewType.equalsIgnoreCase("facebook"))
			{
				//System.out.println("coming into the condition");
				//System.out.println(req.getSession().getAttribute("image"));
				String imageUrl = (String) req.getSession().getAttribute("image");
				userRev.setImageUrl(imageUrl);
				
			}
			
			List<Object> inputList = new ArrayList<Object>();
			inputList.add(userRev);
			inputList.add(brandid);
			
			UserReview userRevSubmit =(UserReview) RestClientUtil.callService(inputList, "submitUserReview", "IDPMailBusinessService");
			Long reviewID = userRevSubmit.getKey().getId();
			
			try
			{
				String aToken = (String) req.getSession().getAttribute("accessToken");
				log.info("coming to the try block");
				log.info("atoken ::"+aToken);
				log.info("review type is :: "+reviewType);
				if(reviewType!=null && reviewType.equalsIgnoreCase("Facebook") && aToken!=null && aToken!="")
				{
					String buildingImageUrl = VeroniqaConstants.IMAGE_URL+vendorName.replaceAll(" ", "-").toLowerCase()+"-shoes/"+vendorName.replaceAll(" ", "-")+"-shoes-"+productName.replaceAll(" ", "-")+"-("+colorName.replaceAll(" ", "-")+")-010404.jpg";
					log.info("builded image url is :: "+buildingImageUrl);
					log.info("clearing the double conditions");
					log.info("Building idp url :: http://testing.solestruck.com/"+vendorName.replaceAll(" ", "-").toLowerCase()+"-"+productName.replaceAll(" ", "-").toLowerCase()+"-"+colorName.replaceAll(" ", "-").toLowerCase()+"/index.html");
					String redirectUrl = "";
					reviewText=reviewText.replaceAll("#", "%23");
					if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("LIVE"))
					{
						redirectUrl = "https://graph.facebook.com/me/feed?link=http://www.solestruck.com/"+vendorName.replaceAll(" ", "-").toLowerCase()+"-"+productName.replaceAll(" ", "-").toLowerCase()+"-"+colorName.replaceAll(" ", "-").toLowerCase()+"/index.html&picture="+buildingImageUrl+"&message="+reviewText.replaceAll(" ", "%20")+"&access_token="+aToken+"&method=POST";
					}
					else if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("STAGING"))
					{
						redirectUrl = "https://graph.facebook.com/me/feed?link=http://testing.solestruck.com/"+vendorName.replaceAll(" ", "-").toLowerCase()+"-"+productName.replaceAll(" ", "-").toLowerCase()+"-"+colorName.replaceAll(" ", "-").toLowerCase()+"/index.html&picture="+buildingImageUrl+"&message="+reviewText.replaceAll(" ", "%20")+"&access_token="+aToken+"&method=POST";
					}
					else if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("DEV"))
					{
						redirectUrl = "https://graph.facebook.com/me/feed?link=http://development-solestruck.appspot.com/"+vendorName.replaceAll(" ", "-").toLowerCase()+"-"+productName.replaceAll(" ", "-").toLowerCase()+"-"+colorName.replaceAll(" ", "-").toLowerCase()+"/index.html&picture="+buildingImageUrl+"&message="+reviewText.replaceAll(" ", "%20")+"&access_token="+aToken+"&method=POST";
					}
					
					URL url = new URL(redirectUrl);
					String inputLine,inputid="";
					HttpURLConnection conn = (HttpURLConnection) url.openConnection();
					conn.setRequestMethod("POST");
					conn.connect();
					BufferedReader reader = new BufferedReader(new InputStreamReader(url.openStream()));	        
					while ((inputLine = reader.readLine()) != null)
					{  
						inputid+=inputLine;
						log.info("inputLine ::"+inputLine);
					}
				}
			}
			catch(Exception e)
			{
				log.info("Error is in submitUserReview method for facebook timeline post :: "+e);
				e.printStackTrace();
			}
			
			try
			{
				flag = true;
			HashMap review = new HashMap();
			review.put("userName", userName);
			review.put("userEmail", userEmail);
			review.put("reviewTitle", reviewTitle);
			review.put("reviewText", reviewText);
			review.put("vendorName",vendorName);
			review.put("productName", productName);
			

			EmailDTO dto=new EmailDTO();
			HashMap<String,String> orgToList=new HashMap<String, String>();
			
			String mode="";
			try
			{
				mode = EnvironmentUtil.getEnvironmentValue("AppMode");
			}
			catch(Exception e)
			{
				e.printStackTrace();
				
			}

			if(mode.equalsIgnoreCase("dev") || mode.equalsIgnoreCase("staging"))
			{
				orgToList.put(EnvironmentUtil.getEnvironmentValue("DEV_MailingList") , EnvironmentUtil.getEnvironmentValue("DEV_MailingList"));
			}
			else if(mode.equalsIgnoreCase("live"))
			{
				orgToList.put("customerservice@solestruck.com" , "customerservice@solestruck.com");
				
			}
			
			dto.setTo(orgToList);
			dto.setFrom(VeroniqaConstants.CUSTOMER_SERVICE_MAIL);
			/*String lMode = EnvironmentUtil.getEnvironmentValue("AppMode");
			if(lMode.equals("LIVE"))
			{
				List<String> bccList=new ArrayList<String>();
				bccList.add(VeroniqaConstants.BACKUP_MAIL);
				dto.setBcc(bccList);
			}*/
			dto.setFromName("Solestruck");
			dto.setSubject("New User Review for - "+vendorName + "-" +productName);

			String textMsg="A new user review for - "+vendorName + "-" + productName + " has been submitted."
			        	+"Username : " +userName+"<br/>"
			        	+"Email : " +userEmail+ "<br/>"
			        	+"Title : " +reviewTitle+ "<br/>"
			        	+"Review : " +reviewText+ "<br/>"
			        	+"To approve this review click here: <a href='"+VeroniqaConstants.LIVE_FRONTEND_URL+"userReviewAction.htm?reviewID="+reviewID+"&action=1' target='_blank'> Approve <br/></a> <br/><br/>"
			        	+"To deny this review click here: <a href='"+VeroniqaConstants.LIVE_FRONTEND_URL+"userReviewAction.htm?reviewID="+reviewID+"&action=2' target='_blank'> Deny </br></a>";

			 String htmlMsg="A new user review for - "+vendorName + "-" + productName + " has been submitted."
			        	+"Username : " +userName+"<br/>"
			        	+"Email : " +userEmail+ "<br/>"
			        	+"Title : " +reviewTitle+ "<br/>"
			        	+"Review : " +reviewText+ "<br/>"
			        	+"To approve this review click here: <a href='"+VeroniqaConstants.LIVE_FRONTEND_URL+"userReviewAction.htm?reviewID="+reviewID+"&action=1' target='_blank'> Approve <br/></a> <br/><br/>"
			        	+"To deny this review click here: <a href='"+VeroniqaConstants.LIVE_FRONTEND_URL+"userReviewAction.htm?reviewID="+reviewID+"&action=2' target='_blank'> Deny </br></a>";
					
			 log.info("textMsg>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" + textMsg);
			 log.info("htmlMsg>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>" + htmlMsg);
			 
			 dto.setTextMessage(textMsg);
			 dto.setHtmlMessage(htmlMsg);	
					
					
			  log.info("Before calling sendMailToMailService: 5 ");
			  EmailClientService.sendMailtoMailService(dto);
			  log.info("After calling sendMailToMailService: 5");
			
			        	
			}	        	
		
		catch(Exception e)
		{
			flag = false;
			e.printStackTrace();
			log.info("Exception in the sendUserReviewForApproval()"+e.getMessage());
		}
			
			
			
			if(flag)
			{
				List<Object> inputList1 = new ArrayList<Object>();
				inputList1.add(reviewID);
				Boolean updateMail =(Boolean) RestClientUtil.callService(inputList1, "updateUserReviewStatus", "IDPMailBusinessService");
			}
			
			
		}
		catch(Exception e)
		{
			flag = false;
			e.printStackTrace();
			log.info("Exception in the submitUserReview "+e.getMessage());
		}
		
		
		return 1l;
		
	}
	
	/* This method is for approving 
	 * or denying the submitted user reviews 
	 * from the mails
	 * @shaily
	 */
	
	@RequestMapping(value="/userReviewAction.htm",method=RequestMethod.GET)
	public ModelAndView userReviewAction(@RequestParam("reviewID") Long reviewID, @RequestParam("action") Integer action, HttpServletRequest req)
	{
		ModelAndView mv=new ModelAndView("ReviewAction");
		//UserReviewClient uClient= new UserReviewClient();
		String message = "";
		try{
			if(action==1){
				message="The review has been approved";
			}
			else if(action==2){
				message="Review Denied";
			}
			
			
			List<Object> paramsList=new ArrayList<Object>();
			paramsList.add(reviewID);
			paramsList.add(action);
			RestClientUtil.callService(paramsList, "approveDenyUserReview", "IDPMailBusinessService");
			
			mv.addObject("action", message);
			//mv.addObject("customerRegistration",new UserDetail() );
			
		}
		catch(Exception e){
			log.info("Exception in userReviewAction()"+e.getMessage());
			e.printStackTrace();
		}
	
	
	

		return mv;
		
	}

	public List<UserReview> getUserReview(Long productId, Long colorId, String vendorname, String productName, String colorname)
	{
		
		
		log.info("productId = "+productId);
		log.info("colorId = "+colorId);
		log.info("vendorname = "+vendorname);
		log.info("productName = "+productName);
		log.info("colorname = "+colorname);
		
		
		List<UserReview> userReviews=null;
		try
		{
			List<Object> paramsList=new ArrayList<Object>();
			
			paramsList.add(productId);
			paramsList.add(colorId);
			paramsList.add(vendorname);
			paramsList.add(productName);
			paramsList.add(colorname);
			
			userReviews = (List<UserReview>)RestClientUtil.callService(paramsList, "getApprovedUserReviews", "IDPMailBusinessService");
			log.info("userReview size ========"+userReviews.size());
			
		}
		catch(Exception e)
		{
			
		}
		return userReviews;
	}
	
	@RequestMapping(value="/setShoeVotes.htm",method=RequestMethod.POST)
	public @ResponseBody Integer setShoeVotes(@RequestParam("productId")Long productId,@RequestParam("colorId")Long colorId)
	{
		
		try
		{
			
			List<Object> paramsList=new ArrayList<Object>();
			paramsList.add(productId);
			paramsList.add(colorId);
			RestClientUtil.callService(paramsList, "setVotesForProduct", "ProductDetailBusinessService");
			
			
		}
		catch(Exception e)
		{
			log.warning("An exception in the setShoeVotes "+e.getMessage());
			e.printStackTrace();
		}
		return 1;
		
	}
	private HashMap get_U_R_Here_URL(String youAreHere)
	
	{
		HashMap urhereMap=new HashMap();
		
		try
		{
			if(youAreHere!=null&&youAreHere.equals("null"))
			{
				log.info("Inside the show idp "+youAreHere);
				
				//vishnu please handle empty string case 
				String youAreHereTitleCase=youAreHere.substring(0, 1).toUpperCase()+youAreHere.substring(1);
				log.info("***** youAreHereTitleCase is ************"+youAreHereTitleCase);
				String youAreHereUrl="";
				log.info("You are here:"+youAreHere);
				if(youAreHere.equalsIgnoreCase("women"))
				{log.info("You are here women:"+youAreHere);
					youAreHereUrl="/search-womens-shoes/";
				}
				else if(youAreHere.equalsIgnoreCase("men"))
				{log.info("You are here men:"+youAreHere);
					youAreHereUrl="/mens/";
				}
				else if(youAreHere.equalsIgnoreCase("sale"))
				{
					youAreHereUrl="/sale-shoes/";
					
				}
				else if(youAreHere.equalsIgnoreCase("vintage"))
				{
					youAreHereUrl="/vintage-shoes/";
					
				}
				else if(youAreHere.equalsIgnoreCase("new"))
				{
					youAreHereUrl="/new-arrivals/";
					
				}
				else if (youAreHere.contains("-"))
				{
					String[] urlParm=youAreHere.split("-");
					String vName=urlParm[0].replaceAll(" ","-" );
					youAreHere=urlParm[0];
					youAreHereTitleCase=youAreHere.substring(0, 1).toUpperCase()+youAreHere.substring(1);					
					String category=urlParm[1].toLowerCase();
					youAreHereUrl="/"+vName+"-"+category+"s"+"-shoes/";
				}
				else
				{
					youAreHereTitleCase="";
				}
				urhereMap.put("youAreHere", youAreHereTitleCase);
				urhereMap.put("youAreHereUrl", youAreHereUrl);
			}
		}
		catch(Exception e)
		{
			
			log.warning("An exception in the get_U_R_Here_URL "+e.getMessage());
			e.printStackTrace();
			
		}
		
		return urhereMap;
		
	}
	
	
	@RequestMapping(value="/acneOrderRequest.htm",method=RequestMethod.GET)
	public @ResponseBody Long  acneOrderRequest(@RequestParam("cusEmailID")String cusEmailID,@RequestParam("cusMsg")String cusMsg,@RequestParam("vendorName")String vendorName,@RequestParam("productName")String productName,@RequestParam("colorName")String colorName)
	{
		log.info("enteres in to acneOrderRequest");
		EmailDTO dto=new EmailDTO();
		String htmlMsg="";
		HashMap<String,String> orgToList=new HashMap<String, String>();
		orgToList.put(VeroniqaConstants.CUSTOMER_SERVICE_MAIL , "Solestruck");
		dto.setTo(orgToList);
		dto.setFrom(VeroniqaConstants.CUSTOMER_SERVICE_MAIL);
		String userName[] = cusEmailID.split("@");
		dto.setFromName(userName[0]);
		dto.setSubject(userName[0] +" Acne Shoe Request on Solestruck.com");
		try
		{
			List<Object> paramsList=new ArrayList<Object>();
			paramsList.add(EnvironmentUtil.getEnvironmentValue("ACNE_ORDER"));
			EmailTemplate emailTemp=(EmailTemplate)RestClientUtil.callService(paramsList, "getEmailTemplateById", "EmailTemplateBusinessService");
			
			String textMssg=emailTemp.getTextMessage();
			htmlMsg=emailTemp.getHtmlMessage();
			HashMap velocityReferences = new HashMap();
			velocityReferences.put("cusEmailID", cusEmailID);
			velocityReferences.put("vendorName", vendorName);
			velocityReferences.put("productName",productName);
			velocityReferences.put("colorName",colorName);
			velocityReferences.put("cusMsg", cusMsg);
			String htmlMailContent=VelocityUtil.getMappedString(velocityReferences,htmlMsg);
			
			dto.setTextMessage(cusMsg);
			dto.setHtmlMessage(htmlMailContent);	
		}
		catch(Exception e)
		{
			log.warning("exception in acneOrderRequest"+e);
		}
		try
		{
			EmailClientService.sendMailtoMailService(dto);
			//return true;
		}
		catch (Exception e)
		{
			log.info("exception in acneOrderRequest"+e);
		}
		//return false;
		return 1L;
	}
	public String getSystemColor(Long colorId,List<ColorSizeDTO> dtolst)
	{
		String syscolor=null;
		if(colorId!=null)
		{
		for(ColorSizeDTO dto:dtolst)
		{
			if(dto.getColorId().equals(colorId))
			{
				syscolor=dto.getSystemColor();
				break;
			}
		}
		}
		
		return syscolor;
	}
	
	private Boolean hasSaleItem(List<ColorSizeDTO> dtolst)
	{
		if(dtolst.size()>0)
		{
		for(ColorSizeDTO dto:dtolst)
		{
			if(dto.getSalePrice()>0)
			{
				return true;
			}
		}
		}
		
		return false;
	}
	
	@RequestMapping(value="/getDontSeeYourSizesForColor.htm",method=RequestMethod.GET)
	public @ResponseBody List getDontAeeYourSizesForColor(@RequestParam("productid")Long productid,@RequestParam("colorid")Long colorid)
	{
		HashMap<Double, String> allSizes = null;
		List<Object> sizesRecorded = new ArrayList<Object>();
		try
		{
			log.info("color id and prod id are :: "+colorid+" && "+productid);
			List<Object> inputProdVarReq = new ArrayList<Object>();
			inputProdVarReq.add(productid);
			inputProdVarReq.add(colorid);
			
			if(MemcachedUtil.get(MemcachedConstants.DONT_SEE_YOUR_SIZES+"_"+productid.toString()+"_"+colorid.toString(),MemcachedConstants.DONT_SEE_YOUR_SIZES)!=null)
			{
				allSizes=(HashMap<Double, String>) MemcachedUtil.get(MemcachedConstants.DONT_SEE_YOUR_SIZES+"_"+productid.toString()+"_"+colorid.toString(),MemcachedConstants.DONT_SEE_YOUR_SIZES);
				log.info("Method: getDontAeeYourSizesForColor, allSizes value retrieved from cache......!");
			}
			else
			{
				allSizes=(HashMap<Double, String>) RestClientUtil.callService(inputProdVarReq,"getProductVariantsForColorWithAllSizes", "ProductDetailBusinessService");
				MemcachedUtil.set(MemcachedConstants.DONT_SEE_YOUR_SIZES+"_"+productid.toString()+"_"+colorid.toString(),allSizes, MemcachedConstants.DONT_SEE_YOUR_SIZES);
				log.info("Method: getDontAeeYourSizesForColor, allSizes value retrieved from DB.........!");
			}
			log.info("All available sizes is :: "+allSizes.size());
			for(double i=4.0; i<=16.0; i+=0.5)
			{
				log.info("Value retrieved from the hashmap for "+i+" is "+allSizes.get(i));
				if(allSizes.get(i)!=null)
				{
				if(allSizes.get(i).equalsIgnoreCase("true"))
				{
					sizesRecorded.add(i);
				}
				}
			}
			log.info("Size of the getDontAeeYourSizesForColor :: "+sizesRecorded.size());
		}
		catch(Exception e)
		{
			log.warning("Exception in getDontAeeYourSizesForColor method :: "+e);
			e.printStackTrace();
		}
		return sizesRecorded;
	}
}
