<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@page import="com.veroniqa.frontend.util.VeroniqaConstants"  %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="frm" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="sr" uri="http://solestruck.com/resources" %>
<head>

<meta name="googlebot" content="index">
<meta name="robots" content="index,follow">
<meta name="robots" content="noodp">
<meta name="KEYWORDS" content="NEW ARRIVALS on Jeffrey Campbell Shoes, Sam Edelman Shoes, Hunter Boots, Vans Shoes, Timberland Boot Co, Camper Shoes, Dolce Vita Shoes, Seychelles Shoes, Kelsi Dagger Shoes, Clarks Originals, Palladium Boots">
<meta name="DESCRIPTION" content="NEW ARRIVALS DAILY + Free Shipping Worldwide + Easy Returns // Tastefully edited selection of must have shoes and boots // We're small and independent and just trying to share our shoe game with the world!">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<title>NEW SHOES ARRIVING DAILY...SOLESTRUCK.COM </title>

<link rel="shortcut icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon">
<link rel="icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon">
<link rel="canonical" href="/new-arrivals">
<c:choose>
<c:when test="${pageno eq '1' }">
<link rel="next" href="/new-arrivals/page-${pageDTO.selectedPage+1}/"/>
</c:when>
<c:when test="${pageno eq pageDTO.availablePages }">
<link rel="prev" href="/new-arrivals/page-${pageDTO.selectedPage-1}"/>
</c:when>
<c:otherwise>
<link rel="prev" href="/new-arrivals/page-${pageDTO.selectedPage-1}"/>
<link rel="next" href="/new-arrivals/page-${pageDTO.selectedPage+1}"/>
</c:otherwise>
</c:choose>

<link href="/style/${common_css}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm" rel="stylesheet" type="text/css">
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
<div class="menu_pathway">
         	<ul>
                <li class="pathway_home"><a href="/">Home</a></li>
                <li class="path_arrow"></li>
                <li><span>${youAreHere}</span></li>
            </ul>
            <div class="clear_both"></div>
</div><!-- menu_pathway -->
<div class="sorry_no_items">
            	<h2>Sorry, No Items Were Found.</h2>
                <span>Need help finding what your looking for? Call us at 1.800.494.1260 (M-F 7a - 5p PST) or <a class="emailuspopup_act" style="cursor: pointer;">E-Mail Us</a></span>    
</div><!-- sorry_no_items -->
<div class="clear_both"></div>
<div class="content_holder">
		<div class="idp_shoe_name_holder"> 	
	    	<h1 class="nb all_heading">${youAreHere}</h1>
	    	<!--*******Progressive Enhancement**********-->
	    	<noscript>
		<div class="clear_both"></div>
		<div id="womens_styles" class="pro_en fl">
			<h3>Womens Styles</h3>
						<ul class="fl">
							<c:forEach items="${styles}" var="style" varStatus="status">
                            
									    
									     <c:set var="stylename" value="${style.name}"></c:set>
									     <c:set var="styleNameBig" value="${fn:toUpperCase(stylename)}"></c:set>
									     <c:set var="styleNameSmall" value="${fn:toLowerCase(stylename)}"></c:set>
									     <li><a style="color: black;" href="/${fn:replace(styleNameSmall,' ','-')}/">${styleNameBig}</a></li>
									     
                                    	
                            </c:forEach>
                            </ul>        
		
		</div>

		<div id="vintage_womens_styles" class="pro_en fl">
		<h3>Vintage Womens Styles</h3>
						<ul class="fl">
							<c:forEach items="${styles}" var="style" varStatus="status">
						
									    
									     <c:set var="stylename" value="${style.name}"></c:set>
									     <c:set var="styleNameBig" value="${fn:toUpperCase(stylename)}"></c:set>
									     <c:set var="styleNameSmall" value="${fn:toLowerCase(stylename)}"></c:set>
									     <li><a style="color: black;" href="/vintage-womens-${fn:replace(styleNameSmall,' ','-')}/">${styleNameBig}</a></li>
                                    	
                            </c:forEach>
                           </ul>         
		
		</div>
		<div id="womens_colors" class="pro_en fl" >
		<h3>Womens Colors</h3>
		                           <ul class="fl">
									<c:forEach items="${colors}" var="color" varStatus="status">
									    
									    
									     <c:set var="colorname" value="${color.name}"></c:set>
								
									     <c:set var="colorNameBig" value="${fn:toUpperCase(colorname)}"></c:set>
									     <c:set var="colorNameSmall" value="${fn:toLowerCase(colorname)}"></c:set>
									     <li><a style="color: black;" href="/${fn:replace(colorNameSmall,' ','-')}-shoes/">${colorNameBig}</a></li>
                                    </c:forEach>
                                    </ul>
		
		</div>
		<div id="mens_styles" class="pro_en fl">
			<h3>Mens Styles</h3>
						<ul class="fl">
							<c:forEach items="${styles}" var="style" varStatus="status">
							
									    
									     <c:set var="stylename" value="${style.name}"></c:set>
									     <c:set var="styleNameBig" value="${fn:toUpperCase(stylename)}"></c:set>
									     <c:set var="styleNameSmall" value="${fn:toLowerCase(stylename)}"></c:set>
									     <li><a style="color: black;" href="/mens-${fn:replace(styleNameSmall,' ','-')}/">${styleNameBig}</a></li>
									     
                                    	
                            </c:forEach>
                          </ul>          
		
		</div>

		<div id="vintage_mens_styles" class="pro_en fl">
		<h3>Vintage Mens Styles</h3>
						<ul class="fl">
							<c:forEach items="${styles}" var="style" varStatus="status">
							
									    
									     <c:set var="stylename" value="${style.name}"></c:set>
									     <c:set var="styleNameBig" value="${fn:toUpperCase(stylename)}"></c:set>
									     <c:set var="styleNameSmall" value="${fn:toLowerCase(stylename)}"></c:set>
									     <li><a style="color: black;" href="/vintage-mens-${fn:replace(styleNameSmall,' ','-')}/">${styleNameBig}</a></li>
                                    	
                            </c:forEach>
                           </ul>         
		
		</div>
		<div id="mens_colors" class="pro_en fl" >
		<h3>Mens Colors</h3>
		                           <ul class="fl">
									<c:forEach items="${colors}" var="color" varStatus="status">
									   
									    
									     <c:set var="colorname" value="${color.name}"></c:set>
								
									     <c:set var="colorNameBig" value="${fn:toUpperCase(colorname)}"></c:set>
									     <c:set var="colorNameSmall" value="${fn:toLowerCase(colorname)}"></c:set>
									     <li><a style="color: black;" href="/mens-${fn:replace(colorNameSmall,' ','-')}-shoes/">${colorNameBig}</a></li>
                                    </c:forEach>
                                   </ul> 
		
		</div>
		</noscript>
		<!--***********End of Progressive Enhancement***************-->
	    	<div class="clear_both"></div>
	    </div><!-- idp_shoe_name_holder -->  
    <div class="clear_both"></div>
    <input type="hidden" id="SocialCat" value="${sc}"></input>
 <tiles:insertAttribute name="filter"/>    
<div class="clear_both"></div>

<div class="sorry_no_items" id="filter_sorry_no_items">
	<h2>Sorry, No Items Were Found.</h2>
    <span>Need help finding what your looking for? Call us at 1.800.494.1260 (M-F 7a - 5p PST) or <a class="emailuspopup_act">E-Mail Us</a></span>    
</div><!-- filter_sorry_no_items -->

  	<div id="filteredProducts">
	</div><!-- filteredProducts -->
	
	<div id="pageloadProducts">
   <div class="new_shoes_holder sort_page_margin">
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
   
   <c:forEach items="${pageDTO.data}" var="newProMap">
          		 
          		<c:set var="vendorName" value="${newProMap.vendorName}"></c:set>
     		    <c:set var="vendorNameL" value="${fn:replace(vendorName,' ','-')}"/>
          		<c:set var="vendorNameSmall" value="${fn:toLowerCase(vendorNameL)}"></c:set>
          		<c:set var="colorName" value="${newProMap.colorName}"></c:set>
          		<c:set var="productName" value="${newProMap.productName}"></c:set>
          		<c:set var="productNameSmall" value="${fn:toLowerCase(productName)}"></c:set>
           		<c:set var="colorSmall" value="${fn:toLowerCase(colorName)}"></c:set>
           		<c:set var="shoeCount" value="${shoeCount+1}"/>
           		<c:set var="available" value="${newProMap.available}"></c:set>
           		<c:set var="isNew" value="${newProMap.isNewArrival}"></c:set>
           		<c:set var="isPreOrder" value="${newProMap.isPreorder}"></c:set>
           		<c:set var="socialCategoryName" value="${newProMap.socialCategory}"></c:set>
         		<c:if test="${available eq true}">
					<c:set var="isAvailable" value="yes"></c:set>
					</c:if>
				<c:set var="w_space" value="shoe_holder"></c:set>
           		<c:if test="${(shoeCount%3)!=1 && (shoeCount%3)!=0}">
					<c:set var="w_space" value="shoe_holder white_space"></c:set>
           	 	</c:if> 
          			
          			  <div class="${w_space}">
          			<a style="text-decoration: none;" href="/${fn:replace(vendorNameSmall,' ','-')}-${fn:replace(productNameSmall,' ','-')}-${fn:replace(colorSmall,' ','-')}/index.html"> 
				          <code class="shoes_img" ><img src="<%=imageURL%>${fn:toLowerCase(vendorNameL)}-shoes/${fn:replace(vendorName," ","-")}-shoes-${fn:replace(productName," ","-")}-(${fn:replace(colorName," ","-")})-010407.jpg" width="240" height="180"/></code>
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
   					</a> <!-- shoe_holder  -->
   					<c:choose>
          	 			 <c:when test="${available eq false}"><span class="circle_order">OUT OF STOCK</span></c:when>
          	 			 <c:when test="${isPreOrder eq true}"><span class="circle_order">PRE- ORDER</span></c:when>
          	 			 <c:when test="${fn:trim(sc) eq 'null' || fn:trim(sc) eq ''}"><span class="circle_new">${fn:toUpperCase(socialCategoryName)}</span></c:when>
          	 			
          	 		</c:choose>
   					</div>
               <c:if test="${(shoeCount%3)==0}">
               <div class="clear_both"></div>
               </c:if>
               
              	<c:set var="isAvailable" value="no"></c:set>
              	
            </c:forEach>
            <input type="hidden" id="shoeCount" value="${shoeCount}" >
             <input type="hidden" id="checkData" value="${checkData}" >
<div class="clear_both"></div>
</div><!-- new_shoes_holder -->
<input type="hidden" name="newsize" id="newsize" value="${newSize}"></input>
<c:set var="totalAvailabe" value="${pageDTO.availablePages}"></c:set>
	<c:if test="${totalAvailabe gt 1}">
	<c:set var="lend" value="10"/>
	<c:set var="lbegin" value="1"/>
	<c:choose>
	<c:when test="${pageDTO.selectedPage-3 < 1 }">
		<c:if test="${totalAvailabe-9 lt 1}">
			<c:set var="lend" value="${totalAvailabe}"/>
		</c:if>
	</c:when>
	<c:otherwise>
	
		<c:choose >
		<c:when test="${pageDTO.selectedPage+7 <= totalAvailabe}">
			<c:set var="lend" value="${pageDTO.selectedPage+7}"/>
			<c:set var="lbegin" value="${pageDTO.selectedPage-2}"/>
		</c:when>
		<c:otherwise>
			<c:set var="lend" value="${totalAvailabe}"/>
			<c:if test="${totalAvailabe-9 > 0}">
				<c:set var="lbegin" value="${totalAvailabe-9}" />
			</c:if>
		</c:otherwise>
	</c:choose>
	</c:otherwise>
	</c:choose>
	
	<div class="brand_view_pageination" >
	<input type="hidden" id="currentPage" value="${pageDTO.selectedPage}"/>
	<input type="hidden" id="totavailpages" value="${pageDTO.availablePages}"/>
	<input type="hidden" name="servername" id="servername" value="${serverName}"></input>
	<input type="hidden" name="newSocialCategory" id="newSocialCategory" value="${sc}"></input>
	<c:set var="newSize" value="${fn:replace(newSize,'.0','')}"></c:set>
	<c:set var="newarrival" value=''></c:set>
	<c:choose>
	
		  <c:when test="${sc eq null || sc eq 'null' }">
 		     <c:set var="newarrival" value="/new-arrivals"></c:set>
	      </c:when>
	      
	      <c:when test="${newSize ne null && newSize ne '' && sc ne null && sc ne 'null'}">
		      <c:set var="newarrival" value="/new-arrivals-${sc}s-shoes/size-${newSize}"></c:set>
	      </c:when>
	      
	      <c:when test="${sc ne null && sc ne 'null' && sc ne ''}">
	      <c:set var="newarrival" value="/new-arrivals-${sc}s-shoes"></c:set>
	      </c:when>
		   
	</c:choose>
	    <ul> 
			<li class="second">
			<a id="previous" <c:choose><c:when test="${pageDTO.selectedPage>1}">class="previous_page "</c:when><c:otherwise>class="empty_previous "</c:otherwise></c:choose> <c:if test="${pageDTO.selectedPage>1}">href="${newarrival}/page-${pageDTO.selectedPage-1}/"</c:if> ></a>
			<c:if test="${pageDTO.selectedPage>5 && lbegin!=1}">
					<a class="more_page" id="sns" onclick="showPrevMorePages()" >...</a>
			</c:if>
			<c:forEach var="i" begin="${lbegin}" end="${lend}" step="1" varStatus ="status">
				
				<c:choose>
				      <c:when test="${i eq pageDTO.selectedPage}">
						    <a class="page_number_selected" href="${newarrival}/page-${i}/" id="pagecount_<c:out value="${i}" />" ><c:out value="${i}" /></a>
				      </c:when>
		 		     <c:otherwise >
			 		     <a class="page_number"  id="pagecount_<c:out value="${i}" />" href="${newarrival}/page-${i}/" ><c:out value="${i}" /></a>
				      </c:otherwise>
				</c:choose>
			</c:forEach>
			<c:if test="${pageDTO.selectedPage < pageDTO.availablePages}">
				<c:if test="${pageDTO.availablePages gt 10}" >
					<a class="more_page" onclick="showNextMorePages()"  title="More" >...</a>
				</c:if>
			 <a class="next_page" id="next"  href="${newarrival}/page-${pageDTO.selectedPage+1}/"  ></a>
			 </c:if>
			</li>                 	
	        <li class="third">
	        	<div class="custom_dropdown" id="pagination_holder">
	               <input type="text" readonly="readonly" value="${pageDTO.itemsPerPage}"  titlevalue="${pageDTO.itemsPerPage}" id="itemsperpage"  class="size_color_select_fields select_popup" name="Size">
	               <span class="custom_drop_nav"></span> 
	               <ul>
	                 <li title="24" onclick="changeItemsPerPage('${newarrival}/',24)">24</li>
	                 <li title="48" onclick="changeItemsPerPage('${newarrival}/',48)" >48</li>
	                 <li title="96" onclick="changeItemsPerPage('${newarrival}/',96)">96</li>
	                </ul>
	             </div>
	            Per Page
	        </li>
	    </ul>
	    <div class="clear_both"></div>
	</div><!-- brand_view_pageination -->
	</c:if>	
</div><!-- pageloadProducts -->	                            
<div class="clear_both"></div>

</div>
</div><!-- wrapper -->
<tiles:insertAttribute name="footer"/>
<div class="clear_both"></div>	
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
