<%@page import="com.veroniqa.frontend.util.VeroniqaConstants" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="frm" uri="http://www.springframework.org/tags/form" %>
<% String imageURL=VeroniqaConstants.IMAGE_URL;%>
<% String liveURL="http://www.solestruck.com";%>
<% String vendorName=(String)request.getAttribute("vendorName");%>
<div class="footer_wrapper">
        <div class="footer_nav">
            <div class="footer_help">
                    <h2>Help</h2>                                        
                    <ul>
                        <li><a class="emailuspopup_act">E-Mail Us</a><div class="clear_both"></div></li>
                        <li><a href="/assistance.do?page=Shipping" >Shipping</a></li>
                        <li><a href="/assistance.do?page=Returns" >Returns</a></li>
                        <li><a href="/assistance.do?page=InternationalCustomers" >International</a></li>
                        <li><a href="/assistance.do?page=Faq" >FAQ</a></li>
                        <li><a href="/assistance.do?page=CustomerService" >Customer Service</a></li>
                    </ul>
            </div><!-- footer_help -->
            
            
            
            <div class="footer_about">
                    <h2><a href="/loadCustomerServicePage.htm?page=About Us" >About</a></h2>                                        
                    <ul>
                        <li><a href="/assistance.do?page=PrivacySecurity">Privacy Notice</a></li>  
                        <li><a href="/assistance.do?page=Affiliates">Affiliates</a></li>                                              
                        <li><a href="/assistance.do?page=Jobs">Jobs</a></li>
                    </ul>
            </div><!-- footer_about -->
            
            
            <div class="footer_contact">
                    <h2>Contact</h2>                                        
                    <ul>
                        <li>1.800.494.1260</li>
                        <li>M-F 7am - 5pm PST</li>
                        <li><a class="emailuspopup_act">E-Mail Us</a><div class="clear_both"></div></li>
                        <li><a target="_blank" href="http://twitter.com/solestruckshoes">Twitter</a></li>
                        <li><a target="_blank" href="http://www.facebook.com/Solestruck" class="facebook">Facebook</a>  </li>
                        <!-- <li><div class="fb-like" data-href="http://www.facebook.com/Solestruck" data-layout="button_count" data-send="false" data-width="75" data-show-faces="true"></div></li> -->
                        
                    </ul>
            </div><!-- footer_contact -->
            
            
            <div class="footer_visit">
                    <h2>Visit</h2>                                        
                    <ul>
                        <li>Solestruck Store</li>
                        <li>417 SW 13th Ave.</li>
                        <li> Portland, OR 97205</li>
                    </ul>
            </div><!-- footer_visit -->
            <div class="clear_both"></div>
          </div><!-- footer_nav -->
                                   
                                       
         <div class="footer_email">
         
         <label>Solestruck Mail List</label>
         <div class="email_input_container">
                    <input name="email" id="subscribeEmail" type="text" class="email_input_box  text_val_act" value="Your E-Mail Address" autocorrect = "off"  autocapitalize="off"/>
                    <input name="email_us" value="" type="button" class="email_send_btn" onclick="subscribeEmailFunction()"/>
                    <div class="clear_both"></div>
         </div><!-- email_input_container -->
         <div class="email_recived_notification">
		 <code></code><span>Sweet! We got it, expect awesomeness soon!</span>
			<div class="clear_both"></div>
		 </div><!-- email_recived_notification -->
         <div class="footer_sign_up"> <span>Sign up for sales, events and all around awesomeness.</span></div><!-- footer_sign_up -->    
        
        </div><!-- footer_email -->
  									  <div class="clear_both"></div>
  									  <div class="bottom_footer_bar">
								      		<div class="copy_right"> Solestruck &copy; 2012 All rights reserved. </div><!-- copy_right -->
								      
											       
											      
								      
											     <!--   <div class="social_links">
                                                	<a class="twitter tooltip_t" title="Tweet This Shoe On Twitter"></a>
                                                    <a class="face_book tooltip_t" title="Share This Shoe On Facebook"></a>
                                                    <a class="share tooltip_t no_right_margin" title="+1 This Page"></a>                                                    
                                                </div>--> <!-- social_links -->
								      <div class="clear_both"></div>
								    </div><!-- bottom_footer_bar -->
                                   </div><!-- footer _wrapper -->
           
    
     <!-- email_popup -->
        <div class="emailus_popup emailus_popup_act popup_pos kgpopup_act">
        	<div class="login_popup_close popup_close_act"></div>
                <div class="dont_see_your_size_popup_holder ">
                    <h2>Say Hi.</h2>
                     <form action="" method="post" name="login" class="message_form_holder">
                        <label class="login_inputfields fl">Your Email:</label><i id="alert" style="color:red;font-size:12px;"> </i><div class="clear_both"></div>
                        <input name="emailUsId" type="text" class="input_box" id="emailUsId" />
                        <label class="how_help_field">Your Message:</label>
                        <textarea name="help" cols="" rows="" class="message_textarea" id="help"></textarea><div id="alertHelp" style="color:red;font-size:12px;"> </div>
                        <label class="order_number">Order Number (if you have one):</label>
                        <input name="order_number" type="text" class="input_box" id="order_number" />
                        <input name="send_message_customerService" type="button" value="Send"  onclick="javascript:setTimeout('emailUsDetails()',100);" class="gry_btn"/>
                    </form>
         </div><!-- message_holder -->
    </div><!-- email_popup -->
    
    
    
    
     <!-- email_sucess_popup-->     
	
	  <div class="email_popup_success_act popup_pos kgpopup_act">
        	<div class="login_popup_close popup_close_act"></div>
                <div class="ppup_cont_holder">
                                	<h2>Thank You</h2>
                                	<h3>Your message has been sent.</h3>
									<p>We'll get back to you shortly.</p>
                                 <div class="gry_btn popup_close_act" onclick="goToPreviousPage_frmemail()">Continue Shopping</div>
                                </div>
                                    <div class="clear_both"></div>
                                    
                        
            </div>	
	 <!-- email_sucess_popup-->
