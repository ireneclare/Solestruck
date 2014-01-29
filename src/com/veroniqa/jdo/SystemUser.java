package com.veroniqa.jdo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class SystemUser implements Serializable {
	
	private static final long serialVersionUID = 102L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private String userName;
	
	@Persistent
	private String password;	
	
	@Persistent(defaultFetchGroup = "true")	
	private List<Group> groups=new ArrayList<Group>();
	
	@Persistent(defaultFetchGroup = "true")	
	private List<ModulePermission> modulePermissions=new ArrayList<ModulePermission>();
	
	

	public List<Group> getGroups() {
		return groups;
	}

	public void setGroups(List<Group> groups) {
		this.groups = groups;
	}

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public List<ModulePermission> getPermissions() {
		return modulePermissions;
	}

	public void setPermissions(List<ModulePermission> permissions) {
		this.modulePermissions = permissions;
	}
	
	public void copy(SystemUser user) {		
		this.setPassword(user.getPassword());
		this.setPermissions(user.getPermissions());
		this.setUserName(user.getUserName());	
		
	}
	
	public void validateVendor()throws Exception
	{
		if(this.getUserName()==null)
		{
			throw new Exception("Please provide a User Name");
		}
		if(this.getPassword()==null)
		{
			throw new Exception("Please provide a Password");
		}
	}
	
	
}
