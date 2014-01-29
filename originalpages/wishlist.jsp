<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@page import="com.veroniqa.frontend.util.VeroniqaConstants" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ page import="com.veroniqa.frontend.util.EnvironmentUtil" 
    import="com.veroniqa.frontend.util.VeroniqaConstants" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="sr" uri="http://solestruck.com/resources" %>
<head>

<meta name="googlebot" content="index"/>
<meta name="robots" content="index,follow"/>
<meta name="robots" content="noodp"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>WishList Page</title>
  
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
<% String imageURL=VeroniqaConstants.IMAGE_URL; %>
<body>
<div class="top_bar">
  <div class="global_nav_holder">
  
    <tiles:insertAttribute name="topmenumain"/>
    
      </div><!-- global_nav_holder --> 
</div><!-- top_bar -->

<tiles:insertAttribute name="header"/>

<div class="Wishlist_content_holder"></div>
	
	
	<div id="wrapper">
	<div class="menu_pathway">
         	<ul>
                <li class="pathway_home"><a href="/">Home</a></li>
                <li class="path_arrow">
                <c:if test="${youAreHere eq 'Coming Soon'}">
              	<a href="/preorders/">Coming Soon</a></li>
              	<li class="path_arrow"></li>
              	<li><a href="/${vendorNameSmall}-${socialcategory}s-shoes/">${vendorName}</a></c:if>
               
               
                <c:if test="${youAreHere eq 'men' && page != 'NA'}">
                <a href="/mens/">Men</a></li>
                <li class="path_arrow"></li>
                <li><a href="/${vendorNameSmall}-${youAreHere}s-shoes/${page}">${vendorName}</a></c:if>
    		 	<c:if test="${youAreHere eq 'women' && page != 'NA'}">        
            	<a href="/search-womens-shoes/">Women</a></li>
            	<li class="path_arrow"></li>
            	<li><a href="/${vendorNameSmall}-${youAreHere}s-shoes/${page}">${vendorName}</a></c:if>
            	
            	<c:if test="${youAreHere eq 'men' && page eq 'NA'} ">
                <a href="/mens/">Men</a></li>
                <li class="path_arrow"></li>
                <li><a href="/${vendorNameSmall}-${youAreHere}s-shoes/">${vendorName}</a></c:if>
                
    		 	<c:if test="${youAreHere eq 'women' && page eq 'NA'}">        
            	<a href="/search-womens-shoes/">Women</a></li>
            	<li class="path_arrow"></li>
            	<li><a href="/${vendorNameSmall}-${youAreHere}s-shoes/">${vendorName}</a></c:if>
               
            	<c:if test="${youAreHere eq 'Sale'}">        
            	<a href="/sale-shoes/">Sale</a></li>
            	<li class="path_arrow"></li>
            	<li><a href="/${vendorNameSmall}-${socialcategory}s-shoes/">${vendorName}</a></c:if>
            	<c:if test="${youAreHere eq 'New'}">        
            	<a href="/new-arrivals/">New Arrial</a></li>
            	<li class="path_arrow"></li>
            	<li><a href="/${vendorNameSmall}-${socialcategory}s-shoes/">${vendorName}</a></c:if>
            	<c:if test="${youAreHere eq 'home'}">
                <a href="/${vendorNameSmall}-${socialcategory}s-shoes/">${vendorName}</a></c:if>
            	<c:if test="${vendorName eq 'Vintage'}">
            	<a href="/vintage-shoes/">Vintage</a></c:if>
            	</li>
            	<li class="path_arrow"><a >YOUR WISHLIST</a></li>
                
                
            </ul>
            <div class="clear_both"></div>
         </div><!-- menu_pathway -->
         <div class="idp_shoe_name_holder">
         <c:choose>  
         <c:when test="${wishListItemsSize>1}">
         	 <h1 class="nb wishlist_heading">YOU'RE WISHING FOR ${wishListItemsSize} PAIRS</h1>
         </c:when>
         <c:when test="${wishListItemsSize==1}">
         	 <h1 class="nb wishlist_heading">YOU'RE WISHING FOR ${wishListItemsSize} PAIR</h1>
         </c:when>
         <c:otherwise>
          <h1 class="nb wishlist_heading">YOUR WISHLIST IS EMPTY.</h1>
         </c:otherwise>
         </c:choose>
         <c:choose>
         <c:when test="${wishListItemsSize==0}">
         	<a href="/"><span class="done_whistlist yell_btn" >CONTINUE SHOPPING</span></a>
         </c:when>
         <c:otherwise> 
    	     <span class="edit_whitlist brwn_btn" style="display: block;"  onclick="editWishlist()">EDIT</span>
	    	 <span class="done_whistlist yell_btn" style="display: none;" onclick="doneWishlist()" >DONE</span>
         </c:otherwise>
         </c:choose>
		<div class="clear_both"></div>
        </div>

<c:set var="discountprogram" value="${sr:getDiscountProgramForFB()}"></c:set>
<c:set var="webDiscountOn" value="${discountprogram.webDiscountOn}"></c:set>
<c:set var="discountTypeName" value="${discountprogram.programTypeName}"></c:set>
<input type="hidden" id="webDiscountOn" value="${discountprogram.webDiscountOn}"></input>
<input type="hidden" id="discountTypeName" value="${discountprogram.programTypeName}"></input>
<c:set var="brandList" value="${sr:getBrandListForSale()}"></c:set>
<c:forEach var="brandNames" items="${brandList}">
	<c:set var="saleBrandNames" value="${brandNames}"></c:set>
	<input type="hidden" id="saleBrandNames" value="${brandNames}"></input>
</c:forEach>
 <c:set var="imageURL" value="<%=VeroniqaConstants.IMAGE_URL%>" /> 
 <input type="hidden" id="imageURL" value="${imageURL}" />

 <c:set var="isWlEmpty" value="true"/>
 <c:if test="${wishListItemsSize>0}">
 <div class="Wishlist_content_holder">                            	
	<div class="new_shoes_holder">
	 <c:set var="shoeCount" value="0"/>
  <c:forEach var="wishListItem" items="${wishListItems}" varStatus="i">
			<c:set var="isWlEmpty" value="false"/> 
			<c:set var="vendorName" value="${wishListItem.vendorName}"/> 
			<c:set var="productName" value="${wishListItem.productName}"/> 
			<c:set var="vendorNameL" value="${fn:replace(vendorName,' ','-')}"/>
			<c:set var="vendorNameSmall" value="${fn:toLowerCase(vendorNameL)}"></c:set>
			<c:set var="productNameSmall" value="${fn:toLowerCase(productName)}"></c:set>
			<c:set var="colorName" value="${wishListItem.color}"/>
			<c:set var="productVariantId" value="${wishListItem.productVariantId}"/>
			<c:set var="colorName" value="${wishListItem.color}"/>
			<c:set var="colorSmall" value="${fn:toLowerCase(colorName)}"></c:set>
			<c:set var="isPreOrder" value="${wishListItem.isPreOrder}"/>
			<c:set var="available" value="${wishListItem.available}"></c:set>
			<c:set var="shoeCount" value="${shoeCount+1}"/>
		    <c:set var="w_space" value="wishlist_shoe_holder"></c:set>
       		<c:if test="${(shoeCount%3)!=1 && (shoeCount%3)!=0}">
				<c:set var="w_space" value="wishlist_shoe_holder white_space"></c:set>
       	 	</c:if>        					
		    <div class="${w_space}">
		    	<a href="/${fn:replace(vendorNameSmall,' ','-')}-${fn:replace(productNameSmall,' ','-')}-${fn:replace(colorSmall,' ','-')}/index.html" >
			
			<code class="shoes_img">
				<img id="image_${wishListItem.wishListItemId}" width="240" height="180" src="${imageURL}${fn:toLowerCase(vendorNameL)}-shoes/${fn:replace(vendorName,' ','-')}-shoes-${fn:replace(productName,' ','-')}-(${fn:replace(colorName,' ','-')})-010407.jpg"  />
			</code>
			<div class="wishlist_shoe_discription_holder">
			
				<input type="hidden" id="productId_${wishListItem.wishListItemId}" value="${wishListItem.productId}">
				<input type="hidden" id="idplink_${wishListItem.wishListItemId}" value="/${fn:replace(vendorNameSmall,' ','-')}-${fn:replace(productNameSmall,' ','-')}-${fn:replace(colorSmall,' ','-')}/index.html">
				
              	<input type="hidden" id="productName_${wishListItem.wishListItemId}" value="${productName}"/>
              	<input type="hidden" id="vendorName_${wishListItem.wishListItemId}" value="${vendorName}" />
              	<input type="hidden" id="productVariantId_${wishListItem.wishListItemId}" value="${productVariantId}" />
              	<input type="hidden" id="colorName_${wishListItem.wishListItemId}" value="${colorName}" />
              	<input type="hidden" id="unitPrice_${wishListItem.wishListItemId}" value=" ${wishListItem.price}" />
              	<input type="hidden" id="salePrice_${wishListItem.wishListItemId}" value="${wishListItem.salePrice}" />
              	<input type="hidden" id="retailPrice_${wishListItem.wishListItemId}" value="${wishListItem.price}" />
              	<input id="color_${wishListItem.wishListItemId}" type="hidden" value="${wishListItem.colorid}" titlevalue="${wishListItem.color }"/>
              	<input id="size_${wishListItem.wishListItemId }" type="hidden" value="${wishListItem.size}"  />
              	<input id="preorder_${wishListItem.wishListItemId }" type="hidden" value="${isPreOrder}"  />
              	
                                          	
			<h2>${productName }</h2>
			<i titlevalue="${productVariantId}" ><span class="fl edit_shoe_size">SIZE ${fn:replace(wishListItem.size,'.0','')}</span><c:if test="${wishListItem.availableInventory>0}"> <i class="stock">In Stock!</i></c:if></i>
			<h4>${vendorName}</h4>
		    <fmt:formatNumber type="currency" value="${wishListItem.salePrice}" pattern="#,###.00" var="fmtSalePrice"/>
            <fmt:formatNumber type="currency" value="${wishListItem.price}" pattern="#,###.00" var="fmtPrice"/>
            <fmt:formatNumber value="${(wishListItem.salePrice-(wishListItem.salePrice*discountprogram.discountPercentage)/100)}" var="SpSaleprice" type="currency" currencySymbol="$" />
            
            
            <c:choose>
          	<c:when test="${cookie['Facebook'] ne null && cookie['Facebook'].value == 'Facebook' && webDiscountOn ne null && webDiscountOn eq true && discountTypeName ne 'Brand' && discountTypeName eq 'FF'}">
	          	<c:choose>
	          	<c:when test="${wishListItem.salePrice!=null && wishListItem.salePrice gt 0.0}">
		          	<%-- <fmt:formatNumber value="${sr:getRoundedValue(newProMap.salePrice-(newProMap.salePrice*discountprogram.discountPercentage)/100)}" var="SpSaleprice" type="currency" currencySymbol="$" /> --%>
		          	<%-- <h3><strike>$${newProMap.retailPrice}</strike><strike>$${newProMap.salePrice}</strike><b class="incart">${SpSaleprice}</b></h3> --%>
		          	<h3><del style="padding-right: 5px;">$${fmtPrice}</del><del style="padding-right: 5px;">${fmtSalePrice}</del><b class="incart">${SpSaleprice}</b></h3>
	          	</c:when>
	          	<c:otherwise>
		          	<h3><c:choose><c:when test="${wishListItem.salePrice <= 0.0}"><b>$${fmtPrice}</b></c:when><c:otherwise></c:otherwise></c:choose></h3>
		        </c:otherwise>
	          	</c:choose>
          	</c:when>
          	<c:when test="${cookie['Facebook'] ne null && cookie['Facebook'].value == 'Facebook' && webDiscountOn ne null && webDiscountOn eq true && discountTypeName eq 'Brand'}">
           	<c:choose>
           	<c:when test="${vendorNameSmall eq saleBrandNames && wishListItem.salePrice!=null && wishListItem.salePrice gt 0.0}">
           	<%-- <fmt:formatNumber value="${sr:getRoundedValue(newProMap.salePrice-(newProMap.salePrice*discountprogram.discountPercentage)/100)}" var="SpSaleprice" type="currency" currencySymbol="$" /> --%>
           	<h3><del style="padding-right: 5px;">$${fmtPrice}</del><del style="padding-right: 5px;">$${fmtSalePrice}</del><b class="incart">${SpSaleprice}</b></h3>
           	</c:when>
           	<c:when test="${vendorNameSmall eq saleBrandNames && wishListItem.salePrice eq 0.0}">
           	<fmt:formatNumber value="${(fmtPrice-(fmtPrice*discountprogram.discountPercentage)/100)}" var="SpSaleprice1" type="currency" currencySymbol="$" />
           	<h3><del style="padding-right:5px">$${fmtPrice}</del><b class="incart">${SpSaleprice1}</b></h3>
           	</c:when>
           	<c:otherwise>
           	<h3><c:choose><c:when test="${wishListItem.salePrice!=null && wishListItem.salePrice gt 0.0}"><del style="padding-right:5px">$${fmtPrice}</del><b>$${fmtSalePrice}</b></c:when><c:otherwise><b>$${fmtPrice}</b></c:otherwise></c:choose></h3>
           	</c:otherwise>
           	</c:choose>
           	</c:when>
          	<c:otherwise>
          		<h3><c:choose><c:when test="${wishListItem.salePrice!=null && wishListItem.salePrice gt 0.0}"><del style="padding-right:5px">$${fmtPrice}</del><b>$${fmtSalePrice}</b></c:when><c:otherwise><b>$${fmtPrice}</b></c:otherwise></c:choose></h3>
          	</c:otherwise>
          	</c:choose>
            
            
		    <%-- <c:if test="${wishListItem.salePrice <= 0.0}" >
	      		<h3><b>$${fmtPrice}</b></h3>
 	        </c:if> 
            <c:if test="${wishListItem.salePrice gt 0.0}" >
				<h3><del style="padding-right: 5px;">$${fmtPrice}</del><b>${fmtSalePrice}</b></h3>
 	       </c:if> --%>
			<div class="clear_both"></div>
			</div>
			</a>
			<c:choose>
            <c:when test="${available eq true}">
            		<%-- <span class=circle_black_close    style="display: none;"  id="wishlist_Remove_${wishListItem.wishListItemId}" onclick="removeWLItem(this.id)"></span> --%>
         		    <span class=circle_yel_plus       id="wishlist_Loading_${wishListItem.wishListItemId}"></span>
            </c:when>
            <c:otherwise>
           			<%--  <span class style="display: none;"  id="wishlist_Remove_${wishListItem.wishListItemId}" onclick="removeWLItem(this.id)" ></span> --%>
         	   		 <span class="circle_order" style="display: block;" id="wishlist_Loading_${wishListItem.wishListItemId}" >OUT OF STOCK</span>
            </c:otherwise>
            </c:choose>
		    </div>            					
 </c:forEach>
</div>
</div>
</c:if>  
<div class="clear_both"></div>	

 <code class="loading_page"></code>
 
<tiles:insertAttribute name="footer"/>  <div class="clear_both"></div>	

</div>
 <div id="backgroundPopup"></div>
<tiles:insertAttribute name="PopUp"/> 
<script type="text/javascript">

var _gaq = _gaq || [];
var pluginUrl = 
 '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
_gaq.push(['_require', 'inpage_linkid', pluginUrl]);
_gaq.push(['_setAccount', '<%=VeroniqaConstants.getAnalyticsID()%>']);
_gaq.push(['_trackPageview']);

(function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();

</script>

<script type='text/javascript'>
var __wtw_lucky_setup_key = {};
__wtw_lucky_setup_key.id = '1328';
__wtw_lucky_setup_key.key = 's7WF5zuMpvHZGPhc8TerakbkGkH4a9yJ';

    (function() {
        var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
        wa.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://ca179456') + '.luckyorange.com/w.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
      })();
    </script>
 
  
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
