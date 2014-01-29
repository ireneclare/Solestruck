package com.veroniqa.frontend.util;

import java.util.logging.Logger;



public class EnvironmentUtil {
	
	
	private static final Logger log=Logger.getLogger(EnvironmentUtil.class.getName());
	
	public static String getEnvironmentValue(String key)throws Exception
	{
		String retVal=null;
		try
		{
			retVal=System.getProperty(key);
			log.info("Inside the environmen to get the Key"+retVal);
		}
		catch(Exception ex)
		{
			log.warning("Environment Exception :"+ex.getMessage());
			ex.printStackTrace();
			throw ex;
			
		}
		finally
		{
			
		}
		
		return retVal;
	}

}
