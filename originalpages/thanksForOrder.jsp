<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<%@page import="com.veroniqa.frontend.util.VeroniqaUtil"%>
<%@page import="com.google.appengine.api.utils.SystemProperty.Environment"%>
<%@page import="com.veroniqa.frontend.service.CheckoutService" %>
<html xmlns="http://www.w3.org/1999/xhtml">
<head>
<meta name="googlebot" content="noindex"/>
<meta name="robots" content="noindex,nofollow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Thank you</title>
 

<%@ page import="com.veroniqa.frontend.util.EnvironmentUtil" %>
<%@ page import="com.veroniqa.frontend.util.VeroniqaConstants" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="sr" uri="http://solestruck.com/resources" %>

<link rel="shortcut icon" href="https://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" />
<link rel="icon" href="https://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" />

<link type="text/css" href="<%=VeroniqaConstants.CSS_SECURED_URL() %>new_reset.css" rel="stylesheet" />
<link type="text/css" href="<%=VeroniqaConstants.CSS_SECURED_URL() %>new_checkout.css" rel="stylesheet" />
<%-- <script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>jquery-1.9.0.min.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>thankyou.js"></script> --%>
<script async type="text/javascript" src="/script/${common_js}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm"></script>
<script async type="text/javascript" src="https://s7.addthis.com/js/250/addthis_widget.js#pubid=ra-4f272ad05297650d"></script>
<% String imageURL=VeroniqaConstants.IMAGE_URL_SECURED; %>
<c:set var="expresspaymentType" value="<%=VeroniqaConstants.PAYPAL_EXPRESS_PURCHASE%>"/>
<c:set var="appMode" value="<%=VeroniqaConstants.LIVE_FRONTEND_URL%>"/>

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
<body onload="pageTracker._trackEvent('Purchase Type', <c:choose><c:when test="${detail.paymentType == expresspaymentType}">'Paypal Purchase'</c:when><c:otherwise>'Ordinary Purchase'</c:otherwise></c:choose>, '${detail.shoppingCart.orderId}', 1);
pageTracker._trackEvent('New Checkout','${detail.shoppingCart.orderId}','${detail.grandTotal}');">

<!--  This is added for YES Brand Launch Sale -->

<c:set var="discountprogram" value="${sr:getDiscountProgramForFB()}"></c:set>
<c:set var="discountTypeName" value="${discountprogram.programTypeName}"></c:set>
<input type="hidden" id="discountTypeName" value="${discountTypeName }"></input>
<c:set var="brandList" value="${sr:getBrandListForSale()}"></c:set>
<c:forEach var="brandid" items="${brandList}">
	<c:set var="saleBrandNames" value="${brandid}"></c:set>
	<input type="hidden" id="saleBrandNames" value="${brandid}"></input>
</c:forEach>
<input type="hidden" id="thresholdSize" value="${sr:getThresholdSize()}"/>
<c:set var="thresholdLimitsAndValues" value="${sr:getThresholdValues()}"></c:set>
<c:forEach var="thresholdValues" items="${thresholdLimitsAndValues}" varStatus="status">
	<input type="hidden" id="minLimits_${status.count}" value="${thresholdValues.thresholdMin}">
	<input type="hidden" id="maxLimits_${status.count}" value="${thresholdValues.thresholdMax}">
	<input type="hidden" id="discountValues_${status.count}" value="${thresholdValues.thresholdDiscount}"> 
</c:forEach>
<c:if test="${discountprogram ne null && discountTypeName eq 'Order' }">
	<input type="hidden" id="grandTotal" value="${sessionScope.grandTotal}"></input>
	<input type="hidden" id="lineItemsSizes" value="${lineItemsSizes}"></input>
</c:if>
<!--  This is added for YES Brand Launch Sale -->

<!-- Google Affiliate Code -->
<img src="https://gan.doubleclick.net/gan_conversion?advid=K173230&oid=${detail.shoppingCart.orderId}&amt=${detail.grandTotal}&fxsrc=USD" width=1 height=1 /> 
<input type="hidden" id="thankyouPage" value="true"></input>
<div class="top_bar">
	<div class="top_headder">
		<a  href="/redirectToNonSecurePage.htm?rdirectURL=/" class="logo"></a>
        <%-- <code class="sale_need_help check_faq_act" id="saleFAQPage" style="display:none;"></code> --%>
        <span class="help_holder"><b>NEED HELP?</b> Click Here To Email Us 24/7 <br /> Call Us @ 1.800.494.1260 |  M-F 7am - 5 pm Pacific</span>
        <div class="clear_both"></div>
	</div><!--top_headder-->
 </div><!-- top_bar -->
<div id="wrapper" class="wrapper">
  <div class="content_holder np checkout_content" >
  	<div class="thak_col_lf">
 		<h1>THANKS FOR YOUR ORDER!</h1>
 		<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/images/PierreGif2.gif" style="display:none" id="saleGIF"/>
 		<input type="hidden" id="finalSale" value="<%=VeroniqaUtil.getDiscountProgramForFB() %>" />
 		<c:set var="isPreOrder" value="no"></c:set>
 		<c:forEach items="${detail.shoppingCart.lineItems}" var="lineItem" varStatus="i">
	 		<div class="thank_order_list">
	 		<c:set var="vendorName" value="${lineItem.vendorName}"></c:set>
			<c:set var="vendorNameL" value="${fn:replace(vendorName,' ','-')}"></c:set>
			<c:set var="productName" value="${lineItem.productName}"></c:set>
			<c:set var="colorName" value="${lineItem.colorName}"></c:set>
						
	 		<img src="<%=imageURL%>${fn:toLowerCase(vendorNameL)}-shoes/${fn:replace(vendorName," ","-")}-shoes-${fn:replace(productName," ","-")}-(${fn:replace(colorName," ","-")})-010307.jpg"" width="120px" height="90px"/>
	 			
	 			 <c:choose>
	               	<c:when test="${lineItem.isPreOrder eq true }">
	               		<c:set var="isPreOrder" value="yes"></c:set>
	               		<div class="order_name"><h2>${fn:toUpperCase(lineItem.productName)}</h2><h3>${fn:toUpperCase(lineItem.vendorName)}</h3><h4>PRESALE</h4></div>
	               	</c:when>
	               	<c:when test="${lineItem.isSale eq true }">
	               		<c:set var="isSale" value="yes"></c:set>
	               		<div class="order_name"><h2>${fn:toUpperCase(lineItem.productName)}</h2><h3>${fn:toUpperCase(lineItem.vendorName)}</h3><h4>SALE</h4></div>
	               	</c:when>
	               	<c:otherwise>
	               	<div class="order_name"><h2>${fn:toUpperCase(lineItem.productName)}</h2><h3>${fn:toUpperCase(lineItem.vendorName)}</h3></div>
	               	</c:otherwise>
	             </c:choose>
	 			<div class="order_price">
	 				<c:choose>
	               	<c:when test="${lineItem.isSale eq true }">
	               		<input type="hidden" id="saleProduct" value="true"/>
	               		<strike class="line_str"><fmt:formatNumber value="${lineItem.retailPrice*lineItem.quantity}" type="currency"/></strike> <b id="price_${i.count}"><fmt:formatNumber value="${lineItem.price}" type="currency"/></b>
	               	</c:when>
	               	<c:otherwise>
	               		<b id="price_${i.count}"><fmt:formatNumber value="${lineItem.price}" type="currency"/></b>
	               	</c:otherwise>
	             </c:choose>
	 			</div>
	 			<div class="order_details">
	 				<div class="shoe_color_details">
	 					<h3>COLOR</h3>
	 					<h2>${fn:toUpperCase(lineItem.colorName)}</h2>
	 				</div>
	 				<div class="shoe_size_details">
	 					<h3>U.S. SIZE:</h3>
	 					<h3><b>${fn:replace(lineItem.size,'.0','')}</b><!-- (21.5 CM) --></h3>
	 				</div>
	 				<div class="shoe_qty_details">
	 					<h3>QTY:</h3>
	 					<h2>${lineItem.quantity}</h2>
	 				</div>
	 			</div>
	 		</div>
 		</c:forEach>
                  
 		<div class="thank_totalprice_details">
		   <ul>
		        <li>
		            <span class="total_lf">SUBTOTAL:</span>
		            <span class="total_rg" id="cart_subtotal"><fmt:formatNumber value="${detail.shoppingCart.subTotal}" type="currency"/></span>
		        </li>
		        <li>
		        <%--  <c:choose> --%>
	             <c:if test="${detail.shoppingCart.savings!=0.0 }">
     			 	 <span class="total_lf">SAVINGS:</span>
		             <span class="total_rg" id="cart_savings">-<fmt:formatNumber value="${detail.shoppingCart.savings}" type="currency"/></span>
	             </c:if>
		        </li>
		        <li id="facebookbonus" style="display:none">
		        	<span class="total_lf">FACEBOOK BONUS:</span>
		            <span class="total_rg" id="bonus_price"></span>
		        </li>
		         <li>
		            <span class="total_lf">SHIPPING:</span>
		            <span class="total_rg" id="cart_shipping"><c:choose><c:when test="${detail.shippingPrice>0.0}"><fmt:formatNumber value="${detail.shippingPrice}" type="currency"/></c:when><c:otherwise>FREE</c:otherwise></c:choose></span>
		        </li>
		      
		        <li class="last_total">
		            <span class="total">TOTAL:</span>
		            <span class="total_price"><c:choose><c:when test="${sessionScope.grandTotal eq null || sessionScope.grandTotal eq ''}"><fmt:formatNumber value="${detail.grandTotal}" type="currency"/></c:when><c:otherwise><fmt:formatNumber value="${sessionScope.grandTotal}" type="currency"/></c:otherwise></c:choose></span>
		        </li>
		    </ul>
		    <input type="hidden" id="subTotal" value="${detail.shoppingCart.subTotal}"></input>
		</div>
 		<div class="clear_both"></div>
 	</div>
 	<div class="thak_col_rg">
		<ul class="thank_shop_holder">
				<li>
					<h5>ORDER NUMBER:</h5>
					<P>
						${detail.shoppingCart.orderId}
					</P>
			</li>
			<li>
				<h5>SHIPPING TO:</h5>
				<P>
				
                    ${detail.customerDetailDTO.shippingAddress.firstName}  ${detail.customerDetailDTO.shippingAddress.lastName}</br>
                    ${detail.customerDetailDTO.shippingAddress.street1}</br>
                    <c:if test="${detail.customerDetailDTO.shippingAddress.street2!=null}">
                    ${detail.customerDetailDTO.shippingAddress.street2}</br></c:if>
                    ${detail.customerDetailDTO.shippingAddress.street3} <c:if test="${detail.customerDetailDTO.shippingAddress.country =='US' || detail.customerDetailDTO.shippingAddress.country == 'CA'}">${detail.customerDetailDTO.shippingAddress.state}</c:if><c:if test="${detail.customerDetailDTO.shippingAddress.country !='US' && detail.customerDetailDTO.shippingAddress.country != 'CA'}">${detail.customerDetailDTO.shippingAddress.province}</c:if></br>
                    ${detail.customerDetailDTO.shippingAddress.countryName} ${detail.customerDetailDTO.shippingAddress.zipCode}
				</P>
			</li>
			<li>
				<h5>ARRIVING BY:</h5>
				<p>
				${detail.shippingMethod}: <c:choose><c:when test="${detail.shippingPrice>0.0}"><fmt:formatNumber value="${detail.shippingPrice}" type="currency"/></c:when><c:otherwise>FREE</c:otherwise></c:choose></br>
				<c:if test="${detail.shippingMethod eq 'USPS-Priority International'}">
				Estimated Delivery: 6-10 Business Days
				</c:if>
				<c:if test="${detail.shippingMethod eq 'USPS-Standard USPS'}">
				Estimated Delivery: 6-10 Business Days
				</c:if>
				<c:if test="${detail.shippingMethod eq 'USPS-Express USPS'}">
				Estimated Delivery: 2-3 Business Days
				</c:if>
				<c:if test="${detail.shippingMethod eq 'USPS-Express International'}">
				Estimated Delivery: 3-5 Business Days
				</c:if>
				<c:if test="${detail.shippingMethod eq 'FedEx-International Economy'}">
				Estimated Delivery: 2-5 Business Days
				</c:if>
				<c:if test="${detail.shippingMethod eq 'FedEx-Standard Shipping'}">
				Estimated Delivery: 1-5 Business Days
				</c:if>
				<c:if test="${detail.shippingMethod eq 'FedEx-Express Shipping'}">
				Estimated Delivery: 2 Business Days
				</c:if>
				<c:if test="${detail.shippingMethod eq 'FedEx-Overnight Shipping'}">
				Estimated Delivery: 1 Business Day
				</c:if>
				</p>
               <c:if test="${isPreOrder eq 'yes'}">
               <span class="card_desc thank_you_card_desc">${detail.deliveryDays}</span>
               </c:if>
				
			</li>
			<li>
				<h5>PURCHASED WITH:</h5>
				<c:choose>
				<c:when test="${detail.paymentType == 'expresspaymentType'}">
					<img src="../images/paypal.png" /></br>
					<a href="#">${detail.customerDetailDTO.email}</a>
				</c:when>
				<c:otherwise>
				<a href="#">${detail.customerDetailDTO.email}</a>
				</c:otherwise>
				</c:choose>
				
			</li>
		</ul><!-- thank_shop_holder -->
		
		<c:forEach items="${detail.shoppingCart.lineItems}" var="lineItem" varStatus="i">
	    <c:if test="${i.index == 0}">
					  <c:set var="vName" value="${lineItem.vendorName}"></c:set>
					  <c:set var="vNameSpace" value="${fn:replace(vName,' ','-')}"></c:set>
					  <c:set var="pName" value="${lineItem.productName}"></c:set>
					  <c:set var="pNameSpace" value="${fn:replace(pName,' ','-')}"/>
					  <c:set var="cName" value="${lineItem.colorName}"></c:set>
					  <c:set var="cNameSpace" value="${fn:replace(cName,' ','-')}"/>
					  	<a id="fb-button" class="addthis_button_facebook tooltip_t2 thank_facebook" 
			               title="Share This Shoe On Facebook"
			               target="_blank" 
			               addthis:url="<%=VeroniqaConstants.LIVE_FRONTEND_URL %>${fn:toLowerCase(vNameSpace)}-${fn:toLowerCase(pNameSpace)}-${fn:toLowerCase(cNameSpace)}/index.html" 
			               addthis:title="Share This Shoe On Facebook" 
			               addthis:description="An Example Description">SHARE THIS ORDER</a>
	    </c:if>	               
	    </c:forEach> 
		<!-- <a href="#" class="thank_twitter">TWITER THIS ORDER</a> -->
 	</div>
 	<div class="clear_both"></div>
  
  </div> <!-- content_holder --> 

<!-- email_popup -->
        <div class="emailus_popup emailus_popup_act popup_pos kgpopup_act">
        	<div class="login_popup_close popup_close_act"></div>
                <div class="dont_see_your_size_popup_holder " id="emailus_form_popup">
                    <h2>Say Hi.</h2>
                    <form action="" method="post" name="login" class="message_form_holder" id="emailUs_popup" enctype="multipart/form-data">
                        <label class="login_inputfields fl">Your Email:</label><i id="alert" style="color:red; font-size:12px; margin:0px;"> </i><div class="clear_both"></div>
                        <input name="emailId" type="text" class="input_box" id="emailUsId" />
                        <label class="how_help_field">Your Message:</label>
                        <textarea name="help" cols="" rows="" class="message_textarea" id="help"></textarea><div id="alertHelp" style="color:red;font-size:12px;"> </div>
                        <label class="order_number">Order Number (if you have one):</label>
                        <input name="order_number" type="text" class="input_box" id="order_number" />
                        <i id="alertForAttachment" style="color:red; font-size:12px; display: block;margin: 0px;padding: 10px 10px 10px 0px;"></i>
                        <div class="clear_both"></div>
                        <div class="browse_btn">
                        	<input id="file_1" name="myFile1" type="file" value="Attach Files"/>
                        <span class="image_file1" onclick="$('#file_1').trigger('click');"><a id="text_emailUs">Click To Attach File</a></span>
                       </div>
                        
                       <%--  <input type="button" class="gry_btn brwn_btn" value="SEND" id="emailUs_send" onclick="javascript:setTimeout('emailUsDetails()',500);"><code class="popup_processing_icon"></code></input> --%>
                       <div class="gry_btn brwn_btn" id="emailUs_send" style="cursor:pointer" onclick="return emailUsDetails();">
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
    	<div class="blackfriday_faq_chk_overflow"></div>
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
    

<div class="cart_popup popup_pos kgpopup_act feedback_form">
	<!--<div class="cart_popup popup_pos popup_pos_act" >-->
   		<div class="shoping_cart_popup_close popup_close_act"></div>
			<div class="cart_popup_holder">
    			<h2>feedback</h2>
			    <!--cartWithContent-->
				<div class="empty_cart_display_holder" id="cartWithoutContent">
					<h3 style="
    margin-bottom: 0px;
    text-align: left;
">Thank you for your purchase on the new solestruck.com!</h3> <h3 style="
    margin-bottom: 0px;
">We would LOVE your feedback. Would you take 30 seconds to tell us about your experience?</h3><h3 style="
    margin-bottom: 4px;
"> Thanks again.</h3>                          
					                                                        
				<iframe src="https://www.surveymonkey.com/s/LK8NN6W" style="width: 743px;height: 510px;">	   	
                </iframe></div><!--CartWithoutContent-->
     			<div class="clear_both"></div>
			</div><!-- cart_popup_holder --> 
	<!-- </div>cart_popup popup_pos popup_pos_act -->	
</div>
 
  <div class="clear_both"></div>
 <%--  <tiles:insertAttribute name="footerForThanks"/>  <div class="clear_both"></div> --%>
  
   <!-- JIRA SSGA-96 FOR GOOGLE TRUSTED CODE -->
<!-- START Trusted Stores Order -->
<div id="gts-order" style="display:none;">

  <!-- start order and merchant information -->
  <span id="gts-o-id">${detail.shoppingCart.orderId}</span>
  <c:if test="${appMode eq 'http://testing-solestruck.appspot.com/' or appMode eq 'http://testing.solestruck.com/' or appMode eq 'http://testing.solestruck.com'}">	
  	<span id="gts-o-domain">testing.solestruck.com</span>
  </c:if>
  <c:if test="${appMode eq 'http://live-solestruck.appspot.com/' or appMode eq 'http://www.solestruck.com/' or appMode eq 'http://www.solestruck.com'}">	
  	<span id="gts-o-domain">www.solestruck.com</span>
  </c:if>
  <span id="gts-o-email">${detail.customerDetailDTO.email}</span>
  <span id="gts-o-country">${detail.customerDetailDTO.shippingAddress.country}</span>
  <span id="gts-o-currency">USD</span>
  <fmt:formatNumber var="grandTotal" value="${detail.grandTotal}" pattern="0.00"/>
  <span id="gts-o-total">${grandTotal}</span>
  <c:if test="${detail.discountPrice ne null}">
  <fmt:formatNumber var="discountPrice" value="${detail.discountPrice}" pattern="0.00"/>
  <span id="gts-o-discounts">${discountPrice}</span>
  </c:if>
  <c:if test="${detail.discountPrice eq null}">
  <span id="gts-o-discounts">0.00</span>
  </c:if>
  <fmt:formatNumber var="shippingPrice" value="${detail.shippingPrice}" pattern="0.00"/>
  <span id="gts-o-shipping-total">${shippingPrice}</span>
  <span id="gts-o-tax-total">0.00</span>
  <jsp:useBean id="now" class="java.util.Date" />
  <fmt:formatDate var="month" value="${now}" pattern="MM"/>
  <fmt:formatDate var="year" value="${now}" pattern="yyyy"/>
  <fmt:formatDate var="date" value="${now}" pattern="dd"/>
  <c:set var="date" value="${date+1}"></c:set>
  <c:if test="${isPreOrder eq 'yes'}">
  <span id="gts-o-est-ship-date">${sr:getDateAfterDays(45)}</span>
  <span id="gts-o-has-preorder">Y</span>
  </c:if>
  <c:if test="${isPreOrder eq 'no'}">
  <span id="gts-o-est-ship-date">${sr:getDateAfterDays(2)}</span>
  <span id="gts-o-has-preorder">N</span>
  </c:if>
  <span id="gts-o-has-digital">N</span>
  <!-- end order and merchant information -->

  <!-- start repeated item specific information -->
  <!-- item example: this area repeated for each item in the order -->
  <c:forEach items="${detail.shoppingCart.lineItems}" var="lineItem">
  <span class="gts-item">
    <span class="gts-i-name">${lineItem.vendorName}_${lineItem.productName}_${lineItem.colorName}_${lineItem.size}</span>
    <span class="gts-i-price">${lineItem.unitPrice}</span>
    <span class="gts-i-quantity">${lineItem.quantity}</span>
    <span class="gts-i-prodsearch-id">${lineItem.productVariantId}</span>
    <span class="gts-i-prodsearch-store-id"><%=VeroniqaConstants.getGoogleTrustedStoreID()%></span>
    <span class="gts-i-prodsearch-country">US</span>
    <span class="gts-i-prodsearch-language">EN</span>
  </span>
  </c:forEach>
  <!-- end item 1 example -->
  <!-- end repeated item specific information -->

</div>
<!-- JIRA SSGA-96 FOR GOOGLE TRUSTED CODE -->
<!-- END Trusted Stores -->
  <!-- <div class="footer_wrapper">
    <div class="footer_nav">
      <div class="footer_help">
        <h2>Help</h2>
        <ul>
          <li><a>E-Mail Us</a></li>
          <li><a href="shipping.html">Shipping</a></li>
          <li><a href="returns.html">Returns</a></li>
          <li><a href="international.html">International</a></li>
          <li><a href="faq.html">Faq's</a></li>
        </ul>
      </div>footer_help
      
      <div class="footer_about">
        <h2>About</h2>
        <ul>
          <li><a href="privacy_notice.html">Privacy Policy</a></li>
          <li><a>Bio</a></li>
        </ul>
      </div>footer_about
      
      <div class="footer_contact">
        <h2>Contact</h2>
        <ul>
          <li>1-800-494-1260</li>
          <li>M-F 7am - 5pm PST</li>
          <li><a href="#">E-Mail Us</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </div>footer_contact
      
      <div class="footer_visit">
        <h2>Visit</h2>
        <ul>
          <li>Solestruck Store</li>
          <li>718 NW 11th Ave.</li>
          <li>Portland, OR 97209</li>
        </ul>
      </div>footer_visit 
      
      <div class="clear_both"></div>
    </div>footer_nav
    
    <div class="footer_email">
      <form action="" method="get" name="rating">
        <label>Solestruck Mail List</label>
        <input name="email" id="email_us" type="text" class="email_input_box text_val_act" value="Your E-Mail Address" />			
        <input name="email_us" value="" type="button" class="email_send_btn" />
        <div class="clear_both"></div>
        <div class="footer_sign_up"> <span>Sign up for sales, events and all around awesomeness.</span> </div>footer_sign_up
      </form>
    </div>footer_email
    <div class="clear_both"></div>
    <div class="bottom_footer_bar">
      <div class="copy_right"> Solestruck �. All rights reserved. </div>copy_right
      
      <div class="footer_free_shipping"> *Free Shipping Wordlwide. <a href="#">See Details.</a> 
      </div>footer_free_shipping

        <div class="social_links">
            <a class="twitter tooltip_t" title="Tweet This Shoe On Twitter"></a>
            <a class="face_book tooltip_t" title="Share This Shoe On Facebook"></a>
            <a class="share tooltip_t" title="+1 This Page"></a> 
       </div>social_links
      <div class="clear_both"></div>
    </div>bottom_footer_bar
  </div>footer _wrapper -->
  <div class="clear_both"></div>
   <c:choose>
   		<c:when test="${showTrackingCode eq true }">
		  	<!-- For  PepperJam tracking pixel Code (SSGA-270) by YES  -->
			<iframe src="${pj_Iframe_Src}" width="1" height="1" frameborder="0">
			</iframe>   
			<!-- Upto here For  PepperJam tracking pixel Code (SSGA-270) by YES  -->
			
			
					
			<!-- BEGIN COMMISSION JUNCTION TRACKING CODE By YES -->
			<iframe id="cj_Iframe" height="1" width="1" frameborder="0" scrolling="no" src="${cj_Iframe_Src}" name="cj_conversion" >
			</iframe>
			<!-- END COMMISSION JUNCTION TRACKING CODE By YES -->
					
			
			<img width="1" height="1" src="${polyvore_Src}"/> <!-- For Polyvore order tracking pixel Code (SSGA-318) by YES -->
				
		</c:when>
	</c:choose>
</div><!-- wrapper -->
<div id="backgroundPopup"></div> 




	<script type="text/javascript">
			var gaJsHost = (("https:" == document.location.protocol)
			? "https://ssl." : "http://www.");
			document.write("\<script src='" + gaJsHost
			+ "google-analytics.com/ga.js' type='text/javascript'>\<\/script>" );
	</script>
<script type="text/javascript">
		
		var pageTracker = _gat._getTracker("<%=VeroniqaConstants.getAnalyticsID()%>");
	
		pageTracker._initData();
		pageTracker._trackPageview();
		pageTracker._trackPageLoadTime();
		pageTracker._addTrans(
				"${detail.shoppingCart.orderId}",
				"solestruck.com",
				"${detail.grandTotal}",
				"0.0",
				"${detail.shippingPrice}", 
				"${detail.customerDetailDTO.billingAddress.street3}", 
				"${detail.customerDetailDTO.billingAddress.province}",
				"${detail.customerDetailDTO.billingAddress.countryName}" 
			);
		
		<c:forEach items="${detail.shoppingCart.lineItems}" var="lineItem">	
		pageTracker._addItem(
					
					"${detail.shoppingCart.orderId}", 
					"${lineItem.productId}_${lineItem.colorId}", 
					"${lineItem.productName}-${lineItem.colorName}", 
					"${lineItem.vendorName}", 
					"${lineItem.unitPrice}",
					"${lineItem.quantity}" 
					
				);	
			pageTracker._trackTrans();
		</c:forEach>
		
		
	   
		
		
		
</script>
<script type="text/javascript">
		
		var pageTracker = _gat._getTracker("<%=VeroniqaConstants.getNewCheckoutAnalyticsID()%>");
	
		pageTracker._initData();
		pageTracker._trackPageview();
		pageTracker._trackPageLoadTime();
		pageTracker._addTrans(
				"${detail.shoppingCart.orderId}",
				"solestruck.com",
				"${detail.grandTotal}",
				"0.0",
				"${detail.shippingPrice}", 
				"${detail.customerDetailDTO.billingAddress.street3}", 
				"${detail.customerDetailDTO.billingAddress.province}",
				"${detail.customerDetailDTO.billingAddress.countryName}" 
			);
		
		<c:forEach items="${detail.shoppingCart.lineItems}" var="lineItem">	
		pageTracker._addItem(
					
					"${detail.shoppingCart.orderId}", 
					"${lineItem.productId}_${lineItem.colorId}", 
					"${lineItem.productName}-${lineItem.colorName}", 
					"${lineItem.vendorName}", 
					"${lineItem.unitPrice}",
					"${lineItem.quantity}" 
					
				);	
			pageTracker._trackTrans();
		</c:forEach>
		
		
	   
		
		
		
</script>
<!-- <script language="javascript" type="text/javascript">var gdf_orderTotal ="${detail.grandTotal}";</script>
<script language="javascript" type="text/javascript" src="https://tracking.godatafeed.com/gdf_conversion.js"></script> -->


<!-- SoleMain 1 -->
<!-- Google Code for Transactions - Live - 10Sep2012 Conversion Page -->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 1071368645;
var google_conversion_language = "en";
var google_conversion_format = "1";
var google_conversion_color = "666666";
var google_conversion_label = "gy3wCJ3azAMQxZPv_gM";
var google_conversion_value = ${detail.grandTotal};
/* ]]> */
</script>
<script type="text/javascript" src="https://www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="https://www.googleadservices.com/pagead/conversion/1071368645/?value=1&label=gy3wCJ3azAMQxZPv_gM&guid=ON&script=0"/>
</div>
</noscript>
<!-- SoleMain 1 -->

<!--SoleMain2 -->

<!-- Google Code for Transactions - Live - 10Sep2012 Conversion Page -->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 1070046381;
var google_conversion_language = "en";
var google_conversion_format = "1";
var google_conversion_color = "666666";
var google_conversion_label = "DG9DCJP90wMQrbme_gM";
var google_conversion_value = ${detail.grandTotal};
/* ]]> */
</script>
<script type="text/javascript" src="https://www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="https://www.googleadservices.com/pagead/conversion/1070046381/?value=1&label=DG9DCJP90wMQrbme_gM&guid=ON&script=0"/>
</div>
</noscript>
<!--SoleMain2 -->


<!-- SoleMain 3 -->
<!-- Google Code for Transactions - Live - 10Sep2012 Conversion Page -->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 1066938714;
var google_conversion_language = "en";
var google_conversion_format = "1";
var google_conversion_color = "666666";
var google_conversion_label = "UH5cCPbFvAMQ2uLg_AM";
var google_conversion_value = ${detail.grandTotal};
/* ]]> */
</script>
<script type="text/javascript" src="https://www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="https://www.googleadservices.com/pagead/conversion/1066938714/?value=1&label=UH5cCPbFvAMQ2uLg_AM&guid=ON&script=0"/>
</div>
</noscript>
<!-- SoleMain 3 -->


 

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

<!-- MSN Adcenter conversion tracking SSGA-88 -->
<script type="text/javascript"> if (!window.mstag) mstag = {loadTag : function(){},time : (new Date()).getTime()};</script> <script id="mstag_tops" type="text/javascript" src="//flex.atdmt.com/mstag/site/1a23ddff-a31e-4f3a-b023-7dca671cca06/mstag.js"></script> <script type="text/javascript"> mstag.loadTag("analytics", {dedup:"1",domainId:"14244",type:"1",revenue:"${detail.grandTotal}",actionid:"75672"})</script> <noscript> <iframe src="//flex.atdmt.com/mstag/tag/1a23ddff-a31e-4f3a-b023-7dca671cca06/analytics.html?dedup=1&domainId=14244&type=1&revenue=&actionid=75672" frameborder="0" scrolling="no" width="1" height="1" style="visibility:hidden;display:none"> </iframe> </noscript>
<!-- MSN Adcenter conversion tracking SSGA-88 -->

<!-- for SSGA-96 GOOGLE TRUSTED STORE -->
<c:choose>
   		<c:when test="${showTrackingCode eq true }">
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
		</c:when>
</c:choose>

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

<!-- Conversion Pixel - SoleStruck--Conversion - DO NOT MODIFY -->
<script src="https://secure.adnxs.com/px?id=142057&seg=1319618&order_id=${detail.shoppingCart.orderId}&value=${detail.grandTotal}&t=1" type="text/javascript"></script>
<!-- End of Conversion Pixel -->
 
</body>
</html>