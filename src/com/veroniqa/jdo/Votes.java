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
public class Votes implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -304861445980868452L;
	
	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Key key;
	
	@Persistent
	private Key productKey;
	
	@Persistent
	private Key colorKey;
	
	@Persistent
	private Integer votes;

	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Key brandKey; 
	
	@Persistent
	private Boolean deleted;
	
	@Persistent
	private Date dateDeleted;
	
	
	
	
	
	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
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

	public Key getBrandKey() {
		return brandKey;
	}

	public void setBrandKey(Key brandKey) {
		this.brandKey = brandKey;
	}

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}

	
	public Key getProductKey() {
		return productKey;
	}

	public void setProductKey(Key productKey) {
		this.productKey = productKey;
	}

	public Key getColorKey() {
		return colorKey;
	}

	public void setColorKey(Key colorKey) {
		this.colorKey = colorKey;
	}
	

	
	public Integer getVotes() {
		return votes;
	}

	public void setVotes(Integer votes) {
		this.votes = votes;
	}

	public void copy(Votes vote) {	
		
		if(vote.getDateAdded()!=null)
			this.setDateAdded(vote.getDateAdded());		
		if(vote.getColorKey()!=null)
			this.setColorKey(vote.getColorKey());		
		if(vote.getVotes()!=null)
			this.setVotes(vote.getVotes());		
		if(vote.getProductKey()!=null)
			this.setProductKey(vote.getProductKey());		
		if(vote.getDeleted()!=null)
			this.setDeleted(vote.getDeleted());
		if(vote.getDateDeleted()!=null)
			this.setDateDeleted(vote.getDateDeleted());
		if(vote.getBrandKey()!=null)
			this.setBrandKey(vote.getBrandKey());
		if(vote.getKey()!=null)
			this.setKey(vote.getKey());
		
	}


}
