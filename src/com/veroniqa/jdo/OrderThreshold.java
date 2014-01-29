package com.veroniqa.jdo;

import java.io.Serializable;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class OrderThreshold implements Serializable{
	
	private static final long serialVersionUID = 1L;
	
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Date dateDeleted;
	
	@Persistent
	private Boolean deleted;
	
	@Persistent
	private Double thresholdMin;
	
	@Persistent
	private Double thresholdMax;
	
	@Persistent
	private Double thresholdDiscount;
	
	@Persistent
	private Long programId;
	
	
	public Key getKey() {
		return key;
	}


	public void setKey(Key key) {
		this.key = key;
	}


	public Date getDateAdded() {
		return dateAdded;
	}


	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}


	public Date getDateDeleted() {
		return dateDeleted;
	}


	public void setDateDeleted(Date dateDeleted) {
		this.dateDeleted = dateDeleted;
	}


	public Boolean getDeleted() {
		return deleted;
	}


	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}


	public Double getThresholdMin() {
		return thresholdMin;
	}


	public void setThresholdMin(Double thresholdMin) {
		this.thresholdMin = thresholdMin;
	}


	public Double getThresholdMax() {
		return thresholdMax;
	}


	public void setThresholdMax(Double thresholdMax) {
		this.thresholdMax = thresholdMax;
	}


	public Double getThresholdDiscount() {
		return thresholdDiscount;
	}


	public void setThresholdDiscount(Double thresholdDiscount) {
		this.thresholdDiscount = thresholdDiscount;
	}


	public Long getProgramId() {
		return programId;
	}


	public void setProgramId(Long programId) {
		this.programId = programId;
	}


	public void copy(OrderThreshold orderthreshold)
	{
		if(orderthreshold.getDateAdded()!=null)
			this.setDateAdded(orderthreshold.getDateAdded());
		if(orderthreshold.getDateDeleted()!=null)
			this.setDateDeleted(orderthreshold.getDateDeleted());
		if(orderthreshold.getDeleted()!=null)
			this.setDeleted(orderthreshold.getDeleted());
		if(orderthreshold.getThresholdMin()!=null)
			this.setThresholdMin(orderthreshold.getThresholdMin());
		if(orderthreshold.getThresholdMax()!=null)
			this.setThresholdMax(orderthreshold.getThresholdMax());
		if(orderthreshold.getThresholdDiscount()!=null)
			this.setThresholdDiscount(orderthreshold.getThresholdDiscount());
		if(orderthreshold.getProgramId()!=null)
			this.setProgramId(orderthreshold.getProgramId());
		
	}
	
	
		

}
