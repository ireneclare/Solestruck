package com.veroniqa.dto;

import java.io.Serializable;

public class AccountInfoDTO  implements Serializable
{
	/**
	 * 
	 */
	private static final long serialVersionUID = -7649393553761750798L;

	private String   mailId;
	
	private String password;
	
	private String phoneNumber;


	private BillingAddressDTO billingInfo;
	
	private ShippingAddressDTO shippingInfo;
	
	
	public String getMailId() {
		return mailId;
	}


	public void setMailId(String mailId) {
		this.mailId = mailId;
	}


	public String getPassword() {
		return password;
	}


	public void setPassword(String password) {
		this.password = password;
	}
	
	public String getPhoneNumber() {
		return phoneNumber;
	}


	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}


	public BillingAddressDTO getBillingInfo() {
		return billingInfo;
	}


	public void setBillingInfo(BillingAddressDTO billingInfo) {
		this.billingInfo = billingInfo;
	}


	public ShippingAddressDTO getShippingInfo() {
		return shippingInfo;
	}


	public void setShippingInfo(ShippingAddressDTO shippingInfo) {
		this.shippingInfo = shippingInfo;
	}


	


	
	
	
	
}
