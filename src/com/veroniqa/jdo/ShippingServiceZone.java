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
public class ShippingServiceZone implements Serializable{
	
	private static final long serialVersionUID = 11345001L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private Key shippingService;
	
	@Persistent
	private Key shippingServiceType;
	
	@Persistent
	private Key brandKey;
	
	@Persistent
	private String shippingServiceName;
	
	@Persistent
	private String shippingServiceTypeName;
	
	@Persistent
	private String countryCode;	
	
	@Persistent
	private String stateCode;	

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
	
	
	

	public String getStateCode() {
		return stateCode;
	}

	public void setStateCode(String stateCode) {
		this.stateCode = stateCode;
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

	public Double getShippingCategory() {
		return shippingCategory;
	}

	public void setShippingCategory(Double shippingCategory) {
		this.shippingCategory = shippingCategory;
	}

	public Double getFreeLimit() {
		return freeLimit;
	}

	public void setFreeLimit(Double freeLimit) {
		this.freeLimit = freeLimit;
	}

	public Text getNotification() {
		return notification;
	}

	public void setNotification(Text notification) {
		this.notification = notification;
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

	public Boolean getFreeForReturningCustomer() {
		return freeForReturningCustomer;
	}

	public void setFreeForReturningCustomer(Boolean freeForReturningCustomer) {
		this.freeForReturningCustomer = freeForReturningCustomer;
	}

	public Key getBrandKey() {
		return brandKey;
	}

	public void setBrandKey(Key brandKey) {
		this.brandKey = brandKey;
	}

	public String getShippingServiceName() {
		return shippingServiceName;
	}

	public void setShippingServiceName(String shippingServiceName) {
		this.shippingServiceName = shippingServiceName;
	}

	public String getShippingServiceTypeName() {
		return shippingServiceTypeName;
	}

	public void setShippingServiceTypeName(String shippingServiceTypeName) {
		this.shippingServiceTypeName = shippingServiceTypeName;
	}

	public Key getShippingServiceType() {
		return shippingServiceType;
	}

	public void setShippingServiceType(Key shippingServiceType) {
		this.shippingServiceType = shippingServiceType;
	}

	public String getCountryCode() {
		return countryCode;
	}

	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
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

	

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}	
		
	
	public void copy(ShippingServiceZone zone) {
		
		if(zone.getShippingService()!=null)
			this.setShippingService(zone.getShippingService());
		if(zone.getShippingServiceType()!=null)
			this.setShippingServiceType(zone.getShippingServiceType());
		if(zone.getShippingServiceName()!=null)
			this.setShippingServiceName(zone.getShippingServiceName());
		if(zone.getShippingServiceTypeName()!=null)
			this.setShippingServiceTypeName(zone.getShippingServiceTypeName());
		if(zone.getDateAdded()!=null)	
			this.setDateAdded(zone.getDateAdded());
		if(zone.getEnabled()!=null)
			this.setEnabled(zone.getEnabled());
		if(zone.getDeleted()!=null)
			this.setDeleted(zone.getDeleted());
		if(zone.getDateDeleted()!=null)
			this.setDateDeleted(zone.getDateDeleted());
		if(zone.getBrandKey()!=null)
			this.setBrandKey(zone.getBrandKey());
		if(zone.getSingleUnitRate()!=null)
			this.setSingleUnitRate(zone.getSingleUnitRate());
		if(zone.getUnitIncrementRate()!=null)
			this.setUnitIncrementRate(zone.getUnitIncrementRate());
		if(zone.getFreeLimit()!=null)
			this.setFreeLimit(zone.getFreeLimit());
		if(zone.getDeliveryDaysLowerLimit()!=null)
			this.setDeliveryDaysLowerLimit(zone.getDeliveryDaysLowerLimit());
		if(zone.getDeliveryDaysUpperLimit()!=null)
			this.setDeliveryDaysUpperLimit(zone.getDeliveryDaysUpperLimit());
		if(zone.getFreeForReturningCustomer()!=null)
			this.setFreeForReturningCustomer(zone.getFreeForReturningCustomer());
		if(zone.getNotification()!=null)
			this.setNotification(zone.getNotification());
		if(zone.getShippingCategory()!=null)
			this.setShippingCategory(zone.getShippingCategory());
		if(zone.getStateCode()!=null)
			this.setStateCode(zone.getStateCode());
		
		
		/*if(freeForReturningCustomer.equals("yes"))
		{
			sz.setFreeForReturningCustomer(true);
		}
		else
		{
			sz.setFreeForReturningCustomer(false);
		}*/
	}

}
