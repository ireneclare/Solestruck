package com.veroniqa.jdo;

import java.util.Date;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable
public class UnSubscribeMail {
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private MailType mailType;
	
	@Persistent
	private String emailId;	
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Boolean subscribed;
	
	

}
