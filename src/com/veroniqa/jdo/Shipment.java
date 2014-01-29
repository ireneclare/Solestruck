package com.veroniqa.jdo;

import java.io.Serializable;
import java.util.Date;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Blob;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.veroniqa.dto.ShipmentDTO;

/**
 * 
 * @author SHI
 * This JDO is used to store shipping details.
 * 
 */

@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class Shipment implements Serializable{

	private static final long serialVersionUID = 6275241114945031688L;

	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Key key;
	
	@Persistent
	private Key orderKey;
	
	@Persistent
	private Double weight;
	
	@Persistent
	private Date shippedDate;
	
	@Persistent
	private String packageDimension;
	
	@Persistent
	private String trackingNumber;
	
	@Persistent
	private Double shippingTotalCharge;
	
	@Persistent
	private Key shippingServiceKey;
	
	@Persistent
	private Blob labelImage;
	
	@Persistent
	private Boolean isReturn;
	
	@Persistent
	private Integer statusCode;//-1=API not yet called. -2=Exception occurred while calling API. 0=Failure returned by API. 1=Success returned by API.
	
	private Boolean deleted;

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public Key getOrderKey() {
		return orderKey;
	}

	public void setOrderKey(Key orderKey) {
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

	public Key getShippingServiceKey() {
		return shippingServiceKey;
	}

	public void setShippingServiceKey(Key shippingServiceKey) {
		this.shippingServiceKey = shippingServiceKey;
	}
	
	public Blob getLabelImage() {
		return labelImage;
	}

	public void setLabelImage(Blob labelImage) {
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
	
	public void copy(Shipment ship)
	{
		this.setOrderKey(ship.getOrderKey());
		this.setPackageDimension(ship.getPackageDimension());
		this.setShippedDate(ship.getShippedDate());
		this.setShippingTotalCharge(ship.getShippingTotalCharge());
		this.setShippingServiceKey(ship.getShippingServiceKey());
		this.setTrackingNumber(ship.getTrackingNumber());
		this.setWeight(ship.getWeight());
		this.setLabelImage(ship.getLabelImage());
		this.setIsReturn(ship.getIsReturn());
		this.setStatusCode(ship.getStatusCode());
	}
	
	public void copy(ShipmentDTO shipment)
	{
		Key myKey=shipment.getKey()==null?null:KeyFactory.createKey(Shipment.class.getSimpleName(), shipment.getKey());
		Key myOrderKey=shipment.getOrderKey()==null?null:KeyFactory.createKey(Order.class.getSimpleName(), shipment.getOrderKey());
		Key myShipmentSerivceKey=shipment.getShippingServiceKey()==null?null:KeyFactory.createKey(ShippingService.class.getSimpleName(), shipment.getShippingServiceKey());
		
		this.setKey(myKey);
		this.setOrderKey(myOrderKey);
		this.setPackageDimension(shipment.getPackageDimension());
		this.setShippingServiceKey(myShipmentSerivceKey);
		this.setShippedDate(shipment.getShippedDate());
		this.setShippingTotalCharge(shipment.getShippingTotalCharge());
		this.setTrackingNumber(shipment.getTrackingNumber());
		this.setWeight(shipment.getWeight());
		Blob myblob=null;
		if(shipment.getLabelImage()!=null)
			myblob=new Blob(shipment.getLabelImage());
		this.setLabelImage(myblob);
		this.setIsReturn(shipment.getIsReturn());
		this.setStatusCode(shipment.getStatusCode());
	}
}
