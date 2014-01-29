package com.veroniqa.dto;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import com.google.appengine.api.datastore.Key;
import com.veroniqa.jdo.OrderLine;

public class WriteAReviewMailDTO implements Serializable{
	
	private static final long serialVersionUID = 1522411L;
	
	private Long customerId;
	
	private Long orderId;
	
	private Long productid;
	
	private Long colorid;

	private List<Long> orderLineId;
	
	private Date shippedDate;
	
	private Boolean mailsent=false;
	
	private String customerEmail;
	
	private String custFname;
	
	private String custLname;
	
	private List<Key> orderLineShipped;
	
	private List<LineItemDTO> lineitems;
	
	private String mailType;

	public Long getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}

	public Long getOrderId() {
		return orderId;
	}

	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}

	public Long getProductid() {
		return productid;
	}

	public void setProductid(Long productid) {
		this.productid = productid;
	}

	public Long getColorid() {
		return colorid;
	}

	public void setColorid(Long colorid) {
		this.colorid = colorid;
	}

	public List<Long> getOrderLineId() {
		return orderLineId;
	}

	public void setOrderLineId(List<Long> orderLineId) {
		this.orderLineId = orderLineId;
	}

	public Date getShippedDate() {
		return shippedDate;
	}

	public void setShippedDate(Date shippedDate) {
		this.shippedDate = shippedDate;
	}

	public Boolean getMailsent() {
		return mailsent;
	}

	public void setMailsent(Boolean mailsent) {
		this.mailsent = mailsent;
	}

	public String getCustomerEmail() {
		return customerEmail;
	}

	public void setCustomerEmail(String customerEmail) {
		this.customerEmail = customerEmail;
	}

	public String getCustFname() {
		return custFname;
	}

	public void setCustFname(String custFname) {
		this.custFname = custFname;
	}

	public String getCustLname() {
		return custLname;
	}

	public void setCustLname(String custLname) {
		this.custLname = custLname;
	}

	public List<Key> getOrderLineShipped() {
		return orderLineShipped;
	}

	public void setOrderLineShipped(List<Key> orderLineShipped) {
		this.orderLineShipped = orderLineShipped;
	}

	public List<LineItemDTO> getLineitems() {
		return lineitems;
	}

	public void setLineitems(List<LineItemDTO> lineitems) {
		this.lineitems = lineitems;
	}

	public String getMailType() {
		return mailType;
	}

	public void setMailType(String mailType) {
		this.mailType = mailType;
	}

	
}