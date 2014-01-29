package com.veroniqa.commonservices;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.sun.jndi.url.ldaps.ldapsURLContextFactory;
import com.veroniqa.dto.AbandonedShoeMailDTO;
import com.veroniqa.dto.AbandonedWishListDTO;
import com.veroniqa.dto.LineItemDTO;
import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.RestClientUtil;
import com.veroniqa.frontend.util.VeroniqaCookieUtil;

public class AbandonedShoeMailServlet extends HttpServlet {
	 
	
	private static final Logger log=Logger.getLogger(AbandonedShoeMailServlet.class.getName());
	
	
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
	throws IOException {
		
		try {
			if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("LIVE"))
			{
			log.info("inside  AbandonedMailServlet" );
			String interval = null;
			String type=null;
			Long brandid=null;
			try 
			{
				brandid = Long.parseLong(EnvironmentUtil.getEnvironmentValue("brandid"));
			} 
			catch (NumberFormatException e) 
			{
				e.printStackTrace();
			} 
			catch (Exception e) 
			{
				e.printStackTrace();
			}
			if(req.getParameter("type")!=null)
			{
			type = req.getParameter("type");
			log.info("mail type=="+type);
			}
			if(req.getParameter("interval")!=null)
			{
			interval = req.getParameter("interval");
			log.info("interval=="+interval);
			}	
			Integer diff;
			if(interval!=null && interval!="")
			{
				diff =  Integer.parseInt(interval);
			}
			else
				diff=3;
			
			log.info(" DIFF ==== " + diff ) ;
			IDPMailsCommonServiceClient imsc = new IDPMailsCommonServiceClient();
			List<AbandonedShoeMailDTO> Asm = new ArrayList<AbandonedShoeMailDTO>();
			List<AbandonedWishListDTO> Awm=new ArrayList<AbandonedWishListDTO>();
			
			boolean mailSent = false;
			if(type.equals("cart"))
			{
				log.info("inside abandoned cart");
			try
			{	
				log.info(">>>>>>>>>>> Inside try >>>>>>>>>>>> ");
				List<Object> list = new ArrayList<Object>();
				list.add(diff);
				Asm = (List<AbandonedShoeMailDTO>)RestClientUtil.callService(list, "getCustomersForAbandonedShoeMail", "IDPMailBusinessService");
				log.info("total mails to be sent = " + Asm.size());
				
				for(AbandonedShoeMailDTO asm:Asm)
				{
					log.info("got the order details >>>>>>>>> for  = " + asm.getCustFname());
					mailSent = imsc.sendAbandonedShoeMail(asm);
					log.info("mailsent = " + mailSent);
					
					if(mailSent)
					{
						log.info("going to update mail status >>>>>>>>>>>");
						Long orderid = asm.getOrderId();
						List<Object> listTwo = new ArrayList<Object>();
						listTwo.add(orderid);
						boolean  updateFlag = (Boolean)RestClientUtil.callService(listTwo, "updateOrderByIdForMailSent", "OrderBusinessService");
						
					}
					log.info("#################after calling send mail service for mailid:"+ asm.getCustomerEmail() +" #################3");
				}
			}
			catch(Exception ex)
			{
				log.warning("Exception in : sendEmailForCron"+ex.getMessage());
				ex.printStackTrace();
				
			}
			}
			else if(type.equals("wishlist"))
			{
				log.info("inside abandoned wishlist");
				try
				{	
					log.info(">>>>>>>>>>> Inside try >>>>>>>>>>>> ");
					List<Object> list = new ArrayList<Object>();
					list.add(diff);
					list.add(brandid);
					Awm = (List<AbandonedWishListDTO>)RestClientUtil.callService(list, "getCustomersForAbandonedWishListMail", "IDPMailBusinessService");
					log.info("total mails to be sent = " + Awm.size());
					
					for(AbandonedWishListDTO awm:Awm)
					{
						log.info("got the order details >>>>>>>>> for  = " + awm.getCustFname());
						mailSent = imsc.sendAbandonedWishListMail(awm);
						log.info("mailsent = " + mailSent);
						
						if(mailSent)
						{
							log.info("going to update mail status >>>>>>>>>>>");
							Long wishlistid = awm.getWishlistid();
							List<Object> listTwo = new ArrayList<Object>();
							listTwo.add(wishlistid);
							boolean  updateFlag = (Boolean)RestClientUtil.callService(listTwo, "updateStatusForWishlistMail", "WishListBusinessService");
							log.info("Mail Sent="+updateFlag);
						}
						log.info("#################after calling send mail service for mailid:"+ awm.getCustomerEmail());
					}
				}
				catch(Exception ex)
				{
					log.warning("Exception in : sendEmailForCron"+ex.getMessage());
					ex.printStackTrace();
					
				}
			}
					
}
			else
				log.info("Appmode is not LIVE...skipping emails");
		} catch (NumberFormatException e) {
			log.info("NumberFormatException occurred"+e.getMessage());
			e.printStackTrace();
		} catch (Exception e) {
			log.info("Exception occurred"+e.getMessage());
			e.printStackTrace();
		}
	}
	}
		
