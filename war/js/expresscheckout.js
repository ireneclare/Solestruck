$(document).ready(function()
{
	try
	{
		setCookie('orderid',$("#orderid_hidden").val(),60);
	}
	catch(err)
	{
		
	}
	//$('.exp_complete_purchase_act').click(validateAndCompletePurchase_Express);
	var token=$('#express_token').val();
	var countryName=$('#ShippingCountryName').val();
//	if(countryName=='USA' && $('#solestruck_magazine').val()!='Solestruck-Magazine' && $('#inventoryCheck').val()=='true')
//	{
		var count=0;
//		$.ajax({url:'/loadShoppingCart.htm',
//			dataType:'json',
//			cache:false,
//			success:function(res){
//				$(".loading_page").fadeOut();
//				if(res.shoppingCart.lineItems.length>0)
//				{
//					for(var i=0;i<res.shoppingCart.lineItems.length;i++)
//					{
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
//							if(countryName!='USA')
//							{
//								if(lineItem.vendorName == 'Solestruck Magazine')
//								{
//										var attr_id = $("span[name='"+lineItem.vendorName+"']").attr("id");
//										var seqid = attr_id.substring(attr_id.indexOf("_")+1,attr_id.length);
//										if($("#price_"+seqid).text()!="$10.00")
//										{
//											removeItem(seqid);
//										}
//								}
//							}
//							else
//							{
//								if(lineItem.vendorName == 'Solestruck Magazine' && count>0)
//								{
//										var attr_id = $("span[name='"+lineItem.vendorName+"']").attr("id");
//										var seqid = attr_id.substring(attr_id.indexOf("_")+1,attr_id.length);
//										if($("#price_"+seqid).text()!="$0.00")
//										{
//											$("#price_"+seqid).html("$0.00");
//											savingsForDiscountProgram();
//										}	
//								}
//							}
//						}
//						if(countryName=='USA' && $('#solestruck_magazine').val()!='Solestruck-Magazine' && $('#inventoryCheck').val()=='true')
//						{
//							console.log("count: "+count+" "+$("#discountTypeName").val());
//						//	if(count>0 && $("#discountTypeName").val() == 'Brand')
//							//{
//								 $('#backgroundPopup_magzine').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
//								 $('.zine_popup').show();
//								 $(".loading_page").fadeOut();
//							// } //commented after YES launch sale
//						}
//					}
//				}
//			}
//		});
		//if(countryName=='USA' && $('#solestruck_magazine').val()!='Solestruck-Magazine' && $('#inventoryCheck').val()=='true')
//			{
//				console.log("count: "+count+" "+$("#discountTypeName").val());
//			//	if(count>0 && $("#discountTypeName").val() == 'Brand')
//				//{
//					 $('#backgroundPopup_magzine').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
//					 $('.zine_popup').show();
//					 $(".loading_page").fadeOut();
				// } //commented after YES launch sale
//			}
//	}
	
//	if(countryName=='USA' && $('#solestruck_magazine').val()!='Solestruck-Magazine'  && $('#inventoryCheck').val()=='true')
//	{
//		 $('#backgroundPopup_magzine').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
//		 $('.zine_popup').show();
//		 $(".loading_page").fadeOut();
//		 
//	} This was commented and added the above code by m5k for YES Brand Launch and Sale
	
	//$('input:radio[name=shipping_method]:first').attr('checked',true);
	//$("input[name='shipping_method']:checked").trigger('click');
	
	$('select[name="Shippingmethod"]').die().live('change',function(){
		$('#Shippingmethod').attr('shipzoneid',$(this).val());
		$('.loading_page').show();
		$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
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
	
	$('#deliverySign').click(function(){
		updateRequireSignature();
	});
		//$('#Shippingmethod').text($('#firstShippingMethod').val());
		
		$(".custom_select_value_act").change(function() {
			 $(this).closest('div').find('p').html($(this).find("option:selected").text());
		});
		
		$('#buy_it').click(function()
				{
					$('.popup_processing_icon').css('display','block');
					addItemToCheckoutShoppingCart();
					
				});
				
//				$('#no_thanks').click(function()
//				{
//					$('#backgroundPopup_magzine').hide();
//					$('#backgroundPopup').hide();
//					 $('.zine_popup').hide();
//					 $(".loading_page").fadeOut();
//				});
				
//				$('#backgroundPopup_magzine').click(function(){
//					 $('#backgroundPopup_magzine').hide();
//					 $('.zine_popup').hide();
//				 });
				
				$('.popup_close_act').click(function() {
			  		$('#backgroundPopup').fadeOut();
			  		$('#backgroundPopup_magzine').fadeOut();
					$(this).parent().hide();
							
				});
				$(document).keyup(function(e) {
					 
					  if (e.keyCode == 27) {
					  		$('#backgroundPopup').fadeOut();
//					  		$('#backgroundPopup_magzine').fadeOut();
//					  		 $('.zine_popup').hide();
							$(this).parent().hide();
									
						 }   // esc
					});
				
//	if($("#discountExists").val()=='true' && $("#discountTypeName").val()!=null && $("#discountTypeName").val()=='Order')
//	{
		$('#swag_holder').show();
//	}
	$('#case4').change(function()
	{
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
		$(".loading_page").show();
		$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
		var color = $('#case5 option:selected').text();
		$('#alert5').removeClass('input_error_dd');
		if(color!='' && color=='#OMGSHOES' && color!='#SHOEADDICT')
			$('.shoeaddict').css('background-image','url(https://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/images/OMGSHOES.jpg)');
		else if(color!='' && color=='#SHOEADDICT' && color!='#OMGSHOES')
			$('.shoeaddict').css('background-image','url(https://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/images/SHOEADDICT.jpg)');
		color = color.replace('#','');
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
	
});

function validateAndCompletePurchase_Express()
{
	//console.log("inside validateAndCompletePurchase_Express method  ");
	$('.loading_page').show();
	$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
	$('.exp_complete_purchase_act').unbind('click');
	$('.exp_complete_purchase_act').addClass('inprogress');
	
	var token=$('#express_token').val();
	//console.log(" token "+token);
	
	if(!validateShippingmethods())
		return;
	$.ajax({url:'/completePurchase_Express.htm',cache:false,type:'POST',data:{token:token},success:function(checkoutResponse){
		////console.log("**Response of setShippingService : "+response);
		if(checkoutResponse.responseMessage=='success' && checkoutResponse.sequenceIds.length==0){
			
			window.location='/showThankyou.htm';
			//window.location='/showThankyou.htm';
			//populateThankYouPage(cart);
			//hideLoadingScreen();
			//showThankYouInfo();
		}
		else{
			$("#backgroundPopup").hide();
			$('.loading_page').hide();
			$("#backgroundPopup").hide();
			$('#card_payment_holder').addClass('card_payment_holder');
			$("#checkout_payment_err").html(checkoutResponse.responseMessage);
			$("#checkout_payment_err").show();
			for(index=0;index<checkoutResponse.sequenceIds.length;index++)
			{
				//console.log("sequence id is "+checkoutResponse.sequenceIds[index]);
				$("#message_"+checkoutResponse.sequenceIds[index]).show();
			}
			//hideLoadingScreen();
			finished=true;
			$('.loading_page').hide();
			$("#backgroundPopup").hide();
			$('.exp_complete_purchase_act').attr('disabled',false);
			//$('#backgroundPopup').hide();
		}
		$('.exp_complete_purchase_act').removeClass('inprogress');
		$('.exp_complete_purchase_act').bind('click',validateAndCompletePurchase_Express);
	},error:function(){
		$('.exp_complete_purchase_act').removeClass('inprogress');
	}
	});

	

}
function setCookie(c_name,value,exdays)
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + exdays);
	var c_value=escape(value) + ((exdays==null) ? "" : "; expires="+exdate.toUTCString());
	document.cookie=c_name + "=" + c_value;
}


//function validateShippingMethods()
//{
//	//console.log(" inside validateShippingMethods method ");
//	var valid=true;
//	$('#error_shipping').hide();
//	//console.log(" valid "+$('#Shippingmethod').text());
//	if($('#Shippingmethod').text()=='Please Select A Shipping Method...')
//	{
//		valid= false;
//	}
//	//console.log(" valid "+valid);
////	if(!$('input[name="shipping_method"]:selected').length){
////		//console.log('No shipping Method selected!');
////		$('#error_shipping').show();
////		valid= false;
////	}
//	return valid;
//}

function setShippingService()
{
	$('.important_shipping').css("display","block");
	var serviceZoneId=$('#shippingmethods').val();
	//console.log("serviceZoneId "+serviceZoneId);
	if(serviceZoneId==null || serviceZoneId=='') 
		return;
	$.ajax({
		url:'/setShippingService.htm',
		cache:false,
		type:'GET',
		data:{'serviceZoneId':serviceZoneId},
		success:function(checkoutDetails){
			$(".loading_page").hide();
			$("#backgroundPopup").hide();  
				//console.log('Shipping service Charge : '+checkoutDetails.shippingPrice);
			if($('#cartSubtotal').length>0)
				$('#final_finalTotal').html('$'+parseFloat(checkoutDetails.grandTotal).toFixed(2));
			if($('#shippingPrice').length>0)
				$('#shippingPrice').html('$'+parseFloat(checkoutDetails.shippingPrice).toFixed(2));
			if($('#cartSubtotal').length>0)
				$('#shipcartSubtotal').html('$'+parseFloat(checkoutDetails.shoppingCart.subTotal).toFixed(2));
			
			if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true' )
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
					retailPriceSum+=parseFloat($.trim($(this).text().replace('$','')));
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
				$("#final_finalTotal").text('$'+(parseFloat(shippingCharge)+parseFloat(shipCartSubTotal)).toFixed(2));
				}
			if($("#discountTypeName").val()!=null && ($("#discountTypeName").val()=='Order' || $("#discountTypeName").val()=='FF'))
			{
				//console.log("coming inside the condition of setShippingMethod");
				handleFBSale();
			}
			showshippingmethodtext();
			$(".loading_page").fadeOut();
				
		}
	});
}

function updateRequireSignature()
{
	//$('#deliverySign').addClass('checkbox_selected');
	
	//console.log(" class selected "+$('#deliverySign').hasClass('checkbox_selected'));
	$(".loading_page").show();
	$("#backgroundPopup").show();
	$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
	var required=false;
		if($('#deliverySign').hasClass('checkbox_selected')){
			required=false;
			$('#deliverySign').removeClass('checkbox_selected');
		}
		else{
			$('#deliverySign').addClass('checkbox_selected');
			required=true;
		}
	
	$.ajax({
		url:'/requireDeliverySignature.htm',
		data:{requireSign:required},
		cache:false,
		type:'GET',
		success:function(result){
			$("#backgroundPopup").hide();
			$(".loading_page").hide();
			//console.log('Result of deliverySignature:'+result);
		}
	});
}

function updateShippingServices()
{

	$(".loading_page").show();
	$("#backgroundPopup").show();
	var callback;
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
					
					$('#final_finalTotal').html('$'+parseFloat(checkoutDetails.grandTotal).toFixed(2));
					$('#shippingPrice').html('$'+parseFloat(checkoutDetails.shippingPrice).toFixed(2));
					$('#shipcartSubtotal').html('$'+parseFloat(checkoutDetails.shoppingCart.subTotal).toFixed(2));
					if(checkoutDetails.shippingServiceZoneId!=null)
						$('#Shippingmethod').attr('shipzoneid',checkoutDetails.shippingServiceZoneId);
					if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true')
					{
						////console.log("update shipping service");
						handleFBSale();
					}
					
					$(".loading_page").fadeOut();
					$("#backgroundPopup").fadeOut();
					
			},
				complete:function(){
					if(callback!=undefined)
						callback(true);
				}
				});
			}
		
	});

}


function listShippingServices(callback)
{
	/*if(typeof ClickTaleExec=="function"){
		ClickTaleExec("listShippingServices();");
	}*/
	
	var selshipzoneid=$('#Shippingmethod').attr('shipzoneid');
	var content='';
	$.ajax({
		url:'/getShippingServices.htm',
		cache:false,
		dataType:'json',
		//data:{'countryCode':myCountryCode,'stateCode':myStateCode},
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
					
				}
		},
		complete:function(){
			if(callback!=undefined)
				callback(true);
		}
	});
}

function validateShippingmethods()
{
	var shippingmethodvalue=$('#Shippingmethod').text();
	if(shippingmethodvalue=='Please Select A Shipping Method...')
	{
		$('#shippingmethod_error').addClass('error_icon4');
		$('#display_shippingmethod').addClass('dwn_error');
		$('.error_icon4').css('display','block');
		$("#backgroundPopup").hide();
		$(".loading_page").fadeOut();
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

function onchangeValidateShippingMethods(){

	var shippingmethodvalue=$('#shippingmethods option:selected').text();
	
	//console.log(" onchangeValidateShippingMethods shippingmethodvalue "+shippingmethodvalue);
	
	if(shippingmethodvalue=='Please Select A Shipping Method...')
	{
		$('#shippingmethod_error').addClass('error_icon4');
		$('#display_shippingmethod').addClass('dwn_error');
		$('.error_icon4').css('display','block');
		$("#backgroundPopup").hide();
		$(".loading_page").fadeOut();
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


function showshippingmethodtext()
{
	var shipingtext=$('#shippingmethods option:selected').text();
	var countryName=$('#ShippingCountryName').val();
	
	//console.log(" shipingtext "+shipingtext+" countryName "+countryName);
	
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

function sendReqForWaitList(sequenceId)
{	
	var vendorName = $('#vendorName_'+sequenceId).text();
	var productName = $('#productName_'+sequenceId).text();
	var productID=$('#product_'+sequenceId).val();
	var	colorSelID=$('#colors_'+sequenceId+' option:selected').val()!=undefined?$('#colors_'+sequenceId+' option:selected').val():$('#colorId_'+sequenceId).val();
	var colorSelName = $('#color_'+sequenceId).attr('name');
	var size = $('#size_'+sequenceId).text();
	var emailid=$('#CustomerEmailId').val();
	
//	console.log(" vendorName "+vendorName+" productName  "+productName+" productID "+productID+" colorSelID  "+colorSelID+" colorSelName "+colorSelName+"  size "+size+" emailid "+emailid);
	
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
//	if($("#discountExists").val()=='true' && $("#discountTypeName").val()!=null && $("#discountTypeName").val()=='Order')
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
		//console.log("coming to else condition");
		if(ItemAdding=='iphone4')
			$('#alert4').addClass('input_error_dd');
		else if(ItemAdding=='iphone5')
			$('#alert5').addClass('input_error_dd');
		$('.loading_page').hide();
		$('#backgroundPopup').fadeOut();
	}
	
}
// updated on 2-7-2013 8.30PM(IST)
//YES Launch Sale 18/9/13 12:54PM(IST)