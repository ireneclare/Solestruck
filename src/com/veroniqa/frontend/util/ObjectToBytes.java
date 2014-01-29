package com.veroniqa.frontend.util;

import java.io.ByteArrayInputStream;
import java.io.ByteArrayOutputStream;
import java.io.ObjectInputStream;
import java.io.ObjectOutputStream;
import java.util.logging.Logger;

import com.veroniqa.dto.FrontEndDTO;

public class ObjectToBytes {
	
	private static final Logger log=Logger.getLogger(ObjectToBytes.class.getSimpleName());
	
	public  static byte[] getBytesFromObject(FrontEndDTO fd)
	{
		ByteArrayOutputStream bos=new ByteArrayOutputStream();
		byte retVal[]=null;
		try
		{
			ObjectOutputStream oos=new ObjectOutputStream(bos);
			oos.writeObject(fd);
			oos.flush();
			oos.close();
			bos.close();
			retVal=bos.toByteArray();
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the getObjectInBytes() "+e.getMessage());
			e.printStackTrace();
		}
		
		return retVal;
	}
	
	public  static byte[] getBytesFromObject(Object object)
	{
		ByteArrayOutputStream bos=new ByteArrayOutputStream();
		byte retVal[]=null;
		try
		{
			ObjectOutputStream oos=new ObjectOutputStream(bos);
			oos.writeObject(object);
			oos.flush();
			oos.close();
			bos.close();
			retVal=bos.toByteArray();
		}
		catch(Exception e)
		{
			log.warning("An exception occured in the getObjectInBytes() "+e.getMessage());
			e.printStackTrace();
		}
		
		return retVal;
	}
	
	public static Object getObjectFromBytes(byte[] bytes)
	{
		ByteArrayInputStream bis=new ByteArrayInputStream(bytes);
		Object retVal=null;
		try
		{
			ObjectInputStream ois=new ObjectInputStream(bis);
			retVal=ois.readObject();
		}
		catch(Exception e)
		{
			log.warning("Exception occured in the getBytesFromObject "+e.getMessage());
			e.printStackTrace();
		}
		return retVal;
	}

}
