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
			
			if(!(minAmount==1 && maxAmount==5000) || $('.item_selection_pannel').find('input[type=checkbox]:checked').length>0)
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
				
			if(!(minAmount==1 && maxAmount==5000))
			{
				//console.log('Price Filter is Selected. so Browser Back Price Filter values preserving.....');
				retainingPriceFilterSelected=true;
				$(".loading_page").show();
				$("#filteredProducts").html("");
				
				if($('.item_selection_pannel').find('input[type=checkbox]:checked').length>0)
				{
					//console.log('Price Filter is Selected. And retaining Gender,Size,Color,Style and Brand Results.....');
					displayCheckedNames();
					$(".loading_page").fadeOut();
				}	
					
				$(function() {
					$( ".slider-vertical" ).slider({
						orientation: "horizontal",
						range: true,
						min: 1,
						max: 5000,
						values:[ minAmount, maxAmount ],
						slide: function( event, ui ) {
							//$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
							$( ".amount" ).html( "<div class='filterMinPrice fl'> $" + ui.values[ 0 ] + "</div> <div class='filterMaxPrice fr'> $" + ui.values[ 1 ]+"</div> <div class='clear_both'></div>" );
							$("#minAmount").val(ui.values[ 0 ]);
							$("#maxAmount").val(ui.values[ 1 ]);
						}
					});
					
					//$( "#amount" ).val( "$" + $( ".slider-vertical" ).slider( "values", 0 ) +" - $" + $( ".slider-vertical" ).slider( "values", 1 ) );
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
					
					displayCheckedNames();
					//getFilteredProducts();
					retainingFilteredProducts();
					
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
	$(".item_selection_pannel").removeClass("item_selection_pannel_s");
	$(".item_selection_pannel").removeClass("item_selection_pannel_m");
	
	//$('.global_topbtm_scroll').fadeIn();
	
	$('.previous_page').click(function(){
		if($("#paramAttID").val()==null||$("#paramAttID").val()=='')
			loadPrevPage('/vintage-shoes/');
		else
			loadPrevPage('/vintage-shoes/size-'+$("#paramAttID").val()+'/');
	});
	
	$('.next_page').click(function(){
		if($("#paramAttID").val()==null||$("#paramAttID").val()=='')
			 loadNextPage('/vintage-shoes/');
		else
			loadNextPage('/vintage-shoes/size-'+$("#paramAttID").val()+'/');
	});
	
	$('#prevMorePage').click(function(){
		if($("#paramAttID").val()==null||$("#paramAttID").val()=='')
			loadPrevPage('/vintage-shoes/');
		else
			loadPrevPage('/vintage-shoes/size-'+$("#paramAttID").val()+'/');
	});
	
	$('#nextMorePage').click(function(){
		if($("#paramAttID").val()==null||$("#paramAttID").val()=='')
			loadNextPage('/vintage-shoes/');
		else
			loadNextPage('/vintage-shoes/size-'+$("#paramAttID").val()+'/');
	});
	
	$("[id^='pagecount_']").click(function(){
		if($("#paramAttID").val()!=null)
		window.location='/vintage-shoes/size-'+$("#paramAttID").val()+'/Page-'+$(this).text();
		
	});
	
	
	//   On Page Load displaying the Checked Filter by YES
	
	if(curPage=='VintagePageBySize')
	{
		//console.log("------->>>>>>>>>>>>  we are inside VintagePageBySize...");
		vintageSize	=$('#vintageSize').val();
		socialCat   =$('#socialCat').val();
		//console.log("------->>>>>>>>>>>>  vintageSize is ..." +vintageSize);
		//console.log("------->>>>>>>>>>>>  socialCat is ..." +socialCat);
		
		$.ajax({url:'/getAttributeIdForPageBySize.htm',data:({"size":vintageSize}),success:function(vintageSizeAttrId)
			{
				//console.log("------->>>>>>>>>>>>  vintageSizeAttrId is ..." +vintageSizeAttrId);
				$('#sizeid_'+vintageSizeAttrId).attr("checked", "checked");
				$('#genderid_'+socialCat).attr("checked", "checked");
				displayCheckedNames();
				$(".loading_page").fadeOut();
			}});
		
	}
	
	//	Upto here On Page Load displaying the Checked Filter by YES

	
	/*$(".custom_dropdown ul li").live('click',function()
	{
		if($("#paramAttID").val()==null||$("#paramAttID").val()=='')
			{
					changeItemsPerPage('/vintage-shoes/',$(this).attr('title'));
			}
		else
			{
					changeItemsPerPage('/vintage-shoes/size-'+$("#paramAttID").val(),$(this).attr('title'));
			}
			
	});*/
	
	if($('#filterby').val()!=null &&  $('#filterby').val()!='' && $('#attId').val()!=null && $('#attId').val()!='')
	{
		var filterby=$('#filterby').val();
		var attId=$('#attId').val();
		var sc=$('#sc').val();
		if(sc!=null)
		{
			$('#genderid_'+sc).attr("checked", "checked");
			displayCheckedNames();
			getFilteredProducts();
			
		}
		if(filterby==='style')
			{
			$('#styleid_'+attId).attr("checked", "checked");
			displayCheckedNames();
			getFilteredProducts();
			
			}
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
function showShoesForSocialCategory(url,socialCategory)
{
	$.ajax({url:'/socialCategory.htm',data:({"socialCategory":socialCategory}),success:function(data)
		{
			window.location=url;
		}});
}

function changeItemsPerPage(url,itemsperpage)
{
	//alert("changeItemsPerPage function ");
	var socialCategory="";
	
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
 *   For Filtering the products in Vintage Page like Style,Size,Color and Price by YES
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
					url:"/getFilteredProductsForVintagePage.htm?filterPageNumber="+(filterPageNumber),
				
				success:function(data){
					
						//console.log('Got filtered product for Vintage Page Filter!');
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
				url:"/getFilteredProductsForVintagePage.htm?filterPageNumber="+(filterPageNumber),
			
			success:function(data){
				//console.log('Got filtered product for Vintage Page Filter!');
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
				url:"/getFilteredLoadeMoreProductsForVintagePageFilter.htm?filterPageNumber="+(filterPageNumber),
				success:function(html){
					//console.log('Got filtered product for Vintage Page Filter!');
					$('#retainfilterPageNumber').val(filterPageNumber);
					$('#filterPageNumber').val(filterPageNumber);
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


//  Upto here For Filtering the products in Vintage Page like Style,Size,Color and Price by YES

		/*Paginatin according to the new specification*/

function showNextMorePages()
{
	//console.log(" inside showNextMorePages function  new  ");
		var count			= 0;
		var pageshow		= ""; 
		var serverName		= $('#servername').val();
		startValue			= parseInt(currentpage)+5;
		var socialCategory  = $('#sc').val();
		var newsize         = $('#newsize').val();
		var vintagesizeurl	= "";
		
		if(socialCategory!='null' && newsize!='null' && newsize!="")
		{
			vintagesizeurl='/vintage-'+socialCategory+'s-shoes/size-'+newsize;
		}
		else if(socialCategory!='null' && socialCategory!="")
		{
			vintagesizeurl='/vintage-'+socialCategory+'s-shoes';
		}
		else
		{
			vintagesizeurl='/vintage-shoes';
		}
		
		if(selectedPage!=1)
		{
			pageshow='<a id="previous" class="previous_page " href="'+vintagesizeurl+'/page-'+(parseInt(selectedPage)-1)+'/"></a>'
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
				pageshow=pageshow+'<a class="page_number"  id="pagecount_'+i+'" href="'+vintagesizeurl+'/page-'+i+'/">'+i+'</a>';
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
				pageshow=pageshow+'<a class="next_page " href="'+vintagesizeurl+'/page-'+(parseInt(selectedPage)+1)+'/" ></a>';
			}
			else if(totalavailablepages>=15)
			{
				pageshow=pageshow+'<a class="more_page"  id="sns" onclick="showNextMorePages()"   >...</a>'+'<a class="next_page " href="'+vintagesizeurl+'/page-'+(parseInt(selectedPage)+1)+'/"></a>';
			} 
			else
			{
				pageshow=pageshow+'<a class="next_page " href="'+vintagesizeurl+'/page-'+(parseInt(selectedPage)+1)+'/" ></a>';
			}
			$('.second').html(pageshow);
			$("#pagecount_"+selectedPage).addClass("page_number_selected");
		}
	
}
function showPrevMorePages()
{
		var pageshow	   = "";
		initialPrevPage    = parseInt(currentpage)-5;
		var serverName     = $('#servername').val();
		var socialCategory = $('#sc').val();
		var newsize		   = $('#newsize').val();
		var vintagesizeurl = "";
		
		if(socialCategory!='null' && newsize!=null && newsize!="")
		{
			vintagesizeurl='/vintage-'+socialCategory+'s-shoes/size-'+newsize;
		}
		else if(socialCategory!='null' && socialCategory!='')
		{
			vintagesizeurl='/vintage-'+socialCategory+'s-shoes';
		}
		else
		{
			vintagesizeurl='/vintage-shoes';
		}
		
		
		if(initialPrevPage>=6)
		{
			 if(selectedPage!=1)
			 {
				 pageshow='<a id="previous" class="previous_page " href="'+vintagesizeurl+'/page-'+(parseInt(selectedPage)-1)+'/"></a>'
			 }
			 	pageshow=pageshow+'<a class="more_page" onclick="showPrevMorePages();" >...</a>'	
		}
		else if(selectedPage!=1)
		{
			pageshow='<a id="previous" class="previous_page " href="'+vintagesizeurl+'/page-'+(parseInt(selectedPage)-1)+'/"></a>'
		}
		
		for(i=parseInt(initialPrevPage) ;i<=parseInt(initialPrevPage)+9&&i<=totalavailablepages; i++)
		{
			pageshow=pageshow+'<a class="page_number" id="pagecount_'+i+'" href="'+vintagesizeurl+'/page-'+i+'/">'+i+'</a>';
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
			pageshow=pageshow+'<a class="more_page"  onclick="showNextMorePages()" >...</a>'+'<a class="next_page " href="'+vintagesizeurl+'/page-'+(parseInt(selectedPage)+1)+'/" ></a>';
		}
		else
		{
			pageshow=pageshow+'<a class="next_page "  href="#" href="'+vintagesizeurl+'/page-'+(parseInt(selectedPage)+1)+'/" ></a>';
		}
		
		$('.second').html(pageshow);
		$("#pagecount_"+selectedPage).addClass("page_number_selected");
		
}