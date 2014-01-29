var interval;
var shoeCount=0;
var i=0;
var loopVar=1;
var offSet=5;
var bannerCount=0;
var bannerInterval;
var imagePrefix='';
var myHTML="";
var retscrollTop=$('#retainingHP_scroll_top').val();
var isloadMoreHomeResultsClicked=$('#isloadMoreHPResultsClicked').val();
$(document).ready(function() 
{
	$("#mySlider").hide();
	/*if($('#video_url').val!='false' && $('#video_title')!='false' && $('#videoThumbNail_url').val()!='false')
	{
		
		//console.log("It has not video datails");
		if($('#video_url').val()!='#' && $('#video_url').val()!='false' )
			{
			    //console.log("$('#video_url').val()::"+"true")
				
				getHomePageVideo();
				$('.tooltip_b').tipsy({trigger: 'focus', gravity: 's'});
				$('.tooltip_t').tipsy({trigger: 'focus', gravity: 's',fade:true});
					
			}
		
	}*/
	
	

	// This is for retaining HomePage results and page position when clicks browser back button by YES
		$(window).bind("scroll", function(e){
			var retainscrollTop=$(window).scrollTop();
			
				//console.log("---->>>>>>> Present Page retainscrollTop  value is .....   :  " +retainscrollTop);
				$('#retainingHP_scroll_top').val(retainscrollTop);
			
		});
		
		var curTime=new Date();
		//console.log(" curTime is " +curTime.getTime());
		
		if($('#sysTimeForHPBrowserBack').val()==null || $('#sysTimeForHPBrowserBack').val()=="")
		{
			//console.log("sysTimeForHPBrowserBack is Empty.. So browser Back button Not clicked");
			
				$('#sysTimeForHPBrowserBack').val(curTime.getTime());
				
				
		}
		else
		{
			//console.log("sysTimeForBrowserBack is Not Empty ...... So browser Back button clicked....");
			//console.log("**********  isloadMoreHomeResultsClicked  is  **********    : " +isloadMoreHomeResultsClicked);
			if(isloadMoreHomeResultsClicked=="true")
			{
				$(".loading_list").css('display','block');
				 $(".loading_list code").css('display','block');
				
setTimeout(function(){  $.ajax({
					url:'/getRemainingNewArrivals.htm',
					dataType:'html',
					success:function(html)
					{
						$(html).appendTo("#dynamicHomeItems");
						if(retscrollTop!=null)
						{
							//console.log("-------->>>>>>>>>> ......... LodeMore is Clicked... After BrowserBack <<<<<<<<<<< retscrollTop value is  ......  " +retscrollTop);
							$('html, body').animate({scrollTop:retscrollTop}, 'fast');
						}
						$(".loading_list").css('display','none');
						$(".loading_list code").css('display','none');
						$("#loadMoreHomeResults").hide();
						//changeCurrency(currencyType);
					}
				 });},1000);
			}
			else
			{
				if(retscrollTop!=null)
				{
					//console.log("-------->>>>>>>>>> ......... LodeMore is Not Clicked... After BrowserBack <<<<<<<<<<< retscrollTop value is  ......  " +retscrollTop);
					$('html, body').animate({scrollTop:retscrollTop}, 'fast');
				}
			}
			
			 
		}
	// Upto here This is for retaining HomePage results and page position when clicks browser back button by YES
		
	//var hpbannerurlstr=$("#hpBannerUrl").val();
	//console.log("------------->>>>>>> hpbannerurlstr is : " +hpbannerurlstr);
	//$(".banner").css("background-image",'url("'+hpbannerurlstr+'")');
	$("#loadMoreHomeResults").show();
	////console.log("Inside setInterval"+loopVar);
	 //$(window).scroll(function(){
	shoeCount=parseInt($("#newShoeCount").val(),10);
	//console.log("1shoeCount is ------> " + shoeCount);
		
	 $("#loadMoreHomeResults").click(function(){
		
		 $(".loading_list").css('display','block');
		 $(".loading_list code").css('display','block');
		
	 setTimeout(function(){ $.ajax({
			url:'/getRemainingNewArrivals.htm',
			dataType:'html',
			success:function(html)
			{
				$(html).appendTo("#dynamicHomeItems");
				$('#isloadMoreHPResultsClicked').val("true");
				$(".loading_list").css('display','none');
				$(".loading_list code").css('display','none');
				$("#loadMoreHomeResults").hide();
				//changeCurrency(currencyType);
			}
		 });},1000);
			
	});
	 
	/* if($(".banner").length>0)
		 {
		 	changeHomePageBanners();
		 	$(window).resize(function(){
		 		
		 		$(".bannerAlias").css("position","absolute").offset({top:$(".banner").offset().top,left:0}).height($(".banner a").height()).width($(".banner").width());
		 		
		 	});
		 }*/
		if($('#source').val()!=null && $('#source').val()=='wishlistmail')
			showWishList();			 
		 /*if($("#holidayshipping_status").val()=="true")
		 {
			$('.nav_popup').css("position","fixed").fadeIn();
	        $(".nav_pops_holder").show();
	        $('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
		 }
		 
		 }*/
		
		$("#bannerForVideo").die("mouseenter").live("mouseenter",function(){
				$(".arrow_prev").css("display","block");
				$(".arrow_next").css("display","block");
		});
		
		$("#bannerForVideo").die("mouseleave").live("mouseleave",function(){
			
			$(".arrow_prev").hide();
			$(".arrow_next").hide();
		});
		 
//		if($(window).width()>='2000'){
//		    //console.log(body_win_width);
//		    $(".banner").addClass("width_banner");
//		    alert("2000 above");
//		   }
//		else if($(window).width()<='2000'){
//		    //console.log(body_win_width);
//		    $(".banner").removeClass("width_banner");
//		    alert("2000 below");
//		   }
		 
});
	function animate(dir,clicked)
	{
				
				////console.log("Inside the animate");
				var ot = t;				
				switch(dir){
					case "next":
						t = (ot>=totalSlides) ? totalSlides : t+1;						
						break; 
					case "prev":
						t = (t<=0) ? 0 : t-1;
						break; 
					
					default:
						break; 
				};	
				////console.log("T is "+t);
				var diff = Math.abs(ot-t);
				var speed = diff*900;						
				////console.log("Diff is "+diff);
					p = (t*slideWidth*-1);
					////console.log("Length to animate is "+p);
					$("#shoeSlider ul ").animate({ marginLeft: p }, speed);	
					if(t==totalSlides){
						//$("a","#"+options.nextId).hide();
						//////console.log("$$$$$$$$$$$$$$$$$$$$$$$Inside the nextId hide option");
						$("a","#nextBtn").addClass("right_arrow_disabled");
						
					} else {
						//$("a","#nextBtn").show();
						$("a","#nextBtn").removeClass("right_arrow_disabled");
										
					};
					if(t==0){
						//$("a","#"+options.prevId).hide();
						//////console.log("$$$$$$$$$$$$$$$$$$$$$$Inside the prevId hide option");
						$("a","#prevBtn").addClass("left_arrow_disabled");
						
					} else {
						//$("a","#prevBtn").show();
						$("a","#prevBtn").removeClass("left_arrow_disabled");
						
					};		
	};
	/*function invokeSlider()
	{
		$("#shoeSlider").easySlider({prevId:'prevBtn',nextId:'nextBtn',nextText:'',prevText:'',restart: '500'});
	}*/
	function removeSpan()
	{
		//if($(".new_shoes_gallery").children().next("span").length>2)
		{
			var obj=$(".new_shoes_gallery").children().next("span");
			//////console.log($(obj).length);
			obj=$(obj).next();
			
				$(obj).next().remove();
				$(" <div class=\"clear_both\"></div>").appendTo(".new_shoes_gallery");
		}
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


	function getVintageItemsBySize(style,attId)
	{
		var url="/getVintageProductBySize.htm?style="+style+"&attId="+attId;
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
	function goToIdp(productid,vendorName,colorId)
	{
		//alert("Inside goToIDP"+productid);
		var url="/idp.htm?productId="+productid+"&vendorName="+vendorName+"&colorId="+colorId;
		location.href=url;
	}
	function getSaleItemsBySize(attId)
	{
		var url="/getSaleItemsBySize.htm?attId="+attId;
		location.href=url;
	}

	/*function subscribeEmailFunction()
	{
	var emailaddress = $("#subscribeEmail").val();
	if(validateEmail())
		{
			$.getJSON("/subscribeEmail.htm",{"emailaddress":emailaddress},function(data)
			{
				$("#subscribeEmail").val("");
				alert("Thanks for registering with Solestruck.");
			});
		}
	}
	function validateEmail()
	{

	try {
	 	if ($("#subscribeEmail").val() != ""){
	  			if(emailValidator(document.getElementById('subscribeEmail'), 'Not a Valid Email'))
	  			{
	  				return true;
	  			}	
	  			else
	  			{
	   				$("#subscribeEmail").val("");
	   				$('#subscribeEmail').focus();
	  				return false;
	  			}
	  		}
		  else {
		  alert("Please fill in any Email ID");
		  $('#subscribeEmail').focus();
		  return false;
		  }
	 	}
	 	catch( e )
	 	{
	 		alert(e);
	 	}

	}

	


	function emailValidator(elem, helperMsg){
		var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0\-9\.\-]+\.[a-zA-z0\-9]{2,4}$/;
		if(elem.value.match(emailExp)){
			return true;
		}else{
			alert(helperMsg);
			
			elem.focus();
			return false;
		}
	}
*/
	function getHomeNewArrivalItemsJSON(loopVar,offSet)
	{
		////console.log("Inside getSaleItemsJSON "+offSet+" "+loopVar);
		
		var imageUrl="http://commondatastorage.googleapis.com/images2.solestruck.com/";
		var retVal=new Boolean(true);
		var isAvailable;
		var w_space="";
			/*$.getJSON("/getSaleItemsJSON.htm",{"loopVar":loopVar,"offSet":offSet},function(productMap)
					{
						//console.log("*************productMap size is : "+productMap.length);
					}
				);*/
		$.getJSON("/getHomeNewArrivalProductJSON.htm",{"loopVar":loopVar,"offSet":offSet},function(productMap){
			 
			$(".loading_list").css("display","none");
			//alert(productMap);
			////console.log("*************productMap size is : "+productMap.length);
			$.each(productMap,function(key,value)
			{
				var vendorName=value.vendorName;
				var shoeName=value.productName;
				var vendorNameL;
				var vendorNameR;
				var shoeNameL=shoeName.toLowerCase();
				var shoeNameR=shoeNameL.replace(/ /g,"-");
				if(vendorName!=null)
				{
					 vendorNameL=vendorName.toLowerCase();
					 vendorNameR=vendorNameL.replace(/ /g,"-");
				}
				var retailPrice;
				////console.log("Inside forloop of proJSON"+vendorName);
				////console.log("Inside forloop of proJSON productName --------------------"+value.productName);
				////console.log("Inside forloop of proJSON--------------------------------"+value.nextAvailable);
				//alert(shoeName);
				if(value.nextAvailable)
				{
					retVal=true;
					//alert('inside If');
				}
				if(value.nextAvailable==false)
				{
					retVal=false;
					//alert('inside else for product '+value.productName);
				}
				
				////console.log("After setting retVal is "+retVal);
				for(var j=0;j<value.colors.length;j++)
				{
					////console.log("Inside color for loop for product "+value.productName+" and colorsize is "+value.colors.length);
					var colorName=value.colors[j].customColor;
					var colorNameL=colorName.toLowerCase();
					var colorNameR=colorNameL.replace(/ /g,"-");
					////console.log("Inside colors loop");
					//console.log("2shoeCount is ----------->  "  + shoeCount);
					shoeCount=shoeCount+1;
					 w_space="shoe_holder";
					if((shoeCount%3)!=1 && (shoeCount%3)!=0)
						{
							w_space+=" ";
							w_space+="white_space";
						}
					if(value.productVariants.length>0)
					{
						for(var k=0;k<value.productVariants.length;k++)
						{
							////console.log("Inside prodcutVariant for loop "+retVal);
							if(value.productVariants[k].colorkey.id == value.colors[j].key.id)
							{
								////console.log("Inside prodcutVariant if loop{{ "+value.productName+"for color "+value.colors[j].customColor);
								if(value.productVariants[k].productUnitLocations.length>0)
								{
									isAvailable=true;
								}
								if(value.productVariants[k].retailprice > 0.0 )
								{
									retailPrice=value.productVariants[k].retailprice;
									 //salePrice=value.productVariants[j].saleprice;
									 //discountPercent=Math.floor(((retailPrice-salePrice)/retailPrice)*100);
									////console.log("Inside setting retailprice block "+retailPrice);
									//alert("hai");
								}
							}
						}
						////console.log("outside prodcutVariant for looppppppppppppppppppppppppppppppppppppp "+retVal);
						var shoe_img;
						if(vendorNameR!=null && vendorName!=null)
						{
						 shoe_img="<span class=\"shoes_img\" ><img src="+imageUrl+vendorNameR+"-shoes/"+vendorName.replace(/ /g,"-")+"-shoes-"+shoeName.replace(/ /g,"-")+"-("+colorName.replace(/ /g,"-")+")-010407.jpg></img></span>";
						}
						var shoe_brand="<span class=\"shoe_brand\">"+vendorName+"</span>";
		                var shoe_name="<span class=\"shoe_name\">"+shoeName+"</span>";
		                var new_lable="<span class=\"new_label\">New</span>"
		                var shoe_price="<span class=\"shoe_price\">$"+retailPrice+"</span>";
		                var myHTML="<a class='"+w_space+"' style='text-decoration:none;' href=/"+vendorNameR+"-"+shoeNameR+"-"+colorNameR+"/index.html><div id="+shoeCount+"><span></span> ";
		                
		                myHTML+=shoe_img;
						myHTML+=shoe_brand;
						myHTML+=shoe_name;
						myHTML+=new_lable;
						if(isAvailable==true)
						{
							myHTML+=shoe_price;
						}
						
						
						myHTML+='</div></a>';
						////console.log(myHTML);
						$("#dynamicHomeItems").append(myHTML);
						retailPrice="";
						
					}
					////console.log("outside color for looppppppppppppppppppppppppppppppppppppp "+retVal);
					isAvailable=false;
				}
				////console.log("Inside the loop and retVal is "+retVal);
				if(retVal==false || productMap.length==0)
				{
					////console.log("Inside the clearInterval");
					//clearInterval(interval);
					// $(".loading_list").css("display","none");
				}
			});
			
			
			
			if(jQuery.isEmptyObject(productMap))
			{
				////console.log("Inside the clearInterval out of loop");
				clearInterval(interval);
			}
			////console.log("Before returning the value of retVal---------------- "+retVal);
			
			////console.log("After reutrn statementttttttttttttttttttttttttttttttttttttttttt "+retVal);
		});
		
		/*finally
		 {
			//console.log("Inside theeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee finally block return value is "+retVal);
			return retVal;
		}*/
		
	}
	
	function isEmpty(obj) 
	{
	    for(var prop in obj) {
	        if(obj.hasOwnProperty(prop))
	            return false;
	    }

	    return true;
	}
	/*function emailUsDetails()
	{
		var emailId=$("#emailUsId").val();
		var help=$("#help").val();
		var order_number=$("#order_number").val();
		
		if(validateEmail_emailUs())
		{
		if(help!="")
		{
			
		$.ajax({url:"/sendEmailToUs.htm?email="+emailId+"&help="+help+"&order_number="+order_number,success:function(){
				$("#emailUsDiv").hide();
				
				 For bring up login or wishlist popup if the user came from there(by ss2)
				 Starts
				if(cameFromLoginOrWishList=="false")this variable is there in customerServiceLink.js
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
				Ends
				 
				 $("#emailUsId").val("");
				 $("#help").val("");
				 $("#order_number").val("");
				 $('#alertHelp').text("");
				 $('#alert').text("");
			}
		});
		}
		else
		{
			$('#alertHelp').text("Please fill in some message");
		}
		
		}
	}

	function validateEmail_emailUs()
	{

	try {
	 	if ($("#emailUsId").val() != ""){
	  			if(emailValidatorEmailUs(document.getElementById('emailUsId'), 'Not a Valid Email'))
	  			{
	  				return true;
	  			}	
	  			else
	  			{
	   				$("#emailUsId").val("");
	   				$('#emailUsId').focus();
	   				$("#help").val("");
	   				$("#order_number").val("");
	   				$('#alert').text("Not a Valid Email");
	  				return false;
	  			}
	  		}
		  else {
		 // alert("Please fill in any Email ID");
		 $('#alert').text("Please fill in any Email ID");
		  $('#emailUsId').focus();
		  $("#help").val("");
	   	  $("#order_number").val("");
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
			$("#help").val("");
	   		$("#order_number").val("");
			elem.focus();
			return false;
		}
	}*/

	function showLiveHomePageBanner()
	{
		$.getJSON("/getHomePageBanner.htm",function(homepagebanner){
			
			
			
		});
	}
	

	
function changeHomePageBanners()
{
	
	
	
	var imagNameArr=$(".banner").css("background-image").replace('(','').replace(')','').split('/');
	var imgNumber=parseInt(imagNameArr[imagNameArr.length-1].substring(imagNameArr[imagNameArr.length-1].lastIndexOf("_")+1,imagNameArr[imagNameArr.length-1].lastIndexOf(".")));
	var shotName=imagNameArr[imagNameArr.length-1].substring(0,imagNameArr[imagNameArr.length-1].lastIndexOf("_"));
	bannerCount=imgNumber;
	imagePrefix=shotName;
	for(i=bannerCount;i>0;i--)
		{
			$("<div class=\"bannerAlias\" id=\"bannerImageTag_"+i+"\" style=\"background-image:url('http://commondatastorage.googleapis.com/images2.solestruck.com/gae/homePageBanner/"+imagePrefix+"_0"+i+".jpg\');display:none;border:1px solid #fff;\"></div>").appendTo(".banner a");
			
		}
	
	$(".bannerAlias").css("position","absolute").offset({top:$(".banner").offset().top,left:0}).height($(".banner a").height()).width($(".banner").width());
	$(".bannerAlias").css("background-repeat","no-repeat").css("background-size","auto").css("background-position","center");
	$("body").css("overflow-x","hidden");
	bannerInterval=setInterval(changeBannerImage,500);
}
	

function changeBannerImage()
{
	if(bannerCount==0)
		{
			clearInterval(bannerInterval);
		}
	else
		{
			//$(".bannerAlias").fadeOut();
			$("#bannerImageTag_"+bannerCount).show();
			if($("#bannerImageTag_"+(bannerCount+1)).length>0)
			$("#bannerImageTag_"+(bannerCount+1)).fadeOut("slow");
			
			bannerCount--;
		}
	
}
      
function showPrevMorePages()
{
		var pageshow="";
		initialPrevPage=parseInt(currentpage)-5;
		if(initialPrevPage>=6)
		{
			 if(selectedPage!=1)
			 {
				 pageshow='<a id="previous" class="previous_page" href="page-'+(parseInt(selectedPage)-1)+'"></a>'
			 }
			 	pageshow=pageshow+'<a class="more_page" onclick="showPrevMorePages();" >...</a>'	
		}
		else if(selectedPage!=1)
		{
			pageshow='<a id="previous" class="previous_page" href="page-'+(parseInt(selectedPage)-1)+'"></a>'
		}
		
		for(i=parseInt(initialPrevPage) ;i<=parseInt(initialPrevPage)+9&&i<=totalavailablepages; i++)
		{
			pageshow=pageshow+'<a class="page_number" id="pagecount_'+i+'" href="page-'+i+'">'+i+'</a>';
		}
		
		if(initialPrevPage <=5)
		{
			initialPrevPage=1;
			currentpage=1;
		}
		else
		{
			initialPrevPage =parseInt(initialPrevPage)-5;
			currentpage		=parseInt(currentpage)-5;
		}
		if(totalavailablepages>=15)
		{
			pageshow=pageshow+'<a class="more_page"  onclick="showNextMorePages()" >...</a>'+'<a class="next_page" href="page-'+(parseInt(selectedPage)+1)+'" ></a>';
		}
		else
		{
			pageshow=pageshow+'<a class="next_page"  href="#" href="page-'+(parseInt(selectedPage)+1)+'" ></a>';
		}
		
		$('.second').html(pageshow);
		$("#pagecount_"+selectedPage).addClass("page_number_selected");
		
}	 

