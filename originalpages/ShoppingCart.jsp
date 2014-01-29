<%@ page import="com.veroniqa.frontend.util.VeroniqaConstants"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="sr" uri="http://solestruck.com/resources" %>
<c:set var="imageServerURL" value="https://commondatastorage.googleapis.com/images2.solestruck.com"/>
<div class="chk_right">
            		<h2>YOUR CART</h2>
                    <ul id="cartItems" >
                     <c:forEach items="${CART_DETAILS.shoppingCart.lineItems}" var="lineItem">
					  <c:set var="vendorName" value="${fn:replace(lineItem.vendorName,\" \",\"-\")}"/>
					  <c:set var="productName" value="${fn:replace(lineItem.productName,\" \",\"-\")}"/>
					  <c:set var="colorName" value="${fn:replace(lineItem.colorName,\" \",\"-\")}"/>
					  <c:set var="vendorNameInLower" value="${fn:toLowerCase(vendorName)}"/>
					  <c:set var="productImageURL" value="${imageServerURL}/${vendorNameInLower}-shoes/${vendorName}-shoes-${productName}-(${colorName})-010307.jpg"/>
					  <c:set var="solestruck_magazine" value="${fn:replace(lineItem.vendorName,\" \",\"-\")}"/>
					  <c:set var="discountprogram" value="${sr:getDiscountProgramForFB()}"></c:set>
					  <c:set var="discountTypeName" value="${discountprogram.programTypeName}"></c:set>
					  <%-- <c:if test="${discountprogram ne null}">
						<input type="hidden" id="fbsale_discount_percentage" value="${discountprogram.discountPercentage}"/>
						<input type="hidden" id="discountTypeName" value="${discountprogram.programTypeName}"></input>
						<input type="hidden" id="discountExists" value="true"></input>
					  </c:if>  --%>
					   <c:choose>
						 <c:when test="${solestruck_magazine=='Solestruck-Magazine'}">
						 	 <c:set var="Solestruck_Magazine" value="${solestruck_magazine}"/>
						 </c:when>
						 <c:otherwise>
						 <c:set var="Solestruck_Magazine" value=""/>
						 </c:otherwise>
					  </c:choose>
					 
					  <input type="hidden" value="${productImageURL}"/>
                    	<li id="item_${lineItem.sequenceId}" >
                    	 <%-- <div class="checkout_error" id="message_${lineItem.sequenceId}" style="display:none;">
							<h4>Ah Snap! The last pair were just taken.</h4>
							<p>Let us <u>Email You</u> when we get more in.</p>
			        	  </div> --%>
                        	<div class="cart_shoe_list">
                            	<img id="image_${lineItem.sequenceId}" src="${productImageURL}" border="0" width="80" height="60"/>
                                <div class="cart_shoe_dts">
                                	<b id="productName_${lineItem.sequenceId}" name="${lineItem.productName}">${fn:toUpperCase(lineItem.productName)}</b><br />
                                	<span id="vendorName_${lineItem.sequenceId}" name="${lineItem.vendorName}">${fn:toUpperCase(lineItem.vendorName)}</span>
                                    <h1>
									<c:if test="${lineItem.isPreOrder}">
										<span id="preOrder_${lineItem.sequenceId}">(Pre-Order)</span>
									</c:if>
									<c:if test="${!lineItem.isPreOrder}">
										<span id="preOrder_${lineItem.sequenceId}">(In Stock)</span>
									</c:if>
									<c:set var="saleexecuted" value="false"></c:set>
									<c:if test="${!lineItem.isSale}"><span id="sale_${lineItem.sequenceId}" style="display:none;" >(Sale)</span></c:if> 
									 <c:if test="${lineItem.isSale && ((cookie['Facebook'] ne null && cookie['Facebook'].value == 'Facebook')|| applyDiscount eq true || cookieExists eq false) && discountprogram ne null && saleexecuted eq false}"> <span id="sale_${lineItem.sequenceId}" >(Final Sale)</span> 
									 	<c:set var="saleexecuted" value="true"></c:set>
									 </c:if>
									 <c:if test="${lineItem.isSale && cookie['Facebook'] eq null && saleexecuted eq false}"> <span id="sale_${lineItem.sequenceId}" >(Sale)</span></c:if>
								  </h1>
								  <input type="hidden" name="product" id="product_${lineItem.sequenceId}" value="${lineItem.productId}"/>
								  <input type="hidden" name="variant" id="variant_${lineItem.sequenceId}" value="${lineItem.productVariantId}"/>
								  <input type="hidden" name="colorId" id="colorId_${lineItem.sequenceId}" value="${lineItem.colorId}"/>
                                </div>
                                <div class="cart_price">
                                
                                	<%-- <strike>250.00</strike> <b>$250.00</b>
                                	 <div class="checkout_remove_shoes remove_shoe_act" onclick="removeItem(${lineItem.sequenceId});"></div>
             						 <div class="clear_both"></div> --%>
             						 <%-- <input type="hidden" id="12" value="${lineItem.isSale}"/>
             						 <input type="hidden" value="${applyDiscount}"/>
             						 <input type="hidden" value="${cookieExists}"/>
             						 <input type="hidden" value="${discountprogram}"/>
             						 <input type="hidden" value="${discountTypeName}"/>
             						 <input type="hidden" value="${cookie['Facebook'].value}"/> --%>
              						<input type="hidden" value="${lineItem.isSale && ((cookie['Facebook'] ne null && cookie['Facebook'].value == 'Facebook')|| applyDiscount eq true || cookieExists eq false) && discountprogram ne null && discountTypeName ne 'Brand' && discountTypeName eq 'FF'}" />
						             <c:set var="executed" value="no"></c:set>
						              <c:choose>
							              	<c:when test="${lineItem.isSale && ((cookie['Facebook'] ne null && cookie['Facebook'].value == 'Facebook')|| applyDiscount eq true || cookieExists eq false) && discountprogram ne null && discountTypeName ne 'Brand' && discountTypeName eq 'FF'}">
												<c:set var="executed" value="yes"></c:set>
												<fmt:formatNumber pattern="0.00" value="${sr:getRoundedValue(lineItem.price-(lineItem.price*discountprogram.discountPercentage)/100)}" var="SpSaleprice" type="currency" currencySymbol="$" />
												<fmt:formatNumber pattern="0.00" value="${sr:getRoundedValue(lineItem.retailPrice-(lineItem.retailPrice*percent)/100)}" var="retailPrice" type="currency" currencySymbol="$" />
												<fmt:formatNumber pattern="0.00" value="${sr:getRoundedValue(lineItem.retailPrice*lineItem.quantity)}" var="retailPrice" type="currency" currencySymbol="$" />
												<fmt:formatNumber pattern="0.00" value="${sr:getRoundedValue(lineItem.price*lineItem.quantity)}" var="salePrice" type="currency" currencySymbol="$" />
												<c:choose>
												<c:when test="${ lineItem.isSale eq 'true'}">
												<strike id="retailPrice_${lineItem.sequenceId}" >$${retailPrice}</strike><b class="incart_check" id="price_${lineItem.sequenceId}">$${SpSaleprice}</b>
												</c:when>
												<c:otherwise>
												<b id="price_${lineItem.sequenceId}">${SpSaleprice}</b>
												</c:otherwise>
												</c:choose>
												
												<input type="hidden" id="real_price_${lineItem.sequenceId}" value="${(lineItem.price-(lineItem.price*percent)/100)}"/>
										  </c:when>
										  
										   <c:when test="${lineItem.isSale && ((cookie['Facebook'] ne null && cookie['Facebook'].value == 'Facebook')|| applyDiscount eq true || cookieExists eq false) && discountprogram ne null && discountTypeName eq 'Brand' && discountTypeName ne 'FF' && vendorNameInLower eq saleBrandNames}">
												<c:set var="executed" value="yes"></c:set>
												
												<fmt:formatNumber pattern="0.00" value="${sr:getRoundedValue(lineItem.price-(lineItem.price*discountprogram.discountPercentage)/100)}" var="SpSaleprice" type="currency" currencySymbol="$" />
												<fmt:formatNumber pattern="0.00" value="${sr:getRoundedValue(lineItem.retailPrice-(lineItem.retailPrice*percent)/100)}" var="retailPrice" type="currency" currencySymbol="$" />
												<fmt:formatNumber pattern="0.00" value="${sr:getRoundedValue(lineItem.retailPrice*lineItem.quantity)}" var="retailPrice" type="currency" currencySymbol="$" />
												<fmt:formatNumber pattern="0.00" value="${sr:getRoundedValue(lineItem.price*lineItem.quantity)}" var="salePrice" type="currency" currencySymbol="$" />
												<c:choose>
												<c:when test="${ lineItem.isSale eq 'true'}">
												<strike id="retailPrice_${lineItem.sequenceId}" >${retailPrice}</strike><b class="incart_check" id="price_${lineItem.sequenceId}">${SpSaleprice}</b>
												</c:when>
												<c:otherwise>
												<strike id="retailPrice_${lineItem.sequenceId}" >${retailPrice}</strike><b class="incart_check" id="price_${lineItem.sequenceId}">${SpSaleprice}</b>
												</c:otherwise>
												</c:choose>
												
												<input type="hidden" id="real_price_${lineItem.sequenceId}" value="${(lineItem.price-(lineItem.price*percent)/100)}"/>
										  </c:when>
										  
										<%--   <c:if test="${lineItem.isSale && cookieExists eq false && discountprogram ne null}">
												<c:set var="executed" value="yes"></c:set>
												<fmt:formatNumber value="${sr:getRoundedValue(lineItem.price-(lineItem.price*percent)/100)}" var="SpSaleprice" type="currency" currencySymbol="$" />
												<fmt:formatNumber value="${sr:getRoundedValue(lineItem.retailPrice-(lineItem.retailPrice*percent)/100)}" var="retailPrice" type="currency" currencySymbol="$" />
												<fmt:formatNumber value="${sr:getRoundedValue(lineItem.retailPrice*lineItem.quantity)}" var="retailPrice" type="currency" currencySymbol="$" />
												<c:choose>
												<c:when test="${ lineItem.isSale eq 'true'}">
												<strike id="retailPrice_${lineItem.sequenceId}" >${retailPrice}</strike> <b id="price_${lineItem.sequenceId}">${SpSaleprice}</b>
												</c:when>
												<c:otherwise>
												<b id="price_${lineItem.sequenceId}">${SpSaleprice}</b>
												</c:otherwise>
												</c:choose>
												<input type="hidden" id="real_price_${lineItem.sequenceId}" value="${(lineItem.price-(lineItem.price*percent)/100)}"/>
										  </c:if> --%>
										  
										  <c:when test="${lineItem.isSale  && cookie['Facebook'] eq null && executed eq 'no'}">
												<fmt:formatNumber value="${lineItem.price}" var="SpSaleprice" type="currency" currencySymbol="$" />
												<fmt:formatNumber value="${sr:getRoundedValue(lineItem.retailPrice-(lineItem.retailPrice*percent)/100)}" var="retailPrice" type="currency" currencySymbol="$" />
												<fmt:formatNumber value="${sr:getRoundedValue(lineItem.retailPrice*lineItem.quantity)}" var="retailPrice" type="currency" currencySymbol="$" />
												<c:choose>
												<c:when test="${ lineItem.isSale eq 'true'}">
												<strike id="retailPrice_${lineItem.sequenceId}">${retailPrice}</strike> <b id="price_${lineItem.sequenceId}">${SpSaleprice}</b>
												</c:when>
												<c:otherwise>
												<b id="price_${lineItem.sequenceId}">${SpSaleprice}</b>
												</c:otherwise>
												</c:choose>
												<input type="hidden" id="real_price_${lineItem.sequenceId}" value="${lineItem.price}"/>
										  </c:when>
										   <c:when test="${lineItem.isSale  && cookie['Facebook'] ne null && discountprogram eq null}">
												<fmt:formatNumber value="${lineItem.price}" var="SpSaleprice" type="currency" currencySymbol="$" />
												<fmt:formatNumber value="${sr:getRoundedValue(lineItem.retailPrice-(lineItem.retailPrice*percent)/100)}" var="retailPrice" type="currency" currencySymbol="$" />
												<fmt:formatNumber value="${sr:getRoundedValue(lineItem.retailPrice*lineItem.quantity)}" var="retailPrice" type="currency" currencySymbol="$" />
												<c:choose>
												<c:when test="${ lineItem.isSale eq 'true'}">
												<strike id="retailPrice_${lineItem.sequenceId}" >${retailPrice}</strike> <b id="price_${lineItem.sequenceId}">${SpSaleprice}</b>
												</c:when>
												<c:otherwise>
												<b id="price_${lineItem.sequenceId}">${SpSaleprice}</b>
												</c:otherwise>
												</c:choose>
												<input type="hidden" id="real_price_${lineItem.sequenceId}" value="${lineItem.price}"/>
										  </c:when>
										  
										  <c:when test="${!lineItem.isSale}">
										  	<c:choose>
										  		<c:when test = "${vendorNameInLower eq saleBrandNames}">
										  			<fmt:formatNumber pattern="0.00" value="${sr:getRoundedValue(lineItem.price-(lineItem.price*discountprogram.discountPercentage)/100)}" var="SpSaleprice" type="currency" currencySymbol="$" />
													<fmt:formatNumber value="${sr:getRoundedValue(lineItem.retailPrice-(lineItem.retailPrice*percent)/100)}" var="retailPrice" type="currency" currencySymbol="$" />
													<fmt:formatNumber value="${sr:getRoundedValue(lineItem.retailPrice*lineItem.quantity)}" var="retailPrice" type="currency" currencySymbol="$" />
													<c:choose>
													<c:when test="${ lineItem.isSale eq 'true'}">
													<strike id="retailPrice_${lineItem.sequenceId}" >${retailPrice}</strike> <b id="price_${lineItem.sequenceId}" class="incart_check">${SpSaleprice}</b>
													</c:when>
													<c:otherwise>
													<strike id="retailPrice_${lineItem.sequenceId}" >${retailPrice}</strike> <b id="price_${lineItem.sequenceId}" class="incart_check">${SpSaleprice}</b>
													</c:otherwise>
													</c:choose>
													<input type="hidden" id="real_price_${lineItem.sequenceId}" value="${retailPrice}"/>
										  		</c:when>
										  		<c:otherwise>
										  			<fmt:formatNumber value="${lineItem.price}" var="SpSaleprice" type="currency" currencySymbol="$" />
													<fmt:formatNumber value="${sr:getRoundedValue(lineItem.retailPrice-(lineItem.retailPrice*percent)/100)}" var="retailPrice" type="currency" currencySymbol="$" />
													<fmt:formatNumber value="${sr:getRoundedValue(lineItem.retailPrice*lineItem.quantity)}" var="retailPrice" type="currency" currencySymbol="$" />
													<c:choose>
													<c:when test="${ lineItem.isSale eq 'true'}">
													<strike id="retailPrice_${lineItem.sequenceId}" >${retailPrice}</strike> <b id="price_${lineItem.sequenceId}">${SpSaleprice}</b>
													</c:when>
													<c:otherwise>
													<b id="price_${lineItem.sequenceId}">${SpSaleprice}</b>
													</c:otherwise>
													</c:choose>
													<input type="hidden" id="real_price_${lineItem.sequenceId}" value="${lineItem.price}"/>
										  		</c:otherwise>
										  	</c:choose>
										  </c:when>
										  <c:otherwise>
										  <fmt:formatNumber value="${lineItem.price}" var="SpSaleprice" type="currency" currencySymbol="$" />
													<fmt:formatNumber value="${sr:getRoundedValue(lineItem.retailPrice-(lineItem.retailPrice*percent)/100)}" var="retailPrice" type="currency" currencySymbol="$" />
													<fmt:formatNumber value="${sr:getRoundedValue(lineItem.retailPrice*lineItem.quantity)}" var="retailPrice" type="currency" currencySymbol="$" />
													<c:choose>
													<c:when test="${ lineItem.isSale eq 'true'}">
													<strike id="retailPrice_${lineItem.sequenceId}" >${retailPrice}</strike> <b id="price_${lineItem.sequenceId}">${SpSaleprice}</b>
													</c:when>
													<c:otherwise>
													<b id="price_${lineItem.sequenceId}">${SpSaleprice}</b>
													</c:otherwise>
													</c:choose>
													<input type="hidden" id="real_price_${lineItem.sequenceId}" value="${lineItem.price}"/>
										  </c:otherwise>
						              </c:choose>
              
                                </div>
                                <code class="close_cart_shoe" onclick="removeItem(${lineItem.sequenceId});"></code>
                                <div class="clearall"></div>
                            </div><!--cart_shoe_list-->
                            <div class="cart_shoe_details">
                                <div class="size_color_labels">
                                   <label class="color">COLOR:</label>
                                   <label>U.S. SIZE:</label>
                                    <label>QTY:</label>
                                 </div>
                                <div class="custom_select cus_select color_select_dd">
                                            <div class="select">
                                                 <p  id="color_${lineItem.sequenceId}"  class="country" name="${lineItem.colorName}">${fn:toUpperCase(lineItem.colorName)}</p>
                                                <span class="custom_drop_nav"></span>
                                            </div>
                                             <select id="colors_${lineItem.sequenceId}" name="color" data-default="3" class="custom_select_value_act" onchange="onColorChange(this.options[this.selectedIndex],${lineItem.sequenceId})">
				                            <c:forEach items="${CART_DETAILS.inventory[lineItem.productId]}" var="colorVariant">
				                            	<c:if test="${colorVariant.colorId==lineItem.colorId}">
				                            		<option name="${colorVariant.colorName}" value="${colorVariant.colorId}" selected="selected">${fn:toUpperCase(colorVariant.colorName)}</option>
				                            	</c:if>
				                            	<c:if test="${colorVariant.colorId!=lineItem.colorId}">
				                            		<option name="${colorVariant.colorName}"  value="${colorVariant.colorId}">${fn:toUpperCase(colorVariant.colorName)}</option>
				                            	</c:if>
				                            </c:forEach>
                          				  </select>
                                 </div><!-- custome_select--->
                                <div class="custom_select cus_select">
                                            <div class="select">
                                                <p  id="size_${lineItem.sequenceId}" class="country">${fn:replace(lineItem.size,'.0','')}</p>
                                                <span class="custom_drop_nav"></span>
                                            </div>
                                           <select id="sizes_${lineItem.sequenceId}" name="size" data-default="${lineItem.size}" class="custom_select_value_act" onchange="onSizeChange(this.options[this.selectedIndex],${lineItem.sequenceId})">
												<c:forEach items="${CART_DETAILS.inventory[lineItem.productId]}" var="colorVariant">
													<c:if test="${colorVariant.colorId==lineItem.colorId}">
														<c:forEach items="${colorVariant.sizeVariants}" var="sizeVariant">
															<fmt:formatNumber var="size" value="${sizeVariant.size}" pattern="#.#"/>
															<c:if test="${sizeVariant.productVariantId==lineItem.productVariantId}">
																<option value="${sizeVariant.productVariantId}" selected="selected">${fn:replace(size,'.0','')}</option>
															</c:if>
															<c:if test="${sizeVariant.productVariantId!=lineItem.productVariantId}">
																<option value="${sizeVariant.productVariantId}">${fn:replace(size,'.0','')}</option>
															</c:if>
														</c:forEach>
													</c:if>
												</c:forEach>                              
                           				 </select>
                                 </div><!-- custome_select--->
                                <div class="custom_select cus_select">
                                            <div class="select">
                                                <p  id="quantity_${lineItem.sequenceId}" class="country">${lineItem.quantity}</p>
                                                <span class="custom_drop_nav"></span>
                                            </div>
                                             <select id="quantities_${lineItem.sequenceId}" name="size" data-default="3" class="custom_select_value_act" onchange="onQuantityChange(this.options[this.selectedIndex],${lineItem.sequenceId})">
			 								<c:forEach items="${CART_DETAILS.inventory[lineItem.productId]}" var="colorVariant">
												<c:if test="${colorVariant.colorId==lineItem.colorId}">
													<c:forEach items="${colorVariant.sizeVariants}" var="sizeVariant">
														<c:if test="${sizeVariant.productVariantId==lineItem.productVariantId}">
															<c:forEach var="quantity" begin="1" end="${sizeVariant.quantity}">
																<c:if test="${quantity==lineItem.quantity}">
																	<option value="${quantity}" selected="selected">${quantity}</option>
																</c:if>
																<c:if test="${quantity!=lineItem.quantity}">
																	<option value="${quantity}">${quantity}</option>
																</c:if>
															</c:forEach>
														</c:if>											
													</c:forEach>
												</c:if>
											</c:forEach>                              
                          				  </select>
                                 </div><!-- custome_select--->
              				</div><!-- cart_shoe_details -->
                            <div class="clearall"></div>
                        </li>
                         <li style=" display: none;" id="message_${lineItem.sequenceId}">

	                        <div class="error_oh_snap_holder">
	
	                        <img width="120" border="0" height="90" src="${productImageURL}" id="outOfStackimage_1" />
	
	                        <h3> OH SNAP. WE'RE OUT.</h3>
	
							<h1> GOTTA CHECKOUT QUICKER THAN THAT!<br/>SOME ONE ELSE GOT IT BEFORE YOU.</h1>
	
							<div class="clearall"></div>
							
							<div class="checkbox_outstk" id="notify_thanks_${lineItem.sequenceId}" onclick="sendReqForWaitList(${lineItem.sequenceId})">
							
							<font id="inStock_${lineItem.sequenceId}">Email you when we get more In-Stock?</font>
							 <span class="notify" id="notify_${lineItem.sequenceId}" onclick="sendReqForWaitList(${lineItem.sequenceId})">NOTIFY ME</span>
							
							<font style="display: none;" id="thanks_${lineItem.sequenceId}">Thanks! We'll let you know when we get more in.</font>
							
							</div>
							
							</div>

                        </li>
                        
                        </c:forEach>
                       
                    </ul>
             <div class="subtotal_holder"style="display: block;" >
                    
                     <c:choose>
                    <c:when test="${CART_DETAILS.shoppingCart.savings!=0.0}">
                    <div id="final_savings" style="display: block;">
	                     <label class="saving">SAVINGS:</label>
	                     <fmt:formatNumber var="savings" value="${CART_DETAILS.shoppingCart.savings}" pattern="0.00"/>
	                    <span class="sav_price" id="savingAmount">-$${savings}</span>
	                 </div>
                    </c:when>
                    <c:otherwise>
                      <div id="final_savings" style="display: none;">
	                     <label class="saving">SAVINGS:</label>
	                     <fmt:formatNumber var="savings" value="${CART_DETAILS.shoppingCart.savings}" pattern="0.00"/>
	                    <span class="sav_price" id="savingAmount">-$${savings}</span>
	                 </div>
                    </c:otherwise>
                    </c:choose>
                    <label class="saving" id="facebookbonus" style="display:none">FACEBOOK BONUS:</label>
	            	<span class="saving" id="bonus_price" style="display:none"></span>
                   	<fmt:formatNumber var="subTotal" value="${CART_DETAILS.shoppingCart.subTotal}" pattern="0.00"/>
                   	<label>SUBTOTAL:</label>
			        <span  id="cartSubtotal">$${subTotal}</span>
			        <input type="hidden" id="subTotal" value="${subTotal}"/>
                    <div class="clearall"></div>
             </div>
             
             <div class="total_holder" style="display: none;">
                    
                     <c:choose>
                    <c:when test="${CART_DETAILS.shoppingCart.savings!=0.0}">
                    <div id="final_savings" style="display: block;">
	                     <label class="saving">SAVINGS:</label>
	                     <fmt:formatNumber var="savings" value="${CART_DETAILS.shoppingCart.savings}" pattern="0.00"/>
	                    <span class="sav_price" id="final_savingAmount">-$${savings}</span>
	                 </div>
                    </c:when>
                    <c:otherwise>
                      <div id="final_savings" style="display: none;">
	                     <label class="saving">SAVINGS:</label>
	                     <fmt:formatNumber var="savings" value="${CART_DETAILS.shoppingCart.savings}" pattern="0.00"/>
	                    <span class="sav_price" id="final_savingAmount">-$${savings}</span>
	                 </div>
                    </c:otherwise>
                    </c:choose>
                    
                    <label class="saving" id="final_facebookbonus" style="display:none">FACEBOOK BONUS:</label>
	            	<span class="saving" id="final_bonus_price" style="display:none"></span>
                    <label class="saving">SUBTOTAL:</label>
             		<fmt:formatNumber var="subTotal" value="${CART_DETAILS.shoppingCart.subTotal}" pattern="0.00"/>
                    <span class="sav_price" id="shipcartSubtotal">$${subTotal}</span>
                    <div id="shippingPrice_holder" style="display: none;"> 
                    <label class="saving">SHIPPING:</label>
                    <fmt:formatNumber var="shippingPrice" value="${CHECKOUT_DETAILS.shippingPrice}" pattern="0.00"/>
                    <span class="sav_price" id="shippingPrice">$${shippingPrice}</span>
                	 </div>
                  	<div class="cart_total_holder">
                    <label>TOTAL:</label>
                    <fmt:formatNumber var="finalTotal" value="${CHECKOUT_DETAILS.grandTotal}" pattern="0.00"/>
                    <span id="final_finalTotal">$${finalTotal}</span>
                    </div>
                    <div class="clearall"></div>
                     <input type="hidden"  id="solestruck_magazine" value="${Solestruck_Magazine}"/>
             </div>
</div>