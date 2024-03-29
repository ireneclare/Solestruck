
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page import="com.veroniqa.frontend.util.VeroniqaConstants"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="sr" uri="http://solestruck.com/resources" %>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Checkout-Shipping</title>

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

var _gaq = _gaq || [];
var pluginUrl = 
 '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
_gaq.push(['_require', 'inpage_linkid', pluginUrl]);
_gaq.push(['_setAccount', '<%=VeroniqaConstants.getAnalyticsID()%>']);
_gaq.push(['_trackPageview']);

(function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();

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
          <li class="first"><a href="#" class="checkout_1_act">Account Info</a></li>
          <li class="path_arrow"></li>
          <li><a href="#" class="checkout_2_act selected">Shipping Method</a></li>
          <li class="path_arrow"></li>
          <li class="last"><a href="#" class="checkout_3_act">Payment Method</a></li>
        </ul>
        <div class="clear_both"></div>
      </div><!-- menu_pathway -->
     
      <input id="currentStep" type="hidden" value="3"/>  
      <input id="poexists" type="hidden" value="${poexists}"/>
      <input id="lastStep" type="hidden" value="${CHECKOUT_DETAILS.checkoutStep}"/>
      <input id="shipCountryCode" type="hidden" value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.country}"/>
     <div class="payment_process_content"> 
     <span class="checkout_error" id="error_shipping" style="display:none">Please Select Any Shipping Method</span>
      <c:choose>
      	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.country=='US'}">
	      <div class="newcheck_out_shipping" style="display:block;">
	        <form action="" method="post" name="check_out_sign_in" class="check_out_signin_holder" >
	        	<div class="shipping_method_holder">
	            	<div class="cart_shipping_payment_gateway">
		            		<c:forEach items="${SHIPPING_SERVICES}" var="service" varStatus="status">
		            			<fmt:formatNumber var="shipPriceText" value="${service.totalShippingPrice}" pattern="$0.00"/>
		            			
		            			<c:if test="${service.zone.deliveryDaysLowerLimit>0}">
		            				<c:set var="deliveryDays" value="${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days"/>
		            			</c:if>
		            			
		            			
		            			<c:if test="${service.zone.deliveryDaysLowerLimit==0 && service.zone.deliveryDaysUpperLimit>1}">
		            				<c:set var="deliveryDays" value="${service.zone.deliveryDaysUpperLimit} Business Days"/>
		            			</c:if>
		            			
		            			<c:if test="${service.zone.deliveryDaysLowerLimit==0 && service.zone.deliveryDaysUpperLimit==1}">
		            				<c:set var="deliveryDays" value="${service.zone.deliveryDaysUpperLimit} Business Day"/>
		            			</c:if>
		            			
		            			
		            			<c:set var="freeLimitText" value=""/>
		            			<c:if test="${service.totalShippingPrice==0.0}">
		            				<c:set var="shipPriceText" value="FREE"/>
		            			</c:if>
		            			<c:if test="${service.zone.freeLimit!=null && service.zone.freeLimit>0.0}">
		            				<fmt:formatNumber var="freeLimitText" value="${service.zone.freeLimit}" pattern="0.00"/>
		            				<c:set var="freeLimitText" value="FREE on all orders over $${freeLimitText}!"/>
		            				<input type="hidden" name="freeLimit" value="${service.zone.freeLimit}"/>
		            			</c:if>
		            			<div class="shipping_btn_holder">
			                    	<label>
			                    		<c:choose>
			                    		<c:when test="${CHECKOUT_DETAILS!=null && CHECKOUT_DETAILS.shippingServiceZoneId!=null}">
			                    			<c:if test="${CHECKOUT_DETAILS.shippingServiceZoneId==service.zone.key.id}">
			                    				<input name="shipping_method" type="radio" value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}" class="shipping_radio_button radio_select_act" checked="checked"/>
			                    			</c:if>
			                    			<c:if test="${CHECKOUT_DETAILS.shippingServiceZoneId!=service.zone.key.id}">
			                    				<input name="shipping_method" type="radio" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}" value="${service.zone.key.id}" class="shipping_radio_button radio_select_act"/>
			                    			</c:if>
			                    		</c:when>
			                    		<c:otherwise>
			                    			<c:if test="${status.index==0}">
			                    				<input name="shipping_method" type="radio" value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}" class="shipping_radio_button radio_select_act" checked="checked"/>
			                    			</c:if>
			                    			<c:if test="${status.index!=0}">
			                    				<input name="shipping_method" type="radio" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}" value="${service.zone.key.id}" class="shipping_radio_button radio_select_act"/>
			                    			</c:if>
			                    			
			                    		</c:otherwise>
			                    		</c:choose>
			                    		${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} - <b id="ship_price_${service.zone.key.id}">${shipPriceText}</b>
			                        </label>
			                        <div class="clear_both"></div>
			                        <span>Estimated Delivery: ${deliveryDays} <c:if test="${freeLimitText!=''}">| ${freeLimitText}</c:if></span>
		                    	</div>
		                    <div class="clear_both"></div>
		            			
		            		</c:forEach>
	                    
	                    <div class="check_box_holder">
	                    	<label class="require_signature">
	                        	<input id="deliverySign" name="shipping_method123" type="checkbox" value="" class="fl"  />
	                        	Require signature for delivery?
	                        </label>
	                        <div class="clear_both"></div>
	                    </div><!-- check_box_holder -->
	                    <c:if test="${poexists eq true }">
	                    <h4 class="shipping_alert">Express Shipping deliver Monday - Friday only.</h4>
	                    </c:if>
	                     <c:if test="${poexists eq false }">
	                    <h4 class="shipping_alert">Express Shipping and Standard Overnight deliver Monday - Friday only.</h4>
	                    </c:if>
	                    <div class="clear_both"></div>
	                  </div>
	                  <div class="mrw_btn newcheck_out_shipping_act" id="shipping_method_btn">
	                 	Continue
	                    <code class="wht_rt_arrow"></code>
	                 </div>
	            </div><!-- shipping_method_holder -->
	        </form>
	      </div>
      	</c:when>
      	<c:otherwise>
	      <div class="intrntional_shipping"  style="display:block;">
		        <form action="" method="post" name="check_out_sign_in" class="check_out_signin_holder" >
		        	<div class="shipping_method_holder">
		            	<div class="cart_shipping_payment_gateway">
		                    
		            		<c:forEach items="${SHIPPING_SERVICES}" var="service" varStatus="status">
		            			<fmt:formatNumber var="shipPriceText" value="${service.totalShippingPrice}" pattern="$0.00"/>
		            			
		            			<c:set var="deliveryDays" value="${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days"/>
		            			<c:set var="freeLimitText" value=""/>
		            			<c:if test="${service.totalShippingPrice==0.0}">
		            				<c:set var="shipPriceText" value="FREE"/>
		            			</c:if>
		            			<c:if test="${service.zone.deliveryDaysUpperLimit<=1}">
		            				<c:set var="deliveryDays" value="${service.zone.deliveryDaysUpperLimit} Business Day"/>
		            			</c:if>
		            			<c:if test="${service.zone.freeLimit!=null && service.zone.freeLimit>0.0}">
		            				<fmt:formatNumber var="freeLimitText" value="${service.zone.freeLimit}" pattern="0"/>
		            				<c:set var="freeLimitText" value="FREE on all orders over $${freeLimitText}!"/>
		            				<input type="hidden" name="freeLimit" value="${service.zone.freeLimit}"/>
		            			</c:if>
		            			<div class="shipping_btn_holder">
			                    	<label>
			                    		<c:choose>
			                    		<c:when test="${CHECKOUT_DETAILS!=null && CHECKOUT_DETAILS.shippingServiceZoneId!=null}">
			                    			<c:if test="${CHECKOUT_DETAILS.shippingServiceZoneId==service.zone.key.id}">
			                    				<input name="shipping_method" type="radio" value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}" class="shipping_radio_button radio_select_act" checked="checked"/>
			                    			</c:if>
			                    			<c:if test="${CHECKOUT_DETAILS.shippingServiceZoneId!=service.zone.key.id}">
			                    				<input name="shipping_method" type="radio" value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}" class="shipping_radio_button radio_select_act"/>
			                    			</c:if>
			                    		</c:when>
			                    		<c:otherwise>
			                    			<c:if test="${status.index==0}">
			                    				<input name="shipping_method" type="radio" value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}" class="shipping_radio_button radio_select_act" checked="checked"/>
			                    			</c:if>
			                    			<c:if test="${status.index!=0}">
			                    				<input name="shipping_method" type="radio" value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}" class="shipping_radio_button radio_select_act"/>
			                    			</c:if>
			                    		</c:otherwise>
			                    		</c:choose>
			                    		${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} - <b id="ship_price_${service.zone.key.id}">${shipPriceText}</b>
			                        </label>
			                        <div class="clear_both"></div>
			                        <span>Estimated Delivery: ${deliveryDays} <c:if test="${freeLimitText!=''}">| ${freeLimitText}</c:if></span>
		                    	</div>
		                    <div class="clear_both"></div>
		            			
		            		</c:forEach>
		                    <div class="check_box_holder" style="display:none;">
		                    	<label class="require_signature">
		                        	<input id="deliverySign" name="shipping_method123" type="checkbox" value="" class="fl"  />
		                        	Require signature for delivery?
		                        </label>
		                        <div class="clear_both"></div>
		                    </div><!-- check_box_holder -->
		                    <h4 class="shipping_alert">Note: Cost shown is for shipping only.</h4>
		                    <p>Your country may add customs fees, taxes, and/or duty once it arrives to you, and these costs must be paid by customer upon receipt of the package. Please refer to your country's customs office for more information about their fees and policies.</p>
		
		                    <!-- <p class="last"><a href="#">Click here</a> for more details about international ordering.</p> -->
		                    <div class="clear_both"></div>
		                  </div>
		                  <div class="mrw_btn intrntional_shipping_act" id="shipping_method_btn">
		                 	Continue
		                    <code class="wht_rt_arrow"></code>
		                 </div>
		            </div><!-- shipping_method_holder -->
		        </form>
	      	</div>
      	</c:otherwise>
      </c:choose>
      
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

<!-- For Australia,singspore,hongkong--YOUVE BEEN SOLESTRUCK -->
<div class="free_fedshipping_popup free_shipping_popup popup_pos popup_pos_act kgpopup_act" id="free_fedshipping_popup">
    <div class="login_popup_close popup_close_act"></div>
        <div class="login_holder free_shipping_holder">
            <h2>You've Been Solestruck!</h2>
            <div class="free_shipping_content">
                <p>We're footing the bill for <b>FedEx Express International Shippping</b> on your order. That's right, <b>FREE</b> FedEx International Shipping!</p>
 				<p>If you love the shoes and the fast service, please give us a shout out to help us rid the world of ugly shoes one pair at a time.</p>
 				<h3>Thanks for shopping with Solestruck.</h3>
 				<a id="contn_shpbtn" onclick="hidefreeshippingpopup();" class="brw_btn">Continue Checkout</a>
                <div class="clear_both"></div> 
            </div><!-- free_fedshipping_content -->
    </div><!-- login_holder -->
</div><!-- free_fedshipping_popup -->


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
