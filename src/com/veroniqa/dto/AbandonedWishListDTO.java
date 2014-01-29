package com.veroniqa.dto;

	import java.io.Serializable;
	import java.util.Date;
	import java.util.List;

	import com.google.appengine.api.datastore.Key;

	public class AbandonedWishListDTO implements Serializable
	{
		
		private static final long serialVersionUID = 1522411L;
		
		private Long wishlistid;
			
		private Long customerId;
		
		private Long productid;
		
		private Long colorid;
		
		private Long orderid;
		
		private Date dateAdded;
			
		private Boolean mailsent=false;
		
		private String customerEmail;
		
		private String custFname;
		
		private String custLname;
		
		private List<Key> wishlistitems;
		
		private List<LineItemDTO> lineitems;

		public Long getWishlistid() {
			return wishlistid;
		}

		public void setWishlistid(Long wishlistid) {
			this.wishlistid = wishlistid;
		}

		public Long getOrderid() {
			return orderid;
		}

		public void setOrderid(Long orderid) {
			this.orderid = orderid;
		}

		public Long getCustomerId() {
			return customerId;
		}

		public void setCustomerId(Long customerId) {
			this.customerId = customerId;
		}

		public Long getProductid() {
			return productid;
		}

		public void setProductid(Long productid) {
			this.productid = productid;
		}

		public Long getColorid() {
			return colorid;
		}

		public void setColorid(Long colorid) {
			this.colorid = colorid;
		}


		public Date getDateAdded() {
			return dateAdded;
		}

		public void setDateAdded(Date dateAdded) {
			this.dateAdded = dateAdded;
		}

		public Boolean getMailsent() {
			return mailsent;
		}

		public void setMailsent(Boolean mailsent) {
			this.mailsent = mailsent;
		}

		public String getCustomerEmail() {
			return customerEmail;
		}

		public void setCustomerEmail(String customerEmail) {
			this.customerEmail = customerEmail;
		}

		public String getCustFname() {
			return custFname;
		}

		public void setCustFname(String custFname) {
			this.custFname = custFname;
		}

		public String getCustLname() {
			return custLname;
		}

		public void setCustLname(String custLname) {
			this.custLname = custLname;
		}

		public List<Key> getWishlistitems() {
			return wishlistitems;
		}

		public void setWishlistitems(List<Key> wishlistitems) {
			this.wishlistitems = wishlistitems;
		}

		public List<LineItemDTO> getLineitems() {
			return lineitems;
		}

		public void setLineitems(List<LineItemDTO> lineitems) {
			this.lineitems = lineitems;
		}

		
	


	}
		


	