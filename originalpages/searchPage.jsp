<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@page
import="com.veroniqa.frontend.util.VeroniqaConstants"
 %>
<%@taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="frm" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="sr" uri="http://solestruck.com/resources" %>
<head>

<meta name="googlebot" content="index"/>
<meta name="robots" content="index,follow"/>
<meta name="robots" content="noodp"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>Solestruck - because ugly shoes are a global issue...</title>

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
<div id="wrapper">
  <tiles:insertAttribute name="header"/>
  <!-- <div class="global_topbtm_scroll" style="display: block; ">
	<span class="scroll_top scroll_top_act"></span>
    <span class="scroll_btm scroll_btm_act"></span>
  </div> -->
    <div class="menu_pathway">
         	<ul>
                <li class="pathway_home"><a href="/">Home</a></li>
                <li class="path_arrow"></li>
                <li><span>Search Results</span></li>
            </ul>
            <div class="clear_both"></div>
         </div><!-- menu_pathway -->
	<div class="clear_both"></div>
	<div class="content_holder">
		<div class="content_holder_brand_view_heading">
			<h1 class="nb all_heading"><c:choose><c:when test="${fn:length(pageDTO.data)>0 }">Search Results </c:when><c:otherwise>No Results Found</c:otherwise> </c:choose> For   '${phrase}'</h1>
	    	<div class="clear_both"></div>
		</div><!-- content_holder_brand_view_heading -->
		<div class="clear_both"></div>

	<div id="filteredProducts">
	</div><!-- filteredProducts -->
	
	<div id="pageloadProducts">	
	<div class="new_shoes_holder sort_page_margin">
	<div class="sorry_no_items">
            	<h2>Sorry, No Results Were Found.</h2>
                <p>We can't find any items that match your search. Sorry about that.<br /> 
					Is everything spelled correctly? Maybe what your looking for is in our <a href="#">New Arrivals?</a></p>
                <span>Need help finding what your looking for? Call us at 1.800.494.1260 (M-F 7a - 5p PST) or <a href="#">Email Us.</a></span>    
     </div><!-- sorry_no_items -->
	<input type="hidden" id="totavailpages" value="${pageDTO.availablePages}" >
		<c:set var="shoeCount" value="0"/>
		<c:set var="discountprogram" value="${sr:getDiscountProgramForFB()}"></c:set>
		<c:set var="webDiscountOn" value="${discountprogram.webDiscountOn}"></c:set>
		<c:set var="discountTypeName" value="${discountprogram.programTypeName}"></c:set>
		<c:set var="brandList" value="${sr:getBrandListForSale()}"></c:set>
		<c:forEach var="brandNames" items="${brandList}">
			<c:set var="saleBrandNames" value="${brandNames}"></c:set>
			<input type="hidden" value="${brandList}"></input>
		</c:forEach>

		<c:forEach items="${pageDTO.data}" var="newProMap" varStatus="proStatus">
		
			         		<c:set var="vendorName" value="${newProMap.vendorName}"></c:set>
			         		<c:set var="vendorNameL" value="${fn:replace(vendorName,' ','-')}"/>
							<c:set var="vendorNameSmall" value="${fn:toLowerCase(vendorNameL)}"></c:set>
			         		<c:set var="colorName" value="${newProMap.colorName}"></c:set>
			         		<c:set var="colorSmall" value="${fn:toLowerCase(colorName)}"></c:set>
			         		<c:set var="productName" value="${newProMap.productName}"></c:set>
			         		<c:set var="productNameSmall" value="${fn:toLowerCase(productName)}"></c:set>
			         		<c:set var="shoeCount" value="${shoeCount+1}"/>
			         		<c:set var="salePrice" value="${newProMap.salePrice}"/>
			         		<c:set var="isPreOrder" value="${newProMap.isPreorder}"></c:set>
			         		<c:set var="isNew" value="${newProMap.isNewArrival}"></c:set>
			         		<c:set var="isSale" value="${newProMap.isSale}"></c:set>
			         		<c:set var="retailPrice" value="${newProMap.retailPrice}"/>
			         		<c:set var="finalDiscount" value="${(newProMap.retailPrice-newProMap.salePrice)/newProMap.retailPrice*100}"/>
			         		<c:set var="socialCategoryName" value="${newProMap.socialCategory}"></c:set>
			         		<c:set var="isSale" value="no"/>
			         		<c:if test="${salePrice gt 0.0}" >
			         		<c:set var="isSale" value="yes"/>
			         		</c:if>
			         		<c:set var="available" value="${newProMap.available}"></c:set>
			         		<c:if test="${available eq true}">
								<c:set var="isAvailable" value="yes"></c:set>
							</c:if>
			         		<%-- <c:out value="${shoeCount}"/> --%>
			         		
			         		<c:set var="w_space" value="shoe_holder"></c:set>
			         		
 		            		<c:if test="${(shoeCount%3)!=1 && (shoeCount%3)!=0}">
 		            		
             			 		<c:set var="w_space" value="shoe_holder white_space"></c:set>
             			 		
 		            	 	</c:if> 
			         		<div class="${w_space}">
			         		<a  href="/${fn:replace(vendorNameSmall,' ','-')}-${fn:replace(productNameSmall,' ','-')}-${fn:replace(colorSmall,' ','-')}/index.html" style="text-decoration: none;" > 
			         			

					               	
					               
			           		   		<code class="shoes_img" ><img src="<%=imageURL%>${fn:toLowerCase(vendorNameL)}-shoes/${fn:replace(vendorName," ","-")}-shoes-${fn:replace(productName," ","-")}-(${fn:replace(colorName," ","-")})-010407.jpg" width="240" height="180"  ></img></code>
			           		   		
					 <!-- 	**For Black friday sale -->
						<div class="shoe_discription_holder">
						
          	 		
	                        	<h2>${newProMap.productName}</h2>
	                        	<h4>${newProMap.vendorName}</h4>
	                        	<c:choose>
	                        	<c:when test="${cookie['Facebook'] ne null && cookie['Facebook'].value == 'Facebook' && webDiscountOn ne null && webDiscountOn eq true && discountTypeName ne 'Brand' && discountTypeName eq 'FF'}">
	                        	<c:choose>
	                        	<c:when test="${newProMap.salePrice!=null && newProMap.salePrice>0.0 && isAvailable eq 'yes'}">
	                        	<fmt:formatNumber value="${sr:getRoundedValue(newProMap.salePrice-(newProMap.salePrice*discountprogram.discountPercentage)/100)}" var="SpSaleprice" type="currency" currencySymbol="$" />
	                        	<h3><strike>$${newProMap.retailPrice}</strike><strike>$${newProMap.salePrice}</strike><b class="incart">${SpSaleprice}</b></h3>
	                        	</c:when>
	                        	<c:otherwise>
	                        	<h3><c:choose><c:when test="${newProMap.salePrice!=null && newProMap.salePrice>0.0 && isAvailable eq 'yes'}"><strike>$${newProMap.retailPrice}</strike><b>$${newProMap.salePrice}</b></c:when><c:otherwise><b>$${newProMap.retailPrice}</b></c:otherwise></c:choose></h3>
	                        	</c:otherwise>
	                        	</c:choose>
	                        	</c:when>
	                        	<c:when test="${cookie['Facebook'] ne null && cookie['Facebook'].value == 'Facebook' && webDiscountOn ne null && webDiscountOn eq true && discountTypeName eq 'Brand'}">
	                        	<c:choose>
	                        	<c:when test="${vendorNameSmall eq saleBrandNames && newProMap.salePrice!=null && newProMap.salePrice>0.0 && isAvailable eq 'yes'}">
	                        	<fmt:formatNumber value="${sr:getRoundedValue(newProMap.salePrice-(newProMap.salePrice*discountprogram.discountPercentage)/100)}" var="SpSaleprice" type="currency" currencySymbol="$" />
	                        	<h3><strike>$${newProMap.retailPrice}</strike><strike>$${newProMap.salePrice}</strike><b class="incart">${SpSaleprice}</b></h3>
	                        	</c:when>
	                        	<c:when test="${vendorNameSmall eq saleBrandNames && newProMap.salePrice eq 0.0}">
	                        	<fmt:formatNumber value="${sr:getRoundedValue(newProMap.retailPrice-(newProMap.retailPrice*discountprogram.discountPercentage)/100)}" var="SpSaleprice" type="currency" currencySymbol="$" />
	                        	<h3><strike>$${newProMap.retailPrice}</strike><b class="incart">${SpSaleprice}</b></h3>
	                        	</c:when>
	                        	<c:otherwise>
	                        	<h3><c:choose><c:when test="${newProMap.salePrice!=null && newProMap.salePrice>0.0 && isAvailable eq 'yes'}"><strike>$${newProMap.retailPrice}</strike><b>$${newProMap.salePrice}</b></c:when><c:otherwise><b>$${newProMap.retailPrice}</b></c:otherwise></c:choose></h3>
	                        	</c:otherwise>
	                        	</c:choose>
	                        	</c:when>
	                        	<c:otherwise>
	                        	<h3><c:choose><c:when test="${newProMap.salePrice!=null && newProMap.salePrice>0.0 && isAvailable eq 'yes'}"><strike>$${newProMap.retailPrice}</strike><b>$${newProMap.salePrice}</b></c:when><c:otherwise><b>$${newProMap.retailPrice}</b></c:otherwise></c:choose></h3>
	                        	</c:otherwise>
	                        	</c:choose>
	                        <div class="clear_both"></div>
	                </div><!-- shoe_discription_holder  -->   
	                		   <!-- 	**Older Shoe Description Holder****Commmented out for black friday sale -->
				                  <%-- <div class="shoe_discription_holder">
					                     <div class="shoe_discription_col1 fl">
						                     <span class="shoe_brand" >${newProMap.vendorName}</span>
						                     <span class="shoe_name" >${newProMap.productName}</span>
						               	</div><!-- shoe_discription_col1  -->
						               	<div class="shoe_discription_col2 fl">
						               	<c:choose>
						                     <c:when test="${isSale eq 'yes'&& isAvailable eq 'yes'}">
						                     
						                        <span class="pre_order">Sale</span>
						                      	<span class="shoe_price" ><del>$${newProMap.retailPrice}</del>$${newProMap.salePrice}</span>  
						                      	
						                      	<c:if test="${param.sale ne null && param.sale == 'FBSALE'}">
											   <fmt:formatNumber value="${(newProMap.salePrice-(newProMap.salePrice*20)/100)}" var="SpSaleprice" type="currency" currencySymbol="$" />
										       <span class="shoe_price" >FBSALE <del><c:out value="${salePrice}"/></del><c:out value="${SpSaleprice}"/></span> 
										</c:if>
										
										<c:if test="${param.sale eq null && cookie['sale'] ne null && cookie['sale'].value == 'FBSALE'}">
										 		<fmt:formatNumber value="${(newProMap.salePrice-(newProMap.salePrice*20)/100)}" var="SpSaleprice" type="currency" currencySymbol="$" />
										       <span class="shoe_price" >FBSALE <del><c:out value="${salePrice}"/></del><c:out value="${SpSaleprice}"/></span>
										        	
										</c:if>
						                      	
						                      	
						   				  	</c:when>
						   				  	<c:when test="${isSale eq 'yes'&& isAvailable eq 'no'}">
						                     
						                        <span class="pre_order">Out of Stock</span>
						                      	<span class="shoe_price" ><del>$${newProMap.retailPrice}</del>$${newProMap.salePrice}</span>  
						                      	
						                      	
						                      	<c:if test="${param.sale ne null && param.sale == 'FBSALE'}">
											   <fmt:formatNumber value="${(newProMap.salePrice-(newProMap.salePrice*20)/100)}" var="SpSaleprice" type="currency" currencySymbol="$" />
										       <span class="shoe_price" >FBSALE <del><c:out value="${salePrice}"/></del><c:out value="${SpSaleprice}"/></span> 
										</c:if>
										
										<c:if test="${param.sale eq null && cookie['sale'] ne null && cookie['sale'].value == 'FBSALE'}">
										 		<fmt:formatNumber value="${(newProMap.salePrice-(newProMap.salePrice*20)/100)}" var="SpSaleprice" type="currency" currencySymbol="$" />
										       <span class="shoe_price" >FBSALE <del><c:out value="${salePrice}"/></del><c:out value="${SpSaleprice}"/></span>
										        	
										</c:if>
						                      	
						                      	
						   				  	</c:when>
						   				  	<c:when test="${isNew eq true&& isAvailable eq 'yes'}">
						                     
						                        <span class="pre_order">New</span>
						                      	<span class="shoe_price" >$${newProMap.retailPrice}</span>  
						   				  	</c:when>
						   				  	<c:when test="${isNew eq true && isAvailable eq 'no'}">
						                     
						                        <span class="pre_order">Out of Stock</span>
						                      	<span class="shoe_price" >$${newProMap.retailPrice}</span>  
						   				  	</c:when>
						   				   	<c:when test="${isAvailable eq 'yes'}">
						                     	<span class="shoe_price" >$${newProMap.retailPrice}</span>
						   				 	 </c:when>
						   				  	<c:otherwise>
						                     	<span class="pre_order" >Out of Stock</span>
						                     	<span class="shoe_price" >$${newProMap.retailPrice}</span>
						   				  	</c:otherwise>
						   				  	</c:choose>
							             	  <c:set var="retailPrice" value=""></c:set>
							             	  <c:set var="salePrice" value=""></c:set>
							             	  <c:set var="discountPercent" value=""></c:set> 
							             	  <c:set var="isAvailable" value="no"></c:set>
							             	  <c:set var="isNew" value="no"></c:set>
							             	  <c:set var="isSale" value="no"></c:set>
							             	  <c:set var="isNormal" value="yes"></c:set>
						           		</div><!-- shoe_discription_col2  -->
						          	 <div class="clear_both"></div>
					         	</div> --%>
							</a>
								<c:choose>
                           <c:when test="${available eq false}"><span class="circle_order">OUT OF STOCK</span></c:when>
                           <c:when test="${isSale eq true}"><span class="circle_new">SALE</span></c:when>
                           <c:when test="${isPreOrder eq true}"><span class="circle_order">PRE- ORDER</span></c:when>
                           <c:when test="${isNew eq true}"><span class="circle_new">NEW</span></c:when>
                           <c:when test="${socialCategoryName ne null && socialCategoryName ne ''}">
                               <span class="circle_new">${fn:toUpperCase(socialCategoryName)}</span>
                           </c:when>
                           </c:choose>
                           
							</div>
						<c:if test="${(shoeCount%3)==0}">
      				         <div class="clear_both"></div>
             			</c:if>
       </c:forEach>
	       
	</div><!-- new_shoes_holder -->
	</div><!-- pageloadProducts -->
	<div class="clear_both"></div>
	<input type="hidden" id="retainSearchPageNumber" value="1"></input>
	<input type="hidden" id="retaining_scroll_top" value="0"></input>
	<input type="hidden" id="isShowMoreResultsClicked" value="false"></input>

<c:if test="${pageDTO.nextAvailable==true }">
<div class="loading_list" style="display: none; "><code></code></div>
<input type="button" value="Show More Results" class="load_review brwn_btn load_act" id="searchMoreResults" />
</c:if>
</div><!-- content_holder -->                            
<div class="clear_both"></div>
<tiles:insertAttribute name="footer"/>
<div class="clear_both"></div>	
</div><!-- wrapper -->
<tiles:insertAttribute name="PopUp"/> 
<div id="backgroundPopup"></div>
<input type="hidden" name="category" id="category" value="${param.category}"></input>


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
  
  /* Added for Search Analytics by YES */
  
  var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www."); document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E")); 
  
  var pageTracker = _gat._getTracker("<%=VeroniqaConstants.getAnalyticsID()%>");
  pageTracker._initData(); 
  var searchterm=document.location.pathname.split('/')[2];
  
  pageTracker._trackPageview('/search_results.php?q='+searchterm); 
  
  /* Upto here Added for Search Analytics by YES */

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
