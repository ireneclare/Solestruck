package com.veroniqa.dto;

import java.io.Serializable;
import java.util.List;

import com.veroniqa.jdo.Color;
import com.veroniqa.jdo.Product;
import com.veroniqa.jdo.ProductVariant;

public class ProductDTO implements Serializable{
/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
private Long productId;
private String productName;
private String productDesc;
private String vendorName;
private List<ProductVariant> productVariants;
private List<Color> colors;
private Integer votes;
private Boolean nextAvailable;
private Integer toRecord;
private Long vendorId;






public Long getVendorId() {
	return vendorId;
}
public void setVendorId(Long vendorId) {
	this.vendorId = vendorId;
}
public Integer getToRecord() {
	return toRecord;
}
public void setToRecord(Integer toRecord) {
	this.toRecord = toRecord;
}
public Boolean getNextAvailable() {
	return nextAvailable;
}
public void setNextAvailable(Boolean nextAvailable) {
	this.nextAvailable = nextAvailable;
}
public Integer getVotes() {
	return votes;
}
public void setVotes(Integer votes) {
	this.votes = votes;
}
public ProductDTO(Long productId) {
	super();
	this.productId = productId;
}
public ProductDTO() {
	
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

public List<ProductVariant> getProductVariants() {
	return productVariants;
}
public void setProductVariants(List<ProductVariant> productVariants) {
	this.productVariants = productVariants;
}

public List<Color> getColors() {
	return colors;
}
public void setColors(List<Color> colors) {
	this.colors = colors;
}
public void copyFrom(Product product)
{
	this.productId=product.getKey().getId();
	this.productName=product.getName();
	this.productDesc=product.getDescription();
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
	ProductDTO other = (ProductDTO) obj;
	if (productId == null) {
		if (other.productId != null)
			return false;
	} else if (!productId.equals(other.productId))
		return false;
	return true;
}



}
