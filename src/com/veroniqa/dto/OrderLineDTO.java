package com.veroniqa.dto;

import java.io.Serializable;
import java.util.List;
import java.util.Map;

import com.google.appengine.api.datastore.Key;

public class OrderLineDTO implements Serializable,Comparable<OrderLineDTO> {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private Long orderid;
	private Long orderlineid;
	private Long productid;
	private Long colorid;
	private Long selectedQty=1L;
	private Long qty;
	private Long productvariantid;
	private Map<Long,String> colorMap;
	private String color;
	private String productname;
	private String size;
	private Double price;
	private Double totalPrice=0.0;
	private String vendorname;
	private List<SizeQuantityPriceDTO> sizequantitypricelst;
	private String status;
	private String msg;
	private Boolean outOfStock;
	private Boolean storeOrder;
	private String warehouseLocation;
	private Double discountedPrice;
	private Double unitPriceAtPurchase;
	
	public Double getUnitPriceAtPurchase() {
		return unitPriceAtPurchase;
	}
	public void setUnitPriceAtPurchase(Double unitPriceAtPurchase) {
		this.unitPriceAtPurchase = unitPriceAtPurchase;
	}
	
	public Double getDiscountedPrice()
	{
		return discountedPrice;
	}
	public void setDiscountedPrice(Double discountedPrice)
	{
		this.discountedPrice = discountedPrice;
	}
	

	
	public Boolean getStoreOrder() {
		return storeOrder;
	}


	public void setStoreOrder(Boolean storeOrder) {
		this.storeOrder = storeOrder;
	}


	public Boolean getOutOfStock() {
		return outOfStock;
	}


	public void setOutOfStock(Boolean outOfStock) {
		this.outOfStock = outOfStock;
	}

	
	
	public String getMsg() {
		return msg;
	}
	public void setMsg(String msg) {
		this.msg = msg;
	}
	private List<Key> productUnitLocations;
	
	private List<Long> orderLineIds;
	private String productImageURL;
	
	
	public List<Long> getOrderLineIds() {
		return orderLineIds;
	}
	public void setOrderLineIds(List<Long> orderLineIds) {
		this.orderLineIds = orderLineIds;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	public List<SizeQuantityPriceDTO> getSizequantitypricelst() {
		return sizequantitypricelst;
	}
	public void setSizequantitypricelst(
			List<SizeQuantityPriceDTO> sizequantitypricelst) {
		this.sizequantitypricelst = sizequantitypricelst;
	}
	public Map<Long, String> getColorMap() {
		return colorMap;
	}
	public void setColorMap(Map<Long, String> colorMap) {
		this.colorMap = colorMap;
	}
	public Long getSelectedQty() {
		return selectedQty;
	}
	public void setSelectedQty(Long selectedQty) {
		this.selectedQty = selectedQty;
	}
	
	public Long getQty() {
		return qty;
	}
	public void setQty(Long qty) {
		this.qty = qty;
	}
	public Double getPrice() {
		return price;
	}
	public Long getProductvariantid() {
		return productvariantid;
	}
	public void setProductvariantid(Long productvariantid) {
		this.productvariantid = productvariantid;
	}
	public void setPrice(Double price) {
		this.price = price;
	}
	public Long getOrderid() {
		return orderid;
	}
	public void setOrderid(Long orderid) {
		this.orderid = orderid;
	}
	public Long getOrderlineid() {
		return orderlineid;
	}
	public void setOrderlineid(Long orderlineid) {
		this.orderlineid = orderlineid;
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
	public String getColor() {
		return color;
	}
	public void setColor(String color) {
		this.color = color;
	}
	public String getProductname() {
		return productname;
	}
	public void setProductname(String productname) {
		this.productname = productname;
	}
	public String getSize() {
		return size;
	}
	public void setSize(String size) {
		this.size = size;
	}
	public Double getTotalPrice() {
		return totalPrice;
	}
	public void setTotalPrice(Double totalPrice) {
		this.totalPrice = totalPrice;
	}
	
	public void doCalc()
	{
		this.totalPrice=price*selectedQty;
	}
	public void setVendorname(String vendorname) {
		this.vendorname = vendorname;
	}
	public String getVendorname() {
		return vendorname;
	}
	
	
	public List<Key> getProductUnitLocations() {
		return productUnitLocations;
	}
	public void setProductUnitLocations(List<Key> productUnitLocations) {
		this.productUnitLocations = productUnitLocations;
	}
	
	public String getWarehouseLocation() {
		return warehouseLocation;
	}


	public void setWarehouseLocation(String warehouseLocation) {
		this.warehouseLocation = warehouseLocation;
	}


	public int compareTo(OrderLineDTO o) {
		if(this.getProductvariantid().equals(o.getProductvariantid()))
			return 0;
		else
			return -1;
	}
	public String getProductImageURL() {
        String vendor = getVendorname().replaceAll(" ", "-");
        String product = getProductname().replaceAll(" ", "-");
        String color = getColor().replaceAll(" ", "-");	
        String url = "/" + vendor.toLowerCase() + "-shoes/" + vendor + "-shoes-" + product + "-(" + color + ")-010307.jpg";
        this.productImageURL=url;
		return this.productImageURL;
	}
	public void setProductImageURL(String productImageURL) {
		this.productImageURL = productImageURL;
	}
	
}
