package com.veroniqa.dto;

import java.io.Serializable;
import java.util.List;


import com.veroniqa.jdo.BillingAddress;
import com.veroniqa.jdo.OrderHistoryRecord;
import com.veroniqa.jdo.PayPalTransaction;
import com.veroniqa.jdo.Shipment;
import com.veroniqa.jdo.ShippingAddress;

public class OrderInfoPageDTO  implements Serializable{

	private static final long serialVersionUID = -1833728283142844729L;
	private OrderDetailDTO orderDetailDTO;
	private CustomerDetailDTO customerDetailDTO;
	private ShippingAddress shippingAddressDTO;
	private BillingAddress billingAddressDTO;
	private List<PayPalTransaction> transactionDetails;
	private List<OrderHistoryRecord> orderHistoryDetails;
	private List<Shipment> shipmentDetails;
	private Boolean reqdSign;
    
    public Boolean getReqdSign() {
        return reqdSign;
    }
    public void setReqdSign(Boolean reqdSign) {
        this.reqdSign = reqdSign;
    }
	
	public OrderDetailDTO getOrderDetailDTO() {
		return orderDetailDTO;
	}
	public void setOrderDetailDTO(OrderDetailDTO orderDetialDTO) {
		this.orderDetailDTO = orderDetialDTO;
	}
	public CustomerDetailDTO getCustomerDetailDTO() {
		return customerDetailDTO;
	}
	public void setCustomerDetailDTO(CustomerDetailDTO customerDetailDTO) {
		this.customerDetailDTO = customerDetailDTO;
	}
	public ShippingAddress getShippingAddressDTO() {
		return shippingAddressDTO;
	}
	public void setShippingAddressDTO(ShippingAddress shippingAddressDTO) {
		this.shippingAddressDTO = shippingAddressDTO;
	}
	public BillingAddress getBillingAddressDTO() {
		return billingAddressDTO;
	}
	public void setBillingAddressDTO(BillingAddress billingAddressDTO) {
		this.billingAddressDTO = billingAddressDTO;
	}
	public List<PayPalTransaction> getTransactionDetails() {
		return transactionDetails;
	}
	public void setTransactionDetails(List<PayPalTransaction> transactionDetails) {
		this.transactionDetails = transactionDetails;
	}
	public List<OrderHistoryRecord> getOrderHistoryDetails() {
		return orderHistoryDetails;
	}
	public void setOrderHistoryDetails(List<OrderHistoryRecord> orderHistoryDetails) {
		this.orderHistoryDetails = orderHistoryDetails;
	}
	public List<Shipment> getShipmentDetails() {
		return shipmentDetails;
	}
	public void setShipmentDetails(List<Shipment> shipmentDetails) {
		this.shipmentDetails = shipmentDetails;
	}
	
    
	

}
