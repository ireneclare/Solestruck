var cameFromLoginOrWishList="false";/*This variable is to retain the login or wishlist popup if email us link is clicked from login popup*/
function loadContent(field)
{

  //var elem = $("'#"+field+"'").val($(this).html());
  //alert("elem chosen = " + field);
  var url="/loadCustomerServicePage.htm?page="+field;
  location.href=url;

}
function hideLoginAndOpenEmailUs()
{
	
	cameFromLoginOrWishList="login";
	$('.login_form').hide();
	$("#emailUsDiv").fadeIn();
}
function hideWishListPopupAndOpenEmailUs()
{
	
	cameFromLoginOrWishList="wishList";
	$('.wish_list_form').hide();
	$("#emailUsDiv").fadeIn();
}

function goToRegistration()
{
	var url="/loadRegistration.htm";
	location.href=url;
}