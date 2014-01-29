package com.veroniqa.jdo;

import java.io.Serializable;
import java.util.Date;

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
public class ProductUnitLocation implements Serializable{

	
	private static final long serialVersionUID = 1L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private String row;
	
	@Persistent
	private String section;
	
	@Persistent
	private String shelf;
	
	@Persistent
	private Integer shelfLet;
	
	@Persistent 
	private Integer shelfletposition;
	
	
	@Persistent
	private Key geographicallocation;
	
	@Persistent
	private Key productVariant;
	
	@Persistent 
	private Boolean deleted;
	
	@Persistent
	private Date dateDeleted;
	
	@Persistent
	private Date dateAdded;
	
	
	
		
	
	

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

	public String getRow() {
		return row;
	}

	public void setRow(String row) {
		this.row = row;
	}

	public String getSection() {
		return section;
	}

	public void setSection(String section) {
		this.section = section;
	}

	public String getShelf() {
		return shelf;
	}

	public void setShelf(String shelf) {
		this.shelf = shelf;
	}

	public Integer getShelfLet() {
		return shelfLet;
	}

	public void setShelfLet(Integer shelfLet) {
		this.shelfLet = shelfLet;
	}

	public Integer getShelfletposition() {
		return shelfletposition;
	}

	public void setShelfletposition(Integer shelfletposition) {
		this.shelfletposition = shelfletposition;
	}

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
	
	

	public Key getGeographicallocation() {
		return geographicallocation;
	}

	public void setGeographicallocation(Key geographicallocation) {
		this.geographicallocation = geographicallocation;
	}

	public void copy(ProductUnitLocation unit)
	{
		if(unit.getKey()!=null)
			this.setKey(unit.getKey());
		if(unit.getProductVariant()!=null)
			this.setProductVariant(unit.getProductVariant());
		if(unit.getGeographicallocation()!=null)
			this.setGeographicallocation(unit.getGeographicallocation());
		if(unit.getRow()!=null)
			this.setRow(unit.getRow());
		if(unit.getShelf()!=null)
			this.setShelf(unit.getShelf());
		if(unit.getSection()!=null)
			this.setSection(unit.getSection());
		if(unit.getShelfLet()!=null)
			this.setShelfLet(unit.getShelfLet());
		if(unit.getShelfletposition()!=null)
			this.setShelfletposition(unit.getShelfletposition());
		if(unit.getDeleted()!=null)
			this.setDeleted(unit.getDeleted());
		if(unit.getDateDeleted()!=null)
			this.setDateDeleted(unit.getDateDeleted());
		if(unit.getDateAdded()!=null)
			this.setDateAdded(unit.getDateAdded());
		
		
		
	}
	
}
