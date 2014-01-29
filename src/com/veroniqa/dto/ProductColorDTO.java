package com.veroniqa.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;
import java.util.LinkedHashMap;

import com.google.appengine.api.datastore.Key;
import com.veroniqa.jdo.Color;
import com.veroniqa.jdo.ProductVariant;

public class ProductColorDTO implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long productId;
	private String productName;
	private String productDesc;
	private String vendorName;
	private Boolean nextAvailable;
	private Integer toRecord;
	private LinkedHashMap<Color,List<ProductVariant>> colorVariant=new LinkedHashMap<Color,List<ProductVariant>>();
	private List<Color> colors;

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
	public LinkedHashMap<Color, List<ProductVariant>> getColorVariant() {
		return colorVariant;
	}
	public void setColorVariant(
			LinkedHashMap<Color, List<ProductVariant>> colorVariant) {
		this.colorVariant = colorVariant;
	}
	public Boolean getNextAvailable() {
		return nextAvailable;
	}
	public void setNextAvailable(Boolean nextAvailable) {
		this.nextAvailable = nextAvailable;
	}
	public Integer getToRecord() {
		return toRecord;
	}
	public void setToRecord(Integer toRecord) {
		this.toRecord = toRecord;
	}
	public List<Color> getColors() {
		return colors;
	}
	public void setColors(List<Color> colors) {
		this.colors = colors;
	}
}
