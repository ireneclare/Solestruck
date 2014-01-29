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
public class PricingHistory implements Serializable{
	
	private static final long serialVersionUID = 401L;
	
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Key key;
	/*
	@Persistent
	private Key item;
	
	@Persistent
	private Key color;
	
	@Persistent
	private Key size;
	*/	
	@Persistent
	private Key productvariant;
	
	@Persistent
	private String priceType;
	
	@Persistent
	private Double oldPrice;
	
	@Persistent
	private Double newPrice;
	
	@Persistent
	private Key user;
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private String comment;
	
	/*

	public Key getSize() {
		return size;
	}

	public void setSize(Key size) {
		this.size = size;
	}
*/
	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}
/*
	public Key getItem() {
		return item;
	}

	public void setItem(Key item) {
		this.item = item;
	}

	public Key getColor() {
		return color;
	}

	public void setColor(Key color) {
		this.color = color;
	}
 	*/
	public Key getProductvariant() {
		return productvariant;
	}

	public void setProductvariant(Key productvariant) {
		this.productvariant = productvariant;
	}
	public String getPriceType() {
		return priceType;
	}

	public void setPriceType(String priceType) {
		this.priceType = priceType;
	}

	public Double getOldPrice() {
		return oldPrice;
	}

	public void setOldPrice(Double oldPrice) {
		this.oldPrice = oldPrice;
	}

	public Double getNewPrice() {
		return newPrice;
	}

	public void setNewPrice(Double newPrice) {
		this.newPrice = newPrice;
	}

	public Key getUser() {
		return user;
	}

	public void setUser(Key user) {
		this.user = user;
	}

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}
	
	
	
	
	
	
	

}
