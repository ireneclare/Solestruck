package com.veroniqa.jdo;

import java.io.Serializable;
import java.util.Date;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;

/**
 * 
 * @author k3g
 *This JDO is used to store the data specific to a Brand.
 */


@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class Brand implements Serializable{
	
	private static final long serialVersionUID = 111L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private String name;
	
	@Persistent
	private String brandURL;		
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Date dateDeleted;
	
	@Persistent
	private Boolean enabled;
	
	@Persistent
	private Boolean deleted;	
	

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

	public Boolean getEnabled() {
		return enabled;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
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

	public String getBrandURL() {
		return brandURL;
	}

	public void setBrandURL(String brandURL) {
		this.brandURL = brandURL;
	}

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}	
		
	
	public void copy(Brand brand) {
		
		this.setBrandURL(brand.getBrandURL());
		this.setDateAdded(brand.getDateAdded());
		this.setEnabled(brand.getEnabled());
		this.setName(brand.getName());
		this.setDeleted(brand.getDeleted());
		this.setDateDeleted(brand.getDateDeleted());
	}

}
