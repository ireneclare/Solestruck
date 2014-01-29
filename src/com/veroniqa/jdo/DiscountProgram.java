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
public class DiscountProgram implements Serializable{
	
	private static final long serialVersionUID = 123545298741L;
	
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private Key brandKey;
	
	@Persistent
	private String name;
	
	@Persistent
	private String programTypeName;
	
	@Persistent
	private Double discountPercentage;
	
	@Persistent
	private Integer numberOfPairs;
	
	@Persistent
	private Integer numberOfPins;
	
	@Persistent
	private Date validFrom;
	
	@Persistent
	private Date validTo;
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Date dateDeleted;
	
	@Persistent
	private Boolean deleted;
	
	@Persistent
	private Long fromHours;
	
	@Persistent
	private Long fromMinutes;
	
	@Persistent
	private Long toHours;
	
	@Persistent
	private Long toMinutes;
	

	@Persistent
	private Boolean retirePinOnceUsed;
	
	
	@Persistent
	private Long programId;
	
	@Persistent
	private Boolean showTimer;
	
	@Persistent
	private Boolean showCartCount;
	
	@Persistent
	 private Boolean showImageInThankYouPage;
	
	@Persistent
	 private Boolean webDiscountOn;
	
	@Persistent
	 private Boolean mobileDiscountOn;
	
	@Persistent
	 private Boolean solestruckLogin;
	
	@Persistent
	 private Boolean facebookLogin;
	
	@Persistent
	private List<Key> vendorKeys=new ArrayList<Key>();
	
	@Persistent
	private List<String> vendorNames=new ArrayList<String>();
	
	@Persistent
	private List<Long> saleColorIds=new ArrayList<Long>();
	

	public Boolean getShowCartCount() {
		return showCartCount;
	}

	public void setShowCartCount(Boolean showCartCount) {
		this.showCartCount = showCartCount;
	}

	public Boolean getShowTimer() {
		return showTimer;
	}

	public void setShowTimer(Boolean showTimer) {
		this.showTimer = showTimer;
	}

	public Long getProgramId() {
		return programId;
	}

	public void setProgramId(Long programId) {
		this.programId = programId;
	}

	public Long getFromHours() {
		return fromHours;
	}

	public void setFromHours(Long fromHours) {
		this.fromHours = fromHours;
	}

	public Long getFromMinutes() {
		return fromMinutes;
	}

	public void setFromMinutes(Long fromMinutes) {
		this.fromMinutes = fromMinutes;
	}

	public Long getToHours() {
		return toHours;
	}

	public void setToHours(Long toHours) {
		this.toHours = toHours;
	}

	public Long getToMinutes() {
		return toMinutes;
	}

	public void setToMinutes(Long toMinutes) {
		this.toMinutes = toMinutes;
	}

	public Boolean getRetirePinOnceUsed() {
		return retirePinOnceUsed;
	}

	public void setRetirePinOnceUsed(Boolean retirePinOnceUsed) {
		this.retirePinOnceUsed = retirePinOnceUsed;
	}

	public Key getBrandKey() {
		return brandKey;
	}

	public void setBrandKey(Key brandKey) {
		this.brandKey = brandKey;
	}

	public String getProgramTypeName() {
		return programTypeName;
	}

	public void setProgramTypeName(String programTypeName) {
		this.programTypeName = programTypeName;
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

	
	public Double getDiscountPercentage() {
		return discountPercentage;
	}

	public void setDiscountPercentage(Double discountPercentage) {
		this.discountPercentage = discountPercentage;
	}

	public Integer getNumberOfPairs() {
		return numberOfPairs;
	}

	public void setNumberOfPairs(Integer numberOfPairs) {
		this.numberOfPairs = numberOfPairs;
	}

	public Integer getNumberOfPins() {
		return numberOfPins;
	}

	public void setNumberOfPins(Integer numberOfPins) {
		this.numberOfPins = numberOfPins;
	}

	public Date getValidFrom() {
		return validFrom;
	}

	public void setValidFrom(Date validFrom) {
		this.validFrom = validFrom;
	}

	public Date getValidTo() {
		return validTo;
	}

	public void setValidTo(Date validTo) {
		this.validTo = validTo;
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
	
	 public Boolean getShowImageInThankYouPage() {
		  return showImageInThankYouPage;
		 }

		 public void setShowImageInThankYouPage(Boolean showImageInThankYouPage) {
		  this.showImageInThankYouPage = showImageInThankYouPage;
		 }
		 
	public Boolean getWebDiscountOn() {
			return webDiscountOn;
		}

	public void setWebDiscountOn(Boolean webDiscountOn) {
			this.webDiscountOn = webDiscountOn;
		}

	public Boolean getMobileDiscountOn() {
			return mobileDiscountOn;
		}

	public void setMobileDiscountOn(Boolean mobileDiscountOn) {
			this.mobileDiscountOn = mobileDiscountOn;
		}
	
	public List<Key> getVendorKeys() {
		return vendorKeys;
	}

	public void setVendorKeys(List<Key> vendorKeys) {
		this.vendorKeys = vendorKeys;
	}
	
	public List<String> getVendorNames() {
		return vendorNames;
	}

	public void setVendorNames(List<String> vendorNames) {
		this.vendorNames = vendorNames;
	}
	
	public Boolean getSolestruckLogin() {
		return solestruckLogin;
	}

	public void setSolestruckLogin(Boolean solestruckLogin) {
		this.solestruckLogin = solestruckLogin;
	}

	public Boolean getFacebookLogin() {
		return facebookLogin;
	}

	public void setFacebookLogin(Boolean facebookLogin) {
		this.facebookLogin = facebookLogin;
	}
	
	public List<Long> getSaleColorIds() {
		return saleColorIds;
	}

	public void setSaleColorIds(List<Long> saleColorIds) {
		this.saleColorIds = saleColorIds;
	}

	public void copy(DiscountProgram program)
	{
		if(program.getShowCartCount()!=null)
			this.setShowCartCount(program.getShowCartCount());
		if(program.getShowTimer()!=null)
			this.setShowTimer(program.getShowTimer());
		if(program.getDateAdded()!=null)
			this.setDateAdded(program.getDateAdded());
		if(program.getDateDeleted()!=null)
			this.setDateDeleted(program.getDateDeleted());
		if(program.getDeleted()!=null)
			this.setDeleted(program.getDeleted());
		if(program.getDiscountPercentage()!=null)
			this.setDiscountPercentage(program.getDiscountPercentage());
		if(program.getName()!=null)
			this.setName(program.getName());
		if(program.getNumberOfPairs()!=null)
			this.setNumberOfPairs(program.getNumberOfPairs());
		if(program.getNumberOfPins()!=null)
			this.setNumberOfPins(program.getNumberOfPins());
		if(program.getProgramTypeName()!=null)
			this.setProgramTypeName(program.getProgramTypeName());
		if(program.getValidFrom()!=null)
			this.setValidFrom(program.getValidFrom());
		if(program.getValidTo()!=null)
			this.setValidTo(program.getValidTo());
		if(program.getBrandKey()!=null)
			this.setBrandKey(program.getBrandKey());
		if(program.getRetirePinOnceUsed()!=null)
			this.setRetirePinOnceUsed(program.getRetirePinOnceUsed());
		if(program.getFromHours()!=null)
			this.setFromHours(program.getFromHours());
		if(program.getFromMinutes()!=null)
			this.setFromMinutes(program.getFromMinutes());
		if(program.getToHours()!=null)
			this.setToHours(program.getToHours());
		if(program.getToMinutes()!=null)
			this.setToMinutes(program.getToMinutes());
		if(program.getShowImageInThankYouPage()!=null)
			this.setShowImageInThankYouPage(program.getShowImageInThankYouPage());
		if(program.getWebDiscountOn()!=null)
			this.setWebDiscountOn(program.getWebDiscountOn());
		if(program.getSolestruckLogin()!=null)
			this.setSolestruckLogin(program.getSolestruckLogin());
		if(program.getFacebookLogin()!=null)
			this.setFacebookLogin(program.getFacebookLogin());
		if(program.getMobileDiscountOn()!=null)
			this.setMobileDiscountOn(program.getMobileDiscountOn());
		if(program.getVendorKeys()!=null)
			this.setVendorKeys(program.getVendorKeys());
		if(program.getVendorNames()!=null)
			this.setVendorNames(program.getVendorNames());
		if(program.getSaleColorIds()!=null)
			this.setSaleColorIds(program.getSaleColorIds());
	}
	
	
		

}
