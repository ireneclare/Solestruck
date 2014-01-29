package com.veroniqa.frontend.jdo;

import java.io.Serializable;
import java.util.Date;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Blob;
import com.google.appengine.api.datastore.Key;

/**
 * 
 * @author k3g
 *This JDO is used to store the data specific to a Lookup.
 */


@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class StaticResources1 implements Serializable{
	
	private static final long serialVersionUID = 1176785534541L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private String name;

	@Persistent
	private Blob blobValue=new Blob(new byte[1]);
	
	@Persistent
	private Date lastModified;
	
	@Persistent
	private String etag;

	
	
	
	
	public String getEtag() {
		return etag;
	}



	public void setEtag(String etag) {
		this.etag = etag;
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



	public Blob getBlobValue() {
		return blobValue;
	}



	public void setBlobValue(Blob blobValue) {
		this.blobValue = blobValue;
	}


	public Date getLastModified() {
		return lastModified;
	}



	public void setLastModified(Date lastModified) {
		this.lastModified = lastModified;
	}



	public void copy(StaticResources1 look)
	{
		this.setBlobValue(look.getBlobValue());
		this.setName(look.getName());
		this.setLastModified(look.getLastModified());
		this.setEtag(look.getEtag());
	}
	
	
	

}
