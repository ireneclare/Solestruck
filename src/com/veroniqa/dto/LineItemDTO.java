package com.veroniqa.dto;

import java.io.Serializable;

public class LineItemDTO implements Serializable {

	/**
	 * This class is used to populate the ShoppingCart details.
	 * SHI
	 */
	private static final long serialVersionUID = -7483745695583220805L;

	private Integer sequenceId;
	private Long productId;
	private Long productVariantId;
	private Long colorId;
	private String productName;
	private String colorName;
	private String vendorName;
	private String size;
	private Integer quantity;
	private Double unitPrice;
	private Double price;
	private Boolean isPreOrder;
	private Boolean isSale;
	private String description;
	private Double discountedPrice;
	private Double retailPrice;
	
	
	
	
	public Double getRetailPrice() {
		return retailPrice;
	}
	public void setRetailPrice(Double retailPrice) {
		this.retailPrice = retailPrice;
	}
	public Double getDiscountedPrice() {
		return discountedPrice;
	}
	public void setDiscountedPrice(Double discountedPrice) {
		this.discountedPrice = discountedPrice;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	public Boolean getIsSale() {
		return isSale;
	}
	public void setIsSale(Boolean isSale) {
		this.isSale = isSale;
	}
	public Boolean getIsPreOrder() {
		return isPreOrder;
	}
	public void setIsPreOrder(Boolean isPreOrder) {
		this.isPreOrder = isPreOrder;
	}
	public Integer getSequenceId() {
		return sequenceId;
	}
	public void setSequenceId(Integer sequenceId) {
		this.sequenceId = sequenceId;
	}
	public Long getProductId() {
		return productId;
	}
	public void setProductId(Long productId) {
		this.productId = productId;
	}
	public Long getProductVariantId() {
		return productVariantId;
	}
	public void setProductVariantId(Long productVariantId) {
		this.productVariantId = productVariantId;
	}
	public Long getColorId() {
		return colorId;
	}
	public void setColorId(Long colorId) {
		this.colorId = colorId;
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
	public String getVendorName() {
		return vendorName;
	}
	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
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
	
	public Double getUnitPrice() {
		return unitPrice;
	}
	public void setUnitPrice(Double unitPrice) {
		this.unitPrice = unitPrice;
	}
	public Double getPrice() {
		return price;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	
	public String getProductImageURL()
	{
		String imageURL="";
		String myVendorName=this.vendorName==null?"":this.vendorName;
		String myColorName=this.colorName==null?"":this.colorName;
		String myProductName=this.productName==null?"":this.productName;
		imageURL="/"+myVendorName.replaceAll(" ","-").toLowerCase()+"-shoes/"+myVendorName.replaceAll(" ","-")+"-shoes-"+myProductName.replaceAll(" ","-")+"-("+myColorName.replaceAll(" ","-")+")-010307.jpg";

		return imageURL;
		
	}
	@Override
	public boolean equals(Object obj) {
		LineItemDTO myItem=(LineItemDTO)obj;
		if(myItem==null)
			return false;
		if(myItem.productVariantId.longValue()==this.productVariantId.longValue())
			return true;
		return false;
	}
	
	public void copy(LineItemDTO dto)
	{
		this.setColorId(dto.getColorId());
		this.setColorName(dto.getColorName());
		this.setPrice(dto.getPrice());
		this.setProductId(dto.getProductId());
		this.setProductName(dto.getProductName());
		this.setProductVariantId(dto.getProductVariantId());
		this.setQuantity(dto.getQuantity());
		this.setSequenceId(dto.getSequenceId());
		this.setSize(dto.getSize());
		this.setUnitPrice(dto.getUnitPrice());
		this.setVendorName(dto.getVendorName());
	}
	
}
