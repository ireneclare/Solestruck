package com.veroniqa.dto;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;

public class ClosingReportDTO implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private String vendorName;
	private String productName;
	private Double size;
	private Long qty;
	private String customerName;
	private String colorName;
	private Long orderId;
	private String location;
	private Date date;
	private Long pvId;
	private Double wholesaleprice;
	private Double retailprice;
	private Double saleprice;
	private Date orderPlacedDate;
	
	
	public Date getOrderPlacedDate() {
		return orderPlacedDate;
	}
	public void setOrderPlacedDate(Date orderPlacedDate) {
		this.orderPlacedDate = orderPlacedDate;
	}
	public Double getWholesaleprice() {
		return wholesaleprice;
	}
	public void setWholesaleprice(Double wholesaleprice) {
		this.wholesaleprice = wholesaleprice;
	}
	public Double getRetailprice() {
		return retailprice;
	}
	public void setRetailprice(Double retailprice) {
		this.retailprice = retailprice;
	}
	public Double getSaleprice() {
		return saleprice;
	}
	public void setSaleprice(Double saleprice) {
		this.saleprice = saleprice;
	}
	private HashMap<Long,Long> pvQty=new HashMap<Long,Long>();
	
     
	
	public HashMap<Long, Long> getPvQty() {
		return pvQty;
	}
	public void setPvQty(HashMap<Long, Long> pvQty) {
		this.pvQty = pvQty;
	}
	public Long getPvId() {
		
		return pvId;
	}
	public void setPvId(Long pvId) {
		this.pvId = pvId;
	}
	public Date getDate() {
		return date;
	}
	public void setDate(Date date) {
		this.date = date;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public Long getOrderId() {
		return orderId;
	}
	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}
	public String getColorName() {
		return colorName;
	}
	public void setColorName(String colorName) {
		this.colorName = colorName;
	}
	public String getVendorName() {
		return vendorName;
	}
	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public Double getSize() {
		return size;
	}
	public void setSize(Double size) {
		this.size = size;
	}
	public Long getQty() {
		return qty;
	}
	public void setQty(Long qty) {
		this.qty = qty;
	}
	public String getCustomerName() {
		return customerName;
	}
	public void setCustomerName(String customerName) {
		this.customerName = customerName;
	}
	
	/*public boolean equals(ClosingReportDTO dto)
	{
		if(this.pvId==dto.getPvId())
		{
			return true;
		}
		else
		{
			return false;
		}
		
	}*/

}
