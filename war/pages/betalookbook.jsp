<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><%@page import="com.veroniqa.frontend.util.VeroniqaConstants"  %><%@taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %><%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %><%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %><%@taglib prefix="frm" uri="http://www.springframework.org/tags/form" %><%@ taglib prefix="sr" uri="http://solestruck.com/resources" %><head><meta name="googlebot" content="index"/><meta name="robots" content="index,follow"/><meta name="robots" content="noodp"/><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>SOLESTRUCK - Womens Shoes, designer shoes womens, women's shoes, shoes, flip-flops, women shoes, evening shoes, casual shoes, comfort shoes, Solestruck</title><link rel="shortcut icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" /><link rel="icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" /><link href="/style/${common_css}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm" rel="stylesheet" type="text/css"/><script async type="text/javascript" src="/script/${common_js}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm"></script><script async type="text/javascript">$(function() {$('.tooltip_book').tipsy({trigger: 'hover', gravity: 'n'});$('.tooltip_video').tipsy({trigger: 'hover', gravity: 'n',fade:true});});</script><script type="text/javascript">var _gaq = _gaq || [];var pluginUrl ='//www.google-analytics.com/plugins/ga/inpage_linkid.js';_gaq.push(['_require', 'inpage_linkid', pluginUrl]);_gaq.push(['_setAccount', '<%=VeroniqaConstants.getAnalyticsID()%>']);_gaq.push(['_trackPageview']);(function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();</script><script type="text/javascript">var _gaq = _gaq || [];var pluginUrl ='//www.google-analytics.com/plugins/ga/inpage_linkid.js';_gaq.push(['_require', 'inpage_linkid', pluginUrl]);_gaq.push(['_setAccount', '<%=VeroniqaConstants.getNewCheckoutAnalyticsID()%>']);_gaq.push(['_trackPageview']);(function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();</script></head><% String imageURL=VeroniqaConstants.IMAGE_URL; %><body><div class="look_book"><div class="top_bar"><div class="global_nav_holder"><tiles:insertAttribute name="topmenumain"/></div></div><div id="wrapper"><tiles:insertAttribute name="header"/><div class="menu_pathway"><ul><li class="pathway_home"><a href="/">Home</a></li><li class="path_arrow"></li><li><span>Lookbook</span></li></ul><div class="clear_both"></div></div><h1 class="nb">Lookbook</h1><div class="content_holder"><c:set var="lbCount" value="0"/><ul class="lookbook_gallery"><c:forEach items="${lbbanners}" var="lookbook"><%-- <input type="text" value="${lookbook.albumCoverImageURL}" ></input> --%><c:set var="lbCount" value="${lbCount+1}"/><c:set var="bannerid" value="${lookbook.key}"/><c:set var="lbAlbumName" value="${lookbook.albumName}"/><c:set var="videoCoverImageURL" value="${lookbook.videoCoverImage}"/><c:set var="youTubeURL" value="${lookbook.youtubeCode}"/><c:set var="lbAlbumNameL" value="${fn:toLowerCase(lbAlbumName)}"/><%-- <c:set var="lbAlbumNameSm" value="${fn:replace(lbAlbumNameL,' ','')}"/> --%><c:set var="lbAlbumNameSmall" value="${fn:replace(lbAlbumNameL,' ','_')}"/><c:set var="imageLink" value="${lookbook.imageLink}"/><c:set var="youTubeURLHash" value="1"/><%-- <c:set var="videoLink" value="${lookbook.}"/> --%><input type="hidden" value="${lookbook.deleted}"></input><input type="hidden" value="${lbCount}"></input><input type="hidden" value="${lbAlbumNameSmall}"></input><input type="hidden" value="${lbAlbumName}" id="albumName"></input><input type="hidden" value="${bannerid}" id="bannerid"></input><input type="hidden" value="${lbCount}"></input><input type="hidden" value="${imageLink}" id="imageLink"></input><input type="hidden" value="${lookbook.deleted}"></input><input type="hidden" value="${youTubeURL}" id="youTubeURL"></input><input type="hidden" value="${videoCoverImageURL}" id="videoCoverImageURL"></input><c:if test="${lookbook.deleted eq false}" ><c:if test="${lbCount%3!=0}"><li><a><img src= "${lookbook.albumCoverImageURL}" width="300" height="220"/><div class="hover_state"><c:if test="${not empty lookbook.youtubeCode and lookbook.youtubeCode eq '#'}"><div class="hover_state_holder hover_state_holder_s"><code class="book_icon tooltip_book" title="View Lookbook" id="bi_${bannerid}"></code><div class="clear_both"></div></div></c:if><c:if test="${not empty lookbook.youtubeCode  and lookbook.youtubeCode ne '#'}"><div class="hover_state_holder "><code class="book_icon tooltip_book" title="View Lookbook" id="bi_${bannerid}"></code><code class="video_icon tooltip_video" title="Watch Video" id="vi_${bannerid}"></code><div class="clear_both"></div></div></c:if></div></a></li></c:if><c:if test="${lbCount%3==0}" ><li class="no_right_margin"><a><img src= "${lookbook.albumCoverImageURL}" width="300" height="220"/><div class="hover_state"><c:if test="${not empty lookbook.youtubeCode and lookbook.youtubeCode eq '#'}"><div class="hover_state_holder hover_state_holder_s"><code class="book_icon tooltip_book" title="View Lookbook" id="bi_${bannerid}"></code><div class="clear_both"></div></div></c:if><c:if test="${not empty lookbook.youtubeCode  and lookbook.youtubeCode ne '#'}"><div class="hover_state_holder "><code class="book_icon tooltip_book" title="View Lookbook" id="bi_${bannerid}"></code><code class="video_icon tooltip_video" title="Watch Video" id="vi_${bannerid}"></code><div class="clear_both"></div></div></c:if></div></a></li></c:if></c:if></c:forEach></ul></div><div class="clear_both"></div><tiles:insertAttribute name="footer"/><div class="clear_both"></div></div><tiles:insertAttribute name="PopUp"/><div id="backgroundPopup"></div></div><script type="text/javascript">var gts = gts || [];gts.push(["id", "<%=VeroniqaConstants.getGoogleTrustedStoreID()%>"]);gts.push(["google_base_offer_id","12345"]);gts.push(["google_base_subaccount_id", "<%=VeroniqaConstants.getGoogleTrustedStoreID()%>"]);gts.push(["google_base_country", "US"]);gts.push(["google_base_language", "EN"]);(function() {var scheme = (("https:" == document.location.protocol) ? "https://" : "http://");var gts = document.createElement("script");gts.type = "text/javascript";gts.async = true;gts.src = scheme + "www.googlecommerce.com/trustedstores/gtmp_compiled.js";var s = document.getElementsByTagName("script")[0];s.parentNode.insertBefore(gts, s);})();</script><script type="text/javascript">/* <![CDATA[ */var google_conversion_id = 1070046381;var google_conversion_label = "yGMMCJO-2QMQrbme_gM";var google_custom_params = window.google_tag_params;var google_remarketing_only = true;/* ]]> */</script><script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js"></script><noscript><div style="display:inline;"><img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/1070046381/?value=0&label=yGMMCJO-2QMQrbme_gM&guid=ON&script=0"/></div></noscript><script src="http://ib.adnxs.com/seg?add=1319617&t=1" type="text/javascript"></script></body></html>