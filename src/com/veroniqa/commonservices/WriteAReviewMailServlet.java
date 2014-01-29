package com.veroniqa.commonservices;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sun.jndi.url.ldaps.ldapsURLContextFactory;
import com.veroniqa.dto.AbandonedShoeMailDTO;
import com.veroniqa.dto.LineItemDTO;
import com.veroniqa.dto.WriteAReviewMailDTO;
import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.RestClientUtil;
import com.veroniqa.jdo.EmailTemplate;

public class WriteAReviewMailServlet extends HttpServlet {
	 
	
	private static final Logger log=Logger.getLogger(WriteAReviewMailServlet.class.getName());
	
	
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
	throws IOException {
		
		
		log.info("inside  WriteAreviewMailServlet" );
		Integer diff = 21;
		IDPMailsCommonServiceClient imsc = new IDPMailsCommonServiceClient();
		List<WriteAReviewMailDTO> Wrm = new ArrayList<WriteAReviewMailDTO>();
		
		boolean mailSent = false;
	
		try
		{	
			if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("LIVE")||EnvironmentUtil.getEnvironmentValue("AppMode").equals("TESTING"))
			{
			log.info(">>>>>>>>>>> Inside try >>>>>>>>>>>> ");
			List<Object> list = new ArrayList<Object>();
			list.add(diff);
			Wrm = (List<WriteAReviewMailDTO>)RestClientUtil.callService(list, "getCustomersForWriteAReviewMail", "IDPMailBusinessService");
			log.info("total mails to be sent = " + Wrm.size());
			List<Object> inputList2 = new ArrayList<Object>();
        	inputList2.add(Long.parseLong(EnvironmentUtil.getEnvironmentValue("WRITE_A_REVIEW")));
        	EmailTemplate emailTemp=(EmailTemplate) RestClientUtil.callService(inputList2, "getEmailTemplateById", "EmailTemplateBusinessService");
			for(WriteAReviewMailDTO wrm:Wrm)
			{
				log.info("got the order details >>>>>>>>> for  = " + wrm.getCustFname());
				List<LineItemDTO> lineitms=wrm.getLineitems();
				for(LineItemDTO lid:lineitms)
				{
					mailSent = imsc.sendWriteAReviewMail(wrm,lid,emailTemp);
				}
				
				log.info("mailsent = " + mailSent);
			}
			}
			else
				log.info("AppMode is not LIVE...skipping emails");
		}
		catch(Exception ex)
		{
			log.warning("Exception in : sendEmailForCron"+ex.getMessage());
			ex.printStackTrace();
			
		}
				
	}
	}
		