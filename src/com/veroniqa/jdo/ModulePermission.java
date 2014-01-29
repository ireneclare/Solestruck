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
public class ModulePermission implements Serializable {
	
	private static final long serialVersionUID = 471L;
	
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private Key module;
	
	@Persistent
	private Integer rdWrPermission;
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Key user;
	
	
	

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}

	public Key getUser() {
		return user;
	}

	public void setUser(Key user) {
		this.user = user;
	}

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public Key getModule() {
		return module;
	}

	public void setModule(Key moduleName) {
		this.module = moduleName;
	}

	public Integer getRdWrPermission() {
		return rdWrPermission;
	}

	public void setRdWrPermission(Integer rdWrPermission) {
		this.rdWrPermission = rdWrPermission;
	}	
	
	
	
	
}
