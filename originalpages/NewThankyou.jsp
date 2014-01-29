<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page import="com.veroniqa.frontend.util.VeroniqaConstants"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<head>

<meta name="googlebot" content="index"/>
<meta name="robots" content="index,follow"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>thank_you</title>

<link rel="shortcut icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" />
<link rel="icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" />

<link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_URL()%>reset.css" />
<link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_URL()%>style.css" />
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL()%>jquery-1.4.4.min.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL()%>FieldValidator.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL()%>actions.js"></script>
<script type="text/javascript">

  var _gaq = _gaq || [];
  _gaq.push(['_setAccount', '<%=VeroniqaConstants.getAnalyticsID()%>']);
  _gaq.push(['_trackPageview']);

  (function() {
    var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
    ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
    var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
  })();

</script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL()%>thankyou.js"></script>
</head>
<% String imageURL=VeroniqaConstants.IMAGE_URL;%>

<body>
	<div id="wrapper">
    	 					
                     
	 <tiles:insertAttribute name="header"/>
      <tiles:insertAttribute name="topmenumain"/>
    
               
                            	<div class="content_holder">
                    				<div class="thank_for_order">
                                    	<h2>Thank You For Your Order!</h2>
                                        	<div class="order_confirmation_mail">
                                            	<h3>Hey ${customer.firstName },</h3>
                                                	<p>A confirmation of this order will be 
													   emailed to: <a href="#">${customer.emailId}</a><br />
													   Your tracking number will be sent to 
													   your emaill address when item ships.
                                            </div><!-- order_confirmation_mail -->
                                            	<div class="order_information">
                                                	<h3>Order Information</h3>
                                                    	<p>Order Id : <b id="orderId">${ShoppingBag.orderId}</b> <br />
                                                        	
                                                        </p>
                                                </div><!-- order_information -->
                                            <div class=" clear_both"></div>
                                    </div><!-- thank_for_order -->             	
            	 <h2>The Items You Purchased:</h2>
                 	<div class="cart_header">
                    	<ul>
                        	<li class="purchased_item_header">ITEM</li>
                            <li class="purchased_item_description_header">DESCRIPTION</li>
                            <li class="purchased_price_header">Price</li>
                            <li class="purchased_item_details_header">ITEM DETAILS</li>
                            <li class="purchased_item_total_price_header">TOTAL ITEM PRICE</li>
                        </ul>
                        <div class="clear_both"></div>
                    </div><!-- cart_header -->
                    	<div class="shopping_cart_holder">
                            	<ul>
                            	<c:forEach items="${ShoppingBag.itemsAddedInCart}" var="i" >
                            			<c:set var="vendorName" value="${i.vendorname}"></c:set>
                                        <c:set var="vendorNameL" value="${fn:replace(vendorName,' ','-')}"/>
                                        <c:set var="colorName" value="${i.color}"></c:set>
                                        <c:set var="productName" value="${i.productname}"></c:set>
                                	<li>
                                    	<div class="shoping_cart_shoe_thumnail">
                                        	<a><img src="<%=imageURL%>${fn:toLowerCase(vendorNameL)}-shoes/${fn:replace(vendorName," ","-")}-shoes-${fn:replace(productName," ","-")}-(${fn:replace(colorName," ","-")})-010507.jpg"</img></a>
                                            	
                                        </div><!-- shoe_thumnail -->
                                            <div class="purchased_item_description">
                                            	<span>${i.vendorname} <br/>
                                            	 ${i.productname}<br/></span>
                                            </div><!-- purchased_item_description -->
                                            
                                            <div class="purchased_item_price">
                                            	<span>$<fmt:formatNumber type="currency" value="${i.price }" pattern="#,###.00" var="iPrice"/>${iPrice} </span>
                                            </div><!-- purchased_item_price -->
                                            <div class="purchased_items_details">
                                               				 <div >
                                                                <span ></span>
                                                            	<ul>
                                                               <li style="font-family:;font-size:10px;font-weight:bold;"><b><label style="font-family:Arial;font-size:10px;"> Color:</label>   ${i.color }</b></li>
                                                                	
                                                                </ul>
                                                            </div><!-- custom_dropdown -->
                                                            </br>
                                                             <div >
                                                            	<ul>
                                                                <li style="font-family:Arial;font-size:10px;font-weight:bold;"><label style="font-family:Arial;font-size:10px;"> Size:</label>  ${i.size }</b></li>
                                                                	
                                                                </ul>
                                                            </div>
                                                            </br>
                                                             <div >
                                                              
                                                            	<ul>
                                                                <li style="font-family:Arial;font-size:10px;font-weight:bold;"><label style="font-family:Arial;font-size:10px;"> Qty:</label>  ${i.selectedQty }</b></li>
                                                                	
                                                                </ul>
                                                                
                                                            </div>
                                                            </br>
                                                            <!-- custom_dropdown -->
                                               <div class="clear_both"></div>
                                              
                                            </div><!-- cart_shoe_details -->
                                            	
                                                
                                                	<div class="purchased_item_total_price">
                                                    	<span>$<fmt:formatNumber type="currency" value="${i.totalPrice }" pattern="#,###.00" var="totPrice"/>${totPrice}</span>
                                                    </div><!-- remove_item -->
                                        
                                        	<div class="clear_both"></div>
                                    </li>
                                    </c:forEach>
                            
                                  
                               <div class="clear_both"></div>
                               <li class="purchased_item_total_cost" style="border-bottom:1px solid #fff !important;">shipping  :$<fmt:formatNumber type="currency" value="${ShoppingBag.shippingPrice }" pattern="#,##0.00" var="shipPrice"/>${shipPrice}</li>
                               <li class="purchased_item_total_cost" style="border-bottom:1px solid #fff !important;">discount  :$<fmt:formatNumber type="currency" value="${ShoppingBag.discountAmount}" pattern="#,##0.00" var="discountPrice"/>${discountPrice}</li>
                               <li class="purchased_item_total_cost">total  :$<fmt:formatNumber type="currency" value="${ShoppingBag.grandTotal }" pattern="#,###.00" var="grandTotal"/>${grandTotal}</li>
                                </ul>
                               
                            </div><!-- cart_display_holder -->
                             <div class="clear_both"></div>
                            
                            
                             <div class="perchased_order_receipt">
                                    	<a href="#" class="purchased_order_print_receipt" onclick="window.open('/getOrderInvoice.htm?orderId=${ShoppingBag.orderId}');">Print receipt</a>
                                        <a href="#" class="purchased_order_download_receipt" onclick="window.open('/getOrderInvoice.htm?orderId=${ShoppingBag.orderId}');">Download receipt</a>
                                </div><!-- cart_submit_area -->
                            <div class="clear_both"></div>
        	
                              <tiles:insertAttribute name="footer"/>       
                                    
							</div><!-- content_holder -->                            
                            <div class="clear_both"></div>
           						
    </div><!-- wrapper -->
	
    <tiles:insertAttribute name="PopUp"/> 
	<div id="backgroundPopup"></div>
	
  	 <script type="text/javascript">
			var gaJsHost = (("https:" == document.location.protocol)
			? "https://ssl." : "http://www.");
			document.write("\<script src='" + gaJsHost
			+ "google-analytics.com/ga.js' type='text/javascript'>\<\/script>" );
			
			 
	</script>


<script type="text/javascript">



	var pageTracker = _gat._getTracker("UA-25993189-1");
	pageTracker._initData();
	pageTracker._trackPageview();
	pageTracker._trackPageLoadTime();
	
	pageTracker._addTrans(
			
			"${ShoppingBag.orderId}", 
			"${totPrice}",
			"${shipPrice}",
			"${city}",
			"${state}",
			"${country}"
		
	<c:forEach items="${ShoppingBag.itemsAddedInCart}" var="i" >

	pageTracker._addItem(
			
			"${ShoppingBag.orderId}",
			"${i.colorid}",
			"${i.productname}",
			"${i.vendorname}",
			"${i.price }",
			"${i.selectedQty }"
		);
		pageTracker._trackTrans();
		</c:forEach>
		
		
	</script>


<script type='text/javascript'>
var __wtw_lucky_setup_key = {};
__wtw_lucky_setup_key.id = '1328';
__wtw_lucky_setup_key.key = 's7WF5zuMpvHZGPhc8TerakbkGkH4a9yJ';

    (function() {
        var wa = document.createElement('script'); wa.type = 'text/javascript'; wa.async = true;
        wa.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://ca179456') + '.luckyorange.com/w.js';
        var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(wa, s);
      })();
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



</body>
</html>
