var inventory=new Object();
var imageServer="https://commondatastorage.googleapis.com/images2.solestruck.com";
$(document).ready(function(){
	//console.log("Inside the document ready");
	loadShoppingCart();
	var csvi=false;	
	$('.custom_dropdown').live('click',function() {
		if($(this).attr('disabled')=='true')
			return;
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
	/*
	$('.custom_dropdown ul').find('li').live('click',function() {
		 var field_value = $(this).text();
		$(this).parent().parent().children('input').val(field_value);
		$(this).parent().parent().children('input').trigger('change');
		$(this).parent().hide();
	});*/
	$('.custom_dropdown ul').find('li').live('click',changeContent);
});
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

function loadShoppingCart()
{
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("loadShoppingCart()");
	}

	//console.log("Inside the loadShoppingCart");
	$.ajax({url:'/loadShoppingCart.htm',
		dataType:'json',
		cache:false,
		success:function(res){
			//console.log('Load ShoppingCartForCheckout '+res.shoppingCart);
			//console.log('Load shoppingCartForCheckout '+res.shoppingCart.lineItems.length);
			if(res.shoppingCart===null || res.shoppingCart.lineItems.length==0)
			{
				$("#no_items_msg").show();
				window.location='/redirectToNonSecurePage.htm?rdirectURL=/';
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
			////$(".custom_dropdown").kgcustomdropdown();
		},
		error:function(xhr,status,errorThrown){
			 //console.log(errorThrown+'\n'+status+'\n'+xhr.statusText);
		}
		});
	////console.log("end of the loadShoppingCart");
}

function populateCompleteCart(lineItems)
{
	//Oalert("Inside the populateCompleteCart");
	////console.log("Inside the populateCompleteCart ");
	var index=0;
	//console.log("LineItems size is "+lineItems.length);
	for(index=0;index<lineItems.length;index++)
	{
		//console.log("Inside the loop");
		var lineItem=lineItems[index];
		//console.log("productId is "+lineItem.productId);
		var colorList=inventory[lineItem.productId];
		//console.log("colorList is "+colorList.length);
		//console.log("productId is "+lineItem.productId);
		populateColorAndSizesForProduct(colorList,lineItem);
		$('#quantity_'+lineItem.sequenceId).val(lineItem.quantity);		
	}
	$("#no_items_msg").hide();
	showShoppingCart();
}
function addItem(lineItem)
{
	var inventoryDetail=0;
	if(inventory[lineItem.productId]==undefined)
		inventoryDetail=1;
	//console.log("AddItem.Size :"+lineItem.size+" inventoryDetail "+inventoryDetail);
	
	$.ajax({url:'/addItemToCart.htm?detailLevel='+inventoryDetail,
		dataType:'json',
		cache:false,
		contentType:'application/json',
		type:'POST',
		data:$.toJSON(lineItem),
		success:function(res){
			if(res.responseCode>0){		
				if(inventoryDetail==1){
					inventory[lineItem.productId]=res.inventory[lineItem.productId];
				}
				lineItem.sequenceId=res.responseCode;
				var colorList=inventory[lineItem.productId];
				var carItems=res.shoppingCart.lineItems;
				var index=0;
				var cartItem=null;
				for(index=0;index<carItems.length;index++){
					if(carItems[index].productVariantId==lineItem.productVariantId){
						cartItem=carItems[index];
						break;
					}					
				}
				updateLineItemInCart(colorList,cartItem);
			}                   
			else{
				//Error while adding to cart
			}
		}
		});
}

function removeItem(sequenceId)
{
	var myVariantId=$("#variant_"+sequenceId).val();
	$.ajax({url:'/deleteItems.htm',
		dataType:'json',
		cache:false,
		type:'GET',
		data:{variantId:myVariantId},
		success:function(res){
			if(res.responseCode>0){
				//console.log("Removing the Item...");
				$("#item_"+sequenceId).remove();
				$("#cartSubtotal").text(res.shoppingCart.subTotal.toFixed(2));
				$("#ship_SubTotal").html('Subtotal: $'+res.shoppingCart.subTotal.toFixed(2));
				$("#ship_Total").html('Total: $'+res.shoppingCart.subTotal.toFixed(2));
				$("#selectedSubTotal").html('Subtotal: $'+res.shoppingCart.subTotal.toFixed(2));
				$("#cusSubTotal").html('Subtotal: $'+res.shoppingCart.subTotal.toFixed(2));
				$("#payment_SubTotal").html('Subtotal: $'+res.shoppingCart.subTotal.toFixed(2));
				$("#payment_Total").html('Total: $'+res.shoppingCart.subTotal.toFixed(2));
				//console.log("list size is "+$("#cartItems").children().length);
			 if($("#cartItems").children().length==0){
			 $("#no_items_msg").show();
			 window.location='/redirectToNonSecurePage.htm?rdirectURL=/'
			 }
			 else
			 {
				 if($('#express_token').length>0)
					{
						setShippingService_Express();
					}
					else
					{
						setShippingService();
					}
			 }
			}
			else
			{
				//show error
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
		$("#quantity_"+sequenceId).val(lineItem.quantity);
		if(isMobileDevice())
			$('#quantities_'+sequenceId).val(lineItem.quantity);
	}
	showShoppingCart();
}

/*function onColorChange(element,sequenceId)
{
	//console.log("COLOR CHANGE "+sequenceId+" ColorID "+element.id+" ColorName :"+$("#color_"+sequenceId).val());
	var colorId=element.id;
	var oldColorId=$("#colorId_"+sequenceId).val();
	if(oldColorId==colorId)
		return;
	
	var productName=$('#productName_'+sequenceId).text();
	var vendorName=$('#vendorName_'+sequenceId).text().split(productName);
	var isSale=false;
	var isPreOrder=false;
	var colorName=$(element).text();
	//console.log("proName"+productName+" vendorName"+vendorName+" colorName "+colorName);
	var imageUrl=getImageUrl(vendorName[0],productName,colorName);
	$("#image_"+sequenceId).attr("src",imageUrl);
	var productId=$("#product_"+sequenceId).val();
	var oldVariant=$("#variant_"+sequenceId).val();
	var newVariant=null;
	var size=$("#size_"+sequenceId).val();
	//console.log("SIZE IN CHANGE COLOR "+size);
	var colorList=inventory[productId];
	var colorIndex=0,quantityInCart=0;
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
					firstSize=sizeVariant.size;
				}					
				sizeHTML+='<li id="'+sizeVariant.productVariantId+'" onclick="onSizeChange(this,'+sequenceId+')">'+sizeVariant.size+'</li>';
				if(parseFloat(sizeVariant.size)==parseFloat(size)){
					newVariant=sizeVariant.productVariantId;
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
			if(qtyAvailable<$("#quantity_"+sequenceId).val())
				$("#quantity_"+sequenceId).val(1);
			
			while(count<=qtyAvailable)
			{
				qtyHTML+='<li id="'+count+'" onclick="onQuantityChange(this,'+sequenceId+')">'+count+'</li>';
				count++;
			}
			$("#quantities_"+sequenceId).html(qtyHTML);
		
			$("#sizes_"+sequenceId).html(sizeHTML);
			//console.log("COLOR CHANGE : "+sizeHTML);
			break;
		}
	}
	var totalQty=parseInt(quantityInCart,10)+parseInt($("#quantity_"+sequenceId).val(),10);
	if(newVariant==null||totalQty>qtyAvailable){
		$("#size_"+sequenceId).val(firstSize);
		$("#message_"+sequenceId).show();
		//$("#item_"+sequenceId).find("div.checkout_error").show();
		//console.log("Inventory NOT AVAILABLE");
	}
	else{
		//console.log("Inventory AVAILABLE "+newVariant);
		$("#message_"+sequenceId).hide();
		//$("#item_"+sequenceId).find("div.checkout_error").hide();
		$("#variant_"+sequenceId).val(newVariant);
		$("#colorId_"+sequenceId).val(colorId);
		var lineItem=getLineItem(sequenceId);
		lineItem.productVariantId=newVariant;
		lineItem.colorId=colorId;
		lineItem.colorName=colorName;
		lineItem.unitPrice=unitprice;
		lineItem.quantity=$("#quantity_"+sequenceId).val();
		lineItem.isSale=isSale;
		lineItem.isPreOrder=isPreOrder;
		$.ajax({url:'/updateLineItem.htm?oldVariantId='+oldVariant,
			dataType:'json',
			contentType:'application/json',
			type:'POST',
			data:JSON.stringify(lineItem),
			success:function(response){
				if(response.responseCode<0){
					//console.log("Error while updating Item");
					return;
				}
				var index=0,cartItem;
				var cartItems=response.shoppingCart.lineItems;
				for(index=0;index<cartItems.length;index++){
					cartItem=cartItems[index];
					if(response.responseCode==cartItem.sequenceId){
						break;
					}		
				}
				//It means that the item need to be merged with other item in the cart and the quantity also need to be updated.
				if(response.responseCode!=sequenceId){
					//console.log("Remove the Item and Added Qty : "+cartItem.quantity);
					$("#quantity_"+response.responseCode).val(cartItem.quantity);
					$("#item_"+sequenceId).remove();
				}

				$("#price_"+sequenceId).val('$'+cartItem.price.toFixed(2));
				$("#variant_"+sequenceId).val(newVariant);
				$("#colorId_"+sequenceId).val(colorId);

				$("#cartSubtotal").text(response.shoppingCart.subTotal.toFixed(2));
				$("#ship_SubTotal").html('Subtotal: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#ship_Total").html('Total: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#selectedSubTotal").html('Subtotal: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#cusSubTotal").html('Subtotal: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#payment_SubTotal").html('Subtotal: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#payment_Total").html('Total: $'+response.shoppingCart.subTotal.toFixed(2));
				setShippingService();
			}
		});
	}
}*/


function onColorChange(element,sequenceId)
{
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("onColorChange(document.getElementById('"+element.id+"'),"+sequenceId+")");
	}

	$("#message_"+sequenceId).hide();
	////console.log("COLOR CHANGE "+sequenceId+" ColorID "+element.id+" ColorName :"+$("#color_"+sequenceId).val());
	var colorId=element.id;
	var oldColorId=$("#colorId_"+sequenceId).val();
	if(oldColorId==colorId)
		return;
	
	var productName=$('#productName_'+sequenceId).text();
	var vendorName=$('#vendorName_'+sequenceId).text().split(productName);
	var isSale=false;
	var isPreOrder=false;
	var colorName=$(element).text();
	////console.log("proName"+productName+" vendorName"+vendorName[0]+" colorName "+colorName);
	var imageUrl=getImageUrl(vendorName[0],productName,colorName);
	$("#image_"+sequenceId).attr("src",imageUrl);
	var productId=$("#product_"+sequenceId).val();
	var oldVariant=$("#variant_"+sequenceId).val();
	//console.log("Oldvariant id is "+oldVariant);
	var newVariant=null;
	var firstVariant=null;
	
	var size=$("#size_"+sequenceId).val();
	////console.log("SIZE IN CHANGE COLOR "+size);
	var colorList=inventory[productId];
	var colorIndex=0,quantityInCart=0;
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
					if(sizeVariant.salePrice>0.0)
						isSale=true;
					if(sizeVariant.isPreOrder==true)
						isPreOrder=true;
					
				}					
				if(!isMobileDevice()){
					sizeHTML+='<li id="'+sizeVariant.productVariantId+'" onclick="onSizeChange(this,'+sequenceId+')">'+sizeVariant.size.replace(".0","")+'</li>';
				}
				else{
					if(parseFloat(sizeVariant.size)==parseFloat(size))
						sizeHTML+='<option id="'+sizeVariant.productVariantId+'" selected="selected">'+sizeVariant.size.replace(".0","")+'</option>';
					else
						sizeHTML+='<option id="'+sizeVariant.productVariantId+'">'+sizeVariant.size.replace(".0","")+'</option>';
				}
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
				if(!isMobileDevice()){
					qtyHTML+='<li id="'+count+'" onclick="onQuantityChange(this,'+sequenceId+')">'+count+'</li>';
				}
				else{
					if($("#quantity_"+sequenceId).val()==count)
						qtyHTML+='<option id="'+count+'" value="'+count+'"  selected="selected">'+count+'</option>';
					else
						qtyHTML+='<option id="'+count+'" value="'+count+'" >'+count+'</option>';
						
				}
				count++;
			}
			$("#quantities_"+sequenceId).html(qtyHTML);
		
			$("#sizes_"+sequenceId).html(sizeHTML);
			////console.log("COLOR CHANGE : "+sizeHTML);
			break;
		}
	}
	var totalQty=parseInt(quantityInCart,10)+parseInt($("#quantity_"+sequenceId).val(),10);
	var lineItem=getLineItem(sequenceId);
	if(newVariant==null||totalQty>qtyAvailable){
		$("#size_"+sequenceId).val(firstSize);
		lineItem.size=firstSize;
		lineItem.productVariantId=firstVariant;
		lineItem.isSale=isSale;
		lineItem.isPreOrder=isPreOrder;
		lineItem.colorName=colorName;
		lineItem.unitPrice=unitprice;
		lineItem.quantity=1;
		$("#quantity_"+sequenceId).val(1);
		$("#variant_"+sequenceId).val(firstVariant);
		$("#colorId_"+sequenceId).val(colorId);
		//console.log("Oldvariant id is "+oldVariant);
		//newVariant=oldVariant;
		//$("#message_"+sequenceId).show();
		//$("#item_"+sequenceId).find("div.checkout_error").show();
		////console.log("Inventory NOT AVAILABLE");
	}
	else{
		////console.log("Inventory AVAILABLE "+newVariant);
		//$("#message_"+sequenceId).hide();
		//$("#item_"+sequenceId).find("div.checkout_error").hide();
		$("#variant_"+sequenceId).val(newVariant);
		$("#colorId_"+sequenceId).val(colorId);
		//console.log("new variant is "+newVariant)
		lineItem.size=size;
		lineItem.productVariantId=newVariant;
		lineItem.colorId=colorId;
		lineItem.colorName=colorName;
		lineItem.unitPrice=unitprice;
		if(qtyAvailable<$("#quantity_"+sequenceId).val())
		{
			$("#quantity_"+sequenceId).val(1);
			lineItem.quantity=1;
		}
		else
			lineItem.quantity=$("#quantity_"+sequenceId).val();
		lineItem.isSale=isSale;
		lineItem.isPreOrder=isPreOrder;
	}
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
				var index=0,cartItem;
				var cartItems=response.shoppingCart.lineItems;
				for(index=0;index<cartItems.length;index++){
					cartItem=cartItems[index];
					if(response.responseCode==cartItem.sequenceId){
						break;
					}		
				}
				//It means that the item need to be merged with other item in the cart and the quantity also need to be updated.
				if(response.responseCode!=sequenceId){
					////console.log("Remove the Item and Added Qty : "+cartItem.quantity);
					$("#quantity_"+response.responseCode).val(cartItem.quantity);
					$("#item_"+sequenceId).remove();
					if(isMobileDevice())
						$("#qunatities_"+response.responseCode).val(cartItem.quantity);

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
					//$("#price_"+lineItem.sequenceId).css({'color':'red'});
				}
				$("#cartSubtotal").text(response.shoppingCart.subTotal.toFixed(2));
				$("#ship_SubTotal").html('Subtotal: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#ship_Total").html('Total: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#selectedSubTotal").html('Subtotal: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#cusSubTotal").html('Subtotal: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#payment_SubTotal").html('Subtotal: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#payment_Total").html('Total: $'+response.shoppingCart.subTotal.toFixed(2));
				$('#color_'+sequenceId).val($(element).text());
				if($('#express_token').length>0)
				{
					setShippingService_Express();
				}
				else
				{
					setShippingService();
				}
				//changeCurrency(currencyType);
			}
		});
	//}
	//changeCurrency(currencyType);

}


/*function onSizeChange(element,sequenceId)
{

	if(parseFloat($(element).text())==$('#size_'+sequenceId).val())
		return;
	
	var unitPrice=0.0;
	var sizeExists=false;
	var qtyHtml='';
	var sizeVariants;
	var isSale=false;
	var isPreOrder=false;
	var oldQty=$("#quantity_"+sequenceId).val();
	var lineItem=getLineItem(sequenceId);
	var quantityInCart=getQuantityInCart(element.id);
	lineItem.productVariantId=element.id;
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
		if(sizeVariants[variantIndex].productVariantId==element.id)
		{
			sizeExists=true;
			quantityAvl=sizeVariants[variantIndex].quantity;
			if(quantityAvl>=(parseInt(quantityInCart,10)+1))
			{
				proceed=true;
			}
			$("#quantity_"+sequenceId).val(1);
			lineItem.quantity=1;
			unitPrice=sizeVariants[variantIndex].salePrice>0.0?sizeVariants[variantIndex].salePrice:sizeVariants[variantIndex].retailPrice;
			if(sizeVariants[variantIndex].salePrice>0.0)
				isSale=true;
			if(sizeVariants[variantIndex].isPreOrder==true)
				isPreOrder=true;
			lineItem.unitPrice=unitPrice;
			lineItem.isSale=isSale;
			lineItem.isPreOrder=isPreOrder;
			var count=1;
			while(count<=quantityAvl)
			{
				qtyHtml+='<li id="'+count+'" onclick="onQuantityChange(this,'+lineItem.sequenceId+')">'+count+'</li>';
				count++;
			}
			$("#quantities_"+sequenceId).html(qtyHtml);
			break;
		}
		
	}
	if(sizeExists==true && proceed==true)
	{
		$("#message_"+sequenceId).hide();
		//$("#item_"+sequenceId).find("div.checkout_error").hide();
		$.ajax({url:'/updateLineItem.htm?oldVariantId='+oldVariantId,
			dataType:'json',
			contentType:'application/json',
			type:'post',
			data:JSON.stringify(lineItem),
			success:function(data)
			{
				if(data.responseCode>0)
				{
					//$("#message_"+sequenceId).hide();
					$('#variant_'+sequenceId).val(element.id);
					var cartItems=data.shoppingCart.lineItems;
					var lineIndex=0;
					for(lineIndex=0;lineIndex<=cartItems.length;lineIndex++)
					{
						if(sequenceId==cartItems[lineIndex].sequenceId)
						{
							$("#price_"+sequenceId).text('$'+cartItems[lineIndex].price.toFixed(2));
						}
					}
					$("#cartSubtotal").text(data.shoppingCart.subTotal.toFixed(2));
					$("#ship_SubTotal").html('Subtotal: $'+data.shoppingCart.subTotal.toFixed(2));
					$("#ship_Total").html('Total: $'+data.shoppingCart.subTotal.toFixed(2));
					$("#selectedSubTotal").html('Subtotal: $'+data.shoppingCart.subTotal.toFixed(2));
					$("#cusSubTotal").html('Subtotal: $'+data.shoppingCart.subTotal.toFixed(2));
					$("#payment_SubTotal").html('Subtotal: $'+data.shoppingCart.subTotal.toFixed(2));
					$("#payment_Total").html('Total: $'+data.shoppingCart.subTotal.toFixed(2));
					setShippingService();
				}
			}
		
			});
	}
	/*else
	{
		$("#message_"+sequenceId).show();
		//$("#item_"+sequenceId).find("div.checkout_error").show();
		//console.log("Inventory NOT AVAILABLE");
	}
}*/

function onSizeChange(element,sequenceId)
{
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("onSizeChange(document.getElementById('"+element.id+"'),"+sequenceId+")");
	}
	$("#message_"+sequenceId).hide();
	if(parseFloat($(element).text())==$('#size_'+sequenceId).val())
		return;
	
	var unitPrice=0.0;
	var sizeExists=false;
	var qtyHtml='';
	var sizeVariants;
	var isSale=false;
	var isPreOrder=false;
	var oldQty=$("#quantity_"+sequenceId).val();
	var lineItem=getLineItem(sequenceId);
	var quantityInCart=getQuantityInCart(element.id);
	lineItem.productVariantId=element.id;
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
		if(sizeVariants[variantIndex].productVariantId==element.id)
		{
			sizeExists=true;
			quantityAvl=sizeVariants[variantIndex].quantity;
			if(quantityAvl>=(parseInt(quantityInCart,10)+1))
			{
				proceed=true;
			}
			$("#quantity_"+sequenceId).val(1);
			lineItem.quantity=1;
			unitPrice=sizeVariants[variantIndex].salePrice>0.0?sizeVariants[variantIndex].salePrice:sizeVariants[variantIndex].retailPrice;
			lineItem.unitPrice=unitPrice;
			if(sizeVariants[variantIndex].salePrice>0.0)
				isSale=true;
			if(sizeVariants[variantIndex].isPreOrder==true)
				isPreOrder=true;
			lineItem.isSale=isSale;
			lineItem.isPreOrder=isPreOrder;
			var count=1;
			while(count<=quantityAvl)
			{
				if(!isMobileDevice()){
					qtyHtml+='<li id="'+count+'" onclick="onQuantityChange(this,'+lineItem.sequenceId+')">'+count+'</li>';
				}
				else{
					//if(oldQty==count)
						//qtyHtml+='<option id="'+count+'" value="'+count+'"  selected="selected">'+count+'</option>';
					//else
						qtyHtml+='<option id="'+count+'" value="'+count+'" >'+count+'</option>';
				}
				
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
					$('#variant_'+sequenceId).val(element.id);
					var cartItems=data.shoppingCart.lineItems;
					var lineIndex=0;
					for(lineIndex=0;lineIndex<=cartItems.length;lineIndex++)
					{
						if(sequenceId==cartItems[lineIndex].sequenceId)
						{
							$("#price_"+sequenceId).text('$'+cartItems[lineIndex].price.toFixed(2));
							if(lineItem.isPreOrder==true)
							{
								$("#preOrder_"+lineItem.sequenceId).removeClass("dn");
							}
							if(lineItem.isSale==true)
							{
								$("#sale_"+lineItem.sequenceId).removeClass("dn");
								//$("#price_"+lineItem.sequenceId).css({'color':'red'});
							}
							$("#price_"+sequenceId).text('$'+cartItems[lineIndex].price.toFixed(2));
							$("#size_"+sequenceId).val(cartItems[lineIndex].size);
							break;
						}
						if(data.responseCode!=sequenceId){
							//console.log("Remove the Item and Added Qty : "+cartItem.quantity);
							$("#quantity_"+data.responseCode).val(cartItems[lineIndex].quantity);
							$("#price_"+data.responseCode).text('$'+cartItems[lineIndex].price.toFixed(2))
							$("#item_"+sequenceId).remove();
							if(isMobileDevice())
								$("#quantities_"+data.responseCode).val(cartItems[lineIndex].quantity);
						}
					}
					$("#cartSubtotal").text(data.shoppingCart.subTotal.toFixed(2));
					$("#ship_SubTotal").html('Subtotal: $'+data.shoppingCart.subTotal.toFixed(2));
					$("#ship_Total").html('Total: $'+data.shoppingCart.subTotal.toFixed(2));
					$("#selectedSubTotal").html('Subtotal: $'+data.shoppingCart.subTotal.toFixed(2));
					$("#cusSubTotal").html('Subtotal: $'+data.shoppingCart.subTotal.toFixed(2));
					$("#payment_SubTotal").html('Subtotal: $'+data.shoppingCart.subTotal.toFixed(2));
					$("#payment_Total").html('Total: $'+data.shoppingCart.subTotal.toFixed(2));
					if($('#express_token').length>0)
					{
						setShippingService_Express();
					}
					else
					{
						setShippingService();
					}
				}

			}
		
			});
	}
	/*else
	{
		$("#message_"+sequenceId).show();
		//$("#item_"+sequenceId).find("div.checkout_error").show();
		////console.log("Inventory NOT AVAILABLE");
	}*/
	//changeCurrency(currencyType);
}

function onQuantityChange(element,sequenceId)
{
	if(typeof ClickTaleExec=="function"){
		ClickTaleExec("onQuantityChange(document.getElementById('"+element.id+"'),"+sequenceId+")");
	}
	$("#message_"+sequenceId).hide();
	var oldQuantity=$("#quantity_"+sequenceId).val();
	var newQuantity=element.id;
	var myVariantId=$("#variant_"+sequenceId).val();
	if(oldQuantity==newQuantity)
		return;
	$.ajax({url:'/updateQuantity.htm',
		dataType:'json',
		cache:false,
		data:{variantId:myVariantId,quantity:newQuantity},
		success:function(response){
			if(response.responseCode>0){
				////console.log('success in updating quantity');
				var index=0;
				var carItems=response.shoppingCart.lineItems;
				for(index=0;index<carItems.length;index++){
					if(carItems[index].sequenceId==sequenceId){
						if(carItems[index].isSale==true)
						{
							$("#sale_"+carItems[index].sequenceId).removeClass("dn");
							//$("#price_"+carItems[index].sequenceId).css({'color':'red'});
						}
						$("#price_"+sequenceId).text('$'+carItems[index].price.toFixed(2));
						break;
					}	
				}
				$("#quantity_"+sequenceId).val(newQuantity);
				$("#cartSubtotal").text(response.shoppingCart.subTotal.toFixed(2));
				$("#ship_SubTotal").html('Subtotal: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#ship_Total").html('Total: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#selectedSubTotal").html('Subtotal: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#cusSubTotal").html('Subtotal: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#payment_SubTotal").html('Subtotal: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#payment_Total").html('Total: $'+response.shoppingCart.subTotal.toFixed(2));
				if($('#express_token').length>0)
				{
					setShippingService_Express();
				}
				else
				{
					setShippingService();
				}
				
				//changeCurrency(currencyType);
			}
			else{
				//error;
				$("#quantity_"+sequenceId).val(oldQuantity);
			}
				
		}
	});
}

/*function onQuantityChange(element,sequenceId)
{
	$('#message_'+sequenceId).hide();
	var oldQuantity=$("#quantity_"+sequenceId).val();
	var newQuantity=element.id;
	var myVariantId=$("#variant_"+sequenceId).val();
	if(oldQuantity==newQuantity)
		return;
	$.ajax({url:'/updateQuantity.htm',
		dataType:'json',
		data:{variantId:myVariantId,quantity:newQuantity},
		success:function(response){
			if(response.responseCode>0){
				//console.log('success in updating quantity');
				var index=0;
				var carItems=response.shoppingCart.lineItems;
				for(index=0;index<carItems.length;index++){
					if(carItems[index].sequenceId==sequenceId){
						$("#price_"+sequenceId).text('$'+carItems[index].price.toFixed(2));
						$("#quantity_"+sequenceId).val(cartItems[index].quantity);
						break;
					}	
				}
				$("#cartSubtotal").text('$'+response.shoppingCart.subTotal.toFixed(2));
				$("#ship_SubTotal").html('Subtotal: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#ship_Total").html('Total: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#selectedSubTotal").html('Subtotal: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#cusSubTotal").html('Subtotal: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#payment_SubTotal").html('Subtotal: $'+response.shoppingCart.subTotal.toFixed(2));
				$("#payment_Total").html('Total: $'+response.shoppingCart.subTotal.toFixed(2));
				setShippingService();
				}
			else{
				//error;
				$("#quantity_"+sequenceId).val(oldQuantity);
			}
				
		}
	});
}*/

function fetchInventoryForProduct(lineItem)
{
	$.ajax({url:'/getInventoryForProduct.htm',
			dataType:'json',
			cache:false,
			data:{productId:lineItem.productId},
			success:function(data){
				//alert("Inventory GOT : "+data);
				inventory[lineItem.productId]=data;
				populateColorAndSizesForProduct(data,lineItem);
			}
		});
}

function populateColorAndSizesForProduct(colorList,lineItem)
{
	/*if(typeof ClickTaleExec=="function"){
		ClickTaleExec("populateColorAndSizesForProduct("+colorList+","+lineItem+")");
	}*/
	//console.log("populateColorAndSizes : "+colorList.length);
	//var imageUrl='';//imageServer+"/"+lineItem.vendorName.replace(/ /g,"-").toLowerCase()+"-shoes/"+lineItem.vendorName.replace(/ /g,"-")+"-shoes-"+lineItem.productName.replace(/ /g,"-")+"-"+"("+lineItem.colorName.replace(/ /g,"-")+")-010307.jpg";
	//alert(imageUrl);
	var sizeHTML='';
	var qtyHTML='';
	var myHTML='<li id="item_'+lineItem.sequenceId+'">'
	myHTML+='<div class="checkout_error dn" id="message_'+lineItem.sequenceId+'"><h4>Oh-no! The last pair were just taken.</h4>';
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
			colorHTML+='<li id="'+color.colorId+'"  onclick="onColorChange(this,'+lineItem.sequenceId+')">'+color.colorName+'</li>';
		}
		else{
			if(lineItem.colorName==color.colorName)
				colorHTML+='<option id="'+color.colorId+'" selected="selected">'+color.colorName+'</option>';
			else
				colorHTML+='<option id="'+color.colorId+'">'+color.colorName+'</option>';
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
	//if(lineItem.isPreOrder==true)
	//{
		//myHTML+='<span id="preOrder_'+lineItem.sequenceId+'" style="display:none">Pre-Order</span><br/>';
	//}
	//if(lineItem.isSale==true)
	//{
		//myHTML+='<span id="sale_'+lineItem.sequenceId+'" style="display:none"><font color="red">Sale</span><br/>';
		//myHTML+='<span class="shpping_cart_price" id="price_'+lineItem.sequenceId+'"><font color="red"></span>$'+lineItem.price.toFixed(2)+'</span></div>';
	//}
	//else
	//{
		myHTML+='<b id="preOrder_'+lineItem.sequenceId+'" class="dn">Pre-Order</b><b id="sale_'+lineItem.sequenceId+'" class="dn">Sale</b>';
		myHTML+='<span class="shpping_cart_price" id="price_'+lineItem.sequenceId+'">$'+lineItem.price.toFixed(2)+'</span></div>';
	//}
	
	myHTML+='<div class="clear_both"></div></li>';
	//<div style="display: none;" id="message_'+lineItem.sequenceId+'"><label>No Inventory</label></div>';
	$("#cartItems").append(myHTML);
	//$(".custom_dropdown").kgcustomdropdown();
	if(lineItem.isPreOrder==true)
	{
		$("#preOrder_"+lineItem.sequenceId).removeClass("dn");
	}
	if(lineItem.isSale==true)
	{
		$("#sale_"+lineItem.sequenceId).removeClass("dn");
		//$("#price_"+lineItem.sequenceId).css({'color':'red'});
	}
	////console.log("The HTML "+myHTML);
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
	//$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
	$('.cart_popup').fadeIn();
}

function getLineItem(sequenceId)
{
	var lineItem=new Object();
	lineItem.productId=$('#product_'+sequenceId).val();
	lineItem.productVariantId=$("#variant_"+sequenceId).val();
	lineItem.colorName=$('#color_'+sequenceId).val();
	lineItem.size=$('#size_'+sequenceId).val();
	lineItem.quantity=$('#quantity_'+sequenceId).val();
	lineItem.productName=$('#productName_'+sequenceId).text();
	var vendorName=$('#vendorName_'+sequenceId).text().split(lineItem.productName);
	lineItem.vendorName=$.trim(vendorName[0]);
	lineItem.colorId=$('#colorId_'+sequenceId).val();
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
			//console.log("id is "+obj.id);
			var ids=obj.id.split("_");
			var sequenceId=ids[1];
			//console.log("sequeceId is "+ids);
			//console.log("sequeceId is "+sequenceId);
			quantity=$('#quantity_'+sequenceId).val();
			break;
		}
	}
	
	return quantity;
}

function redirectToCheckout()
{
	window.location='/loadCheckout.htm';
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

/*
function getInventoryForProduct(lineItem)
{
	var colorList=inventory[lineItem.productId];
	if(colorList==undefined){
		fetchInventoryForProduct(lineItem);
		return;
	}
	//console.log("GetInventory "+colorList.length);
	populateColorAndSizesForProduct(colorList,lineItem)
}
*/
