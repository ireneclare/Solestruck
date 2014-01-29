package com.veroniqa.frontend.jdo;

import java.io.Serializable;
import java.util.Date;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class TimerHandler implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
	private Key key;
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Date timerStart;
	
	@Persistent
	private Date timerEnd;
	
	@Persistent
	private String timerForName;
	
	@Persistent
	private Long timerForId;
	
	@Persistent
	private Boolean toShow;
	
	@Persistent
	private Boolean isDeleted;

	
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

	public Date getTimerStart() {
		return timerStart;
	}

	public void setTimerStart(Date timerStart) {
		this.timerStart = timerStart;
	}

	public Date getTimerEnd() {
		return timerEnd;
	}

	public void setTimerEnd(Date timerEnd) {
		this.timerEnd = timerEnd;
	}

	public String getTimerForName() {
		return timerForName;
	}

	public void setTimerForName(String timerForName) {
		this.timerForName = timerForName;
	}

	public Long getTimerForId() {
		return timerForId;
	}

	public void setTimerForId(Long timerForId) {
		this.timerForId = timerForId;
	}

	public Boolean getToShow() {
		return toShow;
	}

	public void setToShow(Boolean toShow) {
		this.toShow = toShow;
	}

	public Boolean getIsDeleted() {
		return isDeleted;
	}

	public void setIsDeleted(Boolean isDeleted) {
		this.isDeleted = isDeleted;
	}
	
}
