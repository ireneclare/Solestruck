package com.veroniqa.dto;

import java.io.Serializable;
import java.util.List;

public class PageDTO<T extends Serializable> implements Serializable{

	/**
	 * @author SHI
	 * This class is used for pagination.
	 */
	private static final long serialVersionUID = 1L;
	private List<T> data;
	private Integer itemsPerPage;
	private Integer selectedPage;
	private Integer availablePages;
	private Boolean previousAvailable;
	private Boolean nextAvailable;
	private String previousValue;
	private String nextValue;
	private String currentValue;
	private String cursorStr;
	private String byPreference;
	
	public List<T> getData() {
		return data;
	}
	public void setData(List<T> data) {
		this.data = data;
	}
	public Integer getSelectedPage() {
		return selectedPage;
	}
	public void setSelectedPage(Integer selectedPage) {
		this.selectedPage = selectedPage;
	}
	public Boolean getPreviousAvailable() {
		return previousAvailable;
	}
	public void setPreviousAvailable(Boolean previousAvailable) {
		this.previousAvailable = previousAvailable;
	}
	public Boolean getNextAvailable() {
		return nextAvailable;
	}
	public void setNextAvailable(Boolean nextAvailable) {
		this.nextAvailable = nextAvailable;
	}
	public String getPreviousValue() {
		return previousValue;
	}
	public void setPreviousValue(String previousValue) {
		this.previousValue = previousValue;
	}
	public String getNextValue() {
		return nextValue;
	}
	public void setNextValue(String nextValue) {
		this.nextValue = nextValue;
	}
	public String getCurrentValue() {
		return currentValue;
	}
	public void setCurrentValue(String currentValue) {
		this.currentValue = currentValue;
	}
	public Integer getItemsPerPage() {
		return itemsPerPage;
	}
	public void setItemsPerPage(Integer itemsPerPage) {
		this.itemsPerPage = itemsPerPage;
	}
	public Integer getAvailablePages() {
		return availablePages;
	}
	public void setAvailablePages(Integer availablePages) {
		this.availablePages = availablePages;
	}
	public String getCursorStr() {
		return cursorStr;
	}
	public void setCursorStr(String cursorStr) {
		this.cursorStr = cursorStr;
	}
	public String getByPreference() {
		return byPreference;
	}
	public void setByPreference(String byPreference) {
		this.byPreference = byPreference;
	}
	
	
	
}
