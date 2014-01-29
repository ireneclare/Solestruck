<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page import="com.veroniqa.frontend.util.VeroniqaConstants" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="sr" uri="http://solestruck.com/resources" %>
<%@ page import="com.face4j.facebook.Client" %>
<%@ page import="com.face4j.facebook.factory.FacebookFactory" %>
<%@ page import="com.face4j.facebook.Facebook" %>
<%@ page import="com.face4j.facebook.OAuthAccessToken" %>
<%@ page import="com.face4j.facebook.enums.Permission" %>
<%@ page import="com.face4j.facebook.enums.HttpClientType" %>
<%@ page import="com.face4j.facebook.enums.Display" %>
<%@ page import="com.veroniqa.frontend.util.EnvironmentUtil" %>
<%@page contentType="text/html" pageEncoding="UTF-8"%>

<%
	String imageURL = VeroniqaConstants.IMAGE_URL;
	String vendorName = (String) request.getAttribute("vendorName");
	String productName = (String) request.getAttribute("productname");
	String protocol = request.getScheme();
	 String streetCredTagName= productName.replaceAll("[-+.*^|:;/$&@?%!'(),]", "");
	 
%>

<%
	String redirectURL = "";
	if (EnvironmentUtil.getEnvironmentValue("AppMode").equals("STAGING")) 
	{
		Client client = new Client("360291777383552","3352c5aa3b2e0b7ac1cd7423eeebd77e");
		FacebookFactory facebookFactory = new FacebookFactory(client,HttpClientType.URL_FETCH_SERVICE);
	
		if (protocol != null && !protocol.equals("")) 
		{
			if (protocol.equals("http")) 
			{
				redirectURL = facebookFactory.getRedirectURL("http://testing.solestruck.com/renderPage.htm?page=redirect",Display.POPUP, Permission.EMAIL,Permission.OFFLINE_ACCESS,Permission.PUBLISH_STREAM);
			} 
			else 
			{
				redirectURL = facebookFactory.getRedirectURL("https://testing.solestruck.com/renderPage.htm?page=redirect",Display.POPUP, Permission.EMAIL,Permission.OFFLINE_ACCESS,Permission.PUBLISH_STREAM);
			}
		}
	}
	else if (EnvironmentUtil.getEnvironmentValue("AppMode").equals("LIVE")) 
	{
		Client client = new Client("421260994576981", "e4ed5353c4e302f41d3b2d7516a17f4d");   
		FacebookFactory facebookFactory = new FacebookFactory(client,HttpClientType.URL_FETCH_SERVICE);

		if (protocol != null && !protocol.equals("")) 
		{
			if (protocol.equals("http")) 
			{
				redirectURL = facebookFactory.getRedirectURL("http://www.solestruck.com/renderPage.htm?page=redirect",Display.POPUP, Permission.EMAIL,Permission.OFFLINE_ACCESS,Permission.PUBLISH_STREAM);
			} 
			else 
			{
				redirectURL = facebookFactory.getRedirectURL("https://www.solestruck.com/renderPage.htm?page=redirect",Display.POPUP, Permission.EMAIL,Permission.OFFLINE_ACCESS,Permission.PUBLISH_STREAM);
			}
		}
	} 
	else if (EnvironmentUtil.getEnvironmentValue("AppMode").equals("DEV")) 
	{
		Client client = new Client("102732789875589","629718271b12cb4a039e7b99f70985a6");
		FacebookFactory facebookFactory = new FacebookFactory(client,HttpClientType.URL_FETCH_SERVICE);
		redirectURL = facebookFactory.getRedirectURL("http://localhost:9999/renderPage.htm?page=redirect",Display.POPUP, Permission.EMAIL,Permission.OFFLINE_ACCESS, Permission.PUBLISH_STREAM);
	}
%>

<c:set var="colorname" value="${selected_color_Name}"/>
<c:set var="vendorNameL" value="${fn:replace(vendorName,' ','-')}"/>
<c:set var="vendorNameSmall" value="${fn:toLowerCase(vendorNameL)}"></c:set>
<c:set var="productDetail" value="${productDetail}"/>
<c:set var= "makeitlink" value=""/>
<head>

<meta name="googlebot" content="index">
<meta name="robots" content="index,follow">
<meta name="robots" content="noodp">
<meta name="KEYWORDS" content="${vendorName} Shoes,${vendorName} ${productname},${colorname} Shoes,${socialcategory} Shoes" >
<%-- <meta name="DESCRIPTION" content="${vendorName} Shoes, ${vendorName} ${productname} - Browse the ${vendorName} ${productname} or any ${vendorName} Shoes in a range of colors and sizes." /> --%>
<meta name="DESCRIPTION" content="See how Solestruck styles the ${vendorName} ${productname} and what customers are saying about it.">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" >
<title>${vendorName} ${productname} in ${colorname} at Solestruck.com</title>

<link rel="shortcut icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" >
<link rel="icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" >
<!--[if lt IE 9]> <link href="css/ie_only.css" rel="stylesheet" type="text/css"> <![endif]-->

<link async href="/style/${common_css}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm" rel="stylesheet" type="text/css">
<!-- <link async href="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/testing/css/BrandFeatures.css" rel ="stylesheet" type="text/css"> -->
<script async type="text/javascript" src="/script/${common_js}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm"></script>


<!--- Tool tip --->

<script async type="text/javascript">
	$(function() {
	$('.tooltip_b').tipsy({trigger: 'hover', gravity: 'n'});
	$('.tooltip_t').tipsy({trigger: 'hover', gravity: 'n',fade:true});
	 });
</script>
<script async type="text/javascript">

var _gaq = _gaq || [];
var pluginUrl = 
 '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
_gaq.push(['_require', 'inpage_linkid', pluginUrl]);
_gaq.push(['_setAccount', '<%=VeroniqaConstants.getAnalyticsID()%>']);
_gaq.push(['_trackPageview']);

(function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();

</script>
<%-- <script async type="text/javascript">

var _gaq = _gaq || [];
var pluginUrl = 
 '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
_gaq.push(['_require', 'inpage_linkid', pluginUrl]);
_gaq.push(['_setAccount', '<%=VeroniqaConstants.getNewCheckoutAnalyticsID()%>']);
_gaq.push(['_trackPageview']);

(function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();

</script> --%>
<input type="hidden" id="isCartCountEnabled" value="${showcartcount}"/>
<c:if test="${showcartcount ne null}">

<script async type="text/javascript">
/* $(document).ready(function() {
	
	
	var channel=null;
	var token='${realtimetoken}';
	if(token!=undefined)
		{
			channel = new goog.appengine.Channel(token);
		    socket = channel.open();
		    socket.onopen = onOpened;
		    socket.onmessage = onMessage;
		    socket.onerror = onError;
		    socket.onclose = onClose;
		
		}
		
	
}); */

function onOpened()
{
	
}
function onMessage(message)
{
	var msg=message.data;
	if(msg!="")
		{
			var colorid=msg.split(":")[0];
			var count=msg.split(":")[1];
			$(".cart_count_"+colorid).html("IN "+count+"</br>CARTS");
			if(count!=""&&count>0)
				{
					$(".cart_count_"+colorid).removeClass("dn");
				}
			else
				{
					$(".cart_count_"+colorid).addClass("dn");
					
				}
			
		}
	
}
function onError()
{
}
function onClose()
{
}
function getRealtimeCustomerCount(colorid)
{
	var classnames=$('.idp_carts').attr('className');
	if(classnames.length>0)
	{
			var classname=classnames.split(" ");
			//console.log("classes count:"+classname.length);
			for(i=0;i<classname.length;i++)
				{
					if(classname[i].indexOf("cart_count")!=-1)
						{
							$('.idp_carts').removeClass(classname[i]);
						}
				}
	}
	$('.idp_carts').addClass('cart_count_'+colorid);
	$.ajaxSetup({cache:false});
	$.ajax({url:'/getRealTimeCartCount.htm',data:({"colorid":colorid}),success:function(data){
		if(data!="" && data > 0)
			{
				$('.cart_count_'+colorid).html("IN "+data+"<br> CARTS");
				$('.cart_count_'+colorid).removeClass('dn');
			}
			
	}});
}

function deActivateRealtimeCustomer()
{
	$.ajax({url:'/deActivateRealtimeCustomer.htm',data:({"clientid":"${cookie.JSESSIONID.value}"}),success:function(data){
		
			
	}});
}
window.onunload=deActivateRealtimeCustomer;
document.onunload=deActivateRealtimeCustomer;
window.onbeforeunload=deActivateRealtimeCustomer;
</script>
</c:if>

</head>
<body>

<div class="top_bar">
  <div class="global_nav_holder">
  
    <tiles:insertAttribute name="topmenumain"/>
    
      </div><!-- global_nav_holder --> 
</div><!-- top_bar -->

<tiles:insertAttribute name="header"/>
<c:set var="discountprogram" value="${sr:getDiscountProgramForFB()}"></c:set>
<input type="hidden" id="webDiscountOn" value="${discountprogram.webDiscountOn}"></input>
<input type="hidden" id="discountTypeName" value="${discountprogram.programTypeName}"></input>
<c:set var="brandList" value="${sr:getBrandListForSale()}"></c:set>
<c:forEach var="brandNames" items="${brandList}">
	<input type="hidden" id="saleBrandNames" value="${brandNames}"></input>
</c:forEach>
<input type="hidden" id="dtosize" value="${dtosize}"></input>
<c:set var="proList" value="${productDetails}"></c:set>
<c:forEach var="pLst" items="${proList}" varStatus="stat">
	<input type="hidden" id="price_${stat.count}" value="${pLst.price}"></input>
	<input type="hidden" id="salePrice_${stat.count}" value="${pLst.salePrice}"></input>
	<input type="hidden" id="proVar_${stat.count}" value="${pLst.proVarID}"></input>
	<input type="hidden" id="isPreOrder_${stat.count}" value="${pLst.isPreOrder}"></input>
	<input type="hidden" id="size_${stat.count}" value="${pLst.size}"></input>
</c:forEach>

<div id="wrapper">
         <div class="menu_pathway">
         	<ul>
                <li class="pathway_home"><a href="/">Home</a></li>
                <li class="path_arrow">
             	<c:if test="${socialcategory eq 'men' && page != 'NA' && fn:contains(youAreHere ,'men')}">
             	<a href="/mens/${page}">Men</a></li> 
             	<c:if test="${vendorName ne 'Vintage'}">   
            	<li class="path_arrow">   	
            	<a href="/${socialcategory}s-${vendorNameSmall}/${page}">${vendorName}</a></c:if>
            	<c:if test="${style ne ''}">
            	<li class="path_arrow">
            	<a href="/mens-${stylel}/">${style}</a>
            	</c:if>
            	<li class="path_arrow">
            	<a href="/mens-${syscolorl}-shoes/">${syscolor}</a>
    		 	</c:if>       
    		 	
    		 	<c:if test="${socialcategory eq 'women' && page != 'NA' && fn:contains(youAreHere ,'men')}">        
            	<a href="/search-womens-shoes/${page}">Women</a>  
            	<c:if test="${vendorName ne 'Vintage'}">
            	<li class="path_arrow">
            	<a href="/${vendorNameSmall}-${socialcategory}s-shoes/${page}">${vendorName}</a></c:if>
            	<c:if test="${style ne ''}">
            	<li class="path_arrow">
            	<a href="/${stylel}/">${style}</a>
            	</c:if>
            	<li class="path_arrow">
            	<a href="/${syscolorl}-shoes/">${syscolor}</a>
            	</c:if>
            	
            	<c:if test="${socialcategory eq 'men' && page eq 'NA' && fn:contains(youAreHere ,'men')}">        
            	<a href="/mens/">Men</a></li>
            	<c:if test="${vendorName ne 'Vintage'}"> 
            	<li class="path_arrow">
            	<a href="/${socialcategory}s-${vendorNameSmall}/">${vendorName}</a></c:if>
            	<c:if test="${style ne ''}">
            	<li class="path_arrow">
            	<a href="/mens-${stylel}/">${style}</a>
            	</c:if>
            	<li class="path_arrow">
            	<a href="/mens-${syscolorl}-shoes/">${syscolor}</a>
            	</c:if>
                
    		 	<c:if test="${socialcategory eq 'women' && page eq 'NA' && fn:contains(youAreHere ,'men')}">        
            	<a href="/search-womens-shoes/">Women</a>
            	<c:if test="${vendorName ne 'Vintage'}">
            	<li class="path_arrow">
            	<a href="/${vendorNameSmall}-${socialcategory}s-shoes/">${vendorName}</a></c:if>
            	<c:if test="${style ne ''}">
            	<li class="path_arrow">
            	<a href="/${stylel}/">${style}</a>
            	</c:if>
            	<li class="path_arrow">
            	<a href="${syscolorl}-shoes/">${syscolor}</a>
            	</c:if>
            	            	            	
            	<c:if test="${youAreHere eq 'Sale' && page != 'NA'}">        
            	<a href="/sale-shoes/${page}">Sale</a></li>
            	<li class="path_arrow">
            	<c:choose>
            	<c:when test="${socialcategory eq 'men'}">
            	<c:if test="${style ne ''}">
            	<li class="path_arrow">
            	<a href="/mens-${stylel}/">${style}</a>
            	</c:if>
            	<li class="path_arrow">
            	<a href="/mens-${syscolorl}-shoes/">${syscolor}</a>
            	</c:when>
            	<c:when test="${socialcategory eq 'women'}">
            	<c:if test="${style ne ''}">
            	<li class="path_arrow">
            	<a href="/${stylel}/">${style}</a>
            	</c:if>
            	<li class="path_arrow">
            	<a href="/${syscolorl}-shoes/">${syscolor}</a>
            	</c:when>
            	</c:choose>
            	</li>
            	<c:set var= "makeitlink" value="/${vendorNameSmall}-womens-shoes/"/>
            	</c:if>
            	
            	
            	<c:if test="${youAreHere eq 'New Arrivals' && page != 'NA'}">        
            	<a href="/new-arrivals/${page}">New Arrival</a></li>
            	<li class="path_arrow">
            	<c:choose>
            	<c:when test="${socialcategory eq 'men'}">
            	<c:if test="${style ne ''}">
            	<li class="path_arrow">
            	<a href="/mens-${stylel}/">${style}</a>
            	</c:if>
            	<li class="path_arrow">
            	<a href="/mens-${syscolorl}-shoes/">${syscolor}</a>
            	</c:when>
            	<c:when test="${socialcategory eq 'women'}">
            	<c:if test="${style ne ''}">
            	<li class="path_arrow">
            	<a href="/${stylel}/">${style}</a>
            	</c:if>
            	<li class="path_arrow">
            	<a href="/${syscolorl}-shoes/">${syscolor}</a>
            	</c:when>
            	</c:choose>
            	</li>
            	</c:if>
            	
            	
            	<c:if test="${youAreHere eq 'home'}">
            	<li class="path_arrow"></li>
            	<c:choose>
            	<c:when test="${socialcategory eq 'men'}">
             	<li><a href="/mens/${page}">Men</a></li> 
             	<c:if test="${vendorName ne 'Vintage'}">   
            	<li class="path_arrow">   	
            	<a href="/${socialcategory}s-${vendorNameSmall}/${page}">${vendorName}</a></c:if>
            	<c:if test="${style ne ''}">
            	<li class="path_arrow">
            	<a href="/mens-${stylel}/">${style}</a>
            	</c:if>
            	<li class="path_arrow">
            	<a href="/mens-${syscolorl}-shoes/">${syscolor}</a>
    		 	</c:when>       
    		 	<c:when test="${socialcategory eq 'women'}">        
            	<li><a href="/search-womens-shoes/${page}">Women</a></li>
            	<c:if test="${vendorName ne 'Vintage'}">
            	<li class="path_arrow">
            	<a href="/${vendorNameSmall}-${socialcategory}s-shoes/${page}">${vendorName}</a></c:if>
            	<c:if test="${style ne ''}">
            	<li class="path_arrow">
            	<a href="/${stylel}/">${style}</a>
            	</c:if>
            	<li class="path_arrow">
            	<a href="/${syscolorl}-shoes/">${syscolor}</a>
            	</c:when>
            	</c:choose>
                </c:if>
                
                
            	<c:if test="${vendorName eq 'Vintage' && page != 'NA'&& youAreHere!='men'&& youAreHere!='women'}">
            	<a href="/vintage-shoes/${page}">Vintage</a>
            	<li class="path_arrow"></li>
            	<c:choose>
            	<c:when test="${socialcategory eq 'men'}">
            	<c:if test="${style ne ''}">
            	<li class="path_arrow">
            	<a href="/mens-${stylel}/">${style}</a>
            	</c:if>
            	<li class="path_arrow">
            	<a href="/mens-${syscolorl}-shoes/">${syscolor}</a>
            	</c:when>
            	<c:when test="${socialcategory eq 'women'}">
            	<c:if test="${style ne ''}">
            	<li class="path_arrow">
            	<a href="/${stylel}/">${style}</a>
            	</c:if>
            	<li class="path_arrow">
            	<a href="/${syscolorl}-shoes/">${syscolor}</a>
            	</c:when>
            	</c:choose>
            	</c:if>
            	
            	<c:if test="${youAreHere eq 'Coming Soon' && page != 'NA'}">
	            <a href="/preorders/${page}">Coming Soon</a>
	            <li class="path_arrow"></li>
	            <c:choose>
            	<c:when test="${socialcategory eq 'men'}">
            	<c:if test="${style ne ''}">
            	<li class="path_arrow">
            	<a href="/mens-${stylel}/">${style}</a>
            	</c:if>
            	<li class="path_arrow">
            	<a href="/mens-${syscolorl}-shoes/">${syscolor}</a>
            	</c:when>
            	<c:when test="${socialcategory eq 'women'}">
            	<c:if test="${style ne ''}">
            	<li class="path_arrow">
            	<a href="/${stylel}/">${style}</a>
            	</c:if>
            	<li class="path_arrow">
            	<a href="/${syscolorl}-shoes/">${syscolor}</a>
            	</c:when>
            	</c:choose>
              	</c:if>
              	
              	<c:if test="${youAreHere eq 'searchpage' && page != 'NA'}">
              	<c:choose>
              	<c:when test="${socialcategory eq 'men'}">        
            	<a href="/mens/">Men</a></li>
            	<c:if test="${vendorName ne 'Vintage'}"> 
            	<li class="path_arrow">
            	<a href="/${socialcategory}s-${vendorNameSmall}/">${vendorName}</a></c:if>
            	<c:if test="${style ne ''}">
            	<li class="path_arrow">
            	<a href="/mens-${stylel}/">${style}</a>
            	</c:if>
            	<li class="path_arrow">
            	<a href="/mens-${syscolorl}-shoes/">${syscolor}</a>
            	</c:when>
            	<c:when test="${socialcategory eq 'women'}">        
            	<a href="/search-womens-shoes/${page}">Women</a>  
            	<c:if test="${vendorName ne 'Vintage'}">
            	<li class="path_arrow">
            	<a href="/${vendorNameSmall}-${socialcategory}s-shoes/${page}">${vendorName}</a></c:if>
            	<c:if test="${style ne ''}">
            	<li class="path_arrow">
            	<a href="/${stylel}/">${style}</a>
            	</c:if>
            	<li class="path_arrow">
            	<a href="/${syscolorl}-shoes/">${syscolor}</a>
            	</c:when>
            	</c:choose>
            	</c:if>
            	
            	
              	<c:choose>
			      <c:when test="${productDetail.socialCategory eq 'women' && vendorName != 'Vintage' }">
			    	  <c:set var= "makeitlink" value="/${vendorNameSmall}-womens-shoes/"/>
			      </c:when>
			       <c:when test="${productDetail.socialCategory eq 'men' }">
			      	<c:set var= "makeitlink" value="/mens-${vendorNameSmall}/"/>
			      	</c:when>
			      	<c:when test="${vendorName eq 'Vintage' && page != 'NA'}" >
			   	   		<c:set var= "makeitlink" value="/vintage-shoes/"/>
			       </c:when>
			    </c:choose>
              
                 <li class="path_arrow"></li>
             
                 <li><span>${productname}</span></li> 
                 
                 
            </ul>
            <div class="clear_both"></div>
         </div><!-- menu_pathway -->
         <input type="hidden" id="socialCategory" value="${productDetail.socialCategory}"/>
         <input type="hidden" id="vendorname" value="${vendorName}"/>
         <input type="hidden" id="productName" value="${productname}"/>
         <input type="hidden" id="productid" value="${productid}"/>
         <input type="hidden" id="variantId" value="${variantId}"></input>
         <input type="hidden" id="colorlst" value="${selected_color_Name}" titlevalue="${selected_color_id}"/>
         <input type="hidden" id="youAreHere" value="${youAreHere}"/>
         <input type="hidden" id="retailPrice" value="${productData.retailPrice}"/>
         <input type="hidden" id="salePrice" value="${productData.salePrice}"/>
         <input type="hidden" id="isNew" value="${productData.isNew}"/>
         
<%-- 		 <fmt:formatDate pattern="MM" value="${productData.dateAdded}" var="monthadded"/> --%>
<%--          <fmt:formatDate pattern="yyyy" value="${productData.dateAdded}" var="yearadded"/> --%>
<%--          <fmt:formatDate pattern="dd" value="${productData.dateAdded}" var="dateadded"/> --%>
<%--          <input type="hidden" id="monthAdded" value="${monthadded}"/> --%>
<%--          <input type="hidden" id="dateAdded" value="${dateadded}"/> --%>
<%--          <input type="hidden" id="yearAdded" value="${yearadded}"/> --%>
         
         <c:set var="isPreorder" value="${productData.isPreorder}"></c:set>
         <div class="content_holder">
             <div class="idp_shoe_name_holder item_detail_page">
             	<h1>${productname}</h1>
             	<a href="${makeitlink}">BY ${vendorName}</a>
             </div><!-- idp_shoe_name_holder -->   
             <%-- <div class="discount_popup">
                 <code class="discount_close"></code>
                 <span id="idpDiscountPercentage"></span></br>
                 <span class="discount_login_fb" onclick="loadingForFb('fbsale');window.open('<%= redirectURL%>','FacebookLogin',
        'left=370,top=180,width=630,height=325,toolbar=1,resizable=0');">LOGIN WITH FACEBOOK</span>
             </div> --%>
<!--             <![if !(IE 7)]> <div class="idp_zoomicon">Roll on to see close up</div> <![endif]> -->
            
         	<div class="idp_shoe_gallery">
         		<!-- <div class="idp_zoomcursor"></div> -->
       	    	 <div id="product_angle">
                 	<!--  -->								        							                 
                 	</div><!-- product_angle -->
                 <div class="idp_zoomicon">ROLL OVER TO ZOOM</div>
                 <div class="idp_views_tab">
					<!-- <h3 id="view_title">${selected_color_Name}</h3> -->
                     <div class="view_gallery view_glry_act" id="black" style="display:block;">
              
                      <span><img id="upper" class="shot_number_010101"onerror="$(this).hide();" src="<%=imageURL %><%=vendorName.replaceAll(" ","-").toLowerCase()%>-shoes/<%=vendorName.replaceAll(" ","-")%>-shoes-<%=productName.replaceAll(" ","-")%>-(${fn:replace(selected_color_Name," ","-")})-010101.jpg" alt=""  width="40px" height="30px"/></span>
                         <div><img id="ashowupper" src="<%=imageURL %><%=vendorName.replaceAll(" ","-").toLowerCase()%>-shoes/<%=vendorName.replaceAll(" ","-")%>-shoes-<%=productName.replaceAll(" ","-")%>-(${fn:replace(selected_color_Name," ","-")})-010601.jpg" alt=""  width="480px" height="360px"/></div>
                         <span><img id="toe" class="shot_number_010102" onerror="$(this).hide();" src="<%=imageURL %><%=vendorName.replaceAll(" ","-").toLowerCase()%>-shoes/<%=vendorName.replaceAll(" ","-")%>-shoes-<%=productName.replaceAll(" ","-")%>-(${fn:replace(selected_color_Name," ","-")})-010102.jpg" alt=""  width="40px" height="30px"/></span>
                         <div><img id="ashowtoe" src="<%=imageURL %><%=vendorName.replaceAll(" ","-").toLowerCase()%>-shoes/<%=vendorName.replaceAll(" ","-")%>-shoes-<%=productName.replaceAll(" ","-")%>-(${fn:replace(selected_color_Name," ","-")})-010602.jpg" alt="" width="480px" height="360px"/></div>
                         <span><img id="instep" class="shot_number_010103" onerror="$(this).hide();" src="<%=imageURL %><%=vendorName.replaceAll(" ","-").toLowerCase()%>-shoes/<%=vendorName.replaceAll(" ","-")%>-shoes-<%=productName.replaceAll(" ","-")%>-(${fn:replace(selected_color_Name," ","-")})-010103.jpg" alt=""  width="40px" height="30px"/></span>
                         <div><img id="ashowinstep" src="<%=imageURL %><%=vendorName.replaceAll(" ","-").toLowerCase()%>-shoes/<%=vendorName.replaceAll(" ","-")%>-shoes-<%=productName.replaceAll(" ","-")%>-(${fn:replace(selected_color_Name," ","-")})-010603.jpg" alt="" width="480px" height="360px"/></div>
                         <span class="view_glallery_opacity"><img id="outstep" class="shot_number_010104" onerror="$(this).hide();" src="<%=imageURL %><%=vendorName.replaceAll(" ","-").toLowerCase()%>-shoes/<%=vendorName.replaceAll(" ","-")%>-shoes-<%=productName.replaceAll(" ","-")%>-(${fn:replace(selected_color_Name," ","-")})-010104.jpg" alt=""  width="40px" height="30px"/></span>
                         <div style="display:block;"><img id="ashowoutstep" src="<%=imageURL %><%=vendorName.replaceAll(" ","-").toLowerCase()%>-shoes/<%=vendorName.replaceAll(" ","-")%>-shoes-<%=productName.replaceAll(" ","-")%>-(${fn:replace(selected_color_Name," ","-")})-010604.jpg" data-zoom-image="<%=imageURL %><%=vendorName.replaceAll(" ","-").toLowerCase()%>-shoes/<%=vendorName.replaceAll(" ","-")%>-shoes-<%=productName.replaceAll(" ","-")%>-(${fn:replace(selected_color_Name," ","-")})-010804.jpg" alt="" width="480px" height="360px" /></div>
                         <span><img id="heel" class="shot_number_010105" onerror="$(this).hide();" src="<%=imageURL %><%=vendorName.replaceAll(" ","-").toLowerCase()%>-shoes/<%=vendorName.replaceAll(" ","-")%>-shoes-<%=productName.replaceAll(" ","-")%>-(${fn:replace(selected_color_Name," ","-")})-010105.jpg" alt=""  width="40px" height="30px"/></span>
                         <div><img id="showheel" src="<%=imageURL %><%=vendorName.replaceAll(" ","-").toLowerCase()%>-shoes/<%=vendorName.replaceAll(" ","-")%>-shoes-<%=productName.replaceAll(" ","-")%>-(${fn:replace(selected_color_Name," ","-")})-010605.jpg" alt=""  width="480px" height="360px"/></div>
                         <span><img id="sole" class="shot_number_010106" onerror="$(this).hide();" src="<%=imageURL %><%=vendorName.replaceAll(" ","-").toLowerCase()%>-shoes/<%=vendorName.replaceAll(" ","-")%>-shoes-<%=productName.replaceAll(" ","-")%>-(${fn:replace(selected_color_Name," ","-")})-010106.jpg" alt=""  width="40px" height="30px"/></span>
                         <div><img id="showsole" src="<%=imageURL %><%=vendorName.replaceAll(" ","-").toLowerCase()%>-shoes/<%=vendorName.replaceAll(" ","-")%>-shoes-<%=productName.replaceAll(" ","-")%>-(${fn:replace(selected_color_Name," ","-")})-010606.jpg" alt="" width="480px" height="360px"/></div>
                     </div><!-- view_gallery -->
                     <div class="clear_both"></div>
                 </div><!-- idp_views_tab -->
                 
                                 <input type="hidden" value="${shotNumber}" id="shot_number_id">
                                
                 <ul class="idp_share">
                	<li class="share_icon"></li>
                	<li class="share_txt">SHARE</li>
                	<li class="fb tooltip_t" original-title="LIKE/SHARE ON FACEBOOK">
                	<a id="fb-button" class="addthis_button_facebook face_book" 
					target="_blank" 
					addthis:url="<%=VeroniqaConstants.LIVE_FRONTEND_URL %><%=vendorName.replaceAll(" ","-").toLowerCase()%>-<%=productName.replaceAll(" ","-").toLowerCase()%>-${fn:toLowerCase(fn:replace(selected_color_Name," ","-")	)}/index.html" 
					addthis:title="Share This Shoe On Facebook" 
					addthis:description="An Example Description"></a>
					</li>
                	<li class="tw tooltip_t" original-title="SHARE ON TWITTER">
                	<div id="custom-tweet-button" class="twitter fl">
					<a href="http://twitter.com/share?url=<%=VeroniqaConstants.LIVE_FRONTEND_URL %>"
					class="twitter-share-button"
					data-text="OMG! ${vendorName}'s ${productname} in ${selected_color_Name}"
					data-count="none"></a>
					</div>
                	</li>
                	<li class="pl tooltip_t" original-title="SHARE ON PINTEREST">
                	<a id="pin-it-button" class="addthis_button_pinterest pintrest" pi:pinit:media="<%=imageURL %><%=vendorName.replaceAll(" ","-").toLowerCase()%>-shoes/<%=vendorName.replaceAll(" ","-")%>-shoes-<%=productName.replaceAll(" ","-")%>-(${fn:replace(selected_color_Name," ","-")})-010604.jpg"" pi:pinit:url="<%=VeroniqaConstants.LIVE_FRONTEND_URL %>" pi:pinit:layout="none"></a>
                	</li>
                	<li class="gl tooltip_t" original-title="SHARE ON GOOGLE PLUS">
                	<div class="googleplus" id="g-plus-button">  
				        <div class="googlehider">  
				            <g:plusone annotation="none"></g:plusone>  
				            <!-- Place this render call where appropriate -->  
				            <script async type="text/javascript">  
				              window.___gcfg = {lang: 'en-GB'};  
				              
				              (function() {  
				                var po = document.createElement('script'); po.type = 'text/javascript'; po.async = true;  
				                po.src = 'https://apis.google.com/js/plusone.js';  
				                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(po, s);  
				              })();  
				            </script>  
				        </div>  
				        <span class="mygoogle"></span>  
				    </div>
                	</li>
                	<li class="ml tooltip_t" original-title="EMAIL A FRIEND">
                	<a id="social_sendToFriend" class="email sendto_friend_click_act "></a>
                	</li>
                	<!-- <li class="vl tooltip_t" original-title="SHARE ON"></li> -->
                </ul>
	            <div class="clear_both"></div>
                 <div class="latest_updates">
                 	<!-- <h3>Now In Stock! This Shoe Will Not Stop!</h3> -->
                 		<p>${shoedescription}</p>
                     	<!-- <p class="desc_small_act">The wedge that everyone and their mom wants is finally here again (for like the 20th reorder shipment): the Jeffrey Campbell 99 zip (<span class="desc_expand_act">more...</span>) </p>
                         <p class="desc_large desc_large_act">Get ready to fight it out, girls. It's gonna get ugly in here! The hottest shoe of Fall, the JEFFREY CAMPBELL LITA is available now and you all know they're going to sell fast. 5" wood or synthetic heel with 2" sole. Comes in fabric, suede, velvet, pebbled calf leather, synthetic or lightly distressed leather uppers. *Please note that there will be slight color variations on the heel color and distressing as these are hand stained and hand distressed. Fits true to size. Size US8 (EUR38) insole measures at 9 5/8 inches or 24.5cm. Each whole size is 1/2 inch or 1cm difference. Limit 3 per person. (<span class="desc_minimize_act">hide...</span>)</p> -->      
                 </div><!-- latest_updates -->
                 <div class="clear_both"></div>
                 <div id="idp_zoomedimage"> </div>
            </div><!-- idp_shoe_gallery -->
          <%--  <span class="idp_carts cart_count_${selected_color_id} <c:if test="${rltmcustmrcount<1}" >dn</c:if>">IN ${rltmcustmrcount}</br>CARTS</span>    --%>                
                                    <div class="idp_right_col">
                                    
                                 
                                    
                                    <div id='cAvl'>
                                    <h3 id="cAvl5">COLOR:<span class="idp_color_name"></span></h3>
	                                    <div id="cAvl6" class="idp_color_tab">
	                                         <div class="color_gallery cl_glry_hver_act">
		                                         <c:forEach items="${colormap}" var="color_map">
													<c:set var="colorName" value="${color_map.value}"/>		
														<span id="${color_map.key}" class="tooltip_t ${color_map.key}" name="${color_map.value}" original-title="${color_map.value}" ><img onerror="$(this).hide();brokenImagesAlert();" src="<%=imageURL %><%=vendorName.replaceAll(" ","-").toLowerCase()%>-shoes/<%=vendorName.replaceAll(" ","-")%>-shoes-<%=productName.replaceAll(" ","-")%>-(${fn:replace(colorName," ","-")})-010104.jpg" alt="" width="40px" height="30px"/></span>
<%-- 		                                          		<div><img src="<%=imageURL %><%=vendorName.replaceAll(" ","-").toLowerCase()%>-shoes/<%=vendorName.replaceAll(" ","-")%>-shoes-<%=productName.replaceAll(" ","-")%>-(${fn:replace(colorName," ","-")})-010604.jpg" alt="" width="480px" height="360px" /></div> --%>
								  				</c:forEach>
	                                        </div> <!-- color_gallery -->
	                                    	<div class="clear_both"></div>
	                                    </div><!-- idp_color_tab -->
	                                    <c:if test="${productDetail.socialCategory eq 'women'}">
	                                    <c:set var="showSC" value="WOMEN'S"/>
	                                    </c:if>
	                                    <c:if test="${productDetail.socialCategory eq 'men'}">
	                                    <c:set var="showSC" value="MEN'S"/>
	                                    </c:if>
                                    	
                                 	   	
	                                    
                                        <input type="hidden" id="lengthmap" value="${colorMapSize}"/>
                                        <c:forEach items="${colormap}" var="color" varStatus="status">
                                            <input type="hidden" id="colorid_${status.count}" value='${color.key}'></input>
										</c:forEach>
	                                    
	                                    <h3 id="cAvl1" style="display: none;">COLOR:<span class="idp_color_name"></span></h3>
	                                    <div id="cAvl2" class="idp_color_tab" style="display: none;">
	                                         <div class="color_gallery cl_glry_hver_act">
		                                         <c:forEach items="${colormap}" var="color_map">
													<c:set var="colorName" value="${color_map.value}"/>		
														<span id="${color_map.key}" class="tooltip_t ${color_map.key}" name="${color_map.value}" original-title="${color_map.value}" ><img onerror="$(this).hide();brokenImagesAlert();" src="<%=imageURL %><%=vendorName.replaceAll(" ","-").toLowerCase()%>-shoes/<%=vendorName.replaceAll(" ","-")%>-shoes-<%=productName.replaceAll(" ","-")%>-(${fn:replace(colorName," ","-")})-010104.jpg" alt="" width="40px" height="30px"/></span>
		                                          		<div><img src="<%=imageURL %><%=vendorName.replaceAll(" ","-").toLowerCase()%>-shoes/<%=vendorName.replaceAll(" ","-")%>-shoes-<%=productName.replaceAll(" ","-")%>-(${fn:replace(colorName," ","-")})-010604.jpg" alt="" width="480px" height="360px" /></div>
								  				</c:forEach>
	                                        </div> <!-- color_gallery -->
	                                    	<div class="clear_both"></div>
	                                    </div><!-- idp_color_tab -->
                                    </div>
                                    <div class="item_size_holder select_size_act">
	                                    	<!-- <ul  id = "sizelst" value="Size" titlevalue="">
	                                        </ul> -->
	                                     <!--    <ul  id = "sizelstWomen" value="Size" titlevalue="" style="display:none;">
	                                    		                                             
	                                        </ul>
	                                        <ul  id = "sizelstMen" value="Size" titlevalue="" style="display:none;">
	                                    		                                                
	                                        </ul> -->
	                                 		<div id="waitlist" class="out_of_stock" >Sorry!  We're out of these.  Click the Notify Me button and we'll shoot an email to you if your size becomes available again</div>
	                                    	<h2 class="dont_see_size" id="right_fit">HOW TO GET THE RIGHT FIT</h2>
	                                    	<div class="clear_both"></div> 
	                                    </div><!-- item_size_holder -->	
	                                
	                              <c:choose>  
                                  <c:when test="${buttonValue ne '' && buttonValue eq 'NOTIFY ME'}">
                                    <div class="shopsize_dwn" style="display:none">
                                    	 <c:choose>
	                                    <c:when test="${productDetail.socialCategory eq 'women'}">
	                                      <h3 id="cAvl4" class="size_head_act fl">U.S. WOMEN'S SIZE: <!-- <span class="idp_size_cm">Please Select</span> --></h3>
	                                    </c:when>
	                                    <c:when test="${productDetail.socialCategory eq 'men'}">
	                                      <h3 id="cAvl4" class="size_head_act fl">U.S. MEN'S SIZE: <!-- <span class="idp_size_cm">Please Select</span> --></h3>
	                                    </c:when>
	                                    <c:otherwise>
	                                     <h3 id="cAvl4" class="size_head_act fl">U.S. SIZE: <!-- <span class="idp_size_cm">Please Select</span> --></h3>
	                                    </c:otherwise>
	                                    </c:choose>
                                       <div class="select">
                                           <p id="idp_selected_size">Please Select</p>
                                       </div>
                                       <select id="shopBy" name="size" data-default="3" class="custom_select_value_act" onchange="displaySize(this)">
                                          
                                       </select>
                                       <div class="clear_both"></div>
                                 	</div><!-- custome_select--->
                                 </c:when>
                                 <c:when test="${vendorName eq 'Vintage' || vendorName eq 'Solestruck Magazine'}">
                                 	<div class="shopsize_dwn" style="display:none">
                                 		<c:choose>
	                                    <c:when test="${productDetail.socialCategory eq 'women'}">
	                                      <h3 id="cAvl4" class="size_head_act fl">U.S. WOMEN'S SIZE:<!-- <span class="idp_size_cm">Please Select</span> --></h3>
	                                    </c:when>
	                                    <c:when test="${productDetail.socialCategory eq 'men'}">
	                                      <h3 id="cAvl4" class="size_head_act fl">U.S. MEN'S SIZE:<!-- <span class="idp_size_cm">Please Select</span> --></h3>
	                                    </c:when>
	                                    <c:otherwise>
	                                     <h3 id="cAvl4" class="size_head_act fl">U.S. SIZE:<!-- <span class="idp_size_cm">Please Select</span> --></h3>
	                                    </c:otherwise>
	                                    </c:choose>
                                       <div class="select">
                                           <p id="idp_selected_size">Please Select</p>
                                       </div>
                                       <select id="shopBy" name="size" data-default="3" class="custom_select_value_act" onchange="displaySize(this)">
                                          
                                       </select>
                                       <div class="clear_both"></div>
                                 	</div>
                                 </c:when>
                                 <c:otherwise>
                                 	<div class="shopsize_dwn">
                                    	 <c:choose>
	                                    <c:when test="${productDetail.socialCategory eq 'women'}">
	                                      <h3 id="cAvl4" class="size_head_act fl">U.S. WOMEN'S SIZE:<!-- <span class="idp_size_cm">Please Select</span> --></h3>
	                                    </c:when>
	                                    <c:when test="${productDetail.socialCategory eq 'men'}">
	                                      <h3 id="cAvl4" class="size_head_act fl">U.S. MEN'S SIZE:<!-- <span class="idp_size_cm">Please Select</span> --></h3>
	                                    </c:when>
	                                    <c:otherwise>
	                                     <h3 id="cAvl4" class="size_head_act fl">U.S. SIZE:<!-- <span class="idp_size_cm">Please Select</span> --></h3>
	                                    </c:otherwise>
	                                    </c:choose>
                                       <div class="select">
                                           <p id="idp_selected_size">Please Select</p>
                                       </div>
                                       <select id="shopBy" name="size" data-default="3" class="custom_select_value_act" onchange="displaySize(this)">
                                          
                                       </select>
                                       <div class="clear_both"></div>
                                 	</div><!-- custome_select--->
                                 </c:otherwise>
                                 </c:choose>
                                 	
                                    <div class="idp_add_to_cart_btn acnepopup_act dn" id="acnePup"> want this?</div>
                                    <c:choose>
                                    	<c:when test="${isPreorder eq true}">
                                   			<div class="idp_add_to_cart_btn idp_add_to_cart_send_act preorder_btn yell_btn" id="btnIDP">PRE-ORDER NOW</div>
                                    	</c:when>
                                    <c:otherwise>
                                    <div class="clear_both"></div>
                                    <div class="idp_add_cart_arrow">
                                    	<div class="idp_add_to_cart_btn idp_add_to_cart_send_act yell_btn" id="btnIDP">${buttonValue}</div>
			 						</div>
                                    </c:otherwise>
                                    </c:choose>		
                                   <div class="selected_item_info">
                                       <ul id="product_selected">
                                       <li class="cl_info_bg_act color_selected" id="color_selected" titlevalue=""> </li>
	                                        
	                                        <span class="signinsave_link" id="idpsalepercentage"></span>
	                                        <li class="cl_info_size_act" id="size_selected" titlevalue=""></li>
	                                        <li id="SoldOut" class="dn"><i>Out of Stock</i></li>
	                                        <li class="fl"><b><!-- ${productname} <span id='hyphen'>-</span> -->  <span id="pricediv"></span></b>
	                                        	<del class="gary_del"></del>&nbsp;<del class="black_del"></del>
	                                        </li>
	                                        <li id="saleprice_div" class="dn fl"></li>
                                       </ul>
                                       <!-- <span id="sizeError" style="color:red;font-size:14px;display:none;">Please select the Size</span> -->
                                   </div><!-- selected_item_info -->
                                   			<p id="size_outofstock" class="fl sorry_outofstock">Sorry!  We're out of these.  Click the Notify Me button and we'll shoot an email to you if your size becomes available again</p>
                                               <div class="clear_both"></div> 
                                            <a class="add_whishlist fl" style="cursor: pointer;">OR ADD TO WISHLIST</a>
                                            <span class="added_wishlist" id="added_wishlist">ADDED TO WISHLIST </span>
                                            <br><br>
                                                <span id="wishlist_add_msg"  class="idp_wishListItemAdded" style="float:left"></span>
                                               
                                                
                                    </div><!-- idp_right_col -->
                                       
       
            				<div class="clear"></div>
      						</div>
                             <div class="clear_both"></div>
                             
                             <c:if test="${htmlMessageValue eq true}">
	                             <div class="idp_wrapper" align="center">
	                             	<span> ${htmlMessage} </span>
	                             </div>
                             </c:if>                              
                              <div class="contact_holder streetcred">
        							<h1>STREET CRED</h1>
                                    <h2 id="<%=streetCredTagName.replaceAll(" ","")%>" class="streetcreds">Tag photos on Instagram with: #ss_<%=streetCredTagName.replaceAll(" ","")%></h2>
	                                     
	                                <div class="no_tagged_images_text">There are no customer pics tagged for ${productname} yet. Just tag an instagram pic with #ss_<%=streetCredTagName.replaceAll(" ","")%> to be the first!</div>
                                    <div class="clear"></div>
                                   <ul id="street_cred" style="width:1000px">
                                   </ul>
                                   <div class="clear_both"></div>
                                   <code  class="street_popup_processing_icon"></code>
                                   <span class="street_loadmore brwn_btn">LOAD MORE PICS</span>  
                                   </div>
                                   <div class="popup_holder"> 
                                   <div id="my-carousel-2" class="carousel module"></div>
                                     </div>
                                     <div class="clear"></div> 
                             <div class="idp_review_holder">
                             <i id="fbErrorMsg" class="fberror fberror1" style="display:none;">There was a problem connecting to Facebook. Please verify your Facebook email address and try again.</i>
                             	<div class="idp_review_text">
                             		<c:if test="${reviewCount>0}" >
                                        <h6>${reviewCount} REVIEWS</h6>
                             		<div id="userRating1" class="rating_display review_rating">
                       					<c:forEach var="i" begin="1" end="5" varStatus="avgStar">	
											<c:if test="${avgRating>=i}">
											<code id="avgStarID${avgStar.count}" class="review_selected"></code>
											</c:if>
											<c:if test="${avgRating<i}">
											<code id="avgStarID${avgStar.count}"></code>
											</c:if>
										</c:forEach>
                       				</div>
                       				</c:if>
                       				<h2 id="reviewWFB" class="reviewWithFB fb_btn" style="display:none">REVIEW WITH FACEBOOK</h2>
                       				<h2 id="reviewWOFB">SUBMIT REVIEW WITHOUT FACEBOOK</h2> 
                       				<div class="clear_both"></div>
                       				<%-- <%
                       				String image = (String) request.getSession().getAttribute("image");
                       				String aToken = (String) request.getSession().getAttribute("accessToken");
                       				String userName = (String) request.getSession().getAttribute("fname");
                       				String userEmail = (String) request.getSession().getAttribute("email");
                       				%> --%>
                       				<c:set var="image" value="${sessionScope.image}"/>
                       				<c:set var="aToken" value="${sessionScope.accessToken}"/>
                       				<c:set var="fbuserName" value="${sessionScope.fname}"/>
                       				<c:set var="fbuserEmail" value="${sessionScope.email}"/>
                       				<input type="hidden" id="FBImage" value="${sessionScope.image}"/>
                       				<input type="hidden" id="aToken" value="${sessionScope.accessToken}"/>
                       				<input type="hidden" id="FBuserName" value="${sessionScope.fname}"/>
                       				<input type="hidden" id="FBuserEmail" value="${sessionScope.email}"/>
                       				<input type="hidden" id="FBreviewTitle" value="${sessionScope.reviewTitle}"/>
                       				<input type="hidden" id="FBreviewText" value="${sessionScope.reviewText}"/>
                       				<input type="hidden" id="FBreviewRating" value="${sessionScope.reviewRating}"/>
                       				<input type="hidden" id="fbLoginErrorMessage" value="${sessionScope.fbLoginErrorMessage}"/>
                       				<input type="hidden" id="fbLoginFrom" value="${sessionScope.status}"/>
                       				<input type="hidden" id="revEmail" value="${sessionScope.revEmail}"/>
                       				<input type="hidden" id="revName" value="${sessionScope.revName}"/>
                       				<%-- <input type="hidden" id="image" value="<%=image %>"></input> --%>
                       				<form action="" method="get" name="rating" class="rating_form">
                                    <c:choose>
                                    <c:when test="${reviewFrom eq 'mail'}">
	                       				<div>
                       					<input class="rev_name" type="text" title="Your Name" name="Your Name" value="Your Name" id="userName" />
                       					<input class="rev_email" type="text" title="Your Email" name="Your Email" value="Your Email" id="userEmail" />
                       					<input class="rev_title" type="text" title="Title" name="Title" value="Title" id="r_title" />
                       					<textarea class="rev_comment" id="reviewText" rows="" cols="" value="Your Message"  name="your_message"> </textarea>
                       					<div class="idp_review_rating_holder">
	                       					<span class="add_review brwn_btn" id="submit_rating">ADD REVIEW</span>
		                       				<code class="rev_msg"></code>
	                       					<div class="review_rating_holder">
										    <span>Rating:</span> 
										    <div class="rating_display rating_select_act" id="review_rating">
	                                            <code class="default_rating1" id="id1" title='1'></code>
	                                            <code class="default_rating2" id="id2" title='2'></code>
	                                            <code class="default_rating3" id="id3" title='3'></code>
	                                            <code class="default_rating4" id="id4" title='4'></code>
	                                            <code class="default_rating5" id="id5" title='5'></code>
	                                        </div>
                                        
                                        <font id="anonymous" class="noClass">Post Review Anonymously?</font>
	                       				</div>
	                       				</div>
                       				</div>

                                        <div id="ratingError" style="color:red;font-size:12px;"></div>
                                        <!-- <input name="keep_anonymous" id="anonymous" type="checkbox" value="" class="check_box" /><font>Post Reivew Anonymously?</font> -->
	                       				<input name="uname" type="hidden" id="uname" value="${userName}"/>
	                                    <input name="umail" type="hidden" id="umail" value="${userEmail}"/>	
	                                    <input name="rtitle" type="hidden" id="rtitle" value="${reviewtitle}"/>
	                                    <input name="rtext" type="hidden" id="reviewtext" value="${reviewText}"/>
	                                    <input name="ratingcount" type="hidden" id="ratingCount" value="${ratingCount}"/>
	                                    <input type="hidden" id="loggedin" value="${sessionScope.loggedin}">
                                    </c:when>
                                    <c:otherwise>
                                    	<input type="text" onblur="isNameAvailable()" title="Your Name" name="Your Name" value="Your Name" id="userName" class="review_name" style="display:none" />
	                       				<input type="text" onblur="isEmailAvailable()" title="Your Email" name="Your Email" value="Your Email" id="userEmail" class="review_email" style="display:none" />
	                       				<input type="text" title="Title" name="Title" value="Title" id="r_title" class="review_title review_title_withoutfb"/>
	                       				<textarea class="review_message_textarea" onblur="isReviewTextAvailable()" id="reviewText" rows="" cols="" value="Your Message"  name="your_message">Your Message</textarea>
	                       				<div class="idp_review_rating_holder">
		                       				<span class="add_review brwn_btn" id="submit_rating" style="display:none">ADD REVIEW</span>
		                       				<span class="add_reviewFB brwn_btn" id="submit_ratingFB">ADD REVIEW</span>
		                       				<%-- <code class="rev_msg"></code> --%>
		                       				<%-- <c:choose>
		                       				<c:when test="${aToken eq null }">
		                       					<c:out value="FAILED"/>
		                       				</c:when>
		                       				<c:otherwise>
		                       					<c:out value="SUCCESS"/>
		                       				</c:otherwise> --%>
		                       				<c:if test="${aToken ne null && aToken ne ''}">
		                       					<img class="rev_msg" src="${sessionScope.image}" style="width:26px"></img>
		                       				</c:if>
		                       				<c:if test="${aToken eq null || aToken eq '' }">
												<img class="rev_msg" src="/images/avatar_small.png"></img>		                       				
		                       				</c:if>
		                       				
	                       					<div class="review_rating_holder">
										    	<span>Rating:</span> 
										    	<div class="rating_display rating_select_act" id="review_rating">
	                                            <code class="default_rating1" id="id1" title='1'></code>
	                                            <code class="default_rating2" id="id2" title='2'></code>
	                                            <code class="default_rating3" id="id3" title='3'></code>
	                                            <code class="default_rating4" id="id4" title='4'></code>
	                                            <code class="default_rating5" id="id5" title='5'></code> 
	                                        </div>
                                       
                                        <font id="anonymous" class="noClass" style="display:none">Post Review Anonymously?</font>
                                         </div>
                                        </div>
                                        <div id="ratingError" class="rating_error"></div>
                                        <!-- <input name="keep_anonymous" id="anonymous" type="checkbox" value="" class="check_box" /><font>Post Reivew Anonymously?</font> -->
	                       			</c:otherwise>
	                       			</c:choose>
	                       			<div id="successMsg" class="success_msg" style="display:none">Your review has been submitted!</div>
                                    </form>
                       				
									    
										
									</div><!-- review_rating_holder -->
                             	</div><!--idp_review_text  -->
                             	<div class="clear_both"></div>
                             	
                             	
                             	<input name="reviewFrom" id="reviewfrom" type="hidden" value="${reviewFrom}" />
								<c:set var="reviewCount1" value="0"/>
								<ul class="review_comments">
								<c:forEach items="${userReviewList}" var="userReview">
								<c:set var="reviewCount1" value="${reviewCount1+1}"/>
								<c:set var="rawDate" value="${userReview.dateAdded}"/>
								<fmt:formatDate pattern="yyyy-MM-dd hh:mm a" value="${rawDate}" var="strDate"/>
                             		<li>
                             			<div class="idp_review_left">
                             				<c:if test="${userReview.imageUrl=='' || userReview.imageUrl eq null}">
                             					<img src="../images/avatar_big.png" />
                             				</c:if>
                             				<c:if test="${userReview.imageUrl!='' || userReview.imageUrl ne null}">
                             					<img src="${userReview.imageUrl}" />
                             				</c:if>
                             				<c:if test="${userReview.userName==''}">
												<h3></h3>
											</c:if>
											<c:if test = "${userReview.userName!=''}">
											<%-- <c:out value="${fn:replace(userReview.userName," ","")}"/> --%>
											<h3>${userReview.userName}</h3>
											</c:if>
											<div class="rating_display" id="userRating">
											<c:forEach var="i" begin="1" end="5" varStatus="mystatus">	
												<c:if test="${userReview.ratingCount>=i}">
												<code id="star${mystatus.count}" class="review_selected"></code>
												</c:if>
												<c:if test="${userReview.ratingCount<i}">
												<code id="star${mystatus.count}"></code>
												</c:if>
											</c:forEach>
											</div>											
											<div class="clear_both"></div>
											
                             				
                             				
                             			</div>
                             			<div class="idp_review_right">
                             			
                             			<c:if test="${userReview.title==''}">
											<h4></h4>
										</c:if>
										<c:if test = "${userReview.title!=''}">
											<h4>${userReview.title}</h4>
										</c:if>
										
										<c:if test="${userReview.reviewText==''}">
											<span></span>
											</c:if>
										<c:if test = "${userReview.reviewText!=''}">
											<span>${userReview.reviewText}</span>
										</c:if>
                             			
                             			</div>
                             			<div class="clear_both"></div>
                             		</li>
                             	<input type="hidden" value="${userReview.ratingCount}" id="${reviewCount1}"/>
								</c:forEach>
								</ul>
								<div class="loading_list" style='display:none'><code></code></div>
                                    <input type="submit" id="loadMoreReviews" value="Load More Reviews" class="load_review brwn_btn load_act"  />
                             </div>
                                   
         </div><!-- content_holder -->                            
                            <div class="clear_both"></div>   
           						<tiles:insertAttribute name="footer"/>  <div class="clear_both"></div>	
           						<code class="loading_page"></code>
    </div><!-- wrapper -->
           						 
   
   <div class="global_topbtm_scroll">
	<span class="scroll_top scroll_top_act"></span>
    <span class="scroll_btm scroll_btm_act"></span>
</div><!-- global_topbtm_scroll -->
 
<!-- dont_see_your_size_popup -->
    	<div class="dnt_see_ursze_act popup_pos kgpopup_act">
        	<div class="login_popup_close popup_close_act"></div>
                <div class="dont_see_your_size_popup_holder ">
            	 <h2>DON'T SEE YOUR SIZE?</h2>
                 	<p>We know you want this shoe bad. Put in your request here and if we get a pair back in, we'll email you.  Sometimes we do, sometimes we don't, but at least get on the list and we'll try! Many styles come in whole sizes only, so if you typically wear a half size, be sure to read the fit notes and select the closest size that will work for you.</p>
                    	<form action="custom_size_form" method="get" class="custom_size_form">
                        	<label class="fl" >Your Email:</label> <i id="emailError" style="color:red;font-size:12px;"> </i> <div class="clear_both"></div>
                            <input name="email" type="text" class="input_box" id="sizeEmail" autocorrect = "off"  autocapitalize="off"/>
                            <!-- <input name="check_box" type="checkbox" value="" class="popup_check_box" id="alertme"/><span>Email me about new styles from this brand.</span> -->
                            <div class="clear_both"></div>
                            <div class="shoe_info">
                            	<div class="custom_size_shoe_img"></div><!-- custom_size_shoe_img -->
                                    <div class="custom_size_selection">
                                        <h3>${productname} - ${vendorName} </h3>
                                        <div class="size_dropdown_cont">
                                            <div class="size_color_labels">
                                                <label>Size:</label>
                                                </div>
                                                 <div class="custom_size_select_field">
                                                
                                                <div class="custom_dropdown custom_dropdown_102" id="size_nav">
                                                    <input name="sizeSelected" id="sizeSelected" type="text" class="size_color_select_fields select_popup select_popup_70" value="Select" readonly="readonly"/>
                                                    <span class="custom_drop_nav"></span>
                                                             <ul id="dontSeeYourSizes">
                                                             	<%-- <c:if test="${dontSeeYourSizes ne null && dontSeeYourSizes != ''}">
																  <c:forEach var="sizes" items="${dontSeeYourSizes}" varStatus="loop">
																 	 <c:set var="sizesList" value="${dontSeeYourSizes}"/> --%>
																 	 <%-- <li id="dontSeeYourSizes_${loop.count}" value='${fn:replace(sizes,".0","")}'>${fn:replace(sizes,".0","")}</li> --%>
																 	 <li id="dontSeeYourSizes_"></li>
																 <%--  </c:forEach>
																</c:if> --%>
																<%-- <c:if test="${dontSeeYourSizes eq null || dontSeeYourSizes == ''}">
																	<li value='4'>4</li>
																	<li value='4.5'>4.5</li>
																	<li value='5'>5</li>
																	<li value='5.5'>5.5</li>
																	<li value='6'>6</li>
																	<li value='6.5'>6.5</li>
																	<li value='7'>7</li>
																	<li value='7.5'>7.5</li>
																	<li value='8'>8</li>
																	<li value='8.5'>8.5</li>
																	<li value='9'>9</li>
																	<li value='9.5'>9.5</li>
																	<li value='10'>10</li>
																	<li value='10.5'>10.5</li>
																	<li value='11'>11</li>
																	<li value='11.5'>11.5</li>
																	<li value='12'>12</li>
																	<li value='12.5'>12.5</li>
																	<li value='13'>13</li>
																	<li value='13.5'>13.5</li>
																	<li value='14'>14</li>
																	<li value='14.5'>14.5</li>
																	<li value='15'>15</li>
																	<li value='15.5'>15.5</li>
																	<li value='16'>16</li>
																</c:if>	 --%>
															</ul>
																	<!-- custom_dropdown --></div>
															<div class="clear_both"></div>		
																<!-- custom_size_select_field --></div>	
																<div class="clear_both"></div>
																<div class="half_size_notifi">
					                                    				<p>"We sometimes receive only whole sizes for some shoes. You may wish to set notifications for one or more whole sizes also." </p>
					                                                    <code></code>
					                                   			</div><!-- half_size_notifi -->
													</div><!-- size_dropdown_cont -->			
                                                <label class="color">Color:</label>
                                                <div class="custom_size_select_field custom_size_clr">
                                                <div class="custom_dropdown">
                                                    <input id="Color" type="text" class="size_color_select_fields select_popup" value="Select" readonly="readonly"/>
                                                    <span class="custom_drop_nav"></span>
                                                   <ul class="cList"> 
                                                    <c:forEach items="${colormap}" var="color">
                                                        <li id='${color.key}'>${color.value}</li>
													</c:forEach>
													</ul>
                                                    <!-- <ul>
                                                        <li>Color</li>
                                                        <li>red</li>
                                                        <li>blue</li>
                                                    </ul> -->
                                                </div><!-- custom_dropdown -->
                                                 
                                                 </div><!-- custom_size_select_field -->
                                                 
 			                           		<div class="clear_both"></div>
 	                                   		<!-- <div id='sizeSelectError' class="errorSize" style="color:red;font-size:12px;"> </div> -->
 	                                   		<input name="send_request" value="Give Me A Heads Up" type="button" class="size_send_request_btn brwn_btn"  id="sendRequest"/>
                                    </div><!-- custom_size_selection -->
                                    <div class="clear_both"></div>
                            </div><!-- shoe_info -->
                        </form>
            </div><!-- dont_see_your_size_popup_holder --> 	
        </div><!-- dont_see_your_size_popup -->
 

    	<div class="outof_stock_popup_act popup_pos kgpopup_act"> <!-- Out of Stock Popup -->
        	<div class="login_popup_close popup_close_act"></div>
                <div class="ppup_cont_holder dont_see_your_size_popup_holder ">
            	 <h2>DANG... WE'RE OUT.</h2>
                 	<p><b>Don't worry though, we get shipments in all the time.</b> The easiest way to get what you want is to tell us what size and color you're looking for. We'll email you as soon as it is back in stock!</p>
                    	<form action="custom_size_form1" method="get" class="custom_size_form">
                        	<label class="fl">Your Email:</label> <i id="emailError1" style="color:red;font-size:12px;"> </i><div class="clear_both"></div> 
                            <input name="email" type="text" class="input_box" id="sizeEmail1" autocorrect = "off"  autocapitalize="off"/>
                            <!-- <input name="check_box" type="checkbox" value="" class="popup_check_box" id="alertme1"/><span>Email me about new styles from this brand.</span> -->
                            <div class="clear_both"></div>
                            <div class="shoe_info">
                            	<div class="custom_size_shoe_img"></div><!-- custom_size_shoe_img -->
                                    <div class="custom_size_selection">
                                        <h3>${productname} - ${vendorName} </h3>
                                            <div class="size_color_labels">
                                                <label>Size:</label>
                                                </div>
                                                 <div class="custom_size_select_field">
                                                
                                                <div class="custom_dropdown custom_dropdown_102 " id="custom_drop_size_nav">
                                                    <input name="sizeSelected" id="sizeSelected1" type="text" class="size_color_select_fields select_popup select_popup_70" value="Select" readonly="readonly"/>
                                                    <span class="custom_drop_nav"></span>
                                                             <ul id="outOfStockList">
																	<li id="outOfStock_"></li>
																	<!-- <li value='4'>4</li>
																	<li value='4.5'>4.5</li>
																	<li value='5'>5</li>
																	<li value='5.5'>5.5</li>
																	<li value='6'>6</li>
																	<li value='6.5'>6.5</li>
																	<li value='7'>7</li>
																	<li value='7.5'>7.5</li>
																	
																	<li value='8'>8</li>
																	<li value='8.5'>8.5</li>
																	<li value='9'>9</li>
																	<li value='9.5'>9.5</li>
																	<li value='10'>10</li>
																	<li value='10.5'>10.5</li>
																	
																	<li value='11'>11</li>
																	<li value='11.5'>11.5</li>
																	<li value='12'>12</li>
																	<li value='12.5'>12.5</li>
																	<li value='13'>13</li>
																	<li value='13.5'>13.5</li>
 																	<li value='14'>14</li>
																	<li value='14.5'>14.5</li>
																	<li value='15'>15</li>
																	<li value='15.5'>15.5</li>
																	<li value='16'>16</li> -->
																	
																	
															</ul>
																	<!-- custom_dropdown --></div>
															<div class="clear_both"></div>		
																<!-- custom_size_select_field --></div>	
																<div class="clear_both"></div>			
                                                <label class="color">Color:</label>
                                                <div class="custom_size_select_field custom_size_clr">
                                                <div class="custom_dropdown">
                                                    <input id="Color1" type="text" class="size_color_select_fields select_popup" value="Select" readonly="readonly" />
                                                    <span class="custom_drop_nav"></span>
                                                    <ul class="cList1"> 
                                                    <c:forEach items="${colormap}" var="color">
                                                        <li id='${color.key}'>${color.value}</li>
													</c:forEach>
													</ul>
                                                </div><!-- custom_dropdown -->
                                                <div class="clear_both"></div>
                                                 </div><!-- custom_size_select_field -->
                                                 
                                                 
 			                           		<div class="clear_both"></div>
 			                           		<!-- <div id='sizeSelectError1' class="errorSize1" style="color:red;font-size:12px;"> </div> -->
 	                                   		<input name="send_request" value="Let Me Know!" type="button" class="size_send_request_btn brwn_btn" id="sendRequestForWaitList"/>
                                    </div><!-- custom_size_selection -->
                                    <div class="clear_both"></div>
                            </div><!-- shoe_info -->
                        </form>
            </div><!-- dont_see_your_size_popup_holder --> 	
        </div><!-- Out of Stock Popup -->
        



<!-- send to a friend popup -->
    	<div class="sendto_friend_popup_act popup_pos kgpopup_act">
        	<div class="login_popup_close popup_close_act"></div>
                <div class="sendtofriend_popup_holder">
            	 <h2>SEND TO A FRIEND</h2>
                    	<form action="custom_size_form2" method="get" class="custom_size_form">
                        	<label class="sendfriend_label">Your Info:</label>
                            <input name="your name" type="text" value="Your Name" class="registration_inputfield" id="custName" autocorrect = "off"  autocapitalize="words"/><div id="custNameError" style="color:red;font-size:12px;"></div>
                            <input name="your email" type="text" value="Your Email" class="registration_inputfield no_margin" id="custEmail" autocorrect = "off"  autocapitalize="off"/><div id="custEmailError" style="color:red;font-size:12px;"></div>
                            <div class="clear_both"></div>
                        	<label class="sendfriend_label">Their Info:</label>
                            <input name="Their name" type="text" value="Their Name" class="registration_inputfield" id="frndName" autocorrect = "off"  autocapitalize="words"/><div id="frndNameError" style="color:red;font-size:12px;"></div>
                            <input name="Their email" type="text" value="Their Email" class="registration_inputfield no_margin" id="frndEmail" autocorrect = "off"  autocapitalize="off"/><div id="frndEmailError" style="color:red;font-size:12px;"></div>
                            <div class="clear_both"></div>
                        	<label class="sendfriend_label">Your Message:</label>
                            <textarea name="" class="message_textarea" id = "textMsg" autocorrect = "on"  autocapitalize="sentences"></textarea>
                           <div class="shoe_info">
                            	<div class="custom_size_shoe_img"></div><!-- custom_size_shoe_img -->
                                    <div class="custom_size_selection">
                                        <h3>${productname} - ${vendorName} </h3>
                                            	
																<div class="clear_both"></div>		
																	
                                                <label class="color">Color:</label>
                                                <div class="custom_size_select_field custom_size_clr">
                                                <div class="custom_dropdown">
                                                    <input id="Color2" type="text" class="size_color_select_fields select_popup" value="Select" readonly="readonly"/>
                                                    <span class="custom_drop_nav"></span>
                                                   <ul class="cList2"> 
                                                    <c:forEach items="${colormap}" var="color">
                                                        <li id='${color.key}'>${color.value}</li>
													</c:forEach>
													</ul>
                                                </div><!-- custom_dropdown -->
                                                 </div><!-- custom_size_select_field -->
                                                 
 			                           		<div class="clear_both"></div>
 	                                   		<div id='sizeSelectError' class="errorSize" style="color:red;font-size:12px;"> </div>
 	                                   		<div class="gry_btn fl yell_btn" id="sendToFriend">Send To My Friend<code class="popup_processing_icon"></code></div>
 	                                   		<!-- <input name="send_request" value="Send To My Friend" type="button" id="sendToFriend" class="size_send_request_btn" /> -->
 	                                   		<code class="popup_processing_icon"></code>
                                    </div><!-- custom_size_selection -->
                                    <div class="clear_both"></div>
                            </div><!-- shoe_info -->
                        </form>
            </div><!-- dont_see_your_size_popup_holder --> 	
        </div><!-- send to a friend -->
    
      <div class="outof_stock_popup_success_act popup_pos kgpopup_act">
        	<div class="login_popup_close popup_close_act"></div>
                <div class="ppup_cont_holder dontsee_size_success_popup_holder ">
            	 <h2>THANK YOU </h2>
                 
                            <div class="shoe_info">
                            	<div class="custom_size_shoe_img"></div><!-- custom_size_shoe_img -->
                                <div class="dontsee_size_success_msg">
                                	<p>We'll email you if another pair becomes available. Fingers crossed!</p>
									<div class="gry_btn yell_btn nb spl_align spl_align_lf" id="newRequestOOS">New Request</div>
                                 	<div class="gry_btn popup_close_act yell_btn spl_align nb" id="outOfStockSuccess">Done</div>
                                </div>
                                    <div class="clear_both"></div>
                                    
                            </div><!-- shoe_info -->
                        
            </div><!-- dontsee_size_success_popup_holder --> 	
        </div><!-- dnt_see_ursze_success_act -->  
     

       
        <!-- Acne_popup -->
        <div class="acne_popup acne_popup_act popup_pos kgpopup_act">
        	<div class="login_popup_close popup_close_act"></div>
                <div class="dont_see_your_size_popup_holder ">
                    <h2>in-store exclusive</h2>
					<p>Call 800.494.1260 or complete this form to request more information.</p>
                     <form action="" method="post" name="acneRequest" class="message_form_holder">
                        <label class="login_inputfields">Your Email:</label><div class="clear_both"></div>
                        <input name="acneRequest_email" type="text" class="input_box" id="acneRequest_email" /><div id="acneRequest_emailError" style="color:red;font-size:12px;"> </div>
                        <label class="how_help_field">How can we help you?</label>
                        <textarea name="acneRequest_msg" id="acneRequest_msg" cols="" rows="" class="message_textarea"></textarea><div id="acneRequest_msgEmpty" style="color:red;font-size:12px;"> </div>
                        <input name="acneRequest_send" id="acneRequest_send" type="button" value="Send" class="gry_btn"/>
                    </form>
         </div><!-- message_holder -->
    </div><!-- Acne_popup -->
	
	
<!-- dnt_see_ursze_sucess_popup-->	

       <div class="dnt_see_ursze_success_act popup_pos kgpopup_act">
        	<div class="login_popup_close popup_close_act"></div>
                <div class="ppup_cont_holder dontsee_size_success_popup_holder ">
            	 <h2>THANK YOU</h2>
                 
                            <div class="shoe_info">
                            	<div class="custom_size_shoe_img"></div><!-- custom_size_shoe_img -->
                                <div class="dontsee_size_success_msg">
                                	<p>We'll email you if another pair becomes available. Fingers crossed!</p>
									<div class="gry_btn yell_btn nb spl_align spl_align_lf" id="newRequest">New Request</div>
                                 	<div class="gry_btn popup_close_act yell_btn nb spl_align" id="dontSeeUrSizeSuccess">Done</div>
                                </div>
                                    <div class="clear_both"></div>
                                    
                            </div><!-- shoe_info -->
                        
            </div><!-- dontsee_size_success_popup_holder --> 	
        </div><!-- dnt_see_ursze_success_act -->
        
   <!-- Acne_sucess_popup-->     
	
	  <div class="acne_popup_success_act popup_pos kgpopup_act">
        	<div class="login_popup_close popup_close_act"></div>
                <div class="ppup_cont_holder dontsee_size_success_popup_holder ">
                 <div class="shoe_info nb">
                            	<div class="custom_size_shoe_img"></div><!-- custom_size_shoe_img -->
                                <div class="dontsee_size_success_msg">
                                	<h2>THANK YOU</h2>
                                	<h3>Your message has been sent.</h3>
									<p>We'll get back to you shortly.</p>
                                 <div class="gry_btn popup_close_act yell_btn" id="acneSuccess">Continue Shopping</div>
                                </div>
                                    <div class="clear_both"></div>
                                    </div><!-- shoe_info -->
                        
            </div>	
        </div> 
	 <!-- Acne_sucess_popup-->
	 
	 
	 <!-- send_to_friend_sucess_popup-->	

       <div class="send_to_friend_sucess_act popup_pos kgpopup_act">
        	<div class="login_popup_close popup_close_act"></div>
                <div class="ppup_cont_holder dontsee_size_success_popup_holder ">
            	 <h2>THANK YOU</h2>
                 
                            <div class="shoe_info nb">
                            	<div class="custom_size_shoe_img"></div><!-- custom_size_shoe_img -->
                                <div class="dontsee_size_success_msg">
                                	<p>Thank You for sharing with your friends.</p>
                                	<p>Don't forget to add solestruck.com to your favorites.</p>
                                 <div class="gry_btn popup_close_act yell_btn" id="sendToFriendSuccess">Continue Shopping</div>
                                </div>
                                    <div class="clear_both"></div>
                                    
                            </div><!-- shoe_info -->
                        
            </div><!-- send_to_friend_sucess_popup_holder --> 	
        </div><!-- send_to_friend_sucess_act -->
       
        <div class="review_popup popup_pos">
	        <div class="fb_review_popup_close popup_close_act"></div>
			<h6>SIGN IN TO REVIEW</h6>
			<p>To leave a comment or review please sign in with Facebook</p>
			<!-- <span class="brwn_btn review_fb">Login With Facebook</span> -->
			<a href="#" class="review_fb brwn_btn" onclick="loadingForFb('review');window.open('<%= redirectURL%>','FacebookLogin',
            'left=370,top=180,width=630,height=325,toolbar=1,resizable=0');">Login With Facebook</a>
		</div>
	 
	 <tiles:insertAttribute name="PopUp"/> 
	 
	 
	 
	<!-- 
Please use this hidden field for getting image url in JS file and avoid hardcoding image url in JS
 -->
<input type="hidden" id="imageURL" value="<%=imageURL%>"/>
<input type="hidden" id="idpURL" value="<%=VeroniqaConstants.LIVE_FRONTEND_URL %><%=vendorName.replaceAll(" ","-").toLowerCase()%>-<%=productName.replaceAll(" ","-").toLowerCase()%>-${fn:toLowerCase(fn:replace(selected_color_Name," ","-")	)}/index.html" />
<input type="hidden" id="isLoggedin" value="${sessionScope.loggedin}"/>


 
<!--  for SSGA-79 GODATAFEED service -->
<!-- <script async>
(function() {
	  var scriptLocation=('https:' == document.location.protocol ? 'https://tracking.godatafeed.com/gdf_click.js' : 'http://tracking.godatafeed.com/gdf_click.js');
	    var cj = document.createElement('script'); cj.type = 'text/javascript'; cj.async = true;
	    cj.src = scriptLocation;
	    var sss = document.getElementsByTagName('script')[0]; sss.parentNode.insertBefore(cj, sss);
	  })();
</script> -->
<!--  for SSGA-79 GODATAFEED service -->

<!-- for SSGA-96 GOOGLE TRUSTED STORE -->

<script async type="text/javascript">

  var gts = gts || [];

  gts.push(["id", "<%=VeroniqaConstants.getGoogleTrustedStoreID()%>"]);

  if($("#variantId").val()!=0)
  {
	gts.push(["google_base_offer_id",$("#variantId").val()]);
  }
  else
  {
	gts.push(["google_base_offer_id","12345"]);
  }
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

<!--  Google Structured code -->
<div itemscope itemtype="http://data-vocabulary.org/Product" style="visibility:hidden">
    <span itemprop="brand">${vendorName}</span>
    <span itemprop="name">${productname}</span>
    <img itemprop="image" src="<%=imageURL %><%=vendorName.replaceAll(" ","-").toLowerCase()%>-shoes/<%=vendorName.replaceAll(" ","-")%>-shoes-<%=productName.replaceAll(" ","-")%>-(${fn:replace(colorName," ","-")})-010304.jpg" alt=""  />
    <span itemprop="description">${vendorName} ${productname} in ${selected_color_Name}. A ${vendorName} original. Imported. ${socialcategory} shoes</span> 
    <c:choose>
    <c:when test ="${style ne null}">
    <span itemprop="category" content="Apparel & Accessories > Shoes "> ${style}> ${vendorName} ${productname}</span> 
    </c:when>
    <c:otherwise>
    <span itemprop="category" content="Apparel & Accessories > Shoes"> ${vendorName} ${productname}</span> 
    </c:otherwise>
    </c:choose>
  	<span itemprop="identifier" content="sku:${productDataId}">${productDataId}</span>
 	<span itemprop="review" itemscope itemtype="http://data-vocabulary.org/Review-aggregate">
    <span itemprop="rating">${avgRating}</span>
    <span itemprop="count">${reviewCount} </span> 
     
  </span>

  <span itemprop="offerDetails" itemscope itemtype="http://data-vocabulary.org/Offer">
    <meta itemprop="currency" content="USD" />
    <c:choose>
    <c:when test="${productData.salePrice gt 0.0}" >
    <span itemprop="price">${productData.salePrice}</span>
    </c:when>
    <c:otherwise>
    <span itemprop="price">${productData.retailPrice}</span>
    </c:otherwise>
    </c:choose>
    <c:choose>
    <c:when test="${vendorName eq 'Vintage'}" >
    <span itemprop="condition" content="used"></span>
      </c:when>
      <c:otherwise>
      <span itemprop="condition" content="new"></span>
      </c:otherwise>
      </c:choose>
     </span>
      
</div>
<div id="backgroundPopup_street"></div>
<!-- sizing_guide_popup -->
<div class="sizing_popup popup_pos nav_pos kgpopup_act">
    <div class="nav_popup_close popup_close_act"></div>
        
        <div class="sizing_pops_holder">
            <h3>
                SIZING GUIDE
            </h3>
            <h4>HOW TO GET THE RIGHT FIT</h4>
            <code class="sizing_popup_line"></code>
            <p>
                Not sure what size to order? All sizes listed on our site are US sizes. We try on each style for you and record the approximate measurements for every size to help you decide which size to buy (because we love you and want you to be happy with shoes that fit)! 
            </p>
            <p><b>PLEASE NOTE:</b> Fit can vary from style to style and from brand to brand, so please check the measurement we show and read the fit notes in each shoe description. Also, check each shoe description for any US to EUR size conversions that brand might have <b><i>(see image below)</i></b>.</p>
            <!-- <div class="sizing_thumb">
                <h6>
                    (1) Custom fit notes per shoe/brand.<br></br>
                    <img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/FBLive/images/sizing_thm1.jpg" />
                </h6>
                <h6>
                    (2) Sizing shown in US Sizes & CM.<br></br>
                    <img src="images/sizing_thm2.jpg" />
                </h6>
                <div class="clear_both"></div>
            </div> -->
            <span>
                <b>TO FIND YOUR BEST FIT:</b><br>
                <h6 class="fl">1.</h6> <h6 class="fl sizingnum">Stand on a tape measure or ruler.</h6><br>
                <h6 class="fl">2.</h6> <h6 class="fl sizingnum">Measure the length of your foot (heel to toe) in centimeters (cm).</h6><br>
                <h6 class="fl">3.</h6> <h6 class="fl sizingnum">Select a size to see the corresponding measurement, or read the shoe description to find the measurement.</h6><br>
                <h6 class="fl">4.</h6> <h6 class="fl sizingnum">Choose the size that best matches your foot measurement and decide if you want to go a little bigger for a little extra room.</h6><br>
            </span>
            <img src="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/FBLive/images/sizing_thm1.jpg" />
        </div>
</div><!-- sizing_guide_popup -->

<!-- Segment Pixel - SoleStruck--Shopper - DO NOT MODIFY -->
<script src="http://ib.adnxs.com/seg?add=1319617&t=1" type="text/javascript"></script>
<!-- End of Segment Pixel -->

</body>
</html>
