/*
 *   For Filtering the products in All Listing Pages like Gender,Style,Size,Color,Brand and Price by YES
 */
var filterInterval="";
var shoeCount=0;
var filterShoeCount=0;

$(document).ready(function()
{
	$('.item_selection_pannel').addClass('js_enabled');
	$('.your_selection').addClass('js_enabled');	
	$('#clearPrice').click(function(event){
		clearPriceSelection();
	});
	
	$('#clearAllSelection').click(function(event){
		
			
			var existingValues=$( ".slider-vertical" ).slider('values');
			//console.log("existing MinPrice is .....   : " +existingValues[0]);
			//console.log("existing MinPrice is .....   : " +existingValues[1]);
			if(!(existingValues[0]==10 && existingValues[1]==1000))
			{
				//console.log("Clear All is clicked. So.......Price Filter is cleared ");
				if($('#price_Low_High').hasClass('selected') || $('#price_High_Low').hasClass('selected'))
		 		{
			 		$('#price_Low_High').removeClass('selected');
					$('#price_High_Low').removeClass('selected');
					$('#isPriceLowHigh').val('false');
					$('#isPriceHighLow').val('false');
					$('#hiddenLowHigh').val('false');
					$('#hiddenHighLow').val('false');
		 		}
				if($("#mySelectedFilters ul li").length>0)
				{
					 $('input[type=checkbox]').each(function() 
								{ 
								        this.checked = false; 
								});
						
						displayCheckedNames();
						$(".loading_page").fadeOut();
				}
				
				$(function() {
					$( ".slider-vertical" ).slider({
						orientation: "horizontal",
						range: true,
						min: 10,
						max: 1000,
						values:[ 10, 1000 ],
						slide: function( event, ui ) {
							//$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
							if(ui.values[ 1 ]==1000)
							$( ".amount" ).html( "<div class='filterMinPrice fl'> $" + ui.values[ 0 ] + "</div> <div class='filterMaxPrice fr'> $" + ui.values[ 1 ]+"+</div> <div class='clear_both'></div>" );
							else
							$( ".amount" ).html( "<div class='filterMinPrice fl'> $" + ui.values[ 0 ] + "</div> <div class='filterMaxPrice fr'> $" + ui.values[ 1 ]+"</div> <div class='clear_both'></div>" );
							$("#minAmount").val(ui.values[ 0 ]);
							$("#maxAmount").val(ui.values[ 1 ]);
						}
					});
					
					//$( "#amount" ).val( "$" + $( ".slider-vertical" ).slider( "values", 0 ) +" - $" + $( ".slider-vertical" ).slider( "values", 1 ) );
					if($( ".slider-vertical" ).slider( "values", 1 )==1000)
					$( ".amount" ).html( "<div class='filterMinPrice fl'>$" + $( ".slider-vertical" ).slider( "values", 0 ) +"</div> <div class='filterMaxPrice fr'> $" + $( ".slider-vertical" ).slider( "values", 1 ) +"+</div> <div class='clear_both'></div>" );
					else
					$( ".amount" ).html( "<div class='filterMinPrice fl'>$" + $( ".slider-vertical" ).slider( "values", 0 ) +"</div> <div class='filterMaxPrice fr'> $" + $( ".slider-vertical" ).slider( "values", 1 ) +"</div> <div class='clear_both'></div>" );
					$("#minAmount").val($( ".slider-vertical" ).slider( "values", 0 ));
					$("#maxAmount").val($( ".slider-vertical" ).slider( "values", 1 ));
				});
				//$( ".slider-vertical" ).slider( "option", "min", 1 );
				//$( ".slider-vertical" ).slider( "option", "max", 5000 );			
				/*$( ".amount" ).html( "<div class='filterMinPrice fl'> $1 </div> <div class='filterMaxPrice fr'> $5000 </div> <div class='clear_both'></div>" );
				$("#minAmount").val(1);
				$("#maxAmount").val(5000);*/
			}
			else
			{
				//console.log("Clear All is clicked.And Price Filter is not selected. So.......All like Size,Color,Style,Brand Filters are cleared....... ");
				
				if($("#mySelectedFilters ul li").length>0)
				{
					 $('input[type=checkbox]').each(function() 
								{ 
								        this.checked = false; 
								});
					 
						
					 		
					 	if($('#price_Low_High').hasClass('selected') || $('#price_High_Low').hasClass('selected'))
				 		{
					 		//console.log('-----^^^^^^^ price_Sort is  selected -----^^^^^^^');
					 		$('#price_Low_High').removeClass('selected');
							$('#price_High_Low').removeClass('selected');
							$('#isPriceLowHigh').val('false');
							$('#isPriceHighLow').val('false');
							$('#hiddenLowHigh').val('false');
							$('#hiddenHighLow').val('false');
				 		}
						 
						displayCheckedNames();
						getFilteredProducts();
						
				}
				else
				{
					//console.log('-----#####@@@ price_Sort is  selected -----#####@@@');
					$('#price_Low_High').removeClass('selected');
					$('#price_High_Low').removeClass('selected');
					$('#isPriceLowHigh').val('false');
					$('#isPriceHighLow').val('false');
					$('#hiddenLowHigh').val('false');
					$('#hiddenHighLow').val('false');
					getFilteredProducts();
				}
				
			}
			
				
				if($('#price_Low_High').hasClass('selected') || $('#price_High_Low').hasClass('selected'))
		 		{
			 		//console.log('-----&&&&&&& price_Sort is  selected -----&&&&&&&&');
			 		$('#price_Low_High').removeClass('selected');
					$('#price_High_Low').removeClass('selected');
					$('#isPriceLowHigh').val('false');
					$('#isPriceHighLow').val('false');
					$('#hiddenLowHigh').val('false');
					$('#hiddenHighLow').val('false');
		 		}	
				
				$( ".slider-vertical1" ).slider('value',70);
				$( ".amount1" ).val( $( ".slider-vertical1" ).slider( "value" ) );
				 
			
		});
	
		$('#price_Low_High').click(function(){
			
			//console.log('----->>>>>>> price_Low_High is clicked ------->>>>>>>>> ');
			$(".loading_page").fadeIn();
			$('#price_Low_High').addClass('selected');
			$('#price_High_Low').removeClass('selected');
			$('#isPriceLowHigh').val('true');
			$('#isPriceHighLow').val('false');
			$('#hiddenLowHigh').val('true');
			$('#hiddenHighLow').val('false');
			displayCheckedNames();
			getFilteredProducts();
		});
		
		$('#price_High_Low').click(function(){
			
			//console.log('$$$$$$$$$----->>>>>>> price_High_Low is clicked ------->>>>>>>>>$$$$$$$$ ');
			$(".loading_page").fadeIn();
			$('#price_High_Low').addClass('selected');
			$('#price_Low_High').removeClass('selected');
			$('#isPriceHighLow').val('true');
			$('#isPriceLowHigh').val('false');
			$('#hiddenLowHigh').val('false');
			$('#hiddenHighLow').val('true');
			displayCheckedNames();
			getFilteredProducts();
		});
		
		
	$('#genderid_women').click(function(){
		
		getSizesForWomenCheckedOrUnChecked();
		
	});
		
	$('#genderid_unisex').click(function(){
		
		getSizesForUnisexCheckedOrUnChecked();
		
	});
		
	$('#genderid_men').click(function(){
		
		getSizesForMenCheckedOrUnChecked();
		
	});
		
		
});


/*function clearAllSelection()
{
	$('input[type=checkbox]').each(function() 
			{ 
			        this.checked = false; 
			});
	
	displayCheckedNames();
	getFilteredProducts();
	
}*/

function clearstyleSelection()
{
	if($('#checkedstyleids').find('input[type=checkbox]:checked').length>0){
	$('#checkedstyleids').find('input[type=checkbox]:checked').removeAttr('checked');
	
	displayCheckedNames();
	getFilteredProducts();
	}
	
}

function clearsizeSelection()
{
	if($('#checkedsizeids').find('input[type=checkbox]:checked').length>0){
		$('#checkedsizeids').find('input[type=checkbox]:checked').removeAttr('checked');
		
		displayCheckedNames();
		getFilteredProducts();
	}
	
	
}

function clearcolorSelection()
{
	
	if($('#checkedcolorids').find('input[type=checkbox]:checked').length>0)
		{
			$('#checkedcolorids').find('input[type=checkbox]:checked').removeAttr('checked');
			
			displayCheckedNames();
			getFilteredProducts();
		}
	
	
}

function clearbrandSelection()
{
	if($('#checkedbrandids').find('input[type=checkbox]:checked').length>0)
		{
			$('#checkedbrandids').find('input[type=checkbox]:checked').removeAttr('checked');
			
			displayCheckedNames();
			getFilteredProducts();
		}
	
	
}

function cleargenderSelection()
{
	if($('#checkedgenderids').find('input[type=checkbox]:checked').length>0)
		{
			$('#checkedgenderids').find('input[type=checkbox]:checked').removeAttr('checked');
			
			displayCheckedNames();
			getFilteredProducts();
		}
	
	
}

function clearPriceSelection()
{

	/*$(".slider-vertical").slider('option','min',1);
	 $(".slider-vertical").slider('option','max',5000);
	 $(".filterMinPrice").val(1);
	 $(".filterMaxPrice").val(5000);*/
	var existingValues=$( ".slider-vertical" ).slider('values');
	//console.log("existing MinPrice is .....   : " +existingValues[0]);
	//console.log("existing MinPrice is .....   : " +existingValues[1]);
	if(!(existingValues[0]==10 && existingValues[1]==1000)){
		//console.log("Clear Price is clicked. So.......Price Filter is cleared ");
		$(function() {
			$( ".slider-vertical" ).slider({
				orientation: "horizontal",
				range: true,
				min: 10,
				max: 1000,
				values:[ 10, 1000 ],
				slide: function( event, ui ) {
					//$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
					if(ui.values[ 1 ]==1000)
					$( ".amount" ).html( "<div class='filterMinPrice fl'> $" + ui.values[ 0 ] + "</div> <div class='filterMaxPrice fr'> $" + ui.values[ 1 ]+"+</div> <div class='clear_both'></div>" );
					else
					$( ".amount" ).html( "<div class='filterMinPrice fl'> $" + ui.values[ 0 ] + "</div> <div class='filterMaxPrice fr'> $" + ui.values[ 1 ]+"</div> <div class='clear_both'></div>" );
					$("#minAmount").val(ui.values[ 0 ]);
					$("#maxAmount").val(ui.values[ 1 ]);
				}
			});
			
			//$( "#amount" ).val( "$" + $( ".slider-vertical" ).slider( "values", 0 ) +" - $" + $( ".slider-vertical" ).slider( "values", 1 ) );
			if($( ".slider-vertical" ).slider( "values", 1 )==1000)
			$( ".amount" ).html( "<div class='filterMinPrice fl'>$" + $( ".slider-vertical" ).slider( "values", 0 ) +"</div> <div class='filterMaxPrice fr'> $" + $( ".slider-vertical" ).slider( "values", 1 ) +"+</div> <div class='clear_both'></div>" );
			else
			$( ".amount" ).html( "<div class='filterMinPrice fl'>$" + $( ".slider-vertical" ).slider( "values", 0 ) +"</div> <div class='filterMaxPrice fr'> $" + $( ".slider-vertical" ).slider( "values", 1 ) +"</div> <div class='clear_both'></div>" );
			$("#minAmount").val($( ".slider-vertical" ).slider( "values", 0 ));
			$("#maxAmount").val($( ".slider-vertical" ).slider( "values", 1 ));
		});
		//$( ".slider-vertical" ).slider( "option", "min", 1 );
		//$( ".slider-vertical" ).slider( "option", "max", 5000 );
		/*$( ".amount" ).html( "<div class='filterMinPrice fl'> $1 </div> <div class='filterMaxPrice fr'> $5000 </div> <div class='clear_both'></div>" );
		$("#minAmount").val(1);
		$("#maxAmount").val(5000);*/
		
		 $( ".slider-vertical1" ).slider('value',70);
		 $( ".amount1" ).val( $( ".slider-vertical1" ).slider( "value" ) );
	}
}

function clearPriceSortSelection()
{
	$('#price_Low_High').removeClass('selected');
	$('#price_High_Low').removeClass('selected');
	$('#isPriceLowHigh').val('false');
	$('#isPriceHighLow').val('false');
	$('#hiddenLowHigh').val('false');
	$('#hiddenHighLow').val('false');
	displayCheckedNames();
	getFilteredProducts();
}

function displayCheckedNames()
{
	$(".loading_page").fadeIn();
	//$(".loading_page").show();
	var selectedFilter = new Array();
	var totalCount=0;
	var count=0;
	selectedFilter.push("<ul>");
	$("#checkedgenderids").find(':checkbox:checked').each(function(obj){
		var genderChkId="genderid_"+$(this).val();
		selectedFilter.push("<li style=\"cursor:pointer\" onclick=\"unCheckSelection('"+genderChkId+"')\"><span>"+$(this).parent().text()+"</span><code class=\"your_selection_close\"></code></li>");
		count++;
	});
	$('#GenderCount').html("Gender ("+count+")");
	totalCount+=count;
	count=0;
	$("#checkedstyleids").find(':checkbox:checked').each(function(obj){
		var styleChkId="styleid_"+$(this).val();
		selectedFilter.push("<li style=\"cursor:pointer\" onclick=\"unCheckSelection('"+styleChkId+"')\"><span>"+$(this).parent().text()+"</span><code class=\"your_selection_close\"></code></li>");
		count++;
	});
	$('#StyleCount').html("Style ("+count+")");
	totalCount+=count;
	count=0;
	$("#checkedsizeids").find(':checkbox:checked').each(function(obj){
		var sizeChkId="sizeid_"+$(this).val();
		selectedFilter.push("<li style=\"cursor:pointer\" onclick=\"unCheckSelection('"+sizeChkId+"')\"><span>"+$(this).parent().text()+"</span><code class=\"your_selection_close\"></code></li>");
		count++;
	});
	$('#SizeCount').html("Size ("+count+")");
	
	totalCount+=count;
	count=0;
	$("#checkedbrandids").find(':checkbox:checked').each(function(obj){
		var brandChkId="brandid_"+$(this).val();
		selectedFilter.push("<li style=\"cursor:pointer\" onclick=\"unCheckSelection('"+brandChkId+"')\"><span>"+$(this).parent().text()+"</span><code class=\"your_selection_close\"></code></li>");
		count++;
	});
	$('#BrandCount').html("Brand ("+count+")");
	
	totalCount+=count;
	count=0;
	$("#checkedcolorids").find(':checkbox:checked').each(function(obj){
		var colorChkId="colorid_"+$(this).val();
		selectedFilter.push("<li style=\"cursor:pointer\" onclick=\"unCheckSelection('"+colorChkId+"')\"><span>"+$(this).parent().text()+"</span><code class=\"your_selection_close\"></code></li>");
		count++;
	});
	$('#ColorCount').html("Color ("+count+")");
	totalCount+=count;
	//console.log('------->>>>>>>>>> hiddenMinPrice is : ' + $("#hiddenMinPrice" ).val() + ' ------>>>>>>>> hiddenMaxPrice is : ' + $( "#hiddenMaxPrice" ).val() );
	if(($("#hiddenMinPrice" ).val()!="" && $( "#hiddenMaxPrice" ).val()!="") && ($("#hiddenMinPrice" ).val()!=null && $( "#hiddenMaxPrice" ).val()!=null) && ($("#hiddenMinPrice" ).val()!="10" || $( "#hiddenMaxPrice" ).val()!="1000"))
	{
		//console.log('------->>>>>>>>>>  Pushing Price details to Your Selection  ------>>>>>>>>>>' + $( "#hiddenMinPrice" ).val() + "  &&&  " + $( "#hiddenMaxPrice" ).val() );
		if($( "#hiddenMaxPrice" ).val()=="1000")
			selectedFilter.push("<li style=\"cursor:pointer\" onclick=\"clearPriceSelection()\"><span>$"+$("#hiddenMinPrice").val()+"-$"+$("#hiddenMaxPrice").val()+"+</span><code class=\"your_selection_close\"></code></li>");
		else
			selectedFilter.push("<li style=\"cursor:pointer\" onclick=\"clearPriceSelection()\"><span>$"+$("#hiddenMinPrice").val()+"-$"+$("#hiddenMaxPrice").val()+"</span><code class=\"your_selection_close\"></code></li>");
		totalCount=totalCount+1;
	}
	if($('#hiddenLowHigh').val()=='true')
	{
		//console.log('----->>>>>> hiddenLowHigh is Checked------>>>>>>>>  ' );
		selectedFilter.push("<li style=\"cursor:pointer\" onclick=\"clearPriceSortSelection()\"><span>"+$('#price_Low_High').text()+"</span><code class=\"your_selection_close\"></code></li>");
		totalCount=totalCount+1;
	}
	if($('#hiddenHighLow').val()=='true')
	{
		//console.log('----->>>>>> hiddenHighLow is Checked------>>>>>>>>  ' );
		selectedFilter.push("<li style=\"cursor:pointer\" onclick=\"clearPriceSortSelection()\"><span>"+$('#price_High_Low').text()+"</span><code class=\"your_selection_close\"></code></li>");
		totalCount=totalCount+1;
	}
	$('#YourSelectionCount').html("Selections ("+totalCount+"):");
	selectedFilter.push("</ul>");
	$('#mySelectedFilters').html(selectedFilter.join(''));
	//console.log("selected : "+selected);
}

function unCheckSelection(chkid)
{
	//console.log("vendorName : " +vendorName+ "vendorid : " +vendorid);
	$("#"+chkid).removeAttr('checked');
	
	displayCheckedNames();
	
	if(chkid=="genderid_women")
	{
		getSizesForWomenCheckedOrUnChecked();
	}
	if (chkid=="genderid_unisex")
	{
		getSizesForUnisexCheckedOrUnChecked();
	}
	if (chkid=="genderid_men")
	{
		getSizesForMenCheckedOrUnChecked();
	}
		
	getFilteredProducts();
	
}

function getSizesBySocialCategory(SizesCategory)
{
	var sizeslist="";
	$("#sizeFilterList div.jspContainer div.jspPane").empty();
	$.ajax({
		datatype:"json",
		url     : "/getFrontEndDetails.htm",
		success : function(frontEndDTO){
		if(SizesCategory=="WomenSizes")
		{
			//console.log('*********----->>>>>> frontEndDTO.womensizeslist ----->>>>>>>**********' + frontEndDTO.womenSizes.length);
			for(var i=0;i<frontEndDTO.womenSizes.length;i++)
			{
				//console.log('------>>>>>>> id is ------>>>>>>>> : ' +frontEndDTO.womenSizes[i].key.id);
				sizeslist+='<li>';
				sizeslist+='<label><input type="checkbox" name="sizes" id="sizeid_'+frontEndDTO.womenSizes[i].key.id+'"';
				sizeslist+='class="select_pannel_checkbox" onclick="displayCheckedNames(),getFilteredProducts();" ';
				sizeslist+='value="'+frontEndDTO.womenSizes[i].key.id+'"/>'+frontEndDTO.womenSizes[i].name.replace('.0','')+'';
				sizeslist+='</label>';
				sizeslist+='</li>';
			}
		}
		else if(SizesCategory=="MenSizes")
		{
			//console.log('*********----->>>>>> frontEndDTO.mensizeslist ----->>>>>>>**********' + frontEndDTO.menSizes.length);
			for(var i=0;i<frontEndDTO.menSizes.length;i++)
			{
				//console.log('------>>>>>>> id is ------>>>>>>>> : ' +frontEndDTO.menSizes[i].key.id);
				sizeslist+='<li>';
				sizeslist+='<label><input type="checkbox" name="sizes" id="sizeid_'+frontEndDTO.menSizes[i].key.id+'"';
				sizeslist+='class="select_pannel_checkbox" onclick="displayCheckedNames(),getFilteredProducts();" ';
				sizeslist+='value="'+frontEndDTO.menSizes[i].key.id+'"/>'+frontEndDTO.menSizes[i].name.replace('.0','')+'';
				sizeslist+='</label>';
				sizeslist+='</li>';
			}
		}
		else if(SizesCategory=="UnisexSizes")
		{
			//console.log('*********----->>>>>> frontEndDTO.sizeslist ----->>>>>>>**********' + frontEndDTO.sizes.length);
			for(var i=0;i<frontEndDTO.sizes.length;i++)
			{
				//console.log('------>>>>>>> id is ------>>>>>>>> : ' +frontEndDTO.sizes[i].key.id);
				sizeslist+='<li>';
				sizeslist+='<label><input type="checkbox" name="sizes" id="sizeid_'+frontEndDTO.sizes[i].key.id+'"';
				sizeslist+='class="select_pannel_checkbox" onclick="displayCheckedNames(),getFilteredProducts();" ';
				sizeslist+='value="'+frontEndDTO.sizes[i].key.id+'"/>'+frontEndDTO.sizes[i].name.replace('.0','')+'';
				sizeslist+='</label>';
				sizeslist+='</li>';
			}
		}
		
	
		//console.log('*********----->>>>>> sizeslist ----->>>>>>>**********' + sizeslist);
		$(sizeslist).appendTo("#sizeFilterList div.jspContainer div.jspPane");
		scrollBarsForFilters=$('.scroll-pane').jScrollPane();
		
		}
			
		});
}

function getStylesBySocialCategory(StylesCategory)
{
	var sizeslist="";
	$("#styleFilterList div.jspContainer div.jspPane").empty();
	$.ajax({
		datatype:"json",
		url     : "/getFrontEndDetails.htm",
		success : function(frontEndDTO){
		if(StylesCategory=="WomenStyles")
		{
			//console.log('*********----->>>>>> frontEndDTO.womenstyleslist ----->>>>>>>**********' + frontEndDTO.womenStyles.length);
			for(var i=0;i<frontEndDTO.womenStyles.length;i++)
			{
				//console.log('------>>>>>>> id is ------>>>>>>>> : ' +frontEndDTO.womenSizes[i].key.id);
				sizeslist+='<li>';
				sizeslist+='<label style="text-transform: capitalize"><input type="checkbox" name="styles" id="styleid_'+frontEndDTO.womenStyles[i].key.id+'"';
				sizeslist+='class="select_pannel_checkbox" onclick="getFilteredProducts(),displayCheckedNames();" ';
				if(frontEndDTO.womenStyles[i].name=='Boots Ankle')
				{
					sizeslist+='value="'+frontEndDTO.womenStyles[i].key.id+'"/>'+frontEndDTO.womenStyles[i].name.replace('Ankle','(Ankle)')+'';
				}
				else if(frontEndDTO.womenStyles[i].name=='Boots Knee')
				{
					sizeslist+='value="'+frontEndDTO.womenStyles[i].key.id+'"/>'+frontEndDTO.womenStyles[i].name.replace('Knee','(Knee)')+'';
				}
				else
				{
					sizeslist+='value="'+frontEndDTO.womenStyles[i].key.id+'"/>'+frontEndDTO.womenStyles[i].name+'';
				}
				sizeslist+='</label>';
				sizeslist+='</li>';
			}
		}
		else if(StylesCategory=="MenStyles")
		{
			//console.log('*********----->>>>>> frontEndDTO.menstyleslist ----->>>>>>>**********' + frontEndDTO.menStyles.length);
			for(var i=0;i<frontEndDTO.menStyles.length;i++)
			{
				//console.log('------>>>>>>> id is ------>>>>>>>> : ' +frontEndDTO.menStyles[i].key.id);
				sizeslist+='<li>';
				sizeslist+='<label style="text-transform: capitalize"><input type="checkbox" name="styles" id="styleid_'+frontEndDTO.menStyles[i].key.id+'"';
				sizeslist+='class="select_pannel_checkbox" onclick="displayCheckedNames(),getFilteredProducts();" ';
				sizeslist+='value="'+frontEndDTO.menStyles[i].key.id+'"/>'+frontEndDTO.menStyles[i].name+'';
				sizeslist+='</label>';
				sizeslist+='</li>';
			}
		}
		else if(StylesCategory=="UnisexStyles")
		{
			//console.log('*********----->>>>>> frontEndDTO.styleslist ----->>>>>>>**********' + frontEndDTO.styles.length);
			for(var i=0;i<frontEndDTO.styles.length;i++)
			{
				//console.log('------>>>>>>> id is ------>>>>>>>> : ' +frontEndDTO.styles[i].key.id);
				sizeslist+='<li>';
				sizeslist+='<label style="text-transform: capitalize"><input type="checkbox" name="styles" id="styleid_'+frontEndDTO.styles[i].key.id+'"';
				sizeslist+='class="select_pannel_checkbox" onclick="displayCheckedNames(),getFilteredProducts();" ';
				if(frontEndDTO.womenStyles[i].name=='Boots Ankle')
				{
					sizeslist+='value="'+frontEndDTO.womenStyles[i].key.id+'"/>'+frontEndDTO.womenStyles[i].name.replace('Ankle','(Ankle)')+'';
				}
				else if(frontEndDTO.womenStyles[i].name=='Boots Knee')
				{
					sizeslist+='value="'+frontEndDTO.womenStyles[i].key.id+'"/>'+frontEndDTO.womenStyles[i].name.replace('Knee','(Knee)')+'';
				}
				else
				{
					sizeslist+='value="'+frontEndDTO.womenStyles[i].key.id+'"/>'+frontEndDTO.womenStyles[i].name+'';
				}
				sizeslist+='</label>';
				sizeslist+='</li>';
			}
		}
		
	
		//console.log('*********----->>>>>> styleslist ----->>>>>>>**********' + sizeslist);
		$(sizeslist).appendTo("#styleFilterList div.jspContainer div.jspPane");
		scrollBarsForFilters=$('.scroll-pane').jScrollPane();
		
		}
			
		});
}

function getSizesForWomenCheckedOrUnChecked()
{

	
	//console.log('*********----->>>>>> genderid_women is clicked ----->>>>>>>**********');
	
	var SizesCategory="";
	var StylesCategory="";
	
	if($('#genderid_women').attr('checked'))
	{
		//console.log('---->>>>> genderid_women is checked ---->>>>>>>>>');
		if($('#genderid_men').attr('checked'))
		{
			//console.log('---->>>>> genderid_men is checked ---->>>>>>>>>');
			//$('#unisex_select_pannel').show();
			//$('#women_select_pannel').hide();
			//$('#men_select_pannel').hide();
			
			SizesCategory="UnisexSizes";
			StylesCategory="UnisexStyles";
			
		}
		else if($('#genderid_unisex').attr('checked'))
		{
			//console.log('---->>>>> genderid_unisex is checked ---->>>>>>>>>');
			//$('#unisex_select_pannel').show();
			//$('#women_select_pannel').hide();
			//$('#men_select_pannel').hide();
			
			SizesCategory="UnisexSizes";
			StylesCategory="UnisexStyles";
			
		}
		else
		{
			SizesCategory="WomenSizes";
			StylesCategory="WomenStyles";
		}
	}
	else 
	{
		//console.log('---->>>>> genderid_women is not checked ---->>>>>>>>>');
		
		if($('#genderid_men').attr('checked'))
		{
			//console.log('---->>>>> genderid_men is checked ---->>>>>>>>>');
			if($('#genderid_unisex').attr('checked'))
			{
				//console.log('---->>>>> genderid_unisex is checked ---->>>>>>>>>');
				//$('#unisex_select_pannel').show();
				//$('#women_select_pannel').hide();
				//$('#men_select_pannel').hide();
				
				SizesCategory="UnisexSizes";
				StylesCategory="UnisexStyles";
				
			}
			else
			{
				//$('#men_select_pannel').show();
				//$('#women_select_pannel').hide();
				//$('#unisex_select_pannel').hide();
				
				SizesCategory="MenSizes";
				StylesCategory="MenStyles";
			}
		}
		else if($('#genderid_unisex').attr('checked'))
		{
			//console.log('---->>>>> genderid_unisex is checked ---->>>>>>>>>');
			//$('#unisex_select_pannel').show();
			//$('#women_select_pannel').hide();
			//$('#men_select_pannel').hide();
			
			SizesCategory="UnisexSizes";
			StylesCategory="UnisexStyles";
		}
		else
		{
			//console.log('---->>>>>  SocialCategory is not selected ---->>>>>>>>>');
			//$('#unisex_select_pannel').show();
			//$('#women_select_pannel').hide();
			//$('#men_select_pannel').hide();
			
			SizesCategory="UnisexSizes";
			StylesCategory="UnisexStyles";
		}
	}
	getSizesBySocialCategory(SizesCategory);
	getStylesBySocialCategory(StylesCategory);
	

}

function getSizesForUnisexCheckedOrUnChecked()
{

	//console.log('*********----->>>>>> genderid_unisex is clicked ----->>>>>>>**********');
	
	var SizesCategory="";
	var StylesCategory="";
	
	if($('#genderid_unisex').attr('checked'))
	{
		//console.log('---->>>>> genderid_unisex is checked ---->>>>>>>>>');
		//$('#unisex_select_pannel').show();
		//$('#women_select_pannel').hide();
		//$('#men_select_pannel').hide();
		
		SizesCategory="UnisexSizes";
		StylesCategory="UnisexStyles";
		
	}
	else 
	{
		//console.log('---->>>>> genderid_unisex is not checked ---->>>>>>>>>');
		
		if($('#genderid_women').attr('checked'))
		{
			if($('#genderid_men').attr('checked'))
			{
				//console.log('---->>>>> genderid_men and genderid_women are checked ---->>>>>>>>>');
				//$('#unisex_select_pannel').show();
				//$('#women_select_pannel').hide();
				//$('#men_select_pannel').hide();
				
				SizesCategory="UnisexSizes";
				StylesCategory="UnisexStyles";
			}
			else
			{
				//console.log('---->>>>> genderid_women is checked ---->>>>>>>>>');
				//$('#women_select_pannel').show();
				//$('#men_select_pannel').hide();
				//$('#unisex_select_pannel').hide();
				
				SizesCategory="WomenSizes";
				StylesCategory="WomenStyles";
			}
			
		}
		else if($('#genderid_men').attr('checked'))
		{
			
			if($('#genderid_women').attr('checked'))
			{
				//console.log('---->>>>> $$$$ genderid_men and genderid_women are checked $$$$$ ---->>>>>>>>>');
				//$('#unisex_select_pannel').show();
				//$('#women_select_pannel').hide();
				//$('#men_select_pannel').hide();
				
				SizesCategory="UnisexSizes";
				StylesCategory="UnisexStyles";
			}
			else
			{
				//console.log('---->>>>> $$$$ genderid_men is checked $$$$ ---->>>>>>>>>');
				//$('#men_select_pannel').show();
				//$('#women_select_pannel').hide();
				//$('#unisex_select_pannel').hide();
				
				SizesCategory="MenSizes";
				StylesCategory="MenStyles";
			}
			
		}
		else
		{
			//console.log('---->>>>>  SocialCategory is not selected ---->>>>>>>>>');
			//$('#unisex_select_pannel').show();
			//$('#women_select_pannel').hide();
			//$('#men_select_pannel').hide();
			
			SizesCategory="UnisexSizes";
			StylesCategory="UnisexStyles";
		}
	}
	getSizesBySocialCategory(SizesCategory);
	getStylesBySocialCategory(StylesCategory);

}

function getSizesForMenCheckedOrUnChecked()
{

	//console.log('*********----->>>>>> genderid_men is clicked ----->>>>>>>**********');
	var SizesCategory="";
	var StylesCategory="";
	
	if($('#genderid_men').attr('checked'))
	{
		//console.log('---->>>>> genderid_men is checked ---->>>>>>>>>');
		if($('#genderid_women').attr('checked'))
		{
			//console.log('---->>>>> genderid_women is checked ---->>>>>>>>>');
			if($('#genderid_unisex').attr('checked'))
			{
				//console.log('---->>>>> genderid_unisex is checked ---->>>>>>>>>');
				//$('#unisex_select_pannel').show();
				//$('#women_select_pannel').hide();
				//$('#men_select_pannel').hide();
				
				SizesCategory="UnisexSizes";
				StylesCategory="UnisexStyles";
			}
			else
			{
				//$('#unisex_select_pannel').show();
				//$('#women_select_pannel').hide();
				//$('#men_select_pannel').hide();
				
				SizesCategory="UnisexSizes";
				StylesCategory="UnisexStyles";
			}
		}
		else if($('#genderid_unisex').attr('checked'))
		{
			//console.log('---->>>>> genderid_unisex is checked ---->>>>>>>>>');
			//$('#unisex_select_pannel').show();
			//$('#women_select_pannel').hide();
			//$('#men_select_pannel').hide();
			
			SizesCategory="UnisexSizes";
			StylesCategory="UnisexStyles";
		}
		else
		{
			//$('#men_select_pannel').show();
			//$('#women_select_pannel').hide();
			//$('#unisex_select_pannel').hide();
			
			SizesCategory="MenSizes";
			StylesCategory="MenStyles";
		}
		
	}
	else 
	{
		//console.log('---->>>>> genderid_men is not checked ---->>>>>>>>>');
		
		if($('#genderid_women').attr('checked'))
		{
			//console.log('---->>>>> genderid_women is checked ---->>>>>>>>>');
			if($('#genderid_unisex').attr('checked'))
			{
				//console.log('---->>>>> genderid_unisex is checked ---->>>>>>>>>');
				//$('#unisex_select_pannel').show();
				//$('#women_select_pannel').hide();
				//$('#men_select_pannel').hide();
				
				SizesCategory="UnisexSizes";
				StylesCategory="UnisexStyles";
			}
			else
			{
				//$('#women_select_pannel').show();
				//$('#men_select_pannel').hide();
				//$('#unisex_select_pannel').hide();
				
				SizesCategory="WomenSizes";
				StylesCategory="WomenStyles";
			}
		}
		else if($('#genderid_unisex').attr('checked'))
		{
			//console.log('---->>>>> genderid_unisex is checked ---->>>>>>>>>');
			//$('#unisex_select_pannel').show();
			//$('#women_select_pannel').hide();
			//$('#men_select_pannel').hide();
			
			SizesCategory="UnisexSizes";
			StylesCategory="UnisexStyles";
		}
		else
		{
			//console.log('---->>>>>  SocialCategory is not selected ---->>>>>>>>>');
			//$('#unisex_select_pannel').show();
			//$('#women_select_pannel').hide();
			//$('#men_select_pannel').hide();
			
			SizesCategory="UnisexSizes";
			StylesCategory="UnisexStyles";
		}
	}
	getSizesBySocialCategory(SizesCategory);
	getStylesBySocialCategory(StylesCategory);

}

function getFilteredProductsForSortJSON(loopVar,offSet)
{
	//////console.log("Inside getFilteredProductsForSortJSON : "+loopVar+" "+offSet);
	
	var imageUrl="http://commondatastorage.googleapis.com/images2.solestruck.com/";
	var retVal=new Boolean(true);
	var isNew;
	var isSale;
	var isAvailable;
	var sold_out="<a class=\"sold_out\" >SOLD OUT</a>";
	var productVariantList=new Array();
	
	$('#filterFormsort').ajaxSubmit(
			{
				url:"/getFilteredProductsForSortJSON.htm",
				data:{loopVar:loopVar, offSet:offSet},
				dataType:'json',
				success:function(productdto){

			
	//$.getJSON("/getFilteredProductsForSortJSON.htm",{"loopVar":loopVar,"offSet":offSet},function(productdto){
		
		//////console.log(productdto);
		//////console.log("*************productdto size is : "+productdto.length);
		for(var i=0;i<productdto.length;i++)
		{
			var vendorName=productdto[i].vendorName;
			var shoeName=productdto[i].productName;
			var vendorNameL;
			var vendorNameR;
			if(vendorName!=null)
			{
				 vendorNameL=vendorName.toLowerCase();
				 vendorNameR=vendorNameL.replace(/ /g,"-");
			}
			//////console.log("Inside loop####################################################### "+vendorNameR);
			
			//////console.log("Inside forloop of proJSON"+vendorName);
			//////console.log("Inside forloop of proJSON productName --------------------"+productdto[i].productName);
			//////console.log("Inside forloop of proJSON--------------------------------"+productdto[i].nextAvailable);
			//alert(shoeName);
			if(productdto[i].nextAvailable)
			{
				retVal=true;
				//////console.log('inside If');
			}
			if(productdto[i].nextAvailable==false)
			{
				retVal=false;
				//////console.log('inside else for product '+productdto[i].productName);
			}
			
			//////console.log("After setting retVal is "+retVal);
			$.each(productdto[i].colorVariant,function(key,value)
				{
					$.each(value,function(index,item)
						{
							productVariantList.push(item);
						});
								
				});
		
				for(var j=0;j<productdto[i].colors.length;j++)
				{
					//////console.log("Inside color for loop for product "+productdto[i].productName+" and colorsize is "+key.length);
					var retailPrice;
					var salePrice;
					var discountPercent;
					
					var colorName=productdto[i].colors[j].customColor;
					//////console.log("Inside colors loop");
					filterShoeCount=filterShoeCount+1;
							//////console.log(productVariantList.length);
							for(var k=0;k<productVariantList.length;k++)
								{
						
									if(productVariantList[k].colorkey.id == productdto[i].colors[j].key.id)
									{
										//////console.log("Inside prodcutVariant if loop{{ "+productdto[i].productName+"for color "+productdto[i].colors[j].customColor);
										if(productVariantList[k].productUnitLocations.length>0)
										{
											isAvailable=true;
										}
										if(productVariantList[k].saleprice>0.0)
										{
											 isSale=true
											 retailPrice=productVariantList[k].retailprice;
											 salePrice=productVariantList[k].saleprice;
											 discountPercent=Math.floor(((retailPrice-salePrice)/retailPrice)*100);
										}
										else
										{
											if(productVariantList[k].recentArrival==true)
											{
												isNew=true
											}
											if(productVariantList[k].retailprice > 0.0)
											{
												retailPrice=productVariantList[k].retailprice;
												//////console.log("Inside setting retailprice block "+retailPrice);
											}
										}
									}
								}
							//////console.log("outside prodcutVariant for loop "+retVal);
							var shoe_img;
							if(vendorNameR!=null && vendorName!=null)
							{
							 shoe_img="<a class=\"shoes_img\" onclick=\"goToIdp('"+productdto[i].productId+"','"+productdto[i].vendorName+"','"+productdto[i].colors[j].key.id+"')\"><img src="+imageUrl+vendorNameR+"-shoes/"+vendorName.replace(/ /g,"-")+"-shoes-"+shoeName.replace(/ /g,"-")+"-("+colorName.replace(/ /g,"-")+")-010507.jpg></img></a>";
							}
							var shoe_brand="<a class=\"shoe_brand\" onclick=\"goToIdp('"+productdto[i].productId+"','"+productdto[i].vendorName+"','"+productdto[i].colors[j].key.id+"')\">"+vendorName+"</a>";
			                var shoe_name="<a class=\"shoe_name\" onclick=\"goToIdp('"+productdto[i].productId+"','"+productdto[i].vendorName+"','"+productdto[i].colors[j].key.id+"')\">"+shoeName+"</a>";
			                var shoe_priceR;
			                var shoe_priceS;
			                var dis_percent;
			                if(isSale==true && isAvailable==true)
			                {
			                	shoe_priceR="<a class=\"shoe_price\" onclick=\"goToIdp('"+productdto[i].productId+"','"+productdto[i].vendorName+"','"+productdto[i].colors[j].key.id+"')\"><del>$"+retailPrice+"</del></a>";
			                	shoe_priceS="<a class=\"shoe_price\" style=\"color:red;\" onclick=\"goToIdp('"+productdto.productId+"','"+productdto.vendorName+"','"+productdto[i].colors[j].key.id+"')\">Sale $"+salePrice+"</a>";
			                	dis_percent="<a class=\"shoe_price\" onclick=\"goToIdp('"+productdto[i].productId+"','"+productdto[i].vendorName+"','"+productdto[i].colors[j].key.id+"')\">("+discountPercent+"%OFF)</a>";
			                }
			                else
			                {
			                	shoe_priceR="<a class=\"shoe_price\" onclick=\"goToIdp('"+productdto[i].productId+"','"+productdto[i].vendorName+"','"+productdto[i].colors[j].key.id+"')\">$"+retailPrice+"</a>";
			                }
			                
			                var myHTML;
			                if(isNew==true)
			                {
			                	myHTML="<li><div style=\"display:none;\" id="+filterShoeCount+"> <span class=\"new_lable\"></span>";
			                }
			                else
			                {
			                	myHTML="<li><div style=\"display:none;\" id="+filterShoeCount+"> <span></span>";
			                }
							myHTML+=shoe_img;
							myHTML+=shoe_brand;
							myHTML+=shoe_name;
							if(isAvailable==false)
							{
								myHTML+=sold_out;
							}
							else
							{
								if(isSale==true && isAvailable==true)
								{
									myHTML+=shoe_priceR;
									myHTML+=shoe_priceS;
									myHTML+=dis_percent;
								}
								else
								{
									myHTML+=shoe_priceR;
								}
							
							}
							
							myHTML+='</div></li>';
							//////console.log(myHTML);
							$("#filteredDynamicItems ul").append(myHTML);
						 retailPrice="";
						 salePrice="";
						 discountPercent="";
					
						 isNew=false;//////console.log("Inside color for loop "+retVal);
						 isSale=false;	 
						 isAvailable=false;
				}
			
			if(retVal==false || productdto.length==0)
			{
				//////console.log("Inside the clearInterval");
				clearInterval(filterInterval);
			}
		}

		if(productdto.length==0)
		{
			//////console.log("Inside the clearInterval  *******  No Products Available!  ********");
			clearInterval(filterInterval);
		}
		
		//////console.log("Before returning the value of retVal---------------- "+retVal);
		
		//////console.log("After reutrn statementttttttttttttttttttttttttttttttttttttttttt "+retVal);
	}//End of Success Funtion
	});
	
}


//Upto here For Filtering the products in All Listing Pages like Gender,Style,Size,Color,Brand and Price by YES
