<%@taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ taglib uri="http://tiles.apache.org/tags-tiles" prefix="tiles" %>
<%@page
import="com.veroniqa.frontend.util.VeroniqaConstants"
 %>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
<html xmlns="http://www.w3.org/1999/xhtml">
<%@ taglib prefix="fn" uri="http://java.sun.com/jsp/jstl/functions" %>
<head>

<meta name="googlebot" content="index"/>
<meta name="robots" content="index,follow"/>
<meta name="robots" content="noodp"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
<title>registration</title>

<link rel="shortcut icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" />
<link rel="icon" href="http://commondatastorage.googleapis.com/images2.solestruck.com/favicon.ico" type="image/x-icon" />

<link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_URL() %>jquery.autocomplete.css" />
<link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_URL() %>reset.css" />
<link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_URL() %>global.css" />
<link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_URL() %>style.css" />
<link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_URL() %>form.css" />
<link rel="stylesheet" type="text/css" href="<%=VeroniqaConstants.CSS_URL() %>jScrollPane.css" />

<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.2/jquery.min.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL() %>FieldValidator.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL() %>ui.slider.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL() %>scroller.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL() %>jquery.em.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL %>jquery.tinyscrollbar.min.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL() %>jquery.form.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL()%>actions.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL()%>ui.core.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL() %>modernizer.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL() %>jquery.bgiframe.min.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL() %>jquery.autocomplete.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL()%>home.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL()%>myaccount.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL()%>wishlist.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL() %>jquery.mousewheel.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL() %>jScrollPane.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL()%>shoppingcart.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL()%>customerServiceLink.js"></script>
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL()%>tooltip.js"></script> 
<script type="text/javascript" src="<%=VeroniqaConstants.JS_URL()%>footer.js"></script>
<script type="text/javascript">

var _gaq = _gaq || [];
var pluginUrl = 
 '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
_gaq.push(['_require', 'inpage_linkid', pluginUrl]);
_gaq.push(['_setAccount', '<%=VeroniqaConstants.getAnalyticsID()%>']);
_gaq.push(['_trackPageview']);

(function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();

</script>
<script type="text/javascript">

var _gaq = _gaq || [];
var pluginUrl = 
 '//www.google-analytics.com/plugins/ga/inpage_linkid.js';
_gaq.push(['_require', 'inpage_linkid', pluginUrl]);
_gaq.push(['_setAccount', '<%=VeroniqaConstants.getNewCheckoutAnalyticsID()%>']);
_gaq.push(['_trackPageview']);

(function() { var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true; ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js'; var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s); })();

</script>
</head>
<body>





	<div id="wrapper">
    <tiles:insertAttribute name="header"/>
      <tiles:insertAttribute name="topmenumain"/>
                           
                            	<div class="content_holder">
                                	<h2 class="registration_header"> Please Register Below</h2>	  <font color="red">${result}</font>
                                    	<form:form action="/registerCustomer.htm"  method="post" id="registration" class="registration_form_holder" commandName="customerRegistration" >
                                        	<div class="general_info">
                                        		 <div class="first_name">
                                                        <h4>First Name</h4><i id="rqFld_regis_first_name">Enter your first name</i><div class="clear_both"></div>
                                                         <form:input class="registration_short_inputfield" path="firstName" type="text" id="first_name" />
                                                   </div>
                                                   
                                                    <div class="first_name">
                                                   <h4>Last Name</h4><i id="rqFld_regis_last_name">Enter your last name</i><div class="clear_both"></div>
                                                    <form:input class="registration_short_inputfield" path="lastName" type="text" id="last_name" />
                                                    </div>
                                                     <div class="clear_both"></div>
                                                                 	<h4>Address:</h4><i id="rqFld_regis_address">This field required</i><div class="clear_both"></div>
                                                                	<form:input id="address1" path="address1" type="text" class="registration_inputfield no_margin"/>
                                                                        <form:input path="address2" id="address2" type="text" class="registration_inputfield no_margin "/>
                                                                        <div class="short_input_fields">
                                                                <h4>City</h4><i id="rqFld_regis_city">Enter your city</i><div class="clear_both"></div>
                                                                	<form:input id="city"  path="city" type="text" class="registration_short_inputfield"/>
                                                            </div> 
                                                            <div class="short_input_fields" id="div_state" style="display:none;">
                                                                <h4>State</h4><i id="rqFld_regis_state">Select your state</i><div class="clear_both"></div>
                                                                      <div class="custom_dropdown custom_dropdown_280 ">
                                                                      	
                                  										<input readonly="readonly" type="text" name="state_text" id="state_text" class="popup_input_field_280" style="width:256px"  value="Select the State" titlevalue="-1"/><span class="custom_drop_nav"></span>
                                  										
                                         									<ul id="ul_state">
                           													               
																			<li title="AA" >AA</li>
																			<li title="AE">AE</li>
																			<li title="AP">AP</li>
																			<li title="AL">Alabama</li>
																			<li title="AK">Alaska</li>
																			<li title="AS">American Samoa</li>
																			<li title="AZ">Arizona</li>
																			<li title="AR">Arkansas</li>
																			<li title="CA">California</li>
																			<li title="CO">Colorado</li>
																			<li title="CT">Connecticut</li>
																			<li title="DE">Delaware</li>
																			<li title="DC">Dist. of Columbia</li>
																			<li title="FL">Florida</li>
																			<li title="GA">Georgia</li>
																			<li title="GU">Guam</li>
																			<li title="HI">Hawaii</li>
																			<li title="ID">Idaho</li>
																			<li title="IL">Illinois</li>
																			<li title="IN">Indiana</li>
																			<li title="IA">Iowa</li>
																			<li title="KS">Kansas</li>
																			<li title="KY">Kentucky</li>
																			<li title="LA">Louisiana</li>
																			<li title="ME">Maine</li>
																			<li title="MH">Marshall Islands</li>
																			<li title="MD">Maryland</li>
																			<li title="MA">Massachusetts</li>
																			<li title="MI">Michigan</li>
																			<li title="MN">Minnesota</li>
																			<li title="MS">Mississippi</li>
																			<li title="MO">Missouri</li>
																			<li title="MT">Montana </li>
																			<li title="NE">Nebraska</li>
																			<li title="NV">Nevada</li>
																			<li title="NH">New Hampshire</li>
																			<li title="NJ">New Jersey</li>
																			<li title="NM">New Mexico</li>
																			<li title="NY">New York</li>
																			<li title="NC">North Carolina</li>
																			<li title="ND">North Dakota</li>
																			<li title="OH">Ohio</li>
																			<li title="OK">Oklahoma</li>
																			<li title="OR">Oregon</li>
																			<li title="PW">Palau</li>
																			<li title="PA">Pennsylvania</li>
																			<li title="PR">Puerto Rico</li>
																			<li title="RI">Rhode Island</li>
																			<li title="SC">South Carolina</li>
																			<li title="SD">South Dakota</li>
																			<li title="TN">Tennessee</li>
																			<li title="TX">Texas</li>
																			<li title="UT">Utah</li>
																			<li title="VT">Vermont</li>
																			<li title="VI">Virgin Islands(U.S)</li>
																			<li title="VA">Virginia</li>
																			<li title="WA">Washington</li>
																			<li title="WV">West Virginia</li>
																			<li title="WI">Wisconsin</li>
																			<li title="WY">Wyoming</li> 
                                         									</ul>
                                         									<form:input type="hidden" path="state"  id="hidden_state" value=""/>
                                         
                                        </div><!-- custom_dropdown -->
                                                            </div> 
                                                           
                                                            <div id="div_province" class="short_input_fields">
                                                              <h4>Province</h4><i id="rqFld_regis_province">Enter your province</i><div class="clear_both"></div>
                                                                	<form:input id="province"  path="province" type="text" class="registration_short_inputfield"/>
                                                            </div>
                                                                 <div class="clear_both"></div>
                                                                 <div class="short_input_fields">
                                                                <h4>Zip Code</h4><i id="rqFld_regis_zipcode">Enter your zipcode</i><div class="clear_both"></div>
                                                                	<form:input path="zipcode" id="zipcode" type="text" class="registration_short_inputfield"/>
                                                            </div> 
                                                            <div class="short_input_fields">
                                                                <h4>Country</h4><i id="rqFld_regis_country">Select your country</i><div class="clear_both"></div>
                                                                      <div class="custom_dropdown custom_dropdown_280 ">
                                   								 <input readonly="readonly" type="text" titlevalue="-1"  id="country" class="popup_input_field_280" style="width:256px" value="Country" /><span class="custom_drop_nav"></span>
                                   								 <form:input type="hidden" path="country"  id="hidden_country"/>
                                         							<ul style="display: none; ">
 
																	 <li title="AF">AFGHANISTAN</li>
																	 <li title="AX">ALAND ISLANDS</li>
																	 <li title="AL">ALBANIA</li>
																	 <li title="DZ">ALGERIA</li>
																	 
																	 <li title="AD">ANDORRA</li>
																	 <li title="AO">ANGOLA</li>
																	 <li title="AI">ANGUILLA</li>
																	 <li title="AQ">ANTARCTICA</li>
																	 <li title="AG">ANTIGUA AND BARBUDA</li>
																	 <li title="AR">ARGENTINA</li>
																	 <li title="AM">ARMENIA</li>
																	 <li title="AW">ARUBA</li>
																	 <li title="AU">AUSTRALIA</li>
																	 <li title="AT">AUSTRIA</li>
																	 <li title="AZ">AZERBAIJAN</li>
																	 <li title="BS">BAHAMAS</li>
																	 <li title="BH">BAHRAIN</li>
																	 <li title="BD">BANGLADESH</li>
																	 <li title="BB">BARBADOS</li>
																	 <li title="BY">BELARUS</li>
																	 <li title="BE">BELGIUM</li>
																	 <li title="BZ">BELIZE</li>
																	 <li title="BJ">BENIN</li>
																	 <li title="BM">BERMUDA</li>
																	 <li title="BT">BHUTAN</li>
																	 <li title="BO">BOLIVIA</li>
																	 <li title="BA">BOSNIA AND HERZEGOVINA</li>
																	 <li title="BW">BOTSWANA</li>
																	 <li title="BV">BOUVET ISLAND</li>
																	 <li title="BR">BRAZIL</li>
																	 <li title="IO">BRITISH INDIAN OCEAN TERRITORY</li>
																	 <li title="BN">BRUNEI DARUSSALAM</li>
																	 <li title="BG">BULGARIA</li>
																	 <li title="BF">BURKINA FASO</li>
																	 <li title="BI">BURUNDI</li>
																	 <li title="KH">CAMBODIA</li>
																	 <li title="CM">CAMEROON</li>
																	 <li title="CA">CANADA</li>
																	 <li title="CV">CAPE VERDE</li>
																	 <li title="KY">CAYMAN ISLANDS</li>
																	 <li title="CF">CENTRAL AFRICAN REPUBLIC</li>
																	 <li title="TD">CHAD</li>
																	 <li title="CL">CHILE</li>
																	 <li title="CN">CHINA</li>
																	 <li title="CO">COLOMBIA</li>
																	 <li title="KM">COMOROS</li>
																	 <li title="CG">CONGO</li>
																	 <li title="CK">COOK ISLANDS</li>
																	 <li title="CR">COSTA RICA</li>
																	 <li title="CI">COTE D'IVOIRE</li>
																	 <li title="HR">CROATIA</li>
																	 <li title="CU">CUBA</li>
																	 <li title="CY">CYPRUS</li>
																	 <li title="CZ">CZECH REPUBLIC</li>
																	 <li title="DK">DENMARK</li>
																	 <li title="DJ">DJIBOUTI</li>
																	 <li title="DM">DOMINICA</li>
																	 <li title="DO">DOMINICAN REPUBLIC</li>
																	 <li title="EC">ECUADOR</li>
																	 <li title="EG">EGYPT</li>
																	 <li title="SV">EL SALVADOR</li>
																	 <li title="GQ">EQUATORIAL GUINEA</li>
																	 <li title="ER">ERITREA</li>
																	 <li title="EE">ESTONIA</li>
																	 <li title="ET">ETHIOPIA</li>
																	 <li title="FK">FALKLAND ISLANDS (MALVINAS)</li>
																	 <li title="FO">FAROE ISLANDS</li>
																	 <li title="FM">FEDERATED STATES OF MICRONESIA</li>
																	 <li title="FJ">FIJI</li>
																	 <li title="FI">FINLAND</li>
																	 <li title="FR">FRANCE</li>
																	 <li title="GF">FRENCH GUIANA</li>
																	 <li title="PF">FRENCH POLYNESIA</li>
																	 <li title="TF">FRENCH SOUTHERN TERRITORIES</li>
																	 <li title="GA">GABON</li>
																	 <li title="GM">GAMBIA</li>
																	 <li title="GE">GEORGIA</li>
																	 <li title="DE">GERMANY</li>
																	 <li title="GH">GHANA</li>
																	 <li title="GI">GIBRALTAR</li>
																	 <li title="GR">GREECE</li>
																	 <li title="GL">GREENLAND</li>
																	 <li title="GD">GRENADA</li>
																	 <li title="GP">GUADELOUPE</li>
																	 
																	 <li title="GT">GUATEMALA</li>
																	 <li title="GN">GUINEA</li>
																	 <li title="GW">GUINEA-BISSAU</li>
																	 <li title="GY">GUYANA</li>
																	 <li title="HT">HAITI</li>
																	 <li title="VA">HOLY SEE (VATICAN CITY STATE)</li>
																	 <li title="HN">HONDURAS</li>
																	 <li title="HK">HONG KONG</li>
																	 <li title="HU">HUNGARY</li>
																	 <li title="IS">ICELAND</li>
																	 <li title="IN">INDIA</li>
																	 <li title="ID">INDONESIA</li>
																	 <li title="IQ">IRAQ</li>
																	 <li title="IE">IRELAND</li>
																	 <li title="IR">ISLAMIC REPUBLIC OF IRAN</li>
																	 <li title="IM">ISLE OF MAN</li>
																	 <li title="IL">ISRAEL</li>
																	 <li title="IT">ITALY</li>
																	 <li title="JM">JAMAICA</li>
																	 <li title="JP">JAPAN</li>
																	 <li title="JE">JERSEY</li>
																	 <li title="JO">JORDAN</li>
																	 <li title="KZ">KAZAKHSTAN</li>
																	 <li title="KE">KENYA</li>
																	 <li title="KI">KIRIBATI</li>
																	 <li title="KW">KUWAIT</li>
																	 <li title="KG">KYRGYZSTAN</li>
																	 <li title="LA">LAO PEOPLE'S DEMOCRATIC REPUBLIC</li>
																	 <li title="LV">LATVIA</li>
																	 <li title="LB">LEBANON</li>
																	 <li title="LS">LESOTHO</li>
																	 <li title="LR">LIBERIA</li>
																	 <li title="LY">LIBYAN ARAB JAMAHIRIYA</li>
																	 <li title="LI">LIECHTENSTEIN</li>
																	 <li title="LT">LITHUANIA</li>
																	 <li title="LU">LUXEMBOURG</li>
																	 <li title="MO">MACAO</li>
																	 <li title="MG">MADAGASCAR</li>
																	 <li title="MW">MALAWI</li>
																	 <li title="MY">MALAYSIA</li>
																	 <li title="MV">MALDIVES</li>
																	 <li title="ML">MALI</li>
																	 <li title="MT">MALTA</li>
																	 
																	 <li title="MQ">MARTINIQUE</li>
																	 <li title="MR">MAURITANIA</li>
																	 <li title="MU">MAURITIUS</li>
																	 <li title="YT">MAYOTTE</li>
																	 <li title="MX">MEXICO</li>
																	 <li title="MC">MONACO</li>
																	 <li title="MN">MONGOLIA</li>
																	 <li title="ME">MONTENEGRO </li>
																	 <li title="MS">MONTSERRAT</li>
																	 <li title="MA">MOROCCO</li>
																	 <li title="MZ">MOZAMBIQUE</li>
																	 <li title="MM">MYANMAR</li>
																	 <li title="NA">NAMIBIA</li>
																	 <li title="NR">NAURU</li>
																	 <li title="NP">NEPAL</li>
																	 <li title="NL">NETHERLANDS</li>
																	 <li title="AN">NETHERLANDS ANTILLES</li>
																	 <li title="NC">NEW CALEDONIA</li>
																	 <li title="NZ">NEW ZEALAND</li>
																	 <li title="NI">NICARAGUA</li>
																	 <li title="NE">NIGER</li>
																	 <li title="NG">NIGERIA</li>
																	 <li title="NU">NIUE</li>
																	 <li title="NF">NORFOLK ISLAND</li>
																	 <li title="MP">NORTHERN MARIANA ISLANDS</li>
																	 <li title="NO">NORWAY</li>
																	 <li title="OM">OMAN</li>
																	 <li title="PK">PAKISTAN</li>
																	 
																	 <li title="PS">PALESTINIAN TERRITORY, OCCUPIED</li>
																	 <li title="PA">PANAMA</li>
																	 <li title="PG">PAPUA NEW GUINEA</li>
																	 <li title="PY">PARAGUAY</li>
																	 <li title="PE">PERU</li>
																	 <li title="PH">PHILIPPINES</li>
																	 <li title="PL">POLAND</li>
																	 <li title="PT">PORTUGAL</li>
																	 
																	 <li title="QA">QATAR</li>
																	 <li title="KR">REPUBLIC OF KOREA</li>
																	 <li title="MD">REPUBLIC OF MOLDOVA</li>
																	 <li title="RE">REUNION</li>
																	 <li title="RO">ROMANIA</li>
																	 <li title="RU">RUSSIAN FEDERATION</li>
																	 <li title="RW">RWANDA</li>
																	 <li title="KN">SAINT KITTS AND NEVIS</li>
																	 <li title="LC">SAINT LUCIA</li>
																	 <li title="MF">SAINT MARTIN</li>
																	 <li title="PM">SAINT PIERRE AND MIQUELON</li>
																	 <li title="VC">SAINT VINCENT AND THE GRENADINES</li>
																	 <li title="WS">SAMOA</li>
																	 <li title="SM">SAN MARINO</li>
																	 <li title="ST">SAO TOME AND PRINCIPE</li>
																	 <li title="SA">SAUDI ARABIA</li>
																	 <li title="SN">SENEGAL</li>
																	 <li title="RS">SERBIA</li>
																	 <li title="CS">SERBIA AND MONTENEGRO</li>
																	 <li title="SC">SEYCHELLES</li>
																	 <li title="SL">SIERRA LEONE</li>
																	 <li title="SG">SINGAPORE</li>
																	 <li title="SK">SLOVAKIA</li>
																	 <li title="SI">SLOVENIA</li>
																	 <li title="SB">SOLOMON ISLANDS</li>
																	 <li title="SO">SOMALIA</li>
																	 <li title="ZA">SOUTH AFRICA</li>
																	 <li title="GS">SOUTH GEORGIA AND THE SOUTH SANDWICH ISLANDS</li>
																	 <li title="ES">SPAIN</li>
																	 <li title="LK">SRI LANKA</li>
																	 <li title="SD">SUDAN</li>
																	 <li title="SR">SURINAME</li>
																	 <li title="SZ">SWAZILAND</li>
																	 <li title="SE">SWEDEN</li>
																	 <li title="CH">SWITZERLAND</li>
																	 <li title="SY">SYRIAN ARAB REPUBLIC</li>
																	 <li title="TW">TAIWAN</li>
																	 <li title="TJ">TAJIKISTAN</li>
																	 <li title="TH">THAILAND</li>
																	 <li title="CD">THE DEMOCRATIC REPUBLIC OF THE CONGO</li>
																	 <li title="MK">THE FORMER YUGOSLAV REPUBLIC OF MACEDONIA</li>
																	 <li title="TL">TIMOR-LESTE</li>
																	 <li title="TG">TOGO</li>
																	 <li title="TK">TOKELAU</li>
																	 <li title="TO">TONGA</li>
																	 <li title="TT">TRINAD AND TOBAGO</li>
																	 <li title="TN">TUNISIA</li>
																	 <li title="TR">TURKEY</li>
																	 <li title="TM">TURKMENISTAN</li>
																	 <li title="TC">TURKS AND CAICOS ISLANDS</li>
																	 <li title="TV">TUVALU</li>
																	 <li title="UG">UGANDA</li>
																	 <li title="UA">UKRAINE</li>
																	 <li title="AE">UNITED ARAB EMIRATES</li>
																	 <li title="GB">UNITED KINGDOM</li>
																	 <li title="TZ">UNITED REPUBLIC OF TANZANIA</li>
																	 <li title="US">UNITED STATES</li>
																	 <li title="UM">UNITED STATES MINOR OUTLYING ISLANDS</li>
																	 <li title="UY">URUGUAY</li>
																	 <li title="UZ">UZBEKISTAN</li>
																	 <li title="VU">VANUATU</li>
																	 <li title="VE">VENEZUELA</li>
																	 <li title="VN">VIET NAM</li>
																	 <li title="VG">VIRGIN ISLANDS, BRITISH</li>
																	 
																	 <li title="WF">WALLIS AND FUTUNA</li>
																	 <li title="YE">YEMEN</li>
																	 <li title="ZM">ZAMBIA</li>
																	 <li title="ZW">ZIMBABWE</li>
                                         
                                         						  </ul>			
                                         
                                        </div><!-- custom_dropdown -->
                                                            </div> 
                                                                 <div class="clear_both"></div>  
                                         	</div><!-- general_info -->
                                            
                                            <div class="login_info">
                                            	<h4>Your Email Address:</h4><i id="rqFld_regis_email">This field required</i><div class="clear_both"></div>
                                                <form:input path="emailid" id="emailid" type="text" class="registration_inputfield" onblur="isEmailAreadyExists()" />
                                               
                                                <h4>Choose Your Password:</h4><i id="rqFld_regis_password">Enter password</i><div class="clear_both"></div>
                                                <form:input path="password" id="password" type="password" class="registration_inputfield" />
                                                <h4>Confirm Your Password:</h4><i id="rqFld_regis_confirm_password">Enter confirm password</i><div class="clear_both"></div>
                                                <input id="confirm_password" type="password" class="registration_inputfield"/>
                                            </div><!-- login_info -->
                                            
                                            	<label>Solestruck Email Alerts:</label>
                                                <div class="clear_both"></div>
                                                
                                                <input class="email_alerts_check_box" type="checkbox" value="" name="email_allerts">
                                                <span class="email_alerts_span">Yes, please sign me up for e-mail alerts.</span>
                                                <div class="clear_both"></div>
                                                <input id="sign_in" class="registration_btn" value="FINISH REGISTRATION" type="button" name="check_out" onclick="validateRegistraion()"> 
                                        			<h3>Your Privacy and Security. </h3>
                                                    	<p>Solestruck protects your personal information.<br /> 
                                                        Read about our <a href="#" onclick = "loadContent('Privacy Notice');">privacy notice.</a></p>
                                        </form:form>
                                            <div class="right_slider">
                                               <ul>
                                               	<li><img src="images/faster_check_out.jpg" width="290" height="186" border="" /></li>
                                                <li><img src="images/exclusive_offers.jpg" width="290" height="186" border="" /></li>
                                                <li><img src="images/top_secret_features.jpg" width="290" height="186" border="" /></li>
                                               </ul> 
                                            </div><!-- right_slider -->
                              
                                <div class="clear_both"></div>
								</div><!-- content_holder -->                            
                            <div class="clear_both"></div>
                             <tiles:insertAttribute name="footer"/>
           						
                                <div class="clear_both"></div>	
                                
                                
    </div><!-- wrapper -->
    <tiles:insertAttribute name="PopUp"/> 
                                		<div id="backgroundPopup"></div>
                                		

 
 
 <!--  for SSGA-79 GODATAFEED service -->
<!-- <script>
(function() {
	  var scriptLocation=('https:' == document.location.protocol ? 'https://tracking.godatafeed.com/gdf_click.js' : 'http://tracking.godatafeed.com/gdf_click.js');
	    var cj = document.createElement('script'); cj.type = 'text/javascript'; cj.async = true;
	    cj.src = scriptLocation;
	    var sss = document.getElementsByTagName('script')[0]; sss.parentNode.insertBefore(cj, sss);
	  })();
</script> -->
<!--  for SSGA-79 GODATAFEED service --> 

<!-- for SSGA-96 GOOGLE TRUSTED STORE -->

<script type="text/javascript">

  var gts = gts || [];



  gts.push(["id", "<%=VeroniqaConstants.getGoogleTrustedStoreID()%>"]);
  
  gts.push(["google_base_offer_id","12345"]);

  gts.push(["google_base_subaccount_id", "<%=VeroniqaConstants.getGoogleTrustedStoreID()%>"]);

  gts.push(["google_base_country", "US"]);

  gts.push(["google_base_language", "EN"]);
  
  gts.push(["gtsContainer","gtrust_badges"]);

  (function() {

    var scheme = (("https:" == document.location.protocol) ? "https://" : "http://");

    var gts = document.createElement("script");

    gts.type = "text/javascript";

    gts.async = true;

    gts.src = scheme + "www.googlecommerce.com/trustedstores/gtmp_compiled.js";

    var s = document.getElementsByTagName("script")[0];

    s.parentNode.insertBefore(gts, s);

  })();

</script>

<!-- for SSGA-96 GOOGLE TRUSTED STORE --> 
<!-- Google Code for Main - New - Global -->
<!-- Remarketing tags may not be associated with personally identifiable information or placed on pages related to sensitive categories. For instructions on adding this tag and more information on the above requirements, read the setup guide: google.com/ads/remarketingsetup -->
<script type="text/javascript">
/* <![CDATA[ */
var google_conversion_id = 1070046381;
var google_conversion_label = "yGMMCJO-2QMQrbme_gM";
var google_custom_params = window.google_tag_params;
var google_remarketing_only = true;
/* ]]> */
</script>
<script type="text/javascript" src="//www.googleadservices.com/pagead/conversion.js">
</script>
<noscript>
<div style="display:inline;">
<img height="1" width="1" style="border-style:none;" alt="" src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/1070046381/?value=0&label=yGMMCJO-2QMQrbme_gM&guid=ON&script=0"/>
</div>
</noscript>  

<!-- Segment Pixel - SoleStruck--Shopper - DO NOT MODIFY -->
<script src="http://ib.adnxs.com/seg?add=1319617&t=1" type="text/javascript"></script>
<!-- End of Segment Pixel -->

</body>
</html>
