
jQuery.kgdropdowncount=0;

jQuery.fn.kgcustomdropdown=function(options){
		
		dropOptions=jQuery.extend({dummy1:''},options);
		
		return this.each(function(){
			
			var obj=$(this);
			if(obj.is(":visible")){
			
			if(navigator.userAgent.toLowerCase().indexOf("ipad")!=-1 || navigator.userAgent.toLowerCase().indexOf("iphone")!=-1 || navigator.userAgent.toLowerCase().indexOf("ipod")!=-1 || navigator.userAgent.toLowerCase().indexOf("android")!=-1 || navigator.userAgent.toLowerCase().indexOf("mobile")!=-1)
			{
				obj.hide();
			}
			
			var myCount=jQuery.kgdropdowncount;
				
			var sideButton=obj.find(".custom_drop_nav");
			
			var optionList=obj.find("ul");
			
			var maxWidth=0;
			
			if(obj.attr("class").indexOf("custom_id_")==-1)
				{
					obj.addClass("custom_id_"+myCount);
					obj.attr("name","custom_id_"+myCount);
					jQuery.kgdropdowncount++;
					//myCount=jQuery.kgdropdowncount;
				}
			else
				{
					myCount=parseInt(obj.attr("name").substring(obj.attr("name").lastIndexOf("_")+1,obj.attr("name").length));
				}
				
			obj.unbind();
			sideButton.unbind();
			optionList.children("li").unbind();
			
			obj.die();
			sideButton.die();
			optionList.children("li").die();
			
			//sideButton.css("border","1px solid red");
			
			optionList.children("li").each(function(){
				
				if($(this).text().length>maxWidth)
				{
					maxWidth=$(this).text().length;
				}
				
				
			});
			
			if(maxWidth>obj.width())
				optionList.width(maxWidth*8);
			else
				optionList.width(obj.width());
			
			if(optionList.children("li").length>10)
				{
					optionList.css("height","150px !important");
					optionList.css("max-height","150px !important");
				}
		
			
			sideButton.click(function(){
				
				if(optionList.is(":hidden"))
				{
					////console.log("is hidden");
					optionList.show();
					
				}
				else
				{
					////console.log("not hidden");
					optionList.hide();
					
				}
				
			
						var liHeight=30;
						var ulHeight=optionList.height();
						var selectedLi;
						var count=0;
						var indexLi=0;

						optionList.find('li').each(function(){

							if($(this).attr("class")=="customDropDownUpdate"){
								selectedLi=this;
								indexLi=count;
								return false;
							}

							count++;
						});

						var distanceSelectedLi=(indexLi+1)*liHeight;
						var difference=distanceSelectedLi-ulHeight;
						var scrollAmt=difference/liHeight;
						
						if(difference>=0)
						{
							optionList.scrollTop(scrollAmt*liHeight);
						}
				
				
			});
			
			obj.mouseenter(function(){
				//$('#wrapper').removeClass('wrappflag');
			}).mouseout(function () {
					//$('#wrapper').addClass('wrappflag');
			    });
			
			obj.find("input[type='text']").click(function(){
				
					if(optionList.is(":hidden"))
					{
						optionList.show();
					}
					else
					{
						optionList.hide();
					}
				
			}).keydown(function(e){
				
				var liHeight=30;
				var ulHeight=optionList.height();
				var selectedLi;
				var count=0;
				var indexLi=0;

				optionList.find('li').each(function(){
				
				
					if($(this).text().toLowerCase().indexOf(''+String.fromCharCode(e.keyCode).toLowerCase())==0 || $(this).text().toUpperCase().indexOf(''+String.fromCharCode(e.keyCode).toUpperCase())==0){

											indexLi=count;
											return false;
										}
				
					

					count++;
				});
			
				var distanceSelectedLi=(indexLi+1)*liHeight;
				var difference=distanceSelectedLi-ulHeight;
				var scrollAmt=difference/liHeight;
				
				if(difference>=0)
				{
					optionList.scrollTop(scrollAmt*liHeight);
				}
				
				return false;
			});
			
			optionList.children("li").click(function(){
				
				
			 var field_value = $(this).text();
			 $(this).parent().parent().children('input').val(field_value);
			 $(this).parent().hide();

			 if($(this).attr("value")!=null && $(this).attr("value")!="")
			 {

				 $(this).parent().parent().children('input').attr("titlevalue",$(this).attr("value"));
				$(this).addClass("customDropDownUpdate");

			 }
			 else if($(this).attr("id")!=null && $(this).attr("id")!="")
			 {

				 $(this).parent().parent().children('input').attr("titlevalue",$(this).attr("id"));
				$(this).addClass("customDropDownUpdate");
			 }
			 else if($(this).attr("title")!=null && $(this).attr("title")!="")
			 {

				 $(this).parent().parent().children('input').attr("titlevalue",$(this).attr("title"));
				$(this).addClass("customDropDownUpdate");
			 }
			 $(this).parent().parent().children('input').trigger('change');
				
			}).mouseover(function(){
				
				$(".customDropDownUpdate").removeClass("customDropDownUpdate");
			});
			
			
			if(navigator.userAgent.toLowerCase().indexOf("ipad")!=-1 || navigator.userAgent.toLowerCase().indexOf("iphone")!=-1 || navigator.userAgent.toLowerCase().indexOf("ipod")!=-1 || navigator.userAgent.toLowerCase().indexOf("android")!=-1 || navigator.userAgent.toLowerCase().indexOf("mobile")!=-1)
			{
				
				if(obj.next().hasClass("selectcustom_id_"+myCount))
					{
						var select=$(".selectcustom_id_"+myCount);
						//select.css("position","relative");
						//select.offset({top:obj.offset().top,left:obj.offset().left});
						//select.width(obj.width());
						//.css("position","absolute");
						select.children().remove();
						//console.log("removed");
						var optionList=obj.children("ul");
						optionList.children("li").each(function(){
							
							if($(this).attr("value")!=null && $(this).attr("value")!="")
							 {
								select.append("<option value=\""+$(this).attr("value")+"\">"+$(this).text()+"</option>");	
	
							 }
							 else if($(this).attr("id")!=null && $(this).attr("id")!="")
							 {
								 select.append("<option value=\""+$(this).attr("id")+"\">"+$(this).text()+"</option>");
								 
							 }
							 else if($(this).attr("title")!=null && $(this).attr("title")!="")
							 {
								 select.append("<option value=\""+$(this).attr("title")+"\">"+$(this).text()+"</option>");
								
							 }
							
							//console.log("adding");
							
							
						});
						
						select.children().each(function(){
							
							if($(this).text()==obj.find("input[type='text']").val())
							 {
								select.val($(this).attr("value"));	
								////console.log("got it");
								return false;
							 }
						
							
						});
						
						
						select.change(function(e){
							
							var selVal=$(this).val();
							obj.children("ul").children("li").each(function(){
								
								if($(this).attr("value")!=null && $(this).attr("value")==selVal)
								 {
									$(this).click();	
									return true;
								 }
								 else if($(this).attr("id")!=null && $(this).attr("id")==selVal)
								 {
									 $(this).click();
									 return true;
								 }
								 else if($(this).attr("title")!=null && $(this).attr("title")==selVal)
								 {
									 $(this).click();
									 return true;
								 }
								
							});
							return true;
							
						});
					}
				else
					{
					//console.log("coming here");
						$("<select name=\"selectcustom_id_"+myCount+"\" class=\"selectcustom_id_"+myCount+"\"></select>").insertAfter(obj);
						var select=$(".selectcustom_id_"+myCount);
						select.css("position","relative");
						//select.offset({top:obj.offset().top,left:obj.offset().left});
						select.width(obj.width());
						//.css("position","absolute");
						var optionList=obj.children("ul");
						optionList.children("li").each(function(){
							
							if($(this).attr("value")!=null && $(this).attr("value")!="")
							 {
								select.append("<option value=\""+$(this).attr("value")+"\">"+$(this).text()+"</option>");	
	
							 }
							 else if($(this).attr("id")!=null && $(this).attr("id")!="")
							 {
								 select.append("<option value=\""+$(this).attr("id")+"\">"+$(this).text()+"</option>");
								 
							 }
							 else if($(this).attr("title")!=null && $(this).attr("title")!="")
							 {
								 select.append("<option value=\""+$(this).attr("title")+"\">"+$(this).text()+"</option>");
								
							 }
							
							
						});
						
						select.children().each(function(){
							
							if($(this).text()==obj.find("input[type='text']").val())
							 {
								select.val($(this).attr("value"));	
								//console.log("got it");
								return false;
							 }
						
							
						});
						
						
						select.change(function(e){
							
							var selVal=$(this).val();
							obj.children("ul").children("li").each(function(){
								
								if($(this).attr("value")!=null && $(this).attr("value")==selVal)
								 {
									$(this).click();	
									return true;
								 }
								 else if($(this).attr("id")!=null && $(this).attr("id")==selVal)
								 {
									 $(this).click();
									 return true;
								 }
								 else if($(this).attr("title")!=null && $(this).attr("title")==selVal)
								 {
									 $(this).click();
									 return true;
								 }
								
							});
							return true;
							
						});
					
					}
				
				
			}
			
			
				
			}
			
			});
		
		
			
			
		
};
	
