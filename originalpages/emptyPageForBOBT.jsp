<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<%@page
import="com.veroniqa.frontend.util.VeroniqaConstants" %>
<%@page
import="com.veroniqa.frontend.util.EnvironmentUtil" %>
<%@page
import="com.veroniqa.frontend.util.VeroniqaUtil" %>
<%@page
import="java.util.*" %>

<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="sr" uri="http://solestruck.com/resources" %>
<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<meta name="googlebot" content="noindex"/>
<meta name="robots" content="noindex,nofollow"/>
<title>To rid the world of ugly shoes one pair at a time...SOLESTRUCK.COM</title>

<link rel="icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" />


<style type="text/css">




.scroll-pane
{
	width: 100%;
	height: 200px;
	overflow: auto;
}

</style>

 
<link href="/style/${common_css}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm" rel="stylesheet" type="text/css"/>
<script async type="text/javascript" src="/script/${common_js}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm"></script>

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


</head>

<% String imageURL=VeroniqaConstants.IMAGE_URL;%>

<body>

<%if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("LIVE")) {%>
<input type="hidden" id="sourceURL" value="http://www.solestruck.com"/>
<%} %>

<%if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("STAGING") || EnvironmentUtil.getEnvironmentValue("AppMode").equals("DEV")) {%>
<input type="hidden" id="sourceURL" value="http://staging.solestruck.com"/>
<%} %>


<input type="hidden" id="botbpopup" value="${botbFlag}"/>
   <div id="backgroundPopup" style="display:none"></div> 

  <div class="popup_pos boot_popup" >
        <div class="login_popup_close popup_close_act" style="display:none;"></div>
            <div class="boot_popup_holder">
                 <div class="boot_col1 fl">
                  <div class="boot_form_holder ">  
                        <h1>BOTB <br />Summer Survival Kit Giveaway</h1>
                        <h2>3 Winners Walk Away With $800 Of <br />
                            BOTB Swag. Just Drop Your Email In.</h2>
                            
                        <div id="mc_embed_signup">
                            <form>
                              
                           
                            <div class="mc-field-group" >
                                <input type="text" value="Full Name" name="MMERGE1"  class="boot_popup_email text_val_act" id="botbFirstName" >
                            </div>
                             <div class="mc-field-group">
                                <input type="email" value="Email Address" name="EMAIL" class="boot_popup_email text_val_act" id="botbEmail">
                            </div>
                                <div id="mce-responses" class="clear">
                                    <div class="response" id="mce-error-response" style="display:none"></div>
                                    <div class="response" id="mce-success-response" style="display:none"></div>
                                </div>	<div class="clear"><input type="button" value="Enter Giveaway" name="subscribe" id="submitBotbData" class="boot_sbt_button"><code class="submit_btn_loading_icon"></code></div>
                            </form>
                             
                        </div> <!-- mc_embed_signup --> 
                         <div class="boot_thankyou_msg dn">
                       		<p>Thank you for entering the BOTB Summer Survival Kit Giveaway! &nbsp;
                            Winners will be contacted after May 7th. Good luck!</p>
                       </div><!-- boot_thankyou_msg -->
                        <span class="show_contest_act">See Contest Rules</span>
                      
                    </div><!-- boot_form_holder -->
                    <div class="boot_contest_holder dn">
                      <span class="back_form_act"> Back To BOTB Giveaway</span>
                      
                       
                      <div class="contest_holder boot-scroll-pan">
                      	<h2>Contest Details</h2>
                            <p>What better way to welcome a new brand to Solestruck than with a a giveaway? We have rolled out the red carpet out for LA-based BOTB, and it is nearly here! We are expecting the shoes in MAY, and we wanted to give you a sneak peak by offering the new collection on pre-sale. However, since you have been waiting for this launch for months, we have partnered with the babes over at BOTB, to make three fans of both brands VERY VERY happy. Welcome to the BOTB Summer Survival Kit Giveaway! Entering is as easy as dropping your email to us above, and three winners, all chosen at random, will walk away with MAJOR scores from BOTB.</p>
                            <p>Each winner will take home one pair of shoes of their choice from the current BOTB collection. In addition, the stylist and designers at BOTB will hand-select for you top-selling pieces from their ready to wear collection for all your summer needs! Each winner will walk away with approximately $800 worth of merch! Um, hello? What are you waiting for? We have posted some of our favorite pics from their clothing line on our blog so check it out. Drop us your info in the form above and you will be one step closer to a new start on your summer look! Contest closes May 7th, 2012.
</p>
                            <h2>Contest Rules</h2>
                            
                            <p>The BOTB Summer Survival Kit Giveaway is open globally to all Solestruck friends and fans. No employees of either company are eligible for this contest (nice try you guys). We can accept only one entry per email address, and the three winners will be chose at random from those addresses submitted. Winners will be notified for sizes and shipping information, upon drawing from all entries. Please note the Summer Survival Kits hold NO CASH VALUE an cannot be returned to either vendor. Please also note, that the stylists and designers from BOTB will hand-select your prize pack uniquely from best-selling and top-performing items trust me....EVERYTHING is rad so if you don't get what you want gift that to your bestie! All email addresses will be kept private for Solestruck and BOTB use. Please note, contest closes May 7, 2012. Winners will be contacted shortly thereafter and will receive prizes later in the month. Thank you for entering and please welcome to the site new brand ... BOTB.</p>
                           
                      </div><!-- contest_holder -->		
                    </div><!-- boot_contest_holder -->    
                 </div><!-- boot_col1 -->	
                 <div class="boot_col2 fl"></div><!-- boot_col2 -->
             <div class="clear_both"></div>
            </div><!-- boot_popup -->
    </div><!-- popup_pos -->

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

</html>
