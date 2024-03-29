<%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" isELIgnored="false"%>
<%@page import="com.veroniqa.frontend.util.VeroniqaConstants" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="sr" uri="http://solestruck.com/resources" %>
<%
	String imageURL=VeroniqaConstants.IMAGE_URL; 
	
%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">

<!-- This jsp is created for FilteredLoadMoreProducts to display in SortPage By YES -->
	<input type="hidden" id="nextAvailForMore_${pagenoForMore}" value="${nextAvailForMore}">
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
				<c:set var="isPreOrder" value="${newProMap.isPreorder}"></c:set>
				<c:set var="shoeCount" value="${shoeCount+1}"/>
				<c:set var="isSale" value="${newProMap.isSale}"></c:set>
				<c:set var="available" value="${newProMap.available}"></c:set>
				<c:set var="socialCategoryName" value="${newProMap.socialCategory}"></c:set>
	        	<c:if test="${available eq true}">
					<c:set var="isAvailable" value="yes"></c:set>
				</c:if>
				
				<c:set var="w_space" value="shoe_holder"></c:set>
          		<c:if test="${(shoeCount%3)!=1 && (shoeCount%3)!=0}">
					<c:set var="w_space" value="shoe_holder white_space"></c:set>
          	 	</c:if>
          	 	<div class="${w_space}" >
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
          	 				<c:when test="${isAvailable ne 'yes'}"><span class="circle_order">OUT OF STOCK</span></c:when>
	         	 			<c:when test="${isSale eq true}"><span class="circle_new">SALE</span></c:when>
	         	 			<c:when test="${isPreOrder eq true}"><span class="circle_order">PRE-ORDER</span></c:when>
	         	 			<c:when test="${isNew eq true}"><span class="circle_new">NEW</span></c:when>
	         	 			<c:when test="${fn:trim(socialCategoryName)!='' && fn:trim(socialCategoryName)!='null'}"><span class="circle_new">${fn:toUpperCase(socialCategoryName)}</span></c:when>
          	 			</c:choose>
          	 			
				</div>
				<c:if test="${(shoeCount%3)==0}">
               <div class="clear_both"></div>
               </c:if>
				<c:set var="isNew" value="no"></c:set>
				<c:set var="isAvailable" value="no"></c:set>
		</c:forEach>
		

<script type="text/javascript">

var _gaq = _gaq || [];
var pluginUrl = 
 '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
_gaq.push(['_require', 'inpage_linkid', pluginUrl]);
_gaq.push(['_setAccount', '<%=VeroniqaConstants.getAnalyticsID()%>']);
_gaq.push(['_trackPageview']);

(function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();

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