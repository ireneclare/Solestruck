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
 * @author femina
 * This is to accept Heart for SS Products
 * Its common for both Mobile IOS App and Site of SS.
 * Mostly this heart activity for New Arrivals.
 */

@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class ProductHeart implements Serializable{
	
	
	private static final long serialVersionUID = 1L;

	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private String vendorName;
	
	@Persistent
	private Long vendorId;
	
	@Persistent
	private Long productId;
	
	@Persistent
	private String productName;
	
	@Persistent
	private String colorName;
	
	@Persistent
	private Long colorId;
		
	@Persistent
	private Long ssPost; // This is for IOS Mobile Feed product post ID. For Site Make use of 1L.
	
	@Persistent
	private Long customerId;
	
	@Persistent
	private Boolean isHeartOn;
	
	@Persistent
	private Date dateAdded=new Date();
	
	@Persistent
	private Boolean deleted=false;
	
	@Persistent
	private Date dateDeleted;
	
	
	

	public Key getKey() {
		return key;
	}




	public void setKey(Key key) {
		this.key = key;
	}

	
	

	public String getVendorName() {
		return vendorName;
	}




	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
	}




	public Long getVendorId() {
		return vendorId;
	}




	public void setVendorId(Long vendorId) {
		this.vendorId = vendorId;
	}




	public Long getProductId() {
		return productId;
	}




	public void setProductId(Long productId) {
		this.productId = productId;
	}


	public String getProductName() {
		return productName;
	}




	public void setProductName(String productName) {
		this.productName = productName;
	}


	


	public String getColorName() {
		return colorName;
	}




	public void setColorName(String colorName) {
		this.colorName = colorName;
	}




	public Long getColorId() {
		return colorId;
	}




	public void setColorId(Long colorId) {
		this.colorId = colorId;
	}




	public Long getSsPost() {
		return ssPost;
	}




	public void setSsPost(Long ssPost) {
		this.ssPost = ssPost;
	}




	public Long getCustomerId() {
		return customerId;
	}




	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}




	public Date getDateAdded() {
		return dateAdded;
	}




	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}




	public Boolean getDeleted() {
		return deleted;
	}




	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}




	public Date getDateDeleted() {
		return dateDeleted;
	}




	public void setDateDeleted(Date dateDeleted) {
		this.dateDeleted = dateDeleted;
	}

	public Boolean getIsHeartOn() {
		return isHeartOn;
	}




	public void setIsHeartOn(Boolean isHeartOn) {
		this.isHeartOn = isHeartOn;
	}


	public void copy(ProductHeart post)
	{
		
		this.setCustomerId(post.getCustomerId());
		this.setDateAdded(post.getDateAdded());
		this.setDateDeleted(post.getDateDeleted());
		this.setDeleted(post.getDeleted());
		this.setSsPost(post.getSsPost());
		this.setIsHeartOn(post.getIsHeartOn());
		this.setVendorId(post.getVendorId());
		this.setVendorName(post.getVendorName());
		this.setProductId(post.getProductId());
		this.setProductName(post.getProductName());
		this.setColorId(post.getColorId());
		this.setColorName(post.getColorName());
	}
	
}

