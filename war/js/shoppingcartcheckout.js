var inventory=new Object();
var imageServer="https://commondatastorage.googleapis.com/images2.solestruck.com";
var checkAvailableShipping='false';
var discountAmountForSubtotal = 0.00;

$(document).ready(function(){
	getInventoryForCart();
	
	//handleFBSale();
	//alert("hi");
	savingsForDiscountProgram();
});


function handleFBSale()
{
	var cart=$("#new_check_out_cart");
	var cartItems=$(cart).children("#cartItems").children("li");
	var subtotal=0.0;
	$(cartItems).each(function(){
		
		subtotal+=parseFloat($(this).find("input[type='hidden'][id^='real_price_']").val());
		
	});
	if($("#discountTypeName").val()==null || ($("#discountTypeName").val()!="Order" && $("#discountTypeName").val()!="FF"))
	{
		if($('#cartSubtotal').is(":visible"))
			$("#cartSubtotal").text("$"+subtotal.toFixed(2));
		$("#subTotal").val(subtotal.toFixed(2));
		if($('#finalTotal').is(":visible") && $('#shippingPrice').is(":visible"))
		{
			$('#finalTotal').text("$"+(parseFloat($("#subTotal").val())+parseFloat($("#shippingPrice").text().substring($("#shippingPrice").text().indexOf("$")+1,$("#shippingPrice").text().length))).toFixed(2));
		}
	}
	else if($("#discountTypeName").val()!=null && ($("#discountTypeName").val()=='Order' || $("#discountTypeName").val()=='FF'))
		savingsForDiscountProgram();
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
				 createCookie('isCartEmpty', 'true');
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
			if(((readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook') || (window.location.pathname == '/loadConfirmationAfterPaypalAuthorize.htm')) && $("#discountExists").val()=='true')
			{
					//handleFBSale();
				savingsForDiscountProgram();
			}
		}
	});
}


function refreshCart(){
	//console.log("coming into the refresh cart function");
	$.ajax({url:'/loadShoppingCart.htm',
	dataType:'json',
	cache:false,
	success:function(response){
				var cartItems=response.shoppingCart.lineItems;
			//alert('refresh Cart');
			var index=0,cartItem;
			var quntity="";
			for(index=0;index<cartItems.length;index++){
				cartItem=cartItems[index];
				if(cartItem.isSale==true)
				{
					console.log('Inside Sale True');
					if(($("#discountExists").val()=='true') && ($('#discountTypeName').val()=='FF' ))
					{
						console.log('Inside Discount True')
						var discountPrice = (parseFloat(cartItem.price)-(parseFloat(cartItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2);
						//console.log("discounted price is :: "+discountPrice+ " && quantity is :: "+cartItem.quantity);
						$('#final_savings').show();
						//console.log("discountPrice is "+discountPrice);
						//console.log("cartItem.retailPrice is "+cartItem.retailPrice);
						//console.log("response.responseCode is "+response.responseCode);
						//console.log("cartItem.sequenceid is "+cartItem.sequenceId);
						$('#cart_price_'+cartItem.sequenceId).html('<strike id="retailPrice_'+cartItem.sequenceId+'">$'+(cartItem.retailPrice*cartItem.quantity).toFixed(2)+'</strike> <b class=\"incart_check\" id="price_'+cartItem.sequenceId+'">$'+discountPrice+'</b>');
					}
				}
				/*else if($("#discountExists").val()=='true' && $('#discountTypeName').val()=='FF')
				{
					//console.log("price:: "+cartItem.price);
					//console.log("percentage calculation is ::"+parseFloat(cartItem.price)*parseInt($("#fbsale_discount_percentage").val())/100);
					$("#price_"+cartItem.sequenceId).text('$'+(parseFloat(cartItem.price)-(parseFloat(cartItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
					$("#real_price_"+cartItem.sequenceId).val((parseFloat(cartItem.price)-(parseFloat(cartItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
					$("#sale_"+cartItem.sequenceId).text("(Final Sale)");
				}*/
			}
			savingsForDiscountProgram();
	},
	//$("#finalTotal").text(response.shoppingCart.subTotal.toFixed(2));
	
	  
	});
	};

function onColorChange(element,sequenceId)
{
	/*	
 	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("onColorChange(document.getElementById('"+element.id+"'),"+sequenceId+")");
	}
	*/
	//
	$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
	$(".loading_page").show();
	$("#message_"+sequenceId).hide();
	////console.log("COLOR CHANGE "+sequenceId+" ColorID "+element.id+" ColorName :"+$("#color_"+sequenceId).val());
	var colorId=$(element).val();
	var oldColorId=$("#colorId_"+sequenceId).val();
	if(oldColorId==colorId)
		return;
	
	var productName=$('#productName_'+sequenceId).attr('name');
	var vendorName=$('#vendorName_'+sequenceId).attr('name');
	
	var isSale=false;
	var isPreOrder=false;
	var colorName=$(element).attr('name');
	////console.log("proName"+productName+" vendorName"+vendorName[0]+" colorName "+colorName);
	var imageUrl=getImageUrl(vendorName,productName,colorName);
	$("#image_"+sequenceId).attr("src",imageUrl);
	var productId=$("#product_"+sequenceId).val();
	var oldVariant=$("#variant_"+sequenceId).val();
	//console.log("Oldvariant id is "+oldVariant);
	var newVariant=null;
	var firstVariant=null;
	
	var size=$("#size_"+sequenceId).text();
	////console.log("SIZE IN CHANGE COLOR "+size);
	var colorList=inventory[productId];
	var colorIndex=0,quantityInCart=0;
	var retailPrice="";
	for(colorIndex=0;colorIndex<colorList.length;colorIndex++){
		var colorVariant=colorList[colorIndex];
		if(colorVariant.colorId==colorId){			
			var sizeList=colorVariant.sizeVariants;
			var sizeHTML='',qtyHTML='';
			var sizeIndex=0,firstSize;		
			var qtyAvailable=0,unitprice=0.0;
			for(sizeIndex=0;sizeIndex<sizeList.length;sizeIndex++){
				var sizeVariant=sizeList[sizeIndex];
				if(sizeIndex==0){
					qtyAvailable=sizeVariant.quantity;
					firstVariant=sizeVariant.productVariantId;
					//console.log("firstVariant is "+firstVariant);
					firstSize=sizeVariant.size;
					unitprice=sizeVariant.salePrice>0.0?sizeVariant.salePrice:sizeVariant.retailPrice;
					retailPrice=sizeVariant.retailPrice;
					if(sizeVariant.salePrice>0.0)
						isSale=true;
					if(sizeVariant.isPreOrder==true)
						isPreOrder=true;
					
				}					
				
				if(parseFloat(sizeVariant.size)==parseFloat(size))
					sizeHTML+='<option value="'+sizeVariant.productVariantId+'" selected="selected">'+sizeVariant.size.replace(".0","")+'</option>';
				else
					sizeHTML+='<option value="'+sizeVariant.productVariantId+'">'+sizeVariant.size.replace(".0","")+'</option>';
				
				if(parseFloat(sizeVariant.size)==parseFloat(size)){
					newVariant=sizeVariant.productVariantId;
					//console.log("matched variant is "+newVariant);
					unitprice=sizeVariant.salePrice>0.0?sizeVariant.salePrice:sizeVariant.retailPrice;
					if(sizeVariant.salePrice>0.0)
						isSale=true;
					if(sizeVariant.isPreOrder==true)
						isPreOrder=true;
					qtyAvailable=sizeVariant.quantity;
					quantityInCart=getQuantityInCart(newVariant);
				}		
			}
			var count=1;
			//if(qtyAvailable<$("#quantity_"+sequenceId).val())
				//$("#quantity_"+sequenceId).val(1);
			
			while(count<=qtyAvailable)
			{
				
				if($("#quantity_"+sequenceId).text()==count)
					qtyHTML+='<option value="'+count+'"  selected="selected">'+count+'</option>';
				else
					qtyHTML+='<option value="'+count+'" >'+count+'</option>';
				count++;
			}
			$("#quantities_"+sequenceId).html(qtyHTML);
		
			$("#sizes_"+sequenceId).html(sizeHTML);
			////console.log("COLOR CHANGE : "+sizeHTML);
			break;
		}
	}
	var totalQty=parseInt(quantityInCart,10)+parseInt($("#quantity_"+sequenceId).text(),10);
	var lineItem=getLineItem(sequenceId);
	if(newVariant==null||totalQty>qtyAvailable){
		if(totalQty>qtyAvailable&&$("li[id^='item_']").length>1)
			{
			removeItem(sequenceId);
			return;
			}
		$("#size_"+sequenceId).text(firstSize.replace('.0',''));
		lineItem.size=firstSize;
		lineItem.productVariantId=firstVariant;
		lineItem.isSale=isSale;
		lineItem.isPreOrder=isPreOrder;
		lineItem.colorName=colorName;
		lineItem.unitPrice=unitprice;
		lineItem.colorId=colorId;
		lineItem.quantity=1;
		lineItem.retailPrice=retailPrice;
		$("#quantity_"+sequenceId).text('1');
		$("#variant_"+sequenceId).val(firstVariant);
		$("#colorId_"+sequenceId).val(colorId);
		$("#sizes_"+sequenceId).val(firstVariant);
		$("#quantities_"+sequenceId).val(1);
	}
	else{
		$("#variant_"+sequenceId).val(newVariant);
		$("#colorId_"+sequenceId).val(colorId);
		//console.log("new variant is "+newVariant)
		lineItem.size=size;
		lineItem.productVariantId=newVariant;
		lineItem.colorId=colorId;
		lineItem.colorName=colorName;
		lineItem.unitPrice=unitprice;
		lineItem.retailPrice=retailPrice;
		if(qtyAvailable<$("#quantity_"+sequenceId).text())
		{
			$("#quantity_"+sequenceId).text('1');
			lineItem.quantity=1;
		}
		else
			lineItem.quantity=$("#quantity_"+sequenceId).text();
		lineItem.isSale=isSale;
		lineItem.isPreOrder=isPreOrder;
		$("#sizes_"+sequenceId).val(newVariant);
		$("#quantities_"+sequenceId).val(lineItem.quantity);
	}
		
		
		//adjustBackgroundPopup();
		$.ajax({url:'/updateLineItem.htm?oldVariantId='+oldVariant,
			dataType:'json',
			cache:false,
			contentType:'application/json',
			type:'POST',
			data:$.toJSON(lineItem),
			success:function(response){
				
				if(response.responseCode<0){
					////console.log("Error while updating Item");
					return;
				}
				checkAvailableShipping='true';
				var index=0,cartItem;
				var cartItems=response.shoppingCart.lineItems;
				var quntity="";
				for(index=0;index<cartItems.length;index++){
					cartItem=cartItems[index];
					if(cartItem.isSale==true && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true')
					{
						if($('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
						{
							var discountPrice = (parseFloat(cartItem.price)-(parseFloat(cartItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2);
							$('#final_savings').show();
							$('#cart_price_'+response.responseCode).html('<strike id="retailPrice_'+response.responseCode+'">$'+(cartItem.retailPrice*cartItem.quantity).toFixed(2)+'</strike> <b class=\"incart_check\" id="price_'+response.responseCode+'">$'+discountPrice+'</b>');
						}
						else if($('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && cartItem.vendorName.toLowerCase()==$('#saleBrandNames').val())
						{
							var discountPrice = (parseFloat(cartItem.price)-(parseFloat(cartItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2);
							$('#final_savings').show();
							$('#cart_price_'+response.responseCode).html('<strike id="retailPrice_'+response.responseCode+'">$'+(cartItem.retailPrice*cartItem.quantity).toFixed(2)+'</strike> <b class=\"incart_check\" id="price_'+response.responseCode+'">$'+discountPrice+'</b>');
						}
						
					}
					else if(cartItem.isSale==true)
					{
						if($("#discountExists").val()=='true'  && $('#discountTypeName').val()=='FF')
							refreshCart();
						$('#final_savings').show();
						$('#cart_price_'+response.responseCode).html('<strike id="retailPrice_'+response.responseCode+'">$'+(cartItem.retailPrice*cartItem.quantity).toFixed(2)+'</strike> <b id="price_'+response.responseCode+'">$'+cartItem.price.toFixed(2)+'</b>');
					}
					else
					{
						if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && cartItem.vendorName.toLowerCase()==$('#saleBrandNames').val())
						{
							var discountPrice = (parseFloat(cartItem.price)-(parseFloat(cartItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2);
							$('#final_savings').show();
							$('#cart_price_'+response.responseCode).html('<strike id="retailPrice_'+response.responseCode+'">$'+(cartItem.retailPrice*cartItem.quantity).toFixed(2)+'</strike> <b class=\"incart_check\" id="price_'+response.responseCode+'">$'+discountPrice+'</b>');
						}
						else
						{
							$('#final_savings').hide();
							$('#cart_price_'+response.responseCode).html('<b id="price_'+response.responseCode+'">$'+cartItem.price.toFixed(2)+'</b>');
						}
					}
					
					if(response.responseCode==cartItem.sequenceId){
						break;
					}		
				}
				
				$('#cartSubtotal').text('$'+(response.shoppingCart.subTotal).toFixed(2));
				$('#shipcartSubtotal').text('$'+(response.shoppingCart.subTotal).toFixed(2));
				
				if(response.shoppingCart.savings!='0.0'){
					$('#savings_label').css("display","block");
					$('#savingAmount').text('-$'+(response.shoppingCart.savings).toFixed(2));
				}
				else{
					$('#savings_label').css("display","none");
				}
				if(response.shoppingCart.savings!='0.0'){
					$('#final_savings').css("display","block");
					$('#final_savingAmount').text('-$'+(response.shoppingCart.savings).toFixed(2));
				}else{
					$('#final_savings').css("display","none");
				}
				
				$("#finalTotal").text(response.shoppingCart.subTotal.toFixed(2));
				$("#final_finalTotal").text(response.shoppingCart.subTotal.toFixed(2));
				
				//It means that the item need to be merged with other item in the cart and the quantity also need to be updated.
				if(response.responseCode!=sequenceId){
					////console.log("Remove the Item and Added Qty : "+cartItem.quantity);
					$("#quantity_"+response.responseCode).text(cartItem.quantity);
					$("#item_"+sequenceId).remove();
					$("#quantities_"+response.responseCode).val(cartItem.quantity);//?????

				}
				$("#price_"+sequenceId).text('$'+cartItem.price.toFixed(2));
				//console.log("line item price is "+cartItem.price.toFixed(2));
				//$("#variant_"+sequenceId).val(newVariant);
				$("#colorId_"+sequenceId).val(colorId);
				if(cartItem.isPreOrder==true)
				{
					$("#preOrder_"+cartItem.sequenceId).removeClass("dn");
				}
				
				if(cartItem.isSale==true)
				{
					$("#sale_"+cartItem.sequenceId).removeClass("dn");
				}
				
				if(cartItem.isSale==true && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true')
				{
					if($('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
					{
						if(window.location.pathname=="/loadConfirmationAfterPaypalAuthorize.htm")
						{
							$("#retailPrice_"+sequenceId).show();
							if(!$('#price_'+sequenceId).hasClass('incart_check'))
							{
								$('#price_'+sequenceId).addClass('incart_check');
							}
						}
						$("#sale_"+sequenceId).text('(Final Sale)');
						$("#price_"+sequenceId).html("$"+(parseFloat(cartItem.price)-(parseFloat(cartItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
						$("#real_price_"+sequenceId).val((parseFloat(cartItem.price)-(parseFloat(cartItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
						//$("#salePrice_"+sequenceId).html("$"+(parseFloat(cartItem.price)));
						$("<input type=\"hidden\" id=\"real_price_"+sequenceId+"\" value=\""+(parseFloat(cartItem.price)-(parseFloat(cartItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2)+"\"/>").insertAfter($("#price_"+sequenceId));
					}
					else if(cartItem.vendorName.toLowerCase()==$('#saleBrandNames').val() && $('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF')
					{
						//$("#sale_"+sequenceId).text('(Final Sale)');
						$("#price_"+sequenceId).html("$"+(parseFloat(cartItem.price)-(parseFloat(cartItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
						$("#real_price_"+sequenceId).val((parseFloat(cartItem.price)-(parseFloat(cartItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
						//$("#salePrice_"+sequenceId).html("$"+(parseFloat(cartItem.price)));
						$("<input type=\"hidden\" id=\"real_price_"+sequenceId+"\" value=\""+(parseFloat(cartItem.price)-(parseFloat(cartItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2)+"\"/>").insertAfter($("#price_"+sequenceId));
					}	
				}
				else if(cartItem.isSale==true && readCookie('Facebook')==null)
				{
					$("#sale_"+sequenceId).text('(Sale)');
					$("#price_"+sequenceId).html("$"+parseFloat(cartItem.price).toFixed(2));
					$("#real_price_"+sequenceId).val(parseFloat(cartItem.price).toFixed(2));
					$("<input type=\"hidden\" id=\"real_price_"+sequenceId+"\" value=\""+parseFloat(cartItem.price).toFixed(2)+"\"/>").insertAfter($("#price_"+sequenceId));
				}
				else
				{
					if($('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
					{
						if(window.location.pathname=="/loadConfirmationAfterPaypalAuthorize.htm")
						{
							$("#retailPrice_"+sequenceId).hide();
							$("#sale_"+sequenceId).hide();
							if($('#price_'+sequenceId).hasClass('incart_check'))
							{
								$('#price_'+sequenceId).removeClass('incart_check');
							}
						}
						$("#price_"+sequenceId).html("$"+parseFloat(cartItem.price).toFixed(2));
						$("#real_price_"+sequenceId).val(parseFloat(cartItem.price).toFixed(2));
						$("<input type=\"hidden\" id=\"real_price_"+sequenceId+"\" value=\""+parseFloat(cartItem.price).toFixed(2)+"\"/>").insertAfter($("#price_"+sequenceId));
					}
					else if(cartItem.vendorName.toLowerCase()==$('#saleBrandNames').val() && $('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF')
					{
						$("#price_"+sequenceId).html("$"+(parseFloat(cartItem.price)-(parseFloat(cartItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
						$("#real_price_"+sequenceId).val((parseFloat(cartItem.price)-(parseFloat(cartItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
						//$("#salePrice_"+sequenceId).html("$"+(parseFloat(cartItem.price)));
						$("<input type=\"hidden\" id=\"real_price_"+sequenceId+"\" value=\""+(parseFloat(cartItem.price)-(parseFloat(cartItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2)+"\"/>").insertAfter($("#price_"+sequenceId));
					}
				}
					
				/*
				$("#ship_SubTotal").html('Subtotal: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#ship_Total").html('Total: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#selectedSubTotal").html('Subtotal: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#cusSubTotal").html('Subtotal: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#payment_SubTotal").html('Subtotal: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#payment_Total").html('Total: $'+response.shoppingCart.subTotal.toFixed(2));
				$('#color_'+sequenceId).val($(element).text());
				*/
				
				
				if((location.pathname.indexOf('/complete-purchase.htm')>0) || location.pathname.indexOf('loadConfirmationAfterPaypalAuthorize.htm')>0)
					updateShippingServices();
				
				
				if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true')
					{
					//handleFBSale();
					}
				
				if((location.pathname.indexOf('checkout/account-info.htm')>0) || location.pathname.indexOf('checkout/sign-in.htm')>0 || location.pathname.indexOf('loadConfirmationAfterPaypalAuthorize.htm')>0){
					$("#backgroundPopup").hide();
					$(".loading_page").hide();
				}
				
				
				if(((readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook') || (window.location.pathname == '/loadConfirmationAfterPaypalAuthorize.htm')) && $("#discountExists").val()=='true')
				{
					savingsForDiscountProgram();
				}
				else
				{
					$("#finalTotal").text('$'+response.shoppingCart.subTotal.toFixed(2));
				}
			}
		});
}


function onSizeChange(element,sequenceId)
{
/*	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("onSizeChange(document.getElementById('"+element.id+"'),"+sequenceId+")");
	}
*/	
	$("#message_"+sequenceId).hide();
	if(parseFloat($(element).text())==parseFloat($('#size_'+sequenceId).text()))
		return;
	
	var unitPrice=0.0;
	var sizeExists=false;
	var qtyHtml='';
	var sizeVariants;
	var isSale=false;
	var isPreOrder=false;
	var oldQty=$("#quantity_"+sequenceId).text();
	
	var lineItem=getLineItem(sequenceId);
	var quantityInCart=getQuantityInCart($(element).val());
	lineItem.productVariantId=$(element).val();
	//console.log("pv id is "+element.id);
	lineItem.size=parseFloat($(element).text());
	var productId=lineItem.productId;
	var quantityAvl=0;
	var colorId=$('#colorId_'+sequenceId).val();
	var oldVariantId=$('#variant_'+sequenceId).val();
	var colorList=inventory[productId];
	//alert(colorList);
	var colorIndex=0;
	var variantIndex=0;
	var proceed=false;
	for(colorIndex=0;colorIndex<colorList.length;colorIndex++)
	{
		if(colorList[colorIndex].colorId==colorId)
		{
			sizeVariants=colorList[colorIndex].sizeVariants;
		}
	}
	for(variantIndex=0;variantIndex<sizeVariants.length;variantIndex++)
	{
		if(sizeVariants[variantIndex].productVariantId==parseFloat($(element).val()))
		{
			sizeExists=true;
			quantityAvl=sizeVariants[variantIndex].quantity;
			if(quantityAvl<(parseInt(quantityInCart,10)+1)&&$("li[id^='item_']").length>1)
			{
				removeItem(sequenceId);
				return;
			}
			$("#quantity_"+sequenceId).text('1');
			$("#quantities_"+sequenceId).val(1);
			lineItem.quantity=1;
			unitPrice=sizeVariants[variantIndex].salePrice>0.0?sizeVariants[variantIndex].salePrice:sizeVariants[variantIndex].retailPrice;
			lineItem.unitPrice=unitPrice;
			if(sizeVariants[variantIndex].salePrice>0.0)
				isSale=true;
			if(sizeVariants[variantIndex].isPreOrder==true)
				isPreOrder=true;
			lineItem.isSale=isSale;
			lineItem.isPreOrder=isPreOrder;
			lineItem.retailPrice=sizeVariants[variantIndex].retailPrice;
			var count=1;
			while(count<=quantityAvl)
			{		
				qtyHtml+='<option value="'+count+'" >'+count+'</option>';
				count++;
			}
			$("#quantities_"+sequenceId).html(qtyHtml);
			break;
		}
		
	}
	if(sizeExists==true)
	{
		//$("#message_"+sequenceId).hide();
		//$("#item_"+sequenceId).find("div.checkout_error").hide();
		$(".loading_page").show();
		$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
		$.ajax({url:'/updateLineItem.htm?oldVariantId='+oldVariantId,
			dataType:'json',
			cache:false,
			contentType:'application/json',
			type:'post',
			data:$.toJSON(lineItem),
			success:function(data)
			{
				
				
				if(data.responseCode>0)
				{
					//$("#message_"+sequenceId).hide();
					$('#variant_'+sequenceId).val($(element).val());
					var cartItems=data.shoppingCart.lineItems;
					var quntity="";
					var lineIndex=0;
					for(lineIndex=0;lineIndex<cartItems.length;lineIndex++)
					{
						if(sequenceId==cartItems[lineIndex].sequenceId)
						{
							if(lineItem.isPreOrder==true)
							{
								$("#preOrder_"+lineItem.sequenceId).removeClass("dn");
							}
							if(lineItem.isSale==true)
							{
								quntity=lineItem.quantity;
								$("#sale_"+lineItem.sequenceId).removeClass("dn");
								$("#retailPrice_"+sequenceId).text('$'+(cartItems[lineIndex].retailPrice.toFixed(2)*quntity).toFixed(2));
								if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true' && $('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
								{
									$("#price_"+sequenceId).text('$'+(parseFloat(cartItems[lineIndex].price)-(parseFloat(cartItems[lineIndex].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
									$("#real_price_"+sequenceId).val((parseFloat(cartItems[lineIndex].price)-(parseFloat(cartItems[lineIndex].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
									$("#sale_"+lineItem.sequenceId).text("(Final Sale)");
									//$("#salePrice_"+sequenceId).text('$'+(parseFloat(cartItems[lineIndex].price)));
								}
								else if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true'  && $('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && cartItems[lineIndex].vendorName.toLowerCase()==$('#saleBrandNames').val())
								{
									$("#price_"+sequenceId).text('$'+(parseFloat(cartItems[lineIndex].price)-(parseFloat(cartItems[lineIndex].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
									$("#real_price_"+sequenceId).val((parseFloat(cartItems[lineIndex].price)-(parseFloat(cartItems[lineIndex].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
									//$("#sale_"+lineItem.sequenceId).text("(Final Sale)");
									//$("#salePrice_"+sequenceId).text('$'+(parseFloat(cartItems[lineIndex].price)));
								}
								else
								{
									if($("#discountExists").val()=='true'  && $('#discountTypeName').val()=='FF')
										refreshCart();
									
									$("#sale_"+lineItem.sequenceId).text("(Sale)");
									$("#price_"+sequenceId).text('$'+cartItems[lineIndex].price.toFixed(2));
								}
								//$("#price_"+lineItem.sequenceId).css({'color':'red'});
							}
							else
							{
								if($('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && cartItems[lineIndex].vendorName.toLowerCase()==$('#saleBrandNames').val())
								{
									$("#price_"+sequenceId).text('$'+(parseFloat(cartItems[lineIndex].price)-(parseFloat(cartItems[lineIndex].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
									$("#real_price_"+sequenceId).val((parseFloat(cartItems[lineIndex].price)-(parseFloat(cartItems[lineIndex].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
								//	$("#sale_"+lineItem.sequenceId).text("(Final Sale)");
								}
								else
									$("#price_"+sequenceId).text('$'+cartItems[lineIndex].price.toFixed(2));
							}
							//$("#price_"+sequenceId).text('$'+cartItems[lineIndex].price.toFixed(2));
							$("#size_"+sequenceId).text(cartItems[lineIndex].size);
							break;
						}
						if(data.responseCode!=sequenceId){
							//console.log("Remove the Item and Added Qty : "+cartItem.quantity);
							$("#quantity_"+data.responseCode).text(cartItems[lineIndex].quantity);
							
							
							$("#price_"+data.responseCode).text('$'+cartItems[lineIndex].price.toFixed(2));
							$("#real_price_"+data.responseCode).val((parseFloat(cartItems[lineIndex].price)-(parseFloat(cartItems[lineIndex].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
							$("#item_"+sequenceId).remove();
							$("#quantities_"+data.responseCode).val(cartItems[lineIndex].quantity);//?????
							$("#retailPrice_"+data.responseCode).text('$'+(cartItems[lineIndex].retailPrice.toFixed(2)*parseInt(quntity)).toFixed(2));
							
							
							
							if(cartItems[lineIndex].isSale==true && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true' && $('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF'){
								$("#price_"+data.responseCode).text('$'+(parseFloat(cartItems[lineIndex].price)-(parseFloat(cartItems[lineIndex].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
								$("#real_price_"+data.responseCode).val((parseFloat(cartItems[lineIndex].price)-(parseFloat(cartItems[lineIndex].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
								$("#sale_"+data.responseCode).text("(Final Sale)");
								$("#retailPrice_"+data.responseCode).text('$'+(parseFloat(cartItems[lineIndex].retailPrice)*parseInt(cartItems[lineIndex].quantity)).toFixed(2));
								
								//$("#salePrice_"+sequenceId).text('$'+(parseFloat(cartItems[lineIndex].price)));
							}
							else if(cartItems[lineIndex].isSale==true && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && cartItems[lineIndex].vendorName.toLowerCase()==$('#saleBrandNames').val()){
								$("#price_"+data.responseCode).text('$'+(parseFloat(cartItems[lineIndex].price)-(parseFloat(cartItems[lineIndex].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
								$("#real_price_"+data.responseCode).val((parseFloat(cartItems[lineIndex].price)-(parseFloat(cartItems[lineIndex].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
								//$("#sale_"+data.responseCode).text("(Final Sale)");
								$("#retailPrice_"+data.responseCode).text('$'+(parseFloat(cartItems[lineIndex].retailPrice)*parseInt(cartItems[lineIndex].quantity)).toFixed(2));
								
								//$("#salePrice_"+sequenceId).text('$'+(parseFloat(cartItems[lineIndex].price)));
							}
							
						}
					}
					
					$('#cartSubtotal').text('$'+(data.shoppingCart.subTotal).toFixed(2));
					$('#shipcartSubtotal').text('$'+(data.shoppingCart.subTotal).toFixed(2));
					$("#finalTotal").text(data.shoppingCart.subTotal.toFixed(2));
					$("#final_finalTotal").text(data.shoppingCart.subTotal.toFixed(2));
					
					if(data.shoppingCart.savings!='0.0'){
						$('#savings_label').css("display","block");
						$('#savingAmount').text('-$'+(data.shoppingCart.savings).toFixed(2));
					}
					else{
						$('#savings_label').css("display","none");
					}
					if(data.shoppingCart.savings!='0.0'){
						$('#final_savings').css("display","block");
						$('#final_savingAmount').text('-$'+(data.shoppingCart.savings).toFixed(2));
					}
					else
					{
						$('#final_savings').css("display","none");
					}
					/*
					$("#ship_SubTotal").html('Subtotal: $'+data.shoppingCart.subTotal.toFixed(2));
					$("#ship_Total").html('Total: $'+data.shoppingCart.subTotal.toFixed(2));
					$("#selectedSubTotal").html('Subtotal: $'+data.shoppingCart.subTotal.toFixed(2));
					$("#cusSubTotal").html('Subtotal: $'+data.shoppingCart.subTotal.toFixed(2));
					$("#payment_SubTotal").html('Subtotal: $'+data.shoppingCart.subTotal.toFixed(2));
					$("#payment_Total").html('Total: $'+data.shoppingCart.subTotal.toFixed(2));
					*/
					
					if((location.pathname.indexOf('/complete-purchase.htm')>0) || location.pathname.indexOf('loadConfirmationAfterPaypalAuthorize.htm')>0)
						updateShippingServices();
					
				}
				if(((readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook') || (window.location.pathname == '/loadConfirmationAfterPaypalAuthorize.htm')) && $("#discountExists").val()=='true')
					{
					//handleFBSale();
					}
				if((location.pathname.indexOf('checkout/account-info.htm')>0) || (location.pathname.indexOf('checkout/sign-in.htm')>0) || (location.pathname.indexOf('loadConfirmationAfterPaypalAuthorize.htm')>0)){
					$("#backgroundPopup").hide();
					$(".loading_page").hide();
				}
				
				//Added for sale by m5k
				if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true')
				{
					savingsForDiscountProgram();
				}
				else
				{
					$("#finalTotal").text('$'+data.shoppingCart.subTotal.toFixed(2));
				}
				
			}
		
			});
	}
	else
	{
		$("#quantity_"+sequenceId).text(oldQty);
		$("#quantities_"+sequenceId).val(oldQty);
		$(".loading_page").css('display','none');
		//$('#size_'+sequenceId).val(oldSize);
		//$("#message_"+sequenceId).show();
		//$("#item_"+sequenceId).find("div.checkout_error").show();
		//console.log("Inventory NOT AVAILABLE");
	}
}

function onQuantityChange(element,sequenceId)
{
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("onQuantityChange(document.getElementById('"+$(element).val()+"'),"+sequenceId+")");
	}
	$("#message_"+sequenceId).hide();
	var oldQuantity=$("#quantity_"+sequenceId).text();
	var newQuantity=$(element).val();
	var myVariantId=$("#variant_"+sequenceId).val();
	if(oldQuantity==newQuantity)
		return;
	$(".loading_page").show();
	$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
	$.ajax({url:'/updateQuantity.htm',
		dataType:'json',
		cache:false,
		data:{variantId:myVariantId,quantity:newQuantity},
		success:function(response){
			
			
			if(response.responseCode>0){
				////console.log('success in updating quantity');
				var index=0;
				var carItems=response.shoppingCart.lineItems;
				
				var quntity="";
				for(index=0;index<carItems.length;index++){
					if(carItems[index].sequenceId==sequenceId){
						
						if(carItems[index].isSale==true)
						{
							$("#sale_"+carItems[index].sequenceId).removeClass("dn");
							$('#cart_price_'+sequenceId).html('<strike id="retailPrice_'+sequenceId+'">$'+(carItems[index].retailPrice*carItems[index].quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+carItems[index].price.toFixed(2)+'</b>');
							$('#price_'+sequenceId).text('$'+carItems[index].price.toFixed(2));
							$("#retailPrice_"+sequenceId).text('$'+(carItems[index].retailPrice*carItems[index].quantity).toFixed(2));
						}
						else
						{
							$('#cart_price_'+sequenceId).html('<b id="price_'+sequenceId+'">$'+carItems[index].price.toFixed(2)+'</b>');
							$('#price_'+sequenceId).text('$'+carItems[index].price.toFixed(2));
						}
						if(carItems[index].isSale==true && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true')
						{
							if($('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
							{
								quntity=carItems[index].quantity;
								$("#sale_"+sequenceId).text('(Final Sale)');
								$('#cart_price_'+sequenceId).html('<strike id="retailPrice_'+sequenceId+'">$'+(carItems[index].retailPrice*carItems[index].quantity).toFixed(2)+'</strike> <b class=\"incart_check\" id="price_'+sequenceId+'">$'+carItems[index].price.toFixed(2)+'</b>');
								$("#price_"+sequenceId).text('$'+(parseFloat(carItems[index].price)-(parseFloat(carItems[index].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
								$("#real_price_"+sequenceId).val((parseFloat(carItems[index].price)-(parseFloat(carItems[index].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
								$("#retailPrice_"+sequenceId).text('$'+(carItems[index].retailPrice.toFixed(2)*quntity).toFixed(2));
								//$("#salePrice_"+sequenceId).text('$'+parseFloat(carItems[index].price.toFixed(2)));
							}
							else if($('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && carItems[index].vendorName.toLowerCase()==$('#saleBrandNames').val())
							{
								quntity=carItems[index].quantity;
								//$("#sale_"+sequenceId).text('(Final Sale)');
								$('#cart_price_'+sequenceId).html('<strike id="retailPrice_'+sequenceId+'">$'+(carItems[index].retailPrice*carItems[index].quantity).toFixed(2)+'</strike> <b class=\"incart_check\" id="price_'+sequenceId+'">$'+carItems[index].price.toFixed(2)+'</b>');
								$("#price_"+sequenceId).text('$'+(parseFloat(carItems[index].price)-(parseFloat(carItems[index].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
								$("#real_price_"+sequenceId).val((parseFloat(carItems[index].price)-(parseFloat(carItems[index].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
								$("#retailPrice_"+sequenceId).text('$'+(carItems[index].retailPrice.toFixed(2)*quntity).toFixed(2));
								//$("#salePrice_"+sequenceId).text('$'+parseFloat(carItems[index].price.toFixed(2)));
							}
								
							
						}
						else if(carItems[index].isSale==true)
						{
							if($("#discountExists").val()=='true'  && $('#discountTypeName').val()=='FF')
								refreshCart();
							quntity=carItems[index].quantity;
							$("#sale_"+sequenceId).text('(Sale)');
							$("#price_"+sequenceId).text('$'+carItems[index].price.toFixed(2));
							$("#real_price_"+sequenceId).val(parseFloat(carItems[index].price.toFixed(2)));
							$("#retailPrice_"+sequenceId).text('$'+(carItems[index].retailPrice.toFixed(2)*quntity).toFixed(2));
							
						}
						else
						{
							if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
							{
								$("#price_"+sequenceId).text('$'+carItems[index].price.toFixed(2));
								$("#real_price_"+sequenceId).val(parseFloat(carItems[index].price.toFixed(2)));
							}
							else if($('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && carItems[index].vendorName.toLowerCase()==$('#saleBrandNames').val())
							{
								quntity=carItems[index].quantity;
								//$("#sale_"+sequenceId).text('(Final Sale)');
								$('#cart_price_'+sequenceId).html('<strike id="retailPrice_'+sequenceId+'">$'+(carItems[index].retailPrice*carItems[index].quantity).toFixed(2)+'</strike> <b class=\"incart_check\" id="price_'+sequenceId+'">$'+carItems[index].price.toFixed(2)+'</b>');
								$("#price_"+sequenceId).text('$'+(parseFloat(carItems[index].price)-(parseFloat(carItems[index].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
								$("#real_price_"+sequenceId).val((parseFloat(carItems[index].price)-(parseFloat(carItems[index].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
								$("#retailPrice_"+sequenceId).text('$'+(carItems[index].retailPrice.toFixed(2)*quntity).toFixed(2));
								//$("#salePrice_"+sequenceId).text('$'+parseFloat(carItems[index].price.toFixed(2)));
							}
						}
						if(carItems[index].vendorName=='Solestruck Magazine' && $("#shippinginfo_country").text()=='USA'){
							$("#sale_"+carItems[index].sequenceId).removeClass("dn");
							$('#cart_price_'+sequenceId).html('<strike id="retailPrice_'+sequenceId+'">$'+(10*carItems[index].quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+(5*carItems[index].quantity).toFixed(2)+'</b>');
						}
						
						
						break;
					}	
				}

				$('#cartSubtotal').text('$'+(response.shoppingCart.subTotal).toFixed(2));
				$('#shipcartSubtotal').text('$'+(response.shoppingCart.subTotal).toFixed(2));
				$("#final_finalTotal").text(response.shoppingCart.subTotal.toFixed(2));
				
				if(response.shoppingCart.savings!='0.0'){
					$('#savings_label').css("display","block");
					$('#savingAmount').text('-$'+(response.shoppingCart.savings).toFixed(2));
				}
				else{
					$('#savings_label').css("display","none");
				}
				if(response.shoppingCart.savings!='0.0'){
					$('#final_savings').css("display","block");
					$('#final_savingAmount').text('-$'+(response.shoppingCart.savings).toFixed(2));
				}else{
					$('#final_savings').css("display","none");
				}
				
				
				$("#quantity_"+sequenceId).text(newQuantity);
				
				if((location.pathname.indexOf('/complete-purchase.htm')>0) || (location.pathname.indexOf('loadConfirmationAfterPaypalAuthorize.htm')>0))
				updateShippingServices();
			}
			else{
				$("#quantity_"+sequenceId).text(oldQuantity);
				$("#quantities_"+sequenceId).val(oldQuantity);
			}
			if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true')
				{
				//handleFBSale();	
				}
			if((location.pathname.indexOf('checkout/account-info.htm')>0) || location.pathname.indexOf('checkout/sign-in.htm')>0 || location.pathname.indexOf('loadConfirmationAfterPaypalAuthorize.htm')>0){
				$("#backgroundPopup").hide();
				$(".loading_page").hide();
			}
			
			
			//Added for sale by m5k
			if(((readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook') || (window.location.pathname == '/loadConfirmationAfterPaypalAuthorize.htm')) && $("#discountExists").val()=='true')
			{
				savingsForDiscountProgram();
			}
			else
			{
				$("#finalTotal").text('$'+response.shoppingCart.subTotal.toFixed(2));
			}
		}
	});
} 

function setSolestruck_magzine(sequenceId,lineItem)
{
	var oldVariant=$("#variant_"+sequenceId).val();
	
	$.ajax({url:'/updateLineItem.htm?oldVariantId='+oldVariant,
	dataType:'json',
	cache:false,
	contentType:'application/json',
	type:'post',
	data:$.toJSON(lineItem),
	success:function(data)
	{
		if(data.responseCode>0)
		{
			var cartItems=data.shoppingCart.lineItems;
			var quntity="";
			var lineIndex=0;
			for(lineIndex=0;lineIndex<cartItems.length;lineIndex++)
			{
				if(sequenceId==cartItems[lineIndex].sequenceId)
				{
					//console.log(" price "+cartItems[lineIndex].price);
					$('#cart_price_'+sequenceId).html('<b id="price_'+sequenceId+'">$'+(cartItems[lineIndex].price).toFixed(2)+'</b>');
				}
			}
			
			$('#cartSubtotal').text('$'+(data.shoppingCart.subTotal).toFixed(2));
			$('#shipcartSubtotal').text('$'+(data.shoppingCart.subTotal).toFixed(2));
			$("#finalTotal").text(data.shoppingCart.subTotal.toFixed(2));
			$("#final_finalTotal").text(data.shoppingCart.subTotal.toFixed(2));
			
			if(data.shoppingCart.savings!='0.0'){
				$('#savings_label').css("display","block");
				$('#savingAmount').text('-$'+(data.shoppingCart.savings).toFixed(2));
			}
			else{
				$('#savings_label').css("display","none");
			}
			if(data.shoppingCart.savings!='0.0'){
				$('#final_savings').css("display","block");
				$('#final_savingAmount').text('-$'+(data.shoppingCart.savings).toFixed(2));
			}
			else
			{
				$('#final_savings').css("display","none");
			}
			
			if((location.pathname.indexOf('/complete-purchase.htm')>0) || location.pathname.indexOf('loadConfirmationAfterPaypalAuthorize.htm')>0 )
				updateShippingServices();
			
		}
		if((location.pathname.indexOf('checkout/account-info.htm')>0) || location.pathname.indexOf('checkout/sign-in.htm')>0 ){
			$("#backgroundPopup").hide();
			$(".loading_page").hide();
		}
		
	}
	
	});
		

}

function getInventoryForCart()
{
	$.ajax({url:'/getInventroyForCart.htm',
			dataType:'json',
			cache:false,
			success:function(data)
			{
				if(data!="" && data!=null)
				{
					inventory=data;
				}
				else
				{
					window.location='/redirectToNonSecurePage.htm?rdirectURL=/';
				}
				
			}
		});
}

function populateCompleteCart(lineItems)
{
	var index=0;
	for(index=0;index<lineItems.length;index++)
	{
		var lineItem=lineItems[index];
		var colorList=inventory[lineItem.productId];
		populateColorAndSizesForProduct(colorList,lineItem);
		$('#quantity_'+lineItem.sequenceId).text(lineItem.quantity);		
	}
	$("#no_items_msg").hide();
	showShoppingCart();
}

function populateColorAndSizesForProduct(colorList,lineItem)
{
	var sizeHTML='';
	var qtyHTML='';
	var myHTML='<li id="item_'+lineItem.sequenceId+'">'
	myHTML+='<div class="checkout_error" id="message_'+lineItem.sequenceId+'"><h4>Oh-no! The last pair were just taken.</h4>';
	myHTML+='<p>Let us <u>Email You</u> when we get more in.</p></div>';
	myHTML+='<div class="checkout_shoppingcart_col1"><div class="checkout_shoppingcart_shoes">';
	myHTML+='<a><img id="image_'+lineItem.sequenceId+'" width="80" height="60" src="'+getImageUrl(lineItem.vendorName,lineItem.productName,lineItem.colorName)+'"></a></div>';
	//if(lineItem.isPreOrder==true)
		//myHTML+='<h3 id="vendorName_'+lineItem.sequenceId+'">'+lineItem.vendorName+'<span id="productName_'+lineItem.sequenceId+'">'+lineItem.productName+' (Pre-Order)</span></h3>';
	//else
	myHTML+='<h3 id="vendorName_'+lineItem.sequenceId+'">'+lineItem.vendorName+'<span id="productName_'+lineItem.sequenceId+'"><b>'+lineItem.productName+'</b></span></h3>';
	myHTML+='<input type="hidden" name="product" id="product_'+lineItem.sequenceId+'" value="'+lineItem.productId+'"/>';
	myHTML+='<input type="hidden" name="variant" id="variant_'+lineItem.sequenceId+'" value="'+lineItem.productVariantId+'"/>';
	myHTML+='<input type="hidden" name="colorId" id="colorId_'+lineItem.sequenceId+'" value="'+lineItem.colorId+'"/>';
	myHTML+='<div class="cart_shoe_details">';
	myHTML+='<div class="size_color_labels"><label><b>Size:</b></label><label class="color"><b>Color:</b></label><label><b>Qty:</b></label></div>';
	
	var colorHTML='';
	if(!isMobileDevice())
	{
		colorHTML+='<div class="custom_dropdown color_select_popup">';// color_select_popup
		colorHTML+='<input type="text" readonly="readonly" value="'+lineItem.colorName+'" class="select_fields" id="color_'+lineItem.sequenceId+'" name="color">';
		colorHTML+='<span class="custom_drop_nav"></span>';
		colorHTML+='<ul style="display: none;" id="colors_'+lineItem.sequenceId+'">';
	}
	else
	{
		colorHTML+='<input type="hidden" readonly="readonly" value="'+lineItem.colorName+'" class="select_fields" id="color_'+lineItem.sequenceId+'" name="color">';
		colorHTML+='<select onchange="onColorChange(this.options[this.selectedIndex],'+lineItem.sequenceId+')" id="colors_'+lineItem.sequenceId+'">';	
	}
	var colorIndex=0;
	for(colorIndex=0;colorIndex<colorList.length;colorIndex++){
		var color=colorList[colorIndex];
		if(!isMobileDevice()){
			colorHTML+='<li id="'+color.colorId+'" name="'+color.colorName+'"  onclick="onColorChange(this,'+lineItem.sequenceId+')">'+color.colorName.toUpperCase()+'</li>';
		}
		else{
			if(lineItem.colorName==color.colorName)
				colorHTML+='<option id="'+color.colorId+'" name="'+color.colorName+'" selected="selected">'+color.colorName.toUpperCase()+'</option>';
			else
				colorHTML+='<option id="'+color.colorId+'" name="'+color.colorName+'">'+color.colorName.toUpperCase()+'</option>';
		}
		if(color.colorId==lineItem.colorId)
		{
			var sizeList=color.sizeVariants;
			sizeHTML='';
			if(!isMobileDevice()){
				sizeHTML+='<div class="custom_dropdown">';
				sizeHTML+='<input type="text" readonly="readonly" value="'+lineItem.size.replace(".0","")+'" class="select_fields" id="size_'+lineItem.sequenceId+'"  name="size">';
				sizeHTML+='<span class="custom_drop_nav"></span>';
				sizeHTML+='<ul style="display: none; height: 100px; overflow: auto;" id="sizes_'+lineItem.sequenceId+'">';
				qtyHTML='<div class="custom_dropdown">';
				qtyHTML+='<input type="text" readonly="readonly" value="1" class="select_fields" id="quantity_'+lineItem.sequenceId+'"  name="quantity">';
				qtyHTML+='<span class="custom_drop_nav"></span><ul style="display: none;" id="quantities_'+lineItem.sequenceId+'">';				
			}
			else{
				sizeHTML+='<input type="hidden" readonly="readonly" value="'+lineItem.size+'" class="select_fields" id="size_'+lineItem.sequenceId+'"  name="size">';
				sizeHTML+='<select onchange="onSizeChange(this.options[this.selectedIndex],'+lineItem.sequenceId+')" id="sizes_'+lineItem.sequenceId+'">';
				qtyHTML+='<input type="hidden" readonly="readonly" value="1" class="select_fields" id="quantity_'+lineItem.sequenceId+'"  name="quantity">';
				qtyHTML+='<select onchange="onQuantityChange(this.options[this.selectedIndex],'+lineItem.sequenceId+')" id="quantities_'+lineItem.sequenceId+'">';				
			}
			var sizeIndex=0;

			for(sizeIndex=0;sizeIndex<sizeList.length;sizeIndex++){
				var sizeVariant=sizeList[sizeIndex];
				//sizeHTML+='<li id="'+sizeVariant.productVariantId+'"  onclick="onSizeChange(this'+lineItem.sequenceId+')">'+sizeVariant.size+'</li>';
				if(!isMobileDevice()){
					sizeHTML+='<li id="'+sizeVariant.productVariantId+'"  onclick="onSizeChange(this,'+lineItem.sequenceId+')">'+sizeVariant.size.replace(".0","")+'</li>';
				}
				else{
					if(parseFloat(lineItem.size)==sizeVariant.size)
						sizeHTML+='<option id="'+sizeVariant.productVariantId+'" selected="selected">'+sizeVariant.size.replace(".0","")+'</option>';
					else
						sizeHTML+='<option id="'+sizeVariant.productVariantId+'">'+sizeVariant.size.replace(".0","")+'</option>';

				}
				
				if(sizeVariant.productVariantId==lineItem.productVariantId){
					var count=1;
					while(count<=sizeVariant.quantity){
						if(!isMobileDevice()){
							qtyHTML+='<li id="'+count+'"  onclick="onQuantityChange(this,'+lineItem.sequenceId+')">'+count+'</li>';
						}
						else{
							if(lineItem.quantity==count)
								qtyHTML+='<option id="'+count+'" value="'+count+'"  selected="selected">'+count+'</option>';
							else
								qtyHTML+='<option id="'+count+'" value="'+count+'" >'+count+'</option>';

						}
						count++;
					}			
				}
				
			}//End of Size loop

			if(!isMobileDevice()){
				sizeHTML+='</ul></div>';
				qtyHTML+='</ul></div>';			
			}
			else{
				sizeHTML+='</select>';
				qtyHTML+='</select>';			

			}		
			//break;
		}
	}//End of colour loop

	if(!isMobileDevice()){
		colorHTML+='</ul></div>';
	}
	else{
		colorHTML+='</select>';
	}
	myHTML+=sizeHTML;
	myHTML+=colorHTML;
	myHTML+=qtyHTML;
	myHTML+='</div></div> <div class="checkout_shoppingcart_col2">';
	myHTML+='<div class="checkout_remove_shoes remove_shoe_act" onclick="removeItem('+lineItem.sequenceId+');"></div>';
	myHTML+='<div class="clear_both"></div>'
	myHTML+='<b id="preOrder_'+lineItem.sequenceId+'" class="dn">Pre-Order</b><b id="sale_'+lineItem.sequenceId+'" class="dn">Sale</b>';
	if(lineItem.isSale==true && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true')
		{
			if($('#discountTypeName').val()!='Brands' && $('#discountTypeName').val()=='FF')
			{
				var flag_Single = lineItem.price/lineItem.quantity;
				//console.log("lineItem price duplicate is :: "+lineItem.price);
				var DiscountedSalePrice = ((flag_Single).toFixed(2))-((flag_Single).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
				//console.log('DiscountedSalePrice ---> is '+DiscountedSalePrice);
				myHTML+='<span class="shpping_cart_price" id="price_'+lineItem.sequenceId+'">$'+(parseFloat(lineItem.price)-(parseFloat(lineItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2)+'</span></div>';
				myHTML+="<input type=\"hidden\" id=\"real_price_"+lineItem.sequenceId+"\" val=\""+(parseFloat(lineItem.price)-(parseFloat(lineItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2)+"\"/>";
			}
			else if($('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && lineItem.vendorName==$('#saleBrandNames').val())
			{
				myHTML+='<span class="shpping_cart_price" id="price_'+lineItem.sequenceId+'">$'+DiscountedSalePrice+'</span></div>';
				myHTML+="<input type=\"hidden\" id=\"real_price_"+lineItem.sequenceId+"\" val=\""+DiscountedSalePrice+"\"/>";
			}
		}
	else
		{
			if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && lineItem.vendorName==$('#saleBrandNames').val())
			{
				
				//myHTML+='<strike id="strike_retailPrice_'+lineItem.sequenceId+'">$'+(lineItem.retailPrice*lineItem.quantity).toFixed(2)+'</strike> <b id="price_'+lineItem.sequenceId+'">$'+lineItem.price.toFixed(2)+'</b>';
				var flag_Single = lineItem.price/lineItem.quantity;
				//console.log("lineItem price duplicate is :: "+lineItem.price);
				var DiscountedSalePrice = ((flag_Single).toFixed(2))-((flag_Single).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
				//console.log('DiscountedSalePrice ---> is '+DiscountedSalePrice);
			
				myHTML+='<strike id="strike_retailPrice_'+lineItem.sequenceId+'">$'+(lineItem.retailPrice*lineItem.quantity).toFixed(2)+'</strike> <b id="price_'+lineItem.sequenceId+'">$'+(DiscountedSalePrice*lineItem.quantity).toFixed(2)+'</b>';
			}
			else
			{
				//console.log("isnide the non sale item block");
				myHTML+='<span class="shpping_cart_price" id="price_'+lineItem.sequenceId+'">$'+parseFloat(lineItem.price).toFixed(2)+'</span></div>';
				myHTML+="<input type=\"hidden\" id=\"real_price_"+lineItem.sequenceId+"\" val=\""+parseFloat(lineItem.price).toFixed(2)+"\"/>";
			}
		}
	
	myHTML+='<div class="clear_both"></div></li>';
	$("#cartItems").append(myHTML);
	if(lineItem.isPreOrder==true)
	{
		$("#preOrder_"+lineItem.sequenceId).removeClass("dn");
	}
	if(lineItem.isSale==true)
	{
		$("#sale_"+lineItem.sequenceId).removeClass("dn");
	}
}


function populateSizesForColor(productId,colorId)
{
	var colorList=inventory[productId];
	if(colorList==undefined)
		return;
	$(colorList).each(function(index,color){
		if(color.colorId==colorId)
		{
			var sizeList=color.sizeVariants;
			$(sizeList).each(function(index,sizeVariant){
				//sizeVariant.size,colorVariant.quantity,sizeVariant.retailPrice;
				return false;
			});
			return false;
		}
	});
}

function showShoppingCart()
{
	$('.cart_popup').fadeIn();
}

function getLineItem(sequenceId)
{
	var lineItem=new Object();
	lineItem.productId=$('#product_'+sequenceId).val();
	lineItem.productVariantId=$("#variant_"+sequenceId).val();
	lineItem.colorName=$('#colors_'+sequenceId+' option:selected').attr('name');
	lineItem.size=$('#size_'+sequenceId).text();
	lineItem.quantity=$('#quantity_'+sequenceId).text();
	lineItem.productName=$('#productName_'+sequenceId).attr('name');
	var vendorName=$('#vendorName_'+sequenceId).attr('name').split(lineItem.productName);
	lineItem.vendorName=$.trim(vendorName[0]);
	lineItem.colorId=$('#colorId_'+sequenceId).val();
	//lineItem.retailPrice=$('#real_price_'+sequenceId).val();
	lineItem.sequenceId=sequenceId;
	
	return lineItem;
}

function getImageUrl(vendorName,productName,colorName)
{
	vendorName=vendorName==null?'':$.trim(vendorName);
	colorName=colorName==null?'':$.trim(colorName);
	productName=productName==null?'':$.trim(productName);
	var imageUrl=imageServer+"/"+vendorName.replace(/ /g,"-").toLowerCase()+"-shoes/"+vendorName.replace(/ /g,"-")+"-shoes-"+productName.replace(/ /g,"-")+"-"+"("+colorName.replace(/ /g,"-")+")-010307.jpg";
	
	return imageUrl;
}

function getQuantityInCart(productVariantId)
{
	var liObjects=$('input[name="variant"]');
	var sequenceId;
	var quantity=0;
	for(index=0;index<liObjects.length;index++)
	{
		var obj=liObjects[index];
		if(obj.value==productVariantId)
		{
			var ids=obj.id.split("_");
			var sequenceId=ids[1];
			quantity=$('#quantity_'+sequenceId).text();
			break;
		}
	}
	return quantity;
}

function addItem(lineItem)
{
	var inventoryDetail=0;
	if(inventory[lineItem.productId]==undefined)
		inventoryDetail=1;
	//console.log("AddItem.Size :"+lineItem.size+" inventoryDetail "+inventoryDetail);
	
	$.ajax({url:'/addItemToCart.htm?detailLevel='+inventoryDetail,
		async:'true',
		dataType:'json',
		cache:false,
		contentType:'application/json',
		type:'POST',
		data:$.toJSON(lineItem),
		success:function(res)
		{
			if(res.responseCode>0){
//				if(location.pathname.indexOf('loadConfirmationAfterPaypalAuthorize.htm')>0){
//					window.location.reload();
//				}
//				else{
//					window.location.href='complete-purchase.htm';
//				}
				window.location.reload();
				
			}                   
			else{
				
				 $('#backgroundPopup_magzine').fadeOut();
				 $('.zine_popup').hide();
				 $(".loading_page").fadeOut();
			}
		}
		});
}

function updateLineItemInCart(colorList,lineItem)
{
	var sequenceId=lineItem.sequenceId;
	var element=$("#item_"+sequenceId);
	//console.log("Item Found or NOT : "+element.length);
	//console.log("ColorList "+colorList);
	if(element.length==0){
		populateColorAndSizesForProduct(colorList,lineItem);
	}
	else{
		$("#price_"+sequenceId).text(lineItem.price.toFixed(2));
		$("#quantity_"+sequenceId).text(lineItem.quantity);
		if(isMobileDevice())
			$('#quantities_'+sequenceId).val(lineItem.quantity);
	}
	showShoppingCart();
}

function changeContent()
{
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("changeContent();");
	}
	var field_value = $(this).text();
	$(this).parent().parent().children('input').val(field_value);
	$(this).parent().parent().children('input').trigger('change');
	$(this).parent().hide();
}

function getDeviceCompatibleHTML(html)
{
	if(navigator.userAgent.toLowerCase().indexOf("ipad")!=-1 || navigator.userAgent.toLowerCase().indexOf("iphone")!=-1 || navigator.userAgent.toLowerCase().indexOf("ipod")!=-1 || navigator.userAgent.toLowerCase().indexOf("android")!=-1 || navigator.userAgent.toLowerCase().indexOf("mobile")!=-1)
	{
		html.replace('/ul/g','select');
		html.replace('li/g','option');
	}
}

function isMobileDevice()
{
	return navigator.userAgent.toLowerCase().indexOf("ipad")!=-1 || navigator.userAgent.toLowerCase().indexOf("iphone")!=-1 || navigator.userAgent.toLowerCase().indexOf("ipod")!=-1 || navigator.userAgent.toLowerCase().indexOf("android")!=-1 || navigator.userAgent.toLowerCase().indexOf("mobile")!=-1;
}

function loadShoppingCart()
{
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("loadShoppingCart()");
	}
	$.ajax({url:'/loadShoppingCart.htm',
		dataType:'json',
		cache:false,
		success:function(res){
					
			if(res.shoppingCart===null || res.shoppingCart.lineItems.length==0)
			{
				$("#no_items_msg").show();
				if(location.host.indexOf("localhost")!=-1)
				{
						window.location='/';
				}
				else if(location.host.indexOf("testing.solestruck.com")!=-1)
				{
					window.location='http://testing.solestruck.com/';
				}
				else if(location.host.indexOf("solestruck.com")!=-1)
				{
					window.location='http://www.solestruck.com';
				}
				else if(location.host.indexOf("development-solestruck.appspot.com/")!=-1)
				{
					window.location='http://development-solestruck.appspot.com/';
				}
				return;
			}	
				
			/*$(data.inventory).each(function(key,value){
				inventory[key]=value;
			});*/
			inventory=res.inventory;

			//console.log("line items length is "+res.shoppingCart.lineItems.length);
			populateCompleteCart(res.shoppingCart.lineItems);
			$("#cartSubtotal").text(res.shoppingCart.subTotal.toFixed(2));
			$("#ship_SubTotal").html('Subtotal: $'+res.shoppingCart.subTotal.toFixed(2));
			$("#ship_Total").html('Total: $'+res.shoppingCart.subTotal.toFixed(2));
			$("#selectedSubTotal").html('Subtotal: $'+res.shoppingCart.subTotal.toFixed(2));
			$("#cusSubTotal").html('Subtotal: $'+res.shoppingCart.subTotal.toFixed(2));
			$("#payment_SubTotal").html('Subtotal: $'+res.shoppingCart.subTotal.toFixed(2));
			$("#payment_Total").html('Total: $'+res.shoppingCart.subTotal.toFixed(2));
			if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true')
				{
				//handleFBSale();
				}
		},
		error:function(xhr,status,errorThrown){
			 //console.log(errorThrown+'\n'+status+'\n'+xhr.statusText);
		}
		});
	////console.log("end of the loadShoppingCart");
}


function savingsForDiscountProgram()
{
	var realTotal=0.0;
	$("b[id^='price_']").each(function(){
		var price = $.trim($(this).text().replace("$",""));
		realTotal+=parseFloat(price);
	});
	$("#finalTotal").text('$'+realTotal.toFixed(2));
	$("#shipcartSubtotal").text('$'+realTotal.toFixed(2));
	$("#cartSubtotal").text('$'+realTotal.toFixed(2));

	//console.log("final total :: "+$("#finalTotal").text());
	//console.log("shipcartSubtotal :: "+$("#shipcartSubtotal").text());
	//console.log("realTotal value is :: "+realTotal);
	//console.log("cartSubtotal :: "+$("#cartSubtotal").text());
	var realSubTotal=0.0;
	$("b[id^='price_']").each(function(index,element){
		var price = $.trim($(this).text().replace("$",""));
		var seqId = $(this).attr("id");
		seqId = seqId.substring(seqId.indexOf('_')+1,seqId.length);
		
		if($("#retailPrice_"+seqId).text()!='')
		{
			realSubTotal+=parseFloat(price);
		}
		
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
	if(((readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook') || (window.location.pathname == '/loadConfirmationAfterPaypalAuthorize.htm')) && $("#discountExists").val()!=null && $("#discountExists").val()=='true' && $('#discountTypeName').val()=='Order')
	{
		var subTotal = realTotal.toFixed(2);
		//console.log("sub total value after to fixed is :: "+subTotal);
		// extraSavingsAmount = $('#savingAmount').text().replace('$','');
		var conditionSatisfied = false;
		//console.log("sub total value after to fixed is :: "+subTotal);
		for(i=1; i<parseFloat($('#thresholdSize').val())+1; i++)
		{
			if(subTotal>=parseFloat($('#minLimits_'+i).val()) && subTotal<parseFloat($('#maxLimits_'+i).val()) && conditionSatisfied==false)
			{
				conditionSatisfied = true;
				discountAmountForSubtotal = $('#discountValues_'+i).val();
				discountAmountForSubtotal = parseFloat(discountAmountForSubtotal).toFixed(2);
				subTotal = subTotal-discountAmountForSubtotal;
				//console.log("coming inside the condition and the subtotal is :: "+subTotal);
				//console.log("shopping cart saving is :: "+extraSavingsAmount);
				//extraSavingsAmount = extraSavingsAmount-discountAmountForSubtotal;
				//console.log("updated saving amount is :: "+extraSavingsAmount);
				$('#facebookbonus').show();
				$('#final_facebookbonus').show();
				$('#bonus_price').text('-$'+discountAmountForSubtotal).show();
				$('#final_bonus_price').text('-$'+discountAmountForSubtotal).show();
				$("#finalTotal").text('$'+subTotal.toFixed(2));
				$("#shipcartSubtotal").text('$'+subTotal.toFixed(2));
				$('#cartSubtotal').text('$'+subTotal.toFixed(2));
			}
		}
		if(conditionSatisfied!=true && conditionSatisfied==false)
		{
			//console.log("coming to the conditionSatisfied  :: "+conditionSatisfied+" and the subtotal is :: "+subTotal);
			discountAmountForSubtotal = 0.00;
			subTotal = subTotal-discountAmountForSubtotal;
			$('#facebookbonus').hide();
			$('#final_facebookbonus').hide();
			$('#bonus_price').hide();
			$('#final_bonus_price').hide();
			//console.log("subtotal after calculation is :: "+subTotal);
			$("#finalTotal").text('$'+subTotal.toFixed(2));
			$("#shipcartSubtotal").text('$'+subTotal.toFixed(2));
			$('#cartSubtotal').text('$'+subTotal.toFixed(2));
			
		}
	}
	else
	{
		discountAmountForSubtotal = 0;
		//$("#cartSubtotal").text('$'+realTotal.toFixed(2));
		$('#facebookbonus').hide();
		$('#final_facebookbonus').hide();
		$('#bonus_price').hide();
		$('#final_bonus_price').hide();
	}

	
	var shippingCharge = $.trim($("#shippingPrice").text().replace('$',''));
	var shipCartSubTotal = $.trim($("#shipcartSubtotal").text().replace('$',''));
	$("#final_finalTotal").text('$'+(parseFloat(shippingCharge)+parseFloat(shipCartSubTotal)).toFixed(2));
}

function checkForYes(sequenceId)
{
	var count=0;
	$.ajax({url:'/loadShoppingCart.htm',
		dataType:'json',
		cache:false,
		success:function(res){
			if(res.shoppingCart.lineItems.length>0)
			{
				for(var i=0;i<res.shoppingCart.lineItems.length;i++)
				{
					var lineItem = res.shoppingCart.lineItems[i];
//					console.log("vendor "+" i "+lineItem.vendorName);
					if(lineItem.vendorName == 'YES')
						count++;
				}
				
				for(var i=0;i<res.shoppingCart.lineItems.length;i++)
				{
					var lineItem = res.shoppingCart.lineItems[i];
					if(lineItem.vendorName == 'Solestruck Magazine')
					{
						if(count<=0)
						{
							var attr_id = $("span[name='"+lineItem.vendorName+"']").attr("id");
							var seqid = attr_id.substring(attr_id.indexOf("_")+1,attr_id.length);
							if($("#price_"+seqid).text()=="$0.00" && $("#discountTypeName").val()=="Brand")
								removeItem(seqid);
						}
					}
				}
			}
		}
	});
	
}


function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
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

function eraseCookie(name) {
	createCookie(name,"",-1);
}




// Black Friday sale 02/12/2013 21:30(IST)
