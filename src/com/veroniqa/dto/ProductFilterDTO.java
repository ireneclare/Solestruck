package com.veroniqa.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import com.google.appengine.api.datastore.Key;

public class ProductFilterDTO implements Serializable{
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	private List<Long> sizes=new ArrayList<Long>();
	private List<Long> colors=new ArrayList<Long>();
	private List<Long> styles=new ArrayList<Long>();
	private List<String> gender=new ArrayList<String>();
	private List<Long> brands=new ArrayList<Long>();
	private Long vendor;
	private String vendorName;
	private Boolean isNewArrival=false;
	private Boolean isSort=false;
	private Boolean isSale=false;
	private Boolean isNew=false;
	private Boolean isVintage=false;
	private Boolean isComingSoon=false;
	private Long saleSize;
	private Double minPrice=10.0;
	private Double maxPrice=1000.0;
	private Boolean isPriceLowHigh=false;
	private Boolean isPriceHighLow=false;
	private Integer minSalePercentage=0;
	private Integer maxSalePercentage=70;
	private String socialCategory;
	
	public ProductFilterDTO(){}

	public List<Long> getSizes() {
		return sizes;
	}

	public void setSizes(List<Long> sizes) {
		this.sizes = sizes;
	}

	public List<Long> getColors() {
		return colors;
	}

	public void setColors(List<Long> colors) {
		this.colors = colors;
	}

	public List<Long> getStyles() {
		return styles;
	}

	public void setStyles(List<Long> styles) {
		this.styles = styles;
	}

	public Double getMinPrice() {
		return minPrice;
	}

	public void setMinPrice(Double minPrice) {
		this.minPrice = minPrice;
	}

	public Double getMaxPrice() {
		return maxPrice;
	}

	public void setMaxPrice(Double maxPrice) {
		this.maxPrice = maxPrice;
	}
	
	public Long getVendor() {
		return vendor;
	}

	public void setVendor(Long vendors) {
		this.vendor = vendors;
	}
	
	public String getVendorName() {
		return vendorName;
	}

	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
	}
	
	public Boolean getIsNewArrival() {
		return isNewArrival;
	}

	public void setIsNewArrival(Boolean isNewArrival) {
		this.isNewArrival = isNewArrival;
	}
	
	public Boolean getIsSale() {
		return isSale;
	}

	public void setIsSale(Boolean isSale) {
		this.isSale = isSale;
	}

	public Long getSaleSize() {
		return saleSize;
	}

	public void setSaleSize(Long saleSize) {
		this.saleSize = saleSize;
	}
	
	public Boolean getIsVintage() {
		return isVintage;
	}

	public void setIsVintage(Boolean isVintage) {
		this.isVintage = isVintage;
	}
	
	public String getSocialCategory() {
		return socialCategory;
	}

	public void setSocialCategory(String socialCategory) {
		this.socialCategory = socialCategory;
	}
	
	public List<String> getGender() {
		return gender;
	}

	public void setGender(List<String> gender) {
		this.gender = gender;
	}

	public List<Long> getBrands() {
		return brands;
	}

	public void setBrands(List<Long> brands) {
		this.brands = brands;
	}
	public Boolean getIsNew() {
		return isNew;
	}

	public void setIsNew(Boolean isNew) {
		this.isNew = isNew;
	}

	public Integer getMinSalePercentage() {
		return minSalePercentage;
	}

	public void setMinSalePercentage(Integer minSalePercentage) {
		this.minSalePercentage = minSalePercentage;
	}

	public Integer getMaxSalePercentage() {
		return maxSalePercentage;
	}

	public void setMaxSalePercentage(Integer maxSalePercentage) {
		this.maxSalePercentage = maxSalePercentage;
	}

	public Boolean getIsSort() {
		return isSort;
	}

	public void setIsSort(Boolean isSort) {
		this.isSort = isSort;
	}

	public Boolean getIsComingSoon() {
		return isComingSoon;
	}

	public void setIsComingSoon(Boolean isComingSoon) {
		this.isComingSoon = isComingSoon;
	}

	public Boolean getIsPriceLowHigh() {
		return isPriceLowHigh;
	}

	public void setIsPriceLowHigh(Boolean isPriceLowHigh) {
		this.isPriceLowHigh = isPriceLowHigh;
	}

	public Boolean getIsPriceHighLow() {
		return isPriceHighLow;
	}

	public void setIsPriceHighLow(Boolean isPriceHighLow) {
		this.isPriceHighLow = isPriceHighLow;
	}
	
	
	
	
}
