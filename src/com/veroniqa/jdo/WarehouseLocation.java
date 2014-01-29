package com.veroniqa.jdo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class WarehouseLocation implements Serializable{
	
	private static final long serialVersionUID = 131L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	//@Persistent
	//private Key color;
	
	//@Persistent
	//private Key productkey;
	
	@Persistent
	private String row;
	
	@Persistent
	private String section;
	
	@Persistent
	private String shelf;
	
	@Persistent
	private Integer shelflet;
	
	@Persistent 
	private Integer shelfletpos;
	
	//@Persistent
	//private Key geographicallocation;
	
	//@Persistent
	//private Double size;
		
	@Persistent
	private Date dateAdded;
	
	//@Persistent
	//private Double wholeSalePrice;
	
	//@Persistent
	//private Double retailPrice;
	
	//@Persistent
	//private Double salePrice;
	
	//@Persistent
	//private Boolean preOrder;
	
	//@Persistent
	//private Boolean showShoe;
	
	//@Persistent
	//private Boolean archived;	
	
	@Persistent
	private List<String> countriesRestricted=new ArrayList<String>();
	
	//@Persistent
	//private String inventoryTrackingNumber;	
	
	//@Persistent
	//private Integer votes;
	
	//@Persistent
	//private Key brand;
	
	//@Persistent(defaultFetchGroup = "true")	
	//private List<PricingHistory> pricingHistory=new ArrayList<PricingHistory>();
	
	

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}
	
	public String getRow() {
		return row;
	}

	public void setRow(String row) {
		this.row = row;
	}

	public String getSection() {
		return section;
	}

	public void setSection(String section) {
		this.section = section;
	}

	public String getShelf() {
		return shelf;
	}

	public void setShelf(String shelf) {
		this.shelf = shelf;
	}
/*
	public Double getSize() {
		return size;
	}

	public void setSize(Double size) {
		this.size = size;
	}
*/
	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}
	public List<String> getCountriesRestricted() {
		return countriesRestricted;
	}

	public void setCountriesRestricted(ArrayList<String> countriesRestricted) {
		this.countriesRestricted = countriesRestricted;
	}
/*
	public Double getWholeSalePrice() {
		return wholeSalePrice;
	}

	public void setWholeSalePrice(Double wholeSalePrice) {
		this.wholeSalePrice = wholeSalePrice;
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

	public Boolean getPreOrder() {
		return preOrder;
	}

	public void setPreOrder(Boolean preOrder) {
		this.preOrder = preOrder;
	}

	public Boolean getShowShoe() {
		return showShoe;
	}

	public void setShowShoe(Boolean showShoe) {
		this.showShoe = showShoe;
	}

	public Boolean getArchived() {
		return archived;
	}

	public void setArchived(Boolean archived) {
		this.archived = archived;
	}

	public String getInventoryTrackingNumber() {
		return inventoryTrackingNumber;
	}

	public void setInventoryTrackingNumber(String inventoryTrackingNumber) {
		this.inventoryTrackingNumber = inventoryTrackingNumber;
	}

	public Integer getVotes() {
		return votes;
	}

	public void setVotes(Integer votes) {
		this.votes = votes;
	}

	public Key getBrand() {
		return brand;
	}

	public void setBrand(Key brand) {
		this.brand = brand;
	}	
   
	public Key getProductkey() {
		return productkey;
	}
	public void setProductkey(Key productkey) {
		this.productkey = productkey;
	}
	*/
	
	public Integer getShelflet() {
		return shelflet;
	}

	public void setShelfLet(Integer shelflet) {
		this.shelflet = shelflet;
	}

	public Integer getShelfLetPosition() {
		return shelfletpos;
	}

	public void setShelfLetPosition(Integer shelfletpos) {
		this.shelfletpos = shelfletpos;
	}

	
/*
	public Key getGeographicallocation() {
		return geographicallocation;
	}

	public void setGeographicallocation(Key geographicallocation) {
		this.geographicallocation = geographicallocation;
	}
*/

}
