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
public class DontSeeYourSize implements Serializable {
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private MailType mailType;
	
	@Persistent
	private String emailId;	
	
	@Persistent
	private String vendorName;	
	
	@Persistent
	private String productName;	
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Boolean alertCheck;
	
	@Persistent
	private Long productID;
	
	@Persistent
	private Long colorID;
	
	@Persistent
	private Double size;
	
	@Persistent
	private Boolean mailSent;
	
	@Persistent
	private String colorName;

	
	public String getColorName() {
		return colorName;
	}

	public void setColorName(String colorName) {
		this.colorName = colorName;
	}

	public MailType getMailType() {
		return mailType;
	}

	public void setMailType(MailType mailType) {
		this.mailType = mailType;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getVendorName() {
		return vendorName;
	}

	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}

	public Boolean getAlertCheck() {
		return alertCheck;
	}

	public void setAlertCheck(Boolean alertCheck) {
		this.alertCheck = alertCheck;
	}

	public Long getProductID() {
		return productID;
	}

	public void setProductID(Long productID) {
		this.productID = productID;
	}

	public Long getColorID() {
		return colorID;
	}

	public void setColorID(Long colorID) {
		this.colorID = colorID;
	}

	public Double getSize() {
		return size;
	}

	public void setSize(Double size) {
		this.size = size;
	}

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public Boolean getMailSent() {
		return mailSent;
	}

	public void setMailSent(Boolean mailSent) {
		this.mailSent = mailSent;
	}
	
}
