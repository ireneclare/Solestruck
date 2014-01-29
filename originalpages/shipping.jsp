<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page import="com.veroniqa.frontend.util.VeroniqaConstants" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
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
<link href="/style/${common_css}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm" rel="stylesheet" type="text/css"/>
<script async type="text/javascript" src="/script/${common_js}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm"></script>
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
     	


<h1 class="nb ">Shipping</h1>
         <div class="content_holder">
            <div class="left_nav">
                    <ul>
                        <li><a href="/aboutus/">About Us</a></li>
                        <li class="active"><a href="/shipping/">Shipping</a></li>
                        <li><a href="/returns/">Returns</a></li>
                        <li><a href="/international/">International</a></li>
      					<li><a href="/sizechart/">Size Charts</a></li>
                        <li><a href="/faq/">FAQs</a></li>
                        <li><a href="/orderstatus/">Order Status</a></li>
                        <li><a href="/customerservice/">Customer Service</a></li>
                        <li><a href="/giftcertificates/">Gift Certificates</a></li>
                        <li><a href="/accountinfo/">My Account</a></li>
                        <li><a href="/privacynotice/">Privacy Notice</a></li>
                        <li><a href="/termsofuse/">Terms Of Use</a></li>
						<li><a href="/jobs/">Jobs</a></li>
                    </ul>
                      
  				<br>
                  <a class="stella-seal"></a>
					<script defer src="//seal.stellaservice.com/public/js/seal.js"></script>    


                </div>

                <div class="inner_content">
                	<h3>Why everyone loves Solestruck: </h3>
                    <p>We're an independent, family-run boutique store. We run with a small team of obsessed staff that treats you like you just walked in to your favorite local small town store. We carry unique and youth-driven brands to keep you looking fresh and fashion forward. Our goal is to rid the world of ugly shoes one pair at a time. We've been doing it for nine years now. Rest assured, we're here to help you werque it out.</p>
                    
                    <!-- <h3>Get FREE Shipping in the US &amp; Around the World!</h3>
                    <p>Free Shipping for all repeat US customers on any order! Just log in during checkout. <br />
                        FREE standard shipping on all international orders $199 USD or more. <a href="/loadCustomerServicePage.htm?page=International">Click here for more information</a>.	<br />
                        $9.99 Express Shipping on all US orders.
                     </p> -->
					<!-- <h3>Shipping Rates, Times and Tracking:</h3> -->
					<h3>Get free shipping!</h3>
					<p class="dot line_space"> On all US orders.</p>
					<p class="dot line_space"> On all Canada orders.</p>
					<p class="dot line_space"> On all international orders $199 or more. <a href="/international/">Click here for international rates.</a></p>
					<br/>
					
					<!-- <h3>Free Shipping for all US and Canada orders!</h3>
					<p>Use our calculator below. FREE standard shipping on all international orders $199 USD or more. <a href="/loadCustomerServicePage.htm?page=International">Click here for international rates.</a> </p> -->
                    <div class="clear_both"></div>
                    
                    <div class="shipping_calc" style="display:block;">
                    	<h3>U.S Shipping Calculator:</h3>
                       <p>Select your state, province, or US Territory to see your shipping options, rates, &amp; delivery estimates.</p>
                        	<div class="custom_dropdown custom_dropdown_220 dwn_radius">
             					<input type="text" id="stateName" readonly="readonly" value="Select Your State, Province, or US Territory" class="input_field_220" name="State">
                                <span class="custom_drop_nav"></span>
                                 <ul>
                                    <li id="state_00">Please Select A State</li>
                                    <c:forEach items="${stateList}" var="stateUS">
											<li id="state_${stateUS.stateCode}">${stateUS.stateName}</li>
									</c:forEach>
                                 </ul>
                			</div>
                            <div class="clear_both"></div>
                            <div class="shipping_tc">
                            	<h3>Shipping Time &amp; Cost For: <span id="statenm"></span></h3>
                                <ul id="stdUL">
                                	<li><h4>Standard Shipping</h4></li>
                                    <li>Estimated Delivery Time:<span id="dayStd"></span></li>
                                    <li>Cost:<span id="costStd"></span></li>
                                </ul>
                                <br/>
                                <ul id="expUL">
                                	<li><h4>Express Shipping</h4></li>
                                    <li>Estimated Delivery Time:<span id="dayExp"></span></li>
                                    <li>Cost:<span id="costExp"></span></li>
                                </ul>
                                <br/>
                                <ul id="ovnUL">
                                	<li><h4>Overnight Shipping</h4></li>
                                    <li>Estimated Delivery Time:<span id="dayOvn"></span></li>
                                    <li>Cost:<span id="costOvn"></span></li>
                                </ul>
                                <ul id="stdUSPS">
                                	<li><h4>Standard USPS</h4></li>
                                    <li>Estimated Delivery Time:<span id="dayStdUSPS"></span></li>
                                    <li>Cost:<span id="costStdUSPS"></span></li>
                                </ul>
                                <ul id="expUSPS">
                                	<li><h4>Express USPS</h4></li>
                                    <li>Estimated Delivery Time:<span id="dayExpUSPS"></span></li>
                                    <li>Cost:<span id="costExpUSPS"></span></li>
                                </ul>
                                <p>* (e.g. Express and Overnight orders placed after 4:00pm PST will ship on the next business day.)<br />
                                ** (e.g. Overnight orders placed after 2:30pm PST will ship on the next business day.)</p>
                            </div><!-- shipping_tc-->
                            <div class="clear_both"></div> 
							<br/> 
                            <a href="/international/">Looking for International Shipping Info?</a>
                           
                    </div><!-- shipping_calc-->
                    
                    <!-- <h3>Insanely Fast Shipping</h3> -->
                    
                    
                    <h3>When will you ship it?</h3>
					<!-- <p>We're like lightning and ship your shoes fast! Most orders ship the same day if the order is placed before 4pm PST Monday through Friday.  Orders placed on Saturday or Sunday may be processed same day, but actually ship on Monday. </p> -->
					<p>We're like lightning and ship your shoes fast! Orders placed before 3:30pm PST M-F with Fedex will ship same day. Orders with USPS placed before 11am PST M-F will ship same day. Orders placed on Saturday or Sunday will ship on Monday, excluding holidays.</p>

					<h3>When will I get it?</h3>
					<p>FYI - calculating your arrival time can be tricky.  The first business day is always the business day AFTER something ships. For example, if you order on Saturday, the order could be processed on Saturday but it ships on Monday so start counting your first business day on Tuesday which is the day after it ships. If you order on Monday before 3.30pm PST, your shoes ship on Monday and your first business day starts on Tuesday.</p>   

					<h3>If I order with Overnight on Friday will I get it on Saturday?</h3>
					<p>Nope. Overnight and Express orders do not have Saturday delivery.  Choose Overnight on Friday before 3.30pm PST and it arrives on Monday.</p>

					<h3>What if I am in Alaska, Hawaii, or have a PO Box?</h3>
					<p>We use the U.S. Postal Service (USPS) for orders to Alaska, Hawaii, APO/FPO or a P.O. Box. For Alaska or Hawaii orders, please allow 6-10business days for standard shipping (Parcel Post) and 2 to 3 business days for express shipping (Priority). For APO/FPO orders, please allow 6-10 business days for standard shipping and 3-6 business days for express shipping.</p>
                    
                    <h3>Tracking:</h3>  
					<p class="dot line_space">Once we box up your order, we email your confirmation with your tracking number (check your spam if you don't see it!)</p> 
					<p class="dot line_space">Hold tight - you won't see any tracking updates until the package is picked up.</p>
					<p class="dot line_space">We put your package on a pallet waiting to get picked up by the carriers. </p>
					<p class="dot line_space">The package gets picked up by the carriers Monday through Friday and usually get its first tracking scan that night.</p>
					<p class="dot line_space">Packages with standard free shipping get put in trucks or trains for delivery to you and may not have many updates until they reach your state.</p>
					<p class="dot line_space">Overnight and Express packages get put on planes and are up in the air fast!</p>
					<p class="dot line_space">Click the tracking number or the "TRACK MY PACKAGE" button and you can see the tracking updates.</p>
					<p class="dot">You can also log into your Account and track it there.</p>
                    
                    <!-- <p>We're like lightning and ship your shoes fast - most same day if placed before 4pm PST M-F. Most orders are sent via UPS and will arrive in 5 
                    business days or less with standard shipping. The first business day starts the day after the order ships.</p>

                    <p>With 2-day Express delivery, orders placed before 4pm PST M-F will arrive on the second business day, which will be M-F only, no 
                    Saturday/Sunday delivery. Overnight orders placed before 3pm PST M-F will arrive on the next business day, which will be M-F only, no 
                    Saturday/Sunday delivery.</p>
 
                    <p>We use the U.S. Postal Service (USPS) for orders to Alaska, Hawaii, APO/FPO or a P.O. Box. For Alaska or Hawaii orders, please allow 6-10 
                    business days for standard shipping (Parcel Post) and 2 to 3 business days for express shipping (Priority).  For APO/FPO orders, please allow 6-10 
                    business days for standard shipping and 3-6 business days for express shipping.</p>
 
                    <p><b>Track your order</b>. You will receive a shipping confirmation email once we ship your order and it will include your ing number that you	
                    can click on to view the status. Or, just visit the "<a href="javascript:void(0);" class="showPopup">my account</a>" page, sign in to your account, and click on Track 
                    Order. We'll link you to the delivery service's website so you can check on your order's shipping progress. Remember that it may take up to 24 
                    hours for tracking information to appear on the website.</p> -->
                    


                    <div class="clear_both"></div>
                    <div class="border"></div>

                    <div class="clear_both"></div>
                    <div class="column1">
                      <h3>Looking for the Return Address?</h3>
                      <p>Solestruck<br/>
                         Returns Dept.<br/>
                         7319 SW Kable Ln<br/>
                         Suite 700<br/>
                         Portland OR 97224 
                       </p>
                      <div class="clear_both"></div>
                    </div>
                    <div class="column2">
                    	<h3>Have More Questions?</h3>
                        <p><a href="javascript:void(0);" class="emailuspopup_act">Please email us</a> or call us at 1.800.494.1260 <br />
							Monday - Friday  7am to 5pm PST.</p>
                           <span class="gry_btn nm emailuspopup_act brwn_btn">Email Us Instantly</span>
                     	<div class="clear_both"></div>
                    </div>
                    <div class="clear_both"></div>
            </div><!--About Content -->  
           <div class="clear_both"></div>

         </div><!-- content_holder --><!-- move to template till here-->




             			
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
