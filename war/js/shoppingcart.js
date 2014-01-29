var inventory=new Object();
//var imageServer="http://images2.solestruck.com";
var imageServer="http://commondatastorage.googleapis.com/images2.solestruck.com";
var appId="https://live-solestruck.appspot.com";
var discountAmountForSubtotal = 0.00;
$(document).ready(function(){
	//////console.log("Inside the document ready");
	loadSearchKeyWords();
	loadShoppingCart(false);
	$("#contn_shpbtn_wishlist").click(function(){
		$(".wish_list_popup").hide();
		$('#backgroundPopup').hide();
	});
	$("#contn_shpbtn").click(function(){
		hideCartPopUp();
	});
	var csvi=false;	
	$('.custom_dropdown').live('click',function() {
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
	
	$('.custom_dropdown ul').find('li').live('click',function() {
		 var field_value = $(this).text();
		$(this).parent().parent().children('input').val(field_value);
		$(this).parent().hide();
	});
	
	$(".custom_select cart_cus_select select custom_select_value_act").change(function() {
		
		 $(this).closest('div').find('p').html($(this).find("option:selected").text());
	});
	
	$('.cart_paypal').click(redirectToPaypal);
	
	/*$(".facebookPopupCart_act .facebookPopupCart_act_close").click(function(){
		$(".facebookPopupCart_act").hide().parent().hide();
		setTimeout(function(){$("#backgroundPopup").show();},500);
		return false;
	});*/
	
});



var searchObj	=	{};
var mainObject 	= 	{};
var localStorageTime = new Date();
function loadSearchKeyWords()
{
	var date  		= 	new Date();
	
	console.log("get current time in hours--->"+date.getHours());
	
	if(window.localStorage && window.localStorage.hasOwnProperty("searchKeyWords"))
	{
		var keywords = JSON.parse(window.localStorage.getItem("searchKeyWords"))
		
		console.log(keywords["KeyWords"]);
		console.log(keywords["LSTime"]);
		console.log("The subtraction--->"+(date-(keywords["LSTime"])));
		
		if(date.getHours() - (keywords["LSTime"]) === 5)
		{
			console.log("inside the if time set for ajax call");
			localStorage.clear();
			$.ajax({
				url:'/getSearchKeyWords.htm',
				cache:false,
				dataType:'json',
				success:function(json)
				{
					$('#searchText').kgautocomplete({width:390,height:200,words:json,leftAdj:0,topAdj:0,buttonClicked:'#textSearchButton'});	
					var localStorageTime = new Date();
					
					console.log("the time in hours-->"+localStorageTime.getHours());
					
					searchObj["LSTime"] 	= 	localStorageTime.getHours();
					searchObj["KeyWords"]	=   JSON.stringify(json);
					
					if(window.localStorage)
					{
						console.log("the search object-->"+JSON.stringify(searchObj));
						localStorage.setItem("searchKeyWords",JSON.stringify(searchObj));	
					}
					
				}
			});		
		}
		else
		{
			console.log("inside the else part for get from local storage");
			
			$('#searchText').kgautocomplete({width:390,height:200,words:JSON.parse(window.localStorage.getItem(keywords["KeyWords"])),leftAdj:0,topAdj:0,buttonClicked:'#textSearchButton'});
		}
	
	}
	else
	{
		console.log("this will execute only if we clear the local storage for one time")
		
		$.ajax({
			url:'/getSearchKeyWords.htm',
			cache:false,
			dataType:'json',
			success:function(json)
			{
				$('#searchText').kgautocomplete({width:390,height:200,words:json,leftAdj:0,topAdj:0,buttonClicked:'#textSearchButton'});	
				console.log("the time in hours-->"+localStorageTime.getHours())
				searchObj["LSTime"] 	= 	localStorageTime.getHours();
				searchObj["KeyWords"]	=   JSON.stringify(json);
				
				if(window.localStorage)
					localStorage.setItem("searchKeyWords",JSON.stringify(searchObj));
			}
		});		
	}
}

//function loadSearchKeyWords()
//{
//	$.ajax({
//		url:'/getSearchKeyWords.htm',
//		cache:false,
//		dataType:'json',
//		success:function(json)
//		{
//			$('#searchText').kgautocomplete({width:390,height:200,words:json,leftAdj:0,topAdj:0,buttonClicked:'#textSearchButton'});
//		}
//		
//	});
//}


function loadShoppingCart(toShow)
{
	//console.log("coming load shopping cart");
	if(readCookie('orderid')!=null)
	{
		if(readCookie('isCartEmpty')=='false' || readCookie('isCartEmpty')==null)
		{
			
			$.ajax({url:'/loadShoppingCart.htm',
				dataType:'json',
				cache:false,
				success:function(data){
					//console.log('Load ShoppingCart '+data.shoppingCart);
					if(data.shoppingCart===null)
					{
						$('#cartCount').html('(0) CART');
						return;
					}
					else
					{	
						inventory=data.inventory;
					    //console.log("line items length is "+data.shoppingCart.lineItems.length);
						if(data.shoppingCart.lineItems.length==0||data.shoppingCart.lineItems==null)
						{
							//$('.cart_popup_holder').html(populateEmptyCartHTML()); 
							$('#cartCount').html('('+data.shoppingCart.lineItems.length+') CART');
							$('#cartCount_popUp').html('('+data.shoppingCart.lineItems.length+')');
						}
						else
						{
							//$('.cart_popup_holder').html(populateItemCartHtml());
							populateCompleteCart(data.shoppingCart.lineItems);
							$('#cartCount_popUp').html('('+data.shoppingCart.lineItems.length+')');
							//$('#subTotal_Price').text('$'+data.shoppingCart.subTotal.toFixed(2));
							if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
							{
								savingsForDiscountProgram();
							}
							else
						    {
					    		$('#subTotal_Price').text('$'+data.shoppingCart.subTotal.toFixed(2));
					    		if(data.shoppingCart.savings!='0.0'){
					    			$('#cartsavings').show();
					    			$('#savings_Price').text('-$'+data.shoppingCart.savings.toFixed(2));
					    		}
					    		else
					    		{
					    			$('#cartsavings').hide();
					    		}
						    }
						}	
						if($('#source').val()=='mail'||toShow==true||toShow=='true')
						{
							showShoppingCart();
						}
					}
				}
				});
		}
		else
		{
			$('#cartCount').html('(0) CART');
			return;
		}
	}
	else
	{
	  //console.log('orderiD is  Null');
	  $('#cartCount').html('(0) CART');
		return;
	}
	
}


function populateCompleteCart(lineItems)
{
	var index=0;
	//console.log("LineItems size is "+lineItems.length); 
	$('#cartCount').html('('+lineItems.length+') CART');
	$('#cartCount_popUp').html('('+lineItems.length+')');
	
	$("#cartItems").html('');//added to avoid item duplication when unload idp
		for(index=0;index<lineItems.length;index++)
		{
			var lineItem=lineItems[index];
			//////console.log("productId is "+lineItem.productId);
			var colorList=inventory[lineItem.productId];
			
			populateColorAndSizesForProduct(colorList,lineItem);
			$('#quantity_'+lineItem.sequenceId).val(lineItem.quantity);		
		}
}

function addItem(lineItem,toShow,callback)
{
//	console.log(" login isLoggedInNotify status "+$('#isLoggedInNotify').val());
		
		if($('#isLoggedInNotify').val() == 'true'){
			 $('.notify').show();
		}
		else{
			 $('.notify').hide();
		}
	
	var retval=0;
	var inventoryDetail=0;
	if(inventory[lineItem.productId]==undefined)
		inventoryDetail=1;
	////console.log("AddItem.Size :"+lineItem.size+" inventoryDetail "+inventoryDetail);
	var quantityInCart=getQuantityInCart(lineItem.productVariantId);
	var quantityAvl;
	var sequenceId=getSequenceIdOfItem(lineItem.productVariantId);
	var proceed=true;
	if(inventoryDetail==0)
	{
		var colorList=inventory[lineItem.productId];
		var sizeVariants;
		for(index=0;index<colorList.length;index++)
		{
			if(lineItem.colorId==colorList[index].colorId)
			{
				sizeVariants=colorList[index].sizeVariants;
				break;
			}
			
		}
		for(index=0;index<sizeVariants.length;index++)
		{
			if(lineItem.productVariantId==sizeVariants[index].productVariantId)
			{
				quantityAvl=sizeVariants[index].quantity;
				break;
			}
		}
		if(quantityAvl>=(parseInt(quantityInCart)+1))
		{
			proceed=true;
		}
		else
		{
			$('#message_'+sequenceId).show();
			if(toShow==true)
			{
				showShoppingCart();	
			}
			proceed=false;
		}
		/////console.log("quantity in cart is "+quantityInCart+" and quantity in inventory map is "+quantityAvl)
	}
		
	if(proceed==true)
	{
		//////console.log("quantity avl is "+quantityAvl+" and quantity is cart is "+quantityInCart);
		$('#message_'+sequenceId).hide();
		$.ajax({url:'/addItemToCart.htm?detailLevel='+inventoryDetail,
			async:'true',
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
					loadShoppingCart(toShow); 
					$('#cartCount').html('('+res.shoppingCart.lineItems.length+') CART');
					$('#cartCount_popUp').html('('+res.shoppingCart.lineItems.length+')');
					if(readCookie('Facebook')==null)
						{
							$('#cartSubtotal').text(res.shoppingCart.subTotal.toFixed(2));
						}
					
					//changeCurrency(currencyType);
					//$(".custom_dropdown").kgcustomdropdown();
					//console.log("response code is "+res.responseCode);
					retval=res.responseCode;
					//_gaq.push(['_trackEvent', 'ShoppingCart', 'addItem', 'ShoppingCartPopup',lineItem.quantity]);
				}
				else{
					//console.log("return val is -1");
					//async need to handle
					retval= -1;
					//Error while adding to cart
				}
				
			}
			});
		retval=1;
		createCookie("isCartEmpty","false");
	}
	else
	{
		retval=0;
		showShoppingCart();
	}
	
//	$('.loading_page').hide();
	//console.log("retval is "+retval);
	if(callback!=undefined)
		callback(retval);
	return retval;
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
				
				$("#message_"+sequenceId).hide();
				$("#item_"+sequenceId).remove();  
				$('#cartCount').html('('+res.shoppingCart.lineItems.length+') CART');
				$('#cartCount_popUp').html('('+res.shoppingCart.lineItems.length+')');
				
				if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
				{
					savingsForDiscountProgram();

					/*	if(res.shoppingCart.savings!='0.0')
		    		{
		    			$('#cartsavings').css('display','block');
			    		$('#savings_Price').text('-$'+res.shoppingCart.savings.toFixed(2));
		    		}*/
		    		
				}
		       else
			   {
			    	//$('#subTotal_Price').text('$'+res.shoppingCart.totalRetialPrice.toFixed(2));
		    		$('#subTotal_Price').text('$'+res.shoppingCart.subTotal.toFixed(2));
		    		if(res.shoppingCart.savings!='0.0')
		    		{
		    			$('#cartsavings').css('display','block');
			    		$('#savings_Price').text('-$'+res.shoppingCart.savings.toFixed(2));
		    		}
		    		else
		    			{
		    			$('#cartsavings').css('display','none');
		    			}
		    		
			   }
				
				
				if(res.shoppingCart.lineItems.length==0||res.shoppingCart.lineItems==null)
				{
					//$("#cartWithoutContent").show();
					//$("#cartWithContent").hide();
				}
				//UI Refresh
				if($("#cartItems li[id^='item_']").length==0){
					createCookie('isCartEmpty', 'true');
					//console.log("cart empty cookie value after removing the cart items is :: "+readCookie('isCartEmpty'));
					$("#cartWithoutContent").show();
					$("#cartWithContent").hide();
				}
				
			}
			else
			{
				//console.log(" some error ");
			}
			
		}
	});
}

function updateLineItemInCart(colorList,lineItem,wishlist)
{
	var sequenceId=lineItem.sequenceId;
	var element=$("#item_"+sequenceId);
	////console.log("Item Found or NOT : "+element.length);
	////console.log("ColorList "+colorList);
	if(element.length==0){
		populateColorAndSizesForProduct(colorList,lineItem);
	}
	else{
		$("#price_"+sequenceId).text('$'+lineItem.price.toFixed(2));
		$("#quantity_"+sequenceId).val(lineItem.quantity);
		if(isMobileDevice())
			$('#quantities_'+sequenceId).val(lineItem.quantity);
	}
	
	if(wishlist=="true")
	{
		showShoppingCart();	
	}
	
}

function onColorChange(sequenceId)
{
	$.ajaxSetup({async:true});
	$(".loading_page").css('display','block');
	var elementId=$('#colors_'+sequenceId+' option:selected').attr('id');
	$('#color_'+sequenceId).text($('#colors_'+sequenceId+' option:selected').text());
	
	$("#message_"+sequenceId).hide();
	////console.log("COLOR CHANGE "+sequenceId+" ColorID "+element.id+" ColorName :"+$("#color_"+sequenceId).val());
	var colorId=elementId;
	var oldColorId=$("#colorId_"+sequenceId).val();
	if(oldColorId==colorId)
		return;
	
	var productName=$('#productName_'+sequenceId).text();
	var vendorName=$('#vendorName_'+sequenceId).text().split('-');
	var isSale=false;
	var isPreOrder=false;
	var colorName=$('#colors_'+sequenceId+' option:selected').attr('name');
	
	
	var imageUrl=getImageUrl(vendorName[0],productName,colorName);
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
	var retailprice="";
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
					retailprice=sizeVariant.retailPrice;
					if(sizeVariant.salePrice>0.0)
						isSale=true;
					if(sizeVariant.isPreOrder==true)
						isPreOrder=true;
					
				}
				if(!isMobileDevice()){
					if(parseFloat(sizeVariant.size)==parseFloat(size))
						sizeHTML+='<option id="'+sizeVariant.productVariantId+'" selected="selected">'+sizeVariant.size.replace(".0","")+'</option>';
					else
						sizeHTML+='<option id="'+sizeVariant.productVariantId+'">'+sizeVariant.size.replace(".0","")+'</option>';
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
					retailprice=sizeVariant.retailPrice;
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
					if($("#quantity_"+sequenceId).text()==count)
						qtyHTML+='<option id="'+count+'" value="'+count+'" selected="selected">'+count+'</option>';
					else
						qtyHTML+='<option id="'+count+'" value="'+count+'" >'+count+'</option>';
				}
				else{
					if($("#quantity_"+sequenceId).text()==count)
						qtyHTML+='<option id="'+count+'" value="'+count+'" selected="selected">'+count+'</option>';
					else
						qtyHTML+='<option id="'+count+'" value="'+count+'" >'+count+'</option>';
						
				}
				count++;
			}
			$("#quantities_"+sequenceId).html(qtyHTML);
		
			$("#sizes_"+sequenceId).html(sizeHTML);
			////console.log("COLOR CHANGE : "+sizeHTML);
			//$(".custom_dropdown").kgcustomdropdown();
			break;
		}
	}
	var totalQty=parseInt(quantityInCart,10)+parseInt($("#quantity_"+sequenceId).text(),10);
	var lineItem=getLineItem(sequenceId);
	
	//console.log(" retail price "+retailprice);
	
	if(newVariant==null||totalQty>qtyAvailable){
		if(totalQty>qtyAvailable&&$("li[id^='item_']").length>1)
		{
		removeItem(sequenceId);
		$(".loading_page").css('display','none');
		return;
		}
		$("#size_"+sequenceId).text(firstSize.replace(".0",""));
		lineItem.size=firstSize;
		lineItem.productVariantId=firstVariant;
		lineItem.isSale=isSale;
		lineItem.isPreOrder=isPreOrder;
		lineItem.colorName=colorName;
		lineItem.unitPrice=unitprice;
		lineItem.quantity=1;
		lineItem.colorId=colorId;
		lineItem.retailPrice=retailprice;
		$("#quantity_"+sequenceId).text(1);
		$("#variant_"+sequenceId).val(firstVariant);
		$("#colorId_"+sequenceId).val(colorId);
		//console.log("Oldvariant id is "+oldVariant);
		//newVariant=oldVariant;
		//$("#message_"+sequenceId).show();
		//$("#item_"+sequenceId).find("div.checkout_error").show();
		////console.log("Inventory NOT AVAILABLE");
		$("#sizes_"+sequenceId).val(firstSize.replace(".0",""));
		$("#quantities_"+sequenceId).val(1);
	}
	else{
		////console.log("Inventory AVAILABLE "+newVariant);
		//$("#message_"+sequenceId).hide();
		//$("#item_"+sequenceId).find("div.checkout_error").hide();
		$("#variant_"+sequenceId).val(newVariant);
		$("#colorId_"+sequenceId).val(colorId);
		$("#size_"+sequenceId).text(size.replace(".0",""));
		//console.log("new variant is "+newVariant)
		lineItem.size=size;
		lineItem.productVariantId=newVariant;
		lineItem.colorId=colorId;
		lineItem.colorName=colorName;
		lineItem.unitPrice=unitprice;
		
		if(qtyAvailable<$("#quantity_"+sequenceId).text())
		{
			$("#quantity_"+sequenceId).text(1);
			lineItem.quantity=1;
		}
		else
			lineItem.quantity=$("#quantity_"+sequenceId).text();
		lineItem.isSale=isSale;
		lineItem.isPreOrder=isPreOrder;
		lineItem.retailPrice=retailprice;
		$("#sizes_"+sequenceId).val(size.replace(".0",""));
		$("#quantities_"+sequenceId).val(lineItem.quantity);
	}
		$.ajax({url:'/updateLineItem.htm?oldVariantId='+oldVariant,
			dataType:'json',
			cache:false,
			contentType:'application/json',
			type:'POST',
			data:$.toJSON(lineItem),
			success:function(res){
				if(res.responseCode<0){
					////console.log("Error while updating Item");
					$(".loading_page").css('display','none');
					return;
				}
				var index=0,cartItem;
				var cartItems=res.shoppingCart.lineItems;
				for(index=0;index<cartItems.length;index++){
					cartItem=cartItems[index];
					if(res.responseCode==cartItem.sequenceId){
						break;
					}		
				}
				//It means that the item need to be merged with other item in the cart and the quantity also need to be updated.
				if(res.responseCode!=sequenceId){
					////console.log("Remove the Item and Added Qty : "+cartItem.quantity);
					$("#quantity_"+res.responseCode).text(cartItem.quantity);
					//if(isMobileDevice())
						$("#quantities_"+res.responseCode).val(cartItem.quantity);
					$("#item_"+sequenceId).remove();
					if(cartItem.isSale==true)
					{
						//console.log(" cart item is sale ");
						//$("#sale_"+sequenceId).removeClass("dn");
						$('#cartsavings').show();
						$('#cart_price_'+res.responseCode).html('<strike id="strike_retailPrice_'+res.responseCode+'">$'+(cartItem.retailPrice*cartItem.quantity).toFixed(2)+'</strike> <b id="price_'+res.responseCode+'">$'+cartItem.price.toFixed(2)+'</b><code onclick="removeItem('+res.responseCode+');"  class="close_cart_shoe"></code>');
					}
					else
					{
						//console.log(" cart item is non sale ");
						if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && cartItem.vendorName.toLowerCase()==$('#saleBrandNames').val())
						{
							var single_Price = cartItem.price/cartItem.quantity;
							var DiscountedSalePrice = ((single_Price).toFixed(2))-((single_Price).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
							$("#real_price_"+res.responseCode).val((parseFloat(cartItem.price)).toFixed(2));
							$('#cart_price_'+res.responseCode).html('<strike id="strike_retailPrice_'+res.responseCode+'">$'+(cartItem.retailPrice*cartItem.quantity).toFixed(2)+'</strike><b id="price_'+res.responseCode+'">$'+(DiscountedSalePrice*cartItem.quantity).toFixed(2)+'</b><code onclick="removeItem('+res.responseCode+');"  class="close_cart_shoe"></code>');
						}
						else
						{
							$("#sale_"+res.responseCode).addClass("dn");
							$('#cartsavings').hide();
							$('#cart_price_'+res.responseCode).html('<b id="price_'+res.responseCode+'">$'+cartItem.price.toFixed(2)+'</b><code onclick="removeItem('+res.responseCode+');"  class="close_cart_shoe"></code>');
						}
					}
				}
				
				if(cartItem.isSale==true && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
				{
					$("#real_price_"+res.responseCode).val((parseFloat(cartItem.price)-(parseFloat(cartItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
					$("#price_"+res.responseCode).text('$'+(parseFloat(cartItem.price)-(parseFloat(cartItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
					$("#strike_retailPrice_"+res.responseCode).text('$'+(cartItem.retailPrice*cartItem.quantity).toFixed(2));
				}
				
				
				$("#colorId_"+sequenceId).val(colorId);
				if(cartItem.isPreOrder==true)
				{
					$("#preOrder_"+cartItem.sequenceId).removeClass("dn");
				}
				
				//console.log(" sale "+cartItem.isSale);
				
				
				if(cartItem.isSale==true && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
				{
					if($('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
					{
						//console.log('cartItem.price.toFixed(2) is --->'+cartItem.price.toFixed(2));
						var single_Price = cartItem.price/cartItem.quantity;
						var DiscountedSalePrice = ((single_Price).toFixed(2))-((single_Price).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
						//console.log('DiscountedSalePrice ---> is '+DiscountedSalePrice);
						$('#cartsavings').show();
						$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(cartItem.retailPrice*cartItem.quantity).toFixed(2)+'</strike><b id="price_'+sequenceId+'">$'+(DiscountedSalePrice*cartItem.quantity).toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
					}
					else if($('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && cartItem.vendorName.toLowerCase()==$('#saleBrandNames').val())
					{
						var single_Price = cartItem.price/cartItem.quantity;
						var DiscountedSalePrice = ((single_Price).toFixed(2))-((single_Price).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
						//console.log('DiscountedSalePrice ---> is '+DiscountedSalePrice);
						$('#cartsavings').show();
						$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(cartItem.retailPrice*cartItem.quantity).toFixed(2)+'</strike><b id="price_'+sequenceId+'">$'+(DiscountedSalePrice*cartItem.quantity).toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
					}
					else if(cartItem.isSale==true)
					{
						//$("#sale_"+sequenceId).removeClass("dn");
						//console.log('cartItem.price.toFixed(2) is --->'+cartItem.price.strike_salePrice_toFixed(2));
						$('#cartsavings').show();
						$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(cartItem.retailPrice*cartItem.quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+cartItem.price.toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
					}
				}
				else if(cartItem.isSale==true)
				{
					//console.log(" cart item is sale ");
					//$("#sale_"+sequenceId).removeClass("dn");
					//console.log('cartItem.price.toFixed(2) is --->'+cartItem.price.strike_salePrice_toFixed(2));
					$('#cartsavings').show();
					$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(cartItem.retailPrice*cartItem.quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+cartItem.price.toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
				}
				else
				{
					if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && cartItem.vendorName.toLowerCase()==$('#saleBrandNames').val())
					{
						var single_Price = cartItem.price/cartItem.quantity;
						var DiscountedSalePrice = ((single_Price).toFixed(2))-((single_Price).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
						$("#real_price_"+sequenceId).val((parseFloat(cartItem.price)).toFixed(2));
						$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(cartItem.retailPrice*cartItem.quantity).toFixed(2)+'</strike><b id="price_'+sequenceId+'">$'+(DiscountedSalePrice*cartItem.quantity).toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
					}
					else
					{
						//console.log(" cart item is non sale ");
						$("#sale_"+sequenceId).addClass("dn");     
						$('#cartsavings').hide();
						$("#real_price_"+sequenceId).val((parseFloat(cartItem.price)).toFixed(2));
						$('#cart_price_'+sequenceId).html('<b id="price_'+sequenceId+'">$'+cartItem.price.toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
					}
				}
				
				if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
				{
					savingsForDiscountProgram();
				}
				else
			    {
					//$('#subTotal_Price').text('$'+res.shoppingCart.totalRetialPrice.toFixed(2));
		    		$('#subTotal_Price').text('$'+res.shoppingCart.subTotal.toFixed(2));
		    		if(res.shoppingCart.savings!='0.0'){
		    			$('#cartsavings').css('display','block');
		    			$('#savings_Price').text('-$'+res.shoppingCart.savings.toFixed(2));
		    		}
			    }
				
				//console.log(" rp"+'$'+res.shoppingCart.totalRetialPrice.toFixed(2)+" total "+'$'+res.shoppingCart.subTotal.toFixed(2)+" saving "+'-$'+res.shoppingCart.savings.toFixed(2));
				
				$('#color_'+sequenceId).text($('#colors_'+sequenceId+' option:selected').text());//custom dropdown fix needed
			//	$('#subTotal_Price').text('$'+res.shoppingCart.totalRetialPrice.toFixed(2));
	    		/*$('#subTotal_Price').text('$'+res.shoppingCart.subTotal.toFixed(2));
	    		if(res.shoppingCart.savings!='0.0'){
	    			$('#cartsavings').css('display','block');
	    			$('#savings_Price').text('-$'+res.shoppingCart.savings.toFixed(2));
	    		}*/
	    		$(".loading_page").css('display','none');
			}
		
		});
		
		

}

function onSizeChange(sequenceId)
{
	$.ajaxSetup({async:true});
	$(".loading_page").css('display','block');
	var elementId=$('#sizes_'+sequenceId+' option:selected').attr('id');
	$('#size_'+sequenceId).text($('#sizes_'+sequenceId+' option:selected').text());
	
	//console.log("original text is --------->"+$(element.text()));
	//console.log("Selected value is "+parseFloat($(element).text())+' and oldvalue '+$('#size_'+sequenceId).val());
	//console.log('On Size Change SequenceID '+sequenceId);
	$("#message_"+sequenceId).hide();
	//if(parseFloat($(element).text())==$('#size_'+sequenceId).val())
		//return;
	//console.log('Calling');
	var unitPrice=0.0;
	var sizeExists=false;
	var qtyHtml='';
	var sizeVariants;
	var isSale=false;
	var isPreOrder=false;
	var oldQty=$("#quantity_"+sequenceId).val();
	var lineItem=getLineItem(sequenceId);
	var quantityInCart=getQuantityInCart(elementId);
	lineItem.productVariantId=elementId;
	//console.log("pv id is "+element.id);
	lineItem.size=parseFloat($('#sizes_'+sequenceId+' option:selected').text());
	var productId=lineItem.productId;
	var quantityAvl=0;
	var colorId=$('#colorId_'+sequenceId).val();
	var oldVariantId=$('#variant_'+sequenceId).val();
	var colorList=inventory[productId];
	//alert(colorList);
	var colorIndex=0;
	var variantIndex=0;
	var proceed=false;
	var retialprice;
	
	for(colorIndex=0;colorIndex<colorList.length;colorIndex++)
	{
		if(colorList[colorIndex].colorId==colorId)
		{
			sizeVariants=colorList[colorIndex].sizeVariants;
		}
		
	}
	
	//console.log('11111111111111');
	
	
	
	for(variantIndex=0;variantIndex<sizeVariants.length;variantIndex++)
	{
		//console.log('222222222222');
		
		if(sizeVariants[variantIndex].productVariantId==elementId)
		{
			sizeExists=true;
			quantityAvl=sizeVariants[variantIndex].quantity;
			if(quantityAvl<(parseInt(quantityInCart,10)+1)&&$("li[id^='item_']").length>1)
			{
				removeItem(sequenceId);
				$(".loading_page").css('display','none');
				return;
			}
			$("#quantity_"+sequenceId).text(1);
			$("#quantities_"+sequenceId).val(1);
			lineItem.quantity=1;
			//console.log('----salePrice is '+sizeVariants[variantIndex].salePrice);
			unitPrice=sizeVariants[variantIndex].salePrice>0.0?sizeVariants[variantIndex].salePrice:sizeVariants[variantIndex].retailPrice;
			lineItem.unitPrice=unitPrice;
			//console.log('----lineItem.unitPrice is '+lineItem.unitPrice);
			if(sizeVariants[variantIndex].salePrice>0.0)
				isSale=true;
			if(sizeVariants[variantIndex].isPreOrder==true)
				isPreOrder=true;
			lineItem.isSale=isSale;
			lineItem.isPreOrder=isPreOrder;
			lineItem.retailPrice=sizeVariants[variantIndex].retailPrice;
			//console.log('sizeVariants[variantIndex].retailPrice is ----> is '+sizeVariants[variantIndex].retailPrice+' and lineItem.retailPrice is ----> '+lineItem.retailPrice);
			
			var count=1;
			while(count<=quantityAvl)
			{
				if(!isMobileDevice()){
					if(oldQty==count)
						qtyHtml+='<option id="'+count+'" value="'+count+'"  selected="selected">'+count+'</option>';
					else
						qtyHtml+='<option id="'+count+'" value="'+count+'" >'+count+'</option>';
				}
				else{
					if(oldQty==count)
						qtyHtml+='<option id="'+count+'" value="'+count+'"  selected="selected">'+count+'</option>';
					else
						qtyHtml+='<option id="'+count+'" value="'+count+'" >'+count+'</option>';
				}
				
				count++;
			}
			$("#quantities_"+sequenceId).html(qtyHtml);
			break;
		}
		
	}
	
	//console.log('333333333333');
	
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
				//console.log('44444444444444444');		
				if(data.responseCode>0)
				{
					//console.log('5555555555555555555    ------> '+data.responseCode);
					
					//$("#message_"+sequenceId).hide();
					$('#variant_'+data.responseCode).val(elementId);
					var cartItems=data.shoppingCart.lineItems;
					var lineIndex=0;
					for(lineIndex=0;lineIndex<cartItems.length;lineIndex++)
					{
						//console.log('666666666666');
						
						if(sequenceId==cartItems[lineIndex].sequenceId)
						{
							
							//console.log('77777777777777777');
							
							$("#price_"+sequenceId).text('$'+cartItems[lineIndex].price.toFixed(2));
							if(cartItems[lineIndex].isPreOrder==true)
							{
								$("#preOrder_"+sequenceId).removeClass("dn");
							}
							
							if(cartItems[lineIndex].isSale==true && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
							{
								if($('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
								{
									$("#sale_"+sequenceId).text('FINAL SALE');
									//console.log('SalePrice  is --->'+cartItems[lineIndex].price.toFixed(2));
									//console.log('SalePrice for SingleQuantity is --->'+(cartItems[lineIndex].price.toFixed(2))/cartItems[lineIndex].quantity);
									var flagSingleSalePri= (cartItems[lineIndex].price.toFixed(2))/cartItems[lineIndex].quantity;
									var DiscountedSalePrice = ((flagSingleSalePri).toFixed(2))-((flagSingleSalePri).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
									//console.log('DiscountedSalePrice ---> is '+DiscountedSalePrice);
									//console.log('Retail Price  is --->'+cartItems[lineIndex].retailPrice);
									$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(cartItems[lineIndex].retailPrice*cartItems[lineIndex].quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+(DiscountedSalePrice*cartItems[lineIndex].quantity).toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
									//$("#real_price_"+sequenceId).val((parseFloat(cartItems[lineIndex].price)-(parseFloat(cartItems[lineIndex].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
									$('#cartsavings').show();
								}
								else if($('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && cartItems[lineIndex].vendorName.toLowerCase()==$('#saleBrandNames').val())
								{
									var flagSingleSalePri= (cartItems[lineIndex].price.toFixed(2))/cartItems[lineIndex].quantity;
									var DiscountedSalePrice = ((flagSingleSalePri).toFixed(2))-((flagSingleSalePri).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
									$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(cartItems[lineIndex].retailPrice*cartItems[lineIndex].quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+(DiscountedSalePrice*cartItems[lineIndex].quantity).toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
									$('#cartsavings').show();
								}
								else if(cartItems[lineIndex].isSale==true)
								{
									$("#sale_"+sequenceId).text('SALE');
									$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(cartItems[lineIndex].retailPrice*cartItems[lineIndex].quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+cartItems[lineIndex].price.toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
									$("#real_price_"+sequenceId).val((parseFloat(cartItems[lineIndex].price)).toFixed(2));
									//$("#price_"+lineItem.sequenceId).css({'color':'red'});
								}
							}
							
							else if(cartItems[lineIndex].isSale==true)
							{
								//console.log('88888888888888888');
								
								$("#sale_"+sequenceId).text('SALE');
								$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(cartItems[lineIndex].retailPrice*cartItems[lineIndex].quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+cartItems[lineIndex].price.toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
								$("#real_price_"+sequenceId).val((parseFloat(cartItems[lineIndex].price)).toFixed(2));
								//$("#price_"+lineItem.sequenceId).css({'color':'red'});
							}
							else
							{
								if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && cartItems[lineIndex].vendorName.toLowerCase()==$('#saleBrandNames').val())
								{
									//console.log("price :: "+cartItems[lineIndex].price);
									var flagSingleSalePri= (cartItems[lineIndex].price.toFixed(2))/cartItems[lineIndex].quantity;
									var DiscountedSalePrice = ((flagSingleSalePri).toFixed(2))-((flagSingleSalePri).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
									$("#real_price_"+sequenceId).val(cartItems[lineIndex].price.toFixed(2));
									$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(cartItems[lineIndex].retailPrice*cartItems[lineIndex].quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+(DiscountedSalePrice*cartItems[lineIndex].quantity).toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
								}
								else
								{
									//console.log('999999999999999');
									$("#real_price_"+sequenceId).val(cartItems[lineIndex].price.toFixed(2));
									$('.cart_price'+lineItem.sequenceId).html('<b id="price_'+lineItem.sequenceId+'">$'+cartItems[lineIndex].retailPrice.toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
								}
								
							}
							
							
							/*if(lineItem.isSale==true && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true')
							{
								
								//console.log('10101010101010101010');
								
								$("#real_price_"+sequenceId).val((parseFloat(cartItems[lineIndex].price)-(parseFloat(cartItems[lineIndex].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
								$("#price_"+sequenceId).text('$'+(parseFloat(cartItems[lineIndex].price)-(parseFloat(cartItems[lineIndex].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
							}
							else
								{
								
								//console.log('11-11-111-111111');
									$("#real_price_"+sequenceId).val(cartItems[lineIndex].price.toFixed(2));
									$("#price_"+sequenceId).text('$'+cartItems[lineIndex].price.toFixed(2));
								}*/
							$("#size_"+sequenceId).val(cartItems[lineIndex].size);
							$("#sizes_"+sequenceId).val(cartItems[lineIndex].size.replace(".0",""));
							break;
						}
						if(data.responseCode!=sequenceId){
							//console.log("Remove the Item and Added Qty : "+cartItem.quantity);  // Something Grouping
							$("#quantity_"+data.responseCode).text(cartItems[lineIndex].quantity);
							if(lineItem.isSale==true && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
							{
                                //console.log('SalePrice  is --->'+cartItems[lineIndex].price.toFixed(2));
								//console.log('SalePrice for SingleQuantity is --->'+(cartItems[lineIndex].price.toFixed(2))/cartItems[lineIndex].quantity);
								var flagSingleSalePri= (cartItems[lineIndex].price.toFixed(2))/cartItems[lineIndex].quantity;
								var DiscountedSalePrice = ((flagSingleSalePri).toFixed(2))-((flagSingleSalePri).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
								//console.log('DiscountedSalePrice ---> is '+DiscountedSalePrice);
								//console.log('Retail Price  is --->'+cartItems[lineIndex].retailPrice);
								$('#cart_price_'+data.responseCode).html('<strike id="strike_retailPrice_'+data.responseCode+'">$'+(cartItems[lineIndex].retailPrice*cartItems[lineIndex].quantity).toFixed(2)+'</strike><b id="price_'+data.responseCode+'">$'+(DiscountedSalePrice*cartItems[lineIndex].quantity).toFixed(2)+'</b><code onclick="removeItem('+data.responseCode+');"  class="close_cart_shoe"></code>');
								$('#cartsavings').show();
								$("#real_price_"+data.responseCode).val((DiscountedSalePrice*cartItems[lineIndex].quantity).toFixed(2));
								//$("#real_price_"+data.responseCode).val((parseFloat(cartItems[lineIndex].price)-(parseFloat(cartItems[lineIndex].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
								//$("#price_"+data.responseCode).text('$'+(parseFloat(cartItems[lineIndex].price)-(parseFloat(cartItems[lineIndex].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
							}
							else if(lineItem.isSale==true)
							{
								$('#cart_price_'+data.responseCode).html('<strike id="strike_retailPrice_'+data.responseCode+'">$'+(cartItems[lineIndex].retailPrice*cartItems[lineIndex].quantity).toFixed(2)+'</strike><b id="price_'+data.responseCode+'">$'+(cartItems[lineIndex].quantity).toFixed(2)+'</b><code onclick="removeItem('+data.responseCode+');"  class="close_cart_shoe"></code>');
								$("#real_price_"+data.responseCode).val(parseFloat((cartItems[lineIndex].quantity).toFixed(2)));
							}
							
							else
							{
								if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && cartItems[lineIndex].vendorName.toLowerCase()==$('#saleBrandNames').val())
								{
									//console.log("price :: "+cartItems[lineIndex].price);
									var flagSingleSalePri= (cartItems[lineIndex].price.toFixed(2))/cartItems[lineIndex].quantity;
									var DiscountedSalePrice = ((flagSingleSalePri).toFixed(2))-((flagSingleSalePri).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
									$("#real_price_"+data.responseCode).val(cartItems[lineIndex].price.toFixed(2));
									$('#cart_price_'+data.responseCode).html('<strike id="strike_retailPrice_'+data.responseCode+'">$'+(cartItems[lineIndex].retailPrice*cartItems[lineIndex].quantity).toFixed(2)+'</strike> <b id="price_'+data.responseCode+'">$'+(DiscountedSalePrice*cartItems[lineIndex].quantity).toFixed(2)+'</b><code onclick="removeItem('+data.responseCode+');"  class="close_cart_shoe"></code>');
								}
								else
								{
									$('#cart_price_'+data.responseCode).html('<b id="price_'+data.responseCode+'">$'+(cartItems[lineIndex].quantity).toFixed(2)+'</b><code onclick="removeItem('+data.responseCode+');"  class="close_cart_shoe"></code>');
									$("#real_price_"+data.responseCode).val(parseFloat(cartItems[lineIndex].price.toFixed(2)));
									$("#price_"+data.responseCode).text('$'+cartItems[lineIndex].price.toFixed(2));
								}
							}
							//$("#price_"+data.responseCode).text('$'+cartItems[lineIndex].price.toFixed(2));
							$("#item_"+sequenceId).remove();
							//if(isMobileDevice())
								$("#quantities_"+data.responseCode).val(cartItems[lineIndex].quantity);
						}
					}
					if(readCookie('Facebook')!=null  && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
					{
						savingsForDiscountProgram();
					}
					else
				    {
						//$('#subTotal_Price').text('$'+data.shoppingCart.totalRetialPrice.toFixed(2));
			    		$('#subTotal_Price').text('$'+data.shoppingCart.subTotal.toFixed(2));
			    		if(data.shoppingCart.savings!='0.0')
			    		{
			    			$('#cartsavings').css('display','block');
				    		$('#savings_Price').text('-$'+data.shoppingCart.savings.toFixed(2));
			    		}
				    }
					
//					console.log("sb"+'$'+data.shoppingCart.totalRetialPrice.toFixed(2));
//					console.log("sv"+'-$'+data.shoppingCart.savings.toFixed(2))
//					console.log("sb"+'$'+data.shoppingCart.subTotal.toFixed(2))
					
					
				//	$('#subTotal_Price').text('$'+data.shoppingCart.totalRetialPrice.toFixed(2));
		    	//	$('#subTotal_Price').text('$'+data.shoppingCart.subTotal.toFixed(2));//Commented by m5k
		    		/*if(data.shoppingCart.savings!='0.0')
		    		{
		    			$('#cartsavings').css('display','block');
			    		$('#savings_Price').text('-$'+data.shoppingCart.savings.toFixed(2));
		    		}*/
		    		$(".loading_page").css('display','none');
					
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
	//changeCurrency(currencyType);
	//$(".custom_dropdown").kgcustomdropdown();
}

function onQuantityChange(sequenceId)
{
	$.ajaxSetup({async:true});
	$(".loading_page").css('display','block');
	var elementId=$('#quantities_'+sequenceId+' option:selected').attr('id');
	$('#quantity_'+sequenceId).text($('#quantities_'+sequenceId+' option:selected').text());
	
	$("#message_"+sequenceId).hide();
	var oldQuantity=$("#quantity_"+sequenceId).text();
	var newQuantity=elementId;
	var myVariantId=$("#variant_"+sequenceId).val();
//	if(oldQuantity==newQuantity)
//		return;
	$.ajax({url:'/updateQuantity.htm',
		dataType:'json',
		cache:false,
		data:{variantId:myVariantId,quantity:newQuantity},
		success:function(res){
			if(res.responseCode>0){
				////console.log('success in updating quantity');
				var index=0;
				var carItems=res.shoppingCart.lineItems;
				for(index=0;index<carItems.length;index++){
					if(carItems[index].sequenceId==sequenceId){
						
						
						if(carItems[index].isSale==true && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
						{
							if($('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
							{
								$("#sale_"+sequenceId).text('FINAL SALE');
								var tempSalePrice = (carItems[index].price.toFixed(2))/carItems[index].quantity;
								var DiscountedSalePrice = (tempSalePrice.toFixed(2))-(tempSalePrice.toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
								
								$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(carItems[index].retailPrice*carItems[index].quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+(DiscountedSalePrice*carItems[index].quantity).toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
								$('#cartsavings').show();
								$("#price_"+sequenceId).text('$'+(parseFloat(carItems[index].price)-(parseFloat(carItems[index].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
								$("#real_price_"+sequenceId).val((parseFloat(carItems[index].price)-(parseFloat(carItems[index].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
							}
							else if($('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && carItems[index].vendorName.toLowerCase()==$('#saleBrandNames').val())
							{
								var tempSalePrice = (carItems[index].price.toFixed(2))/carItems[index].quantity;
								var DiscountedSalePrice = (tempSalePrice.toFixed(2))-(tempSalePrice.toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
								$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(carItems[index].retailPrice*carItems[index].quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+(DiscountedSalePrice*carItems[index].quantity).toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
								$('#cartsavings').show();
							}
							else if(carItems[index].isSale==true)
							{
								$("#sale_"+sequenceId).text('SALE');
								$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(carItems[index].retailPrice*carItems[index].quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+carItems[index].price.toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
								$("#real_price_"+sequenceId).val(parseFloat(carItems[index].retailPrice).toFixed(2));
							}
						}
						else if(carItems[index].isSale==true)
						{
							$("#sale_"+sequenceId).text('SALE');
							$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(carItems[index].retailPrice*carItems[index].quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+carItems[index].price.toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
							$("#real_price_"+sequenceId).val(parseFloat(carItems[index].retailPrice).toFixed(2));
						}
						else
						{
							//console.log("coming into non-sale condition");
							if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && carItems[index].vendorName.toLowerCase()==$('#saleBrandNames').val())
							{
								console.log("coming to correct condition");
								var tempSalePrice = (carItems[index].price.toFixed(2))/carItems[index].quantity;
								var DiscountedSalePrice = (tempSalePrice.toFixed(2))-(tempSalePrice.toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
								console.log("price:: "+tempSalePrice+" && discount sale price :: "+DiscountedSalePrice);
								$('#cart_price_'+sequenceId).html('<strike id="strike_retailPrice_'+sequenceId+'">$'+(carItems[index].retailPrice*carItems[index].quantity).toFixed(2)+'</strike> <b id="price_'+sequenceId+'">$'+(DiscountedSalePrice*carItems[index].quantity).toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
								$('#cartsavings').show();
							}
							else
							{
								$('#cart_price_'+sequenceId).html('<b id="price_'+sequenceId+'">$'+carItems[index].price.toFixed(2)+'</b><code onclick="removeItem('+sequenceId+');"  class="close_cart_shoe"></code>');
								$("#real_price_"+sequenceId).val(parseFloat(carItems[index].price).toFixed(2));
							}
						}
							
						break;
					}	
				}
				$("#quantity_"+sequenceId).text(newQuantity);
				if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
					{
						savingsForDiscountProgram();
					}
				else {
					//$('#subTotal_Price').text('$'+res.shoppingCart.totalRetialPrice.toFixed(2));
		    		$('#subTotal_Price').text('$'+res.shoppingCart.subTotal.toFixed(2));
		    		if(res.shoppingCart.savings!='0.0')
		    		{
		    			$('#cartsavings').css('display','block');
		    			$('#savings_Price').text('-$'+res.shoppingCart.savings.toFixed(2));
		    		}
				}
				
				//$('#subTotal_Price').text('$'+res.shoppingCart.totalRetialPrice.toFixed(2));
	    		//$('#subTotal_Price').text('$'+res.shoppingCart.subTotal.toFixed(2));//Chithra commented
	    		/*if(res.shoppingCart.savings!='0.0')
	    		{
	    			$('#cartsavings').css('display','block');
	    			$('#savings_Price').text('-$'+res.shoppingCart.savings.toFixed(2));
	    		}*/
	    		$(".loading_page").css('display','none');
			}
			else{
				//error;
				$("#quantity_"+sequenceId).text(oldQuantity);
				$("#quantities_"+sequenceId).val(oldQuantity);
				$(".loading_page").css('display','none');
			}
			//$(".loading_page").css('display','none');
		}
	});
}

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
	var sizeHTML='';
	var qtyHTML='';	
	var myHTML= '<li id="item_'+lineItem.sequenceId+'" >';
	myHTML+='<div class="cart_shoe_list">';
	myHTML+='<a class="cart_shoe_thumb" href=\"/'+lineItem.vendorName.replace(/ /g,"-").toLowerCase()+'-'+lineItem.productName.replace(/ /g,"-").toLowerCase()+'-'+lineItem.colorName.replace(/ /g,"-").toLowerCase()+'/index.html\">';
	myHTML+='<img id="image_'+lineItem.sequenceId+'" width="120" height="90" src="'+getImageUrl(lineItem.vendorName,lineItem.productName,lineItem.colorName)+'"  /></a>';
	myHTML+='<a href=\"/'+lineItem.vendorName.replace(/ /g,"-").toLowerCase()+'-'+lineItem.productName.replace(/ /g,"-").toLowerCase()+'-'+lineItem.colorName.replace(/ /g,"-").toLowerCase()+'/index.html\">';
	myHTML+='<div class="cart_shoe_dts">';
	myHTML+='<b id="productName_'+lineItem.sequenceId+'" >'+lineItem.productName+'</b><br/>';
	myHTML+='<span id="vendorName_'+lineItem.sequenceId+'"  >'+lineItem.vendorName+'</span>';
	myHTML+='<input type="hidden" name="product" id="product_'+lineItem.sequenceId+'" value="'+lineItem.productId+'"/>';
	myHTML+='<input type="hidden" name="variant" id="variant_'+lineItem.sequenceId+'" value="'+lineItem.productVariantId+'"/>';
	myHTML+='<input type="hidden" name="colorId" id="colorId_'+lineItem.sequenceId+'" value="'+lineItem.colorId+'"/>';
	if(lineItem.isSale==true && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
	{
		if($('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
		{
			myHTML+='<h1 id="preOrder_'+lineItem.sequenceId+'" class="dn">PRESALE</h1><h1 id="sale_'+lineItem.sequenceId+'" class="dn">Final Sale</h1> <h1 id="sale_'+lineItem.sequenceId+'">Final Sale</h1>';
		}
		else if($('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && lineItem.vendorName.toLowerCase()==$('#saleBrandNames').val())
		{
			myHTML+='<h1 id="preOrder_'+lineItem.sequenceId+'" class="dn">PRESALE</h1><h1 id="sale_'+lineItem.sequenceId+'" class="dn">Sale</h1>';
		}
		else if(lineItem.isSale==true)
		{
			myHTML+='<h1 id="preOrder_'+lineItem.sequenceId+'" class="dn">PRESALE</h1><h1 id="sale_'+lineItem.sequenceId+'" >Sale</h1>';
		}
		
		else
		{
			myHTML+='<h1 id="preOrder_'+lineItem.sequenceId+'" class="dn">PRESALE</h1><h1 id="sale_'+lineItem.sequenceId+'" class="dn">Sale</h1>';
		}
	}
	
	else if(lineItem.isSale==true)
	{
		myHTML+='<h1 id="preOrder_'+lineItem.sequenceId+'" class="dn">PRESALE</h1><h1 id="sale_'+lineItem.sequenceId+'" >Sale</h1>';
	}
	
	else
	{
		myHTML+='<h1 id="preOrder_'+lineItem.sequenceId+'" class="dn">PRESALE</h1><h1 id="sale_'+lineItem.sequenceId+'" class="dn">Sale</h1>';
	}
	
	
	/*
	if(lineItem.isSale==true)
	{
		myHTML+='<h1 id="sale_'+lineItem.sequenceId+'">Sale</h1>';
	}
	if(lineItem.isPreOrder==true)
	{
		myHTML+='<h1 id="preOrder_'+lineItem.sequenceId+'">PREORDER</h1>';/
	}*/
	
	myHTML+=' </div></a>';
	
	
	myHTML+='<div class=cart_price id=cart_price_'+lineItem.sequenceId+'>';
	
	if(lineItem.isSale==true && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
	{
		if($('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
		{
			var flag_Single = lineItem.price/lineItem.quantity;
			//console.log("lineItem price is :: "+lineItem.price);
			var DiscountedSalePrice = ((flag_Single).toFixed(2))-((flag_Single).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
			//console.log('DiscountedSalePrice ---> is '+DiscountedSalePrice);
		
			myHTML+='<strike id="strike_retailPrice_'+lineItem.sequenceId+'">$'+(lineItem.retailPrice*lineItem.quantity).toFixed(2)+'</strike> <b id="price_'+lineItem.sequenceId+'">$'+(DiscountedSalePrice*lineItem.quantity).toFixed(2)+'</b>';
		}
		else if($('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && lineItem.vendorName.toLowerCase()==$('#saleBrandNames').val())
		{
			//console.log("coming to brand sale");
			var flag_Single = lineItem.price/lineItem.quantity;
			//console.log("lineItem price duplicate is :: "+lineItem.price);
			var DiscountedSalePrice = ((flag_Single).toFixed(2))-((flag_Single).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
			//console.log('DiscountedSalePrice ---> is '+DiscountedSalePrice);
		
			myHTML+='<strike id="strike_retailPrice_'+lineItem.sequenceId+'">$'+(lineItem.retailPrice*lineItem.quantity).toFixed(2)+'</strike> <b id="price_'+lineItem.sequenceId+'">$'+(DiscountedSalePrice*lineItem.quantity).toFixed(2)+'</b>';
		}
		else if(lineItem.isSale==true)
		{
			//console.log("populate sale shoe not to real sale");
			myHTML+='<strike id="strike_retailPrice_'+lineItem.sequenceId+'">$'+(lineItem.retailPrice*lineItem.quantity).toFixed(2)+'</strike> <b id="price_'+lineItem.sequenceId+'">$'+lineItem.price.toFixed(2)+'</b>';
		}
		else
		{
			myHTML+='<b id="price_'+lineItem.sequenceId+'">$'+lineItem.price.toFixed(2)+'</b>';
		}
	}
	
	else if(lineItem.isSale==true)
	{
		myHTML+='<strike id="strike_retailPrice_'+lineItem.sequenceId+'">$'+(lineItem.retailPrice*lineItem.quantity).toFixed(2)+'</strike> <b id="price_'+lineItem.sequenceId+'">$'+lineItem.price.toFixed(2)+'</b>';
	}
	else
	{
		if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && lineItem.vendorName.toLowerCase()==$('#saleBrandNames').val())
		{
			//console.log("populate line item price is :: "+lineItem.retailPrice);
			//myHTML+='<strike id="strike_retailPrice_'+lineItem.sequenceId+'">$'+(lineItem.retailPrice*lineItem.quantity).toFixed(2)+'</strike> <b id="price_'+lineItem.sequenceId+'">$'+lineItem.price.toFixed(2)+'</b>';
			var flag_Single = lineItem.retailPrice;
			//console.log("lineItem price duplicate is :: "+lineItem.price);
			//console.log("quantity value :: "+lineItem.quantity);
			var DiscountedSalePrice = ((flag_Single).toFixed(2))-((flag_Single).toFixed(2)*parseInt($("#fbsale_discount_percentage").val())/100).toFixed(2);
			//console.log('DiscountedSalePrice ---> is '+DiscountedSalePrice);
		
			myHTML+='<strike id="strike_retailPrice_'+lineItem.sequenceId+'">$'+(lineItem.retailPrice*lineItem.quantity).toFixed(2)+'</strike> <b id="price_'+lineItem.sequenceId+'">$'+(DiscountedSalePrice*lineItem.quantity).toFixed(2)+'</b>';
		}
		else
			myHTML+='<b id="price_'+lineItem.sequenceId+'">$'+lineItem.price.toFixed(2)+'</b>';
	}
	
	myHTML+=' <code onclick="removeItem('+lineItem.sequenceId+');"  class="close_cart_shoe"></code>';
	myHTML+='</div>';
	if(lineItem.isSale==true && readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true')
	{
		if($('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
		{
			//console.log("8");
			myHTML+="<input type=\"hidden\" id=\"real_price_"+lineItem.sequenceId+"\" value=\""+(parseFloat(lineItem.price)-(parseFloat(lineItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2)+"\"/>";
		}
		else if($('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && lineItem.vendorName.toLowerCase()==$('#saleBrandNames').val())
		{
			myHTML+="<input type=\"hidden\" id=\"real_price_"+lineItem.sequenceId+"\" value=\""+(parseFloat(lineItem.price)-(parseFloat(lineItem.price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2)+"\"/>";
		}
		else if(lineItem.isSale==true)
		{
			
			myHTML+="<input type=\"hidden\" id=\"real_price_"+lineItem.sequenceId+"\" value=\""+parseFloat(lineItem.price).toFixed(2)+"\"/>";
		}
		
		else
		{
		myHTML+="<input type=\"hidden\" id=\"real_price_"+lineItem.sequenceId+"\" value=\""+parseFloat(lineItem.retailPrice).toFixed(2)+"\"/>";
		}
	}
	
	else if(lineItem.isSale==true)
	{
		
		myHTML+="<input type=\"hidden\" id=\"real_price_"+lineItem.sequenceId+"\" value=\""+parseFloat(lineItem.price).toFixed(2)+"\"/>";
	}
	
	else
	{
	myHTML+="<input type=\"hidden\" id=\"real_price_"+lineItem.sequenceId+"\" value=\""+parseFloat(lineItem.retailPrice).toFixed(2)+"\"/>";
	}
	
	
	myHTML+=' <div class="clearall"></div>';
	myHTML+='</div><!--cart_shoe_list-->';
	myHTML+='<div class="cart_popup_details">';
	myHTML+=' <div class="size_color_labels">';
	myHTML+='  <label class="color">COLOR:</label>';
	myHTML+=' <label>U.S. SIZE:</label>';
	myHTML+=' <label>QTY:</label>';
	myHTML+=' </div>';
	
	var colorHTML='';
	if(!isMobileDevice()){
		colorHTML+='<div class="custom_select cus_select color_select_dd">';
		colorHTML+=' <div class="select">';
		colorHTML+='       <p class="country" id="color_'+lineItem.sequenceId+'" name="'+lineItem.colorName+'" >'+lineItem.colorName.toUpperCase()+'</p>';
//		colorHTML+='     <span class="custom_drop_nav"></span>';
		colorHTML+=' </div>';
		colorHTML+='<select name="color" data-default="3"  class="custom_select_value_act"  onchange="onColorChange(\''+lineItem.sequenceId+'\')" id="colors_'+lineItem.sequenceId+'">';	
	}
	else{
		colorHTML+='<input type="hidden" readonly="readonly" value="'+lineItem.colorName+'" class="select_fields" id="color_'+lineItem.sequenceId+'" name="color">';
		colorHTML+='<select name="color" data-default="3"  class="custom_select_value_act" onchange="onColorChange(\''+lineItem.sequenceId+'\')" id="colors_'+lineItem.sequenceId+'">';		
	}
	
	var colorIndex=0;
	for(colorIndex=0;colorIndex<colorList.length;colorIndex++){
		var color=colorList[colorIndex];
		if(!isMobileDevice()){
			if(lineItem.colorName==color.colorName)
				colorHTML+='<option id="'+color.colorId+'" name="'+color.colorName+'" selected="selected">'+color.colorName.toUpperCase()+'</option>';
			else
				colorHTML+='<option id="'+color.colorId+'" name="'+color.colorName+'">'+color.colorName.toUpperCase()+'</option>';
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
				sizeHTML+='<div class="custom_select cart_cus_select cus_select">';
				sizeHTML+=' <div class="select">';
				sizeHTML+=' <p class="country" id="size_'+lineItem.sequenceId+'"  >'+lineItem.size.replace(".0","")+'</p>';
//				sizeHTML+=' <span class="custom_drop_nav"></span>';
				sizeHTML+=' </div>';
				sizeHTML+=' <select name="size" data-default="3" class="custom_select_value_act"  onchange="onSizeChange(\''+lineItem.sequenceId+'\')" id="sizes_'+lineItem.sequenceId+'">';
				qtyHTML+='  <div class="custom_select cart_cus_select cus_select">';
				qtyHTML+=' <div class="select">';
				qtyHTML+=' <p class="country" id="quantity_'+lineItem.sequenceId+'" >'+lineItem.quantity+'</p>';
//				qtyHTML+=' <span class="custom_drop_nav"></span>';
				qtyHTML+=' </div>';
				qtyHTML+='<select  name="size" data-default="3" class="custom_select_value_act" onchange="onQuantityChange(\''+lineItem.sequenceId+'\')" id="quantities_'+lineItem.sequenceId+'">';
			}
			else
			{
				sizeHTML+='<input type="hidden" readonly="readonly" value="'+lineItem.size+'" class="select_fields" id="size_'+lineItem.sequenceId+'"  name="size">';
				sizeHTML+='<select name="size" class="size_Cart_mob" data-default="3" class="custom_select_value_act"  onchange="onSizeChange(\''+lineItem.sequenceId+'\')" id="sizes_'+lineItem.sequenceId+'">';
				qtyHTML+='<input type="hidden" readonly="readonly" value="'+lineItem.quantity+'" class="select_fields" id="quantity_'+lineItem.sequenceId+'"  name="quantity">';
				qtyHTML+='<select  name="size" data-default="3" class="qty_Cart_mob" class="custom_select_value_act" onchange="onQuantityChange(\''+lineItem.sequenceId+'\')" id="quantities_'+lineItem.sequenceId+'">';				
			}
			
			var sizeIndex=0;

			for(sizeIndex=0;sizeIndex<sizeList.length;sizeIndex++){
				var sizeVariant=sizeList[sizeIndex];
				if(!isMobileDevice()){
					if(parseFloat(lineItem.size)==sizeVariant.size)
						sizeHTML+='<option id="'+sizeVariant.productVariantId+'" selected="selected">'+sizeVariant.size.replace(".0","")+'</option>';
					else
						sizeHTML+='<option id="'+sizeVariant.productVariantId+'">'+sizeVariant.size.replace(".0","")+'</option>';
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
							if(lineItem.quantity==count)
								qtyHTML+='<option id="'+count+'" value="'+count+'" selected="selected">'+count+'</option>';
							else
								qtyHTML+='<option id="'+count+'" value="'+count+'" >'+count+'</option>';
						}
						else{
							if(lineItem.quantity==count)
								qtyHTML+='<option id="'+count+'" value="'+count+'" selected="selected">'+count+'</option>';
							else
								qtyHTML+='<option id="'+count+'" value="'+count+'" >'+count+'</option>';
						}
						count++;
					}			
				}
				
			}//End of Size loop
			if(!isMobileDevice()){
				sizeHTML+='</select></div>';
				qtyHTML+='</select></div>';			
			}
			else{
				sizeHTML+='</select></div>';
				qtyHTML+='</select></div>';			

			}
			//break;
		}
	}
	
	if(!isMobileDevice()){
		colorHTML+='</select>';
		colorHTML+='</div><!-- custome_select--->';
	}
	else{
		colorHTML+='</select>';
		colorHTML+='</div><!-- custome_select--->';
	}
	
	myHTML+=colorHTML;
	myHTML+=sizeHTML;
	myHTML+=qtyHTML;
	myHTML+='</div>';
	myHTML+='<div class="clearall"></div>';
	myHTML+='</li>';
	myHTML+='<li style="display: none;" id="message_'+lineItem.sequenceId+'">';
		myHTML+='<div class="error_oh_snap_holder error_cart">';
			myHTML+='	<img width="120" border="0" height="90" src="'+getImageUrl(lineItem.vendorName,lineItem.productName,lineItem.colorName)+'"  id="outofstockimage_'+lineItem.sequenceId+'">';
				myHTML+='<h3> OH SNAP. THESE ARE OUT OF STOCK.</h3>';
				myHTML+='<div class="clearall"></div>';
					myHTML+='<font id="notify_'+lineItem.sequenceId+'" >DO YOU WANT US TO EMAIL YOU WHEN WE GOT MORE IN-STOCK?</font>';
					myHTML+='<span class="notify" id="outofstocknotify_'+lineItem.sequenceId+'" onclick="sendNotifyRequest('+lineItem.sequenceId+')">NOTIFY ME</span>';
					myHTML+='<font id="thanks_'+lineItem.sequenceId+'" style="display:none">THANKS! WE\'L\L GIVE YOU A HEADS UP WHEN WE GET MORE IN-STOCK.</font>';
						myHTML+='	</div>';
							myHTML+='</li>';
	$("#cartItems").append(myHTML);

}


function showidp(lineItem)
{
	window.location.href='\'/'+lineItem.vendorName.replace(/ /g,"-").toLowerCase()+'-'+lineItem.productName.replace(/ /g,"-").toLowerCase()+'-'+lineItem.colorName.replace(/ /g,"-").toLowerCase()+'/index.html';
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
	_gaq.push(['_trackPageview', '/shoppingCart']);
	$(".loading_page").hide();
	$('code.processing_icon').css('display:none');
	if($("#cartItems li[id^='item_']").length==0){
		$("#cartWithoutContent").show();
		$("#cartWithContent").hide();
	}
	else{
		$("#cartWithoutContent").hide();
		$("#cartWithContent").show();
	}

	$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px');
	$('.cart_popup').fadeIn();
	$('.cart_popup_holder').fadeIn();
	//checkForSaleShoesForFBLogin();
	//changeCurrency(currencyType);
	//$(".custom_dropdown").kgcustomdropdown();
}

function getLineItem(sequenceId)
{
	var lineItem=new Object();
	lineItem.productId=$('#product_'+sequenceId).val();
	lineItem.productVariantId=$("#variant_"+sequenceId).val();
	lineItem.colorName=$('#colors_'+sequenceId+' option:selected').attr('name');
	lineItem.size=$('#size_'+sequenceId).text();
	lineItem.quantity=$('#quantity_'+sequenceId).text();
	lineItem.productName=$('#productName_'+sequenceId).text();
	var vendorName=$('#vendorName_'+sequenceId).text().split('-');
	lineItem.vendorName=$.trim(vendorName[0]);
	lineItem.colorId=$('#colorId_'+sequenceId).val();
	lineItem.retailPrice=$('#real_price_'+sequenceId).val();
	lineItem.sequenceId=sequenceId;
	if($("#saleprice_div").text().indexOf('Final Sale')!=-1)
	{
		if($.trim($('#saleprice_div').text().replace('Final Sale $',''))!="")
			lineItem.price=$.trim($('#saleprice_div').text().replace('Final Sale $',''));	
	}
	else
	{
		if($.trim($('#saleprice_div').text().replace('$',''))!="")
			lineItem.price=$.trim($('#saleprice_div').text().replace('$',''));
	}
	
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


function getSequenceIdOfItem(productVariantId)
{
	var liObjects=$('input[name="variant"]');
	var sequenceId=null;
	for(index=0;index<liObjects.length;index++)
	{
		var obj=liObjects[index];
		if(obj.value==productVariantId)
		{
			////console.log("id is "+obj.id);
			var ids=obj.id.split("_");
			sequenceId=ids[1];
			////console.log("sequeceId is "+ids);
			////console.log("sequeceId is "+sequenceId);
			break;
		}
	}
	return sequenceId;
}
function redirectToCheckout()
{
   // $(".popup_processing_icon").addClass('popup_processing_btn');
	$('.cart_credit').addClass('brwn_btn_active');
    $('.popup_processing_icon_credit').css('display','block');
    
	if( $("#cartItems").children("li").length==0){
		$("#cartWithoutContent").show();
		$("#cartWithContent").hide();
		return;
	}
	$("#cartWithoutContent").hide();
	$("#cartWithContent").show();
	
	//document.forms["popupForm"].submit();
	/*var cookieVal=readCookie('orderid');
	var utma=readCookie('__utma');
	var utmb=readCookie('__utmb');
	var utmc=readCookie('__utmc');
	var utmz=readCookie('__utmz');*/
	//window.location='/checkout/sign-in.htm';
	
	if(location.host.indexOf("localhost")!=-1)
	{
		if($("#isLoggedInNotify").val()=="" || $("#isLoggedInNotify").val()=="false")
		{
			//console.log('---->>>>> Local SignIn ---->>>>');
			window.location='/checkout/sign-in.htm';
		}
		else
		{
			//console.log('---->>>>> Local AccountInfo ---->>>>');
			window.location='/checkout/account-info.htm';
		}
			//window.location='/checkout/sign-in.htm'+'?orderid='+cookieVal+'&__utma='+utma+'&__utmb='+utmb+'&__utmc='+utmc+'&__utmz='+utmz;
			//_gaq.push(['_link', '/checkout/sign-in.htm?orderid='+cookieVal]);
	}
	else
	{
		if(location.host.indexOf("www.solestruck.com")!=-1||location.host.indexOf("beta.solestruck.com")!=-1)
		{
			//location='https://www.solestruck.com/checkout/sign-in.htm'+'?orderid='+cookieVal+'&__utma='+utma+'&__utmb='+utmb+'&__utmc='+utmc+'&__utmz='+utmz;
			//location='https://www.solestruck.com/checkout/sign-in.htm?orderid='+cookieVal;
		if($("#isLoggedInNotify").val()=="" || $("#isLoggedInNotify").val()=="false")
		{
			//console.log('---->>>>> Live SignIn ---->>>>');
			window.location='https://www.solestruck.com/checkout/sign-in.htm';
		}
		else
		{
			//console.log('---->>>>> Live AccountInfo ---->>>>');
			window.location='https://www.solestruck.com/checkout/account-info.htm';
		}
			
			//_gaq.push(['_link', 'https://www.solestruck.com/checkout/sign-in.htm?orderid='+cookieVal]);
			//location='https://beta.solestruck.com/checkout/sign-in.htm';
		}
		else if(location.host.indexOf("live-solestruck.appspot.com")!=-1)
		{
			//location='https://live-solestruck.appspot.com/checkout/sign-in.htm'+'?orderid='+cookieVal+'&__utma='+utma+'&__utmb='+utmb+'&__utmc='+utmc+'&__utmz='+utmz;
			//location='https://live-solestruck.appspot.com/checkout/sign-in.htm?orderid='+cookieVal;
			//window.location='https://www.solestruck.com/checkout/sign-in.htm';
		if($("#isLoggedInNotify").val()=="" || $("#isLoggedInNotify").val()=="false")
		{
			//console.log('---->>>>> Live appspot SignIn ---->>>>');
			window.location='https://www.solestruck.com/checkout/sign-in.htm';
		}
		else
		{
			//console.log('---->>>>> Live appspot AccountInfo ---->>>>');
			window.location='https://www.solestruck.com/checkout/account-info.htm';
		}
			//location.href="/checkout/sign-in.htm?orderid="+cookieVal;
			//_gaq.push(['_link', 'https://live-solestruck.appspot.com/checkout/sign-in.htm?orderid='+cookieVal]);
			//location='https://beta.solestruck.com/checkout/sign-in.htm';
		}
		else if(location.host.indexOf("testing.solestruck.com")!=-1)
		{
			//location='https://testing-solestruck.a-cti.com/checkout/sign-in.htm'+'?orderid='+cookieVal+'&__utma='+utma+'&__utmb='+utmb+'&__utmc='+utmc+'&__utmz='+utmz;
			//location='https://testing-solestruck.a-cti.com/checkout/sign-in.htm?orderid='+cookieVal;
			//window.location='https://testing.solestruck.com/checkout/sign-in.htm';
		if($("#isLoggedInNotify").val()=="" || $("#isLoggedInNotify").val()=="false")
		{
			//console.log('---->>>>> Testing SignIn ---->>>>');
			window.location='https://testing.solestruck.com/checkout/sign-in.htm';
		}
		else
		{
			//console.log('---->>>>> Testing AccountInfo ---->>>>');
			window.location='https://testing.solestruck.com/checkout/account-info.htm';
		}
			//location.href="/checkout/sign-in.htm?orderid="+cookieVal;
			//_gaq.push(['_link', 'https://testing-solestruck.a-cti.com/checkout/sign-in.htm?orderid='+cookieVal]);
			//location='https://testing-solestruck.a-cti.com/checkout/sign-in.htm';
		}
		else if(location.host.indexOf("testing-solestruck.appspot.com")!=-1 ||location.host.indexOf("gae.solestruck.com")!=-1) 
		{
			//location='https://testing-solestruck.appspot.com/checkout/sign-in.htm'+'?orderid='+cookieVal+'&__utma='+utma+'&__utmb='+utmb+'&__utmc='+utmc+'&__utmz='+utmz;
			//location='https://testing-solestruck.appspot.com/checkout/sign-in.htm?orderid='+cookieVal;
			//window.location='https://testing.solestruck.com/checkout/sign-in.htm';
		if($("#isLoggedInNotify").val()=="" || $("#isLoggedInNotify").val()=="false")
		{
			//console.log('---->>>>> Testing appspot SignIn ---->>>>');
			window.location='https://testing.solestruck.com/checkout/sign-in.htm';
		}
		else
		{
			//console.log('---->>>>> Testing appspot AccountInfo ---->>>>');
			window.location='https://testing.solestruck.com/checkout/account-info.htm';
		}
			//location.href="/checkout/sign-in.htm?orderid="+cookieVal;
			//_gaq.push(['_link', 'https://testing-solestruck.appspot.com/checkout/sign-in.htm?orderid='+cookieVal]);
			//location='https://testing-solestruck.a-cti.com/checkout/sign-in.htm';
		}
		else if(location.host.indexOf("development-solestruck.appspot.com")!=-1 ||location.host.indexOf("gae.solestruck.com")!=-1) 
		{
			//window.location='https://development-solestruck.appspot.com/checkout/sign-in.htm';
		if($("#isLoggedInNotify").val()=="" || $("#isLoggedInNotify").val()=="false")
		{
			//console.log('---->>>>> Development SignIn ---->>>>');
			window.location='https://development-solestruck.appspot.com/checkout/sign-in.htm';
		}
		else
		{
			//console.log('---->>>>> Development AccountInfo ---->>>>');
			window.location='https://development-solestruck.appspot.com/checkout/account-info.htm';
		}
			
		}
		/*
		else if(location.host.indexOf("appspot.com")!=-1)
		{
			location='/checkout/sign-in.htm';
		}*/
	}
}


function goToPreviousPage()
{
	history.go(0);	 
	/*//console.log("--------->>>>>>>IN SIDE  goToPreviousPage()");
	 closeCartPopup();
	 closeWishList();
	 close_dontseeyoursize_success_actPopup();*/
}
function hideCartPopUp(){
	$('.cart_popup').hide();
	$('#backgroundPopup').hide();
}
function isMobileDevice()
{
	return navigator.userAgent.toLowerCase().indexOf("ipad")!=-1 || navigator.userAgent.toLowerCase().indexOf("iphone")!=-1 || navigator.userAgent.toLowerCase().indexOf("ipod")!=-1 || navigator.userAgent.toLowerCase().indexOf("android")!=-1 || navigator.userAgent.toLowerCase().indexOf("mobile")!=-1;
}

function redirectToPaypal()
{
	$('.cart_paypal').addClass('pay_btn_active');
	$('.popup_processing_icon_paypal').css('display','block');
	window.location='/redirectToPaypalExpress.htm';
	$('#cartItems ul').unbind('click');
	
}

function sendNotifyRequest(sequenceId)
{
	
	var vendorName = $('#vendorName_'+sequenceId).text();
	var productName = $('#productName_'+sequenceId).text();
	var productID=$('#product_'+sequenceId).val();
	var colorSelID=$('#colors_'+sequenceId+' option:selected').attr('id');
	var colorSelName = $('#color_'+sequenceId).attr('name');
	var size = $('#size_'+sequenceId).text();
	var emailid="";
	
	
//	console.log(" vendorName "+vendorName+" productName  "+productName+" productID "+productID+" colorSelID  "+colorSelID+" colorSelName "+colorSelName+"  size "+size+" emailid "+emailid);
	
	$('.loading_page').show();
	//$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
	$.ajaxSetup({cache:false});
	$.getJSON("/dontSeeYourSizeRegister.htm",{"vendorName":vendorName,"productName":productName,"colorName":colorSelName,"productID":productID,"colorID":colorSelID,"size":size,"emailid":emailid,"alertCheck":true},function(data){
		
		$.ajaxSetup({cache:false});
		$('#outofstocknotify_'+sequenceId).hide();
		$('#inStock_'+sequenceId).hide();
		$('#notify_'+sequenceId).hide();
		$('#thanks_'+sequenceId).show();
		$('.loading_page').hide();
		
		 
	});
	
}

function savingsForDiscountProgram()
{
	//console.log("coming inside the savingsForDiscountProgram function");
	var realTotal=0.0;
	$("b[id^='price_']").each(function(){
		var price = $.trim($(this).text().replace("$",""));
		realTotal+=parseFloat(price);
	});
//	$('#subTotal_Price').text('$'+res.shoppingCart.totalRetialPrice.toFixed(2));
	$('#subTotal_Price').text('$'+realTotal.toFixed(2));//Chithra changed
	//console.log("real total value is :: "+realTotal);
	
	var realSubTotal=0.0;
	$("b[id^='price_']").each(function(index,element){
		var price = $.trim($(this).text().replace("$",""));
		ind=index+1;
		var seqId = $(this).attr("id");
		seqId = seqId.substring(seqId.lastIndexOf('_')+1,seqId.length);
		
		//alert($("#strike_retailPrice_"+ind).text());
		if($("#strike_retailPrice_"+seqId).text()!='')
			realSubTotal+=parseFloat(price);
	});
	
	var retailPriceSum=0.0;
	$("strike[id^='strike_retailPrice_']").each(function(){
		retailPriceSum+=parseFloat($.trim($(this).text().replace('$','')));
	});
	if((retailPriceSum-realSubTotal)>0){
		$("#savings_Price").text('-$'+(retailPriceSum-realSubTotal).toFixed(2));
		$("#cartsavings").show();
	}
	else
		$("#cartsavings").hide();
	//console.log("retail price sum is :: "+retailPriceSum);
	//console.log("real subtotal value is :: "+realTotal);
	
	if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Order')
	{
		var subTotal = realTotal.toFixed(2);
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
				$('#facebook_bonus').text('-$'+discountAmountForSubtotal);
				$('#facebookbonus').show();
				//console.log("coming inside the condition and the subtotal is :: "+subTotal);
				$('#subTotal_Price').text('$'+subTotal.toFixed(2));
			}
		}
		if(conditionSatisfied!=true && conditionSatisfied==false)
		{
			//console.log("coming to the conditionSatisfied  :: "+conditionSatisfied+" and the subtotal is :: "+subTotal);
			discountAmountForSubtotal = 0.00;
			subTotal = subTotal-discountAmountForSubtotal;
			$('#facebookbonus').hide();
			//console.log("subtotal after calculation is :: "+subTotal);
			$('#subTotal_Price').text('$'+subTotal.toFixed(2));
		}
		
	}
	else
	{
		discountAmountForSubtotal = 0;
		$('#facebookbonus').hide();
	}
	
//	if((retailPriceSum-realSubTotal)>0)
//	{
//		if(discountAmountForSubtotal!=0 && discountAmountForSubtotal>0)
//		{
//			//console.log("coming inside the discountAmountForSubtotal condition 1");
//			var savingsPrice = (retailPriceSum-realSubTotal).toFixed(2);
//			savingsPrice = parseFloat(savingsPrice)+parseFloat(discountAmountForSubtotal);
//			$("#savings_Price").text('-$'+savingsPrice.toFixed(2));
//			$("#cartsavings").show();
//		}
//		else
//		{
//			$('#subTotal_Price').text('$'+realTotal.toFixed(2));//Chithra changed
//			//console.log("coming to the discountAmountForSubtotal else condition");
//			$("#savings_Price").text('-$'+(retailPriceSum-realSubTotal).toFixed(2));
//			$("#cartsavings").show();
//		}
//	}
//	else
//	{
//		if(discountAmountForSubtotal!=0 && discountAmountForSubtotal>0)
//		{
//			var savingsPrice = (retailPriceSum-realSubTotal).toFixed(2);
//			savingsPrice = parseFloat(savingsPrice)+parseFloat(discountAmountForSubtotal);
//			$("#savings_Price").text('-$'+savingsPrice.toFixed(2));
//			$("#cartsavings").show();
//		}
//		else
//		{
//			$('#subTotal_Price').text('$'+realTotal.toFixed(2));//Chithra changed
//			$("#cartsavings").hide();
//		}
//	}
}
/*
function getInventoryForProduct(lineItem)
{
	var colorList=inventory[lineItem.productId];
	if(colorList==undefined){
		fetchInventoryForProduct(lineItem);
		return;
	}
	////console.log("GetInventory "+colorList.length);
	populateColorAndSizesForProduct(colorList,lineItem)
}
*/


/*function checkForSaleShoesForFBLogin()
{

	//console.log('fb sale check');
	var saleFound=false;
	$("#cartItems li div.cart_shoe_prices").each(function(){
		
		
	if($(this).children("b[id^='sale_']:visible").length>0) 
	{

	saleFound=true;
	return false;

	}



	});
	
	
	if(saleFound==true && readCookie('Facebook')==null)
		{
			$(".facebookPopupCart_act").show().parent().show();
		}
}*/
