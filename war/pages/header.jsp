<%@page import="com.veroniqa.frontend.util.VeroniqaConstants" %><%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %><%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %><% String imageURL=VeroniqaConstants.IMAGE_URL;%><div id="header_wrapper"><div id="header"><a href="/" id="logo"></a><%-- <a href="/salefaq/"><code class="sale_need_help" id="saleFAQPage" style="display:none;"></code></a> --%><div id="header_right_nav"><div class="search_box"> <code></code><input name="search" id="searchText" type="text" class="search_input_box" placeholder="Type to search" autocorrect = "off"  autocapitalize="off"/><a class="go_btn" style="cursor:pointer"  id="textSearchButton" ></a></div><div class="clear_both"></div><span id="shipping"><span>*Free Shipping Worldwide.</span><span id="box_popup_header_act" class="seedetails">See Details.</span></span><div class="clear_both"></div></div><div class="clear_both"></div></div></div><div class="global_topbtm_scroll"><span class="scroll_top scroll_top_act"></span><span class="scroll_btm scroll_btm_act"></span></div><div class="NYE popup_pos popup_pos_act kgpopup_act"><div class="NYE_popup_close popup_close_act"></div></div><div class="free_shipping_popup popup_pos popup_pos_act kgpopup_act"><div class="login_popup_close popup_close_act"></div><div class="login_holder free_shipping_holder"><h2>FREE SHIPPING DETAILS</h2><div class="free_shipping_content"><h3>US and Canada Shipping</h3><ul><li>FREE FedEx Ground shipping for all US and Canada orders.</li><li>FedEx Express 2-Day Shipping for US orders: $9.99.</li><li>FedEx Express Overnight Shipping for US orders: $25.</li><li><a href="<%=VeroniqaConstants.LIVE_FRONTEND_URL%>shipping/" style="color: black;">Click here</a> for more information.</li></ul><h3>International Shipping</h3><ul><li>FREE standard shipping on all international orders $199 USD or more.</li><li>Standard international shipping is by FedEx International Economy or USPS Priority International (United States Postal Service).</li><li>Customs taxes/duty are not included in the order and must be paid by customer upon delivery.</li><li><a href="<%=VeroniqaConstants.LIVE_FRONTEND_URL%>international/" style="color: black;">Click here</a> for more information about international shipping costs and estimated arrival times.</li></ul><div class="clear_both"></div></div></div></div>