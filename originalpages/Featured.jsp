<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="frm" uri="http://www.springframework.org/tags/form" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@taglib prefix="sr" uri="http://solestruck.com/resources" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%@taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>

<%@page
import="com.veroniqa.frontend.util.VeroniqaConstants" %>
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<link href="/style/${common_css}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm" rel="stylesheet" type="text/css">
<link href="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/testing/css/BrandFeatures.css" rel ="stylesheet" type="text/css">
<link href='http://fonts.googleapis.com/css?family=Karla:400italic,700italic' rel='stylesheet' type='text/css'>
<script type="text/javascript">
	var _gaq = _gaq || [];
	_gaq.push(['_setAccount', '<%= VeroniqaConstants.getAnalyticsID() %>']);
	_gaq.push(['_trackPageview']);
	(function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://' : 'http://') + 'stats.g.doubleclick.net/dc.js';
	var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();
	
	(function() {
	  var scriptLocation=('https:' == document.location.protocol ? 'https://ssl.' : 'http://') + location.host+'/script/${common_js}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm';
	  if(location.host.indexOf("www.fortyeight.com")!=-1 || location.host.indexOf("fortyeight.com")!=-1)
	  {
	 	 scriptLocation=('https:' == document.location.protocol ? 'https://' : 'http://') + location.host+'/script/${common_js}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm';
	  }
	  else if(location.host.indexOf("www.testing.fortyeight.com")!=-1 || location.host.indexOf("testing.fortyeight.com")!=-1)
	  {
	  	scriptLocation=('https:' == document.location.protocol ? 'https://' : 'http://') + location.host+'/script/${common_js}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm';
	  }
	 else if(location.host.indexOf("localhost")!=-1 || location.host.indexOf("appspot.com")!=-1)
		  scriptLocation=('https:' == document.location.protocol ? 'https://' : 'http://') + location.host+'/script/${common_js}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm';
	    var cj = document.createElement('script'); cj.type = 'text/javascript'; cj.async = true;
	    cj.src = scriptLocation;
	    var sss = document.getElementsByTagName('script')[0]; sss.parentNode.insertBefore(cj, sss);
	  })();
	
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
  
<c:forEach items="${eventList}" var="event">
<c:set var="backgroundBanner" value=""/>
<c:set var="insideBanner" value=""/>
<c:if test="${event.eventName ne'solestruck-knows-you'}">
<c:choose>
<c:when test="${event.featuredBackgroundBannerURL ne null && fn:indexOf(event.featuredBackgroundBannerURL,'#') eq 0}">
<c:set var="style" value="background-color:${event.featuredBackgroundBannerURL};"/>
</c:when>
<c:when test="${event.featuredBackgroundBannerURL ne null && fn:indexOf(event.featuredBackgroundBannerURL,'#') ne 0 && fn:length(event.featuredBackgroundBannerURL) >0}">
<c:set var="style" value="background: url('${event.featuredBackgroundBannerURL}') repeat;"/>
</c:when>
</c:choose>
<c:if test="${event.featuredHomeBannerURL ne null && event.featuredHomeBannerURL ne ''}">
<c:set var="insideBanner" value="${event.featuredHomeBannerURL}"/>
</c:if>
<a href="/featured/${event.eventURL}" style="text-decoration:none;">
<div class="featured_holder1" <c:if test="${style ne null && style ne ''}">style="${style}"</c:if>>
		<div class="feature_main" style="background: url(${insideBanner}) repeat;">
        	<div>
                <p>
                 <c:choose>
                 
                 <c:when test="${fn:length(fn:split(event.description,' ')) eq 25 }" >${event.description}...   see more.</c:when>
                <c:otherwise>
                ${event.description}
                </c:otherwise>
                </c:choose>
                
                </p>
            </div>
        </div>
	</div>
</a>
</c:if>
</c:forEach>

<div class="clear_both"></div>
<tiles:insertAttribute name="footer"/>
<div class="clear_both"></div>	
</div><!-- wrapper -->
<tiles:insertAttribute name="PopUp"/>

<!-- Segment Pixel - SoleStruck--Shopper - DO NOT MODIFY -->
<script src="http://ib.adnxs.com/seg?add=1319617&t=1" type="text/javascript"></script>
<!-- End of Segment Pixel -->

</body>
</html>