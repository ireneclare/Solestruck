package com.veroniqa.dto;

import java.io.Serializable;
import java.util.List;

public class CheckoutResponseDTO implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 8815107179115806588L;
	
	private String responseMessage;
	
	private List<Integer> sequenceIds;
	
	private CheckoutDetailDTO checkoutDetailDTO;

	public String getResponseMessage() {
		return responseMessage;
	}

	public void setResponseMessage(String responseMessage) {
		this.responseMessage = responseMessage;
	}

	public List<Integer> getSequenceIds() {
		return sequenceIds;
	}

	public void setSequenceIds(List<Integer> sequenceIds) {
		this.sequenceIds = sequenceIds;
	}

	public CheckoutDetailDTO getCheckoutDetailDTO() {
		return checkoutDetailDTO;
	}

	public void setCheckoutDetailDTO(CheckoutDetailDTO checkoutDetailDTO) {
		this.checkoutDetailDTO = checkoutDetailDTO;
	}
	
	

}
