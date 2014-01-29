package com.veroniqa.dto;

import java.io.Serializable;
import java.util.List;

import com.veroniqa.bean.UserDetail;
import com.veroniqa.jdo.BillingAddress;
import com.veroniqa.jdo.ShippingAddress;

public class MyAccountDTO  implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 6766126420589249310L;
	
	private UserDetail userDetail;
	private List<OrderDTO> oldOrderList;
	private BillingAddress billingAddress;
	private ShippingAddress shippingAddress;
	
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
	public UserDetail getUserDetail() {
		return userDetail;
	}
	public void setUserDetail(UserDetail userDetail) {
		this.userDetail = userDetail;
	}
	
	public List<OrderDTO> getOldOrderList() {
		return oldOrderList;
	}
	public void setOldOrderList(List<OrderDTO> oldOrderList) {
		this.oldOrderList = oldOrderList;
	}
	
	
	

}
