package com.veroniqa.jdo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Entity;
import com.google.appengine.api.datastore.Key;


@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class Order implements Serializable{
	
	private static final long serialVersionUID = 13541L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private Boolean requireSignature=new Boolean(false);
	
	@Persistent
	private Key brandId;
	
	@Persistent
	private String orderNumber;
	
	@Persistent
	private Key customerId;	
	
	@Persistent
	private Date dateOfFirstItemAdded;
	
	@Persistent
	private Date orderPlacedDate;
	
	@Persistent
	private Date orderShippedDate;
	
	@Persistent
	private String orderStatus;
	
	@Persistent
	private Key shippingServiceType;
	
	@Persistent
	private String shippingMethod;
	
	@Persistent
	private Key shippingAddressKey;
	
	@Persistent
	private Key billingAddressKey;
	
	@Persistent
	private List<Key> orderHistory;
	
	@Persistent
	private List<Key> orderLinesInCart;
	
	@Persistent
	private List<Key> orderLinesPurchased;
	
	@Persistent
	private List<Key> orderLinesShipped;
	
	@Persistent
	private List<Key> orderLinesCancelled;
	
	@Persistent
	private List<Key> orderLinesExchanged;
	
	@Persistent
	private List<Key> orderLinesReturned;
	
	@Persistent
	private Double shippingPrice;
	
	@Persistent
	private Double grandTotal;
	
	@Persistent
	private Boolean problemOrder;
	
	@Persistent
	private Boolean exchangeOrder;
	
	@Persistent
	private Boolean reBoxOrder;
	
	@Persistent
	private Boolean orderWithDiscount;
	
	@Persistent
	private Double discountAmount;
	
	@Persistent
	private String trackingNumber;
	
	@Persistent
	private String purchaseType;
	
	@Persistent
	private String ipAddress;
	
	@Persistent
	private String country;
	
	@Persistent
	private Date dateDeleted;

	@Persistent
	private Boolean deleted;
	
	@Persistent
	private Boolean preOrdered;
	
	@Persistent
	private Boolean isStoreOrder;
	
	@Persistent
	private Boolean preOrderedSpecial;//This property is to check whether the order is made as preorder using FLAGS
	
	@Persistent
	private Key exchangeOrgin;
	
	@Persistent
	private Boolean isOrderFromMO;
	
	@Persistent
	private Boolean isOrderFromMobile;
	
	@Persistent
	private Boolean isOrderFromAmazon;
	
	@Persistent
	private Key shippingZoneKey;

	@Persistent
	private Boolean abandonedCartMailSent = false;

	@Persistent
	private String loginType;
	
	@Persistent
	private String discountType;
	
	@Persistent
	private Key warehouseUserId;
	
	
	
	
	

	public Key getWarehouseUserId() {
		return warehouseUserId;
	}

	public void setWarehouseUserId(Key warehouseUserId) {
		this.warehouseUserId = warehouseUserId;
	}

	public String getDiscountType() {
		return discountType;
	}

	public void setDiscountType(String discountType) {
		this.discountType = discountType;
	}

	public Boolean getOrderWithDiscount() {
		return orderWithDiscount;
	}

	public void setOrderWithDiscount(Boolean orderWithDiscount) {
		this.orderWithDiscount = orderWithDiscount;
	}

	public String getLoginType() {
		return loginType;
	}

	public void setLoginType(String loginType) {
		this.loginType = loginType;
	}

	public Boolean getRequireSignature() {
		return requireSignature;
	}

	public void setRequireSignature(Boolean requireSignature) {
		this.requireSignature = requireSignature;
	}

	public Boolean getAbandonedCartMailSent() {
		return abandonedCartMailSent;
	}

	public void setAbandonedCartMailSent(Boolean abandonedCartMailSent) {
		this.abandonedCartMailSent = abandonedCartMailSent;
	}

	public Key getShippingZoneKey() {
		return shippingZoneKey;
	}

	public void setShippingZoneKey(Key shippingZoneKey) {
		this.shippingZoneKey = shippingZoneKey;
	}

	public Boolean getIsOrderFromAmazon() {
		return isOrderFromAmazon;
	}

	public void setIsOrderFromAmazon(Boolean isOrderFromAmazon) {
		this.isOrderFromAmazon = isOrderFromAmazon;
	}

	public Boolean getIsOrderFromMobile() {
		return isOrderFromMobile;
	}

	public void setIsOrderFromMobile(Boolean isOrderFromMobile) {
		this.isOrderFromMobile = isOrderFromMobile;
	}

	public Boolean getIsOrderFromMO() {
		return isOrderFromMO;
	}

	public void setIsOrderFromMO(Boolean isOrderFromMO) {
		this.isOrderFromMO = isOrderFromMO;
	}

	public List<Key> getOrderLinesInCart() {
		return orderLinesInCart;
	}

	public void setOrderLinesInCart(List<Key> orderLinesInCart) {
		this.orderLinesInCart = orderLinesInCart;
	}

	public List<Key> getOrderLinesPurchased() {
		return orderLinesPurchased;
	}

	public void setOrderLinesPurchased(List<Key> orderLinesPurchased) {
		this.orderLinesPurchased = orderLinesPurchased;
	}

	public List<Key> getOrderLinesShipped() {
		return orderLinesShipped;
	}

	public void setOrderLinesShipped(List<Key> orderLinesShipped) {
		this.orderLinesShipped = orderLinesShipped;
	}

	public List<Key> getOrderLinesCancelled() {
		return orderLinesCancelled;
	}

	public void setOrderLinesCancelled(List<Key> orderLinesCancelled) {
		this.orderLinesCancelled = orderLinesCancelled;
	}

	public List<Key> getOrderLinesExchanged() {
		return orderLinesExchanged;
	}

	public void setOrderLinesExchanged(List<Key> orderLinesExchanged) {
		this.orderLinesExchanged = orderLinesExchanged;
	}

	public List<Key> getOrderLinesReturned() {
		return orderLinesReturned;
	}

	public void setOrderLinesReturned(List<Key> orderLinesReturned) {
		this.orderLinesReturned = orderLinesReturned;
	}

	public Key getBrandId() {
		return brandId;
	}

	public void setBrandId(Key brandId) {
		this.brandId = brandId;
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

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public String getOrderNumber() {
		return orderNumber;
	}

	public void setOrderNumber(String orderNumber) {
		this.orderNumber = orderNumber;
	}

	public Key getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Key customerId) {
		this.customerId = customerId;
	}

	public Date getDateOfFirstItemAdded() {
		return dateOfFirstItemAdded;
	}

	public void setDateOfFirstItemAdded(Date dateOfFirstItemAdded) {
		this.dateOfFirstItemAdded = dateOfFirstItemAdded;
	}

	public Date getOrderPlacedDate() {
		return orderPlacedDate;
	}

	public void setOrderPlacedDate(Date orderPlacedDate) {
		this.orderPlacedDate = orderPlacedDate;
	}

	public Date getOrderShippedDate() {
		return orderShippedDate;
	}

	public void setOrderShippedDate(Date orderShippedDate) {
		this.orderShippedDate = orderShippedDate;
	}

	public String getOrderStatus() {
		return orderStatus;
	}

	public void setOrderStatus(String orderStatus) {
		this.orderStatus = orderStatus;
	}

	

	public Key getShippingServiceType() {
		return shippingServiceType;
	}

	public void setShippingServiceType(Key shippingServiceType) {
		this.shippingServiceType = shippingServiceType;
	}

	public List<Key> getOrderHistory() {
		return orderHistory;
	}

	public void setOrderHistory(List<Key> orderHistory) {
		this.orderHistory = orderHistory;
	}

	public Double getShippingPrice() {
		return shippingPrice;
	}

	public void setShippingPrice(Double shippingPrice) {
		this.shippingPrice = shippingPrice;
	}

	public Double getGrandTotal() {
		return grandTotal;
	}

	public void setGrandTotal(Double grandTotal) {
		this.grandTotal = grandTotal;
	}

	public Boolean getProblemOrder() {
		return problemOrder;
	}

	public void setProblemOrder(Boolean problemOrder) {
		this.problemOrder = problemOrder;
	}

	public Boolean getReBoxOrder() {
		return reBoxOrder;
	}

	public void setReBoxOrder(Boolean reBoxOrder) {
		this.reBoxOrder = reBoxOrder;
	}



	public Double getDiscountAmount() {
		return discountAmount;
	}

	public void setDiscountAmount(Double discountAmount) {
		this.discountAmount = discountAmount;
	}

	public String getTrackingNumber() {
		return trackingNumber;
	}

	public void setTrackingNumber(String trackingNumber) {
		this.trackingNumber = trackingNumber;
	}

	public String getPurchaseType() {
		return purchaseType;
	}

	public void setPurchaseType(String purchaseType) {
		this.purchaseType = purchaseType;
	}

	public String getIpAddress() {
		return ipAddress;
	}

	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}
	
	public Boolean getPreOrdered() {
		return preOrdered;
	}

	public void setPreOrdered(Boolean preOrdered) {
		this.preOrdered = preOrdered;
	}

	
	public Boolean getExchangeOrder() {
		return exchangeOrder;
	}

	public void setExchangeOrder(Boolean exchangeOrder) {
		this.exchangeOrder = exchangeOrder;
	}
	
	
	public Boolean getPreOrderedSpecial() {
		return preOrderedSpecial;
	}

	public void setPreOrderedSpecial(Boolean preOrderedSpecial) {
		this.preOrderedSpecial = preOrderedSpecial;
	}
	
	

	public Boolean getIsStoreOrder() {
		return isStoreOrder;
	}

	public void setIsStoreOrder(Boolean isStoreOrder) {
		this.isStoreOrder = isStoreOrder;
	}
	
	public Key getShippingAddressKey() {
		return shippingAddressKey;
	}

	public void setShippingAddressKey(Key shippingAddressKey) {
		this.shippingAddressKey = shippingAddressKey;
	}

	public Key getBillingAddressKey() {
		return billingAddressKey;
	}

	public void setBillingAddressKey(Key billingAddressKey) {
		this.billingAddressKey = billingAddressKey;
	}
	
	

	public String getShippingMethod() {
		return shippingMethod;
	}

	public void setShippingMethod(String shippingMethod) {
		this.shippingMethod = shippingMethod;
	}

	
	public Key getExchangeOrgin() {
		return exchangeOrgin;
	}

	public void setExchangeOrgin(Key exchangeOrgin) {
		this.exchangeOrgin = exchangeOrgin;
	}

	public void copy(Order order)
	{
		if(order.getBrandId()!=null)
			this.setBrandId(order.getBrandId());
		if(order.getCountry()!=null)
			this.setCountry(order.getCountry());
		if(order.getCustomerId()!=null)
			this.setCustomerId(order.getCustomerId());
		if(order.getDateDeleted()!=null)
			this.setDateDeleted(order.getDateDeleted());
		if(order.getDateOfFirstItemAdded()!=null)
			this.setDateOfFirstItemAdded(order.getDateOfFirstItemAdded());
		if(order.getDeleted()!=null)
			this.setDeleted(order.getDeleted());
		if(order.getDiscountAmount()!=null)
			this.setDiscountAmount(order.getDiscountAmount());
		if(order.getGrandTotal()!=null)
			this.setGrandTotal(order.getGrandTotal());
		if(order.getIpAddress()!=null)
			this.setIpAddress(order.getIpAddress());
		if(order.getRequireSignature()!=null)
			this.setRequireSignature(order.getRequireSignature());
		
		if(order.getOrderHistory()!=null)
		{
			this.setOrderHistory(order.getOrderHistory());
		}
		if(order.getOrderLinesPurchased()!=null)
		{
			this.setOrderLinesPurchased(order.getOrderLinesPurchased());
		}
		if(order.getOrderLinesCancelled()!=null)
		{
			this.setOrderLinesCancelled(order.getOrderLinesCancelled());
		}
		if(order.getOrderLinesShipped()!=null)
		{
			this.setOrderLinesShipped(order.getOrderLinesShipped());
		}
		if(order.getOrderLinesExchanged()!=null)
		{			
			this.setOrderLinesExchanged(order.getOrderLinesExchanged());
		}
		if(order.getOrderLinesReturned()!=null)
		{
			this.setOrderLinesReturned(order.getOrderLinesReturned());
		}
		
		
		if(order.getOrderNumber()!=null)
			this.setOrderNumber(order.getOrderNumber());
		if(order.getOrderPlacedDate()!=null)
			this.setOrderPlacedDate(order.getOrderPlacedDate());
		if(order.getOrderShippedDate()!=null)
			this.setOrderShippedDate(order.getOrderShippedDate());
		if(order.getOrderStatus()!=null)
			this.setOrderStatus(order.getOrderStatus());
		if(order.getOrderWithDiscount()!=null)
			this.setOrderWithDiscount(order.getOrderWithDiscount());
		if(order.getProblemOrder()!=null)
			this.setProblemOrder(order.getProblemOrder());
		if(order.getPurchaseType()!=null)
			this.setPurchaseType(order.getPurchaseType());
		if(order.getReBoxOrder()!=null)
			this.setReBoxOrder(order.getReBoxOrder());
		if(order.getShippingPrice()!=null)
			this.setShippingPrice(order.getShippingPrice());
		if(order.getShippingServiceType()!=null)
			this.setShippingServiceType(order.getShippingServiceType());
		if(order.getTrackingNumber()!=null)
			this.setTrackingNumber(order.getTrackingNumber());
		if(order.getPreOrdered()!=null)
			this.setPreOrdered(order.getPreOrdered());
		if(order.getExchangeOrder()!=null)
			this.setExchangeOrder(order.getExchangeOrder());
		if(order.getPreOrderedSpecial()!=null)
			this.setPreOrderedSpecial(order.getPreOrderedSpecial());
		if(order.getIsStoreOrder()!=null)
			this.setIsStoreOrder(order.getIsStoreOrder());
		if(order.getShippingAddressKey()!=null)
			this.setShippingAddressKey(order.getShippingAddressKey());
		if(order.getBillingAddressKey()!=null)
			this.setBillingAddressKey(order.getBillingAddressKey());
		if(order.getShippingMethod()!=null)
			this.setShippingMethod(order.getShippingMethod());
		if(order.getIsOrderFromMO()!=null)
			this.setIsOrderFromMO(order.getIsOrderFromMO());
		if(order.getIsOrderFromMobile()!=null)
			this.setIsOrderFromMobile(order.getIsOrderFromMobile());
		if(order.getIsOrderFromAmazon()!=null)
			this.setIsOrderFromAmazon(order.getIsOrderFromAmazon());
		if(order.getShippingZoneKey()!=null)
			this.setShippingZoneKey(order.getShippingZoneKey());
		if(order.getLoginType()!=null)
			this.setLoginType(order.getLoginType());
		if(order.getDiscountType()!=null)
			this.setDiscountType(order.getDiscountType());
		if(order.getWarehouseUserId()!=null)
			this.setWarehouseUserId(order.getWarehouseUserId());
		if(order.getOrderLinesInCart()!=null)
		{
			List<Key> tlist=this.getOrderLinesInCart();
			if(this.getOrderLinesInCart()==null)
				{	tlist=new ArrayList<Key>();
					tlist.addAll(order.getOrderLinesInCart());
					this.setOrderLinesInCart(tlist);
				}
			else
			{
				this.setOrderLinesInCart(order.getOrderLinesInCart());
			}
		}
		
		
	}

}
