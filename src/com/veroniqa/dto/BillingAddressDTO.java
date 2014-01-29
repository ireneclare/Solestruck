package com.veroniqa.dto;
import java.io.Serializable;



public class BillingAddressDTO implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = -7649393553761750798L;

	private Long id;
	
	private String street1;
	
	
	private String street2;
	

	private String street3;
	
	
	private String country;
	
	private String countryName;
	

	private String province;
	
	
	private String state;
	
	private String stateName;
	
	private String zipCode;	

	private String firstName;
	
	private String lastName;
	
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
	
	public String getStateName() {
		return stateName;
	}


	public void setStateName(String stateName) {
		this.stateName = stateName;
	}


	public String getZipCode() {
		return zipCode;
	}


	public void setZipCode(String zipCode) {
		this.zipCode = zipCode;
	}


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


	public String getCountryName() {
		return countryName;
	}


	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}


	public Long getId() {
		return id;
	}


	public void setId(Long id) {
		this.id = id;
	}
	
	
	


	
}
