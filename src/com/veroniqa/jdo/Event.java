package com.veroniqa.jdo;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Blob;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.Text;
import com.veroniqa.dto.ObjectWrapper;

@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class Event implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = -7391808422999908102L;
	
	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Key key;
	
	@Persistent
	private String eventName;
	
	@Persistent
	private String ImageURL;
	
	@Persistent 
	private String eventURL;
	
	@Persistent
	private Text description;
	
	@Persistent
	private Boolean deleted;
	
	@Persistent
	private Date dateDeleted;
	
	@Persistent
	private Date validFrom;
	
	@Persistent
	private Date validTo;
	
	@Persistent
	private Long fromHours;
	
	@Persistent
	private Long toHours;
	
	@Persistent
	private Long fromMinutes;
	
	@Persistent
	private Long toMinutes;
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Boolean onLive;
	
	@Persistent
	private String calendarDescription;
	
	@Persistent
	private String calendarHeading; 
	
	@Persistent(serialized = "true", defaultFetchGroup = "true")
	private ObjectWrapper listValues =new ObjectWrapper();
	
	@Persistent
	private List<String> vendors;
	
	@Persistent
	private String featuredHomeBannerURL;
	
	@Persistent
	private String featuredBackgroundBannerURL;
	




	public String getFeaturedBackgroundBannerURL() {
		return featuredBackgroundBannerURL;
	}

	public void setFeaturedBackgroundBannerURL(String featuredBackgroundBannerURL) {
		this.featuredBackgroundBannerURL = featuredBackgroundBannerURL;
	}

	

	public String getFeaturedHomeBannerURL() {
		return featuredHomeBannerURL;
	}

	public void setFeaturedHomeBannerURL(String featuredHomeBannerURL) {
		this.featuredHomeBannerURL = featuredHomeBannerURL;
	}

	public List<String> getVendors() {
		return vendors;
	}

	public void setVendors(List<String> vendors) {
		this.vendors = vendors;
	}

	public String getEventName() {
		return eventName;
	}

	public void setEventName(String eventName) {
		this.eventName = eventName;
	}

	
	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public String getImageURL() {
		return ImageURL;
	}

	public void setImageURL(String imageURL) {
		ImageURL = imageURL;
	}

	public String getEventURL() {
		return eventURL;
	}

	public void setEventURL(String eventURL) {
		this.eventURL = eventURL;
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
	public void setDescription(Text description) {
		this.description = description;
	}
	public Boolean getDeleted() {
		return deleted;
	}


	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}
	
	public Date getDateDeleted() {
		return dateDeleted;
	}

	public void setDateDeleted(Date dateDeleted) {
		this.dateDeleted = dateDeleted;
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

	public Long getFromHours() {
		return fromHours;
	}

	public void setFromHours(Long fromHours) {
		this.fromHours = fromHours;
	}

	public Long getToHours() {
		return toHours;
	}

	public void setToHours(Long toHours) {
		this.toHours = toHours;
	}

	public String getCalendarDescription() {
		return calendarDescription;
	}

	public void setCalendarDescription(String calendarDescription) {
		this.calendarDescription = calendarDescription;
	}

	public Long getFromMinutes() {
		return fromMinutes;
	}

	public void setFromMinutes(Long fromMinutes) {
		this.fromMinutes = fromMinutes;
	}

	public Long getToMinutes() {
		return toMinutes;
	}

	public void setToMinutes(Long toMinutes) {
		this.toMinutes = toMinutes;
	}

	public ObjectWrapper getListValues() {
		return listValues;
	}

	public void setListValues(ObjectWrapper listValues) {
		this.listValues = listValues;
	}

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}

	public String getCalendarHeading() {
		return calendarHeading;
	}

	public void setCalendarHeading(String calendarHeading) {
		this.calendarHeading = calendarHeading;
	}

	public Boolean getOnLive() {
		return onLive;
	}

	public void setOnLive(Boolean onLive) {
		this.onLive = onLive;
	}
	
	public void copy(Event event)
	{
		if(event.getEventName()!=null)
			this.setEventName(event.getEventName());
		if(event.getEventURL()!=null)
			this.setEventURL(event.getEventURL());
		if(event.getImageURL()!=null)
			this.setImageURL(event.getImageURL());
		if(event.getDeleted()!=null)
			this.setDeleted(event.getDeleted());
		if(event.getDateDeleted()!=null)
			this.setDateDeleted(event.getDateDeleted());
		if(event.getDescription()!=null)
			this.setDescription(event.getDescription());
		if(event.getCalendarDescription()!=null)
			this.setCalendarDescription(event.getCalendarDescription());
		if(event.getCalendarHeading()!=null)
			this.setCalendarHeading(event.getCalendarHeading());
		if(event.getKey()!=null)
			this.setKey(event.getKey());
		if(event.getValidFrom()!=null)
			this.setValidFrom(event.getValidFrom());
		if(event.getValidTo()!=null)
			this.setValidTo(event.getValidTo());
		if(event.getFromHours()!=null)
			this.setFromHours(event.getFromHours());
		if(event.getToHours()!=null)
			this.setToHours(event.getToHours());
		if(event.getFromMinutes()!=null)
			this.setFromMinutes(event.getFromMinutes());
		if(event.getToMinutes()!=null)
			this.setToMinutes(event.getToMinutes());
		if(event.getDateAdded()!=null)
			this.setDateAdded(event.getDateAdded());
		if(event.getListValues()!=null)
			this.setListValues(event.getListValues());
		if(event.getOnLive()!=null)
			this.setOnLive(event.getOnLive());
		if(event.getVendors()!=null)
			this.setVendors(event.getVendors());
		if(event.getFeaturedHomeBannerURL()!=null)
			this.setFeaturedHomeBannerURL(event.getFeaturedHomeBannerURL());
		if(event.getFeaturedBackgroundBannerURL()!=null)
			this.setFeaturedBackgroundBannerURL(event.getFeaturedBackgroundBannerURL());
	}

	
}
