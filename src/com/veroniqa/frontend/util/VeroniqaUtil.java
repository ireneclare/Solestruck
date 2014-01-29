package com.veroniqa.frontend.util;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.ObjectInput;
import java.io.ObjectInputStream;
import java.io.ObjectOutput;
import java.io.ObjectOutputStream;
import java.math.BigDecimal;
import java.net.URL;
import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.TimeZone;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.codec.binary.Base64;
import org.apache.commons.io.IOUtils;

import com.veroniqa.dto.FrontEndDTO;
import com.veroniqa.frontend.Controllers.TimerHandlerController;
import com.veroniqa.frontend.jdo.TimerHandler;
import com.veroniqa.jdo.DiscountProgram;
import com.veroniqa.jdo.OrderThreshold;



public class VeroniqaUtil {
	
	private static Logger log=Logger.getLogger(VeroniqaUtil.class.getSimpleName());
	
	public static String getCommonURLAsString(String key,String path) throws Exception
	{
		String content=null;
		if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("DEV"))
		{
			
				content=IOUtils.toString(new URL(path).openStream());
				
				return content;
			
		}
		else
		{
			content=(String) MemcachedUtil.get(key, MemcachedConstants.COMMON_JS_CSS);
			if(content==null)
			{
				content=IOUtils.toString(new URL(path).openStream());
				MemcachedUtil.set(key,content, MemcachedConstants.COMMON_JS_CSS);
				return content;
			}
		}
		
		
		
		return content;
	}
	
	
	public static String getJPEGImageURLAsString(String key,String path) throws Exception
	{
		String content=null;
		if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("DEV"))
		{
			
				content="data:image/jpg;base64,"+Base64.encodeBase64String(IOUtils.toByteArray(new URL(path).openStream()));
				
				return content.substring(0, content.length()-1);
			
		}
		else
		{
			content=(String) MemcachedUtil.get(key, MemcachedConstants.COMMON_JS_CSS);
			if(content==null)
			{
				content="data:image/jpg;base64,"+Base64.encodeBase64String(IOUtils.toByteArray(new URL(path).openStream()));
				MemcachedUtil.set(key,content, MemcachedConstants.COMMON_JS_CSS);
				return content.substring(0, content.length()-1);
			}
		}
		
		
		
		return content;
	}
	
	public static List<String> getCommonResources_JS_CSS(List<String> keys,List<String> url) throws Exception
	{
		List<String> retVal=new ArrayList<String>();
		for(int i=0;i<url.size();i++)
		{
			retVal.add(getCommonURLAsString(keys.get(i),url.get(i)));
		}
		return retVal;
		
	}
	
	
	public static boolean isMobilePlatform(HttpServletRequest request)
	{
		boolean retVal=false;
		String userAgent = request.getHeader("User-Agent").toLowerCase();
		if(userAgent.indexOf("mobile")!=-1 || userAgent.indexOf("symbian")!=-1 || userAgent.indexOf("ipad")!=-1 || userAgent.indexOf("iphone")!=-1 || userAgent.indexOf("andriod")!=-1)
		{
			retVal=true;
		}
		return retVal;
	}
	
	public static String getCurrencyPreference(HttpServletRequest request)
	{
		String retVal="USD";
		String geo=request.getHeader("X-AppEngine-country");
		if(geo!=null)
		{
			 if(geo.equals("JP"))
			{
				 retVal="JPN";
			}
			else if(geo.equals("IN"))
			{
				retVal="INR";
			}
			else if(geo.equals("AU"))
			{
				retVal="AUD";
			}
		}
		
		
		return retVal;
		
	}
	
	
	/*public static byte[] getStaticURLAsString(String path) throws Exception
	{
			
		return IOUtils.toByteArray(new URL(path).openStream());
				
	}*/
	
	
	public static byte[] getStaticURLAsString(String path) throws Exception
	{
			
		return IOUtils.toByteArray(VeroniqaUtil.class.getResourceAsStream(path));
				
	}
	
	
	/*public static byte[] convertToPngBarcode(String html,String l, String t, String r, String b)
			throws Exception {
		byte[] retVal = null;

		Asset asset = new Asset("text/html", html.getBytes(), "barcode");
		Document document = new Document(asset);
		Conversion conversion = new Conversion(document, "image/png");

		ConversionService service = ConversionServiceFactory
				.getConversionService();
		ConversionResult result = service.convert(conversion);

		if (result.success()) {

			retVal = result.getOutputDoc().getAssets().get(0).getData();
			ImagesService imagesService = ImagesServiceFactory.getImagesService();
			Image oldImage = ImagesServiceFactory.makeImage(retVal);
			Transform crop = ImagesServiceFactory.makeCrop(Double.parseDouble(l),Double.parseDouble(t),Double.parseDouble(r),Double.parseDouble(b));
			Transform enhance = ImagesServiceFactory.makeImFeelingLucky();
			Image newImage = imagesService.applyTransform(crop, oldImage);
			Image newImage1 = imagesService.applyTransform(enhance, newImage);
			retVal = newImage1.getImageData();

		} else {
			throw new Exception(result.getErrorCode().toString());
		}

		return retVal;
	}

	
	public static byte[] convertToPngFromHTML(byte[] html)throws Exception {
		byte[] retVal = null;
		
		Asset asset = new Asset("text/html", html, "index");
		Document document = new Document(asset);
		Conversion conversion = new Conversion(document, "image/png");
		
		ConversionService service = ConversionServiceFactory
				.getConversionService();
		ConversionResult result = service.convert(conversion);
		
		if (result.success()) {
		
			retVal = result.getOutputDoc().getAssets().get(0).getData();
			
		
		} else {
			throw new Exception(result.getErrorCode().toString());
		}
		
		return retVal;
   }*/
	
	
	public static String styleScriptVersion(HttpServletRequest request)
	{
		
		return "27_01_2014_15_10";
		/*Calendar cal = Calendar.getInstance();
		cal.getTimeInMillis();
		return ""+cal.getTimeInMillis();*/ 

	}
	
	public static String getPageContent(String pathName)
	{
		String content=(String)MemcachedUtil.get(pathName, MemcachedConstants.PAGE_CACHE);
		return content;
	}
	
	
	public byte[] convertObjToByte(Object obj) throws Exception
	{
		byte[] ret=null;
		ByteArrayOutputStream bos=new ByteArrayOutputStream();
		ObjectOutput out=new ObjectOutputStream(bos);
		out.writeObject(obj);
		ret= bos.toByteArray();
		bos.close();
		out.close();
		return ret;
		
	}
	
	public Object convertBytesToObj(byte[] arr) throws Exception
	{
		ByteArrayInputStream bin=new ByteArrayInputStream(arr);
		ObjectInput in=new ObjectInputStream(bin);
		Object o=in.readObject();
		bin.close();
		in.close();
		return o;
		
	}
	
	public static Double getDiscountPercentageForFB()throws Exception
	{
		
		double percentage=0;
		
//		Calendar cal=Calendar.getInstance();
//		Date todayDate=new Date();
//		cal.setTimeInMillis(DateUtil.convertFromUTC(todayDate, "PST").getTime());
//		
//		//log.info("The date is"+cal.getTime());
//		int date=cal.get(Calendar.DATE);
//		int month=cal.get(Calendar.MONTH)+1;
//		int year=cal.get(Calendar.YEAR);
//		log.info("Program name: FB_DISCOUNT_PRG_"+date+"_"+month+"_"+year);
//		DiscountProgram program=(DiscountProgram)MemcachedUtil.get("FB_DISCOUNT_PRG_"+date+"_"+month+"_"+year, "FB_SALE_DISCOUNT");
//		if(program==null)
//		{
//			List params=new ArrayList();
//			params.add(new String(date+"-"+month+"-"+year+"_FBSALE"));
//			params.add(new Long(1));
//			//log.info("The  key is"+new String(date+"-"+month+"-"+year+"_FBSALE"));
//			List<DiscountProgram> prgs=(List<DiscountProgram>)RestClientUtil.callService(params, "getAllDiscountProgramsByName", "DiscountBusinessService");
//			if(prgs!=null && prgs.size()>0)
//			{
//				program=prgs.get(0);
//			}
//			
//			if(program!=null)
//			{
//				MemcachedUtil.set("FB_DISCOUNT_PRG_"+date+"_"+month+"_"+year,program, "FB_SALE_DISCOUNT");
//			}
//		}
//			//log.info("this is program time"+(program.getValidFrom().getTime()+program.getFromHours()+program.getFromMinutes())+" cur time:"+cal.getTime().getTime());
//			if(!EnvironmentUtil.getEnvironmentValue("AppMode").equals("DEV"))
//			{
//				/*if(program!=null)
//				{
//					log.info("Current Date :"+DateUtil.convertFromUTC(todayDate, "PST"));
//					log.info("Current Date Milli :"+DateUtil.convertFromUTC(todayDate, "PST").getTime());
//					log.info("Discount From Date  :"+new Date(DateUtil.convertFromUTC(program.getValidFrom(), "PST").getTime()+program.getFromHours()+program.getFromMinutes()));
//					log.info("Discount From Date Milli  :"+(DateUtil.convertFromUTC(program.getValidFrom(), "PST").getTime()+program.getFromHours()+program.getFromMinutes()));
//					log.info("Discount To Date  :"+new Date(DateUtil.convertFromUTC(program.getValidTo(), "PST").getTime()+program.getToHours()+program.getToMinutes()));
//					log.info("Discount To Date Milli :"+(DateUtil.convertFromUTC(program.getValidTo(), "PST").getTime()+program.getToHours()+program.getToMinutes()));
//					
//				}*/
//				if(program!=null && DateUtil.convertFromUTC(todayDate, "PST").getTime()>=(DateUtil.convertFromUTC(program.getValidFrom(), "PST").getTime()+program.getFromHours()+program.getFromMinutes()) && DateUtil.convertFromUTC(todayDate, "PST").getTime()<=(DateUtil.convertFromUTC(program.getValidTo(), "PST").getTime()+program.getToHours()+program.getToMinutes()))
//				{
//					percentage=program.getDiscountPercentage();
//					log.info("I am inside this discount");
//				}
//			}
//			else
//			{
//				if(program!=null)
//				{
//					percentage=program.getDiscountPercentage();
//					log.info("I am inside this for DEV");
//				}
//			}
//		
//		log.info("Discount percentage:"+percentage);
		return percentage;
	}
	
	
	/*public static DiscountProgram getDiscountProgramForFB() throws Exception
	{
		//String ret="HAI";
		DiscountProgram retVal=null;
		Calendar cal=Calendar.getInstance();
		Calendar calendar=Calendar.getInstance(TimeZone.getTimeZone("UTC"));
		log.info("current time in utc is calendar.getTime()"+calendar.getTime());
			
		log.info("inside the getDiscountProgramForFB");
		Date todayDate=calendar.getTime();
		cal.setTime(DateUtil.convertFromUTC(todayDate, "PST"));
		int date=cal.get(cal.DATE);
		int month=cal.get(cal.MONTH)+1;
		int year=cal.get(cal.YEAR);
		log.info("cal time is "+cal.getTime());
		retVal=(DiscountProgram)MemcachedUtil.get("FINALSALE"+date+"_"+month+"_"+year,MemcachedConstants.FINAL_SALE);
		if(retVal==null)
		{
			log.info("Discount program not in memcache going to pull from DB");
			List params=new ArrayList();
			params.add(new String(date+"-"+month+"-"+year+"_FINALSALE"));
			log.info("program name is "+date+"-"+month+"-"+year+"_FINALSALE");
			params.add(todayDate);
			List<DiscountProgram> prgs=(List<DiscountProgram>)RestClientUtil.callService(params, "checkForDiscountProgramByDate", "DiscountBusinessService");
			if(prgs!=null && prgs.size()>0)
			{
				retVal=prgs.get(0);
				log.info("Discount program found in DB and name is "+retVal.getName()+" and % is "+retVal.getDiscountPercentage());
			}
			
			if(retVal!=null)
			{
				log.info("setting in memcahe ");
				MemcachedUtil.set("FINALSALE"+date+"_"+month+"_"+year,retVal,MemcachedConstants.FINAL_SALE);
			}
		}
		
		
		if(!EnvironmentUtil.getEnvironmentValue("AppMode").equals("DEV"))
		{
			if(!(retVal!=null && DateUtil.convertFromUTC(todayDate, "PST").getTime()>=(DateUtil.convertFromUTC(retVal.getValidFrom(), "PST").getTime()) && DateUtil.convertFromUTC(todayDate, "PST").getTime()<=(DateUtil.convertFromUTC(retVal.getValidTo(), "PST").getTime())))
			{
				log.info("Old value in memcache");
				retVal=null;
			}
			
		}
		return retVal;
	}*/
	
	// Added for 9th Anniversary Sale ( For EST Time Changes )
	
	public static DiscountProgram getDiscountProgramForFB() throws Exception
	{
		DiscountProgram retVal=null;
//		try{
//			
//			
//			Calendar calendar=Calendar.getInstance(TimeZone.getTimeZone("UTC"));
//			Date currentDate=calendar.getTime();
//			
//		    log.info("The current date at the UTC is "+currentDate);
//			
//			retVal=(DiscountProgram)MemcachedUtil.get("Ninth_Anniversary_Sale",MemcachedConstants.FINAL_SALE);
//			if(retVal==null)
//			{
//				List params=new ArrayList();
//				params.add(currentDate);
//				List<DiscountProgram> prgs=(List<DiscountProgram>)RestClientUtil.callService(params, "checkForDiscountProgramByDate", "DiscountBusinessService");
//				if(prgs!=null && prgs.size()>0)
//				{
//					retVal=prgs.get(0);
//					log.info("Discount program found in DB and name is "+retVal.getName()+" and % is "+retVal.getDiscountPercentage());
//					log.info("the discount name is :: "+retVal.getName());
//					log.info("program type name is :: "+retVal.getProgramTypeName());
//					log.info("website discount on value is :: "+retVal.getWebDiscountOn());
//					log.info("Program id is :: "+retVal.getKey().getId());
//				}
//				else
//				{
//					log.info("coming to the else of the discount program condition");
//				}
//				
//				if(retVal!=null)
//				{
//					log.info("setting in memcahe ");
//					MemcachedUtil.set("Ninth_Anniversary_Sale",retVal,MemcachedConstants.FINAL_SALE);
//				}
//			}
//			
//			
//		}
//		catch(Exception e){
//			e.printStackTrace();
//		}
		
		return retVal;
	}
	
	public static DiscountProgram getDiscountProgramForCustomSale() throws Exception
	{
		DiscountProgram retVal=null;
//		try{
//			
//			
//			Calendar calendar=Calendar.getInstance(TimeZone.getTimeZone("UTC"));
//			Date currentDate=calendar.getTime();
//			
//		    log.info("The current date at the UTC is "+currentDate);
//			
//			retVal=(DiscountProgram)MemcachedUtil.get("Ninth_Anniversary_Sale",MemcachedConstants.FINAL_SALE);
//			if(retVal==null)
//			{
//				List params=new ArrayList();
//				params.add(currentDate);
//				List<DiscountProgram> prgs=(List<DiscountProgram>)RestClientUtil.callService(params, "checkForDiscountProgramByDate", "DiscountBusinessService");
//				if(prgs!=null && prgs.size()>0)
//				{
//					retVal=prgs.get(0);
//					log.info("Discount program found in DB and name is "+retVal.getName()+" and % is "+retVal.getDiscountPercentage());
//					log.info("the discount name is :: "+retVal.getName());
//					log.info("program type name is :: "+retVal.getProgramTypeName());
//					log.info("website discount on value is :: "+retVal.getWebDiscountOn());
//					log.info("Program id is :: "+retVal.getKey().getId());
//				}
//				else
//				{
//					log.info("coming to the else of the discount program condition");
//				}
//				
//				if(retVal!=null)
//				{
//					log.info("setting in memcahe ");
//					MemcachedUtil.set("Ninth_Anniversary_Sale",retVal,MemcachedConstants.FINAL_SALE);
//				}
//			}
//			
//			
//		}
//		catch(Exception e){
//			e.printStackTrace();
//		}
		
		return retVal;
	}
	
//	public static HashMap<Long, List> getProductAndColorIdForSale() throws Exception
//	{
//		HashMap retval=new HashMap();
//		List colorlst = new ArrayList();
//		List colorlst2 = new ArrayList();
////		try
////		{
////			DiscountProgram getBrandListForSale=getDiscountProgramForFB();
////			if(getBrandListForSale!=null)
////				retval=getBrandListForSale.getVendorNames();
////		}
////		catch(Exception e)
////		{
////			e.printStackTrace();
////			log.warning("Exception in getBrandListForSale "+e.getMessage());
////		}
////		colorlst.add(1413574);
////		colorlst.add(17896158);
////		colorlst2.add(8311235);
////		colorlst2.add(8438311);
////		retval.put(1407498, colorlst);
////		retval.put(8370202, colorlst2);
//		colorlst.add("black");
//		colorlst.add("black contrast");
//		colorlst2.add("black white black");
//		colorlst2.add("black grey yellow");
//		retval.put("pistol sh", colorlst);
//		retval.put("superstar 2", colorlst2);
//		return retval;
//	}
	
	public static List<OrderThreshold> getThresholdValues()
	{
		List<OrderThreshold> thresholdLimitsAndValues = new ArrayList<OrderThreshold>();
		//List<Double> thresholdLimits = new ArrayList<Double>();
		//List<Double> thresholdValues = new ArrayList<>();
//		try
//		{
//			DiscountProgram getDiscountProgramId = getDiscountProgramForFB();
//			if(getDiscountProgramId != null && getDiscountProgramId.getKey() != null)
//			{
//				List<Object> pr=new ArrayList<Object>();
//				pr.add(getDiscountProgramId.getKey().getId());
//				log.info("coming inside the retval get key is not null");
//				thresholdLimitsAndValues = (List<OrderThreshold>)RestClientUtil.callService(pr, "getAllOrderThresholdsByDiscountProgramId", "OrderThresholdBusinessService");
//				log.info("size of the order threshold in getThresholdValues is :: "+thresholdLimitsAndValues.size());
//				
//			}
//		}
//		catch(Exception e)
//		{
//			e.printStackTrace();
//			log.warning("Exception in getThresholdValues "+e.getMessage());
//		}
		return thresholdLimitsAndValues;
	}
	
	public static int getThresholdSize()
	{
		List<OrderThreshold> thresholdSize = getThresholdValues();
//		try
//		{
//			log.info("Size of the order threshold in getThresholdSize is :: "+thresholdSize.size());
//		}
//		catch (Exception e) {
//			e.printStackTrace();
//			log.warning("Exception in getThresholdSize "+e.getMessage());
//		}
		return thresholdSize.size();
	}
	
	//Code to return List of brand id's under sale
	public static List getBrandListForSale() throws Exception
	{
		List retval=new ArrayList();
//		try
//		{
//			DiscountProgram getBrandListForSale=getDiscountProgramForFB();
//			if(getBrandListForSale!=null)
//				retval=getBrandListForSale.getVendorNames();
//		}
//		catch(Exception e)
//		{
//			e.printStackTrace();
//			log.warning("Exception in getBrandListForSale "+e.getMessage());
//		}
		return retval;
	}
	
	// Upto here Added for 9th Anniversary Sale ( For EST Time Changes )
	
	public static long getHoursForDiscount()
	{
		long retval=0l;
		try
		{
			Calendar calendar=Calendar.getInstance(TimeZone.getTimeZone("GMT"));
			log.info("calendar utc time is "+calendar.getTime());
			Date currentPSTDate=DateUtil.convertFromUTC(calendar.getTime(),"PST");
			log.info("pstdate is "+currentPSTDate);
			DiscountProgram dis=getDiscountProgramForFB();
			//DiscountProgram dis=getDiscountProgramForCustomSale();
			
			Date validTo=DateUtil.convertFromUTC(dis.getValidTo(),"PST");
			log.info("valid to from db is "+dis.getValidTo());
			log.info("valid is "+validTo);
			retval=(validTo.getTime()-currentPSTDate.getTime())/(60*60*1000);
			log.info("hours is "+retval);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("Exception in getHoursForDiscont "+e.getMessage());
		}
		return retval;
	}
	
	public static long getMinutesForDiscount()
	{
		long retval=0l;
		try
		{
			Calendar calendar=Calendar.getInstance(TimeZone.getTimeZone("UTC"));
			Date currentPSTDate=DateUtil.convertFromUTC(calendar.getTime(),"PST");
			DiscountProgram dis=getDiscountProgramForFB();
			//DiscountProgram dis=getDiscountProgramForCustomSale();
			Date validTo=DateUtil.convertFromUTC(dis.getValidTo(),"PST");
			retval=(((validTo.getTime()-currentPSTDate.getTime())%(60*60*1000))/(60*1000));
			log.info("hours is "+retval);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("Exception in getHoursForDiscont "+e.getMessage());
		}
		return retval;
	}
	public static long getSecondsForDiscount()
	{
		long retval=0l;
		try
		{
			Calendar calendar=Calendar.getInstance(TimeZone.getTimeZone("UTC"));
			Date currentPSTDate=DateUtil.convertFromUTC(calendar.getTime(),"PST");
			DiscountProgram dis=getDiscountProgramForFB();
			//DiscountProgram dis=getDiscountProgramForCustomSale();
			Date validTo=DateUtil.convertFromUTC(dis.getValidTo(),"PST");
			retval=((((validTo.getTime()-currentPSTDate.getTime())%(60*60*1000))%(60*1000))/1000);
			log.info("hours is "+retval);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("Exception in getHoursForDiscont "+e.getMessage());
		}
		return retval;
	}
	
	
	public static TimerHandler getTimerHandler() throws Exception
	{
		log.info("Inside the getTimerHandler()");
		
		TimerHandler retVal=null;
		TimerHandlerController thc=new TimerHandlerController();
		try
		{
			retVal=(TimerHandler)MemcachedUtil.get("TimerHandler",MemcachedConstants.Timer_Handler);
			if(retVal==null)
			{
				log.info("TimerHandler not in memcache going to pull from DB");
				retVal=thc.getTimerHandlerByTimerForName("ANNIVERSARYSALE", new Date());
				
				
				if(retVal!=null)
				{
					log.info("TimerHandler Setting in memcahe ");
					MemcachedUtil.set("TimerHandler",retVal,MemcachedConstants.Timer_Handler);
				}
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("Exception in getTimerHandler " +e.getMessage());
		}
		
		return retVal;
	}
	public static long getHoursForSale()
	{
		long retval=0l;
		try
		{
			Calendar calendar=Calendar.getInstance(TimeZone.getTimeZone("GMT"));
			log.info("------ Calendar utc time is "+calendar.getTime());
			Date currentPSTDate=DateUtil.convertFromUTC(calendar.getTime(),"PST");
			log.info("----- PSTdate is "+currentPSTDate);
			TimerHandler th=getTimerHandler();
			Date validTo=DateUtil.convertFromUTC(th.getTimerEnd(),"PST");
			log.info("------ Timer end time is "+th.getTimerEnd());
			log.info("------- Valid is "+validTo);
			retval=(validTo.getTime()-currentPSTDate.getTime())/(60*60*1000);
			log.info("------ Hours is "+retval);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("Exception in getHoursForSale "+e.getMessage());
		}
		return retval;
	}
	
	public static long getMinutesForSale()
	{
		long retval=0l;
		try
		{
			Calendar calendar=Calendar.getInstance(TimeZone.getTimeZone("UTC"));
			Date currentPSTDate=DateUtil.convertFromUTC(calendar.getTime(),"PST");
			TimerHandler th=getTimerHandler();
			Date validTo=DateUtil.convertFromUTC(th.getTimerEnd(),"PST");
			retval=(((validTo.getTime()-currentPSTDate.getTime())%(60*60*1000))/(60*1000));
			log.info("----- Hours is "+retval);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("Exception in getMinutesForSale "+e.getMessage());
		}
		return retval;
	}
	public static long getSecondsForSale()
	{
		long retval=0l;
		try
		{
			Calendar calendar=Calendar.getInstance(TimeZone.getTimeZone("UTC"));
			Date currentPSTDate=DateUtil.convertFromUTC(calendar.getTime(),"PST");
			TimerHandler th=getTimerHandler();
			Date validTo=DateUtil.convertFromUTC(th.getTimerEnd(),"PST");
			retval=((((validTo.getTime()-currentPSTDate.getTime())%(60*60*1000))%(60*1000))/1000);
			log.info("------ hours is "+retval);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("Exception in getSecondsForSale "+e.getMessage());
		}
		return retval;
	}
	
	
	public static List<Integer> getWomenDropDown(FrontEndDTO fd)
	{
		List<Integer> retval=new ArrayList<Integer>();
		try
		{
			if(fd!=null && fd.getWomenVendors()!=null)
			{
				int womenVendorCount = fd.getWomenVendors().size();
				int remainingVendorCount = womenVendorCount%4;
				int perColumn = (womenVendorCount-remainingVendorCount)/4;
				int finalCount = 0;
				int firstColumn=0,secondColumn=0,thirdColumn=0,fourthColumn=0;
				log.info("total count for women vendors :: "+womenVendorCount);
				log.info("remaining vendor count :: "+remainingVendorCount);
				log.info("percolumn start :: "+perColumn);
				
				for(int i=1;i<=4;i++)
				{
					if(remainingVendorCount>0)
					{
						finalCount=perColumn+1;
						remainingVendorCount--;
					}
					else
					{
						finalCount=perColumn;
					}
					
					if(i==1)
					{
						firstColumn=finalCount;
						retval.add(firstColumn);
					}
					else if(i==2)
					{
						secondColumn=firstColumn+finalCount;
						retval.add(secondColumn);
					}
					else if(i==3)
					{
						thirdColumn=secondColumn+finalCount;
						retval.add(thirdColumn);
					}
					else if(i==4)
					{
						fourthColumn=thirdColumn+finalCount;
						retval.add(fourthColumn);
					}
				}
				//log.info(firstColumn+" - "+secondColumn+" - "+thirdColumn+" - "+fourthColumn);
				log.info("first column :: "+firstColumn+" && second column :: "+secondColumn+" && third column :: "+thirdColumn+" && fourth column :: "+fourthColumn);
			}
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("Exception in getWomenDropDown "+e.getMessage());
		}
		return retval;
	}
	
	
	
	public static List<Integer> getMenDropDown(FrontEndDTO fd)
	{
		List<Integer> retval=new ArrayList<Integer>();
		try
		{
			if(fd!=null && fd.getMenVendors()!=null)
			{
				int menVendorCount = fd.getMenVendors().size();
				int remainingVendorCount = menVendorCount%4;
				int perColumn = (menVendorCount-remainingVendorCount)/4;
				int finalCount = 0;
				int firstColumn=0,secondColumn=0,thirdColumn=0,fourthColumn=0;
				log.info("total count for men vendors :: "+menVendorCount);
				log.info("remaining vendor count :: "+remainingVendorCount);
				log.info("percolumn start :: "+perColumn);
				
				for(int i=1;i<=4;i++)
				{
					if(remainingVendorCount>0)
					{
						finalCount=perColumn+1;
						remainingVendorCount--;
					}
					else
					{
						finalCount=perColumn;
					}
					
					if(i==1)
					{
						firstColumn=finalCount;
						retval.add(firstColumn);
					}
					else if(i==2)
					{
						secondColumn=firstColumn+finalCount;
						retval.add(secondColumn);
					}
					else if(i==3)
					{
						thirdColumn=secondColumn+finalCount;
						retval.add(thirdColumn);
					}
					else if(i==4)
					{
						fourthColumn=thirdColumn+finalCount;
						retval.add(fourthColumn);
					}
				}
				//log.info(firstColumn+" - "+secondColumn+" - "+thirdColumn+" - "+fourthColumn);
				log.info("first column :: "+firstColumn+" && second column :: "+secondColumn+" && third column :: "+thirdColumn+" && fourth column :: "+fourthColumn);
			}
			
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("Exception in getMmenDropDown "+e.getMessage());
		}
		return retval;
	}
	
	//public static Boolean 

	/*public static Boolean getDiscountProgram() 
	{
		Boolean retval=false;
		try
		{
			Calendar calendar=Calendar.getInstance(TimeZone.getTimeZone("UTC"));
			Date date=calendar.getTime();
			retval=(Boolean)MemcachedUtil.get("FINALSALE"+Calendar.DAY_OF_MONTH, "FINALSALE");
			if(retval==null)
			{
				List params=new ArrayList();
				params.add(date);
				retval=(Boolean)RestClientUtil.callService(params, "checkForDiscountProgramByDate", "DiscountBusinessService");
				MemcachedUtil.set("FINALSALE"+Calendar.DAY_OF_MONTH,retval, "FINALSALE");
				log.info("Retaval is "+retval);
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("Exception in getDiscountProgram "+e.getMessage());
		}
		return retval;
	}*/
	
	public static Double getRoundedValue(Double price)
	{
		//System.out.println(price);
		String strPrice=price==null?"0.0":Double.toString(price);
		//System.out.println(strPrice);
		BigDecimal ret=new BigDecimal(strPrice);
		ret=ret.setScale(2, BigDecimal.ROUND_HALF_UP);
		//System.out.println(ret.doubleValue());
		return ret.doubleValue();
		
	}
	public static String getDateAfterDays(Integer days) { 
		Calendar cal = Calendar.getInstance();
		DateFormat format=new SimpleDateFormat("yyyy-MM-dd");
		String dateTxt="";
		try
		{
			cal.add(Calendar.DATE, days); // +days
			Date date=cal.getTime();
			dateTxt=format.format(date);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.warning("Exception in getDateAfterDays "+e.getMessage());
		}
		return dateTxt;  
		}  

}
