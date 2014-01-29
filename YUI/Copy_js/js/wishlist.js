var addItemAndLoadWishList=false;
var globCustomerid="";
var globProdid="";
var globColorid="";
var globSize="";



function showWishList()
{
	$.ajax({url:'/isLoggedIn.htm',cache: false,success:function(customerid)
		{
			//alert("customer id"+customerid);
			if(customerid!=null&& customerid!='')	
				{
					/*logged in==>true*/
				
					////console.log('customer id is'+customerid);
					$('#wish_list_popup_content').html("<img src=\"/images/loading.gif\" />");
					
					/*getting wishlist items for customer*/
					getWishList(customerid);
					
					/*popup displaying stuff*/
					$('#backgroundPopup').show();
					$('.wish_list_popup').fadeIn();		
			   		position_popup ();
					
				}
			else
				{
					/*logged in==>false*/
				
					$('#backgroundPopup').show();
					$('.wish_list_form').fadeIn();		
			   		position_popup ();
				
							
				}
	}});
}
function getWishList(customerid)
{
	$.ajax({url:'/getWishList.htm',cache: false,data:({"custId":customerid}),success:function(data){
		$('#wish_list_popup_content').html(data);
		
	}});
}
function addItemValidate()
{
	var prodid=$('#productid').val();
	var colorid=$('#colorlst').attr('titlevalue');
	var size=$('#sizelst').val();
	if(colorid=='')
		{
			alert('Select color!');
			return;
		}
	if(size=='-1' ||size==''||size==null)	
		{
			alert('Select size!');
			return;
		}

	
	
	$.ajax({url:'/isLoggedIn.htm',cache: false,success:function(customerid)
		{
		//alert('customer id'+customerid);
		if(customerid!=null&&customerid!='')	
			{
				/*LoggedIn==>true*/	
				////console.log('customer id is'+customerid);
				addItemToWishList(customerid,prodid,colorid,size);
				
			}
		else
			{
				/*LoggedIn==>false*/
			   
				/*setting global values which are needed after login*/
				addItemAndLoadWishList=true;
				globProdid=prodid;
				globColorid=colorid;
				globSize=size;
			
				////console.log('login required!');
				$('#backgroundPopup').show();
				$('.wish_list_form').fadeIn();		
		   		position_popup ();
			}
		}});
	
}
function addItemToWishList(customerId,productid,colorid,size)
{
	$('#wishlist_add_msg').html('Adding to wishlist...');
	$('#wishlist_add_msg').show();
	$.ajax({type:'POST',cache: false,url:"/addToWishList.htm",data:({"customerId":customerId,"prodid":productid,"colorid":colorid,"size":size}),success:function(data){
		$('#wishlist_add_msg').html(data);
		delayHide('wishlist_add_msg');
	}});
}


function loginValidateWishList()
{
	var email=$('#email_wishlist').val();
	if(email=='')
	{
		$('#rqFld_wishlist_email').html('Enter your email id');
		$('#rqFld_wishlist_email').show();
		$('#email_wishlist').focus();
		return false;
	}
	else
		{
		$('#rqFld_wishlist_email').hide();
		
		}
	var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if(!emailReg.test(email))
	{
		$('#rqFld_wishlist_email').html("Enter valid email id!");
		$('#rqFld_wishlist_email').show();
		$('#email_wishlist').focus();
		return false;
	}
	else
	{
		$('#rqFld_wishlist_email').hide();
	}
	var pass=$('#pass_wishlist').val();
	if(pass=='')
	{
		$('#rqFld_wishlist_password').html('Please Enter password');
		$('#rqFld_wishlist_password').show();
		$('#pass_wishlist').focus();
		return false;
	}
	else
	{
		$('#rqFld_wishlist_password').hide();
	}
	$.post('/login.htm',{"username":email,"password":pass},function(data){
		if(data.login=='success')
			{
			
				/*popup displaying stuff*/
				$('.wish_list_form').hide();
				$('#wish_list_popup_content').html("<img src=\"/images/loading.gif\" />");
				$('.wish_list_popup').fadeIn();		
				position_popup ();
				changeTopRightNavHeader(data.customerid);
				
				if(addItemAndLoadWishList!=true)
				{
					/*Normal wishlist loading*/
					
					
					
		   			
		   			//getting wishList
					getWishList(data.customerid);
				}
				else 
				{
					/*Adding item and  loading wishlist*/
					
					doAddItemAndLoadWishList(data.customerid,globProdid,globColorid,globSize);
						
				}
				
				
			}
		else
			{
			$('#loginmsgwishlist').html('Invalid username / password !')
				////console.log('invalid username');
			}
		
		//var result=data['login'];
		////console.log("login result"+data.login);
		
	},"json");
	return false;
	
}

function doAddItemAndLoadWishList(customerId,productid,colorid,size)
{
	$.ajax({type:'POST',cache: false,url:"/addItemAndLoadWishList.htm",data:({"customerId":customerId,"prodid":productid,"colorid":colorid,"size":size}),success:function(data){
		$('#wish_list_popup_content').html(data);
	}});
}

function removeWLItem(itemid)
{
	$.ajax({type:'POST',cache: false,url:"/removeWishListItem.htm",data:({"itemid":itemid}),success:function(data){
		
		if(data!=null&&data=='success')
			{
				$('#'+itemid).closest('li').remove();
				if($('#ul_wishlist li').size()<1)
					{
						$('#ul_wishlist').html('<li>NO ITEMS IN YOUR WISH LIST</li>');
					}
			}
		
	}});
	
}
function addToCart(itemID)
{
	var prodid=$('#productId_'+itemID).val();
	var colorid=$('#color_'+itemID).attr('titlevalue');
	var size=$('#size_'+itemID).val();
	////console.log("prodid:"+prodid+",colorid:"+colorid+",size:"+size);
	$('#itemAddedMsg_'+itemID).show();
	$.ajax({url:"/addItemtocart.htm?color="+colorid+"&size="+size+"&prodid="+prodid,cache: false,
		success:function(data){
	
		////////console.log(data);
		if(data!=null)
		{
			$('#itemAddedMsg_'+itemID).html('Added Successfuly');
			$('#popup_content').html(data);
			$('#itemAddedMsg_'+itemID).show();
			delayHide('itemAddedMsg_'+itemID);
		}
	}//end of function
	}
	);
	
}
function delayHide(elemId)
{
	setTimeout("HideElem('"+elemId+"')",2000);
}
function HideElem(elemId)
{
	$('#'+elemId).hide();
}
function editItem(itemID)
{
	/*Changing image for new color*/
	var vendorName=$('#vendorName_'+itemID).val().replace(/ /g,'-');
	var productName=$('#productName_'+itemID).val().replace(/ /g,'-');
	var colorName=$('#color_'+itemID).val().replace(/ /g,'-');
	var imageURL=$('#imageURL').val();
	imageURL+=vendorName.toLowerCase()+"-shoes/"+vendorName+"-shoes-"+productName+"-("+colorName+")-010204.jpg";
	$('#image_'+itemID).attr("src",imageURL);
	
	/*Updating db */
	var prodid=$('#productId_'+itemID).val();
	var colorid=$('#color_'+itemID).attr('titlevalue');
	var sizeStr=$('#size_'+itemID).attr('titlevalue');
	var size=sizeStr.substring(sizeStr.indexOf("_")+1);
	//alert(sizeStr+","+size);
	////console.log("prodid:"+prodid+",colorid:"+colorid+",size:"+size);
		
	$.ajax({type:'POST',cache: false,url:"/editWishListItem.htm",data:({"itemid":itemID,"productid":prodid,"colorid":colorid,"size":size}),
		success:function(data){
			
			
			
	
		//////console.log(data);
		//removing duplicate item	
		if(data!=null&&data=='duplicate removed')
		{
			$('#'+itemID).closest('li').remove();
			
		}
	}//end of function
	}
	);
	
}
/*Deliberately delayed to edit an item after getting text box value from custom dropdown li.*/
function delayEdit(itemID, millisecs)
{
	var t=setTimeout("editItem('"+itemID+"')",millisecs);
}

function getSizePriceDetailsForColor(itemID)
{
	var prodid=$('#productId_'+itemID).val();
	var colorid=$('#color_'+itemID).attr('titlevalue');
	$.getJSON("/getproductdetailsforcolor.htm",{"productid":prodid,"colorid":colorid},function(productdetaillst)
			{
				if(productdetaillst!=null)
				{	
					var pricelist=[];
					var sizeStr="";
					$('#pricediv').html("<h1>$"+productdetaillst[0].price+"</h1>")
					//retailprice= productdetaillst[0].price;
					$('#size_'+itemID).val(productdetaillst[0].size);
					$('#size_'+itemID).attr('titlevalue',productdetaillst[0].size);
					for(i=0;i<productdetaillst.length;i++)
						{
							var sizequantitycolorDTO=productdetaillst[i];
							pricelist[i]=sizequantitycolorDTO.price;
							sizeStr+="<li id=\""+itemID+"_"+sizequantitycolorDTO.size+"\" value=\""+sizequantitycolorDTO.size+"\"  onclick=\"delayEdit('"+itemID+"',1000)\"  >"+sizequantitycolorDTO.size+"</li>";
							
						}
					//pricelst=pricelist;
					$('#sizelist_'+itemID).html(sizeStr);
					editItem(itemID);
					
				}
				
				
				
			}		
			);
	
	
}

function delayColorChange(itemID,millis)
{
	var t=setTimeout("getSizePriceDetailsForColor('"+itemID+"')",millis);
}

function closeWishList()
{
	$('#backgroundPopup').hide();
	$('.wish_list_popup').fadeOut();	
}
function changeTopRightNavHeader(customerid)
{
	var listStr="<li> <a onclick=\"loadMyAccount('"+customerid+"');\"  onmouseover=\"this.style.textDecoration='underline'\" onmouseout=\"this.style.textDecoration='none'\">MyAccount</a></li><li class=\"seperator\"> | </li>";
	listStr+="<li><a class=\"view_wishlist_popup\" onclick=\"showWishList()\" onmouseover=\"this.style.textDecoration='underline'\" onmouseout=\"this.style.textDecoration='none'\">Wishlist</a></li><li class=\"seperator\"> | </li>";
	listStr+="<li><a class=\"view_cart_popup\"   onmouseover=\"this.style.textDecoration='underline'\" onmouseout=\"this.style.textDecoration='none'\">Shopping Cart</a></li>  <li class=\"seperator\"> | </li>";
	listStr+="<li><a  onclick=\"logout()\"  onmouseover=\"this.style.textDecoration='underline'\" onmouseout=\"this.style.textDecoration='none'\">Logout</a></li>";
	$('#header_right_list').html(listStr);
	$('.view_cart_popup').click(function() {
		//alert('hai');
		$('#backgroundPopup').show();
		$('.cart_popup').fadeIn();		
   		position_popup ();
   		viewTheCartPopup();
	 });
}
function closeWishlistAndOpenCart()
{
	closeWishList();
	viewTheCartPopup();
	
}