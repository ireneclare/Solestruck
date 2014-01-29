package com.veroniqa.frontend.service;

import java.math.BigDecimal;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.logging.Logger;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.veroniqa.dto.LineItemDTO;
import com.veroniqa.dto.ShoppingCart;
import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.MemcachedConstants;
import com.veroniqa.frontend.util.MemcachedUtil;
import com.veroniqa.frontend.util.RestClientUtil;
import com.veroniqa.frontend.util.VeroniqaConstants;
import com.veroniqa.frontend.util.VeroniqaCookieUtil;

/**
 * 
 * @author SHI
 * The ShoppingCartService completely re-factored.
 * 
 */
public class ShoppingCartService {
	
	private static Logger log=Logger.getLogger(ShoppingCartService.class.getSimpleName());
	
	private ShoppingCart shoppingCart;
	/**
	 * The constructor is made private to force to call getInstance method which will fetch the ShoppingCart while initialising
	 * so that we need not to pass the ShoppingCart itself every time we use the method of this service
	 */
	public ShoppingCartService(ShoppingCart cart){
		this.shoppingCart=cart;
	}
	
	public ShoppingCart getShoppingCart() {
		return shoppingCart;
	}

	public void setShoppingCart(ShoppingCart shoppingCart) {
		this.shoppingCart = shoppingCart;
	}
	
	public Long addItemAfresh(LineItemDTO lineItem,Long customerId)
	{
		Long orderId = null;
		List<Object> inputList = new ArrayList<Object>();
		try
		{
			if(shoppingCart!=null)
			{
				log.info("VariantID "+lineItem.getProductVariantId());
				String strBrandId=EnvironmentUtil.getEnvironmentValue("brandid");
				Long brandId=Long.parseLong(strBrandId);
				inputList.add(lineItem.getProductVariantId());
				inputList.add(lineItem.getQuantity());
				inputList.add(brandId);
				inputList.add(customerId);
				orderId = (Long) RestClientUtil.callService(inputList, "addItemAfresh", "ShoppingCartBusinessService");
				shoppingCart.setOrderId(orderId);
				if(orderId!=null){
					List<LineItemDTO> lineItems=new ArrayList<LineItemDTO>();
					if(lineItem.getIsSale()){
						lineItem.setPrice(lineItem.getPrice());
					}
					else{
						lineItem.setPrice(lineItem.getUnitPrice());
					}
					
					lineItem.setSequenceId(1);
					lineItems.add(lineItem);
					shoppingCart.setLineItems(lineItems);
				}					
			}
				
		}
		catch(Exception e)
		{
			log.warning("Exception while adding to the cart : "+e);
		}
		return orderId;
	}
	
	public Integer addItem(LineItemDTO lineItem,Long orderId)
	{
		Integer result=0;
		List<Object> inputList = new ArrayList<Object>();
		try
		{
			if(shoppingCart!=null)
			{
				inputList.add(lineItem.getProductVariantId());
				inputList.add(lineItem.getQuantity());
				inputList.add(orderId);
				result = (Integer) RestClientUtil.callService(inputList, "addItem", "ShoppingCartBusinessService");
				
				log.info("The result in addItem just from DataService : "+result);
				if(result>0){//check for success
					List<LineItemDTO> lineItemList=shoppingCart.getLineItems();
					if(lineItemList==null || lineItemList.size()==0){
						List<LineItemDTO> lineItems=new ArrayList<LineItemDTO>();
						lineItem.setSequenceId(1);
						if(lineItem.getIsSale())
							lineItem.setPrice(lineItem.getPrice());
						else
							lineItem.setPrice(lineItem.getUnitPrice());	
						lineItems.add(lineItem);
						shoppingCart.setLineItems(lineItems);
						result=1;
					}
					else{
						boolean found=false;
						int biggest=0;
						for(LineItemDTO line:lineItemList){
							log.info("SEQUENCE : "+line.getSequenceId());
							if(line.getProductVariantId().equals(lineItem.getProductVariantId())){
								line.setQuantity(line.getQuantity()+lineItem.getQuantity());
								log.info("old quantity is "+lineItem.getQuantity()+" and the difference quantity is "+line.getQuantity());
								BigDecimal unitPrice=new BigDecimal(Double.toString(line.getUnitPrice()));
								BigDecimal qty=new BigDecimal(line.getQuantity());
								BigDecimal price=unitPrice.multiply(qty);
								price=price.setScale(2,BigDecimal.ROUND_HALF_UP);
								line.setPrice(price.doubleValue());
								result=line.getSequenceId();
								log.info("The Found LineItem : "+line.getSequenceId());
								found=true;
								break;
							}
							//finding the biggest one
							if(biggest<line.getSequenceId().intValue())
								biggest=line.getSequenceId();
						}
						log.info("Biggest "+biggest);
						if(!found){
							biggest++;
							result=biggest;
							lineItem.setSequenceId(result);
							if(lineItem.getIsSale())
								lineItem.setPrice(lineItem.getPrice());
							else
								lineItem.setPrice(lineItem.getUnitPrice());	
							lineItemList.add(lineItem);
						}
					}
				}//Success End	
			}//NULL check End
		}
		catch(Exception e)
		{
			log.warning("Exception while adding to the cart : "+e);
			result=-1;
		}
		log.info("The result in addItem : "+result);
		return result;
	}
	
	
	public static ShoppingCart addItemAfresh(Long productVariantId,Integer quantity,Long customerId,HttpServletRequest req,HttpServletResponse res)
	{
		
		ShoppingCart shoppingCart=null;
		try
		{
			log.info("VariantID in overloaded addItemAfresh:"+productVariantId);
			String strBrandId=EnvironmentUtil.getEnvironmentValue("brandid");
			Long brandId=Long.parseLong(strBrandId);
			List<Object> inputList = new ArrayList<Object>();
			inputList.add(productVariantId);
			inputList.add(quantity);
			inputList.add(brandId);
			inputList.add(customerId);
			Long orderId = (Long) RestClientUtil.callService(inputList, "addItemAfresh", "ShoppingCartBusinessService");
			if(orderId==null)
			{
				log.info("Error while adding to Cart");
				return null;
			}
			Cookie cookie = VeroniqaCookieUtil.createNewCookie(req, res, "orderid", orderId.toString(),365*24*60*60);
	        res.addCookie(cookie);
						
			shoppingCart=getShoppingCartFromDB(orderId);
			saveShoppingCart(shoppingCart, req,orderId);
		}
		catch(Exception e)
		{
			log.warning("Exception while adding to the cart : "+e);
		}
		return shoppingCart;
	}
	
	public Integer addItem(Long productVariantId,Integer quantity,Long orderId,HttpServletRequest req)
	{
		Integer result=0;
		List<Object> inputList = new ArrayList<Object>();
		try
		{
			if(shoppingCart!=null)
			{
				inputList.add(productVariantId);
				inputList.add(quantity);
				inputList.add(orderId);
				result = (Integer) RestClientUtil.callService(inputList, "addItem", "ShoppingCartBusinessService");
				
				log.info("The result in addItem just from DataService : "+result);
				if(result>0){//check for success
					shoppingCart=getShoppingCartFromDB(orderId);
					saveShoppingCart(shoppingCart,req);
					}
					else{
						log.info("Exception in add item");
					}
				}//Success End	
			}//NULL check End
		
		catch(Exception e)
		{
			log.warning("Exception while adding to the cart : "+e);
			result=-1;
		}
		log.info("The result in addItem : "+result);
		return result;
	}

	
	public int updateItem(long oldVariantId,LineItemDTO lineItemDTO,Long orderId)
	{
		int result=1;
		List<Object> inputList = new ArrayList<Object>();
		try{
			if(shoppingCart==null)
				throw new Exception("No ShoppingCart Found!");
			if(shoppingCart.getLineItems()==null)
				throw new Exception("No LineItems Found!");
			if(oldVariantId==lineItemDTO.getProductVariantId().longValue()){
				log.info("No Change in LineItme!");
				return lineItemDTO.getSequenceId();
			}
				
			inputList.add(oldVariantId);
			inputList.add(lineItemDTO.getProductVariantId());
			inputList.add(lineItemDTO.getQuantity());
			inputList.add(orderId);
			result=(Integer) RestClientUtil.callService(inputList, "updateItem", "ShoppingCartBusinessService");
			
			LineItemDTO lineItem2Remove=null;
			LineItemDTO itemExisting=null;
			int sequenceExisting=0;
			for(LineItemDTO ld:shoppingCart.getLineItems())
			{
				if(ld.getProductVariantId().equals(oldVariantId))
				{
					lineItem2Remove=ld;
				}
				if(ld.getProductVariantId().equals(lineItemDTO.getProductVariantId()))
				{
					sequenceExisting=ld.getSequenceId();
					itemExisting=ld;
				}
			}
			shoppingCart.getLineItems().remove(lineItem2Remove);
			
			if(sequenceExisting>0){
				log.info("Item Already Exists");
				result=sequenceExisting;
				itemExisting.setQuantity(itemExisting.getQuantity()+lineItemDTO.getQuantity());
				BigDecimal unitPrice=new BigDecimal(Double.toString(itemExisting.getUnitPrice()));
				log.info("old quantity "+itemExisting.getQuantity()+" and new quantity is "+lineItemDTO.getQuantity());
				BigDecimal qty=new BigDecimal(itemExisting.getQuantity());
				BigDecimal price=unitPrice.multiply(qty);
				price=price.setScale(2,BigDecimal.ROUND_HALF_UP);
				log.info("Price is "+price);
				itemExisting.setPrice(price.doubleValue());
			}				
			else{
				log.info("ITEM IS NEW ONE");
				lineItemDTO.setSequenceId(lineItem2Remove.getSequenceId());
				BigDecimal unitPrice=new BigDecimal(Double.toString(lineItemDTO.getUnitPrice()));
				BigDecimal qty=new BigDecimal(lineItemDTO.getQuantity());
				BigDecimal price=unitPrice.multiply(qty);
				lineItemDTO.setPrice(price.doubleValue());
				shoppingCart.getLineItems().add(lineItemDTO);
				result=lineItemDTO.getSequenceId();
			}			
						
		}
		catch(Exception e){
			log.warning("Exception while updating the Item : "+e);
			result=-1;
		}
		return result;
	}
	
	public int removeItem(long productVariantId,Integer quantity,Long orderId)
	{
		int result=0;
		List<Object> inputList = new ArrayList<Object>();
		try{
			if(shoppingCart==null)
				throw new Exception("No Shopping Cart Found!");
			if(shoppingCart.getLineItems()==null)
				return 0;
			LineItemDTO item2Remove=null;
			for(LineItemDTO item:shoppingCart.getLineItems())
			{
				if(item.getProductVariantId().equals(productVariantId))
				{
					item2Remove=item;
					if(quantity>item2Remove.getQuantity()){
						log.info("Quantity is too high!");
						return result;
					}					
					break;
				}
			}
			if(item2Remove!=null){
				inputList.add(productVariantId);
				inputList.add(quantity);
				inputList.add(orderId);
				result=(Integer) RestClientUtil.callService(inputList, "removeItem", "ShoppingCartBusinessService");
				if(result>0){
					if(quantity<0)
						shoppingCart.getLineItems().remove(item2Remove);
					else{
						item2Remove.setQuantity(item2Remove.getQuantity()-quantity);
						BigDecimal unitPrice=new BigDecimal(Double.toString(item2Remove.getUnitPrice()));
						BigDecimal qty=new BigDecimal(item2Remove.getQuantity());
						BigDecimal price=unitPrice.multiply(qty);
						price=price.setScale(2,BigDecimal.ROUND_HALF_UP);
						item2Remove.setPrice(price.doubleValue());
					}
				}
					
			}
			
		}
		catch(Exception e){
			log.warning("Exception while removing the item from cart : "+e);
			result=-1;
		}
		return result;
	}
	
/**
 * This method changes the quantity of the item selected either by adding new items or removing some existing items.
 * 
 * @param productVariantId
 * @param quantity
 * @param orderId
 * @return Integer 0-No change it quantity,1-success(added/removed),-1-error while updating the quantity.
 */
	public Integer updateQuantity(Long productVariantId,Integer quantity,Long orderId)
	{
		Integer result=0;
		try{
			if(shoppingCart==null)
				throw new Exception("No Shopping Cart Found!");
			if(shoppingCart.getLineItems()==null)
				return 0;
			LineItemDTO item2Update=null;
			for(LineItemDTO item:shoppingCart.getLineItems())
			{
				if(item.getProductVariantId().equals(productVariantId))
				{
					item2Update=item;
					break;
				}
			}
			if(item2Update!=null){
				int previousQuantity=item2Update.getQuantity();
				if(previousQuantity<quantity){				
					int qty2Add=quantity-previousQuantity;
					LineItemDTO item2Add=new LineItemDTO();
					item2Add.copy(item2Update);
					item2Add.setQuantity(qty2Add);
					log.info("PreviousQuantity is "+previousQuantity+" new quantity is "+quantity);
					result=addItem(item2Add,orderId);
				}
				else if(previousQuantity>quantity){
					int qty2Remove=previousQuantity-quantity;	
					log.info("Previous quantity "+previousQuantity+" and new "+quantity);
					result=removeItem(item2Update.getProductVariantId(),qty2Remove,orderId);
				}
				else{
					log.info("No Change in Quantity :"+previousQuantity);
					result=0;
				}
				/*
				 //We don't need to update price why because the addItem/removeItem method will take care of that.
				if(result<1){
					item2Update.setQuantity(previousQuantity);
					BigDecimal unitPrice=new BigDecimal(Double.toString(item2Update.getUnitPrice()));
					BigDecimal qty=new BigDecimal(item2Update.getQuantity());
					BigDecimal price=unitPrice.multiply(qty);
					price=price.setScale(2,BigDecimal.ROUND_HALF_UP);
					item2Update.setPrice(price.doubleValue());
				}
				*/
			}	
			
		}
		catch(Exception e){
			log.warning("Exception in updateQuantity : "+e);
			result=-1;
		}
		return result;
	}
	public static List<LineItemDTO> getAllLineItems(long orderId)
	{
		List<LineItemDTO> lineItems=null;
		List<Object> inputList = new ArrayList<Object>();
		try
		{
			inputList.add(orderId);
			lineItems = (List<LineItemDTO>) RestClientUtil.callService(inputList, "getLineItems", "ShoppingCartBusinessService");
			
		}
		catch(Exception e){
			log.warning("Exception in getAllLineItems : "+e);
		}
		return lineItems;
	}
	
	public static ShoppingCart getShoppingCartFromDB(long orderId)
	{
		ShoppingCart cart=null;
		List<Object> inputList = new ArrayList<Object>();
		try{
			
			inputList.add(orderId);
			List<LineItemDTO> lLineItemDTOs = (List<LineItemDTO>) RestClientUtil.callService(inputList, "getLineItems", "ShoppingCartBusinessService");
			if(lLineItemDTOs!=null){
				cart = new ShoppingCart();
				cart.setOrderId(orderId);
				cart.setLineItems(lLineItemDTOs);
				cart.setLastLoaded(new Date());
				//No Need to set SubTotal as it will be calculated in getter method
			}
				
			/*			
  			Double subTotal = 0.0;
			if(!lLineItemDTOs.isEmpty())
			{
				cart = new ShoppingCart();
				cart.setOrderId(orderId);
				cart.setLineItems(lLineItemDTOs);
				for(LineItemDTO lLineItemDTO :lLineItemDTOs)
				{
					subTotal+=lLineItemDTO.getPrice()*lLineItemDTO.getQuantity();
				}
				cart.setSubTotal(subTotal);
			}*/				
		}
		catch(Exception e){
			log.warning("Exception in getShoppingCartFromDB "+e);
		}
		return cart;
	}
	
	public LineItemDTO getLineItem(Long productVariantId)
	{
		LineItemDTO lineItem=null;
		try{
			if(shoppingCart.getLineItems()!=null){
				for(LineItemDTO item:shoppingCart.getLineItems()){
					if(item.getProductId().equals(productVariantId)){
						lineItem=item;
						break;
					}
				}
			}
		}
		catch(Exception e){
			log.warning("The Exception in getLineItem "+e);
		}
		return lineItem;
	}

	public static ShoppingCart getShoppingCart(HttpServletRequest req)
	{
		//Boolean retVal=false;
		ShoppingCart cart=null;
		try
		{
			
			String orderId=VeroniqaCookieUtil.getCookieValue(req, VeroniqaConstants.ORDER_ID);
			
			if(req.getParameter(VeroniqaConstants.ORDER_ID)!=null)
			{
				orderId=req.getParameter(VeroniqaConstants.ORDER_ID);
			}
			
			log.info("OrderID from Cookie "+orderId);
			//String brandId=EnvironmentUtil.getEnvironmentValue("brandid");
			if(EnvironmentUtil.getEnvironmentValue("ShoppingCartSavingScheme").equalsIgnoreCase("cache"))
			{	 
				log.info("Trying to retrieve from Memcacache");
				if(orderId!=null){
					 cart=(ShoppingCart)MemcachedUtil.get(MemcachedConstants.SHOPPING_CART_KEY_PREFIX+orderId, MemcachedConstants.SHOPPING_CART_NAMESPACE);
					 if(cart==null||cart.needReload())
					 {
						 log.info("Trying to retrieve from DB");
						cart= ShoppingCartService.getShoppingCartFromDB(Long.parseLong(orderId));
						MemcachedUtil.set(MemcachedConstants.SHOPPING_CART_KEY_PREFIX+orderId,cart, MemcachedConstants.SHOPPING_CART_NAMESPACE);
					 }
				}
			}
			else
			{
				log.info("Trying to retrieve from Session");
				if(req.getSession()!=null && req.getSession().getAttribute("ShoppingCart")!=null){
					
					cart=(ShoppingCart)req.getSession().getAttribute("ShoppingCart");		
					//retVal=true;
					if(cart==null)
					 {
						log.info("Trying to retrieve from DB");
						cart= ShoppingCartService.getShoppingCartFromDB(Long.parseLong(orderId));
						req.getSession().setAttribute("ShoppingCart",cart);
					 }
				}
			}
		}
		catch(Exception e)
		{
			log.warning("An exception in the getShoppingCart "+e.getMessage());
			e.printStackTrace();
		}
		
		return cart;
	}
	
	public static ShoppingCart getShoppingCart(String orderId)
	{
		//Boolean retVal=false;
		ShoppingCart cart=null;
		try
		{
			
			
			
			log.info("OrderID from Cookie "+orderId);
			//String brandId=EnvironmentUtil.getEnvironmentValue("brandid");
			if(EnvironmentUtil.getEnvironmentValue("ShoppingCartSavingScheme").equalsIgnoreCase("cache"))
			{	 
				log.info("Trying to retrieve from Memcacache");
				if(orderId!=null){
					 cart=(ShoppingCart)MemcachedUtil.get(MemcachedConstants.SHOPPING_CART_KEY_PREFIX+orderId, MemcachedConstants.SHOPPING_CART_NAMESPACE);
					 if(cart==null||cart.needReload())
					 {
						 log.info("Trying to retrieve from DB");
						cart= ShoppingCartService.getShoppingCartFromDB(Long.parseLong(orderId));
						MemcachedUtil.set(MemcachedConstants.SHOPPING_CART_KEY_PREFIX+orderId,cart, MemcachedConstants.SHOPPING_CART_NAMESPACE);
					 }
				}
			}
			
		}
		catch(Exception e)
		{
			log.warning("An exception in the getShoppingCart "+e.getMessage());
			e.printStackTrace();
		}
		
		return cart;
	}
	
	public static Boolean saveShoppingCart(ShoppingCart cart,HttpServletRequest req)
	{
		String orderId=VeroniqaCookieUtil.getCookieValue(req, VeroniqaConstants.ORDER_ID);
		Boolean retVal=false;
		try
		{
			
			//String brandId=EnvironmentUtil.getEnvironmentValue("brandid");
			if(EnvironmentUtil.getEnvironmentValue("ShoppingCartSavingScheme").equalsIgnoreCase("cache"))
			{	
				if(orderId!=null){
					 MemcachedUtil.set(MemcachedConstants.SHOPPING_CART_KEY_PREFIX+orderId,cart, MemcachedConstants.SHOPPING_CART_NAMESPACE);
					 retVal=true;
					 log.info("Saving ShoppingCart to Memcache");
				}
			}
			else
			{
				req.getSession().setAttribute("ShoppingCart",cart);
				retVal=true;
				log.info("Saving ShoppingCart to Session");
			}
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the saveShoppingCart "+e);
		}
		return retVal;
	}
	
	public static Boolean saveShoppingCart(ShoppingCart cart,String orderId)
	{
		Boolean retVal=false;
		try
		{
			
			//String brandId=EnvironmentUtil.getEnvironmentValue("brandid");
			if(EnvironmentUtil.getEnvironmentValue("ShoppingCartSavingScheme").equalsIgnoreCase("cache"))
			{	
				if(orderId!=null){
					 MemcachedUtil.set(MemcachedConstants.SHOPPING_CART_KEY_PREFIX+orderId,cart, MemcachedConstants.SHOPPING_CART_NAMESPACE);
					 retVal=true;
					 log.info("Saving ShoppingCart to Memcache");
				}
			}
			
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the saveShoppingCart "+e);
		}
		return retVal;
	}
	
	
	public static Boolean saveShoppingCart(ShoppingCart cart,HttpServletRequest req,Long orderId)
	{
		String strOrderId=orderId+"";
		Boolean retVal=false;
		try
		{
			//String brandId=EnvironmentUtil.getEnvironmentValue("brandid");
			if(EnvironmentUtil.getEnvironmentValue("ShoppingCartSavingScheme").equalsIgnoreCase("cache"))
			{	
				if(orderId!=null){
					cart.setLastLoaded(new Date());
					 MemcachedUtil.set(MemcachedConstants.SHOPPING_CART_KEY_PREFIX+strOrderId,cart, MemcachedConstants.SHOPPING_CART_NAMESPACE);
					 retVal=true;
					 log.info("Saving ShoppingCart to Memcache");
				}
			}
			else
			{
				req.getSession().setAttribute("ShoppingCart",cart);
				retVal=true;
				log.info("Saving ShoppingCart to Session");
			}
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the saveShoppingCart "+e);
		}
		return retVal;
	}
	
	public static Boolean removeShoppingCart(HttpServletRequest req,Long orderId)
	{
		Boolean result=true;
		try{
			String strOrderId=orderId+"";
			if(EnvironmentUtil.getEnvironmentValue("ShoppingCartSavingScheme").equalsIgnoreCase("cache"))
			{	
				if(orderId!=null){
					 MemcachedUtil.remove(MemcachedConstants.SHOPPING_CART_KEY_PREFIX+strOrderId,MemcachedConstants.SHOPPING_CART_NAMESPACE);
					 result=true;
					 log.info("Removing ShoppingCart from Memcache.............");
				}
			}
			else
			{
				req.getSession().removeAttribute("ShoppingCart");
				result=true;
				log.info("Removing ShoppingCart from Session....");
			}

		}
		catch(Exception e){
			log.warning("Exception in removeShoppingCart: "+e);
			result=false;
		}
		return result;
	}
	
}


/*	public ShoppingCartService getInstance(ShoppingCart cart)
{
	ShoppingCartService cartService=new ShoppingCartService();
	try{
		this.setShoppingCart(cart);
	}
	catch(Exception e){
		log.warning("Exception while initialising ShoppingCartService : "+e);
		cartService=null;
	}
	return cartService;
}
*/