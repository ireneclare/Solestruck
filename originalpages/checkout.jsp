
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ page import="com.veroniqa.frontend.util.VeroniqaConstants"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@taglib prefix="fmt" uri="http://java.sun.com/jsp/jstl/fmt" %>
<%@ taglib prefix="sr" uri="http://solestruck.com/resources" %>
<%@ page import="com.face4j.facebook.Client" %>
<%@ page import="com.face4j.facebook.factory.FacebookFactory" %>
<%@ page import="com.face4j.facebook.Facebook" %>
<%@ page import="com.face4j.facebook.OAuthAccessToken" %>
<%@ page import="com.face4j.facebook.enums.Permission" %>
<%@ page import="com.face4j.facebook.enums.HttpClientType" %>
<%@ page import="com.face4j.facebook.enums.Display" %>
<%@page import="com.veroniqa.frontend.util.EnvironmentUtil" %>

<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
<title>Checkout-SignIn</title>
<link type="text/css" href='https://fonts.googleapis.com/css?family=Permanent+Marker' rel="stylesheet" />
<link rel="icon" href="https://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" />
<link href='https://fonts.googleapis.com/css?family=Karla:400,700italic' rel='stylesheet' type='text/css' />
<link href='https://fonts.googleapis.com/css?family=PT+Sans+Narrow:400,700' rel='stylesheet' type='text/css'/>
<link type="text/css" href="<%=VeroniqaConstants.CSS_SECURED_URL() %>new_reset.css" rel="stylesheet" />
<link type="text/css" href="<%=VeroniqaConstants.CSS_SECURED_URL() %>new_checkout.css" rel="stylesheet" />

<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>jquery-1.9.0.min.js"></script>
<%-- <script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>actions.js"></script> --%>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>new_checkout.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>shoppingcartcheckout.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>tooltip.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>jquery.json-2.3.min.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>jquery.history.js"></script>


<input type="hidden" id="fbLoginErrorMessage" value="${sessionScope.fbLoginErrorMessage}">
<script type="text/javascript">
	var gaJsHost = (("https:" == document.location.protocol)? "https://ssl." : "http://www.");
	document.write("\<script src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'>\<\/script>" );
</script>
<script type="text/javascript">
var pageTracker = _gat._getTracker("<%=VeroniqaConstants.getAnalyticsID()%>");
var fBVar='${fromga}';
if(fBVar=='facebook')
{
pageTracker._trackEvent('login type','Facebook login','${email}',1);
}
else
{
pageTracker._trackEvent('login type','Solestruck login','${email}',1);
}
</script>
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
<body>

<!--  This is added for YES Brand Launch Sale -->

<c:set var="discountprogram" value="${sr:getDiscountProgramForFB()}"></c:set>
<c:set var="discountTypeName" value="${discountprogram.programTypeName}"></c:set>
<input type="hidden" id="discountTypeName" value="${discountTypeName }"></input>
<c:set var="brandList" value="${sr:getBrandListForSale()}"></c:set>
<c:forEach var="brandid" items="${brandList}">
	<c:set var="saleBrandNames" value="${brandid}"></c:set>
	<input type="hidden" id="saleBrandNames" value="${brandid}"></input>
</c:forEach>
<input type="hidden" id="thresholdSize" value="${sr:getThresholdSize()}"/>
<c:set var="thresholdLimitsAndValues" value="${sr:getThresholdValues()}"></c:set>
<c:forEach var="thresholdValues" items="${thresholdLimitsAndValues}" varStatus="status">
	<input type="hidden" id="minLimits_${status.count}" value="${thresholdValues.thresholdMin}">
	<input type="hidden" id="maxLimits_${status.count}" value="${thresholdValues.thresholdMax}">
	<input type="hidden" id="discountValues_${status.count}" value="${thresholdValues.thresholdDiscount}"> 
</c:forEach>
<!--  This is added for YES Brand Launch Sale -->

<c:set var="imageServerURL" value="https://commondatastorage.googleapis.com/images2.solestruck.com"/>
 <c:set var="firstShippingMethod" value=""/>
<c:set var="discountprogram" value="${sr:getDiscountProgramForFB()}"></c:set>
	<c:if test="${discountprogram eq null}">
		<input type="hidden" id="discountExists" value="false"></input>
	</c:if>
	<c:if test="${discountprogram ne null}">
	<input type="hidden" id="fbsale_discount_percentage" value="${discountprogram.discountPercentage}"/>
	<input type="hidden" id="discountExists" value="true"></input>
	</c:if>

	<div class="top_bar">
    		<div class="top_headder">
            		<a class="logo" href="/redirectToNonSecurePage.htm?rdirectURL=/"></a>
                    <%-- <code class="sale_need_help check_faq_act" id="saleFAQ" style="display:none;"></code> --%>
                    <span class="help_holder"><b>NEED HELP?</b> Click Here To Email Us 24/7 <br /> Call Us @ 1.800.494.1260 |  M-F 7am - 5 pm Pacific</span>
                    <div class="clearall"></div>
            </div><!--top_headder-->
            <input type='hidden' id='gAnalyticsId' value='<%=VeroniqaConstants.getAnalyticsID()%>' />
    </div><!--top_bar-->
	<div class="wrapper">
	<%
               		 String redirectURL ="";
	                if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("STAGING"))
	                {
	             	   /* Client client = new Client("355325974547159", "2bff70115b3ad2bd7d2d61559d750f65");   */
	             	   Client client = new Client("360291777383552", "3352c5aa3b2e0b7ac1cd7423eeebd77e");
	            	   FacebookFactory facebookFactory = new FacebookFactory(client,HttpClientType.URL_FETCH_SERVICE); 
	            	   redirectURL = facebookFactory.getRedirectURL("https://testing.solestruck.com/renderPage.htm?page=redirect", Display.POPUP, Permission.EMAIL, Permission.OFFLINE_ACCESS);
	                }
	                else if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("LIVE"))
	                {
	             	   Client client = new Client("421260994576981", "e4ed5353c4e302f41d3b2d7516a17f4d");                	
	            	   FacebookFactory facebookFactory = new FacebookFactory(client,HttpClientType.URL_FETCH_SERVICE); 
	            	   redirectURL = facebookFactory.getRedirectURL("https://www.solestruck.com/renderPage.htm?page=redirect", Display.POPUP, Permission.EMAIL, Permission.OFFLINE_ACCESS);
	                }
	                else if(EnvironmentUtil.getEnvironmentValue("AppMode").equals("DEV"))
	                {
	                	Client client = new Client("102732789875589", "629718271b12cb4a039e7b99f70985a6");                	
	            		FacebookFactory facebookFactory = new FacebookFactory(client,HttpClientType.URL_FETCH_SERVICE); 
	            		redirectURL = facebookFactory.getRedirectURL("http://localhost:9999/renderPage.htm?page=redirect",Display.POPUP,Permission.EMAIL,Permission.OFFLINE_ACCESS,Permission.PUBLISH_STREAM);
	            			
	                }
		%>
    		<div class="chk_left">
            		<div class="email_checkout">
                        <h2>ENTER EMAIL TO CHECKOUT</h2>
                        <i id="fbErrorMsg" class="fberror" style="display:none;">There was a problem connecting to Facebook. Please verify your Facebook email<br/> address and try again.</i>
        				<div class="clear_both"></div>
                        <input type="text" class="inputbox_field tooltip_f" id="email_firstStep"  name="" title="Email" original-title="Email" autocomplete="off" value="Email" />
                         <a href="javascript:void(0)" class="cart_go" id="textSearchButton"></a>
                        <code class="" id="email_firstStep_error"></code>
                        <div class="or_line"><b>OR</b></div>
                        <a href="javascript:void(0)" class="check_fb_btn facebook_checkout_act fb_btn" onclick="loadingForFbCo('checkout');window.open('<%=redirectURL%>','FacebookLogin',
                        'left=370,top=180,width=630,height=325,toolbar=1,resizable=0');">Sign in with Facebook</a>
                        
                    </div><!--email_checkout-->
                    <div class="signin_checkout">
                        <h2>SIGN IN TO CHECKOUT</h2>
                        <span id="sign_validate_error"></span>
                        <input type="text" class="inputbox_field_signin tooltip_f" id="userEmailId" name="" title="Email" original-title="Email" autocomplete="off"  value=""/>
                         <code class="error_icon" id="emailerror"></code>
                        <input type="password" class="inputbox_field_pwd tooltip_f"  name="" title="Password" id="pass_new" original-title="Password" value=""/>
                         <code class="error_icon" id="passworderror"></code>
                        <span class="check_sign_forpwd">Forgot Password?</span>
                        <span class="pwd_signin" id="signin_pwd" style="font-weight:bold" ></span>
                        <span class="pwd1_signin" id="signin_pwd1" >ABC</span>
                       <div class="check_btn_holder">
                       		<a href="javascript:void(0)" class="signin_btn signin_checkout_act yell_btn">SIGN IN</a>
                            <div class="or"><b>OR</b></div>
                            <a href="#" class="facebook_btn fb_btn" onclick="loadingForFbCo('checkout');window.open('<%=redirectURL%>','FacebookLogin',
                        'left=370,top=180,width=630,height=325,toolbar=1,resizable=0');">Sign in with Facebook</a>
                            <div class="clear_both"></div>
                      </div><!--check_btn_holder-->
                    </div><!--signin_checkout-->
                    
                    <div class="shipping_holder">
                    	 <div id="swag_holder" style="display:none">
                        	<h3>Want some rad Solestruck swag?</h3>
                        	<h2>Check out these goodies! Available for a super-limited time, so ...</h2>
                        	<h4>GET ON IT, BABES!</h4>
                        	<ul>
                        		<li class="omgshoes"><h1>IPHONE 4 CASE</h1></li>
                        		<li class="shoeaddict middle"><h1>IPHONE 5 CASE</h1></li>
                        		<li class="cancoozy"><h1>OTTER WAX</h1></li>
                        	</ul>
                        	
                        	<div class="custom_select cus_select swag_color_select_dd">
                        		<div class="select">
                        			<p class="country" id="alert4">SELECT STYLE</p>
                        			<span class="custom_drop_nav"></span>
                        		</div>
                        		<select class="custom_select_value_act" name="" id="case4">
                        			<option value="">SELECT STYLE</option>
                        			<option value="">#OMGSHOES</option>
                        			<option value="">#SHOEADDICT</option>
                        		</select>
                        	</div>
                        	
                        	<div class="custom_select cus_select swag_color_select_dd">
                        		<div class="select">
                        			<p class="country" id="alert5">SELECT STYLE</p>
                        			<span class="custom_drop_nav"></span>
                        		</div>
                        		<select class="custom_select_value_act" name="" id="case5">
                        			<option value="">SELECT STYLE</option>
                        			<option value="">#OMGSHOES</option>
                        			<option value="">#SHOEADDICT</option>
                        		</select>
                        	</div>
                        	<span class="cankoozie_text">LEATHER CARE KIT</span>
                        	<div class="clear_both"></div>
                        	<span class="omgshoes_span brwn_btn" onclick="addItemToCheckoutShoppingCart('iphone4')">+ CART ($5)</span>
                        	<span class="shoeaddict_span brwn_btn" onclick="addItemToCheckoutShoppingCart('iphone5')">+ CART ($5)</span>
                        	<span class="cancoozy_span brwn_btn" onclick="addItemToCheckoutShoppingCart('koozie')">+ CART ($${KoozieDTO.retailPrice})</span>
                        </div>
                        <div class="check_yourinfo"style="border-bottom :1px solid #dcdcdc">
                            <h5>YOUR INFO</h5>
                            <h4>1. ACCOUNT INFO</h4>
                            <c:choose>
	                      	<c:when test="${CHECKOUT_DETAILS!='' && CHECKOUT_DETAILS!='null' }">
	                      	
                      		 <div id="existsuserid" style="display: block;">
                      			 <input type="hidden" id="customerId" name="customerId" value="${CHECKOUT_DETAILS.customerDetailDTO.customerId}"/>
                            	<input type="text" class="inputbox_field tooltip_f" id="existing_email"  name="" title="Email" original-title="Email" autocomplete="off" value="${CHECKOUT_DETAILS.customerDetailDTO.email}" readonly="readonly"/>
                         		<code class=""></code>
                         	 </div>
                         	 <div id="newuserid" style="display: none;">
	                      		<input type="hidden" id="customerId" name="customerId" value=""/>
		                      	<input type="text" class="inputbox_field_signin tooltip_f"  name="" title="Email" id="new_email" original-title="Email"  autocomplete="off" value="" readonly="readonly"/>
                             	<code class="" id="yourinfo_email_error"></code>
                             	<input type="password" class="inputbox_field_pwd tooltip_f"  name="" title="Create Password" value="" original-title="Create Password" id="password_Account"/>
	                            <code class="" id="password_Account_error"></code>
	                            <div class="pwd_type_holder">
	                            	<span class="pwd" id="new_pass1"></span>
	                            <span class="pwd1" id="new_pass2" >ABC</span>
	                            </div>
                             </div>
	                      	</c:when>
	                      	<c:otherwise>
	                      	 <div id="newuserid" style="display: block;">
	                      		<input type="hidden" id="customerId" name="customerId" value=""/>
		                      	<input type="text" class="inputbox_field_signin tooltip_f"  name="" title="Email" id="new_email" autocomplete="off" original-title="Email" value=""/>
                             	<code class="" id="yourinfo_email_error"></code>
                             	<input type="password" class="inputbox_field_pwd tooltip_f"  name="" title="Create Password" value="" original-title="Create Password" id="password_Account"/>
	                            <div class="pwd_type_holder">
	                            	<span class="pwd" id="new_pass1"></span>
	                            <span class="pwd1" id="new_pass2" >ABC</span>
	                            </div>>
                             </div>
	                      	 <div id="existsuserid" style="display: none;">
                            	<input type="text" class="inputbox_field tooltip_f" id="existing_email"  name="" title="Email" autocomplete="off" value="${CHECKOUT_DETAILS.customerDetailDTO.email}" readonly="readonly"/>
                         		<code class=""></code>
                         	 </div>
	                      	
	                      	</c:otherwise>
                      		</c:choose>
                            <h4>2. BILLING ADDRESS</h4>
                            <div>
                              <c:choose>
                               <c:when test="${CHECKOUT_DETAILS!=null && CHECKOUT_DETAILS.customerDetailDTO.billingAddress!=null}">
	                            <c:choose>
			                      	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.firstName!=null && CHECKOUT_DETAILS.customerDetailDTO.billingAddress.firstName!=''}">
				                    	 <input type="text" class="input_left tooltip_f"  name=""  id="billinginfo_firstName"  original-title="First Name" value="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.firstName}"/>
			                             <code class="" id="billinginfo_firstName_error"></code>
			                    	</c:when>
			                   		<c:otherwise>
				                    	 <input type="text" class="input_left tooltip_f"  name=""  id="billinginfo_firstName" original-title="First Name" value="First Name"/>
			                             <code class="" id="billinginfo_firstName_error"></code>
			                    	</c:otherwise>
		                   		 </c:choose>
		                   		 <c:choose>
			                      	 <c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.lastName!=null && CHECKOUT_DETAILS.customerDetailDTO.billingAddress.lastName!=''}">
				                         <input type="text" class="input_right tooltip_f"  name="" id="billinginfo_lastName" original-title="Last Name" value="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.lastName}"/>
		                                 <code class="" id="billinginfo_lastName_error"></code>
		                                 <div class="clearall"></div>
			                         </c:when>
			                    	<c:otherwise>
					                    <input type="text" class="input_right tooltip_f"  name="" id="billinginfo_lastName" original-title="Last Name" value="Last Name"/>
		                                <code class="" id="billinginfo_lastName_error"></code>
		                                <div class="clearall"></div>
			                    	</c:otherwise>
	                    		</c:choose>
	                  		    <c:choose>
			                      	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street1!=null && CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street1!=''}">
			                        	<input type="text"  class="inputbox_field_yourinfo tooltip_f" id="billinginfo_addr1"  name="" original-title="Address1" value="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street1}"/>
	                                	<code class="" id="billinginfo_addr1_error"></code>
			                        </c:when>
				                    <c:otherwise>
				                    	<input type="text"  class="inputbox_field_yourinfo tooltip_f" id="billinginfo_addr1"  name="" original-title="Address1"  value="Address1"/>
	                                	<code class="" id="billinginfo_addr1_error"></code>
				                    </c:otherwise>
	                   			</c:choose>
	                   			<c:choose>
			                      	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street2!=null && CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street2!=''}">
			                        	<input type="text"  class="inputbox_field_yourinfo tooltip_f" id="billinginfo_addr2"  name="" original-title="Address2"  value="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street2}"/>
	                                	<code class="" id="billinginfo_addr1_error"></code>
			                        </c:when>
				                    <c:otherwise>
				                    	<input type="text"  class="inputbox_field_yourinfo tooltip_f" id="billinginfo_addr2"  name="" original-title="Address2"  value="Address2"/>
	                                	<code class="" id="billinginfo_addr1_error"></code>
				                    </c:otherwise>
	                   			</c:choose>
	                   			<div class="custom_select">
	                            <div class="select">
	                            	<c:choose>
	                            	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.countryName!=null && CHECKOUT_DETAILS.customerDetailDTO.billingAddress.countryName!=''}">
	                                <p class="country "  id="biliinginfo_country" original-title="Country"  title="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.country}">${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.countryName}</p>
	                                </c:when>
	                                <c:otherwise>
	                                <p class="country" original-title="Country" id="biliinginfo_country" title='US'>USA</p>
	                                </c:otherwise>
	                                </c:choose>
	                                <span class="custom_drop_nav"></span>
	                            </div>
	                            <select id="lBillingCountry" name="billCountry" data-default="Austria"  class="custom_select_value_act">
		                            <option value="00">Select Your Country</option>
									<c:forEach items="${countryMap}" var="country">
		                        	<c:choose>
			                        	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.country==country.value.countryCode}">
			                        		<option value="${country.value.countryCode}" selected="selected">${country.value.countryName}</option>
			                        	</c:when>
		                        	<c:otherwise>
		                        		<option value="${country.value.countryCode}">${country.value.countryName}</option>
		                        	</c:otherwise>
		                        	</c:choose>
									</c:forEach>
	                            </select>
	                            
	                         </div><!---shipping-country--->
	                         <code class="" id="biliinginfo_country_error" ></code>
	                        
	                          <c:choose>
		                        <c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street3!=null && CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street3!=''}">
		                       		 <input type="text" class="input_last_rg tooltip_f"  name="" original-title="City"  id="billinginfo_city" value="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street3}"/>
                                	 <code class="" id="billinginfo_city_error"></code>	
		                        </c:when>
		                        <c:otherwise>
		                        	<input type="text" class="input_last_rg tooltip_f"  name=""  id="billinginfo_city" original-title="City" value="City"/>
                                	 <code class="" id="billinginfo_city_error"></code>	
		                        </c:otherwise>
	                         </c:choose>
	                          <c:set var="stateAvailable" value="true"/>
	                         
	                    	 <c:if test="${countryMap[CHECKOUT_DETAILS.customerDetailDTO.billingAddress.country].stateList==null}">
	                    		 <c:set var="stateAvailable" value="false"/>
	                    	 </c:if>
	                    	 
	                    	 <div class="custom_select"  id="billinginfo_div" <c:if test="${stateAvailable==false}"> style="display:none;"</c:if>>
	                            <div class="select" id="billing_select" >
	                            	<c:if test="${stateAvailable==true}">
	                            	<p class="country" id="biilinginfo_state" original-title="State" title="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.state}">${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.stateName}</p>
	                            	</c:if>
	                            	<c:if test="${stateAvailable==false}">
	                            	<p class="country" original-title="State" id="biilinginfo_state">SELECT YOUR STATE</p>
	                            	</c:if>
	                                <span class="custom_drop_nav"></span>
	                            </div>
	                            <select id="select_billinginfo_state" name="State" data-default='Austria'  class="custom_select_value_act">
	                            	<option value="00">
									</option>
	                            	<c:if test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.state!=null && CHECKOUT_DETAILS.customerDetailDTO.billingAddress.state!=''}">
	                            	<c:forEach  items="${countryMap[CHECKOUT_DETAILS.customerDetailDTO.billingAddress.country].stateList}" var="mystate">
	                            	<c:choose>
	                            	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.state==mystate.stateCode}">
	                            	<option value="${mystate.stateCode}" selected="selected">${mystate.stateName}</option>
	                            	</c:when>
	                            	<c:otherwise>
	                            	<option value="${mystate.stateCode}">${mystate.stateName}</option>
	                            	</c:otherwise>
	                            	</c:choose>
	                           		 </c:forEach>	
								</c:if>
	                            </select>
	                            <input type="hidden" id="billStateCode" value="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.state}"/>
	                         </div> 
	                           <code class="error_icon2" id="biilinginfo_state_error"></code>
	                           <c:choose>
		                         <c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.province!=null && CHECKOUT_DETAILS.customerDetailDTO.billingAddress.province!=''}">
			                          <input type="text" class=" input_left input_leftinput tooltip_f"  name="" id="billinginfo_province" original-title="Province/State/Region"  <c:if test="${stateAvailable==true}"> style="display:none;"</c:if> value="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.province}" />
	                                  <code class=""></code>
		                         </c:when>
		                         <c:otherwise>
			                          <input type="text" class="input_left input_leftinput tooltip_f" original-title="Province/State/Region"  name="" id="billinginfo_province"  <c:if test="${stateAvailable==true}"> style="display:none;"</c:if>  value="Province/State/Region"/>
	                                  <code class=""></code>
		                         </c:otherwise>
	                          </c:choose>
	                         <c:choose>
	                         <c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.zipCode!=null && CHECKOUT_DETAILS.customerDetailDTO.billingAddress.zipCode!=''}">
	                         <c:if test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.country=='US'}">
	                         	<input type="text" class="input_last_rg tooltip_f" id="bilinginfo_zip" name="" original-title="ZIP" value="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.zipCode}"/>
                                <code class="" id="bilinginfo_zip_error"></code>
                                <div class="clearall"></div>
	                         </c:if>
	                         <c:if test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.country!='US'}">
	                         	<input type="text" class="input_last_rg tooltip_f" id="bilinginfo_zip" name="" original-title="ZIP" value="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.zipCode}"/>
                                <code class="" id="bilinginfo_zip_error"></code>
                                <div class="clearall"></div>
                                
	                         </c:if>
	                         </c:when>
	                         <c:otherwise>
	                        	<input type="text" class="input_last_rg tooltip_f" id="bilinginfo_zip" name="" original-title="ZIP" value="ZIP"/>
                                <code class="" id="bilinginfo_zip_error"></code>
                                <div class="clearall"></div>
	                         </c:otherwise>
	                         </c:choose>
	                         <c:choose>
			                      	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.phone!=null && CHECKOUT_DETAILS.customerDetailDTO.phone!=''}">
				                        <input type="text" class="inputbox_field_yourinfo tooltip_f"  id="billinginfo_phone" original-title="Phone Number" name="" value="${CHECKOUT_DETAILS.customerDetailDTO.phone}"/>
	                               		<code class="" id="billinginfo_phone_error"></code>
			                        </c:when>
				                    <c:otherwise>
					                    <input type="text" class="inputbox_field_yourinfo tooltip_f"  id="billinginfo_phone" name=""  original-title="Phone Number" value="Phone Number"/>
	                                	<code class="" id="billinginfo_phone_error"></code>
				                    </c:otherwise>
	                  		   </c:choose>
                             </c:when>
                             <c:otherwise>
                             <input type="text" class="input_left tooltip_f" name="" id="billinginfo_firstName" original-title="First Name" value="First Name">
                             <code class="" id="billinginfo_firstName_error"></code>
                             <input type="text" class="input_right tooltip_f" name="" id="billinginfo_lastName" original-title="Last Name" value="Last Name">
                             <code class="" id="billinginfo_lastName_error"></code>
                             <div class="clearall"></div>
                            
                             <input type="text" class="inputbox_field_yourinfo tooltip_f" id="billinginfo_addr1" name="" original-title="Address1" value="Address1">
                             <code class="" id="billinginfo_addr1_error"></code>
                             <input type="text" class="inputbox_field_yourinfo tooltip_f" id="billinginfo_addr2" name="" original-title="Address2" value="Address2">
                             <code class=""></code>
                             <div class="custom_select">
	                             <div class="select">
		                             <p id="biliinginfo_country" original-title="Country"  title="US">USA</p>
		                             <span class="custom_drop_nav"></span>
	                             </div>
	                             <select name="country" data-default="Austria" class="custom_select_value_act" id="lBillingCountry">
		                             <option value="00">SELECT YOUR COUNTRY</option>
		                             <c:forEach items="${countryMap}" var="country">
			                        	 <c:choose>
				                        	 <c:when test="${country.value.countryCode=='US'}">
				                        		 <option value="${country.value.countryCode}" selected="selected">${country.value.countryName}</option>
				                        	 </c:when>
				                        	 <c:otherwise>
				                        		 <option value="${country.value.countryCode}">${country.value.countryName}</option>
				                        	 </c:otherwise>
			                        	 </c:choose>
									 </c:forEach>
	                             </select>
                             </div>
                             <code class="" id="biliinginfo_country_error"></code>
                            
                             <input type="text" class="input_last_rg tooltip_f" original-title="City" name="" id="billinginfo_city" value="City"><code class="" id="billinginfo_city_error"></code>
                              <div class="custom_select" id="billinginfo_div">
	                             <div class="select" id="billing_select">
	                             <p id="biilinginfo_state" original-title="State" title="">SELECT YOUR STATE</p>
	                             <span class="custom_drop_nav"></span>
	                             
	                             </div>
	                             <select name="State" data-default="Austria" class="custom_select_value_act" id="select_billinginfo_state">
		                              <c:forEach  items="${countryMap[CHECKOUT_DETAILS.customerDetailDTO.billingAddress.country].stateList}" var="mystate">
		                            	<c:choose>
		                            	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.state==mystate.stateCode}">
		                            	<option value="${mystate.stateCode}" selected="selected">${mystate.stateName}</option>
		                            	</c:when>
		                            	<c:otherwise>
		                            	<option value="${mystate.stateCode}">${mystate.stateName}</option>
		                            	</c:otherwise>
		                            	</c:choose>
		                           		 </c:forEach>	
	                             </select>
                             </div>
                             <code class="error_icon2" id="biilinginfo_state_error"></code>
                             <input type="text" class="input_left input_leftinput tooltip_f" style=" display: none;" name="" id="billinginfo_province" original-title="Province/State/Region"  value="Province/State/Region"><code class=""></code>
                             
                             <input type="text" class="input_last_rg tooltip_f" id="bilinginfo_zip" name="" original-title="ZIP" value="ZIP"><code class="" id="bilinginfo_zip_error"></code>
                             <input type="text" class="inputbox_field_yourinfo tooltip_f" id="billinginfo_phone" name="" original-title="Phone Number" value="Phone Number">
                             <code class="" id="billinginfo_phone_error"></code>
                             <div class="clearall"></div>
                             
                             </c:otherwise>
                             </c:choose>
                               
                            </div>
                            <h4>3. SHIPPING ADDRESS</h4>
                            <p id="internShipAddr" style="display: block; font-size: 15px;">International orders must have the same shipping & billing address.</p>
                            <font class="same_billing same_billing_selected">SAME AS BILLING</font>
                            <div class="shipping_address_holder">
                             <c:choose>
		                      <c:when test="${CHECKOUT_DETAILS!=null && CHECKOUT_DETAILS.customerDetailDTO.shippingAddress!=null}">
		                      <c:choose>
		                   		  <c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.firstName!=null && CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.firstName!=''}">
		                          	<input type="text" class="input_left tooltip_f"  original-title="First Name" name="" value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.firstName}" id="shippinginfo_firstname"/>
	                                <code class="" id="shippinginfo_firstname_error"></code>
		                          </c:when>
		                          <c:otherwise>
		                   		 	<input type="text" class="input_left tooltip_f"  name="" original-title="First Name" value="First Name" id="shippinginfo_firstname"/>
	                                <code class="" id="shippinginfo_firstname_error"></code>
		                          </c:otherwise>
	                          </c:choose>
	                          <c:choose>
	                   				<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.lastName!=null && CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.lastName!=''}">
	                        		<input type="text" class="input_right tooltip_f"  name="" original-title="Last Name" value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.lastName}" id="shippinginfo_lastname"/>
                                	<code class="" id="shippinginfo_lastname_error" ></code>
                                	<div class="clearall"></div>
	                        		</c:when>
	                        		<c:otherwise>
	                        			<input type="text" class="input_right tooltip_f"  name="" original-title="Last Name" value="Last Name" id="shippinginfo_lastname"/>
                                		<code class="" id="shippinginfo_lastname_error" ></code>
                               			<div class="clearall"></div>
	                        		</c:otherwise>
	                        </c:choose>
	                        <c:choose>
	                   		<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street1!=null && CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street1!=''}">
	                        <input type="text"  class="inputbox_field_yourinfo tooltip_f"  name="" original-title="Address1" value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street1}" id="shippinginfo_addr1" />
                            <code class="" id="shippinginfo_addr1_error"></code>
	                        </c:when>
	                        <c:otherwise>
	                      		 <input type="text"  class="inputbox_field_yourinfo tooltip_f"  name="" original-title="Address1" value="Address1" id="shippinginfo_addr1" />
                                 <code class="" id="shippinginfo_addr1_error"></code>
	                        </c:otherwise>
	                        </c:choose>
	                         <c:choose>
		                   		<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street1!=null && CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street2!=''}">
		                       		  <input type="text" class="inputbox_field_yourinfo tooltip_f"  name="" original-title="Address2"  value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street2}" id="shippinginfo_addr2" />
                                 	  <code class=""></code>
		                        </c:when>
		                        <c:otherwise>
		                     		    <input type="text" class="inputbox_field_yourinfo tooltip_f"  name="" original-title="Address2" value="Address2" id="shippinginfo_addr2" />
                               		    <code class=""></code>
		                        </c:otherwise>
	                        </c:choose>
	                        <div class="custom_select">
	                            <div class="select inputlast_left" id="shipping_select">
	                            <c:choose>
	                            	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.countryName!=null && CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.countryName!=''}">
	                                	<p class="country" id="shippinginfo_country" original-title="Country" title="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.country}">${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.countryName}</p>
	                                	</c:when>
	                                	<c:otherwise>
	                                	<p class="country" id="shippinginfo_country" original-title="Country" title="US" >USA</p>
	                                	</c:otherwise>
	                                	</c:choose>
	                                <span class="custom_drop_nav"></span>
	                            </div>
	                            <!-- <select name="country" data-default="Austria" class="custom_select_value_act" id="shippingCountry">
                                </select> -->
	                           <input type="hidden" id="shipCountryCode" value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.countryName}"/> 
	                         </div><!---shipping-country--->
	                        <code class="" id="shippinginfo_country_error"></code>
	                         <c:choose>
		                   		<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street3!=null && CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street3!=''}">
		                         <input type="text" class="input_last_rg tooltip_f" original-title="City"  name="" value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street3}" id="shippinginfo_city"/>
	                             <code class="" id="shippinginfo_city_error"></code>
		                        </c:when>
		                        <c:otherwise>
		                        <input type="text" class="input_last_rg tooltip_f" original-title="City"  name="" value="City" id="shippinginfo_city"/>
	                                 <code class="" id="shippinginfo_city_error"></code>
		                        </c:otherwise>
	                        </c:choose>
	                        <div class="custom_select" id="shipStateHolder">
	                            <div class="select inputlast_left" id="shipping_select">
                                	<c:if test="${stateAvailable==true}">
	                             <p class="country" id="shippinginfo_state" original-title="State" title="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.state}" >${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.stateName}</p>
	                            	</c:if>
	                            	<c:if test="${stateAvailable==false}">
	                            	<p class="country" id="shippinginfo_state" title="" >SELECT YOUR STATE</p>
	                            	</c:if>
	                                
	                                <span class="custom_drop_nav"></span>
	                            </div>
	                            <select id="select_shippinginfo_state" name="shipState" class="custom_select_value_act inputlast_left" >
	                            	<option value="00">SELECT YOUR STATE</option>
	                            	<c:if test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.state!=null && CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.state!=''}">
	                            	<c:forEach  items="${countryMap[CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.country].stateList}" var="mystate">
	                            	<c:choose>
	                            	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.state==mystate.stateCode}">
	                            	<option value="${mystate.stateCode}" selected="selected">${mystate.stateName}</option>
	                            	</c:when>
	                            	<c:otherwise>
	                            	<option value="${mystate.stateCode}">${mystate.stateName}</option>
	                            	</c:otherwise>
	                            	</c:choose>
	                           	    </c:forEach>	
								    </c:if>
	                            </select>
	                            <input type="hidden" id="shipStateCode" value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.state}"/>
	                         </div>
	                         <code class="" id="shippinginfo_state_error"></code>
	                          <c:choose>
		                   		  <c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.province!=null && CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.province!=''}">
		                         	 <input type="text" class="input_left input_leftinput tooltip_f" style=" display: none;" original-title="Province/State/Region"  name="" id="shippinginfo_province" value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.province}"/>
                               		 <code class=""></code>
		                         </c:when>
		                         <c:otherwise>
		                         	 <input type="text" class="input_left input_leftinput tooltip_f" style=" display: none;" original-title="Province/State/Region"  name="" id="shippinginfo_province" value="Province/State/Region"/>
                                <code class=""></code>
		                         </c:otherwise>
	                         </c:choose>
	                         <c:choose>
	                        <c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.zipCode!=null && CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.zipCode!=''}">
	                        <c:if test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.country=='US'}">
	                       		 <input type="text" class="input_last_rg tooltip_f inputlast_right"  name="" value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.zipCode}" original-title="ZIP" id="shippinginfo_zip"/>
                                <code class="" id="shippinginfo_zip_error"></code>
	                        </c:if>
	                   	<c:if test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.country!='US'}">
	                        	 <input type="text" class="input_last_rg tooltip_f inputlast_right"  name="" value="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.zipCode}"  original-title="ZIP" id="shippinginfo_zip"/>
                                <code class="" id="shippinginfo_zip_error"></code>
	                        </c:if>
	                        </c:when>
	                        <c:otherwise>
	                        	 <input type="text" class="input_last_rg tooltip_f inputlast_right"  name="" value="ZIP" original-title="ZIP" id="shippinginfo_zip"/>
                                <code class="" id="shippinginfo_zip_error"></code>
                                 <div class="clearall"></div>
	                        </c:otherwise>
	                        </c:choose>
		                      </c:when>
		                      <c:otherwise>
		                       <input type="text" class="input_left tooltip_f"  name="" value="First Name" original-title="First Name" id="shippinginfo_firstname"/>
                                <code class="" id="shippinginfo_firstname_error"></code>
                                <input type="text" class="input_right tooltip_f"  name="" value="Last Name" original-title="Last Name" id="shippinginfo_lastname"/>
                                <code class="" id="shippinginfo_lastname_error" ></code>
                                <div class="clearall"></div>
                                <input type="text"  class="inputbox_field_yourinfo tooltip_f"  name="" original-title="Address1" value="Address1" id="shippinginfo_addr1" />
                                 <code class="" id="shippinginfo_addr1_error"></code>
                                <input type="text" class="inputbox_field_yourinfo tooltip_f"  name="" original-title="Address2" value="Address2" id="shippinginfo_addr2" />
                                 <code class=""></code>
                                <div class="custom_select">
                                <div class="select">
                                    <p id="shippinginfo_country" title="US">USA</p>
                                    <span class="custom_drop_nav"></span>
                                </div>
                                <!-- <select name="country" data-default="Austria" class="custom_select_value_act" id="shippingCountry">
                                   
                                </select> -->
                             </div>
                                <code class="" id="shippinginfo_country_error"></code>
                               
                                 <input type="text" class="input_last_rg tooltip_f" original-title="City"  name="" value="City" id="shippinginfo_city"/>
                                 <code class="" id="shippinginfo_city_error"></code>
                                  <div class="custom_select" id="shippinginfo_div">
	                                <div class="select inputlast_left" id="shipping_select">
	                                    <p id="shippinginfo_state" title="" >SELECT YOUR STATE</p>
	                                    <span class="custom_drop_nav"></span>
	                                </div>
	                                 <select name='State' data-default='Austria' class='custom_select_value_act ' id='select_shippinginfo_state'></select>
                                </div>
                                 <code class="" id="shippinginfo_state_error"></code>
                                <input type="text" class="input_left input_leftinput tooltip_f" style=" display: none;" original-title="Province/State/Region"  name="" id="shippinginfo_province" value="Province/State/Region"/>
                                <code class=""></code>
                                <code class=""></code>
                                <input type="text" class="input_last_rg tooltip_f inputlast_right"  name="" value="ZIP" original-title="ZIP" id="shippinginfo_zip"/>
                                <code class="" id="shippinginfo_zip_error"></code>
                                
                                <div class="clearall"></div>
		                      </c:otherwise>
	                     	 </c:choose>
                            </div>
                            <a href="javascript:void(0);" class="yellow_btn yourinfo_continue_act yell_btn">CONTINUE</a>
                            <div class="clearall"></div>
                           <!--  <h5 class="shipping_method">SHIPPING METHOD & PAYMENT</h5> -->
                        </div><!--check_yourinfo-->
                        <div class="verify_info">
                                <h6>VERIFY YOUR INFO:</h6>
                                <c:choose>
                               <c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.countryName!='USA'}">
                                <span class="billing_return" id="address_return_info">
                               	<b>ADDRESS: </b>
                             	<c:choose>
                               	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.province !=''}">
                               	<c:choose>
                               	
                               	<c:when test=" ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street2!=''}">
                               		 ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street1},  ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street2}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street3}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.province}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.countryName}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.zipCode}
                               	</c:when>
                               	<c:otherwise>
                               		 ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street1}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street3}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.province}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.countryName}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.zipCode}
                               	</c:otherwise>
                               	</c:choose>
                               	</c:when>
                               	<c:otherwise>
                               	<c:choose>
                               	<c:when test=" ${fn:trim(CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street2)!=''}">
                             	  	${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street1}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street2}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street3}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.countryName}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.zipCode}
                               	</c:when>
                               	<c:otherwise>
                               		  ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street1}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street3}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.countryName}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.zipCode}
                               	</c:otherwise>
                               	</c:choose>
                               	</c:otherwise>
                              	</c:choose>
                               	</span>
                               	<span class="billing_return" id="billing_return_info" style="display: none;">
                                    <b>BILLING: </b>
                                    <c:choose>
	                                    <c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street2 !=''}">
	                                   ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street1}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street2}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street3}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.state}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.zipCode} 
	                                  
	                                    </c:when>
	                                    <c:otherwise>
	                                          ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street1}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street3}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.state}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.zipCode} 
	                                    </c:otherwise>
                                    </c:choose>
                                </span><br />
                                <span class="billing_return" id="shipping_return_info"style="display: none;" >
                                    <b>SHIPPING: </b>
                                    <c:choose>
	                                    <c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street2 !=''}">
	                                    ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street1}, ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street2}, ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street3}, ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.state}, ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.zipCode} 
	                                    </c:when>
	                                    <c:otherwise>
	                                      ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street1}, ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street3}, ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.state}, ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.zipCode} 
	                                    </c:otherwise>
                                    </c:choose>
                                </span>
                               </c:when>
                               <c:otherwise>
                                <span class="billing_return" id="billing_return_info">
                                    <b>BILLING: </b>
                                    <c:choose>
	                                    <c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.state !='' && CHECKOUT_DETAILS.customerDetailDTO.billingAddress.state !=null}">
	                                    <c:choose>
	                                    <c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street2!=''}">
	                                     ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street1}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street2}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street3}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.state}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.zipCode} 
	                                    </c:when>
	                                    <c:otherwise>
	                                     ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street1}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street3}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.state}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.zipCode} 
	                                    </c:otherwise>
	                                    </c:choose>
	                                    </c:when>
	                                    <c:otherwise>
	                                       <c:choose>
	                                    <c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street2!=''}">
	                                     ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street1}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street2}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street3}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.state}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.zipCode} 
	                                    </c:when>
	                                    <c:otherwise>
	                                     ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street1}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street3}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.state}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.zipCode} 
	                                    </c:otherwise>
	                                    </c:choose>
	                                    </c:otherwise>
                                    </c:choose>
                                </span><br />
                                <span class="billing_return" id="shipping_return_info">
                                    <b>SHIPPING: </b>
                                    <c:choose>
	                                    <c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.state !='' && CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.state !=null}">
	                                     <c:choose>
	                                    <c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street2!=''}">
	                                     ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street1}, ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street2}, ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street3}, ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.state}, ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.zipCode} 
	                                    </c:when>
	                                    <c:otherwise>
	                                      ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street1}, ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street3}, ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.state}, ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.zipCode} 
	                                    </c:otherwise>
	                                    </c:choose>
	                                    </c:when>
	                                    <c:otherwise>
	                                        <c:choose>
	                                    <c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street2!=''}">
	                                     ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street1}, ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street2}, ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street3}, ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.state}, ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.zipCode} 
	                                    </c:when>
	                                    <c:otherwise>
	                                      ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street1}, ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.street3}, ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.state}, ${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.zipCode} 
	                                    </c:otherwise>
	                                    </c:choose>
	                                    </c:otherwise>
                                    </c:choose>
                                </span>
                                 <span class="billing_return" id="address_return_info" style="display: none;">
                               	<b>ADDRESS: </b>
                               	<c:choose>
	                               	<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.province!=''}">
	                               	<c:choose>
	                               	<c:when test=" ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street2!=''}">
	                               		 ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street1}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street2}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street3}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.province}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.countryName}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.zipCode}
	                               	</c:when>
	                               	<c:otherwise>
	                               		 ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street1}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street3}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.province},  ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.countryName}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.zipCode}
	                               	</c:otherwise>
	                               	</c:choose>
	                               	</c:when>
	                               	<c:otherwise>
	                               	<c:choose>
	                               	<c:when test=" ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street2!=''}">
	                               		 ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street1}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street2}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street3}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.countryName}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.zipCode}
	                               	</c:when>
	                               	<c:otherwise>
	                               		 ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street1}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.street3}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.countryName}, ${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.zipCode}
	                               	</c:otherwise>
	                               	</c:choose>
	                               	</c:otherwise>
                               	</c:choose>
                               	</span>
                                 </c:otherwise>
                                 </c:choose>
                                 <h5 class="shipping_method" id="shippingPayment_text">SHIPPING METHOD & PAYMENT</h5>
                                 <h4>1. SHIPPING METHOD:</h4>
                                                                    
                                 
                                 <div class="custom_select shipping_method_dwn">
                                    <div class="select  input_dwn" id="display_shippingmethod">
                                        <p shipzoneid="" id="Shippingmethod">Please Select A Shipping Method...</p>
                                        <span class="custom_drop_nav"></span>
                                    </div>
                                     <c:choose>
                                     
      								<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.country=='US'}">
      								 
                                    <select name="Shippingmethod" data-default="Austria" class="custom_select_value_act" id="shippingmethods">
                                     <option name="shipping_method"  >Please Select A Shipping Method...</option>
                                 <c:forEach items="${SHIPPING_SERVICES}" var="service" varStatus="status">
			            			<fmt:formatNumber var="shipPriceText" value="${service.totalShippingPrice}" pattern="$0.00"/>
			            			
			            			<c:set var="deliveryDays" value="${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days"/>
			            			<c:set var="freeLimitText" value=""/>
			            			<c:if test="${service.totalShippingPrice==0.0}">
			            				<c:set var="shipPriceText" value="FREE"/>
			            			</c:if>
			            			<c:if test="${service.zone.deliveryDaysUpperLimit<=1}">
			            				<c:set var="deliveryDays" value="${service.zone.deliveryDaysUpperLimit} Business Day"/>
			            			</c:if>
			            			<c:if test="${service.zone.freeLimit!=null && service.zone.freeLimit>0.0}">
			            				<fmt:formatNumber var="freeLimitText" value="${service.zone.freeLimit}" pattern="0"/>
			            				<c:set var="freeLimitText" value="FREE on all orders over $${freeLimitText}!"/>
			            				<input type="hidden" name="freeLimit" value="${service.zone.freeLimit}"/>
			            			</c:if>
			            				<c:if test="${status.index==0}">
			            				<c:choose>
			            				<c:when test="${service.zone.deliveryDaysLowerLimit!=0}">
			            					<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)"/>
			            				</c:when>
			            				<c:otherwise>
			            				<c:choose>
				            				<c:when test="${service.zone.deliveryDaysUpperLimit>=2}">
				            					<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} ${service.zone.deliveryDaysUpperLimit} Business Days)"/>
				            				</c:when>
				            				<c:otherwise>
				            					<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} ${service.zone.deliveryDaysUpperLimit} Business Days)"/>
				            				</c:otherwise>
				            				</c:choose>
			            				</c:otherwise>
			            				</c:choose>
			                 	   </c:if>
		                    		<c:choose>
		                    		<c:when test="${CHECKOUT_DETAILS!=null && CHECKOUT_DETAILS.shippingServiceZoneId!=null}">
		                    			<c:if test="${CHECKOUT_DETAILS.shippingServiceZoneId==service.zone.key.id}">
		                    			
		                    				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysLowerLimit!=0}">
						            				<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)"/>
						            					<option selected="selected" name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysUpperLimit>=2}">
						            				<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} ${service.zone.deliveryDaysUpperLimit} Business Days)"/>
						            					<option selected="selected" name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            					<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} ${service.zone.deliveryDaysUpperLimit} Business Days)"/>
						            					<option selected="selected" name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Day)</option>
						            				</c:otherwise>
						            				</c:choose>
						            					
						            				</c:otherwise>
					            				</c:choose>
		                    			</c:if>
		                    			<c:if test="${CHECKOUT_DETAILS.shippingServiceZoneId!=service.zone.key.id}">
		                    				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysLowerLimit!=0}">
						            					<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            					<c:choose>
						            				<c:when test="${service.zone.deliveryDaysUpperLimit >=2 }">
						            					<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Day)</option>
						            				</c:otherwise>
						            				</c:choose>
						            				</c:otherwise>
					            				</c:choose>
		                    			</c:if>
		                    		</c:when>
		                    		<c:otherwise>
		                    			<c:if test="${status.index==0}">
		                    				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysLowerLimit!=0}">
						            					<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysUpperLimit >=2 }">
						            					<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Day)</option>
						            				</c:otherwise>
						            				</c:choose>
						            				</c:otherwise>
					            				</c:choose>
		                    			</c:if>
		                    			<c:if test="${status.index!=0}">
		                    				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysLowerLimit!=0}">
						            					<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysUpperLimit >=2 }">
						            					<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Day)</option>
						            				</c:otherwise>
						            				</c:choose>
						            					
						            				</c:otherwise>
					            				</c:choose>
		                    			</c:if>
		                    		</c:otherwise>
		                    		</c:choose>
		            			</c:forEach>
                                    </select>
                                    </c:when>
                                    <c:otherwise>
                                <select name="Shippingmethod" data-default="Austria" class="custom_select_value_act" id="shippingmethods">
                            	  <option name="shipping_method"  >Please Select A Shipping Method...</option>
                                <c:forEach items="${SHIPPING_SERVICES}" var="service" varStatus="status">
                               
			            			<fmt:formatNumber var="shipPriceText" value="${service.totalShippingPrice}" pattern="$0.00"/>
			            			
			            			<c:set var="deliveryDays" value="${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days"/>
			            			<c:set var="freeLimitText" value=""/>
			            			<c:if test="${service.totalShippingPrice==0.0}">
			            				<c:set var="shipPriceText" value="FREE"/>
			            			</c:if>
			            			<c:if test="${service.zone.deliveryDaysUpperLimit<=1}">
			            				<c:set var="deliveryDays" value="${service.zone.deliveryDaysUpperLimit} Business Day"/>
			            			</c:if>
			            			<c:if test="${service.zone.freeLimit!=null && service.zone.freeLimit>0.0}">
			            				<fmt:formatNumber var="freeLimitText" value="${service.zone.freeLimit}" pattern="0"/>
			            				<c:set var="freeLimitText" value="FREE on all orders over $${freeLimitText}!"/>
			            				<%-- <input type="hidden" name="freeLimit" value="${service.zone.freeLimit}"/> --%>
			            			</c:if>
			            			<c:if test="${status.index==0}">
			            				<c:choose>
			            				<c:when test="${service.zone.deliveryDaysLowerLimit!=0}">
			            					<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)"/>
			            				</c:when>
			            				<c:otherwise>
			            					<c:choose>
			            					<c:when test="${service.zone.deliveryDaysUpperLimit>=2}">
			            						<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} ${service.zone.deliveryDaysUpperLimit} Business Days)"/>
			            					</c:when>
			            					<c:otherwise>
			            					<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} ${service.zone.deliveryDaysUpperLimit} Business Day)"/>
			            					</c:otherwise>
			            					</c:choose>
			            				</c:otherwise>
			            				</c:choose>
			                 	   </c:if>
		                    		<c:choose>
			                    		<c:when test="${CHECKOUT_DETAILS!=null && CHECKOUT_DETAILS.shippingServiceZoneId!=null}">
			                    			<c:if test="${CHECKOUT_DETAILS.shippingServiceZoneId==service.zone.key.id}">
			                    				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysLowerLimit!=0}">
						            				<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)"/>
						            					<option selected="selected" name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysUpperLimit>=2}">
						            				<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} ${service.zone.deliveryDaysUpperLimit} Business Days)"/>
						            					<option selected="selected" name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<c:set var="firstShippingMethod" value="${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} ${service.zone.deliveryDaysUpperLimit} Business Day)"/>
						            					<option selected="selected" name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Day)</option>
						            				</c:otherwise>
						            				</c:choose>
						            					
						            				</c:otherwise>
					            				</c:choose>
			            
			                    			</c:if>
			                    			<c:if test="${CHECKOUT_DETAILS.shippingServiceZoneId!=service.zone.key.id}">
			                    				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysLowerLimit!=0}">
						            					<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysUpperLimit >=2 }">
						            					<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Day)</option>
						            				</c:otherwise>
						            				</c:choose>
						            				</c:otherwise>
					            				</c:choose>
			                    			</c:if>
			                    		</c:when>
			                    		<c:otherwise>
			                    			<c:if test="${status.index==0}">
			                    				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysLowerLimit!=0}">
						            					<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysUpperLimit >=2}">
						            					<option  name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            					<option  name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Day)</option>
						            				</c:otherwise>
						            				</c:choose>
						            				</c:otherwise>
					            				</c:choose>
			                    			</c:if>
			                    			<c:if test="${status.index!=0}">
			                    				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysLowerLimit!=0}">
						            					<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (Approx. ${service.zone.deliveryDaysLowerLimit}-${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<c:choose>
						            				<c:when test="${service.zone.deliveryDaysUpperLimit>=2}">
						            				<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Days)</option>
						            				</c:when>
						            				<c:otherwise>
						            				<option name="shipping_method"  value="${service.zone.key.id}" serviceType="${service.zone.shippingServiceTypeName}" freeLimit="${service.zone.freeLimit}"  >${shipPriceText}: ${service.zone.shippingServiceName} ${service.zone.shippingServiceTypeName} (${service.zone.deliveryDaysUpperLimit} Business Day)</option>
						            				</c:otherwise>
						            				</c:choose>
						            				</c:otherwise>
					            				</c:choose>
			                    			</c:if>
			                    		</c:otherwise>
		                    		</c:choose>
		            			</c:forEach>
		            			</select>
                                    </c:otherwise>
                                    </c:choose>
                                    </div><!---shipping_method_dwn--->
                                    <code class="" id="shippingmethod_error"></code>
                                    <c:choose>
                                    <c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.countryName == 'USA'}" >
                                    	 <font class="checkbox" id="deliverySign">REQUIRE SIGNATURE FOR DELIVERY?</font> 
                                    </c:when>
                                    <c:otherwise>
                                   	  <font class="checkbox" id="deliverySign" style="display: none;">REQUIRE SIGNATURE FOR DELIVERY?</font>
                                    </c:otherwise>
                                    </c:choose>
                                    <div class="important_shipping" >
                                    		<h1>IMPORTANT SHIPPING NOTES</h1>
                                    		<c:choose>
	                                    		<c:when test="${CHECKOUT_DETAILS.customerDetailDTO.shippingAddress.country=='US'}">
	                                    		 <span class="import_fspan" style="display: block;" id="shipping_text">Express Shipping & Overnight deliver Monday - Friday Only.</span>
	                                    		 <span class="import_sspan" style="display: none;">
	                                            	Cost shown is for shipping only. Your country may add customs fees, taxes, and/or duty once it arrives to you, and these costs must be paid by customer upon receipt of the package. Please refer to your country's customs office for more information about their fees and policies.
                                            	</span>
	                                    		</c:when>
	                                    		<c:otherwise>
	                                    		 <span class="import_fspan" style="display: none;" id="shipping_text" >Express Shipping & Overnight deliver Monday - Friday Only.</span>
	                                    		<span class="import_sspan" style="display: block;">
	                                            	Cost shown is for shipping only. Your country may add customs fees, taxes, and/or duty once it arrives to you, and these costs must be paid by customer upon receipt of the package. Please refer to your country's customs office for more information about their fees and policies.
                                            	</span>
	                                    		</c:otherwise>
		                    				</c:choose>
                                            
                                    </div>
                                    <div class="clearall"></div>
                                    <div id="card_payment_holder">
	                                  <h4>2. PAYMENT:</h4>
	                                   <span class="checkout_error" id="checkout_payment_err" style="display:none;">Invalid Data</span>
	                                  <div>
	                                   <jsp:useBean id="now" class="java.util.Date" />
					                   <fmt:formatDate var="month" value="${now}" pattern="MM" />
					                   <fmt:formatDate var="year" value="${now}" pattern="yyyy" />
					                   <fmt:formatDate var="monthName" value="${now}" pattern="MMMMM"/>
					                   <input type="hidden" id="currentMonth" value="${month}"/>
					                   <input type="hidden" id="currentYear" value="${year}"/>
					                   
	                                         <input type="text" class="payment_input_first tooltip_f"  title="Name On Card" name="" value="Name On Card" original-title="Name On Card" id="cardHoldeName" />
	                                         <code class="" id="cardHoldeName_error"></code>
	                                        <input type="text"  class="inputbox_field_yourinfo tooltip_f" title="Card Number (no dashes or spaces)"  name="" value="Card Number (no dashes or spaces)" original-title="Card Number (no dashes or spaces)" id="cardNumber"  />
	                                        <code class="" id="cardNumber_error"></code>
	                                        <div class="card_holder">
	                                            <span class="master tooltip_t2" title="MasterCard"></span>
	                                            <span class="discover tooltip_t2" title="Discover"></span>
	                                            <span class="american tooltip_t2" title="American Express"></span>
	                                            <span class="visa tooltip_t2" title="Visa"></span>
	                                            <span class="club tooltip_t2" title="Diners Club"></span>
	                                            <span class="jcb tooltip_t2" title="JCB"></span>
	                                        </div>
	                                        <div class="custom_select exp_month"> 
	                                        <div class="select ">
	                                            <p>${monthName}</p>
	                                            <span class="custom_drop_nav"></span>
	                                        </div>
	                                            <select id="cardExpMonthList" name="month" data-default="January" class="custom_select_value_act">
	                                                <option value="01" <c:if test="${month=='01'}"> selected="selected"</c:if>>January(01)</option>
					                                <option value="02" <c:if test="${month=='02'}"> selected="selected"</c:if>>February(02)</option>
					                                <option value="03" <c:if test="${month=='03'}"> selected="selected"</c:if>>March(03)</option>
					                                <option value="04" <c:if test="${month=='04'}"> selected="selected"</c:if>>April(04)</option>
					                                <option value="05" <c:if test="${month=='05'}"> selected="selected"</c:if>>May(05)</option>
					                                <option value="06" <c:if test="${month=='06'}"> selected="selected"</c:if>>June(06)</option>
					                                <option value="07" <c:if test="${month=='07'}"> selected="selected"</c:if>>July(07)</option>
					                                <option value="08" <c:if test="${month=='08'}"> selected="selected"</c:if>>August(08)</option>
					                                <option value="09" <c:if test="${month=='09'}"> selected="selected"</c:if>>September(09)</option>
					                                <option value="10" <c:if test="${month=='10'}"> selected="selected"</c:if>>October(10)</option>
					                                <option value="11" <c:if test="${month=='11'}"> selected="selected"</c:if>>November(11)</option>
					                                <option value="12" <c:if test="${month=='12'}"> selected="selected"</c:if>>December(12)</option>
	                                            </select>
	                                        </div><!---exp_month--->
	                                        <code class="" id="cardExpMonthList_error"></code>
	                                        <div  class="custom_select exp_year">
	                                             <div class="select">
	                                                <p>${year}</p>
	                                                <span class="custom_drop_nav"></span>
	                                             </div>
	                                            <select id="cardExpYearList" name="year" data-default="2012" class="custom_select_value_act">
	                                             <c:forEach var="i" begin="0" end="15" step="1" varStatus ="status">
				                                 	<c:if test="${status.index==0}">
				                                 		<option value="${year+i}" selected="selected">${year+i}</option>
				                                 	</c:if>
				                                 	<c:if test="${status.index>0}">
				 										<option value="${year+i}">${year+i}</option>
				                                 	</c:if>
				                     			 	</c:forEach>    
	                                            </select>
	                                         </div><!--exp_year-->
	                                         <code class="" id="cardExpYearList_list"></code>
	                                         <input type="text" class="payment_input_last tooltip_e"  id="cardCCV"  title="Your Security Code Is the 3-digit (4 on Amex) number on the back of your card."  name="" value="CVV #"/>
	                                         <code class="" id="cardCCV_error"></code>
	                                         <span class="checkout_error" id="checkout_payment_err" style="display:none;">Invalid Data</span>
	                                  </div>
                                  </div>
                                   <a href="#" class="yellow_btn verify_purch_act yell_btn"  id="payment_btn" >COMPLETE PURCHASE</a>
                            <div class="clearall"></div>
                            </div><!--verify_info-->
                           <c:choose>
                            <c:when test="${CHECKOUT_DETAILS.customerDetailDTO.billingAddress.countryName!='USA'}">
                            	 <div class="shipping_return" style="display: none;">
                            	  <b class="days" >60 DAY EASY RETURNS</b>
                            	 <b>FREE</b> Standard Shipping on US & Canada orders! <b>FREE</b> Standard Shipping on International orders over $199!
                            	 </div>
                            </c:when>
                            <c:otherwise>
                          		  
                          		   	<div class="shipping_return">
                          		   	  <b class="days">60 DAY EASY RETURNS</b>
                          		   	<b>FREE</b> Standard Shipping on US & Canada orders! <b>FREE</b> Standard Shipping on International orders over $199!
                          		   </div>
                            </c:otherwise>
                            </c:choose>
                       
                      <!--shipping_return-->
                    </div><!--shipping_holder-->
            </div><!--cl-->
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
						 <c:if test="${solestruck_magazine=='Solestruck-Magazine'}">
						 	 <c:set var="Solestruck_Magazine" value="${solestruck_magazine}"/>
						 </c:if>
					 
					  <input type="hidden" value="${productImageURL}"/>
                    	<li id="item_${lineItem.sequenceId}" >
                    	<%--  <div class="checkout_error" id="message_${lineItem.sequenceId}" style="display:none;">
							<h4>Ah Snap! The last pair were just taken.</h4>
							<p>Let us <u>Email You</u> when we get more in.</p>
			        	  </div> --%>
			        	  
                        	<div class="cart_shoe_list">
                            	<img id="image_${lineItem.sequenceId}" src="${productImageURL}" border="0" width="120" height="90" />
                                <div class="cart_shoe_dts">
                                	<b id="productName_${lineItem.sequenceId}" name="${lineItem.productName}" >${fn:toUpperCase(lineItem.productName)}</b><br />
                                	<span id="vendorName_${lineItem.sequenceId}" name="${lineItem.vendorName}" >${fn:toUpperCase(lineItem.vendorName)}</span>
                                    <h1>
									<c:if test="${lineItem.isPreOrder}">
										<span id="preOrder_${lineItem.sequenceId}">(PRE-ORDER)</span>
									</c:if>
									<c:if test="${!lineItem.isPreOrder}">
										<span id="preOrder_${lineItem.sequenceId}">(IN STOCK)</span>
									</c:if>
									<c:set var="saleexecuted" value="false"></c:set>
									<c:if test="${!lineItem.isSale}"><span id="sale_${lineItem.sequenceId}" style="display:none;" >SALE</span></c:if> 
									 <c:if test="${lineItem.isSale && ((cookie['Facebook'] ne null && cookie['Facebook'].value == 'Facebook')|| applyDiscount eq true || cookieExists eq false) && discountprogram ne null && saleexecuted eq false && discountTypeName ne 'Brand' && discountTypeName ne 'Order'}"> <span id="sale_${lineItem.sequenceId}" >(Final Sale)</span> 
									 	<c:set var="saleexecuted" value="true"></c:set>
									 </c:if>
									 <c:if test="${lineItem.isSale && cookie['Facebook'] eq null && saleexecuted eq false && discountTypeName ne 'Brand'}"> <span id="sale_${lineItem.sequenceId}" >SALE</span></c:if>
								  </h1>
								  <input type="hidden" name="product" id="product_${lineItem.sequenceId}" value="${lineItem.productId}"/>
								  <input type="hidden" name="variant" id="variant_${lineItem.sequenceId}" value="${lineItem.productVariantId}"/>
								  <input type="hidden" name="colorId" id="colorId_${lineItem.sequenceId}" value="${lineItem.colorId}"/>
								 <%--  <input type="hidden" id="real_price_${lineItem.sequenceId}" value="${(lineItem.retailPrice-(lineItem.retailPrice*percent)/100)}"/>  --%>
                                </div>
                                <div class="cart_price"  id="cart_price_${lineItem.sequenceId}">
                                
                                	<%-- <strike>250.00</strike> <b>$250.00</b>
                                	 <div class="checkout_remove_shoes remove_shoe_act" onclick="removeItem(${lineItem.sequenceId});"></div>
             						 <div class="clear_both"></div> --%>
              
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
										  
										   <c:when test="${((cookie['Facebook'] ne null && cookie['Facebook'].value == 'Facebook')|| applyDiscount eq true || cookieExists eq false) && discountprogram ne null && discountTypeName eq 'Brand' && discountTypeName ne 'FF' && vendorNameInLower eq saleBrandNames}">
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
										  <c:when test="${cookie['Facebook'] eq null }">
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
				                            		<option name="${colorVariant.colorName}" value="${colorVariant.colorId}">${fn:toUpperCase(colorVariant.colorName)}</option>
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
                                            
                                           <c:choose>
                                           <c:when test="${vendorNameInLower == 'solestruck-magazine' && lineItem.price eq '0.0'}">
                                           		<select id="quantities_${lineItem.sequenceId}" name="size" data-default="3" class="custom_select_value_act" onchange="onQuantityChange(this.options[this.selectedIndex],${lineItem.sequenceId})"></select>
                                           </c:when>
                                           <c:otherwise>
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
                                           </c:otherwise>
                                           </c:choose>
                                           
                                             
                                 </div><!-- custome_select--->
              				</div><!-- cart_shoe_details -->
                            <div class="clearall"></div>
                        </li>
                        <li style=" display: none;" id="message_${lineItem.sequenceId}">
                        	<div class="error_oh_snap_holder">
                        		<img width="120" border="0" height="90" src="${productImageURL}" id="outOfStackimage_1">
                        		<h3> OH SNAP. WE'RE OUT.</h3>
								<h1> 
									GOTTA CHECKOUT QUICKER THAN THAT!<br>SOME ONE ELSE GOT IT BEFORE YOU.
								</h1>
								<div class="clearall"></div>
								<div class="checkbox_outstk" id="inStock_${lineItem.sequenceId}" ><font>Email you when we get more In-Stock?</font>
								<span class="notify" id="notify_${lineItem.sequenceId}" onclick="sendReqForWaitList(${lineItem.sequenceId})">NOTIFY ME</span>
								</div>
								<div style="display: none;" id="thanks_${lineItem.sequenceId}"><font>Thanks! We'll let you know when we get more in.</font></div>
							</div>
                        </li>
                        </c:forEach>
                        
                       
                    </ul>
             <div class="subtotal_holder"style="display: block;" >
             
	             <c:choose>
	             <c:when test="${CART_DETAILS.shoppingCart.savings!=0.0 }">
     			 <div id="savings_label" style="display: block;">
	   				<label class="saving">SAVINGS:</label>
	         		<fmt:formatNumber var="savings" value="${CART_DETAILS.shoppingCart.savings}" pattern="0.00"/>
	                <span class="sav_price" id="savingAmount">-$${savings}</span>
                 </div>
	             </c:when>
	             <c:otherwise>
	             <div id="savings_label" style="display: none;">
	             				<label class="saving" id="savings_label" >SAVINGS:</label>
			             		 <fmt:formatNumber var="savings" value="${CART_DETAILS.shoppingCart.savings}" pattern="0.00"/>
			                    <span class="sav_price" id="savingAmount">-$${savings}</span>
			     </div>
	             </c:otherwise>
	             </c:choose>
			    <label class="saving" id="facebookbonus" style="display:none">FACEBOOK BONUS:</label>
	            <span class="saving" id="bonus_price" style="display:none"></span>       
	     		<label class="saving">SUBTOTAL:</label>
	     		<fmt:formatNumber var="subTotal" value="${CART_DETAILS.shoppingCart.subTotal}" pattern="0.00"/>
	            <span id="finalTotal">$${subTotal}</span>
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
             </div>
            </div>
            <div class="clearall"></div>
             <div id="backgroundPopup"></div>
             <div id="backgroundPopup_magzine"></div> 
            <code class="loading_page"></code>
    </div><!--wrapper-->
    <div class="fb_sale_popup popup_pos">
		<div class="popup_close_act"></div>
		<code></code>
		<a href="javascript:void(0)" onclick="loadingForFbCo('checkout');window.open('<%= redirectURL%>','FacebookLogin',
	                'left=370,top=180,width=630,height=325,toolbar=1,resizable=0');"></a>
	</div>
    <div class="forgot_password_form popup_pos kgpopup_act">
        <div class="login_popup_close popup_close_act"></div>
            <div class="ppup_cont_holder">
                <h2>FORGOT PASSWORD</h2>
                <form action="" method="post" name="login" class="login_form_holder">
                <label class="login_inputfields fl">Your Email:</label> <i id="rqFld_login_email_forgotpwd" style="display:none;">This field is required</i><div class="clear_both"></div>
                <input name="email_forgot" type="text" class="input_box tooltip_input" title="Your Email" id="email_forgot"  autocorrect = "off"  autocapitalize="off" />
                <p>Please make sure you have <a href="mailto:customerservice@solestruck.com">customerservice@solestruck.com</a> set to an accepted sender so you get the password reset email.</p>
                <input id="resetpassword" name="reset_password" type="button" value="Reset Password"  class="gry_btn"/>
                </form>
                <div class="clear_both"></div>        
        </div><!-- login_holder -->
    </div><!-- forgot_password_form -->
    
    <div class="reset_password_success popup_pos popup_pos_act">
    <div class="login_popup_close popup_close_act"></div>
    <div class="ppup_cont_holder">
            <h2>FORGOT PASSWORD</h2>
                <h3>Check your mail. We sent you a link.</h3>
                  <p>Please make sure you have customerservice@solestruck.com set to an accepted sender so you get the password reset email.</p>  
                 <div class="gry_btn ok_btn popup_close_act">OK</div>
                    
    <div class="clear_both"></div>        
   </div><!-- ppup_cont_holder -->
</div><!-- reset_password_form -->
    
     <!-- email_popup -->
        <div class="emailus_popup emailus_popup_act popup_pos kgpopup_act">
        	<div class="login_popup_close popup_close_act"></div>
                <div class="dont_see_your_size_popup_holder " id="emailus_form_popup">
                    <h2>Say Hi.</h2>
                    <form action="" method="post" name="login" class="message_form_holder" id="emailUs_popup" enctype="multipart/form-data">
                        <label class="login_inputfields fl">Your Email:</label><i id="alert" style="color:red; font-size:12px; margin:0px;"> </i><div class="clear_both"></div>
                        <input name="emailId" type="text" class="input_box" id="emailUsId" />
                        <label class="how_help_field">Your Message:</label>
                        <textarea name="help" cols="" rows="" class="message_textarea" id="help"></textarea><div id="alertHelp" style="color:red;font-size:12px;"> </div>
                        <label class="order_number">Order Number (if you have one):</label>
                        <input name="order_number" type="text" class="input_box" id="order_number" />
                        <i id="alertForAttachment" style="color:red; font-size:12px; display: block;margin: 0px;padding: 10px 10px 10px 0px;"></i>
                        <div class="clear_both"></div>
                        <div class="browse_btn">
                        	<input id="file_1" name="myFile1" type="file" value="Attach Files"/>
                        	<span class="image_file1" onclick="$('#file_1').trigger('click');"><a id="text_emailUs">Click To Attach File</a></span>
                       </div>
                        
                       <%--  <input type="button" class="gry_btn brwn_btn" value="SEND" id="emailUs_send" onclick="javascript:setTimeout('emailUsDetails()',500);"><code class="popup_processing_icon"></code></input> --%>
                       <div class="gry_btn brwn_btn" id="emailUs_send" style="cursor:pointer" onclick="return emailUsDetails();">
                        	<code class="popup_processing_icon"></code>
                        	SEND
                        </div>
                        
                        
                    </form>
                    
                    <iframe id="imageUploadIFrame" style="display:none;"></iframe>
         </div><!-- message_holder -->
    </div><!-- email_popup -->
    
    <div class="blackfriday_faq_chk popup_pos kgpopup_act">
    	<div class="blackfriday_faq_chk_close popup_close_act"></div>
    	
    	<h1 align="center">BLACK FRIDAY FREQUENTLY ASKED QUESTIONS</h1>
        <div class="blackfriday_faq_chk_overflow">
	        <code class="arrow_blackfaq_lf"></code>
	        <h3 class="fl">How It works</h3>
	        <code class="arrow_blackfaq_rg"></code>
	        <div class="clear_both"></div>
	        <p>It's our big Black Friday sale again!!! We know you've been waiting all year. And you know how CRAZY it gets fighting for those shoes you want and the big question:  "Should I risk waiting until it's 50% off day or grab them now while I see them for 30% or 40% off?"   Also, most of you know how crazy it gets here and we thank you so much for your past understanding and being so awesome!!  So here we go!!!!</p>
	        
	        <h5>The Basics
		        <p>Sign in with your Solestruck account or with Facebook to see the discounts.</p>
		        <p>The shoes are yours once you actually place the order. Someone else might be ordering them while you are so you have to be fast!</p>
		        <p>These are all FINAL SALE = no returns.  That means they are so heavily discounted, that they cannot be returned.  You can do whatever you want to make them work for you, re-gift them or sell them!</p>
		        <p>Sale prices don't apply to previous purchases.</p>
		        <p>Each discount is only valid for the day you place your order. (So if you place your order on 30% day, the order cannot be adjusted on 50% day. You would need to place a new order on 50% day and email us to cancel your first order.)</p>
		        <p>We'll get your order out the door within about 3 business days after you place it. Please be patient as we try to keep up with you guys during the sale.</p>
		        <p>We are still small and family-run so we have brought in lots of extra help. Thanks for bearing with us while we work as fast as we can to get all emails and calls answered and orders out the door!</p>
	        	<p>Have other questions? See below for answers to common questions!</p>
	        </h5>
	        <code class="arrow_blackfaq_lf"></code>
	        <h3 class="fl">Ordering</h3>
	        <code class="arrow_blackfaq_rg"></code>
	        <div class="clear_both"></div>
	        <h2>
	        	1. How do I get the Discount?
	        	<p>You just have to be logged in either through the "Log In" button at the top of the website or when you start checkout. Once you sign in, you will see the discounted prices.</p>
	        </h2>
	        <h2>
	        	2. I FORGOT MY PASSWORD. 
	        	<p>No problem! Just click on "Forgot Password" on the Sign In page.  You will be emailed a link to reset your password. If you don't see the email, check your spam.</p>
	            <p>If you are still having problems with your password, you can create a new account with a different email and password. This way, you'll still be able to get your order in before someone else snags what you want.</p>
	        </h2>
	        <h2>
	        	3. I'M HAVING PROBLEMS ON THE SITE.
	        	<p>If you are using a phone or tablet and are having trouble, just try using a computer. We don't have a mobile site yet, but it's in the works!</p>
	            <p>If you are using a computer, make sure you are using the current versions of an updated browser like Chrome, Safari or Firefox. Then clear your cookies and/or cache on your browser to clean out any saved data on your computer that is causing issues while you use websites. For example, on Chrome, you click on Chrome > Clear Browsing Data > Empty the Cache (and) Delete Cookies. Once your cache and cookies are cleared, go back a screen and try logging in again.</p>
	        </h2>
	        <h2>
	        	4. SOME SHOES ARE MISSING FROM MY SHOPPING CART.
	        	<p>Yep - that will happen if someone else has already ordered them. Get your order in as fast as you can!</p>
	        </h2>
	        <h2>
	        	5. WAS OUT WAYYY TOO LATE LAST NIGHT AND CAN'T FIND MY KEYS, LET ALONE MY LAPTOP. CAN I JUST CALL AND 
	HAVE YOU PLACE MY ORDER FOR ME?
	        	<p>Sure! We all have those nights. We highly recommend ordering online if you can as it will be much faster for you. Be patient with us while we have really high call volumes and with our extra help during the sale. We love it when you are super nice!</p>
	        </h2>
	        <h2>
	        	6. CAN I ADD TO AN ORDER I ALREADY PLACED?
	        	<p>Nope. You will have to place separate orders then you need to email us your order numbers. We will ask our Shipping Department to ship them together but this will cause your order to get delayed from being sent out right away since it needs a little special attention. We can't guarantee that we will be able to make it happen during such a busy time, but we can try!</p>
	        </h2>
	        <h2>
	        	7. IS THIS A FINAL SALE?
	        	<p>Yep! These are all FINAL SALE = no returns. That means they are so heavily discounted, that they cannot be returned. You can do whatever you want to make them work for you, re-gift them or sell them!</p>
	        </h2>
	        
	        <code class="arrow_blackfaq_lf"></code>
	        <h3 class="fl">Shipping</h3>
	        <code class="arrow_blackfaq_rg"></code>
	        <div class="clear_both"></div>
	        
	        <h2>
	        	1. I'm an international customer. I'm buying a pair of shoes that are currently $229.95 but after the discount, my order total will be $137.97. Do I still get the free shipping?
	        	<p>You're close!  The free shipping is based on the order total after discounts are applied. So in this case, you would need to add another $61.03 to get the free shipping.</p>
	        </h2>
	        <h2>
	        	2. If I place an order, when will it be shipped out?
	        	<p>This big sale gets REAL busy around here. Though we normally get most orders out the door the same business day, please be patient as we try to keep up with you guys during the sale. We'll get your order out the door usually within 3 business days after you place it. Once it goes out the door, we'll email your Shipping Confirmation to you with your tracking.</p>
	        </h2>
	        
	        <code class="arrow_blackfaq_lf"></code>
	        <h3 class="fl">Other Questions</h3>
	        <code class="arrow_blackfaq_rg"></code>
	        <div class="clear_both"></div>
	        
	        <h2>
	        	1. I placed an order but didn't get a Purchase Confirmation email.
	        	<p>It's probably hiding in your spam folder. If you used Paypal checkout, it was sent to your Paypal email address you used when ordering. If it's not there, we can also resend you one too, so just email us or give us a call.</p>
	        </h2>
	        <h2>
	        	2. I just placed an order. Can I change the size or color? 
	        	<p>We cannot make changes to orders already placed so you will just need to place a new order on our site, then email us to cancel the first order.</p>
	        </h2>
	        <h2>
	        	3. I placed an order before the sale started. Can I get the discount applied to it?
	        	<p>Nope. Sorry. Our sales are not valid for previous purchases. You can always place a new order and return your other one if you would like the discount. It's our way of keeping it fair for everyone.</p>
	        </h2>
	        <h4>Need more help? We are available 7am to 5pm PST throughout the sale: customerservice@solestruck.com or 1-800-494-1260.</h4>
    	</div>
    </div><!--blackfriday_faq_chk  -->
    
    <!-- email_sucess_popup-->     
	
	  <div class="email_popup_success_act popup_pos kgpopup_act">
        	<div class="login_popup_close popup_close_act"></div>
                <div class="ppup_cont_holder">
                                	<h2>Thank You</h2>
                                	<h3>Your message has been sent.</h3>
									<p>We'll get back to you shortly.</p>
                                 <div class="gry_btn popup_close_act brwn_btn" onclick="goToPreviousPage_frmemail()">Continue Shopping</div>
                                </div>
                                    <div class="clear_both"></div>
                                    
                        
            </div>	
	 <!-- email_sucess_popup-->
    
    
   <%-- <div class=" zine_popup kgpopup_act">
		<div class="zine_popup_close popup_close_act"></div>
	    <h1>FIRST TIME VOL. 1: THE CONNECTED ISSUE</h1>
	   <!--  <h2>50% OFF FOR A LIMITED TIME.</h2> -->
	    <div class="btns yell_btn buyit" id="buy_it" onclick="addItemToCheckoutShoppingCart('zine')">
	    <code class="popup_processing_icon"></code>
	  	
	  		
	  	<div id="floatingBarsG" style="display: none;">
			<div class="blockG" id="rotateG_01">
			</div>
			<div class="blockG" id="rotateG_02">
			</div>
			<div class="blockG" id="rotateG_03">
			</div>
			<div class="blockG" id="rotateG_04">
			</div>
			<div class="blockG" id="rotateG_05">
			</div>
			<div class="blockG" id="rotateG_06">
			</div>
			<div class="blockG" id="rotateG_07">
			</div>
			<div class="blockG" id="rotateG_08">
			</div>
		</div>
	  
	  
	  
	  
			<span>$10</span> $5.00 - BUY IT
	        <code class="red_line"></code>
	   </div>
	   <a href="#" class="nothanks" id="no_thanks">NO THANKS. JUST THE SHOES, PLEASE.</a>
		<!-- <img src="https://commondatastorage.googleapis.com/images2.solestruck.com/gae/CheckoutTesting/images/ss-magazine.png" class="firsttime_img" /> -->
	</div><!-- zine_popup --> --%>
	
	 <input type="hidden"  id="solestruck_magazine" value="${Solestruck_Magazine}"/>
     <input id="lastStep" type="hidden" value="${CHECKOUT_DETAILS.checkoutStep}"/>
     <input type="hidden" value="${firstShippingMethod}" id="firstShippingMethod"/>
     <input type="hidden" value="" id="sysTimeForBrowserBack"/>
     <%-- <input type="hidden" id="vendorname" value="${ZineDTO.vendorName}"/> 
     <input type="hidden" id="productName" value="${ZineDTO.productName}"/>
     <input type="hidden" id="productid" value="${ZineDTO.productId}"/>
     <input type="hidden" id="variantId" value="${ZineDTO.variantId}"></input>
     <input type="hidden" id="colorId" value="${ZineDTO.colorId}"></input>
     <input type="hidden" id="inventoryCheck" value="${ZineDTO.inventoryCheck}"></input>
     <input type="hidden" id="retailPrice" value="10"/>
     <input type="hidden" id="salePrice" value="5"/> --%>
     <input type="hidden" id="vendornameKoozie" value="${KoozieDTO.vendorName}"/> 
     <input type="hidden" id="productNameKoozie" value="${KoozieDTO.productName}"/>
     <input type="hidden" id="productidKoozie" value="${KoozieDTO.productId}"/>
     <input type="hidden" id="variantIdKoozie" value="${KoozieDTO.variantId}"></input>
     <input type="hidden" id="colorIdKoozie" value="${KoozieDTO.colorId}"></input>
     <input type="hidden" id="inventoryCheckKoozie" value="${KoozieDTO.inventoryCheck}"></input>
     <input type="hidden" id="retailPriceKoozie" value="${KoozieDTO.retailPrice}"/>
     <div id="hiddenValues4Case"></div>
     <div id="hiddenValues5Case"></div>
     <!-- <input type="hidden" id="salePrice" value="5"/> -->
    <%--  <input type="hidden" id="isSale" value="${ZineDTO.isSale}"/> --%>
    <%--  <input type="hidden" id="isPreorder" value="${ZineDTO.isPreorder}"/> --%>
     
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

<!-- Segment Pixel - SoleStruck--Shopper - DO NOT MODIFY -->
<script src="https://ib.adnxs.com/seg?add=1319617&t=1" type="text/javascript"></script>
<!-- End of Segment Pixel -->
      
      
</body>
</html>
