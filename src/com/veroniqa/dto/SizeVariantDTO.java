package com.veroniqa.dto;

import java.io.Serializable;

/**
 * By SHI
 * This class represents a size variant for a colour of a product 
 */
public class SizeVariantDTO implements Serializable,Comparable {
	
	private static final long serialVersionUID = 173442430829756622L;
	
	private Long productVariantId;
	private String size;
	private Integer quantity;
	private Double retailPrice;
	private Double salePrice;
	private Boolean isPreOrder;
	
	
	public Boolean getIsPreOrder() {
		return isPreOrder;
	}
	public void setIsPreOrder(Boolean isPreOrder) {
		this.isPreOrder = isPreOrder;
	}
	public Long getProductVariantId() {
		return productVariantId;
	}
	public void setProductVariantId(Long productVariantId) {
		this.productVariantId = productVariantId;
	}
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}
	public Integer getQuantity() {
		return quantity;
	}
	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}
	public Double getRetailPrice() {
		return retailPrice;
	}
	public void setRetailPrice(Double retailPrice) {
		this.retailPrice = retailPrice;
	}
	public Double getSalePrice() {
		return salePrice;
	}
	public void setSalePrice(Double salePrice) {
		this.salePrice = salePrice;
	}
	
	
	@Override
	public int compareTo(Object o) {
		if(new Double(this.size).doubleValue()==new Double(((SizeVariantDTO)o).getSize()).doubleValue())
			return 0;
		else if(new Double(this.size).doubleValue()>new Double(((SizeVariantDTO)o).getSize()).doubleValue())
			return 1;
		else
			return -1;
		
	}

}
