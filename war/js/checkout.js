var loadingScreenTimeHandle;
var myCustomerDetail=null;
var countryList=new Object(); 

$(document).ready(function(){
	
	if( $("#cartItems li").length==0){
		$("#no_items_msg").show();
		window.location='/redirectToNonSecurePage.htm?rdirectURL=/';
		return;
	}
	
	$("#signIn_firstBtn").click(function(){
		callCheckAvailablilityForNewCust();
	});
	$('select.custom_select_value_act').focus(function(){
		$(this).siblings('div.select').css('background-color','#fcfbea');
	});
	$('select.custom_select_value_act').blur(function(){
		$(this).siblings('div.select').css('background-color','');
	});

	var currentStep=$('#currentStep').val();
	if(currentStep==1){
		$('#password_SignIn_clear').focus(function(){
			$('#password_SignIn_clear').hide();
			$('#password_SignIn').show();
			$('#password_SignIn').focus();
		});
		
		$('#password_SignIn').blur(function(){
			if($('#password_SignIn').val()=='' || $('#password_SignIn').val()=='Password'){
			$('#password_SignIn_clear').show();
			$('#password_SignIn').hide();
		}
		});


	}
	if(currentStep==2){//Account Info
		getCountryList();
		setShipAddrVisibility();
		
		$('#password_Account_clear').focus(function(){
			$('#password_Account_clear').hide();
			$('#password_Account').show();
			$('#password_Account').focus();
		});
		$('#password_Account').blur(function(){
			if($('#password_Account').val()==''){
				$('#password_Account_clear').show();
				$('#password_Account').hide();
			}
		});
		$('#confirmpassword_clear').focus(function(){
			$('#confirmpassword_clear').hide();
			$('#confirmpassword_Account').show();
			$('#confirmpassword_Account').focus();
		});
		$('#confirmpassword_Account').blur(function(){
			if($('#confirmpassword_Account').val()==''){
				$('#confirmpassword_clear').show();
				$('#confirmpassword_Account').hide();
			}
		});
	}
	else if(currentStep==3){
		$('#deliverySign').click(updateRequireSignature);
		$('#contn_shpbtn').click(function(){
			$('#backgroundPopup').fadeOut();
			$('.free_fedshipping_popup').fadeOut();
		});
		//checkFreeShipPopup();
		/*if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook')
		{
			//console.log("update shipping service");
			handleFBSale_checkFreeShipPopup(function(){
			checkFreeShipPopup();
			});
		}
		else
			{
				checkFreeShipPopup();
			}*/
		
	}
	
	$("#logo").click(function(){
		window.location='/redirectToNonSecurePage.htm?rdirectURL=/';
	});
	//commented for facebook integration in checkout login
	/*$("#email_firstStep").click(function(){
		//$("#email_firstStep").val('');
		$("#email_firstStep").addClass("input_box_highlight");
	
	});*/
	$("#email_firstStep").keyup(function(event){
		var emailId=$.trim($("#email_firstStep").val());
		//console.log("EmailId is "+emailId);
		if(emailId=='')
			$('#email_check_btn').hide();
		else
			$('#email_check_btn').show();
		
		if(event.keyCode!=13)
			return;
		$('#checkout_emailavail_err').hide();
		if(emailId==''){
			$('#checkout_emailavail_err').show();
			return;
		}
		if(isValidEmail(emailId))
			checkAvailablilityForNewCust(emailId);
		else{
			$('#checkout_emailavail_err').show();
			return false;
		}
	});
	
	$('#email_check_btn').click(function(){
		var emailId=$.trim($("#email_firstStep").val());
		$('#checkout_emailavail_err').hide();
		if(emailId==''){
			$('#checkout_emailavail_err').show();
			return;
		}
		if(isValidEmail(emailId))
			checkAvailablilityForNewCust(emailId);
		else{
			$('#checkout_emailavail_err').show();
			return false;
		}
	});

	$('#email_firstStep').blur(function(){
		var emailId=$.trim($("#email_firstStep").val());
		$('#checkout_emailavail_err').hide();
		if(emailId==''){
			$('#checkout_emailavail_err').show();
			return;
		}
		if(isValidEmail(emailId))
			checkAvailablilityForNewCust(emailId);
		else{
			$('#checkout_emailavail_err').show();
			return false;
		}
	});

	
	$('#ship_add').click( function() {
		/*
		if(typeof ClickTaleExec=="function"){
			ClickTaleExec("$('.same_shpping_address_act').trigger('click');");
		}*/
		if ($(this).is(':checked'))
			$('.shipping_same_address_act').hide();
		else 
			$('.shipping_same_address_act').show();

		if($("#shipCountryCode").next('select')!=null)
			$("#shipCountryCode").next('select').attr("disabled","disabled");
	} );
	$("input").attr("autocomplete","off");
	$("#logo").click(function(){
		window.location='/redirectToNonSecurePage.htm?rdirectURL=/';
	});
	$('#billStateList').change(function(){
		$('#billStateList option:selected').each(function(){
			$('#billStateCode').val($(this).val());
			return;
		});
	});

	$('#shipStateList').change(function(){
		$('#shipStateList option:selected').each(function(){
			$('#shipStateCode').val($(this).val());
			return;
		});
	});

	$("#btnSignIn").click(getCustomerDetailOnSingIn);//sign in button
	$("#password_SignIn").keyup(function(event){
		/*
		if(typeof ClickTaleExec=="function"){
			ClickTaleExec("$('#userEmailId').trigger('keyup');");
		}*/
		if(event.keyCode==13)
			getCustomerDetailOnSingIn();
	});

	$("#billCountryList").change(toggleBillStateBox);
	
	$('.fgt_pwd').click(function(){
		$('.forgot_password_form').fadeIn();
		$('#backgroundPopup').show();
		
	});
	$('.reset_password_success_act').click (resetPassword);

	$('#your_info_btn').click(saveCustomerDetails);
	$('#shipping_method_btn').click(saveShippingService);
	$('#payment_btn').click(completePurchase);
	
	$('input[name="shipping_method"]').click(setShippingService);
	
	$('a.checkout_1_act').click(navigate);
	$('a.checkout_2_act').click(navigate);
	$('a.checkout_3_act').click(navigate);
	/*
	$('.custom_select_value_act').focus(function(){
		console.log('Got Focus');
		$(this).attr('size',"5");
	});*/
	
	/*$.ajax({url:'/currentPageStatus.htm',success:function(data)
		  {
			//console.log(" data "+data);
		 	 if(data=="checkout")
				{
				 showCheckoutPopup();	
				}
		  }});*/
	
});


/*function handleFBSale_checkFreeShipPopup(callback)
{
	handleFBSale();
	callback.call();
}
function checkFreeShipPopup()
{
	var shipCountryCode=$('#shipCountryCode').val();
	var subTotal=$('#subTotal').val();
	if(shipCountryCode=='AU'||shipCountryCode=='HK'||shipCountryCode=='SG'){
		//if($("input[name='freeLimit']").length!=null && $("input[name='freeLimit']").length>0)
		if(parseFloat(subTotal)>=199.0){
			//console.log("subtotal is "+subTotal);
			//if($("#poexists").val()=="false")
			{
				//console.log("poexists is "+poexists);
				$('#backgroundPopup').fadeIn();
				$('.free_fedshipping_popup').fadeIn();
				$("input[name='shipping_method']").each(function(index,element){
					var freeLimit=parseFloat($(element).attr('freeLimit'));
					if(subTotal>=freeLimit){
						var serviceType=$(element).attr('serviceType');
						serviceType=serviceType.toLowerCase();
						if(serviceType.indexOf('express')>=0){
							$(element).attr('checked','checked');
							setShippingService();
							return;
						}
					}
				});
			}
		}
	}
}*/
function navigate()
{
	var className=$(this).attr('class');
	var curPage=$("#currentStep").val();
	var lastPage=$("#lastStep").val();
	
	if(className.indexOf('checkout_1_act')>=0){//sign-in
		window.location='/checkout/account-info.htm';
	}
	else if(className.indexOf('checkout_2_act')>=0){//shipping method
		if(curPage<3 && lastPage>=2)
			saveCustomerDetails();
		else if(lastPage>=2)
			window.location='/checkout/shipping-methods.htm'
	}
	else if(className.indexOf('checkout_3_act')>=0){//payment
		if(lastPage>=3)
			window.location='/checkout/payment.htm'
	}
	/*	
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("navigate();");
	}
	*/
}
function callCheckAvailablilityForNewCust()
{
	var email=$("#email_firstStep").val();
	if(isValidEmail(email))
		checkAvailablilityForNewCust(email);
	else{
		$('#checkout_emailavail_err').show();
		return false;
	}
}
function saveCustomerDetails()
{
	//console.log('****Inside saveCustomerDetails***');
	/*
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("saveCustomerDetails();");
	}*/
	//wasCustomerDetailChanged need to be called
	if( $("#cartItems").children().length==0){
		$("#no_items_msg").show();
		window.location='/redirectToNonSecurePage.htm?rdirectURL=/';
		return;
	}
		
	if($("#ship_add").is(":checked"))
		copyBillingAddressToShippingAddress();
	if(!validateCustomerDetails()){
		$('#error_account').show();
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return;
	}
	var customerDetail=backUpCustomerDetail();
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
	showLoadingScreen("Processing....");
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
				//show Error *************
				return;
			}
			//hideLoadingScreen();
			window.location='/checkout/shipping-methods.htm';
		}
	});
	
}

function saveShippingService()
{
	if( $("#cartItems").children().length==0){
		$("#no_items_msg").show();
		window.location='/redirectToNonSecurePage.htm?rdirectURL=/';
		return;
	}
	$('#error_shipping').hide();
	if(!$('input[name="shipping_method"]:checked').length){
		//console.log('No shipping Method selected!');
		$('#error_shipping').show();
		return false;
	}
	window.location='/checkout/payment.htm'
}

function completePurchase()
{
	/*
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("completePurchase();");
	}*/
	//return;
	if(!validatePaymentDetails())
		return false;
	$('#payment_btn').unbind();
	var myCardNumber=$.trim($("#cardNumber").val());
	var cardCCV=$.trim($("#cardCCV").val());
	var cardHolderName=$.trim($("#cardHoldeName").val());
	var deliveryDays='';
	var finished=false;
	//console.log("**** delivery days are "+deliveryDays);
	var cardExpMonth=0;
	var cardExpYear=0;

	$('#cardExpMonthList option:selected').each(function(){
		cardExpMonth=$(this).val();
		return false;
	});

	$('#cardExpYearList option:selected').each(function(){
		cardExpYear=$(this).val();
		return false;
	});

	showLoadingScreen("Processing....");
	$("#backgroundPopup").show();
	$("#checkout_payment_err").hide();
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

				/*if(location.host.indexOf("www.solestruck.com")!=-1||location.host.indexOf("beta.solestruck.com")!=-1)
				{
					//location='http://www.solestruck.com/showThankyou.htm';
					location.href="/showThankyou.htm";
				}
				else if(location.host.indexOf("live-solestruck.appspot.com")!=-1)
				{
					//location='http://live-solestruck.appspot.com/showThankyou.htm';
					location.href="/showThankyou.htm";
				}
				else if(location.host.indexOf("testing-solestruck.a-cti.com")!=-1)
				{
					//location='http://testing-solestruck.a-cti.com/showThankyou.htm';
					location.href="/showThankyou.htm";
				}
				else if(location.host.indexOf("testing-solestruck.appspot.com")!=-1 ||location.host.indexOf("gae.solestruck.com")!=-1)
				{
					//location='http://testing-solestruck.appspot.com/showThankyou.htm';
					location.href="/showThankyou.htm";
				}
				else
				{
					window.location='/showThankyou.htm';
				}*/
			}
			else{
				hideLoadingScreen();
				$("#backgroundPopup").hide();
				$("#checkout_payment_err").html(checkoutResponse.responseMessage);
				$("#checkout_payment_err").show();
				$('.loading_page').hide();
				for(index=0;index<checkoutResponse.sequenceIds.length;index++)
				{
					//console.log("sequence id is "+checkoutResponse.sequenceIds[index]);
					$("#message_"+checkoutResponse.sequenceIds[index]).show();
				}
				finished=true;
				$('#payment_btn').click(completePurchase);
			}
		}
	});
}

function getCustomerDetailOnSingIn()
{
	/*
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("getCustomerDetailOnSingIn()");
	}*/
	var myemail=$.trim($("#email_SignIn").val());
	var mypassword=$.trim($("#password_SignIn").val());
	var msg="";
	if(myemail=="")
		msg="Please Enter Email Address";
	else if(!isValidEmail(myemail)){
			msg="Please Enter A Valid Email Address!";
	}
	if(mypassword==""||mypassword=="Password")
		msg='Please Enter Password';
	
	if(msg!=""){
		$("#checkout_sign_err").text(msg);
		$("#checkout_sign_err").show();
		return;
	}
	$("#checkout_sign_err").hide();	
	//$('#checkout_login_button').addClass('popup_processing_btn');
	showLoadingScreen('');
	$.ajax({
		url:'/getCustomerDetailByAuthentication.htm',
		cache:false,
		type:'POST',
		dataType:'json',
		data:{'emailId':myemail,'password':mypassword},
		success:function(customerDetail)
		{
			//console.log("customerDetails is "+customerDetail);
			if(customerDetail.email==null){
				$("#checkout_sign_err").text("Email address and/or Password do not match our records.");
				$('#checkout_sign_err').show();
				hideLoadingScreen();
				return;
			}
			else
				window.location='/checkout/account-info.htm';
		}
	});
}

function updateRequireSignature()
{
	var required=$('#deliverySign').is(':checked');
	$.ajax({
		url:'/requireDeliverySignature.htm',
		data:{requireSign:required},
		cache:false,
		type:'GET',
		success:function(result){
			//console.log('Result of deliverySignature:'+result);
		}
	});
}

function updateShippingServices()
{
	listShippingServices();
	
	$(".loading_page").show();
	$("#backgroundPopup").show();
	$.ajax({
		url:'/updateShippingService.htm',
		cache:false,
		type:'GET',
		success:function(checkoutDetails){
				//console.log('Shipping service Charge : '+checkoutDetails.shippingPrice);
				$(".loading_page").hide();
				$("#backgroundPopup").hide();
				if($('#finalTotal').length>0)
					$('#finalTotal').html('$'+parseFloat(checkoutDetails.grandTotal).toFixed(2));
				if($('#shippingPrice').length>0)
					$('#shippingPrice').html('$'+parseFloat(checkoutDetails.shippingPrice).toFixed(2));
				if($('#cartSubtotal').length>0)
					$('#cartSubtotal').html('$'+parseFloat(checkoutDetails.shoppingCart.subTotal).toFixed(2));
				
				if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true')
				{
					//console.log("update shipping service");
					handleFBSale();
				}
		}
		});
}

function listShippingServices()
{
	/*if(typeof ClickTaleExec=="function"){
		ClickTaleExec("listShippingServices();");
	}*/
	$.ajax({
		url:'/getShippingServices.htm',
		cache:false,
		dataType:'json',
		//data:{'countryCode':myCountryCode,'stateCode':myStateCode},
		success:function(shippingServices){
			if(shippingServices!=null && shippingServices.length>0)
			{
			//console.log('Service Length:'+shippingServices.length);
				$.each(shippingServices,function(index,service){
					var shipPriceText='$'+parseFloat(service.totalShippingPrice).toFixed(2);
					if(service.totalShippingPrice<=0.0)
						shipPriceText='FREE';
					$('#ship_price_'+service.zone.key.id).html(shipPriceText);
				});
			}
		}
	});
}

function setShippingService()
{
	/*if(typeof ClickTaleExec=="function"){
		ClickTaleExec("setShippingService();");
	}*/

	var serviceZoneId=$('input[name="shipping_method"]:checked').val();

	if(serviceZoneId==null || serviceZoneId=='') 
		return;
	$(".loading_page").show();
	$("#backgroundPopup").show();
	$.ajax({
		url:'/setShippingService.htm',
		cache:false,
		type:'GET',
		data:{'serviceZoneId':serviceZoneId},
		success:function(checkoutDetails){
			$(".loading_page").hide();
			$("#backgroundPopup").hide();
			//console.log('Shipping service Charge : '+checkoutDetails.shippingPrice);
			if($('#finalTotal').length>0)
				$('#finalTotal').html('$'+parseFloat(checkoutDetails.grandTotal).toFixed(2));
			if($('#shippingPrice').length>0)
				$('#shippingPrice').html('$'+parseFloat(checkoutDetails.shippingPrice).toFixed(2));
			if($('#cartSubtotal').length>0)
				$('#cartSubtotal').html('$'+parseFloat(checkoutDetails.shoppingCart.subTotal).toFixed(2));
			
			if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true')
				{
					//console.log("set shipping service");
					handleFBSale();
				}
				
		}
	});
}


function backUpCustomerDetail()
{
	var customerDetail=new Object();
	
	customerDetail.customerId=$.trim($("#customerId").val())==''?null:$("#customerId").val();
	customerDetail.phone=$.trim($("#cusPhone").val());
	customerDetail.email=$.trim($("#email_Account").val());
	customerDetail.firstName=$.trim($("#billFirstName").val());
	customerDetail.lastName=$.trim($("#billLastName").val());
	
	if($("#customerId").val()=='' || $("#customerId").val()==null)
		customerDetail.password=$.trim($("#password_Account").val());
	else
		customerDetail.password=null;
	
	customerDetail.billingAddress=new Object();
	customerDetail.billingAddress.id=null;
	customerDetail.billingAddress.firstName=$.trim($("#billFirstName").val());
	customerDetail.billingAddress.lastName=$.trim($("#billLastName").val());
	customerDetail.billingAddress.street1=$.trim($("#billAddress1").val());
	customerDetail.billingAddress.street2=$.trim($("#billAddress2").val())==$("#billAddress2").attr('original-title')?'':$.trim($("#billAddress2").val());
	customerDetail.billingAddress.street3=$.trim($("#billCity").val());
	customerDetail.billingAddress.countryName=$.trim($("#billCountryName").text());
	var billCountryCode=$('#billCountryCode').val();//getCountryCode(customerDetail.billingAddress.countryName,'billing');
	var billStateName=$("#billStateName").text();
	var billStateCode=$('#billStateCode').val();
	var billProvince=$.trim($('#billProvince').val());

	if($('#billStateHolder').is(':visible')){
		customerDetail.billingAddress.state=billStateCode;	
		customerDetail.billingAddress.stateName=billStateName;
		customerDetail.billingAddress.province='';
	}
	else{
		customerDetail.billingAddress.state=null;	
		customerDetail.billingAddress.stateName='';
		customerDetail.billingAddress.province=billProvince;
	}
	
	customerDetail.billingAddress.country=billCountryCode;

	customerDetail.billingAddress.zipCode=$.trim($("#billZip").val());

	
	customerDetail.shippingAddress=new Object();
	customerDetail.shippingAddress.id=null;
	customerDetail.shippingAddress.firstName=$.trim($("#shipFirstName").val());
	customerDetail.shippingAddress.lastName=$.trim($("#shipLastName").val());
	customerDetail.shippingAddress.street1=$.trim($("#shipAddress1").val());
	customerDetail.shippingAddress.street2=$.trim($("#shipAddress2").val())==$("#shipAddress2").attr('original-title')?'':$.trim($("#shipAddress2").val());
	customerDetail.shippingAddress.street3=$.trim($("#shipCity").val());
	customerDetail.shippingAddress.countryName=customerDetail.billingAddress.countryName;
	var shipCountryCode=$('#shipCountryCode').val();//getCountryCode(customerDetail.billingAddress.countryName,'billing');
	var shipStateName=$("#shipStateName").text();
	var shipStateCode=$('#shipStateCode').val();
	var shipProvince=$.trim($('#shipProvince').val());
	
	if($('#ship_add').is(':checked')){	
		customerDetail.shippingAddress.state=customerDetail.billingAddress.state;
		customerDetail.shippingAddress.stateName=customerDetail.billingAddress.stateName;
		customerDetail.shippingAddress.province=customerDetail.billingAddress.province;
	}
	else{
		customerDetail.shippingAddress.state=shipStateCode;
		customerDetail.shippingAddress.stateName=shipStateName;
		customerDetail.shippingAddress.province='';
	}
	customerDetail.shippingAddress.country=shipCountryCode;
	customerDetail.shippingAddress.zipCode=$.trim($("#shipZip").val());
	
	return customerDetail;
}

function copyBillingAddressToShippingAddress()
{
	$("#shipFirstName").val($("#billFirstName").val());
	$("#shipLastName").val($("#billLastName").val());
	$("#shipAddress1").val($("#billAddress1").val());
	$("#shipAddress2").val($("#billAddress2").val());
	$("#shipCountryCode").val($("#billCountryCode").val());
	$("#shipStateCode").val($("#billStateCode").val());
	$("#shipCountryName").text($("#billCountryName").text());
	$("#shipCity").val($("#billCity").val());
	$("#shipZip").val($("#billZip").val());
	$("#shipProvince").val($("#billProvince").val());
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
	/*
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("showLoadingScreen("+msg+");");
	}*/
	//$(".loadingMessage").html("<p>"+msg+"</p>").show();
	$(".loading_page").show();
	//loadingScreenTimeHandle=setTimeout(hideLoadingScreen, 10000); 
}

function hideLoadingScreen()
{
	/*
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("hideLoadingScreen();");
	}*/
	$(".loading_page").hide();
	//$("#backgroundPopup").hide();
	//clearTimeout(loadingScreenTimeHandle);
}

function toggleBillStateBox()
{
	/*
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("toggleBillStateBox();");
	}*/
	var billingStateHTML="<option value='00'>Select Your State</option>";
	var shippingStateHTML="<option value='00'>Select Your State</option>";
	
	var billCountryCode='';
	var billCountryName='';
	$('#billCountryList option:selected').each(function(){
		billCountryCode=$(this).val();
		billCountryName=$(this).text();
		return;
	});
	$('#billCountryCode').val(billCountryCode);
	$('#shipCountryCode').val(billCountryCode);
	$('#shipCountryName').text(billCountryName);
	
	var billStates=countryList[billCountryCode].stateList;
	if(billStates==null){
		$('#billStateHolder').hide();
		$('#billProvince').show();
		$('#shipStateHolder').hide();
		$('#shipProvince').show();
	}
	else{
		$('#billStateHolder').show();
		$('#billProvince').hide();
		$('#shipStateHolder').show();
		$('#shipProvince').hide();
		$.each(billStates,function(index,state){
			billingStateHTML+="<option value='"+state.stateCode+"'>"+state.stateName+"</option>";
			shippingStateHTML+="<option value='"+state.stateCode+"'>"+state.stateName+"</option>";
		});
		//console.log(billingStateHTML);
		$('#billStateList').html(billingStateHTML);
		$('#shipStateList').html(shippingStateHTML);
		$('#billStateName').text('SELECT YOUR STATE')
		$('#shipStateName').text('SELECT YOUR STATE')
	}
	$('#billStateCode').val('');
	$('#shipStateCode').val('');
	
	if(billCountryCode=='US'){
		//$('#addressCheck').text('Same As Billing?')
		$('#ship_add').attr('disabled',false);
		$('#ship_add').removeAttr('checked');
				
		$('#localShipAddr').show();
		$('#internShipAddr').hide();
		$('#shipAddrHeader').addClass('fl');

		$('.shipping_same_address_act').show();
		if($('#billZip').val()=='Postal Code'||$('#billZip').val()=='')
			$('#billZip').val('Zip Code');
		$('#billZip').attr('original-title','Zip Code');
		
		if($('#shipZip').val()=='Postal Code'||$('#shipZip').val()=='')
			$('#shipZip').val('Zip Code');
		$('#shipZip').attr('original-title','Zip Code');

	}
	else{
		//$('#addressCheck').text('International orders must have the same shipping & billing address.')
		$('#ship_add').attr('disabled',true);
		$('#ship_add').attr('checked','checked');
		
		$('#localShipAddr').hide();
		$('#internShipAddr').show();
		$('#shipAddrHeader').removeClass('fl');
		$('.shipping_same_address_act').hide();
		
		if($('#billProvince').val()=='')
			$('#billProvince').val('Province');
		if($('#billProvince').val()=='Province')
			$('#billProvince').addClass('text_val_act');
		else
			$('#billProvince').removeClass('text_val_act');

		if($('#shipProvince').val()=='')
			$('#shipProvince').val('Province');
		if($('#shipProvince').val()=='Province')
			$('#shipProvince').addClass('text_val_act');
		else
			$('#shipProvince').removeClass('text_val_act');

		if($('#billZip').val()=='Zip Code'||$('#billZip').val()=='')
			$('#billZip').val('Postal Code');
		$('#billZip').attr('original-title','Postal Code');
		
		if($('#shipZip').val()=='Zip Code'||$('#shipZip').val()=='')
			$('#shipZip').val('Postal Code');
		$('#shipZip').attr('original-title','Postal Code');

	}
}

function toggleShipStateBox()
{
	/*
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("toggleShipStateBox();");
	}*/
	var shippingStateHTML="<option value='00'>Select Your State</option>";
	var shipCountryCode='';
	$('#shipCountry option:selected').each(function(){
		shipCountryCode=$(this).val();
		return;
	});
	var shipStates=countryList[shipCountryCode].stateList;
	
	if(shipStates==null){
		$('#shipStateHolder').hide();
		$('#shipProvince').show();
	}
	else{
		$('#shipStateHolder').show();
		$('#shipProvince').hide();
		$.each(shipStates,function(index,state){
			shippingStateHTML+="<option value='"+state.stateCode+"'>"+state.stateName+"</option>";
		});
		$('#shipState').html(shippingStateHTML);
	}
}

function validateCustomerDetails()
{
	/*
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("validateCustomerDetails();");
	}*/

	if($.trim($('#email_Account').val())==''){
		$('#error_account').text('Please Enter Email.');
		return false;
	}
	else if(!isValidEmail($.trim($('#email_Account').val())))
	{
		$('#error_account').text('Please Enter Valid Email Id.');
		return false;
	}
	
	var customerid=$("#customerId").val();
	if(customerid==''||customerid==null){
	
		var passwd=$.trim($('#password_Account').val());
		var conpwd=$.trim($('#confirmpassword_Account').val());
		if(passwd==''|| passwd==$('#password_Account').attr('original-title')){
			$('#error_account').text('Please Enter Password');
			return false;
		}
		else if(!isValidAddress(passwd))
		{
			$('#error_account').text('Please Enter Valid Password.');
			return false;
		}
		
		if(conpwd==''||conpwd==$('#confirmpassword_Account').attr('original-title')){
			$('#error_account').text('Please Enter Confirm Password');
			return false;
		}
		else if(!isValidAddress(conpwd))
		{
			$('#error_account').text('Please Enter Valid Confirm Password.');
			return false;
		}
		
		if(passwd!=conpwd){
			$('#error_account').text('Your Password and Confirm Password doesn\'t match');
			return false;
		}
	}
	if($.trim($('#billFirstName').val())==''||$.trim($('#billFirstName').val())==$('#billFirstName').attr('original-title')){
		$('#error_account').text('Please Enter First Name for Billing Address');
		return false;
	}
	else if(!isValidAddress($('#billFirstName').val()))
	{
		$('#error_account').text('Please Enter Valid First Name for Billing Address');
		return false;
	}
		
	if($.trim($('#billLastName').val())==''||$.trim($('#billLastName').val())==$('#billLastName').attr('original-title')){
		$('#error_account').text('Please Enter Last Name for Billing Address');
		return false;
	}
	else if(!isValidAddress($('#billLastName').val()))
	{
		$('#error_account').text('Please Enter Valid Last Name for Billing Address');
		return false;
	}

	if($.trim($('#cusPhone').val())==''||$.trim($('#cusPhone').val())==$('#cusPhone').attr('original-title')){
		$('#error_account').text('Please Enter Phone Number For Billing Address');
		return false;
	}
	else if(!isValidPhone($('#cusPhone').val()))
	{
		$('#error_account').text('Please Enter Valid Phone Number For Billing Address');
		return false;
	}
	
	if($.trim($('#billAddress1').val())==''||$.trim($('#billAddress1').val())==$('#billAddress1').attr('original-title')){
		$('#error_account').text('Please Enter Billing Address Line1');
		return false;
	}
	else if(!isValidAddress($('#billAddress1').val()))
	{
		$('#error_account').text('Please Enter Valid Billing Address Line1');
		return false;
	}
	
	if($.trim($('#billAddress2').val())!='' && $.trim($('#billAddress2').val())!=$('#billAddress2').attr('original-title'))
	{
		 if(!isValidAddress($('#billAddress2').val()))
		{
			$('#error_account').text('Please Enter Valid Billing Address Line2');
			return false;
		}
	}
	var billCountryCode=$('#billCountryCode').val();
	if(billCountryCode==''||billCountryCode==null||billCountryCode=='00'){
		$('#error_account').text('Please Select Country For Billing Address');
		return false;
	}
	
	if($('#billStateHolder').is(':visible')){
		var stateCode=$('#billStateCode').val();
		if(stateCode==''||stateCode==null||stateCode=='00'){
			$('#error_account').text('Please Select State For Billing Address');
			return false;

		}				
	}
	if($.trim($('#billCity').val())=='' || $.trim($('#billCity').val())==$('#billCity').attr('original-title')){
		$('#error_account').text('Please Enter Billing City');
		return false;
	}
	else if(!isValidAddress($('#billCity').val()))
	{
		$('#error_account').text('Please Enter Valid Billing City');
		return false;
	}
	
	if($.trim($('#billZip').val())=='' || $.trim($('#billZip').val())==$('#billZip').attr('original-title')){
		$('#error_account').text('Please Enter Billing ZipCode');
		return false;
	}
	else if(!isValidAddress($('#billZip').val()))
	{
		$('#error_account').text('Please Enter Valid Billing ZipCode');
		return false;
	}
	//Shipping Address
	if($.trim($('#shipFirstName').val())=='' || $.trim($('#shipFirstName').val())==$('#shipFirstName').attr('original-title')){
		$('#error_account').text('Please Enter First Name for Shipping Address');
		return false;
	}
	else if(!isValidAddress($('#shipFirstName').val()))
	{
		$('#error_account').text('Please Enter Valid First Name for Shipping Address');
		return false;
	}
		
	if($.trim($('#shipLastName').val())=='' || $.trim($('#shipLastName').val())==$('#shipLastName').attr('original-title')){
		$('#error_account').text('Please Enter Last Name for Shipping Address');
		return false;
	}
	else if(!isValidAddress($('#shipLastName').val()))
	{
		$('#error_account').text('Please Enter Valid Last Name for Shipping Address');
		return false;
	}
	if($.trim($('#shipAddress1').val())=='' || $.trim($('#shipAddress1').val())==$('#shipAddress1').attr('original-title')){
		$('#error_account').text('Please Enter Shipping Address Line1');
		return false;
	}
	else if(!isValidAddress($('#shipAddress1').val()))
	{
		$('#error_account').text('Please Enter Valid Shipping Address Line1');
		return false;
	}
	if($.trim($('#shipAddress2').val())!='' && $.trim($('#shipAddress2').val())!=$('#shipAddress2').attr('original-title'))
	{
		 if(!isValidAddress($('#shipAddress2').val()))
			{
				$('#error_account').text('Please Enter Valid Shipping Address Line2');
				return false;
			}
	}
	var shipCountryCode=$('#shipCountryCode').val();
	if(shipCountryCode==''||shipCountryCode==null||shipCountryCode=='00'){
		$('#error_account').text('Please Select Country For Shipping Address');
		return false;
	}
	if($('#shipStateHolder').is(':visible')){
		var stateCode=$('#shipStateCode').val();
		if(stateCode==''||stateCode==null||stateCode=='00'){
			$('#error_account').text('Please Select State For Shipping Address');
			return false;
		}
	}
	if($.trim($('#shipCity').val())=='' || $.trim($('#shipCity').val())==$('#shipCity').attr('original-title')){
		$('#error_account').text('Please Enter City For Shipping Address');
		return false;
	}
	else if(!isValidAddress($('#shipCity').val()))
	{
		$('#error_account').text('Please Enter City For Shipping Address');
		return false;
	}
	if($.trim($('#shipZip').val())=='' || $.trim($('#shipZip').val())==$('#shipZip').attr('original-title')){
		$('#error_account').text('Please Enter ZipCode For Shipping Address');
		return false;
	}
	else if(!isValidAddress($('#shipZip').val()))
	{
		$('#error_account').text('Please Enter Valid ZipCode For Shipping Address');
		return false;
	}
	//$("html, body").animate({ scrollTop: 0 }, "slow");
	return true;
}

function validatePaymentDetails()
{
	/*
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("validatePaymentDetails();");
	}*/
	$('#checkout_payment_err').hide();
	if($.trim($("#cardHoldeName").val())==''||$.trim($("#cardHoldeName").val())==$('#cardHoldeName').attr('original-title')){
		$('#checkout_payment_err').html('Please Enter Card Holder Name');
		$('#checkout_payment_err').show();
		return false;
	}
	var currentMonth=parseInt($("#currentMonth").val(),10);
	var currentYear=parseInt($("#currentYear").val(),10);
	var selectedMonth=0;
	var selectedYear=0;
	$('#cardExpMonthList option:selected').each(function(index,element){
			selectedMonth=parseInt($(this).val(),10);
			return false;
	});

	$('#cardExpYearList option:selected').each(function(index,element){
			selectedYear=parseInt($(this).val(),10);
			return false;
	});
	
	var ccv_val=$('#cardCCV').val();
	var creditCardNumber=$('#cardNumber').val();
	var regexNum = /^\d{3,4}$/;
	var regexCreditCardNumber=/^\d{14,16}$/;
	var regexAmazonOrder=/^[a-zA-Z]*$/;
	
	if($.trim($("#cardNumber").val())==''||$.trim($("#cardNumber").val())=='Card Number'){
		$('#checkout_payment_err').html('Please enter Card Number.');
		$('#checkout_payment_err').show();
		return false;
	}
	
	if(!regexCreditCardNumber.test(creditCardNumber)){
		if(!regexAmazonOrder.test(creditCardNumber))
		{	
			$('#checkout_payment_err').html('Please enter a valid Card Number.');
			$('#checkout_payment_err').show();
			return false;
		}
	}

	if(selectedMonth<=0){
		$('#checkout_payment_err').html('Invalid expiration date.');
		$('#checkout_payment_err').show();
		return false;
	}

	if(selectedYear<=0){
		$('#checkout_payment_err').html('Invalid expiration date.');
		$('#checkout_payment_err').show();
		return false;
	}

	if(selectedYear==currentYear)
	{
		if(selectedMonth<currentMonth)
		{
			$('#checkout_payment_err').html('Invalid expiration date.');
			$('#checkout_payment_err').show();
			return false;
		}
	}

	if($.trim($('#cardCCV').val())==''||$.trim($('#cardCCV').val())=='Security Number'){
		$('#checkout_payment_err').html('Please enter Card Security Number.');
		$('#checkout_payment_err').show();
		return false;
	}
	if(!regexNum.test(ccv_val)){
		$('#checkout_payment_err').html('Please enter a valid Card Security Number.');
		$('#checkout_payment_err').show();
		return false;
	}
	/*
	if($.trim(creditCardNumber)==''){
		$('#checkout_payment_err').html('Please enter Card Number.');
		$('#checkout_payment_err').show();
		return false;
	}*/
	
	return true;
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
	var addrReg = /^[0-9a-zA-Z #,-:'&\/]+$/;
	if(!addrReg.test(address))
		return false;
	else
		return true;
	
}

function isValidPhone(address)
{
	var addrReg = /^[0-9a-zA-Z +)(-]+$/;
	if(!addrReg.test(address))
		return false;
	else
		return true;
	
}
function checkAvailablilityForNewCust(email)
{
	
	$.ajax({url:'/checkEmailAccount.htm',cache:false,data:({"email":email}),success:function(data){
		if(data=='true'){
			$('.facebook_emailpasswordgo_div').show();
			$('.facebook_emailgo').hide();
			$("#email_SignIn").val(email);
			$('#password_SignIn').focus();
			$("#password_SignIn_clear").focus();
			//console.log("Mail id exists");
		}
		else{
			//$("#email_Account").val(email);
			//$("#email_Account").attr('readonly',true);
			window.location='/checkout/account-info.htm';
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

function setShipAddrVisibility()
{
	if(isShippingSameAsBilling()){
		$('.shipping_same_address_act').hide();
		$('#ship_add').attr('checked','checked');
		if($('#billCountryCode').val()!='US'){
			$('#ship_add').attr('disabled','disabled');
			//$('#addressCheck').text('International orders must have the same shipping & billing address.');
			
			$('#localShipAddr').hide();
			$('#internShipAddr').show();
			$('#shipAddrHeader').removeClass('fl');
		}
		else{
			$('#localShipAddr').show();
			$('#internShipAddr').hide();
			$('#shipAddrHeader').addClass('fl');
		}
	}
	else{
		$('.shipping_same_address_act').show();
		$('#ship_add').removeAttr('checked');
		$('#ship_add').removeAttr('disabled');
		
		$('#localShipAddr').show();
		$('#internShipAddr').hide();
		$('#shipAddrHeader').addClass('fl');

	}	
}

function isShippingSameAsBilling()
{	
	if($.trim($('#billCountryCode').val())!='US')
		return true;
		
	if($.trim($('#billFirstName').val())!=$.trim($('#shipFirstName').val()))
		return false;
	if($.trim($('#billLastName').val())!=$.trim($('#shipLastName').val()))
		return false;
	if($.trim($('#billAddress1').val())!=$.trim($('#shipAddress1').val()))
		return false;
	if($.trim($('#billAddress2').val())!=$.trim($('#shipAddress2').val()))
		return false;
	if($.trim($('#billCity').val())!=$.trim($('#shipCity').val()))
		return false;
	if($.trim($('#billStateCode').val())!=$.trim($('#shipStateCode').val()))
		return false;
	if($.trim($('#billProvince').val())!=$.trim($('#shipProvince').val()))
		return false;
	if($.trim($('#billZip').val())!=$.trim($('#shipZip').val()))
		return false;

	return true;
}

/*
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
		return false;
	return true;
}
*/

function getCountryList()
{
	$.ajax({
		url:'/getCountryList.htm',
		dataType:'json',
		cache:false,
		success:function(response){
			$.each(response,function(index,country){
				//console.log('Country '+country.countryCode);
				//countryList['\''+country.countryCode+'\'']=new Object();
			});
			countryList=response;
		}
	});
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
	$.ajax({	
			url:'/resetPassword.htm',
			cache:false,
			data:{'email':$.trim($("#forgot_emailId").val())},
			success:function(msg){
				//console.log("The reset status "+msg);
				$('.forgot_password_form').hide();
				$('.reset_password_success').fadeIn();
			}
		});
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

function loadingForFbCo(status){
	
	//console.info("this is inside loading popup2");
	$(".loading_page").fadeIn();
	$.ajax({url:'/setFbStatusFrom.htm',data:({"status":status}),success:function(data)
	{
		
	}	
	});
}

function showCheckoutPopup(){
	
	//console.info("coming inside the new popup 1");
	$('.facebook_popup').fadeIn('slow');
	$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
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
