<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page import="com.veroniqa.frontend.util.VeroniqaConstants"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="sr" uri="http://solestruck.com/resources" %>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Checkout-AccountInfo</title>

<link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_SECURED_URL() %>reset_secured.css" />
<link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_SECURED_URL() %>global_secured.css" />
<link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_SECURED_URL() %>style_secured.css" />
<link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_SECURED_URL() %>form_secured.css" />
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>jquery-1.5.2.min.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>actions.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>checkout.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>shoppingcartcheckout.js"></script> 
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>jquery.json-2.3.min.js"></script>

<!-- <link rel="icon" href="http://images2.solestruck.com/favicon.ico" type="image/x-icon" /> -->
<link rel="icon" href="https://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" />
<!--- Tool tip --->
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>tooltip.js"></script>
<script async type="text/javascript">
	$(function() {
	$('.tooltip_b').tipsy({trigger: 'focus', gravity: 'n'});
	$('.tooltip_t').tipsy({trigger: 'focus', gravity: 's',fade:true});
	$('.tooltip_e').tipsy({trigger: 'focus', gravity: 'w',fade:true});
	$('.tooltip_t2').tipsy({trigger: 'hover', gravity: 's',fade:true});
	 });
	
</script>
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
pageTracker._trackEvent('login type','Solestruck login','${email}',1);
}
</script>

</head>
<body>
<c:set var="discountprogram" value="${sr:getDiscountProgramForFB()}"></c:set>
	<c:if test="${discountprogram eq null}">
		<input type="hidden" id="discountExists" value="false"></input>
	</c:if>
	<c:if test="${discountprogram ne null}">
	<input type="hidden" id="fbsale_discount_percentage" value="${discountprogram.discountPercentage}"/>
	<input type="hidden" id="discountExists" value="true"></input>
	</c:if>
<div id="wrapper">
  <div id="header_wrapper">
    <div id="header" class="checkout_header">
      <a href="#" id="logo" class="checkout_logo"></a>
      <div class="clear_both"></div>
    </div><!-- header --> 
  </div><!-- header_wrapper -->  
  <div class="clear_both"></div>
  
  <h1 class="nb chckout_tkstitle">Thanks For Your Order</h1>
        
  <div class="content_holder np checkout_content" id="new_check_out_content" >
    <div class="payment_process_holder">
      <div class="menu_pathway checkout_pathway">
        <ul>
          <li class="first"><a href="#" class="checkout_1_act selected">Account Info</a></li>
          <li class="path_arrow"></li>
          <li><a href="#" class="checkout_2_act">Shipping Method</a></li>
          <li class="path_arrow"></li>
          <li class="last"><a href="#" class="checkout_3_act">Payment Method</a></li>
        </ul>
        <div class="clear_both"></div>
      </div><!-- menu_pathway -->
      
      <input id="currentStep" type="hidden" value="2"/>
      <input id="lastStep" type="hidden" value="${CHECKOUT_DETAILS.checkoutStep}"/>
     <div class="payment_process_content"> 
     
     <div class="chckout_yourinfo" style="display:block;" >
        <form action="" method="post" name="check_out_sign_in" class="check_out_signin_holder">
            <ul class="checkout_form">
            	<li>
                      <h2>1. Account Info</h2>
                      <div class="account_info_holder">
                      <c:choose>
                      	<c:when test="${CHECKOUT_DETAILS!=null && CHECKOUT_DETAILS.customerDetailDTO.billingAddress!=null}">
                      	<input type="hidden"  id="customerId" name="customerId"  value="${CHECKOUT_DETAILS.customerDetailDTO.customerId}" />
	                      	<input id="email_Account" name="email" type="text" readonly="readonly" class="chk_input bb inp_tx_hlght tooltip_t" title="Email Address" value="${CHECKOUT_DETAILS.customerDetailDTO.email}" />
	                        <input id="password_Account"  name="password" type="password" class="chk_input chk_input_short inp_tx_hlght br fl tooltip_t" value="Create Password" title="Create Password" style="display:none;"/>
	                        <input id="password_Acount_clear"  name="password" type="text" class="chk_input chk_input_short inp_tx_hlght br fl tooltip_t" value="Create Password" title="Create Password" style="display:none;"/>
	                        <input id="confirmpassword_Account"  name="confirmpassword" type="password" class="chk_input chk_input_short fl tooltip_t" value="Confirm Password" title="Confirm Password"  style="display:none;"/>
	                        <input id="confirmpassword_clear"  name="confirmpassword" type="text" class="chk_input chk_input_short fl tooltip_t" value="Confirm Password" title="Confirm Password"  style="display:none;"/>
                      	</c:when>
                      	<c:otherwise>
                      	<input type="hidden" id="customerId" name="customerId" value=""/>
	                      	<input id="email_Account" name="email" type="text" readonly="readonly" class="chk_input bb inp_tx_hlght tooltip_t text_title_act" title="Email Address" value="${CHECKOUT_DETAILS.customerDetailDTO.email}" />
	                        <input id="password_Account"  name="password" type="password" class="chk_input chk_input_short br fl tooltip_t" style="display:none;" value="" title="Create Password"/>
	                        <input id="password_Account_clear"  name="password" type="text" class="chk_input chk_input_short br fl tooltip_t" value="Create Password" title="Create Password"/>
	                        <input id="confirmpassword_Account"  name="confirmpassword" type="password" class="chk_input chk_input_short fl tooltip_t" style="display:none;" value="" title="Confirm Password"/>
	                        <input id="confirmpassword_clear"  name="confirmpassword" type="text" class="chk_input chk_input_short fl tooltip_t"  value="Confirm Password" title="Confirm Password"/>
                      	</c:otherwise>
                      </c:choose>
                      <div class="clear_both"></div>
                      </div>
                 </li>
                 
                 <li>   
                    <h2>2. Billing Address:</h2>
                     <span class="checkout_error" id="error_account" style="display:none">Invalid Input</span>
                      <div class="account_info_holder">
                      <c:choose>
	                      <c:when test="${CHECKOUT_DETAILS!=null && CHECKOUT_DETAILS.customerDetailDTO.billingAddress!=null}">
	                    <c:choose>
	                      	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.firstName!=null && CHECKOUT_DETAILS.customerDetailDTO.billingAddress.firstName!=''}">
	                    <input id="billFirstName"  name="firstname" type="text" class="chk_input chk_input_short br fl tooltip_t text_title_act" value="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.firstName}" title="First Name"/>
	                    </c:when>
	                    <c:otherwise>
	                    <input id="billFirstName"  name="firstname" type="text" class="chk_input chk_input_short br fl tooltip_t text_title_act" value="First Name" title="First Name"/>
	                    </c:otherwise>
	                        </c:choose>
	                        <c:choose>
	                      	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.lastName!=null && CHECKOUT_DETAILS.customerDetailDTO.billingAddress.lastName!=''}">
	                        <input id="billLastName"  name="lastname" type="text" class="chk_input chk_input_short fl tooltip_t text_title_act" value="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.lastName}" title="Last Name"/>
	                         </c:when>
	                    <c:otherwise>
	                    <input id="billLastName"  name="lastname" type="text" class="chk_input chk_input_short fl tooltip_t text_title_act" value="Last Name" title="Last Name"/>
	                    </c:otherwise>
	                    </c:choose>
	                        
	                        <div class="clear_both"></div>
	                        <c:choose>
	                      	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.phone!=null && CHECKOUT_DETAILS.customerDetailDTO.phone!=''}">
	                        <input id="cusPhone" name="phone" type="text" class="chk_input bt tooltip_t text_title_act" value="${CHECKOUT_DETAILS.customerDetailDTO.phone}" title="Phone Number" />
	                        </c:when>
	                    <c:otherwise>
	                    <input id="cusPhone" name="phone" type="text" class="chk_input bt tooltip_t text_title_act" value="Phone Number" title="Phone Number" />
	                    </c:otherwise>
	                    </c:choose>
	                     <c:choose>
	                      	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street1!=null && CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street1!=''}">
	                        <input id="billAddress1" name="address1" type="text" class="chk_input bt tooltip_t text_title_act" value="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street1}" title="Address 1" />
	                        </c:when>
	                    <c:otherwise>
	                    <input id="billAddress1" name="address1" type="text" class="chk_input bt tooltip_t text_title_act" value="Address 1" title="Address 1" />
	                        </c:otherwise>
	                    </c:choose>
	                     <c:choose>
	                      	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street2!=null && CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street2!=''}">
	                        <input id="billAddress2" name="address2" type="text" class="chk_input bt bb tooltip_t text_title_act" value="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street2}" title="Address 2" />
	                         </c:when>
	                    <c:otherwise>
	                    <input id="billAddress2" name="address2" type="text" class="chk_input bt bb tooltip_t text_title_act" value="Address 2" title="Address 2" />
	                         </c:otherwise>
	                    </c:choose>
	                         <div class="custom_select">
	                            <div class="select">
	                            	<c:choose>
	                            	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.countryName!=null && CHECKOUT_DETAILS.customerDetailDTO.billingAddress.countryName!=''}">
	                                <p class="country"  id="billCountryName">${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.countryName}</p>
	                                </c:when>
	                                <c:otherwise>
	                                <p class="country"  id="billCountryName">Select Your Country</p>
	                                </c:otherwise>
	                                </c:choose>
	                                
	                                <span class="custom_drop_nav"></span>
	                            </div>
	                            <select id="billCountryList" name="billCountry" class="custom_select_value_act">
	                                <option value="00">Select Your Country</option>
	<c:forEach items="${countryMap}" var="country">
	                        	<c:choose>
	                        	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.country==country.value.countryCode}">
	                        	<option value="${country.value.countryCode}" selected="selected">${country.value.countryName}</option>
	                        	</c:when>
	                        	<c:otherwise>
	                        	<option value="${country.value.countryCode}">${country.value.countryName}</option>
	                        	</c:otherwise>
	                        	</c:choose>
	</c:forEach>
	                            </select>
	                            <input type="hidden" id="billCountryCode" value="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.country}"/>
	                         </div><!---shipping-country--->
	                         <c:set var="stateAvailable" value="true"/>
	                    	<c:if test="${countryMap[CHECKOUT_DETAILS.customerDetailDTO.billingAddress.country].stateList==null}">
	                    	<c:set var="stateAvailable" value="false"/>
	                    	</c:if>
	                         <div class="custom_select custom_select_right"  id="billStateHolder" <c:if test="${stateAvailable==false}"> style="display:none;"</c:if>>
	                            <div class="select">
	                            	<c:if test="${stateAvailable==true}">
	                            	<p class="country" id="billStateName">${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.stateName}</p>
	                            	</c:if>
	                            	<c:if test="${stateAvailable==false}">
	                            	<p class="country" id="billStateName">SELECT YOUR STATE</p>
	                            	</c:if>
	                                <span class="custom_drop_nav"></span>
	                            </div>
	                            <select id="billStateList" name="billState" class="custom_select_value_act">
	                            	<option value="00">Select Your State</option>
	                            	<c:if test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.state!=null && CHECKOUT_DETAILS.customerDetailDTO.billingAddress.state!=''}">
	                            	<c:forEach  items="${countryMap[CHECKOUT_DETAILS.customerDetailDTO.billingAddress.country].stateList}" var="mystate">
	                            	<c:choose>
	                            	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.state==mystate.stateCode}">
	                            	<option value="${mystate.stateCode}" selected="selected">${mystate.stateName}</option>
	                            	</c:when>
	                            	<c:otherwise>
	                            	<option value="${mystate.stateCode}">${mystate.stateName}</option>
	                            	</c:otherwise>
	                            	</c:choose>
	                           	 </c:forEach>	
	</c:if>
	                            </select>
	                            <input type="hidden" id="billStateCode" value="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.state}"/>
	                         </div>                    
	                         <c:choose>
	                         <c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.province!=null && CHECKOUT_DETAILS.customerDetailDTO.billingAddress.province!=''}">
	                         <input id="billProvince" name="Province" type="text" class="chk_input chk_input_short br fl tooltip_t text_title_act" <c:if test="${stateAvailable==true}"> style="display:none;"</c:if> value="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.province}" title="Province" />
	                         </c:when>
	                         <c:otherwise>
	                         <input id="billProvince" name="Province" type="text" class="chk_input chk_input_short br fl tooltip_t text_title_act" <c:if test="${stateAvailable==true}"> style="display:none;"</c:if> value="Province" title="Province" />
	                         </c:otherwise>
	                         </c:choose>
	                         <!---shipping-country--->
	                        <div class="clear_both"></div>
	                        <c:choose>
	                        <c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street3!=null && CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street3!=''}">
	                        <input id="billCity" name="city" type="text" class="chk_input chk_input_short br fl tooltip_t text_title_act" value="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street3}" title="City" />
	                        </c:when>
	                        <c:otherwise>
	                        	<input id="billCity" name="city" type="text" class="chk_input chk_input_short br fl tooltip_t text_title_act" value="City" title="City" />
	                        </c:otherwise>
	                        </c:choose>
	                        <c:choose>
	                        <c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.zipCode!=null && CHECKOUT_DETAILS.customerDetailDTO.billingAddress.zipCode!=''}">
	                        <c:if test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.country=='US'}">
	                        	<input id="billZip" name="zip" type="text" class="chk_input chk_input_short fl tooltip_t text_title_act" value="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.zipCode}" title="Zip Code" />
	                        </c:if>
	                        <c:if test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.country!='US'}">
	                        	<input id="billZip" name="zip" type="text" class="chk_input chk_input_short fl tooltip_t text_title_act" value="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.zipCode}" title="Postal Code" />
	                        </c:if>
	                        </c:when>
	                        <c:otherwise>
	                        	<input id="billZip" name="zip" type="text" class="chk_input chk_input_short fl tooltip_t text_title_act" value="Postal Code" title="Postal Code" />
	                        </c:otherwise>
	                        </c:choose>
	                      </c:when>
                      	  <c:otherwise>
                      	  	<input id="billFirstName"  name="firstname" type="text" class="chk_input chk_input_short br fl tooltip_t text_title_act" value="First Name" title="First Name"/>
	                        <input id="billLastName"  name="lastname" type="text" class="chk_input chk_input_short fl tooltip_t text_title_act" value="Last Name" title="Last Name"/>
	                        <div class="clear_both"></div>
	                        <input id="cusPhone" name="phone" type="text" class="chk_input bt tooltip_t text_title_act" value="Phone Number" title="Phone Number" />
	                        <input id="billAddress1" name="address1" type="text" class="chk_input bt tooltip_t text_title_act" value="Address 1" title="Address 1" />
	                        <input id="billAddress2" name="address2" type="text" class="chk_input bt bb tooltip_t text_title_act" value="Address 2" title="Address 2" />
	                        
	                         <div class="custom_select">
	                            <div class="select">
	                                <p class="country"  id="billCountryName">${countryMap['US'].countryName}</p>
	                                <span class="custom_drop_nav"></span>
	                            </div>
	                            <select id="billCountryList" name="billCountry" class="custom_select_value_act">
	                                <option value="00">Select Your Country</option>
	                                <c:forEach items="${countryMap}" var="country">
	                        	<c:choose>
	                        	<c:when test="${country.value.countryCode=='US'}">
	                        	<option value="${country.value.countryCode}" selected="selected">${country.value.countryName}</option>
	                        	</c:when>
	                        	<c:otherwise>
	                        	<option value="${country.value.countryCode}">${country.value.countryName}</option>
	                        	</c:otherwise>
	                        	</c:choose>
	</c:forEach>
	                            </select>
	                            <input type="hidden" id="billCountryCode" value="US"/>
	                         </div><!---shipping-country--->
	                    	
	                         <div class="custom_select custom_select_right"  id="billStateHolder">
	                            <div class="select">
	                                <p class="country" id="billStateName">SELECT YOUR STATE</p>
	                                <span class="custom_drop_nav"></span>
	                            </div>
	                            <select id="billStateList" name="billState" class="custom_select_value_act">
	                                <option value="00">Select Your State</option>
	                                <c:forEach items="${countryMap['US'].stateList}" var="mystate">
	                                	<option value="${mystate.stateCode}">${mystate.stateName}</option>
	                                </c:forEach>
	                            </select>
	                            <input type="hidden" id="billStateCode" value=""/>
	                         </div>                    
	                         <input id="billProvince" name="Province" type="text" class="chk_input chk_input_short br fl tooltip_t text_title_act" style="display:none;" value="Province" title="Province" />
	                         <!---shipping-country--->
	                        <div class="clear_both"></div>
	                        <input id="billCity" name="city" type="text" class="chk_input chk_input_short br fl tooltip_t text_title_act" value="City" title="City" />
	                        <input id="billZip" name="zip" type="text" class="chk_input chk_input_short fl tooltip_t text_title_act" value="Zip Code" title="Zip Code" />
                      	  
                      	  </c:otherwise>
                      </c:choose>
                        <div class="clear_both"></div>
                      </div>
                   </li>
                   <li>
                   	<h2 class="fl" id="shipAddrHeader">3. Shipping Address</h2>
                       	<div class="fr shipping_chkbox_holder" id="localShipAddr">
                       	<input id="ship_add" type="checkbox" class="email_alerts_check_box same_shpping_address_act">
                       	<label  for="ship_add" id="addressCheck">Same As Billing?</label>
                       	<div class="clear_both"></div>
                       	</div><!-- shipping_chkbox_holder -->
                       	<p id="internShipAddr">International orders must have the same shipping & billing address.</p>
                      	<!--   <label class="intrnl_ordr">International orders require the billing & shipping addresses to the be same.</label> -->
                        
                        <div class="clear_both"></div>
	<div class="shipping_same_address_act">                        
                        <div class="clear_both"></div>
                        <div class="account_info_holder">
                        <c:choose>
	                      <c:when test="${CHECKOUT_DETAILS!=null && CHECKOUT_DETAILS.customerDetailDTO.shippingAddress!=null}">
	                   	<c:choose>
	                   	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.firstName!=null && CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.firstName!=''}">
	                   	<input id="shipFirstName"  name="firstname" type="text" class="chk_input chk_input_short br fl tooltip_t text_title_act" value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.firstName}" title="First Name"/>
	                        </c:when>
	                        <c:otherwise>
	                   	<input id="shipFirstName"  name="firstname" type="text" class="chk_input chk_input_short br fl tooltip_t text_title_act" value="First Name" title="First Name"/>
	                        </c:otherwise>
	                        </c:choose>
	                        <c:choose>
	                   	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.lastName!=null && CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.lastName!=''}">
	                        <input id="shipLastName"  name="lastname" type="text" class="chk_input chk_input_short fl tooltip_t text_title_act" value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.lastName}" title="Last Name"/>
	                        </c:when>
	                        <c:otherwise>
	                        <input id="shipLastName"  name="lastname" type="text" class="chk_input chk_input_short fl tooltip_t text_title_act" value="Last Name" title="Last Name"/>
	                        </c:otherwise>
	                        </c:choose>
	                        <div class="clear_both"></div>
	                        <c:choose>
	                   	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.phone!=null && CHECKOUT_DETAILS.customerDetailDTO.phone!=''}">
	                        <input id="phone" name="phone" type="text" class="chk_input bt tooltip_t text_title_act" value="${CHECKOUT_DETAILS.customerDetailDTO.phone}" title="Phone Number" />
	                        </c:when>
	                        <c:otherwise>
	                        <input id="phone" name="phone" type="text" class="chk_input bt tooltip_t text_title_act" value="Phone Number" title="Phone Number" />
	                        </c:otherwise>
	                        </c:choose>
	                         <c:choose>
	                   	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street1!=null && CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street1!=''}">
	                        <input id="shipAddress1" name="address1" type="text" class="chk_input bt tooltip_t text_title_act" value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street1}" title="Address 1" />
	                        </c:when>
	                        <c:otherwise>
	                        <input id="shipAddress1" name="address1" type="text" class="chk_input bt tooltip_t text_title_act" value="Address 1" title="Address 1" />
	                        </c:otherwise>
	                        </c:choose>
	                        <c:choose>
	                   	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street1!=null && CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street2!=''}">
	                        <input id="shipAddress2" name="address2" type="text" class="chk_input bt bb tooltip_t text_title_act" value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street2}" title="Address 2" />
	                        </c:when>
	                        <c:otherwise>
	                        <input id="shipAddress2" name="address2" type="text" class="chk_input bt bb tooltip_t text_title_act" value="Address 2" title="Address 2" />
	                        </c:otherwise>
	                        </c:choose>
	                         <div class="custom_select">
	                            <div class="select">
	                            <c:choose>
	                            	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.countryName!=null && CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.countryName!=''}">
	                                	<p class="country" id="shipCountryName">${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.countryName}</p>
	                                	</c:when>
	                                	<c:otherwise>
	                                	<p class="country" id="shipCountryName">Select Your Country</p>
	                                	</c:otherwise>
	                                	</c:choose>
	                                <span class="custom_drop_nav"></span>
	                            </div>
	                            <!--
	                            <select id="shipCountryList" name="shipCountry" class="custom_select_value_act">
	                                <option value="">Select Your Country</option>
	                                <c:forEach items="${countryList}" var="country">
	                        	<option value="${country.countryCode}">${country.countryName}</option>
	                        	</c:forEach>
	                            </select>
	                            -->
	                           <input type="hidden" id="shipCountryCode" value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.country}"/> 
	                         </div><!---shipping-country--->
	                    	
	                         <div class="custom_select custom_select_right" id="shipStateHolder" <c:if test="${stateAvailable==false}"> style="display:none;"</c:if>>
	                            <div class="select">
                                	<c:if test="${stateAvailable==true}">
	                                	<p class="country" id="shipStateName">${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.stateName}</p>
	                            	</c:if>
	                            	<c:if test="${stateAvailable==false}">
	                            	<p class="country" id="shipStateName">SELECT YOUR STATE</p>
	                            	</c:if>
	                                
	                                <span class="custom_drop_nav"></span>
	                            </div>
	                            <select id="shipStateList" name="shipState" class="custom_select_value_act">
	                            	<option value="00">Select Your State</option>
	                            	<c:if test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.state!=null && CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.state!=''}">
	                            	<c:forEach  items="${countryMap[CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.country].stateList}" var="mystate">
	                            	<c:choose>
	                            	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.state==mystate.stateCode}">
	                            	<option value="${mystate.stateCode}" selected="selected">${mystate.stateName}</option>
	                            	</c:when>
	                            	<c:otherwise>
	                            	<option value="${mystate.stateCode}">${mystate.stateName}</option>
	                            	</c:otherwise>
	                            	</c:choose>
	                           	 </c:forEach>	
	</c:if>
	                            </select>
	                            <input type="hidden" id="shipStateCode" value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.state}"/>
	                         </div>
	                         <c:choose>
	                     <c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.province!=null && CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.province!=''}">
	                         	<input id="shipProvince" name="shipProvince" type="text" class="chk_input chk_input_short br fl tooltip_t text_title_act" <c:if test="${stateAvailable==true}"> style="display:none;"</c:if> value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.province}" title="Province" />
	                         </c:when>
	                         <c:otherwise>
	                         	<input id="shipProvince" name="shipProvince" type="text" class="chk_input chk_input_short br fl tooltip_t text_title_act" <c:if test="${stateAvailable==true}"> style="display:none;"</c:if> value="Province" title="Province" />
	                         </c:otherwise>
	                         </c:choose>
	                         <!---shipping-country--->
	                        <div class="clear_both"></div>
	                        <c:choose>
	                   	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street3!=null && CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street3!=''}">
	                        <input id="shipCity" name="city" type="text" class="chk_input chk_input_short br fl tooltip_t text_title_act" value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street3}" title="City" />
	                        </c:when>
	                        <c:otherwise>
	                        <input id="shipCity" name="city" type="text" class="chk_input chk_input_short br fl tooltip_t text_title_act" value="City" title="City" />
	                        </c:otherwise>
	                        </c:choose>
	                        <c:choose>
	                        <c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.zipCode!=null && CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.zipCode!=''}">
	                        <c:if test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.country=='US'}">
	                        	<input id="shipZip" name="zip" type="text" class="chk_input chk_input_short fl tooltip_t text_title_act" value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.zipCode}" title="Zip Code" />
	                        </c:if>
	                   	<c:if test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.country!='US'}">
	                        	<input id="shipZip" name="zip" type="text" class="chk_input chk_input_short fl tooltip_t text_title_act" value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.zipCode}" title="Postal Code" />
	                        </c:if>
	                        </c:when>
	                        <c:otherwise>
	                        	<input id="shipZip" name="zip" type="text" class="chk_input chk_input_short fl tooltip_t text_title_act" value="Postal Code" title="Postal Code" />
	                        </c:otherwise>
	                        </c:choose>
	                      </c:when>
                      	  <c:otherwise>
	                   	<input id="shipFirstName"  name="firstname" type="text" class="chk_input chk_input_short br fl tooltip_t text_title_act" value="First Name" title="First Name"/>
	                        <input id="shipLastName"  name="lastname" type="text" class="chk_input chk_input_short fl tooltip_t text_title_act" value="Last Name" title="Last Name"/>
	                        <div class="clear_both"></div>
	                        <input id="phone" name="phone" type="text" class="chk_input bt tooltip_t text_title_act" value="Phone Number" title="Phone Number" />
	                        <input id="shipAddress1" name="address1" type="text" class="chk_input bt tooltip_t text_title_act " value="Address 1" title="Address 1" />
	                        <input id="shipAddress2" name="address2" type="text" class="chk_input bt bb tooltip_t text_title_act" value="Address 2" title="Address 2" />
	                        
	                         <div class="custom_select">
	                            <div class="select">
	                                <p class="country" id="shipCountryName">${countryMap['US'].countryName}</p>
	                                <span class="custom_drop_nav"></span>
	                            </div>
	                            <!--
	                            <select id="shipCountryList" name="shipCountry" class="custom_select_value_act">
	                                <option value="">Select Your Country</option>
	                                <c:forEach items="${countryList}" var="country">
	                        	<option value="${country.countryCode}">${country.countryName}</option>
	                        	</c:forEach>
	                            </select>
	                            -->
	                           <input type="hidden" id="shipCountryCode" value="US"/> 
	                         </div><!---shipping-country--->
	                    	
	                         <div class="custom_select custom_select_right" id="shipStateHolder">
	                            <div class="select">
	                                <p class="country" id="shipStateName">SELECT YOUR STATE</p>
	                                <span class="custom_drop_nav"></span>
	                            </div>
	                            <select id="shipStateList" name="shipState" class="custom_select_value_act">
	                                <option value="00">Select Your State</option>
                                	<c:forEach items="${countryMap['US'].stateList}" var="mystate">
	                                	<option value="${mystate.stateCode}">${mystate.stateName}</option>
	                                </c:forEach>
	                            </select>
	                            <input type="hidden" id="shipStateCode" value=""/>
	                         </div>
	                         <input id="shipProvince" name="shipProvince" type="text" class="chk_input chk_input_short br fl tooltip_t text_title_act" style="display:none;" value="Province" title="Province" />
	                         <!---shipping-country--->
	                        <div class="clear_both"></div>
	                        <input id="shipCity" name="city" type="text" class="chk_input chk_input_short br fl tooltip_t text_title_act" value="City" title="City" />
	                        <input id="shipZip" name="zip" type="text" class="chk_input chk_input_short fl tooltip_t text_title_act" value="Zip Code" title="Zip Code" />
	  
	  </c:otherwise>
                        </c:choose>
                        <div class="clear_both"></div>
                      </div>
                            </div> <!-- shipping_same_address_act --> 
                          <div class="clear_both"></div>
                       </li>
                       <li class="chkout_last">
                          <div class="mrw_btn yourinfo_act" id="your_info_btn">
                 	Continue
                    <code class="wht_rt_arrow"></code>
                 </div><!-- brw_btn -->
               </li>
            </ul>
        </form>
      </div><!-- chckout_yourinfo -->
       </div><!-- payment_process_content-->
            
      <div class="clear_both"></div>
       <div class="need_help_bar">
        <h3>I Need Help!</h3>
        <p><a href="#" class="email_us" style="display:none;">Email Us</a>Call us M-F 7A-5P Pacific at 1.800.494.1260</p>
      </div><!-- need_help_bar -->
    </div><!-- payment_process_holder -->


	<jsp:include page="/pages/ShoppingCart.jsp"/>     
     
      <div class="clear_both"></div>
  </div> <!-- content_holder -->
 
  <div class="clear_both"></div>
 
  <div class="clear_both"></div>
</div><!-- wrapper -->



<div class="forgot_password_form popup_pos popup_pos_act">
    <div class="login_popup_close popup_close_act"></div>
        <div class="ppup_cont_holder">
            <h2>Forgot Password</h2>
            <form action="" method="post" name="login" class="login_form_holder">
            <label class="login_inputfields">Your Email:</label>
            <input name="email" type="text" class="input_box" id="email" />
            <p>Please make sure you have <a href="mailto:customerservice@solestruck.com">customerservice@solestruck.com</a> set to an accepted sender so you 
            get the password reset email.</p>
            <input name="reset_password" type="button" value="Reset Password" class="gry_btn reset_password_success_act"/>
            </form>
            <div class="clear_both"></div>        
    </div><!-- ppup_cont_holder -->
</div><!-- forgot_password_form -->
 <div id="backgroundPopup"></div>     
<div class="facebook_popup popup_pos kgpopup_act">
 	<div class="facebook_popup_close popup_close_act"></div>
	<div class="facebook_popup_holder">
  	<div class="facebook_txt">
  	<h2>100,000 Likes!</h2>
  	<div class="facebook_txt">Congratulations! Today you get an additional <c:out value="${percentage}"/>% discount on all sale items. Thanks to our FB BFFs!*</div>
  	</div>   	
  	</div>
  	<p class="facebook_txt1">*All discounts are automatically applied after signing in with Facebook.</p>
   	<div class="clear_both"></div>
</div> 

<div class="reset_password_success popup_pos popup_pos_act">
    <div class="login_popup_close popup_close_act"></div>
    <div class="ppup_cont_holder">
            <h2>Forgot Password</h2>
                <h3>Check your mail. We sent you a link.</h3>
                  <p>Please make sure you have info@solestruck.com set to an accepted sender so you 
    get the password reset email.</p>  
                 <div class="gry_btn ok_btn popup_close_act">OK</div>
                    
    <div class="clear_both"></div>        
   </div><!-- ppup_cont_holder -->
</div><!-- reset_password_form -->

<div id="backgroundPopup"></div>
<code class="loading_page"></code>
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

<!-- Google Code for Main - New - Global -->
<!-- Remarketing tags may not be associated with personally identifiable information or placed on pages related to sensitive categories. For instructions on adding this tag and more information on the above requirements, read the setup guide: google.com/ads/remarketingsetup -->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 1070046381;
var google_conversion_label = "yGMMCJO-2QMQrbme_gM";
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/1070046381/?value=0&label=yGMMCJO-2QMQrbme_gM&guid=ON&script=0"/>
</div>
</noscript>

<!-- Segment Pixel - SoleStruck--Shopper - DO NOT MODIFY -->
<script src="https://ib.adnxs.com/seg?add=1319617&t=1" type="text/javascript"></script>
<!-- End of Segment Pixel -->

</body>
</html>