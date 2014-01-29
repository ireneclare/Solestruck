package com.veroniqa.dto;

import java.io.Serializable;
import java.util.Date;

public class ProductDTOForCategory  implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -2423000638768077698L;
	private String vendorName;
	private String productName;
	private String colorName;
	private Boolean available;
	private String retailPrice;
	private String salePrice;
	private Boolean isNewArrival;
	private Boolean isPreorder;
	private Long productId;
	private Integer inCart=0;
	private Double displayFactor;
	private String socialCategory;
	private Boolean isSale;
	private Date firstVoteAdded;
	
	public String getSocialCategory() {
		return socialCategory;
	}
	public void setSocialCategory(String socialCategory) {
		this.socialCategory = socialCategory;
	}
	
	public Boolean getIsSale() {
		return isSale;
	}
	public void setIsSale(Boolean isSale) {
		this.isSale = isSale;
	}
	
	
	public Long getProductId() {
		return productId;
	}
	public Double getDisplayFactor() {
		return displayFactor;
	}
	public void setDisplayFactor(Double displayFactor) {
		this.displayFactor = displayFactor;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	public String getVendorName() {
		return vendorName;
	}
	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getColorName() {
		return colorName;
	}
	public void setColorName(String colorName) {
		this.colorName = colorName;
	}
	
	public Boolean getAvailable() {
		return available;
	}
	public void setAvailable(Boolean available) {
		this.available = available;
	}
	public String getRetailPrice() {
		return retailPrice;
	}
	public void setRetailPrice(String retailPrice) {
		this.retailPrice = retailPrice;
	}
	public String getSalePrice() {
		return salePrice;
	}
	public void setSalePrice(String salePrice) {
		this.salePrice = salePrice;
	}
	public Boolean getIsNewArrival() {
		return isNewArrival;
	}
	public void setIsNewArrival(Boolean isNewArrival) {
		this.isNewArrival = isNewArrival;
	}
	public Boolean getIsPreorder() {
		return isPreorder;
	}
	public void setIsPreorder(Boolean isPreorder) {
		this.isPreorder = isPreorder;
	}
	public Integer getInCart() {
		return inCart;
	}
	public void setInCart(Integer inCart) {
		this.inCart = inCart;
	}
	public Date getFirstVoteAdded() {
		return firstVoteAdded;
	}
	public void setFirstVoteAdded(Date firstVoteAdded) {
		this.firstVoteAdded = firstVoteAdded;
	}
	
	

	

}
