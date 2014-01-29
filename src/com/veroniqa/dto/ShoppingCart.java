package com.veroniqa.dto;

import java.io.Serializable;
import java.math.BigDecimal;
import java.text.DecimalFormat;
import java.text.NumberFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.mortbay.log.Log;

import com.veroniqa.frontend.util.VeroniqaUtil;

/**
 * 
 * @author SHI
 * The ShoppingCart re-factored to have minimal data and less Datastore hits.
 */

public class ShoppingCart implements Serializable {
	
	private static final long serialVersionUID = 2786206687451246527L;
	
	private Long orderId;
	private List<LineItemDTO> lineItems;
	
	private Double subTotal;
	
	private Date lastLoaded;
	
	private Double savings;
	
	private Double totalRetialPrice;
	
	
	public Double getTotalRetialPrice() {

		if(lineItems==null)
			return totalRetialPrice;
		String formattedString =null;
		NumberFormat dFormat = new DecimalFormat("0.00");
		dFormat.setMinimumFractionDigits(2);
		dFormat.setMaximumFractionDigits(2);
		Double totalSavings=0.0;
		for(LineItemDTO item:lineItems)
		{
			if(item!=null && item.getRetailPrice()!=null)
			{
				totalSavings+=item.getRetailPrice()*item.getQuantity();
			}
		}
		formattedString= dFormat.format(totalSavings);
		if(formattedString!=null)
			totalRetialPrice=Double.valueOf(formattedString);
		
		return totalRetialPrice;
	
	}
	public void setTotalRetialPrice(Double totalRetialPrice) {
		this.totalRetialPrice = totalRetialPrice;
	}
	public Double getSavings() 
	{
		try {
			
			if(lineItems==null)
				return savings=0.00;
			String formattedString =null;
			NumberFormat dFormat = new DecimalFormat("0.00");
			dFormat.setMinimumFractionDigits(2);
			dFormat.setMaximumFractionDigits(2);
			Double totalSavings=0.0;
			for(LineItemDTO item:lineItems)
			{
				if(item!=null && item.getRetailPrice()!=null && item.getIsSale())
				{
					Double sPrice=item.getRetailPrice()-item.getUnitPrice();
					totalSavings+=sPrice*item.getQuantity();
				}
			}
			formattedString= dFormat.format(totalSavings);
			if(formattedString!=null)
			savings=Double.valueOf(formattedString);
			
			
		}
		catch (Exception e)
		{
			e.printStackTrace();
			Log.info("Exception in getting saving ammount "+e);
		}
		return savings;
	}
	public void setSavings(Double savings) {
		this.savings = savings;
	}
	public Long getOrderId() {
		return orderId;
	}
	public void setOrderId(Long orderId) {
		this.orderId = orderId;
	}
	public List<LineItemDTO> getLineItems() {
		return lineItems;
	}
	public void setLineItems(List<LineItemDTO> lineItems) {
		this.lineItems = lineItems;
	}
	public Date getLastLoaded() {
		return lastLoaded;
	}
	public void setLastLoaded(Date lastLoaded) {
		this.lastLoaded = lastLoaded;
	}
	
	public Boolean needReload()
	{
		try
		{
			Date lastLoaded=this.getLastLoaded();
			if(lastLoaded!=null)
			{
				Date now=new Date();
				if(now.getTime()-lastLoaded.getTime()>1000*60*10)//10 minutes
				{
					return true;
				}
				else
					return false;
			}
			else
				return true;
		}
		catch(Exception w)
		{
			return false;
		}
		
	}
	public Double getSubTotal() {
		if(lineItems==null)
			return subTotal;
		BigDecimal total=new BigDecimal("0.00");
		for(LineItemDTO item:lineItems){
			//BigDecimal qty=new BigDecimal(item.getQuantity());
			//BigDecimal unitPrice=new BigDecimal(Double.toString(item.getPrice()==null?0:item.getPrice()));
			//BigDecimal price=unitPrice.multiply(qty);
			String strPrice=item.getPrice()==null?"0.0":Double.toString(item.getPrice());
			BigDecimal price=new BigDecimal(strPrice);
			total=total.add(price);
		}
		total=total.setScale(2,BigDecimal.ROUND_HALF_UP);
		subTotal=total.doubleValue();
		return subTotal;
	}
	
	public Set<Long> getColorIdsInCart()
	{
		if(lineItems==null)
			return null;
		Set<Long> set=new HashSet<Long>();
		for(LineItemDTO item:lineItems)
		{
			set.add(item.getColorId());
		}
		return set;
		
	}
	public List<Long> getProductIdsInCart()
	{
		if(lineItems==null)
			return null;
		List<Long> lst=new ArrayList<Long>();
		for(LineItemDTO item:lineItems)
		{
			lst.add(item.getProductId());
		}
		return lst;
		
	}
	public Double getSubTotal_FB() 
	{
		if(lineItems==null)
			return subTotal;
		BigDecimal  fbdiscount=new BigDecimal("0.0");
		try
		{
			if(VeroniqaUtil.getDiscountProgramForFB()!=null)
			fbdiscount=new BigDecimal(""+VeroniqaUtil.getDiscountProgramForFB().getDiscountPercentage());
		}
		catch(Exception e)
		{
			e.printStackTrace();
		}
		BigDecimal total=new BigDecimal("0.00");
		for(LineItemDTO item:lineItems){
			//BigDecimal qty=new BigDecimal(item.getQuantity());
			//BigDecimal unitPrice=new BigDecimal(Double.toString(item.getPrice()==null?0:item.getPrice()));
			//BigDecimal price=unitPrice.multiply(qty);
			String strPrice=item.getPrice()==null?"0.0":Double.toString(item.getPrice());
			BigDecimal price=new BigDecimal(strPrice);
			if(item.getIsSale())
				price= price.subtract(price.multiply(fbdiscount).divide(new BigDecimal("100")));
			total=total.add(price);
		}
		total=total.setScale(2,BigDecimal.ROUND_HALF_UP);
		subTotal=total.doubleValue();
		return subTotal;
	}
	public void setSubTotal(Double subTotal) {
		this.subTotal = subTotal;
	}

	
}
	
		