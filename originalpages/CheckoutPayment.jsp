
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page import="com.veroniqa.frontend.util.VeroniqaConstants"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="sr" uri="http://solestruck.com/resources" %>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Checkout-Payment</title>

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
          <li><a href="#" class="checkout_2_act">Shipping Method</a></li>
          <li class="path_arrow"></li>
          <li class="last"><a href="#" class="checkout_3_act selected">Payment Method</a></li>
        </ul>
        <div class="clear_both"></div>
      </div><!-- menu_pathway -->
      
      <input id="currentStep" type="hidden" value="4"/>
	  <input id="lastStep" type="hidden" value="${CHECKOUT_DETAILS.checkoutStep}"/>
     <div class="payment_process_content"> 
      
      <div class="payment_holder" style="display:block;">
        <form action="" method="post" name="check_out_sign_in" class="check_out_signin_holder">
                 <jsp:useBean id="now" class="java.util.Date" />
                 <fmt:formatDate var="month" value="${now}" pattern="MM" />
                 <fmt:formatDate var="year" value="${now}" pattern="yyyy" />
                 <fmt:formatDate var="monthName" value="${now}" pattern="MMMMM"/>
                 <input type="hidden" id="currentMonth" value="${month}"/>
                 <input type="hidden" id="currentYear" value="${year}"/>
            <ul class="checkout_form">
            	<li class="payment_methods">
                	<h3>Secure Payment Info:</h3>
                    <ul>
                    	<li class="tooltip_t2" title="MasterCard">&nbsp;</li>
                        <li class="discover_card tooltip_t2" title="Discover">&nbsp;</li>
                        <li class="ae_card tooltip_t2" title="American Express">&nbsp;</li>
                        <li class="visa_card tooltip_t2" title="Visa">&nbsp;</li>
                        <li class="dinersclub_card tooltip_t2" title="Diners Club">&nbsp;</li>
                        <li class="jcb_card tooltip_t2" title="JCB">&nbsp;</li>
                    </ul>
                    <div class="clear_both"></div>
                </li>
                 <li><span class="checkout_error" id="checkout_payment_err" style="display:none;">Invalid Data</span></li>
                 <li>   
                      <div class="account_info_holder">
                      	<input id="cardHoldeName"  name="nameoncard" type="text" class="chk_input chk_input_short br bb fl tooltip_t text_val_act" value="Name On Credit Card" title="Name On Credit Card"/>
                        <input id="cardNumber"  name="cardnumber" type="text" class="chk_input chk_input_short fl bb tooltip_t text_val_act" value="Card Number" title="Credit Card Number"/>
                        <div class="clear_both"></div>

                           <div class="custom_select chckout_small_select last_left">
                             <div class="select">
                                <p>${monthName}</p>
                                <span class="custom_drop_nav"></span>
                             </div>
                            <select id="cardExpMonthList" name="month" data-default="January" class="custom_select_value_act">
                                <option value="01" <c:if test="${month=='01'}"> selected="selected"</c:if>>January</option>
                                <option value="02" <c:if test="${month=='02'}"> selected="selected"</c:if>>February</option>
                                <option value="03" <c:if test="${month=='03'}"> selected="selected"</c:if>>March</option>
                                <option value="04" <c:if test="${month=='04'}"> selected="selected"</c:if>>April</option>
                                <option value="05" <c:if test="${month=='05'}"> selected="selected"</c:if>>May</option>
                                <option value="06" <c:if test="${month=='06'}"> selected="selected"</c:if>>June</option>
                                <option value="07" <c:if test="${month=='07'}"> selected="selected"</c:if>>July</option>
                                <option value="08" <c:if test="${month=='08'}"> selected="selected"</c:if>>August</option>
                                <option value="09" <c:if test="${month=='09'}"> selected="selected"</c:if>>September</option>
                                <option value="10" <c:if test="${month=='10'}"> selected="selected"</c:if>>October</option>
                                <option value="11" <c:if test="${month=='11'}"> selected="selected"</c:if>>November</option>
                                <option value="12" <c:if test="${month=='12'}"> selected="selected"</c:if>>December</option>
                            </select>
                         </div>

                    
                           <div class="custom_select chckout_small_select">
                             <div class="select">
                                <p>${year}</p>
                                <span class="custom_drop_nav"></span>
                             </div>
                            <select id="cardExpYearList" name="year" data-default="2012" class="custom_select_value_act">
                                 <c:forEach var="i" begin="0" end="15" step="1" varStatus ="status">
                                 	<c:if test="${status.index==0}">
                                 		<option value="${year+i}" selected="selected">${year+i}</option>
                                 	</c:if>
                                 	<c:if test="${status.index>0}">
 										<option value="${year+i}">${year+i}</option>
                                 	</c:if>
		                      	</c:forEach>                    
                            </select>
                         </div>
                             
                              <div class="short_name_hlder col3_name_hlder">
                                    <div class="custom_dropdown custom_dropdown_200 bb" id="shipStateHolder1">
                                    <input  id="cardCCV"  name="security_number" type="text" class="chk_input input_field_220 tooltip_e text_val_act" value="Security Number" title="Your Security Code Is the 3-digit (4 on Amex) number on the back of your card."/>
                                </div><!-- custom_dropdown -->
                                 <div class="clear_both"></div>
                             </div><!-- first_name -->                        
                        <div class="clear_both"></div>
                      </div>
                   </li>
                   <li class="chkout_last">
                    <div class="mrw_btn payment_holder_act" id="payment_btn">
                 	Complete Purchase
                    <code class="wht_rt_arrow"></code>
                 	</div><!-- brw_btn -->
              </li>
            </ul>
        </form>
      </div><!-- payment_holder -->
      
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
