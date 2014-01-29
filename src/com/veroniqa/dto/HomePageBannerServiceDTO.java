package com.veroniqa.dto;

import java.io.Serializable;
import java.util.Date;

public class HomePageBannerServiceDTO implements Serializable {
	
	private static final long serialVersionUID = 1L;

	private String brandId;	
	
	private String flag;
	
	private String sortBy;
	
	private Integer startIndex;
	
	private Integer endIndex;
	
	private Date dateAddedFrom;
	
	private Date dateAddedTo;
	
	private Date dateDeletedFrom;
	
	private Date dateDeletedTo;
	
	private Integer pageNumber;	
	
	private String imageUrl;
	
	private String videoTitle;
	
	private String videoThumbNailImageURL;
	
	private String videoURL;
	
	private Boolean onLive=false;

	
	public String getBrandId() {
		return brandId;
	}

	public void setBrandId(String brandId) {
		this.brandId = brandId;
	}

	public String getFlag() {
		return flag;
	}

	public void setFlag(String flag) {
		this.flag = flag;
	}

	public String getSortBy() {
		return sortBy;
	}

	public void setSortBy(String sortBy) {
		this.sortBy = sortBy;
	}

	public Integer getStartIndex() {
		return startIndex;
	}

	public void setStartIndex(Integer startIndex) {
		this.startIndex = startIndex;
	}

	public Integer getEndIndex() {
		return endIndex;
	}

	public void setEndIndex(Integer endIndex) {
		this.endIndex = endIndex;
	}

	public Date getDateAddedFrom() {
		return dateAddedFrom;
	}

	public void setDateAddedFrom(Date dateAddedFrom) {
		this.dateAddedFrom = dateAddedFrom;
	}

	public Date getDateAddedTo() {
		return dateAddedTo;
	}

	public void setDateAddedTo(Date dateAddedTo) {
		this.dateAddedTo = dateAddedTo;
	}

	public Date getDateDeletedFrom() {
		return dateDeletedFrom;
	}

	public void setDateDeletedFrom(Date dateDeletedFrom) {
		this.dateDeletedFrom = dateDeletedFrom;
	}

	public Date getDateDeletedTo() {
		return dateDeletedTo;
	}

	public void setDateDeletedTo(Date dateDeletedTo) {
		this.dateDeletedTo = dateDeletedTo;
	}

	public Integer getPageNumber() {
		return pageNumber;
	}

	public void setPageNumber(Integer pageNumber) {
		this.pageNumber = pageNumber;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public Boolean getOnLive() {
		return onLive;
	}

	public void setOnLive(Boolean onLive) {
		this.onLive = onLive;
	}

	public String getVideoTitle() {
		return videoTitle;
	}

	public void setVideoTitle(String videoTitle) {
		this.videoTitle = videoTitle;
	}

	public String getVideoThumbNailImageURL() {
		return videoThumbNailImageURL;
	}

	public void setVideoThumbNailImageURL(String videoThumbNailImageURL) {
		this.videoThumbNailImageURL = videoThumbNailImageURL;
	}

	public String getVideoURL() {
		return videoURL;
	}

	public void setVideoURL(String videoURL) {
		this.videoURL = videoURL;
	}

	
	

}
