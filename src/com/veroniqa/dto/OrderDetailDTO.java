package com.veroniqa.dto;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

public class OrderDetailDTO  implements Serializable{

	
	private static final long serialVersionUID = 5028747162030568542L;
	private Long orderid;
	private Date orderPlacedDate;
	private ShippingServiceTypeDTO shippingServiceTypeDTO;
	private double shippingcharge=0.0;
	private String orderstatus;
	private String ipAddress;
	private String orderDesc;
	private boolean isFullyCancelled;
	private boolean preorder;
	private boolean problemorder;
	private boolean exchangeorder;
	private boolean returnable;
	private boolean requireSignature;
	private boolean exchangable;
	private boolean editable;
	private String shippingMethod;
	private Long shippingTypeId;
	private List<ShippingServiceTypeDTO> shippingMethods;
	private Double unitPriceAtPurchase;
	private String updateMsg;
	private List<OrderLineDTO> orderLines;
	private List<OrderLineDTO> orderLinesReturned;
	private String trackingNumber;
	private double totalPurchasePrice=0.0;
	private double totalOrderPrice=0.0;
	public boolean isEditable() {
		return editable;
	}
	public void setEditable(boolean editable) {
		this.editable = editable;
	}
	public Double getUnitPriceAtPurchase()
	{
		return unitPriceAtPurchase;
	}
	public void setUnitPriceAtPurchase(Double unitPriceAtPurchase)
	{
		this.unitPriceAtPurchase = unitPriceAtPurchase;
	}
	public boolean isRequireSignature() {
		return requireSignature;
	}
	public void setRequireSignature(boolean requireSignature) {
		this.requireSignature = requireSignature;
	}
	public boolean isFullyCancelled() {
		return isFullyCancelled;
	}
	public void setFullyCancelled(boolean isFullyCancelled) {
		this.isFullyCancelled = isFullyCancelled;
	}
	
	public String getIpAddress() {
		return ipAddress;
	}
	public boolean isReturnable() {
		return returnable;
	}
	public void setReturnable(boolean returnable) {
		this.returnable = returnable;
	}
	public void setIpAddress(String ipAddress) {
		this.ipAddress = ipAddress;
	}
	public String getOrderDesc() {
		return orderDesc;
	}
	public void setOrderDesc(String orderDesc) {
		this.orderDesc = orderDesc;
	}
	
	public List<OrderLineDTO> getOrderLines() {
		return orderLines;
	}
	public void setOrderLines(List<OrderLineDTO> orderLines) {
		this.orderLines = orderLines;
	}
	
	
	public Date getOrderPlacedDate() {
		return orderPlacedDate;
	}
	public void setOrderPlacedDate(Date orderPlacedDate) {
		this.orderPlacedDate = orderPlacedDate;
	}
	public List<OrderLineDTO> getOrderLinesReturned() {
		return orderLinesReturned;
	}
	public void setOrderLinesReturned(List<OrderLineDTO> orderLinesReturned) {
		this.orderLinesReturned = orderLinesReturned;
	}
	public Long getOrderid() {
		return orderid;
	}
	public void setOrderid(Long orderid) {
		this.orderid = orderid;
	}
	
	public ShippingServiceTypeDTO getShippingServiceTypeDTO() {
		return shippingServiceTypeDTO;
	}
	public void setShippingServiceTypeDTO(
			ShippingServiceTypeDTO shippingServiceTypeDTO) {
		this.shippingServiceTypeDTO = shippingServiceTypeDTO;
	}
	public double getShippingcharge() {
		return shippingcharge;
	}
	public void setShippingcharge(double shippingcharge) {
		this.shippingcharge = shippingcharge;
	}
	public String getOrderstatus() {
		return orderstatus;
	}
	public void setOrderstatus(String orderstatus) {
		this.orderstatus = orderstatus;
	}
	public boolean isPreorder() {
		return preorder;
	}
	public void setPreorder(boolean preorder) {
		this.preorder = preorder;
	}
	public boolean isProblemorder() {
		return problemorder;
	}
	public void setProblemorder(boolean problemorder) {
		this.problemorder = problemorder;
	}
	public boolean isExchangeorder() {
		return exchangeorder;
	}
	public void setExchangeorder(boolean exchangeorder) {
		this.exchangeorder = exchangeorder;
	}
	
	public String getTrackingNumber() {
		return trackingNumber;
	}
	public void setTrackingNumber(String trackingNumber) {
		this.trackingNumber = trackingNumber;
	}
	public double getTotalPurchasePrice() {
		return totalPurchasePrice;
	}
	public void setTotalPurchasePrice(double totalPurchasePrice) {
		this.totalPurchasePrice = totalPurchasePrice;
	}
	public double getTotalOrderPrice() {
		return this.totalOrderPrice;
	}
	public void setTotalOrderPrice(double totalOrderPrice) {
		this.totalOrderPrice = totalOrderPrice;
	}
	public String getUpdateMsg() {
		return updateMsg;
	}
	public void setUpdateMsg(String updateMsg) {
		this.updateMsg = updateMsg;
	}
	public boolean isExchangable() {
		return exchangable;
	}
	public void setExchangable(boolean exchangable) {
		this.exchangable = exchangable;
	}
	public List<ShippingServiceTypeDTO> getShippingMethods() {
		return shippingMethods;
	}
	public void setShippingMethods(List<ShippingServiceTypeDTO> shippingMethods) {
		this.shippingMethods = shippingMethods;
	}
	public Long getShippingTypeId() {
		return shippingTypeId;
	}
	public void setShippingTypeId(Long shippingTypeId) {
		this.shippingTypeId = shippingTypeId;
	}
	public String getShippingMethod() {
		return shippingMethod;
	}
	public void setShippingMethod(String shippingMethod) {
		this.shippingMethod = shippingMethod;
	}
	
	

}
