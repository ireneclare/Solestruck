package com.veroniqa.jdo;
import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;

/**
 * 
 * @author shp
 *This JDO is used to store the Country List.
 */


@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class Country implements Serializable,Comparable {
	
private static final long serialVersionUID = 11345001L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private Key brandKey;
	
	@Persistent
	private String countryName;

	@Persistent
	private String CountryShortName;

	@Persistent
	private String countryCode;

	@Persistent
	private String countryCodeExt;

	@Persistent
	private Boolean hasStates;
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Date dateDeleted;
	
	@Persistent
	private Boolean enabled;
	
	@Persistent
	private Boolean deleted;
	
	@Persistent
	private List<Key> states;

	
	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public Key getBrandKey() {
		return brandKey;
	}

	public void setBrandKey(Key brandKey) {
		this.brandKey = brandKey;
	}

	public String getCountryName() {
		return countryName;
	}

	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}

	public String getCountryShortName() {
		return CountryShortName;
	}

	public void setCountryShortName(String countryShortName) {
		CountryShortName = countryShortName;
	}

	public String getCountryCode() {
		return countryCode;
	}

	public void setCountryCode(String countryCode) {
		this.countryCode = countryCode;
	}

	public String getCountryCodeExt() {
		return countryCodeExt;
	}

	public void setCountryCodeExt(String countryCodeExt) {
		this.countryCodeExt = countryCodeExt;
	}

	public Boolean getHasStates() {
		return hasStates;
	}

	public void setHasStates(Boolean hasStates) {
		this.hasStates = hasStates;
	}

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}

	public Date getDateDeleted() {
		return dateDeleted;
	}

	public void setDateDeleted(Date dateDeleted) {
		this.dateDeleted = dateDeleted;
	}

	public Boolean getEnabled() {
		return enabled;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}

	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}

	public List<Key> getStates() {
		return states;
	}

	public void setStates(List<Key> states) {
		this.states = states;
	}

	@Override
	public int compareTo(Object o) {
		// TODO Auto-generated method stub
		Country c=(Country)o;
		return this.countryName.compareToIgnoreCase(c.countryName);
	}

	
   

}
