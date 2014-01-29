package com.veroniqa.dto;

import java.io.Serializable;
import java.util.List;

import com.veroniqa.jdo.Attribute;
import com.veroniqa.jdo.Color;

/**
 * @author Vishnuvardhan.Mohanrao
 *
 */
public class FrontEndDTO implements Serializable{

/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
private List<Attribute> sizes;
private List<Attribute> womenSizes;
private List<Attribute> menSizes;
private List<Attribute> womenCPageSizes;
private List<Attribute> menCPageSizes;
private List<Attribute> styles;
private List<Attribute> womenStyles;
private List<Attribute> menStyles;
private List<Attribute> colors;
private List<Attribute> womenVendors;
private List<Attribute> menVendors;
private List<Attribute> allVendors;
private List<Attribute> womenFilterVendors;
private List<Attribute> menFilterVendors;
private List<Attribute> allFilterVendors;
private List<Attribute> socialCategory;


public List<Attribute> getSocialCategory() {
	return socialCategory;
}
public void setSocialCategory(List<Attribute> socialCategory) {
	this.socialCategory = socialCategory;
}
public List<Attribute> getSizes() {
	return sizes;
}
public void setSizes(List<Attribute> sizes) {
	this.sizes = sizes;
}
public List<Attribute> getStyles() {
	return styles;
}
public void setStyles(List<Attribute> styles) {
	this.styles = styles;
}
public List<Attribute> getColors() {
	return colors;
}
public void setColors(List<Attribute> colors) {
	this.colors = colors;
}
public List<Attribute> getWomenVendors() {
	return womenVendors;
}
public void setWomenVendors(List<Attribute> womenVendors) {
	this.womenVendors = womenVendors;
}
public List<Attribute> getMenVendors() {
	return menVendors;
}
public void setMenVendors(List<Attribute> menVendors) {
	this.menVendors = menVendors;
}
public List<Attribute> getAllVendors() {
	return allVendors;
}
public void setAllVendors(List<Attribute> allVendors) {
	this.allVendors = allVendors;
}
public List<Attribute> getWomenSizes() {
	return womenSizes;
}
public void setWomenSizes(List<Attribute> womenSizes) {
	this.womenSizes = womenSizes;
}
public List<Attribute> getMenSizes() {
	return menSizes;
}
public void setMenSizes(List<Attribute> menSizes) {
	this.menSizes = menSizes;
}
public List<Attribute> getWomenCPageSizes() {
	return womenCPageSizes;
}
public void setWomenCPageSizes(List<Attribute> womenCPageSizes) {
	this.womenCPageSizes = womenCPageSizes;
}
public List<Attribute> getMenCPageSizes() {
	return menCPageSizes;
}
public void setMenCPageSizes(List<Attribute> menCPageSizes) {
	this.menCPageSizes = menCPageSizes;
}
public List<Attribute> getWomenStyles() {
	return womenStyles;
}
public void setWomenStyles(List<Attribute> womenStyles) {
	this.womenStyles = womenStyles;
}
public List<Attribute> getMenStyles() {
	return menStyles;
}
public void setMenStyles(List<Attribute> menStyles) {
	this.menStyles = menStyles;
}
public List<Attribute> getWomenFilterVendors() {
	return womenFilterVendors;
}
public void setWomenFilterVendors(List<Attribute> womenFilterVendors) {
	this.womenFilterVendors = womenFilterVendors;
}
public List<Attribute> getMenFilterVendors() {
	return menFilterVendors;
}
public void setMenFilterVendors(List<Attribute> menFilterVendors) {
	this.menFilterVendors = menFilterVendors;
}
public List<Attribute> getAllFilterVendors() {
	return allFilterVendors;
}
public void setAllFilterVendors(List<Attribute> allFilterVendors) {
	this.allFilterVendors = allFilterVendors;
}





}
