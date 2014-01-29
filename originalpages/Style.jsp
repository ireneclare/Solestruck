<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@page
import="com.veroniqa.frontend.util.VeroniqaConstants" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="frm" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="sr" uri="http://solestruck.com/resources" %>
<%@ taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<head>

<meta name="googlebot" content="index"/>
<meta name="robots" content="index,follow"/>
<meta name="robots" content="noodp"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title></title>

<link rel="shortcut icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" />
<link rel="icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" />
<link rel="canonical" href="/vintage-shoes/" />
<c:choose>
<c:when test="${pageno eq '1' }">
<link rel="next" href="/vintage-shoes/page-${pageDTO.selectedPage+1}/"/>
</c:when>
<c:when test="${pageno eq pageDTO.availablePages }">
<link rel="prev" href="/vintage-shoes/page-${pageDTO.selectedPage-1}/"/>
</c:when>
<c:otherwise>
<link rel="prev" href="/vintage-shoes/page-${pageDTO.selectedPage-1}/"/>
<link rel="next" href="/vintage-shoes/page-${pageDTO.selectedPage+1}/"/>
</c:otherwise>
</c:choose>

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


<c:set var="discountprogram" value="${sr:getDiscountProgramForFB()}"></c:set>
<c:set var="webDiscountOn" value="${discountprogram.webDiscountOn}"></c:set>
<c:set var="discountTypeName" value="${discountprogram.programTypeName}"></c:set>

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
                <span>Need help finding what your looking for? Call us at 1.800.494.1260 (M-F 7a - 5p PST) or <a class="emailuspopup_act">E-Mail Us</a></span>    
            </div><!-- sorry_no_items -->
<div class="clear_both"></div>
<c:if test="${currentPage eq 'VintagePageBySize'}">
	<input type="hidden" id="curPage" value="${currentPage}" />
	<input type="hidden" id="vintageSize" value="${vintageSize}" />
	<input type="hidden" id="socialCat" value="${socialCatogery}" />
</c:if>
<c:if test="${currentPage eq 'VintagePage'}">
	<input type="hidden" id="curPage" value="${currentPage}" />
</c:if>
         <div class="content_holder ntp">
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
			<h1 class="nb fl all_heading">${vendorName}</h1>
			<div class="clear_both"></div>
			</div>
      		</c:otherwise>
      
	</c:choose> 
        <!--*******Progressive Enhancement**********-->
	    	<noscript>
		<div class="clear_both"></div>
		<div id="womens_styles" class="pro_en fl">
			<h3>Womens Styles</h3>
						<ul class="fl">
							<c:forEach items="${styles}" var="style" varStatus="status">
							<c:if test="${status.count eq 6 || status.count eq 11 || status.count eq 16 || status.count eq 21 || status.count eq 26 || status.count eq 31 || status.count eq 35}">
						</ul>
	                            <ul class="fl">
                            </c:if>
									    
									     <c:set var="stylename" value="${style.name}"></c:set>
									     <c:set var="styleNameBig" value="${fn:toUpperCase(stylename)}"></c:set>
									     <c:set var="styleNameSmall" value="${fn:toLowerCase(stylename)}"></c:set>
									     <li><a style="color: black;" href="/${fn:replace(styleNameSmall,' ','-')}/">${styleNameBig}</a></li>
									     
                                    	
                            </c:forEach>
                                    
		
		</div>

		<div id="vintage_womens_styles" class="pro_en fl">
		<h3>Vintage Womens Styles</h3>
						<ul class="fl">
							<c:forEach items="${styles}" var="style" varStatus="status">
							<c:if test="${status.count eq 6 || status.count eq 11 || status.count eq 16 || status.count eq 21 || status.count eq 26 || status.count eq 31 || status.count eq 36}">
						</ul>
	                            <ul class="fl">
                            </c:if>
									    
									     <c:set var="stylename" value="${style.name}"></c:set>
									     <c:set var="styleNameBig" value="${fn:toUpperCase(stylename)}"></c:set>
									     <c:set var="styleNameSmall" value="${fn:toLowerCase(stylename)}"></c:set>
									     <li><a style="color: black;" href="/vintage-womens-${fn:replace(styleNameSmall,' ','-')}/">${styleNameBig}</a></li>
                                    	
                            </c:forEach>
                                    
		
		</div>
		<div id="womens_colors" class="pro_en fl" >
		<h3>Womens Colors</h3>
		<ul class="fl">
									<c:forEach items="${colors}" var="color" varStatus="status">
									    <c:if test="${status.count eq 6 || status.count eq 11 || status.count eq 16 || status.count eq 21 || status.count eq 26 || status.count eq 31 || status.count eq 36}">
								</ul>
	                                	<ul class="fl">
                                		</c:if>
									    
									     <c:set var="colorname" value="${color.name}"></c:set>
								
									     <c:set var="colorNameBig" value="${fn:toUpperCase(colorname)}"></c:set>
									     <c:set var="colorNameSmall" value="${fn:toLowerCase(colorname)}"></c:set>
									     <li><a style="color: black;" href="/${fn:replace(colorNameSmall,' ','-')}-shoes/">${colorNameBig}</a></li>
                                    </c:forEach>
                                    
		
		</div>
		<div id="mens_styles" class="pro_en fl">
			<h3>Mens Styles</h3>
						<ul class="fl">
							<c:forEach items="${styles}" var="style" varStatus="status">
							<c:if test="${status.count eq 6 || status.count eq 11 || status.count eq 16 || status.count eq 21 || status.count eq 26 || status.count eq 31 || status.count eq 36}">
						</ul>
	                            <ul class="fl">
                            </c:if>
									    
									     <c:set var="stylename" value="${style.name}"></c:set>
									     <c:set var="styleNameBig" value="${fn:toUpperCase(stylename)}"></c:set>
									     <c:set var="styleNameSmall" value="${fn:toLowerCase(stylename)}"></c:set>
									     <li><a style="color: black;" href="/mens-${fn:replace(styleNameSmall,' ','-')}/">${styleNameBig}</a></li>
									     
                                    	
                            </c:forEach>
                                    
		
		</div>

		<div id="vintage_mens_styles" class="pro_en fl">
		<h3>Vintage Mens Styles</h3>
						<ul class="fl">
							<c:forEach items="${styles}" var="style" varStatus="status">
							<c:if test="${status.count eq 6 || status.count eq 11 || status.count eq 16 || status.count eq 21 || status.count eq 26 || status.count eq 31 || status.count eq 36}">
						</ul>
	                            <ul class="fl">
                            </c:if>
									    
									     <c:set var="stylename" value="${style.name}"></c:set>
									     <c:set var="styleNameBig" value="${fn:toUpperCase(stylename)}"></c:set>
									     <c:set var="styleNameSmall" value="${fn:toLowerCase(stylename)}"></c:set>
									     <li><a style="color: black;" href="/vintage-mens-${fn:replace(styleNameSmall,' ','-')}/">${styleNameBig}</a></li>
                                    	
                            </c:forEach>
                                    
		
		</div>
		<div id="mens_colors" class="pro_en fl" >
		<h3>Mens Colors</h3>
		<ul class="fl">
									<c:forEach items="${colors}" var="color" varStatus="status">
									    <c:if test="${status.count eq 6 || status.count eq 11 || status.count eq 16 || status.count eq 21 || status.count eq 25 || status.count eq 30 || status.count eq 35}">
								</ul>
	                                	<ul class="fl">
                                		</c:if>
									    
									     <c:set var="colorname" value="${color.name}"></c:set>
								
									     <c:set var="colorNameBig" value="${fn:toUpperCase(colorname)}"></c:set>
									     <c:set var="colorNameSmall" value="${fn:toLowerCase(colorname)}"></c:set>
									     <li><a style="color: black;" href="/mens-${fn:replace(colorNameSmall,' ','-')}-shoes/">${colorNameBig}</a></li>
                                    </c:forEach>
                                    
		
		</div>
		</noscript>
		<!--***********End of Progressive Enhancement***************-->
  <div class="clear_both"></div>
  
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
<c:forEach items="${pageDTO.data}" var="newProMap" varStatus="proStatus">
		
			         		<c:set var="vendorName" value="${newProMap.vendorName}"></c:set>
			         		<c:set var="vendorNameL" value="${fn:replace(vendorName,' ','-')}"/>
							<c:set var="vendorNameSmall" value="${fn:toLowerCase(vendorNameL)}"></c:set>
			         		<c:set var="colorName" value="${newProMap.colorName}"></c:set>
			         		<c:set var="colorSmall" value="${fn:toLowerCase(colorName)}"></c:set>
			         		<c:set var="productName" value="${newProMap.productName}"></c:set>
			         		<c:set var="productNameSmall" value="${fn:toLowerCase(productName)}"></c:set>
			         		<c:set var="shoeCount" value="${shoeCount+1}"/>
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
			         		<a style="text-decoration: none;" href="/${fn:replace(vendorNameSmall,' ','-')}-${fn:replace(productNameSmall,' ','-')}-${fn:replace(colorSmall,' ','-')}/index.html"> 
			         			
					           	<c:if test="${isNew eq 'yes'}">
			              		<span class="new_lable"></span>
			 		            </c:if>
				               <c:if test="${isNew eq 'no'}">
				               	<span></span>
				               </c:if>
			           		   <span class="shoes_img" ><img src="<%=imageURL%>${fn:toLowerCase(vendorNameL)}-shoes/${fn:replace(vendorName," ","-")}-shoes-${fn:replace(productName," ","-")}-(${fn:replace(colorName," ","-")})-010407.jpg" width="240" height="180"  ></img></span>
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
	                        	<c:otherwise>
	                        	<h3><c:choose><c:when test="${newProMap.salePrice!=null && newProMap.salePrice>0.0 && isAvailable eq 'yes'}"><strike>$${newProMap.retailPrice}</strike><b>$${newProMap.salePrice}</b></c:when><c:otherwise><b>$${newProMap.retailPrice}</b></c:otherwise></c:choose></h3>
	                        	</c:otherwise>
	                        	</c:choose>
	                        <div class="clear_both"></div>
	                </div>
	                <!-- shoe_discription_holder  -->     
			           		    <!-- 	**Older Shoe Description Holder****Commmented out for black friday sale -->  
					          		<%-- <div class="shoe_discription_holder"> 
					          			<div class="shoe_discription_col1 fl">		          
						                     <span class="shoe_brand" >${newProMap.vendorName}</span>
						                     <span class="shoe_name" >${newProMap.productName}</span>
						               	</div><!-- shoe_discription_col1  -->
						               	<div class="shoe_discription_col2 fl">
						                     <c:if test="${isSale eq 'yes' && newProMap.available eq true}">
					                      	<span class="shoe_price" ><del>$${newProMap.retailPrice}</del></span>
					                      	<span class="shoe_price" ><label style="color:red;">Sale</label>$${salePrice}</span>
					                      	<span class="shoe_price" >(${finalDiscount}%OFF)</span>
							   				  </c:if>
							   				   <c:if test="${newProMap.available eq true}">
							                     	<span class="shoe_price" >$${newProMap.retailPrice}</span>
							   				  </c:if>
							   				  <c:if test="${newProMap.available eq false}">
							                     	<span class="pre_order" >Out of Stock</span>
							                     	<span class="shoe_price">$${newProMap.retailPrice}</span>
							   				  </c:if>
							             	  <c:set var="retailPrice" value=""></c:set>
							             	  <c:set var="salePrice" value=""></c:set>
							             	  <c:set var="discountPercent" value=""></c:set> 
							             	  <c:set var="isNew" value="no"></c:set>
							             	  <c:set var="isSale" value="no"></c:set>
							             	  <c:set var="isNormal" value="yes"></c:set>
							          	</div><!-- shoe_discription_col2  -->
					             	 	<div class="clear_both"></div>
					             	</div> --%>
							</a>
							<c:if test="${available eq false}"><span class="circle_order">OUT OF STOCK</span></c:if>
							</div>
						<c:if test="${(shoeCount%3)==0}">
               <div class="clear_both"></div>
               </c:if>
       </c:forEach>
       <input type="hidden" id="shoeCount" value="${shoeCount}" >
<div class="clear_both"></div>    
</div>

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
	
	
	<!-- <c:if test="${checkAvaliable le 10}">
		<c:set var="lend" value="${checkAvaliable}"/>
	</c:if>-->
	
	<div class="brand_view_pageination" >
	
	<input type="hidden" id="currentPage" value="${pageDTO.selectedPage}"/>
	<input type="hidden" id="totavailpages" value="${pageDTO.availablePages}"/>
	<input type="hidden" name="servername" id="servername" value=""></input>
	<input type="hidden" id="newsize" value="${fn:replace(vintageSize,'.0','')}"/>
	<input type="hidden" name="sc" id="sc" value="${socialCatogery}"></input>
	<c:set var="newSize" value="${fn:replace(vintageSize,'.0','')}"></c:set>
	<c:set var="socialCatogery" value="${socialCatogery}"></c:set>
	
	<c:choose>
	
	      <c:when test="${socialCatogery eq null ||socialCatogery eq 'null' }">
 		     <c:set var="vintagesizeurl" value="/vintage-shoes"></c:set>
	      </c:when>
	      <c:when test="${newSize ne null && newSize ne '' && socialCatogery ne null && socialCatogery ne ''}">
		     <c:set var="vintagesizeurl" value="/vintage-${socialCatogery}s-shoes/size-${newSize}"></c:set>
	      </c:when>
	      <c:when test="${socialCatogery ne null  && socialCatogery ne 'null' && socialCatogery ne ''}">
	      <c:set var="vintagesizeurl" value="/vintage-${socialCatogery}s-shoes"></c:set>
	      </c:when>
	      
	</c:choose>
	    <ul> 
			<li class="second">
			
		 				<c:choose>
						  <c:when test="${param.attId eq null || param.attId eq ''}">
						    <a id="previous" <c:choose><c:when test="${pageDTO.selectedPage>1}">class="previous_page  "</c:when><c:otherwise>class="empty_previous"</c:otherwise></c:choose>  <c:if test="${pageDTO.selectedPage>1}">href="${vintagesizeurl}/page-${pageDTO.selectedPage-1}/"</c:if> ></a>
						  </c:when>
						  <c:otherwise>
						    <a id="previous" <c:choose><c:when test="${pageDTO.selectedPage>1}">class="previous_page  "</c:when><c:otherwise>class="empty_previous"</c:otherwise></c:choose>  <c:if test="${pageDTO.selectedPage>1}">href="${vintagesizeurl}/page-${pageDTO.selectedPage-1}/"</c:if> ></a>
						  </c:otherwise>
						</c:choose>
						<c:if test="${pageDTO.selectedPage>5 && lbegin!=1 }">
						<c:choose>
						  <c:when test="${param.attId eq null || param.attId eq ''}">
							    <a class="more_page" onclick="showPrevMorePages()"  >...</a>
						  </c:when>
						  <c:otherwise>
						    <a class="more_page" onclick="showPrevMorePages()"  >...</a>
						  </c:otherwise>
						</c:choose>
			
			</c:if>
			<c:forEach var="i" begin="${lbegin}" end="${lend}" step="1" varStatus ="status">
				
				<c:choose>
				      <c:when test="${i eq pageDTO.selectedPage}">
						    <a class="page_number_selected" href="${vintagesizeurl}/page-${i}/" id="pagecount_<c:out value="${i}" />" ><c:out value="${i}" /></a>
				      </c:when>
		 		     <c:otherwise >
			 		     <c:choose>
						  <c:when test="${param.attId eq null || param.attId eq ''}">
						    <a class="page_number" href="${vintagesizeurl}/page-${i}/" id="pagecount_<c:out value="${i}" />"  ><c:out value="${i}" /></a>
						  </c:when>
						  <c:otherwise>
						    <a class="page_number" href="${vintagesizeurl}/page-${i}/" id="pagecount_<c:out value="${i}" />" ><c:out value="${i}" /></a>
						  </c:otherwise>
						</c:choose>
				      </c:otherwise>
				</c:choose>
			</c:forEach>

			<c:if test="${pageDTO.selectedPage < pageDTO.availablePages}">
		 				<c:choose>
						  <c:when test="${param.attId eq null || param.attId eq ''}">
						    <c:if test="${pageDTO.availablePages gt 10}" >
						    
									<a class="more_page" onclick="showNextMorePages()"  title="Load more pages" >...</a>
							</c:if>
							 <a class="next_page " id="next"   href="${vintagesizeurl}/page-${pageDTO.selectedPage+1}/"  ></a>
						  </c:when>
						  <c:otherwise>
						  	<c:if test="${pageDTO.availablePages gt 10}" >
						    	<a class="more_page" onclick="showNextMorePages()" title="More" >...</a>
						    </c:if>
							 <a class="next_page " id="next"   href="${vintagesizeurl}/page-${pageDTO.selectedPage+1}/" title="More" ></a>
						  </c:otherwise>
						</c:choose>
			 </c:if>

			</li>                 	
	        <li class="third">
	        	<div class="custom_dropdown" id="pagination_holder">
	               <input type="text" readonly="readonly" value="${pageDTO.itemsPerPage}"  titlevalue="${pageDTO.itemsPerPage}" id="itemsperpage"  class="size_color_select_fields select_popup" name="Size">
	               <span class="custom_drop_nav"></span> 
	               <ul>
	                 <c:choose>
						  <c:when test="${param.attId eq null || param.attId eq ''}">
							 <li title="24" onclick="changeItemsPerPage('${vintagesizeurl}/',24)">24</li>
	                 		 <li title="48" onclick="changeItemsPerPage('${vintagesizeurl}/',48)" >48</li>
	                 		 <li title="96" onclick="changeItemsPerPage('${vintagesizeurl}/',96)">96</li>
						  </c:when>
						  <c:otherwise>
							 <li title="24" onclick="changeItemsPerPage('${vintagesizeurl}/',24)">24</li>
	                 		 <li title="48" onclick="changeItemsPerPage('${vintagesizeurl}/',48)" >48</li>
	                 		 <li title="96" onclick="changeItemsPerPage('${vintagesizeurl}/',96)">96</li>
						  </c:otherwise>
						</c:choose>
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
	<input type="hidden" name="sAttId" id="sAttId" value="${param.attId}"></input>
	<input type="hidden" name="style" id="style" value="${param.style}"></input>
	<input type="hidden" id="filterby" value="${filterby}" >
    <input type="hidden" id="attId" value="${attributeId}">
    <input type="hidden" id="attval" value="${attVal}">
    <input type="hidden" id="sc" value="${socialCatogery}">
 

 

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
