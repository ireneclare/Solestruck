package com.veroniqa.frontend.jdo;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable
public class StreetCredStatusUpdate {

@PrimaryKey
@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
private Key key;

@Persistent
private String tagName;

@Persistent
private String instagramAttirbutes;

@Persistent
private long totalMediaFetched = 0l;

@Persistent
private String nextMaxId;

@Persistent
private String nextMinId;

public String getNextMaxId() {
	return nextMaxId;
}

public void setNextMaxId(String nextMaxId) {
	this.nextMaxId = nextMaxId;
}

public String getNextMinId() {
	return nextMinId;
}

public void setNextMinId(String nextMinId) {
	this.nextMinId = nextMinId;
}

public String getTagName() {
	return tagName;
}

public void setTagName(String tagName) {
	this.tagName = tagName;
}

public String getInstagramAttirbutes() {
	return instagramAttirbutes;
}

public void setInstagramAttirbutes(String instagramAttirbutes) {
	this.instagramAttirbutes = instagramAttirbutes;
}

public long getTotalMediaFetched() {
	return totalMediaFetched;
}

public void setTotalMediaFetched(long totalMediaFetched) {
	this.totalMediaFetched = totalMediaFetched;
}

public Key getKey() {
	return key;
}

public void setKey(Key key) {
	this.key = key;
}



}
