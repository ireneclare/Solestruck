<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@page
import="com.veroniqa.frontend.util.VeroniqaConstants" %>
<%@taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="frm" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="sr" uri="http://solestruck.com/resources" %>
<head>
 
<meta name="googlebot" content="index">
<meta name="robots" content="index,follow">
<meta name="robots" content="noodp">
<meta name="KEYWORDS" content="Womens Shoes, designer shoes womens, women's shoes, shoes, flip-flops, women shoes, evening shoes, casual shoes, comfort shoes, Solestruck">
<meta name="DESCRIPTION" content="Solestruck is a premier retailer of women's shoes for all occasions, including dress shoes, comfort shoes, casual shoes, flats, pumps, sneakers, athletic shoes, slip-ons, and sling backs."/><meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>SOLESTRUCK - Womens Shoes, designer shoes womens, women's shoes, shoes, flip-flops, women shoes, evening shoes, casual shoes, comfort shoes, Solestruck</title>

<link async rel="icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon">
<link async href="/style/${common_css}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm" rel="stylesheet" type="text/css">



<script async type="text/javascript">

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

<div class="top_bar">
  <div class="global_nav_holder">
    <tiles:insertAttribute name="topmenumain"/>
  </div>
</div>
<div id="wrapper">
<tiles:insertAttribute name="header"/>
         <div class="clear_both"></div>
         <div class="sorry_no_items">
            	<h2>Sorry, No Items Were Found.</h2>
                <span>Need help finding what your looking for? Call us at 1.800.494.1260 (M-F 7a - 5p PST) or <a class="emailuspopup_act">E-Mail Us</a></span>    
            </div><!-- sorry_no_items -->
		 <h2 class="street_head">STREET CRED</h2>
         <h3 class="street_subhead">Tag your Instagram pics with #ss_stylename to get in the mix.</h3>
    
        <div class="contact_holder">
            <code  class="popup_processing_icon"></code>
            <div class="clear"></div>
             <div class="street_cred_holder">
            <ul id="street_cred" style="width:1000px"></ul>
            <div class="clear_both"></div>
            <code  class="street_popup_processing_icon"></code>
            <span class="street_loadmore brwn_btn">LOAD MORE PICS</span>
            </div>
       </div>
      <div class="popup_holder"> 
                 <div id="my-carousel-2" class="carousel module"></div>
       </div>
      <div class="clear_both"></div>
      
	
                            <div class="clear_both"></div>
                             <tiles:insertAttribute name="footer"/>
           						
                                <div class="clear_both"></div>	
                                <div id="backgroundPopup_street"></div>
                                
    </div>
    <tiles:insertAttribute name="PopUp"/> 
	<div id="backgroundPopup"></div>
<input type="hidden" id="front_end_url" value="${page}" />


<script async type="text/javascript">

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
  
/* Added for Search Analytics by YES */
  function readCookieForSearch(name) {
		var nameEQ = name + "=";
		var ca = document.cookie.split(';');
		for(var i=0;i < ca.length;i++) {
			var c = ca[i];
			while (c.charAt(0)==' ') c = c.substring(1,c.length);
			if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
		}
		return null;
	}
 
  var searchterm="";
  searchterm=readCookieForSearch("analyticsSearchTerm");
  if(searchterm!=null && searchterm!="")
	  {
		  var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www."); document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E")); 
		  
		  var pageTracker = _gat._getTracker("<%=VeroniqaConstants.getAnalyticsID()%>");
		  pageTracker._initData(); 
		  
		  
		  pageTracker._trackPageview('/search_results.php?q='+searchterm); 
	  }
  
  /* Upto here Added for Search Analytics by YES */

</script>


<script async type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 1070046381;
var google_conversion_label = "yGMMCJO-2QMQrbme_gM";
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
/* ]]> */
</script>
<script async type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/1070046381/?value=0&label=yGMMCJO-2QMQrbme_gM&guid=ON&script=0"/>
</div>
</noscript>

<script async type="text/javascript" src="/script/${common_js}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm"></script>

<!-- Segment Pixel - SoleStruck--Shopper - DO NOT MODIFY -->
<script src="http://ib.adnxs.com/seg?add=1319617&t=1" type="text/javascript"></script>
<!-- End of Segment Pixel -->

</body>
</html>

