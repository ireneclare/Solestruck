package com.veroniqa.dto;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.google.appengine.api.datastore.Text;
import com.veroniqa.jdo.Event;



public class EventDTO implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 207596126374157253L;
	
	private String eventName;
	
	private String ImageURL;
	
	private String eventURL;
	
	private Text description;
	
	private Date validFrom;
	
	private Date validTo;
	
	private Long fromHours;
	
	private Long toHours;
	
	private Long fromMinutes;
	
	private Long toMinutes;
	
	private Long vendorId;
	
	private String vendorName;
	
	private Long productId;
	
	private String productName;
	
	private Long colorId;
	
	private String colorName;
	
	private String calendarHeading; 
	
	private String calendarDescription; 
	
	private ObjectWrapper listValues;
	
	private Map<Double,Integer> sizeQtyMap;
	
	private Event primaryEvent;
	
	private Event comingSoonEvent;
	
	private HashMap<Integer,Event> currentMonthEvents;
	
	private String plusSignDescription;
	
	private String plusSignImageLink;
	
	private String plusSignImageUrl;
	
	private String plusSignTitle;
	
	private Boolean onLive;
	
	private Date dateAdded;
	
	private String xcoordinate;
	
	private String ycoordinate;
	
	private Boolean bannerStatus;
	
	private Date bannerDateCreated;
	
	public void setDescription(Text description) {
		this.description = description;
	}
	public String getEventName() {
		return eventName;
	}
	public void setEventName(String eventName) {
		this.eventName = eventName;
	}
	public Long getVendorId() {
		return vendorId;
	}
	public void setVendorId(Long vendorId) {
		this.vendorId = vendorId;
	}
	public String getVendorName() {
		return vendorName;
	}
	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
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
	public Long getColorId() {
		return colorId;
	}
	public void setColorId(Long colorId) {
		this.colorId = colorId;
	}
	public String getColorName() {
		return colorName;
	}
	public void setColorName(String colorName) {
		this.colorName = colorName;
	}

	public Map<Double, Integer> getSizeQtyMap() {
		return sizeQtyMap;
	}
	public void setSizeQtyMap(Map<Double, Integer> sizeQtyMap) {
		this.sizeQtyMap = sizeQtyMap;
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
		return description.getValue();
	}
	public void setDescription(String description) {
		this.description = new Text(description);
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
	
	public String getPlusSignDescription() {
		return plusSignDescription;
	}
	public void setPlusSignDescription(String plusSignDescription) {
		this.plusSignDescription = plusSignDescription;
	}
	public String getPlusSignImageLink() {
		return plusSignImageLink;
	}
	public void setPlusSignImageLink(String plusSignImageLink) {
		this.plusSignImageLink = plusSignImageLink;
	}
	public String getPlusSignImageUrl() {
		return plusSignImageUrl;
	}
	public void setPlusSignImageUrl(String plusSignImageUrl) {
		this.plusSignImageUrl = plusSignImageUrl;
	}
	public Long getToHours() {
		return toHours;
	}
	public void setToHours(Long toHours) {
		this.toHours = toHours;
	}
	
	
	
	public String getCalendarHeading() {
		return calendarHeading;
	}
	public void setCalendarHeading(String calendarHeading) {
		this.calendarHeading = calendarHeading;
	}
	public String getCalendarDescription() {
		return calendarDescription;
	}
	public void setCalendarDescription(String calendarDescription) {
		this.calendarDescription = calendarDescription;
	}
	public ObjectWrapper getListValues() {
		return listValues;
	}
	public void setListValues(ObjectWrapper listValues) {
		this.listValues = listValues;
	}
	public Event getPrimaryEvent() {
		return primaryEvent;
	}
	public void setPrimaryEvent(Event primaryEvent) {
		this.primaryEvent = primaryEvent;
	}
	public Event getComingSoonEvent() {
		return comingSoonEvent;
	}
	public void setComingSoonEvent(Event comingSoonEvent) {
		this.comingSoonEvent = comingSoonEvent;
	}
	public HashMap<Integer, Event> getCurrentMonthEvents() {
		return currentMonthEvents;
	}
	public void setCurrentMonthEvents(HashMap<Integer, Event> currentMonthEvents) {
		this.currentMonthEvents = currentMonthEvents;
	}
	public Boolean getOnLive() {
		return onLive;
	}
	public void setOnLive(Boolean onLive) {
		this.onLive = onLive;
	}
	public Date getDateAdded() {
		return dateAdded;
	}
	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
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
	public String getXcoordinate() {
		return xcoordinate;
	}
	public void setXcoordinate(String xcoordinate) {
		this.xcoordinate = xcoordinate;
	}
	public String getYcoordinate() {
		return ycoordinate;
	}
	public void setYcoordinate(String ycoordinate) {
		this.ycoordinate = ycoordinate;
	}
	public String getPlusSignTitle() {
		return plusSignTitle;
	}
	public void setPlusSignTitle(String plusSignTitle) {
		this.plusSignTitle = plusSignTitle;
	}
	public Boolean getBannerStatus() {
		return bannerStatus;
	}
	public void setBannerStatus(Boolean bannerStatus) {
		this.bannerStatus = bannerStatus;
	}
	public Date getBannerDateCreated() {
		return bannerDateCreated;
	}
	public void setBannerDateCreated(Date bannerDateCreated) {
		this.bannerDateCreated = bannerDateCreated;
	}
	
	
}
