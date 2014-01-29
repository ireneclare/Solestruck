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
public class EmailSubscription implements Serializable {
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	/*@Persistent
	private MailType mailType;*/
	
	@Persistent
	private String custEmailID;
	
	@Persistent
	private Boolean subscribe;
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Date dateRemoved;

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	/*public MailType getMailType() {
		return mailType;
	}

	public void setMailType(MailType mailType) {
		this.mailType = mailType;
	}*/

	public String getCustEmailID() {
		return custEmailID;
	}

	public void setCustEmailID(String custEmailID) {
		this.custEmailID = custEmailID;
	}

	public Boolean getSubscribe() {
		return subscribe;
	}

	public void setSubscribe(Boolean subscribe) {
		this.subscribe = subscribe;
	}

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}

	public Date getDateRemoved() {
		return dateRemoved;
	}

	public void setDateRemoved(Date dateRemoved) {
		this.dateRemoved = dateRemoved;
	}
	
	public void copy(EmailSubscription esub)
	{
		if(esub.getCustEmailID()!=null)
			this.setCustEmailID(esub.getCustEmailID());
		
		if(esub.getDateAdded()!=null)
			this.setDateAdded(esub.getDateAdded());
		
		if(esub.getDateRemoved()!=null)
			this.setDateRemoved(esub.getDateRemoved());
		
		if(esub.getSubscribe()!=null)
			this.setSubscribe(esub.getSubscribe());
		
		
		
	}
	
}
