var scrollBarsForFilters;
var i ;

$(document).ready(function() {

	
	if(location.href.indexOf("solestruck-knows-you")!=-1)
	{
		//console.log("coming inside");
		$('#curator_banner').css('height', '650px');
		$('#curator_banner').hide();
		$('.curroted_text').hide();
		$('.custom_banner').show();
		$('#curator_banner').addClass('dn');
	}
	else
	{
		$('#curator_banner').css('height', '270px');
		$('.curroted_text').show();
		$('.custom_banner').hide();
		$('#curator_banner').removeClass('dn');
	}

	$('.check_faq_act').click(function()
	{
		$('#backgroundPopup').css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).show();
		$('.blackfriday_faq_chk').fadeIn();
 	 });
	
	
	$('#isTimeChanged').val(false);
	$('.tooltip_b').tipsy({trigger: 'focus', gravity: 'n'});
	$('.tooltip_t').tipsy({trigger: 'focus', gravity: 's',fade:true});
	$('.tooltip_e').tipsy({trigger: 'focus', gravity: 'w',fade:true});
	$('.tooltip_t2').tipsy({trigger: 'hover', gravity: 's',fade:true});
	$('.tooltip_input').tipsy({trigger: 'focus', gravity: 's',fade:true});
	$('.tooltip_b').tipsy({trigger: 'hover', gravity: 'n'});
	$('.tooltip_t').tipsy({trigger: 'hover', gravity: 'n',fade:true});
	
	$('#timmer_wrapper').tipsy();
	$('#sale_timmer_wrapper').tipsy();
	if($("#showTimer").val()=='true')
	{
		  var hrs_main =$("#hours").val();
		  var mins_main = $("#mins").val();
		  var secs_main = $("#secs").val();
		  var count=0;
		  var hrs =0;
		  var mins =0;
		  var secs =0;
		  //console.log("counter is "+count);
		  var clear=setInterval(function(){
			  //var now = new Date();
			  //var hrs_of_day = 24* 2;
			  //console.log("counter is "+count+" and hrs is "+hrs+" mins "+mins+" secs "+secs+"");
			  if(count==0)
			  {
				  //console.log("inside the loop hrs "+hrs+" mins "+mins+" secs "+secs);
				  hrs=hrs_main;
				  mins=mins_main;
				  secs=secs_main;
			  }      
			  secs=secs-1;
			  if(secs==-1)
			  {
				  //console.log("inside the secs==-1 hrs "+hrs+" mins "+mins+" secs "+secs);
				  secs=59;
				  mins=mins-1;
			  }
			  if(mins==-1)
			  {
				  //console.log("inside the mins==-1 hrs "+hrs+" mins "+mins+" secs "+secs);
				  mins=59;
				  hrs=hrs-1;
			  }
			  if(parseInt(hrs)==-1)
			  {
				  $("#timmer_wrapper").hide();
				  clearInterval(clear);
				  clearCache();
				  //console.log("inside all zero ");
			  }
			  if (hrs < 10)  hrs ="0" + hrs;  
			  if (mins < 10) mins ="0" + mins;
			  if (secs < 10) secs ="0" + secs; 
			  //console.log("Final the first mins==-1 hrs "+hrs_c1+""+hrs_c2+" mins "+mins_c1+""+mins_c2+" secs "+secs_c1+""+secs_c2);
			  var hrs_c1 = hrs.toString().substring(0,1); var hrs_c2 = hrs.toString().substring((hrs.toString().length-1),hrs.toString().length);
			  var mins_c1 = mins.toString().substring(0,1); var mins_c2 = mins.toString().substring((mins.toString().length-1),mins.toString().length);
			  var secs_c1 = secs.toString().substring(0,1); var secs_c2 = secs.toString().substring(1,2);
			  //console.log("Final the mins==-1 hrs "+hrs_c1+""+hrs_c2+" mins "+mins_c1+""+mins_c2+" secs "+secs_c1+""+secs_c2);
			  $('.hr_c1').html(hrs_c1); $('.hr_c2').html(hrs_c2);
			  $('.min_c1').html(mins_c1); $('.min_c2').html(mins_c2);
			  $('.sec_c1').html(secs_c1); $('.sec_c2').html(secs_c2);
			  count++;
		  }, 1000);
	}
	
	if($("#saleTimer").val()=='true')
	{
		getTimeStampForPreTimer();
		  var hrs_main =$("#salehours").val();
		  var mins_main = $("#salemins").val();
		  var secs_main = $("#salesecs").val();
		  var count=0;
		  var hrs =0;
		  var mins =0;
		  var secs =0;
		  //console.log("counter is "+count);
		  var clear=setInterval(function(){
			  var isTimeChanged= $('#isTimeChanged').val();
			  //var now = new Date();
			  //var hrs_of_day = 24* 2;
			  //console.log("counter is "+count+" and hrs is "+hrs+" mins "+mins+" secs "+secs+"");
			  if(count==0)
			  {
				  //console.log("inside the loop hrs "+hrs+" mins "+mins+" secs "+secs);
				  hrs=hrs_main;
				  mins=mins_main;
				  secs=secs_main;
			  }      
			  secs=secs-1;
			  if(secs==-1)
			  {
				  //console.log("inside the secs==-1 hrs "+hrs+" mins "+mins+" secs "+secs);
				  secs=59;
				  mins=mins-1;
			  }
			  if(mins==-1)
			  {
				  //console.log("inside the mins==-1 hrs "+hrs+" mins "+mins+" secs "+secs);
				  mins=59;
				  hrs=hrs-1;
			  }
			  if(parseInt(hrs)==0 && parseInt(mins)==0 && parseInt(secs)==0)
			  {
				  if(count!=0)
				  {
					  //$("#sale_timmer_wrapper").hide();
					  //clearInterval(clear);
					  //clearPreTimerCache();
					  console.log("inside all zero "); 
				  }
			  }
			  if (hrs < 10)  hrs ="0" + hrs;  
			  if (mins < 10) mins ="0" + mins;
			  if (secs < 10) secs ="0" + secs; 
			  //console.log("Final the first mins==-1 hrs "+hrs_c1+""+hrs_c2+" mins "+mins_c1+""+mins_c2+" secs "+secs_c1+""+secs_c2);
			  var hrs_c1 = hrs.toString().substring(0,1); var hrs_c2 = hrs.toString().substring((hrs.toString().length-1),hrs.toString().length);
			  var mins_c1 = mins.toString().substring(0,1); var mins_c2 = mins.toString().substring((mins.toString().length-1),mins.toString().length);
			  var secs_c1 = secs.toString().substring(0,1); var secs_c2 = secs.toString().substring(1,2);
			  //console.log("Final the mins==-1 hrs "+hrs_c1+""+hrs_c2+" mins "+mins_c1+""+mins_c2+" secs "+secs_c1+""+secs_c2);
			  $('.sale_hr_c1').html(hrs_c1); $('.sale_hr_c2').html(hrs_c2);
			  $('.sale_min_c1').html(mins_c1); $('.sale_min_c2').html(mins_c2);
			  $('.sale_sec_c1').html(secs_c1); $('.sale_sec_c2').html(secs_c2);
			  count++;
			  
			  if(isTimeChanged=='true')
			  {
				  getTimeStampForPreTimer();
				  hrs=$('#salehours').val();
				  mins=$('#salemins').val();
				  secs=$('#salesecs').val();
				  $('#isTimeChanged').val(false);
			  }
			  
		  }, 1000);
	}
	
	
	// This code is needed when we do any final sale - Viswanath.
//	$.ajax({url:'/currentPageStatus.htm',success:function(data)
//	{
//		//console.log('coming to the current page status in action.js 73'+$('#loginIn').val());
//		//console.log("check the condition :: "+data);
//		var logIn=$('#loginIn').val();
//		//console.log("value of the i before setting :: "+i);
//		if(logIn!='true')
//		{
//			i=0;
//			//console.log("value should be zero :: "+i);
//		}
//		if(data=="sale" && logIn=='true' && i == 0)
//		{
//			$('.black_fridaypopup_one').fadeIn();
//			$("#backgroundPopup").fadeIn('fast');
//			//console.log("value of the final i before setting:: "+i);
//			i=1
//			//console.log("value of the final i after setting:: "+i);
//		}
//	}});
	
	$('.loading_page').hide();
	$(window).unload(function(){
		//console.log("*****on unload******");
		if($("#thankyouPage").val()=='true')
		{
			//console.log("Inside the thank you");
			location.href='/redirectToNonSecurePage.htm?rdirectURL=/';
		}
		loadShoppingCart();
	});
	initialize();
	//console.log("It has not video datails");
	/*if(($('#video_url').val()!=false)&&($('#video_title').val()!=false))
		{
			//console.log("It has video details");
			
			//console.log("$('#video_url').val()::"+"true")
			getHomePageVideo();
			$('.tooltip_b').tipsy({trigger: 'focus', gravity: 's'});
			$('.tooltip_t').tipsy({trigger: 'focus', gravity: 's',fade:true});
				
		}*/
	$("img").error(function(){
		
		$(this).hide();
		/*var brokenImg =  $(this).attr("src");
		
			
			if(brokenImg!="/images/unavaliable_240_180.jpg"){
				//alert("src = " + $(this).attr("src")); 
					$(this).attr("src","/images/unavaliable_240_180.jpg");
					$(this).css("border","0");
					$(this).css("margin","0");
					$(this).css("padding","0");
					 //call for sending mail alerts for broken images - shp
					 brokenImagesAlert(brokenImg);
		
			}*/
		});
	
	$('#holiday_btn').click(function() {
		
	        //$('.nav_popup').css("position","fixed").fadeIn();
	        $(".NYE").show();
	        $('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
			//window.location='/holiday_ship=yes';
	        
	      });
	

  	$('#textSearchButton').click(function() {
  		if($("#searchText").val().length>0)
  			{
  				if(_gaq)
  				_gaq.push(['_trackEvent','SolestruckSearch',$("#searchText").val()]);
  				$(".loading_page").show();
  				var path=isWomenBrand($("#searchText").val());
  			
  					if(path!='')
  						{
	  						if(location.host.indexOf("localhost")!=-1)
	  	  					{
	  	  						location="http://"+location.hostname+":"+location.port+path;
	  	  					}
	  						else
	  	  					{
	  	  						location="http://"+location.hostname+path;
	  	  					}
  						
  						}
  					else
  						{
		  						if(location.host.indexOf("localhost")!=-1)
		  	  					{
		  	  						location="http://"+location.hostname+":"+location.port+'/search/'+$("#searchText").val();
		  	  					}
		  						else
		  	  					{
		  	  						location="http://"+location.hostname+'/search/'+$("#searchText").val();
		  	  					
		  	  					}
  						}
  				
  			}
  			
	});
	$('.shipping_tc').hide();
	
	$('#usps').hide();
	$('#fedex').hide();
	$('#stdUL').hide();
	$('#expUL').hide();
	$('#ovnUL').hide();
	//$("li[id^='state_']").click(getShippingServiceDetailsForUSState);
  	//$("li[id^='country_']").click(getShippingServiceDetailsForInternational);
  	$("li[id^='state_']").live("click", function(){
  		getShippingServiceDetailsForUSState(this);
  	});
  	$("li[id^='country_']").live("click", function(){
  		getShippingServiceDetailsForInternational(this);
  	});
  	
  	if(location.href.indexOf('showThankyou.htm')!=-1 && location.host.indexOf('beta.solestruck.com')!=-1)
  	{
  		showSurvey();
  	}
  	
  	showBOTBPopup();
  	
  	
  	$("#submitBotbData").click(function(){
  		
  		$("#botbFirstName").removeClass("boot_popup_error");
		$("#botbEmail").removeClass("boot_popup_error");
  		
  		if(isEmailId($("#botbEmail").val()) && $("#botbFirstName").val().length>0 && $("#botbFirstName").val().indexOf("Full Name")==-1 && trimString($("#botbFirstName").val()).length>0)
  			{
  			$(".clear").addClass("submit_btn_holder");
  			$.getJSON("/isEmailAvailableForContest.htm",{"emailaddress":$("#botbEmail").val(),"id":Math.random()},function(data){
  				
  				if(!data)
  					{
	  					$.getJSON("/subscribeEmailForContest.htm",{"emailaddress":$("#botbEmail").val(),'firstName':$("#botbFirstName").val(),"id":Math.random()},function(data)
	  	  	  					{
	  	  	  					$("#mc_embed_signup").addClass("dn");
	  	  	  					$(".boot_thankyou_msg").removeClass("dn");
	  	  	  					$(".clear").removeClass("submit_btn_holder");
	  	  	  						//location=$("#sourceURL").val();
	  	  			  				//$('#backgroundPopup').fadeOut("fast");
	  	  			  				//$(".boot_popup").fadeOut('slow');
	  	  			  				//$("#botbFirstName").removeClass("boot_popup_error");
	  	  			  				//$("#botbEmail").removeClass("boot_popup_error");
	  	  	  						//setTimeout(function(){location=$("#sourceURL").val();},2000);
	  	  	  					$(".give_away_close").show().click(function(){location=$("#sourceURL").val();});
	  	  	  						
	  	  	  					});
  	  				
  					}
  				else
  					{
  						$("#botbEmail").val("One entry per email please.");
						$("#botbEmail").focus().addClass("boot_popup_error");
						$(".clear").removeClass("submit_btn_holder");
  					
  					}
  				
  				
  				
  				
  				
  			});
  			
  			
  			}
  		else
  			{
  			
	  			if($("#botbFirstName").val().length<=0 || $("#botbFirstName").val().indexOf("Full Name")!=-1 ||trimString($("#botbFirstName").val()).length<=0)
				{
					$("#botbFirstName").val("Please enter your name");
					$("#botbFirstName").focus().addClass("boot_popup_error");
					return;
				}
  				if(!isEmailId($("#botbEmail").val()))
  					{
  						$("#botbEmail").val("Please enter your email");
  						$("#botbEmail").focus().addClass("boot_popup_error");
  						return;
  					}
  				
  				
  			}
  		
  	});
  	
	 // Resolved IE issue for Listing Page shoe image Onclick redirecting to IDP by YES
	 $('.shoes_img').live('click',function(){
	  		//console.log("idp url is ----->>>>> : " +$(this).parent().attr('href'));
	  		window.location=$(this).parent('a').attr('href');
	  		
	  	});
	 
	$(".custom_select_value_act").change(function() {
		 $(this).closest('div').find('p').html($(this).find("option:selected").text());
	});
	
	// This is added for Solestruck Single Sign-On by YES
	
		if(location.href.indexOf('assistance.do?page=OrderStatus')!=-1 || location.href.indexOf('loadCustomerServicePage.htm?page=Customer')!=-1 || location.href.indexOf('assistance.do?page=CustomerService')!=-1)
		{
			var custLoginIn=$('#customerloginIn').val();
			var custIdForCSPage=$('#custIdForCSPage').val();
			//console.log('*************    custLoginIn  **************' + custLoginIn );
			
			if(custLoginIn == 'true')
			{
				//console.log('*************    YOu are Logged in  **************');
				//console.log('*************    custIdForCSPage is   **************' + custIdForCSPage );
				$('.column2 a').attr('onclick','loadMyAccount('+custIdForCSPage+');');
				
			}
			//else
			//{
				//console.log('*************    YOu are NOT Logged in  **************');
			//}
			
		}
		
		if(location.href.indexOf('assistance.do?page=Returns')!=-1)
		{
			var custLoginIn=$('#customerloginIn').val();
			var custIdForCSPage=$('#custIdForCSPage').val();
			//console.log('*************    custLoginIn  **************' + custLoginIn );
			
			if(custLoginIn == 'true')
			{
				//console.log('*************    YOu are Logged in  **************');
				//console.log('*************    custIdForCSPage is   **************' + custIdForCSPage );
				$('.inner_content a:first').attr('onclick','loadMyAccount('+custIdForCSPage+');');
				
			}
			//else
			//{
				//console.log('*************    YOu are NOT Logged in  **************');
			//}
		}
		
	// Upto here This is added for Solestruck Single Sign-On by YES
	
		eraseCookie("analyticsSearchTerm"); // Added for Search Analytics by YES	
		
		
		$('#backgroundPopup').click(function(){
			
			// This is Added for Updating the ShoppingCart Popup Analytics when Closing the ShoppingCart Popup by YES
			if($('.dnt_see_ursze_act').css('display')=='block')
	    	{
	    		$('#idp_selected_size').text("Please Select");
		    	$('#size_selected').text("U.S. Women's Size: Please Select Size");
	    	}
				//console.log('@@@@@@@@@@@@  Background of the Popup is clicked  @@@@@@@@@@@@');
				if($('.cart_popup').css("display") == "block")
				{
					//console.log('^^^^^^^^^^^  Because of Background of Popup clicked ---->>>> Shopping Cart is Ready to Hide  ^^^^^^^^^^^^');
					var gAnalyticsId=$('#gAnalyticsID').val();
					//console.log("----->>>>>>>>> For ShoppingCart Popup gAnalyticsId is  ------->>>>>> : " +gAnalyticsId);
					(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
					(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
					m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
					})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	
					ga('create', gAnalyticsId);
					ga('send', 'pageview');
				}
			
			// Upto here This is Added for Updating the ShoppingCart Popup Analytics when Closing the ShoppingCart Popup by YES
				
			if(($('.black_fridaypopup_two').css('display')=='none') && ($('.geton_two').css('display')=='none')){
			   //alert("coming to the condition");
				$('.popup_pos').hide();
				$('#backgroundPopup').fadeOut('slow');
			}
			if(window.location.pathname=="/showThankyou.htm")
			{
				$('.blackfriday_faq_chk, .emailus_popup_act').hide();
				$('#backgroundPopup').fadeOut('slow');
			}
				
			//$('.popup_pos').hide();
			$(".vedio_holder").html("<video preload='none'>");
			//$('#backgroundPopup').fadeOut('slow');
			if($(".homepagevideo").find(".vedio_holder").attr("id")=="vedio_holder")
			{
				//console.log("inside the condn for rotating banner");
				$(".banner").find("#bannerForVideo").fadeOut('slow');
 				$(".banner").find("#mySlider").fadeIn('slow');
			}
			
			$('#fbErrorMsg').removeClass('fberror');
			$('#fbErrorMsg').hide();
		});
		
		
  	    /*var mouse_is_inside=false;
		$('.popup_pos').hover(function(){ 
	        mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.create_account').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.forgot_password_form').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.emailus_popup').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.free_shipping_popup').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.wish_list_popup').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.cart_popup').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.nav_popup').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.wish_list_form').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.dnt_see_ursze_act').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.outof_stock_popup_act').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.return_popup').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		$('.lookbook_popup').hover(function(){
			mouse_is_inside=true; 
	    }, function(){ 
	        mouse_is_inside=false; 
	    });
		  
	    $("body").mouseup(function(){ 
	        if(! mouse_is_inside){
	        	$('.popup_pos').hide(); 
	        	$('.create_account').hide();
	        	$('.forgot_password_form').hide();
	        	$('.emailus_popup').hide();
	        	$('.free_shipping_popup').hide();
	        	$('.wish_list_popup').hide();
	        	$('.cart_popup').hide();
	        	$('.nav_popup').hide();
	        	$('.wish_list_form').hide();
	        	$('.dnt_see_ursze_act').hide();
	        	$('.outof_stock_popup_act').hide();
	        	$('.return_popup').hide();
	        	$('.lookbook_popup').hide();
	        	$("#backgroundPopup").fadeOut('slow');
	        }
	    });*/
		/*$('body').click(function(e){
			if(e.target.className!=="signin_form")
			{
				$('.signin_form').hide(); 
	        	$("#backgroundPopup").fadeOut('slow');
			}
		});*/
		
		$('.help_holder').click(function()
		{
			$('#backgroundPopup').css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).show();
			$('.emailus_popup_act').fadeIn();
			$("#emailUsId").focus();
			 //position_popup ();
	 	 });
		
		$('#thankyouLogo').click(function(){
			window.location='/redirectToNonSecurePage.htm?rdirectURL=/';
		});
		
		$('.loginMyAccount').click(function()
		{
			$.ajax({url:'/isLoggedIn.htm',cache: false,success:function(customerid)
				{
						if(customerid!=null&&customerid!='')	
							{
								window.location.href='/MyAccount.htm';
							}
						else
							{
								$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
								$('.signin_form').fadeIn();$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
								$("#email_login").focus();
							}
				}});
			
		});
		
		
		//console.log("value of the hidden value of sale product :: "+$('#saleProduct').val());
		//console.log('discount program exists :: '+$('#finalSale').val());
//		if($('#finalSale').val()!='null' && $('#saleProduct').val() == 'true')
//		{
//			//alert("coming into the saleProduct true condition");
//			$("#saleGIF").show();
//		}
//		else if($('#finalSale').val()=='null' || $('#saleProduct').val() == 'false' || $('#saleProduct').val() == '')
//		{
//			//alert("coming into the saleProduct false condition");
//			$("#saleGIF").hide();
//		}
		
		if($.browser.msie)
		{
			if($.browser.version.indexOf('7.')!=-1 || $.browser.version.indexOf('8.')!=-1)
			{
				//console.log('----->>>>> INSIDE IE Version is   ------>>>>>> : '+$.browser.version);
				$('.global_nav ul li a').css({'background-repeat' : 'no-repeat'});
			}
		}
		if(location.pathname.match("index.html"))
    	{
			if($('#fbLoginErrorMessage').val()!=null && $('#fbLoginErrorMessage').val()!="" && $('#fbLoginErrorMessage').val()=="show")
			{
				$('#fbErrorMsg').show();
				
				$.ajax({url:'/clearfbLoginErrorMessageSession.htm',success:function(data)
				{	}
				});
				setTimeout(function(){
					$('#fbErrorMsg').hide();
				}, 10000);
			}
    	}
		else
		{
			if($('#fbLoginErrorMessage').val()!=null && $('#fbLoginErrorMessage').val()!="" && $('#fbLoginErrorMessage').val()=="show")
			{
				$('#backgroundPopup').show();
				$('.signin_form').fadeIn();
				$('#fbErrorMsg').addClass('fberror');
				$('#fbErrorMsg').show();
				
				$.ajax({url:'/clearfbLoginErrorMessageSession.htm',success:function(data)
				{	}
				});
			}
		}
		if($('#discountTypeName').val()!=null && $('#discountTypeName').val()=="FF")
			$('#saleFAQPage').show();
		else
			$('#saleFAQPage').hide();
		
		if($('#discountTypeName').val()!=null && $('#discountTypeName').val()=="Order")
		{
			$('#shipping').hide();
			$('#saleFAQ').show();
		}
		else
		{
			$('#shipping').show();
			$('#saleFAQ').hide();
		}
		$('#clickhere').click(function()
		{
			$('.fb_sale_question_popup').show();
			$("#backgroundPopup").css("background","url(../images/popup_bg.png) repeat").css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).fadeIn('fast');
		})
		$('#fb_sale').click(function()
		{
			$('.fb_sale_popup').show();
			$("#backgroundPopup").css("background","url(../images/popup_bg.png) repeat").css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).fadeIn('fast');
		});
		if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $('#discountTypeName').val()!=null && $('#discountTypeName').val()=="Order")
		{
			$('#afterLogin').show();
			$('#beforeLogin').hide();
		}
		else if((readCookie('Facebook')==null || readCookie('Facebook')!='Facebook') && ($('#discountTypeName').val()!=null && $('#discountTypeName').val()=="Order"))
		{
			$('#beforeLogin').show();
			$('#afterLogin').hide();
		}
		
		if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $('#discountTypeName').val()!=null && $('#discountTypeName').val()=="Order" && window.location.pathname=='/showThankyou.htm')
		{
			//console.log("coming inside the show thank you page condition");
			var subTotal=$('#subTotal').val();
			var conditionSatisfied = false;
			var discountAmountForSubtotal = 0.00;
			//console.log("sub total value after to fixed is :: "+subTotal);
			for(i=1; i<parseFloat($('#thresholdSize').val())+1; i++)
			{
				if(parseFloat(subTotal)>=$('#minLimits_'+i).val() && parseFloat(subTotal)<$('#maxLimits_'+i).val() && conditionSatisfied==false)
				{
					//console.log("the condition is success and the subtotal is :: "+subTotal);
					//console.log("the condition is success and the min threshold is :: "+$('#minLimits_'+i).val()+ " && max threshold is :: "+$('#maxLimits_'+i).val());
					conditionSatisfied = true;
					discountAmountForSubtotal = $('#discountValues_'+i).val();
					$('#facebookbonus').show();
					$('#bonus_price').text('-$'+discountAmountForSubtotal);
					
				}
			}
			if(conditionSatisfied!=true && conditionSatisfied==false)
			{
				//console.log("coming to the conditionSatisfied  :: "+conditionSatisfied+" and the subtotal is :: "+subTotal);
				discountAmountForSubtotal = 0.00;
				$('#facebookbonus').hide();
			}
		}
		//console.log("discount type name is :: "+$('#discountTypeName').val());
//		if(readCookie('Facebook')!=null && readCookie('Facebook')=='Facebook' && $('#discountTypeName').val()!=null && $('#discountTypeName').val()=="Order")
//		{
//			var subTotal=$('#grandTotal').val();
//			var totalPrice;
//			var conditionSatisfied = false;
//			var discountAmountForSubtotal = 0.00;
//			console.log("sub total value after to fixed is :: "+subTotal);
//			for(i=1; i<parseFloat($('#thresholdSize').val())+1; i++)
//			{
//				if(subTotal>=$('#minLimits_'+i).val() && subTotal<$('#maxLimits_'+i).val() && conditionSatisfied==false)
//				{
//					conditionSatisfied = true;
//					discountAmountForSubtotal = $('#discountValues_'+i).val();
//					//subTotal = parseFloat(subTotal)+parseFloat(discountAmountForSubtotal);
//					console.log("coming inside the condition and the subtotal is :: "+subTotal);
//					var discountAmountForLineItem = discountAmountForSubtotal/$('#lineItemsSizes').val();
//					console.log("discount amount for line item is :: "+discountAmountForLineItem);
//					console.log("size of the line item is :: "+$('#lineItemsSizes').val());
//					$("#cart_subtotal").text('$'+subTotal);
//					subTotal = subTotal-discountAmountForSubtotal;
//					setTimeout(function(){
//						for(j=1; j<parseFloat($('#lineItemsSizes').val())+1; j++)
//						{
//							console.log('coming into the for loop of j');
//							var price = $('#price_'+j).text().replace('$','');
//							console.log("the price of the line item is :: "+price);
//							var updatedPrice = parseFloat(price)+parseFloat(discountAmountForLineItem);
//							console.log("the updated price of the line item is :: "+updatedPrice);
//							$('#price_'+j).text('$'+updatedPrice);
//							//console.log("the price to fixed price is :: "+price.toFixed(2));
//						}
//					},100);
//				}
//			}
//			if(discountAmountForSubtotal!=0.00 && discountAmountForSubtotal>0.00 && conditionSatisfied==true)
//			{
//				//console.log("coming inside the savings function and savings amount is :: "+Savings);
////				var Savings = $("#cart_savings").text().replace('$','');
////				Savings = Savings.replace('-','');
////				if(Savings=="" )
////				{
////					console.log("savings price not equal to 0 it is greater than 0 :: "+Savings);
////					Savings = discountAmountForSubtotal;
////					$('#cart_savings').text('-$'+Savings);
////				}
////				else
////				{
////					console.log("coming inside the else of the savings condition and the savings before calcualtion is :: "+Savings);
////					Savings = parseFloat(Savings)+parseFloat(discountAmountForSubtotal)
////					$('#cart_savings').text('-$'+Savings);
////				}
//				var ShippingPrice = $('#cart_shipping').text().replace('$','');
//				if(ShippingPrice!='FREE')
//				{
//					//console.log("coming inside the shipping price not free :: "+ShippingPrice);
//					totalPrice = parseFloat(subTotal)+parseFloat(ShippingPrice);
//				}
//				else
//					totalPrice = subTotal;
//				$(".total_price").text('$'+totalPrice.toFixed(2));
//			}
////			if(conditionSatisfied!=true && conditionSatisfied==false)
////			{
////				//console.log("coming to the conditionSatisfied  :: "+conditionSatisfied+" and the subtotal is :: "+subTotal);
////				discountAmountForSubtotal = 0.00;
////				subTotal = subTotal-discountAmountForSubtotal;
////				//console.log("subtotal after calculation is :: "+subTotal);
////				$("#finalTotal").text('$'+subTotal.toFixed(2));
////				$("#shipcartSubtotal").text('$'+subTotal.toFixed(2));
////				
////			}
//			
//			
////			console.log("coming inside the sale condition inside the action.js file :: "+$('#grandTotal').val());
////			var subTotal=$('#grandTotal').val();
////			if(subTotal>200.00 && subTotal<400.00)
////			{
////				console.log("coming into the grand total calculation function");
////				subTotal=subTotal-50.00;
////				$('.total_price').text(subTotal.toFixed(2));
////			}
//		}
		
		
		
});

jQuery(window).bind('load',function(){	
	  $('#isTimeChanged').val(true);
});

function getTimeStampForPreTimer()
{
	$.ajax({
		url:'/getTimeStampForPreTimer.htm',
		async:false,
		cache:false,
		success:function(json)
		{
			  $('#salehours').val(json.split('-')[0]);
			  $('#salemins').val(json.split('-')[1]);
			  $('#salesecs').val(json.split('-')[2]);
		}
	});
}

function clearCache()
{
	$.ajax({
		url:'/clearFinalSaleCache.htm',
		success:function(json)
		{
			
		}
	});
	$(".loading_page").show();
	location.reload();
}

function clearPreTimerCache()
{
	$.ajax({
		url:'/clearPreTimerCache.htm',
		success:function(json)
		{
			
		}
	});
	$(".loading_page").show();
	location.reload();
}

function showSurvey()
{
	$("#backgroundPopup").css("background","url(../images/popup_bg.png) repeat").css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).fadeIn('fast');
	$(".feedback_form").fadeIn('slow');
	$(".feedback_form .popup_close_act").click(function(){$(".feedback_form").fadeOut('fast');$("#backgroundPopup").fadeOut('slow');});
	
}

function getShippingServiceDetailsForInternational(element)
{
	var splittedCn = $(element).attr('id').split('_');
	var countryCode = splittedCn[1];
	var countryName = $('#countryName').val();
	
	$('#usps').hide();
	$('#fedex').hide();
	if(countryCode!="00"){
		
		$('#countrynm').text(countryName);
		
		$.ajax({
			url:'/getShippingServicesForCSPage.htm',
			dataType:'json',
			data:{'countryCode':countryCode,'stateCode':null},
			success:function(shippingServices){
				var html='';
				$(shippingServices).each(function(index,item){
					
					var shippingTypeId=item.zone.shippingServiceType.id;
					var serviceName=item.zone.shippingServiceName;
					var serviceTypeName=item.zone.shippingServiceTypeName;
					
					var shippingPrice='$'+item.zone.singleUnitRate.toFixed(2);
					var additionalPairPrice='$'+item.zone.unitIncrementRate.toFixed(2);
					//var deliveryDays=item.zone.deliveryDaysLowerLimit+'-'+item.zone.deliveryDaysUpperLimit+' business Days';
					var deliveryDays="";
					 if(item.zone.deliveryDaysLowerLimit>0){
						 deliveryDays = item.zone.deliveryDaysLowerLimit+'-'+item.zone.deliveryDaysUpperLimit+' business days';
					 }
					 else if(item.zone.deliveryDaysUpperLimit==1)
						 {
						 	deliveryDays = item.zone.deliveryDaysUpperLimit+' business day';
						 }
					 else if(item.zone.deliveryDaysUpperLimit>1)
						 {
						 	deliveryDays = item.zone.deliveryDaysUpperLimit+' business days';
						 }
					var priceDetail = shippingPrice + " and " + additionalPairPrice + " for additional pair";
					
					if(serviceTypeName=="Priority International"){
						$('#dayStdInt').text(deliveryDays);
						if(countryCode=='US' || countryCode =='CA'){
							$('#costStdInt').text("FREE");
						}
						else{
							$('#costStdInt').text(priceDetail);
						}
						$('#usps').show();
					}
					
					if(serviceTypeName=="International Economy"){
						$('#dayExpInt').text(deliveryDays);
						$('#costExpInt').text(priceDetail);
						$('#fedex').show();
					}
					
					
					if(item.zone.freeLimit!=null && item.zone.freeLimit>0.0)
						shippingPrice='FREE on all orders over $'+item.zone.freeLimit+'!';

				});

			}
		});
		$('.shipping_tc').show();
		
	}
	else{
		
		
		
	}
	
}

function getShippingServiceDetailsForUSState(elem)
{
	var countryName = "USA";
	var countryCode = "US";
	var stateName = $("#stateName").val();
	var splitted = $(elem).attr('id').split('_');
	var stateCode = splitted[1];
	
	$('#stdUL').hide();
	$('#expUL').hide();
	$('#ovnUL').hide();
	$('#stdUSPS').hide();
	$('#expUSPS').hide();
	
	//alert(countryName + "-" + countryCode);
	//alert(stateName + "-" + stateCode);
	if(stateCode!="00"){
		$("#statenm").text(stateName);
		
		$.ajax({
			url:'/getShippingServicesForCSPage.htm',
			dataType:'json',
			data:{'countryCode':countryCode,'stateCode':stateCode},
			success:function(shippingServices){
				var html='';
				$(shippingServices).each(function(index,item){
					
					var shippingTypeId=item.zone.shippingServiceType.id;
					var serviceName=item.zone.shippingServiceName;
					var serviceTypeName=item.zone.shippingServiceTypeName;
					
					var shippingPrice='$'+item.zone.singleUnitRate.toFixed(2);
					var additionalPairPrice='$'+item.zone.unitIncrementRate.toFixed(2);
					//var deliveryDays=item.zone.deliveryDaysLowerLimit+'-'+item.zone.deliveryDaysUpperLimit+' business Days';
					
					var deliveryDays="";
					 if(item.zone.deliveryDaysLowerLimit>0){
						 deliveryDays = item.zone.deliveryDaysLowerLimit+'-'+item.zone.deliveryDaysUpperLimit+' business Days';
					 }
					 else if(item.zone.deliveryDaysUpperLimit==1)
						 {
						 	deliveryDays = item.zone.deliveryDaysUpperLimit+' business Day';
						 }
					 else if(item.zone.deliveryDaysUpperLimit>1)
						 {
						 	deliveryDays = item.zone.deliveryDaysUpperLimit+' business Days';
						 }
					 
					 
					var priceDetail = shippingPrice;
					
					if(serviceTypeName=="Standard Shipping"){
						$('#dayStd').text(deliveryDays);
						$('#costStd').text("FREE");
						$('#stdUL').show();
					}
					
					if(serviceTypeName=="Express Shipping"){
						$('#dayExp').text(deliveryDays);
						$('#costExp').text(priceDetail);
						$('#expUL').show();
					}
					
					if(serviceTypeName=="Overnight Shipping"){
						$('#dayOvn').text(deliveryDays);
						$('#costOvn').text(priceDetail);
						$('#ovnUL').show();
					}

					if(serviceTypeName=="Standard USPS"){
						$('#dayStdUSPS').text(deliveryDays);
						$('#costStdUSPS').text(priceDetail);
						$('#stdUSPS').show();
					}
					
					if(serviceTypeName=="Express USPS"){
						$('#dayExpUSPS').text(deliveryDays);
						$('#costExpUSPS').text(priceDetail);
						$('#expUSPS').show();
					}
					
					

					if(item.zone.freeLimit!=null && item.zone.freeLimit>0.0)
						shippingPrice='FREE on all orders over $'+item.zone.freeLimit+'!';

				});

			}
		});
		$('.shipping_tc').show();
		
	}
	
	else{
		//add error field to input box with msg "Please Select a State"
		$('.shipping_tc').hide();

	}
	
	
}

function initialize()
{

/************* global **************/

/************* tooltip ***********
	$(function() {
	$('.tooltip_b').tipsy({trigger: 'hover', gravity: 'n'});
	$('.tooltip_t').tipsy({trigger: 'hover', gravity: 's'});
	 });
***/
	
	$("img").error(function(){
		
		$(this).hide();
		/*var brokenImg =  $(this).attr("src");
		if(brokenImg!="/images/unavaliable_240_180.jpg"){
			//alert("src = " + $(this).attr("src")); 
			$(this).attr("src","/images/unavaliable_240_180.jpg");
			$(this).css("border","0");
			$(this).css("margin","0");
			$(this).css("padding","0");
			 //call for sending mail alerts for broken images - shp
			 brokenImagesAlert(brokenImg);
		
		}*/
	});

//InputBox
	$('input.text_val_act, textarea').focus(function() { 
		  if( this.value == this.defaultValue ) {
			  this.value = "";
			  
		   
		  }
		  }).blur(function() {
		   if( !this.value.length ) {
			this.value = this.defaultValue;
		   }
		}); 

	$('input.text_title_act, textarea').focus(function() { 
		  if( this.value == $(this).attr('original-title')) {
			  this.value = "";
		  }
		  }).blur(function() {
		   if( !this.value.length ) {
			this.value = $(this).attr('original-title');
		   }
		}); 

 // black screen dynamic height on window resize	
	
  	$('.popup_close_act').click(function() {
  		if($('.dnt_see_ursze_act').css('display')=='block')
    	{
    		$('#idp_selected_size').text("Please Select");
	    	$('#size_selected').text("U.S. Women's Size: Please Select Size");
    	}
  		$('#backgroundPopup').fadeOut();
		$(this).parent().hide();
				
	});
  	

  	
 // This is Added for Updating the ShoppingCart Popup Analytics when Closing the ShoppingCart Popup by YES
  	
  	$('.shoping_cart_popup_close').click(function() {
  		//console.log('------>>>>>>>>>>>> Shopping Cart Popup is Closed  ------->>>>>>>>>');
  		var gAnalyticsId=$('#gAnalyticsID').val();
		//console.log("----->>>>>>>>> For ShoppingCart Popup gAnalyticsId is  ------->>>>>> : " +gAnalyticsId);
		(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		})(window,document,'script','//www.google-analytics.com/analytics.js','ga');

		ga('create', gAnalyticsId);
		ga('send', 'pageview');
				
	});
  	
 // Upto here This is Added for Updating the ShoppingCart Popup Analytics when Closing the ShoppingCart Popup by YES
  	
  	$('.popup_reset_close_act').click(function() {
  		$('#backgroundPopup').fadeOut();
		$(this).parent().hide();
		window.location='/loadCustomerServicePage.htm?page=My Account';
				
	});
		
   var body_win_height = parseInt(document.body.clientHeight) ;
   var win_height = parseInt(document.documentElement.clientHeight) ;

	   if( body_win_height > win_height) {
		$('#backgroundPopup').height(body_win_height);
	   } else {
		$('#backgroundPopup').height(win_height);
	   }

	$(window).resize(function(){
	   var body_win_height = parseInt(document.body.clientHeight) ;
	   var win_height = parseInt(document.documentElement.clientHeight) ;

	   if( body_win_height > win_height) {
		$('#backgroundPopup').height(body_win_height);
	   } else {
		$('#backgroundPopup').height(win_height);
	   }
	}); 	

/******  black screen ends here********/ 
	
 	
	$(".load_act").click(function(){ 
		//$('.loading_list').fadeIn();
		//$('.load_review').hide();
		//$('.global_topbtm_scroll').fadeIn();
    });
 
 
/************* global scroll btn **************/
	

	$(".scroll_top_act").click(function(){
		$("html, body").animate({ scrollTop: 0 }, "slow");
    });

	$(".scroll_btm_act").click(function(){ 
		$('html, body').animate({scrollTop: $(document).height()-$(window).height()}, "slow");
    });
 

	//$(".custom_dropdown").kgcustomdropdown();
	
	
	$('body, #wrapper, .black_screen').click(function(e){
		
		
		
		if ($('.custom_dropdown').children('ul:visible'))
			{
				$('.custom_dropdown').each(function(){
					
						if($(e.target).parent().attr("class")!=$(this).attr("class"))
							{
								$(this).find("ul").hide();
							}
				});
				
			}
		
		
		setTimeout(function(){
			
			
			$(".kgpopup_act:visible").each(function(){
				
				var wndHeight=$(window).height();
				var popupHeight=$(this).height();
				var tenPercentage=((wndHeight*10)/100);
				var onePercentage=((wndHeight*1)/100);
				
				//console.log(($(this).offset().top+popupHeight)>wndHeight);
				if(($(this).offset().top+popupHeight+(onePercentage*5))>wndHeight){
										
					
						$(this).css("position","absolute");
						//$(this).css("top",(onePercentage*5)+"px");
						//$(this).animate({top:(onePercentage*5)});
					
				}
				else
					{
						
							//$(this).css("position","fixed");
							//$(this).animate({top:(onePercentage*13)});
						
					}
				
				
			});
			
		},2000); 
		



	 });
	
	
	
/*$(window).resize(function(){
		

	$(".kgpopup_act:visible").each(function(){
		
		var wndHeight=$(window).height();
		var popupHeight=$(this).height();
		var tenPercentage=((wndHeight*10)/100);
		var onePercentage=((wndHeight*1)/100);
		
		//console.log(($(this).offset().top+popupHeight+(onePercentage*5))>wndHeight);
		if(($(this).offset().top+popupHeight+(onePercentage*5))>wndHeight){
			
				
				$(this).css("position","absolute");
				//$(this).css("top",(onePercentage*5)+"px");
				$(this).animate({top:(onePercentage*5)});
			
		}
		else
			{
				
						$(this).css("position","fixed");
						//$(this).animate({top:(onePercentage*13)});
					
				
			}
		
		
		
	});

	$("#backgroundPopup").height($(document).height()).width($(document).width());

		
	}); */
	
	
	/*$('body, #wrapper, .black_screen').click(function(){
		var wrappclass = $('#wrapper').attr("class");
		if ($('#wrapper').hasClass("wrappflag"))
			{
				$('.custom_dropdown').find('ul').hide();	
				$('#wrapper').removeClass('wrappflag');
			}
	 });*/
	 
	 
/********* Vintage Tab *********/
	$("#women_tab_act").click(function () {
		$('#women_tab_act').addClass('active_women');
		$('#men_tab_act').removeClass('active_men');
    });
	
	$("#men_tab_act").click(function () {
		$('#men_tab_act').addClass('active_men');
		$('#women_tab_act').removeClass('active_women');
    });
	 
/*********** Shipping Dropdown *****************/	
	 
	$('#box_popup_header_act').click(function() {
		$('.free_shipping_popup').fadeIn();
		//$('#backgroundPopup').fadeIn();
	 	//position_popup ();
 	 });
	   
	$('#brand_bio_act').click(function() {
		$('.brand_bio_popup').fadeIn();
		$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
		//$('#backgroundPopup').fadeIn();
	 	//position_popup ();
 	 });
 
/*********** Item detail page *****************/	
	/*$(".cl_glry_hver_act> span").click(function(){
		$(this).siblings('div:visible').hide();
		$(this).next().fadeIn('fast');
		return false;
		}, function(){
    });*/

 	$(".cl_glry_hver_act> span").hover(function(){
		$(this).addClass('color_tab_mouseover');
		$(this).tipsy();
		return false
		}, function(){
		$(this).removeClass('color_tab_mouseover');
    });
 	// This is for Lookbook Tool Tip by YES
 	$(".book_icon").hover(function(){
		$(this).tipsy();
		return false
    });
 	
 	$(".video_icon").hover(function(){
		$(this).tipsy();
		return false
    });
   // Upto here This is for Lookbook Tool Tip by YES

	/*$(".cl_glry_hver_act> span").click(function(){
		$('.view_glry_act> div').hide();
		$(this).addClass('color_tab_hover');
		$(this).siblings().removeClass('color_tab_hover');
		
    });*/
 	
	
	$(".view_glry_act> span").hover(function(){ 
		$('.cl_glry_hver_act> div').hide(); 
		$(this).addClass('view_glallery_opacity');
		$(this).siblings().removeClass('view_glallery_opacity');
		
    });
	
 	$(".view_glry_act> span").hover(function(){
		$(this).siblings('div:visible').hide();
	
		$(this).next().fadeIn();
		
		$('.zoomContainer').remove();
		$('.zoomWindowContainer').remove();
		
//		var isNew					= $.trim($('#isNew').val());
//		
//		if(isNew == "true")
//		{
			var origImage			= $(this).find('img').attr('src');
			var shotNum				= origImage.substring(origImage.lastIndexOf('-')+1,origImage.lastIndexOf('.'));
			var zoomShot			= '0108'+shotNum[4]+shotNum[5];
	
			var zoomImg				= origImage.substring(0,origImage.lastIndexOf('-'))+'-'+zoomShot+'.jpg';
			
			$("<img>", {
			    src: zoomImg,
			    error: function() { 
			    	$('.idp_zoomicon').hide(); 
			    	//$('.view_gallery').unbind('mouseenter mouseleave mousemove');
			    	$('view_gallery').find('div').css( 'cursor', 'default' );
			    },
			    load: function() { 
			    	$('.idp_zoomicon').show(); 
			    	
			    	$('.view_gallery').find('div').css( 'cursor', 'url("/images/zoom-icon.png"), pointer' );

//			    	$(".view_gallery").bind("mouseenter",function(){
//			    		$('.idp_zoomcursor').show();
//			    	});
//			    	$(".view_gallery").bind("mouseleave",function(){
//			    		$('.idp_zoomcursor').hide();
//			    	});
//			    	$('.view_gallery').find('div').bind("mousemove",function(e){
//			    		   
////			    	    var left	= e.pageX-315;
////			    	    var top	 	= e.pageY-360;
//			    		var parentOffset = $(this).offset();
//			    	    var left 	= e.pageX-parentOffset.left-$('.idp_zoomcursor').width()/2;
//			    	    var top	 	= e.pageY-parentOffset.top-$('.idp_zoomcursor').height()/2;
//			    	    if(left > 328)
//			    	    {
//			    	    left	= 328;
//			    	    }
//			    	    if(left < 0)
//			    	    {
//			    	    left	= 0;
//			    	    }
//			    	    if(top > 239)
//			    	    {
//			    	    top = 239;
//			    	    }
//			    	    if(top < 0)
//			    	    {
//			    	    top	 = 0;
//			    	    }
//		    	        $('.idp_zoomcursor').css({
//		    	        	left:  left+"px",
//			    	   	    top:   top+"px"
//		    	        });
//		    	    });
			    }
		    });
			
			$(this).next().find('img').attr("data-zoom-image",zoomImg);
			$(this).next().find('img').elevateZoom({
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
	    			$('.zoomContainer').each(function(){
	    				if($(this).position().left == 0){
	    					$(this).next().remove();
	    					$(this).remove();
	    				}
	    			});
	    			$(".zoomLens").css( 'cursor', 'url("/images/zoom-icon.png"), pointer' );
	    		}
//				cursor: "url(/images/zoom-icon.png), pointer"
			});
//		}
		
		return false
		}, function(){
    });
	
	/*$(".cl_glry_hver_act span").click(function () {
	//	   $("li.").effect("highlight", {color: 'grey'}, 3000);
		if(sizeSelected==""){
			//$(".cl_info_size_act").addClass("size_error_label");
		}
	//	$("li.cl_info_bg_act").css("background-color", "#ccc").fadeTo(700,1,function(){$("li.cl_info_bg_act").css("background-color", "#fff");});
 	});*/
 	
	
	$(".size_available_act").click(function () {
		   $(".cl_info_size_act span").html($(this).find('span').html());
		
 	});
	
	$(".size_available_act").click(function () {
		   //$("li.cl_info_size_act").effect("highlight", {color:'grey'}, 3000);
	       //$("li.cl_info_size_act").css("background-color", "#ccc").fadeTo(700,1,function(){$("li.cl_info_size_act").css("background-color", "#fff");});
		   $(".cl_info_size_act").removeClass("size_error_label");
		   $('.size_head_act').removeClass("error_label");
 	});

	$(".desc_expand_act").click(function () {
		   $(".desc_small_act").hide();
		   $(".desc_large_act").slideDown();
 	});

	$(".desc_minimize_act").click(function () {
		   $(".desc_large_act").slideUp();
		   $(".desc_small_act").slideDown();
 	});
	
	$('.size_available_act').live('click',function() {
			$(this).children().addClass("size_active");
			$(this).siblings().children().removeClass('size_active');
			
	});


	$(".rating_select_act code").toggle(function(){
		$(this).removeClass("default_rating");
		$(this).addClass("review_selected");
		$(this).prevAll().removeClass("default_rating");		
		$(this).prevAll().addClass("review_selected");
		$(this).nextAll().removeClass("review_selected");		
		$(this).nextAll().addClass("default_rating");
      },function(){		   
		$(this).nextAll().removeClass("review_selected");		
		$(this).nextAll().addClass("default_rating");
		
    });
	
/****************** Poupup ****************/
	$('.dont_see_size_act').click(function() {
		$('#backgroundPopup').css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).show();
		$('.dnt_see_ursze_act').fadeIn();		
		$("#sizeEmail").focus();
		$(".custom_dropdown").kgcustomdropdown();
   		//position_popup ();
 	 });
	
	$('.outof_stock_act').click(function() {
		$('#backgroundPopup').css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).show();
		$('.outof_stock_popup_act').fadeIn();	
		$("#sizeEmail1").focus();
   		//position_popup ();
		$(".custom_dropdown").kgcustomdropdown();
 	 });
	
	$('.sendto_friend_click_act').click(function() {
		$('#backgroundPopup').css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).show();
		$('.sendto_friend_popup_act').fadeIn();		
		$("#custName").focus();
   		//position_popup ();
		$(".custom_dropdown").kgcustomdropdown();
 	 });
	 	
	$('.acnepopup_act').click(function() {
		$('#backgroundPopup').css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).show();
		$('.acne_popup_act').fadeIn();	
		hideAcneErrors(); 
   		//position_popup ();
		$(".custom_dropdown").kgcustomdropdown();
 	 });
	
	$('.emailuspopup_act').click(function() {
		console.log("inside")
		$('.emailus_popup_act').find('.dont_see_your_size_popup_holder form input#emailUsId').val("");
		$('.emailus_popup_act').find('.dont_see_your_size_popup_holder form textarea#help').val("");
		$('.emailus_popup_act').find('.dont_see_your_size_popup_holder form input#order_number').val("");
		$('.emailus_popup_act').find('.dont_see_your_size_popup_holder form div#show_selected_images').html("");
		mailDetials = {};
		$('#backgroundPopup').css("position","fixed").css("top","0px").css("left","0px").width($(document).width()).height($(document).height()).show();
		$('.emailus_popup_act').fadeIn();
		$("#emailUsId").focus();
		 //position_popup ();
 	 });
	
/*********** brand view page *********************/	
		var slide_desc_ele = true;	
	$('.brand_desc_act').click(function() {
				$('.brand_information_view').slideToggle(500); 	
				$("a.brand_info_slide").text( "Close Brand Bio" );
				if (slide_desc_ele) 	{
					$('.scroll-pane-brand-act').jScrollPane();
					slide_desc_ele = false;
				}					
				
				});
	
	
	var slide_ele = true;	
	$('.show_drop_down_act').live('click', function() {
		//console.log("----->>>> show_drop_down_act is Clicked  ------>>>>>>>");
		$('.select_drop_down').slideToggle(500);
			if (slide_ele) 	{
				//console.log("----->>>> show_drop_down_act is  Opened ------>>>>>>>  : " + slide_ele);
				
				$('.style_selectpannel h2').addClass('drop_up_filter');
				$('.size_select_pannel h2').addClass('drop_up_filter');
				$('.color_select_pannel h2').addClass('drop_up_filter');
				$('.price_select_pannel h2').addClass('drop_up_filter');
				$('.brand_select_pannel h2').addClass('drop_up_filter');
				$('.gender_select_pannel h2').addClass('drop_up_filter');
				
				$('.item_selection_pannel_s .style_selectpannel h2').addClass('isps_drop_up_filter');
				$('.item_selection_pannel_s .size_select_pannel h2').addClass('isps_drop_up_filter');
				$('.item_selection_pannel_s .color_select_pannel h2').addClass('isps_drop_up_filter');
				$('.item_selection_pannel_s .price_select_pannel h2').addClass('isps_drop_up_filter');
				$('.item_selection_pannel_s .brand_select_pannel h2').addClass('isps_drop_up_filter');
				$('.item_selection_pannel_s .gender_select_pannel h2').addClass('isps_drop_up_filter');
				
				$('.item_selection_pannel_m .style_selectpannel h2').addClass('ispm_drop_up_filter');
				$('.item_selection_pannel_m .size_select_pannel h2').addClass('ispm_drop_up_filter');
				$('.item_selection_pannel_m .color_select_pannel h2').addClass('ispm_drop_up_filter');
				$('.item_selection_pannel_m .price_select_pannel h2').addClass('ispm_drop_up_filter');
				$('.item_selection_pannel_m .brand_select_pannel h2').addClass('ispm_drop_up_filter');
				$('.item_selection_pannel_m .gender_select_pannel h2').addClass('ispm_drop_up_filter');
				
				$('.style_selectpannel h2').removeClass('drop_down_filter');
				$('.size_select_pannel h2').removeClass('drop_down_filter');
				$('.color_select_pannel h2').removeClass('drop_down_filter');
				$('.price_select_pannel h2').removeClass('drop_down_filter');
				$('.brand_select_pannel h2').removeClass('drop_down_filter');
				$('.gender_select_pannel h2').removeClass('drop_down_filter');
				
				$('.item_selection_pannel_s .style_selectpannel h2').removeClass('isps_drop_down_filter');
				$('.item_selection_pannel_s .size_select_pannel h2').removeClass('isps_drop_down_filter');
				$('.item_selection_pannel_s .color_select_pannel h2').removeClass('isps_drop_down_filter');
				$('.item_selection_pannel_s .price_select_pannel h2').removeClass('isps_drop_down_filter');
				$('.item_selection_pannel_s .brand_select_pannel h2').removeClass('isps_drop_down_filter');
				$('.item_selection_pannel_s .gender_select_pannel h2').removeClass('isps_drop_down_filter');
				
				$('.item_selection_pannel_m .style_selectpannel h2').removeClass('ispm_drop_down_filter');
				$('.item_selection_pannel_m .size_select_pannel h2').removeClass('ispm_drop_down_filter');
				$('.item_selection_pannel_m .color_select_pannel h2').removeClass('ispm_drop_down_filter');
				$('.item_selection_pannel_m .price_select_pannel h2').removeClass('ispm_drop_down_filter');
				$('.item_selection_pannel_m .brand_select_pannel h2').removeClass('ispm_drop_down_filter');
				$('.item_selection_pannel_m .gender_select_pannel h2').removeClass('ispm_drop_down_filter');
				
				scrollBarsForFilters=$('.scroll-pane').jScrollPane();
				slide_ele = false;
			}
			else
			{
				//console.log("----->>>> show_drop_down_act is  Closed ------>>>>>>>  : " + slide_ele);
				
				$('.style_selectpannel h2').addClass('drop_down_filter');
				$('.size_select_pannel h2').addClass('drop_down_filter');
				$('.color_select_pannel h2').addClass('drop_down_filter');
				$('.price_select_pannel h2').addClass('drop_down_filter');
				$('.brand_select_pannel h2').addClass('drop_down_filter');
				$('.gender_select_pannel h2').addClass('drop_down_filter');
				
				
				$('.item_selection_pannel_s .style_selectpannel h2').addClass('isps_drop_down_filter');
				$('.item_selection_pannel_s .size_select_pannel h2').addClass('isps_drop_down_filter');
				$('.item_selection_pannel_s .color_select_pannel h2').addClass('isps_drop_down_filter');
				$('.item_selection_pannel_s .price_select_pannel h2').addClass('isps_drop_down_filter');
				$('.item_selection_pannel_s .brand_select_pannel h2').addClass('isps_drop_down_filter');
				$('.item_selection_pannel_s .gender_select_pannel h2').addClass('isps_drop_down_filter');
				
				$('.item_selection_pannel_m .style_selectpannel h2').addClass('ispm_drop_down_filter');
				$('.item_selection_pannel_m .size_select_pannel h2').addClass('ispm_drop_down_filter');
				$('.item_selection_pannel_m .color_select_pannel h2').addClass('ispm_drop_down_filter');
				$('.item_selection_pannel_m .price_select_pannel h2').addClass('ispm_drop_down_filter');
				$('.item_selection_pannel_m .brand_select_pannel h2').addClass('ispm_drop_down_filter');
				$('.item_selection_pannel_m .gender_select_pannel h2').addClass('ispm_drop_down_filter');
				
				
				
				$('.style_selectpannel h2').removeClass('drop_up_filter');
				$('.size_select_pannel h2').removeClass('drop_up_filter');
				$('.color_select_pannel h2').removeClass('drop_up_filter');
				$('.price_select_pannel h2').removeClass('drop_up_filter');
				$('.brand_select_pannel h2').removeClass('drop_up_filter');
				$('.gender_select_pannel h2').removeClass('drop_up_filter');
				
				$('.item_selection_pannel_s .style_selectpannel h2').removeClass('isps_drop_up_filter');
				$('.item_selection_pannel_s .size_select_pannel h2').removeClass('isps_drop_up_filter');
				$('.item_selection_pannel_s .color_select_pannel h2').removeClass('isps_drop_up_filter');
				$('.item_selection_pannel_s .price_select_pannel h2').removeClass('isps_drop_up_filter');
				$('.item_selection_pannel_s .brand_select_pannel h2').removeClass('isps_drop_up_filter');
				$('.item_selection_pannel_s .gender_select_pannel h2').removeClass('isps_drop_up_filter');
				
				$('.item_selection_pannel_m .style_selectpannel h2').removeClass('ispm_drop_up_filter');
				$('.item_selection_pannel_m .size_select_pannel h2').removeClass('ispm_drop_up_filter');
				$('.item_selection_pannel_m .color_select_pannel h2').removeClass('ispm_drop_up_filter');
				$('.item_selection_pannel_m .price_select_pannel h2').removeClass('ispm_drop_up_filter');
				$('.item_selection_pannel_m .brand_select_pannel h2').removeClass('ispm_drop_up_filter');
				$('.item_selection_pannel_m .gender_select_pannel h2').removeClass('ispm_drop_up_filter');
				
				
				slide_ele = true;	
			}
	});
	
	$('.hide_drop_down_act').live('click', function() {
		$('#wrapper').addClass('flag');					
	});
	
 	 
	$('.select_drop_down, .show_drop_down_act, .brand_desc_act, .brand_information_view').mouseout(function() {
		$('#wrapper').addClass('flag');
 	});
	$('.select_drop_down, .show_drop_down_act, .brand_desc_act, .brand_information_view, .your_selection').mouseover(function() {
		$('#wrapper').removeClass('flag');
 	});
	
	$('body').live('click', function() {
		//alert("sdafsda");
 		if ($('#wrapper').hasClass("flag")) {
			$('.select_drop_down').hide();
			$('.item_selection_pannel_s .style_selectpannel h2').removeClass('isps_drop_up_filter');
			$('.item_selection_pannel_s .size_select_pannel h2').removeClass('isps_drop_up_filter');
			$('.item_selection_pannel_s .color_select_pannel h2').removeClass('isps_drop_up_filter');
			$('.item_selection_pannel_s .price_select_pannel h2').removeClass('isps_drop_up_filter');
			$('.item_selection_pannel_s .brand_select_pannel h2').removeClass('isps_drop_up_filter');
			$('.item_selection_pannel_s .gender_select_pannel h2').removeClass('isps_drop_up_filter');
			
			$('.item_selection_pannel_m .style_selectpannel h2').addClass('ispm_drop_down_filter');
			$('.item_selection_pannel_m .size_select_pannel h2').addClass('ispm_drop_down_filter');
			$('.item_selection_pannel_m .color_select_pannel h2').addClass('ispm_drop_down_filter');
			$('.item_selection_pannel_m .price_select_pannel h2').addClass('ispm_drop_down_filter');
			$('.item_selection_pannel_m .brand_select_pannel h2').addClass('ispm_drop_down_filter');
			$('.item_selection_pannel_m .gender_select_pannel h2').addClass('ispm_drop_down_filter');
			
			$('.item_selection_pannel_s .style_selectpannel h2').addClass('isps_drop_down_filter');
			$('.item_selection_pannel_s .size_select_pannel h2').addClass('isps_drop_down_filter');
			$('.item_selection_pannel_s .color_select_pannel h2').addClass('isps_drop_down_filter');
			$('.item_selection_pannel_s .price_select_pannel h2').addClass('isps_drop_down_filter');
			$('.item_selection_pannel_s .brand_select_pannel h2').addClass('isps_drop_down_filter');
			$('.item_selection_pannel_s .gender_select_pannel h2').addClass('isps_drop_down_filter');
			
			$('.brand_information_view').hide();
			$('#wrapper').removeClass('flag');
		}
	});
	/************* New CheckoutPage *************/

	
		$('.chckout_cmplttitle_act').css('display', 'none');
		
		//$('.shipping_same_address_act').css('display', 'none');
		//$('.same_shpping_address_act').attr("checked", "checked");
		

	/*
	$('.same_shpping_address_act') .click( function() {
		if (jQuery(this).is(':checked'))
		$('.shipping_same_address_act').hide();
		else 
		$('.shipping_same_address_act').show();
	} );	
	
	$('.your_info_act').click (function() {
		$('.chckout_yourinfo').hide();
		$('.check_out_shipping').show();
		$('.checkout_2_act').addClass('selected');
		$('.checkout_1_act').removeClass('selected')
			
	});
		
	$('.shipping_act').click(function() {
		$('.chckout_yourinfo').hide();
		$('.check_out_shipping').hide();
		$('.check_out_payment').show();
		$('.checkout_1_act').removeClass('selected');
		$('.checkout_2_act').removeClass('selected');
		$('.checkout_3_act').addClass('selected');
	});
	

	$('.shipping_back_act').click(function() {
		$('.chckout_yourinfo').show();
		$('.check_out_shipping').hide();
		$('.check_out_payment').hide();
				
		$('.checkout_1_act').addClass('selected');
		$('.checkout_2_act').removeClass('selected');
		$('.checkout_3_act').removeClass('selected');
		
	});
*/
	$('.gift_code_act').click(function() {
		$('.gift_code').hide();
		$('.discount_code').show();	
		$('.gcode_apply_act').show();		
	});
	
	
	$('.gcode_apply_act').click(function()
	{ 
		if( $('.discount_code input').val().length === 0 ) {
			$('.discount_code input').addClass('inputError');
			$('.ok_icon_act').text('Code Unrecognized');
			$('.ok_icon_act').show();	
			$('.ok_icon').addClass('ok_error');
			
		}
		else {
			$('.discount_code input').removeClass('inputError');
			$('.ok_icon').removeClass('ok_error');
			$('.ok_icon_act').show();
			$('.ok_icon_act').text('Code Applied');
			
			}
	});

/*	
	
	$('.payment_act').click(function() {
		$('.chckout_title_act').css('display', 'none');
		$('.chckout_cmplttitle_act').css('display', 'block');
		$('.chckout_tkstitle_act').css('display', 'none');
		$('.chckout_yourinfo').hide();
		$('.check_out_shipping').hide();
		$('.check_out_payment').hide();
		$('.pay_method').hide();
		$('.complete_purchase').show();
		$('.checkout_pathway').hide();
		$('.thankyou').hide();
		
	});

	$('.payment_back_act').click (function() {
		$('.chckout_yourinfo').hide();
		$('.check_out_shipping').show();
		$('.check_out_payment').hide();
		$('.checkout_2_act').addClass('selected');
		$('.checkout_1_act').removeClass('selected')
		$('.checkout_3_act').removeClass('selected')
			
	});	
	$('.cmplte_purchse_act').click(function() {
		$('.chckout_title_act').css('display', 'none');
		$('.chckout_cmplttitle_act').css('display', 'none');
		$('.chckout_tkstitle_act').css('display', 'block');
		$('.chckout_yourinfo').hide();
		$('.check_out_shipping').hide();
		$('.check_out_payment').hide();
		$('.complete_purchase').hide();
		$('.need_help_bar').hide();
		$('.thankyou').show();
		$('.checkout_remove_shoes').hide();
		$('.cart_shoe_details').hide();
		$('.checkout_noshoe_error').hide();
		$('.final_ord_details').show();
		$('.checkout_pathway').hide();
		$('.checkout_shppingcart_header h3').text('Your Final Order');
		
	});
*/	
	
	$(".remove_shoe_act").click( function () {
            $(this).parent().parent().hide();
     });                

	
	$('.shipping_billing_edit_act').click (function() {
			$('.chckout_yourinfo').show();
			$('.complete_purchase').hide();
			$('.checkout_pathway').show();
			$('.checkout_1_act').addClass('selected');
			
	});

	
	$('.pay_method_edit_act').click (function() {
			$('.check_out_payment').show();
			$('.complete_purchase').hide();
			$('.checkout_pathway').show();
			$('.pay_method').show();
			$('.checkout_3_act').addClass('selected');
			
	});


	$('.shipp_method_edit_act').click (function() {
			$('.check_out_shipping').show();
			$('.complete_purchase').hide();
			$('.checkout_pathway').show();
			$('.checkout_2_act').addClass('selected');
			
	});

	
	$(".scroll-pane li").toggle(function(){	
		$(this).children().attr('checked');
    });
	
	$("#myaccount").click(function()
	{
		if($('#myaccount').text()=='SIGN IN')
		{
			$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
			$('.signin_form').fadeIn();$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
			$("#email_login").focus();
		}
						
	});
	
	$("#forgotPass").click(function(){
			
		$('.login_form').hide();$('.forgot_password_form').fadeIn();$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
		$("#email_forgot").focus();
		});
	
	$(".noAccSign").click(function(){
		
		$('.login_form').hide();$('.create_account').fadeIn();$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
		$("#emailid").focus();
		});
	
	
	$("#box_popup_header_act").click(function(){
		
		$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
		});
	
	
	
	
	/**** sign in click***/
	
		/*$(".signin_act").click(function()
			{
				$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
				$('.signin_form').fadeIn().css('position','fixed');$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
				
			});*/
		$(".signin_create_ac_act").click(function()
		{	
			$('.signin_form').fadeOut();
			$('.signin_sale').fadeOut();
			$('.wish_list_form').fadeOut();
			$('.create_account').fadeIn();
			/*$('.inputbox_final').val('');
			$('.inputbox_final_pwd').val('');
			$('.inputspan_txt').show();
			$('.inputspan_pwd').show();*/
		});
		$(".signin_create_ac_act_sale").click(function()
		{	
			$('.signin_sale').fadeOut();
			$('.create_account_sale').fadeIn();
		});
		
		$(".signin_create_ac_act_wishlist").click(function()
		{	
			$('.wish_list_form').fadeOut();
			$('.create_account_wishlist').fadeIn();
		});
		
		$('#timmer_wrapper').click(function(){
			window.location.href="/solestruck-knows-you/"
		});
		
//		$(".timmer_wrapper_act").click(function()
//		{	
//			//$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
//			//$('.cat_popup').fadeIn().css('position','fixed');$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
//			var loginIn=$('#loginIn').val();
//			if(loginIn!='true')
//			{
//				$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
//				$('#extra_black_fridaypopup').fadeIn();$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
//			}
//			else
//			{
//				$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
//				$('#extra_black_fridaypopup_next').fadeIn();$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
//			}
//		}); 
		
		
		$(".sale_timmer_wrapper_act").click(function()
		{	
			
				$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
				//$('#pre_black_fridaypopup').fadeIn().css('padding-bottom', '15px');$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
				$('.PreiviewSITEPOPUP').fadeIn();$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
			
		}); 
		
//		$(".cat_need_it_act").click(function()
//		{
//			if(readCookie('Facebook')==null)
//			{
//				$('.cat_popup').fadeOut();
//				$('.signin_sale').fadeIn().css('position','fixed');$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
//			}
//			else
//			{
//				$('.cat_popup').fadeOut();
//				$('.black_fridaypopup_one').fadeIn().css('position','fixed');$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
//			}
//		});
		var discountExists=$('#discountExists').val();
		if(discountExists=="true")
			{
				if($("#showTimer").val()=='true')
				{
					if((window.location.pathname=='/sale-shoes/') || (window.location.pathname.indexOf("/sale-shoes/page-")!=-1) || (window.location.pathname=='/sale-womens-shoes/') || (window.location.pathname.indexOf("/sale-womens-shoes/page-")!=-1)|| (window.location.pathname=='/sale-mens-shoes/') || (window.location.pathname.indexOf("/sale-mens-shoes/page-")!=-1)  || (window.location.pathname.indexOf("/sale-womens-shoes/")!=-1 && location.href.indexOf("size-")!=-1) || (window.location.pathname.indexOf("/sale-mens-shoes/")!=-1 && location.href.indexOf("size-")!=-1))
					{
						var logIn=$('#loginIn').val();
						if(logIn!='true')
						{
							$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
							$('#extra_black_fridaypopup').fadeIn();
							$("#pre_black_fridaypopup").css('display','none');
							//$("#extra_black_fridaypopup").css('display','none');
							//$("#extra_black_fridaypopup_next").css('display','none');
							$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px');
						}
					}
				}
			}
		
		$('.black_fridaycountdown').click(function(){
			$('.black_fridaypopup_next_act').hide();
			$('#extra_black_fridaypopup_next').hide();
			$('.black_fridaypopup_one').show();
		});
		
		
		$(".counter_signin_act").click(function()
		{	
			$('.black_fridaypopup').fadeOut();
			$('.signin_sale').fadeIn();
		});
		
		/*$(".signin_sale_act").click(function()
				{	
					$('.signin_sale').fadeOut().css('position','fixed');
					$('.black_fridaypopup_two').fadeIn().css('position','fixed');
				});*/
		$(".black_fridaypopup_twonext_act").click(function()
				{	
					/*$(".loading_page").show();*/
					$('.black_fridaypopup_two').fadeOut();
					$('.geton_two').fadeIn();
				});
		
		/*$(".counter_facebook_act").click(function()
				{	
					$('.black_fridaypopup').fadeOut().css('position','fixed');
					$('.black_fridaypopup_one').fadeIn().css('position','fixed');
				});*/
		
		$(".black_fridaypopup_onenext_act").click(function()
				{	
					$('.black_fridaypopup_one').fadeOut();
					$('.geton_one').fadeIn();
				});
		
		$(".shop_btn").click(function()
		{
			$(".loading_page").show();
			if(location.pathname.match("index.html"))
	    	{
		    	location.reload();
	    	}
//			else if((window.location.pathname=='/sale-shoes/') || (window.location.pathname.indexOf("/sale-shoes/page-")!=-1) || (window.location.pathname=='/sale-womens-shoes/') || (window.location.pathname=='/sale-mens-shoes/')  || (window.location.pathname.indexOf("/sale-womens-shoes/")!=-1 && location.href.indexOf("size-")!=-1) || (window.location.pathname.indexOf("/sale-mens-shoes/")!=-1 && location.href.indexOf("size-")!=-1))
//			{
//				$('.popup_pos').hide();
//				$('#backgroundPopup').hide();
//				$(".loading_page").hide();
//			}
			else
			{
				window.location.href='/sale-shoes/';
			}
		});
		
		

		
	
	$(document).keydown(function(e){
		var code = (e.keyCode ? e.keyCode : e.which);
	    if (code === 27) {
	    	
	    	//console.log('---->> INSIDE ESCAP KEY --->>>');
	    	if($('.dnt_see_ursze_act').css('display')=='block')
	    	{
	    		$('#idp_selected_size').text("Please Select");
		    	$('#size_selected').text("U.S. Women's Size: Please Select Size");
	    	}
	    	
	    	$(".kgpopup_act:visible").each(function(){
	    		
	    		if($(this).find(".custom_dropdown ul:visible").length>0)
	    			{
	    				//console.log('------ custom_dropdown class is hided ------');
	    				$(this).find(".custom_dropdown ul:visible").hide();
	    				return false;
	    			}
	    		else
	    			{
	    				// This is Added for Updating the ShoppingCart Popup Analytics when Closing the ShoppingCart Popup by YES
	    			
		    				//console.log('$$$$$$   BackgroundPopup is hided   $$$$$$$');
		    				if($('.cart_popup').css("display") == "block")
		    				{
		    					//console.log('^^^^^^^^^^^  Because of Escap key Shopping Cart is Ready to Hide  ^^^^^^^^^^^^');
		    					var gAnalyticsId=$('#gAnalyticsID').val();
		    					//console.log("----->>>>>>>>> For ShoppingCart Popup gAnalyticsId is  ------->>>>>> : " +gAnalyticsId);
		    					(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
		    					(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
		    					m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
		    					})(window,document,'script','//www.google-analytics.com/analytics.js','ga');
	
		    					ga('create', gAnalyticsId);
		    					ga('send', 'pageview');
	    				
		    				}
		    				
	    				// Upto here This is Added for Updating the ShoppingCart Popup Analytics when Closing the ShoppingCart Popup by YES
		    			if(($('.black_fridaypopup_two').css('display')=='none') && ($('.geton_two').css('display')=='none')){
		    				//alert("coming 1");
		    				$(this).fadeOut('fast');
		    				$('#backgroundPopup').fadeOut('slow');
		    			}
	    				if($(".homepagevideo").find(".vedio_holder").attr("id")=="vedio_holder")
	    				{
	    					$(".homepagevideo").fadeOut('fast');
	    					//console.log("inside the condn for rotating banner");
	    					$(".banner").find("#bannerForVideo").fadeOut('slow');
	    	 				$(".banner").find("#mySlider").fadeIn('slow');
	    				}
	    				/*$('.inputbox_final').val('');
	    				$('.inputbox_final_pwd').val('');
	    				$('.inputspan_txt').show();
	    				$('.inputspan_pwd').show();*/
	    				return false;
	    			}
	    		$('#fbErrorMsg').removeClass('fberror');
				$('#fbErrorMsg').hide();
	    	});
	    	//$(".kgpopup_act:visible").fadeOut('fast');
	    	//$('#backgroundPopup').fadeOut('slow');
	    	//$(".custom_dropdown ul:visible").hide();
	    	//$("ul[id|='searchText_']:visible").hide();
		}
		
	});
	
	
	
	
};


function isWomenBrand(txt)
{
	var ret='';
	
	createCookie("analyticsSearchTerm",txt,1); // Added for Search Analytics by YES
	
	$(".global_nav div ul li a").each(function(){
		
		var com='/'+txt.toLowerCase().split(" ").join("-")+'-womens-shoes/';
		if($(this).attr("href")==com)
			{
				ret=$(this).attr("href");
				return false;
			}
	});
	
	if(ret=='')
		{
			$(".global_nav div ul li a").each(function(){
						
						var com='/mens-'+txt.toLowerCase().split(" ").join("-")+'/';
						if($(this).attr("href")==com)
							{
								ret=$(this).attr("href");
								return false;
							}
					});
		}
	
	
	
	return ret;
}


function brokenImagesAlert(brokenImgLink)
{
	//var imgLink = $(this).attr('src');
	//alert("imgLink  = " + imgLink + " sent through mail");
	//alert(">>>>>>>>>" + $('.shoes_img').find('img').attr('src'));
	//alert(window.parent.$(this).attr('class'));
	
	
	//var imageLink = $('.shoes_img').find('img').attr('src');
		//$.ajax({
			
			//url:'/sendBrokenImageAlert.htm',
			//data:{'imageLink':brokenImgLink},
			//dataType:'json',
			//success:function(states)
			//{
				//alert("imageLink  = " + imgLink + " sent through mail");
			//}
			
	//});
	
	//$('.shoes_img').find('img').attr("src","http://commondatastorage.googleapis.com/images2.solestruck.com/gae/newdesign/notavailableImages/unavaliable_240_180.jpg");
	
		


}



/*Contributor: K3G
 * This function creates a cookie for the domain currently being used.
 * Parameters:
 * name(string) - This is the name of the cookie to be created.
 * value(string) - This is the value of the cookie to be created.
 * days(integer) - This is the age of the cookie to be created.  
 * */
function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	}
	else var expires = "";
	document.cookie = name+"="+value+expires+"; path=/";
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


/*Contributor: K3G
 * This function erases a cookie from the domain currently being used.
 * Parameters:
 * name(string) - This is the name of the cookie to be erased.
 * */
function eraseCookie(name) {
	createCookie(name,"",-1);
}

var initJscrollpane=true;

function showBOTBPopup()
{
		
	 $('.show_contest_act').click(function() {
			$('.boot_form_holder').addClass("dn");
			$('.boot_contest_holder').removeClass("dn");
			
			if(initJscrollpane)
				{
				$('.boot-scroll-pan').jScrollPane();
				initJscrollpane=!initJscrollpane;
				}
			
		 });
		  $('.back_form_act').click(function() {
			$('.boot_form_holder').removeClass("dn");
			$('.boot_contest_holder').addClass("dn");
		
		 
			
		 });
		  
		  $("#botbFirstName").keydown(function(){
			  
			  if($(this).val().indexOf("Please enter your name")!=-1 )
				  {
				  	$(this).val("");
				  }
			  
		  });
		  
		  $("#botbEmail").keydown(function(){
			  
			  if($(this).val().indexOf("Please enter your email")!=-1 || $(this).val().indexOf("One entry per email please.")!=-1)
				  {
				  	$(this).val("");
				  }
			  
		  });
		  
		  
	if($("#botbpopup").length>0 && $("#botbpopup").val().indexOf("showPopup")!=-1)
		{
			//js for showing the popup
		$('#backgroundPopup').width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed').fadeIn("fast");
		$(".boot_popup").fadeIn('slow');
		}
}


function isEmailId(mailId)
{
	
		   var emailRegEx = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;		   
		   if(emailRegEx.test(mailId) == false)		      
		      return false;
		   else
			   return true;
			
}

function trimString(s)
{
	var l=0; var r=s.length -1;
	while(l < s.length && s[l] == ' ')
	{	l++; }
	while(r > l && s[r] == ' ')
	{	r-=1;	}
	return s.substring(l, r+1);
}



/*function getHomePageVideo()
{
	var img_src=$('#img_url').val();
	//console.log("Image URL:"+img_src);
	var video_title1=$('#video_title').val();
	var video_url1=$('#video_url').val();
	var videoThumbNail_url1=$('#videoThumbNail_url').val();
	//console.log("Video Title:"+video_title1+"::Video Image URL::"+videoThumbNail_url1+" ::Video URL::"+video_url1);
	//console.log("coming inside video part");
	//console.log("Received Details:"+video_title1+" ------ "+videoThumbNail_url1+" ------- "+video_url1)	
	if($(".banner a img").length>0)
	{
	if(($('#video_url').val()!=null) || ($('#videoThumbNail_url').val()!=null)||($('#video_title').val()!=null))
	{
		
		$(".banner a").attr("href","#").click(function(){
			$("#backgroundPopup").width($(document).width()).height($(document).height()).css("top","0px").css("left","0px").css("position","fixed").show();
			$(".homepagevideo").fadeIn('fast');
		});

		
		var htmlStr="<div class=\"lookbook_popup popup_pos kgpopup_act homepagevideo\" style=\"display:none; position: fixed; \"><div class=\"login_popup_close popup_close_act\"id=\"video_close_popup_home\">";

		htmlStr+="</div><div class=\"vedio_holder\"><img id=\"homeVideoImage\" src="+videoThumbNail_url1+" width=\"650\" height=\"370\" border=\"0\"></div>";

		htmlStr+="<span id=\"lb_name\">"+video_title1+"</span><div class=\"clear_both\"></div></div>";


		$(htmlStr).appendTo("body");
		
		$("#homeVideoImage").click(function(){
			
			
			//$("<iframe id=\"player\" style=\"z-index:-5000;\"width=\"650\" height=\"370\" src=\"http://www.youtube.com/embed/r7uAkyEbpzI\"></iframe>").appendTo($(this).parent());
			$("<iframe id=\"player\" style=\"z-index:-5000;\"width=\"650\" height=\"370\" src="+video_url1+"></iframe>").appendTo($(this).parent());
					   $(this).fadeOut('fast');
					 });

		$("#video_close_popup_home").click(function(){
		$("#homeVideoImage").fadeIn("fast");
		$("#player").remove();
		$(".homepagevideo").fadeOut('fast');
		$("#backgroundPopup").fadeOut('fast');
		});
		}
	}*/
	/*if($(".banner a img").length>0)
	{
		$(".banner a").attr("href","#").click(function(){
			$("#backgroundPopup").width($(document).width()).height($(document).height()).css("top","0px").css("left","0px").css("position","fixed").show();
			$(".homepagevideo").fadeIn('fast');
		});
		
	} */


///line 973

$(document).keydown(function(e){
		var code = (e.keyCode ? e.keyCode : e.which);
	    if (code === 27) {
	    	if($('.fb_sale_popup').css('display')=='block')
			{
				$('.fb_sale_popup').fadeOut('fast');
				$('#backgroundPopup').fadeOut('slow');
			}
	    	$(".kgpopup_act:visible").each(function(){
	    		if($(this).find(".custom_dropdown ul:visible").length>0)
    			{
    				$(this).find(".custom_dropdown ul:visible").hide();
    				return false;
    			}
	    		else
    			{
    			if(($('.black_fridaypopup_two').css('display')=='none') && ($('.geton_two').css('display')=='none')){
    				//alert("coming 2");
    				$(this).fadeOut('fast');
    				$('#backgroundPopup').fadeOut('slow');
    			}
				$(".vedio_holder").html("<video preload='none'>");
				if($(this).hasClass("homepagevideo"))
				{
					$("#homeVideoImage").fadeIn("fast");
					$("#player").remove();
				}
				
				return false;
    			}
	    		
	    		$('#fbErrorMsg').removeClass('fberror');
				$('#fbErrorMsg').hide();
	    	});
	    	$('.tipsy-inner, .tipsy-arrow').hide();
	    	
	    	//$(".kgpopup_act:visible").fadeOut('fast');
	    	//$('#backgroundPopup').fadeOut('slow');
	    	//$(".custom_dropdown ul:visible").hide();
	    	//$("ul[id|='searchText_']:visible").hide();
		}
	    if(code === 13)
	    	$('.tipsy-inner, .tipsy-arrow').hide();
		
	});
	
	/*$('.inputspan_txt').click(function() {
		console.info("hi coming");
		$('.inputspan_txt').hide();
		$('.inputbox_final').focus();
	});
	
	$('.inputspan_pwd').click(function() {
		console.info("hi coming pwd");
		$('.inputspan_pwd').hide();
		$('.inputbox_final_pwd').focus();
	});

	$('.inputbox_final').die('focus').live("focus",function()
			{
				$('.inputspan_txt').hide();
			});
	
	$('.inputbox_final_pwd').die('focus').live("focus",function()
			{
				$('.inputspan_pwd').hide();
			});
	$('.inputbox_final').die('blur').live("blur",function()
			{
				if(($('#email_login_new').val()=='')&&($('#create_email').val()=='')&&($('#email_login_sale').val()=='')&&($('#email_login_wishList').val()==''))
					{
						$('.inputspan_txt').show();
					}
				else if($('#create_email').val()=='')
					{
						$('.inputspan_txt').show();
					}
				else if($('#email_login_sale').val()=='')
					{
						$('.inputspan_txt').show();
					}
			});
	$('.inputbox_final_pwd').die('blur').live("blur",function()
			{
				if(($('#pass_new').val()=='')&&($('#create_pass').val()=='')&&($('#pass_sale').val()=='')&&($('#pass_wishList').val()==''))
					{
						$('.inputspan_pwd').show();
					}
			});*/
