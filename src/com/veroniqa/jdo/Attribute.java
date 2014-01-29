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

@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class Attribute implements Serializable,Comparable<Attribute>{
	
	private static final long serialVersionUID = 1311L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private String name;
	
	@Persistent
	private String attributeTypeName;
	
	@Persistent
	private Key attributeTypeKey;
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Date dateDeleted;	
	
	@Persistent
	private Boolean deleted;
	
	@Persistent
	private Boolean enabledForTopMenu;
	
	@Persistent
	private Boolean enabledForSaleMenu;	
	
	@Persistent
	private Key brandKey;	
	
	@Persistent
	private Boolean enabled;
	
	@Persistent
	private String brandURL;
	
	@Persistent
	private List<String> restrictedCountries;
	
	@Persistent
	private List<String> socialCategory;
	
	
	
	
	
	
	public List<String> getRestrictedCountries() {
		return restrictedCountries;
	}

	public void setRestrictedCountries(List<String> restrictedCountries) {
		this.restrictedCountries = restrictedCountries;
	}

	public Key getBrandKey() {
		return brandKey;
	}

	public void setBrandKey(Key brandKey) {
		this.brandKey = brandKey;
	}
	 
	public String getAttributeTypeName() {
		return attributeTypeName;
	}

	public void setAttributeTypeName(String attributeTypeName) {
		this.attributeTypeName = attributeTypeName;
	}

	public Key getAttributeTypeKey() {
		return attributeTypeKey;
	}

	public void setAttributeTypeKey(Key attributeTypeKey) {
		this.attributeTypeKey = attributeTypeKey;
	}

	public Boolean getEnabledForTopMenu() {
		return enabledForTopMenu;
	}

	public void setEnabledForTopMenu(Boolean enabledForTopMenu) {
		this.enabledForTopMenu = enabledForTopMenu;
	}

	public Boolean getEnabledForSaleMenu() {
		return enabledForSaleMenu;
	}

	public void setEnabledForSaleMenu(Boolean enabledForSaleMenu) {
		this.enabledForSaleMenu = enabledForSaleMenu;
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

		public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}
	
	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}

	public Boolean getEnabled() {
		return enabled;
	}

	public void setBrandURL(String brandURL) {
		this.brandURL = brandURL;
	}

	public String getBrandURL() {
		return brandURL;
	}
	public List<String> getSocialCategory() {
		return socialCategory;
	}

	public void setSocialCategory(List<String> socialCategory) {
		this.socialCategory = socialCategory;
	}

	public void copy(Attribute attribute) {		
		
		if(attribute.getDateAdded()!=null)
			this.setDateAdded(attribute.getDateAdded());	
		if(attribute.getName()!=null&&!"".equals(attribute.getName()))
			this.setName(attribute.getName());
		if(attribute.getDeleted()!=null)
			this.setDeleted(attribute.getDeleted());
		if(attribute.getDateDeleted()!=null)
			this.setDateDeleted(attribute.getDateDeleted());
		if(attribute.getEnabledForSaleMenu()!=null)
			this.setEnabledForSaleMenu(attribute.getEnabledForSaleMenu());
		if(attribute.getEnabledForTopMenu()!=null)
			this.setEnabledForTopMenu(attribute.getEnabledForTopMenu());
		if(attribute.getAttributeTypeName()!=null)
			this.setAttributeTypeName(attribute.getAttributeTypeName());
		if(attribute.getAttributeTypeKey()!=null)
			this.setAttributeTypeKey(attribute.getAttributeTypeKey());
		if(attribute.getRestrictedCountries()!=null)
			this.setRestrictedCountries(attribute.getRestrictedCountries());
		if(attribute.getSocialCategory()!=null)
			this.setSocialCategory(attribute.getSocialCategory());
	}

	@Override
	public int compareTo(Attribute attribute) {
		// TODO Auto-generated method stub
		return name.compareToIgnoreCase(attribute.getName());
	}

}
