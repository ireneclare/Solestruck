package com.veroniqa.jdo;

import java.io.Serializable;
import java.util.Date;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class Color implements Serializable,Comparable  {
	
	private static final long serialVersionUID = 111L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Key key;	
	
	@Persistent
	private Key brandKey;
	
	@Persistent
	private Key productKey;
		
	@Persistent
	private Key systemColorKey;
	
	@Persistent
	private String customColor;
	
	@Persistent
	private String systemColor;
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Date dateDeleted;
	
	@Persistent
	private String rgbString;
	
	@Persistent
	private Boolean deleted;
	
	

	public Key getProductKey() {
		return productKey;
	}

	public void setProductKey(Key productKey) {
		this.productKey = productKey;
	}

	public String getRgbString() {
		return rgbString;
	}

	public void setRgbString(String rgbString) {
		this.rgbString = rgbString;
	}

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public Key getBrandKey() {
		return brandKey;
	}

	public void setBrandKey(Key brandkey) {
		this.brandKey = brandkey;
	}

	public String getCustomColor() {
		return customColor;
	}

	public void setCustomColor(String customcolor) {
		this.customColor = customcolor;
	}

	public String getSystemColor() {
		return systemColor;
	}

	public void setSystemColor(String systemcolor) {
		this.systemColor = systemcolor;
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

	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}	
	
	

	public Key getSystemColorKey() {
		return systemColorKey;
	}

	public void setSystemColorKey(Key systemColorKey) {
		this.systemColorKey = systemColorKey;
	}

public void copy(Color color) {
	
	this.setCustomColor(color.getCustomColor());
	this.setSystemColor(color.getSystemColor());
	this.setDateAdded(color.getDateAdded());
	this.setDeleted(color.getDeleted());
	this.setSystemColorKey(color.getSystemColorKey());
	this.setBrandKey(color.getBrandKey());
	this.setDateDeleted(color.getDateDeleted());
	this.setRgbString(color.getRgbString());
}
@Override
public int compareTo(Object o) {
	// TODO Auto-generated method stub
	Color c=(Color)o;
	return this.customColor.compareToIgnoreCase(c.customColor);
}
	
}
