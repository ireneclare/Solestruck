package com.veroniqa.frontend.jdo;

import java.io.Serializable;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.Text;

@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class StreetCredFeed implements Serializable {
	
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
//	@Persistent
//	private String next_max_id="";
	
	
	@Persistent
	private Boolean isVideo=false;
	
	@Persistent
	private String video_low_resolution="Not Specified";
	
	@Persistent
	private String video_standard_resolution="Not Specified";
	
	@Persistent
	private String tags="";
	
	@Persistent
	private Text caption = new Text("");
	
	@Persistent
	private String fullname="";
	
	@Persistent
	private String userName="";
	
	@Persistent
	private String link="";	
	
	@Persistent
	private String dateAdded="";
	
	@Persistent
	private long dateModified = 1l;
	
	
	@Persistent
	private long milliseconds=1L;
	
	@Persistent
	private String images_low_resolution="";
	
	@Persistent
	private String images_standard_resolution="";
	
	@Persistent
	private String status="New";
	
	@Persistent
	private Boolean deleted=false;
	
	@Persistent
	private String updatedBy = "";
	
	public long getMilliseconds() {
		return milliseconds;
	}


	public void setMilliseconds(long milliseconds) {
			this.milliseconds = milliseconds;
	}


	public String getStatus() {
		return status;
	}


	public void setStatus(String status) {
		
		if(status != null)
			this.status = status;
	}

	public Key getKey() {
		return key;
	}


	public void setKey(Key key) {
		this.key = key;
	}

	public Boolean getIsVideo() {
		return isVideo;
	}


	public void setIsVideo(Boolean isVideo) {
		this.isVideo = isVideo;
	}


	public String getVideo_low_resolution() {
		return video_low_resolution;
	}


	public void setVideo_low_resolution(String video_low_resolution) {
		
		if(video_low_resolution != null)
			this.video_low_resolution = video_low_resolution;
	}


	public String getVideo_standard_resolution() {
		return video_standard_resolution;
	}


	public void setVideo_standard_resolution(String video_standard_resolution) {
		
		if(video_standard_resolution != null)
			this.video_standard_resolution = video_standard_resolution;
	}


	public String getTags() {
		return tags;
	}


	public void setTags(String tags) {
		
		if(tags != null)
			this.tags = tags;
	}


	public Text getCaption() {
		return caption;
	}


	public void setCaption(Text caption) {
		this.caption = caption;
	}


	public String getFullname() {
		return fullname;
	}


	public void setFullname(String fullname) {
		
		if(fullname != null)
			this.fullname = fullname;
	}


	public String getUserName() {
		return userName;
	}


	public void setUserName(String userName) {
		
		if(userName != null)
			this.userName = userName;
	}


	
	public String getLink() {
		return link;
	}


	public void setLink(String link) {
		
		if(link != null)
			this.link = link;
	}


	public String getDateAdded() {
		return dateAdded;
	}


	public void setDateAdded(String dateAdded) {
		
		if(dateAdded != null)
			this.dateAdded = dateAdded;
	}


	public String getImages_low_resolution() {
		return images_low_resolution;
	}


	public void setImages_low_resolution(String images_low_resolution) {
		
		if(images_low_resolution != null)
			this.images_low_resolution = images_low_resolution;
	}


	public String getImages_standard_resolution() {
		return images_standard_resolution;
	}


	public void setImages_standard_resolution(String images_standard_resolution) {
		
		if(images_standard_resolution != null)
			this.images_standard_resolution = images_standard_resolution;
	}




	public Boolean getDeleted() {
		return deleted;
	}


	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}
	
	public long getDateModified() {
		return dateModified;
	}


	public void setDateModified(long dateModified) {
		this.dateModified = dateModified;
	}


	public String getUpdatedBy() {
		return updatedBy;
	}


	public void setUpdatedBy(String updatedBy) {
		this.updatedBy = updatedBy;
	}


	

}
