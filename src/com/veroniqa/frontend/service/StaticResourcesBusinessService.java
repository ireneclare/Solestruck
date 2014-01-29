package com.veroniqa.frontend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.veroniqa.frontend.jdo.StaticResources;
import com.veroniqa.frontend.util.PMF;

/**
 * This is the service class for lookup specific operations.
 * @author k3g
 *
 */
public class StaticResourcesBusinessService {
	
	private static final Logger log=Logger.getLogger(StaticResourcesBusinessService.class.getName());
	
	public StaticResources get(String key) throws Exception
	{
		List<StaticResources> lookup=getAllLookups(key,1l);
		if(lookup!=null && lookup.size()>0)
		{
			return lookup.get(0);
		}
		return null;
	}
	
	public Boolean remove(Long id) throws Exception
	{
		 Boolean retVal=false;
		
		if(deleteLookup(id))
		{
			
			retVal=true;
		}
		return retVal;
	}
	
	
	
	public List<StaticResources> getList(String key) throws Exception
	{
		List<StaticResources> lookup=getAllLookups(key,0l);
		if(lookup!=null)
		{
			return lookup;
		}
		return null;
	}
	
	public Boolean set(StaticResources lookup) throws Exception
	{
		Boolean retVal=false;
		StaticResources lookupTemp=get(lookup.getName());
		if(lookupTemp!=null)
		{
			retVal=updateLookup(lookup,lookupTemp.getKey().getId());
		}
		else
		{
			if(createLookup(lookup)!=null)
				retVal=true;
			else
				retVal=false;
		}
			
		return retVal;
	}
	
	public Boolean setDuplicate(StaticResources lookup) throws Exception
	{
		Boolean retVal=false;
		
			if(createLookup(lookup)!=null)
				retVal=true;
			else
				retVal=false;
		
			
		return retVal;
	}
	
	public StaticResources createLookup(StaticResources lookup)throws Exception
	{
		PersistenceManager pm=null; 
		try
		{			 
			 pm=PMF.get().getPersistenceManager();
			
			 pm.makePersistent(lookup);
		}
		catch(Exception ex)
		{
			lookup=null;
			log.warning("Exception in : createLookup"+ex.getMessage());
			ex.printStackTrace();
			throw ex;
		}
		finally
		{
			pm.close();
		}	
		
		return lookup;
	}
	
	
	public Boolean updateLookup(StaticResources lookup,Long id)throws Exception
	{
		Boolean retVal=true;
		PersistenceManager pm=null;
		
		try
		{
			 Key key = KeyFactory.createKey(StaticResources.class.getSimpleName(), id);			 
			 pm=PMF.get().getPersistenceManager();
			 StaticResources brandUpdate=pm.getObjectById(StaticResources.class, key);
			 brandUpdate.copy(lookup);			 
		}
		catch(Exception ex)
		{
			retVal=false;			
			log.warning("Exception in : updateLookup"+ex.getMessage());
			ex.printStackTrace();
			throw ex;
		}
		finally
		{
			pm.close();
		}	
		
		return retVal;
	}
	
	public Boolean deleteLookup(Long id)throws Exception
	{
		Boolean retVal=true;
		PersistenceManager pm=null;
		
		try
		{
			 			 
			 pm=PMF.get().getPersistenceManager();
			 StaticResources lookup=pm.getObjectById(StaticResources.class,KeyFactory.createKey(StaticResources.class.getSimpleName(), id));
			 pm.deletePersistent(lookup);
		}
		catch(Exception ex)
		{
			retVal=false;			
			log.warning("Exception in : deleteLookup"+ex.getMessage());
			ex.printStackTrace();
			throw ex;
		}
		finally
		{
			pm.close();
		}	
		
		return retVal;
	}
	
	public List<StaticResources> getAllLookups(String key,Long extent)throws Exception
	{
		List<StaticResources> retVal=null;
		PersistenceManager pm=null;	
		ArrayList queryParam=new ArrayList();
		try
		{
			pm=PMF.get().getPersistenceManager();
			Query query = pm.newQuery(StaticResources.class);
			log.info("Entered getAllLookups() ");
			
			
					query.setFilter("name==:nameparam");
					queryParam.add(key);
				
			
			if(extent>0)
			{
				query.setRange(0, extent);
			}
			
			List<StaticResources>ret= (List<StaticResources>) query.executeWithArray(queryParam.toArray());
				
			List<StaticResources>ret1=(List<StaticResources>)pm.detachCopyAll(ret);
			retVal=ret1;
			log.info("result size "+retVal.size());
			
			
			
		}
		catch(Exception ex)
		{
			retVal=null;			
			log.warning("Exception in : getAllLookups"+ex.getMessage());
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
