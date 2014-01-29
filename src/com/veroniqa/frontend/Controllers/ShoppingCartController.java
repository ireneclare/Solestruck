package com.veroniqa.frontend.Controllers;


import java.util.ArrayList;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.logging.Logger;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.RedirectView;

import com.veroniqa.dto.ColorVariantDTO;
import com.veroniqa.dto.LineItemDTO;
import com.veroniqa.dto.ShoppingCart;
import com.veroniqa.dto.ShoppingResponseDTO;
import com.veroniqa.dto.SizeVariantDTO;
import com.veroniqa.frontend.service.ShoppingCartService;
import com.veroniqa.frontend.util.RestClientUtil;
import com.veroniqa.frontend.util.VeroniqaConstants;
import com.veroniqa.frontend.util.VeroniqaCookieUtil;
import com.veroniqa.jdo.Order;
import com.veroniqa.jdo.ProductVariant;

@Controller
public class ShoppingCartController 
{
	private Logger log=Logger.getLogger(ShoppingCartController.class.getSimpleName());
	
	@RequestMapping("/loadShoppingCart.htm")
	public @ResponseBody ShoppingResponseDTO loadShoppingCart(HttpServletRequest request,HttpServletResponse response) 
	{
		ShoppingResponseDTO res=new ShoppingResponseDTO();
				
		Set<Long> productIds=new HashSet<Long>();
		List<Object> inputList = new ArrayList<Object>();
		try
		{	
			String strOrderId = VeroniqaCookieUtil.getCookieValue(request, "orderid");
			if(strOrderId!=null){
				Long orderId=Long.parseLong(strOrderId);
				inputList.clear();
				inputList.add(orderId);
				Order order=(Order)RestClientUtil.callService(inputList, "getOrderById", "OrderBusinessService");
				if(!"SHOPPING".equalsIgnoreCase(order.getOrderStatus())){
					VeroniqaCookieUtil.deleteCookie(request, response, VeroniqaConstants.ORDER_ID);
					ShoppingCartService.removeShoppingCart(request, orderId);
				}
					
			}
			
			int responseCode=0;
			Long orderId=0l;
			if(strOrderId!=null)
			orderId=Long.parseLong(strOrderId);
			ShoppingCart cart=ShoppingCartService.getShoppingCart(request);
			//Ensure that LineItems are available in inventory.If not,remove them from ShoppingCart as well as from DataStore
			ShoppingCartService shoppingCartService=new ShoppingCartService(cart);
			if(cart!=null && cart.getLineItems()!=null){
				for(LineItemDTO ld:cart.getLineItems()){
					productIds.add(ld.getProductId());
				}
				inputList.clear();
				inputList.add(productIds);
				Map<Long,Set<ColorVariantDTO>> inventoryMap=(Map<Long, Set<ColorVariantDTO>>) RestClientUtil.callService(inputList, "getInventoryDetailForAllProducts", "ShoppingCartBusinessService");
				res.setInventory(inventoryMap);
				Map<Long,Integer> removeItems=new HashMap<Long,Integer>();
				for(LineItemDTO lineItem:cart.getLineItems()){
					int quantityToRemove=-1;
					Set<ColorVariantDTO> colorList=inventoryMap.get(lineItem.getProductId());
					if(colorList!=null){
						for(ColorVariantDTO color:colorList){
							if(!lineItem.getColorId().equals(color.getColorId()))
								continue;
								for(SizeVariantDTO size:color.getSizeVariants()){
									if(size.getProductVariantId().equals(lineItem.getProductVariantId())){
										if(lineItem.getQuantity().intValue()>size.getQuantity().intValue()){
											quantityToRemove=lineItem.getQuantity().intValue()-size.getQuantity().intValue();
											log.info("Quanity is NOT Available for "+size.getProductVariantId());
										}
										else{
											quantityToRemove=0;
											log.info("Quanity is Available for "+size.getProductVariantId());
										}
										break;
									}
								}
						}
					}

					if(quantityToRemove!=0)
						removeItems.put(lineItem.getProductVariantId(),quantityToRemove);
				}
				for(Long variantId:removeItems.keySet()){
					Integer qty=removeItems.get(variantId);
					responseCode=shoppingCartService.removeItem(variantId, qty, orderId);
					log.info("Response code for the remove item is "+responseCode+" and productVariant is "+variantId);
					if(responseCode>0)
						ShoppingCartService.saveShoppingCart(cart, request, orderId);
				}
			}
			
			res.setShoppingCart(cart);
			log.info("List of products are "+productIds.size());
			
			
			
			
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the loadShoppingCart : "+e.getMessage());
			e.printStackTrace();
		}
		return res;
	}
	
	@RequestMapping(value="/addItemToCart.htm")
	public @ResponseBody ShoppingResponseDTO addItemtoCart(@RequestBody LineItemDTO lineItemDTO,@RequestParam("detailLevel") Integer detailLevel,
			HttpServletRequest request,HttpServletResponse response)
	{
		ShoppingResponseDTO shoppingResponse=new ShoppingResponseDTO();
		try{
			String strOrderId = VeroniqaCookieUtil.getCookieValue(request, "orderid");
			ShoppingCart shoppingCart = null;			
			Integer addItemResult = 0;
			
	        if (strOrderId==null || "".equals(strOrderId.trim())) 
	        {
	        	shoppingCart = new ShoppingCart();
	        	ShoppingCartService cartService = new ShoppingCartService(shoppingCart);
	        	String strCustomerId=VeroniqaCookieUtil.getCookieValue(request,"customerId");
	        	Long customerId=null;
	        	try{
	        		if(strCustomerId!=null)
	        			customerId=Long.parseLong(strCustomerId);
	        	}
	        	catch(Exception e){
	        		log.warning("Exception while parsing CustomerId:"+e);
	        	}
				Long orderId = cartService.addItemAfresh(lineItemDTO,customerId);
				Cookie cookie = VeroniqaCookieUtil.createNewCookie(request, response, "orderid", orderId.toString(),365*24*60*60);
		        response.addCookie(cookie); 
		        if(orderId!=null){
		        	addItemResult=1;
		        	ShoppingCartService.saveShoppingCart(shoppingCart,request,orderId);
		        	
		        	//updating real time customer details
		        	String clientid=VeroniqaCookieUtil.getCookieValue(request, "JSESSIONID");
		        	/*if(clientid!=null)
		        		{
		        			Queue q=QueueFactory.getQueue("RealTime");
			        		q.add(withUrl("/setRealTimeCustomerCount.htm")
						    		.param("clientid", clientid).param("orderid", orderId.toString())
						    		.etaMillis(1000L).method(Method.GET));
		        		}*/
		        }
		        			       
	        }
	        else
	        {
	        	Long orderId=Long.parseLong(strOrderId);
	        	shoppingCart=ShoppingCartService.getShoppingCart(request);
	        	ShoppingCartService cartService = new ShoppingCartService(shoppingCart);
	        	addItemResult = cartService.addItem(lineItemDTO,orderId);
				if(addItemResult>0)
				{
					ShoppingCartService.saveShoppingCart(shoppingCart,request);
					
					//updating real time customer details
					String clientid=VeroniqaCookieUtil.getCookieValue(request, "JSESSIONID");
		        	/*if(clientid!=null){
		        		Queue q=QueueFactory.getQueue("RealTime");
		        		q.add(withUrl("/setRealTimeCustomerCount.htm")
					    		.param("clientid", clientid).param("orderid", orderId.toString())
					    		.etaMillis(1000L).method(Method.GET));
		        	}*/
		        	
				}
					
	        }

			
			Set<ColorVariantDTO> colorList=null;
			Map<Long,Set<ColorVariantDTO>> inventoryMap=new HashMap<Long,Set<ColorVariantDTO>>();
			
			if(detailLevel==1){
				colorList=getInventoryForProduct(lineItemDTO.getProductId());
				inventoryMap.put(lineItemDTO.getProductId(), colorList);
			}
			else if(detailLevel==2){
				Set<Long> productIdList=new HashSet<Long>();
				for(LineItemDTO item:shoppingCart.getLineItems())
					productIdList.add(item.getProductId());
					List<Object> inputList = new ArrayList<Object>();
					inputList.add(productIdList);
					inventoryMap=(Map<Long, Set<ColorVariantDTO>>) RestClientUtil.callService(inputList, "getInventoryDetailForAllProducts", "ShoppingCartBusinessService");		
				
			}
			shoppingResponse.setInventory(inventoryMap);
			shoppingResponse.setResponseCode(addItemResult);
			shoppingResponse.setShoppingCart(shoppingCart);
			
		}
		catch(Exception e){
			log.warning("Exception in addItemtoCart : "+e);
		}
		return shoppingResponse;
	}
	
	@RequestMapping("/deleteItems.htm")
	public @ResponseBody ShoppingResponseDTO removeItem(@RequestParam("variantId")Long variantId,HttpServletRequest request)
	{
		ShoppingResponseDTO shoppingResponse=new ShoppingResponseDTO();
		try
		{
			String strOrderId = VeroniqaCookieUtil.getCookieValue(request, "orderid");
			ShoppingCart cart=ShoppingCartService.getShoppingCart(request);
			ShoppingCartService scs=new ShoppingCartService(cart);
			Integer responseCode=scs.removeItem(variantId,-1,Long.parseLong(strOrderId));
			if(responseCode>0)
			{
				ShoppingCartService.saveShoppingCart(cart,request);
				//updating real time customer details
				String clientid=VeroniqaCookieUtil.getCookieValue(request, "JSESSIONID");
	        	/*if(clientid!=null)
	        	{
	        		Queue q=QueueFactory.getQueue("RealTime");
	        		q.add(withUrl("/setRealTimeCustomerCount.htm")
				    		.param("clientid", clientid).param("orderid", strOrderId)
				    		.etaMillis(1000L).method(Method.GET));
	        	}*/
	        		
			}
			shoppingResponse.setInventory(null);
			shoppingResponse.setResponseCode(responseCode);
			shoppingResponse.setShoppingCart(cart);
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the removeItem "+e);
		}
		return shoppingResponse;
	}
	
	@RequestMapping("/updateLineItem.htm")
	public @ResponseBody ShoppingResponseDTO updateLineItem(@RequestBody LineItemDTO lineItemDTO,
			@RequestParam("oldVariantId") Long oldVariantId,HttpServletRequest request)
	{		
		ShoppingResponseDTO shoppingResponse=new ShoppingResponseDTO();
		try
		{
			String strOrderId = VeroniqaCookieUtil.getCookieValue(request, "orderid");
			ShoppingCart cart=ShoppingCartService.getShoppingCart(request);
			ShoppingCartService scs=new ShoppingCartService(cart);
			Integer responseCode=scs.updateItem(oldVariantId, lineItemDTO,Long.parseLong(strOrderId));
			if(responseCode>0)
			{
				ShoppingCartService.saveShoppingCart(cart,request);
				//updating real time customer details
				String clientid=VeroniqaCookieUtil.getCookieValue(request, "JSESSIONID");
	        	/*if(clientid!=null)
	        	{
	        		Queue q=QueueFactory.getQueue("RealTime");
	        		q.add(withUrl("/setRealTimeCustomerCount.htm")
				    		.param("clientid", clientid).param("orderid", strOrderId)
				    		.etaMillis(1000L).method(Method.GET));
	        	}*/
			}
			shoppingResponse.setResponseCode(responseCode);
			shoppingResponse.setShoppingCart(cart);
			shoppingResponse.setInventory(null);//While updating we need not to send back the inventory details
			//ShoppingCartService.saveShoppingCart(cart, request);
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the updateLineItem "+e);
		}
		return shoppingResponse;
	}
	
	@RequestMapping("/updateQuantity.htm")
	public @ResponseBody ShoppingResponseDTO updateQuantity(@RequestParam("variantId") Long variantId,
			@RequestParam("quantity") Integer quantity,HttpServletRequest request)
	{		
		ShoppingResponseDTO shoppingResponse=new ShoppingResponseDTO();
		try
		{
			log.info("Inside updateQuantity.VariantID "+variantId+" quantity "+quantity);
			String strOrderId = VeroniqaCookieUtil.getCookieValue(request, "orderid");
			Long orderId=Long.parseLong(strOrderId);
			ShoppingCart cart=ShoppingCartService.getShoppingCart(request);
			ShoppingCartService cartService=new ShoppingCartService(cart);
			Integer result=cartService.updateQuantity(variantId, quantity, orderId);
			if(result>0)
				ShoppingCartService.saveShoppingCart(cart,request);
			shoppingResponse.setInventory(null);
			shoppingResponse.setResponseCode(result);
			shoppingResponse.setShoppingCart(cart);			
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the updateQuantity "+e);
		}
		return shoppingResponse;
	}
	
	@RequestMapping("/getInventoryForProduct.htm")
	public @ResponseBody Set<ColorVariantDTO> getInventoryForProduct(@RequestParam("productId") Long productId) 
	{
		Set<ColorVariantDTO> retVal=null;
		List<Object> inputList = new ArrayList<Object>();
		try
		{
			inputList.add(productId);
			retVal=(Set<ColorVariantDTO>) RestClientUtil.callService(inputList, "getInventoryDetailForProduct", "ShoppingCartBusinessService");
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the getInventoryForProduct "+e.getMessage());
			e.printStackTrace();
		}
		return retVal;
	}
	
	/*@RequestMapping("/getItemsInCart.htm")
	public @ResponseBody List<LineItemDTO> getItemsInCart(HttpServletRequest request)
	{
		//ShoppingCartService scsc =new ShoppingCartService();
		String strOrderId = VeroniqaCookieUtil.getCookieValue(request, "orderid");
		List<LineItemDTO> retVal=null;
		try
		{
			if(strOrderId!=null)
			retVal=ShoppingCartService.getAllLineItems(new Long(strOrderId));
		}
		catch(Exception e)
		{
			log.warning("An exception occured in getItemsInCart "+e);
		}
		return retVal;
	}*/
	
	@RequestMapping("/addToCartFromMail.htm")
	public ModelAndView addToCartFromMail(@RequestParam("color")Long colorid,@RequestParam("size")Double size,
			@RequestParam("prodid")Long productid,HttpServletResponse res,HttpServletRequest req)
	{
		log.info("Inside add to cart mail");
		ModelAndView mv=new ModelAndView(new RedirectView("/"));
		try
		{
			LineItemDTO ld=new LineItemDTO();
			List inputList=new ArrayList();
			inputList.add(productid);
			inputList.add(colorid);			
			inputList.add(size);
	        ProductVariant pv=(ProductVariant) RestClientUtil.callService(inputList, "getProductDetailsForColorAndSize","ProductDetailBusinessService");
/*	        
	        ld.setIsPreOrder(false);
	        ld.setProductName("test");
	        ld.setColorName("");
	        ld.setVendorName("vendor");
	        ld.setSize(size+"");
	        
	        ld.setQuantity(1);
	        ld.setProductVariantId(pv.getProductvariantkey().getId());
	        if(pv.getSaleprice()!=null&&pv.getSaleprice()>0.0)
	          ld.setUnitPrice(pv.getSaleprice());
	        else
	        	ld.setUnitPrice(pv.getRetailprice());
	        ld.setProductId(productid);
	        ld.setColorId(colorid);*/
	        String strOrderId = VeroniqaCookieUtil.getCookieValue(req, "orderid");
			ShoppingCart shoppingCart = null;			
			Integer addItemResult = 0;
			
	        if (strOrderId==null || "".equals(strOrderId.trim())) 
	        {
	        	shoppingCart = new ShoppingCart();
	        	ShoppingCartService cartService = new ShoppingCartService(shoppingCart);
	        	String strCustomerId=VeroniqaCookieUtil.getCookieValue(req,"customerId");
	        	Long customerId=null;
	        	try{
	        		if(strCustomerId!=null)
	        			customerId=Long.parseLong(strCustomerId);
	        	}
	        	catch(Exception e){
	        		log.warning("Exception while parsing CustomerId:"+e);
	        	}
				shoppingCart = cartService.addItemAfresh(pv.getProductvariantkey().getId(),1,null,req,res);		        
		        			       
	        }
	        else
	        {
	        	Long orderId=Long.parseLong(strOrderId);
	        	shoppingCart=ShoppingCartService.getShoppingCart(req);
	        	ShoppingCartService cartService = new ShoppingCartService(shoppingCart);
	        	addItemResult = cartService.addItem(pv.getProductvariantkey().getId(),1,orderId,req);

	        }
	        res.sendRedirect("/homePage.htm?from=mail");
	       
			
		}
		catch(Exception e)
		{
			log.info("Exception in add to cart from mail");
		}
		return mv;
	}
	
}
