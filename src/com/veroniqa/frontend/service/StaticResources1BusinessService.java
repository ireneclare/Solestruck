package com.veroniqa.frontend.service;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.veroniqa.frontend.jdo.StaticResources1;
import com.veroniqa.frontend.util.PMF;

/**
 * This is the service class for lookup specific operations.
 * @author k3g
 *
 */
public class StaticResources1BusinessService {
	
	private static final Logger log=Logger.getLogger(StaticResources1BusinessService.class.getName());
	
	public StaticResources1 get(String key) throws Exception
	{
		List<StaticResources1> lookup=getAllLookups(key,1l);
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
	
	
	
	public List<StaticResources1> getList(String key) throws Exception
	{
		List<StaticResources1> lookup=getAllLookups(key,0l);
		if(lookup!=null)
		{
			return lookup;
		}
		return null;
	}
	
	public Boolean set(StaticResources1 lookup) throws Exception
	{
		Boolean retVal=false;
		StaticResources1 lookupTemp=get(lookup.getName());
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
	
	public Boolean setDuplicate(StaticResources1 lookup) throws Exception
	{
		Boolean retVal=false;
		
			if(createLookup(lookup)!=null)
				retVal=true;
			else
				retVal=false;
		
			
		return retVal;
	}
	
	public StaticResources1 createLookup(StaticResources1 lookup)throws Exception
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
	
	
	public Boolean updateLookup(StaticResources1 lookup,Long id)throws Exception
	{
		Boolean retVal=true;
		PersistenceManager pm=null;
		
		try
		{
			 Key key = KeyFactory.createKey(StaticResources1.class.getSimpleName(), id);			 
			 pm=PMF.get().getPersistenceManager();
			 StaticResources1 brandUpdate=pm.getObjectById(StaticResources1.class, key);
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
			 StaticResources1 lookup=pm.getObjectById(StaticResources1.class,KeyFactory.createKey(StaticResources1.class.getSimpleName(), id));
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
	
	public List<StaticResources1> getAllLookups(String key,Long extent)throws Exception
	{
		List<StaticResources1> retVal=null;
		PersistenceManager pm=null;	
		ArrayList queryParam=new ArrayList();
		try
		{
			pm=PMF.get().getPersistenceManager();
			Query query = pm.newQuery(StaticResources1.class);
			log.info("Entered getAllLookups() ");
			
			
					query.setFilter("name==:nameparam");
					queryParam.add(key);
				
			
			if(extent>0)
			{
				query.setRange(0, extent);
			}
			
			List<StaticResources1>ret= (List<StaticResources1>) query.executeWithArray(queryParam.toArray());
				
			List<StaticResources1>ret1=(List<StaticResources1>)pm.detachCopyAll(ret);
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
