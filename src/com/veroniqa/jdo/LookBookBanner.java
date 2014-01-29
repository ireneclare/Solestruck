package com.veroniqa.jdo;

import java.io.Serializable;
import java.util.Date;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.Text;

@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class LookBookBanner implements Serializable{
	
	private static final long serialVersionUID = 1132476785541L;
	
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private Key brandKey;
	
	@Persistent
	private String albumName;
	
	@Persistent
	private String subTitle;
	
	@Persistent
	private String albumCoverImageURL;
	
	@Persistent
	private String albumStripImageURL;
	
	@Persistent
	private String albumStripMouseOverImageURL;
	
	@Persistent
	private String imageLink;
	
	@Persistent
	private Text htmlCodeForFlashPlugin;
	
	@Persistent
	private Text youtubeCode;
	
	
	@Persistent
	private Integer sequenceNumber;
	
	@Persistent
	private Boolean deleted;
	
	@Persistent
	private Boolean onLive;
	
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Date dateDeleted;
	
	@Persistent
	private String user;
	
	@Persistent
	private String videoCoverImage;
	
	
	
	

	public String getYoutubeCode() {
		if(youtubeCode==null)
			return "";
		else
		return youtubeCode.getValue();
	}

	public void setYoutubeCode(String youtubeCode) {
		if(youtubeCode==null)
			youtubeCode="";
		this.youtubeCode = new Text(youtubeCode);
	}

	public String getVideoCoverImage() {
		return videoCoverImage;
	}

	public void setVideoCoverImage(String videoCoverImage) {
		this.videoCoverImage = videoCoverImage;
	}

	public String getUser() {
		return user;
	}

	public void setUser(String user) {
		this.user = user;
	}

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public Key getBrandKey() {
		return brandKey;
	}

	public void setBrandKey(Key brandKey) {
		this.brandKey = brandKey;
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

	public String getHtmlCodeForFlashPlugin() {
		if(htmlCodeForFlashPlugin==null)
			return "";
		else
		return htmlCodeForFlashPlugin.getValue();
	}

	public void setHtmlCodeForFlashPlugin(String htmlCodeForFlashPlugin) {
		if(htmlCodeForFlashPlugin==null)
			htmlCodeForFlashPlugin="";
		this.htmlCodeForFlashPlugin = new Text(htmlCodeForFlashPlugin);
	}

	public Integer getSequenceNumber() {
		return sequenceNumber;
	}

	public void setSequenceNumber(Integer sequenceNumber) {
		this.sequenceNumber = sequenceNumber;
	}

	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
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

	public Date getDateDeleted() {
		return dateDeleted;
	}

	public void setDateDeleted(Date dateDeleted) {
		this.dateDeleted = dateDeleted;
	}
	
	
	public void copy(LookBookBanner b)
	{
		if(b.getAlbumCoverImageURL()!=null)
			this.setAlbumCoverImageURL(b.getAlbumCoverImageURL());
		if(b.getAlbumName()!=null)
			this.setAlbumName(b.getAlbumName());
		if(b.getSubTitle()!=null)
			this.setSubTitle(b.getSubTitle());
		if(b.getAlbumStripImageURL()!=null)
			this.setAlbumStripImageURL(b.getAlbumStripImageURL());
		if(b.getAlbumStripMouseOverImageURL()!=null)
			this.setAlbumStripMouseOverImageURL(b.getAlbumStripMouseOverImageURL());
		if(b.getDateAdded()!=null)
			this.setDateAdded(b.getDateAdded());
		if(b.getDateDeleted()!=null)
			this.setDateDeleted(b.getDateDeleted());
		if(b.getDeleted()!=null)
			this.setDeleted(b.getDeleted());
		if(b.getOnLive()!=null)
			this.setOnLive(b.getOnLive());
		if(b.getSequenceNumber()!=null)
			this.setSequenceNumber(b.getSequenceNumber());
		if(b.getImageLink()!=null)
			this.setImageLink(b.getImageLink());
		if(b.getUser()!=null)
		{
			this.setUser(b.getUser());
		}
		if(b.getVideoCoverImage()!=null)
		{
			this.setVideoCoverImage(b.getVideoCoverImage());
		}
		
		if(b.getYoutubeCode()!=null)
		{
			this.setYoutubeCode(b.getYoutubeCode());
		}
		
		if(b.getHtmlCodeForFlashPlugin()!=null)
		{
			this.setHtmlCodeForFlashPlugin(b.getHtmlCodeForFlashPlugin());
		}
		
	}
	
	
	
	
	

}
