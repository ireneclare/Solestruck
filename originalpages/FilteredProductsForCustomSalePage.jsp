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



<% String imageURL=VeroniqaConstants.IMAGE_URL; %>


	<div class="new_shoes_holder sort_page_margin eventlanding">
	<div class="sorry_no_items">
            	<h2>Sorry, No Items Were Found.</h2>
                <span>Need help finding what your looking for? Call us at 1.800.494.1260 (M-F 7a - 5p PST) or <a class="emailuspopup_act">E-Mail Us</a></span>    
    </div><!-- sorry_no_items -->
            <div class="clear_both"></div> 
	<div id="filteredDynamicItems" >
	<input type="hidden" id="nextAvil" value="${pageDTO.nextAvailable}" >
	<input type="hidden" id="filterPageNumber" value="${retrivedfilterpages}">
		<c:set var="shoeCount" value="0"/>
		<c:set var="discountprogram" value="${sr:getDiscountProgramForFB()}"></c:set>
			<c:set var="webDiscountOn" value="${discountprogram.webDiscountOn}"></c:set>
			<c:set var="discountTypeName" value="${discountprogram.programTypeName}"></c:set>
			<c:set var="brandList" value="${sr:getBrandListForSale()}"></c:set>
			<c:forEach var="brandNames" items="${brandList}">
				<c:set var="saleBrandNames" value="${brandNames}"></c:set>
				<input type="hidden" value="${brandList}"></input>
			</c:forEach>
			<c:set var="socialCategory" value="${socialCatogery}"/>
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
	                        	<c:when test="${cookie['Facebook'] ne null && cookie['Facebook'].value == 'Facebook' && webDiscountOn ne null && webDiscountOn eq true &&  discountTypeName eq 'Brand'}">
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
				</a>
					<c:choose>
	         	 			<c:when test="${isAvailable ne 'yes'}"><span class="circle_order">OUT OF STOCK</span></c:when>
	         	 			<c:when test="${isSale eq true}"><span class="circle_new">SALE</span></c:when>
	         	 			<c:when test="${isNew eq true}"><span class="circle_new">NEW</span></c:when>
	         	 			<c:when test="${isPreOrder eq true}"><span class="circle_order">PRE-ORDER</span></c:when>
	         	 			<c:when test="${fn:trim(socialCategoryName)!='' && fn:trim(socialCategoryName)!='null'}"><span class="circle_new">${fn:toUpperCase(socialCategoryName)}</span></c:when>
          	 		</c:choose>
          	 			
				</div>
				<c:if test="${(shoeCount%3)==0}">
               <div class="clear_both"></div>
               </c:if>
				<c:set var="isNew" value="no"></c:set>
				<c:set var="isAvailable" value="no"></c:set>
		</c:forEach>
		  <div class="clear_both"></div>
		  <input type="hidden" id="shoeCount" value="${shoeCount}" />
	  </div>      
	
	<div class="clear_both"></div>            
    <div class="loading_list" style="display:none;"><code></code></div>
    <input type="submit" value="Load More" class="load_review brwn_btn load_act" id="loadMoreFilteredResults" onclick="getLoadMoreFilteredProducts()" />
</div><!-- new_shoes_holder -->
