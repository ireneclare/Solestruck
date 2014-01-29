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

@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class OrderHistoryRecord implements Serializable{
	
	private static final long serialVersionUID = 135441L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private String action;
	
	@Persistent
	private String user;
	
	@Persistent
	private String notes;	
	
	@Persistent
	private Text comments;
		
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Date dateDeleted;

	@Persistent
	private Boolean deleted;
	
	

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

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public String getAction() {
		return action;
	}

	public void setAction(String action) {
		this.action = action;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}
	
	public String getComments() {
		return comments.getValue();
	}

	public void setComments(String comments) {
		this.comments = new Text(comments);
	}

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}	
	
	public void copy(OrderHistoryRecord orderHistory)
	{
		this.setAction(orderHistory.getAction());
		this.setDateAdded(orderHistory.getDateAdded());
		this.setDateDeleted(orderHistory.getDateDeleted());
		this.setNotes(orderHistory.getNotes());
		this.setComments(orderHistory.getComments());
		this.setUser(orderHistory.getUser());
	}
		

}
