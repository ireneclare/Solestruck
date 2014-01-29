package com.veroniqa.dto;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;

public class WishListItemDTO implements Serializable
{

	/**
	 * 
	 */
	private static final long serialVersionUID = -9147960172150158481L;
	private Long wishListItemId;
	private String productName;
	private Long productId;
	private String color;
	private Long colorid;
	private Double size;
	private Double price;
	private Double salePrice;
	private String vendorName;
	private Long vendorId;
	private Boolean isPreOrder;
	private HashMap<Long,String> colorMap;
	private Integer availableInventory;
	private List<SizeQuantityPriceDTO> sizeQtyPriceList;
	private Long productVariantId;
	private Boolean available;
	
	public Boolean getAvailable() {
		return available;
	}
	public void setAvailable(Boolean available) {
		this.available = available;
	}
	
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
	public Long getWishListItemId() {
		return wishListItemId;
	}
	public void setWishListItemId(Long wishListItemId) {
		this.wishListItemId = wishListItemId;
	}
	public String getVendorName() {
		return vendorName;
	}
	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
	}
	public Long getVendorId() {
		return vendorId;
	}
	public void setVendorId(Long vendorId) {
		this.vendorId = vendorId;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public Long getColorid() {
		return colorid;
	}
	public void setColorid(Long colorid) {
		this.colorid = colorid;
	}
	public Double getSize() {
		return size;
	}
	public void setSize(Double size) {
		this.size = size;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public HashMap<Long, String> getColorMap() {
		return colorMap;
	}
	public void setColorMap(HashMap<Long, String> colorMap) {
		this.colorMap = colorMap;
	}
	public List<SizeQuantityPriceDTO> getSizeQtyPriceList() {
		return sizeQtyPriceList;
	}
	public void setSizeQtyPriceList(List<SizeQuantityPriceDTO> sizeQtyPriceList) {
		this.sizeQtyPriceList = sizeQtyPriceList;
	}
	public Double getSalePrice() {
		return salePrice;
	}
	public void setSalePrice(Double salePrice) {
		this.salePrice = salePrice;
	}
	public Integer getAvailableInventory() {
		return availableInventory;
	}
	public void setAvailableInventory(Integer availableInventory) {
		this.availableInventory = availableInventory;
	}

}
