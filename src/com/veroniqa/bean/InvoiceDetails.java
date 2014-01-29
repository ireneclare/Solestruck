package com.veroniqa.bean;

import java.io.Serializable;

/*
 * This class holds details concerning invoice which is needed by Payflow API to process the credit-card
 * By SHI
 * Date:April 11 2011
 *  */
public class InvoiceDetails implements Serializable {

	private String invoiceNumber;
	private String poNum;
	private Double amount;
	private String comment1;
	private String comment2;
	private String merchDesc;
	private String orderDate;
	
	private BillDetails billDetails;
	private CustomerDetails customerDetails;
	private ShippingDetails shippingDetails;
	
	public InvoiceDetails(){}
	
	
	public InvoiceDetails(BillDetails billDetails,
			CustomerDetails customerDetails, ShippingDetails shippingDetails) {
		this.billDetails = billDetails;
		this.customerDetails = customerDetails;
		this.shippingDetails = shippingDetails;
	}



	public String getInvoiceNumber() {
		return invoiceNumber;
	}
	
	public void setInvoiceNumber(String invoiceNumber) {
		this.invoiceNumber = invoiceNumber;
	}
	

	public String getPoNum() {
		return poNum;
	}
	
	public void setPoNum(String poNum) {
		this.poNum = poNum;
	}
	

	public Double getAmount() {
		return amount;
	}
	public void setAmount(Double amount) {
		this.amount = amount;
	}
	

	public String getComment1() {
		return comment1;
	}

	public void setComment1(String comment1) {
		this.comment1 = comment1;
	}
	

	public String getComment2() {
		return comment2;
	}
	
	public void setComment2(String comment2) {
		this.comment2 = comment2;
	}
	

	public String getMerchDesc() {
		return merchDesc;
	}
	
	public void setMerchDesc(String merchDesc) {
		this.merchDesc = merchDesc;
	}
	
	public String getOrderDate() {
		return orderDate;
	}
	public void setOrderDate(String orderDate) {
		this.orderDate = orderDate;
	}
	
	public BillDetails getBillDetails() {
		return billDetails;
	}
	public void setBillDetails(BillDetails billDetails) {
		this.billDetails = billDetails;
	}
	
	public CustomerDetails getCustomerDetails() {
		return customerDetails;
	}
	
	public void setCustomerDetails(CustomerDetails customerDetails) {
		this.customerDetails = customerDetails;
	}
	
	public ShippingDetails getShippingDetails() {
		return shippingDetails;
	}
	
	public void setShippingDetails(ShippingDetails shippingDetails) {
		this.shippingDetails = shippingDetails;
	}
	
	
}
