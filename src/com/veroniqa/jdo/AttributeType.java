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
public class AttributeType implements Serializable{
	
	private static final long serialVersionUID = 1211L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private String name;
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Date dateDeleted;
	
	@Persistent
	private Boolean deleted;		
	
	@Persistent
	private Key brandKey;
	

	public Key getBrandKey() {
		return brandKey;
	}

	public void setBrandKey(Key brandKey) {
		this.brandKey = brandKey;
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
		
	
	public void copy(AttributeType attributetype) {	
		
		if(attributetype.getDateAdded()!=null)
			this.setDateAdded(attributetype.getDateAdded());		
		if(attributetype.getName()!=null)
			this.setName(attributetype.getName());
		if(attributetype.getDeleted()!=null)
			this.setDeleted(attributetype.getDeleted());
		if(attributetype.getDateDeleted()!=null)
			this.setDateDeleted(attributetype.getDateDeleted());
		if(attributetype.getBrandKey()!=null)
			this.setBrandKey(attributetype.getBrandKey());
		if(attributetype.getKey()!=null)
			this.setKey(attributetype.getKey());
		
	}

}
