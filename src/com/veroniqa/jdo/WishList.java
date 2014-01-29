package com.veroniqa.jdo;

import java.util.Date;
import java.util.List;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable
public class WishList {
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private Key customerId;		
	
	@Persistent
	private Key brandKey;
		
	@Persistent
	private String emailid;
	
	@Persistent
	private List<Key> wishListItems;
	
	@Persistent
	private Boolean mailSent=false;
	
	@Persistent
	private Date dateAdded;
	
	
	public Boolean getMailSent() {
		return mailSent;
	}

	public void setMailSent(Boolean mailSent) {
		this.mailSent = mailSent;
	}

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public Key getCustomerId() {
		return customerId;
	}

	public void setCustomerId(Key customerId) {
		this.customerId = customerId;
	}

	public List<Key> getWishListItems() {
		return wishListItems;
	}

	public void setWishListItems(List<Key> wishListItems) {
		this.wishListItems = wishListItems;
	}

		
	
	public Key getBrandKey() {
		return brandKey;
	}

	public void setBrandKey(Key brandKey) {
		this.brandKey = brandKey;
	}

	
	public String getEmailid() {
		return emailid;
	}

	public void setEmailid(String emailid) {
		this.emailid = emailid;
	}

	public void copy(WishList wishList)
	{
		if(wishList.getCustomerId()!=null)
			this.setCustomerId(wishList.getCustomerId());
		if(wishList.getWishListItems()!=null)
			this.setWishListItems(wishList.getWishListItems());
		if(wishList.getEmailid()!=null)
			this.setEmailid(wishList.getEmailid());
		if(wishList.getBrandKey()!=null)
			this.setBrandKey(wishList.getBrandKey());
		if(wishList.getMailSent()!=null)
			this.setMailSent(wishList.getMailSent());
		if(wishList.getDateAdded()!=null)
			this.setDateAdded(wishList.getDateAdded());
		
	}

}
