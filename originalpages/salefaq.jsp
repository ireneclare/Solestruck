<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@page
import="com.veroniqa.frontend.util.VeroniqaConstants"
 %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="sr" uri="http://solestruck.com/resources" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<head>
<meta name="googlebot" content="index"/>
<meta name="robots" content="index,follow"/>
<meta name="robots" content="noodp"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Solestruck Customer Service - we aim to please.</title>

<link rel="shortcut icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" />
<link rel="icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" />
<%-- <link href="/style/${common_css}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm" rel="stylesheet" type="text/css"/> --%>

 <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script>
 
<link type="text/css" href="<%=VeroniqaConstants.CSS_URL() %>reset.css" rel="stylesheet" />
<link type="text/css" href="<%=VeroniqaConstants.CSS_URL() %>global.css" rel="stylesheet" />
<link type="text/css" href="<%=VeroniqaConstants.CSS_URL() %>form.css" rel="stylesheet" />
<link type="text/css" href="<%=VeroniqaConstants.CSS_URL() %>jquery.jscrollpane.css" rel="stylesheet" />
<link type="text/css" href="<%=VeroniqaConstants.CSS_URL() %>jScrollPane.css" rel="stylesheet" />
<link type="text/css" href="<%=VeroniqaConstants.CSS_URL() %>style.css" rel="stylesheet" />

<script async type="text/javascript" src="/script/${common_js}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL() %>actions.js"></script>
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
	<div id="wrapper">
    <tiles:insertAttribute name="header"/>
<div class="black_faq_wrapper">
    	<h1 align="center">BLACK FRIDAY FREQUENTLY ASKED QUESTIONS</h1>
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
        	<p>Have other questions? Click on a question below to see the answer!</p>
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
    <div class="clear_both"></div>
           						
                                	<tiles:insertAttribute name="footer"/> 	
                                <div class="clear_both"></div>	
    </div><!-- wrapper -->
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
<script src="http://ib.adnxs.com/seg?add=1319617&t=1" type="text/javascript"></script>
<!-- End of Segment Pixel -->

</body>
</html>
    