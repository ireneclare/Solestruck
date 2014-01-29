package com.veroniqa.jdo;

import java.io.Serializable;
import java.util.Date;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Blob;
import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.Text;
import com.veroniqa.dto.ObjectWrapper;

/**
 * 
 * @author k3g
 *This JDO is used to store the data specific to a Lookup.
 */


@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class Lookup implements Serializable{
	
	private static final long serialVersionUID = 1176785541L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private String name;
	
	@Persistent
	private String stringValue;
	
	@Persistent
	private Text textValue=new Text("");
	
	@Persistent
	private Blob blobValue=new Blob(new byte[1]);
	
	@Persistent
	private Integer integerValue;
	
	@Persistent
	private Long longValue;
	
	@Persistent
	private Double doubleValue;
	
	@Persistent
	private Boolean booleanValue;
	
	@Persistent(serialized="true",defaultFetchGroup="true")
	private ObjectWrapper listValue=new ObjectWrapper();
	
	@Persistent
	private Date dateValue;
	
	@Persistent
	private Key keyValue;
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Date dateDeleted;
	
	@Persistent
	private Boolean deleted;	
	
	
	
	

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

	public Key getKey() {
		return key;
	}

	public void setKey(Key key) {
		this.key = key;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getStringValue() {
		return stringValue;
	}

	public void setStringValue(String stringValue) {
		this.stringValue = stringValue;
	}

	public String getTextValue() {
		return textValue.getValue();
	}

	public void setTextValue(String textValue) {
		this.textValue =new Text(textValue);
	}

	public Blob getBlobValue() {
		return blobValue;
	}

	public void setBlobValue(Blob blobValue) {
		this.blobValue = blobValue;
	}

	public Integer getIntegerValue() {
		return integerValue;
	}

	public void setIntegerValue(Integer integerValue) {
		this.integerValue = integerValue;
	}

	public Long getLongValue() {
		return longValue;
	}

	public void setLongValue(Long longValue) {
		this.longValue = longValue;
	}

	public Double getDoubleValue() {
		return doubleValue;
	}

	public void setDoubleValue(Double doubleValue) {
		this.doubleValue = doubleValue;
	}

	public Boolean getBooleanValue() {
		return booleanValue;
	}

	public void setBooleanValue(Boolean booleanValue) {
		this.booleanValue = booleanValue;
	}

	public ObjectWrapper getListValue() {
		return listValue;
	}

	public void setListValue(ObjectWrapper listValue) {
		this.listValue = listValue;
	}

	public Date getDateValue() {
		return dateValue;
	}

	public void setDateValue(Date dateValue) {
		this.dateValue = dateValue;
	}

	public Key getKeyValue() {
		return keyValue;
	}

	public void setKeyValue(Key keyValue) {
		this.keyValue = keyValue;
	}
	
	
	public void copy(Lookup look)
	{
		if(look.getBooleanValue()!=null)
			this.setBooleanValue(look.getBooleanValue());
		if(look.getBlobValue()!=null)
			this.setBlobValue(look.getBlobValue());
		if(look.getDateValue()!=null)
			this.setDateValue(look.getDateValue());
		if(look.getDoubleValue()!=null)
			this.setDoubleValue(look.getDoubleValue());
		if(look.getIntegerValue()!=null)
			this.setIntegerValue(look.getIntegerValue());
		if(look.getKeyValue()!=null)
			this.setKeyValue(look.getKeyValue());
		if(look.getListValue()!=null)
			this.setListValue(look.getListValue());
		if(look.getLongValue()!=null)
			this.setLongValue(look.getLongValue());
		if(look.getName()!=null)
			this.setName(look.getName());
		if(look.getStringValue()!=null)
			this.setStringValue(look.getStringValue());
		if(look.getTextValue()!=null)
			this.setTextValue(look.getTextValue());
		if(look.getDeleted()!=null)
			this.setDeleted(look.getDeleted());
		if(look.getDateAdded()!=null)
			this.setDateAdded(look.getDateAdded());
		if(look.getDateDeleted()!=null)
			this.setDateDeleted(look.getDateDeleted());
	}
	
	
	

}
