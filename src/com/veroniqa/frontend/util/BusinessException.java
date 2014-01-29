package com.veroniqa.frontend.util;

import java.net.InetAddress;
import java.net.UnknownHostException;
import java.util.logging.Logger;

import com.veroniqa.email.dto.EmailDTO;
import com.veroniqa.email.emailclientservice.EmailClientService;

public class BusinessException extends Exception {

	/**
	 * 
	 */
	private static final long serialVersionUID = -5935599925387953748L;
	
	private String myHostNameStr;
	private static final Logger mLogger = Logger
			.getLogger(BusinessException.class.getName());

	public BusinessException(String text) {
		super(text);
		this.transmitErrors(text);
	}

	public BusinessException(String text, StackTraceElement[] elements) {
		super(text);
		this.setStackTrace(elements);
		StringBuffer errors = new StringBuffer();
		errors.append(text);
		errors.append("\n");
		for (int i = 0; i < elements.length; i++) {
			errors.append("      at ");
			errors.append(elements[i].toString());
			errors.append("\n");
		}

		this.transmitErrors(errors.toString());
	}

	private String getHostNameStr() {

		if (this.myHostNameStr != null) {
			return this.myHostNameStr;
		} else {
			String ipAddress = null;
			String hostName = null;

			try {
				InetAddress localhost = InetAddress.getLocalHost();
				ipAddress = localhost.getHostAddress();
				hostName = localhost.getHostName();
			} catch (UnknownHostException uex) {

				uex.printStackTrace();
				mLogger.info("Unable to get the ip/hostname for localhost");
			}

			return hostName + " (" + ipAddress + ")";
		}

	}

	private void transmitErrors(String _body) {

		StringBuffer subjectText = new StringBuffer();
		subjectText.append("Web Site BusinessError from ");
		subjectText.append(this.getHostNameStr());

		StringBuffer bodyText = new StringBuffer();
		bodyText.append("BusinessException thrown from: <br />");
		bodyText.append(this.getHostNameStr());
		bodyText.append(": <br /><br /><br />");
		bodyText.append(_body.replaceAll("(\r\n|\n)", "<br />"));

		

		try {
			
			EmailDTO dto=new EmailDTO();
			dto.setFrom(VeroniqaConstants.CUSTOMER_SERVICE_MAIL);			
			dto.setFromName("Solestruck");
			dto.setSubject(subjectText.toString());
			dto.setTextMessage(_body);
			dto.setHtmlMessage(bodyText.toString());			
			mLogger.info("Before calling sendMailToMailService: 1 ");
			EmailClientService.sendMailtoMailService(dto);
			mLogger.info("After calling sendMailToMailService: 1");
			
			

		} catch (Exception ex) {
			mLogger.info("Business Exception: 1 " + ex);
		}
	}

}
