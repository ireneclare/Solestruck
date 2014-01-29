var currentpage='1';
var totalavailablepages=1;
var nextInitialPage=6;
var initialPrevPage=1
var selectedPage="";
var curPage="";
var retainingPriceFilterSelected=false;
var retscrollTop=$('#retaining_scroll_top').val();
$(document).ready(function()
{
	// This is for retaining Filter results when clicks browser back button (SSGA-59) by YES
		
		$(window).bind("scroll", function(e){
			var retainscrollTop=$(window).scrollTop();
			
			if(!(minAmount==10 && maxAmount==1000) || $('.item_selection_pannel').find('input[type=checkbox]:checked').length>0 || $('#hiddenLowHigh').val()=="true" || $('#hiddenHighLow').val()=="true")
			{
				//console.log("---->>>>>>> Present Page retainscrollTop  value is .....   :  " +retainscrollTop);
				$('#retaining_scroll_top').val(retainscrollTop);
			}
			
		});
		
		var curTime=new Date();
		//console.log(" curTime is " +curTime.getTime());
		if($('#sysTimeForBrowserBack').val()==null || $('#sysTimeForBrowserBack').val()=="")
		{
			//console.log("sysTimeForBrowserBack is Empty.. So browser Back button Not clicked");
			
				$('#sysTimeForBrowserBack').val(curTime.getTime());
				
		
		}
		else
		{
			if($('#FilterCheckedValue').val()==null || $('#FilterCheckedValue').val()=="")
			{
				//console.log('No Filter Checked');
				
			}
			else
			{
			//console.log("sysTimeForBrowserBack is Not Empty ...... So browser Back button clicked....");
			var minAmount=$('#hiddenMinPrice').val();
			var maxAmount=$('#hiddenMaxPrice').val();
			//console.log('Browser Back minAmount is .....   :  ' + minAmount);
			//console.log('Browser Back maxAmount is .....   :  ' + maxAmount);
			//console.log('Browser Back hiddenLowHigh is : ' + $('#hiddenLowHigh').val());
			//console.log('Browser Back hiddenHighLow is : ' + $('#hiddenHighLow').val());
				
			if(!(minAmount==10 && maxAmount==1000))
			{
				//console.log('Price Filter is Selected. so Browser Back Price Filter values preserving.....');
				retainingPriceFilterSelected=true;
				$(".loading_page").show();
				$("#filteredProducts").html("");
				
				if($('#hiddenLowHigh').val()=="true")
				{
					//console.log('$$$$$$$ 1  Browser Back hiddenLowHigh is  $$$$$$$$ : ' + $('#hiddenLowHigh').val());
					$('#price_Low_High').addClass('selected');
					$('#price_High_Low').removeClass('selected');
					$('#isPriceLowHigh').val('true');
					$('#isPriceHighLow').val('false');
					//displayCheckedNames();
				}
				if($('#hiddenHighLow').val()=="true")
				{
					//console.log('%%%%%%%% 1  Browser Back hiddenHighLow is  %%%%%%%%% : ' + $('#hiddenHighLow').val());
					$('#price_High_Low').addClass('selected');
					$('#price_Low_High').removeClass('selected');
					$('#isPriceHighLow').val('true');
					$('#isPriceLowHigh').val('false');
					//displayCheckedNames();
				}
				
				//if($('.item_selection_pannel').find('input[type=checkbox]:checked').length>0)
				//{
					//console.log('Price Filter is Selected. And retaining Gender,Size,Color,Style and Brand Results.....');
					//displayCheckedNames();
				//}	
					
				$(function() {
					$( ".slider-vertical" ).slider({
						orientation: "horizontal",
						range: true,
						min: 10,
						max: 1000,
						values:[ minAmount, maxAmount ],
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
			}
			else
			{
				//console.log("Inside Else....Price Filter is Not Selected.....");
				if($('.item_selection_pannel').find('input[type=checkbox]:checked').length>0)
				{
					//console.log("Inside Else....Price Filter is Not Selected........And retaining Gender,Size,Color,Style and Brand Results");
						$(".loading_page").show();
						$("#filteredProducts").html("");
						
						if($('#hiddenLowHigh').val()=="true")
						{
							//console.log('$$$$$$$ 1  Browser Back hiddenLowHigh is  $$$$$$$$ : ' + $('#hiddenLowHigh').val());
							$('#price_Low_High').addClass('selected');
							$('#price_High_Low').removeClass('selected');
							$('#isPriceLowHigh').val('true');
							$('#isPriceHighLow').val('false');
						}
						if($('#hiddenHighLow').val()=="true")
						{
							//console.log('%%%%%%%% 1  Browser Back hiddenHighLow is  %%%%%%%%% : ' + $('#hiddenHighLow').val());
							$('#price_High_Low').addClass('selected');
							$('#price_Low_High').removeClass('selected');
							$('#isPriceHighLow').val('true');
							$('#isPriceLowHigh').val('false');
						}
						
						displayCheckedNames();
						//getFilteredProducts();
						retainingFilteredProducts();
					
					
				}
				else
				{
					if($('#hiddenLowHigh').val()=="true")
					{
						//console.log('$$$$$$$ 3  Browser Back hiddenLowHigh is  $$$$$$$$ : ' + $('#hiddenLowHigh').val());
						$('#price_Low_High').addClass('selected');
						$('#price_High_Low').removeClass('selected');
						$('#isPriceLowHigh').val('true');
						$('#isPriceHighLow').val('false');
						$(".loading_page").show();
						displayCheckedNames();
						retainingFilteredProducts();
					}
					if($('#hiddenHighLow').val()=="true")
					{
						//console.log('%%%%%%%% 3  Browser Back hiddenHighLow is  %%%%%%%%% : ' + $('#hiddenHighLow').val());
						$('#price_High_Low').addClass('selected');
						$('#price_Low_High').removeClass('selected');
						$('#isPriceHighLow').val('true');
						$('#isPriceLowHigh').val('false');
						$(".loading_page").show();
						displayCheckedNames();
						retainingFilteredProducts();
					}
				}
			}
				
		}
	}
	
	// Upto here This is for retaining Filter results when clicks browser back button (SSGA-59) by YES
	
	totalavailablepages = $('#totavailpages').val();
	currentpage		    = $('#currentPage').val();
	selectedPage		= $('#currentPage').val();
	curPage				=$('#curPage').val();
	
	var ssize=$("#shoeCount").val();
	if(ssize<1)
		{
		$('.content_holder').hide();
		$('.sorry_no_items').show();
		}
	$(".item_selection_pannel").addClass("item_selection_pannel_s");
	$(".item_selection_pannel_s").removeClass("item_selection_pannel");
	//$('.global_topbtm_scroll').fadeIn();
	
	$('.previous_page').click(function(){
		if($("#paramAttID").val()==null||$("#paramAttID").val()=='')
			loadPrevPage('/sale-shoes/');
		else
			loadPrevPage('/sale-shoes/size-'+$("#paramAttID").val()+'/');
	});
	
	$('.next_page').click(function(){
		if($("#paramAttID").val()==null||$("#paramAttID").val()=='')
			 loadNextPage('/sale-shoes/');
		else
			loadNextPage('/sale-shoes/size-'+$("#paramAttID").val()+'/');
	});
	
	$('#prevMorePage').click(function(){
		if($("#paramAttID").val()==null||$("#paramAttID").val()=='')
			loadPrevPage('/sale-shoes/');
		else
			loadPrevPage('/sale-shoes/size-'+$("#paramAttID").val()+'/');
	});
	
	$('#nextMorePage').click(function(){
		if($("#paramAttID").val()==null||$("#paramAttID").val()=='')
			loadNextPage('/sale-shoes/');
		else
			loadNextPage('/sale-shoes/size-'+$("#paramAttID").val()+'/');
	});
	
	$("[id^='pagecount_']").click(function(){
		if($("#paramAttID").val()!=null)
		window.location='/sale-shoes/size-'+$("#paramAttID").val()+'/Page-'+$(this).text();
		
	});
	
	/*$(".custom_dropdown ul li").live('click',function()
	{
		if($("#paramAttID").val()==null||$("#paramAttID").val()=='')
			{
					changeItemsPerPage('/sale-shoes/',$(this).attr('title'));
			}
		else
			{
					changeItemsPerPage('/sale-shoes/size-'+$("#paramAttID").val(),$(this).attr('title'));
			}
			
	});*/
	

	//  On Page Load displaying the Checked Filter by YES
	
	if(curPage=='SalePageBySize')
	{
		//console.log("------->>>>>>>>>>>>  we are inside SalePageBySize...");
		saleSize	=$('#saleSize').val();
		socialCat   =$('#socialCat').val();
		//console.log("------->>>>>>>>>>>>  saleSize is ..." +saleSize);
		//console.log("------->>>>>>>>>>>>  socialCat is ..." +socialCat);
		
		$.ajax({url:'/getAttributeIdForPageBySize.htm',data:({"size":saleSize}),success:function(saleSizeAttrId)
			{
				//console.log("------->>>>>>>>>>>>  saleSizeAttrId is ..." +saleSizeAttrId);
			if($('#filterby').val()==='sizeonly')
				{
				$('#sizeid_'+saleSizeAttrId).attr("checked", "checked");
				
				displayCheckedNames();
				getFilteredProducts();
				}
			else
				{
				$('#sizeid_'+saleSizeAttrId).attr("checked", "checked");
				$('#genderid_'+socialCat).attr("checked", "checked");
				displayCheckedNames();
				$(".loading_page").fadeOut();
				}
			
			}});
		
	}
	
	//	Upto here On Page Load displaying the Checked Filter by YES
	if($('#vendorId').val()!=null&&$('#vendorId').val()!="")
	{
	var vendorId=$('#vendorId').val();
	$('#brandid_'+vendorId).attr("checked", "checked");
	
	displayCheckedNames();
	getFilteredProducts();
	}

	
});


function changeItemsPerPage(url,itemsperpage)
{
	
	$.ajax({url:'/changeItemsPerPage.htm',data:({"itemsperpage":itemsperpage}),success:function(data)
		{
			window.location=url;
		}});
}

function loadPrevPage(url)
{
	var reqPage=$('#currentPage').val()-1;
	
	if(reqPage>0)
		{
			window.location=url+"Page-"+reqPage;
		}
}

function loadNextPage(url)
{
	var reqPage=parseInt($('#currentPage').val())+1;
	var availPaes=$('#totavailpages').val();
	
	if(reqPage<=availPaes)
		{
			window.location=url+"Page-"+reqPage;
		}
}
		
/*
 *   For Filtering the products in Sale Page like Style,Size,Color and Price by YES
 */
function getFilteredProducts()
{

	//console.log("------->>>>>>>>>>>>  Before submitting the Filter Form...");
	var filterPageNumber=1;
	retainingPriceFilterSelected=false;
	finished=false;
	$('#FilterCheckedValue').val(1);
	
	//$("#backgroundPopup").show();
	//console.log('------->>>>>>> *******  mySelectedFilters length is   *******  ----->>>>>>>> :' + $("#mySelectedFilters ul li").length);
	if($("#mySelectedFilters ul li").length==0)
	{
		//console.log('------->>>>>>> Filters @@@@@@  Not selected  @@@@@@@ ----->>>>>>>>');
		$('#pageloadProducts').show();
		$('#filteredProducts').hide();
		$("#filter_sorry_no_items").hide();
		$(".loading_page").hide();
	}
	else
	{
			
		
		//console.log('------->>>>>>> $$$$$   Filters selected  $$$$$$$ ----->>>>>>>>');
		
		/*setTimeout(function(){
			if(finished==false)	{
			$(".loading_page").show();}
			},1000);*/
		
		setTimeout(function(){$('#filterForm').ajaxSubmit(
				{
					//console.log("------>>>>>>> invoked for filterForm");
					url:"/getFilteredProductsForSalePageFilter.htm?filterPageNumber="+(filterPageNumber),
					
					success:function(data){
						
							//console.log('Got filtered product for Sale Page Filter!');
							$('#retainfilterPageNumber').val(filterPageNumber);
							$('#pageloadProducts').hide();
							$('#filteredProducts').show();
							$("#filteredProducts").html(data);
							$("#filter_sorry_no_items").hide();
							var nextAvil=$('#nextAvil').val();
							//console.log('nextAvil is ----->>>>  : ' + nextAvil);
							if(nextAvil=='false')
								{
								//console.log("---------->>>>>>>> Load More is Hided ------>>>>>>>>>>");
								 	$('#loadMoreFilteredResults').hide();
								}
							if($("#shoeCount").val()<1)
							{
								$("#filter_sorry_no_items").show();
								$("#filteredDynamicItems").hide();
								$("#loadMoreFilteredResults").hide();
							}
							else
							{
								$("#filter_sorry_no_items").hide();
							}
							finished=true;
							//$(".loading_page").hide();
							$(".loading_page").fadeOut();
							//$("#backgroundPopup").hide();
						}
				});},500);
	}
}

function retainingFilteredProducts()
{
	
	//console.log("------->>>>>>>>>>>>  Inside retainingFilteredProducts() ......... ");
	var filterPageNumber=parseInt($('#retainfilterPageNumber').val());
	//console.log("filterPageNumber...... is " + filterPageNumber);
	$(".loading_page").show();
	$('#filterForm').ajaxSubmit(
			{
				//console.log("------>>>>>>> invoked for filterForm");
				url:"/getFilteredProductsForSalePageFilter.htm?filterPageNumber="+(filterPageNumber)+"&browserBackClicked=true",
				
				success:function(data){
					//console.log('Got filtered product for Sale Page Filter!');
					$("#filteredProducts").html(data);
					$("#filter_sorry_no_items").hide();
					var nextAvil=$('#nextAvil').val();
					//console.log('nextAvil is ----->>>>  : ' + nextAvil);
					if(nextAvil=='false')
						{
						//console.log("---------->>>>>>>> Load More is Hided ------>>>>>>>>>>");
						 	$('#loadMoreFilteredResults').hide();
						}
					if($("#shoeCount").val()<1)
					{
						$("#filter_sorry_no_items").show();
						$("#filteredDynamicItems").hide();
						$("#loadMoreFilteredResults").hide();
					}
					else
					{
						$("#filter_sorry_no_items").hide();
					}
					finished=true;
					//console.log('Browser Back retscrollTop value  is .....   :  ' + retscrollTop);
					if(retscrollTop!=null)
					{
						//console.log("-------->>>>>>>>>> ......... After BrowserBack <<<<<<<<<<< retscrollTop value is  ......  " +retscrollTop);
						$('html, body').animate({scrollTop:retscrollTop}, 'fast');
					}
					$(".loading_page").hide();
					//$("#backgroundPopup").hide();
					retainingPriceFilterSelected=false;
				}
			});
}

function getLoadMoreFilteredProducts()
{
	//console.log("------->>>>>>>>>>>>  Before submitting the Filter Form For Load More Filtered Shoes   ---------->>>>>>>>>>>>  ");
	//var filterPageNumber=parseInt($('#filterPageNumber').val());
	var filterPageNumber=parseInt($('#retainfilterPageNumber').val());
		filterPageNumber=filterPageNumber+1;
		//console.log('filterPageNumber is ----->>>>  : ' + filterPageNumber);
		retainingPriceFilterSelected=false;
		$(".loading_list").css('display','block');
	 $(".loading_list code").css('display','block');
	 
	 setTimeout(function(){$('#filterForm').ajaxSubmit(
			{
				//console.log("------>>>>>>> invoked for filterForm");
				url:"/getFilteredLoadeMoreProductsForSalePageFilter.htm?filterPageNumber="+(filterPageNumber),
				success:function(html){
					//console.log('Got filtered product for Sort Page Filter!');
					$('#filterPageNumber').val(filterPageNumber);
					$('#retainfilterPageNumber').val(filterPageNumber);
					$(html).appendTo("#filteredDynamicItems");
					$(".loading_list").css('display','none');
					$(".loading_list code").css('display','none');
					var nextAvailForMore=$("#nextAvailForMore_"+filterPageNumber).val();
					//console.log('nextAvailForMore is ----->>>>  : ' + nextAvailForMore);
					if(nextAvailForMore=='false')
						{
						//console.log("---------->>>>>>>> Load More is Hided ------>>>>>>>>>>");
						 	$('#loadMoreFilteredResults').hide();
						}
				}
			});},1000);
	
}

//Upto here For Filtering the products in Sale Page like Style,Size,Color and Price by YES

/*Paginatin according to the new specification*/

function showNextMorePages()
{
	//console.log(" inside showNextMorePages function  new  ");
		var count          = 0;
		var pageshow       = "";
		var serverName     = $('#servername').val();
		startValue	       = parseInt(currentpage)+5;
		var socialCategory = $('#sc').val();
		var newsize        = $('#newsize').val();
		var salesize	   = "";
		//console.log("sc:"+sc+":newsize:"+newsize);
		
		if(socialCategory!='null' && newsize!=null && newsize!="")
		{
			salesize='/sale-'+socialCategory+'s-shoes/size-'+newsize;
				
		}
		else if(socialCategory!='null' &&  socialCategory!='')
		{
			salesize='/sale-'+socialCategory+'s-shoes';
		}
		else
		{
			salesize='/sale-shoes';
		}
		
		if(selectedPage!=1)
		{
			pageshow='<a id="previous" class="previous_page " href="'+salesize+'/page-'+(parseInt(selectedPage)-1)+'/"></a>'
		}
		
		if(initialPrevPage>=1)
		{
			pageshow=pageshow+'<a class="more_page" onclick="showPrevMorePages();" >...</a>'	
		}
		
		//console.log("flag ::"+(startValue>parseInt(totalavailablepages))+" start value :"+startValue+" total pages :"+parseInt(totalavailablepages));
		if(startValue<=parseInt(totalavailablepages))
		{
			for( i=startValue ; i<=startValue+9&&i<=parseInt(totalavailablepages); i++)
			{
				pageshow=pageshow+'<a class="page_number"  id="pagecount_'+i+'" href="'+salesize+'/page-'+i+'/">'+i+'</a>';
				count=i;
			}
		
		
			currentpage=startValue;
		
			if(currentpage==6)
			{
				initialPrevPage=1;
			}
			else
			{
				initialPrevPage=parseInt(currentpage)-5;	
			}
			if( parseInt(count)==totalavailablepages)
			{
				pageshow=pageshow+'<a class="next_page " href="'+salesize+'/page-'+(parseInt(selectedPage)+1)+'/" ></a>';
			}
			else if(totalavailablepages>=15)
			{
				pageshow=pageshow+'<a class="more_page"  id="sns" onclick="showNextMorePages()"   >...</a>'+'<a class="next_page " href="'+salesize+'/page-'+(parseInt(selectedPage)+1)+'/"></a>';
			} 
			else
			{
				pageshow=pageshow+'<a class="next_page " href="'+salesize+'/page-'+(parseInt(selectedPage)+1)+'/" ></a>';
			}
			$('.second').html(pageshow);
			$("#pagecount_"+selectedPage).addClass("page_number_selected");
		}
		
	
}
function showPrevMorePages()
{
		var pageshow="";
		initialPrevPage=parseInt(currentpage)-5;
		var serverName=$('#servername').val();
		var socialCategory=$('#sc').val();
		var newsize=$('#newsize').val();
		
		//console.log("sc:"+sc+":newsize:"+newsize);
		var salesize="";
		if(socialCategory!='null' && newsize!='null' && newsize!="")
		{
			salesize='/sale-'+socialCategory+'s-shoes/size-'+newsize;
		}
		else if(socialCategory!='null' && socialCategory!="")
		{
			salesize='/sale-'+socialCategory+'s-shoes';
		}
		else
		{
			salesize='/sale-shoes';
		}
		
		if(initialPrevPage>=6)
		{
			 if(selectedPage!=1)
			 {
				 pageshow='<a id="previous" class="previous_page " href="'+salesize+'/page-'+(parseInt(selectedPage)-1)+'/"></a>'
			 }
			 	pageshow=pageshow+'<a class="more_page" onclick="showPrevMorePages();" >...</a>'	
		}
		else if(selectedPage!=1)
		{
			pageshow='<a id="previous" class="previous_page " href="'+salesize+'/page-'+(parseInt(selectedPage)-1)+'/"></a>'
		}
		
		for(i=parseInt(initialPrevPage) ;i<=parseInt(initialPrevPage)+9&&i<=totalavailablepages; i++)
		{
			pageshow=pageshow+'<a class="page_number" id="pagecount_'+i+'" href="'+salesize+'/page-'+i+'/">'+i+'</a>';
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
			pageshow=pageshow+'<a class="more_page"  onclick="showNextMorePages()" >...</a>'+'<a class="next_page " href="'+salesize+'/page-'+(parseInt(selectedPage)+1)+'/" ></a>';
		}
		else
		{
			pageshow=pageshow+'<a class="next_page "  href="#" href="'+salesize+'/page-'+(parseInt(selectedPage)+1)+'/" ></a>';
		}
		
		$('.second').html(pageshow);
		$("#pagecount_"+selectedPage).addClass("page_number_selected");
		
}

// Femi - FIX

/*Changed for Browser Back Issue*/
function getShoeListBySocialCategory()
{
	//console.log("It hits getShoeListBySocialCategory");
	socialCat   =$('#socialCatog').val();
	//console.log("CATEGORY:"+socialCat);
	
	$(".loading_page").show();
	$.ajax(
			{
				//console.log("------>>>>>>> invoked for browser Back AJAX function<<<<<<<-----------");
				url:"/getSaleItemsBySize.htm?socialCatagory="+(socialCat),
				method: 'post',
				success:function(data)
				{
					//console.log("Got productlist for Sale Page!");
					$(".loading_page").hide();
				}
			});
	
}