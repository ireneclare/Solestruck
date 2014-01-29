package com.veroniqa.payment;

import java.util.HashMap;
import java.util.logging.Logger;

/*
 * This class has mapping between status-code and the message description of payment process.
 * By SHI
 * Date April 11th 2011
 */
public class PaymentMessageUtil {
	private static Logger log=Logger.getLogger(PaymentMessageUtil.class.getSimpleName());
	private static HashMap<String,String> messageMap=
		new HashMap<String,String>();
	
	static
	{
		messageMap.put("1","Account configuration issue.  Please verify your login credentials.");
		messageMap.put("0","success");
		messageMap.put("26","Account configuration issue.  Please verify your login credentials.");
		messageMap.put("12","Declined. Please try a different card or contact your bank.");
		messageMap.put("13","Declined. Please contact your bank.");
		messageMap.put("23","Invalid credit card number. Please edit and resubmit.");
		messageMap.put("114","Incorrect security number.  Please edit and resubmit.");
		messageMap.put("24","Incorrect expiration date.  Please edit and resubmit.");
		messageMap.put("125","Your Transactions has been declined. Contact Customer Service.");
		messageMap.put("126","success");
		messageMap.put("127","Your Transaction is Under Review. We will notify you via e-mail if accepted.");
		messageMap.put("7","Declined. Please try another card.");
		//messageMap.put("","");
	}
	
	public static String getMessageDesc(String statuscode)
	{
		String message="";
		int intStatusCode;
		try
		{
			if(statuscode==null||statuscode.equals(""))
				message="Invalid status code";
			else
			{
				intStatusCode=Integer.parseInt(statuscode);
				message="There was an error processing your transaction. Please contact Customer Service.";
				if(intStatusCode>=0)
					message=messageMap.get(statuscode);
				
			}
				
		}
		catch(Exception e)
		{
			log.warning("Exception while retrieving payment message.Exception:"+e);
		}
		return message;
	}
}
