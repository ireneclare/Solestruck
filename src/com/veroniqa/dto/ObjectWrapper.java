package com.veroniqa.dto;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.List;

public class ObjectWrapper implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -6442647485021401875L;
	
	private List listValues=new ArrayList();

	public List getListValues() {
		return listValues;
	}

	public void setListValues(List listValues) {
		this.listValues = listValues;
	}
	
	

}
