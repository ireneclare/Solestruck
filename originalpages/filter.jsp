<%@page   import="com.veroniqa.frontend.util.VeroniqaConstants" %>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="frm" uri="http://www.springframework.org/tags/form" %>
<% String imageURL=VeroniqaConstants.IMAGE_URL;%>

            <div class="item_selection_pannel">
                
                <frm:form id="filterForm" commandName="myProductFilter">
                
				<c:if test="${currentPage eq 'VendorPage'}">
				<frm:hidden path="vendorName" value="${vendorName}"/>
				<frm:hidden path="socialCategory" value="${socialcategory}"/>
				<frm:hidden path="isSort" value="false"/>
				<frm:hidden path="isSale" value="false"/>
				<frm:hidden path="isNew" value="false"/>
				<frm:hidden path="isVintage" value="false"/>
				<frm:hidden path="isComingSoon" value="false"/>
				</c:if>
				<c:if test="${currentPage eq 'SortPage'}">
				<frm:hidden path="socialCategory" value="${param.category}"/>
				<frm:hidden path="isSort" value="true"/>
				<frm:hidden path="isSale" value="false"/>
				<frm:hidden path="isNew" value="false"/>
				<frm:hidden path="isVintage" value="false"/>
				<frm:hidden path="isComingSoon" value="false"/>
				</c:if>
				<c:if test="${currentPage eq 'NewArrivalPage'}">
				<frm:hidden path="isNew" value="true"/>
				<frm:hidden path="isSort" value="false"/>
				<frm:hidden path="isSale" value="false"/>
				<frm:hidden path="isVintage" value="false"/>
				<frm:hidden path="isComingSoon" value="false"/>
				</c:if>
				<c:if test="${currentPage eq 'SalePage'}">
				<frm:hidden path="isSale" value="true"/>
				<frm:hidden path="isSort" value="false"/>
				<frm:hidden path="isNew" value="false"/>
				<frm:hidden path="isVintage" value="false"/>
				<frm:hidden path="isComingSoon" value="false"/>
				</c:if>
				<c:if test="${currentPage eq 'SalePageBySize'}">
				<frm:hidden path="isSale" value="true"/>
				<frm:hidden path="isSort" value="false"/>
				<frm:hidden path="isNew" value="false"/>
				<frm:hidden path="isVintage" value="false"/>
				<frm:hidden path="isComingSoon" value="false"/>
				</c:if>
				<c:if test="${currentPage eq 'VintagePage'}">
				<frm:hidden path="isVintage" value="true"/>
				<frm:hidden path="isSale" value="false"/>
				<frm:hidden path="isSort" value="false"/>
				<frm:hidden path="isNew" value="false"/>
				<frm:hidden path="isComingSoon" value="false"/>
				</c:if>
				<c:if test="${currentPage eq 'VintagePageBySize'}">
				<frm:hidden path="isVintage" value="true"/>
				<frm:hidden path="isSale" value="false"/>
				<frm:hidden path="isSort" value="false"/>
				<frm:hidden path="isNew" value="false"/>
				<frm:hidden path="isComingSoon" value="false"/>
				</c:if>
				<c:if test="${currentPage eq 'ComingSoonPage'}">
				<frm:hidden path="isComingSoon" value="true"/>
				<frm:hidden path="isVintage" value="false"/>
				<frm:hidden path="isSale" value="false"/>
				<frm:hidden path="isSort" value="false"/>
				<frm:hidden path="isNew" value="false"/>
				</c:if>
				<c:if test="${currentPage eq 'CustomSalePage'}">
				<frm:hidden path="isSale" value="true"/>
				<frm:hidden path="isSort" value="false"/>
				<frm:hidden path="isNew" value="false"/>
				<frm:hidden path="isVintage" value="false"/>
				<frm:hidden path="isComingSoon" value="false"/>
				</c:if>
				<c:if test="${currentPage eq 'SalePage' || currentPage eq 'SalePageBySize' || currentPage eq 'NewArrivalPage' || currentPage eq 'VintagePage' || currentPage eq 'VintagePageBySize' || currentPage eq 'ComingSoonPage' || currentPage eq 'CustomSalePage'}">
				
				 <div id="genderList_Pannel" class="gender_select_pannel">
	                    <h2 class="show_drop_down_act" id='GenderCount'>Gender (0)</h2>
	                    
	                        <div id="checkedgenderids" class="select_drop_down">
	                        <div class="filter_white_space"></div>
	                            <ul class="scroll-pane">
		                            	<c:forEach items="${gender}" var="gender">
                           		<li>
									<label style="text-transform: capitalize"><frm:checkbox path="gender" id="genderid_${gender.name}" 
										class="select_pannel_checkbox" onclick="displayCheckedNames(),getFilteredProducts();" 
										value="${gender.name}"/>${gender.name}
									</label>
						  		</li>
						  </c:forEach>
	                            </ul>
	                            <div class="filter_white_space_bottom"></div>
	                        <div class="clear_both"></div>
	                            <!-- <span style="cursor:pointer" onclick="cleargenderSelection()">Clear Gender</span> -->
	                        </div>  <!-- select_drop_down -->
	               	 </div> <!-- gender_select_pannel -->
	              </c:if> 	 
				
                <div class="size_select_pannel">
                    <h2 class="show_drop_down_act" id='SizeCount'>Size (0)</h2>
                    
                        <div id="checkedsizeids" class="select_drop_down">
                        <div class="filter_white_space"></div>
                        
                        <ul class="scroll-pane" id="sizeFilterList">
                           <c:forEach items="${sizes}" var="size">
                           		<li>
									<label><frm:checkbox path="sizes" id="sizeid_${size.key.id}" 
										class="select_pannel_checkbox" onclick="displayCheckedNames(),getFilteredProducts();" 
										value="${size.key.id}"/>${fn:replace(size.name,'.0','')}
									</label>
						  		</li>
						  </c:forEach>
                        </ul>
                        <div class="filter_white_space_bottom"></div>
                        <div class="clear_both"></div>
                            <!-- <span style="cursor:pointer" onclick="clearsizeSelection()">Clear Size</span> -->
                        </div><!-- select_drop_down -->
                </div><!-- size_select_pannel -->
                
               <div class="color_select_pannel">
                    <h2 class="show_drop_down_act" id='ColorCount'>Color (0)</h2>
                   
                        <div id="checkedcolorids" class="select_drop_down">
                         <div class="filter_white_space"></div>
                        <ul class="scroll-pane">
                        	<c:forEach items="${colors }" var="color">
	                       		 <li>
                           			<label><frm:checkbox path="colors" id="colorid_${color.key.id}" 
	                              		onclick="displayCheckedNames(),getFilteredProducts();" 
	                              		value="${color.key.id}" class="select_pannel_checkbox" />${color.name}
	                              	</label>
	                       		 </li>
	                        </c:forEach>
                        </ul>
                        <div class="filter_white_space_bottom"></div>
                        <div class="clear_both"></div>
                            <!-- <span style="cursor:pointer" onclick="clearcolorSelection()">Clear Color</span> -->
                        </div><!-- select_drop_down --> 
                </div><!-- color_select_pannel -->
                
                <div class="style_selectpannel">
                    <h2 class="show_drop_down_act" id='StyleCount'>Style (0)</h2>
                   
                        <div id="checkedstyleids" class="select_drop_down">
                         <div class="filter_white_space"></div>
                            <ul class="scroll-pane" id="styleFilterList">
                            	<c:forEach items="${styles}" var="style">
                            	<li>
                            	<label style="text-transform: capitalize"><frm:checkbox path="styles" id="styleid_${style.key.id}" 
	                                        onclick="displayCheckedNames(),getFilteredProducts();" 
	                                                   			value="${style.key.id}" class="select_pannel_checkbox" />
	                                                   			<c:choose>
	                                                   				<c:when test="${style.name=='Boots Ankle'}">${fn:replace(style.name,'Ankle','(Ankle)')}</c:when>
	                                                   				<c:when test="${style.name=='Boots Knee'}">${fn:replace(style.name,'Knee','(Knee)')}</c:when>
	                                                   				<c:otherwise>
	                                                   					${style.name}
	                                                   				</c:otherwise>
                                                   				</c:choose>
	                            </label>
								</li>
                            	</c:forEach>
                           </ul>
                           <div class="filter_white_space_bottom"></div>
                      
                        <div class="clear_both"></div>
                            <!-- <span style="cursor:pointer" onclick="clearstyleSelection()">Clear Style</span> -->
                        </div><!-- select_drop_down -->
                </div><!-- style_selectpannel -->
                <c:set var="category" value="${category}"></c:set>
                <c:if test="${category eq 'women'}">
                	<c:set var="brands" value="${womenfiltervendorlst}"></c:set>
                </c:if>
                <c:if test="${category eq 'men'}">
                	<c:set var="brands" value="${menfiltervendorlst}"></c:set>
                </c:if>
                <c:set var="currentPage" value="${currentPage }"></c:set>
                <c:if test="${currentPage eq 'SalePage' || currentPage eq 'SalePageBySize' || currentPage eq 'NewArrivalPage' || currentPage eq 'ComingSoonPage' || currentPage eq 'CustomSalePage'}">
                	<c:set var="brands" value="${allfiltervendorlst}"></c:set>
                </c:if>
                <c:if test="${currentPage eq 'SortPage' || currentPage eq 'SalePage' || currentPage eq 'SalePageBySize' || currentPage eq 'NewArrivalPage' || currentPage eq 'ComingSoonPage'|| currentPage eq 'CustomSalePage'}">
	                <div class="brand_select_pannel">
	                    <h2 class="show_drop_down_act" id='BrandCount'>Brand (0)</h2>
	                   
	                        <div id="checkedbrandids" class="select_drop_down">
	                         <div class="filter_white_space"></div>
	                            <ul class="scroll-pane">
	                            	<c:forEach items="${brands}" var="brand">
		                            	<li>
		                            		<label><frm:checkbox path="brands" id="brandid_${brand.key.id}" 
			                                        onclick="displayCheckedNames(),getFilteredProducts();" 
			                                        value="${brand.key.id}" class="select_pannel_checkbox" />${brand.name}
			                            	</label>
										</li>
	                            	</c:forEach>
	                            </ul>
	                            <div class="filter_white_space_bottom"></div>
	                        <div class="clear_both"></div>
	                            <!-- <span style="cursor:pointer" onclick="clearbrandSelection()">Clear Brand</span> -->
	                        </div>  <!-- select_drop_down -->
	               	 </div> <!-- brand_select_pannel -->
	         	</c:if>
                
                    <div class="price_select_pannel">
                    <h2 class="show_drop_down_act">Price</h2>
                    <div class="select_drop_down">
                    	<div class="slider_col1">
                             <h3>Price Between:</h3>
                             <div class="slider-vertical"></div>
                                 <div class="amount"></div>
                                 <frm:input path="minPrice" id="minAmount" class="dn" value=""/>
                                 <frm:input path="maxPrice" id="maxAmount" class="dn" value=""/>
                                 <input type="hidden" id="hiddenMinPrice" value=""></input>
                                 <input type="hidden" id="hiddenMaxPrice" value=""></input>
                                 <div class="clear_both"></div>
                             <h3 style="margin-top:15px !important;">Price Sort:</h3>
                             <ul class="price_sort">
                             	<li id="price_Low_High">Low - High</li>
                             	<frm:input path="isPriceLowHigh" id="isPriceLowHigh" class="dn" value="false"/>
                             	<li id="price_High_Low">High - Low</li>
                             	<frm:input path="isPriceHighLow" id="isPriceHighLow" class="dn" value="false"/>
                             	
                             </ul>
                             <input type="hidden" id="hiddenLowHigh" value=""></input>
                             <input type="hidden" id="hiddenHighLow" value=""></input>
                		</div><!-- slider_col1 -->
                        <div class="sale_slider_disabled"></div>
                        <div class="slider_col2 dn">
                            <h3 class="nb all_heading">Sale % Off:</h3>
                            <div class="slider-vertical1 fl" onclick="getFilteredProducts()"></div>
                            
                            <frm:input path="maxSalePercentage" class="amount1 fl" value="1"/><b>% +</b>
                            <div class="clear_both"></div>
                        </div><!-- slider_col2 -->
                        <div class="filter_white_space_bottom"></div>
               <div class="clear_both"></div>
               <!-- <span id="clearPrice">Clear Price</span> -->
               </div><!-- select_drop_down -->
                </div><!-- price_select_pannel -->
                </frm:form>
                <div class="clear_both"></div>
                <div class="select_drop_down">
                 	<div class="your_selection"> 
		                <a id="YourSelectionCount" href="#">SELECTIONS (0):</a>
		               	<!-- <div class="clear_both"></div> -->
		       		   	<div id="mySelectedFilters" class="fl"></div> <!-- mySelectedFilters -->
		       		   	<div class="clear_selection">
		                   <span id="clearAllSelection" style="cursor:pointer" >CLEAR ALL</span>
		               	</div><!-- clear_selection -->
		               	<div class="clear_both"></div> 
		            </div><!-- your_selection -->   
                </div><!--  select_drop_down -->
                
                <input type="hidden" id="sysTimeForBrowserBack"  value=""></input>
                <input type="hidden" id="retainfilterPageNumber" value="1"></input>
             	<input type="hidden" id="retaining_scroll_top" value="0"></input>
             	<input type="hidden" id="FilterCheckedValue" value=""></input>
             	<input type="hidden" id="filterCurrentPage" value="${currentPage}"></input>
             
                
            </div><!-- item_selection_pannel -->
            <div class="clear_both"></div>
             <!-- <div class="your_selection"> 
                <a id="YourSelectionCount" href="#">Your Selections (0)</a>
                <div class="clear_selection">
                   <span id="clearAllSelection" style="cursor:pointer" >Clear All </span>
               	</div>clear_selection
               	<div class="clear_both"></div>
       		   	<div id="mySelectedFilters" class="fl"></div> mySelectedFilters
               	<div class="clear_both"></div> 
            </div>your_selection -->
           
