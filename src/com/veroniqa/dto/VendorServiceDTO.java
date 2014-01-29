package com.veroniqa.dto;

import java.io.Serializable;
import java.util.Date;

public class VendorServiceDTO implements Serializable{
	
	private static final long serialVersionUID = 12311L;
	
	private Double markUpPercentage;
	
	private Double toMarkUpPercentage;

	private String attributeId;
	
	private String flag;
	
	private String sortBy;
	
	private Integer startIndex;
	
	private Integer endIndex;
	
	private Date dateAddedFrom;
	
	private Date dateAddedTo;
	
	private Date dateDeletedFrom;
	
	private Date dateDeletedTo;	
	
	private Integer pageNumber;
	
	
	
	

	public Double getToMarkUpPercentage() {
		return toMarkUpPercentage;
	}

	public void setToMarkUpPercentage(Double toMarkUpPercentage) {
		this.toMarkUpPercentage = toMarkUpPercentage;
	}

	public Double getMarkUpPercentage() {
		return markUpPercentage;
	}

	public void setMarkUpPercentage(Double markUpPercentage) {
		this.markUpPercentage = markUpPercentage;
	}

	public String getAttributeId() {
		return attributeId;
	}

	public void setAttributeId(String attributeId) {
		this.attributeId = attributeId;
	}

	public Integer getPageNumber() {
		return pageNumber;
	}

	public void setPageNumber(Integer pageNumber) {
		this.pageNumber = pageNumber;
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

}
