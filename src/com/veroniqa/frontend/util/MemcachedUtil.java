package com.veroniqa.frontend.util;

import java.util.List;
import java.util.Map;
import java.util.Set;

import com.google.appengine.api.memcache.Expiration;
import com.google.appengine.api.memcache.MemcacheService;
import com.google.appengine.api.memcache.MemcacheServiceFactory;

public class MemcachedUtil {
	
	public static final int ONE_DAY_SECONDS=86400;
	public static final int ONE_DAY_MILLISECONDS=86400000;
	public static final int ONE_HOUR_SECONDS=3600;
	public static final int ONE_HOUR_MILLISECONDS=3600000;
	
	public static void set(String key,Object value,String namespace)
	{
		MemcacheService srv=MemcacheServiceFactory.getMemcacheService(namespace);
		srv.put(key,value, Expiration.byDeltaSeconds(ONE_DAY_SECONDS)); 
	}
	
	public static void set(String key,Object value,Integer days,String namespace)
	{
		MemcacheService srv=MemcacheServiceFactory.getMemcacheService(namespace);
		srv.put(key,value, Expiration.byDeltaSeconds(ONE_DAY_SECONDS*days)); 
	}
	
	public static void setWithTime(String key,Object value,Integer seconds,String namespace)
	{
		MemcacheService srv=MemcacheServiceFactory.getMemcacheService(namespace);
		srv.put(key,value, Expiration.byDeltaSeconds(seconds)); 
	}
	
	public static void setAll(Map<String,Object> keys,Integer days,String namespace)
	{
		MemcacheService srv=MemcacheServiceFactory.getMemcacheService(namespace);
		srv.putAll(keys, Expiration.byDeltaSeconds(ONE_DAY_SECONDS*days)); 
	}
	
	public static Object get(String key,String namespace)
	{
		MemcacheService srv=MemcacheServiceFactory.getMemcacheService(namespace);
		return srv.get(key);
	}
	
	public static Map<String,Object> getAll(List<String> keys,String namespace)
	{
		MemcacheService srv=MemcacheServiceFactory.getMemcacheService(namespace);
		return srv.getAll(keys);
	}
	
	public static void remove(String key,String namespace)
	{
		MemcacheService srv=MemcacheServiceFactory.getMemcacheService(namespace);
		if(srv.contains(key))
		{
			srv.delete(key);
		}
	}
	
	public static Set<String> removeAll(List<String> keys,String namespace)
	{
		MemcacheService srv=MemcacheServiceFactory.getMemcacheService(namespace);
		
		return	srv.deleteAll(keys);
		
	}
	
	public static void flushCache(String namespace)
	{
		MemcacheService srv=MemcacheServiceFactory.getMemcacheService(namespace);
		
		srv.clearAll();
		
	}
	
	
	

}
