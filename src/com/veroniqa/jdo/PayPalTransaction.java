package com.veroniqa.jdo;

import java.io.Serializable;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.Text;

@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class PayPalTransaction  implements Serializable{
	
	private static final long serialVersionUID = 1L;

	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private Key orderId;
	
	@Persistent
	private String transactionType;
	
	@Persistent
	private String tender;
	
	@Persistent
	private Double amount;
	
	@Persistent
	private String creditCardNumber;
	
	@Persistent
	private String ccv2;
	
	@Persistent
	private String transactionId;
		
	@Persistent
	private Integer responseCode;
	
	@Persistent
	private String responseMsg;
	
	@Persistent
	private Date timestamp;
	
	@Persistent
	private String transactionStatus;
	
	@Persistent
	private String comment;

	@Persistent
	private Boolean deleted;
	
	@Persistent
	private String cardType;
	
	@Persistent 
	private String triggerMessage;
	
	@Persistent 
	private String emailId;
	
	@Persistent 
	private String phoneNumber;
	
	@Persistent 
	private String billingName;
	
	@Persistent 
	private String shippingName;
	
	@Persistent 
	private String billingStreet;
	
	@Persistent 
	private String billingCountry;
	
	@Persistent 
	private String billingCity;
	
	@Persistent 
	private String shippingStreet;
	
	@Persistent 
	private String shippingCountry;
	
	@Persistent 
	private String shippingCity;
	
	@Persistent 
	private Boolean isUSSV;
	
	@Persistent 
	private String billingzipCode;
	
	@Persistent 
	private String shippingzipCode;
	
	@Persistent 
	private String province;
	
	@Persistent
	private String bAID;//Billing Agreement id in case of PayPal Express Checkout
	
	@Persistent
	private String token;//in case of PayPal Express Checkout
	
	
	@Persistent(serialized = "true", defaultFetchGroup = "true")
	private Map<String,String> responseMap=new HashMap<String,String>();
	
	@Persistent 
	private Text ssvRespMsg=new Text("");
	
	
	public Map<String, String> getResponseMap() {
		return responseMap;
	}

	public void setResponseMap(Map<String, String> responseMap) {
		this.responseMap = responseMap;
	}

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public Key getOrderId() {
		return orderId;
	}

	public void setOrderId(Key orderId) {
		this.orderId = orderId;
	}

	public String getTransactionType() {
		return transactionType;
	}

	public void setTransactionType(String transactionType) {
		this.transactionType = transactionType;
	}

	public String getTender() {
		return tender;
	}

	public void setTender(String tender) {
		this.tender = tender;
	}

	public Double getAmount() {
		return amount;
	}

	public void setAmount(Double amount) {
		this.amount = amount;
	}

	public String getCreditCardNumber() {
		return creditCardNumber;
	}

	public void setCreditCardNumber(String creditCardNumber) {
		this.creditCardNumber = creditCardNumber;
	}

	public String getCcv2() {
		return ccv2;
	}

	public void setCcv2(String ccv2) {
		this.ccv2 = ccv2;
	}

	public String getTransactionId() {
		return transactionId;
	}

	public void setTransactionId(String transactionId) {
		this.transactionId = transactionId;
	}

	public Integer getResponseCode() {
		return responseCode;
	}

	public void setResponseCode(Integer responseCode) {
		this.responseCode = responseCode;
	}

	public String getResponseMsg() {
		return responseMsg;
	}

	public void setResponseMsg(String responseMsg) {
		this.responseMsg = responseMsg;
	}

	public Date getTimestamp() {
		return timestamp;
	}

	public void setTimestamp(Date timestamp) {
		this.timestamp = timestamp;
	}

	public String getTransactionStatus() {
		return transactionStatus;
	}

	public void setTransactionStatus(String transactionStatus) {
		this.transactionStatus = transactionStatus;
	}

	public String getComment() {
		return comment;
	}

	public void setComment(String comment) {
		this.comment = comment;
	}

	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}

	public String getTriggerMessage() {
		return triggerMessage;
	}

	public void setTriggerMessage(String triggerMessage) {
		this.triggerMessage = triggerMessage;
	}

	public String getCardType() {
		return cardType;
	}

	public void setCardType(String cardType) {
		this.cardType = cardType;
	}
	
	public String getEmailId() {
		return emailId;
	}

	public void setEmailId(String emailId) {
		this.emailId = emailId;
	}

	public String getPhoneNumber() {
		return phoneNumber;
	}

	public void setPhoneNumber(String phoneNumber) {
		this.phoneNumber = phoneNumber;
	}

	public String getBillingName() {
		return billingName;
	}

	public void setBillingName(String billingName) {
		this.billingName = billingName;
	}

	public String getShippingName() {
		return shippingName;
	}

	public void setShippingName(String shippingName) {
		this.shippingName = shippingName;
	}

	public String getBillingStreet() {
		return billingStreet;
	}

	public void setBillingStreet(String billingStreet) {
		this.billingStreet = billingStreet;
	}

	public String getBillingCountry() {
		return billingCountry;
	}

	public void setBillingCountry(String billingCountry) {
		this.billingCountry = billingCountry;
	}

	public String getBillingCity() {
		return billingCity;
	}

	public void setBillingCity(String billingCity) {
		this.billingCity = billingCity;
	}

	public String getShippingStreet() {
		return shippingStreet;
	}

	public void setShippingStreet(String shippingStreet) {
		this.shippingStreet = shippingStreet;
	}

	public String getShippingCountry() {
		return shippingCountry;
	}

	public void setShippingCountry(String shippingCountry) {
		this.shippingCountry = shippingCountry;
	}

	public String getShippingCity() {
		return shippingCity;
	}

	public void setShippingCity(String shippingCity) {
		this.shippingCity = shippingCity;
	}

	public Boolean getIsUSSV() {
		return isUSSV;
	}

	public void setIsUSSV(Boolean isUSSV) {
		this.isUSSV = isUSSV;
	}
	
	public String getBillingzipCode() {
		return billingzipCode;
	}

	public void setBillingzipCode(String billingzipCode) {
		this.billingzipCode = billingzipCode;
	}

	public String getShippingzipCode() {
		return shippingzipCode;
	}

	public void setShippingzipCode(String shippingzipCode) {
		this.shippingzipCode = shippingzipCode;
	}

	public String getBAID() {
		return this.bAID;
	}

	public void setBAID(String bAID) {
		this.bAID = bAID;
	}
	

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public String getProvince() {
		return province;
	}

	public void setProvince(String province) {
		this.province = province;
	}
	
	public Text getSsvRespMsg() {
		return ssvRespMsg;
	}

	public void setSsvRespMsg(Text ssvRespMsg) {
		this.ssvRespMsg = ssvRespMsg;
	}

	public void copy(PayPalTransaction transaction)
	{
		if(this.getOrderId()!=null)
		this.setOrderId(transaction.getOrderId());
		if(this.getTransactionType()!=null)
		this.setTransactionType(transaction.getTransactionType());
		if(this.getTender()!=null)
		this.setTender(transaction.getTender());
		if(this.getAmount()!=null)
			this.setAmount(transaction.getAmount());
		if(this.getCreditCardNumber()!=null)
			this.setCreditCardNumber(transaction.getCreditCardNumber());	
		if(this.getCcv2()!=null)
		this.setCcv2(transaction.getCcv2());
		if(this.getTransactionId()!=null)
			this.setTransactionId(this.getTransactionId());
		if(this.getResponseCode()!=null)
			this.setResponseCode(transaction.getResponseCode());	
		if(this.getResponseMsg()!=null)
			this.setResponseMsg(transaction.getResponseMsg());
		if(this.getTimestamp()!=null)
			this.setTimestamp(transaction.getTimestamp());
		if(this.getTransactionStatus()!=null)
			this.setTransactionStatus(transaction.getTransactionStatus());
		if(this.getComment()!=null)
			this.setComment(transaction.getComment());
		if(this.getDeleted()!=null)
			this.setDeleted(transaction.getDeleted());
		if(this.getCardType()!=null)
			this.setCardType(transaction.getCardType());	
		if(this.getTriggerMessage()!=null)
		this.setTriggerMessage(transaction.getTriggerMessage());
		if(transaction.getEmailId()!=null&&transaction.getEmailId().length()>0)
			this.setEmailId(transaction.getEmailId());
		if(transaction.getPhoneNumber()!=null&&transaction.getPhoneNumber().length()>0)
			this.setPhoneNumber(transaction.getPhoneNumber());
		if(transaction.getBillingName()!=null&&transaction.getBillingName().length()>0)
			this.setBillingName(transaction.getBillingName());
		if(transaction.getShippingName()!=null&&transaction.getShippingName().length()>0)
			this.setShippingName(transaction.getShippingName());
		if(transaction.getBillingStreet()!=null&&transaction.getBillingStreet().length()>0)
			this.setBillingStreet(transaction.getBillingStreet());
		if(transaction.getBillingCity()!=null&&transaction.getBillingCity().length()>0)
			this.setBillingCity(transaction.getBillingCity());
		if(transaction.getBillingCountry()!=null&&transaction.getBillingCountry().length()>0)
			this.setBillingCountry(transaction.getBillingCountry());
		if(transaction.getShippingStreet()!=null&&transaction.getShippingStreet().length()>0)
			this.setShippingStreet(transaction.getShippingStreet());
		if(transaction.getShippingCity()!=null&&transaction.getShippingCity().length()>0)
			this.setShippingCity(transaction.getShippingCity());
		if(this.getIsUSSV()!=null)
			this.setIsUSSV(transaction.getIsUSSV());
		if(this.getShippingzipCode()!=null)
			this.setShippingzipCode(transaction.getShippingzipCode());
		if(this.getBillingzipCode()!=null)
			this.setBillingzipCode(transaction.getBillingzipCode());
		if(this.getBAID()!=null)
			this.setBAID(transaction.getBAID());
		if(this.getToken()!=null)
			this.setToken(transaction.getToken());
		if(this.getProvince()!=null)
			this.setProvince(transaction.getProvince());
		if(this.getSsvRespMsg()!=null)
			this.setSsvRespMsg(transaction.getSsvRespMsg());
		
		if(transaction.getShippingCountry()!=null&&transaction.getShippingCountry().length()>0)
			this.setShippingCountry(transaction.getShippingCountry());
	}
}
