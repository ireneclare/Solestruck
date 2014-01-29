package com.veroniqa.jdo;

import java.util.Date;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable
public class WishListItem {
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Key key;
	
	@Persistent
	private Key productVariant;
	
	@Persistent
	private Boolean mailSent;
	
	@Persistent
	private Key cusomerId;
	
	@Persistent
	private Key brandId;
	
	@Persistent
	private String emailId;
		
	@Persistent
	private Date dateAdded;
	
	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public Key getProductVariant() {
		return productVariant;
	}

	public void setProductVariant(Key productVariant) {
		this.productVariant = productVariant;
	}

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}
	

	public Boolean getMailSent() {
		return mailSent;
	}

	public void setMailSent(Boolean mailSent) {
		this.mailSent = mailSent;
	}

	
	public Key getCusomerId() {
		return cusomerId;
	}

	public void setCusomerId(Key cusomerId) {
		this.cusomerId = cusomerId;
	}

	
	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}
	
	
	public Key getBrandId() {
		return brandId;
	}

	public void setBrandId(Key brandId) {
		this.brandId = brandId;
	}

	public void copy(WishListItem item)
	{
		if(item.getProductVariant()!=null)
			this.setProductVariant(item.getProductVariant());
		if(item.getDateAdded()!=null)
			this.setDateAdded(item.getDateAdded());
		if(item.getBrandId()!=null)
			this.setBrandId(item.getBrandId());
		if(item.getCusomerId()!=null)
			this.setCusomerId(item.getCusomerId());
		if(item.getMailSent()!=null)
			this.setMailSent(item.getMailSent());
		if(item.getEmailId()!=null)
			this.setEmailId(item.getEmailId());
	}
}
