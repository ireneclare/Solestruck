package com.veroniqa.dto;

import java.io.Serializable;
import java.util.Date;


public class ShipmentDTO implements Serializable {

	private static final long serialVersionUID = 5088605690795217119L;

	private Long key;	

	private Long orderKey;

	private Double weight;
	
	private Date shippedDate;
	
	private String packageDimension;
	
	private String trackingNumber;	

	private Double shippingTotalCharge;
	
	private Long shippingServiceKey;
	
	private byte[] labelImage;
	
	private Boolean isReturn;
	
	private Integer statusCode;
	
	private Boolean deleted;

	public Long getKey() {
		return key;
	}

	public void setKey(Long key) {
		this.key = key;
	}

	public Long getOrderKey() {
		return orderKey;
	}

	public void setOrderKey(Long orderKey) {
		this.orderKey = orderKey;
	}

	public Double getWeight() {
		return weight;
	}

	public void setWeight(Double weight) {
		this.weight = weight;
	}

	public Date getShippedDate() {
		return shippedDate;
	}

	public void setShippedDate(Date shippedDate) {
		this.shippedDate = shippedDate;
	}

	public String getPackageDimension() {
		return packageDimension;
	}

	public void setPackageDimension(String packageDimension) {
		this.packageDimension = packageDimension;
	}

	public String getTrackingNumber() {
		return trackingNumber;
	}

	public void setTrackingNumber(String trackingNumber) {
		this.trackingNumber = trackingNumber;
	}

	public Double getShippingTotalCharge() {
		return shippingTotalCharge;
	}

	public void setShippingTotalCharge(Double shippingTotalCharge) {
		this.shippingTotalCharge = shippingTotalCharge;
	}

	public Long getShippingServiceKey() {
		return shippingServiceKey;
	}

	public void setShippingServiceKey(Long shippingServiceKey) {
		this.shippingServiceKey = shippingServiceKey;
	}

	public byte[] getLabelImage() {
		return labelImage;
	}

	public void setLabelImage(byte[] labelImage) {
		this.labelImage = labelImage;
	}
	
	public Boolean getIsReturn() {
		return isReturn;
	}

	public void setIsReturn(Boolean isReturn) {
		this.isReturn = isReturn;
	}

	public Integer getStatusCode() {
		return statusCode;
	}

	public void setStatusCode(Integer statusCode) {
		this.statusCode = statusCode;
	}

	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}
	
	
}
