
var globCustomerid="";
var globProdid="";
var globColorid="";
var globSize="";
var iswishlistEmpty="";
var CurrentPageStatus="";
$(document).ready(function() {
	
	
	$(".circle_yel_plus").live('mouseover',function()
    {
		 $(this).text('ADD TO CART');
       
	});
	
	$(".circle_yel_plus").live('mouseout',function()
	{
		if($(this).attr('class')=="circle_order")
		{
			 $(this).text('OUT OF STOCK');
		}else{
			$(this).text('');
		}
		
	});
	
	$(".circle_black_close").live('mouseover',function()
    {
		 $(this).text('REMOVE');
       
	});
	
	$(".circle_black_close").live('mouseout',function()
	{
		$(this).text('');
	});
			
	
	$(".circle_yel_plus").live('click',function()
    {
		var wishlistId= new Array();
		wishlistId=($(this).attr('id')).split('_');
		var preorder=$('#preorder_'+wishlistId[2]).val();
		//console.log("The value of the wishlistId :: "+wishlistId);
		wishList_addItem(preorder,wishlistId[2]);
       
	});
	
	$(".circle_black_close").live('click',function()
		    {
				var wishlistId= new Array();
				wishlistId=($(this).attr('id')).split('_');
				var preorder=$('#preorder_'+wishlistId[2]).val();
				removeWLItem(wishlistId[2]);
						       
	});
	
	
	
	//console.log("CurrentPageStatus "+CurrentPageStatus);
	var flag=$('#flag').val();
	if(flag=="true")
	{
		$.ajax({url:'/currentPageStatus.htm',success:function(data)
		  {
		 	//console.log(" data "+data+","+(data=="wishlist"));
			if(data=="wishlist")
			{			 
				 var prodid=$('#prodid').val();
				 var colorid=$('#colorid').val();
				 var size=$('#size').val();
				 //console.log("product name :: "+prodid+" color name :: "+colorid+" size :: "+size);
				 $.ajax({url:'/isLoggedIn.htm', cache:false, success:function(customerid)
				 {
					/*doAddItemAndLoadWishList(customerid,prodid,colorid,size);*/
				 	if(customerid!=null&&customerid!='')	
					{
						//console.log("customer id is :: "+customerid);
				 		doAddItemAndLoadWishList(customerid,prodid,colorid,size);
						//showWishList();
					}
				 	
				 }});
			}
		  }});
	}
	 
});

var listofOutOfStock= [];
function editWishlist()
{
	$('.edit_whitlist').hide();
	$('.done_whistlist').show();
	
	listofOutOfStock = $("span[class^='circle_order']").map(function(i,n) 
	{
		//console.log(" edit id "+$(n).attr('id'));
		listofOutOfStock.push($(n).attr('id'));
		
	    return $(n).attr('id');
	});
	
	$("span[id^='wishlist_Loading_']").text('');
	$("span[id^='wishlist_Loading_']").removeClass('circle_yel_plus');
	$("span[id^='wishlist_Loading_']").removeClass('circle_order');
	$("span[id^='wishlist_Loading_']").addClass('circle_black_close');
	
}
function doneWishlist()
{
	$('.edit_whitlist').show();
	$('.done_whistlist').hide();
	
	$("span[id^='wishlist_Loading_']").addClass('circle_yel_plus');
	$("span[id^='wishlist_Loading_']").removeClass('circle_black_close');
	$("span[id^='wishlist_Loading_']").removeClass('circle_order');
	
	$.each(listofOutOfStock , function(i, val)
	{
		//console.log("done  ids "+'#'+listofOutOfStock [i]);
		
		 $('#'+listofOutOfStock [i]).removeClass('circle_yel_plus');
		  $('#'+listofOutOfStock [i]).removeClass('circle_black_close');
		  $('#'+listofOutOfStock [i]).addClass('circle_order');
		  $('#'+listofOutOfStock [i]).text('OUT OF STOCK');
		});
	
}



function showWishlistItems(wishlistitems)
{

	var htmlStr="";
	var htmlshoesdes="";
	var imageURL='http://commondatastorage.googleapis.com/images2.solestruck.com/';
	
      if(wishlistitems.length>1){
    	  htmlStr+='<h1 class="nb wishlist_heading">YOU\'\RE WISHING FOR '+wishlistitems.length+' PAIRS</h1>';
      }
      else if(wishlistitems.length==1){
    	  htmlStr+='<h1 class="nb wishlist_heading">YOU\'\RE WISHING FOR 1 PAIR</h1>';
      }	
      else{
    	  htmlStr+='<h1 class="nb wishlist_heading">YOUR WISHLIST IS EMPTY.</h1>';
      }
       
      if(wishlistitems.length==0){
    	  htmlStr+='<a href="/"><span class="done_whistlist yell_btn"  >CONTINUE SHOPPING</span></a>';
    	  $('.done_whistlist').css('display','none');
    	  $('.edit_whitlist').css('display','none');
      }
      
      htmlStr+='<span class="edit_whitlist" style="display: block;"  onclick="editWishlist()"  >EDIT</span>';
      htmlStr+=' <span class="done_whistlist" style="display: none;" onclick="doneWishlist()" >DONE</span>';
      htmlStr+='<div class="clear_both"></div>';
     
   $('.idp_shoe_name_holder').html(htmlStr) ;	
   	var count=0;
	
     for(i=0;i<wishlistitems.length;i++)
     {
			var vendorNameL = wishlistitems[i].vendorName.toLowerCase().replace(/ /g,"-");
			
			//console.log(" vendorNameL "+vendorNameL);
		
			count++;
			
			var w_space='wishlist_shoe_holder';
			if((count%3)!=1 && (count%3)!=0)
			{
				w_space='wishlist_shoe_holder white_space';
			}
			
			var colorName =wishlistitems[i].color;
			var productVariantId =wishlistitems[i].productVariantId;
			var isPreOrder =wishlistitems[i].isPreOrder;
			var available =wishlistitems[i].available;
			var imgvendorName=wishlistitems[i].vendorName.replace(/ /g,"-");
			var imgproductName=wishlistitems[i].productName.replace(/ /g,"-");
			var imgcolorName=wishlistitems[i].color.replace(/ /g,"-");
			
    	 htmlshoesdes+='<a href=# class="'+w_space+'"><code class=shoes_img><img id=image_'+wishlistitems[i].wishListItemId+' width=240 height=180 src=\"'+imageURL+vendorNameL+'-shoes/'+imgvendorName+'-shoes-'+imgproductName+'-('+imgcolorName+')-010407.jpg\"></code><div class=wishlist_shoe_discription_holder>';
    	 htmlshoesdes+='<input type=hidden id=productId_'+wishlistitems[i].wishListItemId+' value="'+wishlistitems[i].productId+'">';
    	 htmlshoesdes+='<input type=hidden id=productName_'+wishlistitems[i].wishListItemId+' value="'+wishlistitems[i].productName+'">';
    	 htmlshoesdes+='<input type=hidden id=vendorName_'+wishlistitems[i].wishListItemId+' value="'+wishlistitems[i].vendorName+'">';
    	 htmlshoesdes+='<input type=hidden id=productVariantId_'+wishlistitems[i].wishListItemId+' value="'+wishlistitems[i].productVariantId+'">';
    	 htmlshoesdes+='<input type=hidden id=colorName_'+wishlistitems[i].wishListItemId+' value="'+wishlistitems[i].color+'">';
    	 htmlshoesdes+='<input type=hidden id=unitPrice_'+wishlistitems[i].wishListItemId+' value="'+wishlistitems[i].price+'">';
    	 htmlshoesdes+='<input type=hidden id=salePrice_'+wishlistitems[i].wishListItemId+' value="'+wishlistitems[i].salePrice+'">';
    	 htmlshoesdes+='<input type=hidden id=retailPrice_'+wishlistitems[i].wishListItemId+' value="'+wishlistitems[i].price+'">';
    	 htmlshoesdes+='<input id=color_'+wishlistitems[i].wishListItemId+' type="hidden" value="'+wishlistitems[i].colorid+'" titlevalue="'+wishlistitems[i].color+'">';
    	 htmlshoesdes+='<input id=size_'+wishlistitems[i].wishListItemId+'  type="hidden" value="'+wishlistitems[i].colorid+'">';
    	 if(wishlistitems[i].availableInventory>0)
    	 {
    		 htmlshoesdes+='<span class=circle_black_close    style="display: none;" id=wishlist_Remove_'+wishlistitems[i].wishListItemId+' onclick=removeWLItem(\'wishlist_Remove_'+wishlistitems[i].wishListItemId+'\')></span>';
    		 htmlshoesdes+='<span class=circle_yel_plus       style="display: block;" id=wishlist_Loading_'+wishlistitems[i].wishListItemId+' onclick="wishList_addItem('+wishlistitems[i].isPreOrder+','+wishlistitems[i].wishListItemId+')"></span>';
    	 }
    	 else
    	 {
    		 htmlshoesdes+='<span class=circle_black_close    style="display: none;"  id=wishlist_Remove_'+wishlistitems[i].wishListItemId+' onclick=removeWLItem(\'wishlist_Remove_'+wishlistitems[i].wishListItemId+'\')></span>';
    		 htmlshoesdes+='<span class="circle_order" style="display: block;" id="wishlist_Loading_'+wishlistitems[i].wishListItemId+'">OUT OF STOCK</span>';
    	 }
    	
    	 htmlshoesdes+='<h2>'+wishlistitems[i].vendorName+'</h2><i titlevalue='+wishlistitems[i].productVariantId+'>SIZE '+wishlistitems[i].size+'</i>';
    	 if(wishlistitems[i].availableInventory>0)
    	 {
    		 htmlshoesdes+='<i class="stock">In Stock!</i>';
    	 }
    	 htmlshoesdes+='<h4>'+wishlistitems[i].productName+'</h4>';
    	 if(wishlistitems[i].salePrice<=0){
    		 htmlshoesdes+='<h3><b>$'+(wishlistitems[i].price).toFixed(2)+'</b></h3>';
    	 }
    	 if(wishlistitems[i].salePrice>0){
    		 htmlshoesdes+='<h3><b>$'+(wishlistitems[i].salePrice).toFixed(2)+'</b></h3>';
    	 }
    	 
    	 htmlshoesdes+=' <div class="clear_both"></div></div></a>';
    	 
     }
     
     $('.new_shoes_holder').html(htmlshoesdes);
     $('#backgroundPopup').fadeOut();
 	 $(".loading_page").hide();
     //console.log(htmlshoesdes);
	
}
function showWishList()
{
	//console.log(" inside show wishlist ");	
	$.ajax({url:'/isLoggedIn.htm',cache: false,success:function(customerid)
		{
		
			$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
			//console.log("customerid"+customerid);
			if(customerid!=null&& customerid!='')	
				{
					//console.log('customer id is'+customerid);
					$('#wish_list_popup_content').html("<img src=\"/images/loading.gif\"/>");
					
					/*getting wishlist items for customer*/
					getWishList(customerid);
					
					/*popup displaying stuff*/
						$('#backgroundPopup').show();
						$('.wish_list_popup').fadeIn().css('position','fixed');	
						
				   		//position_popup ();
				   		//changeCurrency(currencyType);
						$(".custom_dropdown").kgcustomdropdown();
					
				}
			else
				{
					$('#backgroundPopup').show();
					$('.wish_list_form').fadeIn().css('position','fixed');	
					$('#email_login_wishList').focus();
			   		//position_popup ();
			   		//changeCurrency(currencyType);
					$(".custom_dropdown").kgcustomdropdown();
				
							
				}
	}});
}

function getWishList(customerid)
{
	//console.log(" inside get wishlist ");
	$.ajax({url:'/getWishList.htm',cache: false,data:({"custId":customerid}),success:function(data)
		{
			//console.log("data:::"+data);
			//console.log('wishlist content:'+$('#wish_list_popup_content').val());
		$('#wish_list_popup_content').html(data);
			if($('#ul_wishlist li').size()<1){
				populateEmptyWishListHTML();
			}
			else{
				$('#wishtListWithoutContent').hide();
				$('#wishListWithContent').show();
	
			}
			$(".custom_dropdown").kgcustomdropdown();
			
		}});
}

function populateEmptyWishListHTML()
{
	var htmlstr="<h2>Your Wishlist</h2>";
 	
	htmlstr+="<div class=\"empty_cart_display_holder\">";
	htmlstr+="<h3>Ah Snap. You don't have any shoes in your wishlist. </h3>";
	htmlstr+="<p>You should stop by our <a href=\"/new-arrivals/\">New Arrivals</a>, <a href=\"/sale-shoes/\">Sale</a>, or <a href=\"/vintage-shoes/\">Vintage</a> section and start building <br />"; 
	htmlstr+="your Solestruck wishlist ASAP.</p>";
        
	htmlstr+="<a class=\"brw_btn\" onclick=\"goToPreviousPage();\">Continue Shopping</a>";   	
	htmlstr+="</div>";
	htmlstr+="<div class=\"clear_both\"></div>";
	
	$('#wishtListWithoutContent').html(htmlstr);
	$('#wishListWithContent').hide();
	$('#wishtListWithoutContent').show();
}

function removeWLItem(itemid)
{
	//console.log(" remove item "+itemid);
	
	$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
	$(".loading_page").show();
//	var wishlistId= new Array();
//	wishlistId=itemid.split('_');
	
	$.ajax({type:'POST',cache: false,url:"/removeWishListItem.htm",data:({"itemid":itemid}),success:function(wishlistitems){
		showrestofwishlistItems(wishlistitems);
	}});
	
}

function showrestofwishlistItems(wishlistitems)
{
	var htmlStr="";
	var htmlshoesdes="";
	var imageURL='http://commondatastorage.googleapis.com/images2.solestruck.com/';
	
	
      if(wishlistitems.length>1){
    	  htmlStr+='<h1 class="nb wishlist_heading">YOU\'\RE WISHING FOR '+wishlistitems.length+' PAIRS</h1>';
      }
      else if(wishlistitems.length==1){
    	  htmlStr+='<h1 class="nb wishlist_heading">YOU\'\RE WISHING FOR 1 PAIR</h1>';
      }	
      else{
    	  htmlStr+='<h1 class="nb wishlist_heading">YOUR WISHLIST IS EMPTY.</h1>';
      }
       
      if(wishlistitems.length==0)
      {
    	  htmlStr+='<a href="/"><span class="done_whistlist yell_btn" >CONTINUE SHOPPING</span></a>';
      }
      else
      {
    	  htmlStr+='<span class="edit_whitlist brwn_btn" style="display: none;" onclick="editWishlist()" >EDIT</span>';
          htmlStr+=' <span class="done_whistlist yell_btn" style="display: block;" onclick="doneWishlist()" >DONE</span>';
      }
      
      
      htmlStr+='<div class="clear_both"></div>';
    
      
   $('.idp_shoe_name_holder').html(htmlStr) ;
   
   
   	var count=0;
	
     for(i=0;i<wishlistitems.length;i++)
     {
			var vendorNameL = wishlistitems[i].vendorName.toLowerCase().replace(/ /g,"-");
			
		
			count++;
			var w_space='wishlist_shoe_holder';
			if((count%3)!=1 && (count%3)!=0)
			{
				w_space='wishlist_shoe_holder white_space';
			}
			var colorName =wishlistitems[i].color;
			var productVariantId =wishlistitems[i].productVariantId;
			var isPreOrder =wishlistitems[i].isPreOrder;
			var available =wishlistitems[i].available;
			var imgvendorName=wishlistitems[i].vendorName.replace(/ /g,"-");
			var imgproductName=wishlistitems[i].productName.replace(/ /g,"-");
			var imgcolorName=wishlistitems[i].color.replace(/ /g,"-");
			
			//console.log(" idp "+vendorNameL+"-"+wishlistitems[i].productName.toLowerCase().replace(/ /g,"-")+"-"+wishlistitems[i].color.toLowerCase().replace(/ /g,"-"));
			
		 htmlshoesdes+='  <div class="'+w_space+'">';	
    	 htmlshoesdes+='<a href="/'+vendorNameL+"-"+wishlistitems[i].productName.toLowerCase().replace(/ /g,"-")+"-"+wishlistitems[i].color.toLowerCase().replace(/ /g,"-")+'/index.html"><code class=shoes_img><img id=image_'+wishlistitems[i].wishListItemId+' width=240 height=180 src=\"'+imageURL+vendorNameL+'-shoes/'+imgvendorName+'-shoes-'+imgproductName+'-('+imgcolorName+')-010407.jpg\" ></code><div class=wishlist_shoe_discription_holder>';
    	 htmlshoesdes+='<input type=hidden id=productId_'+wishlistitems[i].wishListItemId+' value="'+wishlistitems[i].productId+'">';
    	 htmlshoesdes+='<input type=hidden id=productName_'+wishlistitems[i].wishListItemId+' value="'+wishlistitems[i].productName+'">';
    	 htmlshoesdes+='<input type=hidden id=vendorName_'+wishlistitems[i].wishListItemId+' value="'+wishlistitems[i].vendorName+'">';
    	 htmlshoesdes+='<input type=hidden id=productVariantId_'+wishlistitems[i].wishListItemId+' value="'+wishlistitems[i].productVariantId+'">';
    	 htmlshoesdes+='<input type=hidden id=colorName_'+wishlistitems[i].wishListItemId+' value="'+wishlistitems[i].color+'">';
    	 htmlshoesdes+='<input type=hidden id=unitPrice_'+wishlistitems[i].wishListItemId+' value="'+wishlistitems[i].price.toFixed(2)+'">';
    	 htmlshoesdes+='<input type=hidden id=salePrice_'+wishlistitems[i].wishListItemId+' value="'+wishlistitems[i].salePrice.toFixed(2)+'">';
    	 htmlshoesdes+='<input type=hidden id=retailPrice_'+wishlistitems[i].wishListItemId+' value="'+wishlistitems[i].price.toFixed(2)+'">';
    	 htmlshoesdes+='<input id=color_'+wishlistitems[i].wishListItemId+' type="hidden" value="'+wishlistitems[i].colorid+'" titlevalue="'+wishlistitems[i].color+'">';
    	 htmlshoesdes+='<input id=size_'+wishlistitems[i].wishListItemId+'  type="hidden" value="'+wishlistitems[i].size+'">';
    	
    	 // Fix for Wish list price and IN Stock - FAE
    	 
    	 htmlshoesdes+='<h2>'+wishlistitems[i].productName+'</h2><i titlevalue='+wishlistitems[i].productVariantId+'><span class="fl edit_shoe_size">SIZE '+wishlistitems[i].size+'</span>';
    	 if(wishlistitems[i].availableInventory>0)
    	 {
    		 console.log("--------------Its coming in stock--------------");
    		 htmlshoesdes+='<i class="stock">In Stock!</i>';
    	 }
    	 htmlshoesdes+='</i><h4>'+wishlistitems[i].vendorName+'</h4>';
    	 if(wishlistitems[i].salePrice<=0){
    		 htmlshoesdes+='<h3><b>$'+(wishlistitems[i].price).toFixed(2)+'</b></h3>';
    	 }
    	 if(wishlistitems[i].salePrice>0){
    		 
    	 //console.log("coming inside the condition and the discount program is :: "+$('#discountsExists').val());
    		 if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true')
			 {
    			 var splSalePrice = (wishlistitems[i].salePrice.toFixed(2)-(wishlistitems[i].salePrice.toFixed(2)*parseInt($("#fbsale_discount_percentage").val()))/100);
//    			 console.log('special sale price is :: '+splSalePrice.toFixed(2));
//    			 console.log("discounts exists");
    			 htmlshoesdes+='<h3><del style=\'padding-right:5px;\'>$'+wishlistitems[i].price.toFixed(2)+'</del><del style=\'padding-right:5px;\'>$'+wishlistitems[i].salePrice.toFixed(2)+'</del><b class=\'incart\'>$'+splSalePrice.toFixed(2)+'<b></h3>';
    			 
    			 
    			
			 }
    		 else
			 {
//    			 console.log("coming to the else of the discount program null :: "+$('#discountsExists').val());
    			 htmlshoesdes+='<h3><del style=\'padding-right:5px;\'>$'+wishlistitems[i].price.toFixed(2)+'</del><b>$'+(wishlistitems[i].salePrice).toFixed(2)+'</b></h3>';
			 }
    	 }
    	 
    	 htmlshoesdes+=' <div class="clear_both"></div></div></a>';
    	 htmlshoesdes+='<span class="circle_black_close" style="display: block;" id="wishlist_Loading_'+wishlistitems[i].wishListItemId+'"></span>';
    	 htmlshoesdes+='</div>';
    	 
     }
     
     $('.new_shoes_holder').html(htmlshoesdes);
     
     $('#backgroundPopup').fadeOut();
 	$(".loading_page").hide();
 	
	
     //console.log(htmlshoesdes);
   
}
function addToCart(itemID)
{
	var prodid=$('#productId_'+itemID).val();
	var colorid=$('#color_'+itemID).attr('titlevalue');
	var size=$('#size_'+itemID).val();
	//console.log("prodid:"+prodid+",colorid:"+colorid+",size:"+size);
	
	$('#itemAddedMsg_'+itemID).show();
	$('#itemAddedMsg_'+itemID).html("<img src = \"/images/ajax-loader.gif\" alt=\"Loading...\"></img>");
	$.ajax({url:"/addItemtocart.htm?color="+colorid+"&size="+size+"&prodid="+prodid,cache: false,
		success:function(data){
	
		//////////console.log(data);
		if(data!=null)
		{
			$('#save_'+itemID).html('Added Successfuly');
			$('#itemAddedMsg_'+itemID).hide();
			$('#popup_content').html(data);
			$('#save_'+itemID).fadeOut(3000);
			delayHide('itemAddedMsg_'+itemID);
			
		}
	}//end of function
	}
	);
	
}
function wishList_addItem(isPreOrder, itemID)
{
    //console.log(" inside wishlist_addItem method"+isPreOrder+":"+itemID);
	$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
	$(".loading_page").show();
	
	var ItemValues=new Object();
	//ItemValues.sequenceId=0;
	ItemValues.isPreOrder=isPreOrder;
	ItemValues.productId=$('#productId_'+itemID).val();
	ItemValues.colorId=$('#color_'+itemID).val();
	ItemValues.productName=$('#productName_'+itemID).val();
	ItemValues.vendorName=$('#vendorName_'+itemID).val();
	ItemValues.size=$('#size_'+itemID).val();
	ItemValues.productVariantId=$('#productVariantId_'+itemID).val();
	ItemValues.quantity=1;
	ItemValues.colorName=$('#color_'+itemID).attr('titlevalue');
	ItemValues.isSale=false;
	ItemValues.retailPrice=$('#retailPrice_'+itemID).val();
	if(parseFloat($("#salePrice_"+itemID).val())<=0.0)
	{
		ItemValues.unitPrice=$('#unitPrice_'+itemID).val();
		ItemValues.price=$("#unitPrice_"+itemID).val();
	}
	else{
		ItemValues.unitPrice=$("#salePrice_"+itemID).val();
		ItemValues.price=$("#salePrice_"+itemID).val();
		ItemValues.isSale=true;
	}
	
	//ItemValues.salePrice=$('#salePrice_'+itemID).val();
	
//	console.log('productid is ---->>>>' + $('#productId_'+itemID).val());
//	console.log('colorId is ---->>>>' + $('#color_'+itemID).val());
//	console.log('size is ---->>>>' + $('#size_'+itemID).val());
//	console.log('price is ---->>>>' + $('#unitPrice_'+itemID).val());
//	console.log('proVariant is ---->>>>'+$('#size_'+itemID).val());
//	console.log('productName is ---->>>>' + $('#productName_'+itemID).val());
//	console.log('colorName is ---->>>>' + $('#color_'+itemID).attr('titlevalue'));
//	console.log('vendorName is ---->>>>' + $('#vendorName_'+itemID).val());
//	console.log('SalePrice is ---->>>>' + $('#salePrice_'+itemID).val());
	
	//console.log("retval is "+retval);
	var retval=addItem(ItemValues,"wishlist",function(retval)
	{
		//console.log(" retval :: "+retval);
		if(retval>0)
		{
			$('#wishlist_Loading_'+itemID).text('ADDED TO CART ');
			$('#backgroundPopup').fadeOut();
			$(".loading_page").hide();
			
		//	console.log(" added successfully ");
		}
		else
		{
			//console.log(" Ah Snap! The last pair were just taken. ");
		}
		
	});
	
}
function removeLoadingClass(itemID)
{
	
	$('#wishlist_Loading_'+itemID).removeClass("popup_processing_btn");
	
	//$('.popup_processing_btn').fadeOut(3000);
}

function delayHide(elemId)
{
	setTimeout("HideElem('"+elemId+"')",2000);
}
function HideElem(elemId)
{
	$('#'+elemId).hide();
}

function getSizePriceDetailsForColor(itemID)
{
	var prodid=$('#productId_'+itemID).val();
	var colorid=$('#color_'+itemID).attr('titlevalue');
	var colorName=$('#color_'+itemID).val();
	
	$.getJSON("/getproductdetailsforcolor.htm",{"productid":prodid,"colorid":colorid},function(productdetaillst)
				{
					if(productdetaillst!=null)
					{	
						var pricelist=[];
						var sizeStr="";
						$('#pricediv').html("$"+productdetaillst[0].price);
						$('#size_'+itemID).val(productdetaillst[0].size.replace(".0",""));
						$('#size_'+itemID).attr('titlevalue',productdetaillst[0].proVarID);
						
						for(i=0;i<productdetaillst.length;i++)
						{
							var sizequantitycolorDTO=productdetaillst[i];
							pricelist[i]=sizequantitycolorDTO.price;
							var productvariantId=productdetaillst[i].proVarID;
							
							sizeStr+="<li id=\""+itemID+"_"+sizequantitycolorDTO.size+"\" value=\""+productvariantId+"\"   onclick=\"editItem('"+itemID+"','"+productvariantId+"')\"  >"+sizequantitycolorDTO.size.replace(".0","")+"</li>";
							
						}
						
						//pricelst=pricelist;
						$('#sizelist_'+itemID).html(sizeStr);
						editItem(itemID);
					}
				}		
			);
}


function editItem(itemID,productvarintId)
{
	/*Changing image for new color*/
	var editchangesizeArray= new Array();
	editchangesizeArray=itemID.split(',');
//	console.log("itemID "+editchangesizeArray[0]+" productvarintId "+editchangesizeArray[1]);
	//$('#size_'+itemID).attr('titlevalue',productvarintId);
	//$('#size_'+itemID).val(productvarintId);
	var vendorName=$('#vendorName_'+editchangesizeArray[0]).val().replace(/ /g,'-');
	var productName=$('#productName_'+editchangesizeArray[0]).val().replace(/ /g,'-');
	var colorName=$('#color_'+editchangesizeArray[0]).val().replace(/ /g,'-');
	var imageURL=$('#imageURL').val();
	imageURL+=vendorName.toLowerCase()+"-shoes/"+vendorName+"-shoes-"+productName+"-("+colorName+")-010204.jpg";
	$('#image_'+editchangesizeArray[0]).attr("src",imageURL);
	
	/*Updating db */
	var prodid=$('#productId_'+editchangesizeArray[0]).val();
	var colorid=$('#color_'+editchangesizeArray[0]).attr('titlevalue');
	var sizeStr=$('#size_'+editchangesizeArray[0]).val();
	var size=sizeStr.substring(sizeStr.indexOf("_")+1);
	$('#size_'+editchangesizeArray[0]).attr('titlevalue',editchangesizeArray[1]);
	
	$.ajax({type:'POST',cache: false,url:"/editWishListItem.htm",data:({"itemid":editchangesizeArray[0],"productid":prodid,"colorid":colorid,"size":size}),
		success:function(data)
		{
			//console.log(" response "+data);
			if(data!=null&&data=='duplicate removed')
			{
				$('#'+editchangesizeArray[0]).closest('li').remove();
				
			}
		}//end of function
	}
	);
	
}
/*Deliberately delayed to edit an item after getting text box value from custom dropdown li.*/
function delayEdit(itemID, millisecs)
{
	var t=setTimeout("editItem('"+itemID+"')",millisecs);
}


function delayColorChange(itemID,millis)
{
	var t=setTimeout("getSizePriceDetailsForColor('"+itemID+"')",millis);
}
function showIDP(id)
{
	$('.loading_page').show();
	var wishlistId= new Array();
	wishlistId=id.split('_');
	var idplink=$('#idplink_'+wishlistId[1]).val();
	window.location.href=idplink ;
}
function closeWishList()
{
	$('#backgroundPopup').hide();
	$('.wish_list_popup').hide();	
}
function changeTopRightNavHeader(customerid)
{
	var listStr="<li> <a onclick=\"loadMyAccount('"+customerid+"');\"  onmouseover=\"this.style.textDecoration='underline'\" onmouseout=\"this.style.textDecoration='none'\">MyAccount</a></li><li class=\"seperator\"> | </li>";
	listStr+="<li><a class=\"view_wishlist_popup\" onclick=\"showWishList()\" onmouseover=\"this.style.textDecoration='underline'\" onmouseout=\"this.style.textDecoration='none'\">Wishlist</a></li><li class=\"seperator\"> | </li>";
	listStr+="<li><a class=\"view_cart_popup\"   onmouseover=\"this.style.textDecoration='underline'\" onmouseout=\"this.style.textDecoration='none'\">Shopping Cart</a></li>  <li class=\"seperator\"> | </li>";
	listStr+="<li><a  onclick=\"logout()\"  onmouseover=\"this.style.textDecoration='underline'\" onmouseout=\"this.style.textDecoration='none'\">Logout</a></li>";
	$('#header_right_list').html(listStr);
	$('.view_cart_popup').click(function() {
		//alert('hai');
		$('#backgroundPopup').show();
		$('.cart_popup').fadeIn().css('position','fixed');		
   		//position_popup ();
   		viewTheCartPopup();
	 });
}
function closeWishlistAndOpenCart()
{
	
	closeWishList();
	showShoppingCart();
	
}

function addItemToWishList(customerId,productid,colorid,size)
{
	
//	console.log(" inside additemToWishList function new change 2  ");
	//$("#loading").addClass("popup_processing_btn");
	$('.loading_page').show();
	$.ajax({type:'POST',cache: false,url:"/addToWishList.htm",
		data:({"customerId":customerId,"prodid":productid,"colorid":colorid,"size":size}),
		success:function(data)
		{
			$('.loading_page').hide();
			$('#added_wishlist').css('display','inline-block');
			setTimeout(function(){
				$('#added_wishlist').hide();
			},1000);
			
			
			
			//console.log(" response "+data);
			//	setTimeout($('.add_whishlist').text(data),2000);
			
			
			
			//$("#loading").removeClass("popup_processing_btn");
//			$(".loading_list").hide();
//			$('#wishlist_add_msg').html(data);
//			delayHide('wishlist_add_msg');
//			getWishList(customerId);
			
			
			
		}});
}

