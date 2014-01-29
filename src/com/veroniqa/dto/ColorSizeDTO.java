package com.veroniqa.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class ColorSizeDTO implements Serializable{
	
	private static final long serialVersionUID = 9178561L;
	
	private String color;
	private Double retailPrice;
	private Double salePrice;
	private Boolean isPreorder;
	private Boolean showOnSite;
	private List<SizeQuantityPriceDTO> sizeDetails;
	
	private List<Double> size=new ArrayList<Double>();
	private List<Integer> qty=new ArrayList<Integer>();
	private Long colorId;
	private Long systemColorId;
	private String systemColor;
	private List<Double> wholeSalePrices=new ArrayList<Double>();
	private List<Double> retailPrices=new ArrayList<Double>();
	private List<Double> salePrices=new ArrayList<Double>();
	
	
	
	public List<Double> getWholeSalePrices() {
		return wholeSalePrices;
	}
	public void setWholeSalePrices(List<Double> wholeSalePrices) {
		this.wholeSalePrices = wholeSalePrices;
	}
	public List<Double> getRetailPrices() {
		return retailPrices;
	}
	public void setRetailPrices(List<Double> retailPrices) {
		this.retailPrices = retailPrices;
	}
	public List<Double> getSalePrices() {
		return salePrices;
	}
	public void setSalePrices(List<Double> salePrices) {
		this.salePrices = salePrices;
	}
	public Long getSystemColorId() {
		return systemColorId;
	}
	public void setSystemColorId(Long systemColorId) {
		this.systemColorId = systemColorId;
	}
	public String getSystemColor() {
		return systemColor;
	}
	public void setSystemColor(String systemColor) {
		this.systemColor = systemColor;
	}
	public List<Integer> getQty() {
		return qty;
	}
	public void setQty(List<Integer> qty) {
		this.qty = qty;
	}
	public Long getColorId() {
		return colorId;
	}
	public void setColorId(Long colorId) {
		this.colorId = colorId;
	}
	public String getColor() {
		return color;
	}
	public void setColor(String colors) {
		this.color = colors;
	}
	public List<Double> getSize() {
		return size;
	}
	public void setSize(List<Double> size) {
		this.size = size;
	}
	public Double getRetailPrice() {
		return retailPrice;
	}
	public void setRetailPrice(Double retailPrice) {
		this.retailPrice = retailPrice;
	}
	public Double getSalePrice() {
		return salePrice;
	}
	public void setSalePrice(Double salePrice) {
		this.salePrice = salePrice;
	}
	public List<SizeQuantityPriceDTO> getSizeDetails() {
		return sizeDetails;
	}
	public void setSizeDetails(List<SizeQuantityPriceDTO> sizeDetails) {
		this.sizeDetails = sizeDetails;
	}
	public Boolean getIsPreorder() {
		return isPreorder;
	}
	public void setIsPreorder(Boolean isPreorder) {
		this.isPreorder = isPreorder;
	}
	public Boolean getShowOnSite() {
		return showOnSite;
	}
	public void setShowOnSite(Boolean showOnSite) {
		this.showOnSite = showOnSite;
	}
	
	
	
}
