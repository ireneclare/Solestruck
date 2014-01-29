package com.veroniqa.dto;

import java.io.Serializable;
import java.util.Set;

/**
 *SHI
 *Light weight object for Country JDO 
 */
public class CountryDTO implements Serializable,Comparable<CountryDTO> {

	private static final long serialVersionUID = -6094459614886018440L;
	private String countryCode;
	private String countryName;
	private String countryCodeExt;
	private Set<StateDTO> stateList;
	
	public String getCountryCode() {
		return countryCode;
	}

	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}

	public String getCountryName() {
		return countryName;
	}

	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}

	public String getCountryCodeExt() {
		return countryCodeExt;
	}

	public void setCountryCodeExt(String countryCodeExt) {
		this.countryCodeExt = countryCodeExt;
	}

	public Set<StateDTO> getStateList() {
		return stateList;
	}

	public void setStateList(Set<StateDTO> stateList) {
		this.stateList = stateList;
	}

	@Override
	public int compareTo(CountryDTO country) {
		if(country==null)
			return -1;
		if(this.countryName==null||country.countryName==null)
			return -1;
		
		return this.countryName.compareTo(country.countryName);
	}

	@Override
	public boolean equals(Object obj) {
		if(obj==null)
			return false;
		CountryDTO country=(CountryDTO)obj;
		if(country.countryCode==null||this.countryCode==null)
			return false;
		
		return this.countryCode.equals(country.countryCode);
	}
}
