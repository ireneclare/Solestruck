package com.veroniqa.commonservices;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.logging.Logger;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.veroniqa.dto.PerfectFitMailDTO;
import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.RestClientUtil;
import com.veroniqa.jdo.EmailTemplate;

//import com.veroniqa.email.SSEmailServerServlet;

public class PerfectFitMailServlet extends HttpServlet {
	 
	
	private static final Logger log=Logger.getLogger(PerfectFitMailServlet.class.getName());
	
	
	public void doGet(HttpServletRequest req, HttpServletResponse resp)
	throws IOException {
		
		log.info("inside  PerfectFitMailServlet" );
		IDPMailsCommonServiceClient imsc = new IDPMailsCommonServiceClient();
		
		List<PerfectFitMailDTO> pFit = new ArrayList<PerfectFitMailDTO>();
		List<PerfectFitMailDTO> inventoryDTO = new ArrayList<PerfectFitMailDTO>();
		
		boolean mailSent = false;
		String vendorName = "";
		String productName = "";
		Double retailprice = 0.0;
		Double size = 0.0;
		String custEmailID = "";
		Long productID = 0L;
		Long colorID = 0L;
		Long regID = 0L;
	
			
			try
			{	
				if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("LIVE")||EnvironmentUtil.getEnvironmentValue("AppMode").equals("TESTING"))
				{
				/* - get cust details from DontSeeYourSize-jdo,
				 * - check if Product Variant exists
				 * - if Product Variant not available, no mail, else, check inventory
				 * - if inventory>0, send mail and update mail status
				 */
				List<Object> list = new ArrayList<Object>();
				pFit = (List<PerfectFitMailDTO>)RestClientUtil.callService(list, "getCustomersForPerfectFitMailByBatch", "IDPMailBusinessService");
				
				
				
				log.info("the no of registered customers remaining to get the perfect fit mails = " + pFit.size()); //14
				
				//checkInventoryForPerfectFitMail and send mail if required
				
					
					List<Object> listOne = new ArrayList<Object>();
					listOne.add(pFit);
					pFit = (List<PerfectFitMailDTO>)RestClientUtil.callService(listOne, "checkInventoryForPerfectFitMail", "IDPMailBusinessService");
					
					log.info("***************after calling checkInventoryForPerfectFitMailClient***************"+pFit.size());
					List<Object> inputList2 = new ArrayList<Object>();
			    	inputList2.add(Long.parseLong(EnvironmentUtil.getEnvironmentValue("DONT_SEE_YOUR_SIZE")));
			    	EmailTemplate emailTemp=(EmailTemplate) RestClientUtil.callService(inputList2, "getEmailTemplateById", "EmailTemplateBusinessService");
					for(PerfectFitMailDTO pDTO : pFit)
					{
						
						if(pDTO.getQtyAvlbl())
						{
							vendorName= pDTO.getVendorName();
							productName= pDTO.getProductName();
							retailprice= pDTO.getRetailPrice();
							size= pDTO.getSize();
							custEmailID= pDTO.getCustEmailID();
							productID= pDTO.getProductId();
							colorID= pDTO.getColorId();
							
						mailSent = imsc.sendPerfectFitMail(vendorName, productName, retailprice, size, custEmailID, productID, colorID,emailTemp);
						
						
					
						log.info("#################after calling send mail service for mailid:"+ custEmailID +" #################3");
						}
						if(mailSent)
						{
							regID = pDTO.getDontSeeYourSizeID();
							log.info("********************* reg id = " + regID);
							//boolean updateFlag = iClient.updatePerfectFitMailStatus(regID);
							
							List<Object> listTwo = new ArrayList<Object>();
							listTwo.add(regID);
							
							
							boolean  updateFlag = (Boolean)RestClientUtil.callService(listTwo, "updatePerfectFitMailStatus", "IDPMailBusinessService");
							
						}
					
					}
					
			}
				else
					log.info("AppMode is not LIVE...Skipping Emails");
			}
			catch(Exception ex)
			{
				log.warning("Exception in : sendEmailForCron"+ex.getMessage());
				ex.printStackTrace();
				
			}
			resp.setContentType("text/plain");
			resp.getWriter().println("Hello, world");
			}
	
}

		
	
	
