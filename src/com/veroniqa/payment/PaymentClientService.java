package com.veroniqa.payment;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.StringReader;
import java.net.HttpURLConnection;
import java.net.URL;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.ResourceBundle;
import java.util.logging.Logger;

import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;

import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;
import org.w3c.dom.Document;
import org.w3c.dom.Element;
import org.w3c.dom.Node;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;
import org.xml.sax.SAXException;
import org.xml.sax.SAXParseException;

import com.acti.payment.paypal.bean.CreditCard;
import com.acti.payment.paypal.bean.Response;
import com.acti.payment.paypal.bean.UserInfo;
import com.acti.payment.paypal.service.CreditCardProcessor;
import com.acti.payment.paypal.util.TransType;
import com.veroniqa.dto.PaymentDetailDTO;
import com.veroniqa.frontend.util.EnvironmentUtil;
import com.veroniqa.frontend.util.RestClientUtil;
import com.veroniqa.jdo.BillingAddress;
import com.veroniqa.jdo.PayPalTransaction;
import com.veroniqa.jdo.ShippingAddress;

/*
 * This class acts as a adaptor and as a client end-point to interact with service for
 * processing the credit-card.It converts/makes up the beans used by the application compatible for the service
 * By SHI
 * Date:April 20 2001
 *  */
public class PaymentClientService {

	private static Logger log=Logger.getLogger(PaymentClientService.class.getSimpleName()); 
	private RestTemplate restTemplate = new RestTemplate();
	 @SuppressWarnings("rawtypes")
	

	public String processCreditCard(PaymentDetailDTO paymentdetail)
	{
		 //log.info("Payment Test Drive Kicked!!!!");
		 ShippingAddress shipaddr=paymentdetail.getShippingAddress();
		 BillingAddress billaddr=paymentdetail.getBillingAddress();
		 double amount=paymentdetail.getAmount();
		 long orderId=paymentdetail.getOrderId();
		 CreditCard creditcard=paymentdetail.getCreditcard();
		 String responseMsg="";
		 String prefpResponse="";
		 String postfpResponse="";
		 String triggerMsg="";
		 List<Object> inputList = new ArrayList<Object>();
		
		 /*Building parameters starts*/
		 com.acti.payment.paypal.bean.BillingAddress bill=new com.acti.payment.paypal.bean.BillingAddress();
		 bill.setFirsname(shipaddr.getFirstName());
		 bill.setLastname(shipaddr.getLastName());
		 bill.setStreet(billaddr.getStreet1());
		 bill.setStreet2(bill.getStreet2());
		 bill.setCity(billaddr.getStreet3());
		 bill.setState(billaddr.getState());
		 bill.setCountry(billaddr.getCountry());
		 bill.setZipCode(billaddr.getZipCode());
		 bill.setEmail(paymentdetail.getEmailId());
		 bill.setPhone(paymentdetail.getPhoneNum());
		 
		 com.acti.payment.paypal.bean.ShippingAddress ship=new com.acti.payment.paypal.bean.ShippingAddress();
		 ship.setFirsname(shipaddr.getFirstName());
		 ship.setLastname(shipaddr.getLastName());
		 ship.setStreet(shipaddr.getStreet1());
		 ship.setCity(shipaddr.getStreet3());
		 ship.setState(shipaddr.getState());
		 ship.setCountry(shipaddr.getCountry());
		 ship.setZipCode(shipaddr.getZipCode());
	 	 com.acti.payment.paypal.bean.InvoiceDetails invoice=new com.acti.payment.paypal.bean.InvoiceDetails(bill,ship);
		 invoice.setAmount(amount);
		 invoice.setOrderNumber(orderId+"");
		 invoice.setComment2(paymentdetail.getPhoneNum());//added for the request form business team to have phno in COMMENT2 column
		 invoice.setInvoiceNumber(orderId+"");
		
		 try
		 {
			 ResourceBundle rb=ResourceBundle.getBundle("PayPal_Profile");
			 String mode=EnvironmentUtil.getEnvironmentValue("AppMode");
			 String partner=rb.getString(mode+"_partnerid");
			 String username=rb.getString(mode+"_username");
			 String vendor=rb.getString(mode+"_vendorid");
			 String password=rb.getString(mode+"_password");
			 String payment_gateway_url=rb.getString(mode+"_payment_gateway_url");
			 
			 UserInfo user=new UserInfo(username,partner,vendor,password);
			 
			 CreditCardProcessor processor=new CreditCardProcessor(user,payment_gateway_url);
			 Response response=processor.doAuthorization(invoice, creditcard);
			 responseMsg=response.getResponseCode()+"";
			 
			 PayPalTransaction transaction=new PayPalTransaction();
			 transaction.setTransactionType(TransType.AUTHORIZATION.getValue());
			 transaction.setTender("C");//C-for credit card and P for Express Checkout
			 //transaction.setOrderId(orderId);
			 transaction.setTransactionId(response.getTransID());
			 transaction.setDeleted(false);
			 transaction.setIsUSSV(false);
			 transaction.setAmount(invoice.getAmount());
			 String creditCardNumber=creditcard.getCardNumber()==null?"":creditcard.getCardNumber();
			 //We should NOT store the all the digits of credit card number.Instead we store only last 5 numbers only.
			 if(creditCardNumber.length()>=4)
				 creditCardNumber=creditCardNumber.substring(creditCardNumber.length()-4);
			 transaction.setCreditCardNumber(creditCardNumber);
			 transaction.setCcv2(creditcard.getCvv2());
			 transaction.setResponseCode(response.getResponseCode());
			 transaction.setResponseMsg(response.getResponseMessage());
			 transaction.setTimestamp(new Date());
			 transaction.setTransactionStatus("PENDING"); //since it need to be captured later
			 transaction.setComment("AUTHORIZATION for the order id "+invoice.getOrderNumber());
			 transaction.setEmailId(paymentdetail.getEmailId());
			 transaction.setPhoneNumber(paymentdetail.getPhoneNum());
			 transaction.setBillingName(billaddr.getFirstName()+" "+billaddr.getLastName());
			 transaction.setBillingStreet(billaddr.getStreet1()+" "+billaddr.getStreet2());
			 transaction.setBillingCity(billaddr.getStreet3());
			 transaction.setBillingCountry(billaddr.getCountry());
			 transaction.setShippingName(shipaddr.getFirstName()+" "+shipaddr.getLastName());
			 transaction.setShippingStreet(shipaddr.getStreet1()+" "+shipaddr.getStreet2());
			 transaction.setShippingCity(shipaddr.getStreet3());
			 transaction.setShippingCountry(shipaddr.getCountry());
			 transaction.setBillingzipCode(billaddr.getZipCode());
			 transaction.setShippingzipCode(shipaddr.getZipCode());
			 transaction.setProvince(billaddr.getProvince());
			 
			 
			 //transaction.set
			 Map<String,String> responseMap=response.getResponseMap();
			 transaction.setResponseMap(response.getResponseMap());
			 Iterator<String> it= response.getResponseMap().keySet().iterator();
			 while(it.hasNext())
			 {
				String key=it.next().toString();
				if(key.contains("FPS_PREXMLDATA"))
					prefpResponse=responseMap.get(key).toString();
				if(key.contains("FPS_POSTXMLDATA"))
					postfpResponse=responseMap.get(key).toString();
			 }
			 if(!(prefpResponse.equals("")||prefpResponse.equals(null)))
				 triggerMsg+=getTriggerMessage(prefpResponse);
			 if(!(postfpResponse.equals("")||postfpResponse.equals(null)))
			 {
				 if(!(prefpResponse.equals("")||prefpResponse.equals(null)))
				 {
					 triggerMsg+='&';
					 triggerMsg+=getTriggerMessage(postfpResponse);
				 }
				 else
					 triggerMsg+=getTriggerMessage(postfpResponse);
			 }
				 
			 transaction.setTriggerMessage(triggerMsg);
			 //PayPalTransactionClientService transService=new PayPalTransactionClientService();
			 //PayPalTransaction createdTransaction=transService.createTransaction(transaction, orderId);
			 inputList.add(transaction);
			 inputList.add(orderId);
			 PayPalTransaction createdTransaction=(PayPalTransaction) RestClientUtil.callService(inputList, "createTransaction", "PayPalTransactionBusinessService");
			 if(createdTransaction==null)
				 log.info("No PayPalTransaction created");
			 else
				 log.info("Transaction ID:"+createdTransaction.getKey().getId());
			
		 }
		 catch(Exception e)
		 {
			 log.info("Exception in processCreditCard :"+e);
		 }
		 return responseMsg;
	}
	
	public String getTriggerMessage(String xml){
		log.info("xml in getTriggerMessage is "+xml);
		String triggerMessage="";
		try {
	            DocumentBuilderFactory docBuilderFactory = DocumentBuilderFactory.newInstance();
	            DocumentBuilder docBuilder = docBuilderFactory.newDocumentBuilder();
	            Document doc = docBuilder.parse(new InputSource(new StringReader(xml)));
	            // normalize text representation
	            doc.getDocumentElement ().normalize ();
	            log.info ("Root element of the doc is " + 
	                 doc.getDocumentElement().getNodeName());
	            NodeList messageList = doc.getElementsByTagName("triggeredMessage");
	            int totalPersons = messageList.getLength();
	            log.info("Total no of triggerMessages : " + totalPersons);
	           
	            for(int s=0; s<messageList.getLength() ; s++){
	                Node message = messageList.item(s);
	                if(message.getNodeType() == Node.ELEMENT_NODE){
	                    Element messageElement = (Element)message;
	                    NodeList textFNList = messageElement.getChildNodes();
	                    triggerMessage+=((Node)textFNList.item(0)).getNodeValue().trim();
	                    log.info("Triggered message : " + 
	                    		((Node)textFNList.item(0)).getNodeValue().trim());
	                    triggerMessage+='\n';
	                }
	            }
	        }catch (SAXParseException err) {
	        log.info ("** Parsing error" + ", line " 
	             + err.getLineNumber () + ", uri " + err.getSystemId ());
	        log.info(" " + err.getMessage ());

	        }catch (SAXException e) {
	        Exception x = e.getException ();
	        ((x == null) ? e : x).printStackTrace ();

	        }catch (Throwable t) {
	        t.printStackTrace ();
	        }
	     
	    return triggerMessage;    

		}
	public HashMap processTransaction_PayPalExpress(PaymentDetailDTO paymentdetail,String payerid,String token)
	{
		log.info("Inside processTransaction_PayPalExpress()");
		 RestTemplate restTemplate = new RestTemplate();
		 @SuppressWarnings("rawtypes")
		 ResponseEntity<HashMap> result=null;
		 //log.info("Payment Test Drive Kicked!!!!");
		 ShippingAddress shipaddr=paymentdetail.getShippingAddress();
		 BillingAddress billaddr=paymentdetail.getBillingAddress();
		 Double amount=paymentdetail.getAmount();
		 long orderId=paymentdetail.getOrderId();
		 log.info("orderid:"+orderId+",amount="+amount+",payerid="+payerid+",token:"+token);
		 CreditCard creditcard=paymentdetail.getCreditcard();
		 String responseMsg="";
		 List<Object> inputList = new ArrayList<Object>();
		 //String businessId="d255c725-5444-4e7e-968e-8a8505511e9f";//veroniqa-payment
		  
		
		 try
		 {
			  String mode=EnvironmentUtil.getEnvironmentValue("AppMode"); 
			  ResourceBundle rbundle=ResourceBundle.getBundle("PayPal_Profile");
			  String businessId=rbundle.getString(mode+"_express_BUSINESSID");
			  String restURL3=rbundle.getString(mode+"_express_RESTURL3");
			  String redirectUrl=rbundle.getString(mode+"_express_REDIRECTURL");
			  String cancelUrl=rbundle.getString(mode+"_express_CANCELURL");
		       
			 // setExpresssCheckoutWithAmount(businessId,amount.toString(),token,redirectUrl,cancelUrl);
		       URL myurl = new URL(restURL3);
		       HttpURLConnection connection = (HttpURLConnection) myurl.openConnection();
		       connection.setDoOutput(true);
		       connection.setRequestMethod("POST");
		       connection.setConnectTimeout (300000); //300s = 5mins
		       connection.setReadTimeout (300000); //300s = 5mins
		       
		       OutputStreamWriter writer = new OutputStreamWriter(connection.getOutputStream());
		       StringBuffer buffer=new StringBuffer();
		       buffer.append("BUSINESSID=");
		       buffer.append(businessId);
		       buffer.append("&PAYERID=");
		       buffer.append(payerid);
		       buffer.append("&AMOUNT=");
		       buffer.append(amount.toString());
		       buffer.append("&TOKEN=");
		       buffer.append(token);
		       buffer.append("&isSale=SALE");
		       
		       log.info("*******Parameter****"+buffer.toString());
		       try {
		    	   	writer.write(buffer.toString());
		       		} catch (IOException e1) {
		       			e1.printStackTrace();
		       }
		       try {
		    	   writer.close();
		       } catch (IOException e1) { 
		       e1.printStackTrace();
		       }
		       
		       String responseString="";
		       if (connection.getResponseCode() == HttpURLConnection.HTTP_OK) {
		    	  String inputLine;
		    	  BufferedReader reader = new BufferedReader(new InputStreamReader(connection.getInputStream(), "UTF-8"));
		    	  while ((inputLine = reader.readLine()) != null) {
		    		  responseString+=inputLine;
		    	   }
		    	  reader.close();
		    	   if(responseString.length() <= 0){
		    	   throw new Exception(responseString);
		    	 }
		    	  
		    	 }else {
		    	  // Server returned HTTP error code.
		    	   throw new Exception(connection.getResponseCode()+"");
		    	   }
		       
		       @SuppressWarnings("unchecked") // suppresses typed/untype mismatch warnings, which is harmless
		       	HashMap<String,String> response = new ObjectMapper().readValue(responseString, HashMap.class);
		    	log.info("Response from pravanjan1234:"+responseString);
		    	for(String key:response.keySet())
		    	{
		    		log.info("Key="+key+",value="+response.get(key));
		    	}
		    	Map<String,String> responseMap = new HashMap<String, String>(response); 
		    	  
		    	if (connection != null) {
		    		   log.info("comming inside to stop the connection");
		    	   connection.disconnect();
		    	  }

			 
		    	//same response  {"PAYERID":"AKYKLDF2U4QR6","PAYMENTTYPE":"None","AVSADDR":"Y","RESULT":"0","AVSZIP":"Y","CORRELATIONID":"ba03000b61650","RESPMSG":"Approved","PNREF":"E25P1F699943","TOKEN":"EC-7VA85559BJ9272011"}
			 responseMsg=response.get("RESULT");
			 PayPalTransaction transaction=new PayPalTransaction();
			 transaction.setTransactionType(TransType.SALE.getValue());
			 transaction.setTender("P");//C-for credit card and P for Express Checkout
			 transaction.setBAID(response.get("BAID"));
			 //transaction.setOrderId(orderId);
			 transaction.setTransactionId(response.get("PNREF"));
			 transaction.setAmount(amount);
			 transaction.setDeleted(false);
			 transaction.setIsUSSV(false);
			 transaction.setToken(token);
			// transaction.setCreditCardNumber(creditCardNumber);
			// transaction.setCcv2(creditcard.getCvv2());
			 transaction.setResponseCode(Integer.parseInt(response.get("RESULT")));
			 transaction.setResponseMsg(response.get("RESPMSG"));
			 transaction.setTimestamp(new Date());
			 transaction.setTransactionStatus("COMPLETED");
			 transaction.setComment("AUTHORIZATION for the order id "+orderId);
			 transaction.setEmailId(paymentdetail.getEmailId());
			 transaction.setPhoneNumber(paymentdetail.getPhoneNum());
			 transaction.setBillingName(billaddr.getFirstName()+" "+billaddr.getLastName());
			 transaction.setBillingStreet(billaddr.getStreet1()+" "+billaddr.getStreet2());
			 transaction.setBillingCity(billaddr.getStreet3());
			 transaction.setBillingCountry(billaddr.getCountry());
			 transaction.setShippingName(shipaddr.getFirstName()+" "+shipaddr.getLastName());
			 transaction.setShippingStreet(shipaddr.getStreet1()+" "+shipaddr.getStreet2());
			 transaction.setShippingCity(shipaddr.getStreet3());
			 transaction.setShippingCountry(shipaddr.getCountry());
			 transaction.setBillingzipCode(billaddr.getZipCode());
			 transaction.setShippingzipCode(shipaddr.getZipCode());
			 transaction.setProvince(billaddr.getProvince());
			 transaction.setResponseMap(responseMap);
			 //PayPalTransactionClientService transService=new PayPalTransactionClientService();
			 //PayPalTransaction createdTransaction=transService.createTransaction(transaction, orderId);
			 inputList.add(transaction);
			 inputList.add(orderId);
			 PayPalTransaction createdTransaction=(PayPalTransaction) RestClientUtil.callService(inputList, "createTransaction", "PayPalTransactionBusinessService");
			 if(createdTransaction==null)
				 log.info("No PayPalTransaction created");
			 else
				 log.info("Transaction ID:"+createdTransaction.getKey().getId());
			 return response;
			
		 }
		 catch(Exception e)
		 {
			 log.info("Exception in processCreditCard :"+e);
		 }
		 return null;
	}
	
	/*public HashMap setExpresssCheckoutWithAmount(String businessId,String amount,String token,String redirecturl,String cancelurl) throws IOException {
		ResponseEntity<HashMap> result=null;

	
				List<MediaType> acceptableMediaTypes = new ArrayList<MediaType>();
				acceptableMediaTypes.add(MediaType.APPLICATION_JSON);
			
				// Prepare header
			 HttpHeaders headers = new HttpHeaders();
			 headers.setAccept(acceptableMediaTypes);
			 // Pass the new person and header
			 
			 HashMap<String,String> paramMap=new HashMap<String, String>();
			 paramMap.put("BUSINESSID",businessId);
			 paramMap.put("AMOUNT",amount);
			 paramMap.put("REDIRECTURL",redirecturl);
			 paramMap.put("CANCELURL", cancelurl);
			 //paramMap.put("REDIRECTURL","http://localhost:8887/api/WebserviceResponse?");
			 //paramMap.put("CANCELURL", "http://www.getupdatehere.appspot.com");
			 
			 paramMap.put("TOKEN", token);
			 HttpEntity<HashMap<String,String>> entity = new HttpEntity<HashMap<String,String>>(paramMap, headers);
			 
			 // HttpEntity<JSONObject> entity = new HttpEntity<JSONObject>(object, headers);
			 
			 // Send the request as POST
			 try {
			 
				 result = restTemplate.exchange("http://www.pravanjan1234.appspot.com/api/PayPalservices/setExpressCheckoutWithAmount", HttpMethod.POST, entity, HashMap.class);
				 return result.getBody();
			 	} catch (Exception e) {
				 log.warning("Exception in ExpresssCheckoutWithAmount "+e);
			 }
			 
			return null; 
	}*/


	
}
