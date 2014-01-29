<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@page import="com.veroniqa.frontend.util.VeroniqaConstants"  %>
<%@taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="frm" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="sr" uri="http://solestruck.com/resources" %>
<head>

<meta name="googlebot" content="index">
<meta name="robots" content="index,follow">
<meta name="robots" content="noodp">
<meta name="KEYWORDS" content="Womens Shoes, designer shoes womens, women's shoes, shoes, flip-flops, women shoes, evening shoes, casual shoes, comfort shoes, Solestruck">
<meta name="DESCRIPTION" content="Solestruck is a premier retailer of women's shoes for all occasions, including dress shoes, comfort shoes, casual shoes, flats, pumps, sneakers, athletic shoes, slip-ons, and sling backs.">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>SOLESTRUCK - Womens Shoes, designer shoes womens, women's shoes, shoes, flip-flops, women shoes, evening shoes, casual shoes, comfort shoes, Solestruck</title>

<link rel="shortcut icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon">
<link rel="icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon">

<link href="/style/${common_css}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm" rel="stylesheet" type="text/css">
<script async type="text/javascript" src="/script/${common_js}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm"></script>
<script async type="text/javascript">
	$(function() {
	$('.tooltip_b').tipsy({trigger: 'hover', gravity: 'n'});
	$('.tooltip_t').tipsy({trigger: 'hover', gravity: 'n',fade:true});
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
<% String imageURL=VeroniqaConstants.IMAGE_URL; %>

<body>



<div class="look_book">

<div class="top_bar">
  <div class="global_nav_holder">
  
    <tiles:insertAttribute name="topmenumain"/>
    
      </div><!-- global_nav_holder --> 
</div><!-- top_bar -->
	<div id="wrapper">
  <tiles:insertAttribute name="header"/>
          
            					

<div class="menu_pathway">
         	<ul>
                <li class="pathway_home"><a href="/">Home</a></li>
                <li class="path_arrow"></li>
                <li><span>Lookbook</span></li>
            </ul>
            <div class="clear_both"></div>
         </div><!-- menu_pathway -->
                           
         <h1>Lookbook</h1>
         <div class="content_holder">
             <ul class="lookbook_gallery">
             
             	<li>
             		<a>
						<img  src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/images/lookbook/On_The_Road_LookBook.jpg" width="300" height="220"/>
						<div class="hover_state">
                        <div class="hover_state_holder">
                            <code class="book_icon tooltip_t" title="View Lookbook" id="on_the_road_bi"></code>
                            <code class="vedio_icon tooltip_t" title="Watch Video" id="on_the_road_vi"></code>
                            <div class="clear_both"></div>
                        </div><!-- hover_state_holder -->
                    </div><!-- hover_state -->
					</a>
             	</li>
             	
             	<li>
             		<a href="/tba_ss_2012_LooKbook/">
						<img  src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/images/lookbook/TBA_SS_2012_LookBook.jpg" width="300" height="220"/>
						<div class="hover_state">
                        <div class="hover_state_holder hover_state_holder_s">
                            <code class="book_icon tooltip_t" title="View Lookbook" id="tba_ss_bi"></code>
                            <%-- <code class="vedio_icon"></code> --%>
                            <div class="clear_both"></div>
                        </div><!-- hover_state_holder -->
                    </div><!-- hover_state -->
					</a>
             	</li>
             	
             	<li class="no_right_margin">
             		<a>
						<img  src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/images/lookbook/NightRider_LookBook.jpg" width="300" height="220"/>
						<div class="hover_state">
                        <div class="hover_state_holder">
                            <code class="book_icon tooltip_t" title="View Lookbook" id="night_rider_bi"></code>
                            <code class="vedio_icon tooltip_t" title="Watch Video" id="night_rider_vi"></code>
                            <div class="clear_both"></div>
                        </div><!-- hover_state_holder -->
                    </div><!-- hover_state -->
					</a>
             	</li>
             	
             	<li>
             		<a>
						<img  src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/images/lookbook/InTheSpirit_LookBook.jpg" width="300" height="220"/>
						<div class="hover_state">
                        <div class="hover_state_holder">
                            <code class="book_icon tooltip_t" title="View Lookbook" id="in_the_spirit_bi"></code>
                            <code class="vedio_icon tooltip_t" title="Watch Video" id="in_the_spirit_vi"></code>
                            <div class="clear_both"></div>
                        </div><!-- hover_state_holder -->
                    </div><!-- hover_state -->
					</a>
             	</li>
             	
             	<li>
             		<a href="/to_be_announced_LooKbook/">
						<img  src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/images/lookbook/ToBeAnnounced_LookBook.jpg" width="300" height="220"/>
						<div class="hover_state">
                        <div class="hover_state_holder hover_state_holder_s">
                            <code class="book_icon tooltip_t" title="View Lookbook" id="tba_bi"></code>
                            <%-- <code class="vedio_icon"></code> --%>
                            <div class="clear_both"></div>
                        </div><!-- hover_state_holder -->
                    </div><!-- hover_state -->
					</a>
             	</li>
             	
             	<li class="no_right_margin">
             		<a href="/solestruckxbridgeburn_LooKbook/">
						<img  src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/images/lookbook/SolestruckBridgeBurn_LookBook.jpg" width="300" height="220"/>
						<div class="hover_state">
                        <div class="hover_state_holder hover_state_holder_s">
                            <code class="book_icon tooltip_t" title="View Lookbook" id="bridge_burn_bi"></code>
                            <%-- <code class="vedio_icon"></code> --%>
                            <div class="clear_both"></div>
                        </div><!-- hover_state_holder -->
                    </div><!-- hover_state -->
					</a>
             	</li>
             	
             	<li>
             		<a href="/la_isla_LooKbook/">
						<img  src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/images/lookbook/Laisla_LookBook.JPG" width="300" height="220"/>
						<div class="hover_state">
                        <div class="hover_state_holder hover_state_holder_s">
                            <code class="book_icon tooltip_t" title="View Lookbook" id="laisla_bi"></code>
                            <%-- <code class="vedio_icon"></code> --%>
                            <div class="clear_both"></div>
                        </div><!-- hover_state_holder -->
                    </div><!-- hover_state -->
					</a>
             	</li>
             	
             	<li>
             		<a href="/indian_summer_LooKbook/">
						<img  src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/images/lookbook/Indiansummer_LookBook.jpg" width="300" height="220"/>
						<div class="hover_state">
                        <div class="hover_state_holder hover_state_holder_s">
                            <code class="book_icon tooltip_t" title="View Lookbook" id="indian_summer_bi"></code>
                            <%-- <code class="vedio_icon"></code> --%>
                            <div class="clear_both"></div>
                        </div><!-- hover_state_holder -->
                    </div><!-- hover_state -->
					</a>
             	</li>
             	
             	<li class="no_right_margin">
             		<a href="/to_the_source_LooKbook/">
						<img  src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/images/lookbook/to_the_source.jpg" width="300" height="220">
						<div class="hover_state">
                        <div class="hover_state_holder hover_state_holder_s">
                            <code class="book_icon tooltip_t" title="View Lookbook" id="to_the_source_bi"></code>
                            <%-- <code class="vedio_icon"></code> --%>
                            <div class="clear_both"></div>
                        </div><!-- hover_state_holder -->
                    </div><!-- hover_state -->
					</a>
             	</li>
             	
             	<li>
             		<a href="/department_of_antiquities_LooKbook/">
             			<img  src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/images/lookbook/department_of_antiquities.jpg" />
             			<div class="hover_state">
                        <div class="hover_state_holder hover_state_holder_s">
                            <code class="book_icon tooltip_t" title="View Lookbook" onclick="window.location='/department_of_antiquities_LooKbook.htm'"></code>
                            <%-- <code class="vedio_icon"></code> --%>
                            <div class="clear_both"></div>
                        </div><!-- hover_state_holder -->
                    </div><!-- hover_state -->
             		</a>
             	</li>
             	
             	<li>
             		<a href="/checkList_Lookbook/">
             			<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/images/lookbook/checkList.jpg" />
             			<div class="hover_state">
                        <div class="hover_state_holder hover_state_holder_s">
                            <code class="book_icon tooltip_t" title="View Lookbook" onclick="window.location='/checklistlookbook.htm'"></code>
                            <%-- <code class="vedio_icon"></code> --%>
                            <div class="clear_both"></div>
                        </div><!-- hover_state_holder -->
                    </div><!-- hover_state -->
             		</a>
             	</li>
             	
             	<li class="no_right_margin">
             		<a href="/up_on_it_Lookboook/">
             			<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/images/lookbook/up_on_it.jpg" />
             			<div class="hover_state">
                        <div class="hover_state_holder hover_state_holder_s">
                            <code class="book_icon tooltip_t" title="View Lookbook" onclick="window.location='/up_on_it.htm'"></code>
                            <%-- <code class="vedio_icon"></code> --%>
                            <div class="clear_both"></div>
                        </div><!-- hover_state_holder -->
                    </div><!-- hover_state -->
             		</a>
             	</li>
             	
             	<li>
             		<a href="/weekenderLooKbook/">
             			<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/images/lookbook/weekenders.jpg" />
             			<div class="hover_state">
                        <div class="hover_state_holder hover_state_holder_s">
                            <code class="book_icon tooltip_t" title="View Lookbook" onclick="window.location='/weekender.htm'"></code>
                            <%-- <code class="vedio_icon"></code> --%>
                            <div class="clear_both"></div>
                        </div><!-- hover_state_holder -->
                    </div><!-- hover_state -->
             		</a>
             	</li>
             	
             	<li>
             		<a href="/tess_pare_mayer_Lookboook/">
             			<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/images/lookbook/tess_pare_mayer.jpg" />
             			<div class="hover_state">
                        <div class="hover_state_holder hover_state_holder_s">
                            <code class="book_icon tooltip_t" title="View Lookbook" onclick="window.location='/tess_pare_mayer.htm'"></code>
                            <%-- <code class="vedio_icon"></code> --%>
                            <div class="clear_both"></div>
                        </div><!-- hover_state_holder -->
                    </div><!-- hover_state -->
             		</a>
             	</li>
             	
             	<li class="no_right_margin">
             		<a href="/senso_Lookboook/">
             			<img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/images/lookbook/senso.jpg" />
             			<div class="hover_state">
                        <div class="hover_state_holder hover_state_holder_s">
                            <code class="book_icon tooltip_t" title="View Lookbook" onclick="window.location='/senso.htm'"></code>
                            <%-- <code class="vedio_icon"></code> --%>
                            <div class="clear_both"></div>
                        </div><!-- hover_state_holder -->
                    </div><!-- hover_state -->
             		</a>
             	</li>
             	
             	<li>
             		<a href="/room_service_Lookboook/">
             			<img  src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/images/lookbook/room_service.jpg" />
             			<div class="hover_state">
                        <div class="hover_state_holder hover_state_holder_s">
                            <code class="book_icon tooltip_t" title="View Lookbook" onclick="window.location='/room_service.htm'"></code>
                            <%-- <code class="vedio_icon"></code> --%>
                            <div class="clear_both"></div>
                        </div><!-- hover_state_holder -->
                    </div><!-- hover_state -->
             		</a>
             	</li>
             </ul><!-- lookbook_gallery -->    
             <div class="clear_both"></div> 
         </div><!-- content_holder -->
 		<div class="clear_both"></div>	
	
			<tiles:insertAttribute name="footer"/>
           		
            <div class="clear_both"></div>	
    	</div><!-- wrapper -->
    	<tiles:insertAttribute name="PopUp"/> 
     <div id="backgroundPopup"></div>
	</div>



 
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
