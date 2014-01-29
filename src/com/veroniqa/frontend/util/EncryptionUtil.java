package com.veroniqa.frontend.util;

import javax.crypto.Cipher;
import javax.crypto.spec.SecretKeySpec;

import org.apache.commons.codec.binary.Base64;

public class EncryptionUtil {
	
	final static byte[] seedKey=(new String("er90nsjsdlI593mjJyqb67ih")).getBytes();
	
	public static String encodeBase64(String data)
	{
		
		return new String(new Base64(true).encode(data.getBytes()));
	}

	public static String decodeBase64(String data)
	{
		return new String(new Base64(true).decode(data.getBytes()));
	}

	
	public static String encodeBase64DES(String data) throws Exception
	{
		SecretKeySpec keySpec = new SecretKeySpec(seedKey,"TripleDES");
		Cipher nCipher=Cipher.getInstance("TripleDES");
		nCipher.init( Cipher.ENCRYPT_MODE, keySpec );
		return encodeBase64(new String(nCipher.doFinal(data.getBytes())));
		
	}

	public static String decodeBase64DES(String data) throws Exception
	{
		SecretKeySpec keySpec = new SecretKeySpec(seedKey,"TripleDES");
		Cipher nCipher=Cipher.getInstance("TripleDES");
		nCipher.init( Cipher.DECRYPT_MODE, keySpec );
		byte [] encData = decodeBase64(new String(data.getBytes())).getBytes();
		return new String(nCipher.doFinal(encData));
	}
}
