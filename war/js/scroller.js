$(document).ready(function() {
	
      
	  $(function() {
		$( ".slider-vertical" ).slider({
			orientation: "horizontal",
			range: true,
			min: 10,
			max: 1000,
			step: 10,
			values:[ 10, 1000 ],
			slide: function( event, ui ) {
				//$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
				if(ui.values[ 1 ]==1000)
				$( ".amount" ).html( "<div class='filterMinPrice fl'> $" + ui.values[ 0 ] + "</div> <div class='filterMaxPrice fr'> $" + ui.values[ 1 ]+"+</div> <div class='clear_both'></div>" );
				else
				$( ".amount" ).html( "<div class='filterMinPrice fl'> $" + ui.values[ 0 ] + "</div> <div class='filterMaxPrice fr'> $" + ui.values[ 1 ]+"</div> <div class='clear_both'></div>" );
				//console.log(" For slide minAmount is..........  :  " +ui.values[ 0 ]);
				//console.log(" For slide maxAmount is..........  :  " +ui.values[ 1 ]);
				$("#minAmount").val(ui.values[ 0 ]);
				$("#maxAmount").val(ui.values[ 1 ]);
				$('#hiddenMinPrice').val(ui.values[0]);
				$('#hiddenMaxPrice').val(ui.values[1]);
				
			},
		
		change: function( event, ui ) {
				//$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
				if(ui.values[ 1 ]==1000)
				$( ".amount" ).html( "<div class='filterMinPrice fl'> $" + ui.values[ 0 ] + "</div> <div class='filterMaxPrice fr'> $" + ui.values[ 1 ]+"+</div> <div class='clear_both'></div>" );
				else
				$( ".amount" ).html( "<div class='filterMinPrice fl'> $" + ui.values[ 0 ] + "</div> <div class='filterMaxPrice fr'> $" + ui.values[ 1 ]+"</div> <div class='clear_both'></div>" );
				//console.log(" For slide minAmount is..........  :  " +ui.values[ 0 ]);
				//console.log(" For slide maxAmount is..........  :  " +ui.values[ 1 ]);
				$("#minAmount").val(ui.values[ 0 ]);
				$("#maxAmount").val(ui.values[ 1 ]);
				$('#hiddenMinPrice').val(ui.values[0]);
				$('#hiddenMaxPrice').val(ui.values[1]);
				//getFilteredProducts();
				//console.log("***************    retainingPriceFilterSelected is    ****************   :   " + retainingPriceFilterSelected);
				if(retainingPriceFilterSelected==false)
				{
					//console.log("********************   priceFilter is changed  **********************");
					displayCheckedNames();
					getFilteredProducts();
					
				}
				else
				{
					//console.log("----->>>>>>>>> for retainingFilter results Price Filter is selected  ");
					displayCheckedNames();
					retainingFilteredProducts();
				}
				
					
			
			}
		});
		
		//$( "#amount" ).val( "$" + $( ".slider-vertical" ).slider( "values", 0 ) +" - $" + $( ".slider-vertical" ).slider( "values", 1 ) );
		if($( ".slider-vertical" ).slider( "values", 1 )==1000)
		$( ".amount" ).html( "<div class='filterMinPrice fl'>$" + $( ".slider-vertical" ).slider( "values", 0 ) +"</div> <div class='filterMaxPrice fr'> $" + $( ".slider-vertical" ).slider( "values", 1 ) +"+</div> <div class='clear_both'></div>" );
		else
		$( ".amount" ).html( "<div class='filterMinPrice fl'>$" + $( ".slider-vertical" ).slider( "values", 0 ) +"</div> <div class='filterMaxPrice fr'> $" + $( ".slider-vertical" ).slider( "values", 1 ) +"</div> <div class='clear_both'></div>" );
		$("#minAmount").val($( ".slider-vertical" ).slider( "values", 0 ));
		$("#maxAmount").val($( ".slider-vertical" ).slider( "values", 1 ));
		$('#hiddenMinPrice').val($( ".slider-vertical" ).slider( "values", 0 ));
		$('#hiddenMaxPrice').val($( ".slider-vertical" ).slider( "values", 1 ));
		
	});
	  
	   $(function() {
		$( ".slider-vertical1" ).slider({
			orientation: "horizontal",
			range: "min",
			min: 0,
			max: 100,
			value: 70,
			slide: function( event, ui ) {
				$( ".amount1" ).val( ui.value );
			}
		});
		$( ".amount1" ).val( $( ".slider-vertical1" ).slider( "value" ) );
	});
	   
	   
	
	$(function() {
//change the main div to overflow-hidden as we can use the slider now
$('#scroll-pane').css('overflow','hidden');

//compare the width of the scroll content to the scroll pane to see if we need a scrollbar
var difference = $('#scroll-content').width()-$('#scroll-pane').width();//eg it's 200px longer 

if(difference>0)//if the scrollbar is needed, set it up...
{
   var proportion = difference / $('#scroll-content').width();//eg 200px/500px
   var handlewidth = Math.round((1-proportion)*$('#scroll-pane').width());//set the proportional width - round it to make sure everything adds up correctly later on
   handlewidth -= handlewidth%2; 

   $("#scroll-pane").after('<\div id="slider-wrap"><\div id="slider-vertical"><\/div><\/div>');//append the necessary divs so they're only there if needed
   $("#slider-wrap").width($("#scroll-pane").width());//set the width of the slider bar to that of the scroll pane


   //set up the slider 
   $('#slider-vertical').slider({
      orientation: 'vertical',
      min: 0,
      max: 100,
      value: 100,
      slide: function(event, ui) {//used so the content scrolls when the slider is dragged
         var topValue = -((100-ui.value)*difference/100);
         $('#scroll-content').css({top:topValue});//move the top up (negative value) by the percentage the slider has been moved times the difference in width
      },
      change: function(event, ui) {//used so the content scrolls when the slider is changed by a click outside the handle or by the mousewheel
         var topValue = -((100-ui.value)*difference/100);
         $('#scroll-content').css({top:topValue});//move the top up (negative value) by the percentage the slider has been moved times the difference in width
      }
   });

   //set the handle width and bottom margin so the middle of the handle is in line with the slider
   $(".ui-slider-handle").css({width:handlewidth,'margin-left':-0.0*handlewidth});
	
   var origSliderwidth = $("#slider-vertical").width();//read the original slider width
   var sliderwidth = origSliderwidth - handlewidth ;//the width through which the handle can move needs to be the original width minus the handle width
   var sliderMargin =  (origSliderwidth - sliderwidth)*0.0;//so the slider needs to have both top and bottom margins equal to half the difference
   $(".ui-slider").css({width:sliderwidth,'margin-top':sliderMargin});//set the slider width and margins
   
}//end if

//code to handle clicks outside the slider handle
$(".ui-slider").click(function(event){//stop any clicks on the slider propagating through to the code below
   	event.stopPropagation();
   });
   
$("#slider-wrap").click(function(event){//clicks on the wrap outside the slider range
	  var offsetTop = $(this).offset().top;//read the offset of the scroll pane
	  var clickValue = (event.pageY-offsetTop)*100/$(this).width();//find the click point, subtract the offset, and calculate percentage of the slider clicked
	  $("#slider-vertical").slider("value", 100-clickValue);//set the new value of the slider
}); 
	 
//additional code for mousewheel
$("#scroll-pane,#slider-wrap").mousewheel(function(event, delta){
	var speed = 5;
	var sliderVal = $("#slider-vertical").slider("value");//read current value of the slider
	
	sliderVal += (delta*speed);//increment the current value

	$("#slider-vertical").slider("value", sliderVal);//and set the new value of the slider
	
	event.preventDefault();//stop any default behaviour
});

});

});

// JavaScript Document