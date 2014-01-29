package com.veroniqa.dto;

import java.io.Serializable;
import java.util.Date;

import com.google.appengine.api.datastore.Text;

public class LookBookBannerServiceDTO implements Serializable{

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
	
	private String albumName;
	
	private String subTitle;
	
	private String albumCoverImageURL;
	
	private String albumStripImageURL;
	
	private String albumStripMouseOverImageURL;
	
	private String imageLink;
	
	private Text htmlCodeForFlashPlugin;
	
	private String videoCoverImageURL;
	
	private String youTubeURL;
	
	private Integer sequenceNumber;
	
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

	public String getAlbumName() {
		return albumName;
	}

	public void setAlbumName(String albumName) {
		this.albumName = albumName;
	}
	
	public String getSubTitle() {
		return subTitle;
	}

	public void setSubTitle(String subTitle) {
		this.subTitle = subTitle;
	}

	public String getAlbumCoverImageURL() {
		return albumCoverImageURL;
	}

	public void setAlbumCoverImageURL(String albumCoverImageURL) {
		this.albumCoverImageURL = albumCoverImageURL;
	}

	public String getAlbumStripImageURL() {
		return albumStripImageURL;
	}

	public void setAlbumStripImageURL(String albumStripImageURL) {
		this.albumStripImageURL = albumStripImageURL;
	}

	public String getAlbumStripMouseOverImageURL() {
		return albumStripMouseOverImageURL;
	}

	public void setAlbumStripMouseOverImageURL(String albumStripMouseOverImageURL) {
		this.albumStripMouseOverImageURL = albumStripMouseOverImageURL;
	}
	
	public String getImageLink() {
		return imageLink;
	}

	public void setImageLink(String imageLink) {
		this.imageLink = imageLink;
	}

	public Text getHtmlCodeForFlashPlugin() {
		return htmlCodeForFlashPlugin;
	}

	public void setHtmlCodeForFlashPlugin(Text htmlCodeForFlashPlugin) {
		this.htmlCodeForFlashPlugin = htmlCodeForFlashPlugin;
	}

	public Integer getSequenceNumber() {
		return sequenceNumber;
	}

	public void setSequenceNumber(Integer sequenceNumber) {
		this.sequenceNumber = sequenceNumber;
	}

	public Boolean getOnLive() {
		return onLive;
	}

	public void setOnLive(Boolean onLive) {
		this.onLive = onLive;
	}

	public String getVideoCoverImageURL() {
		return videoCoverImageURL;
	}

	public void setVideoCoverImageURL(String videoCoverImageURL) {
		this.videoCoverImageURL = videoCoverImageURL;
	}

	public String getYouTubeURL() {
		return youTubeURL;
	}

	public void setYouTubeURL(String youTubeURL) {
		this.youTubeURL = youTubeURL;
	}
	
	

}
