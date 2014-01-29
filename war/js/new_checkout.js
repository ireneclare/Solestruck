var fileName;
var currentFileId;
var id;
$(document).ready(function() {
	
	$('.tooltip_b').tipsy({trigger: 'focus', gravity: 'n'});
	$('.tooltip_f').tipsy({trigger: 'focus', gravity: 's',fade:true});
	$('.tooltip_e').tipsy({trigger: 'focus', gravity: 'w',fade:true});
	$('.tooltip_t2').tipsy({trigger: 'hover', gravity: 's',fade:true});
	
	if( $("#cartItems li").length==0){
		$("#no_items_msg").show();
		window.location='/redirectToNonSecurePage.htm?rdirectURL=/';
		return;
	}
	
	var countryName=$('#shipCountryCode').val();
	if(countryName=='USA')
	{
		var billingState= $('#biilinginfo_state').attr('title');
		var shippingState= $('#shippinginfo_state').attr('title');
		if(billingState==shippingState){
			$('.same_billing').addClass('same_billing_selected');
		}
		else{
			$('.same_billing').removeClass('same_billing_selected');
		}
	}
	if(location.pathname.indexOf('/complete-purchase.htm')>0 && countryName=='USA' && $('#solestruck_magazine').val()!='Solestruck-Magazine' && $('#inventoryCheck').val()=='true')
	{
		var count=0;
		$.ajax({url:'/loadShoppingCart.htm',
			dataType:'json',
			cache:false,
			success:function(res){
				$(".loading_page").fadeOut();
				//if(res.shoppingCart.lineItems.length>0)
			//	{
					$(".loading_page").fadeOut();
					if(res.shoppingCart.lineItems.length>0)
					{
//						for(var i=0;i<res.shoppingCart.lineItems.length;i++)
//						{
//							var lineItem = res.shoppingCart.lineItems[i];
//							if(lineItem.vendorName.toLowerCase() ==  $("#saleBrandNames").val())
//							{
//								count++;
//							}
//						}
//						for(var i=0;i<res.shoppingCart.lineItems.length;i++)
//						{
//							var lineItem = res.shoppingCart.lineItems[i];
//							if(resp.shippingAddress.countryName!='USA')
//							{
//								if(lineItem.vendorName == 'Solestruck Magazine')
//								{
//										var attr_id = $("span[name='"+lineItem.vendorName+"']").attr("id");
//										var seqid = attr_id.substring(attr_id.indexOf("_")+1,attr_id.length);
//										if($("#price_"+seqid).text()=="$0.00")
//										{
//											removeItem(seqid);
//										}
//										else
//											$('#quantities_'+seqid).attr('disabled',false);
//								}
//							}
//							else
//							{
//								if(lineItem.vendorName == 'Solestruck Magazine' && count>0)
//								{
//										var attr_id = $("span[name='"+lineItem.vendorName+"']").attr("id");
//										var seqid = attr_id.substring(attr_id.indexOf("_")+1,attr_id.length);
//										$('#quantities_'+seqid).attr('disabled',true);
//										if($("#price_"+seqid).text()!="$0.00")
//										{
//											$("#price_"+seqid).html("$0.00");
//											savingsForDiscountProgram();
//										}	
//								}
//							}
//						} // Added For YES Brand Launch Sale
						if(countryName=='USA' && $('#solestruck_magazine').val()!='Solestruck-Magazine' && $('#inventoryCheck').val()=='true')
						{
							//console.log("count: "+count+" "+$("#discountTypeName").val());
//							if(count>0 && $("#discountTypeName").val() == 'Brand')
//							{
//								 $('#backgroundPopup_magzine').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
//								 $('.zine_popup').show();
//								 $(".loading_page").fadeOut();
							//} //commented after YES Launch Sale
						}
					}
				//}
			}
		});
	}
	
	
	if(window.location.pathname=='/checkout/sign-in.htm')
	{
		getStatesForCountry("US", "bill");	
		if(window.history.pushState)
			window.history.pushState({step:0},null,'/checkout/sign-in.htm');
		$(document).attr('title','Checkout-Sign-In');
		
	}

	if(window.location.pathname=='/checkout/account-info.htm')
	{
		if(window.history.replaceState)
			window.history.replaceState({step:1},null,'/checkout/account-info.htm');
		$(document).attr('title','Checkout-Account-Info');
		$('.email_checkout').css('display','none')
		$('.signin_checkout').css('display','none');
		$('.shipping_holder, .check_yourinfo').show();
		var billingcourntryName=$('#biliinginfo_country').attr('title');
		var billingState  =$('#biilinginfo_state').attr('title');
		var shippingState =$('#shippinginfo_state').attr('title');
		var email=$('#existing_email').val();
		if(billingcourntryName=='US'){
			$('#billinginfo_div').show();
			$('#billinginfo_province').hide();
		}
		
		$.ajax({url:'/checkEmailAccount.htm',cache:false,data:({"email":email}),success:function(customerDetail){
			if(customerDetail!='null')
			{
				//console.log(" Customer email "+customerDetail.email);
				$('#existsuserid').show();
				$('#newuserid').hide();
				
			}
			else{
				
				$('#existsuserid').hide();
				$('#newuserid').show();
			}
		}});
		
		if(billingcourntryName=='US')
		{
			$('#internShipAddr').css('display','none');
			$('font.same_billing').css('display','block');
			getStatesForCountry(billingcourntryName, "bill",billingState);
			
			if(billingState!=shippingState)
			{
				$('.shipping_address_holder').css('display','block');
				$('font.same_billing').removeClass('same_billing_selected');
			}
			else
			{
				$('font.same_billing').addClass('same_billing_selected');
				$('.shipping_address_holder').css('display','none');
			}
		}
		else
		{
			$('font.same_billing').css('display','none');
			$('#internShipAddr').css('display','block');
			$('.email_checkout').css('display','none')
			$('font.same_billing').css('display','none');
			$('#bilinginfo_zip').attr('original-title','Postal Code');
		
			
		}
		
	}
	
	if(window.location.pathname=='/checkout/complete-purchase.htm')
	{
		////console.log(" complete purchase page ");
		if(window.history.replaceState)
			window.history.replaceState({step:2},null,'/checkout/complete-purchase.htm');		
		$(document).attr('title','Checkout-Complete-Purchase');
		$('.shipping_holder').show();
		$('.email_checkout').hide();
		$('.check_yourinfo, .subtotal_holder').hide();
		$('.verify_info, .total_holder').show();
	
		if($('#firstShippingMethod').val()!="")
		{	
			$('.important_shipping').show();
			$('#shippingPrice_holder').show();
			$('#Shippingmethod').text($('#firstShippingMethod').val());
			showshippingmethodtext();
		}
		else
		{
			$('.important_shipping').hide();
			$('#shippingPrice_holder').hide();
		}
		//updateShippingMethodServices();
	}
	
//	$('#buy_it').click(function()
//	{
//		$('.popup_processing_icon').css('display','block');
//		addItemToCheckoutShoppingCart();
//		
//	});
	
//	var ua = navigator.userAgent,
//    event = (ua.match(/iPad/i)) ? "touchstart" : "click";
//
//	$('#buy_it').bind(event, function(e) {
//		$('.popup_processing_icon').css('display','block');
//		addItemToCheckoutShoppingCart();
//	});

	
//	$('#no_thanks').click(function()
//	{
//		$('#backgroundPopup_magzine').hide();
//		 $('.zine_popup').hide();
//		 $(".loading_page").fadeOut();
//	});
	
	$('.check_sign_forpwd').click(function()
	{
		$('.forgot_password_form').fadeIn();
		$('#backgroundPopup').css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).show();
		$('#backgroundPopup').show();
		
	});
	
	$('.help_holder').click(function()
	{
		$('#backgroundPopup').css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).show();
		$('.emailus_popup_act').fadeIn();
		$("#emailUsId").focus();
		 //position_popup ();
 	 });
	
	$('.check_faq_act').click(function()
	{
		$('#backgroundPopup').css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).show();
		$('.blackfriday_faq_chk').fadeIn();
 	 });
	
	$('.popup_close_act').click(function() {
  		$('#backgroundPopup').fadeOut();
  		$('#backgroundPopup_magzine').fadeOut();
		$(this).parent().hide();
				
	});
  	
	$('select[name="Shippingmethod"]').on('change',function(){
		$('#shipping_method').attr('shipzoneid',$(this).val());
		$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
		$('#shippingmethod_error').removeClass('error_icon4');
		$('#display_shippingmethod').removeClass('dwn_error');
		
		if(onchangeValidateShippingMethods()){
			$('.subtotal_holder').hide();
			$('.total_holder').show();
			$('.important_shipping').show();
			$('#shippingPrice_holder').show();
			setShippingService();
		}
		else{
			$('.subtotal_holder').show();
			$('.total_holder').hide();
			$('.important_shipping').hide();
			$('#shippingPrice_holder').hide();
			$(".loading_page").fadeOut();
			$('#backgroundPopup').fadeOut();
		}
	});
	
	
//	$('.logo').click(function()
//	{
//		
//		if(location.host.indexOf("localhost")!=-1)
//		{
//				window.location='/';
//		}
//		else if(location.host.indexOf("testing.solestruck.com")!=-1)
//		{
//			window.location='http://testing.solestruck.com/';
//		}
//		else if(location.host.indexOf("solestruck.com")!=-1)
//		{
//			window.location='http://www.solestruck.com';
//		}
//		else if(location.host.indexOf("development-solestruck.appspot.com/")!=-1)
//		{
//			window.location='http://development-solestruck.appspot.com/';
//		}
//	});
	
	
	$('.cart_go').click(isEmailExistOrNot);
	
	//$('#email_firstStep').blur(isEmailExistOrNot);
	
	$("#email_firstStep").keyup(function(event){
		
		$('#email_firstStep_error').removeClass('error_icon');
		$('.error_icon').css('display','none');
		
		if(event.keyCode==13)
		{
			isEmailExistOrNot();
		}
			
	});
	
	$('.pwd_signin').click(function()
			{
				////console.log("coming inside the **** ");
				document.getElementById('pass_new').setAttribute('type','password');
				document.getElementById('signin_pwd1').style.fontWeight = 'normal';
				document.getElementById('signin_pwd').style.fontWeight = 'bolder';
			});
	$('.pwd1_signin').click(function()
			{
				////console.log("coming inside the ABC ");
				document.getElementById('pass_new').setAttribute('type','text');
				document.getElementById('signin_pwd').style.fontWeight = 'normal';
				document.getElementById('signin_pwd1').style.fontWeight = 'bolder';
			});
	
	$('.pwd').click(function()
			{
				////console.log("coming inside the **** ");
				document.getElementById('password_Account').setAttribute('type','password');
				document.getElementById('new_pass1').style.fontWeight = 'normal';
				document.getElementById('new_pass2').style.fontWeight = 'bolder';
			});
	$('.pwd1').click(function()
			{
				////console.log("coming inside the ABC ");
				document.getElementById('password_Account').setAttribute('type','text');
				document.getElementById('new_pass1').style.fontWeight = 'normal';
				document.getElementById('new_pass2').style.fontWeight = 'bolder';
			});
//	 $('#backgroundPopup_magzine').click(function(){
//		 $('#backgroundPopup_magzine').hide();
//		 $('.zine_popup').hide();
//	 });
	
	$(".signin_checkout_act").click(getCustomerDetailOnSingIn);//sign in button
	
	$("#pass_new").keyup(function(event){
		
		if(event.keyCode==13)
			getCustomerDetailOnSingIn();
	});
	
	$('#lBillingCountry').change(function()
	{
		var courntryName=$('#lBillingCountry option:selected').val();
		 
	//	console.log(" courntryName "+courntryName);
		
		$('#biilinginfo_state_error').removeClass('error_icon2');
		$('#biilinginfo_state').removeClass('input_error');
		$('#Shippingmethod').text('Please Select A Shipping Method...');
		if(courntryName=='US') 
		{ 
			$('#shippinginfo_country').text('USA');
			$('#shippinginfo_country').attr('title','US');
			$('#biliinginfo_country').attr('title','US');
			$('#biilinginfo_state').text('SELECT YOUR STATE');
			$('#shippinginfo_state').text('SELECT YOUR STATE');
			$('#bilinginfo_zip').attr('original-title','ZIP');
			$('.shipping_address_holder').show();
			$('#shippinginfo_province').hide();
			$('#shippinginfo_div').show();
			$('#internShipAddr').css('display','none');
			$('font.same_billing').css('display','block');
			$('font.same_billing').removeClass('same_billing_selected');
			getStatesForCountry(courntryName, "ship");
			if($('#bilinginfo_zip').val()=='Postal Code'){
				$('#bilinginfo_zip').val('ZIP');
			}
		}
		else
		{
			if(courntryName=='CA'){
				$('#biilinginfo_state').text('SELECT YOUR PROVINCE');
				$('#biilinginfo_state').attr('title','');
			}
			$('.shipping_address_holder').css('display','none');
			$('font.same_billing').css('display','none');
			$('#internShipAddr').css('display','block');
			$('#billinginfo_province').val('Province/State/Region');
			$('#bilinginfo_zip').attr('original-title','Postal Code');
			if($('#bilinginfo_zip').val()=='ZIP'){
				$('#bilinginfo_zip').val('Postal Code');
			}
		}
		
		if(courntryName=='US' || courntryName=='CA')
		{
			$('#billinginfo_province').css('display','none');
			$('#billinginfo_div').css('display','block');
			$('#biliinginfo_country').attr('title',courntryName);
			getStatesForCountry(courntryName, "bill");
		}
		else
		{
			$('#billinginfo_province').css('display','block');
			$('#billinginfo_div').css('display','none');
			$('#biliinginfo_country').attr('title',courntryName);
			$('#biilinginfo_state').attr('title','');
			$("#biilinginfo_state").text('SELECT YOUR STATE');
			
		}
		
		if($('#biliinginfo_country').attr('title')=='US')
		{
			$('font.same_billing').removeClass('same_billing_selected');
		}
		else{
			$('font.same_billing').addClass('same_billing_selected');
		}
		
	});
			
	$('#shippingCountry').change(function()
	{
		var courntryName=$('#shippingCountry').val();
		if(courntryName=='US' || courntryName=='CA' )
		{
			$('#shippinginfo_province').css('display','none');
			$('#shippinginfo_div').css('display','block');
			$('#shippinginfo_country').attr('title',courntryName);
			getStatesForCountry(courntryName, "ship");
		}
		else
		{
			$('#shippinginfo_province').css('display','block');
			$('#shippinginfo_div').css('display','none');
			$('#shippinginfo_country').attr('title',courntryName);
			$('#shippinginfo_state').attr('title','');
			$("#shippinginfo_state").text('State');
		}
		
	});
	$('#select_billinginfo_state').change(function()
	{
		$('#biilinginfo_state').attr('title',$('#select_billinginfo_state option:selected').val());
		$('#biilinginfo_state_error').removeClass("error_icon2");
		$('#biilinginfo_state').removeClass("input_error");
		
	});
	
	$('#select_shippinginfo_state').change(function()
	{
		$('#shippinginfo_state').attr('title',$('#select_shippinginfo_state option:selected').val());
		if($('#biilinginfo_state').text()!=$('#select_shippinginfo_state option:selected').text())
		  {
		   $('.same_billing').removeClass('same_billing_selected');
		  }
	});
	
	$('.billing_return').click(function()
	{
		$('.check_yourinfo, .subtotal_holder').show();
		$('.verify_info, .total_holder').hide();
		$('.checkout_error').hide();
		$('#cardHoldeName').removeClass('input_error');
		$('#cardNumber').removeClass('input_error');
		$('#cardCCV').removeClass('input_error');
		$('#cardHoldeName_error').removeClass('error_icon');
		$('#cardNumber_error').removeClass('error_icon');
		$('#cardCCV_error').removeClass('error_icon');
		var courntryName=$('#biliinginfo_country').text();
		
		if(courntryName=='USA')
		{
			//console.log(" staes "+$('#biilinginfo_state').attr('title')+":"+$('#shippinginfo_state').attr('title'));
			if($('#biilinginfo_state').attr('title')!=$('#shippinginfo_state').attr('title'))
			{
				$('.shipping_address_holder').show();
				$('#internShipAddr').css('display','none');
			}
			else
			{
				$('font.same_billing').addClass('same_billing_selected');
			}
			
		}
		else
		{
			$('font.same_billing').css('display','none');
			$('#internShipAddr').css('display','block');
		}
		if(window.history.pushState)
			{
				//console.log("----->>>>>>>>>  We are Returned to ACCOUNT INFO  ------->>>>>> ");
				window.history.pushState({step:1},null,'/checkout/account-info.htm');
				
				// This is Added for Google Page Tracking When Checkout Navigations by YES
				
				var gAnalyticsId=$('#gAnalyticsId').val();
				//console.log("----->>>>>>>>> ACCOUNT INFO Page gAnalyticsId is  ------->>>>>> : " +gAnalyticssId);
				(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
				(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
				m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
				})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

				ga('create', gAnalyticsId);
				ga('send', 'pageview');
				
				// Upto here This is Added for Google Page Tracking When Checkout Navigations by YES
			}
			
		else
			window.location.href='account-info.htm';
		$(document).attr('title','Checkout-Account-Info');
		getInventoryForCart();
		$('#shippingmethod_error').removeClass('error_icon4');
		$('#display_shippingmethod').removeClass('dwn_error');
		$('.error_icon4').css('display','none');
		$('#card_payment_holder').removeClass('card_payment_holder');
		$('#Shippingmethod').text('Please Select A Shipping Method...');
		$('#Shippingmethod').removeAttr('shipzoneid');
		$('.important_shipping').hide();
		
	});
	
	$('#deliverySign').click(updateRequireSignature);

 	$(".yourinfo_continue_act").click(function(){
 		$(".loading_page").fadeIn();
		saveCustomerDetails();
    });
	
	 $('.same_billing').click(function(){
		 	$(this).toggleClass('same_billing_selected');
			
			if($('font.same_billing').hasClass('same_billing_selected'))
				{
					$('.shipping_address_holder').hide();
				}
				else
				{
					$('.shipping_address_holder').show();
					$('#shippingCountry').css('display','none');
				}
			});
		
		 $('.checkbox').click(function(){
		 	$(this).toggleClass('checkbox_selected');
		});

/************* global **************/

/************* tooltip **************/
	



 

 	// custom_drop_down
	var csvi=false;	
	$('.custom_dropdown').on('click',function() {
		if(csvi){
		$(this).children('ul').hide();
		csvi=false;
		}
		else {
		$(this).children('ul').show();
		csvi=true;
		}	
		if($(this).hasClass('color_select_popup')){
			var max_length = 0;
			$(this).find('ul li').each(function() {
 				var li_length = $(this).text().length;
			//	alert(li_length);
					if (li_length > max_length) {
 						 max_length = li_length;
					}
				
            });
			
			$(this).find('ul').width(max_length*7);
 		}
     });
	
	$(".custom_dropdown").mouseout(function () {
		$('#wrapper').addClass('wrappflag');
    });
	
	$('.custom_dropdown ul').find('li').on('click',function() {
		 var field_value = $(this).text();
		$(this).parent().parent().children('input').val(field_value);
		$(this).parent().hide();
	});
	
	var slide_ele = true;	
	$('.show_drop_down_act').on('click', function() {
		$('.select_drop_down').slideToggle(500);
			if (slide_ele) 	{
				$('.scroll-pane').jScrollPane();
				slide_ele = false;
			}					
	});

 	 
	$('.select_drop_down, .show_drop_down_act').mouseout(function() {
		$('#wrapper').addClass('flag');
 	});
	$('.select_drop_down, .show_drop_down_act').mouseover(function() {
		$('#wrapper').removeClass('flag');
 	});
	
	

	
	$(".scroll-pane li").toggle(function(){	
		$(this).children().attr('checked');
    });
	
	/************ Shipping Calculator ***********/
	$('.shipping_calc .custom_dropdown_220 li').click(function () {
		$(this).parent().parent().next().next().hide();
		$('.shipping_tc').show();
	});
	//************* New CheckoutPage
 	  
		$('.chckout_cmplttitle_act').css('display', 'none');
		
		$('.shipping_same_address_act').css('display', 'none');
		$('.same_shpping_address_act').attr("checked", "checked");
 
 	$('.same_shpping_address_act') .click( function() {
		if (jQuery(this).is(':checked'))
		$('.shipping_same_address_act').hide();
		else 
		$('.shipping_same_address_act').show();
	} );	

	$(".custom_select_value_act").change(function() {
		 $(this).closest('div').find('p').html($(this).find("option:selected").text());
	});

$('.fgt_pwd').click(function(){
	$('.forgot_password_form').fadeIn();
	$('#backgroundPopup').show();
	position_popup ();
});
	$('.reset_password_success_act').click (function() {
		$('.forgot_password_form').hide();
		$('.reset_password_success').fadeIn();
		position_popup ();
});

//InputBox
//$('input[type="text"], textarea').focus(function()
//{
//  if( $(this).val() == $(this).attr('title') ||$(this).val() == $(this).attr('original-title')) {
//   $(this).val('');
//  }
//  }).blur(function() {
//	  
//	  console.log(" blur:"+" this value "+$(this).val()+": title "+$(this).attr('title')+": original title  "+$(this).attr('original-title'));
//	  
//   if( $(this).val() == $(this).attr('title') ||$(this).val() == $(this).attr('original-title')) {
//	   if($(this).attr('title'))
//		   	$(this).val($(this).attr('title'));
//	   else if($(this).attr('original-title'))
//			$(this).val($(this).attr('original-title'));
//   }
//   
//});

$('input[type="text"], textarea').focus(function() {
	
	  if( this.value == $(this).attr('original-title')) {
		  this.value = "";
	  }
	  }).blur(function() {
	   if( !this.value.length ) {
		this.value = $(this).attr('original-title');
	   }
	}); 


$('#cardCCV').focus(function()
{
	if($(this).val()=='CVV #'){
		$(this).val('');
	}
})

$('#cardCCV').blur(function()
{
	if($('#'+$(this).attr('id')).val()=='Your Security Code Is the 3-digit (4 on Amex) number on the back of your card.'){
		$('#'+$(this).attr('id')).val('CVV #');
	}
	
	
})

$('#payment_btn').click(completePurchase);

$('input[type="text"]').on('keyup',function(){
	if($(this).val()!='')
		{
			$(this).removeClass('input_error');
			$(this).next().removeClass('error_icon');
			$(this).next().removeClass('error_icon1');
			$(this).next().removeClass('error_icon2');
			$(this).next().removeClass('error_icon3');
			$(this).removeAttr('placeholder')
			
		}
});

$('#pass_new').on('keyup',function(){
	if($(this).val()!='')
		{
			$(this).removeClass('input_error');
			$(this).next().removeClass('error_icon');
			$(this).next().removeClass('error_icon1');
			$(this).next().removeClass('error_icon2');
			$(this).next().removeClass('error_icon3');
//			$('#new_pass1').css('margin-top','-23px');
//			$('#new_pass2').css('margin-top','-30px');
			
		}
});

$(document).keyup(function(e) {
	 
	  if (e.keyCode == 27) {
	  		$('#backgroundPopup').fadeOut();
	  		$('.fb_sale_popup').fadeOut();
	  		$('#backgroundPopup_magzine').fadeOut();
	  		 $('.zine_popup').hide();
			$(this).parent().hide();
					
		 }   // esc
	});

$('#pass_new').on('keyup',function(){
	document.getElementById('pass_new').setAttribute('type','password');
});

$('#password_Account').on('keyup',function(){
	if($(this).val()!='')
		{
		//console.log(" inside key up ");
			$(this).removeClass('input_error');
			$(this).next().removeClass('error_icon');
			$(this).next().removeClass('error_icon1');
			$(this).next().removeClass('error_icon2');
			$(this).next().removeClass('error_icon3');
//			$('#new_pass1').css('margin-top','-23px');
//			$('#new_pass2').css('margin-top','-29px');
			
		}
});

/*$('#backgroundPopup').click(function(){
	$('.popup_pos').hide();
	$(".vedio_holder").html("<video preload='none'>");
	$('#backgroundPopup').fadeOut('slow');
	if($(".homepagevideo").find(".vedio_holder").attr("id")=="vedio_holder")
	{
		$(".banner").find("#bannerForVideo").fadeOut('slow');
			$(".banner").find("#mySlider").fadeIn('slow');
	}	
});*/

$('#resetpassword').click (resetPassword);

$(document).keydown(function(e){
	var code = (e.keyCode ? e.keyCode : e.which);
    if (code === 27) {
    	$(".emailus_popup").hide();
		$('#backgroundPopup').fadeOut('fast');
		$(".blackfriday_faq_chk").hide();
    }
	
});

if($('#fbLoginErrorMessage').val()!=null && $('#fbLoginErrorMessage').val()!="" && $('#fbLoginErrorMessage').val()=="show")
{
	//$('#backgroundPopup').show();
	//$('.signin_form').fadeIn();
	$('#fbErrorMsg').addClass('fberror');
	$('#fbErrorMsg').show();
	
	$.ajax({url:'/clearfbLoginErrorMessageSession.htm',success:function(data)
	{	}
	});
}
if((readCookie('Facebook')==null || readCookie('Facebook')!='Facebook') && window.location.pathname=='/checkout/sign-in.htm' && $("#discountExists").val()=='true' && $("#discountTypeName").val()!=null && $("#discountTypeName").val()=='Order')
{
	console.log("Yahoo!");
	$('.fb_sale_popup').show();
	$("#backgroundPopup").css("background","url(../images/popup_bg.png) repeat").css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).fadeIn('fast');
}
//if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true' && $("#discountTypeName").val()!=null && $("#discountTypeName").val()=='Order')
//{
	$('#swag_holder').show();
//}
$('#case4').change(function()
{
	//console.log("coming inside the onchange function");
	//console.log("selected option is :: "+$('#case4 option:selected').text());
	$(".loading_page").show();
	$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
	var color = $('#case4 option:selected').text();
	$('#alert4').removeClass('input_error_dd');
	if(color!='' && color=='#OMGSHOES' && color!='#SHOEADDICT')
		$('.omgshoes').css('background-image','url(https://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/images/OMGSHOES.jpg)');
	else if(color!='' && color=='#SHOEADDICT' && color!='#OMGSHOES')
		$('.omgshoes').css('background-image','url(https://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/images/SHOEADDICT.jpg)');
	color = color.replace('#','');
	$.ajax({url:'/getCheckoutSplItemCases.htm',cache:false,data:({"color":color, "type":4}),success:function(data){
		if(data!=null)
		{
			var myHiddenValues = "";
			myHiddenValues+="<input type=\"hidden\" id=\"vendorname4Case\" value=\""+data.vendorName+"\"/>";
			myHiddenValues+="<input type=\"hidden\" id=\"productname4Case\" value=\""+data.productName+"\"/>";
			myHiddenValues+="<input type=\"hidden\" id=\"productid4Case\" value=\""+data.productId+"\"/>";
			myHiddenValues+="<input type=\"hidden\" id=\"variantid4Case\" value=\""+data.variantId+"\"/>";
			myHiddenValues+="<input type=\"hidden\" id=\"colorid4Case\" value=\""+data.colorId+"\"/>";
			myHiddenValues+="<input type=\"hidden\" id=\"inventoryCheck4Case\" value=\""+data.inventoryCheck+"\"/>";
			myHiddenValues+="<input type=\"hidden\" id=\"retailPrice4Case\" value=\"5\"/>";
			$('#hiddenValues4Case').html(myHiddenValues);
			console.log("inventory check value is :: "+data.inventoryCheck);
			if(data.inventoryCheck==false)
			{
				console.log("coming inside the OOS condition");
				$('.omgshoes_span').text('Out of Stock'); 
			}
			else
				$('.omgshoes_span').text('+ CART ($5)');
		}
	}});
	$(".loading_page").hide();
	$('#backgroundPopup').fadeOut();
});
$('#case5').change(function()
{
	//console.log("coming inside the onchange function case5");
	//console.log("selected option is :: "+$('#case5 option:selected').text());
	$(".loading_page").show();
	$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
	var color = $('#case5 option:selected').text();
	$('#alert5').removeClass('input_error_dd');
	if(color!='' && color=='#OMGSHOES' && color!='#SHOEADDICT')
	{
		//console.log("coming inside the if condition and the selected option is :: "+color);
		$('.shoeaddict').css('background-image','url(https://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/images/OMGSHOES.jpg)');
	}
	else if(color!='' && color=='#SHOEADDICT' && color!='#OMGSHOES')
	{
		//console.log("coming inside the  elsecondition and the selected option is :: "+color);
		$('.shoeaddict').css('background-image','url(https://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/images/SHOEADDICT.jpg)');
	}
	color = color.replace('#','');
	//console.log("color value is :: "+color)
	$.ajax({url:'/getCheckoutSplItemCases.htm',cache:false,data:({"color":color, "type":5}),success:function(data){
		if(data!=null)
		{
			var myHiddenValues = "";
			myHiddenValues+="<input type=\"hidden\" id=\"vendorname5Case\" value=\""+data.vendorName+"\"/>";
			myHiddenValues+="<input type=\"hidden\" id=\"productname5Case\" value=\""+data.productName+"\"/>";
			myHiddenValues+="<input type=\"hidden\" id=\"productid5Case\" value=\""+data.productId+"\"/>";
			myHiddenValues+="<input type=\"hidden\" id=\"variantid5Case\" value=\""+data.variantId+"\"/>";
			myHiddenValues+="<input type=\"hidden\" id=\"colorid5Case\" value=\""+data.colorId+"\"/>";
			myHiddenValues+="<input type=\"hidden\" id=\"inventoryCheck5Case\" value=\""+data.inventoryCheck+"\"/>";
			myHiddenValues+="<input type=\"hidden\" id=\"retailPrice5Case\" value=\"5\"/>";
			$('#hiddenValues5Case').html(myHiddenValues);
			if(data.inventoryCheck==false)
			{
				$('.shoeaddict_span').text('Out of Stock'); 
			}
			else
				$('.shoeaddict_span').text('+ CART ($5)');
		}
	}});
	$(".loading_page").hide();
	$('#backgroundPopup').fadeOut();
});

if($('#inventoryCheckKoozie').val()=='false')
{
	$('.cancoozy_span').text('Out of Stock');
}

if($('#discountTypeName').val()!=null && $('#discountTypeName').val()=="FF")
	$('#saleFAQ').show();
else
	$('#saleFAQ').hide();


//Upload Attachment

$("input[id^='file_']").unbind("change").bind('change',onEmailUsFileChange);

});

$(window).bind('popstate',function(e){
	if(e.originalEvent!=undefined&&e.originalEvent!=null&&e.originalEvent.state!=undefined&&e.originalEvent.state!=null)
		{
		//console.log(e.originalEvent.state.step);
		var checkoutStep=e.originalEvent.state.step;
		if(checkoutStep==0)
			window.location.href='sign-in.htm';
		else if(checkoutStep==1)
			window.location.href='account-info.htm';
		else if(checkoutStep==2)
			window.location.href='complete-purchase.htm';
		}

});

$(document).keydown(function(e){
	if($(".emailus_popup_act").is(":visible") && !$("#help").is(":focus"))
	{
		//alert("popup is displaying");
		var code = (e.keyCode ? e.keyCode : e.which);
		if(code==13)
		{
			emailUsDetails();
		}
	}
});


function onEmailUsFileChange(e)
{
	$("#alertForAttachment").text("");
	var flag =false;
	 var files = e.target.files || e.dataTransfer.files;
	 fileToUpload = files[0];
	 if(fileToUpload.size<=8388608)
	 {
		 id = (e.target.id).charAt((e.target.id).length-1);
		 //if(id==undefined)
			// fileName=$("input[id^='file_']").val();
		 if(currentFileId!=undefined && currentFileId==id)
		 {
			 fileName=$("#file_"+currentFileId).val();
			 flag = true;
		 }
		 else
		 {
			 fileName=$("#file_"+id).val();
		 }	 
		 fileName=fileName.substring(fileName.lastIndexOf('\\')+1,fileName.length);
		 var pattern=/jpg|png|gif|tiff|bmp|BMP|TIFF|JPG|PNG|GIF/g;
		 //if(id==undefined)
			// id = $("input[id^='file_']").attr("id").charAt($("input[id^='file_']").attr("id").length-1);
		 if(currentFileId==undefined)
			 id = $("#file_"+id).attr("id").charAt($("#file_"+id).attr("id").length-1);
		 else
			 id=$(this).attr("id").charAt($(this).attr("id").length-1);
		 if(pattern.test(fileName))
		 {
			 if(!flag)
			 {
				 if($(".image_file"+id).text()=='Click To Attach File' || $(".image_file"+id).text()=='Attach Another File')
				 {
					 $(".image_file"+id).text(fileName);
					 $(".image_file"+id).after("<code class='email_remove' id='removefile_"+id+"'></code>");
					 $("#removefile_"+id).unbind("click").bind("click",removeAttachment);
					 id=parseInt(id)+1;
					 var filesLen = $("input[name^='myFile']");
						if(filesLen.length<5)
						{
							$(".browse_btn:last").after("<div class='browse_btn'><input id='file_"+id+"' name='myFile"+id+"' type='file' value='Attach Files'/><span class='image_file"+id+"' onclick="+'$("#file_'+id+'").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
							$('#file_'+id).unbind("change").bind('change',onEmailUsFileChange);
						}
				 }
				else
				{
					$(".image_file"+id).text(fileName);
				}		
			 }
			 else
			 {
				 $(".image_file"+currentFileId).text(fileName);
				 $(".image_file"+currentFileId).after("<code class='email_remove' id='removefile_"+currentFileId+"'></code>");
				 $("#removefile_"+currentFileId).unbind("click").bind("click",removeAttachment);
				 flag=false;
				 var filesLen = $("input[name^='myFile']");
				 id=filesLen.length;
				 id=parseInt(id)+1;
				 currentFileId = undefined;
				 var filesLen = $("input[name^='myFile']");
					if(filesLen.length<5)
					{
						$(".browse_btn:last").after("<div class='browse_btn'><input id='file_"+id+"' name='myFile"+id+"' type='file' value='Attach Files'/><span class='image_file"+id+"' onclick="+'$("#file_'+id+'").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
						$('#file_'+id).unbind("change").bind('change',onEmailUsFileChange);
					}
			 }
			
		 }
		 else
		 {
			 $("#alertForAttachment").text("Please upload Image Files");
		 } 
	 }
	 else
	 {
		 $("#alertForAttachment").text("Uh-oh! Your attachment is larger than 7MB and can't be accepted. Please submit a smaller file.");
	 }
	 
	
	
}

function removeAttachment(e)
{
	var htmlStr="";
	currentFileId = (e.target.id).charAt((e.target.id).length-1);
	var brwse_btn = $("#"+e.target.id).parent().attr("class");
	//alert(brwse_btn);
	
	$("#file_"+currentFileId).parent().remove();
	
	
	if($(".browse_btn:last").find("span[class='image_file']").text()!='' && $(".browse_btn:last").find("span[class='image_file']").text()!='Click To Attach File')
		$(".browse_btn:last").remove();
	var bool=false;
	for(var i=0;i<=5;i++)
	{
		if($(".image_file"+i).text()=='Click To Attach File')
			bool=true;
	}
	if(!bool)
		$("#emailUs_send").before("<div class='browse_btn'><input id='file_"+currentFileId+"' name='myFile"+currentFileId+"' type='file' value='Attach Files'/><span class='image_file"+currentFileId+"' onclick="+'$("#file_'+currentFileId+'").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
	$('#file_'+currentFileId).bind('change',onEmailUsFileChange);
}

function isEmailExistOrNot()
{
	$('.cart_go').addClass('cart_go_active');
	var emailId=$.trim($("#email_firstStep").val());
	if(emailId=='')
	{
		$('#email_firstStep').val('');
		$('#email_firstStep').attr('placeholder','Email Here Please...');
		$('#email_firstStep_error').addClass('error_icon');
		$('.error_icon').css('display','block');
		$('#email_firstStep').addClass('input_error');
		$(".loading_page").fadeOut();
		return;
	}
	else
	{
		$('.error_icon').css('display','none');
		$('#email_firstStep_error').removeClass('error_icon');
	}
	if(isValidEmail(emailId))
	{
		$(".loading_page").fadeIn();
		checkAvailablilityForNewCust(emailId);
		$('.error_icon').css('display','none');
	}
	else
	{
		$('#email_firstStep').attr('placeholder','Please Enter A Valid Email Address!');
		$('#email_firstStep').val('').focus();
		$('.error_icon').css('display','block');
		$('#email_firstStep').addClass('input_error');
		$(".loading_page").fadeOut();
	}

	
}

function isValidEmail(email)
{
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if(!emailReg.test(email))
		return false;
	else
		return true;
	
}

function checkAvailablilityForNewCust(email)
{
	$.ajax({url:'/isEmailAlreadyExists.htm',cache:false,data:({"email":email}),success:function(data){
		if(data=='true')
		{
			////console.log("Existing email id "+email);
			if(window.history.pushState)
				window.history.pushState({step:1},null,'/checkout/account-info.htm');
			$(document).attr('title','Checkout-Account-Info');
		//else
			//{
			//window.location.href='account-info.htm';
			//}
			$('.email_checkout').hide();
			$('.signin_checkout').show();
			$('#userEmailId').val(email);
			$(".loading_page").fadeOut();
			$('#pass_new').focus();
			$('#newuserid_ajax').hide();
			$('#existsuserid').hide();
			$('#newuserid').hide();
			$("#email_forgot").val(email);
			$('#customerId').val('');

		}
		else{
				////console.log("New  email id "+email);
			if(window.history.pushState)
				window.history.pushState({step:1},null,'/checkout/account-info.htm');
			$(document).attr('title','Checkout-Account-Info');
//		else
//			{
		//	window.location.href='account-info.htm';
		//	}
			$('#new_email').val(email);
			$('#existing_email').val('');
			$("#customerId").val('');
			$('.shipping_holder').css('display','block');
			$('.check_yourinfo').css('display','block');
			$('.email_checkout').css('display','none');
			$('#internShipAddr').css('display','none');
			$('#newuserid').show();
			$('#existsuserid').hide();
			$(".loading_page").fadeOut();
			$('#billinginfo_firstName').val('First Name');
			$('#billinginfo_lastName').val('Last Name');
			$('#billinginfo_phone').val('Phone Number');
			$('#billinginfo_addr1').val('Address1');
			$('#billinginfo_addr2').val('Address2');
			$('#biliinginfo_country').text('USA');
			$('#biliinginfo_country').attr('title','US');
			$('#biilinginfo_state').text('SELECT YOUR STATE');
			$('#billinginfo_city').val('City');
			$('#bilinginfo_zip').val('ZIP');
			$('#shippinginfo_firstName').val('First Name');
			$('#shippinginfo_lastName').val('Last Name');
			$('#shippinginfo_phone').val('Phone Number');
			$('#shippinginfo_addr1').val('Address1');
			$('#shippinginfo_addr2').val('Address2');
			$('#shippinginfo_country').text('USA');
			$('#shippinginfo_state').text('SELECT YOUR STATE');
			$('#shippinginfo_city').val('City');
			$('#shippinginfo_zip').val('ZIP');
			$('#billinginfo_province').hide();
			$('#billinginfo_div').show();
			if($("#discountExists").val()=='true')
			{
				//console.log('---->>>>>> Refreshing Cart ------>>>>>');
				//window.location="../checkout/account-info.htm";
				//createNewCookie("Facebook","Facebook",1);
				refreshCart();
			}
		}
	}});
}

function getCustomerDetailOnSingIn()
{
	$('.signin_btn').addClass('yell_btn_active');
	$('.inputbox_field_pwd').attr('original-title','');
	var myemail=$.trim($("#userEmailId").val());
	var mypassword=$.trim($("#pass_new").val());
	
	var msg=true;
	if(myemail=="")
	{
		$('#userEmailId').attr('placeholder','Email Here Please...');
		$('#emailerror').addClass('error_icon');
		$('.error_icon').css('display','block');
		$('#userEmailId').addClass('input_error');
		msg=false;
	}
	else if(!isValidEmail(myemail)){
			
			$('#userEmailId').attr('placeholder','Please Enter A Valid Email Address!');
			$('#emailerror').addClass('error_icon');
			$('.error_icon').css('display','block');
			$('#userEmailId').addClass('input_error');
			msg=false;
	}
	else
	{
		$('.error_icon').removeClass('error_icon');
		$('#emailerror').removeClass('error_icon');
	}
	if(mypassword==""||mypassword=="Password")
	{
		$('#pass_new').attr('placeholder','Password Here Please...');
		$('#passworderror').addClass('error_icon');
		$('.error_icon').css('display','block');
		$('#pass_new').addClass('input_error');
		msg=false;
	}
	else
	{
		$('.error_icon').removeClass('error_icon');
		$('#passerror').removeClass('error_icon');
	}
	if(msg)
	{
		
		$(".loading_page").fadeIn();
		$.ajax({
		url:'/getCustomerDetailByAuthentication.htm',
		cache:false,
		type:'POST',
		dataType:'json',
		data:{'emailId':myemail,'password':mypassword},
		success:function(customerDetail)
		{
			if(customerDetail.email==null)
			{
				//$('#pass_new').attr('type','text');
				document.getElementById('pass_new').setAttribute('type','text');
				$('#pass_new').val('');
				$('#pass_new').attr("placeholder","Email & Password combo didn't match our records.");
				$('#passworderror').addClass('error_icon');
				$('#pass_new').addClass('input_error');
				$('.error_icon').css('display','block');
				$(".loading_page").fadeOut();
				return;
			}
			else
			{
				$('.error_icon').removeClass('error_icon');
				$('#passerror').removeClass('error_icon');
				
				if(window.history.pushState)
					{
						//console.log("----->>>>>>>>>  We are In ACCOUNT INFO  ------->>>>>> ");
						window.history.pushState({step:1},null,'/checkout/account-info.htm');
						
						// This is Added for Google Page Tracking When Checkout Navigations by YES
						
						var gAnalyticsId=$('#gAnalyticsId').val();
						//console.log("----->>>>>>>>> ACCOUNT INFO Page gAnalyticsId is  ------->>>>>> : " +gAnalyticsId);
						(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
						(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
						m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
						})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

						ga('create', gAnalyticsId);
						ga('send', 'pageview');
						
						// Upto here This is Added for Google Page Tracking When Checkout Navigations by YES
					}
									
				else
				{
				window.location.href='account-info.htm';
				return;
				}
				$(document).attr('title','Checkout-Account-Info');
				getInventoryForCart();
				$('#existing_email').val(myemail);
				$('#new_email').val('');
				$('#existsuserid').show();
				$('#newuserid').hide();
				$('.signin_checkout').css('display','none');
				$('.shipping_holder, .check_yourinfo').show();
				setAccountDetails(customerDetail);
				
			}
			$(".loading_page").fadeOut();
			if($('#discountExists').val()=='true' && $('#discountTypeName').val()=='FF')
			{
				window.location="account-info.htm";
			}
		}
		
	});
		
		
}
}

function setAccountDetails(customerDetail)
{
	$('#customerId').val(customerDetail.customerId);
	$('#billinginfo_firstName').val(customerDetail.billingAddress.firstName);
	$('#billinginfo_lastName').val(customerDetail.billingAddress.lastName);
	$('#billinginfo_phone').val(customerDetail.phone);
	$('#billinginfo_addr1').val(customerDetail.billingAddress.street1);
	$('#billinginfo_addr2').val(customerDetail.billingAddress.street2);
	$('#biliinginfo_country').text(customerDetail.billingAddress.countryName);
	$('#biliinginfo_country').attr('title',customerDetail.billingAddress.country)
	var billingCourntryName=customerDetail.billingAddress.countryName;
	
	if(billingCourntryName=='USA')
	{
		$('.shipping_return').show();
		if(customerDetail.billingAddress.stateName!=customerDetail.shippingAddress.stateName)
		{
			$('.shipping_address_holder').css('display','block');
			$('font.same_billing').css('display','block');
			$('font.same_billing').removeClass('same_billing_selected');
			$('#internShipAddr').css('display','none');
		}
		else
		{
			$('font.same_billing').css('display','block');
			$('#internShipAddr').css('display','none');
		}
		
		
	}
	else
	{
		$('.shipping_return').hide();
		$('font.same_billing').css('display','none');
		$('#internShipAddr').css('display','block');
		$('#billinginfo_province').val('Province/State/Region');
		
	}
	if(billingCourntryName=='USA' || billingCourntryName=='Canada' )
	{
		$('#billinginfo_province').css('display','none');
		$('#billinginfo_div').css('display','block');
		//$('font.same_billing').css('display','none');
		if(billingCourntryName=='USA')
		{
			billingCourntryName='US';
		}
		if(billingCourntryName=='Canada')
		{
			billingCourntryName='CA';
		}
		getStatesForCountry(billingCourntryName, "bill",customerDetail.billingAddress.state);
	}
	else
	{
		$('#billinginfo_province').css('display','block');
		$('#billinginfo_div').css('display','none');
		$('#billinginfo_province').val('Province/State/Region');
	}
	
	if(customerDetail.billingAddress.stateName!="")
	{
		$('#biilinginfo_state').text(customerDetail.billingAddress.stateName);
		$('#biilinginfo_state').attr('title',customerDetail.billingAddress.state);
	}
	else if(customerDetail.billingAddress.province!="Province/State/Region")
	{
		$('#billinginfo_province').val(customerDetail.billingAddress.province);
	}
	$('#billinginfo_city').val(customerDetail.billingAddress.street3);
	$('#bilinginfo_zip').val(customerDetail.billingAddress.zipCode);
	
	$('#shippinginfo_firstname').val(customerDetail.shippingAddress.firstName);
	$('#shippinginfo_lastname').val(customerDetail.shippingAddress.lastName);
	$('#shippinginfo_phone').val(customerDetail.phone);
	$('#shippinginfo_addr1').val(customerDetail.shippingAddress.street1);
	$('#shippinginfo_addr2').val(customerDetail.shippingAddress.street2);
	$('#shippinginfo_country').text(customerDetail.shippingAddress.countryName);
	$('#shippinginfo_country').attr('title',customerDetail.shippingAddress.country);
	
	var shippingCourntryName=customerDetail.shippingAddress.countryName;
	if(shippingCourntryName=='USA' || shippingCourntryName=='Canada' )
	{
		$('#shippinginfo_province').css('display','none');
		$('#shippinginfo_div').css('display','block');
		
		if(shippingCourntryName=='USA')
		{
			$('.shipping_return').show();
			shippingCourntryName='US';
		}
		if(shippingCourntryName=='Canada')
		{
			shippingCourntryName='CA';
		}
		getStatesForCountry(shippingCourntryName, "ship",customerDetail.shippingAddress.state);
	}
	else
	{
		$('#shippinginfo_province').css('display','block');
		$('#shippinginfo_div').css('display','none');
	}
	if(customerDetail.shippingAddress.stateName!="")
	{
		$('#shippinginfo_state').text(customerDetail.shippingAddress.stateName);
		$('#shippinginfo_state').attr('title',customerDetail.shippingAddress.state);
	}
	else if(customerDetail.shippingAddress.province!="")
	{
		$('#shippinginfo_province').val(customerDetail.shippingAddress.province);
	}
	
	$('#shippinginfo_city').val(customerDetail.shippingAddress.street3);
	$('#shippinginfo_zip').val(customerDetail.shippingAddress.zipCode);
	
	var htmlString="";
	$.ajax({url:'/getcountries.htm',cache:false,success:function(data){
		for (var key in data) {
			  if (data.hasOwnProperty(key))
			  {
				  var selected="";
				  if(key==customerDetail.shippingAddress.country)
					  selected="selected=\"selected\"";
				  htmlString+='<option '+selected+' value='+key+'>'+ data[key].countryName+'</option>';
			    
			  }
			}
		
		$('#lBillingCountry').html(htmlString);
		
	}});
}

function getStatesForCountry(country_code, address, state_code)
{
	////console.log(" getStatesForCountry funtion "+country_code+":"+address)
	var countryCode = country_code;
	
	$.ajax({
		
		url:'/getStatesForCountry.htm',
		data:{'countryCode':countryCode},
		dataType:'json',
		success:function(states)
		{			
			populateStateDetailsForAddress(country_code, states, address, state_code);
		}
		
	});

}

//shp
function populateStateDetailsForAddress(country_code, states, address, state_code)
{
	////console.log(" populateStateDetailsForAddress funtion "+country_code+":"+address)
	var htmlStr="";
	if(states!=null && states.length>0)
		{
			for(i=0;i<states.length;i++)
				{
					if(state_code!=undefined&&state_code==states[i].stateCode)
						htmlStr+="<option selected=\"selected\" value='"+states[i].stateCode+"'>"+states[i].stateName+"</option>";
					else
						htmlStr+="<option value='"+states[i].stateCode+"'>"+states[i].stateName+"</option>";
				}
		}
	
		$('#select_shippinginfo_state').html(htmlStr);
		$('#select_billinginfo_state').html(htmlStr);
	
		return;
}

function saveCustomerDetails()
{
	$('.yellow_btn').addClass('yell_btn_active');
	$(this).toggleClass('same_billing_selected');
	
	if($('font.same_billing').hasClass('same_billing_selected'))
		{
			copyBillingAddressToShippingAddress();
		}
		
	if(!validateCustomerDetails()){
		//$('#error_account').show();
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return;
	}
	
	var customerDetail=backUpCustomerDetail();
	
	////console.log(" Customer id "+customerDetail.customerId);
	
	
	var finished=false;
	var myurl;
	if(customerDetail.customerId==null)
		myurl='/createNewCustomerDetail.htm';
	else
	{
		myurl='/updateCustomerDetail.htm';
		customerDetail.password=null;
	}
	
	$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
	$.ajax({
		url:myurl,
		type:'POST',
		dataType:'json',
		cache:false,
		contentType:'application/json',
		data:$.toJSON(customerDetail),
		success:function(resp){
			////console.log("**Response "+resp);
			if(resp==null){
				//show Error *************
				return;
			}
			else
			{
				$('#customerId').val(resp.customerId);
				if(resp.shippingAddress.country=='US'){
					
					$('.import_fspan').css('display','block');
					$('.import_sspan').css('display','none');
					
				}
				else
				{
					$('.import_fspan').css('display','none');
					$('.import_sspan').css('display','block');
					
				}
				if(resp.billingAddress.country=='US')
				{
					$('#deliverySign').css('display','block');
				}
				else
				{
					$('#deliverySign').css('display','none');
				}
				updateShippingServices();
				getInventoryForCart();
				if(window.history.pushState)
					{
						//console.log("----->>>>>>>>>  We are In COMPLETE PURCHASE  ------->>>>>> ");
						window.history.pushState({step:2},null,'/checkout/complete-purchase.htm');
						
						// This is Added for Google Page Tracking When Checkout Navigations by YES
						
						if(readCookie('Facebook')==null && $("#discountExists").val()=='true')
						{
							location.reload();
						}
						var gAnalyticsId=$('#gAnalyticsId').val();
						//console.log("----->>>>>>>>>  COMPLETE PURCHASE Page gAnalyticsId is  ------->>>>>> : " +gAnalyticsId);
						(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
						(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
						m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
						})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

						ga('create', gAnalyticsId);
						ga('send', 'pageview');	
						
						// Upto here This is Added for Google Page Tracking When Checkout Navigations by YES
					}
										
				else
				{
					window.location.href='complete-purchase.htm';
					return;
				}
				$(document).attr('title','Checkout-Complete-Purchase');
				if(resp.billingAddress.country=='US')
				{
					$('#shipping_return_info').show();  
					$('#billing_return_info').show();
					$('#address_return_info').hide();
					$('.shipping_return').show();
					if(resp.billingAddress.street2!=""){
						$('#billing_return_info').html('<b>BILLING: </b>'+resp.billingAddress.street1+', '+resp.billingAddress.street2+', '+resp.billingAddress.street3+', '+resp.billingAddress.state+', '+resp.billingAddress.zipCode);
					}else{
						$('#billing_return_info').html('<b>BILLING: </b>'+resp.billingAddress.street1+', '+resp.billingAddress.street3+', '+resp.billingAddress.state+', '+resp.billingAddress.zipCode);
					}
					if(resp.shippingAddress.street2!=""){
						$('#shipping_return_info').html('<b>SHIPPING: </b>'+resp.shippingAddress.street1+', '+resp.shippingAddress.street2+', '+resp.shippingAddress.street3+', '+resp.shippingAddress.state+', '+resp.shippingAddress.zipCode);
					}else{
						$('#shipping_return_info').html('<b>SHIPPING: </b>'+resp.shippingAddress.street1+', '+resp.shippingAddress.street3+', '+resp.shippingAddress.state+', '+resp.shippingAddress.zipCode);
					}
					
				}
				else
				{
					$('#shipping_return_info').hide();
					$('#billing_return_info').hide();
					$('#address_return_info').show();
					$('.shipping_return').hide();
					if(resp.billingAddress.province!='')
					{
						if(resp.billingAddress.street2!='')
						{
							if(resp.billingAddress.stateName!=''){
								$('#address_return_info').html('<b>Address: </b>'+resp.billingAddress.street1+', '+resp.billingAddress.street3+', '+resp.billingAddress.stateName+', '+resp.billingAddress.countryName+', '+resp.billingAddress.zipCode);
							}
							else{
								$('#address_return_info').html(' <b>Address: </b>'+resp.billingAddress.street1+', '+resp.billingAddress.street2+', '+resp.billingAddress.street3+', '+resp.billingAddress.province+', '+resp.billingAddress.countryName+', '+resp.billingAddress.zipCode);
							}
							
						}
						else{
							$('#address_return_info').html(' <b>Address: </b>'+resp.billingAddress.street1+', '+resp.billingAddress.street3+', '+resp.billingAddress.province+', '+resp.billingAddress.countryName+', '+resp.billingAddress.zipCode);
						}
						
					}
					else
					{
						
						if(resp.billingAddress.street2!='')
						{
							if(resp.billingAddress.stateName!=''){
								$('#address_return_info').html('<b>Address: </b>'+resp.billingAddress.street1+', '+resp.billingAddress.street3+', '+resp.billingAddress.stateName+', '+resp.billingAddress.countryName+', '+resp.billingAddress.zipCode);
							}
							else{
								$('#address_return_info').html(' <b>Address: </b>'+resp.billingAddress.street1+', '+resp.billingAddress.street2+', '+resp.billingAddress.street3+', '+resp.billingAddress.province+', '+resp.billingAddress.countryName+', '+resp.billingAddress.zipCode);
							}
							
						}
						else{
							
							if(resp.billingAddress.stateName!=''){
								$('#address_return_info').html('<b>Address: </b>'+resp.billingAddress.street1+', '+resp.billingAddress.street3+', '+resp.billingAddress.stateName+', '+resp.billingAddress.countryName+', '+resp.billingAddress.zipCode);
							}
							else{
								$('#address_return_info').html(' <b>Address: </b>'+resp.billingAddress.street1+',  '+resp.billingAddress.street3+', '+resp.billingAddress.countryName+', '+resp.billingAddress.zipCode);
							}
						
						}
						
					}
				}
				
				$('.check_yourinfo, .subtotal_holder').hide();
				$('.verify_info, .subtotal_holder').show();
				$('#Shippingmethod').text('Please Select A Shipping Method...');
				$('#Shippingmethod').removeAttr('shipzoneid');
				$('#shippingPrice_holder').hide();
				$('.yellow_btn').removeClass('yell_btn_active');
				
				var count = 0;
//					$(".loading_page").fadeIn();
//					$.ajax({url:'/loadShoppingCart.htm',
//						dataType:'json',
//						cache:false,
//						success:function(res){
//							$(".loading_page").fadeOut();
//							if(res.shoppingCart.lineItems.length>0)
//							{
//								for(var i=0;i<res.shoppingCart.lineItems.length;i++)
//								{
//									var lineItem = res.shoppingCart.lineItems[i];
//									if(lineItem.vendorName.toLowerCase() ==  $("#saleBrandNames").val())
//									{
//										count++;
//									}
//								}
//								for(var i=0;i<res.shoppingCart.lineItems.length;i++)
//								{
//									var lineItem = res.shoppingCart.lineItems[i];
//									if(resp.shippingAddress.countryName!='USA')
//									{
//										if(lineItem.vendorName == 'Solestruck Magazine')
//										{
//												var attr_id = $("span[name='"+lineItem.vendorName+"']").attr("id");
//												var seqid = attr_id.substring(attr_id.indexOf("_")+1,attr_id.length);
//												if($("#price_"+seqid).text()=="$0.00")
//												{
//													removeItem(seqid);
//												}
//												else
//													$('#quantities_'+seqid).attr('disabled',false);
//										}
//									}
//									else
//									{
//										if(lineItem.vendorName == 'Solestruck Magazine' && count>0)
//										{
//												var attr_id = $("span[name='"+lineItem.vendorName+"']").attr("id");
//												var seqid = attr_id.substring(attr_id.indexOf("_")+1,attr_id.length);
//												$('#quantities_'+seqid).attr('disabled',true);
//												if($("#price_"+seqid).text()!="$0.00")
//												{
//													$("#price_"+seqid).html("$0.00");
//													savingsForDiscountProgram();
//												}	
//										}
//									}
//								}
//								if(resp.shippingAddress.countryName=='USA' && $('#solestruck_magazine').val()!='Solestruck-Magazine' && $('#inventoryCheck').val()=='true')
//								{
//									console.log("count: "+count+" "+$("#discountTypeName").val());
//								//	if(count>0 && $("#discountTypeName").val() == 'Brand')
//									//{
//										 $('#backgroundPopup_magzine').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
//										 $('.zine_popup').show();
//										 $(".loading_page").fadeOut();
//									//} // commented after YES Launch Sale
//								}
//							}
//						}
//					});
				
				if(resp.shippingAddress.countryName=='USA' && $('#solestruck_magazine').val()!='Solestruck-Magazine' && $('#inventoryCheck').val()=='true')
					{
//						console.log("count: "+count+" "+$("#discountTypeName").val());
//					//	if(count>0 && $("#discountTypeName").val() == 'Brand')
//						//{
							 $('#backgroundPopup_magzine').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
							 $('.zine_popup').show();
							 $(".loading_page").fadeOut();
//						//} // commented after YES Launch Sale
					}
				

			}
			
		}
	});
	$('#checkout_payment_err').addClass('checkout_error');
}

function copyBillingAddressToShippingAddress()
{
	
//	//console.log("bfirstName:"+$("#billinginfo_firstName").val()+" :blastName:"+$("#billinginfo_lastName").val()+" :baddress1:"+$("#billinginfo_addr1").val()+" :baddress2:"+$("#billinginfo_addr2").val()+" :bcity:"+$("#billinginfo_city").val()+" :bzipcode:"+$("#bilinginfo_zip").val());
//	
//    //console.log('bstatecode :'+$('#biilinginfo_state').attr('title'));
//    //console.log('bstateName:'+$("#biilinginfo_state").text());
//    //console.log('bcountrycode '+$('#biliinginfo_country').attr('title'));
//    //console.log('bcountryName'+$("#biliinginfo_country").text());
//    //console.log("bprovince "+$("#billinginfo_province").val());
	
	
	$("#shippinginfo_firstname").val($("#billinginfo_firstName").val());
	$("#shippinginfo_lastname").val($("#billinginfo_lastName").val());
	$("#shippinginfo_phone").val($("#billinginfo_phone").val());
	$("#shippinginfo_addr1").val($("#billinginfo_addr1").val());
	if($("#billinginfo_addr2").val()=='Address2'){
		$("#shippinginfo_addr2").val('');
	}
	else
	{
		$("#shippinginfo_addr2").val($("#billinginfo_addr2").val());
	}
	
	$("#shippinginfo_country").text($("#biliinginfo_country").text());
	$("#shippinginfo_country").attr('title',$("#biliinginfo_country").attr('title'));
	$("#shippinginfo_state").text($('#biilinginfo_state').text());
	$("#shippinginfo_state").attr('title',$('#biilinginfo_state').attr('title'));
	$("#shippinginfo_city").val($("#billinginfo_city").val());
	$("#shippinginfo_zip").val($("#bilinginfo_zip").val());
	$("#shippinginfo_province").val($("#billinginfo_province").val());
	
}

function validateCustomerDetails()
{
	
	var email="";
	if($('#existing_email').val()!=""){
		email=$('#existing_email').val();
	}
	if($('#new_email').val()!=""){
		email= $('#new_email').val();
	}
	

	if($.trim(email)==''){
		$('#yourinfo_email').attr('placeholder','Email Here Please...');
		$('#yourinfo_email_error').addClass('error_icon');
		$('.error_icon').css('display','block');
		$('#yourinfo_email').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("1");
		
		return false;
	}
	else if(!isValidEmail($.trim(email)))
	{
		////console.log("2"+$('#yourinfo_email').val());
		$('#yourinfo_email').attr('placeholder','Please Enter A Valid Email Address!');
		$('#yourinfo_email_error').addClass('error_icon');
		$('.error_icon').css('display','block');
		$('#yourinfo_email').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("2");
		return false;
	}
	else
	{
		$('#yourinfo_email_error').removeClass('error_icon');
		$('#yourinfo_email').removeClass('input_error');
		
	}
	
	var customerid=$("#customerId").val();
	if(customerid==''||customerid==null){
	
		var passwd=$.trim($('#password_Account').val());
		//var conpwd=$.trim($('#confirmpassword_Account').val());
		if(passwd=='Password'||passwd=='')
		{
			$('#password_Account').attr('placeholder','Password Here Please...');
			$('#password_Account_error').addClass('error_icon');
			$('.error_icon').css('display','block');
			$('#password_Account').addClass('input_error');
			$(".loading_page").fadeOut();
			//console.log("3");
			return false;
		}
//		else if(!isValidAddress(passwd))
//		{
//			$('#password_Account').attr('placeholder','Please Enter Valid Password.');
//			$('#password_Account_error').addClass('error_icon');
//			$('.error_icon').css('display','block');
//			$('#password_Account').addClass('input_error');
//			$(".loading_page").fadeOut();
//			//console.log("4");
//			return false;
//		}
		else
		{
			$('#password_Account_error').removeClass('error_icon');
			$('#password_Account').removeClass('input_error');
		}
		
//		if(conpwd==''||conpwd==$('#confirmpassword_Account').attr('original-title')){
//			$('#error_account').text('Please Enter Confirm Password');
//			return false;
//		}
//		else if(!isValidAddress(conpwd))
//		{
//			$('#error_account').text('Please Enter Valid Confirm Password.');
//			return false;
//		}
//		
//		if(passwd!=conpwd){
//			$('#error_account').text('Your Password and Confirm Password doesn\'t match');
//			return false;
//		}
	}
	
	
	if($.trim($('#billinginfo_firstName').val())=='First Name' || $.trim($('#billinginfo_firstName').val())=='' )
	{
		$('#billinginfo_firstName').attr('placeholder','First Name Here Please...');
		$('#billinginfo_firstName_error').addClass('error_icon1');
		$('.error_icon1').css('display','block');
		$('#billinginfo_firstName').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("5");
		return false;
	}
	else if(!isValidAddress($('#billinginfo_firstName').val()))
	{
		$('#billinginfo_firstName').attr('placeholder','First Name Here Please...');
		$('#billinginfo_firstName_error').addClass('error_icon1');
		$('.error_icon1').css('display','block');
		$('#billinginfo_firstName').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("6");
		return false;
	}
	else
	{
		$('#billinginfo_firstName_error').removeClass('error_icon1');
		$('#billinginfo_firstName').removeClass('input_error');
	}
		
	if($.trim($('#billinginfo_lastName').val())=='Last Name'||$.trim($('#billinginfo_lastName').val())==''){
		$('#billinginfo_lastName').attr('placeholder','Last Name Here Please...');
		$('#billinginfo_lastName_error').addClass('error_icon1');
		$('.error_icon1').css('display','block');
		$('#billinginfo_lastName').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("7");
		return false;
	}
	else if(!isValidAddress($('#billinginfo_lastName').val()))
	{
		$('#billinginfo_lastName').attr('placeholder','Last Name Here Please...');
		$('#billinginfo_lastName_error').addClass('error_icon1');
		$('.error_icon1').css('display','block');
		$('#billinginfo_lastName').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("8");
		return false;
	}
	else
	{
		$('#billinginfo_lastName_error').removeClass('error_icon1');
		$('#billinginfo_lastName').removeClass('input_error');
	}
	
	
	if($.trim($('#billinginfo_addr1').val())=='Address1'||$.trim($('#billinginfo_addr1').val())==''){
		$('#billinginfo_addr1').attr('placeholder','Address1 Here Please...');
		$('#billinginfo_addr1_error').addClass('error_icon');
		$('.error_icon').css('display','block');
		$('#billinginfo_addr1').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("11");
		return false;
	}
	else if(!isValidAddress($('#billinginfo_addr1').val()))
	{
		$('#billinginfo_addr1').attr('placeholder','Address1 Here Please...');
		$('#billinginfo_addr1_error').addClass('error_icon');
		$('.error_icon').css('display','block');
		$('#billinginfo_addr1').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("12");
		return false;
	}
	else
	{
		$('#billinginfo_addr1_error').removeClass('error_icon');
		$('#billinginfo_addr1').removeClass('input_error');
	}
	
//	if($.trim($('#billinginfo_addr2').val())=='Address2'||$.trim($('#billinginfo_addr2').val())==''){
//		$('#billinginfo_addr2').attr('placeholder','Address2 Here Please...');
//		$('.error_icon').css('display','block');
//		$('#billinginfo_addr2').addClass('input_error');
//		//console.log("13");
//		return false;
//	}
//	else if(!isValidAddress($('#billinginfo_addr2').val()))
//	{
//		$('#billinginfo_addr2').attr('placeholder','Address2 Here Please...');
//		$('.error_icon').css('display','block');
//		$('#billinginfo_addr2').addClass('input_error');
//		//console.log("14");
//		return false;
//	}
//	else
//	{
//		$('.error_icon').css('display','none');
//	}
	
	var billCountryCode=$('#biliinginfo_country').text();
	
	if(billCountryCode==null||billCountryCode=='Select Your Country'||billCountryCode=='00'){
		$('#biliinginfo_country').attr('placeholder','Address2 Here Please...');
		$('#biliinginfo_country_error').addClass('error_icon1');
		$('.error_icon1').css('display','block');
		$('#biliinginfo_country').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("15");
		return false;
	}
	else
	{
		$('#biliinginfo_country_error').removeClass('error_icon1');
		$('#biliinginfo_country').removeClass('input_error');
	}
	
	
	if($.trim($('#billinginfo_city').val())=='' || $.trim($('#billinginfo_city').val())=='City')
	{
		$('#billinginfo_city').attr('placeholder','City Here Please...');
		$('#billinginfo_city_error').addClass('error_icon1');
		$('.error_icon1').css('display','block');
		$('#billinginfo_city').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("17");
		return false;
	}
	else if(!isValidAddress($('#billinginfo_city').val()))
	{
		$('#billinginfo_city').attr('placeholder','City Here Please...');
		$('#billinginfo_city_error').addClass('error_icon1');
		$('.error_icon1').css('display','block');
		$('#billinginfo_city').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("18");
		return false;
	}
	else
	{
		$('#billinginfo_city_error').removeClass('error_icon1');
		$('#billinginfo_city').removeClass('input_error');
	}
	
	if($('#select_billinginfo_state').is(':visible')){
		var stateCode=$('#biilinginfo_state').text();
		if(stateCode=='State'||stateCode==null||stateCode=='SELECT YOUR STATE' || stateCode=='SELECT YOUR PROVINCE'){
			$('#biilinginfo_state').attr('placeholder','State Here Please...');
			$('#biilinginfo_state_error').addClass('error_icon2');
			$('.error_icon2').css('display','block');
			$('#billing_select').addClass('input_error');
			$(".loading_page").fadeOut();
			//console.log("16");
			return false;
		}
		else
		{
			$('#biilinginfo_state_error').removeClass('error_icon2');
			$('#billing_select').removeClass('input_error');
			$('.error_icon2').css('display','none');
		}
	}
	else
	{
		$('#biilinginfo_state_error').removeClass('error_icon2');
	}
	
	if($.trim($('#bilinginfo_zip').val())=='ZIP' || $.trim($('#bilinginfo_zip').val())=='Postal Code' || $.trim($('#bilinginfo_zip').val())=='')
	{
		if($('#bilinginfo_zip').val()=='ZIP'){
			$('#bilinginfo_zip').attr('placeholder','Zipcode Here Please...');
		}
		else{
			$('#bilinginfo_zip').attr('placeholder','Postal Code Here Please...');
		}
		
		$('#bilinginfo_zip_error').addClass('error_icon3');
		$('.error_icon3').css('display','block');
		$('#bilinginfo_zip').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("19");
		return false;
	}
	else if(!isValidAddress($('#bilinginfo_zip').val()))
	{
		if($('#bilinginfo_zip').val()=='ZIP'){
			$('#bilinginfo_zip').attr('placeholder','Zipcode Here Please...');
		}
		else{
			$('#bilinginfo_zip').attr('placeholder','Postal Code Here Please...');
		}
		$('#bilinginfo_zip_error').addClass('error_icon3');
		$('.error_icon3').css('display','block');
		$('#bilinginfo_zip').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("19");
		return false;
	}
	else
	{
		$('#bilinginfo_zip_error').removeClass('error_icon3');
		$('#bilinginfo_zip').removeClass('input_error');
	}
	if($.trim($('#billinginfo_phone').val())=='Phone Number'||$.trim($('#billinginfo_phone').val())==''){
		$('#billinginfo_phone').attr('placeholder','Phone Number Here Please...');
		$('#billinginfo_phone_error').addClass('error_icon');
		$('.error_icon').css('display','block');
		$('#billinginfo_phone').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("9");
		return false;
	}
	else if(!isValidPhone($('#billinginfo_phone').val()))
	{
		$('#billinginfo_phone').val('');
		$('#billinginfo_phone').attr('placeholder','Valid Phone Number Here Please...');
		$('#billinginfo_phone_error').addClass('error_icon');
		$('.error_icon').css('display','block');
		$('#billinginfo_phone').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("10");
		return false;
	}
	else
	{
		$('#billinginfo_phone_error').removeClass('error_icon');
		$('#billinginfo_phone').removeClass('input_error');
	}
	//Shipping Address
	if($.trim($('#shippinginfo_firstname').val())=='First Name' || $.trim($('#shippinginfo_firstname').val())=='' ){
		$('#shippinginfo_firstname').attr('placeholder','First Name Here Please...');
		$('#shippinginfo_firstname_error').addClass('error_icon');
		$('.error_icon').css('display','block');
		$('#shippinginfo_firstname').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("20");
		return false;
	}
	else if(!isValidAddress($('#shippinginfo_firstname').val()))
	{
		$('#shippinginfo_firstname').attr('placeholder','First Name Here Please...');
		$('#shippinginfo_firstname_error').addClass('error_icon');
		$('.error_icon').css('display','block');
		$('#shippinginfo_firstname').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("21");
		return false;
	}
	else
	{
		$('#shippinginfo_firstname_error').removeClass('error_icon');
	}
		
	if($.trim($('#shippinginfo_lastname').val())=='Last Name'||$.trim($('#shippinginfo_lastname').val())==''){
		$('#shippinginfo_lastname').attr('placeholder','Last Name Here Please...');
		$('#shippinginfo_lastname_error').addClass('error_icon');
		$('.error_icon').css('display','block');
		$('#shippinginfo_lastname').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("22");
		return false;
	}
	else if(!isValidAddress($('#shippinginfo_lastname').val()))
	{
		$('#shippinginfo_lastname').attr('placeholder','Last Name Here Please...');
		$('#shippinginfo_lastname_error').addClass('error_icon');
		$('.error_icon').css('display','block');
		$('#shippinginfo_lastname').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("23");
		return false;
	}
	else
	{
		$('#shippinginfo_lastname_error').removeClass('error_icon');
	}


	
	if($.trim($('#shippinginfo_addr1').val())=='Address1'||$.trim($('#shippinginfo_addr1').val())==''){
		$('#shippinginfo_addr1').attr('placeholder','Address1 Here Please...');
		$('#shippinginfo_addr1_error').addClass('error_icon');
		$('.error_icon').css('display','block');
		$('#shippinginfo_addr1').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("26");
		return false;
	}
	else if(!isValidAddress($('#shippinginfo_addr1').val()))
	{
		$('#shippinginfo_addr1').attr('placeholder','Address1 Here Please...');
		$('#shippinginfo_addr1_error').addClass('error_icon');
		$('.error_icon').css('display','block');
		$('#shippinginfo_addr1').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("27");
		return false;
	}
	else
	{
		$('#shippinginfo_addr1_error').removeClass('error_icon');
	}
	
//	if($.trim($('#shippinginfo_addr2').val())=='Address2'||$.trim($('#shippinginfo_addr2').val())==''){
//		$('#shippinginfo_addr2').attr('placeholder','Address2 Here Please...');
//		$('.error_icon').css('display','block');
//		$('#shippinginfo_addr2').addClass('input_error');
//		//console.log("28");
//		return false;
//	}
//	else if(!isValidAddress($('#shippinginfo_addr2').val()))
//	{
//		$('#shippinginfo_addr2').attr('placeholder','Address2 Here Please...');
//		$('.error_icon').css('display','block');
//		$('#shippinginfo_addr2').addClass('input_error');
//		//console.log("29");
//		return false;
//	}
//	else
//	{
//		$('.error_icon').css('display','none');
//	}
	
	var shipCountryCode=$('#shippinginfo_country').text();
	if(shipCountryCode=='Country'||shipCountryCode==null||shipCountryCode=='00'){
		$('#shippinginfo_country').attr('placeholder','Address2 Here Please...');
		$('#shippinginfo_country_error').addClass('error_icon1');
		$('.error_icon1').css('display','block');
		$('#shippinginfo_country').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("30");
		return false;
	}
	else
	{
		$('#shippinginfo_country_error').removeClass('error_icon1');
	}
	
	if($.trim($('#shippinginfo_city').val())=='' || $.trim($('#shippinginfo_city').val())=='City'){
		$('#shippinginfo_city').attr('placeholder','City Here Please...');
		$('#shippinginfo_city_error').addClass('error_icon1');
		$('.error_icon1').css('display','block');
		$('#shippinginfo_city').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("32");
		return false;
	}
	else if(!isValidAddress($('#shippinginfo_city').val()))
	{
		$('#shippinginfo_city').attr('placeholder','City Here Please...');
		$('#shippinginfo_city_error').addClass('error_icon1');
		$('.error_icon1').css('display','block');
		$('#shippinginfo_city').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("33");
		return false;
	}
	else
	{
		$('#shippinginfo_city_error').removeClass('error_icon1');
		$('#shippinginfo_city').removeClass('input_error');
	}
	
	if($('#select_shippinginfo_state').is(':visible')){
		var stateCode=$('#shippinginfo_state').text();
		if(stateCode==''||stateCode==null||stateCode=='SELECT YOUR STATE'){
			$('#shippinginfo_state').attr('placeholder','State Here Please...');
			$('#shippinginfo_state_error').addClass('error_icon2');
			$('.error_icon2').css('display','block');
			$('#shipping_select').addClass('input_error');
			$(".loading_page").fadeOut();
			//console.log("31");
			return false;

		}
		else
		{
			$('#shippinginfo_state_error').removeClass('error_icon2');
			$('#shipping_select').removeClass('input_error');
		}
	}
	else
	{
		$('#shippinginfo_lastname_error').removeClass('error_icon1');
	}
	
	if($.trim($('#shippinginfo_zip').val())=='Zip' || $.trim($('#shippinginfo_zip').val())=='')
	{
		$('#shippinginfo_zip').val('');
		$('#shippinginfo_zip').attr('placeholder','Zipcode Here Please...');
		$('#shippinginfo_zip_error').addClass('error_icon1');
		$('.error_icon1').css('display','block');
		$('#shippinginfo_zip').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("34");
		return false;
	}
	else if(!isValidAddress($('#shippinginfo_zip').val())) 
	{
		$('#shippinginfo_zip').val('');
		$('#shippinginfo_zip').attr('placeholder','Zipcode Here Please...');
		$('#shippinginfo_zip_error').addClass('error_icon1');
		$('.error_icon1').css('display','block');
		$('#shippinginfo_zip').addClass('input_error');
		$(".loading_page").fadeOut();
		//console.log("35");
		return false;
	}
	else
	{
		$('#shippinginfo_zip_error').removeClass('error_icon1');
	}
	
//	if($.trim($('#shippinginfo_phone').val())=='Phone Number'||$.trim($('#shippinginfo_phone').val())==''){
//		$('#shippinginfo_phone').attr('placeholder','Phone Number Here Please...');
//		$('#shippinginfo_phone_error').addClass('error_icon');
//		$('.error_icon').css('display','block');
//		$('#shippinginfo_phone').addClass('input_error');
//		$(".loading_page").fadeOut();
//		//console.log("24");
//		return false;
//	}
//	else if(!isValidPhone($('#shippinginfo_phone').val()))
//	{
//		$('#shippinginfo_phone').val('');
//		$('#shippinginfo_phone').attr('placeholder','Valid Phone Number Here Please...');
//		$('#shippinginfo_phone_error').addClass('error_icon');
//		$('.error_icon').css('display','block');
//		$('#shippinginfo_phone').addClass('input_error');
//		$(".loading_page").fadeOut();
//		//console.log("25");
//		return false;
//	}
//	else
//	{
//		$('#shippinginfo_phone_error').removeClass('error_icon');
//	}
	
	return true;
}

function getFormattedPhoneNumber(phNo)
{
	var new_no = phNo.replace(/[^a-zA-Z0-9]/g, "");
	console.log("********* new_no ********"+new_no);
	return new_no;
}

function backUpCustomerDetail()
{
	var customerDetail=new Object();
	var email="";
	if($('#existing_email').val()!=""){
		email=$('#existing_email').val();
	}
	if($('#new_email').val()!=""){
		email= $('#new_email').val();
	}
	
	customerDetail.customerId=$.trim($("#customerId").val())==''?null:$("#customerId").val();
	customerDetail.phone=getFormattedPhoneNumber($.trim($("#billinginfo_phone").val()));
	customerDetail.email=email.toLowerCase();
	customerDetail.firstName=$.trim($("#billinginfo_firstName").val());
	customerDetail.lastName=$.trim($("#billinginfo_lastName").val());
	
	if($("#customerId").val()=='' || $("#customerId").val()==null)
		customerDetail.password=$.trim($("#password_Account").val());
	else
		customerDetail.password=null;
	
	customerDetail.billingAddress=new Object();
	customerDetail.billingAddress.id=null;
	customerDetail.billingAddress.firstName=$.trim($("#billinginfo_firstName").val());
	customerDetail.billingAddress.lastName=$.trim($("#billinginfo_lastName").val());
	customerDetail.billingAddress.street1=$.trim($("#billinginfo_addr1").val());
	customerDetail.billingAddress.street2=$("#billinginfo_addr2").val()!='Address2'?$.trim($("#billinginfo_addr2").val()):'';
	customerDetail.billingAddress.street3=$.trim($("#billinginfo_city").val());
	customerDetail.billingAddress.countryName=$.trim($("#biliinginfo_country").text());
	var billCountryCode=$('#biliinginfo_country').attr('title');//getCountryCode(customerDetail.billingAddress.countryName,'billing');
	var billStateName=$("#biilinginfo_state").text();
	var billStateCode=$('#biilinginfo_state').attr('title');
	var billProvince=$.trim($('#billinginfo_province').val())!='Province/State/Region'?$.trim($('#billinginfo_province').val()):'';

	if($('#select_billinginfo_state').is(':visible')){
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

	customerDetail.billingAddress.zipCode=$.trim($("#bilinginfo_zip").val());

	
	customerDetail.shippingAddress=new Object();
	customerDetail.shippingAddress.id=null;
	customerDetail.shippingAddress.firstName=$.trim($("#shippinginfo_firstname").val());
	customerDetail.shippingAddress.lastName=$.trim($("#shippinginfo_lastname").val());
	customerDetail.shippingAddress.street1=$.trim($("#shippinginfo_addr1").val());
	customerDetail.shippingAddress.street2=$("#shippinginfo_addr2").val()!='Address2'?$.trim($("#shippinginfo_addr2").val()):'';
	customerDetail.shippingAddress.street3=$.trim($("#shippinginfo_city").val());
	customerDetail.shippingAddress.countryName=customerDetail.billingAddress.countryName;
	var shipCountryCode=$('#shippinginfo_country').attr('title');//getCountryCode(customerDetail.billingAddress.countryName,'billing');
	var shipStateName=$("#shippinginfo_state").text();
	var shipStateCode=$('#shippinginfo_state').attr('title');
	var shipProvince=$.trim($('#shippinginfo_province').val())!='Province/State/Region'?$.trim($('#shippinginfo_province').val()):'';
	
	$(this).toggleClass('same_billing_selected');
	
	if($('font.same_billing').hasClass('same_billing_selected'))
	{
		customerDetail.shippingAddress.state=customerDetail.billingAddress.state;
		customerDetail.shippingAddress.stateName=customerDetail.billingAddress.stateName;
		customerDetail.shippingAddress.province=customerDetail.billingAddress.province;
	}
	else
	{
		customerDetail.shippingAddress.state=shipStateCode;
		customerDetail.shippingAddress.stateName=shipStateName;
		customerDetail.shippingAddress.province='';
	}
	
	customerDetail.shippingAddress.country=shipCountryCode;
	customerDetail.shippingAddress.zipCode=$.trim($("#shippinginfo_zip").val());
	
	return customerDetail;
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
//	var addrReg =/^[0-9-() ]+$/;
//	
//	if(!addrReg.test(address))
//		return false;
//	else
		return true;
	
}

function updateShippingServices()
{
	////console.log(" updateShippingServices method  ");
	//$('.loading_page').show();
	var callback;
	$(".loading_page").fadeIn();
	$("#backgroundPopup").fadeIn();
	listShippingServices(function(loaded){
		if(loaded)
			{
			$.ajax({
				url:'/updateShippingService.htm',
				cache:false,
				type:'GET',
				success:function(checkoutDetails)
				{
					////console.log('Shipping service Charge : '+checkoutDetails.shippingPrice+":"+checkoutDetails.grandTotal+":"+checkoutDetails.shippingPrice+":"+checkoutDetails.shoppingCart.subTotal);
					
					if(readCookie('Facebook')==null || $("#discountExists").val()=='false')
					{
						if($('#finalTotal').length>0)
							$('#final_finalTotal').html('$'+parseFloat(checkoutDetails.grandTotal).toFixed(2));
						if($('#shippingPrice').length>0)
							$('#shippingPrice').html('$'+parseFloat(checkoutDetails.shippingPrice).toFixed(2));
						if($('#cartSubtotal').length>0)
							$('#shipcartSubtotal').html('$'+parseFloat(checkoutDetails.shoppingCart.subTotal).toFixed(2));
						if(checkoutDetails.shippingServiceZoneId!=null)
							$('#Shippingmethod').attr('shipzoneid',checkoutDetails.shippingServiceZoneId);
					}
						////console.log("update shipping service");
						//handleFBSale();
						
					
					$(".loading_page").fadeOut();
					$("#backgroundPopup").fadeOut();
					
			},
				complete:function(){
					if(callback!=undefined)
						callback(true);
				}
				});
			//$('.loading_page').hide();
			}
		
	});
	

}

function listShippingServices(callback,countryCode,stateCode)
{
	var countryName="";
	$(this).toggleClass('same_billing_selected');
	
	if($('font.same_billing').hasClass('same_billing_selected'))
    {
        countryName=$("#biliinginfo_country").text();
        if(countryName!='Canada' && countryName!='USA'){
            countryCode=$("#biliinginfo_country").attr('title');
            stateCode='';
        }
        else if(countryName=='USA'){
            countryCode='US';
            stateCode=$('#biilinginfo_state').attr('title');
        }
        else if(countryName=='Canada'){
            countryCode='CA';
            stateCode=$('#biilinginfo_state').attr('title');
        }
    }
	else
	{
		if($("#biliinginfo_country").text()=='USA'){
			countryName=$("#shippinginfo_country").text();
		}
		else{
			 countryName=$("#biliinginfo_country").text();
		}
	    
	    if(countryName!='Canada' && countryName!='USA'){
	        countryCode=$("#biliinginfo_country").attr('title');
	        stateCode='';
	    }
	    else if(countryName=='USA'){
	        countryCode='US';
	        stateCode=$('#shippinginfo_state').attr('title');
	    }
	    else if(countryName=='Canada'){
	        countryCode='CA';
	        stateCode=$('#biilinginfo_state').attr('title');
	    }
	}
	
	var content='';
	var myCountryCode=null;
	var myStateCode=null;
	if(countryCode!=undefined)
		myCountryCode=countryCode;
	if(stateCode!=undefined)
		myStateCode=stateCode;
	var selshipzoneid=$('#Shippingmethod').attr('shipzoneid');
	
//	$(".loading_page").fadeIn();
//	$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
	
	$.ajax({
		url:'/getShippingServices.htm',
		cache:false,
		dataType:'json',
		data:{'countryCode':myCountryCode,'stateCode':myStateCode},
		success:function(shippingServices){
			if(shippingServices!=null && shippingServices.length>0)
			{
				 content+='  <option name="shipping_method"  >Please Select A Shipping Method...</option>';
				$.each(shippingServices,function(index,service){
					var selected="selected=\"selected\"";
					
					var shipPrice;
					if(service.totalShippingPrice!=null&&parseFloat(service.totalShippingPrice)==0.0)
						shipPrice="FREE";
					else if(service.totalShippingPrice!=null)
						shipPrice="$"+service.totalShippingPrice.toFixed(2);
					var freeLimit;
					if(service.zone.freeLimit!=null && parseFloat(service.zone.freeLimit)>0.0)
						freeLimit="(FREE on all orders over $"+service.zone.freeLimit+")";
					else
						freeLimit="";
					if($('#Shippingmethod').text()!='Please Select A Shipping Method...'){
						
							if(selshipzoneid!=undefined&&selshipzoneid!='')
							 {
								var selected="";
								if(selshipzoneid==service.zone.key.id)
								{
									selected="selected=\"selected\"";
									if(service.zone.deliveryDaysLowerLimit!=0)
									{
										$('#Shippingmethod').text(shipPrice+': '+service.zone.shippingServiceName+" "+service.zone.shippingServiceTypeName+" (Approx. "+service.zone.deliveryDaysLowerLimit+"-"+service.zone.deliveryDaysUpperLimit+" Business Days)");
									}
									else
									{
										if(service.zone.deliveryDaysUpperLimit>=2){
											$('#Shippingmethod').text(shipPrice+': '+service.zone.shippingServiceName+" "+service.zone.shippingServiceTypeName+" ("+service.zone.deliveryDaysUpperLimit+" Business Days)");
										}
										else{
											$('#Shippingmethod').text(shipPrice+': '+service.zone.shippingServiceName+" "+service.zone.shippingServiceTypeName+" ("+service.zone.deliveryDaysUpperLimit+" Business Day)");
										}
										
									}
								}
							}
						}
						else{
							$('#Shippingmethod').text('Please Select A Shipping Method...');
						}
					
					if(service.zone.deliveryDaysLowerLimit!=0){	
						content+="<option  value='"+service.zone.key.id+"' serviceType='"+service.zone.shippingServiceTypeName+"' freeLimit='"+service.zone.freeLimit+"'>"+shipPrice+': '+service.zone.shippingServiceName+" "+service.zone.shippingServiceTypeName+" (Approx. "+service.zone.deliveryDaysLowerLimit+"-"+service.zone.deliveryDaysUpperLimit+" Business Days)</option>";
					}
					else
					{
						if(service.zone.deliveryDaysUpperLimit>=2){
							content+="<option  value='"+service.zone.key.id+"' serviceType='"+service.zone.shippingServiceTypeName+"' freeLimit='"+service.zone.freeLimit+"'>"+shipPrice+': '+service.zone.shippingServiceName+" "+service.zone.shippingServiceTypeName+" ("+service.zone.deliveryDaysUpperLimit+" Business Days)</option>";
						}else{
							content+="<option  value='"+service.zone.key.id+"' serviceType='"+service.zone.shippingServiceTypeName+"' freeLimit='"+service.zone.freeLimit+"'>"+shipPrice+': '+service.zone.shippingServiceName+" "+service.zone.shippingServiceTypeName+" ("+service.zone.deliveryDaysUpperLimit+" Business Day)</option>";
						}
						
					}
					});
				
				$('#shippingmethods').html(content);
//				$("#backgroundPopup").hide();
//				$(".loading_page").fadeOut();
			}
		},
		complete:function(){
			if(callback!=undefined)
				callback(true);
		}
	});
}

function setShippingService()
{
	/*if(typeof ClickTaleExec=="function"){
		ClickTaleExec("setShippingService();");
	}*/
    
	$(".loading_page").fadeIn();
	var serviceZoneId=$('#shippingmethods').val();
	
	if(serviceZoneId==null || serviceZoneId=='') 
		return;
	$.ajax({
		url:'/setShippingService.htm',
		cache:false,
		type:'GET',
		data:{'serviceZoneId':serviceZoneId},
		success:function(checkoutDetails)
		{
		
			if($('#finalTotal').length>0)
				$('#final_finalTotal').html('$'+parseFloat(checkoutDetails.grandTotal).toFixed(2));
			if($('#shippingPrice').length>0)
				$('#shippingPrice').html('$'+parseFloat(checkoutDetails.shippingPrice).toFixed(2));
			if($('#cartSubtotal').length>0)
				$('#shipcartSubtotal').html('$'+parseFloat(checkoutDetails.shoppingCart.subTotal).toFixed(2));
			if(checkoutDetails.shippingServiceZoneId!=null)
				$('#Shippingmethod').attr('shipzoneid',checkoutDetails.shippingServiceZoneId);
			if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true')
			{
					////console.log("set shipping service");
					//handleFBSale();
				
				var realTotal=0.0;
				$("b[id^='price_']").each(function(){
					var price = $.trim($(this).text().replace("$",""));
					realTotal+=parseFloat(price);
				});
				
				$("#finalTotal").text('$'+realTotal.toFixed(2));
				$("#shipcartSubtotal").text('$'+realTotal.toFixed(2));
				
				var realSubTotal=0.0;
				$("b[id^='price_']").each(function(index,element){
					var price = $.trim($(this).text().replace("$",""));
					var ind = index+1;
					if($("#retailPrice_"+ind).text()!='')
						realSubTotal+=parseFloat(price);
				});
				
				var retailPriceSum=0.0;
				$("strike[id^='retailPrice_']").each(function(){
					var retailPrice = $.trim($(this).text().replace('$',''));
					retailPriceSum+=parseFloat(retailPrice);
				});
				
				if((retailPriceSum-realSubTotal)>0){
					$("#savingAmount").text('-$'+(retailPriceSum-realSubTotal).toFixed(2));
					$("#final_savingAmount").text('-$'+(retailPriceSum-realSubTotal).toFixed(2));
					$("#savings_label").show();
				}
				else
				{
					$('#savings_label').css('display','none');
				}
				
				var shippingCharge = $.trim($("#shippingPrice").text().replace('$',''));
				var shipCartSubTotal = $.trim($("#shipcartSubtotal").text().replace('$',''));
				shipCartSubTotal = $.trim(shipCartSubTotal.replace(',',''));
				$("#final_finalTotal").text('$'+(parseFloat(shippingCharge)+parseFloat(shipCartSubTotal)).toFixed(2));
				
			}
			if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountTypeName").val()!=null && $("#discountTypeName").val()=='Order')
			{
				//console.log("coming inside the condition of setShippingMethod");
				handleFBSale();
			}
			$(".loading_page").fadeOut();
			$("#backgroundPopup").hide();
			showshippingmethodtext();
			//console.log('------->>>>>>>> dataLayer is  ------>>>>>>>> ' + dataLayer);
			/*dataLayer.push({'checkoutEvent01': 'shipping'});
			
			
			(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
			j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
			'//www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
			})(window,document,'script','dataLayer','GTM-48P8');*/
			
			//console.log('------->>>>>>>> &&&&&&  dataLayer is &&&&&& ------>>>>>>>> ' + dataLayer);
			//console.log('------->>>>>>>> Shipping Method is selected ------>>>>>>>> ');
		
		}
	});
}

function showshippingmethodtext()
{
	var shipingtext=$('#shippingmethods option:selected').text();
	var countryName=$('#biliinginfo_country').text();
	
	
	if(shipingtext.indexOf('Standard')!=-1 && countryName=='USA'){
		$('.important_shipping').hide();
		
	}
	if(shipingtext.indexOf('Express')!=-1 && countryName=='USA' ){
		$('.import_sspan').hide();
		$('#shipping_text').show();
		$('#shipping_text').html('FedEx Express Shipping deliver Monday - Friday Only. ');
	}
	else if(shipingtext.indexOf('Overnight')!=-1 && countryName=='USA'){
		$('.import_sspan').hide();
		$('#shipping_text').show();
		$('#shipping_text').html('FedEx Overnight Shipping deliver Monday - Friday Only. ');
	}
	else
	{
		$('.import_sspan').show();
		$('.import_fspan').hide();
		$('#shipping_text').hide();
	}
		
}
function completePurchase()
{
	$('.yellow_btn').addClass('yell_btn_active');
	if(!validateShippingmethods()){
		$("html, body").animate({ scrollTop: 0 }, "slow");
		return false;
	}
	
	
	if(!validatePaymentDetails())
		return false;
	
	$('#payment_btn').unbind();
	var myCardNumber=$.trim($("#cardNumber").val());
	var cardCCV=$.trim($("#cardCCV").val());
	var cardHolderName=$.trim($("#cardHoldeName").val());
	var deliveryDays='';
	var finished=false;
	////console.log("**** delivery days are "+deliveryDays);
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

	$(".loading_page").fadeIn();
	$("#backgroundPopup").show();
	$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
	$("#checkout_payment_err").hide();
	$.ajax({
		url:'/completePurchase.htm',
		cache:false,
		type:'POST',
		data:{cardType:'visa',cardNumber:myCardNumber,expmonth:cardExpMonth,expyear:cardExpYear,ccv:cardCCV,cardHolderName:cardHolderName,deliveryDays:deliveryDays},
		success:function(checkoutResponse){
				////console.log("**Response of setShippingService : "+checkoutResponse.responseMessage);
			if(checkoutResponse.responseMessage=='success' && checkoutResponse.sequenceIds.length==0){
				//console.log('------>>>>>>> OrderId is  -------->>>>>>> : ' + checkoutResponse.checkoutDetailDTO.shoppingCart.orderId);
				//console.log('------>>>>>>> grandTotal is  -------->>>>>>> : ' + checkoutResponse.checkoutDetailDTO.grandTotal);
				//console.log('------>>>>>>> shippingPrice is  -------->>>>>>> : ' + checkoutResponse.checkoutDetailDTO.shippingPrice);
				//console.log('------>>>>>>> LineItems length is  -------->>>>>>> : ' + checkoutResponse.checkoutDetailDTO.shoppingCart.lineItems.length);
				/*var lineItems='';
				for(i=0;i<checkoutResponse.checkoutDetailDTO.shoppingCart.lineItems.length;i++)
				{
					
					//console.log('----->>>>> productName is  ------->>>>>>>> : ' + checkoutResponse.checkoutDetailDTO.shoppingCart.lineItems[i].productName);
					//console.log('----->>>>> colorName is  ------->>>>>>>> : ' + checkoutResponse.checkoutDetailDTO.shoppingCart.lineItems[i].colorName);
					//console.log('----->>>>> productVariantId is  ------->>>>>>>> : ' + checkoutResponse.checkoutDetailDTO.shoppingCart.lineItems[i].productVariantId);
					//console.log('----->>>>> vendorName is  ------->>>>>>>> : ' + checkoutResponse.checkoutDetailDTO.shoppingCart.lineItems[i].vendorName);
					//console.log('----->>>>> unitPrice is  ------->>>>>>>> : ' + checkoutResponse.checkoutDetailDTO.shoppingCart.lineItems[i].unitPrice);
					
					lineItems+="{'name': '"+ checkoutResponse.checkoutDetailDTO.shoppingCart.lineItems[i].productName+"-"+checkoutResponse.checkoutDetailDTO.shoppingCart.lineItems[i].colorName+"', 'sku': '"+checkoutResponse.checkoutDetailDTO.shoppingCart.lineItems[i].productVariantId+"', 'category': '"+checkoutResponse.checkoutDetailDTO.shoppingCart.lineItems[i].vendorName+"', 'price': '"+checkoutResponse.checkoutDetailDTO.shoppingCart.lineItems[i].unitPrice+"', 'quantity': '1'},";
					
				}
				//console.log(lineItems);
				
				
				dataLayer.push({
					  'transactionId': ''+checkoutResponse.checkoutDetailDTO.shoppingCart.orderId+'',
					  'transactionAffiliation': 'Solestruck.com',
					  'transactionTotal': ''+checkoutResponse.checkoutDetailDTO.grandTotal+'',
					  'transactionShipping':''+checkoutResponse.checkoutDetailDTO.shippingPrice+'',
					  'transactionTax': '0',
					  'transactionCurrency': 'USD',
					  'transactionProducts': [
					                        	lineItems
					      ]
					});
				
				dataLayer.push({'transactionStatus': 'success'});
				
				dataLayer.push({'checkoutEvent02': 'completepurchase'});*/
				
				//console.log('------->>>>>>>> @@@@@@@@  dataLayer is @@@@@@@@ ------>>>>>>>> ' + dataLayer);				
				//console.log("------>>>>>>>>> dataLayer Variables are Triggered! ------>>>>>>>> ");
				//window.location='/redirectToNonSecurePage.htm?rdirectURL=showThankyou.htm';
				//if(confirm(' Do You Want To See ThankYou Page ? '))
					window.location='/showThankyou.htm';

				
//				if(location.host.indexOf("testing.solestruck.com")!=-1)
//				{
//					//location='http://live-solestruck.appspot.com/showThankyou.htm';
//					location.href="https://testing.solestruck.com/showThankyou.htm";
//				}
//				else if(location.host.indexOf("solestruck.com")!=-1)
//				{
//					//location='http://www.solestruck.com/showThankyou.htm';
//					location.href="https://www.solestruck.com/showThankyou.htm";
//				}
//				else if(location.host.indexOf("development-solestruck.appspot.com")!=-1)
//				{
//					//location='http://testing-solestruck.a-cti.com/showThankyou.htm';
//					location.href="https://development-solestruck.appspot.com/showThankyou.htm";
//				}
//				else
//				{
//					window.location='/showThankyou.htm';
//				}
			}
			else{
				
				$(".loading_page").fadeOut();
				$("#backgroundPopup").hide();
				$('#card_payment_holder').addClass('card_payment_holder');
				$("#checkout_payment_err").html(checkoutResponse.responseMessage);
				$("#checkout_payment_err").show();
				$('.loading_page').hide();
				for(index=0;index<checkoutResponse.sequenceIds.length;index++)
				{
					////console.log("sequence id is "+checkoutResponse.sequenceIds[index]);
					$("#message_"+checkoutResponse.sequenceIds[index]).show();
				}
				finished=true;
				$('#payment_btn').click(completePurchase);
			}
		}
	});
}
function onchangeValidateShippingMethods(){

	var shippingmethodvalue=$('#shippingmethods option:selected').text();
	
	//console.log(" onchangeValidateShippingMethods shippingmethodvalue "+shippingmethodvalue);
	
	if(shippingmethodvalue=='Please Select A Shipping Method...')
	{
		$('#shippingmethod_error').addClass('error_icon4');
		$('#display_shippingmethod').addClass('dwn_error');
		$('.error_icon4').css('display','block');
		return false;
	}
	else
	{
		$('#shippingmethod_error').removeClass('error_icon4');
		$('#display_shippingmethod').removeClass('dwn_error');
		$('.error_icon4').css('display','none');
		return true;
	}

}
function validateShippingmethods()
{
	var shippingmethodvalue=$('#Shippingmethod').text();
	
//	console.log(" shippingmethodvalue "+shippingmethodvalue);
	
	if(shippingmethodvalue=='Please Select A Shipping Method...')
	{
		$('#shippingmethod_error').addClass('error_icon4');
		$('#display_shippingmethod').addClass('dwn_error');
		$('.error_icon4').css('display','block');
		return false;
	}
	else
	{
		$('#shippingmethod_error').removeClass('error_icon4');
		$('#display_shippingmethod').removeClass('dwn_error');
		$('.error_icon4').css('display','none');
		return true;
	}
}

function validatePaymentDetails()
{
	
	$('#checkout_payment_err').hide();
	if($("#cardHoldeName").val()=="" || $.trim($("#cardHoldeName").val())=='Name On Card' || $('#cardHoldeName').attr('placeholder')=='Card Holder Name Here Please...'){
		$('#cardHoldeName').val('');
		$('#cardHoldeName').attr('placeholder','Card Holder Name Here Please...');
		$('#cardHoldeName_error').addClass('error_icon');
		$('.error_icon').css('display','block');
		$('#cardHoldeName').addClass('input_error');
		$(".loading_page").fadeOut();
		return false;
	}
	else{
		$('#cardHoldeName_error').removeClass('error_icon');
		$('#cardHoldeName').removeClass('input_error');
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
	
	var ccv_val=$.trim($('#cardCCV').val());
	var creditCardNumber=$.trim($('#cardNumber').val());
	var regexNum = /^\d{3,4}$/;
	var regexCreditCardNumber=/^\d{14,16}$/;
	var regexAmazonOrder=/^[A-z][A-z0-9]*$/;
	
	if($("#cardNumber").val()=="" || $.trim($("#cardNumber").val())=='Card Number' || $('#cardNumber').attr('placeholder')=='Card Number Here Please...'){
		$('#cardNumber').val('');
		$('#cardNumber').attr('placeholder','Card Number Here Please...');
		$('#cardNumber_error').addClass('error_icon');
		$('.error_icon').css('display','block');
		$('#cardNumber').addClass('input_error');
		$(".loading_page").fadeOut();
		return false;
	}else
	{
		$('#cardNumber_error').removeClass('error_icon');
		$('#cardNumber').removeClass('input_error');
		
	}
	
	if(!regexCreditCardNumber.test(creditCardNumber)){
		if(!regexAmazonOrder.test(creditCardNumber))
		{	$('#cardNumber').val('');
			$('#cardNumber').attr('placeholder','Enter Valid Card Number Here Please...');
			$('#cardNumber_error').addClass('error_icon');
			$('.error_icon').css('display','block');
			$('#cardNumber').addClass('input_error');
			$(".loading_page").fadeOut();
			return false;
		}else
		{
			$('#cardNumber_error').removeClass('error_icon');
			$('#cardNumber').removeClass('input_error');
			
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

	if($('#cardCCV').val()=="" || $.trim($('#cardCCV').val())=='CCV#' || $('#cardCCV').attr('placeholder')=='valid Card Security Number Here Please...'){
		$('#cardCCV').val('');
		$('#cardCCV').attr('placeholder','CCV#');
		$('#cardCCV_error').addClass('error_icon3');
		$('.error_icon3').css('display','block');
		$('#cardCCV').addClass('input_error');
		$(".loading_page").fadeOut();
		return false;
	}
	else{
		$('#cardCCV_error').removeClass('error_icon3');
		$('#cardCCV').removeClass('input_error');
	}
	if(!regexNum.test(ccv_val)){
		$('#cardCCV').val('');
		$('#cardCCV').attr('placeholder','valid Card Security Number Here Please...');
		$('#cardCCV_error').addClass('error_icon3');
		$('.error_icon3').css('display','block');
		$('#cardCCV').addClass('input_error');
		$(".loading_page").fadeOut();
		return false;
	}
	else{
		$('#cardCCV_error').removeClass('error_icon3');
		$('#cardCCV').removeClass('input_error');
	}
	/*
	if($.trim(creditCardNumber)==''){
		$('#checkout_payment_err').html('Please enter Card Number.');
		$('#checkout_payment_err').show();
		return false;
	}*/
	
	return true;
}

function updateRequireSignature()
{
	
	var required=false;
		if($('#deliverySign').hasClass('checkbox_selected')){
			required=false;
		}
		else{
			required=true;
		}
	
	$.ajax({
		url:'/requireDeliverySignature.htm',
		data:{requireSign:required},
		cache:false,
		type:'GET',
		success:function(result){
			////console.log('Result of deliverySignature:'+result);
		}
	});
}

function updateShippingMethodServices()
{
	listShippingServices();
	
	$(".loading_page").show();
	
	$.ajax({
		url:'/updateShippingService.htm',
		cache:false,
		type:'GET',
		success:function(checkoutDetails){
			//console.log('Shipping service Charge : '+checkoutDetails.shippingPrice+":"+checkoutDetails.grandTotal+":"+checkoutDetails.shippingPrice+":"+checkoutDetails.shoppingCart.subTotal);
			
			$(".loading_page").hide();
		
			if($('#finalTotal').length>0)
				$('#finalTotal').html('$'+parseFloat(checkoutDetails.grandTotal).toFixed(2));
			if($('#shippingPrice').length>0)
				$('#shippingPrice').html('$'+parseFloat(checkoutDetails.shippingPrice).toFixed(2));
			if($('#cartSubtotal').length>0)
				$('#shipcartSubtotal').html('$'+parseFloat(checkoutDetails.shoppingCart.subTotal).toFixed(2));
			
			if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true')
			{
				////console.log("update shipping service");
				handleFBSale();
			}
	}
		});
}

/*Contributor: K3G
 * This function reads a cookie from the domain currently being used.
 * Parameters:
 * name(string) - This is the name of the cookie to be read.
 * This function return the value of the cookie.
 * */
function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];
		while (c.charAt(0)==' ') c = c.substring(1,c.length);
		if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
	}
	return null;
}


//function listShippingServices()
//{
//	/*if(typeof ClickTaleExec=="function"){
//		ClickTaleExec("listShippingServices();");
//	}*/
//	$.ajax({
//		url:'/getShippingServices.htm',
//		cache:false,
//		dataType:'json',
//		//data:{'countryCode':myCountryCode,'stateCode':myStateCode},
//		success:function(shippingServices){
//			if(shippingServices!=null && shippingServices.length>0)
//			{
//			//console.log('Service Length:'+shippingServices.length);
//				$.each(shippingServices,function(index,service){
//					var shipPriceText='$'+parseFloat(service.totalShippingPrice).toFixed(2);
//					if(service.totalShippingPrice<=0.0)
//						shipPriceText='FREE';
//					$('#ship_price_'+service.zone.key.id).html(shipPriceText);
//				});
//			}
//		}
//	});
//}
function loadingForFbCo(status){
	
	$(".loading_page").fadeIn();
	$.ajax({url:'/setFbStatusFrom.htm',data:({"status":status}),success:function(data)
	{
		
	}	
	});
}

function emailUsDetails()
{
	//$("#emailUs_send").addClass('popup_processing_btn');
	$(".popup_processing_icon").css('display','block');
	var emailId=$("#emailUsId").val();
	var help=$("#help").val().replace(/"/g, "\'");
	var order_number=$("#order_number").val();
	var nVer = navigator.appVersion;
	var nAgt = navigator.userAgent;
	var browserName  = '';
	var fullVersion  = 0; 
	var majorVersion = 0;

	// In Internet Explorer, the true version is after "MSIE" in userAgent
	if ((verOffset=nAgt.indexOf("MSIE/"))!=-1) {
	 browserName  = "Microsoft Internet Explorer";
	 fullVersion  = jQuery.browser.version;
	 majorVersion = parseInt(''+fullVersion);
	}

	// In Opera, the true version is after "Opera" 
	else if ((verOffset=nAgt.indexOf("Opera/"))!=-1) {
	 browserName  = "Microsoft Internet Explorer";
	 fullVersion  = jQuery.browser.version;
	 majorVersion = parseInt(''+fullVersion);
	}
	
	else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
		 browserName  = "Google Chrome";
		 fullVersion  = parseFloat(nAgt.substring(verOffset+7));
		 majorVersion = parseInt(''+fullVersion);
		}
	
	else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
		 browserName  = "Safari";
		 fullVersion  = parseFloat(nAgt.substring(verOffset+7));
		 majorVersion = parseInt(''+fullVersion);
		}
	
	if ((verOffset=nAgt.indexOf("Trident/"))!=-1) {
	 browserName  = "Microsoft Internet Explorer";
	 fullVersion  = jQuery.browser.version;
	 majorVersion = parseInt(''+fullVersion);
	}

	// In most other browsers, "name/version" is at the end of userAgent 
	else if( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ) 
	{
	 browserName  = nAgt.substring(nameOffset,verOffset);
	 fullVersion  = parseFloat(nAgt.substring(verOffset+1));
	 if (!isNaN(fullVersion)) majorVersion = parseInt(''+fullVersion);
	 else {fullVersion  = 0; majorVersion = 0;}
	}

	// Finally, if no name and/or no version detected from userAgent...
	if (browserName.toLowerCase() == browserName.toUpperCase() || fullVersion==0 || majorVersion == 0 )
	{
	 browserName  = navigator.appName;
	 fullVersion  = parseFloat(nVer);
	 majorVersion = parseInt(nVer);
	}
	
	var OSName="Unknown OS";
	if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
	if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
	if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
	if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
	
	//console.log("browserName: "+browserName+" fullVersion: "+fullVersion+" majorVersion: "+majorVersion+" os: "+OSName+" browser version: "+jQuery.browser.version);
	var det="";
	if(isMobileDevice())
	{
		//console.log("name of the device: "+navigator.userAgent);
//		if ((verOffset=nAgt.indexOf("AppleWebKit"))!=-1) {
//			 browserName  = "AppleWebKit";
//			 fullVersion  = parseFloat(nAgt.substring(verOffset+5));
//			 majorVersion = parseInt(''+fullVersion);
//			}

			// In Opera, the true version is after "Opera" 
			if ((verOffset=nAgt.indexOf("CriOS"))!=-1) {
				 browserName  = "Google Chrome";
				 fullVersion  = parseFloat(nAgt.substring(verOffset+6));
				 majorVersion = parseInt(''+fullVersion);
				}
			
			else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
				 browserName  = "Safari";
				 fullVersion  = parseFloat(nAgt.substring(verOffset+7));
				 majorVersion = parseInt(''+fullVersion);
				}
			else if ((verOffset=nAgt.indexOf("Version"))!=-1) {
				 browserName  = "Version";
				 fullVersion  = parseFloat(nAgt.substring(verOffset+8));
				 majorVersion = parseInt(''+fullVersion);
				}
			
			else if ((verOffset=nAgt.indexOf("Mobile"))!=-1) {
				 browserName  = "Mobile";
				 fullVersion  = parseFloat(nAgt.substring(verOffset+6));
				 majorVersion = parseInt(''+fullVersion);
				}
				

			// In most other browsers, "name/version" is at the end of userAgent 
			else if( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ) 
			{
			 browserName  = nAgt.substring(nameOffset,verOffset);
			 fullVersion  = parseFloat(nAgt.substring(verOffset+1));
			 if (!isNaN(fullVersion)) majorVersion = parseInt(''+fullVersion);
			 else {fullVersion  = 0; majorVersion = 0;}
			}
		var mobileName = "";
		if(navigator.userAgent.toLowerCase().indexOf("ipad")!=-1)
			mobileName = "iPad";
		else if(navigator.userAgent.toLowerCase().indexOf("iphone")!=-1)
			mobileName = "iPhone";
		else if(navigator.userAgent.toLowerCase().indexOf("ipod"))
			mobileName = "iPod";
		else if(navigator.userAgent.toLowerCase().indexOf("android"))
			mobileName = "Android";
		else if(navigator.userAgent.toLowerCase().indexOf("mobile"))
			mobileName = "Mobile";
		det+="<br/><b>Name of the Mobile Device:</b> "+mobileName;
		det+="<br/><b>Browser Name:</b> "+browserName+" <br/><b>Version:</b> "+fullVersion+" <br/><b>Operating System:</b> "+OSName;
	}
	else
	{
		det+="<br/><b>Browser Name:</b> "+browserName+" <br/><b>Version:</b> "+fullVersion+" <br/><b>Operating System:</b> "+OSName;
	}
	if(validateEmail_emailUs())
	{
		if(help!="" && help!="undefined")
		{
			//console.log("coming into 3");
			$('#emailUsId').attr('disabled','disabled');
			$('#help').attr('disabled','disabled');
			$('#order_number').attr('disabled','disabled');
			$('#emailus_button').attr('disabled','disabled');
			$('#alertHelp').text("");
			var attachedFile = $("#file1").val();
			
			//console.log("attachedFile: "+attachedFile);
			
			
			 var htmlStr="";
				htmlStr+="<form action=\"/sendEmailToUs.htm\" method=\"post\" accept=\"image/*\" enctype=\"multipart/form-data\" encoding=\"multipart/form-data\">";
				htmlStr+="<input type=\"text\" name=\"emailId\" value=\""+emailId+"\"/>";
				htmlStr+="<input type=\"text\" name=\"orderNumber\" value=\""+order_number+"\"/>";
				htmlStr+="<input type=\"text\" name=\"msg\" value=\""+help+"\"/>";
				htmlStr+="<input type=\"text\" name=\"sysdet\" value=\""+det+"\"/>";
				htmlStr+="</form>";
				$("#imageUploadIFrame").contents().find("body").html(htmlStr);
				for(var i=0;i<id;i++)
				{
					var fileControl = $("#file_"+i);
					$(fileControl).appendTo($("#imageUploadIFrame").contents().find("form"));
				}	
				
				$("#imageUploadIFrame").contents().find("form").submit();
			
			
				$('#emailUsId').removeAttr('disabled');
				$('#help').removeAttr('disabled');
				$('#order_number').removeAttr('disabled');
				$('#emailus_button').removeAttr('disabled');
				
				//$("#login_popup_close").hide();
				
				setTimeout(function(){
					$(".email_popup_success_act").show().css('position','fixed');
					$(".emailus_popup").hide();
					$(".ppup_cont_holder").show();
				//$("#emailUs_send").removeClass('popup_processing_btn');
				},4000);
				// For bring up login or wishlist popup if the user came from there(by ss2)
				 //Starts
//				if(cameFromLoginOrWishList=="false")//this variable is there in customerServiceLink.js
//				{
//					//$('#backgroundPopup').hide();
//				
//				}	
//				else if(cameFromLoginOrWishList=="login")
//				{
//					$('.login_form').show();
//				}
//				else if(cameFromLoginOrWishList=="wishList")
//				{
//					$('.wish_list_form').show();
//				}
			//	Ends
				 
				 $("#emailUsId").val("");
				 $("#help").val("");
				 $("#order_number").val("");
				 $('#alertHelp').text("");
				 $('#alert').text("");
				 $(".browse_btn").remove();
				 $("#emailUs_send").before("<div class='browse_btn'><input id='file_1' name='myFile1' type='file' value='Attach Files'/><span class='image_file1' onclick="+'$("#file_1").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
				 $("#file_1").unbind("change").bind("change",onEmailUsFileChange);
				 id=undefined;
				 $("#alertForAttachment").text("");
	}
	else
	{
		//$("#help").addClass("error_input_field");
		 $('#help').val('');
		// $('#help').attr('placeholder','Please fill in some message');
		 //$("#emailUs_send").removeClass('popup_processing_btn');
		$('#alertHelp').text("Please fill in some message");
		$('#alert').text("");
		$("#alertForAttachment").text("");
		//$("#file_1").val("");
		//$("input[id^='file_']").remove();
/*		$(".browse_btn").remove();
		$("#emailUs_send").before("<div class='browse_btn'><input id='file_1' name='myFile1' type='file' value='Attach Files'/><span class='image_file1'>Click To Attach File</span></div>");
		$("#file_1").unbind("change").bind("change",onEmailUsFileChange);
		id=undefined;*/
	}
  }
	//$(".popup_processing_icon").css('display','none');
}

function goToPreviousPage_frmemail()
{
	$(".popup_processing_icon").css('display','none');
	$(".email_popup_success_act").hide();
	$('#backgroundPopup').fadeOut();
	$(this).parent().hide();
	$(this).parent().css('top', 100 + 'px');	
	//goToPreviousPage();
}

function validateEmail_emailUs()
{

	try {
	 	if ($("#emailUsId").val() != "" && $("#emailUsId").val() != undefined){
	  			if(emailValidatorEmailUs(document.getElementById('emailUsId'), 'Not a Valid Email'))
	  			{
	  				$('#alert').hide();
	  				$("#emailUsId").removeClass("error_input_field");
	  				return true;
	  			}	
	  			else
	  			{
	   				/*$("#emailUsId").val("");
	   				$('#emailUsId').focus();*/
	   				//$("#help").val("");
	   				//$("#order_number").val("");
	   				//$('#alertHelp').text("");
	   				/*$('#alert').text("Not a Valid Email");
	   				$("#emailUsId").addClass("error_input_field");*/
	  				return false;
	  			}
	  		}
		  else {
		 //alert("Please fill in any Email ID");
		 $("#emailUsId").addClass("error_input_field");
		 $('#emailUsId').attr('placeholder','Please fill in any Email ID');
		 $(".popup_processing_icon").css("display","none");
		 /*$('#alert').text("Please fill in any Email ID");
		 $('#emailUsId').focus();
		 $('#alertHelp').text("");*/
	   	 return false;
		  }
	 	}
	 	catch( e )
	 	{
	 		alert(e);
	 	}
}

function emailValidatorEmailUs(elem, helperMsg){
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0\-9\.\-]+\.[a-zA-z0\-9]{2,4}$/;
	if(elem.value.match(emailExp)){
		return true;
	}else{
		//alert(helperMsg);
		$('#alert').text("Not a Valid Email");
		$('#alert').show();
		$("#emailUsId").addClass("error_input_field");
		$(".popup_processing_icon").css('display','none');
		//$("#help").val("");
   		//$("#order_number").val("");
		elem.focus();
		return false;
	}
}

function resetPassword()
{
	
	if($.trim($("#email_forgot").val())=='')
	{
		$("#forgot_invalid_label").text("Please enter your email");
		$("#forgot_invalid_label").show();
		return;
	}
	$("#forgot_invalid_label").hide();
	$.ajax({	
			url:'/resetPassword.htm',
			cache:false,
			data:{'email':$.trim($("#email_forgot").val())},
			success:function(msg){
				////console.log("The reset status "+msg);
				$('.forgot_password_form').hide();
				$('.reset_password_success').fadeIn();
				//$('#backgroundPopup').fadeOut('slow');
			}
		});
}

function sendReqForWaitList(sequenceId)
{
	
	var vendorName = $('#vendorName_'+sequenceId).text();
	var productName = $('#productName_'+sequenceId).text();
	var productID=$('#product_'+sequenceId).val();
	var	colorSelID=$('#colors_'+sequenceId+' option:selected').val()!=undefined?$('#colors_'+sequenceId+' option:selected').val():$('#colorId_'+sequenceId).val();
	var colorSelName = $('#color_'+sequenceId).attr('name');
	var size = $('#size_'+sequenceId).text();
	var emailid="";
	if($('#existing_email').val()!=""){
		emailid=$('#existing_email').val();
	}
	if($('#new_email').val()!=""){
		emailid= $('#new_email').val();
	}
	
	//console.log(" vendorName "+vendorName+" productName  "+productName+" productID "+productID+" colorID  "+colorSelID+" colorSelName "+colorSelName+"  size "+size+" emailid "+emailid);
	
	$('.loading_page').show();
	$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
	$.ajaxSetup({cache:false});
	$.getJSON("/dontSeeYourSizeRegister.htm",{"vendorName":vendorName,"productName":productName,"colorName":colorSelName,"productID":productID,"colorID":colorSelID,"size":size,"emailid":emailid,"alertCheck":true},function(data){
		
		$.ajaxSetup({cache:false});
		$('#inStock_'+sequenceId).hide();
		$('#notify_'+sequenceId).hide();
		$('#thanks_'+sequenceId).show();
		$('.loading_page').hide();
		$('#backgroundPopup').fadeOut();
		 
	});
	
}
var inventory=new Object();
function addItemToCheckoutShoppingCart(ItemAdding)
{
	//console.log("Item Adding to the cart is :: "+ItemAdding);
	if(ItemAdding!=null && ItemAdding=='Zine')
	{
		$('#floatingBarsG').css('display','block');
		$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
		$(".loading_page").show();
		var ItemValues=new Object();
		ItemValues.isPreOrder=false;
		ItemValues.isSale=true;
		//ItemValues.sequenceId=0;
		ItemValues.productId=$('#productid').val();
		ItemValues.productVariantId=$('#variantId').val();
		ItemValues.colorId=$('#colorId').val();
		ItemValues.productName=$('#productName').val();
		ItemValues.colorName='Volume1 Issue1';
		ItemValues.vendorName=$('#vendorname').val();
		ItemValues.size=4;
		ItemValues.quantity=1;
		//ItemValues.unitPrice="0.00";
		ItemValues.unitPrice=$('#salePrice').val();
		ItemValues.retailPrice=$('#retailPrice').val();
	//	if($("#discountExists").val()=='true' && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook')
	//	{
	//		if($("#discountTypeName").val()=='Brand' && $("#saleBrandNames").val().toLowerCase()=='yes')
	//		{
	//			ItemValues.price="0.00";
	//			if($("b[id^='price_']").val()==undefined)
	//			{
	//				$(this).val("0.00");
	//			}
	//		}
	//	}	
	//	else
	//	{
			ItemValues.price=$('#salePrice').val();
		//}
	}
//	if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true' && $("#discountTypeName").val()!=null && $("#discountTypeName").val()=='Order')
//	{
		$(".loading_page").show();
		$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
		var ItemValues=new Object();
		ItemValues.isPreOrder=false;
		ItemValues.isSale=false;
		//ItemValues.sequenceId=0;
		if(ItemAdding!=null && ItemAdding=='koozie')
		{
			//console.log("Coming inside the condition item adding equal to koozie :: "+ItemAdding);
			ItemValues.productId=$('#productidKoozie').val();
			ItemValues.productVariantId=$('#variantIdKoozie').val();
			ItemValues.colorId=$('#colorIdKoozie').val();
			ItemValues.productName=$('#productNameKoozie').val();
			ItemValues.colorName='Brown';
			ItemValues.vendorName=$('#vendornameKoozie').val();
			ItemValues.size=4;
			ItemValues.quantity=1;
			//ItemValues.unitPrice="0.00";
			ItemValues.unitPrice=$('#retailPriceKoozie').val();
			ItemValues.retailPrice=$('#retailPriceKoozie').val();
			ItemValues.price=$('#retailPriceKoozie').val();
		}
		else if(ItemAdding!=null && ItemAdding=='iphone4')
		{
			//console.log("Coming inside the condition item adding equal to iphone4 :: "+ItemAdding);
			ItemValues.productId=$('#productid4Case').val();
			ItemValues.productVariantId=$('#variantid4Case').val();
			ItemValues.colorId=$('#colorid4Case').val();
			ItemValues.productName=$('#productname4Case').val();
			ItemValues.colorName=$('#case4 option:selected').text().replace('#','');
			ItemValues.vendorName=$('#vendorname4Case').val();
			ItemValues.size=4;
			ItemValues.quantity=1;
			//ItemValues.unitPrice="0.00";
			ItemValues.unitPrice=$('#retailPrice4Case').val();
			ItemValues.retailPrice=$('#retailPrice4Case').val();
			ItemValues.price=$('#retailPrice4Case').val();
		}
		else if(ItemAdding!=null && ItemAdding=='iphone5')
		{
			//console.log("Coming inside the condition item adding equal to iphone5 :: "+ItemAdding);
			ItemValues.productId=$('#productid5Case').val();
			ItemValues.productVariantId=$('#variantid5Case').val();
			ItemValues.colorId=$('#colorid5Case').val();
			ItemValues.productName=$('#productname5Case').val();
			ItemValues.colorName=$('#case5 option:selected').text().replace('#','');
			ItemValues.vendorName=$('#vendorname5Case').val();
			ItemValues.size=4;
			ItemValues.quantity=1;
			//ItemValues.unitPrice="0.00";
			ItemValues.unitPrice=$('#retailPrice5Case').val();
			ItemValues.retailPrice=$('#retailPrice5Case').val();
			ItemValues.price=$('#retailPrice5Case').val();
		}
		
//	}
	
//	console.log('productid is ---->>>>' + $('#productid').val());
//	console.log('proVid is ---->>>>' + $('#variantId').val());
//	console.log('colorId is ---->>>>' + $('#colorId').val());
//	console.log('productName is ---->>>>' + $('#productName').val());
//	console.log('vendorName is ---->>>>' + $('#vendorname').val());
	if(($('#case4 option:selected').text()!='SELECT STYLE' && ItemAdding=='iphone4') || ($('#case5 option:selected').text()!='SELECT STYLE' && ItemAdding=='iphone5') || ItemAdding=='koozie')
	{
		if(ItemAdding=='iphone4')
			$('#alert4').removeClass('input_error_dd');
		else if(ItemAdding=='iphone5')
			$('#alert5').removeClass('input_error_dd');
		//console.log("item adding is :: "+ItemAdding+ " && inventory check value is :: "+$('#inventoryCheck4Case').val());
		if((ItemAdding == 'iphone4' && $('#inventoryCheck4Case').val() == 'true') || (ItemAdding == 'iphone5' && $('#inventoryCheck5Case').val() == 'true') || (ItemAdding == 'koozie' && $('#inventoryCheckKoozie').val() == 'true'))
			addItem(ItemValues);
		else
		{
			$('.loading_page').hide();
			$('#backgroundPopup').fadeOut();
		}
	}
	else
	{
		console.log("coming to else condition");
		if(ItemAdding=='iphone4')
			$('#alert4').addClass('input_error_dd');
		else if(ItemAdding=='iphone5')
			$('#alert5').addClass('input_error_dd');
		$('.loading_page').hide();
		$('#backgroundPopup').fadeOut();
	}
	
}
function isMobileDevice()
{
	return navigator.userAgent.toLowerCase().indexOf("ipad")!=-1 || navigator.userAgent.toLowerCase().indexOf("iphone")!=-1 || navigator.userAgent.toLowerCase().indexOf("ipod")!=-1 || navigator.userAgent.toLowerCase().indexOf("android")!=-1 || navigator.userAgent.toLowerCase().indexOf("mobile")!=-1;
}

function removeItem(sequenceId)
{
	var myVariantId=$("#variant_"+sequenceId).val();
	var solestruck_magzine=$('#vendorName_'+sequenceId).attr('name');
	if(solestruck_magzine=='Solestruck Magazine'){
		$('#solestruck_magazine').val('');
	}
	$(".loading_page").show();
	$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
	$.ajax({url:'/deleteItems.htm',
		dataType:'json',
		cache:false,
		type:'GET',
		data:{variantId:myVariantId},
		success:function(res){
			$(".loading_page").hide();
			$("#backgroundPopup").hide();
			if(res.responseCode>0){
				//console.log("Removing the Item...");
				$("#item_"+sequenceId).remove();
				$("#message_"+sequenceId).hide();
				$('#cartSubtotal').text('$'+(res.shoppingCart.subTotal).toFixed(2));
				if(res.shoppingCart.savings!='0.0'){
					$('#savings_label').css("display","block");
					$('#savingAmount').text('-$'+(res.shoppingCart.savings).toFixed(2));
				}
				else{
					$('#savings_label').css("display","none");
				}
				
				$("#finalTotal").text(res.shoppingCart.subTotal.toFixed(2));
				$('#shipcartSubtotal').text('$'+(res.shoppingCart.subTotal).toFixed(2));
				if(res.shoppingCart.savings!='0.0')
				{
					$('#final_savings').css("display","block");
					$('#final_savingAmount').text('-$'+(res.shoppingCart.savings).toFixed(2));
				}
				else{
					$('#final_savings').css("display","none");
				}
			
				$("#final_finalTotal").text(res.shoppingCart.subTotal.toFixed(2));
				
			 if($("#cartItems li[id^='item_']").length==0){
				 $("#no_items_msg").show();
			 	window.location='/redirectToNonSecurePage.htm?rdirectURL=/'
			 }
			 else
			 {
					updateShippingServices();
			 }
			 checkForYes(sequenceId);
			}
			else
			{
				//show error
			}
			if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true')
			{
					//handleFBSale();
				savingsForDiscountProgram();
			}
		}
	});
}

//var bajb_backdetect={Version:'1.0.0',Description:'Back Button Detection',Browser:{IE:!!(window.attachEvent&&!window.opera),Safari:navigator.userAgent.indexOf('Apple')>-1,Opera:!!window.opera},FrameLoaded:0,FrameTry:0,FrameTimeout:null,OnBack:function(){alert('Back Button Clicked')},BAJBFrame:function(){var BAJBOnBack=document.getElementById('BAJBOnBack');if(bajb_backdetect.FrameLoaded>1){if(bajb_backdetect.FrameLoaded==2){bajb_backdetect.OnBack();history.back()}}bajb_backdetect.FrameLoaded++;if(bajb_backdetect.FrameLoaded==1){if(bajb_backdetect.Browser.IE){bajb_backdetect.SetupFrames()}else{bajb_backdetect.FrameTimeout=setTimeout("bajb_backdetect.SetupFrames();",700)}}},SetupFrames:function(){clearTimeout(bajb_backdetect.FrameTimeout);var BBiFrame=document.getElementById('BAJBOnBack');var checkVar=BBiFrame.src.substr(-11,11);if(bajb_backdetect.FrameLoaded==1&&checkVar!="HistoryLoad"){BBiFrame.src="blank.html?HistoryLoad"}else{if(bajb_backdetect.FrameTry<2&&checkVar!="HistoryLoad"){bajb_backdetect.FrameTry++;bajb_backdetect.FrameTimeout=setTimeout("bajb_backdetect.SetupFrames();",700)}}},SafariHash:'false',Safari:function(){if(bajb_backdetect.SafariHash=='false'){if(window.location.hash=='#b'){bajb_backdetect.SafariHash='true'}else{window.location.hash='#b'}setTimeout("bajb_backdetect.Safari();",100)}else if(bajb_backdetect.SafariHash=='true'){if(window.location.hash==''){bajb_backdetect.SafariHash='back';bajb_backdetect.OnBack();history.back()}else{setTimeout("bajb_backdetect.Safari();",100)}}},Initialise:function(){if(bajb_backdetect.Browser.Safari){setTimeout("bajb_backdetect.Safari();",600)}else{document.write('<iframe src="blank.html" style="display:none;" id="BAJBOnBack" onunload="alert(\'de\')" onload="bajb_backdetect.BAJBFrame();"></iframe>')}}};bajb_backdetect.Initialise();
//Final sale fix 26/06/2013 7:59PM(IST)