package com.veroniqa.frontend.Controllers;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.RestClientUtil;
import com.veroniqa.frontend.util.VeroniqaConstants;
import com.veroniqa.jdo.EmailSubscription;
import com.veroniqa.jdo.UNIFContestSubscription;


@Controller
public class FooterController {
	private static Logger log=Logger.getLogger(FooterController.class.getSimpleName());
	@RequestMapping(value="/faq.htm")
	public ModelAndView loadFaq(HttpServletRequest req)
	{
		ModelAndView mv = new ModelAndView("faq");
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("Exception  in the load Faq"+e.getMessage());
			
		}
		mv.addObject("brandid", brandId);
		return mv;
		
	}
	
	@RequestMapping(value="/international.htm")
	public ModelAndView loadInternational(HttpServletRequest req)
	{
		ModelAndView mv = new ModelAndView("International");
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("Exception  in the load International"+e.getMessage());
			
		}
		mv.addObject("brandid", brandId);
		return mv;
		
	}
	@RequestMapping(value="/shipping.htm")
	public ModelAndView loadshipping(HttpServletRequest req)
	{
		ModelAndView mv = new ModelAndView("shipping");
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("Exception  in the load shipping"+e.getMessage());
			
		}
		mv.addObject("brandid", brandId);
		return mv;
		
	}
	@RequestMapping(value="/jobs.htm")
	public ModelAndView loadJobs(HttpServletRequest req)
	{
		ModelAndView mv = new ModelAndView("jobs");
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("Exception  in the load jobs"+e.getMessage());
			
		}
		mv.addObject("brandid", brandId);
		return mv;
		
	}
	@RequestMapping(value="/returns.htm")
	public ModelAndView loadReturns(HttpServletRequest req)
	{
		ModelAndView mv = new ModelAndView("returns");
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("Exception  in the load returns"+e.getMessage());
			
		}
		mv.addObject("brandid", brandId);
		return mv;
		
	}
	@RequestMapping(value="/privacypolicy.htm")
	public ModelAndView loadPrivacyPolicy(HttpServletRequest req)
	{
		ModelAndView mv = new ModelAndView("Privacypolicy");
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("Exception  in the load Privacypolicy"+e.getMessage());
			
		}
		mv.addObject("brandid", brandId);
		return mv;
		
	}
	
	@RequestMapping(value="/about_us.htm")
	public ModelAndView loadAboutUs(HttpServletRequest req)
	{
		ModelAndView mv = new ModelAndView("Aboutus");
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("Exception  in the load Aboutus"+e.getMessage());
			
		}
		mv.addObject("brandid", brandId);
		return mv;
		
	}
	
	@RequestMapping(value="/size_chart.htm")
	public ModelAndView loadSizeChart(HttpServletRequest req)
	{
		ModelAndView mv = new ModelAndView("sizechart");
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("Exception  in the load sizechart"+e.getMessage());
			
		}
		mv.addObject("brandid", brandId);
		return mv;
		
	}
	
	@RequestMapping(value="/terms_of_use.htm")
	public ModelAndView loadTermsofUse(HttpServletRequest req)
	{
		ModelAndView mv = new ModelAndView("TermsOfUse");
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("Exception  in the load TermsOfUse"+e.getMessage());
			
		}
		mv.addObject("brandid", brandId);
		return mv;
		
	}
	
	@RequestMapping(value="/customer_service.htm")
	public ModelAndView loadCustomerService(HttpServletRequest req)
	{
		ModelAndView mv = new ModelAndView("customerservice");
		String brandstr="";
		try
		{
			brandstr=EnvironmentUtil.getEnvironmentValue(VeroniqaConstants.BRAND_ID_KEY);
		}
		catch(Exception e)
		{
			e.printStackTrace();
			
		}
		Long brandId=0l;
		try
		{
			if(brandstr!=null)
			{
				brandId=Long.parseLong(brandstr);
			}
		}
		catch(Exception e)
		{
			e.printStackTrace();
			log.info("Exception  in the loadFaq"+e.getMessage());
			
		}
		mv.addObject("brandid", brandId);
		return mv;
		
	}
	/* This method allows to add or subscribe
	 * an email to the site
	 */
	
	@RequestMapping(value="/subscribeEmail.htm",method=RequestMethod.GET)
	public @ResponseBody Long subscribeEmail(@RequestParam("emailaddress")String emailaddress)
	{
		try{
			EmailSubscription es = new EmailSubscription();
			log.info("email address = " + emailaddress);
			es.setCustEmailID(emailaddress);
			es.setDateAdded(new Date());
			es.setSubscribe(true);
			
			List<Object> inputList = new ArrayList<Object>();
			inputList.add(es);
			RestClientUtil.callService(inputList, "addBlockEmail", "EmailSubscriptionBusinessService");
			
		}
		catch(Exception e){
			log.info("Exception caught in addEmail()");
			e.printStackTrace();
		}
		
		return 1L;
		
	}
	
	@RequestMapping(value="/subscribeEmailForContest.htm",method=RequestMethod.GET)
	public @ResponseBody Long subscribeEmailForContest(@RequestParam("emailaddress")String emailaddress,@RequestParam("firstName")String firstName,@RequestParam("id")String id)
	{
		try{
			UNIFContestSubscription es = new UNIFContestSubscription();
			log.info("email address = " + emailaddress);
			es.setCustEmailID(emailaddress);es.setFirstName(firstName);
			es.setDateAdded(new Date());
			
			
			List<Object> inputList = new ArrayList<Object>();
			inputList.add(es);
			RestClientUtil.callService(inputList, "addBlockEmail", "UNIFContestSubscriptionBusinessService");
			
		}
		catch(Exception e){
			log.info("Exception caught in addEmail()");
			e.printStackTrace();
		}
		
		return 1L;
		
	}
	
	@RequestMapping(value="/isEmailAvailableForContest.htm",method=RequestMethod.GET)
	public @ResponseBody Boolean isEmailAvailableForContest(@RequestParam("emailaddress")String emailaddress,@RequestParam("id")String id)
	{
		
		Boolean b=false;
		try{
			
			
			log.info("email address = " + emailaddress);
			
			
			
			List<Object> inputList = new ArrayList<Object>();
			inputList.add(emailaddress);
			List<UNIFContestSubscription> retList=(List<UNIFContestSubscription>)RestClientUtil.callService(inputList, "checkSubscription", "UNIFContestSubscriptionBusinessService");
			if(retList!=null)
				log.info("list size = " + retList.size());
			if(retList!=null && retList.size()>0)
			{
				
				b=true;
			}
			
		}
		catch(Exception e){
			log.info("Exception caught in addEmail()");
			e.printStackTrace();
		}
		
		return b;
		
	}


}
