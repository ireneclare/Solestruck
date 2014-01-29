package com.veroniqa.dto;

import java.io.Serializable;
import java.util.List;

import com.veroniqa.jdo.ProductVariant;

public class ProductDetailDTO implements Serializable{
	
	private static final long serialVersionUID = 69891451L;
	
	private String productName;
	private String productDescription;
	private List<ProductVariant> colours;
	private List<ColorSizeDTO> colourDto;
	private Integer votes;
	private String socialCategory;
	
	
	
	public String getSocialCategory() {
		return socialCategory;
	}
	public void setSocialCategory(String socialCategory) {
		this.socialCategory = socialCategory;
	}
	public List<ColorSizeDTO> getColourDto() {
		return colourDto;
	}
	public void setColourDto(List<ColorSizeDTO> colourDto) {
		this.colourDto = colourDto;
	}
	public String getProductName() {
		return productName;
	}
	public void setProductName(String productName) {
		this.productName = productName;
	}
	public String getProductDescription() {
		return productDescription;
	}
	public void setProductDescription(String productDescription) {
		this.productDescription = productDescription;
	}
	public List<ProductVariant> getColours() {
		return colours;
	}
	public void setColours(List<ProductVariant> colours) {
		this.colours = colours;
	}
	public Integer getVotes() {
		return votes;
	}
	public void setVotes(Integer votes) {
		this.votes = votes;
	}
	
	


}
