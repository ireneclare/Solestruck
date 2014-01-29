var fileName;
var currentFileId;
var id;
$(document).ready(function(){
	
	var orderId=''+$("#orderId").text();
//	$.getJSON('http://graph.facebook.com/solestruck',
//	        function(data){
//	    $('#fb_like_count').text(addCommas(data.likes));
//	});
	
//	$('#backgroundPopup').click(function(){
//		$('#backgroundPopup').fadeOut('slow');
//		$('.emailus_popup_act').fadeOut();
//		
//	});
	$('.popup_close_act').click(function() {
  		$('#backgroundPopup').fadeOut();
		$(this).parent().hide();
				
	});
	
	$(document).keydown(function(e){
		var code = (e.keyCode ? e.keyCode : e.which);
	    if (code === 27) {
	    	$(".emailus_popup").hide();
			$('#backgroundPopup').fadeOut('fast');
			$(".blackfriday_faq_chk").hide();
	    }
		
	});
	
	//Upload Attachment

	$("input[id^='file_']").unbind("change").bind('change',onEmailUsFileChange);


	$("code[id^='removefile_']").live("click",function(){
		var htmlStr="";
		currentFileId = $(this).attr("id").charAt($(this).attr("id").length-1);
		var brwse_btn = $(this).parent().attr("class");
		
		$("#file_"+currentFileId).parent().remove();
		
		//deletedIds.push(currentFileId);
		
		if($(".browse_btn:last").find("span[class='image_file']").text()!='' && $(".browse_btn:last").find("span[class='image_file']").text()!='Click To Attach File')
			$(".browse_btn:last").remove();
		//alert("after if condn");
		var bool=false;
		for(var i=0;i<=5;i++)
		{
			if($(".image_file"+i).text()=='Click To Attach File')
				bool=true;
		}
		if(!bool)
			$("#emailUs_send").before("<div class='browse_btn'><input id='file_"+currentFileId+"' name='myFile"+currentFileId+"' type='file' value='Attach Files'/><span class='image_file"+currentFileId+"' onclick="+'$("#file_'+currentFileId+'").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
		$('#file_'+currentFileId).bind('change',onEmailUsFileChange);
	});
	
	
});

$(document).keydown(function(e){
	if($(".emailus_popup_act").is(":visible") && !$("#help").is(":focus"))
	{
		//alert("popup is displaying");
		var code = (e.keyCode ? e.keyCode : e.which);
		if(code==13)
		{
			emailUsDetails();
		}
	}
});

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

function isMobileDevice()
{
	return navigator.userAgent.toLowerCase().indexOf("ipad")!=-1 || navigator.userAgent.toLowerCase().indexOf("iphone")!=-1 || navigator.userAgent.toLowerCase().indexOf("ipod")!=-1 || navigator.userAgent.toLowerCase().indexOf("android")!=-1 || navigator.userAgent.toLowerCase().indexOf("mobile")!=-1;
}


function onEmailUsFileChange(e)
{
	$("#alertForAttachment").text("");
	var flag =false;
	 var files = e.target.files || e.dataTransfer.files;
	 fileToUpload = files[0];
	 if(fileToUpload.size<=8388608)
	 {
		 id = (e.target.id).charAt((e.target.id).length-1);
		 //if(id==undefined)
			// fileName=$("input[id^='file_']").val();
		 if(currentFileId!=undefined && currentFileId==id)
		 {
			 fileName=$("#file_"+currentFileId).val();
			 flag = true;
		 }
		 else
		 {
			 fileName=$("#file_"+id).val();
		 }	 
		 fileName=fileName.substring(fileName.lastIndexOf('\\')+1,fileName.length);
		 var pattern=/jpg|png|gif|tiff|bmp|BMP|TIFF|JPG|PNG|GIF/g;
		 //if(id==undefined)
			// id = $("input[id^='file_']").attr("id").charAt($("input[id^='file_']").attr("id").length-1);
		 if(currentFileId==undefined)
			 id = $("#file_"+id).attr("id").charAt($("#file_"+id).attr("id").length-1);
		 else
			 id=$(this).attr("id").charAt($(this).attr("id").length-1);
		 if(pattern.test(fileName))
		 {
			 if(!flag)
			 {
				 if($(".image_file"+id).text()=='Click To Attach File' || $(".image_file"+id).text()=='Attach Another File')
				 {
					 $(".image_file"+id).text(fileName);
					 $(".image_file"+id).after("<code class='email_remove' id='removefile_"+id+"'></code>");
					 id=parseInt(id)+1;
					 var filesLen = $("input[name^='myFile']");
						if(filesLen.length<5)
						{
							$(".browse_btn:last").after("<div class='browse_btn'><input id='file_"+id+"' name='myFile"+id+"' type='file' value='Attach Files'/><span class='image_file"+id+"' onclick="+'$("#file_'+id+'").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
							$('#file_'+id).unbind("change").bind('change',onEmailUsFileChange);
						}
				 }
				else
				{
					$(".image_file"+id).text(fileName);
				}		
			 }
			 else
			 {
				 $(".image_file"+currentFileId).text(fileName);
				 $(".image_file"+currentFileId).after("<code class='email_remove' id='removefile_"+currentFileId+"'></code>");
				 flag=false;
				 var filesLen = $("input[name^='myFile']");
				 id=filesLen.length;
				 id=parseInt(id)+1;
				 currentFileId = undefined;
				 var filesLen = $("input[name^='myFile']");
					if(filesLen.length<5)
					{
						$(".browse_btn:last").after("<div class='browse_btn'><input id='file_"+id+"' name='myFile"+id+"' type='file' value='Attach Files'/><span class='image_file"+id+"' onclick="+'$("#file_'+id+'").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
						$('#file_'+id).unbind("change").bind('change',onEmailUsFileChange);
					}
			 }
			
		 }
		 else
		 {
			 $("#alertForAttachment").text("Please upload Image Files");
		 } 
	 }
	 else
	 {
		 $("#alertForAttachment").text("Uh-oh! Your attachment is larger than 7MB and can't be accepted. Please submit a smaller file.");
	 }
	 
	
	
}

function emailUsDetails()
{
	//$("#emailUs_send").addClass('popup_processing_btn');
	$(".popup_processing_icon").css('display','block');
	var emailId=$("#emailUsId").val();
	var help=$("#help").val().replace(/"/g, "\'");
	var order_number=$("#order_number").val();
	var nVer = navigator.appVersion;
	var nAgt = navigator.userAgent;
	var browserName  = '';
	var fullVersion  = 0; 
	var majorVersion = 0;

	if ((verOffset=nAgt.indexOf("Trident"))!=-1) {
		 browserName  = "Microsoft Internet Explorer";
		 fullVersion  = jQuery.browser.version;
		 majorVersion = parseInt(''+fullVersion);
		}
	
	// In Internet Explorer, the true version is after "MSIE" in userAgent
	if ((verOffset=nAgt.indexOf("MSIE/"))!=-1) {
	 browserName  = "Microsoft Internet Explorer";
	 fullVersion  = jQuery.browser.version;
	 majorVersion = parseInt(''+fullVersion);
	}

	// In Opera, the true version is after "Opera" 
	else if ((verOffset=nAgt.indexOf("Opera/"))!=-1) {
	 browserName  = "Microsoft Internet Explorer";
	 fullVersion  = jQuery.browser.version;
	 majorVersion = parseInt(''+fullVersion);
	}
	
	else if ((verOffset=nAgt.indexOf("Chrome"))!=-1) {
		 browserName  = "Google Chrome";
		 fullVersion  = parseFloat(nAgt.substring(verOffset+7));
		 majorVersion = parseInt(''+fullVersion);
		}
	
	else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
		 browserName  = "Safari";
		 fullVersion  = parseFloat(nAgt.substring(verOffset+7));
		 majorVersion = parseInt(''+fullVersion);
		}
	
	// In most other browsers, "name/version" is at the end of userAgent 
	else if( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ) 
	{
	 browserName  = nAgt.substring(nameOffset,verOffset);
	 fullVersion  = parseFloat(nAgt.substring(verOffset+1));
	 if (!isNaN(fullVersion)) majorVersion = parseInt(''+fullVersion);
	 else {fullVersion  = 0; majorVersion = 0;}
	}

	// Finally, if no name and/or no version detected from userAgent...
	if (browserName.toLowerCase() == browserName.toUpperCase() || fullVersion==0 || majorVersion == 0 )
	{
	 browserName  = navigator.appName;
	 fullVersion  = parseFloat(nVer);
	 majorVersion = parseInt(nVer);
	}
	
	var OSName="Unknown OS";
	if (navigator.appVersion.indexOf("Win")!=-1) OSName="Windows";
	if (navigator.appVersion.indexOf("Mac")!=-1) OSName="MacOS";
	if (navigator.appVersion.indexOf("X11")!=-1) OSName="UNIX";
	if (navigator.appVersion.indexOf("Linux")!=-1) OSName="Linux";
	
	//console.log("browserName: "+browserName+" fullVersion: "+fullVersion+" majorVersion: "+majorVersion+" os: "+OSName+" browser version: "+jQuery.browser.version);
	var det="";
	if(isMobileDevice())
	{
		//console.log("name of the device: "+navigator.userAgent);
//		if ((verOffset=nAgt.indexOf("AppleWebKit"))!=-1) {
//			 browserName  = "AppleWebKit";
//			 fullVersion  = parseFloat(nAgt.substring(verOffset+5));
//			 majorVersion = parseInt(''+fullVersion);
//			}

			// In Opera, the true version is after "Opera" 
			
			if ((verOffset=nAgt.indexOf("CriOS"))!=-1) {
				 browserName  = "Google Chrome";
				 fullVersion  = parseFloat(nAgt.substring(verOffset+6));
				 majorVersion = parseInt(''+fullVersion);
				}
			
			else if ((verOffset=nAgt.indexOf("Safari"))!=-1) {
				 browserName  = "Safari";
				 fullVersion  = parseFloat(nAgt.substring(verOffset+7));
				 majorVersion = parseInt(''+fullVersion);
				}
			else if ((verOffset=nAgt.indexOf("Version"))!=-1) {
				 browserName  = "Version";
				 fullVersion  = parseFloat(nAgt.substring(verOffset+8));
				 majorVersion = parseInt(''+fullVersion);
				}
			else if ((verOffset=nAgt.indexOf("Mobile"))!=-1) {
				 browserName  = "Mobile";
				 fullVersion  = parseFloat(nAgt.substring(verOffset+6));
				 majorVersion = parseInt(''+fullVersion);
				}
				

			// In most other browsers, "name/version" is at the end of userAgent 
			else if( (nameOffset=nAgt.lastIndexOf(' ')+1) < (verOffset=nAgt.lastIndexOf('/')) ) 
			{
			 browserName  = nAgt.substring(nameOffset,verOffset);
			 fullVersion  = parseFloat(nAgt.substring(verOffset+1));
			 if (!isNaN(fullVersion)) majorVersion = parseInt(''+fullVersion);
			 else {fullVersion  = 0; majorVersion = 0;}
			}
		var mobileName = "";
		if(navigator.userAgent.toLowerCase().indexOf("ipad")!=-1)
			mobileName = "iPad";
		else if(navigator.userAgent.toLowerCase().indexOf("iphone")!=-1)
			mobileName = "iPhone";
		else if(navigator.userAgent.toLowerCase().indexOf("ipod"))
			mobileName = "iPod";
		else if(navigator.userAgent.toLowerCase().indexOf("android"))
			mobileName = "Android";
		else if(navigator.userAgent.toLowerCase().indexOf("mobile"))
			mobileName = "Mobile";
		det+="<br/><b>Name of the Mobile Device:</b> "+mobileName;
		det+="<br/><b>Browser Name:</b> "+browserName+" <br/><b>Version:</b> "+fullVersion+" <br/><b>Operating System:</b> "+OSName;
	}
	else
	{
//		console.log("name of the browser: "+jQuery.browser);
//		console.log("version of the browser: "+jQuery.browser.version);
		det+="<br/><b>Browser Name:</b> "+browserName+" <br/><b>Version:</b> "+fullVersion+" <br/><b>Operating System:</b> "+OSName;
	}
	if(validateEmail_emailUs())
	{
		if(help!="" && help!="undefined")
		{
			//console.log("coming into 3");
			$('#emailUsId').attr('disabled','disabled');
			$('#help').attr('disabled','disabled');
			$('#order_number').attr('disabled','disabled');
			$('#emailus_button').attr('disabled','disabled');
			$('#alertHelp').text("");
			var attachedFile = $("#file1").val();
			
			//console.log("attachedFile: "+attachedFile);
			
			
			 var htmlStr="";
				htmlStr+="<form action=\"/sendEmailToUs.htm\" method=\"post\" accept=\"image/*\" enctype=\"multipart/form-data\" encoding=\"multipart/form-data\">";
				htmlStr+="<input type=\"text\" name=\"emailId\" value=\""+emailId+"\"/>";
				htmlStr+="<input type=\"text\" name=\"orderNumber\" value=\""+order_number+"\"/>";
				htmlStr+="<input type=\"text\" name=\"msg\" value=\""+help+"\"/>";
				htmlStr+="<input type=\"text\" name=\"sysdet\" value=\""+det+"\"/>";
				htmlStr+="</form>";
				$("#imageUploadIFrame").contents().find("body").html(htmlStr);
				for(var i=0;i<id;i++)
				{
					var fileControl = $("#file_"+i);
					$(fileControl).appendTo($("#imageUploadIFrame").contents().find("form"));
				}	
				
				$("#imageUploadIFrame").contents().find("form").submit();
			
			
				$('#emailUsId').removeAttr('disabled');
				$('#help').removeAttr('disabled');
				$('#order_number').removeAttr('disabled');
				$('#emailus_button').removeAttr('disabled');
				
				//$("#login_popup_close").hide();
				
				setTimeout(function(){
					$(".email_popup_success_act").show().css('position','fixed');
					$(".emailus_popup").hide();
					$(".ppup_cont_holder").show();
				//$("#emailUs_send").removeClass('popup_processing_btn');
				},4000);
				// For bring up login or wishlist popup if the user came from there(by ss2)
				 //Starts
				if(cameFromLoginOrWishList=="false")//this variable is there in customerServiceLink.js
				{
					//$('#backgroundPopup').hide();
				
				}	
				else if(cameFromLoginOrWishList=="login")
				{
					$('.login_form').show();
				}
				else if(cameFromLoginOrWishList=="wishList")
				{
					$('.wish_list_form').show();
				}
			//	Ends
				 
				 $("#emailUsId").val("");
				 $("#help").val("");
				 $("#order_number").val("");
				 $('#alertHelp').text("");
				 $('#alert').text("");
				 $(".browse_btn").remove();
				 $("#emailUs_send").before("<div class='browse_btn'><input id='file_1' name='myFile1' type='file' value='Attach Files'/><span class='image_file1' onclick="+'$("#file_1").trigger("click")'+"><a id='text_emailUs'>Click To Attach File</a></span></div>");
				 $("#file_1").unbind("change").bind("change",onEmailUsFileChange);
				 id=undefined;
				 $("#alertForAttachment").text("");
	}
	else
	{
		//$("#help").addClass("error_input_field");
		 $('#help').val('');
		// $('#help').attr('placeholder','Please fill in some message');
		 //$("#emailUs_send").removeClass('popup_processing_btn');
		$('#alertHelp').text("Please fill in some message");
		$('#alert').text("");
		$("#alertForAttachment").text("");
		$(".popup_processing_icon").css('display','none');
		//$("#file_1").val("");
		//$("input[id^='file_']").remove();
/*		$(".browse_btn").remove();
		$("#emailUs_send").before("<div class='browse_btn'><input id='file_1' name='myFile1' type='file' value='Attach Files'/><span class='image_file1'>Click To Attach File</span></div>");
		$("#file_1").unbind("change").bind("change",onEmailUsFileChange);
		id=undefined;*/
	}
  }
	//$(".popup_processing_icon").css('display','none');
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
	 $("#emailUsId").addClass("error_input_field");
	 $('#emailUsId').attr('placeholder','Please fill in any Email ID');
	 $(".popup_processing_icon").css('display','none');
   	 return false;
	  }
 	}
 	catch( e )
 	{
 		//console.info(e);
 	}

}

function emailValidatorEmailUs(elem, helperMsg){
	var emailExp = /^[\w\-\.\+]+\@[a-zA-Z0\-9\.\-]+\.[a-zA-z0\-9]{2,4}$/;
	if(elem.value.match(emailExp)){
		return true;
	}else{
		$('#alert').text("Not a Valid Email");
		$("#emailUsId").addClass("error_input_field");
		$(".popup_processing_icon").css('display','none');
		elem.focus();
		return false;
	}
}


function goToPreviousPage_frmemail()
{
	$(".popup_processing_icon").css('display','none');
	$(".email_popup_success_act").hide();
	$('#backgroundPopup').fadeOut();
	$(this).parent().hide();
	$(this).parent().css('top', 100 + 'px');	
	//goToPreviousPage();
}