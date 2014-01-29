package com.veroniqa.dto;

import java.io.Serializable;
import java.util.Date;
import java.util.List;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.veroniqa.jdo.BillingAddress;
import com.veroniqa.jdo.Customer;
import com.veroniqa.jdo.ShippingAddress;

public class CustomerDetailDTO implements Serializable{
	/**
	 * 
	 */
	private static final long serialVersionUID = 8497181395742281349L;
	private Long customerId;
	private String phone;
	private String email;
	private String firstName;
	private String lastName;
	private String password;
	private ShippingAddressDTO shippingAddress;
	private BillingAddressDTO billingAddress;
	private Boolean isAccountActivated;
	private String totalPastOrders;
	private String totalReturnedOrders;
	private String rollingYearOrdersValue;
	private String preOrdersCount;
	private String cancledOrdersCount;
	private String pairsPurchased;
	private String totalDiscount;
	private String reviewsCount;
	private String loginType;
	private List<ShippingServiceDTO> shippingServices;
	private ShippingServiceDTO shippingServiceAvailed;
	private Boolean isReturningCustomer;
	
	
	public Boolean getIsReturningCustomer() {
		return isReturningCustomer;
	}
	public void setIsReturningCustomer(Boolean isReturningCustomer) {
		this.isReturningCustomer = isReturningCustomer;
	}
	public List<ShippingServiceDTO> getShippingServices() {
		return shippingServices;
	}
	public void setShippingServices(List<ShippingServiceDTO> shippingServices) {
		this.shippingServices = shippingServices;
	}
	public ShippingServiceDTO getShippingServiceAvailed() {
		return shippingServiceAvailed;
	}
	public void setShippingServiceAvailed(ShippingServiceDTO shippingServiceAvailed) {
		this.shippingServiceAvailed = shippingServiceAvailed;
	}
	public Long getCustomerId() {
		return customerId;
	}
	public void setCustomerId(Long customerId) {
		this.customerId = customerId;
	}
	public String getPhone() {
		return phone;
	}
	public void setPhone(String phone) {
		this.phone = phone;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getFirstName() {
		return firstName;
	}
	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}
	public String getLastName() {
		return lastName;
	}
	public void setLastName(String lastName) {
		this.lastName = lastName;
	}
	public ShippingAddressDTO getShippingAddress() {
		return shippingAddress;
	}
	public void setShippingAddress(ShippingAddressDTO shippingAddress) {
		this.shippingAddress = shippingAddress;
	}
	public BillingAddressDTO getBillingAddress() {
		return billingAddress;
	}
	public void setBillingAddress(BillingAddressDTO billingAddress) {
		this.billingAddress = billingAddress;
	}
	
	public Boolean getIsAccountActivated() {
		return isAccountActivated;
	}
	public void setIsAccountActivated(Boolean isAccountActivated) {
		this.isAccountActivated = isAccountActivated;
	}
	public String getTotalPastOrders() {
		return totalPastOrders;
	}
	public void setTotalPastOrders(String totalPastOrders) {
		this.totalPastOrders = totalPastOrders;
	}
	public String getTotalReturnedOrders() {
		return totalReturnedOrders;
	}
	public void setTotalReturnedOrders(String totalReturnedOrders) {
		this.totalReturnedOrders = totalReturnedOrders;
	}
	public String getRollingYearOrdersValue() {
		return rollingYearOrdersValue;
	}
	public void setRollingYearOrdersValue(String rollingYearOrdersValue) {
		this.rollingYearOrdersValue = rollingYearOrdersValue;
	}
	public String getPreOrdersCount() {
		return preOrdersCount;
	}
	public void setPreOrdersCount(String preOrdersCount) {
		this.preOrdersCount = preOrdersCount;
	}
	public String getCancledOrdersCount() {
		return cancledOrdersCount;
	}
	public void setCancledOrdersCount(String cancledOrdersCount) {
		this.cancledOrdersCount = cancledOrdersCount;
	}
	public String getPairsPurchased() {
		return pairsPurchased;
	}
	public void setPairsPurchased(String pairsPurchased) {
		this.pairsPurchased = pairsPurchased;
	}
	public String getTotalDiscount() {
		return totalDiscount;
	}
	public void setTotalDiscount(String totalDiscount) {
		this.totalDiscount = totalDiscount;
	}
	public String getReviewsCount() {
		return reviewsCount;
	}
	public void setReviewsCount(String reviewsCount) {
		this.reviewsCount = reviewsCount;
	}
	
	public String getLoginType() {
		return loginType;
	}
	public void setLoginType(String loginType) {
		this.loginType = loginType;
	}
	public void copyTo(Customer customer)
	{
		/*		
		if(customerId!=null)
		{
			Key customerKey=KeyFactory.createKey(Customer.class.getSimpleName(), customerId);
			customer.setKey(customerKey);		
		}*/
		if(phone!=null)
			customer.setMobileOrPhoneContactNumber(phone);
		if(email!=null)
			customer.setEmailId(email);
		if(firstName!=null)
			customer.setFirstName(firstName);
		if(lastName!=null)
			customer.setLastName(lastName);
		if(password!=null)
			customer.setPassword(password);
		customer.setEmailAlerts(true);//Need to be discussed
		customer.setDateAdded(new Date());
		customer.setResetPassword(false);
	}
	
	public void copyTo(ShippingAddress shipAddr)
	{
		if(shippingAddress==null) return;
		
		if(shippingAddress.getId()!=null){
			Key shipKey=KeyFactory.createKey(ShippingAddress.class.getSimpleName(), shippingAddress.getId());
			shipAddr.setKey(shipKey);
		}
		if(customerId!=null){
			Key customerKey=KeyFactory.createKey(Customer.class.getSimpleName(), customerId);
			shipAddr.setCustomerId(customerKey);
		}			
		if(shippingAddress.getFirstName()!=null)
			shipAddr.setFirstName(shippingAddress.getFirstName());
		if(shippingAddress.getLastName()!=null)
			shipAddr.setLastName(shippingAddress.getLastName());
		if(shippingAddress.getStreet1()!=null)
			shipAddr.setStreet1(shippingAddress.getStreet1());
		if(shippingAddress.getStreet2()!=null)
			shipAddr.setStreet2(shippingAddress.getStreet2());
		if(shippingAddress.getStreet3()!=null)
			shipAddr.setStreet3(shippingAddress.getStreet3());
		if(shippingAddress.getCountry()!=null)
			shipAddr.setCountry(shippingAddress.getCountry());
		if(shippingAddress.getCountryName()!=null)
			shipAddr.setCountryName(shippingAddress.getCountryName());
		if(shippingAddress.getProvince()!=null)
			shipAddr.setProvince(shippingAddress.getProvince());
		if(shippingAddress.getState()!=null)
			shipAddr.setState(shippingAddress.getState());
		if(shippingAddress.getStateName()!=null)
			shipAddr.setStateName(shippingAddress.getStateName());
		if(shippingAddress.getZipCode()!=null)
			shipAddr.setZipCode(shippingAddress.getZipCode());

	}
	
	public void copyTo(BillingAddress billAddr)
	{
		if(billingAddress==null) return;
		
		if(billingAddress.getId()!=null){
			Key shipKey=KeyFactory.createKey(BillingAddress.class.getSimpleName(), billingAddress.getId());
			billAddr.setKey(shipKey);
		}
		if(customerId!=null){
			Key customerKey=KeyFactory.createKey(Customer.class.getSimpleName(), customerId);
			billAddr.setCustomerId(customerKey);
		}			
		if(billingAddress.getFirstName()!=null)
			billAddr.setFirstName(billingAddress.getFirstName());
		if(billingAddress.getLastName()!=null)
			billAddr.setLastName(billingAddress.getLastName());
		if(billingAddress.getStreet1()!=null)
			billAddr.setStreet1(billingAddress.getStreet1());
		if(billingAddress.getStreet2()!=null)
			billAddr.setStreet2(billingAddress.getStreet2());
		if(billingAddress.getStreet3()!=null)
			billAddr.setStreet3(billingAddress.getStreet3());
		if(billingAddress.getCountry()!=null)
			billAddr.setCountry(billingAddress.getCountry());
		if(billingAddress.getCountryName()!=null)
			billAddr.setCountryName(billingAddress.getCountryName());
		if(billingAddress.getProvince()!=null)
			billAddr.setProvince(billingAddress.getProvince());
		if(billingAddress.getState()!=null)
			billAddr.setState(billingAddress.getState());
		if(billingAddress.getStateName()!=null)
			billAddr.setStateName(billingAddress.getStateName());
		if(billingAddress.getZipCode()!=null)
			billAddr.setZipCode(billingAddress.getZipCode());
	}

	public void copyFrom(Customer customer)
	{
		if(customer==null) return;
		if(customer.getKey()!=null)
			this.setCustomerId(customer.getKey().getId());
		if(customer.getMobileOrPhoneContactNumber()!=null)
			this.setPhone(customer.getMobileOrPhoneContactNumber());
		if(customer.getEmailId()!=null)
			this.setEmail(customer.getEmailId());
		if(customer.getFirstName()!=null)
			this.setFirstName(customer.getFirstName());
		if(customer.getLastName()!=null)
			this.setLastName(customer.getLastName());
		if(customer.getPassword()!=null)
			this.setPassword(customer.getPassword());
	}
	
	public void copyFrom(ShippingAddress shipAddr)
	{
		if(shipAddr==null) return;
		ShippingAddressDTO shipDTO=new ShippingAddressDTO();
		if(shipAddr.getKey()!=null)
			shipDTO.setId(shipAddr.getKey().getId());
		if(shipAddr.getStreet1()!=null)
			shipDTO.setStreet1(shipAddr.getStreet1());
		if(shipAddr.getStreet2()!=null)
			shipDTO.setStreet2(shipAddr.getStreet2());
		if(shipAddr.getStreet3()!=null)
			shipDTO.setStreet3(shipAddr.getStreet3());
		if(shipAddr.getCountry()!=null)
			shipDTO.setCountry(shipAddr.getCountry());
		if(shipAddr.getCountryName()!=null)
			shipDTO.setCountryName(shipAddr.getCountryName());
		if(shipAddr.getProvince()!=null)
			shipDTO.setProvince(shipAddr.getProvince());
		if(shipAddr.getState()!=null)
			shipDTO.setState(shipAddr.getState());
		if(shipAddr.getStateName()!=null)
			shipDTO.setStateName(shipAddr.getStateName());
		if(shipAddr.getZipCode()!=null)
			shipDTO.setZipCode(shipAddr.getZipCode());
		if(shipAddr.getFirstName()!=null)
			shipDTO.setFirstName(shipAddr.getFirstName());
		if(shipAddr.getLastName()!=null)
			shipDTO.setLastName(shipAddr.getLastName());
		
		this.setShippingAddress(shipDTO);
	}
	
	public void copyFrom(BillingAddress billAddr)
	{
		if(billAddr==null) return;
		BillingAddressDTO billDTO=new BillingAddressDTO();
		if(billAddr.getKey()!=null)
			billDTO.setId(billAddr.getKey().getId());
		if(billAddr.getStreet1()!=null)
			billDTO.setStreet1(billAddr.getStreet1());
		if(billAddr.getStreet2()!=null)
			billDTO.setStreet2(billAddr.getStreet2());
		if(billAddr.getStreet3()!=null)
			billDTO.setStreet3(billAddr.getStreet3());
		if(billAddr.getCountry()!=null)
			billDTO.setCountry(billAddr.getCountry());
		if(billAddr.getCountryName()!=null)
			billDTO.setCountryName(billAddr.getCountryName());
		if(billAddr.getProvince()!=null)
			billDTO.setProvince(billAddr.getProvince());
		if(billAddr.getState()!=null)
			billDTO.setState(billAddr.getState());
		if(billAddr.getStateName()!=null)
			billDTO.setStateName(billAddr.getStateName());
		if(billAddr.getZipCode()!=null)
			billDTO.setZipCode(billAddr.getZipCode());
		if(billAddr.getFirstName()!=null)
			billDTO.setFirstName(billAddr.getFirstName());
		if(billAddr.getLastName()!=null)
			billDTO.setLastName(billAddr.getLastName());
		
		this.setBillingAddress(billDTO);
	}

}
