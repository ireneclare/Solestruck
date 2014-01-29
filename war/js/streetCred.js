var scimages  				= 	{};
var ingindex				=	0;
var popupPosition			= 	0;
var brokenImageIndices		=	new Array();
var liveFEUrl				= 	"";
var strTablecarosel			=	"";
var prevIndex				=	0;
var popupSet 				= false;
$(document).ready(function() 
{
	liveFEUrl	=	$("#front_end_url").val();
	$('.contact_holder').find('.popup_processing_icon').css('display','block');
	
	$(document).keydown(function(e) {
		var code = (e.keyCode ? e.keyCode : e.which);
		if (code === 27) {
			console.log("inside the street cred");
			$(window).scrollTop(popupPosition-($(window).height()/2))
	    	$('.popup_holder').hide();
	    	$('#backgroundPopup_street').fadeOut('slow');
	    	$('.contact_holder').find('.popup_processing_icon').hide();
	    	 prevIndex				= 0;
	   	   	 popupSet 				= false;
	    }
		
		if(e.keyCode == 37) 
	    {
	        $('.popup_holder ul').find('.prev').click();
	    }
	    else if(e.keyCode == 39)    
	    { 
	    	$('.popup_holder ul').find('.next').click();
	    }
		
	});

	$('.popup_close_act').click(function() {
  		$('#backgroundPopup_street').fadeOut();
		$(this).parent().hide();
		$('#idp_selected_size').text("Please Select");
		$('#size_selected').text("U.S. Women's Size: Please Select Size");
		
				
	});
	

    $('#backgroundPopup_street, .popup_close_act').live( "click",function() 
	 { 
		 $(window).scrollTop(popupPosition-($(window).height()/2))
		 $('.contact_holder').find('.popup_processing_icon').hide();
   	   	 $('.popup_holder').hide();
   	   	 $('#backgroundPopup_street').fadeOut('slow');
   	   	 
   	   	 prevIndex				= 0;
   	   	 popupSet 				= false;
    	   
    });
    
	 fetchInstagramDirectDetails(0,"");
	 
	 $('.street_loadmore').live('click',function()
		{
			var offsetValue		= $(this).attr('offset');
			
			$('.street_popup_processing_icon').show();
			$('.contact_holder').find('.popup_processing_icon').show();
			
			fetchInstagramDirectDetails(offsetValue,"",0);
		});
	 
	 
	 $('.imgpopup').live('click',function()
	 {
		 var id			=	"";
		 var clicked 	=	"";
		 
		 if($(this).hasClass('carouselimg') || $(this).hasClass('prev') || $(this).hasClass('next'))
		 {
			 id 		= $.trim($(this).attr('postid'));
			
			 if($(this).hasClass('carouselimg'))
			 {
				 clicked = "carosel";
			 }
			 else if($(this).hasClass('prev'))
			 {
				 clicked = "prev";
			 }
			 else if($(this).hasClass('next'))
			 {
				 clicked = "next";
			 }
		 }
		 else
		 {
				 id 		= $.trim($(this).attr('id'));
				 clicked 	= "small";
		 }
		 
		 if(scimages.hasOwnProperty(id))
		 {
			 $('#backgroundPopup_street').width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
			 $('.contact_holder .popup_processing_icon').css('display','block');
		 	 $('.popup_holder').show();
		 	 $('#backgroundPopup_street').fadeIn('slow');
		 	 
		 	popupPosition 		=	$("#"+id).offset().top;
		 	 
		 	 
			 var keys 			= 	Object.keys(scimages),
			 	 index			= 	keys.indexOf(String(id));
			 
			 if(((keys.length)-(index)) <= 5)
			 {
				 var offsetValue		= $('.street_loadmore').attr('offset');
				 fetchInstagramDirectDetails(parseInt(offsetValue),"append",index);
			 }
			 
			 if(clicked)
			 {
				 var brandName		=	String(scimages[id].tags).split("ss_")[1];
				 
				 if(String(clicked) === "small")
				 {
					 if(!popupSet)
					 {
						 $(window).scrollTop(0);
						 
						 popupSet		= true;
					 }
					 
					 
					 var prevClass	=	"class=\"prev\"",
			 	 	 	 nextClass	=	"class=\"next\"",
			 	 	 	 prevStyle	=	"display:none",
			 	 	 	 nextStyle	=	"display:none";
			 	 	 		 
			 	 	 		 
				 	 if((index - 1) !== -1)
				 	 {
				 		prevClass		=	"class=\"prev imgpopup\" postid=\""+keys[index-1]+"\"";
				 		prevStyle		=	"display:block";
				 	 }	
				 	 
				 	 if((index + 1) < keys.length)
				 	 {
				 		nextClass		=	"class=\"next imgpopup\" postid=\""+keys[index+1]+"\"";
				 		nextStyle		=	"display:block";
				 	 }
				 	 
				 	 if(String(liveFEUrl) === "streetcredpage")
					 {
						 var popupbuild 	=	"<div class=\"clear_both\"></div><ul><li "+prevClass+" "+prevStyle+"><img src='http://commondatastorage.googleapis.com/images2.solestruck.com/gae/live/images/str_prev.png'></li>"+ 
								 				"<li class=\"imgpop\"><a href='"+scimages[id].link+"'  target='_blank'><img src='"+scimages[id].image7+"' height='750' width='750'></a></li>" +
								 				"<li "+nextClass+" "+nextStyle+"><img src='http://commondatastorage.googleapis.com/images2.solestruck.com/gae/live/images/str_next.png'></li>"+
								 				"</ul><div class=\"clear_both\"></div>"+
								 				"<h5 id='brandName'>#ss_"+brandName+" tagged by "+scimages[id].user+"</h5>" +
								 				"<a class=\"addCart\" target=\'_blank\'><div class=\"idp_add_to_cart_btn1\" >SHOP IT</div></a>"+
							 					"<div id=\"my-carousel-2\" class=\"carousel module\"></div>";
					 }
				 	 else 
					 {
				 		var popupbuild 		=	"<div class=\"clear_both\"></div><ul><li "+prevClass+" "+prevStyle+"><img src='http://commondatastorage.googleapis.com/images2.solestruck.com/gae/live/images/str_prev.png'></li>"+ 
								 				"<li class=\"imgpop\"><a href='"+scimages[id].link+"'  target='_blank'><img src='"+scimages[id].image7+"' height='750' width='750'></a></li>" +
								 				"<li "+nextClass+" "+nextStyle+"><img src='http://commondatastorage.googleapis.com/images2.solestruck.com/gae/live/images/str_next.png'></li>"+
								 				"</ul><div class=\"clear_both\"></div>"+
								 				"<h5 id='brandName'>#ss_"+brandName+" tagged by "+scimages[id].user+"</h5>" +
							 					"<div id=\"my-carousel-2\" class=\"carousel module\"></div>";
					 }
					 
					$('.popup_holder').html(popupbuild).delay(300).queue(function(next){
						
						toBuildShopItButton(brandName);
						
						next();
					});
					
//				 	 if(!popupSet)
//				 	 {
//				 		popupSet		= 	true;
//				 		
//				 		if(($(document).scrollTop()) === 0)
//				 		{
//				 			$('.popup_holder').css({"top":'55px'});
//				 		}	
//				 		else if($(document).scrollTop() == $(document).height())
//				 		{
//				 			$('.popup_holder').css({"top":($(document).scrollTop()-$(window).height()+55)});
//				 		}
//				 		else
//				 		{
//				 			$('.popup_holder').css({"top":($(document).scrollTop() - ($(document).scrollTop()%$(window).height()) + 55)});
//				 		}
//				 	 }
					
			        $("<ul>"+strTablecarosel+"</ul>").appendTo("#my-carousel-2");
					
					
					$('#my-carousel-2').carousel({
						 
						itemsPerPage: 1,
						itemsPerTransition: 1,
						speed: 300
						
					});
					 
					 
					if(index > 0)
			    	{
			    		var nextCount = index ;
			    		
			    		while(nextCount > 2)
			    		{
			    			$('#my-carousel-2').find('.next').click();
			    			nextCount--;
			    		}
			    	}
				 }
				 else
				 { 
					 $($('.popup_holder > ul li').get(1)).find("a").attr("href",scimages[id].link);
					 $($('.popup_holder > ul li').get(1)).find("img").attr("src",scimages[id].image7);
					 $('.popup_holder').find('h5').html('#ss_'+brandName+" tagged by "+scimages[id].user).delay(300).queue(function(next){
						 
						 toBuildShopItButton(brandName);
						 
						 next();
					 });
					 
					 
					 if((index - 1) !== -1)
				 	 {
				 		 $('.popup_holder > ul').find(".prev").addClass("imgpopup").attr("postid",keys[index-1]).show();
				 	 }
					 else
					 {
						 $('.popup_holder > ul').find(".prev").removeClass("imgpopup").removeAttr("postid").hide();
					 }	 
				 	 
				 	 if((index + 1) < keys.length)
				 	 {
				 		 $('.popup_holder > ul').find(".next").addClass("imgpopup").attr("postid",keys[index+1]).show();
				 	 }
					 else
					 {
						 $('.popup_holder > ul').find(".next").removeClass("imgpopup").removeAttr("postid").hide();
					 }
					 
				 	 
				 	 function moveNext(times)
				 	 {
				 		 for(var i = 0;i<times;i++)
				 		 {
				 			$('#my-carousel-2').find('.next').click();
				 		 }	 
				 	 }
				 	 
				 	 function movePrev(times)
				 	 {
				 		 for(var i = 0;i<times;i++)
				 		 {
				 			$('#my-carousel-2').find('.prev').click();
				 		 }	
				 	 }
					 if((index - 2) >= 0 && (index + 2) <= keys.length)
					 {
						 switch(clicked)
					 	 {
					 	 	case "carosel"	:  	 var movingIndex					=	index - prevIndex;
							 
												 switch(movingIndex)
												 {
												 	case -1	:	 movePrev(1);
												 	break;
												 	
												 	case -2	:	 movePrev(2);
												 	break;
												 	
												 	
												 	case 1	:	 moveNext(1);
												 	break;
												 	
												 	case 2	:	 moveNext(2);
												 	break;
												 	
												 }
												 
							break;
							
					 	 	case "prev"   : movePrev(1);
					 	 	break;
					 	 	
					 	 	case "next"   : moveNext(1);
					 	 	break;
					 	 }
					 }	 
				 }
				 
				 prevIndex		=	index;
				 
			 }	 
		 }	 
	 });
});

function toBuildShopItButton(brandName)
{
	 console.log("brandName::"+brandName)
	 brandName		=	brandName.toLowerCase();
	 brandName		=	brandName.charAt(0).toUpperCase()+brandName.substring(1);
	 
	 $.ajax({url:'/idpmapper.htm',data:({"productName":brandName}),success:function(data){
			
		 if( data =="nourl" || data =="")
         {
				$('.addCart').attr('href','/');
				$('.idp_add_to_cart_btn1').html("SHOP IT");	
				$('.addCart').hide();
        			 
         }
 		 else
 		 {
 			 	$('.addCart').show();
 			 	$('.idp_add_to_cart_btn1').html("SHOP IT");
	 			$('.addCart').attr('href','/'+data+'/index.html');
 		 }
		
		 $('.contact_holder').find('.popup_processing_icon').hide();
	}
	 	});
}

function fetchInstagramDirectDetails(offset,type,currentindex)
{
		var imageattr={};
		var productNamewithTrim="";
		if(String(liveFEUrl) != "streetcredpage")
		{
			var productNamewithTrimwithDot =  $('#productName').val().toLowerCase().replace(/\s/g, '');
			productNamewithTrim= productNamewithTrimwithDot.replace(".","");
		}
		
		$('.street_loadmore').hide();
		
		$('.street_popup_processing_icon').show();

		if(String(offset)==="0")
			$('ul#street_cred').html("");
		
		var count	 = 0;
		var sample   = "";
		
		liveFEUrl = liveFEUrl ? liveFEUrl : "idppage";
		
				$.ajax({
				url		 :	"/getAllApprovedImagesInStreetCredPage.htm",
				type	 :	"GET",
				data	 :	{offset:offset,liveFEUrl:liveFEUrl,productNamewithTrim:productNamewithTrim},
				dataType :   "json",
				async	 :   false,
				success	 :	function(data)
					    {
							if(data && data.length === 0 && String(liveFEUrl) !="streetcredpage" && String(offset) === "0") 
							{
								$('.no_tagged_images_text').css('display','block');
							}
							else
							{
								$('.street_popup_processing_icon').hide();
								
								var innerCarousel		= "";
								
								for (index in data) 
						        {
						        	count++;
						        	imageattr  	= {};
							       
						        	if(data[index] && data[index].tags && String(data[index].tags).indexOf("ss_") !== -1)
							        {
							        	    imageattr.tags 		   				= data[index].tags;
									        imageattr.image5 					= data[index].images_low_resolution.replace("_6.jpg","_5.jpg");
									        imageattr.image6 					= data[index].images_low_resolution;
									        imageattr.image7 					= data[index].images_standard_resolution;
									        imageattr.link						= data[index].link ;
									        imageattr.user	 					= data[index].userName;
									        imageattr.caption   				= data[index].caption.value;
									        
									        scimages[String(data[index].key.id)+String(data[index].key.id)] 		= imageattr;
									        
									        strTable			 				= "";
									        
									        $('.contact_holder').find('.popup_processing_icon').hide();
									        $('.no_tagged_images_text').hide();
									
									        strTablecarosel 					+=	"<li><img class=\" carouselimg imgpopup "+String(data[index].key.id)+String(data[index].key.id)+" \" postid="+String(data[index].key.id)+String(data[index].key.id)+"  src='"+(imageattr.image7).replace("6.jpg","8.jpg") +"'  height='150' width='150'>"+
									        										"</a></li>";
									        
									        innerCarousel						+=	"<li><img class=\" carouselimg imgpopup "+String(data[index].key.id)+String(data[index].key.id)+" \" postid="+String(data[index].key.id)+String(data[index].key.id)+"  src='"+(imageattr.image7).replace("6.jpg","8.jpg")+"'  height='150' width='150'>"+
    																				"</a></li>";
										
									        strTable 							+=	"<li class=\"tooltip_t\" title=\'"+imageattr.caption +"\' >" +
									        										"<img class=\"imgpopup imgpopupclick \" id="+String(data[index].key.id)+String(data[index].key.id)+" src='"+imageattr.image5 +"'  height='158' width='158'></li>";
									

										    $('ul#street_cred').append(strTable);
							        }
						        }
								
								if(type)
								{
									$('#my-carousel-2').find("ul").append(innerCarousel);
									
									$('#my-carousel-2').carousel({
										 
										itemsPerPage: 1,
										itemsPerTransition: 1,
										speed: 300
										
									});
									
									if(index > 0)
							    	{
							    		var nextCount = currentindex ;
							    		
							    		while(nextCount > 2)
							    		{
							    			$('#my-carousel-2').find('.next').click();
							    			nextCount--;
							    		}
							    	}
								}	
							}
					        
					        
					        if(String(liveFEUrl) === "streetcredpage")
					    	{
					        	if(count / 50 >=1)
						        {
							        $('.street_loadmore').attr('offset',parseInt(offset)+50).css({"display":"inline-block"});
						        }
					        	else
						        {
							        $('.street_loadmore').html("NO MORE PICS").delay(300).remove();
						        }
					    	}
					    	else
					    	{
					    		if(count / 25 >=1)
						        {
							        $('.street_loadmore').attr('offset',parseInt(offset)+25).css({"display":"inline-block"});
						        }
					    		else
						        {
							        $('.street_loadmore').html("NO MORE PICS").delay(300).remove();
						        }
					    	}
					        
		        }
		    });
}

function errorHandler(id)
{
	delete scimages[id];
	$(".carouselimg."+id).remove();
	
	$.ajax({
		url 		: "/removePrivateImages.htm",
		type		: "POST",
		data		: {id:id},
		sucesss		: function(){}
	});
}


