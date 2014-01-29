package com.veroniqa.dto;

import java.io.Serializable;

import com.veroniqa.jdo.ShippingServiceType;
import com.veroniqa.jdo.ShippingServiceZone;

public class ShippingServiceDTO implements Serializable,Comparable<ShippingServiceDTO>{
	
	private static final long serialVersionUID = 915645761L;
	
	private ShippingServiceZone zone;
	private ShippingServiceType type;
	private Double totalShippingPrice;
	
	public ShippingServiceZone getZone() {
		return zone;
	}
	public void setZone(ShippingServiceZone zone) {
		this.zone = zone;
	}
	public ShippingServiceType getType() {
		return type;
	}
	public void setType(ShippingServiceType type) {
		this.type = type;
	}
	public Double getTotalShippingPrice() {
		return totalShippingPrice;
	}
	public void setTotalShippingPrice(Double totalShippingPrice) {
		this.totalShippingPrice = totalShippingPrice;
	}

	@Override
	public int compareTo(ShippingServiceDTO shipping) {
		
		return this.totalShippingPrice.compareTo(shipping.totalShippingPrice);
	}
	

}
