package com.veroniqa.jdo;
import java.io.Serializable;
import java.util.Date;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.PrimaryKey;
import javax.jdo.annotations.Persistent;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.Text;


@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
/**
 * This class holds Vendor Information
 */
public class Vendor implements Serializable {

	
	private static final long serialVersionUID = 1L;
	
	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Key key;
	
	@Persistent
	private String name;
	
	@Persistent
	private Double markUpPercentage=55.0;	

	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Date dateDeleted;
	
	@Persistent
	private Key attributeKey;
	
	@Persistent
	private Boolean deleted;
	
	@Persistent
	private Boolean enabled;
	
	@Persistent
	private Text description;
	
	@Persistent 
	private String nameInLowerCase;
	
	@Persistent
	private Boolean htmlEnabled;
	
	@Persistent
	private Text htmlMessage;
	
	@Persistent
	private Boolean htmlEnabledForMen;
	
	
	public Boolean getHtmlEnabledForMen() {
		return htmlEnabledForMen;
	}


	public void setHtmlEnabledForMen(Boolean htmlEnabledForMen) {
		this.htmlEnabledForMen = htmlEnabledForMen;
	}


	
	
	public String getHtmlMessage() {
		if(htmlMessage!=null)
			return htmlMessage.getValue();
		else
			return "";
	}


	public void setHtmlMessage(String htmlMessage) {
		this.htmlMessage = new Text(htmlMessage);
	}


	public Boolean getHtmlEnabled() {
		return htmlEnabled;
	}


	public void setHtmlEnabled(Boolean htmlEnabled) {
		this.htmlEnabled = htmlEnabled;
	}
	
	
	public String getNameInLowerCase() {
		return nameInLowerCase;
	}


	public void setNameInLowerCase(String nameInLowerCase) {
		this.nameInLowerCase = nameInLowerCase;
	}


	public String getDescription() {
		if(description!=null)
			return description.getValue();
		else
			return "";
	}


	public void setDescription(String description) {
		this.description = new Text(description);
	}


	public Boolean getEnabled() {
		return enabled;
	}


	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
	}


	public Double getMarkUpPercentage() {
		return markUpPercentage;
	}


	public void setMarkUpPercentage(Double markUpPercentage) {
		this.markUpPercentage = markUpPercentage;
	}


	public Key getAttributeKey() {
		return attributeKey;
	}


	public void setAttributeKey(Key attributeKey) {
		this.attributeKey = attributeKey;
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
	

	public void copy(Vendor vendor)
	{
		if(vendor.getDateAdded()!=null)
			this.setDateAdded(vendor.getDateAdded());
		if(vendor.getDeleted()!=null)
			this.setDeleted(vendor.getDeleted());
		if(vendor.getKey()!=null)
			this.setKey(vendor.getKey());
		if(vendor.getName()!=null)
			this.setName(vendor.getName());
		if(vendor.getMarkUpPercentage()!=null)
			this.setMarkUpPercentage(vendor.getMarkUpPercentage());
		if(vendor.getDescription()!=null&&!"".equals(vendor.getDescription()))
			this.setDescription(vendor.getDescription());
		if(vendor.getNameInLowerCase()!=null)
			this.setNameInLowerCase(vendor.getNameInLowerCase());
		
		if(vendor.getHtmlMessage()!=null && !"".equals(vendor.getHtmlMessage()))
			this.setHtmlMessage(vendor.getHtmlMessage());
		if(vendor.getHtmlEnabled()!=null)
			this.setHtmlEnabled(vendor.getHtmlEnabled());
		if(vendor.getHtmlEnabledForMen()!=null)
			this.setHtmlEnabledForMen(vendor.getHtmlEnabledForMen());
	}
	
	

}
