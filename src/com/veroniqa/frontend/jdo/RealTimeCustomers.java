package com.veroniqa.frontend.jdo;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import javax.jdo.annotations.IdGeneratorStrategy;
import javax.jdo.annotations.IdentityType;
import javax.jdo.annotations.PersistenceCapable;
import javax.jdo.annotations.Persistent;
import javax.jdo.annotations.PrimaryKey;

import com.google.appengine.api.datastore.Key;

@PersistenceCapable(identityType = IdentityType.APPLICATION, detachable="true")
public class RealTimeCustomers implements Serializable {

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	@PrimaryKey
	@Persistent(valueStrategy = IdGeneratorStrategy.IDENTITY)
    private Key key;
	
	@Persistent
	private String clientId;
	
	@Persistent
	private String token;
	
	@Persistent
	private List<Long> productIds;
	
	@Persistent
	private List<Long> colorIds;
	
	@Persistent
	private String onPage;
	
	@Persistent
	private Long colorInCart;
	
	@Persistent
	private Long productInCart;
	
	@Persistent
	private Long idpColorId;
	
	@Persistent
	private Boolean isActive;
	
	@Persistent
	private Boolean deleted;
	
	@Persistent
	private Date dateAdded;
	
	@Persistent
	private Date lastAccessed;


	public String getClientId() {
		return clientId;
	}

	public void setClientId(String clientId) {
		this.clientId = clientId;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public List<Long> getProductIds() {
		return productIds;
	}

	public void setProductIds(List<Long> productIds) {
		this.productIds = productIds;
	}

	public List<Long> getColorIds() {
		return colorIds;
	}

	public void setColorIds(List<Long> colorIds) {
		this.colorIds = colorIds;
	}

	public String getOnPage() {
		return onPage;
	}

	public void setOnPage(String onPage) {
		this.onPage = onPage;
	}

	public Long getIdpColorId() {
		return idpColorId;
	}

	public void setIdpColorId(Long idpColorId) {
		this.idpColorId = idpColorId;
	}

	public Boolean getIsActive() {
		return isActive;
	}

	public void setIsActive(Boolean isActive) {
		this.isActive = isActive;
	}

	public Boolean getDeleted() {
		return deleted;
	}

	public void setDeleted(Boolean deleted) {
		this.deleted = deleted;
	}

	public Date getDateAdded() {
		return dateAdded;
	}

	public void setDateAdded(Date dateAdded) {
		this.dateAdded = dateAdded;
	}
	
	public Long getColorInCart() {
		return colorInCart;
	}

	public void setColorInCart(Long colorInCart) {
		this.colorInCart = colorInCart;
	}

	public Long getProductInCart() {
		return productInCart;
	}

	public void setProductInCart(Long productInCart) {
		this.productInCart = productInCart;
	}

	public Date getLastAccessed() {
		return lastAccessed;
	}

	public void setLastAccessed(Date lastAccessed) {
		this.lastAccessed = lastAccessed;
	}

	public void copy(RealTimeCustomers customer)
	{
		if(customer.getDeleted()!=null)
		{
			this.setDeleted(customer.getDeleted());
		}
		if(customer.getIsActive()!=null)
		{
			this.setIsActive(customer.getIsActive());
		}
		if(customer.getClientId()!=null)
		{
			this.setClientId(customer.getClientId());
		}
		if(customer.getColorIds()!=null)
		{
			this.setColorIds(customer.getColorIds());
		}
		if(customer.getIdpColorId()!=null)
		{
			this.setIdpColorId(customer.getIdpColorId());
		}
		if(customer.getDateAdded()!=null)
		{
			this.setDateAdded(customer.getDateAdded());
		}
		if(customer.getColorInCart()!=null)
		{
			this.setColorInCart(customer.getColorInCart());
		}
		if(customer.getProductInCart()!=null)
		{
			this.setColorInCart(customer.getProductInCart());
		}
		if(customer.getOnPage()!=null)
		{
			this.setOnPage(customer.getOnPage());
		}
		if(customer.getProductIds()!=null)
		{
			this.setProductIds(customer.getProductIds());
		}
		if(customer.getToken()!=null)
		{
			this.setToken(customer.getToken());
		}
		if(customer.getLastAccessed()!=null)
		{
			this.setLastAccessed(customer.getLastAccessed());
		}
		
	}
	
	
	

}
