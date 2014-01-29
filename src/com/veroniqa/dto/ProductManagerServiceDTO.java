package com.veroniqa.dto;

import java.io.Serializable;
import java.util.Date;

public class ProductManagerServiceDTO implements Serializable{
	
	private static final long serialVersionUID = 1522411L;
	
	
	private String productId;
	
	private Long productVariantId;
	
	private String colorId;
	
	private String brandId;
	
	private String size;
	
	private Integer qty;
	
	private Double wholeSalePrice;
	
	private Double salePrice;
	
	private Double retailPrice;
	
	private Double markupPercentage;
	
	private Long geographicalWarehouseLocationKey;
	
	private Long productUnitLocationId;
	
	private String row;
	
	private String section;
	
	private String shelf;
	
	private Double productHeight;
	
	private Double productWidth;
	
	private Double productWeight;
	
	private Boolean preorder;
	
	private Boolean newArrival;
	
	private Boolean showShoeArchived;
	
	private Boolean showOnSite;
	
	private String UPC="";

	
	public String getUPC() {
		return UPC;
	}

	public void setUPC(String uPC) {
		UPC = uPC;
	}

	
	public Double getProductWeight() {
		return productWeight;
	}

	public void setProductWeight(Double productWeight) {
		this.productWeight = productWeight;
	}

	public String getProductId() {
		return productId;
	}

	public void setProductId(String productId) {
		this.productId = productId;
	}

	public String getColorId() {
		return colorId;
	}

	public void setColorId(String colorId) {
		this.colorId = colorId;
	}

	public String getBrandId() {
		return brandId;
	}

	public void setBrandId(String brandId) {
		this.brandId = brandId;
	}

	public String getSize() {
		return size;
	}

	public void setSize(String sizeId) {
		this.size = sizeId;
	}

	public Integer getQty() {
		return qty;
	}

	public void setQty(Integer qty) {
		this.qty = qty;
	}

	public Double getWholeSalePrice() {
		return wholeSalePrice;
	}

	public void setWholeSalePrice(Double wholeSalePrice) {
		this.wholeSalePrice = wholeSalePrice;
	}

	public Double getSalePrice() {
		return salePrice;
	}

	public void setSalePrice(Double salePrice) {
		this.salePrice = salePrice;
	}

	public Double getRetailPrice() {
		return retailPrice;
	}

	public Double getMarkupPercentage() {
		return markupPercentage;
	}

	public void setMarkupPercentage(Double markupPercentage) {
		this.markupPercentage = markupPercentage;
	}

	public void setRetailPrice(Double retailPrice) {
		this.retailPrice = retailPrice;
	}

	public Long getGeographicalWarehouseLocationKey() {
		return geographicalWarehouseLocationKey;
	}

	public void setGeographicalWarehouseLocationKey(
			Long geographicalWarehouseLocationKey) {
		this.geographicalWarehouseLocationKey = geographicalWarehouseLocationKey;
	}



	public Double getProductHeight() {
		return productHeight;
	}

	public void setProductHeight(Double productHeight) {
		this.productHeight = productHeight;
	}

	public Double getProductWidth() {
		return productWidth;
	}

	public void setProductWidth(Double productWidth) {
		this.productWidth = productWidth;
	}

	public Boolean getPreorder() {
		return preorder;
	}

	public void setPreorder(Boolean preorder) {
		this.preorder = preorder;
	}

	public Boolean getNewArrival() {
		return newArrival;
	}

	public void setNewArrival(Boolean newArrival) {
		this.newArrival = newArrival;
	}

	public Boolean getShowShoeArchived() {
		return showShoeArchived;
	}

	public void setShowShoeArchived(Boolean showShoeArchived) {
		this.showShoeArchived = showShoeArchived;
	}

	public Boolean getShowOnSite() {
		return showOnSite;
	}

	public void setShowOnSite(Boolean showOnSite) {
		this.showOnSite = showOnSite;
	}

	public Long getProductUnitLocationId() {
		return productUnitLocationId;
	}

	public void setProductUnitLocationId(Long productUnitLocationId) {
		this.productUnitLocationId = productUnitLocationId;
	}

	public void setRow(String row) {
		this.row = row;
	}

	public void setSection(String section) {
		this.section = section;
	}

	public void setShelf(String shelf) {
		this.shelf = shelf;
	}

	public String getRow() {
		return row;
	}

	public String getSection() {
		return section;
	}

	public String getShelf() {
		return shelf;
	}

	public Long getProductVariantId() {
		return productVariantId;
	}

	public void setProductVariantId(Long productVariantId) {
		this.productVariantId = productVariantId;
	}
	
	
	
		
	

}
