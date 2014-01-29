package com.veroniqa.realtime;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Date;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.logging.Logger;

import javax.jdo.JDOObjectNotFoundException;
import javax.jdo.PersistenceManager;
import javax.jdo.Query;

import org.codehaus.jackson.map.ObjectMapper;

import com.google.appengine.api.channel.ChannelFailureException;
import com.google.appengine.api.channel.ChannelMessage;
import com.google.appengine.api.channel.ChannelService;
import com.google.appengine.api.channel.ChannelServiceFactory;
import com.veroniqa.dto.LineItemDTO;
import com.veroniqa.dto.PageDTO;
import com.veroniqa.dto.ProductDTOForCategory;
import com.veroniqa.dto.ShoppingCart;
import com.veroniqa.frontend.jdo.RealTimeCustomers;
import com.veroniqa.frontend.service.ShoppingCartService;
import com.veroniqa.frontend.util.PMF;
import com.veroniqa.frontend.util.VeroniqaUtil;
import com.veroniqa.jdo.DiscountProgram;

public class RealTimeCustomersChannelService {
	Logger log=Logger.getLogger(RealTimeCustomersChannelService.class.getSimpleName());
	
	public RealTimeCustomers createRealTimeCustomer(RealTimeCustomers customer)throws Exception
	{
		PersistenceManager pm=null;
		try
		{
			pm=PMF.get().getPersistenceManager();
			pm.makePersistent(customer);
		}
		catch(Exception e)
		{
			log.warning("Exception in createRealTimeCustomer "+e.getMessage());
			throw e;
		}
		finally
		{
			pm.close();
		}
		
		return customer;
	}
	public Boolean updateRealTimeCustomerById(RealTimeCustomers customer,String clientid)throws Exception
	{
		PersistenceManager pm=null;
		
		try
		{
			pm=PMF.get().getPersistenceManager();
			RealTimeCustomers customerold=pm.getObjectById(RealTimeCustomers.class,clientid);
			customerold.copy(customer);
		}
		catch(Exception e)
		{
			log.warning("Exception in createRealTimeCustomer "+e.getMessage());
			throw e;
		}
		finally
		{
			pm.close();
		}
		
		return true;
	}
	public HashMap<Long,Integer> getCustomerCountForColorId(Set<Long> colorids)
	{
		PersistenceManager pm=null;
		try
		{
			pm=PMF.get().getPersistenceManager();
			Query q=pm.newQuery(RealTimeCustomers.class);
			q.setFilter("isActive == true && :colorids.contains(colorInCart)");
			List<RealTimeCustomers> customers=(List<RealTimeCustomers>)q.execute(new ArrayList(colorids));
			customers=(List<RealTimeCustomers>)pm.detachCopyAll(customers);
			log.info("inside getCustomerCountForColorId customer size: "+customers.size());
			if(customers.size()<1)
				return new HashMap();
			HashMap<Long,Integer> countmap=new HashMap<Long, Integer>();
			for(RealTimeCustomers customer:customers)
			{
				Long colorid=customer.getColorInCart();
			
				if(countmap.containsKey(colorid))
				{
					int count=countmap.get(colorid);
					count++;
					countmap.put(colorid, count);
				}
				else
				{
					countmap.put(colorid, 1);
				}
				
			}
			return countmap;
			
		}
		catch(Exception e)
		{
			log.warning("Exception in getCustomerCountForColorId "+e.getMessage());
			for(StackTraceElement ele:e.getStackTrace())
				log.warning(ele.toString());
			return null;
		}
	}
	
	public HashMap<Long,Integer> getCustomerCountForProductId(Set<Long> productIds)
	{
		log.info("Inside getCustomerCountForProductId:"+productIds);
		PersistenceManager pm=null;
		try
		{pm=PMF.get().getPersistenceManager();
		List<RealTimeCustomers> allcustomers=new ArrayList<RealTimeCustomers>();
		if(productIds.size()>29)
		{
			List lst=breakInto30BY30(new ArrayList(productIds));
			log.info("broken lst size:"+lst.size());
			for(int i=0;i<lst.size();i++)
			{
				Query q=pm.newQuery(RealTimeCustomers.class);
				q.setFilter("isActive == true && :productids.contains(productInCart)");
				List<Long> productids=(List<Long>)lst.get(i);
				log.info("lst"+i+":"+productids);
				List<RealTimeCustomers> customers=(List<RealTimeCustomers>)q.execute(productids);
				customers=(List<RealTimeCustomers>)pm.detachCopyAll(customers);
				log.info("resutl size:"+customers.size());
				allcustomers.addAll(customers);
			}
		}
		else
		{
			log.info("inside Else");
			Query q=pm.newQuery(RealTimeCustomers.class);
			q.setFilter("isActive == true && :productids.contains(productInCart)");
			List<RealTimeCustomers> customers=(List<RealTimeCustomers>)q.execute(new ArrayList(productIds));
			customers=(List<RealTimeCustomers>)pm.detachCopyAll(customers);
			allcustomers.addAll(customers);
		}
		
		log.info("inside getCustomerCountForColorId customer size: "+allcustomers.size());
		if(allcustomers.size()<1)
			return new HashMap();
		HashMap<Long,Integer> countmap=new HashMap<Long, Integer>();
		for(RealTimeCustomers customer:allcustomers)
		{
				Long productid=customer.getProductInCart();
			
				if(countmap.containsKey(productid))
				{
					int count=countmap.get(productid);
					count++;
					countmap.put(productid, count);
				}
				else
				{
					countmap.put(productid, 1);
				}
			
		}
		return countmap;
		
	}
		catch(Exception e)
		{
			log.warning("Exception in getCustomerCountForProductId "+e.getMessage());
			for(StackTraceElement ele:e.getStackTrace())
				log.warning(ele.toString());
			return null;
		}
	}
	public void setInCartDetails(PageDTO dto)
	{
		try
		{
			List<ProductDTOForCategory> lstdto=dto.getData();
			Set<Long> productids=new HashSet<Long>();
			for(ProductDTOForCategory pdto:lstdto)
			{
				productids.add(pdto.getProductId());
				
			}
			log.info("productids in page"+productids);
			
			HashMap<Long,Integer> countmap=getCustomerCountForProductId(productids);
			log.info("productids in map"+countmap);
			for(ProductDTOForCategory pdto:lstdto)
			{
				if(countmap.containsKey(pdto.getProductId()))
					pdto.setInCart(countmap.get(pdto.getProductId()));
				else
					pdto.setInCart(0);
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			for(StackTraceElement ele:e.getStackTrace())
			{
				log.warning(ele.toString());
			}
		}
	}
	
	public Integer getCustomerCount(Long colorid)
	{
		PersistenceManager pm=null;
		try
		{
			pm=PMF.get().getPersistenceManager();
			Query q=pm.newQuery(RealTimeCustomers.class);
			q.setFilter("isActive == true && colorInCart == :colorid");
			List<RealTimeCustomers> customers=(List<RealTimeCustomers>)q.execute(colorid);
			customers=(List<RealTimeCustomers>)pm.detachCopyAll(customers);
			log.info("inside getCustomerCountForColorId customer size: "+customers.size());
			
			return customers.size();
			
		}
		catch(Exception e)
		{
			log.warning("Exception in getCustomerCountForColorId "+e.getMessage());
			for(StackTraceElement ele:e.getStackTrace())
				log.warning(ele.toString());
			return 0;
		}
	}
	
	public void setCustomerCount(String clientid,String orderId)
	{
		PersistenceManager pm=null;
		log.info("inside setCustomerCount client id:"+clientid);
		
		try
		{
			ShoppingCart cart=ShoppingCartService.getShoppingCart(orderId);
			if(cart==null)
			{
				log.warning("cart is null in setCustomerCount");
				return;
			}
			
			DiscountProgram program=VeroniqaUtil.getDiscountProgramForFB();
			if(!(program!=null&&program.getShowCartCount()&&hasSaleItem(cart)))
				return;
			pm=PMF.get().getPersistenceManager();
			Query customerquery=pm.newQuery(RealTimeCustomers.class);
			customerquery.setFilter("clientId == :clientid && isActive == true");
			List<RealTimeCustomers> customers=(List<RealTimeCustomers>)customerquery.execute(clientid);
			log.info("customers size:"+customers.size());
			
			//collecting to be notified details
			
			int cartcount=0;
			Set<Long> toNotifyColors=new HashSet();
			Set<Long> toNotifyProducts=new HashSet();
			List<LineItemDTO> lineitems=cart.getLineItems();
			if(lineitems!=null)
			{
				cartcount=lineitems.size();
				for(LineItemDTO litem:lineitems)
				{
					toNotifyColors.add(litem.getColorId());
					toNotifyProducts.add(litem.getProductId());
				}
			}
			for(RealTimeCustomers customer:customers)
			{
				Long colorid=customer.getColorInCart();
				if(colorid!=null)
					toNotifyColors.add(new Long(colorid.longValue()));
				
				Long productid=customer.getProductInCart();
				if(productid!=null)
					toNotifyProducts.add(new Long(productid.longValue()));
			}
			log.info("to notify colors:"+toNotifyColors);
			log.info("to notify products:"+toNotifyProducts);
			//going to update/add/remove clients with new cart items
			if(customers.size()>cartcount)
			{
				log.info("inside customers.size()>cartcount");
				//updating existing clientids with cart items and deactivating surplus clients
				for(int i=0;i<cartcount;i++)
				{
					RealTimeCustomers customer=customers.get(i);
					LineItemDTO item=lineitems.get(i);
					customer.setColorInCart(item.getColorId());
					customer.setProductInCart(item.getProductId());
					customer.setLastAccessed(new Date());
					customer.setIsActive(true);
					
				}
				for(int i=cartcount;i<customers.size();i++)
				{
					RealTimeCustomers customer=customers.get(i);
					customer.setColorInCart(null);
					customer.setProductInCart(null);
				}
			}
			else if(customers.size()<cartcount)
			{
				log.info("customers.size()<cartcount");
				String onPage="";
				//updating existing clientids with cart items and adding needed clients
				for(int i=0;i<customers.size();i++)
				{
					RealTimeCustomers customer=customers.get(i);
					LineItemDTO item=lineitems.get(i);
					customer.setColorInCart(item.getColorId());
					customer.setProductInCart(item.getProductId());
					customer.setIsActive(true);
					customer.setLastAccessed(new Date());
					onPage=customer.getOnPage();
					
				}
				for(int i=customers.size();i<cartcount;i++)
				{
					RealTimeCustomers customer=new RealTimeCustomers();
					LineItemDTO item=lineitems.get(i);
					customer.setColorInCart(item.getColorId());
					customer.setProductInCart(item.getProductId());
					customer.setDateAdded(new Date());
					customer.setLastAccessed(new Date());
					customer.setIsActive(true);
					customer.setClientId(clientid);
					customer.setOnPage(onPage);
					if(onPage.equals("IDP"))
						customer.setIdpColorId(item.getColorId());
							
					pm.makePersistent(customer);
				}
			}
			else if(cartcount>0)
			{
				log.info("customers.size()==cartcount");
				//both are equal
				for(int i=0;i<customers.size();i++)
				{
					RealTimeCustomers customer=customers.get(i);
					LineItemDTO item=lineitems.get(i);
					customer.setColorInCart(item.getColorId());
					customer.setProductInCart(item.getProductId());
					customer.setIdpColorId(item.getColorId());
					customer.setOnPage("IDP");
					customer.setLastAccessed(new Date());
					customer.setIsActive(true);
				}
			}
		
			pm.close();
			notifyAllRealtimeCustomers(toNotifyProducts,toNotifyColors);
			
		}
		catch(Exception e)
		{
			log.warning("Exception in setCustomerCountForColorId "+e.getMessage());
			for(StackTraceElement ele:e.getStackTrace())
				log.warning(ele.toString());
		}
		
		
	}
	
	/*public void decrementCustomerCount(Long colorid,String clientid)
	{
		PersistenceManager pm=null;
		
		try
		{
			pm=PMF.get().getPersistenceManager();
			Query q=pm.newQuery(RealTimeCustomers.class);
			q.setFilter("clientId == :clientId");
			List<RealTimeCustomers> customers=(List<RealTimeCustomers>)q.execute(colorid);
			RealTimeCustomers customer=null;
			if(customers.size()>0)
			{
				customer=customers.get(0);
				List<Long> cartitems=customer.getItemsInCart();
				if(cartitems!=null&&cartitems.contains(colorid))
				{
					cartitems.remove(colorid);
				}
				pm.makePersistent(customer);
			}
			pm.close();
			notifyAllRealtimeCustomers(0l,colorid);
			
		}
		catch(Exception e)
		{
			log.warning("Exception in getCustomerCountForColorId "+e.getMessage());
		}
		
	}*/
	
	public void notifyAllRealtimeCustomers(Set<Long> productids,Set<Long> colorids)
	{
		notifyCustomers_IDP(colorids);
		notifyCustomers_CategoryPages(productids);
	}
	
	public void notifyCustomers_CategoryPages(Set<Long> productids)
	{
		log.info("inside notifyCustomers_CategoryPages color size:"+productids.size());
		PersistenceManager pm=null;
		try
		{
			HashMap<Long,Integer> countmap=getCustomerCountForProductId(productids);
			pm=PMF.get().getPersistenceManager();
			Query q=pm.newQuery(RealTimeCustomers.class);
			q.setFilter("isActive == true && onPage=='SALE' && :productids.contains(productIds)");
			List<RealTimeCustomers> customers=(List<RealTimeCustomers>)q.executeWithArray(productids.toArray());
			customers=(List<RealTimeCustomers>)pm.detachCopyAll(customers);
			log.info("notifyCustomers_CategoryPages size:"+customers.size());
			if(customers.size()>0)
			{
				Set<String> clientids=new HashSet<String>();
				for(RealTimeCustomers customer:customers)
				{
					clientids.add(customer.getClientId());
				}
				log.info("no of customers to send notification:"+clientids.size());
				sendNotification_CategoryPages(countmap,clientids);
			}
			
		}
		catch(Exception e)
		{
			log.warning("Exception in notifyCustomers_IDP "+e.getMessage());
		}
	
	
	}
	
	public void notifyCustomers_IDP(Set<Long> colorids)
	{
		log.info("inside notifyCustomers_IDP color size:"+colorids.size());
		PersistenceManager pm=null;
		try
		{
			HashMap<Long,Integer> countmap=getCustomerCountForColorId(colorids);
			log.info("count map:"+countmap);
			pm=PMF.get().getPersistenceManager();
			Query q=pm.newQuery(RealTimeCustomers.class);
			q.setFilter("isActive == true && onPage=='IDP' && :colorids.contains(idpColorId)");
			q.setOrdering("lastAccessed");
			List<RealTimeCustomers> customers=(List<RealTimeCustomers>)q.execute(colorids);
			customers=(List<RealTimeCustomers>)pm.detachCopyAll(customers);
			log.info("notifyCustomers_IDP size:"+customers.size());
			if(customers.size()>0)
			{
				HashMap<String,String> clientids=new HashMap<String,String>();
				int count=0;
				for(RealTimeCustomers customer:customers)
				{
					count=0;
					Long colorid=customer.getIdpColorId();
					log.info("color id:"+colorid);
					if(countmap.containsKey(colorid))
						count=countmap.get(colorid);
					
						clientids.put(customer.getClientId(),colorid+":"+count);
					
				}
				log.info("no of customers to send notification:"+clientids.size());
				sendNotification(clientids);
			}
			
		}
		catch(Exception e)
		{
			log.warning("Exception in notifyCustomers_IDP "+e.getMessage());
			for(StackTraceElement ele:e.getStackTrace())
				log.warning(ele.toString());
		}
	
	}
	public void sendNotification(HashMap<String,String> customermap)
	{
		try
		{
			log.info("Customer map:"+customermap);
			 ChannelService channelService = ChannelServiceFactory.getChannelService();
			 for(String clientid:customermap.keySet())
				 channelService.sendMessage(new ChannelMessage(clientid, customermap.get(clientid)));
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
	
	public void sendNotification_CategoryPages(HashMap<Long,Integer> countmap,Set<String> clientids)
	{
		try
		{
			 ChannelService channelService = ChannelServiceFactory.getChannelService();
			 ObjectMapper objmap=new ObjectMapper();
			 String jsonstr=objmap.writeValueAsString(countmap);
			 for(String clientid:clientids)
				 channelService.sendMessage(new ChannelMessage(clientid, jsonstr));
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
	}
	
	public String getRealTimeToken_IDP(String clientid,Long colorid) throws Exception
	{
		PersistenceManager pm=null;
		try
		{
			pm=PMF.get().getPersistenceManager();
			RealTimeCustomers customer=null;
			
			Query query=pm.newQuery(RealTimeCustomers.class);
			query.setFilter("clientId == :clientid && isActive== true");
			query.setRange(0,1);
			List<RealTimeCustomers> customers=(List<RealTimeCustomers>)query.execute(clientid);
			if(customers.size()>0)
			{
				ChannelService chservice=ChannelServiceFactory.getChannelService();
				customer=customers.get(0);
				customer.setOnPage("IDP");
				customer.setIdpColorId(colorid);
				customer.setLastAccessed(new Date());
				customer.setToken(chservice.createChannel(clientid));
			}
			else
			{
				customer=new RealTimeCustomers();
				customer.setClientId(clientid);
				customer.setDateAdded(new Date());
				customer.setDeleted(false);
				customer.setIsActive(true);
				customer.setLastAccessed(new Date());
				customer.setOnPage("IDP");
				customer.setIdpColorId(colorid);
				ChannelService chservice=ChannelServiceFactory.getChannelService();
				customer.setToken(chservice.createChannel(clientid));
				pm.makePersistent(customer);
			}
				
			return customer.getToken();
			
		}
		catch(Exception e)
		{
			log.warning("Exception in getRealTimeToken_IDP "+e.getMessage());
			for(StackTraceElement ele:e.getStackTrace())
				log.warning(ele.toString());
			
			return  null;
		}
		finally
		{
			pm.close();
		}
		
	
	}
	
	public String updateColorId(String clientid,Long colorid) throws Exception
	{
		PersistenceManager pm=null;
		try
		{
			pm=PMF.get().getPersistenceManager();
			RealTimeCustomers customer=null;
			Query query=pm.newQuery();
			query.setFilter("clientId == :clientid && isActive== true");
			query.setRange(0,1);
			List<RealTimeCustomers> customers=(List<RealTimeCustomers>)query.execute(clientid);
			if(customers.size()>0)
			{
				ChannelService chservice=ChannelServiceFactory.getChannelService();
				customer=customers.get(0);
				customer.setOnPage("IDP");
				customer.setIdpColorId(colorid);
				customer.setLastAccessed(new Date());
				customer.setToken(chservice.createChannel(clientid));
			}
			else
			{
				customer=new RealTimeCustomers();
				customer.setClientId(clientid);
				customer.setDateAdded(new Date());
				customer.setDeleted(false);
				customer.setIsActive(true);
				customer.setLastAccessed(new Date());
				customer.setOnPage("IDP");
				customer.setIdpColorId(colorid);
				ChannelService chservice=ChannelServiceFactory.getChannelService();
				customer.setToken(chservice.createChannel(clientid));
				pm.makePersistent(customer);
			}
			return customer.getToken();
		}
		catch(Exception e)
		{
			log.warning("Exception in getRealTimeToken_IDP "+e.getMessage());
			throw e;
		}
		finally
		{
			pm.close();
		}
		
	
	}
	
	public String getRealTimeToken_CategoryPages(String clientid,PageDTO dto) throws Exception
	{

		PersistenceManager pm=null;
		try
		{
			List<ProductDTOForCategory> productlst=dto.getData();
			Set<Long> productids=new HashSet<Long>();
			for(ProductDTOForCategory pdto:productlst)
			{
				productids.add(pdto.getProductId());
			}
			pm=PMF.get().getPersistenceManager();
			RealTimeCustomers customer=null;
			Query query=pm.newQuery(RealTimeCustomers.class);
			query.setFilter("clientId == :clientid && isActive == true");
			query.setRange(0,1);
			List<RealTimeCustomers> customers=(List<RealTimeCustomers>)query.execute(clientid);
			if(customers.size()>0)
			{
				ChannelService chservice=ChannelServiceFactory.getChannelService();
				customer=customers.get(0);
				customer.setOnPage("SALE");
				customer.setProductIds(new ArrayList(productids));
				customer.setToken(chservice.createChannel(clientid));
			}
			else
			{
				customer=new RealTimeCustomers();
				customer.setClientId(clientid);
				customer.setDateAdded(new Date());
				customer.setDeleted(false);
				customer.setIsActive(true);
				customer.setOnPage("SALE");
				customer.setProductIds(new ArrayList(productids));
				ChannelService chservice=ChannelServiceFactory.getChannelService();
				customer.setToken(chservice.createChannel(clientid));
				pm.makePersistent(customer);
			}
			
			return customer.getToken();
			
			
			
		}
		catch(Exception e)
		{
			log.warning("Exception in getRealTimeToken_IDP "+e.getMessage());
			for(StackTraceElement ele:e.getStackTrace())
				log.warning(ele.toString());
			return null;
		}
		finally
		{
			pm.close();
		}
		
	
	}
	public Boolean deactivateCustomer(String clientid) 
	{

		PersistenceManager pm=null;
		try
		{
			pm=PMF.get().getPersistenceManager();
			
			Query query=pm.newQuery();
			query.setFilter("clientId == :clientid && isActive== true");
			List<RealTimeCustomers> customers=(List<RealTimeCustomers>)query.execute(clientid);
			if(customers.size()>0)
			{
				for(RealTimeCustomers cust:customers)
				{
					cust.setIsActive(false);
				}
			}
				
		}
		catch(Exception e)
		{
			log.warning("Exception in deactivateCustomer "+e.getMessage());
			return false;
		}
		finally
		{
			pm.close();
		}
		return true;
	
	
	}
	private List breakInto30BY30(ArrayList<Long> ids)
	{
	

		List lst=new ArrayList();
		try
		{
		int i=0;int j=29;
		log.info("ids initial size:"+ids.size());
		while(ids.size()>0)
		{
			if(ids.size()<29)
				j=ids.size();
			ArrayList<Long> lstl=new ArrayList<Long>();
			lstl.addAll((Collection<Long>) new ArrayList<Long>(ids.subList(i,j)).clone());
			log.info("lstl size before:"+lstl.size());
			ids.removeAll(lstl);
			log.info("lstl size after:"+lstl.size());
			lst.add(lstl);
		}
		}
		catch(Exception e)
		{
			log.warning("Exception in breakInto30BY30 "+e.getMessage());
			for(StackTraceElement ele:e.getStackTrace())
				log.warning(ele.toString());
		}
		return lst;
	}
	
	private Boolean hasSaleItem(ShoppingCart cart)
	{
		Boolean hasSale=false;
		if(cart!=null&&cart.getLineItems()!=null&&cart.getLineItems().size()>0)
		{
			for(LineItemDTO lineitem:cart.getLineItems())
			{
				if(lineitem.getIsSale())
					hasSale= true;
			}
		}
		else
		{
			return true;
		}
		return hasSale;
	}

}
