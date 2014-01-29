
$.trimStringX=function(s)
{
	var l=0; var r=s.length -1;
	while(l < s.length && s[l] == ' ')
	{	l++; }
	while(r > l && s[r] == ' ')
	{	r-=1;	}
	return s.substring(l, r+1);
};		

		
		
$.fn.kgcurHome=function(options){
		
		curOptions=$.extend({'prefix':false,'amount':-1.0,'reset':'false','source':'USD','destination':'INR','sourceSymbol':'$','destinationSymbol':'Rs. ','excsource':'google'},options);
		
		var exchangePrice=1.0;
		var fetched=false;
		
			
			
		if(curOptions.reset!='false')
			{
				exchangePrice=1.0;
				fetched=false;
			}
		return this.each(function(){
			
			var txt=$(this).text();
			var obj=$(this);
						
			
				
				
			if(!fetched)
				{
					 if(curOptions.excsource=='opensource')
					{
						$.ajax({
						    url: '/getExchangeRates.htm',
						    data:{'src':curOptions.source,'dest':curOptions.destination},
						    dataType: 'json',
						    async:false,
						    cache:false,
						    success: function(json) {
						    	
						    	exchangePrice=parseFloat(json.exchange);
						    	
						    	//console.log(exchangePrice);
						    	var amt=0.0;
						    	if(curOptions.prefix)
					    		{
					    			if(curOptions.amount<0.0)
					    				amt=parseFloat($.trimStringX(obj.text().substring(obj.text().indexOf(curOptions.sourceSymbol)+1,obj.text().length)));
					    			else
					    				amt=curOptions.amount;
					    		}
					    	else
					    		{
						    		if(curOptions.amount<0.0)
					    				amt=parseFloat($.trimStringX(obj.text()));
					    			else
					    				amt=curOptions.amount;
					    		}
						    	
						    	var calc=parseFloat(amt*exchangePrice).toFixed(2);
						    	//console.log(amt);
						    	//console.log(calc);
						    	if(curOptions.prefix)
					    		{
						    		//obj.text(curOptions.destinationSymbol+''+calc);
						    		obj.hide();
						    		$("<span class=\"newShoePrice\">"+curOptions.destinationSymbol+' '+calc+"</span>").insertAfter(obj);
					    		}
						    	else
						    		{
						    		obj.hide();
						    		$("<span class=\"newShoePrice\">"+curOptions.destinationSymbol+' '+calc+"</span>").insertAfter(obj);
						    		//obj.text(calc);
						    		}
						    	fetched=true;
						    }
						    
						});
					
					
					}
				}
			else
				{
				
				//console.log(exchangePrice);
		    	var amt=0.0;
		    	if(curOptions.prefix)
	    		{
	    			if(curOptions.amount<0.0)
	    				amt=parseFloat($.trimStringX(obj.text().substring(obj.text().indexOf(curOptions.sourceSymbol)+1,obj.text().length)));
	    			else
	    				amt=curOptions.amount;
	    		}
	    	else
	    		{
		    		if(curOptions.amount<0.0)
	    				amt=parseFloat($.trimStringX(obj.text()));
	    			else
	    				amt=curOptions.amount;
	    		}
		    	var calc=parseFloat(amt*exchangePrice).toFixed(2);
		    	//console.log(amt);
		    	//console.log(calc);
		    	if(curOptions.prefix)
	    		{
		    		//obj.text(curOptions.destinationSymbol+''+calc);
		    		obj.hide();
		    		$("<span class=\"newShoePrice\">"+curOptions.destinationSymbol+' '+calc+"</span>").insertAfter(obj);
	    		}
		    	else
		    		{
		    		//obj.text(calc);
		    		obj.hide();
		    		$("<span class=\"newShoePrice\">"+curOptions.destinationSymbol+' '+calc+"</span>").insertAfter(obj);
		    		}
		    	
				
				}
			
			
		
			
			
			});
		
		
		
};



$.fn.kgcurCart=function(options){
		
		curOptions=$.extend({'prefix':false,'amount':-1.0,'reset':'false','source':'USD','destination':'INR','sourceSymbol':'$','destinationSymbol':'Rs. ','excsource':'google'},options);
		
		var exchangePrice=1.0;
		var fetched=false;
		
			
			
		if(curOptions.reset!='false')
			{
				exchangePrice=1.0;
				fetched=false;
			}
		return this.each(function(){
			
			var txt=$(this).text();
			var obj=$(this);
						
			
				
				
			if(!fetched)
				{
					 if(curOptions.excsource=='opensource')
					{
						$.ajax({
						    url: '/getExchangeRates.htm',
						    data:{'src':curOptions.source,'dest':curOptions.destination},
						    dataType: 'json',
						    async:false,
						    cache:false,
						    success: function(json) {
						    	
						    	exchangePrice=parseFloat(json.exchange);
						    	
						    	//console.log(exchangePrice);
						    	var amt=0.0;
						    	if(curOptions.prefix)
					    		{
					    			if(curOptions.amount<0.0)
					    				amt=parseFloat($.trimStringX(obj.text().substring(obj.text().indexOf(curOptions.sourceSymbol)+1,obj.text().length)));
					    			else
					    				amt=curOptions.amount;
					    		}
					    	else
					    		{
						    		if(curOptions.amount<0.0)
					    				amt=parseFloat($.trimStringX(obj.text()));
					    			else
					    				amt=curOptions.amount;
					    		}
						    	
						    	var calc=parseFloat(amt*exchangePrice).toFixed(2);
						    	//console.log(amt);
						    	//console.log(calc);
						    	if(curOptions.prefix)
					    		{
						    		//obj.text(curOptions.destinationSymbol+''+calc);
						    		obj.hide();
						    		$("<span class=\"pricing\">"+curOptions.destinationSymbol+' '+calc+"</span>").insertAfter(obj);
					    		}
						    	else
						    		{
						    		obj.hide();
						    		$("<span class=\"pricing\">"+curOptions.destinationSymbol+' '+calc+"</span>").insertAfter(obj);
						    		//obj.text(calc);
						    		}
						    	fetched=true;
						    }
						    
						});
					
					
					}
				}
			else
				{
				
				//console.log(exchangePrice);
		    	var amt=0.0;
		    	if(curOptions.prefix)
	    		{
	    			if(curOptions.amount<0.0)
	    				amt=parseFloat($.trimStringX(obj.text().substring(obj.text().indexOf(curOptions.sourceSymbol)+1,obj.text().length)));
	    			else
	    				amt=curOptions.amount;
	    		}
	    	else
	    		{
		    		if(curOptions.amount<0.0)
	    				amt=parseFloat($.trimStringX(obj.text()));
	    			else
	    				amt=curOptions.amount;
	    		}
		    	var calc=parseFloat(amt*exchangePrice).toFixed(2);
		    	//console.log(amt);
		    	//console.log(calc);
		    	if(curOptions.prefix)
	    		{
		    		//obj.text(curOptions.destinationSymbol+''+calc);
		    		obj.hide();
		    		$("<span class=\"pricing\">"+curOptions.destinationSymbol+' '+calc+"</span>").insertAfter(obj);
	    		}
		    	else
		    		{
		    		//obj.text(calc);
		    		obj.hide();
		    		$("<span class=\"pricing\">"+curOptions.destinationSymbol+' '+calc+"</span>").insertAfter(obj);
		    		}
		    	
				
				}
			
			
		
			
			
			});
		
		
		
};

var baseCurrencyType="USD";

/*$(document).ready(function(){
	
	if(readCookie("currencyCode")!=null)
		{
			changeCurrency(readCookie("currencyCode"));
		}
	else
		{
			changeCurrency(currencyType);
			createCookie("currencyCode",currencyType,7);
		}
	
	$("#currencyList ul li a").click(function(){
		
		var txt=$(this).text();
		$(this).text(currencyType);
		currencyType=txt;
		eraseCookie("currencyCode");
		createCookie("currencyCode",currencyType,7);
		changeCurrency(currencyType);
		$("#selectedCurrency").text(currencyType);
		
	});
	
});*/

function changeCurrency(cur)
{
	if($(".newShoePrice").length>0)
		$(".newShoePrice").remove();
	
	if($(".shoe_price").length>0)
			$(".shoe_price").show();
	
	
	$("#selectedCurrency").text(cur);
	
	
	
	$("#currencyList ul li a").each(function(){
		
		if($(this).text()==cur)
			$(this).remove();
	});
	
	if($(".cart_popup").length>0)
		{
			if($(".cart_shoe_prices").length>0)
				{
					$(".cart_popup .pricing").remove();
				}
		}
	
	if($("#pricediv").length>0)
	{
		
				$(".pricing").remove();
			
	}
	if($("#wish_list_popup_content").length>0)
	{
		
				$(".pricing").remove();
			
	}
	
	currencyType=cur;
	if(baseCurrencyType!=currencyType)
		{
			if(currencyType=="USD"){
				
			}
			else
				{
				if($(".shoe_price").length>0)
					{
						$(".shoe_price").kgcurHome({'prefix':true,'reset':'true','source':baseCurrencyType,'destination':currencyType,'sourceSymbol':'$','destinationSymbol':currencyType,'excsource':'opensource'});
					}
				if($(".cart_popup").length>0)
				{
					if($(".cart_shoe_prices").length>0)
						{
							//console.log("for cart");
							$(".cart_shoe_prices span[id^='price_']").kgcurCart({'prefix':true,'reset':'true','source':baseCurrencyType,'destination':currencyType,'sourceSymbol':'$','destinationSymbol':currencyType,'excsource':'opensource'});
							$("#cartSubtotal").kgcurCart({'prefix':false,'reset':'true','source':baseCurrencyType,'destination':currencyType,'sourceSymbol':'$','destinationSymbol':currencyType,'excsource':'opensource'});
							$("#cartSubtotal").prev().hide();
						}
				}
				
				if($("#pricediv").length>0)
				{
					
					$("#pricediv").kgcurHome({'prefix':true,'reset':'true','source':baseCurrencyType,'destination':currencyType,'sourceSymbol':'$','destinationSymbol':currencyType,'excsource':'opensource'});	
						
				}
				
				if($("#wish_list_popup_content").length>0)
				{
					$("span[id^='itemAddedMsg_']").each(function(){

						$($(this).parent().children()[0]).kgcurHome({'prefix':true,'reset':'true','source':baseCurrencyType,'destination':currencyType,'sourceSymbol':'$','destinationSymbol':currencyType,'excsource':'opensource'});

						});
					
						
				}
				
				}
			
		}
	
	
	
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
