$(document).ready(function(){
	adjustArrowPosition();
});
	
$(window).load(function(){
	adjustArrowPosition();
	setTimeout(function(){callBannerSlider()},5000);
});

$(window).resize(function(){
	adjustArrowPosition();
	});

	function adjustArrowPosition()
	{
		var body_win_width = parseInt(document.body.clientWidth) ;
	   var win_width = parseInt(document.documentElement.clientWidth) ;
	   if(body_win_width >= '2000' && $(window).width()>='2000') {
	    //console.log(body_win_width);
	    $(".banner").addClass("width_banner");
	   /* $(".arrow_prev").removeClass("width_arrow");
	    $(".arrow_next").removeClass("width_arrow");*/
	   }
	   else if(body_win_width < '2000' && $(window).width()<'2000') 
	   {
	    //console.log(body_win_width+" is lesser than "+win_width);
	    $(".banner").removeClass("width_banner");
	    /*$(".arrow_prev").addClass("width_arrow");
	    $(".arrow_next").addClass("width_arrow");*/
//	    $(".banner").addClass("width_none");
	   }
	}

function callBannerSlider()
{
	$("#mySlider").evoSlider({
		mode: "slider",                  // Sets slider mode ("accordion", "slider", or "scroller")
		width: 2000,                         // The width of slider
		height: 650,                        // The height of slider
		slideSpace: 5,                      // The space between slides

		mouse: false,                        // Enables mousewheel scroll navigation
		keyboard: true,                     // Enables keyboard navigation (left and right arrows)
		speed: 1100,                         // Slide transition speed in ms. (1s = 1000ms)
		easing: "swing",                    // Defines the easing effect mode
		loop: true,                         // Rotate slideshow

		autoplay: true,                     // Sets EvoSlider to play slideshow when initialized
		interval: 7000,                     // Slideshow interval time in ms
		pauseOnHover: true,                 // Pause slideshow if mouse over the slide
		pauseOnClick: false,
		/*if($("#homeVideoImage").length>0)
			pauseOnClick: true,                 // Stop slideshow if playing
		else
			pauseOnClick: false,                 // Stop slideshow if playing
		*/	
		directionNav: true,                 // Shows directional navigation when initialized
		directionNavAutoHide: false,        // Shows directional navigation on hover and hide it when mouseout

		controlNav: true,                   // Enables control navigation
		controlNavAutoHide: false           // Shows control navigation on mouseover and hide it when mouseout 
	});  

		$(".banner").die("mouseenter").live("mouseenter",function(){
			if($("dt").length!=1)
			{
				//$(this).find("span").removeClass("displaynone");
				$(".arrow_prev").show();
				$(".arrow_next").show();
			}
		});
		
		$(".banner").die("mouseleave").live("mouseleave",function(){
			
			//$(this).find("span").addClass("displaynone");
			$(".arrow_prev").hide();
			$(".arrow_next").hide();
		});
		
		$("#bannerForVideo").fadeOut('slow');
		$("#mySlider").show();
		$(".arrow_prev").hide();
		$(".arrow_next").hide();
		$("img[id^='bannerUrl_']").die("click").live("click",function(){
			var id=$(this).attr("id").substring($(this).attr("id").indexOf("_")+1,$(this).attr("id").length);
			var bannerImg = $(this).attr("src");
			var video_title = $(this).attr("videotitle");
			var banner_link = $(this).parent().attr("href");
			var video_url = $("#checkVideo_"+id).attr("src");
			var video_thumbnail_url=$("#checkVideo_"+id).parent().attr("href");
			if(video_url!="" && video_url!="#" && video_thumbnail_url!=" " && video_thumbnail_url!="#" && video_title!="" && video_title!="#")
				{
					getHomePageVideo(bannerImg,video_title,video_url,video_thumbnail_url,id);
				}
				
		});
}

function getHomePageVideo(bannerImg,video_title,video_url,video_thumbnail_url,id)
{
	//console.log("bannerURl: "+$("#bannerUrl").attr("src")+" "+$('#checkVideo').attr('title')+" "+$('#checkVideo').parent().attr('href'));
	/*var img_src=$("#bannerUrl").attr("src");
	console.log("Image URL:"+img_src);
	var video_title1=$('#checkVideo').attr('title');
	var video_url1=$('#checkVideo').parent().attr('href');
	console.log("video_url1: "+video_url1);*/
	var builtYouTubeURL = "http://www.youtube.com/embed/"+video_thumbnail_url+"?rel=0&autoplay=1&autohide=1&loop=1&playlist="+video_thumbnail_url+"&modestbranding=1&wmode=transparent";
	var videoPath="";
	if($('#checkVideo_'+id).length > 0)
	{	
	if(video_thumbnail_url.indexOf("youtube")!=-1)
		{
		videoPath=video_thumbnail_url;
		//console.log("It has Video"+builtYouTubeURL);
		}
	else
		{
		videoPath=builtYouTubeURL;
		}
	}
	
	//var videoThumbNail_url1=$('#checkVideo').attr('src');
	//console.log("Video Title:"+video_title1+"::Video Image URL::"+videoThumbNail_url1+" ::Video URL::"+video_url1);
	//console.log("coming inside video part"+builtYouTubeURL);
	//console.log("Received Details:"+video_title1+" ------ "+videoThumbNail_url1+" ------- "+video_url1)	
	if($(".banner a img").length>0)
	{
	if((video_thumbnail_url!=null) || (video_url!=null)||(video_title!=null))
	{
 		//console.log("even triggered");
		//$("a[id^='bannerUrl_']").die("click").live("click",function(){
 		var htmlStr="<div class=\"lookbook_popup popup_pos kgpopup_act homepagevideo\" style=\"display:none; position: fixed; \"><div class=\"login_popup_close popup_close_act\"id=\"video_close_popup_home\">";

		htmlStr+="</div><div class=\"vedio_holder\" id=\"vedio_holder\"><img id=\"homeVideoImage\" src="+video_url+" width=\"650\" height=\"370\" border=\"0\"></div>";

		htmlStr+="<span id=\"lb_name\">"+video_title+"</span><div class=\"clear_both\"></div></div>";


		$(htmlStr).appendTo("body");

 			if($("#homeVideoImage").length>0)
 			{
 				$("#backgroundPopup").width($(document).width()).height($(document).height()).css("top","0px").css("left","0px").css("position","fixed").show();
 				$(".homepagevideo").fadeIn('fast');
 				//$(".banner").html("<img src="+bannerImg+" width=2000 height=650");
 				$("#videoBanner").attr("src",bannerImg);
 				$("#bannerForVideo").fadeIn('slow');
 				$("#mySlider").fadeOut('slow');
 			}
		//});

		
		$("#homeVideoImage").die("click").live("click",function(){
			/*if($("#homeVideoImage").length>0)
			{
				
			}*/
			//console.log("time: "+videoPath.getTime());
			//$("<iframe id=\"player\" style=\"z-index:-5000;\"width=\"650\" height=\"370\" src=\"http://www.youtube.com/embed/r7uAkyEbpzI\"></iframe>").appendTo($(this).parent());
			$("<iframe id=\"player\" style=\"z-index:-5000;\"width=\"650\" height=\"370\" src="+videoPath+"></iframe>").appendTo($(this).parent());
			$(this).fadeOut('fast');
		});

		$("#video_close_popup_home").die("click").live("click",function(){
			$("#homeVideoImage").fadeIn("fast");
			$(".homepagevideo").hide();
			$("#backgroundPopup").hide();
			$("#mySlider").fadeIn('slow');
			$("#bannerForVideo").fadeOut('slow');
			$("#player").remove();
		});
		}
	}
	/*if($(".banner a img").length>0)
	{
		$(".banner a").attr("href","#").click(function(){
			$("#backgroundPopup").width($(document).width()).height($(document).height()).css("top","0px").css("left","0px").css("position","fixed").show();
			$(".homepagevideo").fadeIn('fast');
		});

	}	
*/		
}	