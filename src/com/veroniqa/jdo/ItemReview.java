package com.veroniqa.jdo;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable
public class ItemReview {
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private Key itemId;
	
	@Persistent
	private Key colorId;
	
	@Persistent
	private String name;
	
	@Persistent
	private String review;
	
	@Persistent
	private Integer rating;
	
	@Persistent
	private Boolean approved;
	
	@Persistent
	private Boolean display;
	
}
