package com.veroniqa.frontend.Controllers;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStreamWriter;
import java.io.Reader;
import java.io.UnsupportedEncodingException;
import java.io.Writer;
import java.net.HttpURLConnection;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.net.URLEncoder;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.xml.parsers.DocumentBuilder;
import javax.xml.parsers.DocumentBuilderFactory;
import javax.xml.xpath.XPath;
import javax.xml.xpath.XPathConstants;
import javax.xml.xpath.XPathExpression;
import javax.xml.xpath.XPathFactory;

import org.apache.commons.codec.binary.Base64;
import org.codehaus.jackson.JsonNode;
import org.codehaus.jackson.map.ObjectMapper;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.w3c.dom.Document;
import org.w3c.dom.NodeList;
import org.xml.sax.InputSource;

import twitter4j.Query;
import twitter4j.QueryResult;
import twitter4j.Status;
import twitter4j.Twitter;
import twitter4j.TwitterFactory;
import twitter4j.conf.ConfigurationBuilder;

import com.google.appengine.api.urlfetch.HTTPMethod;
import com.google.appengine.api.urlfetch.HTTPRequest;
import com.google.appengine.api.urlfetch.HTTPResponse;
import com.google.appengine.api.urlfetch.URLFetchService;
import com.google.appengine.api.urlfetch.URLFetchServiceFactory;
import com.google.appengine.labs.repackaged.org.json.JSONObject;
import com.sun.corba.se.spi.ior.Writeable;
import com.sun.net.ssl.HttpsURLConnection;
import com.veroniqa.dto.InstagramFeedDTO;
import com.veroniqa.dto.LookBookFeedDTO;
import com.veroniqa.dto.ResponseDTO;
import com.veroniqa.frontend.util.MemcachedConstants;
import com.veroniqa.frontend.util.MemcachedUtil;
import com.veroniqa.frontend.util.VeroniqaConstants;

@Controller
public class BlogFeedController {

	
	public static final Logger log=Logger.getLogger(BlogFeedController.class.getSimpleName());
	
	public String serviceProvider = null;
	
/** To get the lookbook.nu feeds - new
 * @author shailyjha
 * @param req
 * @param resp
 * @return
 * @throws Exception
 */
@RequestMapping(value ="/getLookBookFeedsForBlog1.htm", method = RequestMethod.GET)
public @ResponseBody String getLookBookFeedsForBlog1(HttpServletRequest req, HttpServletResponse resp) throws Exception
{
	ResponseDTO responseObj=new ResponseDTO();
	ObjectMapper mapper=new ObjectMapper();
	List<LookBookFeedDTO> retVal=null;
	
	
	 try {
		 
		 retVal=(List<LookBookFeedDTO>)MemcachedUtil.get(VeroniqaConstants.RESPONSEFEED,MemcachedConstants.FEEDRESPONSE);
		 
		 if(retVal==null)
		  {
			 retVal=new ArrayList<LookBookFeedDTO>();
			   log.info("Not in memcache going to post request to API");
			   
			   // vendorList=(List<Attribute>)RestClientUtil.callService(serviceParamsForVendors,"getVendorList",VeroniqaConstants.PRODUCT_MANAGER_BUSINESS_SERVICE);
			   

				  DocumentBuilderFactory domFactory = DocumentBuilderFactory.newInstance();
				  domFactory.setNamespaceAware(true);
				  DocumentBuilder builder = domFactory.newDocumentBuilder();
				  URL url = new URL("http://lookbook.nu/user/1491225-Lavenda-M/looks.rss");
				  InputStream inputStream = url.openStream();
				  Reader reader = new InputStreamReader(inputStream, "UTF-8");
				  InputSource inputSource = new InputSource(reader);
				  Document doc = builder.parse(inputSource);
				  XPath xpath = XPathFactory.newInstance().newXPath();
				  
				  
				  XPathExpression expr = xpath.compile("//rss/channel/item/title/text()");
				  
				  XPathExpression expr1 = xpath.compile("//rss/channel/item/link/text()");
				  
				  XPathExpression expr2 = xpath.compile("//rss/channel/item/imageSrc/text()");
				  
				  NodeList nodes = (NodeList)expr.evaluate(doc, XPathConstants.NODESET);
				  NodeList nodes1 = (NodeList)expr1.evaluate(doc, XPathConstants.NODESET);
				  NodeList nodes2 = (NodeList)expr2.evaluate(doc, XPathConstants.NODESET);
				  
				   for (int i = 0; i < nodes.getLength(); i++)
				   {
					LookBookFeedDTO lbdto = new LookBookFeedDTO();
					String title = nodes.item(i).getNodeValue();
				    log.info(" TITLE  = " + title);
				    String link = nodes1.item(i).getNodeValue();
				    log.info(" LINK  = " + link);
				    String imageSrc = nodes2.item(i).getNodeValue();
				    log.info(" IMG SRC  = " + imageSrc);
				    
				    lbdto.setTitle(title);
				    lbdto.setLink(link);
				    lbdto.setImage_url(imageSrc);
				    
				    retVal.add(lbdto);
				   }
				   responseObj.setMethodName("getLookBookFeedsForBlog");
				   responseObj.setResult(retVal);
				   
			   MemcachedUtil.set(VeroniqaConstants.RESPONSEFEED,retVal,MemcachedConstants.FEEDRESPONSE);
		  }
		 else
		 {
			 	log.info("Memcache is available for Lookbook");
			 	responseObj.setMethodName("getLookBookFeedsForBlog");
			   responseObj.setResult(retVal);
		 }
				   
		  }
		  catch (Exception exception) {
		   exception.printStackTrace();
		  }
	 System.out.println("retVal >>>>> " + retVal.size());
	 log.info("FEMINA Getting getLookBookFeedsForBlog1 Size---->>>>"+retVal.size());
	
	return req.getParameter("jsonp_callback")+"("+mapper.writeValueAsString(responseObj)+")";
	
}



/** To get the twitter
 * @author Femina
 * @param req
 * @param resp
 * @return
 * @throws Exception
 */

//@RequestMapping(value ="/getTweetsForBlog.htm", method = RequestMethod.GET)
//public @ResponseBody String getTweetsForBlog(HttpServletRequest req, HttpServletResponse resp) throws Exception
//{
//	ResponseDTO responseObj=new ResponseDTO();
//	ObjectMapper mapper=new ObjectMapper();
//	List<LookBookFeedDTO> retVal=null;
//	
//	
//	 try {
//		  
//		 retVal=(List<LookBookFeedDTO>)MemcachedUtil.get(VeroniqaConstants.RESPONSETWITTER,MemcachedConstants.TWITTERRESPONSE);
//		 if(retVal==null || (retVal!=null && retVal.size()==0))
//		  {
//			 
//			
//			   retVal=new ArrayList<LookBookFeedDTO>();
//			   log.info("Not in memcache going to post request to API");
//			   String url = "https://api.twitter.com/1/statuses/user_timeline.json?include_entities=true&include_rts=true&screen_name=SolestruckShoes&count=30";
//			   log.info("before jackson call");
//			   
//			   URLFetchService fetcher = URLFetchServiceFactory.getURLFetchService();
//	           
//			   HTTPRequest request = new HTTPRequest(new URL(url), HTTPMethod.GET);
//			   Double deadline = (double) 900000;
//			   request.getFetchOptions().setDeadline(deadline);
//			   HTTPResponse response = fetcher.fetch(request);
//
//			   log.info("Response code -> "+response.getResponseCode());
//			   if (response.getResponseCode() == 200)
//			   {
//				   String responseString = new String(response.getContent());
//				   log.info("Response String => "+responseString);
//				 JsonNode node=mapper.readTree(responseString);
//				 //JsonNode node=mapper.readTree(url.openStream());
//				 log.info("after jackson call");
//				 
//				 if(node.isArray())
//				 {
//					 log.info("IT IS AN ARRAY");
//					 for(int i=0;i<node.size();i++)
//					 {
//						 log.info("traversing");
//						 JsonNode nod=node.get(i);
//						 LookBookFeedDTO lbdto = new LookBookFeedDTO();
//						 lbdto.setImage_url(nod.path("text").getTextValue());
//						 retVal.add(lbdto);
//					 }
//				 }
//				 responseObj.setMethodName("getTweetsForBlog");
//				   responseObj.setResult(retVal);
//				   
//			   MemcachedUtil.set(VeroniqaConstants.RESPONSETWITTER,retVal,MemcachedConstants.TWITTERRESPONSE);  
//			   
//		  }
//		  }
//		 else 
//		 {
//			 log.info("Memcache is available for Twitter");
//			 responseObj.setMethodName("getTweetsForBlog");
//			   responseObj.setResult(retVal);
//		 }
//		 
//		 
//		  }
//		  catch (Exception exception) {
//		   exception.printStackTrace();
//		  }
//	 System.out.println("retVal >>>>> " + retVal.size());
//	 log.info("FEMINA Getting getTweetsForBlog Size---->>>>"+retVal.size());
//	
//	return req.getParameter("callback")+"("+mapper.writeValueAsString(responseObj)+")";
//	
//}

@RequestMapping(value ="/getTweetsForBlog.htm", method = RequestMethod.GET)
public @ResponseBody String getTweetsForBlog(HttpServletRequest req, HttpServletResponse resp) throws Exception
{
	log.info("Its coming in getTweetsForBlog");
	ResponseDTO responseObj=new ResponseDTO();
	ObjectMapper mapper=new ObjectMapper();
	 
	List<LookBookFeedDTO> retVal=null;
	
	
	String ACCESS_TOKEN = "631860485-CcILulo5QUBMDjpKV0O3SMuSQHNoJruCobXrFjdA";
	String ACCESS_TOKEN_SECRET = "KVGvjrmXQZJOU5o8yHObnJ66KBQdRmCzaAnCYueuFxU";
	String CONSUMER_KEY = "lDmQg8G4vCUOBvDVkYiiQA";
	String CONSUMER_SECRET = "0NOwG6q4w5NAbsDvx6tAEP8gpNC8W0EJ1AZXu0b84";

	ConfigurationBuilder cb = new ConfigurationBuilder();
	
	cb.setDebugEnabled(true)
	 .setOAuthConsumerKey(CONSUMER_KEY)
	 .setOAuthConsumerSecret(CONSUMER_SECRET)
	 .setOAuthAccessToken(ACCESS_TOKEN)
	 .setOAuthAccessTokenSecret(ACCESS_TOKEN_SECRET);
	
	TwitterFactory tf = new TwitterFactory(cb.build());
	Twitter twitter = tf.getInstance();
	
   try 
   {
	   retVal=(List<LookBookFeedDTO>)MemcachedUtil.get(VeroniqaConstants.RESPONSETWITTER,MemcachedConstants.TWITTERRESPONSE);
	   if(retVal==null || (retVal!=null && retVal.size()==0))
	    {
		    retVal=new ArrayList<LookBookFeedDTO>();
	        Query query = new Query("solestruckshoes");
	        QueryResult result;
	        do 
	        {
	           result = twitter.search(query);
	           List<Status> tweets = result.getTweets();
	           for (Status tweet : tweets) 
	           {
	               LookBookFeedDTO lbdto = new LookBookFeedDTO();
	               lbdto.setImage_url(tweet.getText());
	               retVal.add(lbdto);
	           }
	        }while ((query = result.nextQuery()) != null);
	       
	        responseObj.setMethodName("getTweetsForBlog");
	        responseObj.setResult(retVal);
	       
	       MemcachedUtil.set(VeroniqaConstants.RESPONSETWITTER,retVal,MemcachedConstants.TWITTERRESPONSE);
	       System.exit(0);
	    }
	   else 
	   {
	    log.info("Memcache is available for Twitter");
	    responseObj.setMethodName("getTweetsForBlog");
	      responseObj.setResult(retVal);
	   }
   }
   catch (Exception exception) 
   {
	   exception.printStackTrace();
	  }
   log.info("getTweetsForBlog Size---->>>>"+retVal.size());

   return req.getParameter("callback")+"("+mapper.writeValueAsString(responseObj)+")";
	  
       
      
    }

/** To get the Instagram feeds - new
 * @author Femina
 * @param req
 * @param resp
 * @return
 * @throws Exception
 */
@RequestMapping(value ="/getInstagramFeedsForBlog.htm", method = RequestMethod.GET)
public @ResponseBody String getInstagramFeedsForBlog(@RequestParam("maxTagId")String next_max_tag_id, HttpServletRequest req, HttpServletResponse resp) throws Exception
{
	//System.out.println("Hey Im  coming Here --------->>>>>>>");
	ResponseDTO responseObj=new ResponseDTO();
	ObjectMapper mapper=new ObjectMapper();
	ObjectMapper mapper1=new ObjectMapper();
	List<InstagramFeedDTO> retVal=null;
	String url = null;
	log.info("INSTAGRAM max id = " + next_max_tag_id);
	Long tag_id = Long.parseLong(next_max_tag_id);
	 try {
		  
		 retVal=(List<InstagramFeedDTO>)MemcachedUtil.get(VeroniqaConstants.INSTAFEED+"_"+next_max_tag_id,MemcachedConstants.FEEDINSTA);
		 if(retVal==null)
		  {
			 retVal=new ArrayList<InstagramFeedDTO>();
			   log.info("Not in memcache going to post request to API");
			   //http://shoewar-staging.appspot.com/getMediaListForTag?tagName=solestruck&count=100&maxTagId="+next_max_tag_id
			   
			   if(tag_id>0){
				   url = "http://shoewar-staging.appspot.com/getMediaListForTag?tagName=solestruck&count=100&maxTagId="+next_max_tag_id;
			   }
			   else{
				   url = "http://shoewar-staging.appspot.com/getMediaListForTag?tagName=solestruck&count=100";
			   }
			   
			   
	           URLFetchService fetcher = URLFetchServiceFactory.getURLFetchService();
	           
			   HTTPRequest request = new HTTPRequest(new URL(url), HTTPMethod.GET);
			   Double deadline = (double) 90000;
			   request.getFetchOptions().setDeadline(deadline);
			   HTTPResponse response = fetcher.fetch(request);

			   log.info("Response code -> "+response.getResponseCode());
			   if (response.getResponseCode() == 200)
			   {
				   String responseString = new String(response.getContent());
				   log.info("Response String => "+responseString);
			   
				// JsonNode node=mapper.readTree(url.openStream());
				   JsonNode node=mapper.readTree(responseString);				 
				   log.info("node medialist === "+node.path("mediaList"));
				 
				 //JsonNode actualObj = mapper.readValue(node.path("mediaList").getValueAsText(), JsonNode.class);
				 //JsonNode actualObj = mapper.readTree(node.path("mediaList").getValueAsText());
				 JsonNode node1 = node.path("mediaList");
				 JsonNode node2 = node.path("pagination");
				 
				
				 
				 if(node1.isArray())
				 {
					 log.info("isArray === "+node1.size() );
					 for(int i=0;i<node1.size();i++)
					 {
						 JsonNode nod=node1.get(i);
						 InstagramFeedDTO instadto = new InstagramFeedDTO();
						 
						 instadto.setMediaID(nod.path("mediaId").getTextValue());
						 instadto.setImageLink("http://statigr.am/p/" + nod.path("mediaId").getTextValue());
						 instadto.setImage_url(nod.path("images").path("standardResolution").path("imageUrl").getTextValue());
						 instadto.setNext_max_tag_id(node2.path("next_max_tag_id").getTextValue());
						 
						 
						 retVal.add(instadto);
					 }
					 
				 }
				
				   responseObj.setMethodName("getInstagramFeedsForBlog");
				   responseObj.setResult(retVal);
				   
			   MemcachedUtil.set(VeroniqaConstants.INSTAFEED+"_"+next_max_tag_id,retVal,MemcachedConstants.FEEDINSTA);  
			   
		  }
		  }
		 else
		 {
			 	responseObj.setMethodName("getInstagramFeedsForBlog");
			   responseObj.setResult(retVal);
		 }
		  
		 
		  }
		  catch (Exception exception) {
		   exception.printStackTrace();
		  }
	 System.out.println("retVal >>>>> " + retVal.size());
	 
	 log.info("FEMINA Getting getInstagramFeedsForBlog Size---->>>>"+retVal.size());
	return req.getParameter("callback")+"("+mapper.writeValueAsString(responseObj)+")";
	
}

/** To get the facebook feeds
 * @author Femina
 * @param req
 * @param resp	
 * @return
 * @throws Exception
 */

@RequestMapping(value ="/getFacebookFeedsForBlog.htm", method = RequestMethod.GET)
public @ResponseBody String getFacebookFeedsForBlog(@RequestParam("offset")String offset, @RequestParam("limit")String limit,HttpServletRequest req, HttpServletResponse resp) throws Exception
{
	ResponseDTO responseObj=new ResponseDTO();
	ObjectMapper mapper=new ObjectMapper();
	List<LookBookFeedDTO> retVal=null;
	
	
	 try {
		  log.info("start time:"+new Date());
		 retVal=(List<LookBookFeedDTO>)MemcachedUtil.get(VeroniqaConstants.FACEBOOKFEED+"_"+offset,MemcachedConstants.FACEBOOKRESPONSE);
		 if(retVal==null)
		  {
			 retVal=new ArrayList<LookBookFeedDTO>();
			   log.info("Not in memcache going to post request to API");
			   String url ="http://graph.facebook.com/115492655170273/photos?offset="+offset+"&limit="+limit;
				  
			   log.info("URL:::::::: " + url);
			   
              URLFetchService fetcher = URLFetchServiceFactory.getURLFetchService();
	           
			   HTTPRequest request = new HTTPRequest(new URL(url), HTTPMethod.GET);
			   Double deadline = (double) 900000;
			   request.getFetchOptions().setDeadline(deadline);
			   HTTPResponse response = fetcher.fetch(request);

			   log.info("Response code -> "+response.getResponseCode());
			   if (response.getResponseCode() == 200)
			   {
				   String responseString = new String(response.getContent());
				   log.info("Response String => "+responseString);
				 JsonNode node=mapper.readTree(responseString);
				 
				 log.info(" response :::: " + node.size() );
				 
				 JsonNode node1 = node.path("data");
				 
				 if(node1.isArray())
				 {
					 log.info(" is array :::: TRUE" );
					 for(int i=0;i<node1.size();i++)
					 {
						 JsonNode nod=node1.get(i);
						 LookBookFeedDTO lbdto = new LookBookFeedDTO();
						 lbdto.setImage_url(nod.path("source").getTextValue());
						 lbdto.setLink(nod.path("link").getTextValue());
						 retVal.add(lbdto);
					 }
				 }
				 responseObj.setMethodName("getFacebookFeedsForBlog");
				   responseObj.setResult(retVal);
				   
			   MemcachedUtil.set(VeroniqaConstants.FACEBOOKFEED+"_"+offset,retVal,MemcachedConstants.FACEBOOKRESPONSE);  
			   
		  }
		  }
		 else
		 {
			 log.info("Memcache is available for Facebook");
			 responseObj.setMethodName("getFacebookFeedsForBlog");
			   responseObj.setResult(retVal);
		 }
		 
		  }
		  catch (Exception exception) {
		   exception.printStackTrace();
		  }
	 log.info("retVal >>>>> " + retVal.size());
	 log.info("end time:"+new Date());
	 log.info("FEMINA Getting getFacebookFeedsForBlog Size---->>>>"+retVal.size());
	return req.getParameter("callback")+"("+mapper.writeValueAsString(responseObj)+")";
	
}


/** To get the facebook feeds for fortyeight
 * @author Femina
 * @param req
 * @param resp
 * @return
 * @throws Exception
 */

@RequestMapping(value ="/getFacebookFeedsForBlogForFortyEight.htm", method = RequestMethod.GET)
public @ResponseBody String getFacebookFeedsForBlogForFortyEight(@RequestParam("offset")String offset, @RequestParam("limit")String limit,HttpServletRequest req, HttpServletResponse resp) throws Exception
{
	ResponseDTO responseObj=new ResponseDTO();
	ObjectMapper mapper=new ObjectMapper();
	List<LookBookFeedDTO> retVal=null;
	
	
	 try {
		  
		 retVal=(List<LookBookFeedDTO>)MemcachedUtil.get(VeroniqaConstants.FACEBOOKFEED_FORTYEIGHT+"_"+offset,MemcachedConstants.FACEBOOKRESPONSE_FORTYEIGHT);
		 if(retVal==null)
		  {
			 retVal=new ArrayList<LookBookFeedDTO>();
			   log.info("Not in memcache going to post request to API");
			   URL url = new URL("http://graph.facebook.com/468381459869486/photos?offset="+offset+"&limit="+limit);
				  
			   log.info("URL:::::::: " + url);
				  
				 JsonNode node=mapper.readTree(url.openStream());
				 
				 log.info(" response :::: " + node.size() );
				 
				 JsonNode node1 = node.path("data");
				 
				 if(node1.isArray())
				 {
					 log.info(" is array :::: TRUE" );
					 for(int i=0;i<node1.size();i++)
					 {
						 JsonNode nod=node1.get(i);
						 LookBookFeedDTO lbdto = new LookBookFeedDTO();
						 lbdto.setImage_url(nod.path("source").getTextValue());
						 lbdto.setLink(nod.path("link").getTextValue());
						 retVal.add(lbdto);
					 }
				 }
				 responseObj.setMethodName("getFacebookFeedsForBlogForFortyEight");
				   responseObj.setResult(retVal);
				   
			   MemcachedUtil.set(VeroniqaConstants.FACEBOOKFEED_FORTYEIGHT+"_"+offset,retVal,MemcachedConstants.FACEBOOKRESPONSE_FORTYEIGHT);  
			   
		  }
		 else
		 {
			 log.info("Memcache is available for Facebook 48");
			 responseObj.setMethodName("getFacebookFeedsForBlogForFortyEight");
			   responseObj.setResult(retVal);
		 }
		 
		  }
		  catch (Exception exception) {
		   exception.printStackTrace();
		  }
	 log.info("retVal >>>>> " + retVal.size());
	 log.info("FEMINA Getting getFacebookFeedsForBlogForFortyEight Size---->>>>"+retVal.size());
	
	return req.getParameter("callback")+"("+mapper.writeValueAsString(responseObj)+")";
	
}

}