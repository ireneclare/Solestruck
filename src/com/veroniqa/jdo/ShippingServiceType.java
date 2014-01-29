package com.veroniqa.jdo;

import java.io.Serializable;
import java.util.Date;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.Text;

/**
 * 
 * @author k3g
 *This JDO is used to store the data specific to a Shipping Service.
 */


@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class ShippingServiceType implements Serializable{
	
	private static final long serialVersionUID = 11345001L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private Key shippingService;
	
	@Persistent
	private String name;	
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Date dateDeleted;
	
	@Persistent
	private Boolean enabled;
	
	@Persistent
	private Boolean deleted;	
	
	@Persistent
	private Double singleUnitRate;
	
	@Persistent
	private Double unitIncrementRate;
	
	@Persistent
	private Double shippingCategory;
	
	@Persistent
	private Double freeLimit;
	
	@Persistent
	private Text notification;
	
	@Persistent
	private Integer deliveryDaysLowerLimit;
	
	@Persistent
	private Integer deliveryDaysUpperLimit;
	
	@Persistent
	private Boolean freeForReturningCustomer;
	
	
	
	public Boolean getFreeForReturningCustomer() {
		return freeForReturningCustomer;
	}

	public void setFreeForReturningCustomer(Boolean freeForReturningCustomer) {
		this.freeForReturningCustomer = freeForReturningCustomer;
	}

	public Double getFreeLimit() {
		return freeLimit;
	}

	public void setFreeLimit(Double freeLimit) {
		this.freeLimit = freeLimit;
	}

	public String getNotification() {
		return notification.getValue();
	}

	public void setNotification(String notification) {
		this.notification =new Text( notification);
	}

	public Integer getDeliveryDaysLowerLimit() {
		return deliveryDaysLowerLimit;
	}

	public void setDeliveryDaysLowerLimit(Integer deliveryDaysLowerLimit) {
		this.deliveryDaysLowerLimit = deliveryDaysLowerLimit;
	}

	public Integer getDeliveryDaysUpperLimit() {
		return deliveryDaysUpperLimit;
	}

	public void setDeliveryDaysUpperLimit(Integer deliveryDaysUpperLimit) {
		this.deliveryDaysUpperLimit = deliveryDaysUpperLimit;
	}

	public Double getShippingCategory() {
		return shippingCategory;
	}

	public void setShippingCategory(Double shippingCategory) {
		this.shippingCategory = shippingCategory;
	}

	public Double getSingleUnitRate() {
		return singleUnitRate;
	}

	public void setSingleUnitRate(Double singleUnitRate) {
		this.singleUnitRate = singleUnitRate;
	}

	public Double getUnitIncrementRate() {
		return unitIncrementRate;
	}

	public void setUnitIncrementRate(Double unitIncrementRate) {
		this.unitIncrementRate = unitIncrementRate;
	}

	public Key getShippingService() {
		return shippingService;
	}

	public void setShippingService(Key shippingService) {
		this.shippingService = shippingService;
	}

	public Date getDateDeleted() {
		return dateDeleted;
	}

	public void setDateDeleted(Date dateDeleted) {
		this.dateDeleted = dateDeleted;
	}

	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}

	public Boolean getEnabled() {
		return enabled;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}	
		
	
	public void copy(ShippingServiceType brand) {
		this.setShippingService(brand.getShippingService());
		this.setSingleUnitRate(brand.getSingleUnitRate());
		this.setUnitIncrementRate(brand.getUnitIncrementRate());
		this.setDateAdded(brand.getDateAdded());
		this.setEnabled(brand.getEnabled());
		this.setName(brand.getName());
		this.setDeleted(brand.getDeleted());
		this.setDateDeleted(brand.getDateDeleted());
		this.setDeliveryDaysLowerLimit(brand.getDeliveryDaysLowerLimit());
		this.setDeliveryDaysUpperLimit(brand.getDeliveryDaysUpperLimit());
		this.setFreeLimit(brand.getFreeLimit());
		this.setNotification(brand.getNotification());
		this.setFreeForReturningCustomer(brand.getFreeForReturningCustomer());
		
	}

}
