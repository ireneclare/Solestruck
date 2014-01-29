package com.veroniqa.frontend.Controllers;

import static com.google.appengine.api.taskqueue.TaskOptions.Builder.withUrl;

import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.google.appengine.api.taskqueue.Queue;
import com.google.appengine.api.taskqueue.QueueFactory;
import com.google.appengine.api.taskqueue.RetryOptions;
import com.google.appengine.api.taskqueue.TaskOptions.Method;
import com.veroniqa.frontend.util.VeroniqaCookieUtil;
import com.veroniqa.realtime.RealTimeCustomersChannelService;

@Controller
public class RealtimeCustomerController {
	Logger log=Logger.getLogger("RealtimeCustomerController");
	
	@RequestMapping(value="/getRealTimeCartCount.htm",method=RequestMethod.GET)
	public @ResponseBody Integer getRealTimeCartCount(@RequestParam("colorid")Long colorid,HttpServletRequest req)
	{
		RealTimeCustomersChannelService service=new RealTimeCustomersChannelService();
		Integer count=0;
		try
		{
			count=service.getCustomerCount(colorid);
			Queue q=QueueFactory.getQueue("RealTime");
    		q.add(withUrl("/updateColorIdRealTimeCustomer.htm")
		    		.param("clientid", VeroniqaCookieUtil.getCookieValue(req, "JSESSIONID")).param("colorid", colorid.toString())
		    		.etaMillis(1000L).method(Method.GET));
		}
		catch(Exception e)
		{
			log.warning("Exception in getRealTimeCartCount:"+e.getMessage());
		}
		return count;
	}
	
	@RequestMapping(value="/deActivateRealtimeCustomer.htm",method=RequestMethod.GET)
	public void  deActivateRealTimeCustomer(@RequestParam("clientid")String clientid,HttpServletRequest req)
	{
		log.info("Inside deActivateRealTimeCustomer");
		RealTimeCustomersChannelService service=new RealTimeCustomersChannelService();
		try
		{
			//String clientId=VeroniqaCookieUtil.getCookieValue(req, "JSESSIONID");
			log.info("client id:"+clientid);
			if(clientid!=null)
				service.deactivateCustomer(clientid);
		}
		catch(Exception e)
		{
			log.warning("Exception in getRealTimeCartCount:"+e.getMessage());
		}
	}
	
	@RequestMapping(value="/setRealTimeCustomerCount.htm",method=RequestMethod.GET)
	public void  setRealTimeCustomerCount(@RequestParam("clientid")String clientid,@RequestParam("orderid")String orderId)
	{
		log.info("Inside deActivateRealTimeCustomer");
		RealTimeCustomersChannelService service=new RealTimeCustomersChannelService();
		try
		{
			//String clientId=VeroniqaCookieUtil.getCookieValue(req, "JSESSIONID");
			log.info("client id:"+clientid);
			if(clientid!=null&&orderId!=null)
				service.setCustomerCount(clientid,orderId);
		}
		catch(Exception e)
		{
			log.warning("Exception in getRealTimeCartCount:"+e.getMessage());
		}
	}
	@RequestMapping(value="/updateColorIdRealTimeCustomer.htm",method=RequestMethod.GET)
	public void  updateColorIdRealTimeCustomer(@RequestParam("clientid")String clientid,@RequestParam("colorid")Long colorid)
	{
		log.info("Inside deActivateRealTimeCustomer");
		RealTimeCustomersChannelService service=new RealTimeCustomersChannelService();
		try
		{
			service.updateColorId(clientid,colorid);
		}
		catch(Exception e)
		{
			log.warning("Exception in getRealTimeCartCount:"+e.getMessage());
		}
	}
	

}
