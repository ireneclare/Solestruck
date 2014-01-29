package com.veroniqa.dto;

import java.io.Serializable;
import java.util.Date;

public class EmailTemplateServiceDTO implements Serializable{
	
	private static final long serialVersionUID = 91341L;
	
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
	

	public String getBrandId() {
		return brandId;
	}

	public void setBrandId(String brandId) {
		this.brandId = brandId;
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
