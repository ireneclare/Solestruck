package com.veroniqa.dto;

import java.io.Serializable;
import java.util.List;

import com.veroniqa.jdo.Vendor;

public class VendorDetailDTO implements Serializable{
	
	private static final long serialVersionUID = 69891451L;
	
	private List<Vendor> vendorList;

	public List<Vendor> getVendorList() {
		return vendorList;
	}

	public void setVendorList(List<Vendor> vendorList) {
		this.vendorList = vendorList;
	}
	
	
	
	
	


}
