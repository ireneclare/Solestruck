
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

<link type="text/css" href='https://fonts.googleapis.com/css?family=Permanent+Marker' rel="stylesheet" />
<link href='https://fonts.googleapis.com/css?family=Karla:400,700italic' rel='stylesheet' type='text/css' />
<link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_SECURED_URL() %>new_reset.css"  />
<link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_SECURED_URL() %>new_checkout.css" />

<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>jquery-1.5.2.min.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>shoppingcartcheckout.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>expresscheckout.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>jquery.json-2.3.min.js"></script>
<!-- <link rel="icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" /> -->
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
<c:set var="imageServerURL" value="https://commondatastorage.googleapis.com/images2.solestruck.com"/>
<c:set var="discountprogram" value="${sr:getDiscountProgramForFB()}"></c:set>
<c:if test="${discountprogram ne null}">
	<input type="hidden" id="fbsale_discount_percentage" value="${discountprogram.discountPercentage}"/>
	<input type="hidden" id="discountTypeName" value="${discountprogram.programTypeName}"></input>
	<input type="hidden" id="discountExists" value="true"></input>
</c:if>
<input type="hidden" id="thresholdSize" value="${sr:getThresholdSize()}"/>
<c:set var="thresholdLimitsAndValues" value="${sr:getThresholdValues()}"></c:set>
<c:forEach var="thresholdValues" items="${thresholdLimitsAndValues}" varStatus="status">
	<input type="hidden" id="minLimits_${status.count}" value="${thresholdValues.thresholdMin}">
	<input type="hidden" id="maxLimits_${status.count}" value="${thresholdValues.thresholdMax}">
	<input type="hidden" id="discountValues_${status.count}" value="${thresholdValues.thresholdDiscount}"> 
</c:forEach>
<div class="top_bar">
    		<div class="top_headder">
            		<a href="/redirectToNonSecurePage.htm?rdirectURL=/" class="logo"></a>
                    <%-- <code class="sale_need_help check_faq_act" id="saleFAQ" style="display:none;"></code> --%>
                    <span class="help_holder"><b>NEED HELP?</b> Click Here To Email US 24/7 <br> Call US @ 800.494.1260 |  M-F 7am - 5 pm Pacific</span>
                    <div class="clearall"></div>
            </div><!--top_headder-->
    </div>
    	
<div class="wrapper" id="wrapper">
<div class="chk_left">
<div class="paying_checkout" style="display: block;">

	<div id="swag_holder" style="display:none">
    	<h3>Want some rad Solestruck swag?</h3>
    	<h2>Check out these goodies! Available for a super-limited time, so ...</h2>
    	<h4>GET ON IT, BABES!</h4>
    	<ul>
    		<li class="omgshoes"><h1>IPHONE 4 CASE</h1></li>
    		<li class="shoeaddict middle"><h1>IPHONE 5 CASE</h1></li>
    		<li class="cancoozy"><h1>OTTER WAX</h1></li>
    	</ul>
    	
    	<div class="custom_select cus_select swag_color_select_dd">
    		<div class="select">
    			<p class="country" id="alert4">SELECT STYLE</p>
    			<span class="custom_drop_nav"></span>
    		</div>
    		<select class="custom_select_value_act" name="" id="case4">
    			<option value="">SELECT STYLE</option>
    			<option value="">#OMGSHOES</option>
    			<option value="">#SHOEADDICT</option>
    		</select>
    	</div>
    	
    	<div class="custom_select cus_select swag_color_select_dd">
    		<div class="select">
    			<p class="country" id="alert5">SELECT STYLE</p>
    			<span class="custom_drop_nav"></span>
    		</div>
    		<select class="custom_select_value_act" name="" id="case5">
    			<option value="">SELECT STYLE</option>
    			<option value="">#OMGSHOES</option>
    			<option value="">#SHOEADDICT</option>
    		</select>
    	</div>
    	<span class="cankoozie_text">LEATHER CARE KIT</span>
    	<div class="clear_both"></div>
    	<span class="omgshoes_span brwn_btn" onclick="addItemToCheckoutShoppingCart('iphone4')">+ CART ($5)</span>
    	<span class="shoeaddict_span brwn_btn" onclick="addItemToCheckoutShoppingCart('iphone5')">+ CART ($5)</span>
    	<span class="cancoozy_span brwn_btn" onclick="addItemToCheckoutShoppingCart('koozie')">+ CART ($${KoozieDTO.retailPrice})</span>
    </div>

	  <h5>PAYING WITH:</h5>
	  <code class="paypal_icon"></code>
	  <h6>SHIPPING METHOD:</h6>
      <input id="shipCountryCode" type="hidden" value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.country}"/>
	  <input type="hidden" id="shipstatecode" value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.state}" />
	  <input type="hidden" id="express_token" value="${TOKEN}" />
	  <input id="currentStep" type="hidden" value="3"/>
	  <input type="hidden" id="orderid_hidden" value="${CHECKOUT_DETAILS.shoppingCart.orderId}" />
     <c:set var="firstShippingMethod" value=""/>
<div class="custom_select shipping_method_dwn">
         <div class="select  input_dwn" id="display_shippingmethod">
             <p id="Shippingmethod">Please Select A Shipping Method...</p>
             <span class="custom_drop_nav"></span>
         </div>
<c:choose>

      								<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.country=='US'}">
      								 
                                    <select name="Shippingmethod" data-default="Austria" class="custom_select_value_act" id="shippingmethods">
                                     <option selected="selected" name="shipping_method"  >Please Select A Shipping Method...</option>
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
			            				<c:if test="${status.index==0}">
			            				<c:choose>
			            				<c:when test="${service.zone.deliveryDaysLowerLimit!=0}">
			            					<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)"/>
			            				</c:when>
			            				<c:otherwise>
			            				<c:choose>
				            				<c:when test="${service.zone.deliveryDaysUpperLimit>=2}">
				            					<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} ${service.zone.deliveryDaysUpperLimit} Business Days)"/>
				            				</c:when>
				            				<c:otherwise>
				            					<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} ${service.zone.deliveryDaysUpperLimit} Business Days)"/>
				            				</c:otherwise>
				            				</c:choose>
			            				</c:otherwise>
			            				</c:choose>
			                 	   </c:if>
		                    		<c:choose>
		                    		<c:when test="${CHECKOUT_DETAILS!=null && CHECKOUT_DETAILS.shippingServiceZoneId!=null}">
		                    			<c:if test="${CHECKOUT_DETAILS.shippingServiceZoneId==service.zone.key.id}">
		                    			
		                    				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysLowerLimit!=0}">
						            				<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)"/>
						            					<option  name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysUpperLimit>=2}">
						            				<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} ${service.zone.deliveryDaysUpperLimit} Business Days)"/>
						            					<option  name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            					<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} ${service.zone.deliveryDaysUpperLimit} Business Days)"/>
						            					<option  name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Day)</option>
						            				</c:otherwise>
						            				</c:choose>
						            					
						            				</c:otherwise>
					            				</c:choose>
		                    			</c:if>
		                    			<c:if test="${CHECKOUT_DETAILS.shippingServiceZoneId!=service.zone.key.id}">
		                    				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysLowerLimit!=0}">
						            					<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            					<c:choose>
						            				<c:when test="${service.zone.deliveryDaysUpperLimit >=2 }">
						            					<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Day)</option>
						            				</c:otherwise>
						            				</c:choose>
						            				</c:otherwise>
					            				</c:choose>
		                    			</c:if>
		                    		</c:when>
		                    		<c:otherwise>
		                    			<c:if test="${status.index==0}">
		                    				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysLowerLimit!=0}">
						            					<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysUpperLimit >=2 }">
						            					<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Day)</option>
						            				</c:otherwise>
						            				</c:choose>
						            				</c:otherwise>
					            				</c:choose>
		                    			</c:if>
		                    			<c:if test="${status.index!=0}">
		                    				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysLowerLimit!=0}">
						            					<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysUpperLimit >=2 }">
						            					<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Day)</option>
						            				</c:otherwise>
						            				</c:choose>
						            					
						            				</c:otherwise>
					            				</c:choose>
		                    			</c:if>
		                    		</c:otherwise>
		                    		</c:choose>
		            			</c:forEach>
                                    </select>
                                    </c:when>
                                    <c:otherwise>
                                <select name="Shippingmethod" data-default="Austria" class="custom_select_value_act" id="shippingmethods">
                            	  <option selected="selected" name="shipping_method"  >Please Select A Shipping Method...</option>
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
			            				<%-- <input type="hidden" name="freeLimit" value="${service.zone.freeLimit}"/> --%>
			            			</c:if>
			            			<c:if test="${status.index==0}">
			            				<c:choose>
			            				<c:when test="${service.zone.deliveryDaysLowerLimit!=0}">
			            					<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)"/>
			            				</c:when>
			            				<c:otherwise>
			            					<c:choose>
			            					<c:when test="${service.zone.deliveryDaysUpperLimit>=2}">
			            						<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} ${service.zone.deliveryDaysUpperLimit} Business Days)"/>
			            					</c:when>
			            					<c:otherwise>
			            					<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} ${service.zone.deliveryDaysUpperLimit} Business Day)"/>
			            					</c:otherwise>
			            					</c:choose>
			            				</c:otherwise>
			            				</c:choose>
			                 	   </c:if>
		                    		<c:choose>
			                    		<c:when test="${CHECKOUT_DETAILS!=null && CHECKOUT_DETAILS.shippingServiceZoneId!=null}">
			                    			<c:if test="${CHECKOUT_DETAILS.shippingServiceZoneId==service.zone.key.id}">
			                    				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysLowerLimit!=0}">
						            				<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)"/>
						            					<option  name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysUpperLimit>=2}">
						            				<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} ${service.zone.deliveryDaysUpperLimit} Business Days)"/>
						            					<option  name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} ${service.zone.deliveryDaysUpperLimit} Business Day)"/>
						            					<option  name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Day)</option>
						            				</c:otherwise>
						            				</c:choose>
						            					
						            				</c:otherwise>
					            				</c:choose>
			            
			                    			</c:if>
			                    			<c:if test="${CHECKOUT_DETAILS.shippingServiceZoneId!=service.zone.key.id}">
			                    				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysLowerLimit!=0}">
						            					<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysUpperLimit >=2 }">
						            					<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Day)</option>
						            				</c:otherwise>
						            				</c:choose>
						            				</c:otherwise>
					            				</c:choose>
			                    			</c:if>
			                    		</c:when>
			                    		<c:otherwise>
			                    			<c:if test="${status.index==0}">
			                    				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysLowerLimit!=0}">
						            					<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysUpperLimit >=2}">
						            					<option  name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            					<option  name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Day)</option>
						            				</c:otherwise>
						            				</c:choose>
						            				</c:otherwise>
					            				</c:choose>
			                    			</c:if>
			                    			<c:if test="${status.index!=0}">
			                    				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysLowerLimit!=0}">
						            					<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysUpperLimit>=2}">
						            				<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Day)</option>
						            				</c:otherwise>
						            				</c:choose>
						            				</c:otherwise>
					            				</c:choose>
			                    			</c:if>
			                    		</c:otherwise>
		                    		</c:choose>
		            			</c:forEach>
		            			</select>
                                    </c:otherwise>
                                    </c:choose>
      </div><!-- shipping_method -->
  <code class="" id="shippingmethod_error"></code>
<c:if test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.countryName == 'USA'}">
	<font class="checkbox" id="deliverySign" >REQUIRE SIGNATURE FOR DELIVERY?</font>
</c:if>
<div class="important_shipping" >
<h1>IMPORTANT SHIPPING NOTES</h1>
	<c:choose>
	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.country=='US'}">
		<span class="import_fspan" style="display: block;" id="shipping_text">Express Shipping & Overnight deliver Monday - Friday Only.</span>
		<span class="import_sspan" style="display: none;">
		 	Cost shown is for shipping only. Your country may add customs fees, taxes, 
		     and/or duty once it arrives to you, and these costs must be paid by customer 
		     upon receipt of the package. Please refer to your country's customs office for 
		     more information about their fees and policies.
		</span>
	</c:when>
	<c:otherwise>
		<span class="import_fspan" style="display: none;" id="shipping_text">Express Shipping & Overnight deliver Monday - Friday Only.</span>
		<span class="import_sspan" style="display: block;">
		 	Cost shown is for shipping only. Your country may add customs fees, taxes, 
		     and/or duty once it arrives to you, and these costs must be paid by customer 
		     upon receipt of the package. Please refer to your country's customs office for 
		     more information about their fees and policies.
		</span>
	</c:otherwise>
	</c:choose>
</div>
 <div id="card_payment_holder" class="paypal_card_payment_holder">
<span class="checkout_error paypal_error" id="checkout_payment_err" style="display:none;">Invalid Data</span>
<a class="yellow_btn exp_complete_purchase_act yell_btn" onclick="validateAndCompletePurchase_Express();" style="cursor: pointer;">
COMPLETE PURCHASE
</a>
</div>
<div class="clearall"></div>      
</div>
 <c:choose>
<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.countryName!='USA'}">
 <b class="days" style="display: none;" >60 DAY EASY RETURNS</b><br />
</c:when>
<c:otherwise>
  <b class="days" >60 DAY EASY RETURNS</b><br />
</c:otherwise>
</c:choose>
 <c:choose>
	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.countryName!='USA'}">
	 <div class="shipping_return" style="display: none;"><b>FREE</b> Standard Shipping on US & Canada orders!<br /><b>FREE</b> Standard Shipping on International orders over $199!</div>
	</c:when>
	<c:otherwise>
	  <div class="shipping_return"><b>FREE</b> Standard Shipping on US & Canada orders!<br /><b>FREE</b> Standard Shipping on International orders over $199!</div>
	</c:otherwise>
</c:choose>
</div>
<jsp:include page="/pages/ShoppingCart.jsp"/>  
<%-- <div class="chk_right">
            		<h2>YOUR CART</h2>
                    <ul id="cartItems" >
                     <c:forEach items="${CART_DETAILS.shoppingCart.lineItems}" var="lineItem">
					  <c:set var="vendorName" value="${fn:replace(lineItem.vendorName,\" \",\"-\")}"/>
					  <c:set var="productName" value="${fn:replace(lineItem.productName,\" \",\"-\")}"/>
					  <c:set var="colorName" value="${fn:replace(lineItem.colorName,\" \",\"-\")}"/>
					  <c:set var="vendorNameInLower" value="${fn:toLowerCase(vendorName)}"/>
					  <c:set var="productImageURL" value="${imageServerURL}/${vendorNameInLower}-shoes/${vendorName}-shoes-${productName}-(${colorName})-010307.jpg"/>
					  <c:set var="solestruck_magazine" value="${fn:replace(lineItem.vendorName,\" \",\"-\")}"/>
						 <c:if test="${solestruck_magazine=='Solestruck-Magazine'}">
						 	 <c:set var="Solestruck_Magazine" value="${solestruck_magazine}"/>
						 </c:if>
					 
					  <input type="hidden" value="${productImageURL}"/>
                    	<li id="item_${lineItem.sequenceId}" >
                    	 <div class="checkout_error" id="message_${lineItem.sequenceId}" style="display:none;">
							<h4>Ah Snap! The last pair were just taken.</h4>
							<p>Let us <u>Email You</u> when we get more in.</p>
			        	  </div>
			        	  
                        	<div class="cart_shoe_list">
                            	<img id="image_${lineItem.sequenceId}" src="${productImageURL}" border="0" width="120" height="90" />
                                <div class="cart_shoe_dts">
                                	<b id="productName_${lineItem.sequenceId}" name="${lineItem.productName}" >${fn:toUpperCase(lineItem.productName)}</b><br />
                                	<span id="vendorName_${lineItem.sequenceId}" name="${lineItem.vendorName}" >${fn:toUpperCase(lineItem.vendorName)}</span>
                                    <h1>
									<c:if test="${lineItem.isPreOrder}">
										<span id="preOrder_${lineItem.sequenceId}">(PRE-ORDER)</span>
									</c:if>
									<c:if test="${!lineItem.isPreOrder}">
										<span id="preOrder_${lineItem.sequenceId}">(IN STOCK)</span>
									</c:if>
									<c:set var="saleexecuted" value="false"></c:set>
									<c:if test="${!lineItem.isSale}"><span id="sale_${lineItem.sequenceId}" style="display:none;" >SALE</span></c:if> 
									 <c:if test="${lineItem.isSale && ((cookie['Facebook'] ne null && cookie['Facebook'].value == 'Facebook')|| applyDiscount eq true || cookieExists eq false) && discountprogram ne null && saleexecuted eq false}"> <span id="sale_${lineItem.sequenceId}" >(Final Sale)</span> 
									 	<c:set var="saleexecuted" value="true"></c:set>
									 </c:if>
									 <c:if test="${lineItem.isSale && cookie['Facebook'] eq null && saleexecuted eq false}"> <span id="sale_${lineItem.sequenceId}" >SALE</span></c:if>
								  </h1>
								  <input type="hidden" name="product" id="product_${lineItem.sequenceId}" value="${lineItem.productId}"/>
								  <input type="hidden" name="variant" id="variant_${lineItem.sequenceId}" value="${lineItem.productVariantId}"/>
								  <input type="hidden" name="colorId" id="colorId_${lineItem.sequenceId}" value="${lineItem.colorId}"/>
								  <input type="hidden" id="real_price_${lineItem.sequenceId}" value="${(lineItem.retailPrice-(lineItem.retailPrice*percent)/100)}"/> 
                                </div>
                                <div class="cart_price"  id="cart_price_${lineItem.sequenceId}">
                                
                                	<strike>250.00</strike> <b>$250.00</b>
                                	 <div class="checkout_remove_shoes remove_shoe_act" onclick="removeItem(${lineItem.sequenceId});"></div>
             						 <div class="clear_both"></div>
              
						              <c:set var="executed" value="no"></c:set>
						              <c:if test="${lineItem.isSale && ((cookie['Facebook'] ne null && cookie['Facebook'].value == 'Facebook')|| applyDiscount eq true || cookieExists eq false) && discountprogram ne null}">
											<c:set var="executed" value="yes"></c:set>
											<fmt:formatNumber value="${sr:getRoundedValue(lineItem.price-(lineItem.price*discountprogram.discountPercentage)/100)}" var="SpSaleprice" type="currency" currencySymbol="$" />
											<fmt:formatNumber value="${sr:getRoundedValue(lineItem.retailPrice-(lineItem.retailPrice*percent)/100)}" var="retailPrice" type="currency" currencySymbol="$" />
											<fmt:formatNumber value="${sr:getRoundedValue(lineItem.retailPrice*lineItem.quantity)}" var="retailPrice" type="currency" currencySymbol="$" />
											<fmt:formatNumber value="${sr:getRoundedValue(lineItem.price*lineItem.quantity)}" var="salePrice" type="currency" currencySymbol="$" />
											<c:choose>
											<c:when test="${ lineItem.isSale eq 'true'}">
											<strike id="retailPrice_${lineItem.sequenceId}" >${retailPrice}</strike><b class="incart_check" id="price_${lineItem.sequenceId}">${SpSaleprice}</b>
											</c:when>
											<c:otherwise>
											<b id="price_${lineItem.sequenceId}">${SpSaleprice}</b>
											</c:otherwise>
											</c:choose>
											
											<input type="hidden" id="real_price_${lineItem.sequenceId}" value="${(lineItem.price-(lineItem.price*percent)/100)}"/>
									  </c:if>
									  
									  <c:if test="${lineItem.isSale && cookieExists eq false && discountprogram ne null}">
											<c:set var="executed" value="yes"></c:set>
											<fmt:formatNumber value="${sr:getRoundedValue(lineItem.price-(lineItem.price*percent)/100)}" var="SpSaleprice" type="currency" currencySymbol="$" />
											<fmt:formatNumber value="${sr:getRoundedValue(lineItem.retailPrice-(lineItem.retailPrice*percent)/100)}" var="retailPrice" type="currency" currencySymbol="$" />
											<fmt:formatNumber value="${sr:getRoundedValue(lineItem.retailPrice*lineItem.quantity)}" var="retailPrice" type="currency" currencySymbol="$" />
											<c:choose>
											<c:when test="${ lineItem.isSale eq 'true'}">
											<strike id="retailPrice_${lineItem.sequenceId}" >${retailPrice}</strike> <b id="price_${lineItem.sequenceId}">${SpSaleprice}</b>
											</c:when>
											<c:otherwise>
											<b id="price_${lineItem.sequenceId}">${SpSaleprice}</b>
											</c:otherwise>
											</c:choose>
											<input type="hidden" id="real_price_${lineItem.sequenceId}" value="${(lineItem.price-(lineItem.price*percent)/100)}"/>
									  </c:if>
									  
									  <c:if test="${lineItem.isSale  && cookie['Facebook'] eq null && executed eq 'no'}">
											
											<fmt:formatNumber value="${lineItem.price}" var="SpSaleprice" type="currency" currencySymbol="$" />
											<fmt:formatNumber value="${sr:getRoundedValue(lineItem.retailPrice-(lineItem.retailPrice*percent)/100)}" var="retailPrice" type="currency" currencySymbol="$" />
											<fmt:formatNumber value="${sr:getRoundedValue(lineItem.retailPrice*lineItem.quantity)}" var="retailPrice" type="currency" currencySymbol="$" />
											<c:choose>
											<c:when test="${ lineItem.isSale eq 'true'}">
											<strike id="retailPrice_${lineItem.sequenceId}">${retailPrice}</strike> <b id="price_${lineItem.sequenceId}">${SpSaleprice}</b>
											</c:when>
											<c:otherwise>
											<b id="price_${lineItem.sequenceId}">${SpSaleprice}</b>
											</c:otherwise>
											</c:choose>
											<input type="hidden" id="real_price_${lineItem.sequenceId}" value="${lineItem.price}"/>
									  </c:if>
									   <c:if test="${lineItem.isSale  && cookie['Facebook'] ne null && discountprogram eq null}">
											<fmt:formatNumber value="${lineItem.price}" var="SpSaleprice" type="currency" currencySymbol="$" />
											<fmt:formatNumber value="${sr:getRoundedValue(lineItem.retailPrice-(lineItem.retailPrice*percent)/100)}" var="retailPrice" type="currency" currencySymbol="$" />
											<fmt:formatNumber value="${sr:getRoundedValue(lineItem.retailPrice*lineItem.quantity)}" var="retailPrice" type="currency" currencySymbol="$" />
											<c:choose>
											<c:when test="${ lineItem.isSale eq 'true'}">
											<strike id="retailPrice_${lineItem.sequenceId}" >${retailPrice}</strike> <b id="price_${lineItem.sequenceId}">${SpSaleprice}</b>
											</c:when>
											<c:otherwise>
											<b id="price_${lineItem.sequenceId}">${SpSaleprice}</b>
											</c:otherwise>
											</c:choose>
											<input type="hidden" id="real_price_${lineItem.sequenceId}" value="${lineItem.price}"/>
									  </c:if>
									  
									  <c:if test="${!lineItem.isSale}">
											<fmt:formatNumber value="${lineItem.price}" var="SpSaleprice" type="currency" currencySymbol="$" />
											<fmt:formatNumber value="${sr:getRoundedValue(lineItem.retailPrice-(lineItem.retailPrice*percent)/100)}" var="retailPrice" type="currency" currencySymbol="$" />
											<fmt:formatNumber value="${sr:getRoundedValue(lineItem.retailPrice*lineItem.quantity)}" var="retailPrice" type="currency" currencySymbol="$" />
											<c:choose>
											<c:when test="${ lineItem.isSale eq 'true'}">
											<strike id="retailPrice_${lineItem.sequenceId}" >${retailPrice}</strike> <b id="price_${lineItem.sequenceId}">${SpSaleprice}</b>
											</c:when>
											<c:otherwise>
											<b id="price_${lineItem.sequenceId}">${SpSaleprice}</b>
											</c:otherwise>
											</c:choose>
											<input type="hidden" id="real_price_${lineItem.sequenceId}" value="${lineItem.price}"/>
									  </c:if>
              
                                </div>
                                <code class="close_cart_shoe" onclick="removeItem(${lineItem.sequenceId});"></code>
                                <div class="clearall"></div>
                            </div><!--cart_shoe_list-->
                            <div class="cart_shoe_details">
                                <div class="size_color_labels">
                                   <label class="color">COLOR:</label>
                                   <label>U.S. SIZE:</label>
                                    <label>QTY:</label>
                                 </div>
                                <div class="custom_select cus_select color_select_dd">
                                            <div class="select">
                                                <p  id="color_${lineItem.sequenceId}"  class="country" name="${lineItem.colorName}">${fn:toUpperCase(lineItem.colorName)}</p>
                                                <span class="custom_drop_nav"></span>
                                            </div>
                                             <select id="colors_${lineItem.sequenceId}" name="color" data-default="3" class="custom_select_value_act" onchange="onColorChange(this.options[this.selectedIndex],${lineItem.sequenceId})">
				                            <c:forEach items="${CART_DETAILS.inventory[lineItem.productId]}" var="colorVariant">
				                            	<c:if test="${colorVariant.colorId==lineItem.colorId}">
				                            		<option name="${colorVariant.colorName}" value="${colorVariant.colorId}" selected="selected">${fn:toUpperCase(colorVariant.colorName)}</option>
				                            	</c:if>
				                            	<c:if test="${colorVariant.colorId!=lineItem.colorId}">
				                            		<option name="${colorVariant.colorName}" value="${colorVariant.colorId}">${fn:toUpperCase(colorVariant.colorName)}</option>
				                            	</c:if>
				                            </c:forEach>
                          				  </select>
                                 </div><!-- custome_select--->
                                <div class="custom_select cus_select">
                                            <div class="select">
                                                <p  id="size_${lineItem.sequenceId}" class="country">${fn:replace(lineItem.size,'.0','')}</p>
                                                <span class="custom_drop_nav"></span>
                                            </div>
                                           <select id="sizes_${lineItem.sequenceId}" name="size" data-default="${lineItem.size}" class="custom_select_value_act" onchange="onSizeChange(this.options[this.selectedIndex],${lineItem.sequenceId})">
												<c:forEach items="${CART_DETAILS.inventory[lineItem.productId]}" var="colorVariant">
													<c:if test="${colorVariant.colorId==lineItem.colorId}">
														<c:forEach items="${colorVariant.sizeVariants}" var="sizeVariant">
															<fmt:formatNumber var="size" value="${sizeVariant.size}" pattern="#.#"/>
															<c:if test="${sizeVariant.productVariantId==lineItem.productVariantId}">
																<option value="${sizeVariant.productVariantId}" selected="selected">${fn:replace(size,'.0','')}</option>
															</c:if>
															<c:if test="${sizeVariant.productVariantId!=lineItem.productVariantId}">
																<option value="${sizeVariant.productVariantId}">${fn:replace(size,'.0','')}</option>
															</c:if>
														</c:forEach>
													</c:if>
												</c:forEach>                              
                           				 </select>
                                 </div><!-- custome_select--->
                                <div class="custom_select cus_select">
                                            <div class="select">
                                                <p  id="quantity_${lineItem.sequenceId}" class="country">${lineItem.quantity}</p>
                                                <span class="custom_drop_nav"></span>
                                            </div>
                                             <select id="quantities_${lineItem.sequenceId}" name="size" data-default="3" class="custom_select_value_act" onchange="onQuantityChange(this.options[this.selectedIndex],${lineItem.sequenceId})">
			 								<c:forEach items="${CART_DETAILS.inventory[lineItem.productId]}" var="colorVariant">
												<c:if test="${colorVariant.colorId==lineItem.colorId}">
													<c:forEach items="${colorVariant.sizeVariants}" var="sizeVariant">
														<c:if test="${sizeVariant.productVariantId==lineItem.productVariantId}">
															<c:forEach var="quantity" begin="1" end="${sizeVariant.quantity}">
																<c:if test="${quantity==lineItem.quantity}">
																	<option value="${quantity}" selected="selected">${quantity}</option>
																</c:if>
																<c:if test="${quantity!=lineItem.quantity}">
																	<option value="${quantity}">${quantity}</option>
																</c:if>
															</c:forEach>
														</c:if>											
													</c:forEach>
												</c:if>
											</c:forEach>                              
                          				  </select>
                                 </div><!-- custome_select--->
              				</div><!-- cart_shoe_details -->
                            <div class="clearall"></div>
                        </li>
                        <li style=" display: none;" id="message_${lineItem.sequenceId}">
                        	<div class="error_oh_snap_holder">
                        		<img width="120" border="0" height="90" src="${productImageURL}" id="outOfStackimage_1">
                        		<h3> OH SNAP. WE'RE OUT.</h3>
								<h1> 
									GOTTA CHECKOUT QUICKER THAN THAT!<br>SOME ONE ELSE GOT IT BEFORE YOU.
								</h1>
								<div class="clearall"></div>
								<div class="checkbox_outstk" id="inStock_${lineItem.sequenceId}" ><font>Email you when we get more In-Stock?</font>
								<span class="notify" id="notify_${lineItem.sequenceId}" onclick="sendReqForWaitList(${lineItem.sequenceId})">NOTIFY ME</span>
								</div>
								<div style="display: none;" id="thanks_${lineItem.sequenceId}"><font>Thanks! We'll let you know when we get more in.</font></div>
							</div>
                        </li>
                        </c:forEach>
                        
                       
                    </ul>
             <div class="subtotal_holder"style="display: block;" >
             
	             <c:choose>
	             <c:when test="${CART_DETAILS.shoppingCart.savings!=0.0 }">
     			 <div id="savings_label" style="display: block;">
	   				<label class="saving">SAVINGS:</label>
	         		<fmt:formatNumber var="savings" value="${CART_DETAILS.shoppingCart.savings}" pattern="0.00"/>
	                <span class="sav_price" id="savingAmount">-$${savings}</span>
                 </div>
	             </c:when>
	             <c:otherwise>
	             <div id="savings_label" style="display: none;">
	             				<label class="saving" id="savings_label" >SAVINGS:</label>
			             		 <fmt:formatNumber var="savings" value="${CART_DETAILS.shoppingCart.savings}" pattern="0.00"/>
			                    <span class="sav_price" id="savingAmount">-$${savings}</span>
			     </div>
	             </c:otherwise>
	             </c:choose>
			           
	     		<label class="saving">SUBTOTAL:</label>
	     		<fmt:formatNumber var="subTotal" value="${CART_DETAILS.shoppingCart.subTotal}" pattern="0.00"/>
	            <span id="finalTotal">$${subTotal}</span>
	            <div class="clearall"></div>
	            
             </div>
             
             <div class="total_holder" style="display: none;">
             
             		 <c:choose>
                    <c:when test="${CART_DETAILS.shoppingCart.savings!=0.0}">
                    <div id="final_savings" style="display: block;">
	                     <label class="saving">SAVINGS:</label>
	                     <fmt:formatNumber var="savings" value="${CART_DETAILS.shoppingCart.savings}" pattern="0.00"/>
	                    <span class="sav_price" id="final_savingAmount">-$${savings}</span>
	                 </div>
                    </c:when>
                    <c:otherwise>
                      <div id="final_savings" style="display: none;">
	                     <label class="saving">SAVINGS:</label>
	                     <fmt:formatNumber var="savings" value="${CART_DETAILS.shoppingCart.savings}" pattern="0.00"/>
	                    <span class="sav_price" id="final_savingAmount">-$${savings}</span>
	                 </div>
                    </c:otherwise>
                    </c:choose>
                    
             		<label class="saving">SUBTOTAL:</label>
             		<fmt:formatNumber var="subTotal" value="${CART_DETAILS.shoppingCart.subTotal}" pattern="0.00"/>
                    <span class="sav_price" id="shipcartSubtotal">$${subTotal}</span>
                   
                   <div id="shippingPrice_holder" style="display: none;"> 
                    <label class="saving">SHIPPING:</label>
                    <fmt:formatNumber var="shippingPrice" value="${CHECKOUT_DETAILS.shippingPrice}" pattern="0.00"/>
                    <span class="sav_price" id="shippingPrice">$${shippingPrice}</span>
                  </div>
                  
                  	<div class="cart_total_holder">
                    <label>TOTAL:</label>
                    <fmt:formatNumber var="finalTotal" value="${CHECKOUT_DETAILS.grandTotal}" pattern="0.00"/>
                    <span id="final_finalTotal">$${finalTotal}</span>
                    </div>
                    <div class="clearall"></div>
             </div>
            </div> --%>   
<div class="clearall"></div>
<div id="backgroundPopup"></div> 
<div id="backgroundPopup_magzine"></div> 
<code class="loading_page"></code>
<input type="hidden" value="${firstShippingMethod}" id="firstShippingMethod"/>
<input type="hidden" value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.countryName}" id="ShippingCountryName"/>
<input type="hidden" value="${CHECKOUT_DETAILS.customerDetailDTO.email}" id="CustomerEmailId"/>
 	<%-- <input type="hidden" id="vendorname" value="${ZineDTO.vendorName}"/> 
     <input type="hidden" id="productName" value="${ZineDTO.productName}"/>
     <input type="hidden" id="productid" value="${ZineDTO.productId}"/>
     <input type="hidden" id="variantId" value="${ZineDTO.variantId}"></input>
     <input type="hidden" id="colorId" value="${ZineDTO.colorId}"></input>
     <input type="hidden" id="inventoryCheck" value="${ZineDTO.inventoryCheck}"></input>
     <input type="hidden" id="retailPrice" value="10"/>
     <input type="hidden" id="salePrice" value="5"/> --%>
     <input type="hidden" id="vendornameKoozie" value="${KoozieDTO.vendorName}"/> 
     <input type="hidden" id="productNameKoozie" value="${KoozieDTO.productName}"/>
     <input type="hidden" id="productidKoozie" value="${KoozieDTO.productId}"/>
     <input type="hidden" id="variantIdKoozie" value="${KoozieDTO.variantId}"></input>
     <input type="hidden" id="colorIdKoozie" value="${KoozieDTO.colorId}"></input>
     <input type="hidden" id="inventoryCheckKoozie" value="${KoozieDTO.inventoryCheck}"></input>
     <input type="hidden" id="retailPriceKoozie" value="${KoozieDTO.retailPrice}"/>
     <div id="hiddenValues4Case"></div>
     <div id="hiddenValues5Case"></div>
</div><!-- wrapper -->


 <!-- email_popup -->
        <div class="emailus_popup emailus_popup_act popup_pos kgpopup_act">
        	<div class="login_popup_close popup_close_act"></div>
                <div class="dont_see_your_size_popup_holder " id="emailus_form_popup">
                    <h2>Say Hi.</h2>
                    <form action="" method="post" name="login" class="message_form_holder" id="emailUs_popup" enctype="multipart/form-data">
                        <label class="login_inputfields fl">Your Email:</label><i id="alert" style="color:red; font-size:12px; margin:0px;"> </i><div class="clear_both"></div>
                        <input name="emailUsId" type="text" class="input_box" id="emailUsId" placeholder="Enter Email Id"/>
                        <label class="how_help_field">Your Message:</label>
                        <textarea name="help" cols="" rows="" class="message_textarea" id="help"></textarea><div id="alertHelp" style="color:red;font-size:12px;"> </div>
                        <label class="order_number">Order Number (if you have one):</label>
                        <input name="order_number" type="text" class="input_box" id="order_number" />
                        <i id="alertForAttachment" style="color:red; font-size:12px; display: block;margin: 0px;padding: 10px 10px 10px 0px;"></i>
                        <div class="clear_both"></div>
                        <div class="browse_btn">
                        	<input id="file_1" name="myFile1" type="file" value="Attach Files"/>
                        	<span class="image_file1">Click To Attach File</span>
                       </div>
                        
                       <%--  <input type="button" class="gry_btn brwn_btn" value="SEND" id="emailUs_send" onclick="javascript:setTimeout('emailUsDetails()',500);"><code class="popup_processing_icon"></code></input> --%>
                       <div class="gry_btn brwn_btn" id="emailUs_send" style="cursor:pointer" onclick="javascript:setTimeout('emailUsDetails()',100);">
                        	<code class="popup_processing_icon"></code>
                        	SEND
                        </div>
                        
                        
                    </form>
                    
                    <iframe id="imageUploadIFrame" style="display:none;"></iframe>
         </div><!-- message_holder -->
    </div><!-- email_popup -->
    
    <div class="blackfriday_faq_chk popup_pos kgpopup_act">
    	<div class="blackfriday_faq_chk_close popup_close_act"></div>
    	
    	<h1 align="center">BLACK FRIDAY FREQUENTLY ASKED QUESTIONS</h1>
        <div class="blackfriday_faq_chk_overflow">
        <code class="arrow_blackfaq_lf"></code>
        <h3 class="fl">How It works</h3>
        <code class="arrow_blackfaq_rg"></code>
        <div class="clear_both"></div>
        <p>It's our big Black Friday sale again!!! We know you've been waiting all year. And you know how CRAZY it gets fighting for those shoes you want and the big question:  "Should I risk waiting until it's 50% off day or grab them now while I see them for 30% or 40% off?"   Also, most of you know how crazy it gets here and we thank you so much for your past understanding and being so awesome!!  So here we go!!!!</p>
       
        <h5>The Basics
	        <p>Sign in with your Solestruck account or with Facebook to see the discounts.</p>
	        <p>The shoes are yours once you actually place the order. Someone else might be ordering them while you are so you have to be fast!</p>
	        <p>These are all FINAL SALE = no returns.  That means they are so heavily discounted, that they cannot be returned.  You can do whatever you want to make them work for you, re-gift them or sell them!</p>
	        <p>Sale prices don't apply to previous purchases.</p>
	        <p>Each discount is only valid for the day you place your order. (So if you place your order on 30% day, the order cannot be adjusted on 50% day. You would need to place a new order on 50% day and email us to cancel your first order.)</p>
	        <p>We'll get your order out the door within about 3 business days after you place it. Please be patient as we try to keep up with you guys during the sale.</p>
	        <p>We are still small and family-run so we have brought in lots of extra help. Thanks for bearing with us while we work as fast as we can to get all emails and calls answered and orders out the door!</p>
        	<p>Have other questions? See below for answers to common questions!</p>
        </h5>
        <code class="arrow_blackfaq_lf"></code>
        <h3 class="fl">Ordering</h3>
        <code class="arrow_blackfaq_rg"></code>
        <div class="clear_both"></div>
        <h2>
        	1. How do I get the Discount?
        	<p>You just have to be logged in either through the "Log In" button at the top of the website or when you start checkout. Once you sign in, you will see the discounted prices.</p>
        </h2>
        <h2>
        	2. I FORGOT MY PASSWORD. 
        	<p>No problem! Just click on "Forgot Password" on the Sign In page.  You will be emailed a link to reset your password. If you don't see the email, check your spam.</p>
            <p>If you are still having problems with your password, you can create a new account with a different email and password. This way, you'll still be able to get your order in before someone else snags what you want.</p>
        </h2>
        <h2>
        	3. I'M HAVING PROBLEMS ON THE SITE.
        	<p>If you are using a phone or tablet and are having trouble, just try using a computer. We don't have a mobile site yet, but it's in the works!</p>
            <p>If you are using a computer, make sure you are using the current versions of an updated browser like Chrome, Safari or Firefox. Then clear your cookies and/or cache on your browser to clean out any saved data on your computer that is causing issues while you use websites. For example, on Chrome, you click on Chrome > Clear Browsing Data > Empty the Cache (and) Delete Cookies. Once your cache and cookies are cleared, go back a screen and try logging in again.</p>
        </h2>
        <h2>
        	4. SOME SHOES ARE MISSING FROM MY SHOPPING CART.
        	<p>Yep - that will happen if someone else has already ordered them. Get your order in as fast as you can!</p>
        </h2>
        <h2>
        	5. WAS OUT WAYYY TOO LATE LAST NIGHT AND CAN'T FIND MY KEYS, LET ALONE MY LAPTOP. CAN I JUST CALL AND 
HAVE YOU PLACE MY ORDER FOR ME?
        	<p>Sure! We all have those nights. We highly recommend ordering online if you can as it will be much faster for you. Be patient with us while we have really high call volumes and with our extra help during the sale. We love it when you are super nice!</p>
        </h2>
        <h2>
        	6. CAN I ADD TO AN ORDER I ALREADY PLACED?
        	<p>Nope. You will have to place separate orders then you need to email us your order numbers. We will ask our Shipping Department to ship them together but this will cause your order to get delayed from being sent out right away since it needs a little special attention. We can't guarantee that we will be able to make it happen during such a busy time, but we can try!</p>
        </h2>
        <h2>
        	7. IS THIS A FINAL SALE?
        	<p>Yep! These are all FINAL SALE = no returns. That means they are so heavily discounted, that they cannot be returned. You can do whatever you want to make them work for you, re-gift them or sell them!</p>
        </h2>
        
        <code class="arrow_blackfaq_lf"></code>
        <h3 class="fl">Shipping</h3>
        <code class="arrow_blackfaq_rg"></code>
        <div class="clear_both"></div>
        
        <h2>
        	1. I'm an international customer. I'm buying a pair of shoes that are currently $229.95 but after the discount, my order total will be $137.97. Do I still get the free shipping?
        	<p>You're close!  The free shipping is based on the order total after discounts are applied. So in this case, you would need to add another $61.03 to get the free shipping.</p>
        </h2>
        <h2>
        	2. If I place an order, when will it be shipped out?
        	<p>This big sale gets REAL busy around here. Though we normally get most orders out the door the same business day, please be patient as we try to keep up with you guys during the sale. We'll get your order out the door usually within 3 business days after you place it. Once it goes out the door, we'll email your Shipping Confirmation to you with your tracking.</p>
        </h2>
        
        <code class="arrow_blackfaq_lf"></code>
        <h3 class="fl">Other Questions</h3>
        <code class="arrow_blackfaq_rg"></code>
        <div class="clear_both"></div>
        
        <h2>
        	1. I placed an order but didn't get a Purchase Confirmation email.
        	<p>It's probably hiding in your spam folder. If you used Paypal checkout, it was sent to your Paypal email address you used when ordering. If it's not there, we can also resend you one too, so just email us or give us a call.</p>
        </h2>
        <h2>
        	2. I just placed an order. Can I change the size or color? 
        	<p>We cannot make changes to orders already placed so you will just need to place a new order on our site, then email us to cancel the first order.</p>
        </h2>
        <h2>
        	3. I placed an order before the sale started. Can I get the discount applied to it?
        	<p>Nope. Sorry. Our sales are not valid for previous purchases. You can always place a new order and return your other one if you would like the discount. It's our way of keeping it fair for everyone.</p>
        </h2>
        <h4>Need more help? We are available 7am to 5pm PST throughout the sale: customerservice@solestruck.com or 1-800-494-1260.</h4>
    	</div>
    </div><!--blackfriday_faq_chk  -->
    
    <!-- email_sucess_popup-->     
	
	  <div class="email_popup_success_act popup_pos kgpopup_act">
        	<div class="login_popup_close popup_close_act"></div>
                <div class="ppup_cont_holder">
                                	<h2>Thank You</h2>
                                	<h3>Your message has been sent.</h3>
									<p>We'll get back to you shortly.</p>
                                 <div class="gry_btn popup_close_act brwn_btn" onclick="goToPreviousPage_frmemail()">Continue Shopping</div>
                                </div>
                                    <div class="clear_both"></div>
                                    
                        
            </div>	
	 <!-- email_sucess_popup-->

   <%-- <div class=" zine_popup kgpopup_act">
        <div class="zine_popup_close popup_close_act"></div>
        <h1>Include a copy of Solestruck's magazine with your order at half the regular price.</h1>
        <div class="btns yell_btn buyit" id="buy_it" onclick="addItemToCheckoutShoppingCart()">
        <code class="popup_processing_icon"></code>
          
              
          <div id="floatingBarsG" style="display: none;">
            <div class="blockG" id="rotateG_01">
            </div>
            <div class="blockG" id="rotateG_02">
            </div>
            <div class="blockG" id="rotateG_03">
            </div>
            <div class="blockG" id="rotateG_04">
            </div>
            <div class="blockG" id="rotateG_05">
            </div>
            <div class="blockG" id="rotateG_06">
            </div>
            <div class="blockG" id="rotateG_07">
            </div>
            <div class="blockG" id="rotateG_08">
            </div>
        </div>
            <span>$10</span> $5.00 - BUY IT
            <code class="red_line"></code>
       </div>
       <a href="#" class="nothanks" id="no_thanks">NO THANKS. JUST THE SHOES, PLEASE.</a>
    </div><!-- zine_popup --> --%>
	
<!-- For Australia,singspore,hongkong--YOUVE BEEN SOLESTRUCK -->
<!-- <div class="free_fedshipping_popup free_shipping_popup popup_pos popup_pos_act kgpopup_act" id="free_fedshipping_popup">
    <div class="login_popup_close popup_close_act"></div>
        <div class="login_holder free_shipping_holder">
            <h2>You've Been Solestruck!</h2>
            <div class="free_shipping_content">
                <p>We're footing the bill for <b>FedEx Express International Shippping</b> on your order. That's right, <b>FREE</b> FedEx International Shipping!</p>
 				<p>If you love the shoes and the fast service, please give us a shout out to help us rid the world of ugly shoes one pair at a time.</p>
 				<h3>Thanks for shopping with Solestruck.</h3>
 				<a id="contn_shpbtn" onclick="hidefreeshippingpopup();" class="brw_btn">Continue Checkout</a>
                <div class="clear_both"></div> 
            </div>free_fedshipping_content
    </div>login_holder
</div>free_fedshipping_popup -->


<!-- <div class="forgot_password_form popup_pos popup_pos_act">
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
    </div>ppup_cont_holder
</div>forgot_password_form -->
       

<%-- <div class="reset_password_success popup_pos popup_pos_act">
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
<code class="loading_page"></code> --%>

 

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
