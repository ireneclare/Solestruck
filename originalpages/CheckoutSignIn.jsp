<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page import="com.veroniqa.frontend.util.VeroniqaConstants"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="sr" uri="http://solestruck.com/resources" %>
<%@ page import="com.face4j.facebook.Client" %>
<%@ page import="com.face4j.facebook.factory.FacebookFactory" %>
<%@ page import="com.face4j.facebook.Facebook" %>
<%@ page import="com.face4j.facebook.OAuthAccessToken" %>
<%@ page import="com.face4j.facebook.enums.Permission" %>
<%@ page import="com.face4j.facebook.enums.HttpClientType" %>
<%@ page import="com.face4j.facebook.enums.Display" %>
<%@page import="com.veroniqa.frontend.util.EnvironmentUtil" %>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Checkout-SignIn</title>

<link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_SECURED_URL() %>reset_secured.css" />

<link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_SECURED_URL() %>global_secured.css" />
<link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_SECURED_URL() %>style_secured.css" />
<link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_SECURED_URL() %>form_secured.css" />
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>jquery-1.5.2.min.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>actions.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>checkout.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>shoppingcartcheckout.js"></script> 
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>jquery.json-2.3.min.js"></script>

<!-- <link rel="icon" href="https://s3.amazonaws.com/images2.solestruck.com/favicon.ico" type="image/x-icon" /> -->
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
          <li class="first"><a href="#" class="checkout_1_act selected">Account Info</a></li>
          <li class="path_arrow"></li>
          <li><a href="#" class="checkout_2_act">Shipping Method</a></li>
          <li class="path_arrow"></li>
          <li class="last"><a href="#" class="checkout_3_act">Payment Method</a></li>
        </ul>
        <div class="clear_both"></div>
      </div><!-- menu_pathway -->
      <input id="currentStep" type="hidden" value="1"/>
      <input id="lastStep" type="hidden" value="${CHECKOUT_DETAILS.checkoutStep}"/>
     <div class="payment_process_content"> 
    <%
               		 String redirectURL ="";
	                if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("STAGING"))
	                {
	             	   /* Client client = new Client("355325974547159", "2bff70115b3ad2bd7d2d61559d750f65");   */
	             	   Client client = new Client("360291777383552", "3352c5aa3b2e0b7ac1cd7423eeebd77e");
	            	   FacebookFactory facebookFactory = new FacebookFactory(client,HttpClientType.URL_FETCH_SERVICE); 
	            	   redirectURL = facebookFactory.getRedirectURL("https://testing.solestruck.com/renderPage.htm?page=redirect", Display.POPUP, Permission.EMAIL, Permission.OFFLINE_ACCESS);
	                }
	                else if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("LIVE"))
	                {
	             	   Client client = new Client("421260994576981", "e4ed5353c4e302f41d3b2d7516a17f4d");                	
	            	   FacebookFactory facebookFactory = new FacebookFactory(client,HttpClientType.URL_FETCH_SERVICE); 
	            	   redirectURL = facebookFactory.getRedirectURL("https://www.solestruck.com/renderPage.htm?page=redirect", Display.POPUP, Permission.EMAIL, Permission.OFFLINE_ACCESS);
	                }
	                else if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("DEV"))
	                {
	                	Client client = new Client("102732789875589", "629718271b12cb4a039e7b99f70985a6");                	
	            		FacebookFactory facebookFactory = new FacebookFactory(client,HttpClientType.URL_FETCH_SERVICE); 
	            		redirectURL = facebookFactory.getRedirectURL("http://localhost:9999/renderPage.htm?page=redirect",Display.POPUP,Permission.EMAIL,Permission.OFFLINE_ACCESS,Permission.PUBLISH_STREAM);
	            			
	                }
		%>
       <div class="email_address"  style="display:block;">
        <form action="" method="post" name="check_out_sign_in" onsubmit="return false;">
            <div class="checkout_with_email">
            	<div class="facebook_signindiv"><a href="#" class="facebook_signin" onclick="loadingForFbCo('checkout');window.open('<%=redirectURL%>','FacebookLogin',
                'left=370,top=180,width=630,height=325,toolbar=1,resizable=0');">Sign In With Facebook</a></div>
            	<div class="faceboodline_div">
				    <p class="facebookline"></p>
				    <div class="facebookor">OR</div>
				    <p class="facebookline"></p>
				    <div style="clear:both;"></div>
				</div>
				<div><span class="checkout_error" id="checkout_emailavail_err" style="display:none">Invalid Email Address</span></div>
				<div class="facebook_emailgo">
					<input type="text" id="email_firstStep" class="input_box1 tooltip_t text_title_act" title="Email" value="Email" />
					<input class="gobtn" type="button" id="signIn_firstBtn" value="Go"/>
				</div>
				<div><span class="checkout_error" id="checkout_sign_err" style="display:none;">Email address and/or Password do not match our records.</span></div>
				<div class="facebook_emailpasswordgo_div" style="display:none">
					<div class="facebook_emailpasswordgo" >
						<input type="text" id="email_SignIn" class="input_email tooltip_t text_title_act" title="Email" value="Email" />
						<input type="password" id="password_SignIn" style="display:none" class="input_password tooltip_t text_title_act" title="Password"/>
						<input type="text" id="password_SignIn_clear" class="input_password tooltip_t text_title_act" title="Password" value="Password" />
						<input class="gobtn1" type="button" id="btnSignIn" value="Go"/>
					</div>
					<a class="fgt_pwd" href="#">Forgot Your Password?</a>
				</div>
				<div></div>
            </div><!-- checkout_with_email -->
        </form>
      </div><!-- email_address -->
      
      
      <!--<div class="email_addres_2">
        <form action="" method=" post" name="check_out_sign_in" class="check_out_signin_holder" onsubmit="return false;">
        	 <div class="checkout_with_signin ">
            	<h2>Get Started.</h2>
                <span class="checkout_error" id="checkout_sign_err" style="display:none;">Email address and/or Password do not match our records.</span>
                <div class="clear_both"></div>
                 <input type="text" id="email_SignIn" class="input_box tooltip_t text_title_act" title="Email Address" value="Email Address"/>
                 <input type="password" id="password_SignIn" style="display:none;" class="input_box input_box_highlight tooltip_t" title="Your Solestruck Password"/>
                 <input type="text" id="password_SignIn_clear" class="input_box input_box_highlight tooltip_t" title="Your Solestruck Password" value="Your Solestruck Password" />
                 <div class="clear_both"></div>
                 <div id="btnSignIn" class="mrw_btn email_address2_act">
                 	Sign In
                    <code class="wht_rt_arrow"></code>
                 </div><!-- brw_btn 
                 <a class="fgt_pwd" href="#">Forgot Your Password?</a>
                 <div class="clear_both"></div>
            </div><!-- checkout_with_signin 
        </form>
        <div class="clear_both"></div>
      </div><!-- email_addres_2 -->
      
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
            <i id="forgot_invalid_label" class="invalid_user_password" style="display:none;" > Please enter your email </i><div class="clear_both" ></div>
            <input id='forgot_emailId' name="email" type="text" class="input_box" id="email" />
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