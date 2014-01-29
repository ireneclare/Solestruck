package com.veroniqa.bean;

import java.io.Serializable;
/*
 * This class wraps all other beans needed by Payflow API to process the credit-card
 * By SHI
 * Date:April 11 2011
 *  */
public class PaymentDetails  implements Serializable{
	
	private InvoiceDetails invoiceDetails;
	private CreditCardDetails creditCardDetails;
	
	public PaymentDetails(){}

	public PaymentDetails(InvoiceDetails invoiceDetails,
			CreditCardDetails creditCardDetails) {
		this.invoiceDetails = invoiceDetails;
		this.creditCardDetails = creditCardDetails;
	}
	
	public InvoiceDetails getInvoiceDetails() {
		return invoiceDetails;
	}

	public void setInvoiceDetails(InvoiceDetails invoiceDetails) {
		this.invoiceDetails = invoiceDetails;
	}

	public CreditCardDetails getCreditCardDetails() {
		return creditCardDetails;
	}

	public void setCreditCardDetails(CreditCardDetails creditCardDetails) {
		this.creditCardDetails = creditCardDetails;
	}

	
	
}
