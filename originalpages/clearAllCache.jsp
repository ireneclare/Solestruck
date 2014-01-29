<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<%-- <%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %> --%>

<html>
<%@page
import="com.veroniqa.frontend.util.VeroniqaConstants"
 %>
<%-- <%@page import="com.veroniqa.util.VeroniqaConstants" %> --%>
<%-- <% String wh =VeroniqaConstants.WAREHOUSE_MODE; %> --%>
 
  <head>
    <meta http-equiv="content-type" content="text/html; charset=UTF-8">
   
	<title>clearAllCache</title>
	

    <link rel="shortcut icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" />
    <link href="css/wh_new.css" rel="stylesheet" type="text/css" />
    
    <script type="text/javascript" src="<%=VeroniqaConstants.JS_SECURED_URL() %>jquery-1.9.0.min.js"></script>
	<script type="text/javascript" src="js/cookie.js"></script>
	
	
    <style type="text/css">
    .browserInfo 
    {
		text-align: center;
		margin: 20px auto;
		padding: 7px;
		font-size: 14px;
		color: #555;
		font-weight: bold;
		border-radius: 4px;
		-moz-border-radius: 4px;
		-webkit-border-radius: 4px;
		border: 1px solid #e7d556;
		background: #f7ebb1;
		width: 480px;
   }

.displaynone{
display : none;
}
    </style>
    <script>
   
    
    function checkBrowser()
	{
    	
		var urihistry =$("#urihistry").attr('value');
		
		console.log("msg"+ urihistry);
		
		if(urihistry != null && urihistry != "")
		{
			console.log("inside");
			window.history.pushState("", "ClearCache", "/${urihistry}");	
		}

    	var sam =$("#sample").attr('value');
    	if(sam == "" || sam == null || sam == " " || sam == "undefined")
    	{
    		$("#browserInfo").css('display','none');
    	}
    	else if( sam == "Cache Cleared ...")
    	{
    		$("#browserInfo").css('background','rgb(100, 162, 81)');
    		$(".login_holder").hide();
    	}
    	
//     	window.history.pushState("", "ClearCache", ${urihistry});	
    		   
    	var prjMode = $('.signin_btn').attr('whMode');
		if(prjMode=='SOLESTRUCK'){
			$('#ss_logo_image').show();
		}
		else{
			$('#fe_logo_image').show();
		}
		
		jQuery.each(jQuery.browser, function(i, val) {
	 		if(i=="mozilla" && val==true)
 			{
	 			//content="You are using Mozilla, use Google Chrome for better user experience.";
	 			$("#browserInfo").removeClass("displaynone");
 				$("#browserInfo").append("You are using Mozilla, use Google Chrome for better user experience");
 				setTimeout(function(){
 					isCookieExists();
 				},2000);
 				
 			}
	 		/*else if(i=="safari" && val==true)
	 		{
	 			jQuery(".login_holder").css("display","none");
	 			jQuery("#browserInfo").removeClass("displaynone");
	 			//content="You are using Microsoft Internet Explorer. We are not supporting IE any version. Plz use chrome.";
	 			jQuery("#browserInfo").append("You are using Safari. We are not supporting Safari any version. Plz use chrome.");
	 		}*/
	 		else if(i=="msie" && val==true)
	 		{
	 			jQuery(".login_holder").css("display","none");
	 			jQuery("#browserInfo").removeClass("displaynone");
	 			//content="You are using Microsoft Internet Explorer. We are not supporting IE any version. Plz use chrome.";
	 			jQuery("#browserInfo").append("You are using Microsoft Internet Explorer. We are not supporting IE any version. Plz use chrome.");
	 		}
	 		else
 			{
	 			isCookieExists();
 			}
	  	});
	}


	function redirectToOauth()
	{
		var pathname = window.location.pathname.substring(1);
		
		if( pathname != "clearAllFrontEndCache.htm")
   		{
			
			var urlValue = window.location.search;
			var nameSpaceFlag = urlValue.split('?')[1].split('=')[0];
			var nameSpaceValue = urlValue.split('?')[1].split('=')[1];
   		}
		
		console.log("nameSpaceFlag-->"+nameSpaceFlag);
		console.log("nameSpaceValue-->"+nameSpaceValue);
		
    	console.log("path-->"+pathname);
    	console.log("urlvalue-->"+urlValue);
    	if( pathname === "clearAllFrontEndCache.htm")
   		{
    		window.location='/validateOauth2Response.htm?pageuri='+pathname+'';
   		}
    	else if( pathname === "clearFrontEndCache.htm" && nameSpaceFlag === "nameSpace" )
   		{
    		window.location='/validateOauth2Response.htm?pageuri='+pathname+''+urlValue+'';
   		}
// 		if(location.port!='')
// 			{
// 			if(location.port=='5555'||location.port=='6666'||location.port=='7777'||location.port=='8888'||location.port=='9999')
// 				window.location='/validateOauth2Response.htm?pageuri=clearAllFront';
// 			else
// 				return false;
// 			}
// 		else
// 			window.location='/validateOauth2Response.htm';
	}
    </script>
  </head>


<body onload="checkBrowser();">
		
	<div class="login_holder">
		 <img src="images/solestruck-logo.png" class="login_logo"/>
		<h3>Login to Clear the Cache</h3>
		<a onclick="redirectToOauth();" class="signin_btn" style="width:245px;cursor: pointer;" "><span></span>Sign in with a-cti/Solestruck</a>
	</div>	<!-- login_holder -->
	
	<div id="browserInfo" class="browserInfo">
		<c:if test="${msg ne null}">${msg}</c:if>
		<input id="sample" type="hidden" value="${msg}">
		<input id="urihistry" type="hidden" value="${urihistry}">
	</div>	
		
</body>
</html>
