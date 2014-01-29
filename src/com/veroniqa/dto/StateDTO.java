package com.veroniqa.dto;

import java.io.Serializable;

/**
 * SHI
 * Light weight object for States JDO
 */
public class StateDTO implements Serializable, Comparable<StateDTO> {

	private static final long serialVersionUID = -5339245150377889620L;
	private String stateCode;
	private String stateName;
	private String stateCodeExt;
	
	public String getStateCode() {
		return stateCode;
	}

	public void setStateCode(String stateCode) {
		this.stateCode = stateCode;
	}

	public String getStateName() {
		return stateName;
	}

	public void setStateName(String stateName) {
		this.stateName = stateName;
	}

	public String getStateCodeExt() {
		return stateCodeExt;
	}

	public void setStateCodeExt(String stateCodeExt) {
		this.stateCodeExt = stateCodeExt;
	}

	@Override
	public int compareTo(StateDTO state) {
		if(state==null)
			return -1;
		if(this.stateName==null || state.stateName==null)
			return -1;
		return this.stateName.compareTo(state.stateName);
	}

	@Override
	public boolean equals(Object obj) {
		if(obj==null)
			return false;
		StateDTO state=(StateDTO)obj;
		if(this.stateCode==null|| state.stateCode==null)
			return false;
		
		return this.stateCode.equals(state.stateCode);
	}

	
}
