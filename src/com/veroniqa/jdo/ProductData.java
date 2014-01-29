package com.veroniqa.jdo;

import java.io.Serializable;
import java.util.Date;
import java.util.List;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.Text;



@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class ProductData implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Key key;
	
	@Persistent
	private String vendorName;
	
	@Persistent
	private Long vendorId;
	
	@Persistent
	private Long productId;
	
	@Persistent
	private String productName;
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private String customColorName;
	
	@Persistent
	private Long customColorId;
	
	@Persistent
	private Double salePrice=0.0;
	
	@Persistent
	private Double retailPrice=0.0;
	
	@Persistent
	private Double finalPrice=0.0;
	
	@Persistent
	private Double markup=0.0;
	
	@Persistent
	private List<Double> availableSizes;
	
	@Persistent
	private Boolean inventoryCheck;
	
	@Persistent
	private Boolean isSale;
	
	@Persistent
	private Boolean isNew;
	
	@Persistent
	private Boolean isPreorder;
	
	@Persistent
	private List<Long> styleIds;
	
	@Persistent
	private Long votes;
	
	@Persistent
	private List<String> socialCategory;
	
	@Persistent
	private String systemColor;
	
	@Persistent
	private Boolean showOnSite;
	
	@Persistent
	private Boolean archived;
	
	@Persistent
	private Integer customColorCount;

	@Persistent
	private Long systemColorId;
	
	@Persistent
	private Boolean deleted;
	
	@Persistent 
	private Double wholesalePrice=0.0;
	
	@Persistent
	private Text description;
	
	@Persistent
	private Date firstVoteAdded;
	
	@Persistent
	private List<String> systemColors;
	
	@Persistent
	private List<Long> systemColorIds;
	
	@Persistent
	private Double displayFactor;
	
	@Persistent
	private List<Long> eventIds;
	
	@Persistent
	private Boolean poolItem;
	
	@Persistent 
	private Boolean forcedToShow;
	
	@Persistent
	private Date freshDate;
	
	
	@Persistent
	private List<String> shotNumbers;
	
	
	
	public Date getFreshDate() {
		return freshDate;
	}

	public void setFreshDate(Date freshDate) {
		this.freshDate = freshDate;
	}

	public Boolean getPoolItem() {
		return poolItem;
	}

	public void setPoolItem(Boolean poolItem) {
		this.poolItem = poolItem;
	}

	public Boolean getForcedToShow() {
		return forcedToShow;
	}

	public void setForcedToShow(Boolean forcedToShow) {
		this.forcedToShow = forcedToShow;
	}

	public Double getDisplayFactor() {
		return displayFactor;
	}

	public void setDisplayFactor(Double displayFactor) {
		this.displayFactor = displayFactor;
	}

	public List<String> getSystemColors() {
		return systemColors;
	}

	public void setSystemColors(List<String> systemColors) {
		this.systemColors = systemColors;
	}

	public List<Long> getSystemColorIds() {
		return systemColorIds;
	}

	public void setSystemColorIds(List<Long> systemColorIds) {
		this.systemColorIds = systemColorIds;
	}

	public Date getFirstVoteAdded() {
		return firstVoteAdded;
	}

	public void setFirstVoteAdded(Date firstVoteAdded) {
		this.firstVoteAdded = firstVoteAdded;
	}

	public String getDescription() {
		if(description!=null)
			return description.getValue();
		else
			return "";
	}

	public void setDescription(Text description) {
		this.description = description;
	}

	public Double getWholesalePrice() {
		return wholesalePrice;
	}

	public void setWholesalePrice(Double wholesalePrice) {
		this.wholesalePrice = wholesalePrice;
	}

	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}

	public Long getSystemColorId() {
		return systemColorId;
	}

	public void setSystemColorId(Long systemColorId) {
		this.systemColorId = systemColorId;
	}

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public String getVendorName() {
		return vendorName;
	}

	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
	}

	public Long getVendorId() {
		return vendorId;
	}

	public void setVendorId(Long vendorId) {
		this.vendorId = vendorId;
	}

	public Long getProductId() {
		return productId;
	}

	public void setProductId(Long productId) {
		this.productId = productId;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}

	public String getCustomColorName() {
		return customColorName;
	}

	public void setCustomColorName(String customColorName) {
		this.customColorName = customColorName;
	}

	public Long getCustomColorId() {
		return customColorId;
	}

	public void setCustomColorId(Long customColorId) {
		this.customColorId = customColorId;
	}

	public Double getSalePrice() {
		return salePrice;
	}

	public void setSalePrice(Double salePrice) {
		this.salePrice = salePrice;
	}

	public Double getRetailPrice() {
		return retailPrice;
	}

	public void setRetailPrice(Double retailPrice) {
		this.retailPrice = retailPrice;
	}
	
	public Double getFinalPrice() {
		return finalPrice;
	}

	public void setFinalPrice(Double finalPrice) {
		this.finalPrice = finalPrice;
	}

	public List<Double> getAvailableSizes() {
		return availableSizes;
	}

	public void setAvailableSizes(List<Double> availableSizes) {
		this.availableSizes = availableSizes;
	}

	public Boolean getInventoryCheck() {
		return inventoryCheck;
	}

	public void setInventoryCheck(Boolean inventoryCheck) {
		this.inventoryCheck = inventoryCheck;
	}

	public Boolean getIsSale() {
		return isSale;
	}

	public void setIsSale(Boolean isSale) {
		this.isSale = isSale;
	}

	public Boolean getIsNew() {
		return isNew;
	}

	public void setIsNew(Boolean isNew) {
		this.isNew = isNew;
	}

	public Boolean getIsPreorder() {
		return isPreorder;
	}

	public void setIsPreorder(Boolean isPreorder) {
		this.isPreorder = isPreorder;
	}

	public List<Long> getStyleIds() {
		return styleIds;
	}

	public void setStyleIds(List<Long> styleIds) {
		this.styleIds = styleIds;
	}

	public Long getVotes() {
		return votes;
	}

	public void setVotes(Long votes) {
		this.votes = votes;
	}

	public List<String> getSocialCategory() {
		return socialCategory;
	}

	public void setSocialCategory(List<String> socialCategory) {
		this.socialCategory = socialCategory;
	}

	public String getSystemColor() {
		return systemColor;
	}

	public void setSystemColor(String systemColor) {
		this.systemColor = systemColor;
	}

	public Boolean getShowOnSite() {
		return showOnSite;
	}

	public void setShowOnSite(Boolean showOnSite) {
		this.showOnSite = showOnSite;
	}

	public Boolean getArchived() {
		return archived;
	}

	public void setArchived(Boolean archived) {
		this.archived = archived;
	}
	
	public Integer getCustomColorCount() {
		return customColorCount;
	}

	public void setCustomColorCount(Integer customColorCount) {
		this.customColorCount = customColorCount;
	}
	

	public Double getMarkup() {
		return markup;
	}

	public void setMarkup(Double markup) {
		this.markup = markup;
	}



	public List<Long> getEventIds() {
		return eventIds;
	}

	public void setEventIds(List<Long> eventIds) {
		this.eventIds = eventIds;
	}
	public List<String> getShotNumbers() {
		return shotNumbers;
	}

	public void setShotNumbers(List<String> shotNumbers) {
		this.shotNumbers = shotNumbers;
	}
	public void copy(ProductData data)
	{
		if(data.getFirstVoteAdded()!=null)
			this.setFirstVoteAdded(data.getFirstVoteAdded());
		if(data.getDeleted()!=null)
			this.setDeleted(data.getDeleted());
		if(data.getArchived()!=null)
			this.setArchived(data.getArchived());
		if(data.getAvailableSizes()!=null)
			this.setAvailableSizes(data.getAvailableSizes());
		if(data.getCustomColorId()!=null)
			this.setCustomColorId(data.getCustomColorId());
		if(data.getCustomColorName()!=null)
			this.setCustomColorName(data.getCustomColorName());
		if(data.getDateAdded()!=null)
			this.setDateAdded(data.getDateAdded());
		if(data.getInventoryCheck()!=null)
			this.setInventoryCheck(data.getInventoryCheck());
		if(data.getIsNew()!=null)
			this.setIsNew(data.getIsNew());
		if(data.getIsPreorder()!=null)
			this.setIsPreorder(data.getIsPreorder());
		if(data.getIsSale()!=null)
			this. setIsSale(data.getIsSale());
		if(data.getProductId()!=null)
			this.setProductId(data.getProductId());
		if(data.getProductName()!=null)
			this.setProductName(data.getProductName());
		if(data.getRetailPrice()!=null&&!data.getRetailPrice().equals(new Double(0.0)))
		{
			this.setRetailPrice(data.getRetailPrice());
			this.setFinalPrice(data.getRetailPrice());
		}
		if(data.getSalePrice()!=null)
		{
			this.setSalePrice(data.getSalePrice());
		}
		if(data.getSalePrice()!=null && data.getSalePrice()>0)
		{
			this.setFinalPrice(data.getSalePrice());
		}
		if(data.getWholesalePrice()!=null&&!data.getWholesalePrice().equals(new Double(0.0)))
			this.setWholesalePrice(data.getWholesalePrice());
		if(data.getShowOnSite()!=null)
			this.setShowOnSite(data.getShowOnSite());
		if(data.getSocialCategory()!=null)
			this.setSocialCategory(data.getSocialCategory());
		if(data.getStyleIds()!=null)
			this.setStyleIds(data.getStyleIds());
		if(data.getSystemColor()!=null)
			this.setSystemColor(data.getSystemColor());
		if(data.getVendorId()!=null)
			this.setVendorId(data.getVendorId());
		if(data.getVotes()!=null)
			this.setVotes(data.getVotes());
		if(data.getVendorName()!=null)	
			this.setVendorName(data.getVendorName());
		if(data.getCustomColorCount()!=null)
			this.setCustomColorCount(data.getCustomColorCount());
		if(data.getDescription()!=null && !"".equals(data.getDescription()))
			this.setDescription(new Text(data.getDescription()));
		if(data.getSystemColorIds()!=null)
			this.setSystemColorIds(data.getSystemColorIds());
		if(data.getSystemColors()!=null)
			this.setSystemColors(data.getSystemColors());
		if(data.getMarkup()!=null&&!data.getMarkup().equals(new Double(0.0)))
			this.setMarkup(data.getMarkup());
		if(data.getDisplayFactor()!=null)
			this.setDisplayFactor(data.getDisplayFactor());
		if(data.getPoolItem()!=null)
			this.setPoolItem(data.getPoolItem());
		if(data.getForcedToShow()!=null)
			this.setForcedToShow(data.getForcedToShow());
		if(data.getFreshDate()!=null)
			this.setFreshDate(data.getFreshDate());
		if(data.getEventIds()!=null)
			this.setEventIds(data.getEventIds());
		if(data.getShotNumbers()!=null)
			this.setShotNumbers(data.getShotNumbers());
		
	}


	
}
