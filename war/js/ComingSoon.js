var currentpage='1';
var totalavailablepages=1;
var nextInitialPage=6;
var initialPrevPage=1
var selectedPage="";
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
	
	// Upto here This is for retaining Filter results when clicks browser back button (SSGA-59) by YES
	
	totalavailablepages = $('#totavailpages').val();
	currentpage		    = $('#currentPage').val();
	selectedPage		= $('#currentPage').val();
	$(".item_selection_pannel").addClass("item_selection_pannel_s");
	$(".item_selection_pannel_s").removeClass("item_selection_pannel");
	//$('.global_topbtm_scroll').fadeIn();
	$("#women_tab_act").click(function ()
     {
		showShoesForSocialCategory('/preorders/','women');
     });

	$("#men_tab_act").click(function () 
	{
		showShoesForSocialCategory('/preorders/','men');
	});
			
			
	$('#previous').click(function()
    {
		loadPrevPage('/preorders/');
		
	});
	
	$('#sns').click(function()
    {
		loadPrevPage('/preorders/');
		
	});
	
	$('#lnp').click(function()
    {
		
		loadNextPage('/preorders/');
		
	});
	
	$('#next').click(function()
    {
		
		loadNextPage('/preorders/');
		
	});
	
	/*$('#itemsperpage1').click(function()
    {
		
		changeItemsPerPage('/preorders/',24)
		
	});
	$('#itemsperpage2').click(function()
	{
		
		changeItemsPerPage('/preorders/',48)
		
	});
	$('#itemsperpage3').click(function()
    {
		
		changeItemsPerPage('/preorders/',96)
		
	});*/
	
});

function changeItemsPerPage(url,itemsperpage)
{
	//alert("changeItemsPerPage function ");
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







function pausecomp(millis) 
{
var date = new Date();
var curDate = null;

do { curDate = new Date(); } 
while(curDate-date < millis);
} 
function goToIdp(productid,vendorName,colorId)
{
	//alert("Inside goToIDP"+productid);
	//var url="/idp.htm?productId="+productid+"&vendorName="+vendorName+"&colorId="+colorId+"&category="+category;
	var url="/idp.htm?productId="+productid+"&vendorName="+vendorName+"&colorId="+colorId;
	location.href=url;
}
function getProductsListForCategory(category)
{
	//alert("In SortPage"+category);
	var url="/getProductsForCategory.htm?category="+category;
	location.href=url;
}
function getProductListForVendor(attributeid,vendorName,socialcategory)
{
	//alert("Inside getProductListForVendor "+attributeid);
	var url="/getProductListForVendor.htm?attributeid="+attributeid+"&vendorName="+vendorName+"&socialcategory="+socialcategory;
	location.href=url;
	
}
function getSaleItemsBySize(attId)
{
	var url="/getSaleItemsBySize.htm?attId="+attId;
	location.href=url;
}

function getVintageItemsBySize(style,attId)
{
	var url="/getVintageProductBySize.htm?style="+style+"&attId="+attId;
	location.href=url;
}
function getNewArrival()
{
	var url="/getNewArrivalProduct.htm";
	location.href=url;
}
function getVintageProduct(style)
{
	var url="/getVintageProduct.htm?style="+style;
	location.href=url;
}
function getSaleItems()
{
	var url="/getSaleItems.htm"
		location.href=url;
}

/*
 *   For Filtering the products in ComingSoon Page like Style,Size,Color and Price by YES
 */
	
function getFilteredProducts()
{	
	//console.log("------->>>>>>>>>>>>  Before submitting the Filter Form...");
	var filterPageNumber=1;
	retainingPriceFilterSelected=false;
	finished=false;
	
	//console.log("------->>>>>>>>>>>>  Before submitting the Filter Form...");
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
					url:"/getFilteredProductsForComingSoonPage.htm?filterPageNumber="+(filterPageNumber),
				
				success:function(data){
					
						//console.log('Got filtered product for ComingSoon Page Filter!');
						$('#retainfilterPageNumber').val(filterPageNumber);
						$('#pageloadProducts').hide();
						$('#filteredProducts').show();
						$("#filteredProducts").html(data);
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
				url:"/getFilteredProductsForComingSoonPage.htm?filterPageNumber="+(filterPageNumber)+"&browserBackClicked=true",
			
			success:function(data){
				//console.log('Got filtered product for ComingSoon Page Filter!');
				$("#filteredProducts").html(data);
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
				url:"/getFilteredLoadeMoreProductsForComingSoonPageFilter.htm?filterPageNumber="+(filterPageNumber),
				success:function(html){
					//console.log('Got filtered product for ComingSoon Page Filter!');
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


//  Upto here For Filtering the products in ComingSoon Page like Style,Size,Color and Price by YES


/*Paginatin according to the new specification*/

function showNextMorePages()
{
	//console.log(" inside showNextMorePages function  new  ");
		var count=0;
		var pageshow=""; 
		var serverName=$('#servername').val();
		startValue=parseInt(currentpage)+5;
		if(selectedPage!=1)
		{
			pageshow='<a id="previous" class="previous_page " href="/preorders/page-'+(parseInt(selectedPage)-1)+'/"></a>'
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
				pageshow=pageshow+'<a class="page_number"  id="pagecount_'+i+'" href="/preorders/page-'+i+'/">'+i+'</a>';
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
				pageshow=pageshow+'<a class="next_page " href="/preorders/page-'+(parseInt(selectedPage)+1)+'/" ></a>';
			}
			else if(totalavailablepages>=15)
			{
				pageshow=pageshow+'<a class="more_page"  id="sns" onclick="showNextMorePages()"   >...</a>'+'<a class="next_page " href="/preorders/page-'+(parseInt(selectedPage)+1)+'/"></a>';
			} 
			else
			{
				pageshow=pageshow+'<a class="next_page " href="/preorders/page-'+(parseInt(selectedPage)+1)+'/" ></a>';
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
		if(initialPrevPage>=6)
		{
			 if(selectedPage!=1)
			 {
				 pageshow='<a id="previous" class="previous_page " href="/preorders/page-'+(parseInt(selectedPage)-1)+'/"></a>'
			 }
			 	pageshow=pageshow+'<a class="more_page" onclick="showPrevMorePages();" >...</a>'	
		}
		else if(selectedPage!=1)
		{
			pageshow='<a id="previous" class="previous_page " href="/preorders/page-'+(parseInt(selectedPage)-1)+'/"></a>'
		}
		
		for(i=parseInt(initialPrevPage) ;i<=parseInt(initialPrevPage)+9&&i<=totalavailablepages; i++)
		{
			pageshow=pageshow+'<a class="page_number" id="pagecount_'+i+'" href="/preorders/page-'+i+'/">'+i+'</a>';
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
			pageshow=pageshow+'<a class="more_page"  onclick="showNextMorePages()" >...</a>'+'<a class="next_page " href="/preorders/page-'+(parseInt(selectedPage)+1)+'/" ></a>';
		}
		else
		{
			pageshow=pageshow+'<a class="next_page "  href="#" href="/preorders/page-'+(parseInt(selectedPage)+1)+'/" ></a>';
		}
		
		$('.second').html(pageshow);
		$("#pagecount_"+selectedPage).addClass("page_number_selected");
		
}