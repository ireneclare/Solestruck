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
import com.google.appengine.api.datastore.Text;

/*
 * This class defines the top-level product which ,in turn, has product-variant,product-unit
 */

@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class Product implements Serializable,Comparable<Product>{
	
	private static final long serialVersionUID = 103L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
		
	@Persistent
	private String name;

	@Persistent
	private Text description;
	
	@Persistent
	private Key brandkey;
	
	@Persistent
	private Date dateAdded;		
	
	@Persistent
	private Double wholeSalePrice;
	
	@Persistent
	private Double retailPrice;
	
	@Persistent
	private Double salePrice;
	
	@Persistent
	private Boolean showOnSite;
	
	@Persistent
	private Boolean preOrder;
	
	@Persistent
	private List<Key> vendorKeys;
	
	@Persistent
	private List<String> vendorNames;
	
	@Persistent
	private List<Key> productvariant= new ArrayList<Key>();
	
	@Persistent
	private List<Key> attributes=new ArrayList<Key>();
	
	@Persistent
	private List<Key> attributeTypes=new ArrayList<Key>();
	
	@Persistent
	private Integer votes;	
	
	@Persistent
	private Date dateDeleted;

	@Persistent
	private Boolean deleted;	
	
	@Persistent
	private Boolean enabled;	
	
	@Persistent
	private Boolean recentArrival;
	
	@Persistent
	private Boolean isSale;
	
	@Persistent
	private String shoeid;
	
	@Persistent
	private Double heelHeight;
	
	@Persistent
	private Boolean showEvenIfArchived;
			
	@Persistent
	private Double markupPercentage;
	
	@Persistent
	private Text htmlMessage;
	
	@Persistent
	private String streetCredTagsNames;
	
	
	
	public String getHtmlMessage() {
		if(htmlMessage!=null)
			return htmlMessage.getValue();
		else
			return "";
	}

	public void setHtmlMessage(String htmlMessage) {
		this.htmlMessage = new Text(htmlMessage);
	}
	
	public void setHtmlMessage(Text htmlMessage) {
		this.htmlMessage = htmlMessage;
	}

	public Double getMarkupPercentage() {
		return markupPercentage;
	}

	public void setMarkupPercentage(Double markupPercentage) {
		this.markupPercentage = markupPercentage;
	}

	public List<Key> getVendorKeys() {
		return vendorKeys;
	}

	public void setVendorKeys(List<Key> vendorKeys) {
		this.vendorKeys = vendorKeys;
	}

	public Boolean getShowEvenIfArchived() {
		return showEvenIfArchived;
	}

	public void setShowEvenIfArchived(Boolean showEvenIfArchived) {
		this.showEvenIfArchived = showEvenIfArchived;
	}

	public Double getWholeSalePrice() {
		return wholeSalePrice;
	}

	public void setWholeSalePrice(Double wholeSalePrice) {
		this.wholeSalePrice = wholeSalePrice;
	}

	public Double getRetailPrice() {
		return retailPrice;
	}

	public void setRetailPrice(Double retailPrice) {
		this.retailPrice = retailPrice;
	}

	public Double getSalePrice() {
		return salePrice;
	}

	public void setSalePrice(Double salePrice) {
		this.salePrice = salePrice;
	}

	public Boolean getShowOnSite() {
		return showOnSite;
	}

	public void setShowOnSite(Boolean showOnSite) {
		this.showOnSite = showOnSite;
	}

	public Boolean getPreOrder() {
		return preOrder;
	}

	public void setPreOrder(Boolean preOrder) {
		this.preOrder = preOrder;
	}

	public List<String> getVendorNames() {
		return vendorNames;
	}

	public void setVendorNames(List<String> vendorNames) {
		this.vendorNames = vendorNames;
	}

	public Double getHeelHeight() {
		return heelHeight;
	}

	public void setHeelHeight(Double heelHeight) {
		this.heelHeight = heelHeight;
	}

	public Boolean getIsSale() {
		return isSale;
	}

	public void setIsSale(Boolean isSale) {
		this.isSale = isSale;
	}

	public void setDescription(Text description) {
		this.description = description;
	}

	public Boolean getRecentArrival() {
		return recentArrival;
	}

	public void setRecentArrival(Boolean recentArrival) {
		this.recentArrival = recentArrival;
	}

	public Boolean getEnabled() {
		return enabled;
	}

	public void setEnabled(Boolean enabled) {
		this.enabled = enabled;
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

	public List<Key> getAttributeTypes() {
		return attributeTypes;
	}

	public void setAttributeTypes(List<Key> attributesType) {
		this.attributeTypes = attributesType;
	}

	public String getDescription() {
		if(description!=null)
			return description.getValue();
		else
			return "";
	}

	public void setDescription(String description) {
		this.description = new Text(description);
	}

	public List<Key> getAttributes() {
		return attributes;
	}

	public void setAttributes(List<Key> attributes) {
		this.attributes = attributes;
	}

	public List<Key> getProductvariant() {
		return productvariant;
	}

	public void setProductvariant(List<Key> productvariant) {
		this.productvariant = productvariant;
	}


	public Product(){}
	
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
		System.out.println("name::"+name);
		String REG_EXPR = "[!\"#$%&'()+-./:;<=>?@\\^_{|}~`,.\\[\\]]";

		this.setStreetCredTagsNames("ss_"+name.replaceAll(REG_EXPR, "").replaceAll(" ", "").toLowerCase());
		System.out.println("streetcredtag names"+this.getStreetCredTagsNames());
		}

	public Key getBrandkey() {
		return brandkey;
	}

	public void setBrandkey(Key brandkey) {
		this.brandkey = brandkey;
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
	
	
	
	public String getShoeid() {
		return shoeid;
	}

	public void setShoeid(String shoeid) {
		this.shoeid = shoeid;
	}

	public void copy(Product product) {
		if(product.getName()!=null)
			this.setName(product.getName());
		if(product.getDateAdded()!=null)
			this.setDateAdded(product.getDateAdded());		
		if(product.getBrandkey()!=null)
			this.setBrandkey(product.getBrandkey());
		if(product.getVotes()!=null)
			this.setVotes(product.getVotes());	
		if(product.getDescription()!=null&&!"".equals(product.getDescription()))
			this.setDescription(product.getDescription());
		if(product.getAttributes()!=null && product.getAttributes().size()>0)
			this.setAttributes(product.getAttributes());
		if(product.getProductvariant()!=null && product.getProductvariant().size()>0)
			this.setProductvariant(product.getProductvariant());
		if(product.getDeleted()!=null)
			this.setDeleted(product.getDeleted());
		if(product.getEnabled()!=null)
			this.setEnabled(product.getEnabled());
		if(product.getRecentArrival()!=null)
			this.setRecentArrival(product.getRecentArrival());
		if(product.getIsSale()!=null)
			this.setIsSale(product.getIsSale());
		if(product.getDateDeleted()!=null)
			this.setDateDeleted(product.getDateDeleted());
		if(product.getKey()!=null)
			this.setKey(product.getKey());
		if(product.getShoeid()!=null)
			this.setShoeid(product.getShoeid());
		if(product.getHeelHeight()!=null)
			this.setHeelHeight(product.getHeelHeight());
		if(product.getWholeSalePrice()!=null)
			this.setWholeSalePrice(product.getWholeSalePrice());
		if(product.getRetailPrice()!=null)
			this.setRetailPrice(product.getRetailPrice());
		if(product.getSalePrice()!=null)
			this.setSalePrice(product.getSalePrice());
		if(product.getMarkupPercentage()!=null)
			this.setMarkupPercentage(product.getMarkupPercentage());
		if(product.getPreOrder()!=null)
			this.setPreOrder(product.getPreOrder());
		if(product.getShowEvenIfArchived()!=null)
			this.setShowEvenIfArchived(product.getShowEvenIfArchived());
		if(product.getShowOnSite()!=null)
			this.setShowOnSite(product.getShowOnSite());
		if(product.getVendorKeys()!=null)
			this.setVendorKeys(product.getVendorKeys());
		if(product.getVendorNames()!=null)
			this.setVendorNames(product.getVendorNames());
		if(product.getHtmlMessage()!=null && !"".equals(product.getHtmlMessage()))
			this.setHtmlMessage(product.getHtmlMessage());
		if(product.getStreetCredTagsNames()!=null && !"".equals(product.getStreetCredTagsNames())) 
			this.setStreetCredTagsNames(product.getStreetCredTagsNames());
	}

	@Override
	public int compareTo(Product product) {
		// TODO Auto-generated method stub
		return name.compareToIgnoreCase(product.getName());
	}

	public String getStreetCredTagsNames() {
		return streetCredTagsNames;
	}

	public void setStreetCredTagsNames(String streetCredTagsNames) {
		this.streetCredTagsNames = streetCredTagsNames;
	}
	
	

}
