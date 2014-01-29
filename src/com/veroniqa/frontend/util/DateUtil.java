package com.veroniqa.frontend.util;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.TimeZone;

public class DateUtil
{

	/*
	 * To convert a UTC Date to given Zone*/
	public static Date convertFromUTC(Date utcdate,String zoneIDToConvert)
	{
		Date retval=null;
		try
		{
			TimeZone pstZone=TimeZone.getTimeZone(zoneIDToConvert);
			retval=new Date(utcdate.getTime()+pstZone.getOffset(utcdate.getTime()));
		}
		catch(Exception e)
		{
			e.printStackTrace();
			return utcdate;
			
		}
		
		return retval;
	}
	
	/**
	 * method to return the difference between to dates 
	 * @param Date1 - from or start or orderPlaced Date
	 * @param Date2	- to or end or dateRange Date
	 * @param required - what difference required, it can be hours, minutes, seconds, milliseconds
	 * @return boolean type
	 */
	public static boolean compareDateInBetween(Date date1,Date date2,Date targetDate)
	{
		boolean result = date1.compareTo(targetDate) * targetDate.compareTo(date2) > 0;
		
		return result;
	}
}
