package com.veroniqa.jdo;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class OrderLine implements Serializable{
	
	
	private static final long serialVersionUID = 1235441L;
	
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private Key productId;
	
	@Persistent
	private Key productVariantId;
	
	@Persistent
	private Key productUnitLocationId;

	@Persistent
	private Date dateAdded;	
	
	@Persistent
	private Date shippedDate;
	
	@Persistent
	private String status;
	
	@Persistent
	private Double unitPrice;
	
	@Persistent
	private Double unitPriceAtPurchase;
	
	@Persistent
	private Double discountedPrice;
	
	@Persistent
	private Double discountPercentage;
	
	@Persistent
	private String discountPin;
	
	@Persistent
	private Key discountProgramId;
	
	@Persistent
	private String shippingType;
	
	@Persistent
	private Double shippingPrice;
	
	@Persistent
	private Date dateDeleted;

	@Persistent
	private Boolean deleted;
	
	@Persistent
	private Boolean isPreOrder;
	
	@Persistent
	private Boolean isStoreOrder;
	
	@Persistent
	private Boolean inventoryReturned;
	
	@Persistent
	private Long orderLineId;
	
	@Persistent
	private Key orderId;
	
	@Persistent
	private Boolean isOrderFromMobile;
	
	@Persistent
	private Date orderLinePurchasedDate;
	

	public Date getOrderLinePurchasedDate() {
		return orderLinePurchasedDate;
	}

	public void setOrderLinePurchasedDate(Date orderLinePurchasedDate) {
		this.orderLinePurchasedDate = orderLinePurchasedDate;
	}
	
	public Key getOrderId() {
		return orderId;
	}

	public void setOrderId(Key orderId) {
		this.orderId = orderId;
	}

	public Long getOrderLineId() {
		return orderLineId;
	}

	public void setOrderLineId(Long orderLineId) {
		this.orderLineId = orderLineId;
	}
	
	public Long getProductIdlong() {
		return productId.getId();
	}

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public Key getProductId() {
		return productId;
	}

	public void setProductId(Key productId) {
		this.productId = productId;
	}

	public Key getProductVariantId() {
		return productVariantId;
	}

	public void setProductVariantId(Key productVariantId) {
		this.productVariantId = productVariantId;
	}

	public Key getProductUnitLocationId() {
		return productUnitLocationId;
	}

	public void setProductUnitLocationId(Key productUnitLocationId) {
		this.productUnitLocationId = productUnitLocationId;
	}

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}

	public Date getShippedDate() {
		return shippedDate;
	}

	public void setShippedDate(Date shippedDate) {
		this.shippedDate = shippedDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Double getUnitPrice() {
		return unitPrice;
	}

	public void setUnitPrice(Double unitPrice) {
		this.unitPrice = unitPrice;
	}

	public Double getUnitPriceAtPurchase() {
		return unitPriceAtPurchase;
	}

	public void setUnitPriceAtPurchase(Double unitPriceAtPurchase) {
		this.unitPriceAtPurchase = unitPriceAtPurchase;
	}

	public Double getDiscountedPrice() {
		return discountedPrice;
	}

	public void setDiscountedPrice(Double discountedPrice) {
		this.discountedPrice = discountedPrice;
	}

	public Double getDiscountPercentage() {
		return discountPercentage;
	}

	public void setDiscountPercentage(Double discountPercentage) {
		this.discountPercentage = discountPercentage;
	}

	public String getDiscountPin() {
		return discountPin;
	}

	public void setDiscountPin(String discountPin) {
		this.discountPin = discountPin;
	}

	public Key getDiscountProgramId() {
		return discountProgramId;
	}

	public void setDiscountProgramId(Key discountProgramId) {
		this.discountProgramId = discountProgramId;
	}

	public String getShippingType() {
		return shippingType;
	}

	public void setShippingType(String shippingType) {
		this.shippingType = shippingType;
	}

	public Double getShippingPrice() {
		return shippingPrice;
	}

	public void setShippingPrice(Double shippingPrice) {
		this.shippingPrice = shippingPrice;
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
	
	public Boolean getIsPreOrder() {
		return isPreOrder;
	}

	public void setIsPreOrder(Boolean isPreOrder) {
		this.isPreOrder = isPreOrder;
	}
	

	public Boolean getInventoryReturned() {
		return inventoryReturned;
	}

	public void setInventoryReturned(Boolean inventoryReturned) {
		this.inventoryReturned = inventoryReturned;
	}
	
	

	public Boolean getIsStoreOrder() {
		return isStoreOrder;
	}

	public void setIsStoreOrder(Boolean isStoreOrder) {
		this.isStoreOrder = isStoreOrder;
	}

	public Boolean getIsOrderFromMobile() {
		return isOrderFromMobile;
	}

	public void setIsOrderFromMobile(Boolean isOrderFromMobile) {
		this.isOrderFromMobile = isOrderFromMobile;
	}
	
	public void copy(OrderLine orderLine)
	{
		if(orderLine.getDateAdded()!=null)
			this.setDateAdded(orderLine.getDateAdded());
		if(orderLine.getDateDeleted()!=null)
			this.setDateDeleted(orderLine.getDateDeleted());
		if(orderLine.getDeleted()!=null)
			this.setDeleted(orderLine.getDeleted());
		if(orderLine.getDiscountedPrice()!=null)
			this.setDiscountedPrice(orderLine.getDiscountedPrice());
		if(orderLine.getDiscountPercentage()!=null)
			this.setDiscountPercentage(orderLine.getDiscountPercentage());
		if(orderLine.getDiscountPin()!=null)
			this.setDiscountPin(orderLine.getDiscountPin());
		if(orderLine.getDiscountProgramId()!=null)
			this.setDiscountProgramId(orderLine.getDiscountProgramId());
		if(orderLine.getProductId()!=null)
			this.setProductId(orderLine.getProductId());
		if(orderLine.getOrderId()!=null)
			this.setOrderId(orderLine.getOrderId());
		if(orderLine.getProductUnitLocationId()!=null)
			this.setProductUnitLocationId(orderLine.getProductUnitLocationId());
		if(orderLine.getProductVariantId()!=null)
			this.setProductVariantId(orderLine.getProductVariantId());
		if(orderLine.getShippedDate()!=null)
			this.setShippedDate(orderLine.getShippedDate());
		if(orderLine.getShippingType()!=null)
			this.setShippingType(orderLine.getShippingType());
		if(orderLine.getStatus()!=null)
			this.setStatus(orderLine.getStatus());
		if(orderLine.getUnitPrice()!=null)
			this.setUnitPrice(orderLine.getUnitPrice());
		if(orderLine.getShippingPrice()!=null)
			this.setShippingPrice(orderLine.getShippingPrice());
		if(orderLine.getUnitPriceAtPurchase()!=null)
			this.setUnitPriceAtPurchase(orderLine.getUnitPriceAtPurchase());
		if(orderLine.getIsPreOrder()!=null)
			this.setIsPreOrder(orderLine.getIsPreOrder());
		if(orderLine.getOrderLineId()!=null)
			this.setOrderLineId(orderLine.getOrderLineId());
		if(orderLine.getInventoryReturned()!=null)
			this.setInventoryReturned(orderLine.getInventoryReturned());
		if(orderLine.getIsOrderFromMobile()!=null)
			this.setIsOrderFromMobile(orderLine.getIsOrderFromMobile());
		if(orderLine.getOrderLinePurchasedDate()!=null)
			this.setOrderLinePurchasedDate(orderLine.getOrderLinePurchasedDate());
	}
		

}
