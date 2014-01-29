package com.veroniqa.jdo;

import java.io.Serializable;

import java.util.Date;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;
import com.google.appengine.api.datastore.Key;

/**
 * @author Vishnuvardhan.Mohanrao
 *
 */
@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class Customer implements Serializable{
	
	private static final long serialVersionUID = 12354541L;
	
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private String emailId;
	
	@Persistent
	private String password;	
	
	@Persistent
	private Boolean resetPassword;
	
	@Persistent
	private Date resetPasswordMailSent;
	
	@Persistent
	private String firstName;
	
	@Persistent
	private String lastName;
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Boolean emailAlerts;
	
	@Persistent
	private String mobileOrPhoneContactNumber;
	
	@Persistent
	private Key billingAddress;
	
	@Persistent
	private Key shippingAddress;
	
	@Persistent
	private Boolean returningCustomer;

	
	
	public Boolean getEmailAlerts() {
		return emailAlerts;
	}

	public void setEmailAlerts(Boolean emailAlerts) {
		this.emailAlerts = emailAlerts;
	}

	public Boolean getReturningCustomer() {
		return returningCustomer;
	}

	public void setReturningCustomer(Boolean returningCustomer) {
		this.returningCustomer = returningCustomer;
	}

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}

	public String getMobileOrPhoneContactNumber() {
		return mobileOrPhoneContactNumber;
	}

	public void setMobileOrPhoneContactNumber(String mobileOrPhoneContactNumber) {
		this.mobileOrPhoneContactNumber = mobileOrPhoneContactNumber;
	}

	public Key getBillingAddress() {
		return billingAddress;
	}

	public void setBillingAddress(Key billingAddress) {
		this.billingAddress = billingAddress;
	}

	public Key getShippingAddress() {
		return shippingAddress;
	}

	public void setShippingAddress(Key shippingAddress) {
		this.shippingAddress = shippingAddress;
	}
	
	public Boolean getResetPassword() {
		return resetPassword;
	}

	public void setResetPassword(Boolean resetPassword) {
		this.resetPassword = resetPassword;
	}

	public Date getResetPasswordMailSent() {
		return resetPasswordMailSent;
	}

	public void setResetPasswordMailSent(Date resetPasswordMailSent) {
		this.resetPasswordMailSent = resetPasswordMailSent;
	}

	public void copy(Customer customer)
	{
		if(customer.getBillingAddress()!=null)
			this.setBillingAddress(customer.getBillingAddress());
		if(customer.getDateAdded()!=null)
			this.setDateAdded(customer.getDateAdded());
		if(customer.getEmailId()!=null)
			this.setEmailId(customer.getEmailId());
		if(customer.getFirstName()!=null)
			this.setFirstName(customer.getFirstName());
		if(customer.getLastName()!=null)
			this.setLastName(customer.getLastName());
		if(customer.getMobileOrPhoneContactNumber()!=null)
			this.setMobileOrPhoneContactNumber(customer.getMobileOrPhoneContactNumber());
		if(customer.getPassword()!=null)
			this.setPassword(customer.getPassword());
		if(customer.getResetPassword()!=null)
			this.setResetPassword(customer.getResetPassword());
		if(customer.getResetPasswordMailSent()!=null)
			this.setResetPasswordMailSent(customer.getResetPasswordMailSent());
		if(customer.getReturningCustomer()!=null)
			this.setReturningCustomer(customer.getReturningCustomer());
		if(customer.getShippingAddress()!=null)
			this.setShippingAddress(customer.getShippingAddress());
	}
	
	

}
