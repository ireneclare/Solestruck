package com.veroniqa.frontend.Controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.logging.Logger;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.veroniqa.jdo.ProductData;
import com.veroniqa.jdo.ProductHeart;
import com.veroniqa.frontend.util.PMF;
import com.veroniqa.frontend.util.RestClientUtil;


/**
 * @author femina
 * This is a controller for Product Heart
 * This has methods which will create heart , Remove Heart and Also get counts.
 * Its common for both Mobile IOS App and Site of SS.
 */

@Controller
public class ProductHeartController {
	
	private static final Logger log=Logger.getLogger(ProductHeartController.class.getSimpleName());

	@RequestMapping(value="/createProductHeart.htm") 
	@ResponseBody public String createProductHeart(@RequestParam("vendorName") String vendorName,@RequestParam("productName") String productName,@RequestParam("colorName") String colorName,@RequestParam("ssPostID") Long ssPostID,@RequestParam("customerId") Long customerId,@RequestParam("isHeartOn") Boolean isHeartOn,HttpServletRequest req,HttpServletResponse res){
		log.info("Its coming in createProductHeart"+req.getRequestURL());
		log.info("Getting values here as:vendorName:"+vendorName+"productName:"+productName+"colorName:"+colorName+"customerId:"+customerId+"isHeartOn:"+isHeartOn);
		String result = null;
		PersistenceManager pm = null;
		ProductData pdataone = null;
		try
		{
			pdataone = new ProductData();
			pm = PMF.get().getPersistenceManager();
			log.info("Getting values in try here as:vendorName:"+vendorName+"productName:"+productName+"colorName:"+colorName+"customerId:"+customerId+"isHeartOn:");
			ProductHeart product=getProductByCustId(vendorName,productName,colorName,customerId);
			log.info("Its coming above product not null");
			if(product==null)
			{
				log.info("Creating New Product Heart");
				pdataone=addSolestruckProductHeartToFE(vendorName,productName,colorName,customerId);
				if(pdataone!=null)
				{
					ProductHeart heart = new ProductHeart();
					heart.setDateAdded(new Date());
					heart.setDeleted(false);
					heart.setVendorName(pdataone.getVendorName());
					heart.setVendorId(pdataone.getVendorId());
					heart.setProductId(pdataone.getProductId());
					heart.setProductName(pdataone.getProductName());
					heart.setColorName(pdataone.getCustomColorName());
					heart.setColorId(pdataone.getCustomColorId());
					heart.setSsPost(ssPostID);
					heart.setCustomerId(customerId);
					heart.setIsHeartOn(isHeartOn);
					pm.makePersistent(heart);
					pm.close();
					result= "success";
				}	
			}
		}
		catch(Exception e){
			log.warning("Error came in createProductHeart : "+e.getMessage());
			for(StackTraceElement s:e.getStackTrace()){
				log.warning(s.toString());
			}
			result= "fail";
		}
		return result;
	}
	

	
	@RequestMapping("/unHeartProductHeart.htm")
	@ResponseBody public String unHeartProductHeart(@RequestParam("vendorName") String vendorName,@RequestParam("productName") String productName,@RequestParam("colorName") String colorName,@RequestParam("customerId") Long customerId,@RequestParam("isHeartOn") Boolean isHeartOn,HttpServletRequest req){
		log.info("Its coming in unHeartProductHeart"+req.getRequestURL()+"isHeartOn:"+isHeartOn);
		
		String result="success";
		Integer ret = 0;
		try
		{
			
			ProductHeart product=getProductByCustId(vendorName,productName,colorName,customerId);
			if(product!=null)
			{
				ret=removeHeartForProductByCustomerId(product.getKey().getId());
				if(ret==1)
					result="success";
				else
					result="fail";
			}
			else
			{
				result="fail";
			}
			
		}
		catch(Exception e){
			log.warning("Error came in unHeartProductHeart : "+e.getMessage());
			for(StackTraceElement s:e.getStackTrace()){
				log.warning(s.toString());
			}
			result="fail";
		}
		return result;
	}
	
	public Integer removeHeartForProductByCustomerId(Long Id)throws Exception 
	{
		log.info("removeHeartForProductByCustomerId"+Id);
		Integer retVal=0;
		
		PersistenceManager pm=null;
		try
		{
			if(Id!=null)
			{
				pm = PMF.get().getPersistenceManager();
				Key key = KeyFactory.createKey(ProductHeart.class.getSimpleName(), Id);
				ProductHeart heart = (ProductHeart) pm.getObjectById(ProductHeart.class,key);
				pm.deletePersistent(heart);
				retVal=1;
			}
			else
			{
				retVal=0;
			}
			
		}
		catch(Exception ex)
		{
		  ex.printStackTrace();
		  log.info("Exception removeHeartForProductByCustomerId"+Id);
		}
		finally
		{
			if(pm!=null)
				pm.close();
		}
		return retVal;
		
	}
	
	public ProductData addSolestruckProductHeartToFE(String vendorName,String productName,String colorName,Long customerId)throws Exception
	{
		log.info("Its coming in addSolestruckProductHeartToFE with vendorName:"+vendorName+"productName:"+productName+"colorName:"+colorName);
		Integer flag=1;
		List<ProductData> pd= new ArrayList<ProductData>();;
		ProductData pdataone = null;
		try
		{
			
			pdataone = new ProductData();
			List params=new ArrayList();
			params.add(vendorName.replaceAll("(^')|('$)",""));
			pd= (List<ProductData>) RestClientUtil.callService(params, "getProductDataByVendorNameIOS", "ProductDataBusinessService");
			if(pd.size()>0)
			{
				for(ProductData pp:pd)
				{
					log.info("before first if:pp:"+pp.getProductName()+"//// "+productName+"pp colorName:"+pp.getCustomColorName()+"//// "+colorName);
					if(pp.getProductName().equals(productName.replaceAll("(^')|('$)","")) && (pp.getCustomColorName().equals(colorName.replaceAll("(^')|('$)",""))))
					{
						log.info("in first if :pp:"+pp.getProductName()+"pp colorName:"+pp.getCustomColorName());
						pdataone = pp;
						log.info("The values :Vendor:"+pdataone.getVendorName()+"Color:"+pdataone.getCustomColorName()+"Product:"+pdataone.getProductName());
					}
					
				}
			}
				
		}
		finally
		{
			
		}
		return pdataone;
	}
	
	@RequestMapping("/deleteProductHeartEntity.htm")
	@ResponseBody public String deleteProductHeartEntity(@RequestParam("productHeartID")String productHeartID){
		String result = null;
		PersistenceManager pm = null;
		try{
			
			pm = PMF.get().getPersistenceManager();
			Key key = KeyFactory.createKey(ProductHeart.class.getSimpleName(), Long.parseLong(productHeartID));
			ProductHeart heart = (ProductHeart) pm.getObjectById(ProductHeart.class,key);
			heart.setDeleted(true);
			pm.close();
			result = "Deleted the heart entity successfully";
		}
		catch(Exception e){
			log.warning("Error came in deleteProductHeartEntity : "+e.getMessage());
			for(StackTraceElement s:e.getStackTrace()){
				log.warning(s.toString());
			}
			result="Failed to delete the heart entity";
		}
		return result;
	}
	
	@RequestMapping("/getProductHeartEntityByID")
	@ResponseBody public ProductHeart getProductHeartEntityByID(@RequestParam("productHeartID")String productHeartID)
	{
		log.info("Its coming in getProductHeartEntityByID");
		ProductHeart heart  = null;
		PersistenceManager pm = null;
		try
		{
			pm = PMF.get().getPersistenceManager();
			Key key = KeyFactory.createKey(ProductHeart.class.getSimpleName(), Long.parseLong(productHeartID));
			heart = (ProductHeart) pm.getObjectById(ProductHeart.class,key);
			
		}
		catch(Exception e){
			log.warning("Error came in getProductHeartEntityByID : "+e.getMessage());
			for(StackTraceElement s:e.getStackTrace()){
				log.warning(s.toString());
			}
			
		}
		return heart;
	}

	
	@RequestMapping(value="/getProductHeartCountbyNames.htm")
	@ResponseBody public Integer getProductHeartCountbyNames(@RequestParam("vendorName")String vendorName,@RequestParam("productName")String productName,@RequestParam("colorName")String colorName)
	{
		log.info("Its coming in getProductHeartCountbyNames");
		int heartCount = 0;
		ProductHeart heart  = null;
		PersistenceManager pm = null;
		List<ProductHeart> totalPosts = null;
		try
		{
			totalPosts = new ArrayList<ProductHeart>();
			pm=PMF.get().getPersistenceManager();
			vendorName = vendorName.replaceAll("(^')|('$)","");
			productName =productName.replaceAll("(^')|('$)","");
			colorName = colorName.replaceAll("(^')|('$)","");
			Query query=pm.newQuery(ProductHeart.class);
			query.setFilter("vendorName== :vendorName && productName== :productName && colorName== :colorName");
			List<ProductHeart> posts=(List<ProductHeart>)query.execute(vendorName,productName,colorName);
			posts = (List<ProductHeart>) pm.detachCopyAll(posts);
			log.info("Size in getProduct:"+posts.size());
			if(posts.size()>0)
			{
				for(ProductHeart ph:posts)
				{
					if(ph.getIsHeartOn()==true)
					{
						totalPosts.add(ph);
						log.info("Size of posts:"+totalPosts.size());
					}
				}
				heartCount = totalPosts.size();
			}
			
		}
		catch(Exception e){
			log.warning("Error came in getProductHeartCountbyNames : "+e.getMessage());
			for(StackTraceElement s:e.getStackTrace()){
				log.warning(s.toString());
			}
			
		}
		return heartCount;
	}
	
	@RequestMapping(value="/getProductHeartbyCustomerID.htm")
	@ResponseBody public Integer getProductHeartbyCustomerID(@RequestParam("vendorName")String vendorName,@RequestParam("productName")String productName,@RequestParam("colorName")String colorName,@RequestParam("customerId")String customerId)
	{
		log.info("Its coming in getProductHeartbyCustomerID");
		int heartCount = 0;
		
		try
		{
			
			List<ProductHeart> product=getProduct(vendorName,productName,colorName);
			log.info("Its coming above product not null");
			if(product!=null)
			{
				log.info("in product not null");
				for(ProductHeart ph:product)
				{
					log.info("Cust ID:"+customerId+"ph customer id:"+ph.getCustomerId()+"Condition:"+ph.getCustomerId().toString().equals(customerId.toString()));
					if(ph.getCustomerId().toString().equals(customerId.toString()))
					{
						log.info("Its coming same custId");
						heartCount= 1;
					}
				
				}
			}
			else
			{
				log.info("product heart is null");
				heartCount= 0;
			}
			
		}
		catch(Exception e){
			log.warning("Error came in getProductHeartbyCustomerID : "+e.getMessage());
			for(StackTraceElement s:e.getStackTrace()){
				log.warning(s.toString());
				heartCount= 0;
			}
			
		}
		return heartCount;
	}
	
	public List<ProductHeart> getProduct(String vendorName,String productName,String colorName)throws Exception
	{
		log.info("Its coming in getProduct vendorName:"+vendorName+"productName:"+productName+"colorName:"+colorName);
		List<ProductHeart> flag=null;
		PersistenceManager pm=null;
		try
		{
			pm=PMF.get().getPersistenceManager();
			vendorName = vendorName.replaceAll("(^')|('$)","");
			productName =productName.replaceAll("(^')|('$)","");
			colorName = colorName.replaceAll("(^')|('$)","");
			Query query=pm.newQuery(ProductHeart.class);
			query.setFilter("vendorName== :vendorName && productName== :productName && colorName== :colorName");
			List<ProductHeart> posts=(List<ProductHeart>)query.execute(vendorName,productName,colorName);
//			posts = (List<ProductHeart>) pm.detachCopyAll(posts);
			log.info("Size in getProduct:"+posts.size());
			if(posts!=null && posts.size()>0)
			{
				log.info("Got list size in getProduct:"+posts.size());
				flag=posts;
			}
			pm.close();
		}
		
		catch(Exception e){
			log.warning("Error came in getProduct : "+e.getMessage());
			for(StackTraceElement s:e.getStackTrace()){
				log.warning(s.toString());
			}
		}
		return flag;
	}
	
	public ProductHeart getProductByCustId(String vendorName,String productName,String colorName,Long customerId)throws Exception
	{
		log.info("Its coming in getProductByCustId vendorName:"+vendorName+"productName:"+productName+"colorName:"+colorName+"Customer Id:"+customerId);
		ProductHeart flag=null;
		PersistenceManager pm=null;
		try
		{
			pm=PMF.get().getPersistenceManager();
			vendorName = vendorName.replaceAll("(^')|('$)","");
			productName =productName.replaceAll("(^')|('$)","");
			colorName = colorName.replaceAll("(^')|('$)","");
			Query query=pm.newQuery(ProductHeart.class);
			log.info("filter : vendorName:"+vendorName+"productName:"+productName+"colorName:"+colorName+"Customer Id:"+customerId);
			query.setFilter("productName== :productName && colorName== :colorName && customerId== :customerId");
			List<ProductHeart> posts=(List<ProductHeart>)query.execute(productName,colorName,customerId);
			log.info("posts size:"+posts.size());
			if(posts.size()>0)
			{
					ProductHeart post = posts.get(0);
					if(post!=null)
					flag = post;
			}
			pm.close();
		}
		
		catch(Exception e){
			log.warning("Error came in getProduct : "+e.getMessage());
			for(StackTraceElement s:e.getStackTrace()){
				log.warning(s.toString());
			}
		}
		return flag;
	}
	
	public Boolean updateSolestruckProductHeart(ProductHeart post)throws Exception
	{
		log.info("Its in updateSolestruckProductHeart");
		Boolean retVal=true;
		PersistenceManager pm=null;
		
		try
		{
			 Key key = KeyFactory.createKey(ProductHeart.class.getSimpleName(), post.getKey().getId());			 
			 pm=PMF.get().getPersistenceManager();
			 ProductHeart productUpdate=pm.getObjectById(ProductHeart.class, key);
			 productUpdate.copy(post);			 
		}
		catch(Exception ex)
		{
			retVal=false;			
			log.warning("Exception in : updateSolestruckProductHeart"+ex.getMessage());
			ex.printStackTrace();
			throw ex;
		}
		finally
		{
			pm.close();
		}	
		
		return retVal;
	}
}
