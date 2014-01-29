package com.veroniqa.jdo;

import java.io.Serializable;
//import java.util.ArrayList;
import java.util.Date;
//import java.util.List;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class GeographicalWarehouseLocation implements Serializable{
	
	private static final long serialVersionUID = 131L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private String name;	
	
	@Persistent
	private String addressLine1;
	
	@Persistent
	private String addressLine2;
	
	@Persistent
	private String country;
	
	@Persistent
	private String province;
	
	@Persistent
	private String city;
	
	@Persistent
	private String zipCode;
	
	@Persistent
	private String latitude;
	
	@Persistent
	private String longitude;
	
	@Persistent
	private Date dateAdded;	
	
	@Persistent
	private Key brandKey;
	
	@Persistent
	private Date dateDeleted;	
	
	@Persistent
	private Boolean deleted;	
	
	@Persistent 
	private Boolean isRetailStore;
	
	
	
	public String getAddressLine1() {
		return addressLine1;
	}

	public void setAddressLine1(String addressLine1) {
		this.addressLine1 = addressLine1;
	}

	public String getAddressLine2() {
		return addressLine2;
	}

	public void setAddressLine2(String addressLine2) {
		this.addressLine2 = addressLine2;
	}

	public String getCountry() {
		return country;
	}

	public void setCountry(String country) {
		this.country = country;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}

	public String getCity() {
		return city;
	}

	public void setCity(String city) {
		this.city = city;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}

	public String getLatitude() {
		return latitude;
	}

	public void setLatitude(String latitude) {
		this.latitude = latitude;
	}

	public String getLongitude() {
		return longitude;
	}

	public void setLongitude(String longitude) {
		this.longitude = longitude;
	}

	public Date getDateDeleted() {
		return dateDeleted;
	}

	public void setDateDeleted(Date dateDeleted) {
		this.dateDeleted = dateDeleted;
	}

	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}

	public Key getBrandKey() {
		return brandKey;
	}

	public void setBrandKey(Key brandKey) {
		this.brandKey = brandKey;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}	

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}
	
	
	public Boolean getIsRetailStore() {
		return isRetailStore;
	}

	public void setIsRetailStore(Boolean isRetailStore) {
		this.isRetailStore = isRetailStore;
	}

	public void copy(GeographicalWarehouseLocation location)
	{
		setAddressLine1(location.getAddressLine1());
		setAddressLine2(location.getAddressLine2());
		setBrandKey(location.getBrandKey());
		setCity(location.getCity());
		setCountry(location.getCountry());
		setDateAdded(location.getDateAdded());
		setDateDeleted(location.getDateDeleted());
		setLatitude(location.getLatitude());
		setLongitude(location.getLongitude());
		setName(location.getName());
		setProvince(location.getProvince());
		setZipCode(location.getZipCode());
		setBrandKey(location.getBrandKey());
		setIsRetailStore(location.getIsRetailStore());
		
	}
/*
	@Persistent
	private Key warehouselocation;
	
	public Key getWarehouselocation() {
		return warehouselocation;
	}

	public void setWarehouselocation(Key warehouselocation) {
		this.warehouselocation = warehouselocation;
	}
*/
}
