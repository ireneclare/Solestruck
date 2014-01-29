package com.veroniqa.dto;

import java.io.Serializable;

import com.acti.payment.paypal.bean.CreditCard;
import com.veroniqa.jdo.BillingAddress;
import com.veroniqa.jdo.ShippingAddress;

public class PaymentDetailDTO implements Serializable{

	/**
	 * By SHI
	 * This class can be used to transfer payment details while processing credit card and etc...
	 */
	private static final long serialVersionUID = 19894L;

	private BillingAddress billingAddress;
	private ShippingAddress shippingAddress;
	private CreditCard creditcard;
	private double amount;
	private long orderId;
	private String emailId;
	private String phoneNum;
	
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
	public CreditCard getCreditcard() {
		return creditcard;
	}
	public void setCreditcard(CreditCard creditcard) {
		this.creditcard = creditcard;
	}
	public double getAmount() {
		return amount;
	}
	public void setAmount(double amount) {
		this.amount = amount;
	}
	public long getOrderId() {
		return orderId;
	}
	public void setOrderId(long orderId) {
		this.orderId = orderId;
	}
	public String getEmailId() {
		return emailId;
	}
	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	public String getPhoneNum() {
		return phoneNum;
	}
	public void setPhoneNum(String phoneNum) {
		this.phoneNum = phoneNum;
	}
}
