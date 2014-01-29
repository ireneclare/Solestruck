package com.veroniqa.dto;

import java.io.Serializable;

import com.veroniqa.jdo.ShippingService;
import com.veroniqa.jdo.ShippingServiceType;
import com.veroniqa.jdo.ShippingServiceZone;


public class ShippingServiceTypeDTO implements Serializable{

	/**@author SHI
	 * This class is used to hold detailed information of ShippingServiceType JDO 
	 * such as ServiceName,ServiceTypeName ... 
	 */
	private static final long serialVersionUID = -581186802903182024L;
	
	private Long shippingServiceId;
	
	private Long shippingServiceTypeId;
	
	private String shippingServiceName;
	
	private String shippingServiceTypeName;
	
	private Double singleUnitRate=0.0;
	
	private Double unitIncrementRate=0.0;
	
	private Double shippingCategory=0.0;
	
	private Double freeLimit=0.0;
	
	private Integer deliveryDaysLowerLimit=0;
	
	private Integer deliveryDaysUpperLimit=0;
	
	private Boolean freeForReturningCustomer=false;
	
	private String estimatedDelivery;

	public Long getShippingServiceId() {
		return shippingServiceId;
	}

	public void setShippingServiceId(Long shippingServiceId) {
		this.shippingServiceId = shippingServiceId;
	}

	public Long getShippingServiceTypeId() {
		return shippingServiceTypeId;
	}

	public void setShippingServiceTypeId(Long shippingServiceTypeId) {
		this.shippingServiceTypeId = shippingServiceTypeId;
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
	
	
	public String getEstimatedDelivery() {
		return estimatedDelivery;
	}

	public void setEstimatedDelivery(String estimatedDelivery) {
		this.estimatedDelivery = estimatedDelivery;
	}

	public void copy(ShippingService service,ShippingServiceType serviceType)
	{
		if(service!=null)
		{
			if(service.getKey()!=null) 
				this.setShippingServiceId(service.getKey().getId());
			if(service.getName()!=null)
				this.setShippingServiceName(service.getName());
		}
		if(serviceType!=null)
		{
			if(serviceType.getKey()!=null)
				this.setShippingServiceTypeId(serviceType.getKey().getId());
			if(serviceType.getName()!=null)
				this.setShippingServiceTypeName(serviceType.getName());
			if(serviceType.getSingleUnitRate()!=null)
				this.setSingleUnitRate(serviceType.getSingleUnitRate());
			if(serviceType.getUnitIncrementRate()!=null)
				this.setUnitIncrementRate(serviceType.getUnitIncrementRate());
			if(serviceType.getShippingCategory()!=null)
				this.setShippingCategory(serviceType.getShippingCategory());
			if(serviceType.getFreeLimit()!=null)
				this.setFreeLimit(serviceType.getFreeLimit());
			if(serviceType.getDeliveryDaysLowerLimit()!=null)
				this.setDeliveryDaysLowerLimit(serviceType.getDeliveryDaysLowerLimit());
			if(serviceType.getDeliveryDaysUpperLimit()!=null)
				this.setDeliveryDaysUpperLimit(serviceType.getDeliveryDaysUpperLimit());
			if(serviceType.getFreeForReturningCustomer()!=null)
				this.setFreeForReturningCustomer(serviceType.getFreeForReturningCustomer());		
		}
	}
	public void copy(ShippingService service,ShippingServiceZone serviceZone)
	{
		if(service!=null)
		{
			if(service.getKey()!=null) 
				this.setShippingServiceId(service.getKey().getId());
			if(service.getName()!=null)
				this.setShippingServiceName(service.getName());
		}
		if(serviceZone!=null)
		{
			if(serviceZone.getKey()!=null)
				this.setShippingServiceTypeId(serviceZone.getKey().getId());
			if(serviceZone.getShippingServiceTypeName()!=null)
				this.setShippingServiceTypeName(serviceZone.getShippingServiceTypeName());
			if(serviceZone.getSingleUnitRate()!=null)
				this.setSingleUnitRate(serviceZone.getSingleUnitRate());
			if(serviceZone.getUnitIncrementRate()!=null)
				this.setUnitIncrementRate(serviceZone.getUnitIncrementRate());
			if(serviceZone.getShippingCategory()!=null)
				this.setShippingCategory(serviceZone.getShippingCategory());
			if(serviceZone.getFreeLimit()!=null)
				this.setFreeLimit(serviceZone.getFreeLimit());
			if(serviceZone.getDeliveryDaysLowerLimit()!=null)
				this.setDeliveryDaysLowerLimit(serviceZone.getDeliveryDaysLowerLimit());
			if(serviceZone.getDeliveryDaysUpperLimit()!=null)
				this.setDeliveryDaysUpperLimit(serviceZone.getDeliveryDaysUpperLimit());
			if(serviceZone.getFreeForReturningCustomer()!=null)
				this.setFreeForReturningCustomer(serviceZone.getFreeForReturningCustomer());		
		}
	}
}
