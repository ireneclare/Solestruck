var variantID;
var retailprice;
var review_rating;
var userRating=0;
var productDetails;
var pricelst=[];
var salepricelst=[];
var display_color_id;
var display_color_name;
var sizeSelected="";
var size_selectedInfo="";
var startIndex = 0;
//var userReviews=[];
var isSale = 'false';
var count = 0;
var shoePrice = "0.0";
var salePrice="0.0";
var addItemAndLoadWishList=false;
var finished=false;
var isavail=true;
var pri;
var respectiveSizesforColorid = new Array();
var selectedColor = "";
var sizeCondition = "";
//var showZoomImageInDays = 60;
var loadmoreflag = 0;
var cartLink ="";
var buildFlag = 0;
var notifyMeColorId = "";

$(document).ready(function() {
	
	$.getScript('http://platform.twitter.com/widgets.js');
	$.getScript('http://s7.addthis.com/js/250/addthis_widget.js#pubid=ra-4f272ad05297650d');
	$.ajaxSetup({cache:false});
//	$.ajax({cache: false,url:"/getproductdetailsforallcolor.htm",data:({"productid":$('#productid').val(),"colorid":$('#colorlst').attr('titlevalue')}),success:function(json)
//		{
//			
//			$.each($.parseJSON(json), function(key, value){
//				respectiveSizesforColorid[key]=value;
//			});
//		}
//	});
	
//	$.getJSON('http://graph.facebook.com/solestruck',
//	        function(data){
//	    $('#fb_like_count').text(addCommas(data.likes));
//	});
	
	
	
	if($('#aToken').val()!="" && $('#aToken').val()!=null)
	{
		var reviewTitle = $('#FBreviewTitle').val();
		var reviewText = $('#FBreviewText').val();
		var reviewRating = $('#FBreviewRating').val();
		//$(".loading_page").show();
		////console.log("review values are :: "+reviewTitle+ " && "+reviewText+ " && " +reviewRating);
		if(reviewTitle!="" && reviewTitle!=null)
			$('#r_title').val(reviewTitle);
		if(reviewText!="" && reviewText!=null)
			$('#reviewText').val(reviewText);
		if(reviewRating!="" && reviewRating!=null)
			ratingCount(reviewRating);
		
		setTimeout(function(){
			////console.log("coming inside the timeout function");
			if(reviewText!="" && reviewText!="Your Message")
				submitShoeReviewFB();
			//$('#submit_ratingFB').trigger('click');
			//$(".loading_page").hide();
		},100);
	}
	
	$('#reviewWOFB').click(function(){
		
		$('#userName').show();
		$('#userEmail').show();
		$('#anonymous').show();
		$('#reviewWFB').show();
		$('#submit_rating').show();
		$('#reviewWOFB').hide();
		$('#submit_ratingFB').hide();
		$('.rev_msg').hide();
		$('.review_message_textarea').css('padding-left','15px');
		$('.review_message_textarea').css('min-width','928px');
		$('.review_title').css('border-width','0px 1px 1px 1px !important');
		$('#r_title').removeClass('review_title_withoutfb');
	});
	
	$('#reviewWFB').click(function(){
			
			$('#userName').hide();
			$('#userEmail').hide();
			$('#anonymous').hide();
			$('#reviewWFB').hide();
			$('#submit_rating').hide();
			$('#reviewWOFB').show();
			$('#submit_ratingFB').show();
			$('.rev_msg').show();
			$('.review_message_textarea').css('padding-left','54px');
			$('.review_message_textarea').css('min-width','889px');
			$('.review_title').css('border-width','1px 1px 1px 1px !important');
			$('#r_title').addClass('review_title_withoutfb');
		});
		
	$('#idpsalepercentage').click(function(){
	 	
	 	$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
		$('.signin_form').fadeIn();$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
		$("#email_login").focus();
	});
	
	if($('#vendorname').val()=='Solestruck Magazine'){
		//$('#color_selected').find('b').html("");
		//$('#size_selected').html("");
		$('#color_selected').find('b').css('display', 'none');
		$('#size_selected').css('display', 'none');
		$('#cAvl4').hide();
		$('.select_size_act').hide();
	}
	
	if(isMobileDevice()){
		
		//alert("from mobile device");
		$('#custom-tweet-button').removeClass('tooltip_b');
		$('#fb-button').removeClass('tooltip_b');
		//$('#fb-button').removeAttr('title');
		$('#g-plus-button').removeClass('tooltip_b');
		$('#pin-it-button').removeClass('tooltip_b');
		$('#social_sendToFriend').removeClass('tooltip_b');
		$('.color_gallery span').removeClass('tooltip_t');
		$('.color_gallery span').removeAttr('original-title');
	}
	
	$("img").error(function(){
		
		$(this).hide();
//		var brokenImg =  $(this).attr("src");
//		if(brokenImg!="http://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/notavailableImages/unavaliable_240_180.jpg"){
//			//alert("src = " + $(this).attr("src")); 
//			$(this).attr("src","http://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/notavailableImages/unavaliable_240_180.jpg");
//			$(this).css("border","0");
//			$(this).css("margin","0");
//			$(this).css("padding","0");
//			 //call for sending mail alerts for broken images - shp
//			 brokenImagesAlert(brokenImg);
//		
//		}
	});


	if($('#reviewfrom').val()!=""&& $('#reviewfrom').val()=='mail'&& $('#loggedin').val()!='true')
	{
		$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
		$('.login_form').fadeIn();$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
		$("#email_login").focus();
	}
	
	
	if($('#reviewfrom').val()!=""&& $('#reviewfrom').val()=='mail'&& $('#loggedin').val()=='true')
	{
		$(window).scrollTop($(".review_header").offset().top);
		$('.message_textarea').html($('#reviewtext').val());
		////console.log($('#ratingCount').val());
		ratingCount(parseInt($('#ratingCount').val()));
		$('#userName').val($('#uname').val());
		$('#userEmail').val($('#umail').val());
		$('#r_title').val($('#rtitle').val());	
	}
	
	$(".idp_add_to_cart_send_act").click(function()
	{
		if(isavail==false)
		{
			callFormImageURL();
			$('#backgroundPopup').css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).show();
			$('.outof_stock_popup_act').fadeIn();
			$('.loading_page').show();
			$("#sizeEmail1").focus();
	   		//position_popup ();
			$(".custom_dropdown").kgcustomdropdown();
			var productid = $('#productid').val();
			var colorid = $('#color_selected').attr('titlevalue');;
			$.ajaxSetup({async:true});
			$.ajax({url:"/getDontSeeYourSizesForColor.htm", data:({"productid":productid, "colorid":colorid}), success:function(DSYS){
			if(DSYS.length!=0 && DSYS!=null)
			{
				//console.log("DSYS length is :: "+DSYS.length);
				var j=1;
				var numberOfSizes = $('#custom_drop_size_nav ul li').length;
				var OOSsizes="";
//				console.log("number of sizes are :: "+numberOfSizes);
//				console.log("length of actual sizes are :: "+DSYS.length);
				if(numberOfSizes>DSYS.length)
				{
					for(i=0; i<DSYS.length; i++)
					{
						$('#outOfStock_'+j).val(DSYS[i]);
						$('#outOfStock_'+j).html(DSYS[i]);
						j++;
					}
			
					for(i=DSYS.length+1; i<numberOfSizes+1; i++)
					{
						$('#outOfStock_'+i).hide();
					}
				}
				else 
				{
					for(i=0; i<DSYS.length; i++)
					{
						OOSsizes+="<li id='outOfStock_"+j+"' value='"+DSYS[i]+"'>"+DSYS[i]+"</li>";
						$('#outOfStockList').html(OOSsizes);
						j++;
					}
				}
			}
			$('.loading_page').hide();
			}});
		}
		else
		{
			////console.log($.trim($('#idp_selected_size').text())!='Please select')
			////console.log($.trim($('#idp_selected_size').text()))
			if($.trim($('#idp_selected_size').text())!="" && $.trim($('#idp_selected_size').text())!='Please Select' && $.trim($('#idp_selected_size').text())!="Don't See Your Size?")
			{
				$(".cl_info_size_act").removeClass("size_error_label");
				$('.size_head_act').removeClass("error_label");
		        $(".loading_page").show();
	            setTimeout('idp_addItem()',100);
	        
			}
			else 
			{
				$(".cl_info_size_act").addClass("size_error_label");
				$('.size_head_act').addClass("error_label");
				$(".cl_info_size_act span").html('Please Select size');
				$(".loading_page").hide();
				$('.country').addClass('error_label');
				
			}
		}
	});  
	
	if(parseDouble($('#salePrice').val())>0.0)
	{
		pri=parseFloat($('#salePrice').val()).toFixed(2);
		highestPrice = "<del> $"+$('#retailPrice').val()+"</del>"; isSale = 'true'; $('#saleprice_div').removeClass('dn');
		if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
		{
			$('#saleprice_div').show();$('#saleprice_div').html("<span class=\"final\">Final Sale $"+(pri-(parseFloat($('#salePrice').val())*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2)+"</span>");
			//$(".gary_del").text("$"+$('#retailPrice').val()).show();
			$(".black_del").text("$"+parseFloat($('#salePrice').val()).toFixed(2)).show();
			//$('#pricediv').hide();
		}
		else if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Brand')
		{
			if($('#vendorname').val().toLowerCase()==$('#saleBrandNames').val())
			{
				$('#saleprice_div').show();$('#saleprice_div').html("<span class=\"final\">$"+(pri-(parseFloat($('#salePrice').val())*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2)+"</span>");
				//$(".gary_del").text("$"+$('#retailPrice').val()).show();
				$(".black_del").text("$"+parseFloat($('#salePrice').val()).toFixed(2)).show();
				//$('#pricediv').hide();
			}
			else
			{
				$('#saleprice_div').show();$('#saleprice_div').html("<b> $"+pri+"</b>");
			    $(".gary_del").text("").hide();
			    $(".black_del").text("").hide();
			    $('#pricediv').show();
			}
		}
	    else
	    {
		    /*$('#saleprice_div').show();$('#saleprice_div').html("<b>Sale $"+pri+"</b>");*/
			$('#saleprice_div').show();$('#saleprice_div').html("<b> $"+pri+"</b>");
		    $(".gary_del").text("").hide();
		    $(".black_del").text("").hide();
		    $('#pricediv').show();
	    }
	  
	    $('#pricediv').html(highestPrice);
	} 
	else
	{
		$('#pricediv').html("$"+$('#retailPrice').val());
//		if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#discountExists").val()=='true' && $('#discountTypeName').val()=='Brands')
//		{
//			//console.log("coming into the else of if");
//			if($('#vendorname').val()==$('#saleBrandNames').val())
//			{
//				//console.log("coming into the brand id condition"+$('#retailPrice').val());
//				$('#saleprice_div').show();$('#saleprice_div').html("<span class=\"final\">$"+($('#retailPrice').val()-(parseFloat($('#retailPrice').val())*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2)+"</span>");
//				//console.log('value of discount is :: '+($('#retailPrice').val()-(parseFloat($('#retailPrice').val())*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
//				//$(".black_del").text("$"+parseFloat($('#salePrice').val()).toFixed(2)).show();
//			}
//			else
//			{
//				$('#pricediv').html("$"+$('#retailPrice').val());
//			}
//		}
	}
	$('#loadMoreReviews').hide();
	$('.idp_loadmore').hide();
	$("#SoldOut").hide();
	if($('#vendorname').val()=='Vintage' || $('#vendorname').val()=='Solestruck Magazine')
		{
		
		
		//$("#cAvl2").hide();
		$("#cAvl3").hide();
		//$("#cAvl4").hide();
		$("#idp_color_tab").hide();
		$("#sizelst").hide();
		$("#sizelstWomen").hide();
		$("#sizelstMen").hide();
		//$(".size_head_act").hide();
			

		}
	   
	$('.login_popup_close, .shoping_cart_popup_close, .dont_see_your_size_popup_close').click(function() {
		$(this).parent().fadeOut();
		$('#backgroundPopup').hide();		
	});
	
// black screen dynamic height on window resize
	
	
	
	$(".color_gallery").find("span").die('click').live('click', function()
	{
		////console.log("--------->>>>>>>>>>   value of the selected size  ------->>>>>>>>>>>> :: "+$('#idp_selected_size').text());
		showViewImages($("#productid").val(),$(this).attr('id'),$(this).attr('name'),true);
		setTimeout(function(){
			$('#black').find('span').each(function()
			{ 
				if($(this).hasClass('view_glallery_opacity')) 
				{
					$(this).trigger('mouseover');
				}
			});
		},100);

		$(this).siblings('div:visible').hide();
		$(this).next().fadeIn('fast');
		$('.view_glry_act> div').hide();
		$(this).siblings().removeClass('color_tab_hover');
		$(this).siblings().removeClass('color_tab_mouseover');
		$(this).addClass('color_tab_hover');
		
		
		
		$('#sizelst').click();
		$('.idp_carts').addClass('dn');
		var shopBy = $('#shopBy option:selected').text();
		$(".cl_info_size_act").removeClass("size_error_label");
		$('.size_head_act').removeClass("error_label");
		$('.item_size_holder').removeClass('condition_size_holder');
		$('.view_gallery> div').hide(); 
		$('#size_outofstock').hide();
		display_color_id = $(this).attr("id");
		display_color_name = $(this).attr("name");
		selectedColor=display_color_id;
		var socialCategory = $('#socialCategory').val();
		var showSC=socialCategory.charAt(0).toUpperCase()+socialCategory.slice(1);
		
		var selectedColorId = $('#colorlst').attr('titlevalue');
		$('#'+selectedColorId).removeClass('color_tab_mouseover');
		
		
		
		////console.log("the selected color id is :: "+selectedColor+" showSC "+socialCategory.toUpperCase());
		productDetails = "";
		////console.log("--------------------" + display_color_id + " -- " + display_color_name);
		$('#color_selected').html("<b class='fl'>Color:</b> <span class='fl'>"+display_color_name+"</span><div class='clear_both'></div>");
		$('#color_selected').attr('titlevalue', display_color_id);
		$('div .idp_views_tab >h3').text(display_color_name);
        $('div .idp_views_tab >h3').attr('id', display_color_id);
        $('.idp_color_name').text(display_color_name);
		var sizeStr;
		var isSizesAvilable=false;
		var prodid=$('#productid').val();
		$("#product_selected").css('margin','0px 0px 0px 15px');
		//$(".loading_page").fadeIn();
		//$("#backgroundPopup").fadeIn();
		$.ajaxSetup({cache:false});
		$.getJSON("/getproductdetailsforcolor.htm",{"productid":prodid,"colorid":display_color_id},function(productdetaillst)
		{

			////console.log("on change of color > " + "productid = " + prodid + "colorid = " + display_color_id + "list size = " + productdetaillst.length);
	
			if(productdetaillst!=null && productdetaillst.length > 0)
			{
				var nonShowSelectedSize='false';
				//alert("list size > 0");
				 if($("#discountExists").val()=='true')
			      {
					$('#idpsalepercentage').removeClass('signinsave_link_outOfStack');
					$('#idpsalepercentage').addClass('signinsave_link');
			      }
				isavail=true;
				if(productdetaillst[0].isPreOrder===true)
					{
						$("#btnIDP").addClass('preorder_btn');
						$("#btnIDP").html('PRE-ORDER NOW');
					}
				else
					{
						$("#btnIDP").removeClass('preorder_btn');
						$("#btnIDP").html('ADD TO CART');
					}
				
				if($('#vendorname').val()!="Vintage" && $('#vendorname').val()!='Solestruck Magazine')
				{
					$('.shopsize_dwn').show();
					$('#cAvl4').show();
				}
				productDetails=productdetaillst;
				var pricelist=[];
				var salepricelist=[];
				sizeStr="";
				var highestPrice ="$"+ productdetaillst[0].price;
				shoePrice = productdetaillst[0].price;
								
				if(productdetaillst[0].salePrice!=null && productdetaillst[0].salePrice>0)
				{	
					////console.log("setting isSale value 1");
					highestPrice = productdetaillst[0].salePrice; isSale = 'true';
				    highestPrice = "<del> $"+productdetaillst[0].price+"</del>"; isSale = 'true'; $('#saleprice_div').removeClass('dn');
				    $('#salePrice').val(parseFloat(productdetaillst[0].salePrice));
				    $('#retailPrice').val(parseFloat(productdetaillst[0].price));
				    if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
					{
				    	////console.log("coming 2");
				      setTimeout(function(){
				    	  $('#saleprice_div').html("<span class=\"final\">Final Sale $"+(parseFloat(productdetaillst[0].salePrice)-(parseFloat(productdetaillst[0].salePrice)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2)+"</span>");
						  $('#saleprice_div').show();
				      },100)
					  
					  //$(".gary_del").text("$"+productdetaillst[0].price).show();
					  $(".black_del").text("$"+parseFloat(productdetaillst[0].salePrice).toFixed(2)).show();
					  //$('#pricediv').hide();
					}
				    else if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#vendorname').val().toLowerCase()==$('#saleBrandNames').val())
				    {
			    		setTimeout(function(){
					    	  $('#saleprice_div').html("<span class=\"final\"> $"+(parseFloat(productdetaillst[0].salePrice)-(parseFloat(productdetaillst[0].salePrice)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2)+"</span>");
							  $('#saleprice_div').show();
					      },100)
						  $(".black_del").text("$"+parseFloat(productdetaillst[0].salePrice).toFixed(2)).show();
				    }
			       else
				   {
				      $('#saleprice_div').show();$('#saleprice_div').html("<b>Sale $"+parseFloat(productdetaillst[0].salePrice).toFixed(2)+"</b>");
				      if(readCookie('Facebook')==null && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $("#saleprice_div").length>0 && $("#saleprice_div b").text().indexOf('Sale')!=-1)
					  {
				    	  if($('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
				    		 {
				    		  	var percentage=$("#fbsale_discount_percentage").val();
						 		percentage=percentage.substring(0,percentage.indexOf("."));
						 		$("#idpsalepercentage").text("Sign In to Save an Extra "+percentage+"%");
						 		$('#idpsalepercentage').show();
				    		 }
				    	  else if($('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && $('#vendorname').val().toLowerCase()==$('#saleBrandNames').val())
				    		 {
				    		  	var percentage=$("#fbsale_discount_percentage").val();
						 		percentage=percentage.substring(0,percentage.indexOf("."));
						 		$("#idpsalepercentage").text("Sign In to Save an Extra "+percentage+"%");
						 		$('#idpsalepercentage').show();
				    		 }
					  }
				      $(".gary_del").text("").hide();
					  $(".black_del").text("").hide();
					  $('#pricediv').show();
					  
				   }
				    if($('#isCartCountEnabled').val()=='true')
				    getRealtimeCustomerCount(display_color_id);
				}
				else
				{
					//alert("------2-------");
					if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#vendorname').val().toLowerCase()==$('#saleBrandNames').val())
					{
						//alert("------3-------");
						isSale='false';
						highestPrice = "<del> $"+productdetaillst[0].price+"</del>";
						setTimeout(function(){
						 
						$('#saleprice_div').removeClass('dn');
						$('#saleprice_div').html("<span class=\"final\">$"+(productdetaillst[0].price-(parseFloat(productdetaillst[0].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2)+"</span>");
						////console.log('value of discount is :: '+(productdetaillst[0].price-(parseFloat(productdetaillst[0].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
						//$(".black_del").text("$"+parseFloat($('#salePrice').val()).toFixed(2)).show();
						$(".gary_del").text("").hide();
						$(".black_del").text("").hide();
						},100)
					}
					else if(readCookie('Facebook')==null && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && $('#vendorname').val().toLowerCase()==$('#saleBrandNames').val())
			    	  {
				    	  var percentage=$("#fbsale_discount_percentage").val();
					 		percentage=percentage.substring(0,percentage.indexOf("."));
					 		$("#idpsalepercentage").text("Sign In to Save an Extra "+percentage+"%");
					 		$('#idpsalepercentage').show();
					 		
					 		if(productdetaillst[0].salePrice!=null && productdetaillst[0].salePrice>0)
					 			{
					 			  //alert("sale shoe");
					 			}
					 		else
					 			{
					 			   //alert("Not Sale Shoe");
					 			   $('#salePrice').val('0.0');
								    $('#retailPrice').val(parseFloat(productdetaillst[0].price));
									$(".gary_del").text("").hide();
									$(".black_del").text("").hide();
									$('#pricediv').show();
									isSale='false';
									$('#saleprice_div').hide();
									//$('#idpsalepercentage').hide();
					 			}
			    	  }
					else
					{
						$('#salePrice').val('0.0');
					    $('#retailPrice').val(parseFloat(productdetaillst[0].price));
						$(".gary_del").text("").hide();
						$(".black_del").text("").hide();
						$('#pricediv').show();
						isSale='false';
						$('#saleprice_div').hide();
						$('#idpsalepercentage').hide();
					}
					
				}
				
				
				//if($('#vendorname').val()!='Acne')
				$('#size_selected').html("US Size: <span id=''>Please Select size</span>");
				if(productdetaillst.length>0)
				{
					////console.log(" productdetaillst.length "+productdetaillst.length);
					isSizesAvilable=true;
					sizeStr+="<option class='size_available_act'>Please Select</option>"
					for(i=0;i<productdetaillst.length;i++)
					{
						////console.log(" for loop "+i);
						var sizequantitycolorDTO=productdetaillst[i];
						pricelist[i]=sizequantitycolorDTO.price;
						salepricelist[i]=sizequantitycolorDTO.salePrice;
						
						if($.trim(sizequantitycolorDTO.size.replace(".0",""))==sizeSelected)
						{
							////console.log(" inside selected size ");
							$(".cl_info_size_act").removeClass("size_error_label");
							$('.size_head_act').removeClass("error_label");
							$('.country').removeClass("error_label");
							nonShowSelectedSize='true';
							$('#size_'+sizequantitycolorDTO.size+'_'+sizequantitycolorDTO.isPreOrder+'_'+i).attr("selected","selected");
							sizeStr+="<option id='size_"+sizequantitycolorDTO.size+"_"+sizequantitycolorDTO.isPreOrder+"_"+i+"' class='size_available_act' titlevalue="+$.trim(sizequantitycolorDTO.size.replace(".0",""))+","+sizequantitycolorDTO.price+","+sizequantitycolorDTO.salePrice+","+sizequantitycolorDTO.proVarID+">"+sizequantitycolorDTO.size.replace(".0","")+"</option>";
							//$('#size_selected').html("Size: " + sizeSelected);
							displaySize($.trim(sizequantitycolorDTO.size.replace(".0","")), sizequantitycolorDTO.price, sizequantitycolorDTO.salePrice, sizequantitycolorDTO.proVarID);
						}
						else
						{
							 ////console.log(nonShowSelectedSize+" before condition else part "+sizeSelected);
							// nonShowSelectedSize='false'
							sizeStr+="<option id='size_"+sizequantitycolorDTO.size+"_"+sizequantitycolorDTO.isPreOrder+"_"+i+"' class='size_available_act' titlevalue="+$.trim(sizequantitycolorDTO.size.replace(".0",""))+","+sizequantitycolorDTO.price+","+sizequantitycolorDTO.salePrice+","+sizequantitycolorDTO.proVarID+">"+sizequantitycolorDTO.size.replace(".0","")+"</option>";
						}
						
					}
					
					if(nonShowSelectedSize=='false')
					{
						
						$('#idp_selected_size').text('');
						if(socialCategory=='women')
						{
							$('#cAvl4').html("U.S. WOMEN'S SIZE: ");
							$('#idp_selected_size').text('Please Select');
							$('#size_selected').html("U.S. Women's Size: <span >Please Select </span>");
						}
						else if(socialCategory=='men')
						{
							$('#cAvl4').html("U.S. MEN'S SIZE: ");
							$('#idp_selected_size').text('Please Select');
							$('#size_selected').html("U.S. Men's Size: <span >Please Select </span>");
						}
						else
						{
							$('#cAvl4').html("U.S. SIZE: ");
							$('#idp_selected_size').text('Please Select');
							$('#size_selected').html("U.S. Size: <span >Please Select </span>");
						}
					}
					
				}
				sizeStr+="<option>Don't See Your Size?</option>";
				var priceStr=highestPrice;
				$('#pricediv').html(priceStr);
			
				pricelst=pricelist;
				salepricelst=salepricelist;
				
				$('#shopBy').html(sizeStr);
			//	$("#sizelst").show();
				if($('#vendorname').val()!='Acne')
					{
				$(".add_whishlist").show();
				$("#social_sendToFriend").show();}
				$("#waitlist").hide();
				$("#SoldOut").hide();
				//if($('#vendorname').val()!='Acne')
					{$("#size_selected").show();}
				//$(".loading_page").hide();
					
					if($('#vendorname').val()=="Vintage" || $('#vendorname').val()=='Solestruck Magazine')
					{
						$("#sizelst").hide();	
						$("#sizelstWomen").hide();
						$("#sizelstMen").hide();
					//	$('.item_size_holder').hide();
						setTimeout(function(){
							$('.shopsize_dwn').hide();
							//$('.idp_size_cm').text(sizeSelected);
						},100);
					}
					if($('#vendorname').val()=='Solestruck Magazine'){
						//$('#color_selected').find('b').html("");
						//$('#size_selected').html("");
						setTimeout(function(){
							$('.shopsize_dwn').hide();
						},100);
						
						//$('.idp_size_cm').text(sizeSelected);
						$('#color_selected').find('b').css('display', 'none');
						$('#size_selected').css('display', 'none');
						$('#cAvl4').hide();
						$('.select_size_act').hide();
					}
					if(sizeSelected!=null)
					{
						//console.log("size selected is :: "+sizeSelected);
						$('#shopBy').val(sizeSelected).trigger("change");
					}
			}
			else 
				if(productdetaillst.length==0)
				{
					$('#cAvl4').hide();
					$('.shopsize_dwn').hide();
					
					//$('.shopsize_dwn').hide();
					$(".gary_del").text("").hide();
					$(".black_del").text("").hide();
					$('#pricediv').show();
					//$('.idp_size_cm').hide();
					isSale='false';
					$('#pricediv').text($('#pricediv').text());
					$('#saleprice_div').hide();
				    //alert("list size = 0");
					isavail=false;
					 if($("#discountExists").val()=='true')
				      {
//						$('#idpsalepercentage').removeClass('signinsave_link');
//						$('#idpsalepercentage').addClass('signinsave_link_outOfStack');
						$('#idpsalepercentage').hide();
				      }
					//if(($("#btnIDP").html()!='PRE-ORDER NOW'))
						//{
					$("#btnIDP").html('NOTIFY ME').css('width','auto');
						//}
					$("#product_selected").css('margin','0px 0px 0px 15px');
					$("#sizelst").hide();
					$("#waitlist").removeClass('dn');
					$("#waitlist").show();
					if($('#vendorname').val()!='Acne')
					{
						$("#SoldOut").removeClass('dn');$("#SoldOut").show();
					}
					
					$("#size_selected").hide();
					$('#backgroundPopup').hide();
					$(".add_whishlist").hide();
					//$("#social_sendToFriend").hide();
					
				}
			
			//$('#col_gal_'+$(this).attr("id")).removeClass('idp_display_processing_icon');
			//$(".loading_page").hide();
			//$("#backgroundPopup").fadeOut();
			finished=true;
		    $(".loading_page").hide();
		
		    
		});
		
		//var inStepImg=$('#black').children().slice(7, 8);
		//showProductAngle(inStepImg);
		
		
    });
    
	 $('ul.cList li').click(function(){
		$('.loading_page').show();
		var productid = $('#productid').val();
		var colorid = $(this).attr('id');
		$.ajaxSetup({async:true});
		$.ajax({url:"/getDontSeeYourSizesForColor.htm", data:({"productid":productid, "colorid":colorid}), success:function(DSYS){
		if(DSYS.length!=0 && DSYS!=null)
		{
			//console.log("DSYS length is :: "+DSYS.length);
			var j=1;
			var numberOfSizes = $('#size_nav ul li').length;
			var sizes="";
//			console.log("number of sizes are :: "+numberOfSizes);
//			console.log("length of actual sizes are :: "+DSYS.length);
			if(numberOfSizes>DSYS.length)
			{
				for(i=0; i<DSYS.length; i++)
				{
					$('#dontSeeYourSizes_'+j).val(DSYS[i]);
					$('#dontSeeYourSizes_'+j).html(DSYS[i]);
					j++;
				}
				for(i=DSYS.length+1; i<numberOfSizes+1; i++)
				{
					$('#dontSeeYourSizes_'+i).hide();
				}
			}
			else 
			{
				for(i=0; i<DSYS.length; i++)
				{
					sizes+="<li id='dontSeeYourSizes_"+j+"' value='"+DSYS[i]+"'>"+DSYS[i]+"</li>";
					$('#dontSeeYourSizes').html(sizes);
					j++;
				}
			}
		}
		$('.loading_page').hide();
		}});
	});
	
	$('.email_us_popup_close').click(function() {
		$(this).parent().fadeOut();
		if(cameFromLoginOrWishList=="false")/*this variable is there in customerServiceLink.js*/
		{
			$('#backgroundPopup').hide();			
		}	
		else if(cameFromLoginOrWishList=="login")
		{
			$('.login_form').show();			
		}
		else if(cameFromLoginOrWishList=="wishList")
		{
			$('.wish_list_form').show();			
		}
		
	});
	
	// custom_drop_down
	
	
	$('body, #wrapper, .black_screen').click(function(){
		var wrappclass = $('#wrapper').attr("class");
		if (wrappclass == 'wrappflag')
			{
				$('.custom_dropdown').find('ul').hide();	
				$('#wrapper').removeClass('wrappflag');
			}
	 });	
	
	$("#women_tab").click(function () {
		$('#women_tab').addClass('active_women');
		$('#men_tab').removeClass('active_men');
    });
	$("#men_tab").click(function () {
		$('#men_tab').addClass('active_men');
		$('#women_tab').removeClass('active_women');
    });
	
   
   var body_win_height = parseInt(document.body.clientHeight) ;
   var win_height = parseInt(document.documentElement.clientHeight) ;

	   if( body_win_height > win_height) {
		$('#backgroundPopup').height(body_win_height);
	   } else {
		$('#backgroundPopup').height(win_height);
	   }

	$('.login_popup').click(function() {
		$('#backgroundPopup').show();
		$('.login_form').fadeIn();		
   		
	 });
	
//	$('.dont_see_size').click(function() {
//		callFormImageURL();
//		$('#backgroundPopup').show();
//		$('.dnt_see_ursze_act').fadeIn();		
//	 });
	$('#right_fit').click(function(){
		$('#backgroundPopup').show();
		$('.sizing_popup').fadeIn();
	});
	$('.view_send_to_friend').click(function() {
		$('#backgroundPopup').show();
		$('.send_to_friend_popup').fadeIn();		
   		
	 });
	$('.view_send_us_message').click(function() {
		$('#backgroundPopup').show();
		$('.send_message_popup').fadeIn();		
   		
	 });
	/*$('.view_wishlist_popup').click(function() {
		$('#backgroundPopup').show();
		$('.wish_list_popup').fadeIn();		
   		position_popup ();
	 });*/
	
	/*$('.view_cart_popup').click(function() {
		$('#backgroundPopup').show();
		$('.cart_popup').fadeIn();		
   		position_popup ();
	 });*/
	$('#box_popup_header').mouseover(function() {
		$('.see_details_popup').show();
	 });
	$('#box_popup_header').mouseout(function() {
		$('.see_details_popup').hide();
	 });
	
	$(".default_rating1").click(function () {
		$('.default_rating1').addClass('review_selected');
    });
	$(".default_rating2").click(function () {
		$('.default_rating2').addClass('review_selected');
    });
	$(".default_rating3").click(function () {
		$('.default_rating3').addClass('review_selected');
    });
	$(".default_rating4").click(function () {
		$('.default_rating4').addClass('review_selected');
    });
	$(".default_rating5").click(function () {
		$('.default_rating5').addClass('review_selected');
    });
	
	
//      $('input[type=text], textarea').focus(function() {
//		  if( this.value == this.defaultValue ) {
//		   this.value = "";
//		  }
//		  }).blur(function() {
//		   if( !this.value.length ) {
//			this.value = this.defaultValue;
//		   }
//	  }); 
      
      

  	getProductDetailsForColor();
  	getProductDetailsForColor_popup();
  	//getProductDetailsForSendToFriend_popup(true);
  	
  	$('#pricediv_popup').html($('#pricediv').text());
  	$('#pricediv_friend').html($('#pricediv').text());
  	//var st=setTimeout('loadUserReviews()',2000);
  	var st=setTimeout('setShoeVotes()',3000);


  	$('.send_to_friend_sucess_act').click(function(){
  		$('#backgroundPopup').hide();
  		$('.dnt_see_ursze_success_act').hide();	
  		
  	});
  	/*$(".color_gallery span").click(function(){
  		alert('got view Images');
  		
  	});*/
//  	$("#waitlist").click(function(){
//  		callFormImageURL();
//  	});
  	
  	$(".add_whishlist").click(function()
  	{
  		
  		validateSize();
  	});
  	$('.rating_display code').click(function(){
  		ratingCount($(this).attr('title'));
  	});
  	$("#submit_rating").click(function(){
  		submitShoeReview();
  	});
  	$("#submit_ratingFB").click(function(){
  		submitShoeReviewFB();
  	});
  	$("#anonymous").click(function(){
  		if($('#anonymous').hasClass('noClass'))
  		{
  			////console.log("Is anonymous is noClass :: "+$('#anonymous').hasClass('noClass'));
  			$('#anonymous').removeClass('noClass');
  			$('#anonymous').addClass('selected');
  		}
  		else if($('#anonymous').hasClass('selected'))
  		{
  			////console.log("Is anonymous is selected :: "+$('#anonymous').hasClass('selected'));
  			$('#anonymous').removeClass('selected');
  			$('#anonymous').addClass('noClass');
  		}
  		setAnonymous();
  	});
  	//$("#loadMoreReviews").click(function(){
  		//loadReviews();
  	//});
  	$('#dontSeeUrSizeSuccess').click(function(){
  		
  		history.go(0);
  		/*goToPreviousPage();*/
  		$('.dnt_see_ursze_success_act').hide();
  		
  	});
  	$('#outOfStockSuccess').click(function(){
  		history.go(0);
  		/*goToPreviousPage();*/
  		$('.outof_stock_popup_success_act').hide();
  	});
  	$('#acneSuccess').click(function(){
  		$('.acne_popup_success_act').hide();
  		history.go(0);
  		/*goToPreviousPage();*/
  	});
	$('#sendToFriendSuccess').click(function(){
		$('.send_to_friend_sucess_act').hide();
		history.go(0);
  		/*goToPreviousPage();*/
  	});
    $('#sendToFriend').click(function(){
  		sendToFriend();
  	});
    $('#sendRequest').click(function(){
    	sendReqForDontSeeUrSize();
    });
    $('#sendRequestForWaitList').click(function(){
    	sendReqForWaitList();
    });
    $('#social_sendToFriend').click(function(){
    	 $('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
    	 callFormImageURL();
    });
    $('#sizeSelected').change(function(){
    	var size=$('#sizeSelected').val();
    	var subsize=size.split('.');
    	if(subsize.length>=2)
    		$('.half_size_notifi').fadeIn();
    	else
    		$('.half_size_notifi').fadeOut();
    });
    
    
    $("#custName").focus(function(){
		$(this).css("color","#333");
		$(this).blur(function(){
			$(this).css("color","#333");
		});
    });
    
    $("#custEmail").focus(function(){
    	$(this).css("color","#333");
		$(this).blur(function(){
			$(this).css("color","#333");
		});
    });
    
    $("#frndName").focus(function(){
    	$(this).css("color","#333");
		$(this).blur(function(){
			$(this).css("color","#333");
		});
    });

    $("#frndEmail").focus(function(){
    	$(this).css("color","#333");
		$(this).blur(function(){
			$(this).css("color","#333");
		});
    });
    setTimeout(function(){
    	////console.log("checking condition ::"+$("#saleprice_div b").text().indexOf('Sale'));
    	if(readCookie('Facebook')==null && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $("#saleprice_div").length>0 && $("#saleprice_div b").text().indexOf('Sale')!=-1)
	   	 {
    		
    		if($('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
	   		 {
	   		  	var percentage=$("#fbsale_discount_percentage").val();
			 		percentage=percentage.substring(0,percentage.indexOf("."));
			 		$("#idpsalepercentage").text("Sign In to Save an Extra "+percentage+"%");
			 		//$('#idpsalepercentage').show();
	   		 }
	   	    else if($('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && $('#vendorname').val().toLowerCase()==$('#saleBrandNames').val())
	   		 {
	   		  	var percentage=$("#fbsale_discount_percentage").val();
			 		percentage=percentage.substring(0,percentage.indexOf("."));
			 		$("#idpsalepercentage").text("Sign In to Save an Extra "+percentage+"%");
			 		//$('#idpsalepercentage').show();
	   		 }
    		
    		
	       	 //alert("coming into the condition");
//	   		 var percentage=$("#fbsale_discount_percentage").val();
//	   		 percentage=percentage.substring(0,percentage.indexOf("."));
//	   		 $("#idpsalepercentage").text("Sign In to Save an Extra "+percentage+"%");
	   	 }
    	else if(readCookie('Facebook')==null && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#discountTypeName').val()!='FF' && $('#vendorname').val().toLowerCase()==$('#saleBrandNames').val())
  	  	{
	    	  var percentage=$("#fbsale_discount_percentage").val();
		 		percentage=percentage.substring(0,percentage.indexOf("."));
		 		$("#idpsalepercentage").text("Sign In to Save an Extra "+percentage+"%");
		 		$('#idpsalepercentage').show();
  	  	}
    },2000);
	 
	 /*$(".discount_close").click(function(){
		
		 $(".discount_popup").hide();
	 });*/
    
    /*var dispcolorid=$('#colorlst').attr('titlevalue');*/
	var dispcolorname=$('#colorlst').attr('value');
	$('.idp_color_name').text(dispcolorname);
	/*alert(" the display color id and name is :: " +dispcolorid+ " && " +dispcolorname);*/
	/*$('#color_selected').html("<b class='fl'>Color:</b> <span class='fl'> "+colorname+"</span><div class='clear_both'></div>");
	$('#color_selected').attr('titlevalue', colorid);*/
	
	$('#shopBy').change(function()
	{
		$('#cAvl4').removeClass('error_label');
		$('.country').removeClass('error_label');
		
		
		if($.trim($('#idp_selected_size').text())=="" || $.trim($('#idp_selected_size').text())=='Please Select')
		{
			var socialCategory = $('#socialCategory').val();
			
			if(socialCategory=='women'){
				$('#size_selected').html("U.S. Women's Size: Please Select size ");
			}
			else if(socialCategory=='men'){
				$('#size_selected').html("U.S. Men's Size: Please Select size ");
			}
			else{
				$('#size_selected').html("U.S. Size: Please Select size ");
			}
			
		}
		if($.trim($('#idp_selected_size').text())=="Don't See Your Size?")
		{
			callFormImageURL();
			$('#backgroundPopup').show();
			$('.dnt_see_ursze_act').fadeIn();
			$('.loading_page').show();
			$('#size_selected').html("U.S. Size: <span id=''>Don't See Your Size</span>");
			$('#shopBy').val("1").trigger("change");
			var productid = $('#productid').val();
			var colorid = $('#color_selected').attr('titlevalue');;
			$.ajaxSetup({async:true});
			$.ajax({url:"/getDontSeeYourSizesForColor.htm", data:({"productid":productid, "colorid":colorid}), success:function(DSYS){
				if(DSYS.length!=0 && DSYS!=null)
				{
					//console.log("DSYS length is :: "+DSYS.length);
					var j=1;
					var numberOfSizes = $('#size_nav ul li').length;
					var sizes="";
//					console.log("number of sizes are :: "+numberOfSizes);
//					console.log("length of actual sizes are :: "+DSYS.length);
//					if(numberOfSizes!=DSYS.length)
//					{
						if(numberOfSizes>DSYS.length)
						{
							for(i=0; i<DSYS.length; i++)
							{
								$('#dontSeeYourSizes_'+j).val(DSYS[i]);
								$('#dontSeeYourSizes_'+j).html(DSYS[i]);
								j++;
							}
					
							for(i=DSYS.length+1; i<numberOfSizes+1; i++)
							{
								$('#dontSeeYourSizes_'+i).hide();
							}
						}
						else 
						{
							for(i=0; i<DSYS.length; i++)
							{
								sizes+="<li id='dontSeeYourSizes_"+j+"' value='"+DSYS[i]+"'>"+DSYS[i]+"</li>";
								$('#dontSeeYourSizes').html(sizes);
								j++;
							}
						}
//					}
//					else
//					{
//						for(i=0; i<DSYS.length; i++)
//						{
//							$('#dontSeeYourSizes_'+j).val(DSYS[i]);
//							$('#dontSeeYourSizes_'+j).html(DSYS[i]);
//							j++;
//						}
//					}
				}
				$('.loading_page').hide();
			}});
		}
		
	});
	
	
	
	
//	$('#shopBy').change(function(){
//		var socialCategory = $('#socialCategory').val();
//		var shopBy = $('#shopBy option:selected').text();
//		var socialCategory = $('#socialCategory').val();
//		var showSC=socialCategory.charAt(0).toUpperCase()+socialCategory.slice(1);
//		var sizestr="";
//		/*//console.log("shop by value is :: "+shopBy);*/
//		if(shopBy!=="" && shopBy=="SHOP BY: COLOR")
//		{
//			$('.loading_page').show();
//			$('.'+$('#colorlst').attr('titlevalue')).trigger('click');
//			if($(".select_size_act ul li span").hasClass('size_active')) 
//			{
//				$(".select_size_act ul li span").removeClass('size_active')
//			}
//			var totalColors = $("#lengthmap").val();
//			var colorid = new Array();
//			for(i=1;i<=totalColors;i++)
//			{
//				colorid[i]=$("#colorid_"+i).val();
//				if($("."+colorid[i]).hasClass('grayOut_thumb'))
//				{
//					//alert("coming inside the hasClass condition"+colorid[i]);
//					$("."+colorid[i]).removeClass('grayOut_thumb');
//				}
//				//alert("getting the respective sizes based on color id :: "+respectiveSizesforColorid[colorid[i]]);
//				/*if(respectiveSizesforColorid[colorid[i]].indexOf(sizeSelected)>=0)*/
//			}
//			sizeSelected="";
//			$('.idp_size_cm').text("");
//			$('#size_selected').html("U.S. "+showSC+"'s Size: <span id=''>Please select size</span>");
//			$('#sizelstWomen').hide();
//			$('#sizelstMen').hide();
//			$('#sizelst').show();
//			$('#cAvl5').show();
//			$('#cAvl6').show();
//			$('#cAvl1').hide();
//			$('#cAvl2').hide();
//			setTimeout(function(){
//				$('.loading_page').hide();
//			}, 2000);
//			
//			//getProductDetailsForColor();
//			/*
//			sizeSelected = "";
//			//$('#'+sizeSelected).text(" Please select size");
//			isavail=true;
//			$("#btnIDP").html('ADD TO CART');
//			if($(".select_size_act ul li span").hasClass('size_active')) 
//			{
//				$(".select_size_act ul li span").removeClass('size_active')
//			}*/
//			/*//console.log("coming inside the color condition");*/
//			
//		}
//		else if(shopBy!=="" && shopBy=="SHOP BY: SIZE")
//		{
//			$('.loading_page').show();
//			sizeSelected="";
//			$('.idp_size_cm').text("");
//			if($(".select_size_act ul li span").hasClass('size_active')) 
//			{
//				$(".select_size_act ul li span").removeClass('size_active')
//			}
//			$('#size_selected').html("U.S. "+showSC+"'s Size: <span id=''>Please select size</span>");
//			$('#waitlist').hide();
//			//alert("It is under development!");
//			////console.log("coming inside the else of color condition");
//			$('#cAvl5').hide();
//			$('#cAvl6').hide();
//			$('#cAvl1').show();
//			$('#cAvl2').show();
//			$('#sizelst').hide();
//			$('.'+$('#colorlst').attr('titlevalue')).trigger('click');
//			
//			var mappingPrice = new Array();
//			var mappingsalePrice = new Array();
//			var mappingproID = new Array();
//			var prodid=$('#productid').val();
//			var totalColors = $("#lengthmap").val();
//			var colorid = new Array();
//			for(i=1;i<=totalColors;i++)
//			{
//				colorid[i]=$("#colorid_"+i).val();
//				if($("."+colorid[i]).hasClass('grayOut_thumb'))
//				{
//					//alert("coming inside the hasClass condition"+colorid[i]);
//					$("."+colorid[i]).removeClass('grayOut_thumb');
//				}
//			}
//			$.ajaxSetup({cache:false});
//			$.ajaxSetup({async:true});
//			$.getJSON("/getproductdetailsforcolor.htm",{"productid":prodid,"colorid":display_color_id},function(productdetaillst)
//			{
//				////console.log("coming inside the function");
//				////console.log("size of product list :: "+productdetaillst.length);
//				if(productdetaillst.length>0)
//				{
//					////console.log(" productdetaillst.length "+productdetaillst.length);
//					
//					for(var i=0;i<productdetaillst.length;i++)
//					{
//						////console.log("coming inside the iteration");
//						var availablesizes=productdetaillst[i];
//						for(x=4;x<16;x+=0.5)
//						{
//							////console.log("value of the .5 x is :: "+x);
//							if(availablesizes.size==x)
//							{
//								////console.log("the available size is true :: "+availablesizes.size);
//								mappingPrice[x]=availablesizes.price;
//								mappingsalePrice[x]=availablesizes.salePrice;
//								mappingproID[x]=availablesizes.proVarID;
//							}
//						}
//					}
//				}
//				if(productdetaillst.length==0)
//				{
//					sizeCondition="default";
//				}
//			
//			//alert("mapping price :: "+mappingPrice["6.5"]);
//			if(socialCategory!="" && socialCategory=="women")
//			{
//				for(i=4;i<15;i+=0.5)
//				{
//					/*if(i==9.5 || i==10 || i==10.5 || i==11 || i==11.5 || i==12 || i==12.5 || i==13 || i==13.5)
//					{
//						sizestr+="<li class='size_available_act'><span onclick='getRespectiveColors("+i+");displaySize("+i+","+mappingPrice[i]+","+mappingsalePrice[i]+","+mappingproID[i]+")'>"+i+"</span></li>";
//					}
//					else
//					{
//						sizestr+="<li class='size_available_act idp_top_li'><span onclick='getRespectiveColors("+i+");displaySize("+i+","+mappingPrice[i]+","+mappingsalePrice[i]+","+mappingproID[i]+")'>"+i+"</span></li>";
//					}*/
//					
//					
//					if(sizeCondition!="" && sizeCondition=="default")
//					{
//						if(i==9.5 || i==10 || i==10.5 || i==11 || i==11.5 || i==12 || i==12.5 || i==13 || i==13.5)
//						{
//							sizestr+="<li class='size_available_act'><span onclick='getRespectiveColors("+i+");displaySize("+i+","+mappingPrice[i]+","+mappingsalePrice[i]+","+mappingproID[i]+")'>"+i+"</span></li>";
//						}
//						else if(i==5 || i==5.5 || i==6 || i==6.5 || i==7 || i==7.5 || i==8 || i==8.5 || i==9)
//						{
//							sizestr+="<li class='size_available_act idp_top_li'><span onclick='getRespectiveColors("+i+");displaySize("+i+","+mappingPrice[i]+","+mappingsalePrice[i]+","+mappingproID[i]+")'>"+i+"</span></li>";
//						}
//					}
//					else if(sizeCondition!="" && sizeCondition=="condition4")
//					{
//						if(i==8.5 || i==9 || i==9.5 || i==10 || i==10.5 || i==11 || i==11.5 || i==12 || i==12.5)
//						{
//							sizestr+="<li class='size_available_act'><span onclick='getRespectiveColors("+i+");displaySize("+i+","+mappingPrice[i]+","+mappingsalePrice[i]+","+mappingproID[i]+")'>"+i+"</span></li>";
//						}
//						else if(i==4 || i==4.5 || i==5 || i==5.5 || i==6 || i==6.5 || i==7 || i==7.5 || i==8)
//						{
//							sizestr+="<li class='size_available_act idp_top_li'><span onclick='getRespectiveColors("+i+");displaySize("+i+","+mappingPrice[i]+","+mappingsalePrice[i]+","+mappingproID[i]+")'>"+i+"</span></li>";
//						}
//					}
//					else if(sizeCondition!="" && sizeCondition=="condition4&13")
//					{
//						$('.item_size_holder').addClass('condition_size_holder');
//						if(i==9 || i==9.5 || i==10 || i==10.5 || i==11 || i==11.5 || i==12 || i==12.5 || i==13 || i==13.5)
//						{
//							sizestr+="<li class='size_available_act'><span onclick='getRespectiveColors("+i+");displaySize("+i+","+mappingPrice[i]+","+mappingsalePrice[i]+","+mappingproID[i]+")'>"+i+"</span></li>";
//						}
//						else if(i==4 || i==4.5 || i==5 || i==5.5 || i==6 || i==6.5 || i==7 || i==7.5 || i==8 || i==8.5)
//						{
//							sizestr+="<li class='size_available_act idp_top_li'><span onclick='getRespectiveColors("+i+");displaySize("+i+","+mappingPrice[i]+","+mappingsalePrice[i]+","+mappingproID[i]+")'>"+i+"</span></li>";
//						}
//					}
//					else if(sizeCondition!="" && sizeCondition=="condition14")
//					{
//						$('.item_size_holder').addClass('condition_size_holder');
//						if(i==10 || i==10.5 || i==11 || i==11.5 || i==12 || i==12.5 || i==13 || i==13.5 || i==14 || i==14.5)
//						{
//							sizestr+="<li class='size_available_act'><span onclick='getRespectiveColors("+i+");displaySize("+i+","+mappingPrice[i]+","+mappingsalePrice[i]+","+mappingproID[i]+")'>"+i+"</span></li>";
//						}
//						else if(i==5 || i==5.5 || i==6 || i==6.5 || i==7 || i==7.5 || i==8 || i==8.5 || i==9 || i==9.5)
//						{
//							//alert("the value is true :: "+i);
//							sizestr+="<li class='size_available_act idp_top_li'><span onclick='getRespectiveColors("+i+");displaySize("+i+","+mappingPrice[i]+","+mappingsalePrice[i]+","+mappingproID[i]+")'>"+i+"</span></li>";
//						}
//					}
//					$('#sizelstWomen').html(sizestr);
//					$('#sizelstWomen').show();
//				}
//			}
//			else if(socialCategory!="" && socialCategory=="men")
//			{
//				for(i=6;i<15;i+=0.5)
//				{
//					if(i==10.5 || i==11 || i==11.5 || i==12 || i==12.5 || i==13 || i==13.5 || i==14 || i==14.5)
//					{
//						sizestr+="<li class='size_available_act'><span onclick='getRespectiveColors("+i+");displaySize("+i+","+mappingPrice[i]+","+mappingsalePrice[i]+","+mappingproID[i]+")'>"+i+"</span></li>";
//					}
//					else
//					{
//						sizestr+="<li class='size_available_act idp_top_li'><span onclick='getRespectiveColors("+i+");displaySize("+i+","+mappingPrice[i]+","+mappingsalePrice[i]+","+mappingproID[i]+")'>"+i+"</span></li>";
//					}
//					$('#sizelstMen').html(sizestr);
//					$('#sizelstMen').show();
//				}
//			}
//			
//			if(productdetaillst.length==0)
//			{
//				/*if(socialCategory!="" && socialCategory=="women")
//				{
//					alert("coming to women change function");
//					for(i=4;i<15;i+=0.5)
//					{
//						if(i==9.5 || i==10 || i==10.5 || i==11 || i==11.5 || i==12 || i==12.5 || i==13 || i==13.5)
//						{
//							if(i==sizeSelected)
//							{
//								sizestr+="<li class='size_available_act'><span class='size_active' onclick='getRespectiveColors("+i+");displaySize("+i+","+mappingPrice[i]+","+mappingsalePrice[i]+","+mappingproID[i]+")'>"+i+"</span></li>";
//							}
//							else
//							{
//								sizestr+="<li class='size_available_act'><span onclick='getRespectiveColors("+i+");displaySize("+i+","+mappingPrice[i]+","+mappingsalePrice[i]+","+mappingproID[i]+")'>"+i+"</span></li>";
//							}
//						}
//						else if(i==5 || i==5.5 || i==6 || i==6.5 || i==7 || i==7.5 || i==8 || i==8.5 || i==9)
//						{
//							if(i==sizeSelected)
//							{
//								sizestr+="<li class='size_available_act idp_top_li'><span class='size_active' onclick='getRespectiveColors("+i+");displaySize("+i+","+mappingPrice[i]+","+mappingsalePrice[i]+","+mappingproID[i]+")'>"+i+"</span></li>";
//							}
//							else
//							{
//								sizestr+="<li class='size_available_act idp_top_li'><span onclick='getRespectiveColors("+i+");displaySize("+i+","+mappingPrice[i]+","+mappingsalePrice[i]+","+mappingproID[i]+")'>"+i+"</span></li>";
//							}	
//						}
//					}
//						$('#sizelstWomen').html(sizestr);
//						$('#sizelstWomen').show();
//				}
//				
//				else if(socialCategory!="" && socialCategory=="men")
//				{
//					alert("coming to men change function");
//					for(i=6;i<15;i+=0.5)
//					{
//						if(i==10.5 || i==11 || i==11.5 || i==12 || i==12.5 || i==13 || i==13.5 || i==14 || i==14.5)
//						{
//							if(i==sizeSelected)
//							{
//								sizestr+="<li class='size_available_act'><span class='size_active' onclick='getRespectiveColors("+i+");displaySize("+i+","+mappingPrice[i]+","+mappingsalePrice[i]+","+mappingproID[i]+")'>"+i+"</span></li>";
//							}
//							else
//							{
//								sizestr+="<li class='size_available_act'><span onclick='getRespectiveColors("+i+");displaySize("+i+","+mappingPrice[i]+","+mappingsalePrice[i]+","+mappingproID[i]+")'>"+i+"</span></li>";
//							}
//						}
//						elsefn
//						{
//							if(i==sizeSelected)
//							{
//								sizestr+="<li class='size_available_act idp_top_li'><span class='size_active' onclick='getRespectiveColors("+i+");displaySize("+i+","+mappingPrice[i]+","+mappingsalePrice[i]+","+mappingproID[i]+")'>"+i+"</span></li>";
//							}
//							else
//							{
//								sizestr+="<li class='size_available_act idp_top_li'><span onclick='getRespectiveColors("+i+");displaySize("+i+","+mappingPrice[i]+","+mappingsalePrice[i]+","+mappingproID[i]+")'>"+i+"</span></li>";
//							}
//						}
//						$('#sizelstMen').html(sizestr);
//						$('#sizelstMen').show();
//					}
//				}*/
//			}
//			setTimeout(function(){
//				$('.loading_page').hide();
//			},2000);
//			});
//		}
//	});
	 
	$('.idp_share').hover(function(){$(".idp_share").animate({
		  width:"275px"
  
			});},function(){$(".idp_share").animate({
			width:"40px"
  
	});});
	
	if($.browser.msie)
	{
		if($.browser.version.indexOf('7.')!=-1 || $.browser.version.indexOf('8.')!=-1)
		{
			////console.log('----->>>>> INSIDE IE Version is : '+$.browser.version);
			$('.idp_right_col h3').css({'background-repeat' : 'no-repeat'});
			$('.menu_pathway ul li').css({'background-repeat' : 'no-repeat'});
			$('.idp_add_cart_arrow').css({'background-repeat' : 'no-repeat'});
			
		}
		
	}
	
	
	$(".fb_review_popup_close").click(function(){
		$(".review_popup").fadeOut();
		$("#backgroundPopup").hide();
	});
	
	if($('#fbLoginFrom').val()!='' && $('#fbLoginFrom').val()!=null && $('#fbLoginFrom').val()=='review')
	{
		//alert('coming');
		$("html, body").animate({ scrollTop: 700 }, "fast");
	}
	
	 var shotNumberId=document.getElementById('shot_number_id').value;
     var shotArray	= new Array();
    
	if(String(shotNumberId).indexOf(",") != -1)
	{
	shotArray	 = String(shotNumberId).split(",");
	}
	else
	{
	shotArray	 = new Array(shotNumberId);
	}	 
	for(var i=0;i<shotArray.length;i++)
	{
	$('.shot_number_'+$.trim(shotArray[i])).hide();
	}
	
	//For IDP product image zoom
	loadZoomFeatures();
	var productNamewithTrimwithDot =  $('#productName').val().toLowerCase().replace(/\s/g, '');
	var productNamewithTrim = productNamewithTrimwithDot.replace(".","");

		 
		 $('#newRequest').click(function()
		 {
			  $('.dnt_see_ursze_success_act').hide();
			  $('.dnt_see_ursze_act').fadeIn();
			  $('#sizeSelected').val('SELECT');
		 });
		 
		 $('#newRequest1').click(function()
		 {
			  $('.outof_stock_popup_success_act').hide();
			  $('.outof_stock_popup_act').fadeIn();
			  $('#sizeSelected1').val('SELECT');
		 });
		 
//		 fetchInstagramDirectDetails(0);
		 
});

$(window).resize(function(){
	   var body_win_height = parseInt(document.body.clientHeight) ;
	   var win_height = parseInt(document.documentElement.clientHeight) ;

	   if( body_win_height > win_height) {
		$('#backgroundPopup').height(body_win_height);
	   } else {
		$('#backgroundPopup').height(win_height);
	   }
	});

function validateAcneContent()
{
	var msg = $("#acneRequest_msg").val();
	if(!(emailValidatorPopup($("#acneRequest_email")[0],'Not a Valid Email', 'acneRequest_emailError')))
	{
		$("#acneRequest_emailError").show();
		return false;
	}
	else if(msg==""||msg==null)
	{
		$("#acneRequest_emailError").hide();
		$("#acneRequest_msgEmpty").text("Give some Message");
		$("#acneRequest_msgEmpty").show();
		return false;
	}
	else
	{
		$("#acneRequest_emailError").hide();
		$("#acneRequest_msgEmpty").hide();
		return true;
	}
	
}
function hideAcneErrors()
{
	$("#acneRequest_emailError").hide();
	$("#acneRequest_msgEmpty").hide();
	$("#acneRequest_msg").val("");
	$("#acneRequest_email").val("");
}

  
//function getSocialButton() {

	
	//alert($('#___plusone_1').find('iframe').attr('src'));
	//$('#___plusone_1').find('iframe').addClass('test');
			
	//$('#___plusone_1 >iframe').addClass('test');
	/*var cssLink = document.createElement("link") 
	cssLink.href = "../css/style.css"; 
	cssLink .rel = "stylesheet"; 
	cssLink .type = "text/css";
	$('#___plusone_1').find('iframe').appendChild(cssLink);*/
	
	/*var e = edit.createElement('link'); 
	e.rel = 'stylesheet'; 
	e.type = 'text/css'; 
	e.href = "../css/style.css"; 
	this.iframe[0].contentWindow.document.getElementsByTagName('head')[0].appendChild(e);*/
	
	//var $head = $("iframe").contents().find("head");                
	//$head.append($("<link/>", 
	 //   { 
	//	alert("asd");
	//	rel: "stylesheet", href: "../css/style.css", type: "text/css" }
//}


function loadUserReviews()
{
	var start= parseInt(" "+startIndex);
	//alert("start"+start);
	//alert('inside loadUserReviews ');
	var vendorname = $('#vendorname').val();
	var productName = $('#productName').val();
	var colorname = $('#colorlst').val();
	var colorid=$('#colorlst').attr('titlevalue');
	var prodid=$('#productid').val();
	//alert('inside loadUserReviews colorid=='+colorid+'prodid=='+prodid+'vendorname=='+vendorname+'productName=='+productName+'colorname=='+colorname);
	
	if(startIndex==0)
		{
	 $.ajax({
        url: '/getUserReviews.htm?productId='+prodid+'&colorId='+colorid+'&vendorname='+vendorname+'&productName='+productName+'&colorname='+colorname,
        dataType: "json",
        type: "get",
        cache:false,
        async: true,
        contentType: "application/json; charset=utf-8",
        success: function (userReviewss) {
        	//alert("no of reviews :::::::::::::"+userReviewss.length)
        	userReviews = userReviewss;
        	loadReviews();
        }
	
	});}
	
}
function loadReviews()
{
	endIndex = startIndex+5;
	startIndex = 0;
	var reviewCount=0;
	var reviewSum=0;
	var reviewAvg=0;

	if(userReviews!=null&&userReviews.length>0)
		{
			var userReviewList="";
			reviewCount=userReviews.length;
			for(i=0;(i<userReviews.length);i++)
			{
				reviewSum+=userReviews[i].ratingCount;
			}
			for(i=0;(i<userReviews.length&&i<endIndex);i++)
				{
				
				startIndex++;
				var num = (i%5);
						
						if(((num!=0)||(i<endIndex))&&((reviewCount>(endIndex-1))||(reviewCount-1>i)))
						{if(i<(endIndex-1)){
							userReviewList+="<li>";}}
						if((i==(endIndex-1))||(reviewCount<(endIndex-1))&&(reviewCount-1==i))
							{
							userReviewList+="<li class=\"nb\">";}
						
						userReviewList+="<div class=\"review_rating_col\">";
						userReviewList+="<h3>"+userReviews[i].userName+"</h3>";
						userReviewList+="<div class=\"clear_both\"></div>";
						userReviewList+="<div class=\"rating_display\" >";
						for(j=1;j<=5;j++)
							{
							      if(userReviews[i].ratingCount>=j)
							    	  {
							    	  userReviewList+="<code  class=\"review_selected\"></code>";
							    	  }
							      else
							      	{
							    	  userReviewList+="<code ></code>";
							      	}
							}
							
						
						userReviewList+="</div>";
						userReviewList+="<!-- rating_display --></div>";
						userReviewList+="<!-- review_rating_col -->";
						userReviewList+="<div class=\"review_description_col\">";
						userReviewList+="<p>"+userReviews[i].reviewText+"</p>";
						userReviewList+="</div>";
						userReviewList+="<!-- review_description_col -->";
						userReviewList+="<div class=\"clear_both\"></div>";
						userReviewList+="</li>";
						
				
				}
			$('.listing_Reviews').html(userReviewList);
			
			if(endIndex<reviewCount)
				{
				$('#loadMoreReviews').show();	
				}
			else
				{
				$('#loadMoreReviews').hide();
				}
		
		}
	else
		{
		
		userReviewList="<li class=\"nb\" >";
		userReviewList+="<div>";
		userReviewList+="<h3 >No reviews available</h3>";
		userReviewList+="</div>";
		userReviewList+="<div class=\"clear_both\"></div>";
		
		userReviewList+="</li>";
		$('.listing_Reviews').html(userReviewList);
		$('#loadMoreReviews').hide();
		}
	if(reviewCount!=0)
		reviewAvg=reviewSum/reviewCount;
	var strAvgRv="";
	for(k=1;k<=5;k++)
		{
			if(reviewAvg>=k)
	    	  {
				strAvgRv+="<code  class=\"review_selected\"></code>";
	    	  }
			else
	      	{
				strAvgRv+="<code ></code>";
	      	}
		}
	$('#rating_total').html( '<span>'+reviewCount+' reviews</span>'+strAvgRv);
	strAvgRv="";   
			 
	
}

function setShoeVotes()
{
	//alert('inside loadUserReviews ');
	var colorid=$('#colorlst').attr('titlevalue');
	var prodid=$('#productid').val();
	$.post("/setShoeVotes.htm",{"productId":prodid,"colorId":colorid},function(data){});
	
}
function getProductsListForCategory(category)
{
	//alert("In getproductList"+category);
	var url="/getProductsForCategory.htm?category="+category;
	location.href=url;
}
function getProductListForVendor(attributeid,vendorName,socialcategory)
{
	//alert("Inside getProductListForVendor "+attributeid);
	var url="/getProductListForVendor.htm?attributeid="+attributeid+"&vendorName="+vendorName+"&socialcategory="+socialcategory;
	location.href=url;
}
function getNewArrival()
{
	var url="/getNewArrivalProduct.htm";
	location.href=url;
}
function getVintageProduct(style)
{
	var url="/getVintageProduct.htm?style="+style;
	location.href=url;
}
function getSaleItems()
{
	var url="/getSaleItems.htm";
		location.href=url;
}
function getSaleItemsBySize(attId)
{
	var url="/getSaleItemsBySize.htm?attId="+attId;
	location.href=url;
}
function getProductDetailsForColor()
{
	////console.log("inside getProductDetailsForColor");
	var colorid=$('#colorlst').attr('titlevalue');
	var colorname=$('#colorlst').attr('value');
	var prodid=$('#productid').val();
	$('.item_size_holder').removeClass('condition_size_holder');
	$('#color_selected').html("<b class='fl'>Color:</b> <span class='fl'> "+colorname+"</span><div class='clear_both'></div>");
	$('#color_selected').attr('titlevalue', colorid);
	var color_info = "";
	//alert("color id >"+colorid+" color name >>"+ colorname + " product id >>>" + prodid);
	var sizeStr;
	var isSizesAvilable=false;
	var socialCategory = $('#socialCategory').val();
	var showSC=socialCategory.charAt(0).toUpperCase()+socialCategory.slice(1);
	resetOutOfStockPopup();
	//hide outof stock	
	$('#'+colorid).addClass('color_tab_hover');
	$('.soldout_popup').hide();
	
	
	

	var selectedColorId = $('#colorlst').attr('titlevalue');
	var dtosize 	    = $('#dtosize').val();
	if(dtosize!=null && dtosize > 0)
	{	isavail=true;
		if($("#btnIDP").hasClass('preorder_btn'))
		{
			$("#btnIDP").html('PRE-ORDER NOW');
		}
		else
		{
			$("#btnIDP").html('ADD TO CART');
		}
		display_color_name = colorname;
		display_color_id = colorid;
		$('#Color').attr('titlevalue',colorid);
		$('#Color1').attr('titlevalue',colorid);
		$('#color_selected').html("<b class='fl'>Color:</b> <span class='fl'> "+colorname+"</span><div class='clear_both'></div>");
		
		$('#'+selectedColorId).addClass('color_tab_mouseover');
		//productDetails=productdetaillst;
		sizeStr="";
		var pricelist=[];
		var salepricelist=[];
		var highestPrice=[];
    	if($('#price_1').val()%10==0)
		{
			highestPrice ="$"+ parseDouble($('#price_1').val()).toFixed(2);
		}
		else
		{
			highestPrice ="$"+ $('#price_1').val();
		}
		shoePrice = $('#price_1').val();
		if($('#salePrice_1').val()!=null && $('#salePrice_1').val()>0)
		{	
			highestPrice = "<del> $"+$('#price_1').val()+"</del>"; 
			isSale = 'true'; 
			$('#saleprice_div').removeClass('dn');
			$('#saleprice_div').show();
			if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
			{
				 $('#saleprice_div').show();$('#saleprice_div').html("<span class=\"final\">Final Sale $"+(parseFloat($('#salePrice_1').val())-(parseFloat($('#salePrice_1').val())*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2)+"</span>");
				 //$(".gary_del").text("$"+productdetaillst[0].price).show();
				 $(".black_del").text("$"+parseFloat($('#salePrice_1').val()).toFixed(2)).show();
				 //$('#pricediv').hide();
			}
			else if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#vendorname').val().toLowerCase()==$('#saleBrandNames').val())
			{
				$('#saleprice_div').show();$('#saleprice_div').html("<span class=\"final\"> $"+(parseFloat($('#salePrice_1').val())-(parseFloat($('#salePrice_1').val())*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2)+"</span>");
				//$(".gary_del").text("$"+productdetaillst[0].price).show();
				$(".black_del").text("$"+parseFloat($('#salePrice_1').val()).toFixed(2)).show();
				//$('#pricediv').hide();
			}
			else
		    {
		    	 $('#saleprice_div').html("<b>Sale $"+parseFloat($('#salePrice_1').val()).toFixed(2)+"</b>");
		    	 $(".gary_del").text("").hide();
				 $(".black_del").text("").hide();
				 $('#pricediv').show();
		    }

		}
		else if($('#salePrice_1').val()==0.0 || $('#salePrice_1').val()==null || $('#salePrice_1').val()=='')
		{
			if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#vendorname').val().toLowerCase()==$('#saleBrandNames').val())
			{
				highestPrice = "<del> $"+$('#price_1').val()+"</del>"; 
				$('#saleprice_div').removeClass('dn');
				$('#saleprice_div').html("<span class=\"final\">$"+($('#price_1').val()-(parseFloat($('#price_1').val())*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2)+"</span>");
				////console.log('value of discount is :: '+(productdetaillst[0].price-(parseFloat(productdetaillst[0].price)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2));
				//$(".black_del").text("$"+parseFloat($('#salePrice').val()).toFixed(2)).show();
			}
			else
				$('#pricediv').html("$"+$('#price_1').val());
			
		}
		
		$('#sizelst').attr('value','Size');
		//if($('#vendorname').val()!='Acne')
		if(socialCategory=='women'){
			$('#size_selected').html("U.S. Women's Size: <span id=''>Please Select size</span>");
		}
		else if(socialCategory=='men'){
			$('#size_selected').html("U.S. Men's Size: <span id=''>Please Select size</span>");
		}
		else{
			$('#size_selected').html("U.S. Size: <span id=''>Please Select size</span>");
		}
	
		isSizesAvilable=true;
		sizeStr+="<option class='size_available_act'>Please Select</option>"
		for(i=1;i<parseInt(dtosize)+1;i++)
		{
//			var sizequantitycolorDTO=productdetaillst[i];
			pricelist[i]=$('#price_'+i).val();
			salepricelist[i]=$('#salePrice_'+i).val();
			
			if($.trim($('#size_'+i).val().replace(".0",""))==sizeSelected){
				$('#idp_selected_size').text($.trim($('#size_'+i).val().replace(".0","")));
			}
			
			if($('#vendorname').val()=='Vintage' || $('#vendorname').val()=='Solestruck Magazine')
			{
				//sizeStr+="<option id='size_"+sizequantitycolorDTO.size+"_"+sizequantitycolorDTO.isPreOrder+"_"+i+"' class='size_available_act' titlevalue="+$.trim(sizequantitycolorDTO.size.replace(".0",""))+","+sizequantitycolorDTO.price+","+sizequantitycolorDTO.salePrice+","+sizequantitycolorDTO.proVarID+" >"+sizequantitycolorDTO.size.replace(".0","")+"</option>";
				//console.log("coming inside the condition where vendorname is :: vintage and size is :: "+$('#size_'+i).val().replace(".0",""));
				//console.log("price :: "+$('#price_'+i).val()+" && sale price is :: "+$('#salePrice_'+i).val()+" && product variant is :: "+$('#proVar_'+i).val());
				displaySize($.trim($('#size_'+i).val().replace(".0","")),$('#price_'+i).val(),$('#salePrice_'+i).val(),$('#proVar_'+i).val());
				$('.shopsize_dwn').hide();
				$('.idp_size_cm').text($('#size_'+i).val().replace(".0",""))
			}
			else
			{
				if($.trim($('#size_'+i).val().replace(".0",""))==sizeSelected)
				{
					$(".cl_info_size_act").removeClass("size_error_label");
					$('.size_head_act').removeClass("error_label");
					sizeStr+="<option id='size_"+$('#size_'+i).val()+"_"+$('#isPreOrder_'+i).val()+"_"+i+"' class='size_available_act' titlevalue="+$.trim($('#size_'+i).val().replace(".0",""))+","+$('#price_'+i).val()+","+$('#salePrice_'+i).val()+","+$('#proVar_'+i).val()+"> "+$('#size_'+i).val().replace(".0","")+"</option>";
				}
				else
				{
					sizeStr+="<option id='size_"+$('#size_'+i).val()+"_"+$('#isPreOrder_'+i).val()+"_"+i+"' class='size_available_act'  titlevalue="+$.trim($('#size_'+i).val().replace(".0",""))+","+$('#price_'+i).val()+","+$('#salePrice_'+i).val()+","+$('#proVar_'+i).val()+"> "+$('#size_'+i).val().replace(".0","")+"</option>";
				}
				
			}
		}
		
		sizeStr+="<option>Don't See Your Size?</option>";
		
		var priceStr=highestPrice;
		$('#pricediv').html(priceStr);
		pricelst=pricelist;
		salepricelst=salepricelist;
		$("#SoldOut").hide();
		if($('#vendorname').val()!='Acne')
		{
			$(".add_whishlist").show();
			$("#social_sendToFriend").show();
		}
			$("#size_selected").show();
		$('#shopBy').html(sizeStr);
		$("#sizelst").show();
		$("#waitlist").hide();
		
	}
	else
	{
		$('#'+selectedColorId).addClass('color_tab_mouseover');
		$('#cAvl4').hide();
		$('.shopsize_dwn').hide();
		//$('.shopsize_dwn').hide();
		//$('.idp_size_cm').hide();
		$(".gary_del").text("").hide();
		$(".black_del").text("").hide();
		$('#pricediv').show();
		isSale='false';
		$('#pricediv').text($('#pricediv').text());
		$('#saleprice_div').hide();
		isavail=false;
		display_color_name = colorname;
		display_color_id = colorid;
		$("#btnIDP").html('Notify Me').css('width','auto');
		$("#product_selected").css('margin','0px 0px 0px 15px');
		$("#sizelst").hide();
		$("#waitlist").removeClass('dn');
		$("#waitlist").show();
		//$("#hyphen").hide();
		if($('#vendorname').val()!='Acne')
			{
			$("#SoldOut").removeClass('dn');$("#SoldOut").show();
			}
		$("#size_selected").hide();
		$('#backgroundPopup').hide();
		$(".add_whishlist").hide();
		//$("#social_sendToFriend").hide();
	}

	

	
	

	if(!isSizesAvilable)
	{
		$('#sizelst').attr('value','Size');
		$('.idp_size_ul').html('');
		//show out of stock
		$('.soldout_popup').show();
		//$("#waitlist").removeClass('dn');
		//$("#waitlist").show();
		//$("#btnIDP").html('Notify Me').css('width','auto');
		$("#product_selected").css('margin','0px 0px 0px 15px');
	}
	//showViewImages(prodid,colorid,colorname,false);
	//var inStepImg=$('#black').children().first();//alert((inStepImg));
	//var inStepImg=$('#black').children().slice(7, 8);
	//////console.log('instep  '+inStepImg.html());
	//showProductAngle(inStepImg);
	if($('#vendorname').val()=="Vintage" || $('#vendorname').val()=='Solestruck Magazine'){
		//alert("coming");
		$("#sizelst").hide();
		$("#sizelstWomen").hide();
		$("#sizelstMen").hide();
		//$('.item_size_holder').hide();
		
	}
	if($('#vendorname').val()=='Solestruck Magazine'){
		//$('#color_selected').find('b').html("");
		//$('#size_selected').html("");
		$("#sizelst").hide();
		$('#color_selected').find('b').css('display', 'none');
		$('#size_selected').css('display', 'none');
		$('#cAvl4').hide();
		$('.select_size_act').hide();
	}
	selectedColor=display_color_id;
//	if($('#lengthmap').val()!=null && $('#lengthmap').val()<6)
//	{
//		$('.select').hide();
//		$('#shopBy').attr('disabled','disabled');
//	}
//	else if($('#lengthmap').val()!=null && $('#lengthmap').val()>5)
//	{
//		$('.select').show();
//		$('#shopBy').removeAttr('disabled');
//		setTimeout(function(){
//			$('#shopBy').val("1").trigger("change");
//		},100);
//	}
	//For IDP product image zoom
//	loadZoomedImages();
}


function callFormImageURL()
{
	//alert(" color inside callFormImageURL() = "+display_color_name);
	$("[id^='Color']").val(''+display_color_name);
	$("[id^='Color']").attr('titlevalue',display_color_id);
	var vendorName = $('#vendorname').val();
	var productName = $('#productName').val();
	//var colorlst = $('#Color').val();
	//var colorName= $(".color_gallery> span").attr("name");
	var colorName=$("[id^='Color']").val();
	//var colorname=$('#colorlst').attr('value');
	//alert('vendorName = '+vendorName + 'productName = '+productName + 'colorName = '+ colorName);
	formImageURL(colorName,vendorName,productName);
}

$('ul.cList1 li').live("click", function(){
	notifyMeColorId = $(this).attr('id');
});
$('.cList').live( "click", function() { 
	
	var vendorName = $('#vendorname').val();
	var productName = $('#productName').val();
	var colorName = $('#Color').val();
	formImageURL(colorName,vendorName,productName); } );

$('.cList1').live( "click", function() { 
	var vendorName = $('#vendorname').val();
	var productName = $('#productName').val();
	var colorName = $('#Color1').val();
	$('.loading_page').show();
	var productid = $('#productid').val();
	
	$.ajaxSetup({async:true});
	$.ajax({url:"/getDontSeeYourSizesForColor.htm", data:({"productid":productid, "colorid":notifyMeColorId}), success:function(DSYS){
	if(DSYS.length!=0 && DSYS!=null)
	{
		//console.log("DSYS length is :: "+DSYS.length);
		var j=1;
		var numberOfSizes = $('#custom_drop_size_nav ul li').length;
		var sizes="";
	//	console.log("number of sizes are :: "+numberOfSizes);
	//	console.log("length of actual sizes are :: "+DSYS.length);
		if(numberOfSizes>DSYS.length)
		{
			for(i=0; i<DSYS.length; i++)
			{
				$('#outOfStock_'+j).val(DSYS[i]);
				$('#outOfStock_'+j).html(DSYS[i]);
				j++;
			}
			for(i=DSYS.length+1; i<numberOfSizes+1; i++)
			{
				$('#outOfStock_'+i).hide();
			}
		}
		else 
		{
			for(i=0; i<DSYS.length; i++)
			{
				sizes+="<li id='outOfStock_"+j+"' value='"+DSYS[i]+"'>"+DSYS[i]+"</li>";
				$('#outOfStockList').html(sizes);
				j++;
			}
		}
	}
	$('.loading_page').hide();
	}});
	formImageURL(colorName,vendorName,productName); } );

$('.cList2').live( "click", function() { 
	
	var vendorName = $('#vendorname').val();
	var productName = $('#productName').val();
	var colorName = $('#Color2').val();
	formImageURL(colorName,vendorName,productName); } );


function displayPrice(index,isPreorder)
{
	var priceStr="$ "+pricelst[index];
	//alert('displayPrice index '+index+" isPreorder "+isPreorder);
	if(salepricelst[index]!=null&&salepricelst[index]>0)
		priceStr="<del>"+priceStr+"</del>"+"  &nbsp; <font color='#d22e2d'>$ "+salepricelst[index]+"</font>";
	
	$('#pricediv').html(priceStr);
	
	if(isPreorder=='true')
	{
		$("#btnIDP").html("<code class=\"processing_icon\"></code> PRE-ORDER NOW");
	}
	else
	{
		$("#btnIDP").html("<code class=\"processing_icon\"></code> ADD TO CART");
	}
}

function displaySize(size,price,salePrice,proVid)
{
	//////console.log(" inside displaysizes method ");
	////console.log("size, price, sale price and product variant id are:: "+size+ " && "+price+" && "+salePrice+" && "+proVid);
	var sizeArray= new Array();
	
	var displaySizes=$('#shopBy option:selected').attr('titlevalue');
	
	////console.log(" display sizes "+displaySizes);
	if(displaySizes!=undefined){
		sizeArray=displaySizes.split(",");
		
		size=sizeArray[0];
		price=sizeArray[1];
		if(salePrice==null || salePrice==undefined || salePrice=='')
			salePrice=sizeArray[2];
		if(proVid=="" || proVid==null)
		proVid=sizeArray[3];
		////console.log("size, price, sale price and product variant id value for second time is :: "+size+ " && "+price+" && "+salePrice+" && "+proVid);
		////console.log("size array value of sale price :: "+sizeArray[2]);
	}
	
	
	//$('.idp_size_cm').hide();
	
	
//	//console.log("coming inside displaySize :: "+size+" && "+price+" && "+salePrice+" && "+proVid);

	$('#added_wishlist').hide();
	var priceStr = '';
	var finalPrice=price;
	var socialCategory = $('#socialCategory').val();
	var prodid = $('#productid').val(); 
	var colorid = $('#colorlst').attr('titlevalue');
	var showSC=socialCategory.charAt(0).toUpperCase()+socialCategory.slice(1);
	sizeSelected = size;
	//$('.idp_size_cm').text(size);
	if(price==undefined)
	{
//		if($('.'+selectedColor).hasClass('grayOut_thumb'))
//		{
//			console.log("1");
//			//alert("coming into the price undefined has class :: "+selectedColor);
//			isavail=false;
//			$("#btnIDP").html('NOTIFY ME').css('width','auto');
//			$('#size_selected').hide();
//			$("#SoldOut").removeClass('dn').show();
//			$('.add_whishlist ').hide();
//			$('#size_outofstock').show();
//		}
//		else
//		{
			isavail=true;
			$("#btnIDP").html('ADD TO CART');
			$('.add_whishlist ').show();
			if($("#btnIDP").hasClass('preorder_btn'))
			{
				$("#btnIDP").html('PRE-ORDER NOW');
			}
			$('#size_selected').show();
			$('#SoldOut').addClass('dn').hide();
			$('#size_outofstock').hide();
//		}
	}
	else if(price!=undefined)
	{
//		if($('.'+selectedColor).hasClass('grayOut_thumb'))
//		{
//			console.log("3");
//			////console.log("coming inside the new condition in display size function");
//			isavail=false;
//			$("#btnIDP").html('NOTIFY ME').css('width','auto');
//			$('#size_selected').hide();
//			$("#SoldOut").removeClass('dn').show();
//			$('.add_whishlist ').hide();
//			$('#size_outofstock').show();
//		}
//		else
//		{
			isavail=true;
			$("#btnIDP").html('ADD TO CART');
			$('.add_whishlist ').show();
			if($("#btnIDP").hasClass('preorder_btn'))
			{
				$("#btnIDP").html('PRE-ORDER NOW');
			}
			$('#idp_selected_size').text(sizeSelected);
			$('#size_selected').html("U.S. "+showSC+"'s Size: "+size+"<input type=\"hidden\" id='proVid' value="+proVid+"><input type=\"hidden\" id='selSize' value="+size+"><input type=\"hidden\" id='hidPrice' value="+finalPrice+">");
			$("#size_selected").show();
			$('#SoldOut').addClass('dn').hide();
			$('#size_outofstock').hide();
//		}
	}
	
//	isavail=true;
//	$('#idp_selected_size').text(sizeSelected);
//	$('#size_selected').html("U.S. "+showSC+"'s Size: "+size+"<input type=\"hidden\" id='proVid' value="+proVid+"><input type=\"hidden\" id='selSize' value="+size+"><input type=\"hidden\" id='hidPrice' value="+finalPrice+">");
//	$("#size_selected").show();
	
//	isavail=true;
//	$("#btnIDP").html('ADD TO CART');
//	$('.add_whishlist ').show();
//	if($("#btnIDP").hasClass('preorder_btn'))
//	{
//		$("#btnIDP").html('PRE-ORDER NOW');
//	}
//	$('#idp_selected_size').text(sizeSelected);
//	$('#size_selected').html("U.S. "+showSC+"'s Size: "+size+"<input type=\"hidden\" id='proVid' value="+proVid+"><input type=\"hidden\" id='selSize' value="+size+"><input type=\"hidden\" id='hidPrice' value="+finalPrice+">");
//	$("#size_selected").show();
//	$('#SoldOut').addClass('dn').hide();
//	$('#size_outofstock').hide();
//	
//	size_selectedInfo = "U.S. "+showSC+"'s Size: <span id=" + size + ">"+size+"</span><input type=\"hidden\" id='proVid' value="+proVid+"><input type=\"hidden\" id='selSize' value="+size+"><input type=\"hidden\" id='hidPrice' value="+finalPrice+">";
//	$("#size_selected").removeClass("size_error_label");
	if(isSale!='true')
	{
		if(price!=undefined)
		{
			priceStr="$"+price;
		}
		else if(price==undefined)
		{
			priceStr="$"+$("#retailPrice").val();
		}
		if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#vendorname').val().toLowerCase()==$('#saleBrandNames').val())
		{
			priceStr ="<del> $"+$('#retailPrice').val()+"</del>";
			$('#saleprice_div').html("<span class=\"final\"> $"+(parseFloat($('#retailPrice').val())-(parseFloat($('#retailPrice').val())*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2)+"</span>");
		}
			
	}
	else
	{
		if(price!=undefined)
		{
			priceStr = "<del> $"+price+"</del>";
		}
		else if(price==undefined)
		{
			priceStr ="<del> $"+$('#retailPrice').val()+"</del>";
			salePrice = $('#salePrice').val();
		}

		$('#saleprice_div').show();
		if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
		{
		  
			$('#saleprice_div').html("<span class=\"final\">Final Sale $"+(parseFloat(salePrice)-(parseFloat(salePrice)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2)+"</span>");
			//$(".gary_del").text("$"+price).show();
			$(".black_del").text("$"+parseFloat(salePrice).toFixed(2)).show();
			//$('#pricediv').hide();
		}
		else if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#vendorname').val().toLowerCase()==$('#saleBrandNames').val())
		{
			////console.log("is sale value :: "+isSale);
			$('#saleprice_div').html("<span class=\"final\"> $"+(parseFloat(salePrice)-(parseFloat(salePrice)*parseInt($("#fbsale_discount_percentage").val())/100)).toFixed(2)+"</span>");
//			$(".black_del").text("$"+parseFloat(price).toFixed(2)).show();
		}
		else
		{
			/*$('#saleprice_div').html("<b>Sale $"+parseFloat(salePrice).toFixed(2)+"</b>");*/
			$('#saleprice_div').html("<b> $"+parseFloat(salePrice).toFixed(2)+"</b>");
			$(".gary_del").text("").hide();
			$(".black_del").text("").hide();
			$('#pricediv').show();
		}
		
		finalPrice=salePrice;
	}
	$('#pricediv').html(priceStr);
	initialize();
}

function getProductDetailsForColor_popup()
{
	
	/*var colorid=$('#colorlst_popup').val();
	var prodid=$('#productid').val();
	var size = $('#sizelst_popup').val();*/
	//$("select[id$=sizelst]").remove();
	//$('#pricediv_popup').html("<h1>$"+$('#pricediv').text()+"</h1>");
	if(productDetails!=null)
		{	
			
			$('#pricediv_popup').html("<h1>"+$('#pricediv').text()+"</h1>");
			$('#sale_pricediv_popup').html("<h1>"+$('#salepricediv').text()+"</h1>");
			
		}
		
		//$('#sizelst_popup').html(sizeStr);
	
	/*var vendorname = $('#vendorname').text();
	var productname = $('#productName').text();*/
	//formImageURL('colorlst_popup',vendorname, productname);
} 


function showDiv(divname)
{
	$('#'+divid).show();
}

function sendReqForDontSeeUrSize()
{
	var vendorName = $('#vendorname').val();
	var productName = $('#productName').val();
	var productID=$('#productid').val();
	//var colorID=$('#colorlst_popup').val();
	//var colorName=$('#colorlst_popup :selected').text();
	var colorID=$('#Color').attr('titlevalue');
	//var colorName = $("#"+colorID).text();
	var colorName = $(".cList1 li[id='"+colorID+"']").text();
	//var colorName = document.getElementById(colorID);
	//var size = $('#sizelst_popup :selected').text();
	
	var size = $('#sizeSelected').val();
	var emailid = $('#sizeEmail').val();
	//var alertCheck = $('#alertme').attr('checked');
	//alert("details:::  vendorName ="+ vendorName + " -- productName = " + productName + " -- colorName = " +colorName+ " -- colorID = " + colorID + "--size = " + size+ " -- emailid = " + emailid);
	//var retailPrice = $('#pricediv_popup').val();
	//getProductVariantID(productID, colorID, size);
	//////console.log("variantID = " + variantID);
	if(validateEmailDontSeeUrSize())
	{		
		/*$('#emailError').text("");*/
		if(validateSelectedSize()){
			$.ajaxSetup({cache:false});
			$.getJSON("/dontSeeYourSizeRegister.htm",{"vendorName":vendorName,"productName":productName,"colorName":colorName,"productID":productID,"colorID":colorID,"size":size,"emailid":emailid},function(data){
				$.ajaxSetup({cache:false});
				$('.dnt_see_ursze_success_act').show();
				 $('#emailError').text("");
				
				 $('.dnt_see_ursze_act').hide();
				 //$('#sizeEmail').val("");
				 $('#sizelst_popup').val('-1');
				 //$('#sizeSelectError').text("");
			});
		}
	
	}
	else{
		//alert("Sorry! Invalid details.");
	}
	
}

function validateEmailDontSeeUrSize()
{

try {
	
 	if ($("#sizeEmail").val() != ""){
  			if(emailValidator($("#sizeEmail")[0], 'Not a Valid Email')) //$("#elementID")[0]
  			{
  				return true;
  			}	
  			else
  			{
  				/*$("#sizeEmail").val("");*/
   				/*$('#sizeEmail').focus();*/
  				$("#sizeEmail").addClass("error_input_field");
  				$("#emailError").html('Not a Valid Email').show();
  				/*$("#sizeEmail").attr('placeholder','Not a Valid Email');*/
  				/*$('#emailError').text("");
   				$('#emailError').text("Not a Valid Email");*/
  				return false;
  			}
  		}
	  else {
		  $("#sizeEmail").addClass("error_input_field");
		  $("#sizeEmail").attr('placeholder','Please fill in any Email ID');
	  /*$('#emailError').text("Please fill in any Email ID");*/
	  
	  /*$('#sizeEmail').focus();*/
	  return false;
	  }
 	}
 	catch( e )
 	{
 		//alert(e);
 	}

}

function validateSelectedSize()
{
	var size = $('#sizeSelected').val();
	if(size=='Select'){
		 $("#size_nav").addClass("error_input_field");
		 $('#sizeSelected').attr('placeholder','Please Select a size');
		return false;
	}
	else
		return true;

}

function emailValidator(elem, helperMsg){
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0\-9\.\-]+\.[a-zA-z0\-9]{2,4}$/;
	if(elem.value.match(emailExp)){
		return true;
	}else{
		/*$('#emailError').text("Not a Valid Email");*/
		/*elem.focus();*/
		return false;
	}
}

function sendReqForWaitList()
{
	
	var vendorName = $('#vendorname').val();
	var productName = $('#productName').val();
	var productID=$('#productid').val();
	var colorSelID=$('#Color1').attr('titlevalue');
	var colorSelName = $(".cList1 li[id='"+colorSelID+"']").text();
	var size = $('#sizeSelected1').val();
	var emailid = $('#sizeEmail1').val();
	var alertCheck = $('#alertme1').attr('checked');
	//alert("details:::  vendorName ="+ vendorName + " -- productName = " + productName + " -- colorName = " +colorSelName+ " -- colorID = " + colorSelID + "--size = " + size+ " -- emailid = " + emailid + "--alertCheck = " +alertCheck);
	//var retailPrice = $('#pricediv_popup').val();
	//getProductVariantID(productID, colorID, size);
	////////console.log("variantID = " + variantID);
	if(validateEmailWaitList())
	{
		/*$('#emailError1').text("");*/
		if(validateSelectedSizeW()){
			$.ajaxSetup({cache:false});
			$.getJSON("/dontSeeYourSizeRegister.htm",{"vendorName":vendorName,"productName":productName,"colorName":colorSelName,"productID":productID,"colorID":colorSelID,"size":size,"emailid":emailid,"alertCheck":alertCheck},function(data){
				
				$.ajaxSetup({cache:false});
				$('.outof_stock_popup_success_act').show();
				 $('#emailError1').text("");
				
				 $('.outof_stock_popup_act').hide();
				 //$('#backgroundPopup').hide();
				 //$('#sizeEmail1').val("");
				 //$('#sizelst_popup').val('-1');
				 $('#sizeSelectError1').text("");
			});
		}
	
	}
	else{
		//alert("Sorry! Invalid details.");
	}
	

}

function validateEmailWaitList()
{
try {
 	if ($("#sizeEmail1").val() != ""){
  			if(emailValidator($("#sizeEmail1")[0], 'Not a Valid Email')) //$("#elementID")[0]
  			{
  				$("#sizeEmail1").removeClass('error_input_field');
  				$('#emailError1').hide();
  				return true;
  			}	
  			else
  			{
   				/*$("#sizeEmail1").val("");
   				$('#sizeEmail1').focus();
   				$('#emailError1').text("");*/
  				$("#sizeEmail1").addClass('error_input_field');
   				$('#emailError1').text("Not a Valid Email");
  				return false;
  			}
  		}
	  else {
	  $('#sizeEmail1').attr("placeholder","Please fill in any Email ID");
	  //alert("Please fill in any Email ID");
	  $('#sizeEmail1').addClass('error_input_field');
	  return false;
	  }
 	}
 	catch( e )
 	{
 		//alert(e);
 	}

}

function validateSelectedSizeW()
{
	var size = $('#sizeSelected1').val();
	if(size=='Select'){
		$('#sizeSelected1').attr("placeholder","Please Select a size");
		$('#custom_drop_size_nav').addClass('error_input_field');
		return false;
	}
	else
		$('#custom_drop_size_nav').removeClass('error_input_field');
		return true;

}

/*function getProductVariantID(productID, colorID, size)
{
	alert("inside getProductVariantID()");
	$.getJSON("/getproductvariantId.htm",{"productID":productID,"colorID":colorID,"size":size},function(data){
		variantID=data;
		//////console.log("variantID ======== "+ variantID);
		//sendRequest(productID, variantID);
	});
	//////console.log("variantID --- "+ variantID);
	//return variantID;
}
*/

/*function sendRequest(productID, variantID)
{
	var emailid = $('#sizeEmail').val();
	alert(emailid);
	var alertCheck = $('#alertme').attr('checked');
	alert(alertCheck);
	
	//send request wid productID n variantID 
	$.getJSON("/dontSeeYourSize.htm",{"productID":productID,"variantID":variantID},function(data){
	
	
	});
	
}*/

function getProductDetailsForSendToFriend_popup(isOnLoad)
{
	var sizeStr="";
	
	if(isOnLoad==true)
		{
		//alert("onload");
			if(productDetails.length>0)
			{
				//alert('length>0');
			$('#pricediv_friend').html("<h1>$"+productDetails[0].price+"</h1>");
			if(productDetails[0].salePrice!=null&&productDetails[0].salePrice>0)
				$('#sale_pricediv_friend').html("<h1>$"+productDetails[0].salePrice+"</h1>");
			$('#pricediv_friend').html("<h1>"+$('#pricediv').text()+"</h1>");
			for(i=0;i<productDetails.length;i++)
				{
					//alert("size = " + sizequantitycolorDTO.size);
					var sizequantitycolorDTO=productDetails[i];
					sizeStr+="<option value='"+sizequantitycolorDTO.size+"'>"+sizequantitycolorDTO.size+"</option>";
				}			
				
					
			}
			else{
				//alert('length<0');
				$('#pricediv_friend').html("<h1>"+$('#pricediv').text()+"</h1>");
				sizeStr+="<option value='-1'>No Size Avlbl</option>";
			}
		}
			
	else
		{
		//alert("onload false");
			var colorid=$('#colorlst_friend').val();
			//alert("colorid = "+colorid);
			var prodid=$('#productid').val();
			$.ajaxSetup({async:true});
			$.ajaxSetup({cache:false});
			$.getJSON("/getproductdetailsforcolor.htm",{"productid":prodid,"colorid":colorid},function(productdetaillst)
					{
				$.ajaxSetup({cache:false});
				if(productdetaillst!=null)
						{
							for(i=0;i<productdetaillst.length;i++)
							{
							var sizequantitycolorDTO=productDetails[i];
							sizeStr+="<option value='"+sizequantitycolorDTO.size+"'>"+sizequantitycolorDTO.size+"</option>";
							}
						}
						else
						{
							$('#pricediv_friend').html("<h1>"+$('#pricediv').text()+"</h1>");
							sizeStr+="<option value='-1'>No Size Avlbl</option>";
						}
						
					});
			
		}
	
	
	
		
		
		//alert("Size list for friend"+sizeStr);
		$('#sizelst_friend').html(sizeStr);
		$('#pricediv').html($('#pricediv').text());
	
		var vendorname = $('#vendorname').text();
		var productname = $('#productName').text();
		formImageURL('colorlst_friend',vendorname, productname);
	
} 

function sendToFriend()
{
	var vendorName	  = $('#vendorname').val();
	var productName   = $('#productName').val();
	var custName 	  = $('#custName').val();
	var custEmailID   = $('#custEmail').val();
	var friendName    = $('#frndName').val();
	var friendEmailID = $('#frndEmail').val();
	var textMsg       = $('textarea#textMsg').val();
	var retailPrice = $('#pricediv').text();
	var saleprice = $('#saleprice_div').text();
	if(textMsg=="")
	{
		textMsg="default";
	}
		
	var productID     = $('#productid').val();
	var colorID       = $('#Color').attr('titlevalue');
	//var size = $('#sizelst_friend :selected').text();
	//retailPrice = $('#pricediv_friend').text();
	//retailPrice       = $("#retailPrice").val();
	//salePrice         = $("#salePrice").val();
	//getProductVariantID(productID, colorID, size);
	//if($("#sendToFriendForm").validate())
	//{
	///alert( "vendorName = " +vendorName+ "productID = " +productID+ "colorID = " +colorID+ "productName = " +productName+ "custName = " +custName+ "custEmailID = " +custEmailID+ "friendName = " +friendName+ "friendEmailID = " +friendEmailID+ "textMsg = " +textMsg+ "retailPrice = " +retailPrice);
	//var newretailPrice = retailPrice.replace(/[^0-9.0-9]+/g,"");
	//alert("local js, retailPrice = "+retailPrice + "and text = "+textMsg + "price = "+newretailPrice);
	
	 if(validateSendToFriendForm())
	 {
		 $("#sendToFriend").addClass("popup_processing_btn");
		 
		$.getJSON("/sendToFriendd.htm",{"vendorName":vendorName, "productID":productID, "colorID":colorID, "productName":productName, "custName":custName, "custEmailID":custEmailID, "friendName":friendName, "friendEmailID":friendEmailID, "textMsg":textMsg, "retailprice":retailPrice, "saleprice":salePrice},function(data)
		{
			//alert("Your Mail has been sent !");
			$("#custName").val("");
			//$("#custNameError").text("");
			$("#custEmail").val("");
			//$("#custEmailError").text("");
			$("#frndName").val("");
			//$("#frndNameError").text("");
			$("#frndEmail").val("");
			//$("#frndEmailError").text("");
			$("#textMsg").val("");
			$('.send_to_friend_sucess_act').show();
			
			$(".dont_see_your_size_popup").hide();
			$(".sendto_friend_popup_act").hide();
			$("#sendToFriend").removeClass("popup_processing_btn");
			
			//$("#popup_pos").hide();
			//$("#sendtofriend_popup_holder").hide();
			//$("#sendto_friend_popup_act").hide();
			//$("#login_popup_close").hide();
			//$("#backgroundPopup").hide();
		});
	 }
	//}
}

function validateSendToFriendForm()
{
 var custName = $('#custName').val();
 var friendName =  $('#frndName').val();
 var custEmailID =  $('#custEmail').val();
 var friendEmailID =  $('#frndEmail').val();
 //var size = $('#sizelst_friend :selected').text();
 
 
 if(custName=="Your Name" || custName=="")
 {
	 //alert("custName:Your Name");
  /*$('#custNameError').text("Please Fill In Your Name");
  $('#custName').addClass("error_input_field");*/
  $('#custName').addClass('error_input_field');
  $('#custName').attr('placeholder','Please Fill In Your Name');
  return false;
 }
 else
	 {
	 	//alert("custName");
		 //$('#custNameError').text("");
		 $('#custName').removeClass("error_input_field");
	 }
 
 if(custEmailID!="" || custEmailID != "Your Email")
 {

 //validate email regex
  if(!emailValidatorPopup($("#custEmail")[0], 'Not a Valid Email', 'custEmailError'))
     {
       $("#custEmail").val("");
       $('#custEmail').focus();
       //$('#custEmailError').text("");
       $('#frndEmail').removeClass("error_input_field");
       //$('#frndEmailError').text("");
       //$('#custEmailError').text("Not a Valid Email");
       //$('#custEmail').addClass("error_input_field");
       
       $('#custEmail').addClass('error_input_field');
       $('#custEmail').attr('placeholder','Not a Valid Email');

      return false;
     }
  else{
	  	
		 $('#custEmail').removeClass("error_input_field");
		 //$('#custEmailError').text("");
		  
	 }
 }
 else
 if(custEmailID=="" || custEmailID == "Your Email"){

  //$('#custEmailError').text("Please Fill In Your Email ID");
  //$('#custEmail').addClass("error_input_field");
  
  $('#custEmail').addClass('error_input_field');
  $('#custEmail').attr('placeholder','Please Fill In Your Email ID');
  return false;
 }
 if(friendName=="Their Name" || friendName == '')
 {
//  $('#frndNameError').text("Please Fill In Your Friend's Name");
//  $('#frndName').addClass("error_input_field");
 
  $('#frndName').addClass('error_input_field');
  $('#frndName').attr('placeholder',"Please Fill In Your Friend's Name");
  return false;
 }
 else
	 {
	 	//$('#frndNameError').text("");
	 	$('#frndName').removeClass("error_input_field");
	 }
 if(friendEmailID!="" || friendEmailID!="Their Email")
 {
 //validate email regex
  if(!emailValidatorPopup($("#frndEmail")[0], 'Not a Valid Email', 'frndNameError'))
     {
       $("#frndEmail").val("");
       $('#frndEmail').focus();
       //$('#frndNameError').text("");
       //$('#custNameError').text("");
      //$('#frndEmailError').text("Not a Valid Email");
      //$('#frndEmail').addClass("error_input_field");
       
       $('#frndEmail').addClass('error_input_field');
       $('#frndEmail').attr('placeholder','Not a Valid Email');
      return false;
     }
  else
  {
	  $('#frndEmail').removeClass("error_input_field");
	  //$('#frndEmailError').text("");
  }
 }
 else
 if(friendEmailID=="" || friendEmailID=="Their Email"){

//  $('#frndEmailError').text("Please Fill In Your Friend's Email ID");
//  $('#frndEmail').addClass("error_input_field");
  $('#frndEmail').addClass('error_input_field');
  $('#frndEmail').attr('placeholder','Not a Valid Email');
  return false;
 }
 /*if(size=="No Size Avlbl")
 {
  $('#sizeSelectError').text("Please select a color with available sizes.");
  return false;
 }*/
 
 $("#custEmail").val("");
 $("#frndEmail").val("");
 //$('#custEmailError').text("");
 //$('#frndNameError').text("");
 //$('#sizeSelectError').text("");
 $('#custEmail').removeClass("error_input_field");
 $('#frndEmail').removeClass("error_input_field");
 return true;
 
} 
/*
function validateEmailSendToFriend()
{

try {
 	if ($("#sizeEmail").val() != ""){
  			if(emailValidator(document.getElementById('sizeEmail'), 'Not a Valid Email'))
  			{
  				return true;
  			}	
  			else
  			{
   				$("#sizeEmail").val("");
   				$('#sizeEmail').focus();
   				$('#emailError').text("");
   				$('#emailError').text("Not a Valid Email");
  				return false;
  			}
  		}
	  else {
	  $('#emailError').text("Please fill in any Email ID");
	  //alert("Please fill in any Email ID");
	  $('#sizeEmail').focus();
	  return false;
	  }
 	}
 	catch( e )
 	{
 		//alert(e);
 	}

}


*/

function emailValidatorPopup(elem, helperMsg, errorDiv){
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0\-9\.\-]+\.[a-zA-z0\-9]{2,4}$/;
	if(elem.value.match(emailExp)){
		return true;
	}else{
		$('#'+errorDiv).text("Not a Valid Email");
		elem.focus();
		return false;
	}
}



function showViewImages(productid,colorid,colorname,isMouseOver)
{
	//alert(">>productid = "+productid+">>colorid = "+colorid+">>colorname = "+colorname+">>isMouseOver = "+isMouseOver);
	//alert("vendorname = "+vendorname+"productname = "+productname+"colorname = "+colorname);
	//////console.log("product id is = "+ productid + "color id passed is = "+colorid);
	var spanTag;
	var divTag;
	var imgList=new Array();
	var imgBaseURL=constructImageURL(colorname);
	imgBaseURL=imgBaseURL.substring(0,imgBaseURL.lastIndexOf('-'));
	////console.log(imgBaseURL);
	//http://commondatastorage.googleapis.com/images2.solestruck.com/jeffrey-campbell-shoes/Jeffrey-Campbell-shoes-Lita-(Silver-Glitter)
	var imageViews=[
	 				['010101','010601'],
	 				['010102','010602'],
	 				['010103','010603'],
	 				['010104','010604'],
	 				['010105','010605'],
	 				['010106','010606']
	 				]
	$.each(imageViews,function(index,obj){
		spanURL=imgBaseURL+"-"+obj[0]+".jpg";
		divURL=imgBaseURL+"-"+obj[1]+".jpg";
		if(obj[0]=='010104')
		   {
		   spanTag="<span class='view_glallery_opacity'><img src="+spanURL+"  onerror='$(this).hide();' id = 'img_"+obj[0]+"' alt=\"\" width='40px' height='30px'/></span>";
		   divTag="<div style='display:block;'><img id = 'img_"+obj[1]+"' onerror='$(this).hide();' src="+divURL+"  alt=\"\" width='480px' height='360px'/></div>";
		   }
		  else{
		   spanTag="<span><img src="+spanURL+" id = 'img_"+obj[0]+"' alt=\"\" width='40px' height='30px' onerror='$(this).hide();'/></span>";
		   divTag="<div><img src="+divURL+" id = 'img_"+obj[1]+"' alt=\"\" width='480px' height='360px' onerror='$(this).hide();'/></div>";
		  }
		
		
		imgList.push(spanTag);
		imgList.push(divTag);
	}
	);
	////console.log(imgList.join('<br>'));			
	$('#black').html(imgList.join(''));
	/*$('.bigImg').find('img').load(function(){
		finished=true;
		//console.log("-------------->>>>>>>>> finished is true");
	});*/
	if(isMouseOver)
		{
			$('#colorlst').attr({'titlevalue':colorid,'value':colorname});
			$('#colorlst').trigger('change');
		}
		
	
	initialize();
	//getProductDetailsForColorForImage(productid, colorid);
	//For IDP product image zoom
//	loadZoomedImages();
}

/*
 * //commented by ss2(unnecessary code)
 */
/*function getProductDetailsForColorForImage(productid, colorid)
{
	
	
	
	
	
	
	var sizeStr="<option value='-1'> SelectSize</option>";
	
	//$.getJSON("/getproductdetailsforcolor.htm",{"productid":productid,"colorid":colorid},function(productdetaillst)
	
		if(productDetails!=null)
		{	
			var pricelist=[];
			if(productDetails[0].salePrice!=null&&productDetails[0].salePrice>0)
				$('#salepricediv').html(productDetails[0].salePrice);
			$('#pricediv').html("<h1>$"+productDetails[0].price+ "</h1>");
			retailprice= productDetails[0].price;
			for(i=0;i<productDetails.length;i++)
				{
					
					var sizequantitycolorDTO=productDetails[i];
					pricelist[i]=sizequantitycolorDTO.price;
					sizeStr+="<option onclick=displayPrice('"+i+"',"+sizequantitycolorDTO.isPreOrder+") value='"+sizequantitycolorDTO.size+"'>"+sizequantitycolorDTO.size+"</option>";
				}
			pricelst=pricelist;
		}
			
		$('#sizelst').html(sizeStr);
			
	
}
*/

function formImageURL(colorname,vendorname, productname)
{
	//var colorname = $('#colorlst').attr('value');//$('#colorlst_popup :selected').text();
	//alert(colorname);
	//var colorname = $("#colorlst").attr('titlevalue');
	//var colorname='Black';
	//var colorname= $(".color_gallery> span").attr("name");
	//alert(colorname + " -- " + vendorname + " -- " +  productname)
	var imageURLchanged = $('#imageURL').attr('value');
	var vendorname1 = vendorname.toLowerCase();
	vendorname1 = vendorname1.replace(/ /g,"-") + "-shoes/";
	var vendorname2 = vendorname.replace(/ /g,"-") + "-shoes-";
	var productname1 = productname.replace(/ /g,"-") + "-(";
	var colorname1 = colorname.replace(/ /g,"-") + ")-010504.jpg";
	//alert("");
	
	imageURLchanged = imageURLchanged+vendorname1+vendorname2+productname1+colorname1;
	////////console.log(imageURLchanged);
	 $('.custom_size_shoe_img').css('background-image', 'url("' + imageURLchanged + '")'); 
	 $('#shoeImagePopup').css('background', 'url('+imageURLchanged+')'); 
	 initialize();
}	

function constructImageURL(colorname)
{
	var vendorname = $('#vendorname').val();
	var productname = $('#productName').val();
	//var select_list_field = document.getElementById('colorlst');
	//var select_list_selected_index = select_list_field.selectedIndex;
	//////var colorname = $('#colorlst').attr('value');
	//var colorname =$('#colorlst option:selected').text();
	//var colorname= $("#colorlst option[value='"+colorid+"']").text();
	
	////console.log('selected vendor name:'+vendorname);
	////console.log('selected product name:'+productname);
	////console.log('selected color name:'+colorname);
	
	
	var colorid=$('#colorlst').attr('titlevalue');
	var prodid=$('#productid').val();
	
	
	var imageURLchanged = $('#imageURL').attr('value');
	var vendorname1 = vendorname.toLowerCase();
	vendorname1 = vendorname1.replace(/ /g,"-") + "-shoes/";
	var vendorname2 = vendorname.replace(/ /g,"-") + "-shoes-";
	var productname1 = productname.replace(/ /g,"-") + "-(";
	var colorname1 = colorname.replace(/ /g,"-") + ")-010304.jpg";
	
	imageURLchanged = imageURLchanged+vendorname1+vendorname2+productname1+colorname1;
	
	return imageURLchanged;
}

function resetOutOfStockPopup()
{
	
	var colorname = $('#colorlst').attr('value');
	var newImageUrl=constructImageURL(colorname);
	$("#SoldOut").hide();
	$("#size_selected").show();
	$('#color_soldout').html(colorname);
	$('#soldout_div').find('img').attr('src',newImageUrl);
}


function submitShoeReview()
{
	var userName = $('#userName').val();
	var userEmail = $('#userEmail').val();
	//var review_rating = $('#review_rating').val();
	var reviewTitle = $('#r_title').val();
	var reviewText = $('#reviewText').val();
	var anonymous = "";
	var vendorName = $('#vendorname').val();
	var productName = $('#productName').val();
	var colorName = $('#colorlst').val();
	//var colorName = 'Blue Suede';
	var productID = $('#productid').val();
	//var productID = '731190';
	//var colorID = $('#colorlst :selected').val();
	var colorID = $('#colorlst').attr('titlevalue');
	//alert("colorID"+colorID);
	if($('#anonymous').hasClass('selected'))
	{
		anonymous = true;
	}
	else if($('#anonymous').hasClass('noClass'))
	{
		anonymous = false;
	}
	$("#userNameError").text("");
	$("#userEmailError").text("");
	$("#reviewTextError").text("");
	$('#ratingError').text("");
	
	if(reviewTitle=='Title')
		reviewTitle="";
	
	////console.log("username :: "+userName+" userEmail :: "+userEmail+" review title :: "+reviewTitle+" review text :: "+reviewText+" anonymous :: "+anonymous+" colorID :: "+colorID);
	if(validateUserReviewForm())
		{
		//$('#submit_rating').css('background', '#FF6666');
		//$('#submit_rating').addClass('popup_processing_btn');
		$('#submit_rating').attr('disabled', 'disabled');
		$.ajaxSetup({cache:false});
		$.getJSON("/submitUserReview.htm",{"userName":userName,"userEmail":userEmail,"review_rating":review_rating,"reviewTitle":reviewTitle,"reviewText":reviewText,"anonymous":anonymous,"vendorName":vendorName,"productName":productName,"colorName":colorName,"productID":productID,"colorID":colorID, "reviewType":"Regular"},function(data){
			
			
			$.ajaxSetup({cache:false});
			$('#userName').val("Your Name");
			$('#userEmail').val("Your Email");
			$('#reviewTitle').val("Title");
			$('#reviewText').val("");
			$('#r_title').val("Title");
			$('#anonymous').removeAttr('checked');
			$('#userName').removeAttr('disabled');
			$('#userEmail').removeAttr('disabled');
			$('#submit_rating').removeAttr('disabled');
			//$('#submit_rating').addClass('rating_submit_btn');
			//$('#submit_rating').addClass('rating_submit_btn:hover');
			//$('input[name=foo]').attr('checked', false);
			ratingCount(0);
			$('#successMsg').show();
			setTimeout(function(){
			    $('#successMsg').hide();
			   // $('#submit_rating').removeClass('popup_processing_btn');
			},2000);
			
		});
		
		}
	//$('#submit_rating').addClass('rating_submit_btn');
	//$('#submit_rating').addClass('rating_submit_btn:hover');
}

function submitShoeReviewFB()
{
	var userName = $('#FBuserName').val();
	var userEmail = $('#FBuserEmail').val();
	var aToken = $('#aToken').val();
	//var review_rating = $('#review_rating').val();
	var reviewTitle = $('#r_title').val();
	var reviewText = $('#reviewText').val();
	var vendorName = $('#vendorname').val();
	var productName = $('#productName').val();
	var colorName = $('#colorlst').val();
	var productID = $('#productid').val();
	var colorID = $('#colorlst').attr('titlevalue');
	var userDetails = new Array();
	//var anonymous = False;
	
	if(reviewTitle=="Title")
		reviewTitle = "";
	
	////console.log("username :: "+userName+" userEmail :: "+userEmail+" review title :: "+reviewTitle+" review text :: "+reviewText+" anonymous :: "+anonymous+" colorID :: "+colorID);
	if(validateUserReviewFormFB())
		{
		if(aToken!="" && aToken!="" && (userEmail=="" || userEmail==null) && (userName=="" || userName==null))
		{
			//alert("email value is :: "+$('#revEmail').val()+" && name value is :: "+$('#revName').val());
			userEmail=$('#revEmail').val();
			userName=$('#revName').val();
				
		}
		//$('#submit_rating').css('background', '#FF6666');
		//$('#submit_rating').addClass('popup_processing_btn');
		$('#submit_ratingFB').attr('disabled', 'disabled');
		$('.loading_page').show();
		$.ajaxSetup({cache:false});
		$.getJSON("/submitUserReview.htm",{"userName":userName,"userEmail":userEmail,"review_rating":review_rating,"reviewTitle":reviewTitle,"reviewText":reviewText,"anonymous":false,"vendorName":vendorName,"productName":productName,"colorName":colorName,"productID":productID,"colorID":colorID, "reviewType":"Facebook"},function(data){
			
			$.ajaxSetup({cache:false});
			/*$('#userName').val("Your Name");
			$('#userEmail').val("Your Email");
			$('#reviewTitle').val("Title");*/
			$('#r_title').val("Title");
			$('#FBreviewTitle').val('');
			$('#FBreviewText').val('');
			ratingCount(0);
			$('#reviewText').val("");
			$.ajax({url:"/clearFBSessionValue.htm", success:function(data){
				//alert("the session values are cleared");
			}});
			/*$('#anonymous').removeAttr('checked');
			$('#userName').removeAttr('disabled');
			$('#userEmail').removeAttr('disabled');*/
			$('#submit_ratingFB').removeAttr('disabled');
			//$('#submit_rating').addClass('rating_submit_btn');
			//$('#submit_rating').addClass('rating_submit_btn:hover');
			//$('input[name=foo]').attr('checked', false);
			$('#successMsg').show();
			$('.loading_page').hide();
			setTimeout(function(){
			    $('#successMsg').hide();
			  //  $('#submit_rating').removeClass('popup_processing_btn');
			},5000);
		});
		}
}

function isNameAvailable()
{
	var userName = $('#userName').val();
	////console.log("user name is :: "+userName);
	if(userName != "" && userName != "Your Name")
	{
		////console.log("user name is not empty");
		if($('#userName').hasClass('error_input_field'))
		{
			$('#userName').removeClass('error_input_field');
		}
	}
	else
	{
		////console.log("user name is empty");
	}
}

function isEmailAvailable()
{
	var Email = $('#userEmail').val();
	////console.log("user email is :: "+Email);
	if(Email != "" && Email != "Your Email")
	{
		////console.log("user email is not empty");
		if($('#userEmail').hasClass('error_input_field'))
		{
			var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0\-9\.\-]+\.[a-zA-z0\-9]{2,4}$/;
			if(Email.match(emailExp))
			{
				$('#userEmail').removeClass('error_input_field');
			}	
		}
	}
	else
	{
		////console.log("user email is empty");
	}
}

function isReviewTextAvailable()
{
	var reviewText = $('#reviewText').val();
	////console.log("review text is :: "+reviewText);
	if(reviewText != "" && reviewText != "Your Message")
	{
		////console.log("review text is not empty");
		if($('#reviewText').hasClass('error_input_field'))
		{
			$('#reviewText').removeClass('error_input_field');
		}
	}
	else
	{
		////console.log("review text is empty");
	}
}

function ratingCount(point)
{
	userRating = point;
	$('#review_rating').value=point;
	review_rating=point; 
	if(point==0){
		for (var i=1;i<=5;i++){
			$('#id'+i).removeClass('review_selected');}
	}
	for (var i=1;i<=5;i++){
	$('#id'+i).removeClass('review_selected');}
	for (var i=1;i<=point;i++){
		$('#id'+i).addClass('review_selected');}
	   

}

function showUserRating(rate)
{
	//alert("rating star");
	////////console.log("***********************************************************************");
	for (var i=1;i<=rate;i++){
		$('#star'+i).addClass('review_selected');}
}
	
function validateUserReviewForm()
{
	var userName = $('#userName').val();
	var userEmail = $('#userEmail').val();
	var reviewText = $('#reviewText').val();
	
	if(userName=="" || userName=="Your Name")
		{
		$("#userName").addClass("error_input_field");
		/*$("#userName").attr('placeholder','Please Fill In Your Name');*/
		/*$('#userName').focus();*/
		/*$('#userNameError').text("Please Fill In Your Name");*/
		return false;
		}
	else
	{
		$("#userName").removeClass("error_input_field");
	}
	if(userEmail!="")
		{
		if(!emailValidatorPopup($("#userEmail")[0], 'Not a Valid Email', 'userEmailError'))
			{
			/*$("#userEmail").val("");*/
			$("#userEmail").addClass("error_input_field");
			$("#userEmailError").html('Not a Valid Email').show();
			/*$("#userEmail").attr('placeholder','Not a Valid Email');*/
				/*$('#userEmailError').text("Not a Valid Email");*/
			return false;
			}
		else
		{
			$("#userEmail").removeClass("error_input_field");
			$("#userEmailError").html('Not a Valid Email').hide();
		}
		
		}
	else
		{
			$("#userEmail").addClass("error_input_field");
			$("#userEmail").attr('placeholder','Please Fill In Your Email ID');
			/*$('#userEmailError').text("Please Fill In Your Email ID");*/
			/*$('#userEmail').focus();*/
			return false;
		}
	if($.trim(reviewText)=="" || reviewText=="undefined" || reviewText=="Your Message")
		{
		$("#reviewText").addClass("error_input_field");
		$("#reviewText").attr('placeholder','Please Fill In A Message');
		 /*$('#reviewText').focus();*/
		/* $('#reviewTextError').text("Please Fill In A Message");*/
		 return false;
		}
	else
		{
		$("#reviewText").removeClass("error_input_field");
		}
	if(userRating==0)
		{
			$('#ratingError').text("Please rate the product");
			return false;
		}
	
	$("#userName").val("");
	//$("#userNameError").text("");
	$("#userEmail").val("");
	$("#userEmailError").text("");
	$("#reviewText").val("");
	//$("#reviewTextError").text("");
	$('#ratingError').text("");
	return true;
	
}

function validateUserReviewFormFB()
{
	var aToken = $('#aToken').val();
	var userName = $('#FBuserName').val();
	var userEmail = $('#FBuserEmail').val();
	var reviewText = $('#reviewText').val();
	var reviewTitle = $('#r_title').val();
	
	if(aToken=="" || aToken==null)
	{
		if($.trim(reviewText)=="" || reviewText=="undefined" || reviewText=="Your Message")
		{
			$("#reviewText").addClass("error_input_field");
			$("#reviewText").attr('placeholder','Please Fill In A Message');
			 return false;
		}
		else
		{
			$("#reviewText").removeClass("error_input_field");
		}
		if(userRating==0)
		{
			$('#ratingError').text("Please rate the product");
			return false;
		}
		else
			$('#ratingError').text("");
		$('#backgroundPopup').show();
		$('.review_popup').fadeIn();
		$("html, body").animate({ scrollTop: 0 }, "slow");
		if((reviewText!="" && reviewText!=null) || (reviewTitle!="" && reviewTitle!=null))	
		{
			////console.log("review rating value before setting :: "+review_rating);
			if(review_rating==undefined)
				review_rating="";
			////console.log("review rating value is ::"+review_rating);
			$.ajax({url:"/retainReviewValues.htm", data:({"reviewTitle":reviewTitle, "reviewText":reviewText, "reviewRating":review_rating}), success:function(data){
				
			}});
		}
		return false;
	}
	else
	{
		$('#backgroundPopup').hide();
		$('.review_popup').fadeOut();
		
		if($.trim(reviewText)=="" || reviewText=="undefined" || reviewText=="Your Message")
		{
			$("#reviewText").addClass("error_input_field");
			$("#reviewText").attr('placeholder','Please Fill In A Message');
			 return false;
		}
		else
		{
			$("#reviewText").removeClass("error_input_field");
		}
		if(userRating==0)
		{
			$('#ratingError').text("Please rate the product");
			return false;
		}
		else
			$('#ratingError').text("");
	}
	
	return true;
	
}

function setAnonymous()
{
	////console.log("coming inside the setAnonymous method");
	if($('#anonymous').hasClass('selected'))
	{
		////console.log("Is anonymous value is selected :: "+$('#anonymous').hasClass('selected'));
		$('#userName').val('Anonymous');
		$('#userEmail').val('anonymous@solestruck.com');
		$('#userName').attr('disabled',true);
		$('#userEmail').attr('disabled',true);
	}
	else if($('#anonymous').hasClass('noClass'))
	{
		////console.log("Is anonymous value is noClass :: "+$('#anonymous').hasClass('noClass'));
		$('#userName').val('Your Name');
		$('#userEmail').val('Your Email');
		$('#userName').removeAttr('disabled');
		$('#userEmail').removeAttr('disabled');
	}
	/*var check = $('#anonymous').attr('checked')
	if(check)
		{
		$('#userName').val('Anonymous');
		$('#userEmail').val('anonymous@solestruck.com');
		$('#userName').attr('disabled',true);
		$('#userEmail').attr('disabled',true);
		}
	else{
		$('#userName').val('Your Name');
		$('#userEmail').val('Your Email');
		$('#userName').removeAttr('disabled');
		$('#userEmail').removeAttr('disabled');
	}*/
}


/*function precacheImages(url)
{
	
		for(i=1;i<7;i++)
			{
				for(j=1;j<7;j++)
					{
					var img=new Image();
					img.src=url+"-010"+i+"0"+j+".jpg";
					//console.log("done caching this"+img.src);
					}
					
			}
}*/

function parseDouble(value){
	  if(typeof value == "string") {
	    value = value.match(/^-?\d*/)[0];
	  }

	  return !isNaN(parseInt(value)) ? value * 1 : NaN;
	}

function close_dontseeyoursize_success_actPopup()
{
	$('#backgroundPopup').hide();
	$('.dnt_see_ursze_success_act').hide();	
}


// Newly added for ShoppingCart by YES
function idp_addItem()
{
	////console.log("coming inside the addItem function :: "+$('#idp_selected_size').text());
	var ItemValues=new Object();
	////console.log($("#btnIDP").text());
	var sizeArray=new Array();
	var tempsize=$.trim($('#idp_selected_size').text());
	var sizeArray=tempsize.split(" ");
	////console.log(" size "+sizeArray.length)
	
	var size=sizeArray[0];
	////console.log("size::::: "+sizeArray[0]+":"+sizeArray[1]);
	////console.log(" size "+size);
//	var isPreOrderObj=$("ul li[id^='size_"+size+"']");
//	//console.log("isPreOrderObj "+isPreOrderObj.length);
	var objId=$('#shopBy option:selected').attr('id');
	if($('#vendorname').val()!='Vintage' && $('#vendorname').val()!='Solestruck Magazine')
	{
		var splitId=objId.split("_");
		var isPreOrder=splitId[2];
		
		/*//console.log("isPreOrderObj is "+isPreOrderObj+" and objId "+objId+" and index "+splitId+" and isPreOrder is "+isPreOrder);
		//console.log("preorder obj is "+isPreOrderObj);*/
		ItemValues.isPreOrder=isPreOrder;
	}
	
	ItemValues.isSale=isSale;
	//ItemValues.sequenceId=0;
	ItemValues.productId=$('#productid').val();
	ItemValues.productVariantId=$('#proVid').val();
	ItemValues.colorId=$('#colorlst').attr('titlevalue');
	ItemValues.productName=$('#productName').val();
	ItemValues.colorName=$('#colorlst').attr('value');
	ItemValues.vendorName=$('#vendorname').val();
	ItemValues.size=size;
	ItemValues.quantity=1;
	ItemValues.retailPrice=$('#retailPrice').val();
	if($('#saleprice_div').css('display')!='none')
	{
		if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()!='Brand' && $('#discountTypeName').val()=='FF')
		{
			//ItemValues.price=$.trim($('#saleprice_div').text().replace('Final Sale $',''));
		    
		    ItemValues.price=$("#salePrice").val();
		}
		else if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $("#webDiscountOn").val()!=null && $("#webDiscountOn").val()=='true' && $('#discountTypeName').val()=='Brand' && $('#vendorname').val().toLowerCase()==$('#saleBrandNames').val())
		{
			////console.log("sale price value is :: "+$('#salePrice').val());
			////console.log("so the sale price is ::"+$.trim($('#saleprice_div').text().replace('$','')));
			if($("#salePrice").val()!=null && $("#salePrice").val()!="0.0")
				ItemValues.price=$("#salePrice").val();
			else
				ItemValues.price=$('#retailPrice').val();
		}
		else
		{
			////console.log("coming into the else condition");
			ItemValues.price=$.trim($('#saleprice_div').text().replace('$',''));
		}
	}
	else
		ItemValues.price=ItemValues.retailPrice;
	////console.log("retail price :: "+ItemValues.retailPrice);
	ItemValues.unitPrice=ItemValues.price;
	
	
	
//	//console.log('productid is ---->>>>' + $('#productid').val());
//	//console.log('proVid is ---->>>>' + $('#proVid').val());
//	//console.log('colorId is ---->>>>' + $('#colorlst').attr('titlevalue'));
//	//console.log('productName is ---->>>>' + $('#productName').val());
//	//console.log('colorName is ---->>>>' + $('#colorlst').attr('value'));
//	//console.log('vendorName is ---->>>>' + $('#vendorname').val());
//	//console.log('size is ---->>>>' + sizeArray[0]);
//	//console.log('price is ---->>>>' + $('#hidPrice').val());
//	//console.log('sale price is ---->>>>' + $.trim($('#saleprice_div').text().replace('$','')));
	
	if($.trim($('#idp_selected_size').text())!="" && $.trim($('#idp_selected_size').text())!='Please Select' && $.trim($('#idp_selected_size').text())!="Don't See Your Size?");
	addItem(ItemValues,"true");
	
}
function validateSize()
{
		////console.log(" inside validatesize function ");
		if($.trim($('#idp_selected_size').text())!="" && $.trim($('#idp_selected_size').text())!='Please Select' && $.trim($('#idp_selected_size').text())!="Don't See Your Size?")
		{
			$(".cl_info_size_act").removeClass("size_error_label");
			$('.size_head_act').removeClass("error_label");
			addItemValidate();
			////console.log(" validate size step one ");
		}
		else 
		{
			$(".cl_info_size_act").addClass("size_error_label");
			$('.size_head_act').addClass("error_label");
			$(".cl_info_size_act span").html('Please Select size');
		}
    
}
function addItemValidate()
{
	////console.log(" inside addItemValidate!  ");
	
	var prodid=$('#productid').val();
	var colorid=$('#colorlst').attr('titlevalue');
	var size = $.trim($('#idp_selected_size').text());
	////console.log(" add itemValidate step two ");
	////console.log(size);
	////console.log("prodid:"+prodid+":colorid:"+colorid+":size:"+size);
	
	
	$.ajax({url:'/isLoggedIn.htm',cache: false,success:function(customerid)
	{
			////console.log('customer id'+customerid.customerid);
			if(customerid!=null&&customerid!='')	
				{
					////console.log("inside customerid is not null! login is success  ");
					addItemToWishList(customerid,prodid,colorid,size);
					
				}
			else
				{
					////console.log("inside customerid is null! ");
					/*setting global values which are needed after login*/
					addItemAndLoadWishList=true;
					globProdid=prodid;
					globColorid=colorid;
					globSize=size;
				
					//////console.log('login required!');
					$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');					
					$('#backgroundPopup').show();
					$('.wish_list_form').fadeIn();	
					/*$('#email_login_wishList').focus();*/
			   		//position_popup ();
					$.ajax({type:'POST',cache: false,url:"/wishlistValues.htm",data:({"customerid":customerid,"prodid":prodid,"colorid":colorid,"size":size}),success:function(data){
						////console.log("the data after getWishlistValues is :: "+data);
					}});
				}
	}});

	
}
/*function addItemToWishList(customerId,productid,colorid,size)
{
	//console.log(" additemToWishList step four ");
	$('#wishlist_add_msg').html('Adding to wishlist...');
	$('#wishlist_add_msg').show();
	$.ajax({type:'POST',cache: false,url:"/addToWishList.htm",data:({"customerId":customerId,"prodid":productid,"colorid":colorid,"size":size}),success:function(data){
		//console.log("Data::"+data);
		$('#wishlist_add_msg').html(data);
		delayHide('wishlist_add_msg');
		iswishlistEmpty=$('#emptywishlist').val();
		//console.log("iswishlistEmpty"+iswishlistEmpty);
		if(iswishlistEmpty=='true')
			//console.log('empty');
			wishList_addItem(customerId);
		else
			//console.log('not empty');
		
	}});
}*/


/*function loginValidateWishList()
{
	////console.log(" inside loginValidateWishList function ");
	
	//Wishlist 
	
	$("#invalid_label").hide();
	var email=$('#email_login_wishList').val();
	if(email=='')
	{
		$("#email_login_wishList").addClass("error_input_field");
		$("#email_login_wishList").attr('placeholder','Please Enter Your Email !');
		
		return false;
	}
	else
	{
		//$('#rqFld_login_password').hide();
	}
	
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if(!emailReg.test(email))
	{
		 $("#email_login_wishList").val("");
		 $("#email_login_wishList").addClass("error_input_field");
		 $("#email_login_wishList").attr('placeholder','The Email Id You Entered Is Not Valid!');
		
		return false;
	}
	else
	{
		//$('#rqFld_login_email').hide();
	}
	var pass=$.trim($('#pass_wishList').val());
	if(pass=='')
	{
		$("#pass_wishList").addClass("error_input_field");
		$("#pass_wishList").attr('placeholder','Please Enter Your Password !');
		
		$('#rqFld_login_password').show();
		$('#pass').focus();
		return false;
	}
	else
	{
		//$('#rqFld_login_password').hide();
	}
	
$.post('/login.htm',{"username":email,"password":pass},function(data){
	
		if(data.login=='success')
			{
				////console.log(" inside login success ");
				
				var myaccount='<ul>'+
         		 			'<li> <a onclick="loadMyAccount('+data.customerid+');"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">My Account</a></li>'+
         		 			'<li><a onclick="showWishList();" onmouseover="this.style.textDecoration=\'underline\'" onmouseout="this.style.textDecoration=\'none\'" style="text-decoration: none; ">Wishlist</a></li>'+
         		 			'<li><a  onclick="logout()"  onmouseover="this.style.textDecoration=\'none\'" onmouseout="this.style.textDecoration=\'none\'">Logout</a></li>'+
         		 			'</ul>';
				$('#account').html(myaccount);
				
				$('.wish_list_form').hide();
				$('.wish_list_popup').fadeIn().css('position','fixed');		
				 
				
				if(addItemAndLoadWishList == true)
				{
					
					doAddItemAndLoadWishList(data.customerid,globProdid,globColorid,globSize);
					if($('#ul_wishlist li').size()<1)
					{
						populateEmptyWishListHTML();
					}	
					
				}
				else 
				{
					getWishList(data.customerid);
					
					if($('#ul_wishlist li').size()<1)
					{
						populateEmptyWishListHTML();
					}
				}
				
				
			}
		else
			{
			
				$('#invalid_label_wishList').show();
				$('#invalid_label_wishList').html('Invalid username / password !')
			}
		
	},"json");
	return false;
	
}*/

/*function getWishList(customerid)
{
	//console.log(" inside get wishlist ");
	$.ajax({url:'/getWishList.htm',cache: false,data:({"custId":customerid}),success:function(data)
		{
			////console.log("data:"+data);
		
		$('#wish_list_popup_content').html(data);
		 iswishlistEmpty=$('#emptywishlist').val();
		//console.log("iswishlistEmpty is ---------->>>>>>>>> " + iswishlistEmpty);
		if(iswishlistEmpty=='true')
		{
			////console.log("---------->>>>>>>>> On load Wish List is Empgty!");
			populateEmptyWishListHTML();
			
		}
		//changeCurrency(currencyType);
	}});
}*/


function doAddItemAndLoadWishList(customerId,productid,colorid,size)
{
	$.ajax({type:'POST',cache: false,url:"/addItemAndLoadWishList.htm",data:({"customerId":customerId,"prodid":productid,"colorid":colorid,"size":size}),success:function(data)
	{
		if(data=='true')
		window.location.href='/wishlist/'
	}});
}

function onErrorfunction(imgid)
{
	//alert("-------"+imgid);
	//$('#'+imgid).hide();
	//$('#'+imgid).siblings().hide();
	$('#'+imgid).parent().addClass('dn');
	brokenImagesAlert($('#'+imgid).attr('src'));
}

function isMobileDevice()
{
	return navigator.userAgent.toLowerCase().indexOf("ipad")!=-1 || navigator.userAgent.toLowerCase().indexOf("iphone")!=-1 || navigator.userAgent.toLowerCase().indexOf("ipod")!=-1 || navigator.userAgent.toLowerCase().indexOf("android")!=-1 || navigator.userAgent.toLowerCase().indexOf("mobile")!=-1;
}

function wopen(url, name, w, h)
{
// Fudge factors for window decoration space.
 // In my tests these work well on all platforms & browsers.
w += 32;
h += 96;
 var win = window.open(url,
  name, 
  'width=' + w + ', height=' + h + ', ' +
  'location=no, menubar=no, ' +
  'status=no, toolbar=no, scrollbars=no, resizable=no');
 win.resizeTo(w, h);
 win.focus();
}

//function getRespectiveColors(size)
//{
//	//alert("coming inside the getRespectiveColors");
//	//var colorid=$('#colorlst').attr('titlevalue');
//	$(".loading_page").show();
//	var prodid=$('#productid').val();
//	var totalColors = $("#lengthmap").val();
//	sizeSelected = size;
//	//$('.idp_size_cm').text(size);
//	var colorid = new Array();
//	var isAvailable = new Array();
//	for(i=1;i<=totalColors;i++)
//	{
//		colorid[i]=$("#colorid_"+i).val();
//		if($("."+colorid[i]).hasClass('grayOut_thumb'))
//		{
//			//alert("coming inside the hasClass condition"+colorid[i]);
//			$("."+colorid[i]).removeClass('grayOut_thumb');
//		}
//		//alert("getting the respective sizes based on color id :: "+respectiveSizesforColorid[colorid[i]]);
//		/*if(respectiveSizesforColorid[colorid[i]].indexOf(sizeSelected)>=0)*/
//		if($.inArray(sizeSelected, respectiveSizesforColorid[colorid[i]])>=0)
//		{
//			//alert("cleared the condition respectiveSizesforColorid");
//			isAvailable[i]="true";
//		}
//	}
//	//alert("colors are :: "+colorid[3]);
//	
//	/*for(i=1;i<=totalColors;i++)
//	{
//		////console.log("color id's are :: "+colorid[i]);
//		$.ajaxSetup({async:false});
//		$.ajaxSetup({cache:false});
//		$.getJSON("/getproductdetailsforcolor.htm",{"productid":prodid,"colorid":colorid[i]},function(productdetaillst)
//		$.ajax({cache: false,url:"/getproductdetailsforcolor.htm",data:({"productid":prodid,"colorid":colorid[i]}),success:function(productdetaillst)
//		{
//			////console.log("no. of sizes available for the respective colorid :: "+productdetaillst.length);
//			for(var x=0;x<productdetaillst.length;x++)
//			{
//				var availablesizes=productdetaillst[x];
//				//console.log("product details is:: "+productdetaillst[x]);
//				//console.log("availablesizes are :: "+availablesizes.size);
//				if(sizeSelected==availablesizes.size)
//				{
//					isAvailable[i]="true";
//				}
//			}
//			$(".loading_page").hide();
//			//completedRequests++;
//		}
//		complete:function(){
//			if(completedRequests==totalColors || (completedRequests-1)==totalColors)
//			$(".loading_page").hide();
//		}
//		});
//	}*/
//	for(i=1;i<=totalColors;i++)
//	{
//		//alert("value of available size is:: "+isAvailable[i]);
//		if(isAvailable[i]!="true")
//		{
//			//var colorid = colorid[i];
//			////console.log("!!!!! :: "+colorid[i]);
//			$("."+colorid[i]).addClass('grayOut_thumb');
//		}
//	}
//	////console.log("coming to the getrespectivecolor function and the color id is :: "+selectedColor);
//	if($('#'+selectedColor).hasClass('grayOut_thumb'))
//	{
//		////console.log("coming inside the new condition in get respective color function");
//		isavail=false;
//		$("#btnIDP").html('NOTIFY ME').css('width','auto');
//		$('#size_selected').hide();
//		$("#SoldOut").removeClass('dn').show();
//		$('.add_whishlist ').hide();
//	}
//	else
//	{
//		isavail=true;
//		$("#btnIDP").html('ADD TO CART');
//		$('.add_whishlist ').show();
//		if($("#btnIDP").hasClass('preorder_btn'))
//		{
//			$("#btnIDP").html('PRE-ORDER NOW');
//		}
//		$('#SoldOut').addClass('dn').hide();
//		$('#size_selected').show();
//	}
//	$(".loading_page").hide();
//	
//}

//For IDP product image zoom
function loadZoomFeatures()
{
//	//console.log("inside image zoom200");
//	var isNew							= $.trim($('#isNew').val());
	
	$(".view_gallery").mouseover(function(){
	    $('#idp_zoomedimage').css({'z-index':2});
	}).mouseout(function(){
	    $('#idp_zoomedimage').css({'z-index':-2});
	});
	
//	if(isNew == "true")
//	{
		$("<img>", {
		    src: $('#ashowoutstep').attr('data-zoom-image'),
		    error: function() { $('.idp_zoomicon').hide(); },
		    load: function() { 
		    	$('.idp_zoomicon').show(); 
		    	
			    $('.view_gallery').find('div').css( 'cursor', 'url("/images/zoom-icon.png"), pointer' );

		    	$("#ashowoutstep").elevateZoom({
		    		zoomWindowPosition: "idp_zoomedimage",
		    		zoomWindowHeight: 360, 
		    		zoomWindowWidth: 451, 
		    		borderSize: 0, 
		    		easing: true,
		    		lenszoom: false,
		    		lensFadeIn : 100000,
		    		zoomType : 'window',
		    		containLensZoom : false,
		    		onZoomedImageLoaded: function() {
		    			$(".zoomLens").css( 'cursor', 'url("/images/zoom-icon.png"), pointer' );
		    		}
//		    		cursor:"url(/images/zoom-icon.png), pointer"
		    	});
		    	
//		    	$(".view_gallery").bind("mouseenter",function(){
//		    		$('.idp_zoomcursor').show();
//		    	});
//		    	$(".view_gallery").bind("mouseleave",function(){
//		    		$('.idp_zoomcursor').hide();
//		    	});
//		    	$('.view_gallery').find('div').bind("mousemove",function(e){
//		    		   
//		    		var parentOffset = $(this).offset();
//		    	    var left 	= e.pageX-parentOffset.left-$('.idp_zoomcursor').width()/2;
//		    	    var top	 	= e.pageY-parentOffset.top-$('.idp_zoomcursor').height()/2;
//		    	    if(left > 328)
//		    	    {
//		    	    left	= 328;
//		    	    }
//		    	    if(left < 0)
//		    	    {
//		    	    left	= 0;
//		    	    }
//		    	    if(top > 239)
//		    	    {
//		    	    top = 239;
//		    	    }
//		    	    if(top < 0)
//		    	    {
//		    	    top	 = 0;
//		    	    }
//	    	        $('.idp_zoomcursor').css({
//	    	   	       left:  left+"px",
//	    	   	       top:   top+"px"
//	    	        });
//	    	    });
		    }
	    });
//	}
}


