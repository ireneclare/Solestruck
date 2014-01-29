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
 * @author k3g This JDO is used to store the data specific to a Email Template.
 */

@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable = "true")
public class EmailTemplate implements Serializable {

	private static final long serialVersionUID = 11456001L;

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
	private Text textMessage;

	@Persistent
	private Text htmlMessage;

	public void copy(EmailTemplate brand) {

		if (brand.getBrandId() != null) {
			this.setBrandId(brand.getBrandId());
		}
		if (brand.getDateAdded() != null) {
			this.setDateAdded(brand.getDateAdded());
		}
		if (brand.getTextMessage() != null) {
			this.setTextMessage(brand.getTextMessage());
		}
		if (brand.getHtmlMessage() != null) {
			this.setHtmlMessage(brand.getHtmlMessage());
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

	public String getTextMessage() {
		return textMessage.getValue();
	}

	public void setTextMessage(String textMessage) {
		this.textMessage = new Text(textMessage);
	}

	public String getHtmlMessage() {
		return htmlMessage.getValue();
	}

	public void setHtmlMessage(String htmlMessage) {
		this.htmlMessage = new Text(htmlMessage);
	}

}
