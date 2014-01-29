<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd"><%@ page language="java" contentType="text/html; charset=ISO-8859-1" pageEncoding="ISO-8859-1" isELIgnored="false"%><%@page import="com.veroniqa.frontend.util.VeroniqaConstants" %><%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %><%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %><%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %><%@ taglib prefix="sr" uri="http://solestruck.com/resources" %><%String imageURL=VeroniqaConstants.IMAGE_URL;%><link rel="shortcut icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" /><link rel="icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" /><input type="hidden" id="nextAvailForMore_${pagenoForMore}" value="${nextAvailForMore}"><c:set var="shoeCount" value="0"/><c:set var="discountprogram" value="${sr:getDiscountProgramForFB()}"></c:set><c:set var="webDiscountOn" value="${discountprogram.webDiscountOn}"></c:set><c:set var="discountTypeName" value="${discountprogram.programTypeName}"></c:set><c:forEach items="${pageDTO.data}" var="newProMap" varStatus="proStatus"><c:set var="vendorName" value="${newProMap.vendorName}"></c:set><c:set var="vendorNameL" value="${fn:replace(vendorName,' ','-')}"/><c:set var="vendorNameSmall" value="${fn:toLowerCase(vendorNameL)}"></c:set><c:set var="colorName" value="${newProMap.colorName}"></c:set><c:set var="colorSmall" value="${fn:toLowerCase(colorName)}"></c:set><c:set var="productName" value="${newProMap.productName}"></c:set><c:set var="productNameSmall" value="${fn:toLowerCase(productName)}"></c:set><c:set var="shoeCount" value="${shoeCount+1}"/><%-- <c:out value="${shoeCount}"/> --%><c:set var="w_space" value="shoe_holder"></c:set><c:if test="${(shoeCount%3)!=1 && (shoeCount%3)!=0}"><c:set var="w_space" value="shoe_holder white_space"></c:set></c:if><div class="${w_space}"><a style="text-decoration: none;"  href="/${fn:replace(vendorNameSmall,' ','-')}-${fn:replace(productNameSmall,' ','-')}-${fn:replace(colorSmall,' ','-')}/index.html"><c:if test="${isNew eq 'yes'}"><span class="new_lable"></span></c:if><c:if test="${isNew eq 'no'}"><span></span></c:if><span class="shoes_img" ><img src="<%=imageURL%>${fn:toLowerCase(vendorNameL)}-shoes/${fn:replace(vendorName," ","-")}-shoes-${fn:replace(productName," ","-")}-(${fn:replace(colorName," ","-")})-010407.jpg" width="240" height="180"  ></img></span><div class="shoe_discription_holder"><h2>${newProMap.productName}</h2><h4>${newProMap.vendorName}</h4><c:choose><c:when test="${cookie['Facebook'] ne null && cookie['Facebook'].value == 'Facebook' && webDiscountOn ne null && webDiscountOn eq true && discountTypeName ne 'Brands'}"><c:choose><c:when test="${newProMap.salePrice!=null && newProMap.salePrice>0.0 && isAvailable eq 'yes'}"><fmt:formatNumber value="${sr:getRoundedValue(newProMap.salePrice-(newProMap.salePrice*discountprogram.discountPercentage)/100)}" var="SpSaleprice" type="currency" currencySymbol="$" /><h3><strike>$${newProMap.retailPrice}</strike><strike>$${newProMap.salePrice}</strike><b class="incart">${SpSaleprice}</b></h3></c:when><c:otherwise><h3><c:choose><c:when test="${newProMap.salePrice!=null && newProMap.salePrice>0.0 && isAvailable eq 'yes'}"><strike>$${newProMap.retailPrice}</strike><b>$${newProMap.salePrice}</b></c:when><c:otherwise><b>$${newProMap.retailPrice}</b></c:otherwise></c:choose></h3></c:otherwise></c:choose></c:when><c:otherwise><h3><c:choose><c:when test="${newProMap.salePrice!=null && newProMap.salePrice>0.0 && isAvailable eq 'yes'}"><strike>$${newProMap.retailPrice}</strike><b>$${newProMap.salePrice}</b></c:when><c:otherwise><b>$${newProMap.retailPrice}</b></c:otherwise></c:choose></h3></c:otherwise></c:choose><div class="clear_both"></div></div><%-- <div class="shoe_discription_holder"><div class="shoe_discription_col1 fl"><span class="shoe_brand" >${newProMap.vendorName}</span><span class="shoe_name" >${newProMap.productName}</span></div><div class="shoe_discription_col2 fl"><c:if test="${isSale eq 'yes' && newProMap.available eq true}"><span class="shoe_price" ><del>$${newProMap.retailPrice}</del></span><span class="shoe_price" ><label style="color:red;">Sale</label>$${salePrice}</span><span class="shoe_price" >(${finalDiscount}%OFF)</span></c:if><c:if test="${newProMap.available eq true}"><span class="shoe_price" >$${newProMap.retailPrice}</span></c:if><c:if test="${newProMap.available eq false}"><span class="pre_order" >Out of Stock</span><span class="shoe_price">$${newProMap.retailPrice}</span></c:if><c:set var="retailPrice" value=""></c:set><c:set var="salePrice" value=""></c:set><c:set var="discountPercent" value=""></c:set><c:set var="isNew" value="no"></c:set><c:set var="isSale" value="no"></c:set><c:set var="isNormal" value="yes"></c:set></div><div class="clear_both"></div></div> --%></a><c:choose><c:when test="${isPreOrder eq true}"><span class="circle_order">PRE ORDER</span></c:when><c:when test="${isNew eq true}"><span class="circle_new">NEW</span></c:when></c:choose></div><c:if test="${(shoeCount%3)==0}"><div class="clear_both"></div></c:if></c:forEach><script type="text/javascript">var _gaq = _gaq || [];var pluginUrl ='//www.google-analytics.com/plugins/ga/inpage_linkid.js';_gaq.push(['_require', 'inpage_linkid', pluginUrl]);_gaq.push(['_setAccount', '<%=VeroniqaConstants.getAnalyticsID()%>']);_gaq.push(['_trackPageview']);(function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();</script>