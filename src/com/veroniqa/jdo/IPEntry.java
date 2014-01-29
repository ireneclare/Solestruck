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
 * 
 * @author k3g
 *This JDO is used to store the data specific to a IP.
 */


@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class IPEntry implements Serializable{
	
	private static final long serialVersionUID = 111L;
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private Long ipFrom;
	
	@Persistent
	private Long ipTo;
	
	@Persistent
	private String countryCode2;
	
	@Persistent
	private String countryCode3;
	
	@Persistent
	private String countryName;
	
	
	
	public Key getKey() {
		return key;
	}



	public void setKey(Key key) {
		this.key = key;
	}



	public Long getIpFrom() {
		return ipFrom;
	}



	public void setIpFrom(Long ipFrom) {
		this.ipFrom = ipFrom;
	}



	public Long getIpTo() {
		return ipTo;
	}



	public void setIpTo(Long ipTo) {
		this.ipTo = ipTo;
	}



	public String getCountryCode2() {
		return countryCode2;
	}



	public void setCountryCode2(String countryCode2) {
		this.countryCode2 = countryCode2;
	}



	public String getCountryCode3() {
		return countryCode3;
	}



	public void setCountryCode3(String countryCode3) {
		this.countryCode3 = countryCode3;
	}



	public String getCountryName() {
		return countryName;
	}



	public void setCountryName(String countryName) {
		this.countryName = countryName;
	}



	public void copy(IPEntry ipEntry) {
		
		this.setCountryCode2(ipEntry.getCountryCode2());
		this.setCountryCode3(ipEntry.getCountryCode3());
		this.setCountryName(ipEntry.getCountryName());
		this.setIpFrom(ipEntry.getIpFrom());
		this.setIpTo(ipEntry.getIpTo());
	}

}
