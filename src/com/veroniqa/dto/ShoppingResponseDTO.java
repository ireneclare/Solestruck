package com.veroniqa.dto;

import java.io.Serializable;

import java.util.Map;
import java.util.Set;

/**
 * By SHI
 * 
 * @author This class is used to hold the ShoppingCart,Inventory information for Cart
 * and response code for any ShoppingCart actions
 *
 */
public class ShoppingResponseDTO implements Serializable {

	private static final long serialVersionUID = 3659637087764940711L;
	
	private ShoppingCart shoppingCart;
	private Map<Long,Set<ColorVariantDTO>> inventory;
	private Integer responseCode;
	public ShoppingCart getShoppingCart() {
		return shoppingCart;
	}
	public void setShoppingCart(ShoppingCart shoppingCart) {
		this.shoppingCart = shoppingCart;
	}
	public Map<Long, Set<ColorVariantDTO>> getInventory() {
		return inventory;
	}
	public void setInventory(Map<Long, Set<ColorVariantDTO>> inventory) {
		this.inventory = inventory;
	}
	public Integer getResponseCode() {
		return responseCode;
	}
	public void setResponseCode(Integer responseCode) {
		this.responseCode = responseCode;
	}
	
	

}
