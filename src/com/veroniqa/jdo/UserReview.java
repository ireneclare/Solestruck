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

public class UserReview implements Serializable, Comparable {
	
	private static final long serialVersionUID = 1L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private String userName;
	
	@Persistent
	private String userEmail;
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Text title;
	
	@Persistent
	private Text reviewText;
	
	@Persistent
	private Integer ratingCount;
	
	@Persistent
	private Boolean anonymous;
	
	@Persistent
	private Boolean approved;
	
	@Persistent
	private String vendorName;
	
	@Persistent
	private String productName;
	
	@Persistent
	private String colorName;
	
	@Persistent
	private Long productID;
	
	@Persistent
	private String shoeid;
	
	@Persistent
	private Long colorID;
	
	@Persistent
	private Boolean mailSent;
	
	@Persistent
	private Long reviewId;
	
	@Persistent
	private String imageUrl;
	
	@Persistent
	private String reviewType;
	
	
	
	
	public String getReviewType() {
		return reviewType;
	}

	public void setReviewType(String reviewType) {
		this.reviewType = reviewType;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public Long getReviewId() {
		return reviewId;
	}

	public void setReviewId(Long reviewId) {
		this.reviewId = reviewId;
	}

	public void setTitle(Text title) {
		this.title = title;
	}

	public void setReviewText(Text reviewText) {
		this.reviewText = reviewText;
	}

	public Boolean getMailSent() {
		return mailSent;
	}

	public void setMailSent(Boolean mailSent) {
		this.mailSent = mailSent;
	}

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public String getUserEmail() {
		return userEmail;
	}

	public void setUserEmail(String userEmail) {
		this.userEmail = userEmail;
	}

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}

	public String getReviewText() {
		return reviewText.getValue();
	}

	public void setReviewText(String reviewText) {
		this.reviewText = new Text(reviewText);;
	}

	public Integer getRatingCount() {
		return ratingCount;
	}

	public void setRatingCount(Integer ratingCount) {
		this.ratingCount = ratingCount;
	}

	public Boolean getAnonymous() {
		return anonymous;
	}

	public void setAnonymous(Boolean anonymous) {
		this.anonymous = anonymous;
	}

	public Boolean getApproved() {
		return approved;
	}

	public void setApproved(Boolean approved) {
		this.approved = approved;
	}

	public String getVendorName() {
		return vendorName;
	}

	public void setVendorName(String vendorName) {
		this.vendorName = vendorName;
	}

	public String getProductName() {
		return productName;
	}

	public void setProductName(String productName) {
		this.productName = productName;
	}

	public String getColorName() {
		return colorName;
	}

	public void setColorName(String colorName) {
		this.colorName = colorName;
	}

	public Long getProductID() {
		return productID;
	}

	public void setProductID(Long productID) {
		this.productID = productID;
	}

	public Long getColorID() {
		return colorID;
	}

	public void setColorID(Long colorID) {
		this.colorID = colorID;
	}
	
	public String getShoeid() {
		return shoeid;
	}

	public void setShoeid(String shoeid) {
		this.shoeid = shoeid;
	}

	public String getTitle() {
		return title.getValue();
	}

	public void setTitle(String title) {
		this.title = new Text(title);
	}
	
	@Override
	public int compareTo(Object o) {
		// TODO Auto-generated method stub
		UserReview urv=(UserReview)o;
		return urv.dateAdded.compareTo(this.dateAdded);
	}

	

}
