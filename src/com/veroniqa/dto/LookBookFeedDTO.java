package com.veroniqa.dto;

import java.io.Serializable;

public class LookBookFeedDTO implements Serializable
{
	/**
	 * @author femina
	 * For Blog Lookbook Feed
	 */
	private static final long serialVersionUID = -4703545284911485809L;
	private String title="";
	private String link="";
	private String image_url="";
	
	
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getLink() {
		return link;
	}
	public void setLink(String link) {
		this.link = link;
	}
	public String getImage_url() {
		return image_url;
	}
	public void setImage_url(String image_url) {
		this.image_url = image_url;
	}
	
	
	
	
}
