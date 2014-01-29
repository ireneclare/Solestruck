package com.veroniqa.frontend.service;

import java.nio.ByteBuffer;
import java.nio.charset.Charset;
import java.util.logging.Logger;

import com.google.appengine.tools.cloudstorage.GcsFileOptions;
import com.google.appengine.tools.cloudstorage.GcsFilename;
import com.google.appengine.tools.cloudstorage.GcsOutputChannel;
import com.google.appengine.tools.cloudstorage.GcsService;
import com.google.appengine.tools.cloudstorage.GcsServiceFactory;
import com.google.appengine.tools.cloudstorage.RetryParams;



public class GoogleStorageUtil {


	public static final String ACL_PUBLIC_READ="public-read";
	public static final String ACL_PROJECT_PRIVATE="project-private";
	public static final String ACL_PRIVATE="private";
	public static final String ACL_PUBLIC_READ_WRITE="public-read-write";
	public static final String ACL_AUTHENTICATED_READ="authenticated-read";
	public static final String ACL_BUCKET_OWNER_READ="bucket-owner-read";
	public static final String ACL_BUCKET_OWNER_FULL_CONTROL="bucket-owner-full-control";
	
	public static final String GOOGLE_CLOUD_STORAGE_URL="http://commondatastorage.googleapis.com";
	
	private static Logger mLogger =Logger.getLogger(GoogleStorageUtil.class.getSimpleName());
	
	private static GoogleStorageUtil _instance		=	null;
	
    
    public static final String GOOGLESTORAGE_ACCESSKEY	=	"GOOG5YWPDPTBG5KBOU4G" ;						//"GOOGH7O2DIFOWJUFV6HM";
	public static final String GOOGLESTORAGE_SECRET		=	"hGDvIV38hbA2m4ZP6P8rIEouZIqlqQZmSqnvxiax" ;	//"SRk7HyPD/2FnDj4e0pglYCE2nMt6B0mjq2dKTZWi";
	
	
	
	
	
	
	
	public static String uploadUsingGcs(byte[] fileBytes,String bucketName,String objectName,String mimeType)
	{
		String filePath = null;
		try
		{
			mLogger.info("into the method to upload file "+objectName+" to "+bucketName);
			filePath=GOOGLE_CLOUD_STORAGE_URL+"/"+bucketName+"/"+objectName;
			GcsService gcsService = GcsServiceFactory.createGcsService(new RetryParams.Builder().initialRetryDelayMillis(10).retryMaxAttempts(10).totalRetryPeriodMillis(15000).build());
			GcsFilename filename = new GcsFilename(bucketName, objectName);
		    GcsFileOptions options = new GcsFileOptions.Builder().addUserMetadata("cache-control", "max-age="+(86400*365)).mimeType(mimeType).acl(ACL_PUBLIC_READ).build();
		    GcsOutputChannel writeChannel = gcsService.createOrReplace(filename,options);
		    writeChannel.write(ByteBuffer.wrap(fileBytes));
		    writeChannel.close();
		    mLogger.info("File successfully uploaded");
		}
		catch(Exception e){
			mLogger.warning("The error came becoz of "+e.getMessage());
			for(StackTraceElement s:e.getStackTrace()){
				mLogger.warning(s.toString());
			}
		}
		return filePath;
	}

	
}
