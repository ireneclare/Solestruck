package com.veroniqa.dto;

import java.io.Serializable;

import javax.jdo.annotations.Persistent;

import com.veroniqa.jdo.Product;

public class KoozieDTO implements Serializable
{
	private static final long serialVersionUID = 1L;
	private Long productId;
	private String productName;
	private String productDesc;
	private String vendorName;
	private Long variantId;
	private Long colorId;
	private Double retailPrice;
	private Double salePrice;
	private boolean isSale;
	private boolean isPreorder;
	private Boolean inventoryCheck;
	
	
	public KoozieDTO(Long productId) {
		super();
		this.productId = productId;
	}
	public KoozieDTO() {
		
	}
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductDesc() {
		return productDesc;
	}
	public void setProductDesc(String productDesc) {
		this.productDesc = productDesc;
	}
	public String getVendorName() {
		return vendorName;
	}
	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
	}
	
	public Long getVariantId() {
		return variantId;
	}
	public void setVariantId(Long variantId) {
		this.variantId = variantId;
	}
	public Long getColorId() {
		return colorId;
	}
	public void setColorId(Long colorId) {
		this.colorId = colorId;
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
	public boolean isSale() {
		return isSale;
	}
	public void setSale(boolean isSale) {
		this.isSale = isSale;
	}
	public boolean isPreorder() {
		return isPreorder;
	}
	public void setPreorder(boolean isPreorder) {
		this.isPreorder = isPreorder;
	}
	
	public void copyFrom(Product product)
	{
		this.productId=product.getKey().getId();
		this.productName=product.getName();
		this.productDesc=product.getDescription();
	}
	
	public Boolean getInventoryCheck() {
		return inventoryCheck;
	}
	public void setInventoryCheck(Boolean inventoryCheck) {
		this.inventoryCheck = inventoryCheck;
	}
	
	@Override
	public int hashCode() {
		final int prime = 31;
		int result = 1;
		result = prime * result + ((productId == null) ? 0 : productId.hashCode());
		return result;
	}
	
	@Override
	public boolean equals(Object obj) {
		if (this == obj)
			return true;
		if (obj == null)
			return false;
		if (getClass() != obj.getClass())
			return false;
		KoozieDTO other = (KoozieDTO) obj;
		if (productId == null) {
			if (other.productId != null)
				return false;
		} else if (!productId.equals(other.productId))
			return false;
		return true;
	}
	
	
	
}
