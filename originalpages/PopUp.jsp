<%@page import="com.veroniqa.frontend.util.VeroniqaConstants" %>
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<%@ page import="com.face4j.facebook.Client" %>
<%@ page import="com.face4j.facebook.factory.FacebookFactory" %>
<%@ page import="com.face4j.facebook.Facebook" %>
<%@ page import="com.face4j.facebook.OAuthAccessToken" %>
<%@ page import="com.face4j.facebook.enums.Permission" %>
<%@ page import="com.face4j.facebook.enums.HttpClientType" %>
<%@ page import="com.face4j.facebook.enums.Display" %>
<%@page import="com.veroniqa.frontend.util.EnvironmentUtil" %>
<!-- <script async src="http://platform.twitter.com/widgets.js" type="text/javascript"></script> -->
<!-- <script async type="text/javascript" src="http://s7.addthis.com/js/250/addthis_widget.js#pubid=ra-4f272ad05297650d"></script> -->
<!-- <script type="text/javascript" src="/_ah/channel/jsapi"></script> -->

<% String protocol=request.getScheme(); %>
<%
	String redirectURL = "";
	if (EnvironmentUtil.getEnvironmentValue("AppMode").equals("STAGING")) 
	{
		Client client = new Client("360291777383552","3352c5aa3b2e0b7ac1cd7423eeebd77e");
		FacebookFactory facebookFactory = new FacebookFactory(client,HttpClientType.URL_FETCH_SERVICE);
	
		if (protocol != null && !protocol.equals("")) 
		{
			if (protocol.equals("http")) 
			{
				redirectURL = facebookFactory.getRedirectURL("http://testing.solestruck.com/renderPage.htm?page=redirect",Display.POPUP, Permission.EMAIL,Permission.OFFLINE_ACCESS,Permission.PUBLISH_STREAM);
			} 
			else 
			{
				redirectURL = facebookFactory.getRedirectURL("https://testing.solestruck.com/renderPage.htm?page=redirect",Display.POPUP, Permission.EMAIL,Permission.OFFLINE_ACCESS,Permission.PUBLISH_STREAM);
			}
		}
	}
	else if (EnvironmentUtil.getEnvironmentValue("AppMode").equals("LIVE")) 
	{
		Client client = new Client("421260994576981", "e4ed5353c4e302f41d3b2d7516a17f4d");   
		FacebookFactory facebookFactory = new FacebookFactory(client,HttpClientType.URL_FETCH_SERVICE);

		if (protocol != null && !protocol.equals("")) 
		{
			if (protocol.equals("http")) 
			{
				redirectURL = facebookFactory.getRedirectURL("http://www.solestruck.com/renderPage.htm?page=redirect",Display.POPUP, Permission.EMAIL,Permission.OFFLINE_ACCESS,Permission.PUBLISH_STREAM);
			} 
			else 
			{
				redirectURL = facebookFactory.getRedirectURL("https://www.solestruck.com/renderPage.htm?page=redirect",Display.POPUP, Permission.EMAIL,Permission.OFFLINE_ACCESS,Permission.PUBLISH_STREAM);
			}
		}
	} 
	else if (EnvironmentUtil.getEnvironmentValue("AppMode").equals("DEV")) 
	{
		Client client = new Client("102732789875589","629718271b12cb4a039e7b99f70985a6");
		FacebookFactory facebookFactory = new FacebookFactory(client,HttpClientType.URL_FETCH_SERVICE);
		redirectURL = facebookFactory.getRedirectURL("http://localhost:9999/renderPage.htm?page=redirect",Display.POPUP, Permission.EMAIL,Permission.OFFLINE_ACCESS, Permission.PUBLISH_STREAM);
	}
%>
<div class="fb_sale_popup popup_pos">
	<div class="popup_close_act"></div>
	<code></code>
	<a href="javascript:void(0)" id="beforeLogin" onclick="loadingForFb('sale');window.open('<%= redirectURL%>','FacebookLogin',
                'left=370,top=180,width=630,height=325,toolbar=1,resizable=0');"></a>
    <a href="javascript:void(0)" id="afterLogin" style="display:none; cursor:default; background-color:#000000;"></a>            
</div>
<div class="fb_sale_question_popup popup_pos popup_pos_act kgpopup_act">
	<div class="fb_sale_question_popup_close popup_close_act"></div>
	<h2>FACEBOOK SALE FAQ</h2>
	<div class="fb_salequestion_holder">
		<h3>ORDERING</h3>
		<b>1. Do I have to use the "Sign in with Facebook" option on your site to get the discount?</b>
		<p class="last">Yep! That is the only way to get the discount.  We are celebrating and honoring all our FB followers that have gotten us here so this discount is specifically for all of you! </p>
		
		<b>2. I'm having trouble logging in with my Facebook login and password.</b>
		<p>If you are using a phone or tablet and are having trouble, just try using a computer.  We don't have a mobile site yet, but it's in the works!  </p>
		<p>If you are using a computer, make sure you are using the current versions of an updated browser like Chrome, Safari or Firefox.  Then clear your cookies and/or cache on your browser to clean out any saved data on your computer that is causing issues while you use websites.  For example, on Chrome, you click on Chrome > Clear Browsing Data > Empty the Cache (and) Delete Cookies.  Once your cache and cookies are cleared, go back a screen and try logging in again.</p>
		<p class="last">If you forgot your Facebook password, you'll have to go to Facebook.com to reset it first.</p>
		
		<b>3. I'm stuck on the subway.  Can I call you and have you place my order for me using my FB login and password?</b>
		<p class="last">Nope - not for this sale.  You will have to place your own order because we need your FB login and password if you want the discount.  We are pretty good at keeping secrets, but we definitely don't want you to tell us that one. </p>
		
		<b>4. Can I add to an order I already placed?</b>
		<p class="last">Nope. You will have to place separate orders then email us your order numbers.  We will ask our Shipping Department to ship them together but this will cause your order to get delayed from being sent out right away since it needs a little special attention.  We can't guarantee that we will be able to make it happen during such a busy time, but we can try!</p>
		<h3>SHIPPING</h3>
		<b>1. I'm an international customer. I'm buying a pair of shoes that are currently $229.95 but after the discount, my order total will be $179.95.  Do I still get the free shipping?</b>
		<p>Yep! We know it's unheard of, but we will give you the free shipping option based on the order total BEFORE the discount is applied.<p>
		  The value on your Customs forms will still be the amount you actually pay AFTER the discount. It's a win-win!</p>
		
		<b>2. If I place an order, when will it be sent out?</b>
		<p class="last">We normally get most orders out the same day if it's placed before 3:30pm PST. During big sales, we can get a bit backed up but we promise that we will get your order out the door as soon as possible, like within two or three days of ordering (Overnight orders are shipped out immediately.)  Once it goes out the door, we'll email your Shipping Confirmation to you with your tracking. </p>
		<h3>OTHER QUESTIONS</h3>
		<b>1. I placed an order but didn't get a Purchase Confirmation email.</b>
		<p class="last">Your Confirmation email was sent to the email address you used when signing in with your Facebook login so check there first.  Then check your spam folder as well which is where they usually are if you don't see them in your inbox.  If it's not there, we can also resend you one too, so just email us or give us a call.</p>
		<b>2. Is this a Final Sale?</b>
		<p class="last">Nope! You can exchange or return them if you need to.</p>
		<b>3. I placed an order before the sale started.  Can I get the discount applied to it?</b>
		<p>Nope. Sorry. Our sales are not valid for previous purchases.  You can always place a new order and return your other one if you would like the discount.  It's our way of keeping it fair for everyone.</p>
	</div>
</div>
<div class="cart_popup popup_pos kgpopup_act">
	<!--<div class="cart_popup popup_pos popup_pos_act" >-->
   		<div class="shoping_cart_popup_close popup_close_act"></div>
			<div class="cart_popup_holder">
    			<h2>YOUR CART <span id="cartCount_popUp"></span></h2>
			    <div id="cartWithContent">
				    <div class="cart_header">
					    <!-- <ul>
					   	  <li class="cart_header_item">Item</li> 
					      <li class="cart_header_item_details">Details</li>
					      <li class="cart_header_price">Price</li>
					      <li>REMOVE</li>
					    </ul> -->
	    				<div class="clear_both"></div>
	    			</div><!-- cart_header -->
				    <div class="cart_display_holder">
					     <ul id="cartItems" class="cart-scroll-pane">
					        <div class="clear_both"></div>
					        <!--
					        <li>Sorry.There are no items in your cart!</li>
					        -->
					        <div class="clear_both"></div>
					     </ul>
					</div>
	    			<div class="clear_both"></div>
	    			<ul class="cart_price_holder">
	    				<li class="cart_subtotal cart_savings" style="display: none;" id="cartsavings"><span>SAVINGS</span><span class="price" id="savings_Price"></span></li>
	    				<li class="cart_subtotal cart_savings" style="display: none;" id="facebookbonus"><span>FACEBOOK BONUS</span><span class="price" id="facebook_bonus"></span></li>
	    				<li class="cart_subtotal"><span>SUBTOTAL</span><span class="price" id="subTotal_Price"></span></li>
	    				
	    				<!-- <li class="cart_subtotal"><span>TOTAL</span><span class="price" id="total_Price">$675.00</span></li> -->
	    			</ul>
	    			<div class="cart_shop_holder">
                        <span class="cart_paypal pay_btn"><code class="popup_processing_icon_paypal"></code></span>
                        <span class="cart_credit brwn_btn" onclick="redirectToCheckout()" >CREDIT / DEBIT<code class="popup_processing_icon_credit"></code></span>
                         <div class="clearall"></div>
                    </div>
					<!-- <div class="cart_submit_area">
					<p>Subtotal: <span>$</span><span id="cartSubtotal">xxx.xx</span></p>
					<div class="clear_both"></div>
						<a class="gry_btn fl mr" onclick="hideCartPopUp();">Continue Shopping</a>
						
						
						<div class="gry_btn fr mr" id="checkout_with_solestruck" style="cursor:pointer" onclick="redirectToCheckout()">Credit/Debit<code class="popup_processing_icon"></code></div>
						<a class="seperator_or">| <br> or <br>| </a> 
						<a class="paypal fr" ></a>
						<span class="fr mr check_with_txt">Checkout With:</span>
						<a class="amazon dn"></a>
						<a class="google dn"></a>
						<div class="clear_both"></div>
						
					</div> -->
				</div><!--cartWithContent-->
				<div class="empty_cart_display_holder" id="cartWithoutContent">
					<h3>Oh-no. You don't have any shoes in your cart. </h3>                          
					<p>You should stop by our <a href="/new-arrivals/">New Arrivals</a>, <a href="/sale-shoes/">Sale</a> or <a href="/vintage-shoes/">Vintage</a> section and start adding<br> 
					some Solestruck awesomeness to your cart.
					</p>                                                        
					<a class="brw_btn yell_btn" id="contn_shpbtn">Continue Shopping</a>   	
                </div><!--CartWithoutContent-->
     			<div class="clear_both"></div>
			</div><!-- cart_popup_holder --> 
	<!-- </div>cart_popup popup_pos popup_pos_act -->	
</div><!-- cart_popup -->
    
    <div class="login_form popup_pos kgpopup_act" >
        <div class="login_popup_close popup_close_act"></div>
            <div class="login_holder">
                <h2>Login</h2>
                <form action="" method="post" name="login" class="login_form_holder">
                    <label class="login_inputfields fl">Email:</label> <i id="rqFld_login_email" style="display:none;" >This field is required</i> <div class="clear_both" ></div>
                    <input name="email_login" type="text" class="input_box" id="email_login" autocorrect = "off"  autocapitalize="off"/>
                    <label class="login_password">Password:</label><!-- <i id="rqFld_login_password" style="display:none;" >Enter your password</i> --><div class="clear_both" ></div>
                    <input name="pass" type="password" class="input_box" id="pass" autocorrect = "off"  autocapitalize="off" />
                    <div class="fl"><input name="keep_me_signin" type="checkbox" class="login_check_box" id="keep_me_sign_in" value="" /><lable>Keep me signed in.</lable><div id="loginmsg"></div></div>
                    <div class="fr login_link"><a href="#" class="form_link" id="forgotPass" onclick="">Forgot Password?</a> <span class="form_link">|</span> <a href="#" class="noAccSign form_link" onclick="">No Account? Sign Up Now.</a></div>
                    <div class="clear_both"></div>
                    <div class="gry_btn fl" id="login_popup">LOGIN<code class="popup_processing_icon"></code></div><i id="invalid_label" class="invalid_user_password"  > Invalid username / password </i>
                   
               		<div class="clear_both"></div>
                </form>
               
               <div class="faceboodline_div">
				    <p class="facebookline"></p>
				    <div class="facebookor">OR</div>
				    <p class="facebookline"></p>
				    <div style="clear:both;"></div>
				</div>
                
                <div class="facebook_signindiv"><a href="#" class="facebook_signin" onclick="loadingForFb('home');window.open('<%= redirectURL%>','FacebookLogin',
                'left=370,top=180,width=630,height=325,toolbar=1,resizable=0');">Login With Facebook</a></div>
                <form id="myaccount_form" action="/MyAccount.htm" method="post">
                <input type="hidden"  id="customerid" name="customerid"   />
            
                </form>
                	
        <div class="clear_both"></div>        
        </div><!-- login_holder -->
    </div><!-- login_form -->
    
    
    
   <!--  sign in action here start -->
   
   <div class="signin_form popup_pos kgpopup_act" id="signIn_form">
        <div class="signin_popup_close popup_close_act"></div>
        <h1>SIGN IN</h1>
        <form>
        	<div class="signin_inputdiv">
        		<!-- <label class="inputspan_txt">Your Email</label> --><i id="rqFld_login_email_new" style="display:none;">This field is required</i>
        		<i id="fbErrorMsg" class="fberror" style="display:none;">There was a problem connecting to Facebook. Please verify your Facebook email address and try again.</i>
        		<div class="clear_both"></div>
        		<input type="text"  class="inputbox_final text_val_act tooltip_input" title="Email" name="email_signin" id="email_login_new" value="Email" autocorrect = "off"  autocapitalize="off">
        		<!-- <span class="inputspan_pwd">Password</span> -->
        		<input type="password" class="inputbox_final_pwd text_val_act tooltip_input text_title_act" title="Password" name="email_password" id="pass_new" value="Password">
        		<span class="pwd" id="signin_pwd" style="font-weight:bold">...</span>
        		<span class="pwd1" id="signin_pwd1">ABC</span>
        		<div class="clear_both"></div>
        	</div>
        	<a href="#" class="signin_forgot_pwd_act">Forgot Password?</a>
        	<a href="#" class="signin_create_ac_act">No Account? Create One.</a>
        	<div class="clear_both"></div>
        	<div>
		    	<a href="#" class="signin_btn login_act yell_btn" id="login_signIn">LOGIN</a>
		    	<div class="or"><b>OR</b></div>
		    	<!-- <a href="#" class="facebook_btn">Login with Facebook</a> -->
		    	<a href="#" class="facebook_btn fb_btn" onclick="loadingForFb('home');window.open('<%= redirectURL%>','FacebookLogin',
                'left=370,top=180,width=630,height=325,toolbar=1,resizable=0');">Login With Facebook</a>
                <div class="or"><b>OR</b></div>
                <a href="#" class="signin_btn login_act yell_btn" id="login_instagram">Login Using Instagram</a>
		    	<div class="clear_both"></div>
		    </div>
        </form>
    </div><!-- signin_form -->
    
    <!-- Popup for wishlist -->
    
    <div class="wish_list_form popup_pos kgpopup_act">
        <div class="signin_popup_close popup_close_act"></div>
        <h1>SIGN IN</h1>
        <form>
        	<div class="signin_inputdiv">
        		<!-- <label class="inputspan_txt">Your Email</label> --><i id="rqFld_login_email_wishList" style="display:none;">This field is required</i>
        		<input type="text"  class="inputbox_final text_val_act tooltip_input" title="Email" name="email_signin" id="email_login_wishList" value="Email" autocorrect = "off"  autocapitalize="off">
        		<!-- <span class="inputspan_pwd">Password</span> -->
        		<input type="password" class="inputbox_final_pwd text_val_act tooltip_input text_title_act" title="Password" name="email_password" id="pass_wishList" value="Password">
        		<span class="pwd wishlist_pwd" id="wl_pwd" style="font-weight:bold">...</span>
        		<span class="pwd1 wishlist_pwd1" id="wl_pwd1">ABC</span>
        		<div class="clear_both"></div>
        	</div>
        	<a href="#" class="signin_forgot_pwd_act">Forgot Password?</a>
        	<a href="#" class="signin_create_ac_act_wishlist">No Account? Create One.</a>
        	<div class="clear_both"></div>
        	<div>
		    	<a href="#" class="signin_btn login_act yell_btn" id="popup_wishlist">LOGIN</a>
		    	<div class="or"><b>OR</b></div>
		    	<!-- <a href="#" class="facebook_btn">Login with Facebook</a> -->
		    	<a href="#" class="facebook_btn fb_btn" onclick="loadingForFb('wishlist');window.open('<%= redirectURL%>','FacebookLogin',
                'left=370,top=180,width=630,height=325,toolbar=1,resizable=0');">Login With Facebook</a>
		    	<div class="clear_both"></div>
		    </div>
        </form>
    </div>
    <!-- End of wishlist -->
    
    <div class="create_account popup_pos kgpopup_act">
        <div class="signin_popup_close popup_close_act"></div>
        <h1>CREATE ACCOUNT</h1>
        <form>
        	<div class="signin_inputdiv">
        		<!-- <label class="inputspan_txt">Your Email</label> --><i id="rqFld_login_email_create" style="display:none;">This field is required</i>
        		<input type="text"  class="inputbox_final text_val_act tooltip_input" title="Email" name="your_email" id="create_email" value="Email" onblur="isEmailAreadyExists()" autocorrect = "off"  autocapitalize="off">
        		<!-- <span class="inputspan_pwd">Password</span> -->
        		<input type="password" class="inputbox_final_pwd text_val_act tooltip_input text_title_act" title="Password" name="create_password" id="create_pass" value="Password">
        		<span class="pwd create_pwd" id="cr_pwd" style="font-weight:bold">...</span>
        		<span class="pwd1 create_pwd1" id="cr_pwd1">ABC</span>
        		<div class="clear_both"></div>
        	</div>
        	<a href="#" class="create_ac_signin_act" id="signin_act">Already Have An Account? Sign in Here.</a>
        	<div class="clear_both"></div>
        	<div>
		    	<a href="#" class="signin_btn ac_create_act yell_btn" onclick="validateSignUp()">CREATE</a>
		    	<div class="or"><b>OR</b></div>
		    	<!-- <a href="#" class="facebook_btn fb_signup_act">Sign up with Facebook</a> -->
		    	<a href="#" class="facebook_btn fb_signup_act fb_btn" onclick="loadingForFb('home');window.open('<%= redirectURL%>','FacebookLogin',
                'left=370,top=180,width=630,height=325,toolbar=1,resizable=0');">Sign up with Facebook</a>
                <a href="/instagram.htm" class="signin_btn ac_create_act_sale yell_btn">INSTAGRAM</a>
		    	<div class="clear_both"></div>
		    </div>
        </form>
    </div><!-- create_account -->
    
    <div class="create_account_sale popup_pos kgpopup_act">
        <div class="signin_popup_close popup_close_act"></div>
        <h1>CREATE ACCOUNT</h1>
        <form>
        	<div class="signin_inputdiv">
        		<!-- <label class="inputspan_txt">Your Email</label> --><i id="rqFld_login_email_create_sale" style="display:none;">This field is required</i>
        		<input type="text"  class="inputbox_final text_val_act tooltip_input" title="Email" name="your_email" id="create_email_sale" value="Email" onblur="isEmailAreadyExistsSale()" autocorrect = "off"  autocapitalize="off">
        		<!-- <span class="inputspan_pwd">Password</span> -->
        		<input type="password" class="inputbox_final_pwd text_val_act tooltip_input text_title_act" title="Password" name="create_password" id="create_pass_sale" value="Password">
        		<span class="pwd create_pwd_sale" id="cr_pwd_sale" style="font-weight:bold">...</span>
        		<span class="pwd1 create_pwd1_sale" id="cr_pwd1_sale">ABC</span>
        		<div class="clear_both"></div>
        	</div>
        	<a href="#" class="create_ac_signin_act_sale">Already Have An Account? Sign in Here.</a>
        	<div class="clear_both"></div>
        	<div>
		    	<a href="#" class="signin_btn ac_create_act_sale yell_btn">CREATE</a>
		    	<div class="or"><b>OR</b></div>
		    	<!-- <a href="#" class="facebook_btn fb_signup_act">Sign up with Facebook</a> -->
		    	<a href="#" class="facebook_btn fb_signup_act fb_btn" onclick="loadingForFb('sale');window.open('<%= redirectURL%>','FacebookLogin',
                'left=370,top=180,width=630,height=325,toolbar=1,resizable=0');">Sign up with Facebook</a>
                <a href="/instagram.htm" class="signin_btn ac_create_act_sale yell_btn">INSTAGRAM</a>
		    	<div class="clear_both"></div>
		    </div>
        </form>
    </div><!-- create_account_sale -->
    
     <div class="create_account_wishlist popup_pos kgpopup_act" id="wishlist_login_create">
        <div class="signin_popup_close popup_close_act"></div>
        <h1>CREATE ACCOUNT</h1>
        <form>
        	<div class="signin_inputdiv">
        		<!-- <label class="inputspan_txt">Your Email</label> --><i id="rqFld_login_email_create_wishlist" style="display:none;">This field is required</i>
        		<input type="text"  class="inputbox_final text_val_act tooltip_input" title="Email" name="your_email" id="create_email_wishlist" value="Email" onblur="isEmailAreadyExistsSale()" autocorrect = "off"  autocapitalize="off">
        		<!-- <span class="inputspan_pwd">Password</span> -->
        		<input type="password" class="inputbox_final_pwd text_val_act tooltip_input text_title_act" title="Password" name="create_password" id="create_pass_wishlist" value="Password">
        		<span class="pwd create_pwd_sale" id="cr_pwd_sale" style="font-weight:bold">...</span>
        		<span class="pwd1 create_pwd1_sale" id="cr_pwd1_sale">ABC</span>
        		<div class="clear_both"></div>
        	</div>
        	<a href="#" class="create_ac_signin_act" id="signIn_wishlist">Already Have An Account? Sign in Here.</a>
        	<div class="clear_both"></div>
        	<div>
		    	<a href="#" class="signin_btn yell_btn" id="signUp_wishlist">CREATE</a>
		    	<div class="or"><b>OR</b></div>
		    	<!-- <a href="#" class="facebook_btn fb_signup_act">Sign up with Facebook</a> -->
		    	<a href="#" class="facebook_btn fb_signup_act fb_btn" onclick="loadingForFb('wishlist');window.open('<%= redirectURL%>','FacebookLogin',
                'left=370,top=180,width=630,height=325,toolbar=1,resizable=0');">Sign up with Facebook</a>
                <a href="/instagram.htm" class="signin_btn ac_create_act_sale yell_btn">INSTAGRAM</a>
		    	<div class="clear_both"></div>
		    </div>
        </form>
    </div><!-- create_account_sale -->
    
    
    <div class="signin_sale popup_pos kgpopup_act" style="display:none">
        <div class="sale_popup_close popup_close_act"></div>
        <div class="sale_signin_popup">
        	<code class="popup_sale_one"></code>
	        <h1>SIGN IN</h1>
	        <span>TO SEE BLACK FRIDAY SALE DISCOUNTS</span>
        </div>
        <form>
        	<div class="signin_inputdiv">
        		<!-- <label class="inputspan_txt">Your Email</label> --><i id="rqFld_login_email_sale" style="display:none;">This field is required</i>
        		<input type="text"  class="inputbox_final text_val_act tooltip_input" title="Email" name="email_signin" id="email_login_sale" value="Email" autocorrect = "off"  autocapitalize="off">
        		<!-- <span class="inputspan_pwd">Password</span> -->
        		<input type="password" class="inputbox_final_pwd text_val_act tooltip_input text_title_act" title="Password" name="email_password" id="pass_sale" value="Password">
        		<span class="pwd signin_sale_pwd" id="sale_pwd" style="font-weight:bold">...</span>
        		<span class="pwd1 signin_sale_pwd1" id="sale_pwd1">ABC</span>
        		<div class="clear_both"></div>
        	</div>
        	<a href="#" class="signin_forgot_pwd_act_sale">Forgot Password?</a>
        	<a href="#" class="signin_create_ac_act_sale">No Account? Create One.</a>
        	<div class="clear_both"></div>
        	<div>
		    	<a href="#" class="signin_btn signin_sale_act yell_btn">SIGN IN</a>
		    	<div class="or"><b>OR</b></div>
		    	<!-- <a href="#" class="facebook_btn">Login with Facebook</a> -->
		    	<a href="#" class="facebook_btn fb_btn" onclick="loadingForFb('sale');window.open('<%= redirectURL%>','FacebookLogin',
                'left=370,top=180,width=630,height=325,toolbar=1,resizable=0');">Login With Facebook</a>
		    	<div class="clear_both"></div>
		    </div>
        </form>
    </div><!-- signin_sale -->
    
     <div id="pre_black_fridaypopup" class="black_fridaypopup popup_pos kgpopup_act">
    	<div class="blackclose_act popup_close_act"></div>
    	<ul id="black_timmer_wrapper">
	        <li class="sale_hr_c1" >&nbsp;</li>
	        <li class="sale_hr_c2" >&nbsp;</li>
	        <li class="sale_min_c1" >&nbsp;</li>
	        <li class="sale_min_c2" >&nbsp;</li>
	        <li class="sale_sec_c1">&nbsp;</li>
	        <li class="sale_sec_c2">&nbsp;</li>
	        <div class="clear_both"></div>
	    </ul><!-- black_timmer_wrapper -->
	    <h1>NO ONE DOES BLACK FRIDAY<br>LIKE SOLESTRUCK<br>DOES BLACK FRIDAY</h1>
	    <!-- <span>WATCH THE TIMER TO KNOW WHEN THE NEXT DISCOUNT BEGINS!</span> -->
	    <code class="popup_line"></code>
	    <ul class="blackfriday_list">
	    	<li><b>FRI, NOV 29*</b> <lable style="margin-left:3px;">30% OFF</lable> ALL SALE ITEMS</li>
	    	<li><b>SAT, NOV 30*</b> <lable style="margin-left:0px;">40% OFF</lable> ALL SALE ITEMS</li>
	    	<li><b>SUN, DEC 1*</b> <lable style="margin-left:-5px;">50% OFF</lable> ALL SALE ITEMS</li>
	    	<li></li>
	    	<span>*DATES REFER TO EASTERN TIME ZONE.</span>
	    </ul>
	   	<div class="clear_both"></div>
   </div><!--pre_black_fridaypopup -->
   <div id="extra_black_fridaypopup" class="black_fridaypopup popup_pos kgpopup_act">
    	<div class="blackclose_act popup_close_act"></div>
    	<ul id="black_timmer_wrapper">
	        <li class="hr_c1">&nbsp;</li>
	        <li class="hr_c2">&nbsp;</li>
	        <li class="min_c1">&nbsp;</li>
	        <li class="min_c2">&nbsp;</li>
	        <li class="sec_c1">&nbsp;</li>
	        <li class="sec_c2">&nbsp;</li>
	        <div class="clear_both"></div>
	    </ul><!-- black_timmer_wrapper -->
	    <h1>SURPRISE! <BR> SALE EXTENDED <BR> ONE MORE DAY <BR> TODAY ONLY</h1>
	    <span style="padding-top: 20px; display: inline-block;">THE SALE ENDS WHEN THE TIMER REACHES ZERO!</span>
	    <code class="popup_line"></code>
	    <ul class="blackfriday_list">
	    	<li><b>MON, DEC 2*</b> <lable style="margin-left:3px;">50% OFF</lable> ALL SALE ITEMS TODAY ONLY!</li>
	    	<li></li>
	    	<span>*DATES REFER TO EASTERN TIME ZONE.</span>
	    </ul>
	    <div class="link_holder">
	    	<a href="#" class="signin_btn counter_signin_act yell_btn">SIGN IN</a>
	    	<div class="or"><b>OR</b></div>
	    	<!-- <a href="#" class="facebook_btn counter_facebook_act">Login with Facebook</a> -->
	    	<a href="#" class="facebook_btn counter_facebook_act fb_btn" onclick="loadingForFb('sale');window.open('<%= redirectURL%>','FacebookLogin',
               'left=370,top=180,width=630,height=325,toolbar=1,resizable=0');">Login With Facebook</a>
            <div class="clear_both"></div>
        </div>
	   	<span><b>GOTTA SIGN IN</b> TO YOUR SOLESTRUCK ACCOUNT OR WITH FACEBOOK<BR> <b>TO ACCESS THE FINAL SALE PRICES.</b></span>
	   	<div class="clear_both"></div>
   </div><!--extra_black_fridaypopup -->
   <div id="extra_black_fridaypopup_next" class="black_fridaypopup popup_pos kgpopup_act">
    	<div class="blackclose_act popup_close_act"></div>
    	<ul id="black_timmer_wrapper">
	        <li class="hr_c1">&nbsp;</li>
	        <li class="hr_c2">&nbsp;</li>
	        <li class="min_c1">&nbsp;</li>
	        <li class="min_c2">&nbsp;</li>
	        <li class="sec_c1">&nbsp;</li>
	        <li class="sec_c2">&nbsp;</li>
	        <div class="clear_both"></div>
	    </ul><!-- black_timmer_wrapper -->
	    <h1>SURPRISE! <BR> SALE EXTENDED <BR> ONE MORE DAY <BR> TODAY ONLY</h1>
	    <span style="padding-top: 20px; display: inline-block;">THE SALE ENDS WHEN THE TIMER REACHES ZERO!</span>
	    <code class="popup_line"></code>
	    <ul class="blackfriday_list">
	    	<li><b>MON, DEC 2*</b> <lable style="margin-left:3px;">50% OFF</lable> ALL SALE ITEMS TODAY ONLY!</li>
	    	<li></li>
	    	<span>*DATES REFER TO EASTERN TIME ZONE.</span>
	    </ul>
	    <a href="#" class="next_btn black_fridaycountdown">NEXT</a>
	   	<div class="clear_both"></div>
   </div><!--extra_black_fridaypopup_next -->
    
    <div id="default_black_fridaypopup" class="black_fridaypopup popup_pos kgpopup_act">
    	<div class="blackclose_act popup_close_act"></div>
    	<ul id="black_timmer_wrapper">
	        <li class="hr_c1">&nbsp;</li>
	        <li class="hr_c2">&nbsp;</li>
	        <li class="min_c1">&nbsp;</li>
	        <li class="min_c2">&nbsp;</li>
	        <li class="sec_c1">&nbsp;</li>
	        <li class="sec_c2">&nbsp;</li>
	        <div class="clear_both"></div>
	    </ul><!-- black_timmer_wrapper -->
	    <h1>SOLESTRUCK <BR> BLACK FRIDAY SALE</h1>
	    <span>WATCH THE TIMER TO KNOW WHEN THE NEXT DISCOUNT BEGINS!</span>
	    <code class="popup_line"></code>
	    <ul class="blackfriday_list">
	    	<li><b>FRI, NOV 29*</b> <lable style="margin-left:3px;">30% OFF</lable> ALL SALE ITEMS</li>
	    	<li><b>SAT, NOV 30*</b> <lable style="margin-left:0px;">40% OFF</lable> ALL SALE ITEMS</li>
	    	<li><b>SUN, DEC 1*</b> <lable style="margin-left:-5px;">50% OFF</lable> ALL SALE ITEMS</li>
	    	<li></li>
	    	<span>*DATES REFER TO EASTERN TIME ZONE.</span>
	    </ul>
	    <div class="link_holder">
	    	<a href="#" class="signin_btn counter_signin_act yell_btn">SIGN IN</a>
	    	<div class="or"><b>OR</b></div>
	    	<!-- <a href="#" class="facebook_btn counter_facebook_act">Login with Facebook</a> -->
	    	<a href="#" class="facebook_btn counter_facebook_act fb_btn" onclick="loadingForFb('sale');window.open('<%= redirectURL%>','FacebookLogin',
               'left=370,top=180,width=630,height=325,toolbar=1,resizable=0');">Login With Facebook</a>
            <div class="clear_both"></div>
        </div>
	   	<span><b>GOTTA SIGN IN</b> TO YOUR SOLESTRUCK ACCOUNT OR WITH FACEBOOK<BR> <b>TO ACCESS THE FINAL SALE PRICES.</b></span>
	   	<div class="clear_both"></div>
   </div><!-- black_fridaypopup -->

    
    <div class="black_fridaypopup_next_act popup_pos kgpopup_act">
    	<div class="blackclose_act popup_close_act"></div>
	    	<ul id="black_timmer_wrapper">
		        <li class="hr_c1">&nbsp;</li>
		        <li class="hr_c2">&nbsp;</li>
		        <li class="min_c1">&nbsp;</li>
		        <li class="min_c2">&nbsp;</li>
		        <li class="sec_c1">&nbsp;</li>
		        <li class="sec_c2">&nbsp;</li>
		        <div class="clear_both"></div>
		    </ul><!-- black_timmer_wrapper -->
		    <h1>NO ONE DOES BLACK FRIDAY<br>LIKE SOLESTRUCK<br>DOES BLACK FRIDAY</h1>
		    <span>WATCH THE TIMER TO KNOW WHEN THE NEXT DISCOUNT BEGINS!</span>
		    <code class="popup_line"></code>
		    <ul class="blackfriday_list">
		    <li><b>FRI, NOV 29*</b> <lable style="margin-left:3px;">30% OFF</lable> ALL SALE ITEMS</li>
	    	<li><b>SAT, NOV 30*</b> <lable style="margin-left:0px;">40% OFF</lable> ALL SALE ITEMS</li>
	    	<li><b>SUN, DEC 1*</b> <lable style="margin-left:-5px;">50% OFF</lable> ALL SALE ITEMS</li>
		    	<li></li>
		    	<span>*DATES REFER TO EASTERN TIME ZONE.</span>
		    </ul>
		    	<a href="#" class="next_btn black_fridaycountdown">NEXT</a>
    </div><!-- black_fridaypopup_next_act -->
    
    <div class="black_fridaypopup_one popup_pos kgpopup_act">
    		<code class="popup_final_one"></code>
		    <h1>FINAL SALE</h1>
		    <h3>BLACK FRIDAY SALE 2013</h3>
		    <code class="popup_line"></code>
		    <p>
		    	This is a <b>FINAL SALE</b>, meaning all sales are not eligible<br>
		    	for returns or exchange. But, at these prices, who cares, right?<br>
		    	You could probably sell them on eBay for more than you're paying.<br>
		    	Our normal shipping rates apply.
		    </p>
		    <a href="#" class="next_btn black_fridaypopup_onenext_act">NEXT</a>
    </div><!-- black_fridaypopup_one -->
    
    <div class="black_fridaypopup_two popup_pos kgpopup_act">
    		<code class="popup_final_two"></code>
		    <h1>FINAL SALE</h1>
		    <h3>BLACK FRIDAY SALE 2013</h3>
		    <code class="popup_line"></code>
		    <p>
		    	This is a <b>FINAL SALE</b>, meaning all sales are not eligible<br>
		    	for returns or exchange. But, at these prices, who cares, right?<br>
		    	You could probably sell them on eBay for more than you're paying<br>
		    	Our normal shipping rates apply.
		    </p>
		    <a href="#" class="next_btn black_fridaypopup_twonext_act">NEXT</a>
    </div><!-- black_fridaypopup_two -->
    
    <div class="geton_one popup_pos kgpopup_act">
    		<code class="popup_get_two"></code>
		    <h1>THIS IS HAPPENING!</h1>
		    <h3>BLACK FRIDAY SALE 2013</h3>
		    <code class="popup_line"></code>
		    <p>
		    	It's a race to get the shoes you want/heart/need!<br>
		    	
		    </p>
		    <p>
		    	The only way to get the shoes is to complete checkout,<br>
		    	so get on it and don't let anyone else grab 'em!
		    </p>
		    <a href="#" class="shop_btn">SHOP THE SALE</a>
    </div><!-- geton_one -->
    
    <div class="geton_two popup_pos kgpopup_act">
    		<code class="popup_get_three"></code>
		     <h1>THIS IS HAPPENING!</h1>
		    <h3>BLACK FRIDAY SALE 2013</h3>
		    <code class="popup_line"></code>
		    <p>
		    	It's a race to get the shoes you want/heart/need!<br>
		    	
		    </p>
		    <p>
		    	The only way to get the shoes is to complete checkout,<br>
		    	so get on it and don't let anyone else grab 'em!
		    </p>
		    <a href="#" class="shop_btn">SHOP THE SALE</a>
    </div><!-- geton_two -->   
    
    <div class="forgot_password_form popup_pos kgpopup_act">
        <div class="login_popup_close popup_close_act"></div>
            <div class="login_holder">
                <h2>FORGOT PASSWORD</h2>
                <form action="" method="post" name="login" class="login_form_holder">
                <label class="login_inputfields fl">Your Email:</label> <i id="rqFld_login_email_forgotpwd" style="display:none;">This field is required</i><div class="clear_both"></div>
                <input name="email_forgot" type="text" class="input_box tooltip_input" title="Your Email" id="email_forgot"  autocorrect = "off"  autocapitalize="off" />
                <p>Please make sure you have <a href="mailto:customerservice@solestruck.com">customerservice@solestruck.com</a> set to an accepted sender so you 

                get the password reset email.</p>
                <input id="resetpassword" name="reset_password" type="button" value="Reset Password" class="gry_btn brwn_btn"/>
                </form>
                <div class="clear_both"></div>        
        </div><!-- login_holder -->
    </div><!-- forgot_password_form -->
    
    <div class="forgot_password_form_sale popup_pos kgpopup_act">
        <div class="login_popup_close popup_close_act"></div>
            <div class="login_holder">
                <h2>FORGOT PASSWORD</h2>
                <form action="" method="post" name="login" class="login_form_holder">
                <label class="login_inputfields fl">Your Email:</label> <i id="rqFld_login_email_forgotpwd" style="display:none;">This field is required</i><div class="clear_both"></div>
                <input name="email_forgot" type="text" class="input_box tooltip_input" title="Your Email" id="email_forgot_sale"  autocorrect = "off"  autocapitalize="off" />
                <p>Please make sure you have <a href="mailto:customerservice@solestruck.com">customerservice@solestruck.com</a> set to an accepted sender so you 

                get the password reset email.</p>
                <input id="resetpasswordsale" name="reset_password" type="button" value="Reset Password" class="gry_btn brwn_btn"/>
                </form>
                <div class="clear_both"></div>        
        </div><!-- login_holder -->
    </div><!-- forgot_password_form_sale -->
    
    <div class="signup_form popup_pos kgpopup_act" >
    
        <div class="login_popup_close popup_close_act"></div>
            <div class="login_holder">
                <h2>Sign Up</h2>
               	<form action="/registerCustomer.htm"  method="post" id="registration" class="login_form_holder" commandName="customerRegistration" >
                   <label class="login_inputfields fl">Email:</label><i id="rqFld_regis_email" style="display:none;">This field required</i><div class="clear_both"></div>
                   <input path="emailid" id="emailid" type="text" class="input_box" onblur="isEmailAreadyExists()" autocorrect = "off"  autocapitalize="off" /><div class="clear_both"></div>
                   <label class="login_password">Choose Password:</label><!-- <i id="rqFld_regis_password" style="display:none;">Enter Your password</i> --><div class="clear_both"></div>
                   <input path="password" id="password" type="password" class="input_box" autocorrect = "off"  autocapitalize="off" />
                   <input name="keep_me_signin" type="checkbox" class="login_check_box" id="showPass"/><lable>Show Password</lable><div id="loginmsg"></div>
                   <div  class="gry_btn fl " id="signup_popup" onclick="validateSignUp()">Create Account<code class="popup_processing_icon"></code></div><div class="clear_both"></div>
                   <!-- <div class="signup_social">
                    	<a href="http://www.facebook.com/" class="facebook">Sign in with Facebook</a>
                    	<a href="http://twitter.com/" class="twitter2">Sign in with Twitter</a>
                    </div> -->
                 </form>
                <div class="clear_both"></div>        
        </div><!-- login_holder -->
    </div><!-- signup_form -->
   
    <div class="wish_list_popup popup_pos kgpopup_act">
   		<div class="shoping_cart_popup_close popup_close_act"></div>
<div class="cart_popup_holder">
	<div id="wishListWithContent">
            	 <h2>Your Wishlist</h2>
                 	<div class="cart_header">
                    	<ul>
                        	<li class="cart_header_item">Item</li>
                            <li class="cart_header_item_details">Details</li>
                            <li class="cart_header_price">Price</li>
                            <li>Remove</li>
                        </ul>
                        <div class="clear_both"></div>
                    </div><!-- cart_header -->
                    <div class="cart_display_holder" id="wish_list_popup_content">
                     	
                     	</div><!-- cart_display_holder -->
                             <div class="clear_both"></div>
                             <div class="cart_submit_area">
                                    	<a class="gry_btn fl" id="contn_shpbtn_wishlist">Continue shopping</a>
                                        <a class="gry_btn fr" onclick="closeWishlistAndOpenCart()">go to  cart</a>
                              </div><!-- cart_submit_area -->
                            <div class="clear_both"></div>
	</div><!--wishListWithContent-->       
	<div id="wishtListWithoutContent"></div>                     
  </div><!-- cart_popup_holder -->
	
    </div><!-- wish_list_popup  -->
    
   <div id="backgroundPopup" style="display:none"></div> 
    <%-- <div class="wish_list_form popup_pos kgpopup_act" >
        <div class="login_popup_close popup_close_act"></div>
            <div class="login_holder">
             <h2>Login</h2>
                <form action="" method="post" name="login" class="login_form_holder">
                    <label class="login_inputfields fl">Email:</label><i id="rqFld_login_email_wishList" style="display:none;" >This field is required</i><div class="clear_both" ></div>
                    <input name="email_login_wishList" type="text" class="input_box" id="email_login_wishList" autocorrect = "off"  autocapitalize="off" />
                    <label class="login_password">Password:</label><!-- <i id="rqFld_login_password_wishList" style="display:none;" >Enter your password</i> --><div class="clear_both" ></div>
                    <input name="pass" type="password" class="input_box" id="pass_wishList" autocorrect = "off"  autocapitalize="off" />
                    
                    <div class="fl">
                    	<input name="keep_me_signin" type="checkbox" class="login_check_box" id="keep_me_sign_in" value="" /><lable>Keep me signed in.</lable><div id="loginmsg"></div>
                    </div>
                    <div class="fr"><a href="#" class="form_link" onclick="$('.wish_list_form').hide();$('.forgot_password_form').fadeIn().css('position','fixed');$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');">Forgot Password?</a> <span class="form_link">|</span> <a href="#" class="form_link" onclick="$('.wish_list_form').hide();$('.signup_form').fadeIn().css('position','fixed');$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');">No Account? Sign Up Now.</a></div>
                       <div class="clear_both"></div>
                    <div class="gry_btn fl" id="popup_wishlist" >LOGIN<code class="popup_processing_icon"></code></div><i id="invalid_label_wishList" class="invalid_user_password" > Invalid username / password </i><div class="clear_both"></div>
                  
                   
                </form>
                  <div class="faceboodline_div">
				    <p class="facebookline"></p>
				    <div class="facebookor">OR</div>
				    <p class="facebookline"></p>
				       <div class="clear_both"></div>
				    </div>
                 <div class="facebook_signindiv"><a href="#" class="facebook_signin" onclick="loadingForFb('wishlist');window.open('<%=CheckoutService.getRedirectURL(protocol)%>','FacebookLogin',
                'left=370,top=180,width=630,height=325,toolbar=1,resizable=0');">Login With Facebook</a></div>
                <form id="myaccount_form" action="/MyAccount.htm" method="post">
                <input type="hidden"  id="customerid" name="customerid"   />
                </form>
                	
        <div class="clear_both"></div>        
           
        </div><!-- login_holder -->
    </div> --%><!-- login_form -->
    
    <div class="reset_password_form popup_pos kgpopup_act">
    <div class="login_popup_close popup_reset_close_act"></div>
	<div class="ppup_cont_holder">
	        	<h2 id="heading_popup">RESET PASSWORD</h2>
	        	<div id="regResetPass">
	            	<form action="" method="post" name="login" class="login_form_holder">
	                    <label class="login_inputfields fl">Your Email:</label><i id="rqFld_login_email_resetpwd" class="dn">This field is required</i><div class="clear_both"></div>
	                    <input name="email" type="text" readonly="readonly" class="input_box" id="email" />
	                    <label class="login_inputfields fl" id="lbl_reset_pwd">New Password:</label><i id="rqFld_login_pass_resetpwd" class="dn">This field is required</i><div class="clear_both"></div>
	                    <input name="passwordfrommail" type="password" class="input_box" id="passwordfrommail" />
	                    <input name="keep_me_signin" type="checkbox" class="login_check_box" id="showResetPass"/><lable>Show Password</lable>
	                    <input name="register" type="button" value="Register" class="gry_btn brwn_btn"  id="registerToChangePassword"/>
	                </form>
	          	</div>
	          	<div id="allreadyRegResetPass" class="dn">
	          		<h4>
	          			<p>
		          			I'm sorry, you must request to change your password before accessing this page. 
		You can do this from the My Account page.
		Thanks for shopping at Solestruck.
	          			</p>
	       			</h4>
	          	</div>
	                    
	        <div class="clear_both"></div>        
	</div><!-- ppup_cont_holder -->
    </div><!-- reset_password_form -->
    
    <div class="brand_bio_popup popup_pos kgpopup_act">
    	<div class="login_popup_close popup_close_act"></div>
			<div class="ppup_cont_holder brand_bio_holder">
			
	        	<h2>ABOUT ${fn:toUpperCase(vendorName)} </h2>
	          	<p>	${vendor.description}  </p>
       			
          	</div>         
        	<div class="clear_both"></div>        
        </div><!-- ppup_cont_holder -->
    </div><!-- brand_bio -->
    
     <div class="lookbook_popup popup_pos kgpopup_act">
    	<div class="login_popup_close popup_close_act" id="video_close_popup"></div>
			
	        	<div class="vedio_holder">
	        	</div>
       			<span id="lb_name">Indian Summer Lookbook Video</span>
          	    
        	<div class="clear_both"></div>        
        </div><!-- ppup_cont_holder -->
    </div><!-- brand_bio -->
    
    <div class="cat_popup popup_pos kgpopup_act">
	<h6>SALE EXTENDED!!<br>CYBER MONDAY</h6>
	<h4>50% OFF ALL SALE ITEMS<br>TODAY ONLY*</h4>
	<span class="cat_need_it_act">I NEED IT!</span>
	<h1>*ALL SALES FINAL DISCOUNTS APPLED AUTOMATICALLY.</h1>
	</div><!-- cat_popup -->
    
    
    <!-- code v8s for facebook -->

<%-- <div class="facebook_popup popup_pos kgpopup_act facebookPopupNormal_act">
 	<div class="facebook_popup_close popup_close_act"></div>
	<div class="facebook_popup_holder">
  		<div class="facebook_txt">
  			<h2>100,000 Likes!</h2>
  			<div class="facebook_txt">To celebrate our 100k Facebook friends, we&rsquo;ve decided to do a sale just for our FB BFFs. Login with Facebook to access the exclusive discounts!</div>
			<p>20% off all sale items tue. sep. 4th*</p>
			<p>30% off all sale items wed. sep. 5th*</p>
			<p>40% off all sale items thu. sep. 6th*</p>
  		</div>   			
  		<div class="facebookdiv finalsale_popup_act"><a href="#" class="facebooklink" onclick="loadingForFb('fbsale');window.open('<%= redirectURL%>','FacebookLogin',
        'left=370,top=180,width=630,height=325,toolbar=1,resizable=0');">Login With Facebook</a></div>
  		</div>
  		<div class="facebookdiv startShoppingInFBLogin" style="display:none;">
   				<a href="#" class="finalsalelink">Start Shopping</a>
   			</div>
  		<p class="facebook_txt1">*All discounts are automatically applied after signing in with Facebook.</p>
   		<div class="clear_both"></div>
</div><!-- loading_icon_cart --> --%>
<code class="loading_page"></code>

<!-- code v8s for finalsale -->
<div class="finalsale_popup popup_pos kgpopup_act">
  		<div class="finalsale_popup_close popup_close_act"></div>
		<div class="finalsale_popup_holder">
   			<div class="finalsale_txt">
   				<h2>Final Sale</h2>
   				<div class="finalsale">Final sale items do not qualify for returns or exchanges,<br/>but with prices so great, if you don&apos;t like them you can<br/>always start an ebay shop!</div>
   			</div>
   			<div class="facebookdiv">
   				<a href="#" class="finalsalelink">Start Shopping</a>
   			</div>
   			<!-- <p class="finalsale_txt1">*All discounts are automatically applied after signing in with Facebook.</p> -->
    		<div class="clear_both"></div>
		</div>
</div>


<%-- <div style="width: 800px; display:none; position: absolute; height: 651px;margin-left:-400px;  z-index: 999999; top:13%;left:50%;background:url('http://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/images/popup_bg-1.png') repeat;">
<div class="facebook_popup popup_pos kgpopup_act facebookPopupCart_act">
 	<div class="facebook_popup_close_1 facebookPopupCart_act_close"></div>
	<div class="facebook_popup_holder">
  		<div class="facebook_txt">
  			<h2>100,000 Likes!</h2>
  			<div class="facebook_txt">We see you have a sale item.  To get an additional discount on your sale items please login with Facebook.</div>
			<p>20% off all sale items tue. sep. 4th*</p>
			<p>30% off all sale items wed. sep. 5th*</p>
			<p>40% off all sale items thu. sep. 6th*</p>
			
			<div class="facebook_txt">To celebrate our 100k Facebook friends, we&rsquo;ve decided to do a sale just for our FB BFFs. Login with Facebook to access the exclusive discounts!</div>
  		</div>   			
  		<div class="facebookdiv finalsale_popup_act"><a href="#" class="facebooklink" onclick="loadingForFb('fbsale');window.open('<%= redirectURL%>','FacebookLogin',
        'left=370,top=180,width=630,height=325,toolbar=1,resizable=0');">Login With Facebook</a></div>
  		</div>
  		<p class="facebook_txt1">*All discounts are automatically applied after signing in with Facebook.</p>
   		<div class="clear_both"></div>
</div>
</div> --%>

<div class="nav_popup popup_pos nav_pos kgpopup_act">
    <div class="nav_popup_close popup_close_act"></div>
        
        <div class="nav_pops_holder">
            <h3>
                SOLESTRUCK 2013 HOLIDAY<br>
                SHIPPING SCHEDULE
            </h3>
            <h4>FOR DELIVERY BY DECEMBER 24</h4>
            <code class="nav_popup_line"></code>
            <ul>
                <li>
                    <div class="nav_address">
                        <h2>US ADDRESSES:</h2>
                        <span>
                            Free Fedex Ground:<br>
                            Fedex 2-day Express:<br>
                            Fedex Overnight:
                        </span>
                    </div>
                    <div class="nav_ord_bef">
                        <!-- <h2>ORDER BEFORE 4PM PST ON:</h2> -->
                        <span>
                            Order before 4:00 pm PST on December 17<br>
                            Order before 4:00 pm PST on December 20<br>
                            Order before 4:00 pm PST on December 23
                        </span>
                    </div>
                </li>
                <li>
                    <div class="nav_address">
                        <h2>PO BOXES, HAWAII & ALASKA:</h2>
                        <span>
                            Standard (USPS Parcel Post):<br>
                            Express (USPS Priority):
                        </span>
                    </div>
                    <div class="nav_ord_bef">
                        <!-- <h2>ORDER BEFORE 11AM PST ON:</h2> -->
                        <span>
                            Order before 11:00 am PST on December 17<br>
                            Order before 11:00 am PST on December 20
                        </span>
                    </div>
                </li>
                <li>
                    <div class="nav_address">
                        <h2>APO/FPO:</h2>
                        <span>
                            Standard (USPS Parcel Post):<br>
                            Express (USPS Priority):
                        </span>
                    </div>
                    <div class="nav_ord_bef">
                        <!-- <h2>ORDER BEFORE 11AM PST ON:</h2> -->
                        <span>
                            Order before 11:00 am PST on December 13<br>
                            Order before 11:00 am PST on December 12
                        </span>
                    </div>
                </li>
                <li>
                    <div class="nav_address">
                        <h2>CANADA:</h2>
                        <span>
                            Standard (USPS Priority Int'l):<br>
                            Express (FedEx Int'l Economy):
                        </span>
                    </div>
                    <div class="nav_ord_bef">
                        <!-- <h2>ORDER BEFORE 11AM PST ON:</h2> -->
                        <span>
                            Order before 11:00 am PST on December 13<br>
                            Order before 04:00 pm PST on December 17
                        </span>
                    </div>
                </li>
                <li>
                    <div class="nav_address">
                        <h2>ALL OTHER COUNTRIES:</h2>
                        <span>
                           Standard (USPS Priority Int'l):<br>
                           Express (FedEx Int'l Economy):
                        </span>
                    </div>
                    <div class="nav_ord_bef">
                        <!-- <h2>ORDER BEFORE 11AM PST ON:</h2> -->
                        <span>
                            Order before 11:00 am PST on December 10<br>
                            Order before 04:00 pm PST on December 16
                        </span>
                    </div>
                </li>
                <li>
                	<h5 style="font-size:15px;">*These dates are given by the different carriers but try to order as early as you can in case your package does experience some delays during shipping or in Customs.</h5>
                </li>
            </ul>
        </div>
</div><!-- navt_popup -->

