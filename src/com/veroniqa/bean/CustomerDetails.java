package com.veroniqa.bean;

import java.io.Serializable;

import javax.xml.bind.annotation.XmlRootElement;

/**
 * This class holds information concerning customer details.
 * By SHI
 * Date April 11th 2011
 */
public class CustomerDetails implements Serializable {

	public CustomerDetails(){}
	
	private String custCode;
	private String custId;
	private String vatRegNum;
	private String dob;
	public String getCustCode() {
		return custCode;
	}
	public void setCustCode(String custCode) {
		this.custCode = custCode;
	}
	public String getCustId() {
		return custId;
	}
	public void setCustId(String custId) {
		this.custId = custId;
	}
	public String getVatRegNum() {
		return vatRegNum;
	}
	public void setVatRegNum(String vatRegNum) {
		this.vatRegNum = vatRegNum;
	}
	public String getDob() {
		return dob;
	}
	public void setDob(String dob) {
		this.dob = dob;
	}
	
	
}
