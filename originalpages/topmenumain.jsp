<%@page import="com.veroniqa.frontend.util.VeroniqaConstants" %>
<%@page import="com.veroniqa.frontend.util.EnvironmentUtil" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib prefix="sr" uri="http://solestruck.com/resources" %>
<% String imageURL=VeroniqaConstants.IMAGE_URL;%>
<c:set var="isLoggedin" value="${sessionScope.loggedin}" />
<c:if test="${isLoggedin eq null}"><c:set var="isLoggedin" value="false"/></c:if>
<c:set var="ismyaccpage" value="${isMyAccPage}"/>
 <input type="hidden" id="flag" value="${sessionScope.flag}" />
 <input type="hidden" id="prodid" value="${sessionScope.prodid}" />
 <input type="hidden" id="colorid" value="${sessionScope.colorid}" />
 <input type="hidden" id="size" value="${sessionScope.size}" />
 <input type="hidden" id="isLoggedInNotify" value="${sessionScope.loggedin}" />
<script>
var appId="<%=EnvironmentUtil.getEnvironmentValue("AppId")%>";
</script>
<div class="global_nav">
<input type='hidden' id='gAnalyticsID' value='<%=VeroniqaConstants.getAnalyticsID()%>' />
      <ul>
      	
        <li class="select_nav"><a class="drop_down women"href="/search-womens-shoes/">WOMEN</a>
          <div class="clear_both"></div>
          <div class="level1" id="women">
          <code class="nav_arrow"></code>
                            	<ul>
									<c:forEach items="${womenvendorlst}" var="vendor" varStatus="status">
									    <c:if test="${status.count eq firstColumn || status.count eq secondColumn || status.count eq thirdColumn}">
											</ul>
	                                		<ul>
                                		</c:if>
                                		<c:if test="${status.count eq fourthColumn} ">
                                			</ul>
                                		</c:if>
									    
									     <c:set var="vendorName" value="${vendor.name}"></c:set>
									     <c:set var="vendorNameSmall" value="${fn:toLowerCase(vendorName)}"></c:set>
									     <li><a href="/${fn:replace(vendorNameSmall,' ','-')}-womens-shoes/">${vendorNameSmall}</a></li>
                                    	
                                    </c:forEach>
                         		
                      </div><!-- level1 -->  
        </li>
        <li class="global_nav_seperator"></li>
        <li class="select_nav"><a class="drop_down" href="/mens/">MEN<span></span></a>
          <div class="clear_both"></div>
          <div class="level1" id="men">
          <code class="nav_arrow"></code>
                            	<ul>
                                	<c:forEach items="${menvendorlst}" var="vendor" varStatus="status">
                                		<%-- <c:if test="${status.count eq 20 || status.count eq 40 || status.count eq 60 || status.count eq 80 || status.count eq 100 || status.count eq 120 || status.count eq 140}">
	                                		</ul>
	                                		<ul>
                                		</c:if> --%>
                                		
                                		<c:if test="${status.count eq firstColumnMen || status.count eq secondColumnMen || status.count eq thirdColumnMen}">
											</ul>
	                                		<ul>
                                		</c:if>
                                		<c:if test="${status.count eq fourthColumnMen} ">
                                			</ul>
                                		</c:if>
                                		
                                		 <c:set var="vendor1Name" value="${vendor.name}"></c:set>
                                		 <c:set var="vendorNameSmall1" value="${fn:toLowerCase(vendor1Name)}"></c:set>
                                		<li><a href="/mens-${fn:replace(vendorNameSmall1,' ','-')}/" >${vendorNameSmall1}</a></li>
                                    	 
                                    </c:forEach>
                                    
                               
                     
                            </div><!-- level1 -->
        </li>
        
        
        <li class="global_nav_seperator"></li>
        <li class="select_nav"> <a class="drop_down" href="/new-arrivals/">NEW</a>
         <div class="level1" id="new-arrivals">
         <code class="nav_arrow"></code>
         <div class="fl sale_col1">
         <h2><a href="/new-arrivals-womens-shoes/">Women's Sizes</a></h2>
         <ul>
         	<li><a href="/new-arrivals-womens-shoes/size-5/">5</a></li>
         	<li><a href="/new-arrivals-womens-shoes/size-6/">6</a></li>
         	<li><a href="/new-arrivals-womens-shoes/size-7/">7</a></li>
         	<li><a href="/new-arrivals-womens-shoes/size-8/">8</a></li>
         	<li><a href="/new-arrivals-womens-shoes/size-9/">9</a></li>
         	<li><a href="/new-arrivals-womens-shoes/size-10/">10</a></li>
         	<li><a href="/new-arrivals-womens-shoes/size-11/">11</a></li>
         	<li><a href="/new-arrivals-womens-shoes/size-12/">12</a></li>
         </ul>
         <ul>
         	<li><a href="/new-arrivals-womens-shoes/size-5.5/">5.5</a></li>
         	<li><a href="/new-arrivals-womens-shoes/size-6.5/">6.5</a></li>
         	<li><a href="/new-arrivals-womens-shoes/size-7.5/">7.5</a></li>
         	<li><a href="/new-arrivals-womens-shoes/size-8.5/">8.5</a></li>
         	<li><a href="/new-arrivals-womens-shoes/size-9.5/">9.5</a></li>
         	<li><a href="/new-arrivals-womens-shoes/size-10.5/">10.5</a></li>
         	<li><a href="/new-arrivals-womens-shoes/size-11.5/">11.5</a></li>
         	<li><a href="/new-arrivals-womens-shoes/size-12.5/">12.5</a></li>
         </ul>
       </div><!-- sale_col1 -->
       <div class="fl sale_col2">
       <h2><a href="/new-arrivals-mens-shoes/">Men's Sizes</a></h2>
       <ul>
       		<li><a href="/new-arrivals-mens-shoes/size-8/">8</a></li>
       		<li><a href="/new-arrivals-mens-shoes/size-9/">9</a></li>
       		<li><a href="/new-arrivals-mens-shoes/size-10/">10</a></li>
       		<li><a href="/new-arrivals-mens-shoes/size-11/">11</a></li>
       		<li><a href="/new-arrivals-mens-shoes/size-12/">12</a></li>
       		<li><a href="/new-arrivals-mens-shoes/size-13/">13</a></li>
       		<li><a href="/new-arrivals-mens-shoes/size-14/">14</a></li>
       		<li><a href="/new-arrivals-mens-shoes/size-15/">15</a></li>
       	</ul>
       	<ul>
       		<li><a href="/new-arrivals-mens-shoes/size-8.5/">8.5</a></li>
       		<li><a href="/new-arrivals-mens-shoes/size-9.5/">9.5</a></li>
       		<li><a href="/new-arrivals-mens-shoes/size-10.5/">10.5</a></li>
       		<li><a href="/new-arrivals-mens-shoes/size-11.5/">11.5</a></li>
       		<li><a href="/new-arrivals-mens-shoes/size-12.5/">12.5</a></li>
       		<li><a href="/new-arrivals-mens-shoes/size-13.5/">13.5</a></li>
       		<li><a href="/new-arrivals-mens-shoes/size-14.5/">14.5</a></li>
       		<li><a href="/new-arrivals-mens-shoes/size-15.5/">15.5</a></li>
       	</ul>
       	</div>
       <div class="clear_both"></div></div>
         
         </li>
        <li class="global_nav_seperator "></li>
        <li class="select_nav"><a class="drop_down" href="/vintage-shoes/">VINTAGE</a>
        <div class="level1" id="vintage">
        <code class="nav_arrow"></code>
            <div class="fl sale_col1">
            <h2><a href="/vintage-womens-shoes/">Women's Sizes</a></h2> 
                 <ul>
                   <li><a href='/vintage-womens-shoes/size-5/'>5</a></li>
                   <li><a href='/vintage-womens-shoes/size-6/'>6</a></li>
                   <li><a href='/vintage-womens-shoes/size-7/'>7</a></li>
                   <li><a href='/vintage-womens-shoes/size-8/'>8</a></li>
                   <li><a href='/vintage-womens-shoes/size-9/'>9</a></li>
                   <li><a href='/vintage-womens-shoes/size-10/'>10</a></li>
                   <li><a href='/vintage-womens-shoes/size-11/'>11</a></li>
                   <li><a href='/vintage-womens-shoes/size-12/'>12</a></li>
                 </ul>
                 
                 <ul>
                   <li><a href='/vintage-womens-shoes/size-5.5/'>5.5</a></li>
                   <li><a href='/vintage-womens-shoes/size-6.5/'>6.5</a></li>
                   <li><a href='/vintage-womens-shoes/size-7.5/'>7.5</a></li>
                   <li><a href='/vintage-womens-shoes/size-8.5/'>8.5</a></li>
                   <li><a href='/vintage-womens-shoes/size-9.5/'>9.5</a></li>
                   <li><a href='/vintage-womens-shoes/size-10.5/'>10.5</a></li>
                   <li><a href='/vintage-womens-shoes/size-11.5/'>11.5</a></li>
                   <li><a href='/vintage-womens-shoes/size-12.5/'>12.5</a></li>
                 </ul>
           </div><!-- sale_col1 -->
           
           <div class="fl sale_col2"> 
            <h2><a href="/vintage-mens-shoes/">Men's Sizes</a></h2>
                 <ul>
                   <li><a href='/vintage-mens-shoes/size-8/'>8</a></li>                   
                   <li><a href='/vintage-mens-shoes/size-9/'>9</a></li>                  
                   <li><a href='/vintage-mens-shoes/size-10/'>10</a></li>
                   <li><a href='/vintage-mens-shoes/size-11/'>11</a></li>
                   <li><a href='/vintage-mens-shoes/size-12/'>12</a></li>                  
                   <li><a href='/vintage-mens-shoes/size-13/'>13</a></li>                   
                   <li><a href='/vintage-mens-shoes/size-14/'>14</a></li>
                   <li><a href='/vintage-mens-shoes/size-15/'>15</a></li>
                 </ul>
                 <ul>
	               	<li><a href='/vintage-mens-shoes/size-8.5/'>8.5</a></li>
					<li><a href='/vintage-mens-shoes/size-9.5/'>9.5</a></li>
					<li><a href='/vintage-mens-shoes/size-10.5/'>10.5</a></li>
					<li><a href='/vintage-mens-shoes/size-11.5/'>11.5</a></li>
					<li><a href='/vintage-mens-shoes/size-12.5/'>12.5</a></li>
					<li><a href='/vintage-mens-shoes/size-13.5/'>13.5</a></li>
					<li><a href='/vintage-mens-shoes/size-14.5/'>14.5</a></li>
					<li><a href='/vintage-mens-shoes/size-15.5/'>15.5</a></li>       
                 </ul>
            </div>
           <div class="clear_both"></div>  	
                                                      
		</div><!-- level1 -->
        </li>
        <li class="global_nav_seperator"></li>
        <li class="select_nav"><a class="drop_down" href="/sale-shoes/">SALE</a>
          <div class="clear_both"></div>
          <div class="level1" id="sale">
          <code class="nav_arrow"></code>
                            	<%-- <ul>
                                	<c:forEach items="${sizes}" var="size" varStatus="status">
                                		<c:if test="${status.count eq 9 || status.count eq 17 || status.count eq 25}">
	                            </ul>
	                                		<ul>
                                		</c:if>
                                	
                                		<li><a href='/sale-shoes/size-${size.name}/'>${size.name}</a></li>
                                	
                                	</c:forEach> --%>
                              <%-- <div class="fl sale_col1">
            <h2>Women's Sizes</h2> 
                 <ul>
                                	<c:forEach items="${sizes}" var="size" varStatus="status">
                                		<c:if test="${status.count eq 9 || status.count eq 17 || status.count eq 25}">
	                            </ul>
	                                		<ul>
                                		</c:if>
                                	
                                		<li><a href='/sale-womens-shoes/size-${size.name}/'>${size.name}</a></li>
                                	
                                	</c:forEach>
           </div><!-- sale_col1 -->
           
           <div class="fl sale_col2"> 
            <h2>Men's Sizes</h2>
                 <ul>
                                	<c:forEach items="${sizes}" var="size" varStatus="status">
                                		<c:if test="${status.count eq 9 || status.count eq 17 || status.count eq 25}">
	                            </ul>
	                                		<ul>
                                		</c:if>
                                	
                                		<li><a href='/sale-mens-shoes/size-${size.name}/'>${size.name}</a></li>
                                	
                                	</c:forEach>
            </div> --%><!-- sale_col2 -->
            <div class="fl sale_col1">
            <h2><a href="/sale-womens-shoes/">Women's Sizes</a></h2> 
                     <ul>
                   <li><a href='/sale-womens-shoes/size-5/'>5</a></li>
                   <li><a href='/sale-womens-shoes/size-6/'>6</a></li>
                   <li><a href='/sale-womens-shoes/size-7/'>7</a></li>
                   <li><a href='/sale-womens-shoes/size-8/'>8</a></li>
                   <li><a href='/sale-womens-shoes/size-9/'>9</a></li>
                   <li><a href='/sale-womens-shoes/size-10/'>10</a></li>
                   <li><a href='/sale-womens-shoes/size-11/'>11</a></li>
                   <li><a href='/sale-womens-shoes/size-12/'>12</a></li>
                 </ul>
                 
                 <ul>
                   <li><a href='/sale-womens-shoes/size-5.5/'>5.5</a></li>
                   <li><a href='/sale-womens-shoes/size-6.5/'>6.5</a></li>
                   <li><a href='/sale-womens-shoes/size-7.5/'>7.5</a></li>
                   <li><a href='/sale-womens-shoes/size-8.5/'>8.5</a></li>
                   <li><a href='/sale-womens-shoes/size-9.5/'>9.5</a></li>
                   <li><a href='/sale-womens-shoes/size-10.5/'>10.5</a></li>
                   <li><a href='/sale-womens-shoes/size-11.5/'>11.5</a></li>
                   <li><a href='/sale-womens-shoes/size-12.5/'>12.5</a></li>
                 </ul>
           </div><!-- sale_col1 -->
           
           <div class="fl sale_col2"> 
            <h2><a href="/sale-mens-shoes/">Men's Sizes</a></h2> 
                 <ul>
                   <li><a href='/sale-mens-shoes/size-8/'>8</a></li>                   
                   <li><a href='/sale-mens-shoes/size-9/'>9</a></li>                  
                   <li><a href='/sale-mens-shoes/size-10/'>10</a></li>
                   <li><a href='/sale-mens-shoes/size-11/'>11</a></li>
                   <li><a href='/sale-mens-shoes/size-12/'>12</a></li>                  
                   <li><a href='/sale-mens-shoes/size-13/'>13</a></li>                   
                   <li><a href='/sale-mens-shoes/size-14/'>14</a></li>
                   <li><a href='/sale-mens-shoes/size-15/'>15</a></li>
                 </ul>
                 <ul>
	               	<li><a href='/sale-mens-shoes/size-8.5/'>8.5</a></li>
					<li><a href='/sale-mens-shoes/size-9.5/'>9.5</a></li>
					<li><a href='/sale-mens-shoes/size-10.5/'>10.5</a></li>
					<li><a href='/sale-mens-shoes/size-11.5/'>11.5</a></li>
					<li><a href='/sale-mens-shoes/size-12.5/'>12.5</a></li>
					<li><a href='/sale-mens-shoes/size-13.5/'>13.5</a></li>
					<li><a href='/sale-mens-shoes/size-14.5/'>14.5</a></li>
					<li><a href='/sale-mens-shoes/size-15.5/'>15.5</a></li>       
                 </ul>
            </div>
           <div class="clear_both"></div>  	
                                                                
                            </div><!-- level1 -->
        </li>
        <li class="global_nav_seperator"></li>
        
        <li class="select_nav"><a class="drop_down" href="/featured/">FEATURED</a>
        <div class="clear_both"></div>
         <div class="level1" id="features">
        						<code class="nav_arrow"></code>
                            	<ul class="cult2">
                            	 <c:forEach items="${eventList}" var="event">
                            	
                            	<c:set var="eventname" value="${event.eventName}"></c:set>
									     <c:set var="eventNameSmall" value="${fn:toLowerCase(eventname)}"></c:set>
									     <c:if test="${event.eventName ne'solestruck-knows-you'}">
									        <li><a href="/featured/${event.eventURL}/">${eventNameSmall}</a></li>
								        </c:if>
                            	
                            	</c:forEach> 
                            	</ul>
                                	
        <div class="clear_both"></div>
        </div>
        </li>
       
        <li class="global_nav_seperator"></li>
        <li class="select_nav"><a class="drop_down" href="#">CULT</a>
        
          <div class="clear_both"></div>
          <div class="level1" id="blog">
          						<code class="nav_arrow"></code>
                            	<ul class="cult1">
                            	
                                	<li><a target="_blank" href="http://blog.solestruck.com/">Blog</a></li>
                                    <!-- <li><a target="_blank" href="http://blog.solestruck.com/pdxstore/">PDX Store Blog</a></li> --> 
                                    <li><a class="no_background" href="/lookbook/">Lookbook</a></li>
                                    <li><a class="no_background" href="/streetcred/">Street Cred</a></li>
                                    <li><a href="/first-time-vol1-issue1/">ZINE</a></li>
                                    <li><a href="/aboutus">About</a></li>
                                </ul>
                                <ul class="cult2">    
        							
       					 			<li><a target="_blank" href="https://www.facebook.com/Solestruck">Facebook</a></li>
							        <li><a target="_blank" href="http://solestruckshoes.tumblr.com/">Tumblr - Women's</a></li>
							        <li><a target="_blank" href="http://solestruckmens.tumblr.com/">Tumblr - Men's</a></li>
							        <li><a target="_blank" href="http://instagram.com/solestruck">Instagram</a></li>
							        <li><a target="_blank" href="http://lookbook.nu/solestruckshoes">Lookbook.nu</a></li>
							        <li><a target="_blank" href="http://www.youtube.com/solestrucktv">YouTube</a></li>
							        <li><a target="_blank" href="https://twitter.com/solestruckshoes">Twitter</a></li>
							        <li><a target="_blank" href="http://pinterest.com/solestruckshoes">Pinterest</a></li>
							        <li><a target="_blank" href="http://solestruckshoes.polyvore.com">Polyvore</a></li>
                              </ul>
                            </div><!-- level1 -->
        </li>
        <li class="global_nav_seperator"></li>
       <li><a class="no_background" href="/lookbook/">LOOKBOOK</a></li> 
<!--         <li class="global_nav_seperator"></li> -->
<!--        <li><a class="no_background" target="_blank" href="/streetcred">STREETCRED</a></li> -->
       
      </ul>
    </div><!-- gloabal_nav -->
    <c:set var="isLoggedin" value="${sessionScope.loggedin}"/>
    <input type="hidden" id="loginIn" value="${isLoggedin}"/>
	<c:set var="ismyaccpage" value="${isMyAccPage}"/>
	<c:set var="discountprogram" value="${sr:getDiscountProgramForFB()}"></c:set>
	<%-- <c:set var="discountprogram" value="${sr:getDiscountProgramForCustomSale()}"></c:set> --%>
	<c:set var="webDiscountOn" value="${discountprogram.webDiscountOn}"></c:set>
	<c:set var="discountTypeName" value="${discountprogram.programTypeName}"></c:set>
	<%-- <input type="hidden" id="webDiscountOn" value="${discountprogram.webDiscountOn}"></input>
	<input type="hidden" id="discountTypeName" value="${discountprogram.programTypeName}"></input> --%>
	<%-- <input type="hidden" id="webDiscountOn" value="true"></input>
	<input type="hidden" id="discountTypeName" value="Custom"></input>
	
	<c:set var="productncolorNames" value="${sr:getProductAndColorIdForSale()}"></c:set>
	<c:forEach var="prodncolNames" items="${productncolorNames}" varStatus="stat">
		<input type="hidden" id="prodForSales_${stat.count}" value="${prodncolNames.key}">
		<input type="hidden" id="colID_${stat.count}" value="${prodncolNames.value}">
		<c:set var="colorNames" value="${prodncolNames.value}"></c:set>
		<c:forEach var="colNames" items="${colorNames}" varStatus="status">
			<input type="hidden" id="colForSales_${stat.count}_${status.count}" value="${colNames}">
		</c:forEach>
	</c:forEach> --%>
	
	<%-- <c:set var="productncolorID" value="${sr:getProductAndColorIdForSale()}"></c:set>
	<c:forEach var="prodncolID" items="${productncolorID}" varStatus="stat">
		<input type="hidden" id="prodID_${stat.count}" value="${prodncolID.key}">
		<input type="hidden" id="colID_${stat.count}" value="${prodncolID.value}">
		<c:set var="colorIDs" value="${prodncolID.value}"></c:set>
		<c:forEach var="colIDs" items="${colorIDs}" varStatus="status">
			<input type="hidden" id="colID_${stat.count}_${status.count}" value="${colIDs}">
		</c:forEach>
	</c:forEach> --%>
	<c:set var="brandList" value="${sr:getBrandListForSale()}"></c:set>
	<input type="hidden" id="thresholdSize" value="${sr:getThresholdSize()}"/>
	<c:set var="thresholdLimitsAndValues" value="${sr:getThresholdValues()}"></c:set>
	<c:forEach var="thresholdValues" items="${thresholdLimitsAndValues}" varStatus="status">
		<input type="hidden" id="minLimits_${status.count}" value="${thresholdValues.thresholdMin}">
		<input type="hidden" id="maxLimits_${status.count}" value="${thresholdValues.thresholdMax}">
		<input type="hidden" id="discountValues_${status.count}" value="${thresholdValues.thresholdDiscount}"> 
	</c:forEach>
	<%-- <c:forEach var="thresholdLimitsAndValues" items="${sr:getThresholdValues()}">
		<c:forEach var="thresholdLimits" items="${thresholdLimitsAndValues.key }" varStatus="status">
			<input type="hidden" id="thresholdLimits_${status.count}" value="${thresholdLimits}">
		</c:forEach>
		<c:forEach var="thresholdValues" items="${thresholdLimitsAndValues.value }" varStatus="status">
			<input type="hidden" id="thresholdValues_${status.count}" value="${thresholdValues}">
		</c:forEach>
	</c:forEach> --%>
	
	<c:forEach var="brandNames" items="${brandList}">
		<input type="hidden" id="saleBrandNames" value="${brandNames}"></input>
	</c:forEach>
	<!-- This is for PreCounter by YES -->
	
	<c:if test="${discountprogram eq null}">
		<input type="hidden" id="discountExists" value="false"></input>
		<c:set var="timerhandler" value="${sr:getTimerHandler()}"></c:set>
		<c:if test="${timerhandler.toShow eq true}">
			<input type="hidden" id="saleTimer" value="true"></input>
			<c:set var="saleHours" value="${sr:getHoursForSale()}"></c:set>
			<c:set var="saleMins" value="${sr:getMinutesForSale()}"></c:set>
			<c:set var="saleSecs" value="${sr:getSecondsForSale()}"></c:set>
			<input type="hidden" id="salehours" value="${saleHours}"></input>
			<input type="hidden" id="salemins" value="${saleMins}"></input>
			<input type="hidden" id="salesecs" value="${saleSecs}"></input>
			 <ul id="sale_timmer_wrapper" class="sale_timmer_wrapper_act tooltip_bf_timer">
		        <li class="sale_hr_c1" >&nbsp;</li>
		        <li class="sale_hr_c2" >&nbsp;</li>
		        <li class="sale_min_c1" >&nbsp;</li>
		        <li class="sale_min_c2" >&nbsp;</li>
		        <li class="sale_sec_c1">&nbsp;</li>
		        <li class="sale_sec_c2">&nbsp;</li>
		        <span class="timer_tooltip_bf"><code class="tipsy-arrow1"></code>Hella Sick Countdown<br><a href="#">Click for Details</a></span>
		    </ul> 
	    </c:if>
	</c:if> 
	
	<!-- Upto here This is for PreCounter by YES -->
	
	<c:if test="${discountprogram ne null}">
	<%-- <input type="hidden" id="fbsale_discount_percentage" value="${discountprogram.discountPercentage}"/>
	<input type="hidden" id="discountExists" value="true"></input> --%>
	<%-- <c:if test="${discountprogram.showTimer eq true}"> --%> 
	<input type="hidden" id="showTimer" value="true"></input>
	<c:set var="hours" value="${sr:getHoursForDiscount()}"></c:set>
	<c:set var="mins" value="${sr:getMinutesForDiscount()}"></c:set>
	<c:set var="secs" value="${sr:getSecondsForDiscount()}"></c:set>
	<input type="hidden" id="hours" value="${hours}"></input>
	<input type="hidden" id="mins" value="${mins}"></input>
	<input type="hidden" id="secs" value="${secs}"></input>
	<ul id="timmer_wrapper" class="timmer_wrapper_act tooltip_bf_timer">
        <li class="hr_c1" >&nbsp;</li>
        <li class="hr_c2" >&nbsp;</li>
        <li class="min_c1" >&nbsp;</li>
        <li class="min_c2" >&nbsp;</li>
        <li class="sec_c1">&nbsp;</li>
        <li class="sec_c2">&nbsp;</li>
        <span class="timer_tooltip_bf"><code class="tipsy-arrow1"></code>Pre-Christmas Sale<br><a href="#">Click for Details</a></span>
    </ul><!--timmer_wrapper -->
    
    </c:if>
    <%-- <c:if test="${discountTypeName eq 'Order' && discountTypeName ne '' }">

    <code id="fb_sale">
      	<span>Thanks for getting us to 200K Facebook Likes!<code></code></span>
      </code>
    </c:if>
    </c:if> --%>
     <!-- <a target="_blank" href='http://www.fortyeight.com/events/currentevent/' class="fortyeight_btn"></a> --> 
   <!--  <div class="cart_nav">
      <ul>
      <li><a href="#" class="no_background signin_act">SIGN IN</a></li> -->
     <%--  <c:choose>
      <c:when test="${isLoggedin}">
     	 <a href="http://blog.solestruck.com/solestruck-loves-the-philippines/" target="default"><code class="help_typhoon"></code></a>
      </c:when>
      <c:otherwise>
      	<a href="http://blog.solestruck.com/solestruck-loves-the-philippines/" target="default"><code class="help_typhoon for_typhoon"></code></a>
      </c:otherwise>
      </c:choose> --%>
       
       <div class="cart_nav">
      <ul>
      <!-- <li class="holiday_btn">2012 HOLIDAY SHIPPING</li> -->
      
      <c:choose>
       <c:when test="${isLoggedin}">
       
       <li class="select_nav" id="showdropdown" ><a class="drop_down" href="#" id="myaccount">ACCOUNT</a>
       </c:when>
       <c:otherwise>
        <li class="select_nav" id="showdropdown"><a href="#" class="no_background signin_act" id="myaccount">SIGN IN</a>
       </c:otherwise>
       </c:choose>
        
          <div class="clear_both"></div>
          <div class="level1" id="account">
        
       <c:if test="${isLoggedin}">
 		    <code class="nav_arrow"></code>
       </c:if>
                 
            <ul>
                		<c:if  test="${!ismyaccpage}">
                			<c:if test="${isLoggedin}">
                				<li> <a onclick="loadMyAccount('${sessionScope.customerid}');"  onmouseover="this.style.textDecoration='none'" onmouseout="this.style.textDecoration='none'">My Account</a></li>
                			</c:if>
                		</c:if>
                		<li><a  href="/wishlist/" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'" style="text-decoration: none; ">Wishlist</a></li>
                        <c:choose>
                        <c:when test="${isLoggedin}">
                        <li><a  onclick="logout()"  onmouseover="this.style.textDecoration='none'" onmouseout="this.style.textDecoration='none'">Logout</a></li>
                        </c:when>
                        <c:otherwise>
                         <li><a class="showlogin">Login / Sign Up</a></li>
                        </c:otherwise>
                        </c:choose>
		  </ul>
          </div><!-- level1 --> 
          
          
       <%--  <li class="select_nav" ><a class="drop_down" href="#">ACCOUNT</a>
          <div class="clear_both"></div>
          <div class="level1" id="account">
           <code class="nav_arrow"></code>
            <ul>
                		<c:if  test="${!ismyaccpage}">
                			<c:if test="${isLoggedin}">
                				<li> <a onclick="loadMyAccount('${sessionScope.customerid}');"  onmouseover="this.style.textDecoration='none'" onmouseout="this.style.textDecoration='none'">My Account</a></li>
                			</c:if>
                		</c:if>
                		<li><a onclick="showWishList();" onmouseover="this.style.textDecoration='underline'" onmouseout="this.style.textDecoration='none'" style="text-decoration: none; ">Wishlist</a></li>
                        <c:choose>
                        <c:when test="${isLoggedin}">
                        <li><a  onclick="logout()"  onmouseover="this.style.textDecoration='none'" onmouseout="this.style.textDecoration='none'">Logout</a></li>
                        </c:when>
                        <c:otherwise>
                         <li><a class="showlogin">Login / Sign Up</a></li>
                        </c:otherwise>
                        </c:choose>
		  </ul>
          </div><!-- level1 --> 
        </li> --%>
        <li class="global_nav_seperator"></li>
        <li><a id="cartCount" class="no_background" href="#" onclick="showShoppingCart();"></a></li>
       <!--  <li class="global_nav_seperator"></li> -->
       
      </ul>
    </div><!-- cart_nav -->
<input type="hidden" id="isTimeChanged" value=""></input>
 <div class="clear_both"></div>
 