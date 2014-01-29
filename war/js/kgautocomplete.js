


jQuery.fn.kgautocomplete=function(options){
		
		scrollOptions=jQuery.extend({words:[],width:0,height:0,leftAdj:0,topAdj:0,buttonClicked:''},options);
		var list1=scrollOptions.words;
		
		return this.each(function(){
			var id=$(this).attr("id");
			var htmlStrStart="<ul id=\""+id+"_auto\" style=\"background-color:#fff;z-index:8888;border:1px solid #ccc;display:none;position:absolute;padding:0px;margin:0px;overflow:auto;max-height:"+scrollOptions.height+"px;width:"+scrollOptions.width+"px;\">";
			var htmlStrEnd="</ul>";
			var top=$(this).offset().top;
			var left=$(this).offset().left;
			var height=$(this).height();
			
			var list=scrollOptions.words;
			var inter='';
			
			
			$(htmlStrStart+htmlStrEnd).appendTo("body");
		
			$("#"+id+"_auto").offset({top:(top+height+scrollOptions.topAdj),left:(left+scrollOptions.leftAdj)});
			
		
			
				$(this).focus(function(){
					var id=$(this).attr("id");	
			

				}).blur(function(){
						var id=$(this).attr("id");	
						$("#"+id+"_auto").hide();

					}).keyup(function(e){
						
						var code = (e.keyCode ? e.keyCode : e.which);
					    if (code === 27) {
					    	
					    	
					    	$("#"+id+"_auto").hide();
						}
					   
					    if(e.keyCode==8 || e.keyCode==46)
					    {

						var id=$(this).attr("id");	
						var interr='';
						var firstChar=$(this).val().toLowerCase();
						$("#"+id+"_auto").children('li').remove();
						if(firstChar.length>0)
						{
							for(i=0;i<list.length;i++)
							{
								if(list[i].toLowerCase().indexOf(firstChar)==0)
								interr+="<li class=\"results\">"+list[i]+"</li>";

							}
								$(interr).appendTo("#"+id+"_auto");
								
								$("#"+id+"_auto").children('.results').css("cursor","pointer").css("border-bottom","1px dotted #bbb").css("padding","5px").mouseenter(function(){
									$(this).addClass("result_hover");

								}).mouseout(function(){

								$(this).removeClass("result_hover");
								}).mousedown(function(){
								
									var textBoxId=$(this).parent().attr("id").substring(0,$(this).parent().attr("id").indexOf("_auto"));
							
							
									$("#"+textBoxId).val($(this).text());
										$(this).parent().hide();
									$(this).parent().children("li").show();
									$(scrollOptions.buttonClicked).click();

								});
								
								
								$("#"+id+"_auto").show();

							
						}
						else
						{
							$("#"+id+"_auto").hide();
						}
						
					}
					else if(e.keyCode==38)//up
						{
							var id=$(this).attr("id");	
							if($("#"+id+"_auto").children(".result_hover").length>0){
							$("#"+id+"_auto").children(".results").each(function(){

								if($(this).hasClass("result_hover"))
								{
									if($(this).prev().hasClass("results"))
									{
										$(this).prev().addClass("result_hover");
										$(this).removeClass("result_hover");
										return false;
									}
								}
							});
						}
						else
						{
							$($("#"+id+"_auto").children(".results")[0]).addClass("result_hover");
						
						}

						}

					else if(e.keyCode==40)//down
					{
						var id=$(this).attr("id");	
						if($("#"+id+"_auto").children(".result_hover").length>0){
						$("#"+id+"_auto").children(".results").each(function(){

							if($(this).hasClass("result_hover"))
							{
								if($(this).next().hasClass("results"))
								{
									$(this).next().addClass("result_hover");
									$(this).removeClass("result_hover");
									return false;
								}
							}
						});
					}
					else
					{
						$($("#"+id+"_auto").children(".results")[0]).addClass("result_hover");
					
					}
					}
					else if(e.keyCode==13)
					{


						var id=$(this).attr("id");	
						if($("#"+id+"_auto").is(":visible")){
								if($("#"+id+"_auto").children(".result_hover").length>0){
									$(this).val($("#"+id+"_auto").children('.result_hover').text());
									$("#"+id+"_auto").hide();
									$("#"+id+"_auto").children("li").show();
									$(scrollOptions.buttonClicked).click();
									$("#"+id).blur();
								}
								else
								{
							//	var firstChar=$(this).val();
							//	$(this).val($($("#"+id+"_auto").children('li:visible')[0]).text());
								$("#"+id+"_auto").hide();
							//	$("#"+id+"_auto").children("li").show();
								$(scrollOptions.buttonClicked).click();
							//	$("#"+id).blur();
								}
						}
						else
						{
								$(scrollOptions.buttonClicked).click();
									$("#"+id+"_auto").hide();
						}
					
					}
					else
					{ 

							var id=$(this).attr("id");	
							var interr='';
							var firstChar=$(this).val().toLowerCase();
							$("#"+id+"_auto").children('li').remove();
							if(firstChar.length>0)
							{
								for(i=0;i<list.length;i++)
								{
									if(list[i].toLowerCase().indexOf(firstChar)==0)
									interr+="<li class=\"results\">"+list[i]+"</li>";

								}
									$(interr).appendTo("#"+id+"_auto");
									
									$("#"+id+"_auto").children('.results').css("cursor","pointer").css("border-bottom","1px dotted #bbb").css("padding","5px").mouseenter(function(){
										$(this).addClass("result_hover");

									}).mouseout(function(){

									$(this).removeClass("result_hover");
									}).mousedown(function(){
								
										var textBoxId=$(this).parent().attr("id").substring(0,$(this).parent().attr("id").indexOf("_auto"));
									
										$("#"+textBoxId).val($(this).text());
											$(this).parent().hide();
										$(this).parent().children("li").show();
										$(scrollOptions.buttonClicked).click();

									});
									
									
										$("#"+id+"_auto").show();

							}
							else
							{
								$("#"+id+"_auto").hide();
							}
					}



				});
			
			
			
		
			});
		
			
			
			
		
};
	
