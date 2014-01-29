var fileName;
var currentFileId;
var id;
$(document).ready(function()
{
	//console.log(" footer page is  loading .... ");
	$.ajaxSetup({async:false});
//	$.getJSON('http://graph.facebook.com/solestruck',
//	        function(data){
//	    $('#fb_like_count').text(addCommas(data.likes));
//	});
	
	var resetpasswordfrommail=$("#resetpasswordfrommail").val(); 
	var emailId=$("#emailId").val();
	var instantEmail=$('#instantEmail').val();
	var accountActivate=$('#accountAccount').val();
	//console.log(" instantEmail: "+instantEmail);
	var myaccount = $('#myaccount').val();
	//console.log("resetpasswordfrommail is --------->>>>>>>> " +resetpasswordfrommail);
	//console.log("emailId is --------->>>>>>>> " +emailId);
	//console.log("emailId "+emailId+" accountActivate "+accountActivate);
	//console.log(accountActivate=='ActivateAccount');
	 if(resetpasswordfrommail=="true")
	 	{	
		 	$.ajax({url:'/isresetPasswordFlag.htm',cache:false,data:({"email":emailId}),success:function(resetPasswordFlag)
				{
		 			if(resetPasswordFlag==true)
		 				{
			 				//console.log("Reset Password PopUp is Showing Now");
			 				$('#backgroundPopup').show();
							$('.reset_password_form').fadeIn();
							$('#email').val(emailId);
		 				
		 				}
		 			else
		 				{
		 					//console.log("You Allready Registered with Reset Password.Please Try Again to Reset!");
			 				$('#backgroundPopup').show();
							$('.reset_password_form').fadeIn();
		 					$('#regResetPass').hide();
		 					//$('#allreadyRegResetPass').show();
		 					$("#allreadyRegResetPass").removeClass("dn");
		 				}
					 	
				}});
		 }
		 else if(accountActivate=='ActivateAccount')
		 {
			    //console.log(' inside else condition ');
			    $('#backgroundPopup').show();
				$('.reset_password_form').fadeIn();
				$('#heading_popup').html('Activate Account');
				$('#registerToChangePassword').attr('value','Activate Account');
				$('#lbl_reset_pwd').text("Password:");
				$('#email').val(emailId);
		 }
	 
	 if(instantEmail=='true')
	 {
			$('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
			$('.emailus_popup').fadeIn();
			instantEmail="false";
	 }
	 
	 if(myaccount=='true')
	 {
		 $('#backgroundPopup').fadeIn().width($(document).width()).height($(document).height()).css('left','0px').css('position','fixed');
		 $('.login_form').fadeIn();
	 }
	 
	 
	 $("#subscribeEmail").keyup(function(e){
		 
		 var code = (e.keyCode ? e.keyCode : e.which);
		 
		 if (code === 13) {//this for enter key
		    	
			 subscribeEmailFunction();
		    	
			}
		 else
			 {
			
				 if($(".email_input_box").hasClass("email_input_box_error")){
					 $(".email_input_box").removeClass("email_input_box_error");
						$(".email_send_btn").removeClass("email_send_btn_error");
				 }
			 	
			 }
		 
		 
	 }); 
	 
	 
	 
	 //commented by iri
	//Upload Attachment

//	$("input[id^='file_']").unbind("change").bind('change',onEmailUsFileChange);
//	
	
//	$("code[id^='removefile_']").die("click").live("click",function(){
//		var htmlStr="";
//		currentFileId = $(this).attr("id").charAt($(this).attr("id").length-1);
//		var brwse_btn = $(this).parent().attr("class");
//		
//		$("#file_"+currentFileId).parent().remove();
//		
//		//deletedIds.push(currentFileId);
//		
//		if($(".browse_btn:last").find("span[class='image_file']").text()!='' && $(".browse_btn:last").find("span[class='image_file']").text()!='Click To Attach File')
//			$(".browse_btn:last").remove();
//		//alert("after if condn");
//		var bool=false;
//		for(var i=0;i<=5;i++)
//		{
//			if($(".image_file"+i).text()=='Click To Attach File')
//				bool=true;
//		}
//		if(!bool)
//			$("#emailUs_send").before("<div class='browse_btn'><input id='file_"+currentFileId+"' name='myFile"+currentFileId+"' type='file' value='Attach Files'/><span class='image_file"+currentFileId+"' onclick="+'$("#file_'+currentFileId+'").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
//		$('#file_'+currentFileId).bind('change',onEmailUsFileChange);
//	});
	
	 
	 
	// Code For Email Us Feature by IRI

//	 if(navigator.appName == 'Microsoft Internet Explorer')
//	 {
//	 	console.log("inside for ie less than 10");
//	 	$('.browse_btn').show();
//	 	$('.emailus_popup').find('#emailus_form_popup form').find('.browse_btn span a').text("Click To Attach files");
//	 	$('.emailus_popup').find('#emailus_form_popup form').find('.browse_btn input').show();
//	 }
//	 else
//	 {
	 	console.log("inside else");
	 	$('.emailus_popup').find('#emailus_form_popup form').find('.browse_btn').show();
	 	$('.emailus_popup').find('#emailus_form_popup form').find('.browse_btn span a').text("Click to attach Files");
		$('.emailus_popup').find('#emailus_form_popup form div#multiple_select').show();
		$('.emailus_popup').find('#emailus_form_popup form').find('.browse_btn input').replaceWith("<input id=\"file_1\" style=\"display:block;\" name=\"myFile1\" type=\"file\" value=\"Attach Files\"  name=\"files[]\" multiple accept='image/*'/>");
//	 }

//	 if(navigator.appName != 'Microsoft Internet Explorer')
//	 {
		$('.emailus_popup').find('#emailus_form_popup form').find('.browse_btn input').die("change").live("change",function(event){
		 console.log("inside the the on change function");
			selectMultipleImages(event);
		});
		
		
		$(document).keyup(function(e){
			
			if($("#emailUs_send").is("focus"))
			{
				 var code	=	(e.keyCode ? e.keyCode : e.which);
				 
			     if(code === 13) 
			     {
			    	 $('#emailUs_send').trigger("click");
			     }
			}	
			
		});
		
//	 }
//	 else
//	 {
//		 $('.emailus_popup').find('#emailus_form_popup form').find('.browse_btn span a').die("change").live("change",function(event)
//				 {
//			 	console.log("inside the on change function for IE");
//			 	selectSingleImage(event);
//				 });
//	 }
	 
}); // Document.ready

// Email Us browser detection by IRI

var BrowserDetect = {

		init: function () {

		this.browser = this.searchString(this.dataBrowser) || "An unknown browser";

		this.version = this.searchVersion(navigator.userAgent)

		|| this.searchVersion(navigator.appVersion)

		|| "an unknown version";

		this.OS = this.searchString(this.dataOS) || "an unknown OS";

		},

		searchString: function (data) {

		for (var i=0;i<data.length;i++)	{

		var dataString = data[i].string;

		var dataProp = data[i].prop;

		this.versionSearchString = data[i].versionSearch || data[i].identity;

		if (dataString) {

		if (dataString.indexOf(data[i].subString) != -1)

		return data[i].identity;

		}

		else if (dataProp)

		return data[i].identity;

		}

		},

		searchVersion: function (dataString) {

		var index = dataString.indexOf(this.versionSearchString);

		if (index == -1) return;

		return parseFloat(dataString.substring(index+this.versionSearchString.length+1));

		},

		dataBrowser: [

		{

		string: navigator.userAgent,

		subString: "Chrome",

		identity: "Chrome"

		},

		{ string: navigator.userAgent,

		subString: "OmniWeb",

		versionSearch: "OmniWeb/",

		identity: "OmniWeb"

		},

		{

		string: navigator.vendor,

		subString: "Apple",

		identity: "Safari",

		versionSearch: "Version"

		},

		{

		prop: window.opera,

		identity: "Opera",

		versionSearch: "Version"

		},

		{

		string: navigator.vendor,

		subString: "iCab",

		identity: "iCab"

		},

		{

		string: navigator.vendor,

		subString: "KDE",

		identity: "Konqueror"

		},

		{

		string: navigator.userAgent,

		subString: "Firefox",

		identity: "Firefox"

		},

		{

		string: navigator.vendor,

		subString: "Camino",

		identity: "Camino"

		},

		{	 // for newer Netscapes (6+)

		string: navigator.userAgent,

		subString: "Netscape",

		identity: "Netscape"

		},

		{

		string: navigator.userAgent,

		subString: "MSIE",

		identity: "Explorer",

		versionSearch: "MSIE"

		},

		{

		string: navigator.userAgent,

		subString: "Gecko",

		identity: "Mozilla",

		versionSearch: "rv"

		},

		{ // for older Netscapes (4-)

		string: navigator.userAgent,

		subString: "Mozilla",

		identity: "Netscape",

		versionSearch: "Mozilla"

		}

		],

		dataOS : [

		{

		string: navigator.platform,

		subString: "Win",

		identity: "Windows"

		},

		{

		string: navigator.platform,

		subString: "Mac",

		identity: "Mac"

		},

		{

		  string: navigator.userAgent,

		  subString: "iPhone",

		  identity: "iPhone/iPod"

		    },

		{

		  string: navigator.userAgent,

		  subString: "iPad",

		  identity: "iPad"

		    },

		{

		string: navigator.platform,

		subString: "Linux",

		identity: "Linux"

		}

		]

		};

		BrowserDetect.init();

// Code for Bulk uploads - Email - Us by IRI

function selectMultipleImages(event)
{
	 $(".browse_btn").hide();
	 $("#emailUs_send").html('<code class="sender"></code> PLEASE WAIT');
	
	 $('.emailus_popup_act').find(".dont_see_your_size_popup_holder form i#alertForAttachment").text("");
	
	 $(".sender").show().queue(function(n){
		 
		 	var imageFiles				= event.target.files;
			
			var singleImage				= {};
			var singleImageDetails		= {};
			
			if($.isEmptyObject(imageObject))
				$('#show_selected_images').html("");
			
			console.log("inside the log --> "+imageFiles.length)
			
			if(imageFiles.length <= 5)
			{
				if(window.FileReader)
				{
					for (var i = 0, f; f = imageFiles[i]; i++) 
					{
						var reader 				=   new FileReader();
						
						reader.onloadend 		=	(function(theFile) {
							
														console.log(theFile);
														
														return function (e) {
															
															if(theFile.size <= 7054691)
															{
																jQuery._uuidlet	 = (((1+Math.random())*0x10000)|0).toString(16).substring(1)+Date.now();
																
																var key					=	jQuery._uuidlet;
																
																singleImage				=	{};
																singleImageDetails		=	{};
																
																singleImage["name"]		=	theFile.name;
																singleImage["size"]		=   theFile.size;
																singleImage["type"]		=   theFile.type;
																
																singleImageDetails["name"]		=	theFile.name;
																singleImageDetails["size"]		=   theFile.size;
																singleImageDetails["type"]		=   theFile.type;
																
																imageObject[key]		=	$.extend({},singleImageDetails);
																
																singleImage["data"]		=	e.target.result;
																
																$('#show_selected_images').append('<div class="attachments'+key+'" style="margin-top: 5px;margin-bottom: 5px;float: left;width:375px;"><img class="thumbnail_style" style="height: 40px;float: left;border-radius: 6px;padding: 4px;box-shadow: 0px 0px 3px 0px #0f0f0f;" src="" /><span style="margin-left: 10px;margin-top: 2px;float: left;position:absolute;">'+theFile.name+'</span><span style="margin-right: 5px;margin-top: 2px;color: #C6B8B8;font-weight: 900;font-size: 13px;cursor:pointer;float: right;margin-left: 383px;position:absolute;"" id="'+key+'" onclick="removeAttachment(this);">X</span></div>').queue(function(next){
																	
																$(".attachments"+key).find("img.thumbnail_style").attr("src",singleImage["data"]);
																	
																		$.ajax({
																	    	   url 		:	"http://12.solestruck-search.appspot.com/storeImage",
																	    	   type 	:	"POST",
																	    	   async	:	true,
																	    	   dataType	:	"json",
																	    	   crossDomain: true,
																	    	   data		:	{key:key,singleImage:JSON.stringify(singleImage),mode:"add"},
																	    	   success  :	function()
																				    	    {
																	    		   				console.log("inside the success function");
																								$(".browse_btn").show();
																								$("#emailUs_send").html('<code class="sender"></code> SEND');
																								$(".sender").hide();
																				    	    },
																			   error	:	function()
																			   				{
																								$(".browse_btn").show();
																								$("#emailUs_send").find('<code class="sender"></code> SEND');
																								$(".sender").hide();
																			   				}
																	    	   
																		});
																
																
//																		var fd = new FormData();
//																		fd.append('file',theFile);
//																		fd.append("key",key);
//																		fd.append("mode","add");
//																		var xhr = new XMLHttpRequest();
//																		xhr.open('POST', 'http://12.solestruck-search.appspot.com/storeImage', true);
//																		xhr.onreadystatechange=function()
//																		  {
//																		  if (xhr.readyState==4 && xhr.status==200)
//																		    {
//																			  $(".browse_btn").show();
//																				$("#emailUs_send").find('<code class="sender"></code> SEND');
//																				$(".sender").hide();
//																		    }
//																		  }
//																		
//																		xhr.send(fd);
//																		
//																		console.log(xhr)
																	
																	
																	next();	 
																	
																}); 
																	
															}
															else
															{
																console.log("inside the else part");
																$(".browse_btn").show();
																$("#emailUs_send").find('<code class="sender"></code> SEND');
																$(".sender").hide();
																$('.emailus_popup_act').find(".dont_see_your_size_popup_holder form i#alertForAttachment").text("Uh-oh! Your attachment is larger than 7MB and can't be accepted. Please submit a smaller file.")
															}
															
														};
							
														
														
												  	})(f);
					
						reader.readAsDataURL(f);
					}
				}
				else
				{
					console.log("Internet Explorer");
					
					singleImage["name"]		=	theFile.name;
					singleImage["size"]		=   theFile.size;
					singleImage["type"]		=   theFile.type;
					
					singleImage["data"]		=	e.target.files;
					
					
					$.ajax({
				    	   url 		:	"/storeImages.htm",
				    	   type 	:	"POST",
				    	   dataType	:	'jsonp',
				    	   data		:	{key:key,singleImage:JSON.stringify(singleImage),mode:"add"},
				    	   success  :	function()
							    	    {
				    		   				$(".popup_processing_icon").hide();
							    	    }
				    	   
					});
					
				}
				
					
						
					 
					
					$(".pro_mag").fadeIn();
			}
			else
			{
			     $(".loader").hide();
				 $("#alertForAttachment").text("Please attach only 5 files");
			}	
			
//			$(".loader").hide();
			
			
			n();
		 
	 });
	
	
	
}

// For removing email-Us attachments by IRI

function removeAttachment(obj)
{
	var index		=	$(obj).attr("id");
	
	$(".attachments"+index).remove();
	
	delete imageObject[index];
	
	$.ajax({
 	   url 		:	"http://12.solestruck-search.appspot.com/storeImage",
 	   type 	:	"POST",
 	  crossDomain: true,
 	   data		:	{key:index,mode:"remove"},
 	   success  :	function()
			    	    {
 		   
			    	    }
 	   
	});
}

// For sending email Us by IRI

$('#emailUs_send').click(function(){ 
	
	console.log("for clearing"); 
	
	$(".sender").show();
	
	if(validateEmail_emailUs()) 
	{ 
		var mailDetials				=	{};
		
		var prop 					= 	{};
		
		prop.OS     				= 	BrowserDetect.OS;
		prop.browser				=	BrowserDetect.browser;
		prop.version	 			=	BrowserDetect.version;
		
		mailDetials["sysProp"]		=	prop;
		
		prop						=	{};
		
		
		prop.emailID  	 			=   $('#emailUsId').val();
		prop.subject   				=	$('#help').val();
		prop.orderNO				=	$('#order_number').val();
		
		mailDetials["mailProp"]		=	prop;
		
		if(!$.isEmptyObject(imageObject))
		{
			console.log("inside if condtion")

			mailDetials["attachments"]	=	imageObject;
		}
		$('.emailus_popup_act').hide();
		$('.email_popup_success_act').show();

		$.ajax({ 
			
			url			:	"/sendEmailToUs.htm",
			type		:	"POST",
			cache       :   false,
			data		:	{mailDetials:JSON.stringify(mailDetials)},
			success		:	function()
			{
			
			}
		});
		
	}
	
	
	$(".sender").hide();
		
});


//function selectSingleImage(e)
//{
//	$("#alertForAttachment").text("");
//	var flag =false;
////	console.log("Target file: "+e.target.files);
////	console.log(navigator.appName);
////	console.log(e.target.value);
//	var files;
//	if(navigator.appName == 'Microsoft Internet Explorer')
//	{
//		files = e.target.files;
//		fileToUpload = files;
//	}
//	else
//	{
//		files = e.target.files || e.dataTransfer.files;
//		fileToUpload = files[0];
//		
//	}
//		
//		 id = (e.target.id).charAt((e.target.id).length-1);
//		 //if(id==undefined)
//			// fileName=$("input[id^='file_']").val();
//		 if(currentFileId!=undefined && currentFileId==id)
//		 {
//			 fileName=$("#file_"+currentFileId).val();
//			 flag = true;
//		 }
//		 else
//		 {
//			 fileName=$("#file_"+id).val();
//		 }	 
//		 fileName=fileName.substring(fileName.lastIndexOf('\\')+1,fileName.length);
//		 var pattern=/jpg|png|gif|tiff|bmp|BMP|TIFF|JPG|PNG|GIF/g;
//		 //if(id==undefined)
//			// id = $("input[id^='file_']").attr("id").charAt($("input[id^='file_']").attr("id").length-1);
//		 if(currentFileId==undefined)
//			 id = $("#file_"+id).attr("id").charAt($("#file_"+id).attr("id").length-1);
//		 else
//			 id=$(this).attr("id").charAt($(this).attr("id").length-1);
//		 if(pattern.test(fileName))
//		 {
//			 if(!flag)
//			 {
//				 if($(".image_file"+id).text()=='Click To Attach File' || $(".image_file"+id).text()=='Attach Another File')
//				 {
//					 $(".image_file"+id).text(fileName);
//					 $(".image_file"+id).after("<code class='email_remove' id='removefile_"+id+"'></code>");
//					 id=parseInt(id)+1;
//					 var filesLen = $("input[name^='myFile']");
//						if(filesLen.length<5)
//						{
//							$(".browse_btn:last").after("<div class='browse_btn'><input id='file_"+id+"' name='myFile"+id+"' type='file' value='Attach Files'/><span class='image_file"+id+"' onclick="+'$("#file_'+id+'").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
//							$('#file_'+id).unbind("change").bind('change',onEmailUsFileChange);
//						}
//				 }
//				else
//				{
//					$(".image_file"+id).text(fileName);
//				}		
//			 }
//			 else
//			 {
//				 $(".image_file"+currentFileId).text(fileName);
//				 $(".image_file"+currentFileId).after("<code class='email_remove' id='removefile_"+currentFileId+"'></code>");
//				 flag=false;
//				 var filesLen = $("input[name^='myFile']");
//				 id=filesLen.length;
//				 id=parseInt(id)+1;
//				 currentFileId = undefined;
//				 var filesLen = $("input[name^='myFile']");
//					if(filesLen.length<5)
//					{
//						$(".browse_btn:last").after("<div class='browse_btn'><input id='file_"+id+"' name='myFile"+id+"' type='file' value='Attach Files'/><span class='image_file"+id+"' onclick="+'$("#file_'+id+'").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
//						$('#file_'+id).unbind("change").bind('change',onEmailUsFileChange);
//					}
//			 }
//			
//		 }
//		 else
//		 {
//			 $("#alertForAttachment").text("Please upload Image Files");
//		 } 
//	 
//	
//	
//}
//commented by iri

//$(document).keydown(function(e){
//	if($(".emailus_popup_act").is(":visible") && !$("#help").is(":focus"))
//	{
//		//alert("popup is displaying");
//		var code = (e.keyCode ? e.keyCode : e.which);
//		if(code==13)
//		{
//			emailUsDetails();
//		}
//	}
//});

//commented by iri

//function onEmailUsFileChange(e)
//{
//	$("#alertForAttachment").text("");
//	var flag =false;
////	console.log("Target file: "+e.target.files);
////	console.log(navigator.appName);
////	console.log(e.target.value);
//	var files;
//	if(navigator.appName == 'Microsoft Internet Explorer')
//	{
//		files = e.target.files;
//		fileToUpload = files;
//	}
//	else
//	{
//		files = e.target.files || e.dataTransfer.files;
//		fileToUpload = files[0];
//		
//	}
//	 if(navigator.appName != 'Microsoft Internet Explorer')
//	 {
//		
//		 if(fileToUpload.size<=8388608)
//		 {
//			
//			 id = (e.target.id).charAt((e.target.id).length-1);
//			 //if(id==undefined)
//				// fileName=$("input[id^='file_']").val();
//			 if(currentFileId!=undefined && currentFileId==id)
//			 {
//				 fileName=$("#file_"+currentFileId).val();
//				 flag = true;
//			 }
//			 else
//			 {
//				 fileName=$("#file_"+id).val();
//			 }	 
//			 fileName=fileName.substring(fileName.lastIndexOf('\\')+1,fileName.length);
//			
//			 var pattern=/jpg|png|gif|tiff|bmp|BMP|TIFF|JPG|PNG|GIF/g; 
//			 //if(id==undefined)
//				// id = $("input[id^='file_']").attr("id").charAt($("input[id^='file_']").attr("id").length-1);
//			 if(currentFileId==undefined)
//				 id = $("#file_"+id).attr("id").charAt($("#file_"+id).attr("id").length-1);
//			 else
//				 id=$(this).attr("id").charAt($(this).attr("id").length-1);
//			 if(pattern.test(fileName))
//			 {
//				 if(!flag)
//				 {
//					
//					 if($(".image_file"+id).text()=='Click To Attach File' || $(".image_file"+id).text()=='Attach Another File')
//					 {
//						 
//						 $(".image_file"+id).text(fileName);
//						 $(".image_file"+id).after("<code class='email_remove' id='removefile_"+id+"'></code>");
//						 id=parseInt(id)+1;
//						 var filesLen = $("input[name^='myFile']");
//							if(filesLen.length<5)
//							{
//								$(".browse_btn:last").after("<div class='browse_btn'><input id='file_"+id+"' name='myFile"+id+"' type='file' value='Attach Files'/><span class='image_file"+id+"' onclick="+'$("#file_'+id+'").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
//								$('#file_'+id).unbind("change").bind('change',onEmailUsFileChange);
//							}
//					 }
//					else
//					{
//						
//						$(".image_file"+id).text(fileName);
//					}		
//				 }
//				 else
//				 {
//					
//					 $(".image_file"+currentFileId).text(fileName);
//					 $(".image_file"+currentFileId).after("<code class='email_remove' id='removefile_"+currentFileId+"'></code>");
//					 flag=false;
//					 var filesLen = $("input[name^='myFile']");
//					 id=filesLen.length;
//					 id=parseInt(id)+1;
//					 currentFileId = undefined;
//					 var filesLen = $("input[name^='myFile']");
//						if(filesLen.length<5)
//						{
//							$(".browse_btn:last").after("<div class='browse_btn'><input id='file_"+id+"' name='myFile"+id+"' type='file' value='Attach Files'/><span class='image_file"+id+"' onclick="+'$("#file_'+id+'").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
//							$('#file_'+id).unbind("change").bind('change',onEmailUsFileChange);
//						}
//				 }
//				
//			 }
//			 else
//			 {
//				 $("#alertForAttachment").text("Please upload Image Files");
//			 } 
//		 
//		 }
//		 else
//		 {
//			 $("#alertForAttachment").text("Uh-oh! Your attachment is larger than 7MB and can't be accepted. Please submit a smaller file.");
//		 }
//	 }
//	 else
//	 {
//		
//		 id = (e.target.id).charAt((e.target.id).length-1);
//		 //if(id==undefined)
//			// fileName=$("input[id^='file_']").val();
//		 if(currentFileId!=undefined && currentFileId==id)
//		 {
//			 fileName=$("#file_"+currentFileId).val();
//			 flag = true;
//		 }
//		 else
//		 {
//			 fileName=$("#file_"+id).val();
//		 }	 
//		 fileName=fileName.substring(fileName.lastIndexOf('\\')+1,fileName.length);
//		 var pattern=/jpg|png|gif|tiff|bmp|BMP|TIFF|JPG|PNG|GIF/g;
//		 //if(id==undefined)
//			// id = $("input[id^='file_']").attr("id").charAt($("input[id^='file_']").attr("id").length-1);
//		 if(currentFileId==undefined)
//			 id = $("#file_"+id).attr("id").charAt($("#file_"+id).attr("id").length-1);
//		 else
//			 id=$(this).attr("id").charAt($(this).attr("id").length-1);
//		 if(pattern.test(fileName))
//		 {
//			 if(!flag)
//			 {
//				 if($(".image_file"+id).text()=='Click To Attach File' || $(".image_file"+id).text()=='Attach Another File')
//				 {
//					 $(".image_file"+id).text(fileName);
//					 $(".image_file"+id).after("<code class='email_remove' id='removefile_"+id+"'></code>");
//					 id=parseInt(id)+1;
//					 var filesLen = $("input[name^='myFile']");
//						if(filesLen.length<5)
//						{
//							$(".browse_btn:last").after("<div class='browse_btn'><input id='file_"+id+"' name='myFile"+id+"' type='file' value='Attach Files'/><span class='image_file"+id+"' onclick="+'$("#file_'+id+'").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
//							$('#file_'+id).unbind("change").bind('change',onEmailUsFileChange);
//						}
//				 }
//				else
//				{
//					$(".image_file"+id).text(fileName);
//				}		
//			 }
//			 else
//			 {
//				 $(".image_file"+currentFileId).text(fileName);
//				 $(".image_file"+currentFileId).after("<code class='email_remove' id='removefile_"+currentFileId+"'></code>");
//				 flag=false;
//				 var filesLen = $("input[name^='myFile']");
//				 id=filesLen.length;
//				 id=parseInt(id)+1;
//				 currentFileId = undefined;
//				 var filesLen = $("input[name^='myFile']");
//					if(filesLen.length<5)
//					{
//						$(".browse_btn:last").after("<div class='browse_btn'><input id='file_"+id+"' name='myFile"+id+"' type='file' value='Attach Files'/><span class='image_file"+id+"' onclick="+'$("#file_'+id+'").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
//						$('#file_'+id).unbind("change").bind('change',onEmailUsFileChange);
//					}
//			 }
//			
//		 }
//		 else
//		 {
//			 $("#alertForAttachment").text("Please upload Image Files");
//		 } 
//	 }
//	 
//	
//	
//}

var cameFromLoginOrWishList="false";/*This variable is to retain the login or wishlist popup if email us link is clicked from login popup*/
function loadContent(field)
{

  //var elem = $("'#"+field+"'").val($(this).html());
  //alert("elem chosen = " + field);
  var url="/loadCustomerServicePage.htm?page="+field;
  location.href=url;

}
function hideLoginAndOpenEmailUs()
{
	
	cameFromLoginOrWishList="login";
	$('.login_form').hide();
	$("#emailUsDiv").fadeIn();
}
function hideWishListPopupAndOpenEmailUs()
{
	
	cameFromLoginOrWishList="wishList";
	$('.wish_list_form').hide();
	$("#emailUsDiv").fadeIn();
}

function goToRegistration()
{
	var url="/loadRegistration.htm";
	location.href=url;
}

function validateEmail()
{

try {
 	if ($("#subscribeEmail").val() != ""){
  			if(emailValidator('#subscribeEmail', 'We Need A Valid Email Address'))
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
	 // alert("Please fill in any Email ID");
	  $('#subscribeEmail').focus();
	  return false;
	  }
 	}
 	catch( e )
 	{
 		$("#subscribeEmail").val(e);
 	}

}
function subscribeEmailFunction()
{
var emailaddress = $("#subscribeEmail").val();
if(validateEmail())
	{
		$.getJSON("/subscribeEmail.htm",{"emailaddress":emailaddress},function(data)
		{
			$("#subscribeEmail").val("");
			$(".email_input_container").hide();
			$(".email_recived_notification").show();
			setTimeout(function(){
				$(".email_recived_notification").hide();
				$(".email_input_container").show();
				$(".email_input_box").removeClass("email_input_box_error");
				$(".email_send_btn").removeClass("email_send_btn_error");
				$("#subscribeEmail").val("Your E-Mail Address");
			},2500);
		});
	}
else
	{
		$(".email_input_box").addClass("email_input_box_error");
		$(".email_send_btn").addClass("email_send_btn_error");
	}
}

function emailValidator(elem, helperMsg){
	var emailExp = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if($(elem).val().match(emailExp)){
		return true;
	}else{
		$(elem).val(helperMsg);
		
		$(elem).focus();
		return false;
	}
}




function validateEmail_emailUs()
{

try {
 	if ($("#emailUsId").val() != ""){
  			if(emailValidatorEmailUs(document.getElementById('emailUsId'), 'Not a Valid Email'))
  			{
  				$('#alert').hide();
  				$("#emailUsId").removeClass("error_input_field");
  				return true;
  			}	
  			else
  			{
  				return false;
  			}
  		}
	  else {
	 //alert("Please fill in any Email ID");
	 $("#emailUsId").addClass("error_input_field");
	 $('#emailUsId').attr('placeholder','Please fill in any Email ID');
	 $(".popup_processing_icon").css("display","none");
	 /*$('#alert').text("Please fill in any Email ID");
	 $('#emailUsId').focus();
	 $('#alertHelp').text("");*/
   	 return false;
	  }
 	}
 	catch( e )
 	{
 		alert(e);
 	}

}


//commented by iri

//function emailUsDetails()
//{
//	//$("#emailUs_send").addClass('popup_processing_btn');
//	$(".popup_processing_icon").css('display','block');
//	var emailId=$("#emailUsId").val();
//	var help=$("#help").val().replace(/"/g, "\'");
//	var order_number=$("#order_number").val();
//	var nVer = navigator.appVersion;
//	var nAgt = navigator.userAgent;
//	var browserName  = '';
//	var fullVersion  = 0; 
//	var majorVersion = 0;
//
//	if ((verOffset=nAgt.indexOf("Trident"))!=-1) {
//		 browserName  = "Microsoft Internet Explorer";
//		 fullVersion  = jQuery.browser.version;
//		 majorVersion = parseInt(''+fullVersion);
//		}
//	
//	// In Internet Explorer, the true version is after "MSIE" in userAgent
//	if ((verOffset=nAgt.indexOf("MSIE/"))!=-1) {
//	 browserName  = "Microsoft Internet Explorer";
//	 fullVersion  = jQuery.browser.version;
//	 majorVersion = parseInt(''+fullVersion);
//	}
//
//	// In Opera, the true version is after "Opera" 
//	else if ((verOffset=nAgt.indexOf("Opera/"))!=-1) {
//	 browserName  = "Microsoft Internet Explorer";
//	 fullVersion  = jQuery.browser.version;
//	 majorVersion = parseInt(''+fullVersion);
//	}
//	
//	else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
//		 browserName  = "Google Chrome";
//		 fullVersion  = parseFloat(nAgt.substring(verOffset+7));
//		 majorVersion = parseInt(''+fullVersion);
//		}
//	
//	else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
//		 browserName  = "Safari";
//		 fullVersion  = parseFloat(nAgt.substring(verOffset+7));
//		 majorVersion = parseInt(''+fullVersion);
//		}
//	
//	// In most other browsers, "name/version" is at the end of userAgent 
//	else if( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ) 
//	{
//	 browserName  = nAgt.substring(nameOffset,verOffset);
//	 fullVersion  = parseFloat(nAgt.substring(verOffset+1));
//	 if (!isNaN(fullVersion)) majorVersion = parseInt(''+fullVersion);
//	 else {fullVersion  = 0; majorVersion = 0;}
//	}
//
//	// Finally, if no name and/or no version detected from userAgent...
//	if (browserName.toLowerCase() == browserName.toUpperCase() || fullVersion==0 || majorVersion == 0 )
//	{
//	 browserName  = navigator.appName;
//	 fullVersion  = parseFloat(nVer);
//	 majorVersion = parseInt(nVer);
//	}
//	
//	var OSName="Unknown OS";
//	if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
//	if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
//	if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
//	if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
//	
//	//console.log("browserName: "+browserName+" fullVersion: "+fullVersion+" majorVersion: "+majorVersion+" os: "+OSName+" browser version: "+jQuery.browser.version);
//	var det="";
//	if(isMobileDevice())
//	{
//		//console.log("name of the device: "+navigator.userAgent);
////		if ((verOffset=nAgt.indexOf("AppleWebKit"))!=-1) {
////			 browserName  = "AppleWebKit";
////			 fullVersion  = parseFloat(nAgt.substring(verOffset+5));
////			 majorVersion = parseInt(''+fullVersion);
////			}
//
//			// In Opera, the true version is after "Opera" 
//			
//			if ((verOffset=nAgt.indexOf("CriOS"))!=-1) {
//				 browserName  = "Google Chrome";
//				 fullVersion  = parseFloat(nAgt.substring(verOffset+6));
//				 majorVersion = parseInt(''+fullVersion);
//				}
//			
//			else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
//				 browserName  = "Safari";
//				 fullVersion  = parseFloat(nAgt.substring(verOffset+7));
//				 majorVersion = parseInt(''+fullVersion);
//				}
//			else if ((verOffset=nAgt.indexOf("Version"))!=-1) {
//				 browserName  = "Version";
//				 fullVersion  = parseFloat(nAgt.substring(verOffset+8));
//				 majorVersion = parseInt(''+fullVersion);
//				}
//			else if ((verOffset=nAgt.indexOf("Mobile"))!=-1) {
//				 browserName  = "Mobile";
//				 fullVersion  = parseFloat(nAgt.substring(verOffset+6));
//				 majorVersion = parseInt(''+fullVersion);
//				}
//				
//
//			// In most other browsers, "name/version" is at the end of userAgent 
//			else if( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ) 
//			{
//			 browserName  = nAgt.substring(nameOffset,verOffset);
//			 fullVersion  = parseFloat(nAgt.substring(verOffset+1));
//			 if (!isNaN(fullVersion)) majorVersion = parseInt(''+fullVersion);
//			 else {fullVersion  = 0; majorVersion = 0;}
//			}
//		var mobileName = "";
//		if(navigator.userAgent.toLowerCase().indexOf("ipad")!=-1)
//			mobileName = "iPad";
//		else if(navigator.userAgent.toLowerCase().indexOf("iphone")!=-1)
//			mobileName = "iPhone";
//		else if(navigator.userAgent.toLowerCase().indexOf("ipod"))
//			mobileName = "iPod";
//		else if(navigator.userAgent.toLowerCase().indexOf("android"))
//			mobileName = "Android";
//		else if(navigator.userAgent.toLowerCase().indexOf("mobile"))
//			mobileName = "Mobile";
//		det+="<br/><b>Name of the Mobile Device:</b> "+mobileName;
//		det+="<br/><b>Browser Name:</b> "+browserName+" <br/><b>Version:</b> "+fullVersion+" <br/><b>Operating System:</b> "+OSName;
//	}
//	else
//	{
////		console.log("name of the browser: "+jQuery.browser);
////		console.log("version of the browser: "+jQuery.browser.version);
//		det+="<br/><b>Browser Name:</b> "+browserName+" <br/><b>Version:</b> "+fullVersion+" <br/><b>Operating System:</b> "+OSName;
//	}
//	if(validateEmail_emailUs())
//	{
//		if(help!="" && help!="undefined")
//		{
//		//	console.log("coming into 3");
//			$('#emailUsId').attr('disabled','disabled');
//			$('#help').attr('disabled','disabled');
//			$('#order_number').attr('disabled','disabled');
//			$('#emailus_button').attr('disabled','disabled');
//			$('#alertHelp').text("");
//			var attachedFile = $("#file1").val();
//			
//			//console.log("attachedFile: "+attachedFile);
//			
//			
//			 var htmlStr="";
//				htmlStr+="<form action=\"/sendEmailToUs.htm\" method=\"post\" accept=\"image/*\" enctype=\"multipart/form-data\" encoding=\"multipart/form-data\">";
//				htmlStr+="<input type=\"text\" name=\"emailId\" value=\""+emailId+"\"/>";
//				htmlStr+="<input type=\"text\" name=\"orderNumber\" value=\""+order_number+"\"/>";
//				htmlStr+="<input type=\"text\" name=\"msg\" value=\""+help+"\"/>";
//				htmlStr+="<input type=\"text\" name=\"sysdet\" value=\""+det+"\"/>";
//				htmlStr+="</form>";
//				$("#imageUploadIFrame").contents().find("body").html(htmlStr);
//				for(var i=0;i<id;i++)
//				{
//					var fileControl = $("#file_"+i);
//					$(fileControl).appendTo($("#imageUploadIFrame").contents().find("form"));
//				}	
//				
//				$("#imageUploadIFrame").contents().find("form").submit();
//			
//			
//				$('#emailUsId').removeAttr('disabled');
//				$('#help').removeAttr('disabled');
//				$('#order_number').removeAttr('disabled');
//				$('#emailus_button').removeAttr('disabled');
//				
//				//$("#login_popup_close").hide();
//				
//				setTimeout(function(){$(".email_popup_success_act").show().css('position','fixed');
//				$(".emailus_popup").hide();
//				$(".ppup_cont_holder").show();
//				//$("#emailUs_send").removeClass('popup_processing_btn');
//				},4000);
//				// For bring up login or wishlist popup if the user came from there(by ss2)
//				 //Starts
//				if(cameFromLoginOrWishList=="false")//this variable is there in customerServiceLink.js
//				{
//					//$('#backgroundPopup').hide();
//				
//				}	
//				else if(cameFromLoginOrWishList=="login")
//				{
//					$('.login_form').show();
//				}
//				else if(cameFromLoginOrWishList=="wishList")
//				{
//					$('.wish_list_form').show();
//				}
//			//	Ends
//				 
//				 $("#emailUsId").val("");
//				 $("#help").val("");
//				 $("#order_number").val("");
//				 $('#alertHelp').text("");
//				 $('#alert').text("");
//				 $(".browse_btn").remove();
//				 $("#emailUs_send").before("<div class='browse_btn'><input id='file_1' name='myFile1' type='file' value='Attach Files'/><span class='image_file1' onclick="+'$("#file_1").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
//				 $("#file_1").unbind("change").bind("change",onEmailUsFileChange);
//				 id=undefined;
//				 $("#alertForAttachment").text("");
//	}
//	else
//	{
//		//$("#help").addClass("error_input_field");
//		 $('#help').val('');
//		// $('#help').attr('placeholder','Please fill in some message');
//		 //$("#emailUs_send").removeClass('popup_processing_btn');
//		$('#alertHelp').text("Please fill in some message");
//		$('#alert').text("");
//		$("#alertForAttachment").text("");
//		$(".popup_processing_icon").css('display','none');
//		//$("#file_1").val("");
//		//$("input[id^='file_']").remove();
///*		$(".browse_btn").remove();
//		$("#emailUs_send").before("<div class='browse_btn'><input id='file_1' name='myFile1' type='file' value='Attach Files'/><span class='image_file1'>Click To Attach File</span></div>");
//		$("#file_1").unbind("change").bind("change",onEmailUsFileChange);
//		id=undefined;*/
//	}
//  }
//	//$(".popup_processing_icon").css('display','none');
//}
function goToPreviousPage_frmemail()
{
	$(".popup_processing_icon").css('display','none');
	$(".email_popup_success_act").hide();
	$('#backgroundPopup').fadeOut();
	$(this).parent().hide();
	$(this).parent().css('top', 100 + 'px');	
	//goToPreviousPage();
}

function emailValidatorEmailUs(elem, helperMsg){
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0\-9\.\-]+\.[a-zA-z0\-9]{2,4}$/;
	if(elem.value.match(emailExp)){
		return true;
	}else{
		//alert(helperMsg);
		$('#alert').text("Not a Valid Email");
		$('#alert').show();
		$("#emailUsId").addClass("error_input_field");
		$(".popup_processing_icon").css('display','none');
		//$("#help").val("");
   		//$("#order_number").val("");
		elem.focus();
		return false;
	}
}

function addCommas(nStr) {
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
        x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
}

