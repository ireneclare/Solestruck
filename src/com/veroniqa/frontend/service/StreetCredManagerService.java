package com.veroniqa.frontend.service;

import java.util.Date;
import java.util.List;
import java.util.logging.Logger;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;
import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.veroniqa.frontend.jdo.StreetCredFeed;
import com.veroniqa.frontend.util.BusinessException;
import com.veroniqa.frontend.util.PMF;
import com.veroniqa.jdo.HomePageBanner;

public class StreetCredManagerService {
public static final Logger log=Logger.getLogger(StreetCredManagerService.class.getSimpleName());
	
	
	
	public void updateStreetCredPost(String status,Long postId)throws Exception
	{
		
		log.info("**** Inside the updateStreetCredPost service ****");
		Boolean retVal=true;
		PersistenceManager pm=null;
		try
		{
			Key key=KeyFactory.createKey(StreetCredFeed.class.getSimpleName(),postId);
			pm=PMF.get().getPersistenceManager();
			StreetCredFeed updatestreetpost=pm.getObjectById(StreetCredFeed.class,key);
			updatestreetpost.setStatus(status);
			
		}
		catch(Exception ex)
		{
			retVal=false;
			log.warning("Exception in updateHomePageBanner : " +ex.getMessage());
			ex.printStackTrace();
			throw ex;
		}
		finally
		{
			pm.close();
		}
//		return retVal;
	}
	
	
	public List<StreetCredFeed> getAllStreetCredNewImages()
	{
		log.info("**** Inside the getAllStreetCredNewImages service ****");
		
		StreetCredFeed scf= new StreetCredFeed();
		PersistenceManager pm=null; 
		List<StreetCredFeed>  retval=null;
		try
		{
			 	pm=PMF.get().getPersistenceManager();
//				javax.jdo.Query query1 = pm.newQuery("select from "+StreetCredFeed.class.getName()+" where status=='New' && deleted==false order by milliseconds desc");
				Query query1 = pm.newQuery(StreetCredFeed.class);
				query1.setFilter("deleted==false && status== New");
				query1.setOrdering("milliseconds desc");
//				query1.setFilter("deleted==false && status == New"); 
//				query1.setOrdering("DateAdded desc");
				List<StreetCredFeed> ret= (List<StreetCredFeed>) query1.execute();
				retval=(List<StreetCredFeed>)pm.detachCopyAll(ret);
				log.info("Result size"+retval.size());
				
		}
		
		catch(Exception e)
		{
			log.warning("Exception in getAllStreetCredNewImages()"+e.getMessage());
			new BusinessException("Exception in getAllStreetCredNewImages :"+e.getMessage(),e.getStackTrace());
		}
		finally
		{
			pm.close();
		}
		return retval;
	}
	
	public List<StreetCredFeed> getAllStreetCredApprovedImages()
	{
		log.info("**** Inside the getAllStreetCredApprovedImages service ****");
		
		StreetCredFeed scf= new StreetCredFeed();
		PersistenceManager pm=null; 
		List<StreetCredFeed>  retval=null;
		try
		{
			 	pm=PMF.get().getPersistenceManager();
//				javax.jdo.Query query1 = pm.newQuery("select from "+StreetCredFeed.class.getName()+" where status=='Approved' && deleted==false order by milliseconds desc");
			 	Query query1 = pm.newQuery(StreetCredFeed.class);
				query1.setFilter("deleted==false && status == 'approved'");
				query1.setOrdering("milliseconds desc");
				List<StreetCredFeed> ret= (List<StreetCredFeed>) query1.execute();
				retval=(List<StreetCredFeed>)pm.detachCopyAll(ret);
				log.info("Result size"+retval.size());
		}
		
		catch(Exception e)
		{
			log.warning("Exception in getAllStreetCredApprovedImages()"+e.getMessage());
			new BusinessException("Exception in getAllStreetCredApprovedImages :"+e.getMessage(),e.getStackTrace());
		}
		finally
		{
			pm.close();
		}
		return retval;
	}
	
	public List<StreetCredFeed> getAllStreetCredDeniedImages()
	{
		log.info("**** Inside the getAllStreetCredDeniedImages service ****");
		
		StreetCredFeed scf= new StreetCredFeed();
		PersistenceManager pm=null; 
		List<StreetCredFeed>  retval=null;
		try
		{
			 	pm=PMF.get().getPersistenceManager();
				javax.jdo.Query query = pm.newQuery("select from "+StreetCredFeed.class.getName()+" where status=='Denied' && deleted==false order by milliseconds desc");				
//				query.setFilter("deleted==false && status== Denied"); 
//				query.setOrdering("DateAdded desc");
				List<StreetCredFeed> ret= (List<StreetCredFeed>) query.execute();
				retval=(List<StreetCredFeed>)pm.detachCopyAll(ret);
				log.info("Result size"+retval.size());
		}
		
		catch(Exception e)
		{
			log.warning("Exception in getAllStreetCredDeniedImages()"+e.getMessage());
			new BusinessException("Exception in getAllStreetCredDeniedImages :"+e.getMessage(),e.getStackTrace());
		}
		finally
		{
			pm.close();
		}
		return retval;
	}

	
	public List<StreetCredFeed> getApprovedFeedbyTagName(String tagName)
	{
		log.info("**** Inside the getApprovedFeedbyTagName service ****");
		
		StreetCredFeed scf= new StreetCredFeed();
		PersistenceManager pm=null; 
		List<StreetCredFeed>  retval=null;
		try
		{
			 	pm=PMF.get().getPersistenceManager();
				javax.jdo.Query query1 = pm.newQuery(StreetCredFeed.class);				
				query1.setFilter("select from "+StreetCredFeed.class.getName()+" where status=='Approved' && deleted==false && tags==tagName order by milliseconds desc"); 
//				query1.setOrdering("milliseconds desc");
				List<StreetCredFeed> ret= (List<StreetCredFeed>) query1.execute();
				retval=(List<StreetCredFeed>)pm.detachCopyAll(ret);
				log.info("Result size"+retval.size());
		}
		
		catch(Exception e)
		{
			log.warning("Exception in getApprovedFeedbyTagName()"+e.getMessage());
			new BusinessException("Exception in getApprovedFeedbyTagName :"+e.getMessage(),e.getStackTrace());
		}
		finally
		{
			pm.close();
		}
		return retval;
	}
	
	
	public Boolean deleteStreetCredPost(Long scPostId)throws Exception
	{
		Boolean retVal=true;
		PersistenceManager pm=null;
		try
		{
			Key key=KeyFactory.createKey(StreetCredFeed.class.getSimpleName(), scPostId);
			pm=PMF.get().getPersistenceManager();
			StreetCredFeed deletePost=pm.getObjectById(StreetCredFeed.class,key);
			deletePost.setDeleted(true);
			
		}
		catch(Exception ex)
		{
			retVal=false;
			log.warning("Exception in deleteHomePageBanner : " +ex.getMessage());
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
