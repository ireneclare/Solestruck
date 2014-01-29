
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@page import="com.veroniqa.frontend.util.VeroniqaConstants" %>
<%@ taglib prefix="sr" uri="http://solestruck.com/resources" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@page
import="com.veroniqa.frontend.util.VeroniqaConstants"
 %>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>My Account</title>
<link rel="shortcut icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" />

<link href="/style/${common_css}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm" rel="stylesheet" type="text/css"/>
<script async type="text/javascript" src="/script/${common_js}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm"></script>
<script type="text/javascript">
	var gaJsHost = (("https:" == document.location.protocol)? "https://ssl." : "http://www.");
	document.write("\<script src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'>\<\/script>" );
</script>
<script type="text/javascript">
var pageTracker = _gat._getTracker("<%=VeroniqaConstants.getAnalyticsID()%>");
var fBVar='${fromga}';
if(fBVar=='facebook')
	{
	pageTracker._trackEvent('login type','Facebook login','${email}',1);
	}
else
	{
	pageTracker._trackEvent('login type','Solestruck login','${userDetail.emailid}',1);
	}
</script>
<script type="text/javascript">

var _gaq = _gaq || [];
var pluginUrl = 
 '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
_gaq.push(['_require', 'inpage_linkid', pluginUrl]);
_gaq.push(['_setAccount', '<%=VeroniqaConstants.getAnalyticsID()%>']);
_gaq.push(['_trackPageview']);

(function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();

</script>
<script type="text/javascript">

var _gaq = _gaq || [];
var pluginUrl = 
 '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
_gaq.push(['_require', 'inpage_linkid', pluginUrl]);
_gaq.push(['_setAccount', '<%=VeroniqaConstants.getNewCheckoutAnalyticsID()%>']);
_gaq.push(['_trackPageview']);

(function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();

</script>
</head>
<body>



<div class="top_bar">
  <div class="global_nav_holder">
  
    <tiles:insertAttribute name="topmenumain"/>
    
      </div><!-- global_nav_holder --> 
</div><!-- top_bar -->

<tiles:insertAttribute name="header"/>

<div id="wrapper" >
	<c:set var="shippingAddress" value="${myaccountdto.shippingAddress}"/>
	<c:set var="billingAddress" value="${myaccountdto.billingAddress}"/>
	<c:set var="userDetail" value="${myaccountdto.userDetail}" />
	<div class="content_holder">
		<div class="idp_shoe_name_holder"> 	
			<h2>YOUR INFO</h2> <span id="response" style="color: red; padding: 0px 0px 0px 320px;"></span>
         </div><!-- idp_shoe_name_holder -->  
             		
         <div class="account_info">
              <div class="account_info_col" >
           
             	 <h3>ACCOUNT INFO:</h3>
            	 <label>Your Email:</label>
                 <input name="email" type="text" id="mailid_user" class="registration_inputfield tooltip_f " original-title="Email is not Editable" value="${userDetail.emailid }" readonly="readonly"/>
                 <label>Phone Number:</label>
                 <input name="phonenumber" type="text" id="phonenumber" class="registration_inputfield " value="${userDetail.phoneNumber}"/>
                 <label>Change Password:</label>
                 <input name="password" type="password" id="new_password" class="registration_inputfield" autocorrect = "off"  autocapitalize="off"/>
                 <label>Verify New Password:</label>
                 <input name="confirm_password" type="password" id="re_enter_password" class="registration_inputfield" autocorrect = "off"  autocapitalize="off" />
                 <i id="rqFld_edit_acc_reenter_password" style="color: red;"></i></br>	
	               <!-- <label>Share Settings</label>
	               <div class="clear_both"></div>
	               
	               <input class="email_alerts_check_box" type="checkbox" value="" name="email_allerts">
	               <span class="share_settings_span">Share My Purchases On Facebook</span>
	               <div class="clear_both"></div>
	               <input class="email_alerts_check_box" type="checkbox" value="" name="email_allerts">
	               <span class="share_settings_span settings_twitter">Tweet My Purchases On Twitter</span>
	               <div class="clear_both"></div> -->
	               
	              
	               
              </div> <!---account_info_col--->
			  <div class="account_info_col" >
                   <h3>BILLING INFO:</h3>
                   
               
                  <input type="hidden" id="idBA" value="${billingAddress.key.id}"/>                            
                   <label>First Name</label>
                   <input class="registration_inputfield" type="text" name="first_name" id="first_name_billing" value="${billingAddress.firstName}" autocorrect = "off"  autocapitalize="words" />
			       <label>Last Name</label>
                   <input class="registration_inputfield" type="text" name="last_name" id="last_name_billing"  value="${billingAddress.lastName}" autocorrect = "off"  autocapitalize="words"/>
                   <label>Address:</label>
                   <input class="registration_inputfield" type="text" name="address1" id="address1_billing" value="${billingAddress.street1}" />
                   <input class="registration_inputfield" type="text" name="address2" id="address2_billing" value="${billingAddress.street2 }"/>
                   
                   <div class="clear_both"></div>
                                        
								<label>Country:</label>
								<div class="custom_dropdown custom_dropdown_220">
								<input name="State" type="text"  id="country_billing" titlevalue="${billingAddress.country}" class="input_field_220" value="${billingAddress.countryName}" readonly="readonly"/>
								<input type="hidden"  id='billCountryCode' value=''/>
								<span class="custom_drop_nav"></span>
								
								<ul class='search-list' >
								  <c:forEach items="${countryList}" var="country">
											<li title="${country.countryCode}">${country.countryName}</li>
								</c:forEach>

								</ul>
				</div><!-- custom_dropdown -->
				
				<div class="clear_both"></div>
				 		<div id="div_state_for_billing"<c:if test="${ not (fn:length(billingAddress.state) >0) && (billingAddress.country eq 'US' ||  billingAddress.country eq 'CA') }">style="display:none"</c:if>>	
                             <label>State/Region:</label>
                               <div class="custom_dropdown custom_dropdown_220 " id="bill_state_for_holder">
                                    <input name="State" type="text" id="State_billing" class="input_field_220" titlevalue="${billingAddress.state}" value="${billingAddress.stateName}" readonly="readonly"/>
                                    <span class="custom_drop_nav"></span>            
                                     <ul id="bill_state">
                                     </ul>
                                     <input type="hidden" id="billStateCode" value="${billingAddress.stateName}"/>
                                </div><!-- custom_dropdown -->
                           </div>
                    <div class="clear_both"></div>
                    
                    <div id="div_province_for_billing" class="short_input_fields" <c:if test="${ not (fn:length(billingAddress.province)>0) && billingAddress.country ne 'US' &&  billingAddress.country ne 'CA'}">style="display:none"</c:if> >
                         <label>Province</label>
                         <input   id="province_billing" type="text" class="registration_inputfield" value="${billingAddress.province}"/>
					</div>
                    
                    <%--  <label id="province">Province</label><i id="rqFld_bill_province"></i><div class="clear_both"></div>
                     <input id="province_billing"   type="text" class="registration_inputfield" value="${billingAddress.province}" /> --%>
                     <div class="clear_both"></div>
                     <label>City:</label>
                     <input name="city" type="text" id="city_billing" value="${billingAddress.street3}" class="registration_inputfield"  />
                     <label>Zip:</label>
                     <input name="zip" type="text" id="zipcode_billing" value="${billingAddress.zipCode}"  class="registration_inputfield" />
                     
                     <div class="clear_both"></div>
                    
                </div><!-- account_info_col --> 
				<div id='shippingAccountDiv' class="account_info_col account_info_col_last" >
                      <h3>SHIPPING INFO:</h3>
                      <div  style="display: block;">
                      <input type="hidden" id="idSA" value="${shippingAddress.key.id}" />
                      <label>First Name</label>
                      <input class="registration_inputfield" type="text" value="${shippingAddress.firstName}" id="first_name_shipping" name="first_name"  autocorrect = "off"  autocapitalize="words"/>
                      <label>Last Name</label>
                      <input class="registration_inputfield" type="text" value="${shippingAddress.lastName}" id="last_name_shipping" name="last_name" autocorrect = "off"  autocapitalize="words"/>
                     
                      <label>Address:</label>
                      <input class="registration_inputfield" type="text" value="${shippingAddress.street1 }" id="address1_shipping" name="address1" />
                      <input class="registration_inputfield" type="text" value="${shippingAddress.street2 }" id="address2_shipping" name="address2" />
                      <div class="clear_both"></div>
                      
                      <label>Country:</label>
                                <div class="custom_dropdown custom_dropdown_220">
             					<input name="State" type="text" id="country_shipping" titlevalue="${shippingAddress.country}" class="input_field_220" value="${shippingAddress.countryName}" readonly="readonly"/>
             					<input type="hidden" value="" id="shipCountryCode"/>
                                <span class="custom_drop_nav"></span>
                                 <ul>
                                <%--  <c:forEach items="${countryList}" var="country">
											<li title="${country.countryCode}">${country.countryName}</li>
								</c:forEach> --%>
                                 </ul>
                			</div><!-- custom_dropdown -->
                			
                        <div class="clear_both"></div>
                         <div id="div_state_for_shipping"<c:if test="${ not (fn:length(shippingAddress.state) >0)}">style="display:none"</c:if>>
                             <label>State/Region:</label>
                               <div  class="custom_dropdown custom_dropdown_220" id="ship_state_for_holder">
                                    <input name="State" type="text" id="State_shipping" class="input_field_220" titlevalue="${shippingAddress.state}"  value="${shippingAddress.stateName}"/>
                                    <span class="custom_drop_nav"></span>            
                                     <ul id="ship_state">
                                        
                                     </ul>
                                     <input type="hidden" id="shipStateCode" value="${shippingAddress.stateName}"/>
                                </div><!-- custom_dropdown -->
                             </div>
                         <div id="div_province_for_shipping" class="short_input_fields"  <c:if test="${ not (fn:length(shippingAddress.province)> 0)}">style="display:none"</c:if> >
                           <label>Province:</label><i id="rqFld_bill_province"></i><div class="clear_both"></div>
                           <input id="province_shipping"   type="text" class="registration_inputfield" value="${shippingAddress.province}"  />
                        </div>
                        <div class="clear_both"></div>
                        <label>City:</label>
                        <input name="city" type="text" id="city_shipping" value="${shippingAddress.street3}" class="registration_inputfield" />
                        <label>Zip:</label>
                        <input name="zip" type="text" value="${shippingAddress.zipCode}" id="zipcode_shipping" class="registration_inputfield" />
                        <div class="clear_both"></div>
                        </div>  
                 </div><!-- account_info_col --> 
                  <span id='internationalShipAddr'>
                     <b>*Billing and Shipping Address*</b>International orders must have the same shipping & billing address.
                 </span>
                 <div class="clear_both"></div>
                
         </div><!--  account_info -->
		 
		 <div class="gry_btn fl brwn_btn"  id="updateAccountSettings" ><code class="popup_processing_icon"></code>Save Settings</div>
		 <span class="fl save_success_msg" style="display: none;">Saved Successfully</span>
		 <div class="clear_both"></div>
         
         <div class="order_history">
              	<h2>ORDER HISTORY</h2>
              	<p style=" color: #666;  display: block;  font-family: Arial;  font-size: 14px;  line-height: 20px;  margin: 0 0 15px;  padding-bottom: 15px;  text-align: justify; width: 942px;"><b></>Nice! You like to treat yo'self with new shoes! You can view your order status, track your order by clicking on the tracking number, download a copy of your shipping invoice, or download a return label by clicking on "Return Order"</b></p>
				<table width="960px" border="0" cellpadding="0" cellspacing="0" class="order_history_heading">
				<tr>
						 <td class="col1">Order #</td>
                         <td class="col2">Order Date</td>
                         <td class="col3">Status</td>
                         <td class="col4">Tracking #</td>
                         <td class="col5">Return?</td>
				</tr>
				</table>
				<c:set var="orderCount" value="0"/>
				<table width="940px" border="0" cellpadding="0" cellspacing="0" class="order_history_table">
						<c:forEach var="orderDTO" items="${myaccountdto.oldOrderList}">
						 <c:set var="orderCount" value="${orderCount+1}"/>
				  			<fmt:formatDate value="${orderDTO.datePlaced}" pattern="yyyy-MM-dd hh:mm:ss" var="strDate"/> 
				  				<c:set var="odd_even" value="odd"></c:set>
             						<c:if test="${(orderCount%2)==0}">
             	 						<c:set var="odd_even" value="even"></c:set>
             	 					</c:if>
             	 					<c:if test="${orderDTO.status  eq 'PENDING' || orderDTO.status  eq 'SHIPPED' || orderDTO.status  eq 'CANCELED' || orderDTO.status eq 'RETURNED'}">
									<tr class="${odd_even}">
						 				<td class="col1 tb192">
									 		<c:choose>
											      <c:when test="${orderDTO.status  eq 'CANCELED'}">
											      		<span class="fl">${orderDTO.orderid}</span>
									 					<code class="fl"></code> 
									 					<a class="fl canceled_inovice">Invoice</a>
									 					<div class="clear_both"></div>
											      </c:when>
					 		     				<c:otherwise >
						 		     					<span class="fl">${orderDTO.orderid}</span>
									 					<code class="invoice_icon fl"></code>
									 					<a href="/getOrderInvoice.htm?orderId=${orderDTO.orderid}" target="_blank"  class="fl">Invoice</a>
									 					<div class="clear_both"></div>
							      				</c:otherwise>
											</c:choose>
						 				</td>
                                         <td class="col2 tb192">${strDate}</td>
											      
             	 										<td class="col3 tb192">${orderDTO.status}</td>
             	 									
                                         <td class="col4 tb192">
                                         <c:choose>
                                         <c:when test="${orderDTO.status  eq 'SHIPPED'}">
                                          <a href="${orderDTO.trackingURL}" target="_blank">
                                         ${orderDTO.trackingNo}
                                         </a>
                                         </c:when>
                                         <c:otherwise>
                                          <a>
                                      		   ${orderDTO.trackingNo}
                                         </a>
                                         </c:otherwise>
                                         </c:choose>
                                        </td>
						                <c:choose>
										      <c:when test="${orderDTO.shippingAddress.country eq 'US'}">
										      	<c:choose>
												      <c:when test="${orderDTO.status  eq 'PENDING'}">
														     <td class="col5 tb192"><a>Order is not yet Shipped </a></td>
												      </c:when>
												      <c:when test="${orderDTO.status  eq 'CANCELED'}">
														     <td class="col5 tb192"><a>N/A</a></td>
												      </c:when>
												      <c:when test="${orderDTO.status  eq 'SHIPPED' && orderDTO.discountType ne 'FINAL_SALE' }">
														     <td class="col5 tb192 " onclick="returnOrderpop_act('${orderDTO.orderid}');"><a style="cursor: pointer;">Return Order</a></td>
												      </c:when>
													  <c:when test="${orderDTO.status  eq 'RETURNED'}">
											 		        <td class="col5 tb192"><a>N/A</a></td>
												      </c:when>
												      <c:when test="${orderDTO.status  eq 'SHIPPED' && orderDTO.discountType eq 'FINAL_SALE' }">
														       <td class="col5 tb192"><a>N/A</a></td>
												      </c:when>
											    </c:choose>
										      </c:when>
										      <c:otherwise>
								 		      <td class="col5 tb192"><a>N/A</a></td>
									     	  </c:otherwise>
										  </c:choose>
							 		      
										
									</tr>
									</c:if> 
						</c:forEach>
                                                           
			</table>
          </div><!-- order_history -->
                 
     </div><!-- content_holder -->   
  	
  	 <div class="clear_both"></div>
		<tiles:insertAttribute name="footer"/> 
  	<div class="clear_both"></div>	
    </div><!-- wrapper -->
    <div id="backgroundPopup"></div>
    <div class="global_topbtm_scroll">
        <span class="scroll_top scroll_top_act"></span>
        <span class="scroll_btm scroll_btm_act"></span>
    </div><!-- global_topbtm_scroll -->

    <div class="return_popup popup_pos popup_pos_act">
        <div class="login_popup_close popup_close_act"></div>
            <div class="ppup_cont_holder free_shipping_holder">
                <h2>RETURN</h2>
                <div class="return_content shipping-scroll-pan">
    				<h3>Here's how you do it:</h3>  

					<p>Bummer!  We're sorry they didn't work out!  Just box up the shoes and put them back in their original shoebox.  Fill out the return form that came in the box and put that and the shoes in a shipping box to keep them safe along the way.  Then just print out the label, tape it to the shipping box, and drop the shoes off at FedEx!</p>
					
					<h3>Exchanging? </h3>
					
					<p>
						No problem! You have two options to exchange: Place a new order and we will ship it right away. Then return the first pair for a refund.  But if you're feeling risky, you can write a love note to us on your Return Form with what you want to exchange for. Then send the original shoes back and we'll swap them out if what you want is still available.  Let us know if you have a 2nd choice or want a refund if what you requested is sold out.
					</p>
					
					<h3>Want a refund?</h3>

 					<p>
 						Please allow 5-7 business days to arrive to us. We will process your return within 2-3 business days of receiving the shoes and will deduct $5.95 per order from your credit for return shipping (if a credit is applicable). You will receive an email confirmation of the refund. You should see the funds in 3-5 business days, depending on how fast your bank is.
 					</p>
 					<h3>Trouble printing?</h3>
 					
 					<p>
 						Just email us at customerservice@solestruck.com and we can mail or fax one to you right away.
 					</p>
                   
                    <div class="clear_both"></div> 
                </div><!-- return_content -->
                <a class="gry_btn brwn_btn" id="returnLabel">Download Return Label</a>
        </div><!-- ppup_cont_holder -->
    </div><!-- return_popup -->
    <tiles:insertAttribute name="PopUp"/> 
	<div id="backgroundPopup"></div>


 
<!--  for SSGA-79 GODATAFEED service -->
<!-- <script>
(function() {
	  var scriptLocation=('https:' == document.location.protocol ? 'https://tracking.godatafeed.com/gdf_click.js' : 'http://tracking.godatafeed.com/gdf_click.js');
	    var cj = document.createElement('script'); cj.type = 'text/javascript'; cj.async = true;
	    cj.src = scriptLocation;
	    var sss = document.getElementsByTagName('script')[0]; sss.parentNode.insertBefore(cj, sss);
	  })();
</script> -->
<!--  for SSGA-79 GODATAFEED service -->
<!-- for SSGA-96 GOOGLE TRUSTED STORE -->



<script type="text/javascript">

  var gts = gts || [];



  gts.push(["id", "<%=VeroniqaConstants.getGoogleTrustedStoreID()%>"]);
  
  gts.push(["google_base_offer_id","12345"]);

  gts.push(["google_base_subaccount_id", "<%=VeroniqaConstants.getGoogleTrustedStoreID()%>"]);

  gts.push(["google_base_country", "US"]);

  gts.push(["google_base_language", "EN"]);
  
  gts.push(["gtsContainer","gtrust_badges"]);

  (function() {

    var scheme = (("https:" == document.location.protocol) ? "https://" : "http://");

    var gts = document.createElement("script");

    gts.type = "text/javascript";

    gts.async = true;

    gts.src = scheme + "www.googlecommerce.com/trustedstores/gtmp_compiled.js";

    var s = document.getElementsByTagName("script")[0];

    s.parentNode.insertBefore(gts, s);

  })();

</script>

<!-- for SSGA-96 GOOGLE TRUSTED STORE -->
</body>
</html>