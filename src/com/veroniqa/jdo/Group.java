package com.veroniqa.jdo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class Group implements Serializable {
	
	private static final long serialVersionUID = 571L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private String groupName;
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Key user;
	
	@Persistent(defaultFetchGroup = "true")	
	private List<ModulePermission> modulePermission=new ArrayList<ModulePermission>();
	
	

	public Key getUser() {
		return user;
	}

	public void setUser(Key user) {
		this.user = user;
	}

	public List<ModulePermission> getModulePermission() {
		return modulePermission;
	}

	public void setModulePermission(List<ModulePermission> modulePermission) {
		this.modulePermission = modulePermission;
	}

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public String getGroupName() {
		return groupName;
	}

	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}


}
