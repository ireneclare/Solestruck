package com.veroniqa.dto;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.List;
import java.util.Map;


public class CheckoutDetailDTO implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = 5022768721251555298L;
	
	private CustomerDetailDTO customerDetailDTO;
	private ShoppingCart shoppingCart;
	private Double grandTotal;
	private String shippingMethod;
	private String cardNumber;
	private String cardType;
	private String paymentType;
	private Double discountPrice;
	private Double shippingPrice;
	private String deliveryDays;
	private String paypalExpressPayerId;
	private String paypalExpressToken;
	private List<ShippingServiceDTO> shippingService;
	private Long shippingServiceZoneId;
	private Map<Long,Boolean> productMap;
	private Integer checkoutStep=0;
	private String discountProgram;
	private String discountPin;
	//private String loginType;
	
	
	
//	public String getLoginType() {
//		return loginType;
//	}
//	public void setLoginType(String loginType) {
//		this.loginType = loginType;
//	}
	public String getDiscountPin() {
		return discountPin;
	}
	public void setDiscountPin(String discountPin) {
		this.discountPin = discountPin;
	}
	public String getDiscountProgram() {
		return discountProgram;
	}
	public void setDiscountProgram(String discountProgram) {
		this.discountProgram = discountProgram;
	}
	public Map<Long, Boolean> getProductMap() {
		return productMap;
	}
	public void setProductMap(Map<Long, Boolean> productMap) {
		this.productMap = productMap;
	}
	public List<ShippingServiceDTO> getShippingService() {
		return shippingService;
	}
	public void setShippingService(List<ShippingServiceDTO> shippingService) {
		this.shippingService = shippingService;
	}
	public String getDeliveryDays() {
		return deliveryDays;
	}
	public void setDeliveryDays(String deliveryDays) {
		this.deliveryDays = deliveryDays;
	}
	public Double getShippingPrice() {
		return shippingPrice;
	}
	public void setShippingPrice(Double shippingPrice) {
		this.shippingPrice = shippingPrice;
	}
	public Double getDiscountPrice() {
		return discountPrice;
	}
	public void setDiscountPrice(Double discountPrice) {
		this.discountPrice = discountPrice;
	}
	public CustomerDetailDTO getCustomerDetailDTO() {
		return customerDetailDTO;
	}
	public void setCustomerDetailDTO(CustomerDetailDTO customerDetailDTO) {
		this.customerDetailDTO = customerDetailDTO;
	}
	public ShoppingCart getShoppingCart() {
		return shoppingCart;
	}
	public void setShoppingCart(ShoppingCart shoppingCart) {
		this.shoppingCart = shoppingCart;
	}
	

	public String getShippingMethod() {
		return shippingMethod;
	}
	public void setShippingMethod(String shippingMethod) {
		this.shippingMethod = shippingMethod;
	}
	
	public Double getGrandTotal() {
		String strSubTotal=Double.toString(shoppingCart.getSubTotal());
		String strShipPrice=shippingPrice==null?"0.00":Double.toString(shippingPrice);
		BigDecimal subTotal=new BigDecimal(strSubTotal);
		BigDecimal shipPrice=new BigDecimal(strShipPrice);
		BigDecimal total=subTotal.add(shipPrice);
		total=total.setScale(2);
		grandTotal=total.doubleValue();
		return grandTotal;
	}
	public void setGrandTotal(Double grandTotal) {
		this.grandTotal = grandTotal;
	}
	public String getCardNumber() {
		return cardNumber;
	}
	public void setCardNumber(String cardNumber) {
		this.cardNumber = cardNumber;
	}
	public String getCardType() {
		return cardType;
	}
	public void setCardType(String cardType) {
		this.cardType = cardType;
	}
	public String getPaymentType() {
		return paymentType;
	}
	public void setPaymentType(String paymentType) {
		this.paymentType = paymentType;
	}
	public String getPaypalExpressPayerId() {
		return paypalExpressPayerId;
	}
	public void setPaypalExpressPayerId(String paypalExpressPayerId) {
		this.paypalExpressPayerId = paypalExpressPayerId;
	}
	public String getPaypalExpressToken() {
		return paypalExpressToken;
	}
	public void setPaypalExpressToken(String paypalExpressToken) {
		this.paypalExpressToken = paypalExpressToken;
	}
	public Long getShippingServiceZoneId() {
		return shippingServiceZoneId;
	}
	public void setShippingServiceZoneId(Long shippingServiceZoneId) {
		this.shippingServiceZoneId = shippingServiceZoneId;
	}
	public Integer getCheckoutStep() {
		return checkoutStep;
	}
	public void setCheckoutStep(Integer checkoutStep) {
		this.checkoutStep = checkoutStep;
	}
}
