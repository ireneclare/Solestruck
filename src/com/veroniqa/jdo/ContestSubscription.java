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
public class ContestSubscription implements Serializable {
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private String firstName="";
	
	@Persistent
	private String lastName="";
	
	@Persistent
	private String custEmailID;
	
	@Persistent
	private Date dateAdded;

	
	
	public String getCustEmailID() {
		return custEmailID;
	}

	public void setCustEmailID(String custEmailID) {
		this.custEmailID = custEmailID;
	}

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	
	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}

	
	
	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		if(firstName!=null)
			this.firstName = firstName;
		else
			this.firstName="";
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		if(lastName!=null)
			this.lastName = lastName;
		else
			this.lastName="";
	}

	public void copy(ContestSubscription esub)
	{
		this.setDateAdded(esub.getDateAdded());
		
		this.setFirstName(esub.getFirstName());
		this.setLastName(esub.getLastName());
		this.setCustEmailID(esub.getCustEmailID());
		
	}
	
}
