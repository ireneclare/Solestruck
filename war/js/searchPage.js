
var searchPagingInterval;
var itemsShown=0;
var itemsAdded=0;
var pageNumber;
var retscrollTop					= $('#retaining_scroll_top').val();
var isShowMoreHomeResultsClicked	= $('#isShowMoreResultsClicked').val();
var retainSearchPageNumber			= $('#retainSearchPageNumber').val();
$(document).ready(function(){
//	console.log("document ready");
	pageNumber = 2; 
	$(window).bind("scroll", function(e){
		var retainscrollTop=$(window).scrollTop();
		$('#retaining_scroll_top').val(retainscrollTop);
	});
	
	console.log("isShowMoreHomeResultsClicked  ::  "+isShowMoreHomeResultsClicked);
	if(isShowMoreHomeResultsClicked == "true")
	{
//		loadSearchPages();
		var searchTerm="";
		if(document.location.pathname.split('/')[2]==null || document.location.pathname.split('/')[2]=="")
			searchTerm="blankSearch";
		else
			searchTerm=document.location.pathname.split('/')[2];
		
//		var pageNumberForIterate = 2;
		console.log("pageNumber  ::  "+pageNumber);
		for(var iteratePageNumber=pageNumber ; iteratePageNumber<=retainSearchPageNumber ; iteratePageNumber++)
		{
//			console.log("iteratePageNumber  ::  "+iteratePageNumber);
			$('.loading_list').css("display","block");
			$('.loading_list code').css("display","block");
			$.ajax({
				method:'GET',
				url:'/getSearchPage.htm',
				data:{'q':searchTerm,'page':iteratePageNumber},
				dataType:'html',
				success:function(html)
				{
					if(html!=null && html.length>0)
					{
						$(".new_shoes_holder").append(html);
						var nextAvailForMore=$("#nextAvailForMore_"+pageNumber).val();
//						console.log("nextAvailForMore  ::  "+pageNumber+"    "+$("#nextAvailForMore_"+pageNumber).val());
						if(nextAvailForMore == 'false')
						{
							$("#searchMoreResults").hide();
						}
						else
						{
							$("#searchMoreResults").show();
						}
						pageNumber++;
						$('#retainSearchPageNumber').val(pageNumber-1);
					}
					if(retainSearchPageNumber == pageNumber-1)
					{
						if(retscrollTop!=null)
						{
							$('html, body').animate({scrollTop:retscrollTop}, 'fast');
							$('#retainSearchPageNumber').val(1);
						}
					}
					$('.loading_list').css("display","none");
					$('.loading_list code').css("display","none");
				}
			});
		}
//		$('#isShowMoreResultsClicked').val("true");
	}
	else
	{
		if(retscrollTop!=null)
		{
			$('html, body').animate({scrollTop:retscrollTop}, 'fast');
		}
	}
	
	$("#searchMoreResults").click(function(){
		
		//console.log('inside loadmore');
		$('#retainSearchPageNumber').val(pageNumber);
		$('#isShowMoreResultsClicked').val("true");
		loadSearchPages();
	});
	
});	

function showNoResults()
{
	//alert("hello");
	var path=document.location.pathname.split("/");
	var htmlStr="<h2 style=\"color:#ddd;margin-left:10px;font-size:36px;margin-top:-50px;font-weight:normal;\">Sorry! No results are available for \""+decodeURI(path[2])+"\"</h2>";
	$("#filteredProducts").html(htmlStr+$("#filteredProducts").html());
}

function loadSearchPages()
{
	//console.log("inside loadSearchPages,"+pageNumber);
	var searchTerm="";
	if(document.location.pathname.split('/')[2]==null || document.location.pathname.split('/')[2]=="")
		searchTerm="blankSearch";
	else
		searchTerm=document.location.pathname.split('/')[2];
	$('.loading_list').css("display","block");
	$('.loading_list code').css("display","block");
	$.ajax({
		method:'GET',
		url:'/getSearchPage.htm',
		data:{'q':searchTerm,'page':pageNumber},
		dataType:'html',
		//error:function(){clearInterval(searchPagingInterval);},
		success:function(html)
		{
			if(html!=null && html.length>0)
				{
				//alert("appending");
				$(".new_shoes_holder").append(html);
				
//				if(($(window).scrollTop() == $(document).height() - $(window).height()))
//				{
//					for(i=0;i<hiddenList.length;i++)
//						{
//							if(i==4)
//								{
//								break;
//								}
//							else
//								{
//								if(hiddenList.length>=i)
//									{
//									////console.log("displaying"+i)
//									$(hiddenList[i]).css('display','block');
//									}
//									
//								}
//						}
//				}
				
				
				
				
				$('#retainSearchPageNumber').val(pageNumber);
				//console.log('$$$$$$$$$  pageNumber is  $$$$$$----->>>>  : ' + pageNumber);
				var nextAvailForMore=$("#nextAvailForMore_"+pageNumber).val();
				//console.log('nextAvailForMore is ----->>>>  : ' + nextAvailForMore);
				if(nextAvailForMore=='false')
					{
						//console.log("---------->>>>>>>> Load More is Hided ------>>>>>>>>>>");
						$("#searchMoreResults").hide();
					}
				else
					{
						$("#searchMoreResults").show();
					}
				pageNumber++;
				
				}
				
			else
				{
				  //clearInterval(searchPagingInterval);
				}
			
			/*if($("#dynamicItems ul li[style^='display:none']").length>0)
				{
					$("#searchMoreResults").show();
				}
			else
				{
					$("#searchMoreResults").hide();
				}*/
			$('.loading_list').css("display","none");
			$('.loading_list code').css("display","none");
		}
	});
}

/*function loadSearchPages(times)
{
	for(i=0;i<times;i++){
		
		var searchTerm="";
		if(document.location.pathname.split('/')[2]==null || document.location.pathname.split('/')[2]=="")
			searchTerm="blankSearch";
		else
			searchTerm=document.location.pathname.split('/')[2];
		
		
	$.ajax({
		method:'GET',
		url:'/getSearchPage.htm',
		data:{'q':searchTerm,'page':pageNumber},
		dataType:'html',
		error:function(){
			
			//clearInterval(searchPagingInterval);
		
		},
		success:function(html)
		{
			if(html!=null && html.length>0)
				{
				//alert("appending");
				$("#dynamicItems ul").append(html);
				
//				if(($(window).scrollTop() == $(document).height() - $(window).height()))
//				{
//					for(i=0;i<hiddenList.length;i++)
//						{
//							if(i==4)
//								{
//								break;
//								}
//							else
//								{
//								if(hiddenList.length>=i)
//									{
//									////console.log("displaying"+i)
//									$(hiddenList[i]).css('display','block');
//									}
//									
//								}
//						}
//				}
				
				
				
				
				
				pageNumber++;
				}
			else
				{
				 // clearInterval(searchPagingInterval);
				}
			
			if($("#dynamicItems ul li[style^='display:none']").length>0)
				{
					$("#searchMoreResults").show();
				}
			else
				{
					$("#searchMoreResults").hide();
				}
			
		}
	});
	}
}*/

function populateSearchProducts(json)
{
	
	var htmlStr="";
	for(i=0;i<json.length;i++){
	htmlStr+="<li style=\"display:none\">";
	htmlStr+="<div>";
	htmlStr+="<span></span>";
	 
	htmlStr+="</div>";
	htmlStr+="</li>";
	}
	$(htmlStr).appendTo("..new_shoes_gallery ul");
}

