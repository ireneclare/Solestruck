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
 * @author shp This JDO is used to store the data specific to a Customer Service Page.
 */
	@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable = "true")
	public class CustomerServicePage implements Serializable{

		private static final long serialVersionUID = 11456001L;

		@PrimaryKey
		@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
		private Key key;

		@Persistent
		private Key brandId;

		@Persistent
		private String pageName;
		
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

		public String getPageName() {
			return pageName;
		}

		public void setPageName(String pageName) {
			this.pageName = pageName;
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
		
		public void copy(CustomerServicePage page) {

			if (page.getBrandId() != null) {
				this.setBrandId(page.getBrandId());
			}
			if (page.getDateAdded() != null) {
				this.setDateAdded(page.getDateAdded());
			}
			if (page.getTextMessage() != null) {
				this.setTextMessage(page.getTextMessage());
			}
			if (page.getHtmlMessage() != null) {
				this.setHtmlMessage(page.getHtmlMessage());
			}
			if (page.getPageName() != null) {
				this.setPageName(page.getPageName());
			}
			if (page.getDeleted() != null) {
				this.setDeleted(page.getDeleted());
			}
			if (page.getDateDeleted() != null) {
				this.setDateDeleted(page.getDateDeleted());
			}
		}
		
}
