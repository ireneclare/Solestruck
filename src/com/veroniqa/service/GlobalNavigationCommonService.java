package com.veroniqa.service;

import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.veroniqa.frontend.Controllers.IDPController;
import com.veroniqa.frontend.util.BusinessException;
import com.veroniqa.frontend.util.MemcachedConstants;
import com.veroniqa.frontend.util.MemcachedUtil;
import com.veroniqa.frontend.util.RestClientUtil;
import com.veroniqa.jdo.Attribute;
import com.veroniqa.jdo.Customer;

public class GlobalNavigationCommonService {
	
	private Logger log=Logger.getLogger(GlobalNavigationCommonService.class.getSimpleName());
	
	public Attribute getTheVendor(String vendorName,Long brandid) throws Exception
	{
		Attribute attr=null;
		List<Attribute> vendorList=(List<Attribute>)MemcachedUtil.get(MemcachedConstants.WOMENS_VENDOR_LIST,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
		if(vendorList==null)
		{
			ArrayList<Object> params = new ArrayList<Object>();
			params.add(brandid);
			vendorList=(List<Attribute>)RestClientUtil.callService(params, "getVendorList", "ListingBusinessService");
			
		}
		
		if(vendorList!=null)
		{
			for(Attribute at:vendorList)
			{
				if(at.getName().toLowerCase().equals(vendorName))
				{
					attr=at;
					break;
				}
			}
		}
		
		return attr;
	}
	
	public Attribute getTheVendor(List<String> vendorName,Long brandid) throws Exception
	{
		Attribute attr=null;
		List<Attribute> vendorList=(List<Attribute>)MemcachedUtil.get(MemcachedConstants.WOMENS_VENDOR_LIST,MemcachedConstants.GLOBAL_NAVIGATION_MENU_NS);
		if(vendorList==null)
		{
			ArrayList<Object> params = new ArrayList<Object>();
			params.add(brandid);
			vendorList=(List<Attribute>)RestClientUtil.callService(params, "getVendorList", "ListingBusinessService");
			
		}
		
		if(vendorList!=null)
		{
			for(Attribute at:vendorList)
			{
				for(String s:vendorName)
				{
					if(at.getName().toLowerCase().equals(s))
					{
						attr=at;
						break;
					}
				}
			}
		}
		
		return attr;
	}
	
	 public String  getCustomerEmailId(HttpServletRequest req)
	 {
		  log.info(" inside getCustomerEmailId method  ");
		  List serviceParams     = new ArrayList();
		  String customerid      = null;
		  Customer lCustomer     = null;
		  String CustomerEmailId = null;
		  try
		  {
			  if(req.getSession().getAttribute("customerid")!=null && req.getSession().getAttribute("customerid")!=""){
					customerid				  = req.getSession().getAttribute("customerid").toString();
				}
			   serviceParams.add(Long.parseLong(customerid));
			   lCustomer=(Customer)RestClientUtil.callService(serviceParams, "getCusomerDetails", "CustomerBusinessService");
			   if(lCustomer!=null){
				   CustomerEmailId=lCustomer.getEmailId();
			   }
			 log.info(" email id "+CustomerEmailId);
			  
		  }
		  catch(Exception e)
		  {
			   log.warning("Exception while getting OrderDegtail : "+e);
			   new BusinessException("Exception in getOrderDetail :"+e.getMessage(),e.getStackTrace());
		  }
		  return CustomerEmailId;
	 }


}
