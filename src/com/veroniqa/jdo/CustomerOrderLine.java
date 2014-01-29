package com.veroniqa.jdo;

import java.util.Date;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable
public class CustomerOrderLine {
	
	@PrimaryKey
    @Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private Key shoeId;
	
	@Persistent
	private Key colorId;
	
	@Persistent
	private Long warehouseLocationId;	
	
	@Persistent
	private Integer qty;
	
	@Persistent
	private Date dateAdded;	
	
	@Persistent
	private Date shippedDate;
	
	@Persistent
	private String status;
	
	@Persistent
	private Double unitPrice;
	
	@Persistent
	private Double unitPriceAtPurchase;
	
	@Persistent
	private Double discountedPrice;
	
	@Persistent
	private Double discountPercentage;
	
	@Persistent
	private String discountPin;
	
	@Persistent
	private Key discountProgramId;
	
	@Persistent
	private String shippingType;
	
	@Persistent
	private Double shippingPrice;
	
	
	
	
		

}
