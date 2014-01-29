<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html>
<%@page
import="com.veroniqa.frontend.util.VeroniqaConstants" %>
<%@page 
import="com.veroniqa.frontend.util.VeroniqaUtil" %>
<%@page
import="java.util.*" %>

<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="sr" uri="http://solestruck.com/resources" %>

<!-- <c:set var="videoTitle" value="${hpBannerVideoTitle}" />
<c:if test="${videoTitle eq null}"><c:set var="videoTitle" value="false"/></c:if>

<c:set var="videoURL" value="${hpBannerVideoUrl}" />
<c:if test="${videoURL eq null}"><c:set var="videoURL" value="false"/></c:if>

<c:set var="videoThumbNailURL" value="${hpBannerVideoThumbNailUrl}" />
<c:if test="${videoThumbNailURL eq null}"><c:set var="videoThumbNailURL" value="false"/></c:if> -->
<c:set var="bannerForVideo" value="${hpBannerUrl}" />
<head>

<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta name="googlebot" content="index">
<meta name="robots" content="index,follow">
<meta name="robots" content="noodp">
<meta name="KEYWORDS" content="Jeffrey Campbell Shoes, Rachel Comey Shoes, Senso Shoes, Maurie and Eve shoes, Sam Edelman Shoes, Dolce Vita Shoes, Minimarket shoes, Opening Ceremony Shoes, United Nude shoes, Ash shoes, Finsk Shoes, Ugg Australia Boots.">
<meta name="DESCRIPTION" content="Free Shipping Worldwide + Easy Returns // Tastefully edited selection of must have shoes and boots // We're small and independent and just trying to share our shoe game with the world!">

<title>To rid the world of ugly shoes one pair at a time...SOLESTRUCK.COM</title>

<!-- <link rel="icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" /> -->


<link async href="/style/${common_css}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm" rel="stylesheet" type="text/css">
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
<%-- <script type="text/javascript">

var _gaq = _gaq || [];
var pluginUrl = 
 '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
_gaq.push(['_require', 'inpage_linkid', pluginUrl]);
_gaq.push(['_setAccount', '<%=VeroniqaConstants.getNewCheckoutAnalyticsID()%>']);
_gaq.push(['_trackPageview']);

(function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();

</script> --%>
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


<input type="hidden" id="botbpopup" value="${botbFlag}"/>




<div class="top_bar">
  <div class="global_nav_holder">
  
    <tiles:insertAttribute name="topmenumain"/>
    
      </div><!-- global_nav_holder --> 
</div><!-- top_bar -->

<tiles:insertAttribute name="header"/>

<div  class="banner">
<div id="mySlider" class="evoslider default"><!-- start evo slider -->
<dl>
<c:forEach items="${bannerUrl}" var="bannerurlList" varStatus="index">
<dt>${index.index}</dt>
<dd>

<a href='${bannerurlList.imageLink}'>
<img id="bannerUrl_${bannerurlList.key.id}" width="2000" height="650" src="${bannerurlList.imageUrl}" videotitle="${bannerurlList.videoTitle}" />
</a>

<c:if test='${(bannerurlList.videoThumbNailImageURL ne "#") && (bannerurlList.videoThumbNailImageURL ne "") && (bannerurlList.videoThumbNailImageURL ne " ")}'>
<a href='${bannerurlList.videoURL}'>
<img id='checkVideo_${bannerurlList.key.id}' width="2000" height="650" src="${bannerurlList.videoThumbNailImageURL}"/>
</a>
</c:if>

</dd>

</c:forEach>
</dl>
</div>

<div id="bannerForVideo">
<img id="videoBanner" src="${bannerForVideo}" height="650"/>
<div class="arrow_prev" id="arrow_prev"></div>
<div class="arrow_next" id="arrow_next"></div>
</div>



</div>

<input type="hidden" id="sysTimeForHPBrowserBack"  value=""></input>
<input type="hidden" id="retainingHP_scroll_top" value="0"></input>
<input type="hidden" id="isloadMoreHPResultsClicked" value="false"></input>
 
 <!-- Video Part -->
 <input type="hidden" id="img_url"  value="'${hpBannerLink}'"></input>
 <input type="hidden" id="video_url"  value="${videoURL}"></input>
 <input type="hidden" id="videoThumbNail_url"  value="${videoThumbNailURL}"></input>
 <input type="hidden" id="video_title"  value="${videoTitle}"></input>
 <input type="hidden" id="holidayshipping_status"  value="${holidayshipping}"></input>
 
 
 <input type="hidden" id="fbLoginErrorMessage" value="${sessionScope.fbLoginErrorMessage}">
 
 <!-- Video Part Data -->
 
<div id="wrapper">
	<tiles:insertAttribute name="main"/>
	<tiles:insertAttribute name="footer"/> 
  <input id="source" type="hidden" value="${from}" /> 
  <div class="clear_both"></div>
</div><!-- wrapper -->

<tiles:insertAttribute name="PopUp"/> 




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

<!-- Segment Pixel - SoleStruck--Visitor - DO NOT MODIFY -->
<script src="http://ib.adnxs.com/seg?add=1319616&t=1" type="text/javascript"></script>
<!-- End of Segment Pixel -->

</body>
</html>
