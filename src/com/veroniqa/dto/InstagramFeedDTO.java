package com.veroniqa.dto;

import java.io.Serializable;

public class InstagramFeedDTO implements Serializable
{
	/**
	 * @author femina
	 * For Blog Instagram
	 */
	private static final long serialVersionUID = 4690260395458068798L;
	private String mediaID="";
	private String image_url="";
	private String imageLink="";
	private String next_max_tag_id="";
	
	
	public String getMediaID() {
		return mediaID;
	}
	public void setMediaID(String mediaID) {
		this.mediaID = mediaID;
	}
	public String getImage_url() {
		return image_url;
	}
	public void setImage_url(String image_url) {
		this.image_url = image_url;
	}
	public String getImageLink() {
		return imageLink;
	}
	public void setImageLink(String imageLink) {
		this.imageLink = imageLink;
	}
	public String getNext_max_tag_id() {
		return next_max_tag_id;
	}
	public void setNext_max_tag_id(String next_max_tag_id) {
		this.next_max_tag_id = next_max_tag_id;
	}
	
		
	
	
}
