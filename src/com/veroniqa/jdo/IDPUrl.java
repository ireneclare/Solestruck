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
 * @author sag
 *This JDO is used to do the URL Mapping for IDP SEO specific to a Vendor.
 */


@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class IDPUrl implements Serializable{

	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private String vendorName;
	
	@Persistent
	private String productName;
	
	@Persistent
	private String lcProductName;
	
	@Persistent
	private String colorName;
	
	@Persistent
	private Long vendorId;
	
	@Persistent
	private Long productId;
	
	@Persistent
	private Long colorId;
	
	@Persistent
	private String originalUrl;
	
	@Persistent
	private String redirectedUrl;
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Date dateDeleted;	
	
	@Persistent
	private Boolean deleted;

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

	public Long getColorId() {
		return colorId;
	}

	public void setColorId(Long colorId) {
		this.colorId = colorId;
	}

	

	public String getRedirectedUrl() {
		return redirectedUrl;
	}

	public void setRedirectedUrl(String redirectedUrl) {
		this.redirectedUrl = redirectedUrl;
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
	
	public String getOriginalUrl() {
		return originalUrl;
	}

	public void setOriginalUrl(String originalUrl) {
		this.originalUrl = originalUrl;
	}

	public String getLcProductName() {
		return lcProductName;
	}

	public void setLcProductName(String lcProductName) {
		this.lcProductName = lcProductName;
	}

public void copy(IDPUrl idpUrl) {		
		
	if(idpUrl.getDateAdded()!=null)
			this.setDateAdded(idpUrl.getDateAdded());
	
	if(idpUrl.getDeleted()!=null)
		this.setDeleted(idpUrl.getDeleted());	
	
	if(idpUrl.getDateDeleted()!=null)
		this.setDateDeleted(idpUrl.getDateDeleted());	
	
	if(idpUrl.getColorId()!=null)
		this.setColorId(idpUrl.getColorId());
	
	
	if(idpUrl.getColorName()!=null)
		this.setColorName(idpUrl.getColorName());
	
	
	if(idpUrl.getOriginalUrl()!=null)
		this.setOriginalUrl(idpUrl.getOriginalUrl());	
	
	if(idpUrl.getProductId()!=null)
		this.setProductId(idpUrl.getProductId());	
	
	
	if(idpUrl.getProductName()!=null)
		this.setProductName(idpUrl.getProductName());	
	
	if(idpUrl.getRedirectedUrl()!=null)
		this.setRedirectedUrl(idpUrl.getRedirectedUrl());	
	
	
	if(idpUrl.getVendorId()!=null)
		this.setVendorId(idpUrl.getVendorId());	
	
	if(idpUrl.getVendorName()!=null)
		this.setVendorName(idpUrl.getVendorName());	
	
	
	
	}	

	
	
}
