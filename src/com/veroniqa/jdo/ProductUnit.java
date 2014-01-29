package com.veroniqa.jdo;

import java.io.Serializable;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;


/**
***This class is for holding information pertaining to individual unit of product
***/

@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class ProductUnit implements Serializable{

	
	private static final long serialVersionUID = 1L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private Key warehouselocation;
	
	@Persistent
	private Key geographicallocation;
	
	@Persistent
	private Key productVariant;
	
		
	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public Key getProductVariant() {
		return productVariant;
	}

	public void setProductVariant(Key productVariant) {
		this.productVariant = productVariant;
	}
	
	public Key getWarehouseLocation() {
		return warehouselocation;
	}

	public void setWarehouseLocation(Key warehouselocation) {
		this.warehouselocation = warehouselocation;
	}

	public Key getGeographicallocation() {
		return geographicallocation;
	}

	public void setGeographicallocation(Key geographicallocation) {
		this.geographicallocation = geographicallocation;
	}
	
	public void copy(ProductUnit unit)
	{
		setKey(unit.getKey());
		setProductVariant(unit.getProductVariant());
		setWarehouseLocation(unit.getWarehouseLocation());
		setGeographicallocation(unit.getGeographicallocation());
	}
	
}
