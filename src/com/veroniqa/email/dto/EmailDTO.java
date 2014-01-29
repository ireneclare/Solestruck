package com.veroniqa.email.dto;

import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.UUID;

public class EmailDTO implements Serializable {
	
	private static final long serialVersionUID = 96711L;
	
	private String from;
	private String fromName;
	private HashMap<String,String> to;
	private List<String> cc;
	private List<String> bcc;
	private String subject;
	private String replyTo;
	private String emailType;
	
	
	private String textMessage;
	private String htmlMessage;
	private List<String> attachments;
	private List<byte[]> attachmentsData;
	private String url;
	
	public String getUniqueId()
	{
		UUID uniqueKey	 = UUID.randomUUID();
		return uniqueKey.toString();
	}
	
	
	public String getFromName() {
		return fromName;
	}
	public void setFromName(String fromName) {
		this.fromName = fromName;
	}
	public String getFrom() {
		return from;
	}
	public void setFrom(String from) {
		this.from = from;
	}
	public HashMap<String,String> getTo() {
		return to;
	}
	public void setTo(HashMap<String,String> to) {
		this.to = to;
	}
	public List<String> getCc() {
		return cc;
	}
	public void setCc(List<String> cc) {
		this.cc = cc;
	}
	public List<String> getBcc() {
		return bcc;
	}
	public void setBcc(List<String> bcc) {
		this.bcc = bcc;
	}
	public String getSubject() {
		return subject;
	}
	public void setSubject(String subject) {
		this.subject = subject;
	}
	public String getTextMessage() {
		return textMessage;
	}
	public void setTextMessage(String textMessage) {
		this.textMessage = textMessage;
	}
	public String getHtmlMessage() {
		return htmlMessage;
	}
	public void setHtmlMessage(String htmlMessage) {
		this.htmlMessage = htmlMessage;
	}
	public List<String> getAttachments() {
		return attachments;
	}
	public void setAttachments(List<String> attachments) {
		this.attachments = attachments;
	}
	public List<byte[]> getAttachmentsData() {
		return attachmentsData;
	}
	public void setAttachmentsData(List<byte[]> attachmentsData) {
		this.attachmentsData = attachmentsData;
	}
	public String getReplyTo() {
		return replyTo;
	}
	public void setReplyTo(String replyTo) {
		this.replyTo = replyTo;
	}
	public String getEmailType() {
		return emailType;
	}
	public void setEmailType(String emailType) {
		this.emailType = emailType;
	}


	public String getUrl() {
		return url;
	}


	public void setUrl(String url) {
		this.url = url;
	}
	
	
	
	
	
	

}
