var loadingScreenTimeHandle;
var earlierMax=0.00;
var myCustomerDetail=null;
//var usProtect=['AA','AE','AP','AS','GU','MH','PW','PR','VI','AK','HI'];
$(document).ready(function(){
	/*if( $("#cartItems").children().length==0){
		$("#no_items_msg").show();
		window.location='/redirectToNonSecurePage.htm?rdirectURL=/';
		return;
	}*/
	$('.same_shpping_address_act').click( function() {
		if(typeof ClickTaleExec=="function"){
			ClickTaleExec("$('.same_shpping_address_act').trigger('click');");
		}
		if ($(this).is(':checked'))
			$('.shipping_same_address_act').hide();
		else 
			$('.shipping_same_address_act').show();
		//$('.custom_dropdown').kgcustomdropdown();
		if($("#shipCountryCode").next('select')!=null)
			$("#shipCountryCode").next('select').attr("disabled","disabled");
	} );
	//$('.custom_dropdown').kgcustomdropdown();
	$("input").attr("autocomplete","off");
	$("#logo").click(function(){
		window.location='/redirectToNonSecurePage.htm?rdirectURL=/';
	});
	$("#checkout_login").click(showLoginForm);
	
	$('#cusEmail').blur(function(){
		if(typeof ClickTaleExec=="function"){
			ClickTaleExec("$('#cusEmail').trigger('blur');");
		}		
		if($('.login_form').is(':visible'))
			return;
		if($("#customerId").val()=='')
			{
			    var emailid=$.trim($(this).val());
			    if(emailid=='')
			    	return;
				if(isValidEmail(emailid)){
					$(this).siblings('i').hide();
					checkAvailablilityForNewCust(emailid);
				}
				else{
					$(this).siblings('i').html('Invalid Email id!').show();
					setTimeout(function() {
						if (!$('.login_form').is(':visible'))
							$('#cusEmail').focus();
				        }, 100);
				}
			}
	});
	
	$(".login_popup_close").click(function(){
		if(typeof ClickTaleExec=="function"){
			ClickTaleExec("$('.login_popup_close').trigger('click');");
		}
		$(".login_form").hide();
	});
	$("#checkout_login_button").click(getCustomerDetailOnSingIn);
	$("#userEmailId").keyup(function(event){
		if(typeof ClickTaleExec=="function"){
			ClickTaleExec("$('#userEmailId').trigger('keyup');");
		}
		if(event.keyCode==13)
			getCustomerDetailOnSingIn();
	});
	$("#userPassword").keyup(function(event){
		if(typeof ClickTaleExec=="function"){
			ClickTaleExec("$('#userPassword').trigger('keyup');");
		}
		if(event.keyCode==13)
			getCustomerDetailOnSingIn();
	});
	$("#forgot_emailId").keyup(function(event){
		if(typeof ClickTaleExec=="function"){
			ClickTaleExec("$('#forgot_emailId').trigger('keyup');");
		}
		if(event.keyCode==13)
			resetPassword();
	});
	
	$("#billCountry").val('USA');
	$("#billCountry").change(toggleBillStateBox);

	//$("#shipCountryCode").find('li').live("click",function(){
	$("#shipCountry").change(toggleShipStateBox);
	//$("#shipCountryCode").click(function() { return false; });
	//Disabling Shipping Country selection since we should not allow international customers to have different shipping and billing address
	$("#shipCountryCode").attr('disabled',true);
	$("#shipCountryCode").find('span.custom_drop_nav').hide();
	$("#shipCountryCode").children().attr('disabled',true);
	
	$('.your_info_act').click(saveCustomerDetails);
	
	$('.shipping_act').click(saveShippingService);
	$('.shipping_back_act').click(showYourInfo);
	
	$('.payment_act').click(savePaymentDetails);
	$('.payment_back_act').click (showShippingInfo);
	
	$('.cmplte_purchse_act').click(confirmPurchase);
	
	$('a.checkout_1_act').click(navigate);
	$('a.checkout_2_act').click(navigate);
	$('a.checkout_3_act').click(navigate);
	//loadShoppingCartForCheckout();
	$("#cusSubTotal").text("Subtotal: $"+$("#cart_subTotal").val());
	
	$("#cardExpMonth").val($('#currentMonth').val());
	var currentMonth=parseInt($("#currentMonth").val(),10);
	var currentYear=parseInt($("#currentYear").val(),10);
	$("#cardExpYear").change(function(){
		if(typeof ClickTaleExec=="function"){
			ClickTaleExec("$('#cardExpYear').trigger('change');");
		}
		var selectedMonth=parseInt($("#cardExpMonth").val(),10);
		var selectedYear=parseInt($("#cardExpYear").val(),10);
		if(selectedYear==currentYear)
		{
			if(selectedMonth>=currentMonth)
			{
				$("#cardExpMonth").closest('div').removeClass('error_input_field');
				//$("#cardExpMonth").removeattr('placeholder','Not valid');
			}
			else
			{
				$("#cardExpMonth").closest('div').addClass('error_input_field');
				$("#cardExpMonth").attr('placeholder','Not valid');
			}
		}
		else
		{
			$("#cardExpMonth").closest('div').removeClass('error_input_field');
			//$("#cardExpMonth").removeattr('placeholder','Not valid');
		}
	});
	$("#cardExpMonth").change(function(){
		if(typeof ClickTaleExec=="function"){
			ClickTaleExec("$('#cardExpMonth').trigger('change');");
		}
		var selectedMonth=parseInt($("#cardExpMonth").val(),10);
		var selectedYear=parseInt($("#cardExpYear").val(),10);
		if(selectedYear==currentYear)
		{
			if(selectedMonth>=currentMonth)
			{
				$("#cardExpMonth").closest('div').removeClass('error_input_field');
				//$("#cardExpMonth").removeattr('placeholder','Not valid');
			}
			else
			{
				$("#cardExpMonth").closest('div').addClass('error_input_field');
				$("#cardExpMonth").attr('placeholder','Not valid');
			}
		}
		else
		{
			$("#cardExpMonth").removeClass('error_input_field');
			//$("#cardExpMonth").removeattr('placeholder','Not valid');
		}
		
	});
	$('#cardCCV').blur(function(){
		if(typeof ClickTaleExec=="function"){
			ClickTaleExec("$('#cardCCV').trigger('blur');");
		}
		var ccv_val=$('#cardCCV').val();
		var regexNum = /^\d{3,4}$/;
		if(!regexNum.test(ccv_val)){
			$("#cardCCV").addClass('error_input_field');
			$("#invalid_text").show();	
		}
		else{
			$("#cardCCV").removeClass('error_input_field');
			$("#invalid_text").hide();
		}
	});
		
});

function showLoginForm()
{
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("$('#checkout_login').trigger('click');");
	}

	$('div.login_form').find('div.login_popup_close').show();
	$("#invalid_label").hide();
	if($.trim($("#cusEmail").val())!='')
		$("#userEmailId").val($.trim($("#cusEmail").val()));	
	else
		$("#userEmailId").val('');
	$("#userPassword").val('');
	$(".login_form").show().css('position','fixed');
	$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
	//$("#backgroundPopup").fadeIn();
	//$("#userEmailId").focus();
	$("#userEmailId").select();
}

function navigate()
{
	var className=$(this).attr('class');
	var curPage=$("#curPage").val();
	if(className=='checkout_1_act'){
		showYourInfo();
	}
	else if(className=='checkout_2_act'){
		if(curPage==1)
			saveCustomerDetails();
		else
			showShippingInfo();
	}
	else if(className=='checkout_3_act'){
		saveShippingService();
	}
/*	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("navigate();");
	}
*/}

function saveCustomerDetails()
{
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("saveCustomerDetails();");
	}
	//return;
	//wasCustomerDetailChanged need to be called
	if( $("#cartItems").children().length==0){
		$("#no_items_msg").show();
		window.location='/redirectToNonSecurePage.htm?rdirectURL=/';
		return;
	}
		
	if($("#ship_add").is(":checked"))
		copyBillingAddressToShippingAddress();
	if(!validateCustomerDetails())
		return;
	var customerDetail=backUpCustomerDetail();
	//console.log(customerDetail.shippingAddress.countryName+"-"+customerDetail.billingAddress.country);
	//console.log(customerDetail.billingAddress.countryName+"-"+customerDetail.shippingAddress.country);
	//console.log(customerDetail.shippingAddress.state);
	//console.log(customerDetail.billingAddress.state);
	var finished=false;
	var myurl;
	if(customerDetail.customerId==null)
		myurl='/createNewCustomerDetail.htm';
	else
		{
			myurl='/updateCustomerDetail.htm';
			customerDetail.password=null;
		}
	setTimeout(function(){	
		if(finished==false){
	$('.loading_page').show();}
	},1000);
	//$('#backgroundPopup').show().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed').show();
	//console.log("my url is "+myurl);
	$.ajax({
		url:myurl,
		type:'POST',
		dataType:'json',
		cache:false,
		contentType:'application/json',
		data:$.toJSON(customerDetail),
		success:function(resp){
			//console.log("**Response "+resp);
			if(resp==null){
				//$("#customerId").val('-1');//Indicating already existing user
				$('#cusEmail').siblings('i').css('color','#D22E2E').html('Email id is not available!').show();
				$('#cusEmail').focus();
				return;
			}
			$("#cusEmail").attr('readonly',true);
			$("[id^='newcust_passwd']").hide();
			myCustomerDetail=resp;
			if(resp.customerId!=null && resp.customerId!=''){
				$("#customerId").val(resp.customerId);
			}
			if($("#cart_shipCharge").val()==parseFloat('0.00'))
			{
				$("#ship_shippingPrice").text("Shipping : Please Select Shipping Method");
			}
			else
				listShippingServices();
			//$("#ship_shippingPrice").text("Shipping : $"+$("#cart_shipCharge").val());
			//$("#ship_SubTotal").text("Your Subtotal : $"+$("#cart_grandTotal").val());
			finished=true;
			showShippingInfo();
		}
	});
	
}

function setShippingService()
{
	/*if(typeof ClickTaleExec=="function"){
		ClickTaleExec("setShippingService();");
	}*/
	//return;
	var myCountryCode=getCountryCode($.trim($("#shipCountry").val()),"shipping");
	var myStateCode=null;//////////////////////////////////////////////////
	if(myCountryCode=='US')
		{
		myStateCode=getStateCode($.trim($("#shipState").val()), 'shipping');
		$('#shipping_alert_domestic').show();
		$('#shipping_alert_international').hide();
		}
	else if(myCountryCode=='CA')
		{
		myStateCode=getStateCode($.trim($("#shipState1").val()), 'shipping');
		$('#shipping_alert_domestic').hide();
		$('#shipping_alert_international').show();
		}
	$(".cart_shipping_payment_gateway").siblings('i').hide();	
	var serviceZoneId=$('input[name="shipping_method"]:checked').val();
	var curObject=$('input[name="shipping_method"]:checked').next();

	/*var shipServiceType=curObject.text();

	var shippingPriceObj=curObject.next();

	var deliveryDaysObj=shippingPriceObj.next();

	var deliveryDays=deliveryDaysObj.text();*/

	//console.log("Delivery days are the "+deliveryDays);
	//console.log('ShippingID : '+serviceZoneId);
	if(serviceZoneId==null || serviceZoneId=='') 
		return;
	$.ajax({
		url:'/setShippingService.htm',
		cache:false,
		type:'GET',
		data:{'serviceZoneId':serviceZoneId,'countryCode':myCountryCode,'stateCode':myStateCode},
		success:function(checkoutDetails){
			onShippingServiceSet(checkoutDetails);
		}
		
	});
}

function onShippingServiceSet(checkoutDetails)
{

	/*if(typeof ClickTaleExec=="function"){
		ClickTaleExec("onShippingServiceSet("+JSON.stringify(checkoutDetails)+");");
	}*/
	var serviceZoneId=$('input[name="shipping_method"]:checked').val();
	////console.log("**Response of setShippingService : "+resp);
	if(checkoutDetails.shippingPrice==parseFloat('0.00'))
		{
			$("#ship_shippingPrice").text("Shipping: FREE");
			$("#payment_shippingPrice").text("Shipping: FREE");
			$("#cart_shipCharge").val("FREE");
			$("#selectedShipCharge").text("Shipping:  FREE");
			//shippingPriceObj.text("FREE");
		}
	else
		{
			$("#ship_shippingPrice").text("Shipping: $"+checkoutDetails.shippingPrice.toFixed(2));
			$("#payment_shippingPrice").text("Shipping: $"+checkoutDetails.shippingPrice.toFixed(2));
			$("#cart_shipCharge").val(checkoutDetails.shippingPrice.toFixed(2));
			$("#selectedShipCharge").text("Shipping: $"+checkoutDetails.shippingPrice.toFixed(2));
			//shippingPriceObj.text("$"+checkoutDetails.shippingPrice.toFixed(2));
		}
	$(checkoutDetails.shippingService).each(function(index,item){
		var html='<div class="clear_both"></div>';
		var shippingTypeId=item.zone.shippingServiceType.id;
		var serviceName=item.zone.shippingServiceName;
		//console.log("shippingServices "+serviceName);
		var serviceTypeName=item.zone.shippingServiceTypeName;
		var shippingPrice='';
		var deliveryDays;
		if(item.totalShippingPrice.toFixed(2)==0.00 && item.zone.freeLimit!=null && item.zone.freeLimit>0.0)
		{
			shippingPrice='FREE on all orders over $'+item.zone.freeLimit+'!';
			if(serviceName=="FedEx" && serviceTypeName=="Express International")
				isShippingFree=true;
		}
		else if(item.totalShippingPrice.toFixed(2)==0.00)
		{
			shippingPrice='FREE';
		}
		else
			shippingPrice='$'+item.totalShippingPrice.toFixed(2);
		//alert(shippingPrice);
		if(item.zone.deliveryDaysLowerLimit=='0' && item.zone.deliveryDaysUpperLimit=='1')
			deliveryDays=item.zone.deliveryDaysUpperLimit+' Business Day';
		else if(item.zone.deliveryDaysLowerLimit=='0' && item.zone.deliveryDaysUpperLimit=='2')
			deliveryDays=item.zone.deliveryDaysUpperLimit+' Business Days';
		else
		deliveryDays=item.zone.deliveryDaysLowerLimit+'-'+item.zone.deliveryDaysUpperLimit+' Business Days';
		/*if(item.zone.freeLimit!=null && item.zone.freeLimit>0.0)
		{
			shippingPrice='FREE on all orders over $'+item.zone.freeLimit+'!';
		}*/
		if(serviceZoneId==item.zone.key.id)
		{
			html+='<input name="shipping_method" type="radio"  value="'+item.zone.key.id+'" class="shipping_radio_button" onclick="setShippingService();" checked="true"/>';
			html+='<span>'+serviceTypeName+'<br>'+serviceName+'</span><span class="price">'+shippingPrice+'</span><span> Estimated Delivery Time<br>'+deliveryDays+'</span>';
			html+='<div class="clear_both"></div>';
		}
		else
		{
			html+='<input name="shipping_method" type="radio"  value="'+item.zone.key.id+'" class="shipping_radio_button" onclick="setShippingService();"/>';
			html+='<span>'+serviceTypeName+'<br>'+serviceName+'</span><span class="price">'+shippingPrice+'</span><span> Estimated Delivery Time<br>'+deliveryDays+'</span>';
			html+='<div class="clear_both"></div>';
		}
		
		//console.log("shippinh html "+html);
		if(serviceTypeName=="Standard International"){
			
			$("#int_std").html(html);
		}
		
		if(serviceTypeName=="Express International"){
			
			$("#int_exp").html(html);
		}
		
		if(serviceTypeName=="Standard Shipping" || serviceTypeName=="Standard USPS"){
			
			$("#std").html(html);
		}
		
		if(serviceTypeName=="Express Shipping" || serviceTypeName=="Express USPS"){
			
			$("#exp").html(html);
		}
		
		if(serviceTypeName=="Overnight Shipping"){
			
			$("#ovn").html(html);
		}
		
		
	});
	//alert("grandTotal"+cart.grandTotal.toFixed(2));
	$("#ship_SubTotal").text("Subtotal: $"+checkoutDetails.shoppingCart.subTotal.toFixed(2));
	$("#ship_Total").text("Total: $"+checkoutDetails.grandTotal.toFixed(2));
	
	$("#payment_SubTotal").text("Subtotal: $"+checkoutDetails.shoppingCart.subTotal.toFixed(2));
	
	$("#payment_Total").text("Total: $"+checkoutDetails.grandTotal.toFixed(2));
	
	$("#cart_subTotal").val(checkoutDetails.shoppingCart.subTotal.toFixed(2));
	
	$("#cart_grandTotal").val(checkoutDetails.grandTotal.toFixed(2));
	$("#selectedSubTotal").text("Subtotal: $"+checkoutDetails.shoppingCart.subTotal.toFixed(2));
	//$("#selectedShipCharge").text("Shipping: "+shipPrice);
	$("#selectedFinalTotal").text("Total: $"+checkoutDetails.grandTotal.toFixed(2));

	//$("#selectedShipServiceInfo").text(serviceName+"Shipping: "+checkoutDetails.shippingPrice.toFixed(2));
	//$("#selectedShipDeliveryInfo").text("(Should Arrive in "+deliveryDays+")");
	
	//listShippingServices();

}

function saveShippingService()
{
	/*if(typeof ClickTaleExec=="function"){
		ClickTaleExec("saveShippingService();");
	}*/
	$(".loading_page").show();
	//$("#backgroundPopup").show();
	if( $("#cartItems").children().length==0){
		$("#no_items_msg").show();
		window.location='/redirectToNonSecurePage.htm?rdirectURL=/';
		return;
	}
	if(!validateShippingMethods())
		return;
	
	showPaymentInfo();
}
function savePaymentDetails()
{
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("savePaymentDetails();");
	}
	if( $("#cartItems").children().length==0){
		$("#no_items_msg").show();
		window.location='/redirectToNonSecurePage.htm?rdirectURL=/';
		return;
	}
	
	if(!validatePaymentDetails())
		return;
	var billAddr='',shipAddr='';
	billAddr+='<li>'+$("#cusFirstName").val()+' '+$("#cusLastName").val()+'</li>';
	billAddr+='<li>'+$("#billAddress1").val()+'</li>';
	billAddr+='<li>'+$("#billCity").val()+' ';
	if($("#billCountry").val() == 'USA' || $("#billCountry").val() == 'CANADA')
		{
			billAddr+=$("#billState").val()+' '+'</li>'+'<li>'+$("#billCountry").val()+' '+$("#billZip").val()+'</li>';
		}
	else
		{
			
			billAddr+=$("#billProvince").val()+' '+'</li>'+'<li>'+$("#billCountry").val()+' '+$("#billZip").val()+'</li>';
		}
	$("#selectedBillInfo").html(billAddr);
	
	shipAddr+='<li>'+$("#cusFirstName").val()+' '+$("#cusLastName").val()+'</li>';
	shipAddr+='<li>'+$("#shipAddress1").val()+'</li>';
	shipAddr+='<li>'+$("#shipCity").val()+' ';
	
	if($("#shipCountry").val() == 'USA' || $("#shipCountry").val() == 'CANADA')
	{
		shipAddr+=$("#shipState").val()+' '+'</li>'+'<li>'+$("#shipCountry").val()+' '+$("#shipZip").val()+'</li>';
	}
else
	{
		
		shipAddr+=$("#shipProvince").val()+' '+'</li>'+'<li>'+$("#shipCountry").val()+' '+$("#shipZip").val()+'</li>';
	}
	$("#selectedShipInfo").html(shipAddr);
	
	var last5Digits=getCardLast5Digits();
	$("#selectedCardNumber").text("Card Ending in: "+last5Digits);
	var curObject=$('input[name="shipping_method"]:checked').next();
	var shipServiceType=curObject.text();
	curObject=curObject.next();
	var shipPrice=$("#ship_shippingPrice").text();//curObject.text();
/*	if(shipPrice>0)
		shipPrice="$"+shipPrice;
	else
		shipPrice="FREE";*/
		
	curObject=curObject.next();
	var deliveryDays=curObject.text();
	$("#selectedShipServiceInfo").text(shipServiceType+" "+shipPrice);
	$("#selectedShipDeliveryInfo").text("(Should Arrive in "+deliveryDays+")");
	//$("#selectedSubTotal").text("Subtotal : $"+$("#cart_subTotal").val());
	//$("#selectedShipCharge").text("Shipping: "+shipPrice);
	//$("#selectedFinalTotal").text("Your Subtotal: $"+$("#cart_grandTotal").val());
	$(".loading_page").show();
	//$("#backgroundPopup").show();
	//showConfirmInfo();
	confirmPurchase();
}


function confirmPurchase()
{
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("confirmPurchase();");
	}
	//return;
	if(!validatePaymentDetails())
		return;
	$('.cmplte_purchse_act').unbind();
	var myCardNumber=$.trim($("#cardNumber").val());
	var cardExpMonth=$.trim($("#cardExpMonth").val());
	var cardExpYear=$.trim($("#cardExpYear").val());
	var cardCCV=$.trim($("#cardCCV").val());
	var cardHolderName=$.trim($("#cardHoldeName").val());
	var deliveryDays=$("#selectedShipDeliveryInfo").text();
	var finished=false;
	//console.log("**** delivery days are "+deliveryDays);
	showLoadingScreen("Processing....");
	//$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed').show();
	setTimeout(function(){
		if(finished==false){
		$('.loading_page').show();}
	},1000);
	$.ajax({
		url:'/completePurchase.htm',
		cache:false,
		type:'POST',
		data:{cardType:'visa',cardNumber:myCardNumber,expmonth:cardExpMonth,expyear:cardExpYear,ccv:cardCCV,cardHolderName:cardHolderName,deliveryDays:deliveryDays},
		success:function(checkoutResponse){
			//console.log("**Response of setShippingService : "+response);
			if(checkoutResponse.responseMessage=='success' && checkoutResponse.sequenceIds.length==0){
				
				//window.location='/redirectToNonSecurePage.htm?rdirectURL=showThankyou.htm';
				window.location='/showThankyou.htm';
				//populateThankYouPage(cart);
				//hideLoadingScreen();
				//showThankYouInfo();
			}
			else{
				$("#complete_checkout_error").text(checkoutResponse.responseMessage);
				$("#complete_checkout_error").show();
				$('.loading_page').hide();
				for(index=0;index<checkoutResponse.sequenceIds.length;index++)
				{
					//console.log("sequence id is "+checkoutResponse.sequenceIds[index]);
					$("#message_"+checkoutResponse.sequenceIds[index]).show();
				}
				hideLoadingScreen();
				finished=true;
				$('.loading_page').hide();
				$('.cmplte_purchse_act').click(confirmPurchase);
				//$('#backgroundPopup').hide();
			}
		}
	});
}

function createNewAccount()
{
	var myemail=$.trim($("#userEmailId").val());
	var mypassword=$.trim($("#userPassword").val());
	var msg="";
	/*
	if(myemail=="")
		msg="Please Enter Email";
	else if(mypassword=="")
		msg='Please Enter Password';
	 	
	if(msg!=""){
		$("#invalid_label").text(msg);
		$("#invalid_label").show();
		return;
	}
	*/
	$("#invalid_label").hide();
	resetCustomerDetails();
	//$("#cusEmail").val($.trim($("#userEmailId").val()));
	$("#cusEmail").removeAttr("readonly");
	//$("#password").val($.trim($("#userPassword").val()));
	//$("#confirmpassword").val($.trim($("#userPassword").val()));
	$("#newcust_passwd").show();
	$("#newcust_passwd_confrm").show();
	$("#customerId").val('');
	$(".login_form").hide();
	$("#backgroundPopup").fadeOut();
	//checkAvailablilityForNewCust($.trim($("#userEmailId").val()));
	$("#cusEmail").focus();
}

function showForgotPassword()
{
	$(".login_form").hide();
	$("#forgot_invalid_label").hide();
	$(".forgot_password_form").show();
}

function resetPassword()
{
	if($.trim($("#forgot_emailId").val())=='')
	{
		$("#forgot_invalid_label").text("Please enter your email");
		$("#forgot_invalid_label").show();
		return;
	}
	$("#forgot_invalid_label").hide();
	$("#forgot_msg").hide();
	$.ajax({	
			url:'/resetPassword.htm',
			cache:false,
			data:{'email':$.trim($("#forgot_emailId").val())},
			success:function(msg){
				//console.log("The reset status "+msg);
				//$(".forgot_password_form").hide();
				//$("#backgroundPopup").fadeOut();
				//$("#forgot_invalid_label").text(msg);
				//$("#forgot_invalid_label").show();
				$(".forgot_password_form").hide();
				$('#backgroundPopup').hide();
			}
		});
}

function getCustomerDetailOnSingIn()
{
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("getCustomerDetailOnSingIn()");
	}
	var myemail=$.trim($("#userEmailId").val());
	var mypassword=$.trim($("#userPassword").val());
	var msg="";
	if(myemail=="")
		msg="Please Enter Email";
	else if(!isValidEmail(myemail))
		{
			msg="Please Enter a Valid Email!";
		}
	if(mypassword=="")
		msg='Please Enter Password';
	
	if(msg!=""){
		$("#invalid_label").text(msg);
		$("#invalid_label").show();
		return;
	}
	$("#invalid_label").hide();	
	$('#checkout_login_button').addClass('popup_processing_btn');
	$.ajax({
		url:'/getCustomerDetailByAuthentication.htm',
		cache:false,
		type:'POST',
		dataType:'json',
		data:{'emailId':myemail,'password':mypassword},
		success:function(customerDetail)
		{
			onCustomerAuthentication(customerDetail);
		}
	});
}

function onCustomerAuthentication(customerDetail)
{

	
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("onCustomerAuthentication("+$.toJSON(customerDetail)+");");
	}

	if(customerDetail.email==null)
	{
		//console.log("Failed");
		$("#invalid_label").text("Invalid username / password "); 
		$('#checkout_login_button').removeClass('popup_processing_btn');
		$("#invalid_label").show();
	}
	else
	{
		$("#invalid_label").hide();
		myCustomerDetail=customerDetail;
		//console.log("Email : "+customerDetail.email);
		
		var billingStateName=null;
		var shippingStateName=null;
		var billingCountryName=getCountryName(customerDetail.billingAddress.country,'billing');
		var shippingCountryName=getCountryName(customerDetail.shippingAddress.country,'shipping');
		
		if(customerDetail.billingAddress.state==null||customerDetail.billingAddress.state=='')
			billingStateName=customerDetail.billingAddress.province;
		else
			billingStateName=getStateName(customerDetail.billingAddress.state,'billing');
		
		if(customerDetail.shippingAddress.state==null||customerDetail.shippingAddress.state=='')
			shippingStateName=customerDetail.shippingAddress.province;
		else
			shippingStateName=getStateName(customerDetail.shippingAddress.state,'shipping');
		
		$("#customerId").val(customerDetail.customerId);
		$("#cusPhone").val(customerDetail.phone);
		$("#cusEmail").val(customerDetail.email);
		//making email field readony
		$("#cusEmail").attr('readonly',true);
		//hiding new customer's password fields 
		$("[id^='newcust_passwd']").hide();
		
		//$("#cusFirstName").val(customerDetail.firstName);
		//$("#cusLastName").val(customerDetail.lastName);
		$("#cusFirstName").val(customerDetail.billingAddress.firstName);
		$("#cusLastName").val(customerDetail.billingAddress.lastName);
		
		$("#billAddress1").val(customerDetail.billingAddress.street1);
		$("#billAddress2").val(customerDetail.billingAddress.street2);
		$("#billCity").val(customerDetail.billingAddress.street3);
		$("#billCountry").val(billingCountryName);
		$("#billZip").val(customerDetail.billingAddress.zipCode);
		
		$("#shipFirstName").val(customerDetail.shippingAddress.firstName);
		$("#shipLastName").val(customerDetail.shippingAddress.lastName);
		$("#shipAddress1").val(customerDetail.shippingAddress.street1);
		$("#shipAddress2").val(customerDetail.shippingAddress.street2);
		$("#shipCity").val(customerDetail.shippingAddress.street3);
		
		$("#shipCountry").val(shippingCountryName);
		$("#shipZip").val(customerDetail.shippingAddress.zipCode);
		
		if(customerDetail.billingAddress.country=='US'){
			$("#billState").val(billingStateName);
		}	
		else if(customerDetail.billingAddress.country=='CA')
			$("#billState1").val(billingStateName);
		else{
			$('#billProvince').val(billingStateName);
		}
			
		if(customerDetail.shippingAddress.country=='US')
			$("#shipState").val(shippingStateName);
		else if(customerDetail.shippingAddress.country=='CA')
			$("#shipState1").val(shippingStateName);
		else
			$('#shipProvince').val(shippingStateName);
		
		toggleBillStateBox();
		toggleShipStateBox();
		if(!isShippingSameAsBilling(customerDetail)){
			$('.shipping_same_address_act').show();
			$('#ship_add').removeAttr("checked");
			//$('.custom_dropdown').kgcustomdropdown();
			if($("#shipCountryCode").next('select')!=null)
				$("#shipCountryCode").next('select').attr("disabled","disabled");;

		}
		
		hideLoadingScreen();
		$(".login_form").hide();
		$('#checkout_login_button').removeClass('popup_processing_btn');
	}

}
function listShippingServices()
{
	/*if(typeof ClickTaleExec=="function"){
		ClickTaleExec("listShippingServices();");
	}*/
	//return;
	//var myCountryCode=myCustomerDetail.billingAddress.country;
	var isShippingFree=false;
	var myCountryCode=getCountryCode($.trim($("#shipCountry").val()),"shipping");
	var myStateCode=null;//////////////////////////////////////////////////
	if(myCountryCode=='US')
	{
	myStateCode=getStateCode($.trim($("#shipState").val()), 'shipping');
	$('#shipping_alert_international').hide();
	$('#shipping_alert_domestic').show();
	
	}
	else if(myCountryCode=='CA')
	{
	myStateCode=getStateCode($.trim($("#shipState1").val()), 'shipping');
	$('#shipping_alert_domestic').hide();
	$('#shipping_alert_international').show();
	}
	else
	{
		$('#shipping_alert_domestic').hide();
		$('#shipping_alert_international').show();
	}
	//console.log("The country is "+myCountryCode);
	//$("#shippingMethods").html('');
	$("#int_std").html('');
	$("#int_exp").html('');
	$("#std").html('');
	$("#exp").html('');
	$("#ovn").html('');
	
	
	$.ajax({
		url:'/getShippingServices.htm',
		cache:false,
		dataType:'json',
		data:{'countryCode':myCountryCode,'stateCode':myStateCode},
		success:function(shippingServices){
			onShippingServicesGot(shippingServices);
		}
	});
}

function onShippingServicesGot(shippingServices)
{

	/*if(typeof ClickTaleExec=="function"){
		ClickTaleExec("onShippingServicesGot("+JSON.stringify(shippingServices)+");");
	}*/
	var myCountryCode=getCountryCode($.trim($("#shipCountry").val()),"shipping");
	//console.log("shippingServices "+shippingServices.length);
	$(shippingServices).each(function(index,item){
		isShippingFree=false;
		var html='<div class="clear_both"></div>';
		var shippingTypeId=item.zone.shippingServiceType.id;
		var serviceName=item.zone.shippingServiceName;
		//console.log("shippingServices "+serviceName);
		var serviceTypeName=item.zone.shippingServiceTypeName;
		var shippingPrice='';
		var deliverydays;
		if(item.totalShippingPrice.toFixed(2)==0.00 && item.zone.freeLimit!=null && item.zone.freeLimit>0.0)
		{
			shippingPrice='FREE on all orders over $'+item.zone.freeLimit+'!';
			if(serviceName=="FedEx" && serviceTypeName=="Express International")
				isShippingFree=true;
		}
		else if(item.totalShippingPrice.toFixed(2)==0.00)
		{
			shippingPrice='FREE';
		}
		else
			shippingPrice='$'+item.totalShippingPrice.toFixed(2);
		//alert(shippingPrice);
		if(parseInt(item.zone.deliveryDaysLowerLimit)==0 && parseInt(item.zone.deliveryDaysUpperLimit)==1)
			deliveryDays=item.zone.deliveryDaysUpperLimit+' Business Day';
		else if(parseInt(item.zone.deliveryDaysLowerLimit)==0 && parseInt(item.zone.deliveryDaysUpperLimit)==2)
			deliveryDays=item.zone.deliveryDaysUpperLimit+' Business Days';
		else
		deliveryDays=item.zone.deliveryDaysLowerLimit+'-'+item.zone.deliveryDaysUpperLimit+' Business Days';
		/*if()
		{
			shippingPrice='FREE on all orders over $'+item.zone.freeLimit+'!';
		}*/
		html+='<input name="shipping_method" type="radio"  value="'+item.zone.key.id+'" class="shipping_radio_button" onclick="setShippingService();"/>';
		html+='<span>'+serviceTypeName+'<br>'+serviceName+'</span><span class="price">'+shippingPrice+'</span><span> Estimated Delivery Time<br>'+deliveryDays+'</span>';
		html+='<div class="clear_both"></div>';
		//console.log("shippinh html "+html);
		if(serviceTypeName=="Standard International"){
			
			$("#int_std").html(html);
		}
		
		if(serviceTypeName=="Express International"){
			
			$("#int_exp").html(html);
		}
		
		if(serviceTypeName=="Standard Shipping" || serviceTypeName=="Standard USPS"){
			
			$("#std").html(html);
		}
		
		if(serviceTypeName=="Express Shipping" || serviceTypeName=="Express USPS"){
			
			$("#exp").html(html);
		}
		
		if(serviceTypeName=="Overnight Shipping"){
			
			$("#ovn").html(html);
		}
		//console.log("isShippingFree is "+isShippingFree+" and myCountryCode is "+myCountryCode);
		if((myCountryCode=='AU' || myCountryCode=='HK' || myCountryCode=='SG')&& isShippingFree==true)
		{
			//console.log("Inside the if ");
			$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
			$('.free_fedshipping_popup').css("position","fixed").fadeIn();
			$("#int_exp").find('input:radio[name=shipping_method]').attr('checked',true);
		}
		else
		{
			$('input:radio[name=shipping_method]:first').attr('checked',true);
			//console.log("else block");
		}
		
	});
	setShippingService();

}
function backUpCustomerDetail()
{
	var customerDetail=new Object();
	
	customerDetail.customerId=$.trim($("#customerId").val())==''?null:$("#customerId").val();
	customerDetail.phone=$.trim($("#cusPhone").val());
	customerDetail.email=$.trim($("#cusEmail").val());
	customerDetail.firstName=$.trim($("#cusFirstName").val());
	customerDetail.lastName=$.trim($("#cusLastName").val());
	customerDetail.password=$.trim($("#cusPassword").val())==''?null:$.trim($("#cusPassword").val());
	
	customerDetail.billingAddress=new Object();
	customerDetail.billingAddress.id=null;
	customerDetail.billingAddress.street1=$.trim($("#billAddress1").val());
	customerDetail.billingAddress.street2=$.trim($("#billAddress2").val());
	customerDetail.billingAddress.street3=$.trim($("#billCity").val());
	customerDetail.billingAddress.countryName=$.trim($("#billCountry").val());
	var billCountryCode=getCountryCode(customerDetail.billingAddress.countryName,'billing');
	var billStateName=$("#billProvince").val();
	var billState="";
	if(billCountryCode=='US'){
		billStateName=$("#billState").val();
		billState=getStateCode(billStateName,"billing");
	}
	if(billCountryCode=='CA' ){
		billStateName=$("#billState1").val();
		billState=getStateCode(billStateName,"billing");
	}
	customerDetail.billingAddress.state=billState;	
	customerDetail.billingAddress.stateName=billStateName;
	customerDetail.billingAddress.province=billStateName;
	customerDetail.billingAddress.country=billCountryCode;

	customerDetail.billingAddress.zipCode=$.trim($("#billZip").val());
	customerDetail.billingAddress.firstName=$.trim($("#cusFirstName").val());
	customerDetail.billingAddress.lastName=$.trim($("#cusLastName").val());
	
	customerDetail.shippingAddress=new Object();
	customerDetail.shippingAddress.id=null;
	customerDetail.shippingAddress.street1=$.trim($("#shipAddress1").val());
	customerDetail.shippingAddress.street2=$.trim($("#shipAddress2").val());
	customerDetail.shippingAddress.street3=$.trim($("#shipCity").val());
	customerDetail.shippingAddress.countryName=$.trim($("#shipCountry").val());
	var shipCountryCode=getCountryCode(customerDetail.shippingAddress.countryName,'shipping');
	var shipStateName=$("#shipProvince").val();
	var shipState="";
	if(shipCountryCode=='US'){
		shipStateName=$("#shipState").val();
		shipState=getStateCode(shipStateName,"shipping");
		//console.log("Shipstate name is "+shipStateName+" and state code is "+shipState);
	}
	if(shipCountryCode=='CA'){
	 	shipStateName=$("#shipState1").val();
	 	shipState=getStateCode(shipStateName,"shipping");
	 }
	customerDetail.shippingAddress.state=shipState;	
	customerDetail.shippingAddress.stateName=shipStateName;
	customerDetail.shippingAddress.province=shipStateName;
	customerDetail.shippingAddress.country=shipCountryCode;

	customerDetail.shippingAddress.zipCode=$.trim($("#shipZip").val());
	customerDetail.shippingAddress.firstName=$.trim($("#shipFirstName").val());
	customerDetail.shippingAddress.lastName=$.trim($("#shipLastName").val());
	return customerDetail;
}

function copyBillingAddressToShippingAddress()
{
	$("#shipFirstName").val($("#cusFirstName").val());
	$("#shipLastName").val($("#cusLastName").val());
	$("#shipAddress1").val($("#billAddress1").val());
	$("#shipAddress2").val($("#billAddress2").val());
	$("#shipCountry").val($("#billCountry").val());
	$("#shipState").val($("#billState").val());
	$("#shipState1").val($("#billState1").val());
	$("#shipCity").val($("#billCity").val());
	$("#shipZip").val($("#billZip").val());
	$("#shipProvince").val($("#billProvince").val());
}

function getCardLast5Digits()
{
	var last5Digits=$.trim($("#cardNumber").val());
	if(last5Digits.length>5)
	{
		var index=last5Digits.length-5;
		last5Digits=last5Digits.substring(index);
		last5Digits=$.trim(last5Digits);
	}	
	return last5Digits;
}

function loadShoppingCartForCheckout()
{
	showLoadingScreen("Processing....");
	$.ajax({
		url:'/loadShoppingCartForCheckout.htm',
		cache:false,
		dataType:'html',
		success:function(html)
		{
			$(".checkout_your_shoppingcart").html(html);
			$("#cusSubTotal").text("Subtotal: $"+$("#cart_subTotal").val().toFixed(2));
			/*			
			if(getPairsFromShoppingCart()<=0)
			{		
				eraseCookie("orderid");
				window.history.back();
			}
			$("#updateDiscountPin").click(submitDiscountPin);*/
			//showOrHideShoppingCartElements();
			hideLoadingScreen();
			//refreshShippingPrice();
			//refreshShippingServicesTotal();
			
		}
	});
	
}

function wasCustomerDetailChanged()
{
	if(myCustomerDetail==null||myCustomerDetail.customerId==null) 
		return true;
	
	if($.trim($("#cusPhone").val())!=myCustomerDetail.phone)
		return true;
	if($.trim($("#cusEmail").val())!=myCustomerDetail.email)
		return true;
	if($.trim($("#cusFirstName").val())!=myCustomerDetail.firstName)
		return true;
	if($.trim($("#cusLastName").val())!=myCustomerDetail.lastName)
		return true;
	
	if($.trim($("#billAddress1").val())!=myCustomerDetail.billingAddress.street1)
		return true;
	if($.trim($("#billAddress2").val())!=myCustomerDetail.billingAddress.street2)
		return true;
	if($.trim($("#billCity").val())!=myCustomerDetail.billingAddress.street3)
		return true;
	if($.trim($("#billState").val())!=myCustomerDetail.billingAddress.state)
		return true;
	if($.trim($("#billCountry").val())!=myCustomerDetail.billingAddress.country)
		return true;
	if($.trim($("#billZip").val())!=myCustomerDetail.billingAddress.zipCode)
		return true;
	
	if($.trim($("#shipAddress1").val())!=myCustomerDetail.shippingAddress.street1)
		return true;
	if($.trim($("#shipAddress2").val())!=myCustomerDetail.shippingAddress.street2)
		return true;
	if($.trim($("#shipCity").val())!=myCustomerDetail.shippingAddress.street3)
		return true;
	if($.trim($("#shipState").val())!=myCustomerDetail.shippingAddress.state)
		return true;
	if($.trim($("#shipCountry").val())!=myCustomerDetail.shippingAddress.country)
		return true;
	if($.trim($("#shipZip").val())!=myCustomerDetail.shippingAddress.zipCode)
		return true;
	
	return false;
}

function showLoadingScreen(msg)
{ 
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("showLoadingScreen("+msg+");");
	}
	$(".loadingMessage").html("<p>"+msg+"</p>").show();
	//$("#backgroundPopup").height($(document).height()).width($(document).width()).show();
	loadingScreenTimeHandle=setTimeout(hideLoadingScreen, 10000); 
}

function hideLoadingScreen()
{
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("hideLoadingScreen();");
	}
	$(".loadingMessage").html("").hide();
	$("#backgroundPopup").hide();
	clearTimeout(loadingScreenTimeHandle);
}

function toggleBillStateBox()
{
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("toggleBillStateBox();");
	}
	var countryName=$("#billCountry").val();
	var countryCode=getCountryCode(countryName,'billing');
	//As International customer can not have different billing and shipping addresses, this is commented.
	$("#shipCountry").val(countryName);
	toggleShipStateBox();
	if(countryCode=='US')
	{
		//$("#billState").val("");
		$('#billState1Holder').hide();
		if($("#billState1Holder").next('select')!=null)
			$("#billState1Holder").next('select').hide();
		$('#billStateHolder').show();
		if($("#billStateHolder").next('select')!=null)
			$("#billStateHolder").next('select').show();
		$('#billProvinceHolder').hide();
		$("#ship_add").removeAttr("disabled");
		$("#ship_add").attr("disabled",false);
		$("#addressCheck").text('Shipping address is the same as billing address.');
		$("#billStateLabel").text("State:");
		$("#billZipLabel").text("Zip Code:");
	}
	else if(countryCode=='CA'){
		$('#billStateHolder').hide();
		if($("#billStateHolder").next('select')!=null)
			$("#billStateHolder").next('select').hide();
		$('#billProvinceHolder').hide();
		$('#billState1Holder').show();
		if($("#billState1Holder").next('select')!=null)
			$("#billState1Holder").next('select').show();
		$("#ship_add").removeAttr("disabled");
		$("#ship_add").attr("disabled",true);
		$('#ship_add').attr("checked", "checked");
		$("#addressCheck").text('Billing & shipping addresses must be the same for international shipping.');
		$('.shipping_same_address_act').hide();
		$("#billStateLabel").text("Province:");
		$("#billZipLabel").text("Postal Code:");
		}
	else{
		//$('#billProvince').val($("#billState").val());
		$('#billStateHolder').hide();
		if($("#billStateHolder").next('select')!=null)
			$("#billStateHolder").next('select').hide();
		$('#billProvinceHolder').show();
		$('#billState1Holder').hide();
		if($("#billState1Holder").next('select')!=null)
			$("#billState1Holder").next('select').hide();
		$("#ship_add").removeAttr("disabled");
		$("#ship_add").attr("disabled",true);
		$('#ship_add').attr("checked", "checked");
		$("#addressCheck").text('Billing & shipping addresses must be the same for international shipping.');
		$('.shipping_same_address_act').hide();
		$("#billStateLabel").text("Province:");
		$("#billZipLabel").text("Postal Code:");
	}
	//$('.custom_dropdown').kgcustomdropdown();
}

function toggleShipStateBox()
{
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("toggleShipStateBox();");
	}
	var countryName=$("#shipCountry").val();
	var countryCode=getCountryCode(countryName,'shipping');
	
    if(countryCode=='US')
    {
	   	//$("#shipState").val("");
	   	$('#shipStateHolder').show();
	   	$('#shipProvinceHolder').hide(); 
	   	$('#shipState1Holder').hide();
    }
    //As International customer can not have different shipping address, this is commented.
    /*
 	else if(countryCode=='CA')
    	{
    	$('#shipStateHolder').hide();
	   	$('#shipProvinceHolder').hide();
	   	$('#shipState1Holder').show();
    	}
   	else
    {
   		//$('#shipProvince').val($("#shipState").val());
	   	$('#shipStateHolder').hide();
	   	$('#shipProvinceHolder').show();
	   	$('#shipState1Holder').hide();

    }
    */
    //$('.custom_dropdown').kgcustomdropdown();
}
function showYourInfo()
{
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("showYourInfo();");
	}
	$('.chckout_yourinfo').show();
	$('.check_out_shipping').hide();
	$('.check_out_payment').hide();
			
	$('.checkout_1_act').addClass('selected');
	$('.checkout_2_act').removeClass('selected');
	$('.checkout_3_act').removeClass('selected');
	//$('.custom_dropdown').kgcustomdropdown();
	$("#curPage").val('1');
}
function showShippingInfo()
{
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("showShippingInfo();");
	}
	$(".loading_page").hide();
	//$("#backgroundPopup").hide();
	$('.chckout_yourinfo').hide();
	$('.check_out_shipping').show();
	$('.check_out_payment').hide();
	
	$('.checkout_2_act').addClass('selected');
	$('.checkout_1_act').removeClass('selected');
	$('.checkout_3_act').removeClass('selected');
	if(!$('input[name="shipping_method"]:checked').val())
		$("#ship_shippingPrice").text("Shipping : Please Select Shipping Method");
	
	$("#curPage").val('2');
}
function showPaymentInfo()
{
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("showPaymentInfo();");
	}
	$(".loading_page").hide();
	//$("#backgroundPopup").hide();
	$('.chckout_yourinfo').hide();
	$('.check_out_shipping').hide();
	$('.check_out_payment').show();
	$('.checkout_1_act').removeClass('selected');
	$('.checkout_2_act').removeClass('selected');
	$('.checkout_3_act').addClass('selected');
	//$('.custom_dropdown').kgcustomdropdown();
	$("#curPage").val('3');
}
function showConfirmInfo()
{
	$(".loading_page").hide();
	$("#backgroundPopup").hide();
	$('.chckout_title_act').css('display', 'none');
	$('.chckout_cmplttitle_act').css('display', 'block');
	$('.chckout_tkstitle_act').css('display', 'none');
	$('.chckout_yourinfo').hide();
	$('.check_out_shipping').hide();
	$('.check_out_payment').hide();
	$('.pay_method').hide();
	$('.complete_purchase').show();
	$('.checkout_pathway').hide();
	$('.thankyou').hide();
	
	$("#complete_checkout_error").hide();
	
	$("#curPage").val('4');
}
function showThankYouInfo()
{
	$('.chckout_title_act').css('display', 'none');
	$('.chckout_cmplttitle_act').css('display', 'none');
	$('.chckout_tkstitle_act').css('display', 'block');
	$('.chckout_yourinfo').hide();
	$('.check_out_shipping').hide();
	$('.check_out_payment').hide();
	$('.complete_purchase').hide();
	$('.need_help_bar').hide();
	$('.thankyou').show();
	$('.checkout_remove_shoes').hide();
	$('.cart_shoe_details').hide();
	$('.checkout_noshoe_error').hide();
	$('.final_ord_details').show();
	$('.checkout_pathway').hide();
	$('.checkout_shppingcart_header h3').text('Your Final Order');
	
	$("#curPage").val('5');
}

function validateCustomerDetails()
{
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("validateCustomerDetails();");
	}
	$('input').removeClass('error_input_field');
	$('input').removeAttr('placeholder');
	$('div.error_input_field').removeClass('error_input_field');
	$('div').removeAttr('placeholder');
	$('select.error_input_field').removeClass('error_input_field');
	$('select').removeAttr('placeholder');

	var valid=true;
	var gotop=false;
	hideErrorFields();
	/*	
	if($.trim($("#customerId").val())=='-1'){
		
		valid=false;
	}*/
	if($.trim($('#cusFirstName').val())==''){
		$('#cusFirstName').addClass('error_input_field');
		$('#cusFirstName').attr('placeholder','This Field is Required');
		valid=false;
		gotop=true;
	}
	else if(!isValidAddress($('#cusFirstName').val()))
		{
			$('#cusFirstName').addClass('error_input_field');
			$('#cusFirstName').siblings('i').html('Provide a valid name').show();
			valid=false;
			gotop=true;
		}
	
	if($.trim($('#cusLastName').val())==''){
		$('#cusLastName').addClass('error_input_field');
		$('#cusLastName').attr('placeholder','This Field is Required');
		valid=false;
		gotop=true;
	}
	else if(!isValidAddress($('#cusLastName').val()))
	{
		$('#cusLastName').addClass('error_input_field');
		$('#cusLastName').siblings('i').html('Provide a valid name').show();
		valid=false;
		gotop=true;
	}
	
	if($.trim($('#cusEmail').val())==''){
		$('#cusEmail').addClass('error_input_field');
		$('#cusEmail').attr('placeholder','This Field is Required');
		valid=false;
		gotop=true;
	}
	else if(!isValidEmail($.trim($('#cusEmail').val())))
	{
		$('#cusEmail').addClass('error_input_field');
		$('#cusEmail').attr('placeholder','This Field is Required');
		valid=false;
		gotop=true;
	}
	
	if($.trim($('#cusPhone').val())==''){
		$('#cusPhone').addClass('error_input_field');
		$('#cusPhone').attr('placeholder','This Field is Required');
		valid=false;
		gotop=true;
	}
	else if(!isValidAddress($('#cusPhone').val()))
	{
		$('#cusPhone').addClass('error_input_field');
		$('#cusPhone').siblings('i').html('Provide a valid name').show();
		valid=false;
		gotop=true;
	}
	
	var customerid=$("#customerId").val();
	if(customerid=='')
		{
			var passwd=$.trim($('#password').val());
			var conpwd=$.trim($('#confirmpassword').val());
			if(passwd==''){
				$('#password').addClass('error_input_field');
				$('#password').attr('placeholder','This Field is Required');
				valid=false;
				gotop=true;
			}
			else if(!isValidAddress(passwd))
			{
				$('#password').addClass('error_input_field');
				$('#password').siblings('i').html('Provide a valid password').show();
				valid=false;
				gotop=true;
			}
			
			if(conpwd==''){
				$('#confirmpassword').addClass('error_input_field');
				$('#confirmpassword').attr('placeholder','This Field is Required');
				valid=false;
				gotop=true;
			}
			else if(!isValidAddress(conpwd))
			{
				$('#confirmpassword').addClass('error_input_field');
				$('#confirmpassword').siblings('i').html('Provide a valid confirmpassword').show();
				valid=false;
				gotop=true;
			}
			
			if(passwd!=conpwd){
				$('#confirmpassword').addClass('error_input_field');
				$('#confirmpassword').val('');
				$('#confirmpassword').attr('placeholder','Passwords not matching!');
				valid=false;
				gotop=true;
			}
			if(passwd!=''&&conpwd!=''&& passwd==conpwd)
			{
				$('#cusPassword').val(passwd);
				
			}
			
		
		}

	
	if($.trim($('#billAddress1').val())==''){
			$('#billAddress1').addClass('error_input_field');
			$('#billAddress1').attr('placeholder','This Field is Required');
			valid=false;
	}
	else if(!isValidAddress($('#billAddress1').val()))
	{
		$('#billAddress1').addClass('error_input_field');
		$('#billAddress1').siblings('i').html('Provide a valid Address').show();
		valid=false;
	}
	
	if($.trim($('#billAddress2').val())!='')
	{
		 if(!isValidAddress($('#billAddress2').val()))
			{
				$('#billAddress2').addClass('error_input_field');
				$('#billAddress2').siblings('i').html('Provide a valid Address').show();
				valid=false;
			}
	}
	var billCountryCode=getCountryCode($.trim($('#billCountry').val()),'billing');
	if(billCountryCode==''||billCountryCode==null||billCountryCode=='000'){
		$('#billCountrycode').addClass('error_input_field');
		$('#billCountry').attr('placeholder','This Field is Required');
		valid=false;
	}
	
/*	if($.trim($('#billProvince').val())=='' && $('#billProvinceHolder').is(':visible')){
		$('#billProvince').addClass('error_input_field');
		$('#billProvince').attr('placeholder','This Field is Required');
		valid=false;
		
	}*/
	if($('#billStateHolder').is(':visible')||$("#billStateHolder").next('select').is(':visible')){
		var stateCode=getStateCode($.trim($('#billState').val()),'billing');
		if(stateCode==''||stateCode==null||stateCode=='00'||stateCode=='01'){
			$('#billStateHolder').addClass('error_input_field');
			$('#billStateHolder').attr('placeholder','This Field is Required');
			if($("#billStateHolder").next('select')!=null){
				$("#billStateHolder").next('select').addClass('error_input_field');
				$("#billStateHolder").next('select').attr('placeholder','This Field is Required');
			}				

			valid=false;		
		}
	}
	if($('#billState1Holder').is(':visible')||$("#billState1Holder").next('select').is(':visible')){
		var stateCode=getStateCode($.trim($('#billState1').val()),'billing');
		if(stateCode==''||stateCode==null||stateCode=='00'||stateCode=='01'){
			$('#billState1Holder').addClass('error_input_field');
			$('#billState1Holder').attr('placeholder','This Field is Required');
			if($("#billState1Holder").next('select')!=null){
				$("#billState1Holder").next('select').addClass('error_input_field');
				$("#billState1Holder").next('select').attr('placeholder','This Field is Required');
			}				
			valid=false;		
		}
	}
	if($.trim($('#billCity').val())==''){
		$('#billCity').addClass('error_input_field');
		$('#billCity').attr('placeholder','This Field is Required');
		valid=false;
	}
	else if(!isValidAddress($('#billCity').val()))
	{
		$('#billCity').addClass('error_input_field');
		$('#billCity').siblings('i').html('Provide a valid city').show();
		valid=false;
	}
	
	if($.trim($('#billZip').val())==''){
		$('#billZip').addClass('error_input_field');
		$('#billZip').attr('placeholder','This Field is Required');
		valid=false;
	}
	else if(!isValidAddress($('#billZip').val()))
	{
		$('#billZip').addClass('error_input_field');
		$('#billZip').siblings('i').html('Provide a valid zipcode').show();
		valid=false;
	}
	//Shipping Address
	if($.trim($('#shipFirstName').val())==''){
		$('#shipFirstName').addClass('error_input_field');
		$('#shipFirstName').attr('placeholder','This Field is Required');
		valid=false;
	}
	else if(!isValidAddress($('#shipFirstName').val()))
	{
		$('#shipFirstName').addClass('error_input_field');
		$('#shipFirstName').siblings('i').html('Provide a valid FirstName').show();
		valid=false;
	}
	
	
	if($.trim($('#shipLastName').val())==''){
		$('#shipLastName').addClass('error_input_field');
		$('#shipLastName').attr('placeholder','This Field is Required');
		valid=false;
	}
	else if(!isValidAddress($('#shipLastName').val()))
	{
		$('#shipLastName').addClass('error_input_field');
		$('#shipLastName').siblings('i').html('Provide a valid LastName').show();
		valid=false;
	}
	if($.trim($('#shipAddress1').val())==''){
		$('#shipAddress1').addClass('error_input_field');
		$('#shipAddress1').attr('placeholder','This Field is Required');
		valid=false;
	}
	else if(!isValidAddress($('#shipAddress1').val()))
	{
		$('#shipAddress1').addClass('error_input_field');
		$('#shipAddress1').siblings('i').html('Provide a valid Address').show();
		valid=false;
	}
	if($.trim($('#shipAddress2').val())!='')
	{
		 if(!isValidAddress($('#shipAddress2').val()))
			{
				$('#shipAddress2').addClass('error_input_field');
				$('#shipAddress2').siblings('i').html('Provide a valid Address').show();
				valid=false;
			}
	}
	var shipCountryCode=getCountryCode($.trim($('#shipCountry').val()),'shipping');
	if(shipCountryCode==''||shipCountryCode==null||shipCountryCode=='000'){
		$('#shipCountrycode').addClass('error_input_field');
		$('#shipCountry').attr('placeholder','This Field is Required');
		valid=false;
	}
/*	if($.trim($('#shipProvince').val())=='' && $('#shipProvinceHolder').is(':visible')){
		$('#shipProvince').addClass('error_input_field');
		$('#shipProvince').attr('placeholder','This Field is Required');
		valid=false;
	}*/
	if($('#shipStateHolder').is(':visible')||$("#shipStateHolder").next('select').is(':visible')){
		var stateCode=getStateCode($.trim($('#shipState').val()),'shipping');
		if(stateCode==''||stateCode==null||stateCode=='00'||stateCode=='01'){
			$('#shipStateHolder').addClass('error_input_field');
			$('#shipStateHolder').attr('placeholder','This Field is Required');
			if($("#shipStateHolder").next('select')!=null){
				$("#shipStateHolder").next('select').addClass('error_input_field');
				$("#shipStateHolder").next('select').attr('placeholder','This Field is Required');
			}				
			valid=false;
		}
	}
	if($('#shipState1Holder').is(':visible')||$("#shipState1Holder").next('select').is(':visible')){
		var stateCode=getStateCode($.trim($('#shipState1').val()),'shipping');
		if(stateCode==''||stateCode==null||stateCode=='00'||stateCode=='01'){
			$('#shipState1Holder').addClass('error_input_field');
			$('#shipState1Holder').attr('placeholder','This Field is Required');
			if($("#shipState1Holder").next('select')!=null){
				$("#shipState1Holder").next('select').addClass('error_input_field');
				$("#shipState1Holder").next('select').attr('placeholder','This Field is Required');
			}				
			valid=false;		
		}
	}
	if($.trim($('#shipCity').val())==''){
		$('#shipCity').addClass('error_input_field');
		$('#shipCity').attr('placeholder','This Field is Required');
		valid=false;
	}
	else if(!isValidAddress($('#shipCity').val()))
	{
		$('#shipCity').addClass('error_input_field');
		$('#shipCity').siblings('i').html('Provide a valid city').show();
		valid=false;
	}
	if($.trim($('#shipZip').val())==''){
		$('#shipZip').addClass('error_input_field');
		$('#shipZip').attr('placeholder','This Field is Required');
		valid=false;
	}
	else if(!isValidAddress($('#shipZip').val()))
	{
		$('#shipZip').addClass('error_input_field');
		$('#shipZip').siblings('i').html('Provide a valid zipcode').show();
		valid=false;
	}
	//navigate to top of the page if validation fails in Customer Info
	if(gotop)
		$("html, body").animate({ scrollTop: 0 }, "slow");
	
	return valid;
}

function validateShippingMethods()
{
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("validateShippingMethods();");
	}
	var valid=true;
	$('.error_white_space i').hide();
	if(!$('input[name="shipping_method"]:checked').val()){
		$('.error_white_space i').show();
		valid=false;
	}
	return valid;
}

function validatePaymentDetails()
{
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("validatePaymentDetails();");
	}
	var valid=true;
	
	$('#cardHoldeName').siblings('i').hide();
	$('#cardNumber').siblings('i').hide();
	$('#cardCCV').siblings('i').hide();
	
	if($.trim($("#cardHoldeName").val())==''){
		$('#cardHoldeName').addClass('error_input_field');
		$('#cardHoldeName').attr('placeholder','This Field is Required');
		/*$('#cardHoldeName').siblings('i').show();*/
		valid=false;
	}
	var currentMonth=parseInt($("#currentMonth").val(),10);
	var currentYear=parseInt($("#currentYear").val(),10);
	var selectedMonth=parseInt($("#cardExpMonth").val(),10);
	var selectedYear=parseInt($("#cardExpYear").val(),10);
	
	if(selectedYear==currentYear)
	{
		if(selectedMonth>=currentMonth)
		{
			//valid=true;
			$("#cardExpMonth").closest('div').removeClass('error_input_field');
			//$("#cardExpMonth").removeattr('placeholder','Not valid');
		}
		else
		{
			valid=false;
			$("#cardExpMonth").closest('div').addClass('error_input_field');
			$("#cardExpMonth").attr('placeholder','Not valid');
		}
	}
	else
	{
		//valid=true;
		$("#cardExpMonth").closest('div').removeClass('error_input_field');
		//$("#cardExpMonth").removeattr('placeholder','Not valid');
	}
	
	if($.trim($("#cardNumber").val())==''){
		$('#cardNumber').addClass('error_input_field');
		$('#cardNumber').attr('placeholder','This Field is Required');
		/*$('#cardNumber').siblings('i').show();*/
		valid=false;
	}
	var ccv_val=$('#cardCCV').val();
	var creditCardNumber=$('#cardNumber').val();
	var regexNum = /^\d{3,4}$/;
	var regexCreditCardNumber=/^\d{15,16}$/;
	var regexAmazonOrder=/^[a-zA-Z]*$/;
	if(!regexNum.test(ccv_val)){
		$("#cardCCV").addClass('error_input_field');
		$("#invalid_text_security").show();	
		valid=false;
	}
	else{
		//valid=true;
		$("#cardCCV").removeClass('error_input_field');
		$("#invalid_text_security").hide();
	}
	if(!regexCreditCardNumber.test(creditCardNumber)){
		if(!regexAmazonOrder.test(creditCardNumber))
		{	
			$("#cardNumber").addClass('error_input_field');
			$("#invalid_text_cardNumber").show();	
			valid=false;
		}
	}
	else{
		//valid=true;
		$("#cardNumber").removeClass('error_input_field');
		$("#invalid_text_cardNumber").hide();
	}
	return valid;
}

function hideErrorFields()
{
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("hideErrorFields();");
	}

	$('#cusFirstName').siblings('i').hide();
	$('#cusLastName').siblings('i').hide();
	$('#cusEmail').siblings('i').hide();
	$('#cusPhone').siblings('i').hide();
	
	$('#billAddress1').siblings('i').hide();
	$('#billCountry').siblings('i').hide();
	$('#billStateHolder').siblings('i').hide();
	$('#billProvinceHolder').siblings('i').hide();
	$('#billCity').siblings('i').hide();
	$('#billZip').siblings('i').hide();
	
	$('#shipAddress1').siblings('i').hide();
	$('#shipCountry').siblings('i').hide();
	$('#shipStateHolder').siblings('i').hide();
	$('#shipState1Holder').siblings('i').hide();
	$('#shipProvinceHolder').siblings('i').hide();
	$('#shipCity').siblings('i').hide();
	$('#shipZip').siblings('i').hide();
}

function isValidEmail(email)
{
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if(!emailReg.test(email))
		return false;
	else
		return true;
	
}
function isValidAddress(address)
{
	var addrReg = /^[0-9a-zA-Z #,-:]+$/;
	if(!addrReg.test(address))
		return false;
	else
		return true;
	
}

function checkAvailablilityForNewCust(email)
{
	
	$.ajax({url:'/isEmailAlreadyExists.htm',cache:false,data:({"email":email}),success:function(data){
		if(data=='true'){
			showLoginForm();
			$('div.login_form').find('div.login_popup_close').hide();
		/*
		$('#cusEmail').siblings('i').css('color','#D22E2E').html('Not available!Try another one!').show();
		if (!$('.login_form').is(':visible'))
				$('#cusEmail').focus();
					//$('#cusEmail').val('').focus();
		*/
		}
		else{
		/*
		$('#cusEmail').siblings('i').css('color','green').html('Email id available!').show();
		setTimeout(function(){
							$('#cusEmail').siblings('i').css('color','#D22E2E').hide();
							},2000);
		*/
		}
	}});
}

function resetCustomerDetails()
{
	$("#cusFirstName").val('');
	$("#cusLastName").val('');
	$("#cusEmail").val('');
	$("#cusPhone").val('');
	$("#password").val('');
	$("#confirmpassword").val('');
	$("#billAddress1").val('');
	$("#billAddress2").val('');
	$("#billCountry").val($("#billingCountry_000").text());
	$("#billState").val($("#billingState_00").text());
	$("#billState1").val($("#billingState_01").text());
	$("#billProvince").val('');
	$("#billCity").val('');
	$("#billZip").val('');
	
	$("#shipAddress1").val('');
	$("#shipAddress2").val('');
	$("#shipCountry").val($("#shippingCountry_000").text());
	$("#shipState").val($("#shippingState_00").text());
	$("#shipState1").val($("#shippingState_01").text());
	$("#shipProvince").val('');
	$("#shipCity").val('');
	$("#shipZip").val('');
	
}
function getStateCode(stateName,addType)
{
	//console.log("State Name : "+stateName);
	var stateCode=null;
	
	if(addType=='billing'){
		$("ul li[id^=billingState_],select option[id^=billingState_]").each(function(index){
		//$("div[id^='billState']").children("ul li[id^=billingState_],select option[id^=billingState_]").each(function(index){
			if($.trim($(this).text())==stateName)
			{
				var myid=$(this).attr("id");
				var index=myid.indexOf('_');
				stateCode=myid.substring(index+1);
				//console.log("element id is "+myid+" and stateCode is "+stateCode+" and index is "+index);
 				return;
			}
			});
	}
	else{
		$("ul li[id^='shippingState_'],select option[id^='shippingState_']").each(function(index){
		//$("div[id^='shipState']").children("ul li[id^='shippingState_'],select option[id^='shippingState_']").each(function(index){
			if($.trim($(this).text())==stateName)
			{
				var myid=$(this).attr("id");
				var index=myid.indexOf('_');
				stateCode=myid.substring(index+1);
				return;
			}
		});
	}
	//console.log("State Code : "+stateCode);
	return stateCode;
}
function getCountryCode(countryName,addType)
{
	//console.log("countryCode : "+countryName);
	var countryCode=null;
	if(addType=='billing'){
		$("ul li[id^='billingCountry_'],select option[id^='billingCountry_']").each(function(index){
		//$("#billCountrycode").children("[id^='billingCountry_']").each(function(index){
			if($.trim($(this).text())==countryName)
			{
				var myid=$(this).attr("id");
				var index=myid.indexOf('_');
				countryCode=myid.substring(index+1);
				return;
			}
		});
	}
	else{
		$("ul li[id^='shippingCountry_'],select option[id^='shippingCountry_']").each(function(index){
		//$("#shipCountryCode").children("[id^='shippingCountry_']").each(function(index){
			if($.trim($(this).text())==countryName)
			{
				var myid=$(this).attr("id");
				var index=myid.indexOf('_');
				countryCode=myid.substring(index+1);
				return;
			}
		});
	}
	//console.log("countryCode : "+countryCode);
	return countryCode;
}
function getCountryName(countryCode,addType)
{
	//console.log("Country Code : "+countryCode);
	var elementId='';
	var countryName='';
	if(addType=='billing'){
		elementId='#billingCountry_'+countryCode;
	}
	else{
		elementId='#shippingCountry_'+countryCode;
	}
	countryName=$.trim($(elementId).text());
	//console.log("The countryName:"+countryName);
	return countryName;
}
function getStateName(stateCode,addType)
{
	//console.log("State Code:"+stateCode);
	var elementId='';
	var stateName='';
	if(addType=='billing'){
		elementId='#billingState_'+stateCode;
	}
	else{
		elementId='#shippingState_'+stateCode;
	}
	stateName=$.trim($(elementId).text());
	//console.log("The stateName "+stateName);
	return stateName;
}
function isShippingSameAsBilling(detail)
{	
	if(detail.billingAddress.country!='US')
		return true;
		
	if(detail.shippingAddress.street1!=detail.billingAddress.street1)
		return false;
	if(detail.shippingAddress.street2!=detail.billingAddress.street2)
		return false;
	if(detail.shippingAddress.street3!=detail.billingAddress.street3)
		return false;
	if(detail.shippingAddress.state!=detail.billingAddress.state)
		return false;
	if(detail.shippingAddress.country!=detail.billingAddress.country)
		return false;
	if(detail.shippingAddress.zipCode!=detail.billingAddress.zipCode)
		return true;
}
function hidefreeshippingpopup()
{
	$('#backgroundPopup').fadeOut();
	$('.free_fedshipping_popup').fadeOut();
}
//shp
/*function getStatesForCountry(country_code)
{
	var splitted = $(this).attr('id').split('_');
	var countryCode = splitted[1];
	alert("countryCode = " + countryCode);
	
	
	$.ajax({
		
		url:'/getStatesForCountry.htm',
		data:{'countryCode':countryCode},
		dataType:'json',
		success:function(states)
		{
			alert("states length = " + states.length);
			populateStateDetailsForAddress(country_code, states);
		}
		
	});

}
*/
//shp
/*function populateStateDetailsForAddress(country_code, states)
{
	
	$("#Bill_State").html("");
	//<li id="billingState_00">Please Select</li> 
	var htmlStr="<li id=\"billingState_00\">Please Select</li>";
	if(states!=null && states.length>0)
		{
			for(i=0;i<states.length;i++)
				{
					htmlStr+="<li id='billingState_"+states[i].stateCode+"'>"+states[i].stateName+"</li>";
				}
		}
	
	$("#Bill_State").html(htmlStr);
	$("#billStateHolder").show();
}*/

/*function countryCheck()
{
	var countryName=$("#billCountry").value();
	//console.log("Inside the country check and countryName is "+countryName);
	if(countryName=='USA')
	{
		$("#USOrder").css('display:block');
		$("#internationalOrder").css('display:none');
	}
	else
	{
		$("#USOrder").css('display:none');
		$("#internationalOrder").css('display:block');
	}
	
}*/
/*
function populateThankYouPage(cart)
{

	if(cart==null){
		//console.log('Cart is NULL');
		return;
	}
	$("#thank_orderNumber").text(cart.orderId);
	$("#thank_userName").text(cart.customer.emailId);
	var billInfo='';
	var shipInfo='';
	var billCityState='',shipCityState='';
	billInfo+='<li>'+cart.customer.firstName+' '+cart.customer.lastName+'</li>';
	//billInfo+='<li>'+cart.customer.lastName+'</li>';
	billInfo+='<li>'+cart.billingAddress.street1+'</li>';
	if(cart.billingAddress.street2!=null && cart.billingAddress.street2!='')
		billInfo+='<li>'+cart.billingAddress.street2+'</li>';
	if(cart.billingAddress.street3!=null && cart.billingAddress.street3!='')
		billCityState=cart.billingAddress.street3;
	if(cart.billingAddress.state!=null && cart.billingAddress.state!=''){
		if(billCityState=='')
			billCityState+=cart.billingAddress.state;
		else
			billCityState+=', '+cart.billingAddress.state;
	}
	if(cart.billingAddress.zipCode!=null && cart.billingAddress.zipCode!=''){
		if(billCityState=='')
			billCityState+=cart.billingAddress.zipCode;
		else
			billCityState+=' '+cart.billingAddress.zipCode;
	}
	billInfo+='<li>'+billCityState+'</li>';
	$("#thank_billingInfo").html(billInfo);
	
	shipInfo+='<li>'+cart.customer.firstName+' '+cart.customer.lastName+'</li>';
	//shipInfo+='<li>'+cart.customer.lastName+'</li>';
	shipInfo+='<li>'+cart.shippingAddress.street1+'</li>';
	if(cart.shippingAddress.street2!=null && cart.shippingAddress.street2!='')
		shipInfo+='<li>'+cart.shippingAddress.street2+'</li>';
	if(cart.shippingAddress.street3!=null && cart.shippingAddress.street3!='')
		shipCityState=cart.shippingAddress.street3;
	if(cart.shippingAddress.state!=null && cart.shippingAddress.state!=''){
		if(shipCityState=='')
			shipCityState+=cart.shippingAddress.state;
		else
			shipCityState+=', '+cart.shippingAddress.state;
	}
	if(cart.shippingAddress.zipCode!=null && cart.shippingAddress.zipCode!=''){
		if(shipCityState=='')
			shipCityState+=cart.shippingAddress.zipCode;
		else
			shipCityState+=' '+cart.shippingAddress.zipCode;
	}
	shipInfo+='<li>'+shipCityState+'</li>';
	//console.log('ShipInfo : '+shipInfo);
	$("#thank_shippingInfo").html(shipInfo);
	$("#thank_cartLast5Digits").text("Card Ending in: "+getCardLast5Digits());
	$("#thank_shippingService").text($("#selectedShipServiceInfo").text());
	$("#thank_shippingDelivery").text($("#selectedShipDeliveryInfo").text());
	$("#thank_subtotal").text("Subtotal: $"+parseFloat(cart.subtotal).toFixed(2));
	var shiptnkprice=cart.shippingPrice;
	if(shiptnkprice>0)
		{
		shiptnkprice="$"+shiptnkprice;
		}
	else
		shiptnkprice="FREE";
	$("#thank_shippingPrice").text("Shipping: "+shiptnkprice);
	$("#thank_yourSubTotal").text("Your Subtotal: $"+parseFloat(cart.grandTotal).toFixed(2));
}
*/
