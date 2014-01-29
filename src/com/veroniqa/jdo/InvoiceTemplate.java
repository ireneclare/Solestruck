package com.veroniqa.jdo;

import java.io.Serializable;
import java.util.Date;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.Text;

/**
 * 
 * @author k3g
 *This JDO is used to store the data specific to a Email Template.
 */


@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class InvoiceTemplate implements Serializable{
	
	private static final long serialVersionUID = 114566001L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private Key brandId;
	
	@Persistent
	private String emailName;		
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Date dateDeleted;
	
	@Persistent
	private Boolean deleted;	
		
	@Persistent
	private Text invoiceContent;
	
	
	

	public void copy(InvoiceTemplate brand) {
		
		if (brand.getBrandId() != null) {
		this.setBrandId(brand.getBrandId());
		}
		if (brand.getDateAdded() != null) {
		this.setDateAdded(brand.getDateAdded());
		}
		if (brand.getInvoiceContent() != null) {
		this.setInvoiceContent(brand.getInvoiceContent());
		}
		if (brand.getEmailName() != null) {
		this.setEmailName(brand.getEmailName());
		}
		if (brand.getDeleted() != null) {
		this.setDeleted(brand.getDeleted());
		}
		if (brand.getDateDeleted() != null) {
		this.setDateDeleted(brand.getDateDeleted());
		}
	}




	public Key getKey() {
		return key;
	}




	public void setKey(Key key) {
		this.key = key;
	}




	public Key getBrandId() {
		return brandId;
	}




	public void setBrandId(Key brandId) {
		this.brandId = brandId;
	}




	public String getEmailName() {
		return emailName;
	}




	public void setEmailName(String emailName) {
		this.emailName = emailName;
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




	public String getInvoiceContent() {
		return invoiceContent.getValue();
	}




	public void setInvoiceContent(String invoiceContent) {
		this.invoiceContent = new Text(invoiceContent);
	}




	
	
	
	

}
