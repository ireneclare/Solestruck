$(document).ready(function(){
	$("[id^='bi_']").click(function(){
		////console.log("imageLink:"+$("#imageLink").val());
		var lbAlbumName = $("#albumName").val();
		var imageLink=$("#imageLink").val();
		var bid=$(this).attr("id");
		var bannerid=bid.substring(bid.indexOf('(')+1,bid.indexOf(')'));
		//console.log("bannerid:::"+bannerid);
		$.ajax({url:'/getLookBookById.htm',data:({"bannerid":bannerid}),success:function(lbBanner)
			{
				//console.log("banner:"+lbBanner.imageLink);
				var imgLink = lbBanner.imageLink.substring(lbBanner.imageLink.lastIndexOf('.')+5,lbBanner.imageLink.length-1);
				//console.log("flashplugin:"+lbBanner.htmlCodeForFlashPlugin);
				window.location=lbBanner.imageLink;
		}});
	});
	
	$("[id^='vi_']").click(function(){
		var bid=$(this).attr("id");
		var bannerid=bid.substring(bid.indexOf('(')+1,bid.indexOf(')'));
		//console.log("bannerid:::"+bannerid);
		$.ajax({url:'/getLookBookById.htm',data:({"bannerid":bannerid}),success:function(lbBanner)
			{
		var lbAlbumName = lbBanner.albumName;
		var videoCoverImageURL = lbBanner.videoCoverImage;
		//console.log("videoCoverImageURL:"+videoCoverImageURL);
		var youTubeURL=lbBanner.youtubeCode;
		//console.log("youTubeURL:"+youTubeURL);
		$("#backgroundPopup").show();
		//console.log('id="'+lbAlbumName+'_lbookvideoImg"');
		$('.vedio_holder').html('<img id="lbookvideoImg" src="'+ videoCoverImageURL+ '" width="650" height="370" border="0">');
		$(".lookbook_popup").show().css("position",'fixed');
		$("#lb_name").html(lbAlbumName);
		$("#lbookvideoImg").click(function(){
			//console.log("lbAlbumName:"+lbAlbumName);
	    	
	    	$("<iframe id=\"player\" style=\"z-index:-5000;\"width=\"650\" height=\"370\" src="+youTubeURL+"></iframe>").appendTo($(this).parent());


			   $(this).fadeOut('fast',function(){$("#player").show();});

			 
			 });
			 
	    $("#lbookvideoImg").mouseover(function(){ $(this).attr("src",videoCoverImageURL);}).mouseout(function(){$(this).attr("src",videoCoverImageURL);});
	}});
		});
	$("#video_close_popup").click(function(){
		  $(".vedio_holder").html("<video preload='none'>");
		  //$("#player").stop();
	  });
	
	/*var lbid=$("[id^='_bi']").attr('id');
	//console.log("lbid:"+lbid);*/
	/*$("[id^='bi_']").click(function(){
		var imageLink=$("#imageLink").val();
		//console.log("imageLink:::"+imageLink);
		//console.log("inside book icon");
		var lbid=$(this ).attr('id');
		//console.log("lbid:"+lbid);
		lbid=lbid.substring(lbid.indexOf('_')+1,lbid.length);
		window.location=imageLink;
		////console.log("/"+lbid+"_LooKbook/"); 
	});*/
	/*$("#on_the_road_bi").click(function(){
		window.location="/on_the_road_LooKbook/";
	});
	
	$("#on_the_road_vi").click(function(){
		$("#backgroundPopup").show();
		$('.vedio_holder').html('<img id="on_the_road_lbookvideoImg" src="http://commondatastorage.googleapis.com/images2.solestruck.com/homepageBannerImage/On_The_Road_LookBook_VideoBanner-hover.jpg" width="650" height="370" border="0">');
		$(".lookbook_popup").show().css("position",'fixed');
		$("#lb_name").html("On The Road LookBook Video")
		$("#on_the_road_lbookvideoImg").click(function(){
			  
			   $("<div id=\"player\" width:950px;height:410px;z-index:-5000;\"><iframe style=\"z-index:-5000;\"width=\"650\" height=\"370\" src=\"http://www.youtube.com/embed/u69kTwNFPuc?rel=0&autoplay=1&autohide=1&loop=1&playlist=u69kTwNFPuc&modestbranding=1&wmode=transparent\" frameborder=\"0\" allowfullscreen></iframe></div>").appendTo($(this).parent());

			   $(this).fadeOut('fast',function(){$("#player").show();});

			 
			 });
			 
			  $("#on_the_road_lbookvideoImg").mouseover(function(){ $(this).attr("src","http://commondatastorage.googleapis.com/images2.solestruck.com/homepageBannerImage/On_The_Road_LookBook_VideoBanner-hover.jpg");}).mouseout(function(){$(this).attr("src","http://commondatastorage.googleapis.com/images2.solestruck.com/homepageBannerImage/On_The_Road_LookBook_VideoBanner.jpg");});
	});*/
	
	/*$("#night_rider_bi").click(function(){
		window.location="/night_rider_LooKbook/";
	});
	
	$("#night_rider_vi").click(function(){
		$("#backgroundPopup").show();
		$('.vedio_holder').html('<img id="night_rider_lbookvideoImg" src="http://commondatastorage.googleapis.com/images2.solestruck.com/homepageBannerImage/videoBanner_nightrider-hover.jpg" width="650" height="370" border="0">');
		$(".lookbook_popup").show().css("position",'fixed');
		$("#lb_name").html("Night Rider LookBook Video")
		 $("#night_rider_lbookvideoImg").click(function(){
		    	
		    	$("<div id=\"player\" width:950px;height:410px;z-index:-5000;\"><iframe style=\"z-index:-5000;\"width=\"650\" height=\"370\" src=\"http://www.youtube.com/embed/6lewRND1wH4?rel=0&autoplay=1&autohide=1&loop=1&playlist=6lewRND1wH4&modestbranding=1&wmode=transparent\" frameborder=\"0\" allowfullscreen></iframe></div>").appendTo($(this).parent());

				   $(this).fadeOut('fast',function(){$("#player").show();});

				 
				 });
				 
				  $("#night_rider_lbookvideoImg").mouseover(function(){ $(this).attr("src","http://commondatastorage.googleapis.com/images2.solestruck.com/homepageBannerImage/videoBanner_nightrider-hover.jpg");}).mouseout(function(){$(this).attr("src","http://commondatastorage.googleapis.com/images2.solestruck.com/homepageBannerImage/videoBanner_nightrider.jpg");});
	});
	
	$("#in_the_spirit_bi").click(function(){
		window.location="/in_the_spirit_LooKbook/";
	});
	
	$("#in_the_spirit_vi").click(function(){
		$("#backgroundPopup").show();
		$('.vedio_holder').html('<img id="in_spirit_lbookvideoImg" src="http://commondatastorage.googleapis.com/images2.solestruck.com/homepageBannerImage/videoBanner_inspirit.jpg" width="650" height="370" border="0">');
		$(".lookbook_popup").show().css("position",'fixed');
		$("#lb_name").html("In The Spirit LookBook Video")
		$("#in_spirit_lbookvideoImg").click(function(){
	    	
	    	$("<div id=\"player\" width:950px;height:410px;z-index:-5000;\"><iframe style=\"z-index:-5000;\"width=\"650\" height=\"370\" src=\"http://www.youtube.com/embed/QxZpedtWCEA?rel=0&autoplay=1&autohide=1&loop=1&playlist=QxZpedtWCEA&modestbranding=1&wmode=transparent\" frameborder=\"0\" allowfullscreen></iframe></div>").appendTo($(this).parent());


			   $(this).fadeOut('fast',function(){$("#player").show();});

			 
			 });
			 
	    $("#in_spirit_lbookvideoImg").mouseover(function(){ $(this).attr("src","http://commondatastorage.googleapis.com/images2.solestruck.com/homepageBannerImage/videoBanner_inspirit-hover.jpg");}).mouseout(function(){$(this).attr("src","http://commondatastorage.googleapis.com/images2.solestruck.com/homepageBannerImage/videoBanner_inspirit.jpg");});
	});
	$("#video_close_popup").click(function(){
		  $(".vedio_holder").html("<video preload='none'>");
		  //$("#player").stop();
	  });*/
	
	
});
