package com.veroniqa.jdo;

import java.io.Serializable;
import java.util.Date;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.blobstore.BlobKey;
import com.google.appengine.api.datastore.Key;

@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class BlobDetail  implements Serializable {
	
	private static final long serialVersionUID = 265821053602945523L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Key key;
	
	@Persistent
	private BlobKey blobKey;
	
	@Persistent
	private String googleStorageKey;
	
	@Persistent
	private String fileName;
	
	@Persistent
	private String contentType;
	
	@Persistent
	private String categoryType;
	
	@Persistent
	private Long size;
	
	@Persistent
	private Date createdDate;

	@Persistent
	private Boolean deleted;
	
	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public BlobKey getBlobKey() {
		return blobKey;
	}

	public void setBlobKey(BlobKey blobKey) {
		this.blobKey = blobKey;
	}

	public String getGoogleStorageKey() {
		return googleStorageKey;
	}

	public void setGoogleStorageKey(String googleStorageKey) {
		this.googleStorageKey = googleStorageKey;
	}

	public String getFileName() {
		return fileName;
	}

	public void setFileName(String fileName) {
		this.fileName = fileName;
	}

	public String getContentType() {
		return contentType;
	}

	public void setContentType(String contentType) {
		this.contentType = contentType;
	}

	public String getCategoryType() {
		return categoryType;
	}

	public void setCategoryType(String categoryType) {
		this.categoryType = categoryType;
	}

	public Long getSize() {
		return size;
	}

	public void setSize(Long size) {
		this.size = size;
	}

	public Date getCreatedDate() {
		return createdDate;
	}

	public void setCreatedDate(Date createdDate) {
		this.createdDate = createdDate;
	}

	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}
	
	public void copy(BlobDetail detail)
	{
		if(detail.getBlobKey()!=null)
			this.setBlobKey(detail.getBlobKey());
		if(detail.getGoogleStorageKey()!=null)
			this.setGoogleStorageKey(detail.getGoogleStorageKey());
		if(detail.getCategoryType()!=null)
			this.setCategoryType(detail.getCategoryType());
		if(detail.getContentType()!=null)
			this.setContentType(detail.getContentType());
		if(detail.getCreatedDate()!=null)
			this.setCreatedDate(detail.getCreatedDate());
		if(detail.getDeleted()!=null)
			this.setDeleted(detail.getDeleted());
		if(detail.getFileName()!=null)
			this.setFileName(detail.getFileName());
		if(detail.getKey()!=null)
			this.setKey(detail.getKey());
		if(detail.getSize()!=null)
			this.setSize(detail.getSize());
	}
}