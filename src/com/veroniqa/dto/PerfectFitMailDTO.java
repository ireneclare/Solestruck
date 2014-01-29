package com.veroniqa.dto;

import java.io.Serializable;
import java.util.Date;

public class PerfectFitMailDTO implements Serializable{
	
	private static final long serialVersionUID = 1522411L;
	
	
	private Long productId;
	
	private Long colorId;
	
	private Double size;
	
	private String vendorName;
	
	private String productName;
	
	private Double retailPrice;
	
	private Boolean qtyAvlbl;
	
	private String custEmailID;
	
	private Long dontSeeYourSizeID;

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public Long getColorId() {
		return colorId;
	}

	public void setColorId(Long colorId) {
		this.colorId = colorId;
	}

	public Double getSize() {
		return size;
	}

	public void setSize(Double size) {
		this.size = size;
	}

	public Boolean getQtyAvlbl() {
		return qtyAvlbl;
	}

	public void setQtyAvlbl(Boolean qtyAvlbl) {
		this.qtyAvlbl = qtyAvlbl;
	}

	public String getCustEmailID() {
		return custEmailID;
	}

	public void setCustEmailID(String custEmailID) {
		this.custEmailID = custEmailID;
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

	public Double getRetailPrice() {
		return retailPrice;
	}

	public void setRetailPrice(Double retailPrice) {
		this.retailPrice = retailPrice;
	}

	public Long getDontSeeYourSizeID() {
		return dontSeeYourSizeID;
	}

	public void setDontSeeYourSizeID(Long dontSeeYourSizeID) {
		this.dontSeeYourSizeID = dontSeeYourSizeID;
	}

	
	
	

}
