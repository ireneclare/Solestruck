<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd"><html xmlns="http://www.w3.org/1999/xhtml"><%@pageimport="com.veroniqa.frontend.util.VeroniqaConstants" %><%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %><%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %><head><meta name="googlebot" content="noindex"/><meta name="robots" content="noindex,nofollow"/><meta http-equiv="Content-Type" content="text/html; charset=utf-8" /><title>check_out</title><link rel="shortcut icon" href="http://images2.solestruck.com/favicon.ico" type="image/x-icon" /><link rel="icon" href="http://images2.solestruck.com/favicon.ico" type="image/x-icon" /><link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_URL()%>reset.css" /><link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_URL()%>style.css" /><script type="text/javascript" src="<%=VeroniqaConstants.JS_URL()%>jquery-1.4.4.min.js"></script><script type="text/javascript" src="<%=VeroniqaConstants.JS_URL()%>FieldValidator.js"></script><script type="text/javascript" src="<%=VeroniqaConstants.JS_URL()%>actions.js"></script><script type="text/javascript" src="<%=VeroniqaConstants.JS_URL()%>ui.core.js"></script><script type="text/javascript" src="<%=VeroniqaConstants.JS_URL()%>ui.slider.js"></script><script type="text/javascript" src="<%=VeroniqaConstants.JS_URL()%>checkout_js.js"></script><script language="JavaScript" type="text/javascript" src="<%=VeroniqaConstants.JS_URL()%>dd_menu.js"></script><script type="text/javascript" src="<%=VeroniqaConstants.JS_URL()%>itemdetail.js"></script><% String imageURL="http://images2.solestruck.com/"; %></head><body><div id="wrapper"><div id="header_wrapper"><div id="header"><a href="/homePage.htm?brandid=${brandid}" id="logo"></a><div id="header_right_nav"><ul><li><a class="view_wishlist_popup" href="#">Wishlist</a></li><li class="seperator"> | </li><li><a class="view_cart_popup" href="#">Shopping Cart</a></li><li class="seperator"> | </li><li><a class="login_popup" href="#">Login</a></li></ul><a id="box_popup_header" href="">Free Shipping Worldwide </a><a class="see_details" href="#">See Details</a></div><!-- header_right_nav --><div class="clear_both"></div></div><!-- header --><div class="global_nav"><ul><li class="select_nav"><a class="drop_down women" href="#" style="cursor:pointer" onclick="getProductsListForCategory('women')">WOMEN</a><div class="level1" id="women"><ul><c:forEach items="${vendorlst}" var="vendor"><li><a href='javascript:void(0);' onclick="getProductListForVendor('${vendor.key.id}','${vendor.name}')">${vendor.name}</a></li></c:forEach></ul></div><!-- level1 --></li><li class="select_nav"><a class="drop_down" href="#" style="cursor:pointer" onclick="getProductsListForCategory('men')">MEN<span></span></a><div class="level1" id="men"><ul><c:forEach items="${vendorlst}" var="vendor"><li><a href='javascript:void(0);' onclick="getProductListForVendor('${vendor.key.id}','${vendor.name}')">${vendor.name}</a></li></c:forEach></ul></div><!-- level1 --></li><li><a class="no_background" href="#" onclick="getNewArrival()" style="cursor:pointer">NEW</a></li><li class="select_nav"><a class="drop_down" href="#" style="cursor:pointer">BLOG<span></span></a><div class="level1" id="blog"><ul><li><a href="http://blog.solestruck.com/">Womens Blog</a></li><li><a href="http://blog.solestruck.com/men/">Mens Blog</a></li></ul></div><!-- level1 --></li><li class="select_nav"><a class="drop_down" href="#" style="cursor:pointer" onclick="getSaleItems()">SALE<span></span></a><div class="level1" id="sale"><ul><c:forEach items="${sizes}" var="size"><li><a href='javascript:void(0);' onclick="getSaleItemsBySize('${size.key.id}')">${size.name}</a></li></c:forEach></ul></div><!-- level1 --></li><li><a class="no_background" href="#">LOOKBOOK</a></li><li class="select_nav"><a class="drop_down"id="last_menu" href="#" style="cursor:pointer" onclick="getVintageProduct('vintage')">VINTAGE<span></span></a><div class="level1" id="vintage"><ul><c:forEach items="${sizes}" var="size"><li><a href='javascript:void(0);' onclick="getVintageItemsBySize('vintage','${size.key.id}')">${size.name}</a></li></c:forEach></ul></div><!-- level1 --></li></ul></div><!-- gloabal_nav --><div class="search_box"><input name="search" type="text" class="search_input_box" /><a style="cursor:pointer">GO</a></div><!--  search_box --><div class="clear_both"></div></div><!-- header_wrapper --><div class="clear_both"></div><div class="content_holder"><div class="payment_process_holder"><h2>Complete Your Purchase</h2><div class="check_out_sign_in"><div class="checkout_process_tab" id="sigin_tab"></div><h2>Login / Signup</h2><form action="" method="post" name="check_out_sign_in" id="formSignup" class="check_out_signin_holder"><input name="customer" type="radio" value="newCust" class="check_out_radio_button" id="new"  /><label>New Customer</label><input name="customer" type="radio" value="return" class="check_out_radio_button" id="return"  /><label>Returning Customer</label><div class="clear_both"></div><div id="new_customer"><h4>Your Email Address:</h4> <i> This is a required field.</i><input name="nemail" type="text" id="nemail" class="check_out_inputfield" /><h4>Choose Your Password:</h4> <i> This is a required field.</i><input name="npassword" type="password" id="npassword" class="check_out_inputfield" onselect="checkEmailAvailability()"/><h4>Confirm Your Password:</h4> <i> This is a required field.</i><input name="nconfirm_password" type="password" id="nconfirm_password" class="check_out_inputfield"/></div> <!-- new_customer --><div id="returning_customer"><h3>Your Email Address:</h3> <i> This is a required field.</i><input name="email" id="email"type="text" class="check_out_inputfield"/><h4>Your Password:</h4> <i> This is a required field.</i><input name="password" id="password" type="password" class="check_out_inputfield"/></div><div class="paymnet_gateway"><h3>Please Select Payment Option:</h3><input name="pay_method" type="radio" id="pay_method" value="paypal" class="payment_radio_button" /><span class="pay_pal"></span><input name="pay_method" type="radio" id="pay_method" value="cardtype" class="payment_radio_button"  /><span class="card_type"></span><div class="clear_both"></div></div><!-- paymnet_gateway --><h3>Solestruck Email Alerts:</h3><input name="email_allerts" type="checkbox" value="" id="email_allerts" class="email_alerts_check_box" /><label class="email_alerts_label">Yes, please sign me up for e-mail alerts.</label><div class="clear_both"></div><input name="check_out" type="button" class="proceed_checkout_btn" value="PROCEED TO CHECKOUT" id="sign_in" onclick="toConfirmCustStatus()"/></form></div><!-- check_out_sign_in --><div class="check_out_billing"><div class="checkout_process_tab" id="checkout_billing_tab"></div><h2>Your Billing Information</h2><form action="" method="post" name="check_out_sign_in" class="check_out_signin_holder"><div class="first_name"><h3 >First Name</h3><input name="firstname" id="firstname" type="text" class="check_out_short_inputfield"/></div><div class="first_name"><h3 >Last Name</h3><input name="lastname" id="lastname" type="text" class="check_out_short_inputfield"/></div><div class="clear_both"></div><h3>Address:</h3><input name="address1" id="address1" type="text" class="check_out_inputfield no_margin"/><input name="address2" id="address2" type="text" class="check_out_inputfield no_margin "/><div class="short_input_fields"><h3 >City</h3><input name="city" id="city" type="text" class="check_out_short_inputfield"/></div><div class="short_input_fields"><h3 >State</h3><div class="custom_dropdown custom_dropdown_280 "><select name="state" id="state" class="popup_input_field_280" style="width:256px" value="State"><span class="custom_drop_nav"></span><option>Select the State</option><option value="AA">AA</option><option value="AE">AE</option><option value="AP">AP</option><option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AS">American Samoa</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">Dist. of Columbia</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="GU">Guam</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MH">Marshall Islands</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana </option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PW">Palau</option><option value="PA">Pennsylvania</option><option value="PR">Puerto Rico</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VI">Virgin Islands(U.S)</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option></select></div><!-- custom_dropdown --></div><div class="clear_both"></div><div class="short_input_fields"><h3 >Zip Code</h3><input name="zipCode" id="zipCode" type="text" class="check_out_short_inputfield"/></div><div class="short_input_fields"><h3>Country</h3><div class="custom_dropdown custom_dropdown_280 "><select name="country" id="country" class="popup_input_field_280" style="width:256px" value="Country"><span class="custom_drop_nav"></span><option>Select the Country</option><option  value="US">USA</option></select></div><!-- custom_dropdown --></div><div class="clear_both"></div><div class="paymnet_gateway_return_customer" ><h3>Is Your Billing Address The Same As Your Shipping Address?</h3><input name="address_verify" type="radio"  value="yes" class="billing_radio_button"  /><span> Yes </span><input name="address_verify" type="radio" value="no" class="billing_radio_button"  /><span> No</span><div class="clear_both"></div></div><!-- paymnet_gateway --><div class="clear_both"></div><input name="back" type="button"  value="BACK" class="checkout_back_btn" id="billing_back"/><input name="check_out" value="PROCEED TO CHECKOUT" type="button" class="proceed_checkout_btn" id="billing" onclick="divertFunction()"/></form></div><!-- check_out_billing --><div class="check_out_shipping"><div class="checkout_process_tab" id="checkout_shipping_tab"></div><h2>Your Shipping Information</h2><form action="" method="post" name="check_out_sign_in" class="check_out_signin_holder"><div class="first_name"><h3 >First Name</h3><input name="sfirstName" id="sfirstName" type="text" class="check_out_short_inputfield"/></div><div class="first_name"><h3 >Last Name</h3><input name="slastName" id="slastName" type="text" class="check_out_short_inputfield"/></div><div class="clear_both"></div><h3>Address:</h3><input name="saddress1" id="saddress1" type="text" class="check_out_inputfield no_margin"/><input name="saddress2" id="saddress2" type="text" class="check_out_inputfield no_margin "/><div class="short_input_fields"><h3 >City</h3><input name="scity" id="scity" type="text" class="check_out_short_inputfield"/></div><div class="short_input_fields"><h3 >State</h3><div class="custom_dropdown custom_dropdown_280 "><select name="sstate" id="sstate" class="popup_input_field_280" style="width:256px" value="State"><span class="custom_drop_nav"></span><option>Select the State</option><option value="AA">AA</option><option value="AE">AE</option><option value="AP">AP</option><option value="AL">Alabama</option><option value="AK">Alaska</option><option value="AS">American Samoa</option><option value="AZ">Arizona</option><option value="AR">Arkansas</option><option value="CA">California</option><option value="CO">Colorado</option><option value="CT">Connecticut</option><option value="DE">Delaware</option><option value="DC">Dist. of Columbia</option><option value="FL">Florida</option><option value="GA">Georgia</option><option value="GU">Guam</option><option value="HI">Hawaii</option><option value="ID">Idaho</option><option value="IL">Illinois</option><option value="IN">Indiana</option><option value="IA">Iowa</option><option value="KS">Kansas</option><option value="KY">Kentucky</option><option value="LA">Louisiana</option><option value="ME">Maine</option><option value="MH">Marshall Islands</option><option value="MD">Maryland</option><option value="MA">Massachusetts</option><option value="MI">Michigan</option><option value="MN">Minnesota</option><option value="MS">Mississippi</option><option value="MO">Missouri</option><option value="MT">Montana </option><option value="NE">Nebraska</option><option value="NV">Nevada</option><option value="NH">New Hampshire</option><option value="NJ">New Jersey</option><option value="NM">New Mexico</option><option value="NY">New York</option><option value="NC">North Carolina</option><option value="ND">North Dakota</option><option value="OH">Ohio</option><option value="OK">Oklahoma</option><option value="OR">Oregon</option><option value="PW">Palau</option><option value="PA">Pennsylvania</option><option value="PR">Puerto Rico</option><option value="RI">Rhode Island</option><option value="SC">South Carolina</option><option value="SD">South Dakota</option><option value="TN">Tennessee</option><option value="TX">Texas</option><option value="UT">Utah</option><option value="VT">Vermont</option><option value="VI">Virgin Islands(U.S)</option><option value="VA">Virginia</option><option value="WA">Washington</option><option value="WV">West Virginia</option><option value="WI">Wisconsin</option><option value="WY">Wyoming</option></select></div><!-- custom_dropdown --></div><div class="clear_both"></div><div class="short_input_fields"><h3>Zip Code</h3><input name="szipcode" id="szipcode" type="text" class="check_out_short_inputfield"/></div><div class="short_input_fields"><h3>Country</h3><div class="custom_dropdown custom_dropdown_280 "><select name="scountry" id="scountry" class="popup_input_field_280" style="width:256px" value="Country"><span class="custom_drop_nav"></span><option>Select the Country</option><option  value="US">USA</option></select></div><!-- custom_dropdown --></div><div class="clear_both"></div><div class="cart_shipping_payment_gateway"><h3>Please Choose A Shipping Method:</h3><input name="shipping_method" type="radio"  value="Standard Shipping" class="shipping_radio_button" onclick="setShippingType()" /><span> Standard Shipping:</span><span class="price">FREE on all orders over $99!</span><span>1-5 Business Days</span><div class="clear_both"></div><input name="shipping_method" type="radio" value="Express Shipping" class="shipping_radio_button"  onclick="setShippingType()"/><span> Express Shipping:</span><span class="price">$17.00</span><span>1-5 Business Days</span><div class="clear_both"></div><input name="shipping_method" type="radio" value="Standard Overnight" class="shipping_radio_button"  onclick="setShippingType()"/><span> Standard Overnight:</span><span class="price">$30.00</span><span>1-5 Business Days</span>																		 <div class="clear_both"></div><input name="shipping_method" type="radio" value="" class="payment_radio_button"  /><span class="require_signature"> Require signature for delivery?</span><div class="clear_both"></div><h4>Express Shipping and Standard Overnight deliver Monday - Friday only.</h4></div><!-- cart_shipping_payment_gateway --><div class="clear_both"></div><h3>Do Earth A Favor and Ship My Shoes In A Re-Used Box.</h3><input name="card_type" type="radio" value="yes" id="boxType1" class="payment_radio_button" onclick="boxTypeSelection()" /><span class="earth_favour">Yes Ship In Re-Used Box</span><input name="card_type" type="radio" value="no" id="boxType2" class="payment_radio_button"  onclick="boxTypeSelection()"/><span class="earth_favour">No, I Hate Trees</span><div class="clear_both"></div><input name="back" type="button" class="checkout_back_btn" id="shipping_back" value="BACK"/><input name="check_out" type="button" class="proceed_checkout_btn" id="shipping" value="PROCEED TO CHECKOUT" /></form></div><!-- check_out_shipping --><div class="check_out_payment" id="cardDiv" style="display:none"><div class="checkout_process_tab" id="checkout_payment_tab"></div><h2>Please Enter Your Credit Card Info:</h2><form action="" method="post" name="check_out_sign_in" class="check_out_signin_holder"><h3>Enter The Name On The Card:</h3><input name="cardName" id="cardName" type="text" class="check_out_inputfield"/><h3>Enter Your Card Number:</h3><input name="cardNumber" id="cardNumber" type="text" class="check_out_inputfield"/><div class="select_card_type"><h3>Select Card Type & Expiration Date:</h3><input name="select_card_type" type="radio" id="" value="Visa" class="card_type_radio_button" /><span class="card_img" id="visa"></span><input name="select_card_type" type="radio" id="" value="MasterCard" class="card_type_radio_button" /><span class="card_img" id="master_card"></span><input name="select_card_type" type="radio" id="" value="Discover" class="card_type_radio_button" /><span class="card_img" id="discover_card"></span><input name="select_card_type" type="radio" id="" value="AmericanExpress" class="card_type_radio_button" /><span class="card_img" id="american_express"></span><div class="expiry_date"><div class="custom_dropdown drop_down_89"><select name="expmonth" id="expmonth" class="select_checkout_small"><option value="01">January</option><option value="02">February</option><option value="03">March</option><option value="04">April</option><option value="05">May</option><option value="06">June</option><option value="07">July</option><option value="08">August</option><option value="09">September</option><option value="10">October</option><option value="11">November</option><option value="12">December</option></select></div><!-- custom_dropdown --><div class="custom_dropdown drop_down_89"><select name="expyear" id="expyear" class="select_checkout_small"><option value="2010">2010</option><option value="2011">2011</option><option value="2012">2012</option><option value="2013">2013</option><option value="2014">2014</option><option value="2015">2015</option><option value="2016">2016</option><option value="2017">2017</option><option value="2018">2018</option><option value="2019">2019</option><option value="2020">2020</option></select></div><!-- custom_dropdown --></div><!-- expiry_date --><div class="clear_both"></div></div><!-- select_card_type --><div class="clear_both"></div><h3>Please Enter The CCV Number. <i>(3 digit number on back)</i></h3><input name="ccv" id="ccv" type="text" class="check_out_inputfield"/><input name="back" type="button" class="checkout_back_btn" id="payment_back" value="BACK"/><input name="check_out" type="button" class="proceed_checkout_btn" id="payment" onclick="displayAddress()" value="PROCEED TO CHECKOUT"/></form></div><!-- check_out_payment --><div class="check_out_finish_paypal"><div class="checkout_process_tab" id="alldone_tab"></div><h2>Please Make Sure Your Info Is Correct:</h2><div class="paypal_billing_info" id="billingDiv"><h3>Billing Information: <a href="#" class="billing_edit">Edit</a></h3><ul id="billingUl"></ul></div><!-- paypal_billing_info --><div class="paypal_shipping_info" id="shippingDiv"><h3>Shipping Information: <a href="#" class="shipping_edit">Edit</a></h3><ul id="shippingUl"></ul></div><!-- paypal_shipping_info --><div class="clear_both"></div><div class=" payment_type"><h3>Payment Type: <a href="#" class="payment_edit">Edit</a></h3><span id="paypal_payment"> </span></div><!-- payment_type --><input name="back" type="button" class="checkout_back_btn" id="alldone_back"  value="BACK"/><input name="check_out" type="button" class="proceed_checkout_btn" onclick="paymentType()" value="PROCEED TO CHECKOUT" /></div><!-- check_out_finish_paypal --><div class="check_out_finish_credit"><div class="checkout_process_tab" id="alldone_tab"></div><h2>Please Make Sure Your Info Is Correct:</h2><div class="paypal_billing_info"><h3>Billing Information: <a href="#">Edit</a></h3><ul><li></li><li>1234 S. Normal Street</li><li>Apt. 2</li><li>Portland, Oregon 97202</li><li>United States</li></ul></div><!-- paypal_billing_info --><div class="paypal_shipping_info"><h3>Shipping Information: <a href="#">Edit</a></h3><ul><li>John Doe</li><li>1234 S. Normal Street</li><li>Apt. 2</li><li>Portland, Oregon 97202</li><li>United States</li></ul></div><!-- paypal_shipping_info --><div class="clear_both"></div><div class=" payment_type"><h3>Payment Type: <a href="#">Edit</a></h3><span id="credit_payment"> </span></div><!-- payment_type --><input name="back" type="button" class="checkout_back_btn"/>	                                                        			    <input name="check_out" type="button" class="proceed_checkout_btn" onclick=""/></div><!-- check_out_finish_credit --><div class="clear_both"></div></div><!-- payment_process_holder --><div class="checkout_your_shoppingcart"><h2>Your Shopping Cart</h2><ul><c:forEach items="${shoppingCart.itemsAddedInCart}" var="orderLinedto"><li><c:set var="vendorName" value="${orderLinedto.vendorname}"/><c:set var="productName" value="${orderLinedto.productname}"/><c:set var="vendorNameL" value="${fn:replace(vendorName,' ','-')}"/><c:set var="colorName" value="${orderLinedto.color}"/><input type="hidden" id ="productid${orderLinedto.orderlineid}" value="${orderLinedto.productid}"/><input type="hidden" id="price${orderLinedto.orderlineid}" value="${orderLinedto.price}" /><div><img src="<%=imageURL %>${fn:toLowerCase(vendorNameL)}-shoes/${fn:replace(vendorName," ","-")}-shoes-${fn:replace(productName," ","-")}-(${fn:replace(colorName," ","-")})-010205.jpg" alt="" /></div><!-- checkout_shoppingcart_shoes --><div class="checkout_shoppingcart_shoename"><table><tr><td><h3>${orderLinedto.vendorname}</h3></td></tr><tr><td><h3>${orderLinedto.productname}</h3></td></tr></table></div><!-- checkout_shoppingcart_shoename --><div class="checkout_remove_shoes"></div><div class="clear_both"></div><div class="custom_dropdown drop_down_68"><select name="size" id="size${orderLinedto.orderlineid}"  value="Size" onchange="getSizeWisePrice('${orderLinedto.orderlineid}',this.value);"><span class="custom_drop_nav"></span><c:forEach items="${orderLinedto.sizequantitypricelst}" var="sizelist" varStatus="status" ><option value="${status.count}" <c:if test="${orderLinedto.size eq sizelist.size}">selected="true"</c:if>>${sizelist.size}</option></c:forEach></select></div><!-- custom_dropdown --><div class="custom_dropdown drop_down_68"><select name="color" id="color${orderLinedto.orderlineid}"  value="Color" onchange="getOrderLineDetailsForColor('${orderLinedto.orderlineid}')"><span class="custom_drop_nav"></span><c:forEach items="${orderLinedto.colorMap}" var="color"><option value="${color.key}" <c:if test="${color.value eq orderLinedto.color }">selected="true"</c:if>>${color.value}</option></c:forEach></select></div><!-- custom_dropdown --><div id="qty"><select name="Qty" id="qty${orderLinedto.orderlineid}" value="Qty" onchange="displayTotalPrice($('#price${orderLinedto.orderlineid}').val(),'${orderLinedto.orderlineid}')"><span class="custom_drop_nav"></span><c:forEach begin="1" end="${orderLinedto.qty}" var="i"><option value="${i}" <c:if test="${orderLinedto.qty eq orderLinedto.selectedQty }">selected="true"</c:if>>${i}</option></c:forEach></select></div><!-- custom_dropdown --><div id="sizeprizelstContainer${orderLinedto.orderlineid}" ><c:forEach items="${orderLinedto.sizequantitypricelst}" var="sizeqtyprice" varStatus="status"><input type="hidden" id="prices${orderLinedto.orderlineid}${status.count}" value="${sizeqtyprice.price}"><input type="hidden" id="qtys${orderLinedto.orderlineid}${status.count}" value="${sizeqtyprice.quantity}"></c:forEach></div><span class="shpping_cart_price" id="tot_pricediv${orderLinedto.orderlineid}">$ ${orderLinedto.price}</span><div class="clear_both"></div></li><input type="hidden" id="price${orderLinedto.orderlineid}" value="${orderLinedto.price}" /></c:forEach><li><h3>SUBTOTAL:</h3><span class="sub_total" id="cartSubtotal"> ${shoppingCart.subtotal}</span><div class="clear_both"></div></li></ul></div><!-- your_shoppingcart_holder --><div class="clear_both"></div></div><!-- content_holder --><div class="clear_both"></div><div class="footer_wrapper"><div class="footer_nav"><div class="footer_help"><h2>HELP</h2><ul><li><div class="clear_both"></div><div class="send_to_friend"><a href="#" class="view_send_us_message">E-Mail Us</a></div><div class="clear_both"></div></li><li><a href="/shipping.htm">Shipping</a></li><li><a href="/returns.htm">Returns</a></li><li><a href="/international.htm">International</a></li><li><a href="/faq.htm">Faq</a></li></ul></div><!-- footer_help --><div class="footer_about"><h2>ABOUT</h2><ul><li><a href="/privacypolicy.htm">Privacy Policy</a></li><li><a href="/jobs.htm">Jobs</a></li><li><a>Bio</a></li></ul></div><!-- footer_about --><div class="footer_contact"><h2>CONTACT</h2><ul><li>1-800-494-1260</li><li>M-F 7am - 5pm PST</li><li>E-Mail Us</li><li>Twitter</li></ul></div><!-- footer_contact --><div class="footer_visit"><h2>VISIT</h2><ul><li>Solestruck Store</li><li>718 NW 11th Ave.</li><li>Portland, OR 97209</li></ul></div><!-- footer_visit --></div><!-- footer_nav --><div class="footer_email"><h2>SOLESTRUCK EMAILS</h2><input name="email" type="text" class="email_input_box" /><input name="email_us" value="GO" type="button" class="email_send_btn" /><div class="clear_both"></div><div class="copy_right"><p>Solestruck � 2010 All rights reserved.</p></div><!-- copy_right --></div><!-- footer_email --><div class="clear_both"></div></div><!-- footer _wrapper --><div class="clear_both"></div></div><!-- wrapper --><div class="login_form"><div class="login_popup_close"></div><div class="login_holder"><h2>Login To Your Account</h2><form action="" method="post" name="login" class="login_form_holder"><label class="login_inputfields">Your Email Address:</label><input name="email" type="text" class="input_box" id="email" /><label class="login_password">Choose Your Password:</label><input name="password" type="text" class="input_box" id="password" /><input name="keep_me_signin" type="checkbox" class="login_check_box" id="keep_me_sign_in" value="" /><lable>Keep me signed in</lable><input name="sign_in" type="button" class="login_form_signin_btn"/></form><div class="forget_password"><h2>Forget your password? </h2><a>Click here to reset your password.</a><p>We'll send you an email with instructions.</p></div><!-- forget_password --><div class="not_receiving_mail"><h2>Not receiving the email?</h2><span>Add <a>customerservice@solestruck.com</a></span><p>to your approved senders list and then try again.</p></div><!-- not_receiving_mail --><div class="register_today"><h2>Don't have an account? <a>Register today</a> to receive:</h2><ul><li>A Faster Checkout</li><li>Exclusive E-Mail Offers</li><li>Other Top Secret Special Features</li></ul></div><!-- register_today --><div class="clear_both"></div></div><!-- login_holder --></div><!-- login_form --><div class="message_form"><div class="login_popup_close"></div><div class="message_holder"><h2>Send Us A Message.</h2><form action="" method="post" name="login" class="message_form_holder"><label class="login_inputfields">Your Email Address:</label><input name="email" type="text" class="input_box_message" id="email" /><label class="how_help_field">How Can We Help You?</label><textarea name="help" cols="" rows="" class="message_textarea"></textarea><label class="order_number">Order Number If You Have One:</label><input name="order_number" type="text" class="input_box_message" id="order_number" /><input name="sign_in" type="button" class="send_message_btn" value="Send Message"/></form></div><!-- message_holder --></div><!-- message_form --><div class="wish_list_form"><div class="login_popup_close"></div><div class="whislist_holder"><h2>Login To See Your Wishlist</h2><form action="" method="post" name="login" class="whislist_form_holder"><label class="login_inputfields">Your Email Address:</label><input name="email" type="text" class="input_box" id="email" /><label class="login_password">Choose Your Password:</label><input name="password" type="text" class="input_box" id="password" /><input name="keep_me_signin" type="checkbox" class="login_check_box" id="keep_me_sign_in" value="" /><lable>Keep me signed in</lable><input name="sign_in" type="button" class="login_form_signin_btn"/></form><div class="forget_password"><h2>Forget your password? </h2><a>Click here to reset your password.</a><p>We'll send you an email with instructions.</p></div><!-- forget_password --><div class="not_receiving_mail"><h2>Not receiving the email?</h2><span>Add <a>customerservice@solestruck.com</a></span><p>to your approved senders list and then try again.</p></div><!-- not_receiving_mail --><div class="register_today"><h2>Don't have an account? <a>Register today</a> to receive:</h2><ul><li>A Faster Checkout</li><li>Exclusive E-Mail Offers</li><li>Other Top Secret Special Features</li></ul></div><!-- register_today --><div class="clear_both"></div></div><!-- whislist_holder --></div><!-- wish_list_form --><!-- This is added for Shopping Cart by YES--><div class="cart_popup"><div class="shoping_cart_popup_close"></div><div class="cart_popup_holder"><div id="popup_content"><jsp:include page="/pages/ShoppingCartPopUp.jsp"/></div></div><!-- cart_popup_holder --></div><!-- cart_popup --><!-- Upto here This is added for Shopping Cart by YES--><div class="wish_list_popup "><div class="shoping_cart_popup_close"></div><div class="wish_list_popup_holder"><h2>Your Wishlist</h2><div class="cart_header"><ul><li class="cart_header_item">Item</li><li class="cart_header_item_details">Details</li><li class="cart_header_price">Price</li><li>REMOVE</li></ul><div class="clear_both"></div></div><!-- cart_header --><div class="cart_display_holder"><ul><li><div class="shoe_thumnail"><a></a><h3>Jeffrey Campbell</h3><p>Ninety Nine Shoe Name</p></div><!-- shoe_thumnail --><div class="cart_whislist_details"><div class="custom_dropdown"><input name="Color" type="text" class="size_color_select_fields select_popup" value="Color"/><span class="custom_drop_nav"></span><ul><li>Color</li><li>red</li><li>blue</li></ul></div><!-- custom_dropdown --><div class="custom_dropdown"><input name="Size" type="text" class="size_color_select_fields select_popup" value="Size"/><span class="custom_drop_nav"></span><ul><li>1</li><li>2</li><li>3</li></ul></div><!-- custom_dropdown --><div class="clear_both"></div><input name="quantity" type="text" class="item_details_inputbox" value="Qty" /></div><!-- cart_shoe_details --><div class="whislist_shoe_price"><span>$279.95</span><a>Add to Cart</a></div><!-- whislist_shoe_price --><div class="whish_list_remove_item"></div><!-- remove_item --><div class="clear_both"></div></li><li><div class="shoe_thumnail"><a></a><h3>Jeffrey Campbell</h3><p>Ninety Nine Shoe Name</p></div><!-- shoe_thumnail --><div class="cart_whislist_details"><div class="custom_dropdown"><input name="Color" type="text" class="size_color_select_fields select_popup" value="Color"/><span class="custom_drop_nav"></span><ul><li>Color</li><li>red</li><li>blue</li></ul></div><!-- custom_dropdown --><div class="custom_dropdown"><input name="Size" type="text" class="size_color_select_fields select_popup" value="Size"/><span class="custom_drop_nav"></span><ul><li>1</li><li>2</li><li>3</li></ul></div><!-- custom_dropdown --><div class="clear_both"></div><input name="quantity" type="text" class="item_details_inputbox" value="Qty" /></div><!-- cart_shoe_details --><div class="whislist_shoe_price"><span>$279.95</span><a>Add to Cart</a></div><!-- whislist_shoe_price --><div class="whish_list_remove_item"></div><!-- remove_item --><div class="clear_both"></div></li><li><div class="shoe_thumnail"><a></a><h3>Jeffrey Campbell</h3><p>Ninety Nine Shoe Name</p></div><!-- shoe_thumnail --><div class="cart_whislist_details"><div class="custom_dropdown"><input name="Color" type="text" class="size_color_select_fields select_popup" value="Color"/><span class="custom_drop_nav"></span><ul><li>Color</li><li>red</li><li>blue</li></ul></div><!-- custom_dropdown --><div class="custom_dropdown"><input name="Size" type="text" class="size_color_select_fields select_popup" value="Size"/><span class="custom_drop_nav"></span><ul><li>1</li><li>2</li><li>3</li></ul></div><!-- custom_dropdown --><div class="clear_both"></div><input name="quantity" type="text" class="item_details_inputbox" value="Qty" /></div><!-- cart_shoe_details --><div class="whislist_shoe_price"><span>$279.95</span><a>Add to Cart</a></div><!-- whislist_shoe_price --><div class="whish_list_remove_item"></div><!-- remove_item --><div class="clear_both"></div></li><div class="clear_both"></div></ul></div><!-- cart_display_holder --><div class="clear_both"></div><div class="cart_submit_area"><a class="go_to_checkout">go to checkout</a><a class="continue_shopping">Continue shopping</a></div><!-- cart_submit_area --><div class="clear_both"></div></div><!-- cart_popup_holder --></div><!-- cart_popup --><div id="box_popup_header" class="see_details_popup"><div class="tabl"><div class="shipping_arrow"></div><!-- shipping_arrow --><div class="cont1"><span><b>Free shipping</b> for all repeat US customers on any order </span><br /><span><b>Free shipping</b> on all orders $99+ </span><br /><span><b>Free shipping</b> on all international orders over $199+ </span><br /><span><b>$6.95</b> shipping for US orders below $99 </span><br /><span><b>Returns:</b> Just $5.95 shipping for US return orders </span><br /></div><!-- cont1 --></div><!-- tab1 --></div><!-- see_details_popup --><div id="backgroundPopup"></div><div class="send_message_popup"><div class="dont_see_your_size_popup_close"></div><div class="send_message_popup_holder"><h2>Send Us A Message.</h2><form action="send_us_message" method="get" class="send_message_form"><label>Your Email Address:</label> <input name="email" type="text"class="input_box custom_size_popup_input" /> <label>How Can WeHelp You?</label> <textarea name="your_message" cols="" rows=""class="popup_text_area"></textarea> <label>Order Number If YouHave One:</label> <input name="order_number" type="text"class="input_box custom_size_popup_input" /> <inputname="send_request" type="button" class="send_message_btn" value="Send Message"/></form></div><script type="text/javascript">var _gaq = _gaq || [];_gaq.push(['_setAccount', '<%=VeroniqaConstants.getAnalyticsID()%>']);_gaq.push(['_trackPageview']);(function() {var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);})();</script></body></html>