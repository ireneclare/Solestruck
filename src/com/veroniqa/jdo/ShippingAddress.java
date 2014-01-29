package com.veroniqa.jdo;

import java.io.Serializable;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class ShippingAddress implements Serializable{
	
	private static final long serialVersionUID = 123584541L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private Key customerId;
	
	@Persistent
	private String firstName;
	
	@Persistent
	private String lastName;
	
	@Persistent
	private String street1;
	
	@Persistent
	private String street2;
	
	@Persistent
	private String street3;
	
	@Persistent
	private String country;
	
	@Persistent
	private String countryName;
	
	@Persistent
	private String province;
	
	@Persistent
	private String state;
	
	@Persistent
	private String stateName;
	
	@Persistent
	private String zipCode;

	
	
	
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public Key getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Key customerId) {
		this.customerId = customerId;
	}

	public String getStreet1() {
		return street1;
	}

	public void setStreet1(String street1) {
		this.street1 = street1;
	}

	public String getStreet2() {
		return street2;
	}

	public void setStreet2(String street2) {
		this.street2 = street2;
	}

	public String getStreet3() {
		return street3;
	}

	public void setStreet3(String street3) {
		this.street3 = street3;
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

	public String getState() {
		return state;
	}

	public void setState(String state) {
		this.state = state;
	}

	public String getZipCode() {
		return zipCode;
	}

	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}	
	
	
	public String getCountryName() {
		return countryName;
	}

	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}

	
	public String getStateName() {
		return stateName;
	}

	public void setStateName(String stateName) {
		this.stateName = stateName;
	}

	public void copy(ShippingAddress addr)
	{
		if(addr.getFirstName()!=null)
			this.setFirstName(addr.getFirstName());
		if(addr.getLastName()!=null)
			this.setLastName(addr.getLastName());
		if(addr.getCountry()!=null)
			this.setCountry(addr.getCountry());
		if(addr.getCustomerId()!=null)
			this.setCustomerId(addr.getCustomerId());
		if(addr.getProvince()!=null)
			this.setProvince(addr.getProvince());
		if(addr.getState()!=null)
			this.setState(addr.getState());
		if(addr.getStreet1()!=null)
			this.setStreet1(addr.getStreet1());
		if(addr.getStreet2()!=null)
			this.setStreet2(addr.getStreet2());
		if(addr.getStreet3()!=null)
			this.setStreet3(addr.getStreet3());
		if(addr.getZipCode()!=null)
			this.setZipCode(addr.getZipCode());
		if(addr.getCountryName()!=null)
			this.setCountryName(addr.getCountryName());
	}

}
