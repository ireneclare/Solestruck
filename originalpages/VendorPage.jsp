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
<meta name="googlebot" content="index"/>
 
<meta name="robots" content="index,follow"/>
<meta name="robots" content="noodp"/>
<meta name="KEYWORDS" content="${vendorName} shoes ,${vendorName} ${socialcategory}'s shoes,${vendorName}, ${socialcategory}'s shoes" />
<meta name="DESCRIPTION" content="${vendorName} shoes ,${vendorName} ${socialcategory}'s shoes - Browse through a huge selection of ${vendorName} shoes at great prices and get free shipping and free returns at Solestruck.com." />
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>${vendorName} Shoes at SoleStruck.com</title>

<link rel="icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" />
<link rel="shortcut icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" />
<link href='http://fonts.googleapis.com/css?family=Nobile:700italic|Raleway' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Inder' rel='stylesheet' type='text/css'>

<link href='http://fonts.googleapis.com/css?family=Roboto+Condensed:400,700' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Cinzel+Decorative' rel='stylesheet' type='text/css'>
<link href='http://fonts.googleapis.com/css?family=Fjalla+One' rel='stylesheet' type='text/css'>

<link href="/style/${common_css}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm" rel="stylesheet" type="text/css"/>
<script async type="text/javascript" src="/script/${common_js}/${sr:styleScriptVersion(pageContext.request)}/getStatic.htm"></script>

<c:choose>
<c:when test = "${appMode eq 'LIVE'}">
<link href="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/live/css/BrandFeatures.css" rel ="stylesheet" type="text/css"/>
</c:when>
<c:otherwise>
<link href="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/testing/css/BrandFeatures.css" rel ="stylesheet" type="text/css"/>
</c:otherwise>
</c:choose>

<c:choose>
<c:when test="${param.socialcategory eq 'women'}">
<link rel="canonical" href="/${Newvendor}-${param.socialcategory}s-shoes/" />
<c:choose>
<c:when test="${pageno eq '1'&& pageDTO.availablePages gt pageno }">
<link rel="next" href="/${Newvendor}-${param.socialcategory}s-shoes/page-${pageDTO.selectedPage+1}/"/>
</c:when>
<c:when test="${pageno eq pageDTO.availablePages && pageno ne pageDTO.availablePages  }">
<link rel="prev" href="/${Newvendor}-${param.socialcategory}s-shoes/page-${pageDTO.selectedPage-1}/"/>
</c:when>
<c:when test="${pageno lt pageDTO.availablePages }">
<link rel="prev" href="/${Newvendor}-${param.socialcategory}s-shoes/page-${pageDTO.selectedPage-1}/"/>
<link rel="next" href="/${Newvendor}-${param.socialcategory}s-shoes/page-${pageDTO.selectedPage+1}/"/>
</c:when>
<c:otherwise>
</c:otherwise>
</c:choose>
</c:when>
<c:when test="${param.socialcategory eq 'men'}">
<link rel="canonical" href="/${param.socialcategory}s-${Newvendor}/" />
<c:choose>
<c:when test="${pageno eq '1'&& pageDTO.availablePages gt pageno }">
<link rel="next" href="/${param.socialcategory}s-${Newvendor}/page-${pageDTO.selectedPage+1}/"/>
</c:when>
<c:when test="${pageno eq pageDTO.availablePages && pageno ne pageDTO.availablePages  }">
<link rel="prev" href="/${param.socialcategory}s-${Newvendor}/page-${pageDTO.selectedPage-1}/"/>
</c:when>
<c:when test="${pageno lt pageDTO.availablePages }">
<link rel="prev" href="/${param.socialcategory}s-${Newvendor}/page-${pageDTO.selectedPage-1}/"/>
<link rel="next" href="/${param.socialcategory}s-${Newvendor}/page-${pageDTO.selectedPage+1}/"/>
</c:when>
<c:otherwise>
</c:otherwise>
</c:choose>
</c:when>
</c:choose>
	
	
<% String imageURL=VeroniqaConstants.IMAGE_URL; 
	String vendorName=(String)request.getAttribute("vendorName");
	
	//System.out.println(vendorName);
	
	%>
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
<body>

<c:set var="discountprogram" value="${sr:getDiscountProgramForFB()}"></c:set>
<c:set var="webDiscountOn" value="${discountprogram.webDiscountOn}"></c:set>
<c:set var="discountTypeName" value="${discountprogram.programTypeName}"></c:set>
<c:set var="brandList" value="${sr:getBrandListForSale()}"></c:set>
<c:forEach var="brandNames" items="${brandList}">
	<c:set var="saleBrandNames" value="${brandNames}"></c:set>
	<input type="hidden" value="${brandList}"></input>
</c:forEach>
<!-- ClickTale Top part -->
<script type="text/javascript">
var WRInitTime=(new Date()).getTime();
</script>
<!-- ClickTale end of Top part -->


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
                 <li> <c:if test="${param.socialcategory eq 'men'}">
                <a href="/mens/">Men</a></c:if>
    		 <c:if test="${param.socialcategory eq 'women'}">        
            <a href="/search-womens-shoes/">Women</a></c:if></li>
                <li class="path_arrow"></li>
                <li><span>${vendorName}</span></li>
            </ul>
            <div class="clear_both"></div>
         </div><!-- menu_pathway -->
         <div class="clear_both"></div>
         <div class="sorry_no_items">
            	<h2>Sorry, No Items Were Found.</h2>
                <span>Need help finding what your looking for? Call us at 1.800.494.1260 (M-F 7a - 5p PST) or <a class="emailuspopup_act">E-Mail Us</a></span>    
            </div><!-- sorry_no_items -->
	
<div class="content_holder">

<c:if test="${param.socialcategory eq 'women'}">


   	<c:choose>
             <c:when test="${pageDTO.selectedPage eq 1 && vendor.htmlMessage!=null && vendor.htmlEnabled eq true && vendor.htmlMessage!=''}">
             ${vendor.htmlMessage}
             <div class="brand_view_head">
            <h1>Shop ${vendorName}</h1>
            <div class="clear_both"></div>
            </div>
             </c:when>
             <c:otherwise>
             <c:choose>
            <c:when test="${vendor.description != null && vendor.description!=''}">
            <div class="idp_shoe_name_holder brand_head">
            <h1 class="nb fl all_heading">${vendorName}</h1>
            <code id="brand_bio_act" class="fl"></code>
            <div class="clear_both"></div>
            </div>
            </c:when>
            
            <c:otherwise>
            <div class="brand_view_head">
            <h1 class="nb all_heading">${vendorName}</h1>
            <div class="clear_both"></div>
            </div>
              </c:otherwise>
            </c:choose> 
             </c:otherwise>
        </c:choose> 
        
 </c:if>
  

  
   <c:if test="${param.socialcategory eq 'men'}">


   	<c:choose>
             <c:when test="${pageDTO.selectedPage eq 1 && vendor.htmlMessage!=null && vendor.htmlEnabledForMen eq true && vendor.htmlMessage!=''}">
             ${vendor.htmlMessage}
             <div class="brand_view_head">
            <h1>Shop ${vendorName}</h1>
            <div class="clear_both"></div>
            </div>
             </c:when>
             <c:otherwise>
             <c:choose>
            <c:when test="${vendor.description != null && vendor.description!=''}">
            <div class="idp_shoe_name_holder brand_head">
            <h1 class="nb fl all_heading">${vendorName}</h1>
            <code id="brand_bio_act" class="fl"></code>
            <div class="clear_both"></div>
            </div>
            </c:when>
            
            <c:otherwise>
            <div class="brand_view_head">
            <h1 class="nb all_heading">${vendorName}</h1>
            <div class="clear_both"></div>
            </div>
              </c:otherwise>
            </c:choose> 
             </c:otherwise>
        </c:choose>
        
  </c:if> 
  
		 
	<div class="clear_both"></div>
	
 <tiles:insertAttribute name="filter"/>
 
<div class="clear_both"></div>
<div class="sorry_no_items" id="filter_sorry_no_items">
	<h2>Sorry, No Items Were Found.</h2>
    <span>Need help finding what your looking for? Call us at 1.800.494.1260 (M-F 7a - 5p PST) or <a class="emailuspopup_act">E-Mail Us</a></span>    
</div><!-- sorry_no_items -->
		
		<div id="filteredProducts">
		</div><!-- filteredProducts -->
		
		<div id="pageloadProducts">
		   <div class="new_shoes_holder sort_page_margin">
		   <input type="hidden" id="totavailpages" value="${pageDTO.availablePages}" >
		   <c:set var="shoeCount" value="0"/>
			<c:set var="isNew" value="no"></c:set> 
			<c:set var="vendorNameSmall" value=""/>
		<c:forEach items="${pageDTO.data}" var="newProMap">
		
				<%-- <c:set var="toRecord" value="${newProMap.toRecord}"></c:set> --%>
				<%-- <c:set var="nextAvailable" value="${newProMap.nextAvailable}"></c:set> --%>
				<c:set var="vendorName" value="${newProMap.vendorName}"></c:set>
				<c:set var="vendorNameL" value="${fn:replace(vendorName,' ','-')}"/>
				<c:set var="vendorNameSmall" value="${fn:toLowerCase(vendorNameL)}"></c:set>
				<c:set var="colorName" value="${newProMap.colorName}"></c:set>
				<c:set var="colorSmall" value="${fn:toLowerCase(colorName)}"></c:set>
				<c:set var="productName" value="${newProMap.productName}"></c:set>
				<c:set var="productNameSmall" value="${fn:toLowerCase(productName)}"></c:set>
				<c:set var="isNew" value="${newProMap.isNewArrival}"></c:set>
				<c:set var="isSale" value="${newProMap.isSale}"></c:set>
				<c:set var="isPreOrder" value="${newProMap.isPreorder}"></c:set>
				<c:set var="shoeCount" value="${shoeCount+1}"/>
				<c:set var="available" value="${newProMap.available}"></c:set>
				<c:set var="socialCategoryName" value="${newProMap.socialCategory}"></c:set>
	        	<c:if test="${available eq true}">
					<c:set var="isAvailable" value="yes"></c:set>
				</c:if>
				
				<c:set var="w_space" value="shoe_holder"></c:set>
          		<c:if test="${(shoeCount%3)!=1 && (shoeCount%3)!=0}">
					<c:set var="w_space" value="shoe_holder white_space"></c:set>
          	 	</c:if>
          	 	<div class="${w_space}"> 
				<a  href="/${fn:replace(vendorNameSmall,' ','-')}-${fn:replace(productNameSmall,' ','-')}-${fn:replace(colorSmall,' ','-')}/index.html" style="text-decoration: none;" >
					<code class="shoes_img" ><img src="<%=imageURL%>${fn:toLowerCase(vendorNameL)}-shoes/${fn:replace(vendorName," ","-")}-shoes-${fn:replace(productName," ","-")}-(${fn:replace(colorName," ","-")})-010407.jpg" width="240" height="180"></img></code>
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
		                         <c:when test="${isAvailable eq 'yes'&& newProMap.salePrice > 0.00}">
		                          <fmt:formatNumber value="${newProMap.retailPrice}" var="price" type="currency" currencySymbol="$" />
		                          <span class=pre_order >Sale</span>
		            			   <span class="shoe_price" ><del><c:out value="${price}"/></del><c:out value="$${newProMap.salePrice}"/></span> 
		                 		   <span class="sold_out" style="display:none">Out of Stock</span>																						
		                		 </c:when> 
		                	  <c:when test="${isAvailable eq 'yes' && isPreOrder eq true}">
						  	  		<span class=pre_order >Pre-Order</span>
						         	<span class="shoe_price" >$${newProMap.retailPrice}</span>      																						
						  	  </c:when>
						  	  <c:when test="${isNew eq true && isAvailable eq 'yes'}">
		                        	<span class="pre_order" >New</span>
		                        	<span class="shoe_price" >$${newProMap.retailPrice}</span>
		                      </c:when>
						  	  <c:when test="${isAvailable eq 'no'}">
						  	  		<span class=pre_order >Out of Stock</span>
						         	<span class="shoe_price" >$${newProMap.retailPrice}</span>      																						
						  	  </c:when>
						  	  <c:otherwise>
		                		 <span class="shoe_price" >$${newProMap.retailPrice}</span>
		                		 </c:otherwise>
						  	  </c:choose>
							</div><!-- shoe_discription_col2  -->
							<div class="clear_both"></div>
						</div> --%>
				</a>
				<c:choose>
          	 			
          	 			 <c:when test="${available eq false}"><span class="circle_order">OUT OF STOCK</span></c:when>
          	 			<c:when test="${isSale eq true}"><span class="circle_new">SALE</span></c:when>
          	 			<c:when test="${isPreOrder eq true}"><span class="circle_order">PRE- ORDER</span></c:when>
          	 			<c:when test="${isNew eq true}"><span class="circle_new">NEW</span></c:when>
          	 			<c:when test="${fn:trim(socialCategoryName) ne '' && fn:trim(socialCategoryName) ne 'null'}"><span class="circle_new">${fn:toUpperCase(socialCategoryName)}</span></c:when>
          	 			         	 			
          	 			</c:choose>
          	 			
				</div>
				<c:if test="${(shoeCount%3)==0}">
               <div class="clear_both"></div>
               </c:if>
				<c:set var="isNew" value="no"></c:set>
				<c:set var="isAvailable" value="no"></c:set>
		</c:forEach>
		    <input type="hidden" id="shoeCount" value="${shoeCount}" >
		</div><!-- new_shoes_holder -->
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
	<c:choose>
	
	      <c:when test="${param.socialcategory eq 'women'}">
		      <c:set var="venSpecificURL" value="/${Newvendor}-${param.socialcategory}s-shoes/"></c:set>
	      </c:when>
	      <c:when test="${param.socialcategory eq 'men'}">
		      <c:set var="venSpecificURL" value="/${param.socialcategory}s-${Newvendor}/"></c:set>
	      </c:when>
		   
	</c:choose>
	
	    <ul> 
			<li class="second">
			<a id="previous" <c:choose><c:when test="${pageDTO.selectedPage>1}">class="previous_page "</c:when><c:otherwise>class="empty_previous"</c:otherwise></c:choose> <c:if test="${pageDTO.selectedPage>1}">href="${venSpecificURL}page-${pageDTO.selectedPage-1}/"</c:if> ></a>
			<c:if test="${pageDTO.selectedPage>5}">
			<a class="more_page" id="sns" onclick="showPrevMorePages()" >...</a>
			</c:if>
			<c:forEach var="i" begin="${lbegin}" end="${lend}" step="1" varStatus ="status">
				
				<c:choose>
				      <c:when test="${i eq pageDTO.selectedPage}">
						    <a class="page_number_selected" href="${venSpecificURL}page-${i}/" id="pagecount_<c:out value="${i}" />" ><c:out value="${i}" /></a>
				      </c:when>
		 		     <c:otherwise >
			 		     <a class="page_number"  id="pagecount_<c:out value="${i}" />" href="${venSpecificURL}page-${i}/" ><c:out value="${i}" /></a>
				      </c:otherwise>
				</c:choose>
			</c:forEach>

			<c:if test="${pageDTO.selectedPage < pageDTO.availablePages}">
				<c:if test="${pageDTO.availablePages gt 10}" >
					<a class="more_page" onclick="showNextMorePages()"  title="More" >...</a>
				</c:if>
			 <a class="next_page " id="next"  href="${venSpecificURL}page-${pageDTO.selectedPage+1}/" ></a>
			 </c:if>

			</li>                 	
	        <li class="third">
	        	<div class="custom_dropdown" id="pagination_holder">
	               <input type="text" readonly="readonly" value="${pageDTO.itemsPerPage}"  titlevalue="${pageDTO.itemsPerPage}" id="itemsperpage"  class="size_color_select_fields select_popup" name="Size">
	               <span class="custom_drop_nav"></span> 
	               <ul>
	                 <li title="24" onclick="changeItemsPerPage('${venSpecificURL}',24)">24</li>
	                 <li title="48" onclick="changeItemsPerPage('${venSpecificURL}',48)" >48</li>
	                 <li title="96" onclick="changeItemsPerPage('${venSpecificURL}',96)">96</li>
	                </ul>
	             </div>
	            Per Page
	        </li>
	       
	    </ul>
	    <div class="clear_both"></div>
	</div><!-- brand_view_pageination -->
	</c:if>
 </div><!-- pageloadProducts -->
</div><!-- content_holder -->                            
                            <div class="clear_both"></div>
                             <tiles:insertAttribute name="footer"/>
           						
                                <div class="clear_both"></div>	
                                
                                
    </div><!-- wrapper -->
    <tiles:insertAttribute name="PopUp"/> 
	<div id="backgroundPopup"></div>
	<input type="hidden" name="toRecord" id="toRecord" value="${toRecord}"></input>
	<input type="hidden" name="nextAvail" id="nextAvail" value="${nextAvailable}"></input>
	<input type="hidden" name="newVendorName" id="newVendorName" value="${Newvendor}"></input>
	<input type="hidden" name="socialcategory" id="socialcategory" value="${param.socialcategory}"></input>
	<input type="hidden" name="filterby" id="filterby" value="${filterby}"></input>
	<input type="hidden" name="selstyleid" id="selstyleid" value="${selstyleid}"></input>
	


 

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

