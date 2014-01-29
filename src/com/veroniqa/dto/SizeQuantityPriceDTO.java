package com.veroniqa.dto;

import java.io.Serializable;

/**
 * @author behara.satya
 *
 */
public class SizeQuantityPriceDTO  implements Serializable{

	private static final long serialVersionUID = 12314L;
	private String price,size,quantity;
	private String wholesalePrice, salePrice;
	private Boolean isPreOrder;
	private Long proVarID;
	
	public Long getProVarID() {
		return proVarID;
	}

	public void setProVarID(Long proVarID) {
		this.proVarID = proVarID;
	}

	public String getPrice() {
		return price;
	}

	public void setPrice(String price) {
		this.price = price;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String size) {
		this.size = size;
	}

	public String getQuantity() {
		return quantity;
	}

	public void setQuantity(String quantity) {
		this.quantity = quantity;
	}

	public String getWholesalePrice() {
		return wholesalePrice;
	}

	public void setWholesalePrice(String wholesalePrice) {
		this.wholesalePrice = wholesalePrice;
	}

	public String getSalePrice() {
		return salePrice;
	}

	public void setSalePrice(String salePrice) {
		this.salePrice = salePrice;
	}

	public Boolean getIsPreOrder() {
		return isPreOrder;
	}

	public void setIsPreOrder(Boolean isPreOrder) {
		this.isPreOrder = isPreOrder;
	}
	
}
