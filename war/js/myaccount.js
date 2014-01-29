var addItemAndLoadWishList=false;
//var mailChimpServer="10.4.2.144:8889";
var mailChimpServer="10.staging-formcreator.appspot.com";
var mailChimpApiKey='5accd9d9265a53a18c35c649e7b5ab37-us4';
var myAccountBoolean=true;
$(document).ready(function()
{
	$('.tooltip_b').tipsy({trigger: 'focus', gravity: 'n'});
	$('.tooltip_f').tipsy({trigger: 'focus', gravity: 's',fade:true});
	$('.tooltip_e').tipsy({trigger: 'focus', gravity: 'w',fade:true});
	$('.tooltip_t2').tipsy({trigger: 'hover', gravity: 's',fade:true});
	
	$('#internationalShipAddr').show();
	var billCountryCodeOnLoad=$('#country_shipping').val();
	if(billCountryCodeOnLoad=="USA" || billCountryCodeOnLoad=="CA")
	{
		
		    //alert("-------->>>>>>>>>>>   Coming inside if part femi ------->>>>>>>>>>");
		    $('#div_province_for_shipping').hide();
		    $('#internationalShipAddr').hide();
			$('#div_state_for_shipping').show();
			$('#ship_state_for_holder').show();
		    $('#country_shipping').val('USA');
		    $('#div_province_for_billing').hide();
		    $('#bill_state_for_holder').show();
			$('#div_state_for_billing').show();
			getStatesForCountry("US", "bill");
			//getStatesForCountry("US", "ship");
	}
	else
	{
		    //alert("coming inside else part femi");
			$('#shippingAccountDiv').hide();
			$('#internationalShipAddr').show();
	}
	$('#showdropdown').mouseout(function()
	{
		if($('#myaccount').text()=='ACCOUNT')
		{
			$('#account').hide();
		}
		
	});

	$('#showdropdown').mouseover(function()
	{
		
		if($('#myaccount').text()=='ACCOUNT')
		{
			$('#account').show();
		}
		
		if($('#myaccount').text()=='SIGN IN')
		{
			$('#account').hide();
		}
		
	});

	$('.signin_forgot_pwd_act').click(function()
	{
		/*////alert("coming inside the forgot password");*/
		$('.signin_form').hide();
		$('.signin_sale').hide();
		$('.wish_list_form').hide();
		$('.forgot_password_form').show();
		/*$('.inputbox_final').val('');
		$('.inputbox_final_pwd').val('');
		$('.inputspan_txt').show();
		$('.inputspan_pwd').show();*/
	});

	$('.signin_forgot_pwd_act_sale').click(function()
	{
		/*//alert("coming inside the forgot password");*/
		$('.signin_sale').hide();
		$('.forgot_password_form_sale').show();
		/*$('.inputbox_final').val('');
		$('.inputbox_final_pwd').val('');
		$('.inputspan_txt').show();
		$('.inputspan_pwd').show();*/
	});

	//document.oncontextmenu=function(){return false;}
	
	function isMobileDevice()
	{
		return navigator.userAgent.toLowerCase().indexOf("ipad")!=-1 || navigator.userAgent.toLowerCase().indexOf("iphone")!=-1 || navigator.userAgent.toLowerCase().indexOf("ipod")!=-1 || navigator.userAgent.toLowerCase().indexOf("android")!=-1 || navigator.userAgent.toLowerCase().indexOf("mobile")!=-1;
	}
	
	if(!isMobileDevice()){
		$(".order_history_table td.col1 span").css("top","7px");
	}
	else{
		$(".order_history_table td.col1 span").css("top","0px");
	}
	
	var country_code_bill = $('#country_billing').attr('titlevalue');
	if(country_code_bill=="US" || country_code_bill=="CA")
	{
		getStatesForCountry(country_code_bill, "bill");
		$("#div_state_for_billing").show();
		$('#bill_state_for_holder').show();
		$("#div_province_for_billing").hide();
		$('#province_billing').val('');

	}
	else
	{
		
		$('State_billing').attr('titlevalue','');
		$("#div_state_for_billing").hide();
		$("#div_province_for_billing").show();
		$('#bill_state_for_holder').hide();
	}
	
	
	var country_code_shipp = $('#country_shipping').val();
	if(country_code_shipp=="USA" || country_code_shipp=="CA")
	{
		getStatesForCountry(country_code_shipp, "ship");
		$("#div_state_for_shipping").show();
		$('#ship_state_for_holder').show();
		$("#div_province_for_shipping").hide();
		$('#province_shipping').val('');
		getStatesForCountry("US", "bill");
	}
	else
	{
		$('State_shipping').attr('titlevalue','');
		$("#div_state_for_shipping").hide();
		$("#div_province_for_shipping").show();
		$('#ship_state_for_holder').hide();
	}
	
	
	
	//console.log(" myaccount page is loading ");
	$('#invalid_label').hide();
	$('#invalid_label_wishList').hide();
	
	$("#continueShoppingForThankyou").click(function()
	{	
		location.href='/';
	});
	$('#updateAccountSettings').click(function()
	{
		//console.log("Test v1");
		
		updateaccountinfoservice();
		
	});

	/*$('.col5').click(function ()
	{
		$("html, body").animate({ scrollTop: 0 }, "slow");
		returnOrderpop_act();
		
	});*/
	
	$("#country").change(function(){
		
		if($(this).attr("titlevalue")=="US" ||$(this).attr("titlevalue")=="CA")
			{
				$("#div_state").show();
				$("#div_province").hide();
				$('#province').val('');
			}
		else
			{
				$('#hidden_state').val('');
				$("#div_state").hide();
				$("#div_province").show();				
			}		
	});
	
	$('#showPass').change(function(){
			var type=$('#password').attr('type');
			if(type=='password')
				type='text';
			else
				type='password';
			document.getElementById('password').setAttribute('type', type);
	})
	$('#showResetPass').change(function(){
			var type=$('#passwordfrommail').attr('type');
			if(type=='password')
				type='text';
			else
				type='password';
			document.getElementById('passwordfrommail').setAttribute('type', type);
	});

	$("#state_text").change(function(){
		var statecode=''+$(this).attr('titlevalue');
		////alert("Statecode"+statecode);
		$('#hidden_state').val(statecode);
		
	});
	
	$('#country_billing').change(function(){
	
		
		
		var country_code = $(this).attr('titlevalue');
		//console.log(" inside country billing "+$(this).attr('titlevalue'));
		
		if(country_code=="US" || country_code=="CA")
		{
			getStatesForCountry(country_code, "bill");
			$('#State_billing').val('PLEASE SELECT STATE');
			$('#State_shipping').val('PLEASE SELECT STATE');
			$('#State_billing').attr('titlevalue','');
			$('#State_shipping').attr('titlevalue','');
			$("#div_state_for_billing").show();
			$('#bill_state_for_holder').show();
			$("#div_province_for_billing").hide();
			$('#province_billing').val('');
		}
		else
		{
		
			$('State_billing').attr('titlevalue','');
			$("#div_state_for_billing").hide();
			$("#div_province_for_billing").show();
			$('#bill_state_for_holder').hide();
		}
		
	});
	
//	$('#country_shipping').change(function(){
//	
//		var country_code = $(this).val();
//		if(country_code=="USA" || country_code=="CA")
//		{
//			getStatesForCountry(country_code, "ship");
//			$("#div_state_for_shipping").show();
//			$('#ship_state_for_holder').show();
//			$("#div_province_for_shipping").hide();
//			$('#province_shipping').val('');
//			getStatesForCountry("US", "bill");
//		}
//		else
//		{
//			$('State_shipping').attr('titlevalue','');
//			$("#div_state_for_shipping").hide();
//			$("#div_province_for_shipping").show();
//			$('#ship_state_for_holder').hide();
//		}
//		
//		
//	});

	
	$('#State_billing').change(function(){
		
		////alert("sdfsdf");
		$('State_billing').attr('titlevalue','11');
		$('State_billing').attr('value','1111');
		
	});
	
	
	
	$('#resetpassword').click(function(){

		var email=$('#email_forgot').val();
		var emailRegex=/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
		if(email == '')
		{
			$("#email_forgot").addClass("error_input_field");
			$("#email_forgot").attr('placeholder','Please enter your Mail Id to send your password');
			return false;
		}
		else if(email != '')
		{
			if(!email.match(emailRegex))
			{
				$("#email_forgot").addClass("error_input_field");
				$("#rqFld_login_email_forgotpwd").html("Enter valid emailId").show();
				//$("#email_forgot").attr('placeholder','Enter valid emailId');
				/*$('#email_forgot').val('');
				$('#email_forgot').focus();*/
				return false;
			}
			else
			{
				$.ajax({url:'/isEmailAlreadyExists.htm',cache:false,data:({"email":email}),success:function(data)
				{
					//console.log("Result :: "+data);
					if(data=='true')
					{
						$("#email_forgot").removeClass("error_input_field");
						$("#rqFld_login_email_forgotpwd").hide();
						$.ajax({url:'/resetPassword.htm',data:({"email":email}),cache:false,success:function(data){
							$(".forgot_password_form").hide();
							$('#backgroundPopup').hide();
						}});
					}
					else
					{
						$("#email_forgot").addClass("error_input_field");
						$("#rqFld_login_email_forgotpwd").html("Email id is not registered in our site").show();
						//$("#email_forgot").attr('placeholder','Email id is not registered in our site');
						/*$('#email_forgot').val('');
						$('#email_forgot').focus();*/
						return false;
					}
				}});
			}
		}
	});
	
	
	$('#resetpasswordsale').click(function(){

		var email=$('#email_forgot_sale').val();
		var emailRegex=/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
		if(email == '')
		{
			$("#email_forgot_sale").addClass("error_input_field");
			$("#email_forgot_sale").attr('placeholder','Please enter your Mail Id to send your password');
			return false;
		}
		else if(email != '')
		{
			if(!email.match(emailRegex))
			{
				$("#email_forgot_sale").addClass("error_input_field");
				$("#rqFld_login_email_forgotpwd").html("Enter valid emailId").show();
				//$("#email_forgot").attr('placeholder','Enter valid emailId');
				/*$('#email_forgot').val('');
				$('#email_forgot').focus();*/
				return false;
			}
			else
			{
				$.ajax({url:'/isEmailAlreadyExists.htm',cache:false,data:({"email":email}),success:function(data)
				{
					//console.log("Result :: "+data);
					if(data=='true')
					{
						$("#email_forgot_sale").removeClass("error_input_field");
						$("#rqFld_login_email_forgotpwd").hide();
						$.ajax({url:'/resetPassword.htm',data:({"email":email}),cache:false,success:function(data){
							$(".forgot_password_form_sale").hide();
							$('#backgroundPopup').hide();
							//$('.black_fridaypopup_two').fadeIn();
						}});
					}
					else
					{
						$("#email_forgot_sale").addClass("error_input_field");
						$("#rqFld_login_email_forgotpwd").html("Email id is not registered in our site").show();
						//$("#email_forgot").attr('placeholder','Email id is not registered in our site');
						/*$('#email_forgot').val('');
						$('#email_forgot').focus();*/
						return false;
					}
				}});
			}
		}
	});
	
	$('#registerToChangePassword').click(function(){
		var email=$('#email').val();
		var pass=$.trim($('#passwordfrommail').val());
		var accsessString=parseInt($('#accsessString').val());
		//console.log("------------->>>>>>>>>>>> accsessString is   ------------>>>>>>>>>>>>>> " + accsessString);
		var emailRegex=/^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+.)+([a-zA-Z0-9]{2,4})+$/;
		if(email == '')
			{
				$("#email").addClass("error_input_field");
				$("#email").attr('placeholder','Once again Try the link From Mail');
				return false;
			}
		else if(email != '')
			{
				if(!email.match(emailRegex))
				{
					//console.log("------------->>>>>>>>>>>> Email is InValid  ------------>>>>>>>>>>>>>>");
					$("#email").addClass("error_input_field");
					$("#rqFld_login_email_resetpwd").html("Give valid emailId").show();
					//$("#email_forgot").attr('placeholder','Enter valid emailId');
					/*$('#email_forgot').val('');
					$('#email_forgot').focus();*/
					return false;
				}
				else
					{
						
						$.ajax({url:'/isEmailAlreadyExists.htm',cache:false,data:({"email":email}),success:function(data)
							{
								//console.log("Result :: "+data);
								if(data=='true')
									{
										//console.log("------------->>>>>>>>>>>> EmailAlreadyExists  ------------>>>>>>>>>>>>>>");
										$("#email").removeClass("error_input_field");
										$("#rqFld_login_email_resetpwd").hide();
										if(pass=="")
											{
												//console.log("------------->>>>>>>>>>>> Password is Empty  ------------>>>>>>>>>>>>>>");
												$("#passwordfrommail").addClass("error_input_field");
												$("#passwordfrommail").html("Enter Any Password").show();
											}
										else
										{
											$.ajax({url:'/getValidResetPasswordAccsessString.htm',cache:false,data:({"email":email}),success:function(data)
												{
													if(data==accsessString)
														{
															//console.log("------------->>>>>>>>>>>> accsessString is Valid  ------------>>>>>>>>>>>>>>");
																
															$.ajax({type:'POST',url:'/changePassword.htm',data:({"emailid":email,"password":pass}),cache:false,success:function(data)
																{
																	//console.log("------------->>>>>>>>>>>> Password is Changed  ------------>>>>>>>>>>>>>>");
																	
																	$(".reset_password_form").hide();
																	$('#backgroundPopup').hide();
																	window.location='/';
																}});
														}
													else
														{
														//console.log("------------->>>>>>>>>>>> accsessString is InValid  ------------>>>>>>>>>>>>>>");
														$('#passwordfrommail').val("");
														}
												}});
										}
									}
								else
									{
										//console.log("------------->>>>>>>>>>>> Email is Not Exists  ------------>>>>>>>>>>>>>>");
										$("#email").addClass("error_input_field");
										$("#rqFld_login_email_forgotpwd").html("Email id is not registered in our site").show();
										//$("#email_forgot").attr('placeholder','Email id is not registered in our site');
										/*$('#email_forgot').val('');
										$('#email_forgot').focus();*/
										return false;
									}
							}});
					
						
					}
			}
	
		
	});
	
	/*if($(".account_info_col").length>0)
		{
			listSubScriptions();
		}*/
	$(".custom_dropdown").kgcustomdropdown();

	$('#login_signIn').click(function()
	{	
		loginValidate();
		
	});
	
	$('#login_instagram').click(function(){
		console.log("inside the click function");
		
		window.location.href="/instagram.htm";
		
		});
	
	$('#signin_act').click(function()
	{
		$('#signIn_form').show();
		$('.create_account').hide();
		
	});
	
	$('#signIn_wishlist').click(function()
			{
				//console.log("coming inside the create account signin act");
				$('#wishlist_login_create').fadeOut();
				$('.wish_list_form').fadeIn();
				/*$('.inputbox_final').val('');
				$('.inputbox_final_pwd').val('');
				$('.inputspan_txt').show();
				$('.inputspan_pwd').show();*/
			});
	$('.create_ac_signin_act_sale').click(function()
			{
				//console.log("coming inside the create account signin act");
				$('.create_account_sale').fadeOut();
				$('.wish_list_form').fadeOut();
				$('.signin_sale').fadeIn();
				/*$('.inputbox_final').val('');
				$('.inputbox_final_pwd').val('');
				$('.inputspan_txt').show();
				$('.inputspan_pwd').show();*/
			});
	$('.create_ac_signin_act_sale').click(function()
			{
				//console.log("coming inside the create account signin act");
				$('.create_account_sale').fadeOut();
				$('.signin_sale').fadeIn();
				/*$('.inputbox_final').val('');
				$('.inputbox_final_pwd').val('');
				$('.inputspan_txt').show();
				$('.inputspan_pwd').show();*/
			});
	$('.create_pwd').click(function()
			{
				//console.log("coming inside the **** ");
				document.getElementById('create_pass').setAttribute('type','password');
				document.getElementById('cr_pwd1').style.fontWeight = 'normal';
				document.getElementById('cr_pwd').style.fontWeight = 'bolder';
			});
	$('.create_pwd1').click(function()
			{
				//console.log("coming inside the ABC ");
				document.getElementById('create_pass').setAttribute('type','text');
				document.getElementById('cr_pwd').style.fontWeight = 'normal';
				document.getElementById('cr_pwd1').style.fontWeight = 'bolder';
			});
	$('.create_pwd_sale').click(function()
			{
				//console.log("coming inside the **** ");
				document.getElementById('create_pass_sale').setAttribute('type','password');
				document.getElementById('cr_pwd1_sale').style.fontWeight = 'normal';
				document.getElementById('cr_pwd_sale').style.fontWeight = 'bolder';
			});
	$('.create_pwd1_sale').click(function()
			{
				//console.log("coming inside the ABC ");
				document.getElementById('create_pass_sale').setAttribute('type','text');
				document.getElementById('cr_pwd_sale').style.fontWeight = 'normal';
				document.getElementById('cr_pwd1_sale').style.fontWeight = 'bolder';
			});
	$('.pwd').click(function()
			{
				//console.log("coming inside the **** ");
				document.getElementById('pass_new').setAttribute('type','password');
				document.getElementById('signin_pwd1').style.fontWeight = 'normal';
				document.getElementById('signin_pwd').style.fontWeight = 'bolder';
			});
	$('.pwd1').click(function()
			{
				//console.log("coming inside the ABC ");
				document.getElementById('pass_new').setAttribute('type','text');
				document.getElementById('signin_pwd').style.fontWeight = 'normal';
				document.getElementById('signin_pwd1').style.fontWeight = 'bolder';
			});
	$('.signin_sale_pwd').click(function()
			{
				//console.log("coming inside the **** ");
				document.getElementById('pass_sale').setAttribute('type','password');
				document.getElementById('sale_pwd1').style.fontWeight = 'normal';
				document.getElementById('sale_pwd').style.fontWeight = 'bolder';
			});
	$('.signin_sale_pwd1').click(function()
			{
				//console.log("coming inside the ABC ");
				document.getElementById('pass_sale').setAttribute('type','text');
				document.getElementById('sale_pwd').style.fontWeight = 'normal';
				document.getElementById('sale_pwd1').style.fontWeight = 'bolder';
			});
	$('.wishlist_pwd').click(function()
			{
				//console.log("coming inside the **** ");
				document.getElementById('pass_wishList').setAttribute('type','password');
				document.getElementById('wl_pwd1').style.fontWeight = 'normal';
				document.getElementById('wl_pwd').style.fontWeight = 'bolder';
			});
	$('.wishlist_pwd1').click(function()
			{
				//console.log("coming inside the ABC ");
				document.getElementById('pass_wishList').setAttribute('type','text');
				document.getElementById('wl_pwd').style.fontWeight = 'normal';
				document.getElementById('wl_pwd1').style.fontWeight = 'bolder';
			});
	$('.signin_sale_act').click(function()
			{
				loginValidateSale();
			});
	$('.ac_create_act_sale').click(function(){
		validateSignUpSale();
	})
	
	
	
	$('#signUp_wishlist').click(function(){
		validateSignUpwishlist();
	})
	
	$("#create_pass_wishlist").keyup(function(event){
		if(event.keyCode==13)
		{
			validateSignUpwishlist();
		}
	});
	
	
	$("#email_login_new").keyup(function(event){
		if(event.keyCode==13)
		{
			loginValidate();
		}
	});
	
	$("#pass_new").keyup(function(event){
		if(event.keyCode==13)
		{
			loginValidate();
		}
	});
	
	$("#email_login_sale").keyup(function(event){
		if(event.keyCode==13)
		{
			loginValidateSale();
		}
	});
	
	$("#pass_sale").keyup(function(event){
		if(event.keyCode==13)
		{
			loginValidateSale();
		}
	});
	
	$('#popup_wishlist').click(function()
	{
		//console.log(" inside log in pop function ");
		loginValidateWishList()
		
	});
			
	$("#email_login_wishList").keyup(function(event){
		if(event.keyCode==13)
		{
			loginValidateWishList()
		}
	});
	
	
	$("#pass_wishList").keyup(function(event){
		if(event.keyCode==13)
		{
			loginValidateWishList()
		}
	});

	$('.popup_close_act').click(function(){
		$(".loading_page").fadeOut();
		/*$('.inputbox_final').val('');
		$('.inputbox_final_pwd').val('');
		$('.inputspan_txt').show();
		$('.inputspan_pwd').show();*/
	});
	
	//FAE Added for JIRA 127
	$('#country_billing').change(toggleCountryTask);
	
	function toggleCountryTask()
	{
			var billCountryCode=$('#country_billing').val();
			//alert('Value is:'+billCountryCode);
			if(billCountryCode=="USA" || billCountryCode=="CA")
			{
				    //alert("Coming inside if part femi");
				    $('#country_shipping').val('USA');
				    $("#div_state_for_shipping").show();
				    $('#ship_state_for_holder').show();
					$("#div_province_for_shipping").hide();
				    $('#shippingAccountDiv').show();
				    $('#internationalShipAddr').hide();
					getStatesForCountry("US", "bill");
			}
			else
			{
				    //alert("coming inside else part femi");
					$('#shippingAccountDiv').hide();
					$('#internationalShipAddr').show();
			}
	$('#billCountryCode').val(billCountryCode);
	$('#shipCountryCode').val(billCountryCode);
			
	}
	
	$(".black_faq_wrapper h2").click(function(){
		$(this).find('p').toggle();
		if($(this).find('p').is(':visible'))
		{
			$(this).addClass('active');
		}
		else
		{
			$(this).removeClass('active');
		}
	});
});



//shp
function getStatesForCountry(country_code, address)
{
	var countryCode = country_code;
	
	$.ajax({
		
		url:'/getStatesForCountry.htm',
		data:{'countryCode':countryCode},
		dataType:'json',
		success:function(states)
		{
			////alert("states length = " + states.length);
			populateStateDetailsForAddress(country_code, states, address);
		}
		
	});

}

//shp
function populateStateDetailsForAddress(country_code, states, address)
{
	
	var htmlStr="<li title='00'>Please Select</li>";
	if(states!=null && states.length>0)
		{
			for(i=0;i<states.length;i++)
				{
					htmlStr+="<li title='"+states[i].stateCode+"'>"+states[i].stateName+"</li>";
				}
		}
	//console.log("Getting States:"+htmlStr);
	if(address=="bill"){
		$("#bill_state").html(htmlStr);
		$("#bill_state_for_holder").show();
		$("#div_state_for_billing").show();
		$("#ship_state").html(htmlStr);
		$("#ship_state_for_holder").show();
	}
	else if(address=="ship"){
		$("#ship_state").html(htmlStr);
		$("#ship_state_for_holder").show();
	}
	$(".custom_dropdown").kgcustomdropdown();
	return;
}


function loginValidateWishList()
{
	//console.log(" inside loginValidateWishList function ");
	var email=$.trim($('#email_login_wishList').val());
	if(email=='' || email=='Email')
	{
		$('#email_login_wishList').addClass('error_input_field');
		$('#rqFld_login_email_wishList').html('Enter a email id!').show();
		/*$('#email_login_wishList').attr('placeholder','Please Fill In Your Email ID');*/
		return false;
	}
	else
	{
		$('#email_login_wishList').removeClass('error_input_field');
		$('#rqFld_login_email_wishList').hide();
		//console.log("email is not null ");
	}
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if(!emailReg.test(email))
	{
		$('.inputspan_txt').hide();
		$('#rqFld_login_email_wishList').html('The Email Id You Entered Is Not Valid!').show();
		$('#email_login_wishList').addClass('error_input_field');
		return false;
	}
	else
	{
		$('#rqFld_login_email_wishList').hide();
		$('#email_login_wishList').removeClass('error_input_field');
	}
	var pass=$.trim($('#pass_wishList').val());
	if(pass=='' || pass=='Password')
	{
		$('#pass_wishList').addClass('error_input_field');
		$('#rqFld_login_email_wishList').html('Please enter passoword!').show();
		/*$('#pass_wishList').attr('placeholder','Please Fill In Your Password');*/
		return false;
	}
	else
	{
		$('#pass_wishList').removeClass('error_input_field');
		$('#rqFld_login_email_wishList').hide();
		//console.log("email is not pass ");
	}
	//$("#popup_wishlist").addClass("popup_processing_btn");
	$.post('/login.htm',{"username":email,"password":pass},function(data){
		if(data.login=='success')
			{
			   $('#myaccount').text('ACCOUNT');
			   $('#myaccount').removeClass('no_background');
			   $('#myaccount').addClass('drop_down');
			   $('#email_login_wishList').val('');
			   $('#pass_wishList').val('');
			   $('.notify').show();
			   $('#isLoggedInNotify').val('true');
			   $('.wish_list_form').hide();
			   $('#backgroundPopup').fadeOut();
			   
				var myaccount='<ul>'+
         		 			'<li> <a onclick="loadMyAccount('+data.customerid+');"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">My Account</a></li>'+
         		 			'<li><a href="/wishlist/" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" style="text-decoration: none; ">Wishlist</a></li>'+
         		 			'<li><a  onclick="logout()"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">Logout</a></li>'+
         		 			'</ul>';
				$('#account').html(myaccount);
				
				if(addItemAndLoadWishList == true)
				{
					doAddItemAndLoadWishList(data.customerid,globProdid,globColorid,globSize);
				}
				
				$('.rating_form_holder').fadeIn();
				
			}
		else
			{
				$('#rqFld_login_email_wishList').html('Invalid username / password !').show();
				$("#rqFld_login_email_wishList").fadeOut(6000);
				$("#popup_wishlist").removeClass("popup_processing_btn");
				$('.rating_form_holder').hide();
				$('#isLoggedInNotify').val('');
				 $('.notify').hide();
			}
		
	},"json");
	return false;
	
}
/*function getWishList(customerid)
{
	$.ajax({url:'/getWishList.htm',cache: false,data:({"custId":customerid}),success:function(data)
		{
		console.log(data);
		//$('#wish_list_popup_content').html(data);
		setTimeout(function()
		{
			
			if(data==null&&data=='')
			{
			
				if($('#ul_wishlist li').size()<1)
					{
						populateEmptyWishListHTML();
					}
			}
		},2000);
	}});
}*/

function validateSignUp()
{
	//console.log("coming inside validate signup");
	$('#rqFld_regis_email').css('color','red');
	$("#rqFld_login_email").hide();
    //console.log('*********  Inside validateSignUp()  **********');
	var email =$('#create_email').val();
	//console.log("the value of the email :: "+email);
	if($('#create_email').val()=='' || $('#create_email').val()=='Email')
	{
		$('#create_email').addClass('error_input_field');
		$("#rqFld_login_email_create").html('Enter a Email Id!').show();
		/*$('#create_email').attr('placeholder','Please Enter Your Email');*/
		return false;
	}
	else if($('#create_email').val()!='' && $('#create_email').val()!='Email')
	{
		$('#rqFld_login_email_create').hide();
		$("#create_email").removeClass("error_input_field");
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if(!emailReg.test($('#create_email').val()))
		{
			/*$("#emailid").val("");
			$("#emailid").text("");*/
			$('.inputspan_txt').hide();
			$("#create_email").addClass("error_input_field");
		 	$("#rqFld_login_email_create").html('Enter a valid email id!').show();
			/*$("#create_email").attr('placeholder','Enter valid email id!');*/
			return false;
		}
		else
		{
			//console.log("coming fine into the condition");
			$('#rqFld_login_email_create').hide();
			$("#create_email").removeClass("error_input_field");
			$.ajax({url:'/isEmailAlreadyExists.htm',cache:false,data:({"email":email}),success:function(data)
				{
					if(data=='true')
						{
							//console.log("error in the mail id");
							$("#create_email").addClass("error_input_field");
							$("#rqFld_login_email_create").html('Please try another email id!').show();
							//$("#emailid").attr('placeholder','Please try another email id!');
							/*$('#emailid').val('');
							$('#emailid').focus();*/
						}
					else
						{
							//console.log("email id available");
							$("#create_email").removeClass("error_input_field");	
							$("#rqFld_login_email_create").hide();
							$('#rqFld_login_email_create').css('color','green');
							$('#rqFld_login_email_create').html('Email Id available!').show();
							
						}
				}});
			var pass=$.trim($('#create_pass').val());
			if(pass=='' || pass=='Password')
			{
				$("#create_pass").addClass("error_input_field");
				$("#rqFld_login_email_create").html('Please enter password!').show();
				/*$("#create_pass").attr('placeholder','Please Enter Your password!');*/		
				return false;
			}
			else
			{
				$("#create_pass").removeClass("error_input_field");
				$("#rqFld_login_email_create").hide();
				//$('#rqFld_regis_create_pass').hide();
				$("#signup_popup").addClass("popup_processing_btn");
				$.ajax({type:'POST',url:'/createAccount.htm',data:({"email":email,"password":pass}),cache:false,success:function(data)
					{
						//console.log(data.result);
						if(data.result=='success')
						{
							//loadMyAccount(data.customerid);
							$("#login_popup").removeClass("popup_processing_btn");
						       $('#myaccount').text('ACCOUNT');
						       $('#myaccount').removeClass('no_background');
						       $('#myaccount').addClass('drop_down');
						       $('#create_email').val('');
						       $('#create_pass').val('');
						       $('#loginIn').val('true');
						       $('.hidelogout').css("display","block");
						       $('.showlogin').css("display","none");
						       $('#backgroundPopup').fadeOut();
						       $('.create_account').fadeOut();
						       
						       var myaccount='<ul>'+
					 			'<li> <a onclick="loadMyAccount('+data.customerid+');"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">My Account</a></li>'+
					 			'<li><a href="/wishlist/" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" style="text-decoration: none; ">Wishlist</a></li>'+
					 			'<li><a  onclick="logout()"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">Logout</a></li>'+
					 			'</ul>';
							$('#account').html(myaccount);
							
							if((window.location.pathname!='/vintage-shoes/') && (window.location.pathname!='/preorders/') && $("#discountExists").val()=='true')
							{
								location.reload();
							}
							
						}
						else{
							$("#rqFld_login_email_create").html('Invalid username / password').show();
							$("#rqFld_login_email_create").fadeOut(6000);
							$('#create_pass').val('');
							$('#create_pass').focus();
							$("#create_pass").addClass("error_input_field");
							$("#signup_popup").removeClass("popup_processing_btn");
						}
					}});
					checkForMailSubscriptions();
			}
			
		}
	}
}


function validateSignUpSale()
{
	/*$("#rqFld_login_email").hide();*/
    //console.log('*********  Inside validateSignUp()  **********');
	$('rqFld_login_email_create_sale').hide();
	var email =$('#create_email_sale').val();
	//console.log("the value of the email :: "+email);
	if($('#create_email_sale').val()=='' || $('#create_email_sale').val()=='Email')
	{
		$('#create_email_sale').addClass('error_input_field');
		$("#rqFld_login_email_create_sale").html('Enter a Email Id!').show();
		/*$('#create_email').attr('placeholder','Please Enter Your Email');*/
		return false;
	}
	else if($('#create_email_sale').val()!='' && $('#create_email_sale').val()!='Email')
	{
		$('rqFld_login_email_create_sale').hide();
		$("#create_email_sale").removeClass("error_input_field");
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if(!emailReg.test($('#create_email_sale').val()))
		{
			/*$("#emailid").val("");
			$("#emailid").text("");*/
			/*$('.inputspan_txt').hide();*/
			$("#create_email_sale").addClass("error_input_field");
		 	$("rqFld_login_email_create_sale").html('Enter a valid email id!').show();
			/*$("#create_email").attr('placeholder','Enter valid email id!');*/
			return false;
		}
		else
		{
			//console.log("coming fine into the condition");
			$('rqFld_login_email_create_sale').hide();
			$("#create_email_sale").removeClass("error_input_field");
			$.ajax({url:'/isEmailAlreadyExists.htm',cache:false,data:({"email":email}),success:function(data)
				{
					if(data=='true')
						{
							//console.log("error in the mail id");
							$("#create_email_sale").addClass("error_input_field");
							$("rqFld_login_email_create_sale").html('Please try another email id!').show();
							//$("#emailid").attr('placeholder','Please try another email id!');
							/*$('#emailid').val('');
							$('#emailid').focus();*/
						}
					else
						{
							//console.log("email id available");
							$("#create_email_sale").removeClass("error_input_field");	
							$("rqFld_login_email_create_sale").hide();
							$('rqFld_login_email_create_sale').css('color','green');
							$('rqFld_login_email_create_sale').html('Email Id available!').show();
							
						}
				}});
			var pass=$.trim($('#create_pass_sale').val());
			if(pass=='' || pass=='Password')
			{
				$("#create_pass_sale").addClass("error_input_field");
				$("rqFld_login_email_create_sale").html('Please enter password!').show();
				/*$("#create_pass").attr('placeholder','Please Enter Your password!');*/		
				return false;
			}
			else
			{
				$("#create_pass_sale").removeClass("error_input_field");
				$("rqFld_login_email_create_sale").hide();
				//$('#rqFld_regis_create_pass').hide();
				$("#signup_popup").addClass("popup_processing_btn");
				$.ajax({type:'POST',url:'/createAccount.htm',data:({"email":email,"password":pass}),cache:false,success:function(data)
					{
						//console.log(data.result);
						if(data.result=='success')
						{
							//loadMyAccount(data.customerid);
							$("#login_popup").removeClass("popup_processing_btn");
						       $('#myaccount').text('ACCOUNT');
						       $('#myaccount').removeClass('no_background');
						       $('#myaccount').addClass('drop_down');
						       $('#create_email_sale').val('');
						       $('#create_pass_sale').val('');
						       $('#loginIn').val('true');
						       $('.hidelogout').css("display","block");
						       $('.showlogin').css("display","none");
						       $('.create_account_sale').fadeOut();
						       $('.black_fridaypopup_two').fadeIn();
						       
						       var myaccount='<ul>'+
					 			'<li> <a onclick="loadMyAccount('+data.customerid+');"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">My Account</a></li>'+
					 			'<li><a onclick="showWishList();" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" style="text-decoration: none; ">Wishlist</a></li>'+
					 			'<li><a  onclick="logout()"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">Logout</a></li>'+
					 			'</ul>';
							$('#account').html(myaccount);
//							if((window.location.pathname=='/sale-shoes/') || (window.location.pathname=='/sale-womens-shoes/') || (window.location.pathname=='/sale-mens-shoes/'))
//							{
//								location.reload();
//							}
							
						}
						else{
							$("rqFld_login_email_create_sale").html('Invalid username / password').show();
							$("rqFld_login_email_create_sale").fadeOut(6000);
							$('#create_pass_sale').val('');
							$('#create_pass_sale').focus();
							$("#create_pass_sale").addClass("error_input_field");
							$("#signup_popup").removeClass("popup_processing_btn");
						}
					}});
					checkForMailSubscriptions();
			}
			
		}
	}
}

function validateSignUpwishlist()
{
	/*$("#rqFld_login_email").hide();*/
    //console.log('*********  Inside validateSignUp()  **********');
	$('#rqFld_login_email_create_wishlist').hide();
	var email =$('#create_email_wishlist').val();
	//console.log("the value of the email :: "+email);
	if($('#create_email_wishlist').val()=='' || $('#create_email_wishlist').val()=='Email')
	{
		$('#create_email_wishlist').addClass('error_input_field');
		$("#rqFld_login_email_create_wishlist").html('Enter a Email Id!').show();
		/*$('#create_email').attr('placeholder','Please Enter Your Email');*/
		return false;
	}
	else if($('#create_email_wishlist').val()!='' && $('#create_email_wishlist').val()!='Email')
	{
		$('rqFld_login_email_create_wishlist').hide();
		$("#create_email_wishlist").removeClass("error_input_field");
		var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if(!emailReg.test($('#create_email_wishlist').val()))
		{
			/*$("#emailid").val("");
			$("#emailid").text("");*/
			/*$('.inputspan_txt').hide();*/
			$("#create_email_wishlist").addClass("error_input_field");
		 	$("rqFld_login_email_create_wishlist").html('Enter a valid email id!').show();
			/*$("#create_email").attr('placeholder','Enter valid email id!');*/
			return false;
		}
		else
		{
			//console.log("coming fine into the condition");
			$('rqFld_login_email_create_wishlist').hide();
			$("#create_email_wishlist").removeClass("error_input_field");
			$.ajax({url:'/isEmailAlreadyExists.htm',cache:false,data:({"email":email}),success:function(data)
				{
					if(data=='true')
						{
							//console.log("error in the mail id");
							$("#create_email_wishlist").addClass("error_input_field");
							$("rqFld_login_email_create_wishlist").html('Please try another email id!').show();
							//$("#emailid").attr('placeholder','Please try another email id!');
							/*$('#emailid').val('');
							$('#emailid').focus();*/
						}
					else
						{
							//console.log("email id available");
							$("#create_email_wishlist").removeClass("error_input_field");	
							$("rqFld_login_email_create_wishlist").hide();
							$('rqFld_login_email_create_wishlist').css('color','green');
							$('rqFld_login_email_create_wishlist').html('Email Id available!').show();
							
						}
				}});
			var pass=$.trim($('#create_pass_wishlist').val());
			if(pass=='' || pass=='Password')
			{
				$("#create_pass_wishlist").addClass("error_input_field");
				$("rqFld_login_email_create_wishlist").html('Please enter password!').show();
				/*$("#create_pass").attr('placeholder','Please Enter Your password!');*/		
				return false;
			}
			else
			{
				$("#create_pass_wishlist").removeClass("error_input_field");
				$("rqFld_login_email_create_wishlist").hide();
				//$('#rqFld_regis_create_pass').hide();
				$("#signup_popup").addClass("popup_processing_btn");
				$.ajax({type:'POST',url:'/createAccount.htm',data:({"email":email,"password":pass}),cache:false,success:function(data)
					{
						//console.log(data.result);
						if(data.result=='success')
						{
							//loadMyAccount(data.customerid);
							$("#login_popup").removeClass("popup_processing_btn");
						       $('#myaccount').text('ACCOUNT');
						       $('#myaccount').removeClass('no_background');
						       $('#myaccount').addClass('drop_down');
						       $('#create_email_wishlist').val('');
						       $('#create_pass_wishlist').val('');
						       $('#loginIn').val('true');
						       $('.hidelogout').css("display","block");
						       $('#wishlist_login_create').css("display","none");
						       $('#backgroundPopup').fadeOut();
						    
						       
						       var myaccount='<ul>'+
					 			'<li> <a onclick="loadMyAccount('+data.customerid+');"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">My Account</a></li>'+
					 			'<li><a href="/wishlist/" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" style="text-decoration: none; ">Wishlist</a></li>'+
					 			'<li><a  onclick="logout()"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">Logout</a></li>'+
					 			'</ul>';
							$('#account').html(myaccount);
							
							
							if(addItemAndLoadWishList == true)
							{
								doAddItemAndLoadWishList(data.customerid,globProdid,globColorid,globSize);
							}
							
							
						}
						else{
							$("rqFld_login_email_create_wishlist").html('Invalid username / password').show();
							$("rqFld_login_email_create_wishlist").fadeOut(6000);
							$('#create_pass_wishlist').val('');
							$('#create_pass_wishlist').focus();
							$("#create_pass_wishlist").addClass("error_input_field");
							$("#signup_popup").removeClass("popup_processing_btn");
						}
					}});
					checkForMailSubscriptions();
			}
			
		}
	}
}


function loginValidate()
{
	//console.log("coming inside login validate");
	$("#invalid_label").hide();
	$("#fbErrorMsg").text("");
	var email=$.trim($('#email_login_new').val());
	//console.log("the value of the email:: " +email);
	if(email=='' || email=='Email')
	{
		//console.log("coming inside the condition");
		$("#email_login_new").addClass("error_input_field");
		$("#rqFld_login_email_new").html('Enter a email id!').show();
		/*$("#email_login_new").attr('placeholder','Please Enter Your Email !');*/
		return false;
	}
	else
	{
		$("#email_login_new").removeClass("error_input_field");
		$("#rqFld_login_email_new").hide();
	}
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if(!emailReg.test(email))
	{
		//console.log("coming inside 2 condition");
		/* $("#email_login").val("");
		 $("#email_login").text("");*/
		$('.inputspan_txt').hide();
		$("#email_login_new").addClass("error_input_field");
	 	$("#rqFld_login_email_new").html('Enter a valid email id!').show();
		return false;
	}
	else
	{
		$("#email_login_new").removeClass("error_input_field");
		$("#rqFld_login_email_new").hide();
	}
	var pass=$.trim($('#pass_new').val());
	//console.log("the value of the password is :: "+pass);
	if(pass=='' || pass=='Password')
	{
		$("#pass_new").addClass("error_input_field");
		$("#rqFld_login_email_new").html('Please enter password!').show();
		/*$("#pass_new").attr('placeholder','Please Enter Your Password !');*/
		return false;
	}
	else
	{
		$("#pass_new").removeClass("error_input_field");
		$("#rqFld_login_email_new").hide();
		//$('#rqFld_login_password').hide();
			}
	$("#login_popup").addClass("popup_processing_btn");
	$.ajax({type:'POST',url:'/login.htm',data:({"username":email,"password":pass}),success:function(data){
		//console.log('going to post');
		
		if(data.login=='success')
			{
				//console.log(" sucess ");
			   $('#isLoggedInNotify').val('true');
			   $('.notify').show();
			 //  console.log(" after setting "+ $('#isLoggedInNotify').val());
			   
			   $("#login_popup").removeClass("popup_processing_btn");
			   $('#myaccount').text('ACCOUNT');
			   $('#myaccount').removeClass('no_background');
			   $('#myaccount').addClass('drop_down');
			   $('#email_login_new').val('');
			   $('#pass_new').val('');
			  
			   
			   
			if($('#reviewfrom').val()=='mail')
				{
				window.location.reload(true);
				$('.hidelogout').css("display","block");
				$('.showlogin').css("display","block");
				$('#backgroundPopup').fadeOut();
				$('.signin_form').fadeOut();
				}
			else
				{
				$('.hidelogout').css("display","block");
				$('.showlogin').css("display","none");
				$('#backgroundPopup').fadeOut();
				$('.signin_form').fadeOut();
				
				
				
				var myaccount='<ul>'+
		 			'<li> <a onclick="loadMyAccount('+data.customerid+');"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">My Account</a></li>'+
		 			'<li><a href="/wishlist/" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" style="text-decoration: none; ">Wishlist</a></li>'+
		 			'<li><a  onclick="logout()"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">Logout</a></li>'+
		 			'</ul>';
				$('#account').html(myaccount);
				
				$(".help_typhoon").removeClass("for_typhoon");
				
				
				if((window.location.pathname=='/returns') || (window.location.pathname=='/orderstatus') || (window.location.pathname=='/customerservice') || (window.location.pathname=='/accountinfo'))
				{
					window.location.href="/MyAccount.htm";
				}
				//loadMyAccount(data.customerid);
				}
				
				//if((window.location.pathname!='/new-arrivals/') && (window.location.pathname!='/vintage-shoes/') && (window.location.pathname!='/preorders/') && $("#discountExists").val()=='true' && (window.location.pathname=='/'))
			    if((window.location.pathname!='/vintage-shoes/') && (window.location.pathname!='/preorders/') && $("#discountExists").val()=='true')
				{
					location.reload();
				}
			}
		else
			{
			$("#rqFld_login_email_new").html('Invalid username / password').show();
			$("#rqFld_login_email_new").fadeOut(6000);
			//$('#rqFld_login_email').html('invalid username / password');
			//$('#rqFld_login_password').html('invalid username / password');
			$('#pass_new').val('');
			$('#pass_new').focus();
			$("#pass_new").addClass("error_input_field");
				////console.log('invalid username');
			$("#login_popup").removeClass("popup_processing_btn");
			 $('#isLoggedInNotify').val('');
			 $('.notify').hide();
			}
		
		
		//var result=data['login'];
		////console.log("login result"+data.login);
		
	}});
	return false;
	
}

function loginValidateSale()
{
	//console.log("coming inside login validate Sale");
	$("#invalid_label").hide();
	var email=$.trim($('#email_login_sale').val());
	//console.log("the value of the email:: " +email);
	if(email=='' || email=='Email')
	{
		//console.log("coming inside the condition");
		$("#email_login_sale").addClass("error_input_field");
		$("#rqFld_login_email_sale").html('Enter a email id!').show();
		/*$("#email_login_sale").attr('placeholder','Please Enter Your Email !');*/
		return false;
	}
	else
	{
		$("#email_login_sale").removeClass("error_input_field");
		$("#rqFld_login_email_sale").hide();
	}
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if(!emailReg.test(email))
	{
		//console.log("coming inside 2 condition");
		/* $("#email_login").val("");
		 $("#email_login").text("");*/
		 $('.inputspan_txt').hide();
		 $("#email_login_sale").addClass("error_input_field");
		 $("#rqFld_login_email_sale").html('The Email Id You Entered Is Not Valid!').show();
		return false;
	}
	else
	{
		$("#email_login_sale").removeClass("error_input_field");
		$("#rqFld_login_email_sale").hide();
	}
	var pass=$.trim($('#pass_sale').val());
	//console.log("the value of the password is :: "+pass);
	if(pass=='' || pass=='Password')
	{
		$("#pass_sale").addClass("error_input_field");
		$("#rqFld_login_email_sale").html('Please enter password!').show();
		/*$("#pass_sale").attr('placeholder','Please Enter Your Password !');*/
		return false;
	}
	else
	{
		$("#pass_sale").removeClass("error_input_field");
		$("#rqFld_login_email_sale").hide();
		//$('#rqFld_login_password').hide();
			}
	$("#login_popup").addClass("popup_processing_btn");
	$.ajax({type:'POST',url:'/login.htm',data:({"username":email,"password":pass}),success:function(data){
		//console.log('going to post');
		
		if(data.login=='success')
			{
				//console.log("coming to 1 if condition");
			   $("#login_popup").removeClass("popup_processing_btn");
			   $('#myaccount').text('ACCOUNT');
			   $('#myaccount').removeClass('no_background');
			   $('#myaccount').addClass('drop_down');
			   $('#email_login_sale').val('');
			   $('#pass_sale').val('');
			   $('#isLoggedInNotify').val('true');
			   $('.notify').show();

			if($('#reviewfrom').val()=='mail')
				{
				window.location.reload(true);
				$('.hidelogout').css("display","block");
				$('.showlogin').css("display","block");
				$('#backgroundPopup').fadeOut();
				$('.signin_form').fadeOut();
				}
			else
				{
				//console.log("coming to else of the condition");
				$('.hidelogout').css("display","block");
				$('.showlogin').css("display","none");
				$(".loading_page").show();
				$('.signin_sale').fadeOut();
				$('.black_fridaypopup_two').fadeIn();
				$('.loading_page').hide();
				
				var myaccount='<ul>'+
		 			'<li> <a onclick="loadMyAccount('+data.customerid+');"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">My Account</a></li>'+
		 			'<li><a href="/wishlist/" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" style="text-decoration: none; ">Wishlist</a></li>'+
		 			'<li><a  onclick="logout()"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">Logout</a></li>'+
		 			'</ul>';
				$('#account').html(myaccount);
				
				//loadMyAccount(data.customerid);
				}
			
			}
		else
			{
			$("#rqFld_login_email_sale").html('Invalid username / password').show();
			$("#rqFld_login_email_sale").fadeOut(6000);
			//$('#rqFld_login_email').html('invalid username / password');
			//$('#rqFld_login_password').html('invalid username / password');
			$('#pass_sale').val('');
			$('#pass_sale').focus();
			$("#pass_sale").addClass("error_input_field");
				////console.log('invalid username');
			$("#login_popup").removeClass("popup_processing_btn");
			 $('.notify').hide();
			 $('#isLoggedInNotify').val('');
			}
		
		//var result=data['login'];
		////console.log("login result"+data.login);
		
	}});
	return false;
	
}

function loadMyAccount(customerid)
{
	$('#customerid').val(customerid);
	window.location="/MyAccount.htm";

}

function updateaccountinfoservice()
{
	//console.log(" inside updateaccountinfoservice password!1");
	var mailid		 = $('#mailid_user').val();
	var phonenumber  = $('#phonenumber').val();
	var newpass		 = $.trim($('#new_password').val());
	var reenterpass	 = $.trim($('#re_enter_password').val());
	
	var bid			 = $('#idBA').val();
	var bfirstName	 = $('#first_name_billing').val();
	var blastName	 = $('#last_name_billing').val();
	var baddress1	 = $('#address1_billing').val();
	var baddress2	 = $('#address2_billing').val();
	var bcity		 = $('#city_billing').val();
	var bstate		 = $('#State_billing').attr('titlevalue');
	var bstateName	 = $('#State_billing').val();
	var bprovince	 = $('#province_billing').val();
	var bzipcode	 = $('#zipcode_billing').val();
	var bcountry	 = $('#country_billing').attr('titlevalue');
	var bcountryName = $('#country_billing').val();
	
	var sid			 = $('#idSA').val();
	var sfirstName   = $('#first_name_shipping').val();
	var slastName    = $('#last_name_shipping').val();
	var saddress1    = $('#address1_shipping').val();
	var saddress2    = $('#address2_shipping').val();
	var scity        = $('#city_shipping').val();
	var sstate       = $('#State_shipping').attr('titlevalue');
	var sstateName   = $('#State_shipping').val();
	var sprovince    = $('#province_shipping').val();
	var szipcode     = $('#zipcode_shipping').val();
	var scountry     = $('#country_shipping').attr('titlevalue');
	var scountryName = $('#country_shipping').val();
	myAccountBoolean = true; 
	
	if(newpass!=reenterpass)
		{
			//console.info(" new pass and reenterpass not equal ")
			$('#rqFld_edit_acc_reenter_password').html('Passwords not matching!');
			$('#rqFld_edit_acc_reenter_password').show();
			$('#rqFld_edit_acc_reenter_password').fadeOut(3000);
			$('#re_enter_password').focus();			
			myAccountBoolean=false;
		}
	else
		{
			$('#rqFld_edit_acc_reenter_password').hide();
		}
	
	if(phonenumber=='')
	{
		//console.info(" bfirstName=='' ")
		$('#phonenumber').addClass('error_input_field');
		$('#phonenumber').attr('placeholder','This field is required!');
		$('#phonenumber').show();
		$('#phonenumber').focus();
		myAccountBoolean=false; 
		//return;
	}
	else
	{
		$('#phonenumber').removeClass('error_input_field');
	}
	
	//console.log(" international ship addr "+$('#internationalShipAddr').attr('style'));
	
	
	if($('#internationalShipAddr').attr('style')=='display: block;')
	{
	//	console.log(" inside  international ship addr ");
		sfirstName            = bfirstName;
		slastName			  = blastName;
		saddress1             = baddress1;
		saddress2             = baddress2
		scity	              = bcity;
		scountry              = bcountry;
		scountryName          = bcountryName;
		sstate                = bstate;
		sstateName            = bstateName;
		sprovince             = bprovince;
		szipcode              = bzipcode;
	}

	if(validateAccountDetails())
	{
		var billinginfojson	  = {id:bid,firstName:bfirstName,lastName:blastName,street1:baddress1,street2:baddress2,street3:bcity,state:bstate,stateName:bstateName,province:bprovince,country:bcountry,countryName:bcountryName,zipCode:bzipcode};
		var shippinginfo	  = {id:sid,firstName:sfirstName,lastName:slastName,street1:saddress1,street2:saddress2,street3:scity,state:sstate,stateName:sstateName,province:sprovince,country:scountry,countryName:scountryName,zipCode:szipcode};
		var accountInfo		  ={mailId : mailid , password : newpass,phoneNumber:phonenumber,billingInfo:billinginfojson,shippingInfo:shippinginfo};
		$("#updateAccountSettings").addClass("popup_processing_btn");
		$.ajax({url:"/savemyaccountdetails.htm",type:'POST',data:JSON.stringify(accountInfo),success:function(data)
		{
			if(data=='success')
			{
				$('.save_success_msg').show();
				$('.save_success_msg').fadeOut(3000);
				$("#updateAccountSettings").removeClass("popup_processing_btn");
			}
		},contentType:'application/json',dataType:"text"});

	}
	
}
function validateAccountDetails()
{
	var myAccountBoolean=true;
	if($('#first_name_billing').val()=='')
	{
		$('#first_name_billing').addClass('error_input_field');
		$('#first_name_billing').attr('placeholder','This field is required!');
		$('#first_name_billing').show();
		$('#first_name_billing').focus();
		myAccountBoolean=false;
	}
	else
	{
		$('#first_name_billing').removeClass('error_input_field');
	}
	
	if($('#last_name_billing').val()=='')
	{
		$('#last_name_billing').addClass('error_input_field');
		$('#last_name_billing').attr('placeholder','This field is required!');
		$('#last_name_billing').show();
		$('#last_name_billing').focus();
		myAccountBoolean=false;
	}
	else
	{
		$('#last_name_billing').removeClass('error_input_field');
	}
	
	if($('#address1_billing').val()=='')
	{
		$('#address1_billing').addClass('error_input_field');
		$('#address1_billing').attr('placeholder','This field is required!');
		$('#address1_billing').show();
		$('#address1_billing').focus();
		myAccountBoolean=false;
	}
	else
	{
		$('#address1_billing').removeClass("error_input_field");
	}
	
	if($('#country_billing').val()=='')
	{
		$('#country_billing').addClass('error_input_field');
		$('#country_billing').attr('placeholder','This field is required!');
		$('#country_billing').show();
		$('#country_billing').focus();
		myAccountBoolean=false;
	}
	else
	{
		$('#country_billing').removeClass("error_input_field");
		if($('#country_billing').val()=='USA' || $('#country_billing').attr('titlevalue')=='CA')
			{
				if($('#State_billing').attr('titlevalue')=='')
				{
					$('#State_billing').addClass('error_input_field');
					$('#State_billing').attr('placeholder','This field is required!');
					$('#State_billing').show();
					$('#State_billing').focus();
					myAccountBoolean=false;
				}
				else
				{
					$('#State_billing').removeClass('error_input_field');
					$('#province_billing').val('');
					myAccountBoolean=true;
				}
				
			}
		else
		{
			$('#State_billing').attr('titlevalue','');
		}
		
	}
	
	if($('#city_billing').val()=='')
	{
		$('#city_billing').addClass('error_input_field');
		$('#city_billing').attr('placeholder','This field is required!');
		$('#city_billing').show();
		$('#city_billing').focus();
		myAccountBoolean=false;
	}
	else
	{
		$('#city_billing').removeClass('error_input_field');
	}
		
	if($('#zipcode_billing').val()=='')
	{
		$('#zipcode_billing').addClass('error_input_field');
		$('#zipcode_billing').attr('placeholder','This field is required!');
		$('#zipcode_billing').show();
		$('#zipcode_billing').focus();
		myAccountBoolean=false;
	}
	else
	{
		$('#zipcode_billing').removeClass("error_input_field");
	}
	
	if($('#internationalShipAddr').attr('style')=='display: none;')
	{

		if($('#first_name_shipping').val()=='')
		{
			$('#first_name_shipping').addClass('error_input_field');
			$('#first_name_shipping').attr('placeholder','This field is required!');
			$('#first_name_shipping').show();
			$('#first_name_shipping').focus();
			myAccountBoolean=false;
		}
		else
			{
				$('#first_name_shipping').removeClass("error_input_field");
			}
		
		if($('#last_name_shipping').val()=='')
		{
			$('#last_name_shipping').addClass('error_input_field');
			$('#last_name_shipping').attr('placeholder','This field is required!');
			$('#last_name_shipping').show();
			$('#last_name_shipping').focus();
			myAccountBoolean=false;
		}
		else
		{
			$('#last_name_shipping').removeClass("error_input_field");
		}
		
		if( $('#address1_shipping').val()=='')
		{
			$('#address1_shipping').addClass('error_input_field');
			$('#address1_shipping').attr('placeholder','This field is required!');
			$('#address1_shipping').show();
			$('#address1_shipping').focus();
			myAccountBoolean=false;
		}
		else
		{
			$('#address1_shipping').removeClass("error_input_field");
		}
		
		if($('#city_shipping').val()=='')
		{
			$('#city_shipping').addClass('error_input_field');
			$('#city_shipping').attr('placeholder','This field is required!');
			$('#city_shipping').show();
			$('#city_shipping').focus();
			myAccountBoolean=false;
		}
		else
		{
			$('#city_shipping').removeClass("error_input_field");
		}
		
		if($('#country_shipping').val()=='')
		{
			$('#country_shipping').addClass('error_input_field');
			$('#country_shipping').attr('placeholder','This field is required!');
			$('#country_shipping').show();
			$('#country_shipping').focus();
			myAccountBoolean=false;
		}
		else
		{
			$('#country_shipping').removeClass("error_input_field");
			if($('#country_shipping').val()=='US')
			{
				if($('#State_shipping').val()=='')
				{
					$('#State_shipping').addClass('error_input_field');
					$('#State_shipping').attr('placeholder','This field is required!');
					$('#State_shipping').show();
					$('#State_shipping').focus();
					myAccountBoolean=false;
				}
				else
				{
					$('#State_shipping').removeClass('error_input_field');
				}
			}
		}
		if($('#zipcode_shipping').val()=='')
		{
			$('#zipcode_shipping').addClass('error_input_field');
			$('#zipcode_shipping').attr('placeholder','This field is required!');
			$('#zipcode_shipping').show();
			$('#zipcode_shipping').focus();
			myAccountBoolean=false;
		}
		else
		{
			$('#zipcode_shipping').removeClass("error_input_field");
		}
	}
	return myAccountBoolean;
}

/*function getStateName(stateCode,addrType)
{
	var stateName='';
	if(addrType=='shipping'){
		$("#ship_stateList").each(function(index,item){
			if(item.attr('title')==stateCode){
				stateName=item.text();
				return;
			}
		});
	}
	else{

		$("#bill_stateList").each(function(index,item){
			if(item.attr('title')==stateCode){
				stateName=item.text();
				return;
			}
		});

	}
	
	return stateName;
}*/
function logout()
{
	$(".loading_page").fadeIn();
	eraseCookie('FBStartShoppingShown');
	//console.log("path "+window.location.pathname);
	if(window.location.pathname!='/MyAccount.htm' && window.location.pathname!='/wishlist/')
	{
		$.ajax({url:'/logout.htm',cache:false,success:function(data)
			{
				if(data==true)
					{
						$('#myaccount').text('SIGN IN');
						$(".help_typhoon").addClass("for_typhoon");
						$('#account').hide();
						$('#myaccount').addClass('no_background');
					    $('#myaccount').removeClass('drop_down');
					    $('#loginIn').val('');
					    $(".loading_page").fadeOut();
					    $('.notify').hide();
					    $('#isLoggedInNotify').val('');
					    if((window.location.pathname!='/vintage-shoes/') && (window.location.pathname!='/preorders/') && $("#discountExists").val()=='true')
						{
							location.reload();
						}
					    if(location.pathname.match("index.html"))
				    	{
					    	location.reload();
				    	}
					}
				
			}});
	}
	else
	{
		window.location.href="/mylogout.htm";
	}
}

function viewInvoice(orderid)
{
	window.open("/getOrderInvoice.htm?orderId="+orderid);
}

function isEmailAreadyExists()
{
	$('#rqFld_regis_email').css('color','red');
	$("#rqFld_regis_email").hide();
	if($('#create_email').val()=='' || $('#create_email').val()=='Email')
	{
		$('#create_email').addClass('error_input_field');
		$("#rqFld_login_email_create").html('Enter a email id!').show();
		/*$('#emailid').attr('placeholder','Please Enter Your Email');*/
		return false;
	}
	else if($('#create_email').val()!='' && $('#create_email').val()!='Email')
	{
		$("#create_email").removeClass("error_input_field");
		$("#rqFld_login_email_create").hide();
		var email=$('#create_email').val();
		var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if(!email.match(emailRegex))
		{
			$("#create_email").addClass("error_input_field");
			$("#rqFld_login_email_create").html('Enter valid email id!').show();
			//$("#emailid").attr('placeholder','Enter valid emailid!');
			/*$('#emailid').val('');
			$('#emailid').focus();*/
			return false;
		}
		else
		{
			$("#create_email").removeClass("error_input_field");	
			$("#rqFld_login_email_create").hide();
			$.ajax({url:'/isEmailAlreadyExists.htm',cache:false,data:({"email":email}),success:function(data)
			{
				if(data=='true')
					{
						$("#create_email").addClass("error_input_field");
						$("#rqFld_login_email_create").html('Please try another email id!').show();
					}
				else
					{
						$("#create_email").removeClass("error_input_field");	
						$("#rqFld_login_email_create").hide();
						$('#rqFld_login_email_create').css('color','green');
						$('#rqFld_login_email_create').html('Email Id available!').show();
						
					}
			}});
		}
	}	
}


function isEmailAreadyExistsSale()
{
	/*$('#rqFld_regis_email').css('color','red');
	$("#rqFld_regis_email").hide();*/
	if($('#create_email_sale').val()=='' || $('#create_email_sale').val()=='Email')
	{
		$('#create_email_sale').addClass('error_input_field');
		$("#rqFld_login_email_create_sale").html('Enter a email id!').show();
		/*$('#emailid').attr('placeholder','Please Enter Your Email');*/
		return false;
	}
	else if($('#create_email_sale').val()!='' && $('#create_email_sale').val()!='Email')
	{
		$("#create_email_sale").removeClass("error_input_field");
		$("#rqFld_login_email_create_sale").hide();
		var email=$('#create_email_sale').val();
		var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if(!email.match(emailRegex))
		{
			$("#create_email_sale").addClass("error_input_field");
			$("#rqFld_login_email_create_sale").html('Enter valid email id!').show();
			//$("#emailid").attr('placeholder','Enter valid emailid!');
			/*$('#emailid').val('');
			$('#emailid').focus();*/
			return false;
		}
		else
		{
			$("#create_email_sale").removeClass("error_input_field");	
			$("#rqFld_login_email_create_sale").hide();
			$.ajax({url:'/isEmailAlreadyExists.htm',cache:false,data:({"email":email}),success:function(data)
			{
				if(data=='true')
					{
						$("#create_email_sale").addClass("error_input_field");
						$("#rqFld_login_email_create_sale").html('Please try another email id!').show();
					}
				else
					{
						$("#create_email_sale").removeClass("error_input_field");	
						$("#rqFld_login_email_create_sale").hide();
						$('#rqFld_login_email_create_sale').css('color','green');
						$('#rqFld_login_email_create_sale').html('Email Id available!').show();
						
					}
			}});
		}
	}	
}

function isEmailAreadyExistswishlist()
{
	/*$('#rqFld_regis_email').css('color','red');
	$("#rqFld_regis_email").hide();*/
	if($('#create_email_wishlist').val()=='' || $('#create_email_wishlist').val()=='Email')
	{
		$('#create_email_wishlist').addClass('error_input_field');
		$("#rqFld_login_email_create_wishlist").html('Enter a email id!').show();
		/*$('#emailid').attr('placeholder','Please Enter Your Email');*/
		return false;
	}
	else if($('#create_email_wishlist').val()!='' && $('#create_email_wishlist').val()!='Email')
	{
		$("#create_email_wishlist").removeClass("error_input_field");
		$("#rqFld_login_email_create_wishlist").hide();
		var email=$('#create_email_wishlist').val();
		var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
		if(!email.match(emailRegex))
		{
			$("#create_email_wishlist").addClass("error_input_field");
			$("#rqFld_login_email_create_wishlist").html('Enter valid email id!').show();
			//$("#emailid").attr('placeholder','Enter valid emailid!');
			/*$('#emailid').val('');
			$('#emailid').focus();*/
			return false;
		}
		else
		{
			$("#create_email_wishlist").removeClass("error_input_field");	
			$("#rqFld_login_email_create_wishlist").hide();
			$.ajax({url:'/isEmailAlreadyExists.htm',cache:false,data:({"email":email}),success:function(data)
			{
				if(data=='true')
					{
						$("#create_email_wishlist").addClass("error_input_field");
						$("#rqFld_login_email_create_wishlist").html('Please try another email id!').show();
					}
				else
					{
						$("#create_email_wishlist").removeClass("error_input_field");	
						$("#rqFld_login_email_create_wishlist").hide();
						$('#rqFld_login_email_create_wishlist').css('color','green');
						$('#rqFld_login_email_create_wishlist').html('Email Id available!').show();
						
					}
			}});
		}
	}	
}


function returnOrderpop_act(orderId)
{
	//console.log("----------->>>>>>> IN SIDE returnOrderpop_act click function");
	
 	//position_popup (); 
	$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
	$('.loading_page').show();
	$("html, body").animate({ scrollTop: 0 }, "slow");
	$.ajax({url:'/getblobkey.htm',cache:false,data:({"orderId":orderId}),success:function(data)
	{
		$('.loading_page').hide();
		$('.return_popup').show();
		$('#returnLabel').attr('href',data);
		
	}});
		
}


function checkForMailSubscriptions()
{
	
	////alert("Its coming inside checkForMailSubscriptions");
	$.ajax({url:'http://'+mailChimpServer+'/mailchimp/getListMemberByEmailId.req',
		data: {apiKey:mailChimpApiKey,memberEmailId:$("#mailid_user").val()},
		dataType:'jsonp',
		jsonp: 'callback',
		success:function(data)
		{
			
			//console.log(data);
					if(data!=null){
						for(i=0;i<data.length;i++){
							
							
							$(".campaignList").each(function(){
								
								if($(this).attr("value")==data[i].listId)
									{
										$(this).attr("checked","checked");
									}
							});
							
							
						
							}
					}
					
				
			
		}
		});
	
	
	
}

function listSubScriptions()
{
	////alert("Coming inside listSubScriptions ");
	$.ajax({url:'http://'+mailChimpServer+'/mailchimp/getCompaignList.req',
		data: {apiKey:mailChimpApiKey},
		dataType:'jsonp',
		jsonp: 'callback',
		success:function(data)
		{
			if(data!=null)
				{
				var html="<h3>Subscriptions:</h3>";
				for(i=0;i<data.length;i++){
					
						html+="<div><input type=\"checkbox\" class=\"campaignList\" value=\""+data[i].ListId+"\"/><a style=\"color:#4d4d4d;margin-left:7px;font-size:12px;\">"+data[i].compaignTitle+"</a></div>";
					
				}
					$(html).appendTo($($(".account_info_col")[0]));
					
					$(".campaignList").click(function(){
						
						if($(this).attr("checked"))
							{
								subscribeTHis(true,$(this).attr("value"));
							}
						else
							{
								subscribeTHis(false,$(this).attr("value"));
							}
					});
					
					checkForMailSubscriptions();
				}
			
			
		}
		});
}

function registerForSubscription()
{
	
	$.ajax({url:'http://'+mailChimpServer+'/mailchimp/subscribeUser.req',
		data: {apiKey:mailChimpApiKey,email:$("#mailid_user").val(),firstName:$("#first_name_billing").val(),lastName:$("#last_name_billing").val()},
		dataType:'jsonp',
		jsonp: 'callback',
		success:function(data)
		{
			
			if(data)
				{
					$("#subscribeSubscription").remove();
					listSubScriptions();
				}
			
		}
		});
}

function subscribeTHis(flag,val)
{
	
	if(flag)
		{
			$.ajax({url:'http://'+mailChimpServer+'/mailchimp/subscribeUser.req',
				data: {apiKey:mailChimpApiKey,listId:val,email:$("#mailid_user").val(),firstName:$("#first_name_billing").val(),lastName:$("#last_name_billing").val()},
				dataType:'jsonp',
				jsonp: 'callback',
				success:function(data)
				{
					
					
					
				}
				});
		}
	else
		{
		
		$.ajax({url:'http://'+mailChimpServer+'/mailchimp/unSubscribeUser.req',
			data: {apiKey:mailChimpApiKey,listId:val,email:$("#mailid_user").val()},
			dataType:'jsonp',
			jsonp: 'callback',
			success:function(data)
			{
				
				
				
			}
			});
		
		}
}

function loadingForFb(status){
	
	
	//console.info("this is inside loading popup");
	var locations = window.location.pathname;
	$(".loading_page").fadeIn();
	$.ajax({url:'/setFbStatusFrom.htm',data:({"status":status, "locations":locations}),success:function(data)
		{
			
		}
	});
}
