<!DOCTYPE html>
<%@ page import="com.veroniqa.frontend.util.VeroniqaConstants"%>
<html>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<head>
<script type='text/javascript'>
window.ClickTaleSettings = { XHRWrapper: { Enable: true} };
</script>
<script type='text/javascript'>
document.write(unescape("%3Cscript%20src='" +
(document.location.protocol == 'https:' ?
'https://clicktale.pantherssl.com/' :
'http://s.clicktale.net/') +
"XHRWrapper.js'%20type='text/javascript'%3E%3C/script%3E"));
</script>
<meta name="googlebot" content="noindex"/>
<meta name="robots" content="noindex,nofollow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Solestruck.com - Sign in to Solestruck</title>

<link rel="shortcut icon" href="https://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" />
<link rel="icon" href="https://commondatastorage.googleapis.com/images2.solestruck.com/gae/favicon.ico" type="image/x-icon" />

<link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_SECURED_URL() %>reset_secured.css" />

<link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_SECURED_URL() %>global_secured.css" />
<link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_SECURED_URL() %>style_secured.css" />
<link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_SECURED_URL() %>form_secured.css" />
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>jquery-1.4.4.min.js" /></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>actions.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>tooltip.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>checkout.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>shoppingcartcheckout.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>jquery.json-2.3.min.js"></script>

<% String imageURL=VeroniqaConstants.IMAGE_URL; %>

<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', '<%=VeroniqaConstants.getAnalyticsID()%>']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
</head>
<body>





	<div id="wrapper">
    	 <div id="header_wrapper">
    	 	
        <div id="header">
        	<a href="#" id="logo"></a>
            	
            <div class="clear_both"></div>
        </div><!-- header -->
        <!--  search_box -->
            <div class="clear_both"></div>
             </div><!-- header_wrapper -->	
             <div class="clear_both"></div>
  
  <h1 class="nb chckout_title_act">Checkout</h1>
  <h1 class="nb chckout_cmplttitle_act">Complete Your Purchase</h1>
 
        
  <div class="content_holder np checkout_content" >
    <div class="payment_process_holder">
      <div class="menu_pathway checkout_pathway">
        <ul>
          <li class="first"><a href="#" class="checkout_1_act selected">1. Your Info</a></li>
          <li class="path_arrow"></li>
          <li><a href="#" class="checkout_2_act">2. Shipping Method</a></li>
          <li class="path_arrow"></li>
          <li class="last"><a href="#" class="checkout_3_act">3. Payment Method</a></li>
        </ul>
        <div class="clear_both"></div>
      </div><!-- menu_pathway -->
      <input type="hidden" id="curPage" name="curPage" value="1"/> 
            
      
      <div class="chckout_yourinfo">
        <form action="" method="post" name="check_out_sign_in" class="check_out_signin_holder">
        <input type="hidden"  id="customerId" name="customerId"   />
            <ul class="checkout_form">
            	<li>
                  <h2>1. Contact Information:<span id="checkout_login">Already A Member? <b>Login Here.</b></span></h2>
                  <div class="short_name_hlder">
                    <h4>Email:</h4>
                        <i> This is a required field.</i><div class="clear_both"></div>
                    <input id="cusEmail"  name="email" type="text" class="input_box input_short" autocorrect = "off"  autocapitalize="off"/>
                    <input id="cusPassword"  name="cusPassword" type="hidden"/>
                  </div>
                   <div class="short_name_hlder">
                    <h4>Phone:</h4>
                    <i> This is a required field.</i><div class="clear_both"></div>
                    <input id="cusPhone"  name="phone" type="text" class="input_box input_short"/>
                  </div>
                  <div class="clear_both"></div>
                   <div class="short_name_hlder" id="newcust_passwd">
                    <h4>Password:</h4>
                    <input id="password"  name="password" type="password" class="input_box input_short"/>
                  </div>
                   <div class="short_name_hlder" id="newcust_passwd_confrm">
                    <h4>Confirm Password:</h4>
                    <input id="confirmpassword"  name="confirmpassword" type="password" class="input_box input_short"/>
                  </div>
                 
                  
                  <div class="short_name_hlder">
                    <h4>First Name:</h4>
                    <i> This is a required field.</i>
                    <div class="clear_both"></div>
                    <input id="cusFirstName" name="fname" type="text" class="input_box input_short"/>
                  </div>
                  <div class="short_name_hlder">
                    <h4>Last Name:</h4>
                    <i> This is a required field.</i>
                    <div class="clear_both"></div>
                    <input id="cusLastName"  name="lname" type="text" class="input_box input_short"/>
                  </div>
                  <div class="clear_both"></div>
                  
                  <div class="clear_both"></div>
                 </li>
                 <li>   
                    <h2>2. Billing Address:</h2>
                      <h4>Address:</h4>
                      <i> This is a required field.</i><div class="clear_both"></div>
                      <input id="billAddress1" name="address1" type="text" class="input_box no_margin"/>
                      <input id="billAddress2" name="address2" type="text" class="input_box no_margin "/>
                      <div class="short_name_hlder">
                          <label>Country:</label>
                            <c:set var="userAgent" value="${fn:toLowerCase(header['User-Agent'])}"/>
                            <input type="hidden" value="${userAgent}"/>
                            <c:choose>
	                            <c:when test="${fn:contains(userAgent,'ipad')||fn:contains(userAgent,'iphone')||
	                            	fn:contains(userAgent,'ipod')||fn:contains(userAgent,'android')||fn:contains(userAgent,'mobile')}">
	                            	
	                            	<div  id="billCountrycode">
		                            	<select id="billCountry">
		                            	  <option id="billingCountry_000" value="Select a country">Select a country</option>
							             <c:forEach items="${countryList}" var="country">
										  <option id="billingCountry_${country.countryCode}" value="${country.countryName}">${country.countryName}</option>
										 </c:forEach>
		                            	</select>
	                            	</div>
	                            </c:when>
	                            <c:otherwise>
	                             <div class="custom_dropdown custom_dropdown_200" id="billCountrycode">
                            	 <input id="billCountry" name="country" type="text" class="input_field_220" value="USA" readonly="readonly" />
                            	 <span class="custom_drop_nav"></span>
	                               <ul>
						             <li id="billingCountry_000">Select a country</li>
						            <c:forEach items="${countryList}" var="country">
									 <li id="billingCountry_${country.countryCode}">${country.countryName}</li>
									</c:forEach>
	                               </ul>
	                              </div><!-- custom_dropdown -->
	                            </c:otherwise>
                            </c:choose>
                        
                         <div class="clear_both"></div>
                     </div><!-- first_name -->
            
                      <div class="short_name_hlder">
                          <label id="billStateLabel">State:</label>
                            <c:choose>
	                            <c:when test="${fn:contains(userAgent,'ipad')||fn:contains(userAgent,'iphone')||
	                            	fn:contains(userAgent,'ipod')||fn:contains(userAgent,'android')||fn:contains(userAgent,'mobile')}">
	                            	<div class="clear_both"></div>

	                            	<div id="billStateHolder">
		                            	<select id="billState">
		                            	  <option id="billingState_00" value="Please Select">Please Select</option>
										<c:forEach items="${stateListUS}" var="stateUS">
										  <option id="billingState_${stateUS.stateCode}" value="${stateUS.stateName}">${stateUS.stateName}</option>
										</c:forEach>
		                            	</select>
	                            	</div>
                        			<div class="clear_both"></div>

                                    <div id="billState1Holder" style='display:none'>
	                                    <select id="billState1">
	                                    	<option id="billingState_01" value="Please Select">Please Select</option>
	                                    	<c:forEach items="${stateListCA}" var="stateCA">
												<option id="billingState_${stateCA.stateCode}" value="${stateCA.stateName}">${stateCA.stateName}</option>
											</c:forEach>
	                                    </select>
                                    </div>
	                            </c:when>
	                            <c:otherwise>
	                              <div class="custom_dropdown custom_dropdown_200"  id="billStateHolder">
	                            		<input id="billState" name="State" type="text" class="input_field_220" value="Please Select" readonly="readonly"/>
	                            		<span class="custom_drop_nav"></span>	                            
			                            <ul>
				 							 <li id="billingState_00">Please Select</li>                
											<c:forEach items="${stateListUS}" var="stateUS">
											 <li id="billingState_${stateUS.stateCode}">${stateUS.stateName}</li>
											</c:forEach>
			                            </ul>
	                             </div><!-- custom_dropdown -->
                 			    <div class="custom_dropdown custom_dropdown_200" id="billState1Holder" style='display:none'>
	                        		<input  id="billState1"  name="State" type="text" class="input_field_220" value="Please Select" readonly="readonly"/>
	                        		<span class="custom_drop_nav"></span>			                        
	                                <ul>
	                                	<li id="billingState_01">Please Select</li>
	                                	<c:forEach items="${stateListCA}" var="stateCA">
											<li id="billingState_${stateCA.stateCode}">${stateCA.stateName}</li>
										</c:forEach>
	                                </ul>
                            	</div>
	                             
	                            </c:otherwise>
                            </c:choose>
                        	
                             
                        <div id='billProvinceHolder' style='display:none' class="short_name_hlder">
    						<input id='billProvince' type="text" class="input_box input_short"/>
						</div>
                         <div class="clear_both"></div>
                     </div><!-- first_name -->
                      <div class="short_name_hlder">
                        <h4>City:</h4>
                        <i> This is a required field.</i><div class="clear_both"></div>
                        <input id="billCity" name="city" type="text" class="input_box input_short"/>
                      </div>
                      <div class="short_name_hlder">
                        <h4 id="billZipLabel">Zip Code:</h4>
                        <i> This is a required field.</i><div class="clear_both"></div>
                        <input id="billZip" name="zip" type="text" class="input_box input_short"/>
                      </div>
                      <div class="clear_both"></div>
                   </li>
                   <li>
                   		<h2>3. Shipping Address</h2>
                        <input type="checkbox" class="email_alerts_check_box same_shpping_address_act" value="" name="" id="ship_add">
                        <label  for="ship_add" id="addressCheck">Shipping address is the same as billing address.</label>
                        <div class="clear_both"></div>
                       <!--   <label class="intrnl_ordr">International orders require the billing & shipping addresses to the be same.</label> -->
                        
                        <div class="clear_both"></div>
						<div class="shipping_same_address_act">                        
                              	<div class="clear_both"></div>
                              	 <div class="short_name_hlder">
                    				<h4>First Name:</h4>
                    				<i> This is a required field.</i><div class="clear_both"></div>
                    				<input id="shipFirstName" name="fname" type="text" class="input_box input_short" />
                 				 </div>
				                 <div class="short_name_hlder">
				                    <h4>Last Name:</h4>
				                    <i> This is a required field.</i><div class="clear_both"></div>
				                    <input id="shipLastName"  name="lname" type="text" class="input_box input_short"/>
				                 </div>
                  				<div class="clear_both"></div>
                  				<h4>Address:</h4>
                  				<i> This is a required field.</i><div class="clear_both"></div>
                              <input id="shipAddress1" name="address1" type="text" class="input_box no_margin"/>
                              <input id="shipAddress2"  name="address2" type="text" class="input_box no_margin "/>
                              <div class="short_name_hlder">
                                  <label>Country:</label>
                                 <c:choose>
		                            <c:when test="${fn:contains(userAgent,'ipad')||fn:contains(userAgent,'iphone')||
		                            	fn:contains(userAgent,'ipod')||fn:contains(userAgent,'android')||fn:contains(userAgent,'mobile')}">
		                        
	                                     <div id="shipCountryCode">
		                                     <select id="shipCountry">
									            <option id="shippingCountry_000" value="Select a country">Select a country</option>
												<c:forEach items="${countryList}" var="country">
													<option id="shippingCountry_${country.countryCode}" value="${country.countryName}">${country.countryName}</option>
												</c:forEach>
		                                     </select>
	                                     </div>
		                            </c:when>
		                            <c:otherwise>
                                    <div class="custom_dropdown custom_dropdown_200" id="shipCountryCode">
                                    <input id="shipCountry"  name="country" type="text" class="input_field_220" value="USA" readonly="readonly" />
                                    <span class="custom_drop_nav"></span>
                                     <ul>
							            <li id="shippingCountry_000">Select a country</li>
										<c:forEach items="${countryList}" var="country">
											<li id="shippingCountry_${country.countryCode}">${country.countryName}</li>
										</c:forEach>
                                     </ul>
                                	</div><!-- custom_dropdown -->
		                            </c:otherwise>
                             	 </c:choose>
            
                                 <div class="clear_both"></div>
                             </div><!-- first_name -->
                    
                              <div class="short_name_hlder">
                                  <label>State:</label>
	                              <c:choose>
		                            <c:when test="${fn:contains(userAgent,'ipad')||fn:contains(userAgent,'iphone')||
		                            	fn:contains(userAgent,'ipod')||fn:contains(userAgent,'android')||fn:contains(userAgent,'mobile')}">
		                            	<div class="clear_both"></div>
		                            	
	                                     <div id="shipStateHolder">
		                                     <select id="shipState">
												<option id="shippingState_00" value="Please Select">Please Select</option>                
					  							<c:forEach items="${stateListUS}" var="stateUS">
													<option id="shippingState_${stateUS.stateCode}" value="${stateUS.stateName}">${stateUS.stateName}</option>
												</c:forEach>
		                                     </select>
	                                     </div>

	                                    <div id="shipState1Holder" style='display:none'>
		                                    <select id="shipState1">
		                                    	<option id="shippingState_01" value="Please Select">Please Select</option>
		                                    	<c:forEach items="${stateListCA}" var="stateCA">
													<option id="shippingState_${stateCA.stateCode}" value="${stateCA.stateName}">${stateCA.stateName}</option>
												</c:forEach>
		                                    </select>
		                                </div>
		                            </c:when>
		                            <c:otherwise>
                                    <div class="custom_dropdown custom_dropdown_200" id="shipStateHolder">
	                                    <input  id="shipState"  name="State" type="text" class="input_field_220" value="Please Select" readonly="readonly"/>
	                                    <span class="custom_drop_nav"></span>
	                                     <ul>
											<li id="shippingState_00">Please Select</li>                
				  							<c:forEach items="${stateListUS}" var="stateUS">
												<li id="shippingState_${stateUS.stateCode}">${stateUS.stateName}</li>
											</c:forEach>
	                                     </ul>
                                	</div><!-- custom_dropdown -->
                                	<div class="custom_dropdown custom_dropdown_200" id="shipState1Holder" style='display:none'>
	                                    <input  id="shipState1"  name="State" type="text" class="input_field_220" value="Please Select" readonly="readonly"/>
	                                    <span class="custom_drop_nav"></span>
	                                    <ul>
	                                    	<li id="shippingState_01">Please Select</li>
	                                    	<c:forEach items="${stateListCA}" var="stateCA">
												<li id="shippingState_${stateCA.stateCode}">${stateCA.stateName}</li>
											</c:forEach>
	                                    </ul>
                                 	</div>   
		                            </c:otherwise>
	                              </c:choose>
                                  
                                <div id='shipProvinceHolder' style='display:none' class="short_name_hlder">
    								<input id='shipProvince' type="text" class="input_box input_short"/>
								</div>
                                 <div class="clear_both"></div>
                             </div><!-- first_name -->
                              <div class="short_name_hlder">
                                <h4>City:</h4>
                                <i> This is a required field.</i><div class="clear_both"></div>
                                <input  id="shipCity" name="city" type="text" class="input_box input_short"/>
                              </div>
                              <div class="short_name_hlder">
                                <h4>Zip Code:</h4>
                                <i> This is a required field.</i><div class="clear_both"></div>
                                <input id="shipZip"  name="zip" type="text" class="input_box input_short"/>
                              </div>
                            </div> <!-- shipping_same_address_act --> 
                          <div class="clear_both"></div>
                       </li>
                       <li class="chkout_last">
                          <h5 id="cusSubTotal"></h5>     
                          
                          <div class="yellow_btn your_info_act"><code class="loading_page"></code>Continue<code class="right_arrow"></code></div>
                          <div class="clear_both"></div>
                       </li>
            </ul>
        </form>
      </div><!-- chckout_yourinfo -->
      
      
      <div class="clear_both"></div>
      <div class="check_out_shipping" >
        <form action="" method="post" name="check_out_sign_in" class="check_out_signin_holder" >
        	<ul class="checkout_form">
            	<li>
                	<h2>1. Select Your Shipping Method:</h2><div class="error_white_space"><i>Please select a shipping method.</i><div class="clear_both"></div></div>
                	<div class="clear_both"></div>
                    <div class="cart_shipping_payment_gateway">
                    <div class="clear_both"></div>
                    <div id='shippingMethods'>
			                    <div id="std">
			                    	
			                    </div>
			                    	
			                    <div id="exp">
			                    	
			                    </div>
			                    
			                    <div id="ovn">
			                    	
			                    </div>
			                    
			                    <div id="int_std">
			                    	
			                    </div>
			                    	
			                    <div id="int_exp">
			                    
			                    </div>
	                                        
	                </div>
                   <!--   <input name="shipping_method" type="checkbox" value="" class="payment_radio_button"  />
                    <span class="require_signature"> Require signature for delivery?</span> -->
                    <div class="clear_both"></div>
                    <h4 class="shipping_alert" id="shipping_alert_domestic">Express Shipping and Overnight Shipping deliver Monday-Friday only.</h4>
                    <div id="shipping_alert_international">
                    <h5 class="shipping_alert">Note: Cost shown is for shipping only.</h5>
                    <p>Your country may add customs fees, taxes, and/or duty once it arrives to you, 
                    and these costs must be paid by customer upon receipt of the package. Please refer
                     to your country's Customs office for more information about their fees and policies.</p>
                     </div>
                    <div class="clear_both"></div>
                    </div><!-- cart_shipping_payment_gateway -->
              </li>
              <li class="chkout_last">
              	  
              	  <span id="ship_SubTotal">Subtotal: $330.00</span>
              	  <span id="ship_shippingPrice">Shipping: $0.00</span>     
                  <h5 id="ship_Total">Total: $330.00</h5>                                     
                 
                  <div class="yellow_btn shipping_act"><code class="loading_page"></code>Continue<code class="right_arrow"></code></div>
                  <div class="clear_both"></div>
                  <a href="#" class="checkout_back_btn shipping_back_act">Back</a>
                  <div class="clear_both"></div>
              </li>
          </ul>
        </form>
      </div><!-- check_out_shipping -->
      
      
      <div class="check_out_payment">
        <form action="" method="post" name="check_out_sign_in" class="check_out_signin_holder">
          <ul class="checkout_form">
          	<!--<li>  
            	<h2 class="fl">1. Gift Card or Discount Code:</h2>
                <span class="gift_code gift_code_act">+ Apply Code</span>
                <div class="discount_code fl">
                    <input type="text" class="input_box input_short" />
                     <span class="gift_code gcode_apply_act">Apply</span>
                     <div class="clear_both"></div>
                     <!--  <span class="ok_icon ok_icon_act ok_error"> Code Applied</span>
                     <div class="error_white_space"><span class="ok_icon ok_icon_act ok_error"> Code Applied</span></div>
                 </div>
                <div class="clear_both"></div>
            </li>-->
          	<li>
              <h2>2. Secure Payment Info:</h2>
              <div class="short_name_hlder">
                <h4>Name On Card:</h4>
                <i> This is a required field.</i><div class="clear_both"></div>
                <input id="cardHoldeName" name="name" type="text" class="input_box input_medium"/>
              </div>
              
               <div class="short_name_hlder card_number_holder">
                  <h4>Card Number:</h4><i> This is a required field.</i><i id="invalid_text_cardNumber"> Not Valid!</i><div class="clear_both"></div>
                  <span class="card_desc">We Take Mastercard, Visa, Discover & Amex</span>
                  <input id="cardNumber" name="cnumber" type="text" class="input_box input_medium"/>
              </div>
             
              <div class="clear_both"></div>
              
               <div class="short_name_hlder exp_holder">
                <h4>Expiration Date:</h4>
                <div class="clear_both"></div>
                 <jsp:useBean id="now" class="java.util.Date" />
                 <fmt:formatDate var="month" value="${now}" pattern="MM" />
                 <fmt:formatDate var="year" value="${now}" pattern="yyyy" />
                 <input type="hidden" id="currentMonth" value="${month}"/>
                 <input type="hidden" id="currentYear" value="${year}"/>
                    <c:choose>
                        <c:when test="${fn:contains(userAgent,'ipad')||fn:contains(userAgent,'iphone')||
                        	fn:contains(userAgent,'ipod')||fn:contains(userAgent,'android')||fn:contains(userAgent,'mobile')}">
		                    <select id="cardExpMonth">
			                     <option value="01">01</option>
			                     <option value="02">02</option>
			                     <option value="03">03</option>
			                     <option value="04">04</option>
			                     <option value="05">05</option>
			                     <option value="06">06</option>
			                     <option value="07">07</option>
			                     <option value="08">08</option>
			                     <option value="09">09</option>
			                     <option value="10">10</option>
			                     <option value="11">11</option>
			                     <option value="12">12</option>                    
		                    </select>
                        </c:when>
                        <c:otherwise>
                             <div class="custom_dropdown">
                   			 	<input id="cardExpMonth" name="Size" type="text" class="select_fields select_popup" value="${month}" readonly="readonly"/>
                   				<span class="custom_drop_nav"></span>
			                    <ul>
				                     <li value="01">01</li>
				                     <li value="02">02</li>
				                     <li value="03">03</li>
				                     <li value="04">04</li>
				                     <li value="05">05</li>
				                     <li value="06">06</li>
				                     <li value="07">07</li>
				                     <li value="08">08</li>
				                     <li value="09">09</li>
				                     <li value="10">10</li>
				                     <li value="11">11</li>
				                     <li value="12">12</li>                    
			                    </ul>
			                   </div><!-- custom_dropdown -->
                        </c:otherwise>
                    </c:choose>                
                    <c:choose>
                        <c:when test="${fn:contains(userAgent,'ipad')||fn:contains(userAgent,'iphone')||
                        	fn:contains(userAgent,'ipod')||fn:contains(userAgent,'android')||fn:contains(userAgent,'mobile')}">
		                   <select id="cardExpYear">
		                      <c:forEach var="i" begin="0" end="15" step="1" varStatus ="status">
		                        	<option value="${year+i}">${year+i}</option>
		                      </c:forEach>                    
		                   </select>
                        </c:when>
                        <c:otherwise>
                          <div class="custom_dropdown">
                   			<input id="cardExpYear" name="Size" type="text" class="select_fields select_popup" value="${year}" readonly="readonly"/>
                   			<span class="custom_drop_nav"></span>
		                    <ul>
		                      <c:forEach var="i" begin="0" end="15" step="1" varStatus ="status">
		                        <li value="${year+i}">${year+i}</li>
		                      </c:forEach>                    
		                    </ul>
		                   </div><!-- custom_dropdown -->
                        </c:otherwise>
                    </c:choose>
              </div>
              <div class="short_name_hlder">
                  <h4 class="fl">Security Number:</h4><i id="invalid_text_security"> Not Valid!</i><div class="clear_both"></div>
                  <span class="card_desc">(3-digits on back, or 4-digits on front of Amex)</span>
                  <input id="cardCCV" name="cnumber" type="text" class="input_box input_short160"/>
                  <span class="sec_num_img"></span>
              </div>
              <div class="clear_both"></div>
             <!--   <div class="select_card_type">
                <h4 style="display:none">Or Pay With:</h4>
                <div class="clear_both"></div>
                <a href="#" class="pay_method" style="display:none"></a>
                <a href="#" class="pay_method check_out_amazon" style="display:none"></a>
                <a href="#" class="pay_method google_checkout" style="display:none"></a>
                <div class="clear_both"></div>
    
                <div class="expiry_date">
       		  </div>
                <!-- expiry_date 
                <div class="clear_both"></div>
              </div>
              <!-- select_card_type -->
              <div class="clear_both"></div>
              </li>
              <li class="chkout_last">
              	  <span id="payment_SubTotal">Subtotal:</span>
              	  <span id="payment_shippingPrice">Shipping: FREE</span>    
                  <h5 id="payment_Total">Total:</h5>
                 <div class="yellow_btn cmplte_purchse_act"><code class="loading_page"></code>Complete Purchase</div>
                 <label id="complete_checkout_error" style="color:red;"></label>
                  <div class="clear_both"></div>
                  <a href="#" class="checkout_back_btn payment_back_act">Back</a>
                  <div class="clear_both"></div>
              </li>
          	
          </ul>
        </form>
      </div><!-- check_out_payment -->
      
      
     <!--   <div class="complete_purchase">
          <ul class="checkout_form">
          	<li>
            	<h2>1. Shipping & Billing Info:</h2>
                <span class="edit_txt shipping_billing_edit_act">Edit</span>
                <div class="clear_both"></div>
                <div class="paypal_billing_info">
                  <h3>Billing Information:</h3>
                  <ul id="selectedBillInfo">
                   
                  </ul>
                </div><!-- paypal_billing_info 
                <div class="paypal_shipping_info">
                  <h3>Shipping Information:</h3>
                  <ul id="selectedShipInfo">
                   
                  </ul>
                </div> <!-- paypal_shipping_info 
                <div class="clear_both"></div>
            </li>    
            <li> 
               <h2>2. Payment Method:</h2>
               <span class="edit_txt pay_method_edit_act">Edit</span>
               <label id="selectedCardNumber" class="email_alerts_label">Mastercard Ending in: 1234</label>
               <div class="clear_both"></div>
               <a href="#" class="pay_method"></a>
               <a href="#" class="pay_method check_out_amazon"></a>
               <a href="#" class="pay_method google_checkout"></a>
               <div class="clear_both"></div>
            </li>
            <li> 
               <h2>3. Shipping Method:</h2>
               <span class="edit_txt shipp_method_edit_act">Edit</span>
               
               <label id="selectedShipServiceInfo" class="email_alerts_label">Standard Shipping - FREE</label>
               <span id="selectedShipDeliveryInfo" class="card_desc thank_you_card_desc">(Should Arrive in 3-5 Business Days)</span>
               <div class="clear_both"></div>
            </li>
              <li class="chkout_last">
              	  <h2>4. All Done. Here's the rundown:</h2>
                  <div class="clear_both"></div>
                  <span id="selectedSubTotal"></span>
                  <span id="selectedShipCharge"></span>
                  <h5 id="selectedFinalTotal"></h5>          
                  <div class="clear_both"></div>         
                 
                  <div class="yellow_btn cmplte_purchse_act"><code class="processing_icon dn"></code>Complete Purchase</div>
                  <label id="complete_checkout_error" style="color:red;"></label>
                  <code class="right_arrow"></code>
                  <div class="clear_both"></div>
              </li>
          </ul>
      </div><!-- complete_purchase -->
      

      <div class="thankyou">
          <ul class="checkout_form">
          	<li>
            	<h2>1. Your Order Info:</h2>
                <div class="clear_both"></div>
                <div class="paypal_billing_info">
                  <h3>Order Number:</h3>
                  <span id="thank_orderNumber" class="card_desc">123498075836929</span>

                  <!--<h3>Order Number:</h3>-->
                  <!--<span class="card_desc">123498075836929</span>-->
                </div><!-- paypal_billing_info -->
                <div class="paypal_shipping_info col2">
                  <h3>Solestruck Account Login:</h3>
                  <p><a href="#">Login</a> for 1-step checkout, order tracking & other features</p>
                  <span><b>Username:</b> <span id="thank_userName">evan.bowers@solestruck.com</span></span>
                   <span><b>Password:</b> Check email for your password.</span>
                </div> <!-- paypal_shipping_info -->
                <div class="clear_both"></div>
            </li>    
          	<li>
            	<h2>2. Shipping & Billing Info:</h2>
                <div class="clear_both"></div>
                <div class="paypal_billing_info">
                  <h3>Billing Information:</h3>
                  <ul id="thank_billingInfo">
                    <li>Evan Bowers</li>
                    <li>5741 SE 17th Ave. Apt. 1</li>
                    <li>Portland, Oregon 97202</li>
                  </ul>
                </div><!-- paypal_billing_info -->
                <div class="paypal_shipping_info">
                  <h3>Shipping Information:</h3>
                  <ul id="thank_shippingInfo">
                    <li>Evan Bowers</li>
                    <li>5741 SE 17th Ave. Apt. 1</li>
                    <li>Portland, Oregon 97202</li>
                  </ul>
                </div> <!-- paypal_shipping_info -->
                <div class="clear_both"></div>
            </li>    
            <li> 
               <h2>3. Payment Method:</h2>
               <div class="clear_both"></div>
               <label id="thank_cartLast5Digits" class="email_alerts_label">Mastercard Ending in: 1234</label>
               <a href="#" class="pay_method"></a>
               <a href="#" class="pay_method check_out_amazon"></a>
               <a href="#" class="pay_method google_checkout"></a>
               <div class="clear_both"></div>
            </li>
            <li> 
               <h2>4. Shipping Method:</h2>
               <div class="clear_both"></div>
               <label id="thank_shippingService" class="email_alerts_label">Standard Shipping - FREE</label>
               <span id="thank_shippingDelivery" class="card_desc">(Should Arrive in 3-5 Business Days)</span>
               <div class="clear_both"></div>
            </li>
              <li class="chkout_last">
              	  <h2>Final Total:</h2>
                  <span id="thank_subtotal">Subtotal: $330.00</span>
                  <span id="thank_shippingPrice">Shipping: FREE</span>     
                  <h5 id="thank_yourSubTotal">Total: $330.00 </h5>          
                  <div class="clear_both"></div>
              </li>
          </ul>
      </div><!-- complete_purchase -->
      
            
      <div class="clear_both"></div>
    </div><!-- payment_process_holder -->
	<div class="checkout_your_shoppingcart">
		<div class="checkout_shppingcart_header">
			<h3>Your Cart</h3>&nbsp;&nbsp;<h2 id="no_items_msg" style="display:none;color:red;">No items in cart</h2>
 			<div class="clear_both"></div>
		</div>
		<ul id="cartItems">
		</ul>
    </div>
    <div class="clear_both"></div>
      <div class="need_help_bar">
        <h3>I Need Help!</h3>
        <p>Call us M-F 7A-5P PST at 1.800.494.1260 <a href="/redirectToNonSecurePage.htm?rdirectURL=loadCustomerServicePage.htm?page=Returns" target="_blank">60 Day Easy Returns</a></p>
      </div><!-- need_help_bar -->
  </div> <!-- content_holder -->                            
	
<div class="clear_both"></div>	
    </div><!-- wrapper -->
   <div class="login_form popup_pos popup_pos_act kgpopup_act">
        <div class="login_popup_close popup_close_act"></div>
            <div class="ppup_cont_holder">
                <h2>Login</h2>
                
                <h4> Welcome Back! Please login for faster checkout. </h4>
                <form action="" method="post" name="login" class="login_form_holder">
                    <label class="login_inputfields">Email:</label><i id="rqFld_login_email" style="display:none;" >This field is required</i><div class="clear_both" ></div>
                    <input id="userEmailId" name="email_login" type="text" class="input_box" id="email_login"  autocorrect = "off"  autocapitalize="off"/>
                    <label class="login_password">Password:</label><i id="rqFld_login_password" style="display:none;" >Enter your password</i><div class="clear_both" ></div>
                    <input  id="userPassword" name="pass" type="password" class="input_box" id="pass" />
                    <input name="keep_me_signin" type="checkbox" class="login_check_box" id="keep_me_sign_in" value="" /><lable>Keep me signed in.</lable><div id="loginmsg"></div>
                    <div class="gry_btn fl" id="checkout_login_button" >Login<code class="popup_processing_icon"></code></div><div class="clear_both"></div>
					<i id="invalid_label" class="invalid_user_password" style="display:none;" > Invalid username / password </i>
					<div class="clear_both"></div>
                    <a href="#" class="form_link" onclick="showForgotPassword();">Forgot Password?</a> <span class="form_link">|</span> <a href="#" class="form_link" onclick="createNewAccount();">No Account? Sign Up Now.</a>
                </form>
        <div class="clear_both"></div>        
        </div><!-- login_holder -->
    </div><!-- login_form -->
    

    <div class="forgot_password_form popup_pos kgpopup_act" style="display:none">
        <div class="login_popup_close popup_close_act"></div>
            <div class="ppup_cont_holder">
                <h2>Forgot Password</h2>
                <form action="" method="post" name="login" class="login_form_holder">
                <label class="login_inputfields">Your Email:</label><i id="forgot_invalid_label" class="invalid_user_password" style="display:none;" > Please enter your email </i><div class="clear_both" ></div>
                <input name="email" type="text" class="input_box" id="forgot_emailId" autocorrect = "off"  autocapitalize="off" />
                <p>Please make sure you have <a href="mailto:customerservice@solestruck.com">customerservice@solestruck.com</a> set to an accepted sender so you 
                get the password reset email.</p>
                <input name="reset_password" type="button" value="Reset Password" class="gry_btn" onclick="resetPassword();"/>
                </form>
                <div class="clear_both"></div>        
        </div><!-- ppup_cont_holder -->
    </div><!-- forgot_password_form -->
    
    <!-- For Australia,singspore,hongkong--YOUVE BEEN SOLESTRUCK -->
    <div class="free_fedshipping_popup free_shipping_popup popup_pos popup_pos_act kgpopup_act" id="free_fedshipping_popup">
        <div class="login_popup_close popup_close_act"></div>
            <div class="login_holder free_shipping_holder">
                <h2>You've Been Solestruck!</h2>
                <div class="free_shipping_content">
                    

                    <p>We're footing the bill for <b>FedEx Express International Shippping</b> on your order. That's right, <b>FREE</b> FedEx International Shipping!</p>
     				<p>If you love the shoes and the fast service, please give us a shout out to help us rid the world of ugly shoes one pair at a time.</p>
     				<h3>Thanks for shopping with Solestruck.</h3>
     				<a id="contn_shpbtn " onclick="hidefreeshippingpopup();" class="brw_btn">Continue Checkout</a>
                    
                      
                    
                    <div class="clear_both"></div> 
                </div><!-- free_fedshipping_content -->
        </div><!-- login_holder -->
    </div><!-- free_fedshipping_popup -->
    
    
    
    
    
   
<input type="hidden" id="httprefer" value="<%=request.getHeader("Referer")%>"/>
<input type="hidden" id="returnCustomerStatus" value="false" />
<div class="loadingMessage"></div>
<div id="backgroundPopup" style="display:none"></div>


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


 
</body>
</html>