 package com.veroniqa.jdo;

/*
 * This class is used to pinpoint a product of particular size and color.
 */
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
public class ProductVariant implements Serializable {
	
private static final long serialVersionUID = 131L;

@PrimaryKey
@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
private Key productvariantkey;

@Persistent
private Key productkey;

@Persistent
private Double size;

@Persistent
private Key colorkey;

@Persistent
private List<Key> productUnitLocations;

@Persistent
private List<String> restrictedCountries;

@Persistent
private Double wholesaleprice;

@Persistent
private Double retailprice;

@Persistent
private Double saleprice;

@Persistent
private Double markupPercentage;

@Persistent
private String UPC;

@Persistent
private Double height;

@Persistent
private Double width;

@Persistent
private Double weight;

@Persistent 
private Date dateAdded;

@Persistent
private Date dateDeleted;

@Persistent
private Boolean deleted;

@Persistent
private Boolean preOrder;

@Persistent
private Boolean recentArrival;

@Persistent
private Boolean archived;

@Persistent
private Boolean showOnSite;

@Persistent
private Integer votes;	

@Persistent
private Key vendorKey;

@Persistent
private Date firstVoteAdded;

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

public Date getFirstVoteAdded() {
	return firstVoteAdded;
}

public void setFirstVoteAdded(Date firstVoteAdded) {
	this.firstVoteAdded = firstVoteAdded;
}

public Key getVendorKey() {
	return vendorKey;
}

public void setVendorKey(Key vendorKey) {
	this.vendorKey = vendorKey;
}

public List<Key> getProductUnitLocations() {
	return productUnitLocations;
}

public void setProductUnitLocations(List<Key> productUnitLocations) {
	this.productUnitLocations=new ArrayList<Key>();
	this.productUnitLocations.addAll(productUnitLocations);
}


public Boolean getRecentArrival() {
	return recentArrival;
}

public void setRecentArrival(Boolean recentArrival) {
	this.recentArrival = recentArrival;
}

public Integer getVotes() {
	return votes;
}

public void setVotes(Integer votes) {
	this.votes = votes;
}

public Double getWeight() {
	return weight;
}

public void setWeight(Double weight) {
	this.weight = weight;
}

public Boolean getPreOrder() {
	return preOrder;
}

public void setPreOrder(Boolean preOrder) {
	this.preOrder = preOrder;
}


public Boolean getArchived() {
	return archived;
}

public void setArchived(Boolean archived) {
	this.archived = archived;
}

public Boolean getShowOnSite() {
	return showOnSite;
}

public void setShowOnSite(Boolean showOnSite) {
	this.showOnSite = showOnSite;
}

public List<String> getRestrictedCountries() {
	return restrictedCountries;
}

public void setRestrictedCountries(List<String> restrictedCountries) {
	this.restrictedCountries = restrictedCountries;
}


public Double getHeight() {
	return height;
}

public void setHeight(Double height) {
	this.height = height;
}

public Double getWidth() {
	return width;
}

public void setWidth(Double width) {
	this.width = width;
}

public Key getProductvariantkey() {
	return productvariantkey;
}

public void setProductvariantkey(Key productvariantkey) {
	this.productvariantkey = productvariantkey;
}

public Key getProductkey() {
	return productkey;
}

public void setProductkey(Key productkey) {
	this.productkey = productkey;
}

public Double getSize() {
	return size;
}

public void setSize(Double size) {
	this.size = size;
}

public Key getColorkey() {
	return colorkey;
}

public void setColorkey(Key colorkey) {
	this.colorkey = colorkey;
}

public Double getWholesaleprice() {
	return wholesaleprice;
}

public void setWholesaleprice(Double wholesaleprice) {
	this.wholesaleprice = wholesaleprice;
}

public Double getRetailprice() {
	return retailprice;
}

public void setRetailprice(Double retailprice) {
	this.retailprice = retailprice;
}

public Double getSaleprice() {
	return saleprice;
}

public void setSaleprice(Double saleprice) {
	this.saleprice = saleprice;
}



public String getUPC() {
	return this.UPC;
}

public void setUPC(String UPC) {
	this.UPC = UPC;
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

public Double getMarkupPercentage() {
	return markupPercentage;
}

public void setMarkupPercentage(Double markupPercentage) {
	this.markupPercentage = markupPercentage;
}

public void copy(ProductVariant productVariant)
{
	if(productVariant.getRow()!=null)
		this.setRow(productVariant.getRow());
	if(productVariant.getSection()!=null)
		this.setSection(productVariant.getSection());
	if(productVariant.getShelf()!=null)
		this.setShelf(productVariant.getShelf());
	if(productVariant.getShelfLet()!=null)
		this.setShelfLet(productVariant.getShelfLet());
	if(productVariant.getShelfletposition()!=null)
		this.setShelfletposition(productVariant.getShelfletposition());
	if(productVariant.getFirstVoteAdded()!=null)
		this.setFirstVoteAdded(productVariant.getFirstVoteAdded());
	if(productVariant.getDeleted()!=null)
		this.setDeleted(productVariant.getDeleted());
	if(productVariant.getVotes()!=null)
		this.setVotes(productVariant.getVotes());
	if(productVariant.getColorkey()!=null)
		this.setColorkey(productVariant.getColorkey());
	if(productVariant.getDateAdded()!=null)
		this.setDateAdded(productVariant.getDateAdded());
	if(productVariant.getDateDeleted()!=null)
		this.setDateDeleted(productVariant.getDateDeleted());
	if(productVariant.getProductkey()!=null)
		this.setProductkey(productVariant.getProductkey());
	if(productVariant.getSize()!=null)
		this.setSize(productVariant.getSize());
	if(productVariant.getVendorKey()!=null)
		this.setVendorKey(productVariant.getVendorKey());
	if(productVariant.getRetailprice()!=null)
		this.setRetailprice(productVariant.getRetailprice());
	if(productVariant.getSaleprice()!=null)
		this.setSaleprice(productVariant.getSaleprice());
	if(productVariant.getWholesaleprice()!=null)
		this.setWholesaleprice(productVariant.getWholesaleprice());
	if(productVariant.getUPC()!=null)	
		this.setUPC(productVariant.getUPC());
	if(productVariant.getHeight()!=null)
		this.setHeight(productVariant.getHeight());
	if(productVariant.getWidth()!=null)
		this.setWidth(productVariant.getWidth());
	if(productVariant.getWeight()!=null)
		this.setWeight(productVariant.getWeight());
	if(productVariant.getProductUnitLocations()!=null)
		this.setProductUnitLocations(productVariant.getProductUnitLocations());
	if(productVariant.getPreOrder()!=null)
		this.setPreOrder(productVariant.getPreOrder());
	if(productVariant.getArchived()!=null)
		this.setArchived(productVariant.getArchived());
	if(productVariant.getShowOnSite()!=null)
		this.setShowOnSite(productVariant.getShowOnSite());
	if(productVariant.getRecentArrival()!=null)
		this.setRecentArrival(productVariant.getRecentArrival());
	if(productVariant.getRestrictedCountries()!=null)
		this.setRestrictedCountries(productVariant.getRestrictedCountries());
	if(productVariant.getMarkupPercentage()!=null)
		this.setMarkupPercentage(productVariant.getMarkupPercentage());
}

}
