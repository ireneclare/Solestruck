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
public class Item implements Serializable{
	
	private static final long serialVersionUID = 103L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
		
	@Persistent
	private String name;
		
	@Persistent
	private Date dateAdded;	
	
	@Persistent
	private List<Key> categories=new ArrayList<Key>();
			
	@Persistent
	private Integer votes;
		
	@Persistent(defaultFetchGroup = "true")	
	private List<WarehouseLocation> warehouseLocation=new ArrayList<WarehouseLocation>();	
	

	public List<WarehouseLocation> getWarehouseLocation() {
		return warehouseLocation;
	}

	public void setWarehouseLocation(List<WarehouseLocation> warehouseLocation) {
		this.warehouseLocation = warehouseLocation;
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


	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}
	
	public Integer getVotes() {
		return votes;
	}

	public void setVotes(Integer votes) {
		this.votes = votes;
	}
	
	
	public void copy(Item item) {
		
		
		this.setDateAdded(item.getDateAdded());		
		
		this.setName(item.getName());
		
		this.setVotes(item.getVotes());		
	}
	
	

}
