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

public class SendToFriend implements Serializable {
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private MailType mailType;
	
	@Persistent
	private String vendorName;	
	
	@Persistent
	private String productName;	
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Long productID;
	
	@Persistent
	private Long colorID;
	
	@Persistent
	private Double size;
	
	@Persistent
	private Boolean mailSent;
	
	@Persistent
	private Double retailPrice;
	
	@Persistent
	private String custName;
	
	@Persistent
	private String friendName;
	
	@Persistent
	private String custEmailID;
	
	@Persistent
	private String friendEmailID;
	
	@Persistent
	private String customTextMsg;

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public MailType getMailType() {
		return mailType;
	}

	public void setMailType(MailType mailType) {
		this.mailType = mailType;
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

	public Boolean getMailSent() {
		return mailSent;
	}

	public void setMailSent(Boolean mailSent) {
		this.mailSent = mailSent;
	}

	public Double getRetailPrice() {
		return retailPrice;
	}

	public void setRetailPrice(Double retailPrice) {
		this.retailPrice = retailPrice;
	}

	public String getCustName() {
		return custName;
	}

	public void setCustName(String custName) {
		this.custName = custName;
	}

	public String getFriendName() {
		return friendName;
	}

	public void setFriendName(String friendName) {
		this.friendName = friendName;
	}

	public String getCustEmailID() {
		return custEmailID;
	}

	public void setCustEmailID(String custEmailID) {
		this.custEmailID = custEmailID;
	}

	public String getFriendEmailID() {
		return friendEmailID;
	}

	public void setFriendEmailID(String friendEmailID) {
		this.friendEmailID = friendEmailID;
	}

	public String getCustomTextMsg() {
		return customTextMsg;
	}

	public void setCustomTextMsg(String customTextMsg) {
		this.customTextMsg = customTextMsg;
	}
	

}
