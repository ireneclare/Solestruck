package com.veroniqa.frontend.util;

import java.util.HashMap;
import java.util.Map;
import java.util.logging.Logger;

import org.codehaus.jackson.map.JsonMappingException;
import org.codehaus.jackson.map.ObjectMapper;
import org.codehaus.jackson.map.type.TypeFactory;

public class JSONUtil {
	static Logger log=Logger.getLogger(JSONUtil.class.getSimpleName());

	private static String canadaStateListJSON="{\"ON\":\"Ontario\",\"QC\":\"Quebec\",\"NS\":\"Nova Scotia\",\"NB\":\"New Brunswick\",\"MB\":\"Manitoba\",\"BC\":\"British Columbia\",\"PE\":\"Prince Edward Island\",\"SK\":\"Saskatchewan\",\"AB\":\"Alberta\",\"YT\":\"Yukon\",\"NT\":\"Northwest Territories / Nunavut\",\"NF\":\"Newfoundland\"}";
	private static String usStateListJSON="{\"AA\":\"AA\",\"AE\":\"AE\",\"AP\":\"AP\",\"AL\":\"Alabama\",\"AK\":\"Alaska\",\"AS\":\"American Samoa\",\"AZ\":\"Arizona\",\"AR\":\"Arkansas\",\"CA\":\"California\",\"CO\":\"Colorado\",\"CT\":\"Connecticut\",\"DE\":\"Delaware\",\"DC\":\"Dist. of Columbia\",\"FL\":\"Florida\",\"GA\":\"Georgia\",\"GU\":\"Guam\",\"HI\":\"Hawaii\",\"ID\":\"Idaho\",\"IL\":\"Illinois\",\"IN\":\"Indiana\",\"IA\":\"Iowa\",\"KS\":\"Kansas\",\"KY\":\"Kentucky\",\"LA\":\"Louisiana\",\"ME\":\"Maine\",\"MH\":\"Marshall Islands\",\"MD\":\"Maryland\",\"MA\":\"Massachusetts\",\"MI\":\"Michigan\",\"MN\":\"Minnesota\",\"MS\":\"Mississippi\",\"MO\":\"Missouri\",\"MT\":\"Montana \",\"NE\":\"Nebraska\",\"NV\":\"Nevada\",\"NH\":\"New Hampshire\",\"NJ\":\"New Jersey\",\"NM\":\"New Mexico\",\"NY\":\"New York\",\"NC\":\"North Carolina\",\"ND\":\"North Dakota\",\"OH\":\"Ohio\",\"OK\":\"Oklahoma\",\"OR\":\"Oregon\",\"PW\":\"Palau\",\"PA\":\"Pennsylvania\",\"PR\":\"Puerto Rico\",\"RI\":\"Rhode Island\",\"SC\":\"South Carolina\",\"SD\":\"South Dakota\",\"TN\":\"Tennessee\",\"TX\":\"Texas\",\"UT\":\"Utah\",\"VT\":\"Vermont\",\"VI\":\"Virgin Islands\",\"VA\":\"Virginia\",\"WA\":\"Washington\",\"WV\":\"West Virginia\",\"WI\":\"Wisconsin\",\"WY\":\"Wyoming\"}";
	private static String countryListJSON="{\"AL\":\"Albania\",\"AD\":\"Andorra\",\"AR\":\"Argentina\",\"AU\":\"Australia\",\"AT\":\"Austria\",\"BD\":\"Bangladesh\",\"BY\":\"Belarus\",\"BE\":\"Belgium\",\"BT\":\"Bhutan\",\"BA\":\"Bosnia-Herzegovina\",\"BR\":\"Brazil\",\"BN\":\"Brunei Darussalam\",\"BG\":\"Bulgaria\",\"KH\":\"Cambodia\",\"CA\":\"Canada\",\"CL\":\"Chile\",\"CN\":\"China\",\"CX\":\"Christmas Island\",\"CK\":\"Cook Islands\",\"HR\":\"Croatia\",\"CY\":\"Cyprus\",\"CZ\":\"Czech Republic\",\"DK\":\"Denmark\",\"TP\":\"East Timor\",\"EE\":\"Estonia\",\"FO\":\"Faroe Islands\",\"FM\":\"Federated States of Micronesia\",\"FJ\":\"Fiji\",\"FI\":\"Finland\",\"FR\":\"France\",\"PF\":\"French Polynesia\",\"GE\":\"Georgia\",\"DE\":\"Germany\",\"GI\":\"Gibraltar\",\"GR\":\"Greece\",\"GL\":\"Greenland\",\"VA\":\"Holy See\",\"HK\":\"Hong Kong\",\"HU\":\"Hungary\",\"IS\":\"Iceland\",\"IN\":\"India\",\"ID\":\"Indonesia\",\"IQ\":\"Iraq\",\"IE\":\"Ireland\",\"IL\":\"Israel\",\"IT\":\"Italy\",\"SJ\":\"Jan Mayen Island\",\"JP\":\"Japan\",\"KZ\":\"Kazakhstan\",\"KI\":\"Kiribati\",\"KO\":\"Kosovo\",\"KW\":\"Kuwait\",\"LA\":\"Lao Peoples Democratic Republic\",\"LV\":\"Latvia\",\"LI\":\"Liechtenstein\",\"LT\":\"Lithuania\",\"LU\":\"Luxembourg\",\"MO\":\"Macau\",\"MK\":\"Macedonia\",\"MY\":\"Malaysia\",\"MV\":\"Maldives\",\"MT\":\"Malta\",\"MX\":\"Mexico\",\"MC\":\"Monaco\",\"MN\":\"Mongolia\",\"ME\":\"Montenegro\",\"MM\":\"Myanmar\",\"NR\":\"Nauru\",\"NP\":\"Nepal\",\"NL\":\"Netherlands\",\"NC\":\"New Caledonia\",\"NZ\":\"New Zealand\",\"NU\":\"Niue\",\"MP\":\"Northern Mariana Islands\",\"NO\":\"Norway\",\"PG\":\"Papua New Guinea\",\"PY\":\"Paraguay\",\"PH\":\"Philippines\",\"PL\":\"Poland\",\"PT\":\"Portugal\",\"QA\":\"Qatar\",\"RO\":\"Romania\",\"RU\":\"Russia\",\"WS\":\"Samoa\",\"SM\":\"San Marino\",\"SA\":\"Saudi Arabia\",\"CS\":\"Serbia\",\"SG\":\"Singapore\",\"SK\":\"Slovakia\",\"SI\":\"Slovenia\",\"SB\":\"Solomon Islands\",\"ZA\":\"South Africa\",\"KR\":\"South Korea\",\"ES\":\"Spain\",\"LK\":\"Sri Lanka\",\"SV\":\"Svalbard\",\"SE\":\"Sweden\",\"CH\":\"Switzerland\",\"TW\":\"Taiwan\",\"TH\":\"Thailand\",\"TO\":\"Tonga\",\"TR\":\"Turkey\",\"TV\":\"Tuvalu\",\"US\":\"USA\",\"UA\":\"Ukraine\",\"AE\":\"United Arab Emirates\",\"GB\":\"United Kingdom\",\"UY\":\"Uruguay\",\"VU\":\"Vanuatu\",\"VN\":\"Vietnam\"}";
	
	public static String getCountryName(String countryCode)
	{
		String countryName=null;
		try
		{
			Map<String, String> countrymap = new ObjectMapper().readValue(
				countryListJSON, TypeFactory.mapType(HashMap.class, String.class, String.class));
			countryName=countrymap.get(countryCode);
		}
		catch(JsonMappingException JE)
		{
			log.info("JsonMappingException in getCountryName"+JE);
		}
		catch(Exception e)
		{
			log.info("Exception in "+e);
		}
		return countryName;
	}
	public static String getStateName(String statecode,String countrycode)
	{
		String statename=null;
		String stateList=null;
		try
		{
			if("CA".equals(countrycode))
				stateList=canadaStateListJSON;
			else if("US".equals(countrycode))
				stateList=usStateListJSON;
			else
				return null;
			Map<String, String> stateMap = new ObjectMapper().readValue(
					stateList, TypeFactory.mapType(HashMap.class, String.class, String.class));
			statename=stateMap.get(statecode);
		}
		catch(JsonMappingException JE)
		{
			log.info("JsonMappingException in getStateName"+JE);
		}
		catch(Exception e)
		{
			log.info("Exception in getStateName"+e);
		}
		return statename;
	}
	public static String getStateCode(String statename,String countryCode)
	{
		String statecode=null;
		String stateList=null;
		try
		{
			if("CA".equals(countryCode))
				stateList=canadaStateListJSON;
			else if("US".equals(countryCode))
				stateList=usStateListJSON;
			else
				return null;
			Map<String, String> stateMap = new ObjectMapper().readValue(
					stateList, TypeFactory.mapType(HashMap.class, String.class, String.class));
			for(String stcode:stateMap.keySet())
			{
				if(statename.equalsIgnoreCase(stateMap.get(stcode)))
				{
					return stcode;
				}
			}
		}
		catch(JsonMappingException JE)
		{
			log.info("JsonMappingException in getStateCode"+JE);
		}
		catch(Exception e)
		{
			log.info("Exception in "+e);
		}
		return null;
	}
}
