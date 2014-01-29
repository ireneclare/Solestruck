package com.veroniqa.dto;

import java.io.Serializable;
import java.util.Date;

import com.veroniqa.jdo.BillingAddress;
import com.veroniqa.jdo.ShippingAddress;

public class OrderDTO implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = -6378406051473277580L;
	private String orderid;
	private Date datePlaced;
	private int pairs;
	private String customerFirstName;
	private String customerLastName;
	private String trackingNo;
	private String trackingURL;
	private String status;
	private String shippingMethod;
	private String strOrderPlaced;
	private Boolean isPreorder;
	private Boolean isExchangeOrder;
	private Boolean isReboxedOrder;
	private Boolean isProblemOrder;
	private BillingAddress  billingAddress;
	private ShippingAddress shippingAddress;
	private String loginType;
	private String discountType;
	
	public String getTrackingURL() {
		return trackingURL;
	}
	public void setTrackingURL(String trackingURL) {
		this.trackingURL = trackingURL;
	}
	public String getDiscountType() {
		return discountType;
	}
	public void setDiscountType(String discountType) {
		this.discountType = discountType;
	}
	public String getLoginType() {
		return loginType;
	}
	public void setLoginType(String loginType) {
		this.loginType = loginType;
	}
	
	public BillingAddress getBillingAddress() {
		return billingAddress;
	}
	public void setBillingAddress(BillingAddress billingAddress) {
		this.billingAddress = billingAddress;
	}
	public ShippingAddress getShippingAddress() {
		return shippingAddress;
	}
	public void setShippingAddress(ShippingAddress shippingAddress) {
		this.shippingAddress = shippingAddress;
	}
	
	public Date getDatePlaced() {
		return datePlaced;
	}
	public void setDatePlaced(Date datePlaced) {
		this.datePlaced = datePlaced;
	}
	public String getOrderid() {
		return orderid;
	}
	public void setOrderid(String orderid) {
		this.orderid = orderid;
	}
	public int getPairs() {
		return pairs;
	}
	public void setPairs(int pairs) {
		this.pairs = pairs;
	}
	public String getCustomerFirstName() {
		return customerFirstName;
	}
	public void setCustomerFirstName(String customerFirstName) {
		this.customerFirstName = customerFirstName;
	}
	public String getCustomerLastName() {
		return customerLastName;
	}
	public void setCustomerLastName(String customerLastName) {
		this.customerLastName = customerLastName;
	}
	public String getTrackingNo() {
		return trackingNo;
	}
	public void setTrackingNo(String trackingNo) {
		this.trackingNo = trackingNo;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getShippingMethod() {
		return shippingMethod;
	}
	public void setShippingMethod(String shippingMethod) {
		this.shippingMethod = shippingMethod;
	}
	public String getStrOrderPlaced() {
		return strOrderPlaced;
	}
	public void setStrOrderPlaced(String strOrderPlaced) {
		this.strOrderPlaced = strOrderPlaced;
	}
	public Boolean getIsPreorder() {
		return isPreorder;
	}
	public void setIsPreorder(Boolean isPreorder) {
		this.isPreorder = isPreorder;
	}
	public Boolean getIsExchangeOrder() {
		return isExchangeOrder;
	}
	public void setIsExchangeOrder(Boolean isExchangeOrder) {
		this.isExchangeOrder = isExchangeOrder;
	}
	public Boolean getIsReboxedOrder() {
		return isReboxedOrder;
	}
	public void setIsReboxedOrder(Boolean isReboxedOrder) {
		this.isReboxedOrder = isReboxedOrder;
	}
	public Boolean getIsProblemOrder() {
		return isProblemOrder;
	}
	public void setIsProblemOrder(Boolean isProblemOrder) {
		this.isProblemOrder = isProblemOrder;
	}
	

}
