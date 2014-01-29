package com.veroniqa.frontend.Controllers;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.Locale;
import java.util.TimeZone;
import java.util.logging.Logger;

import javax.jdo.PersistenceManager;
import javax.jdo.Query;


import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.google.appengine.api.datastore.Key;
import com.google.appengine.api.datastore.KeyFactory;
import com.veroniqa.frontend.util.PMF;
import com.veroniqa.jdo.Order;
import com.veroniqa.frontend.jdo.TimerHandler;

@Controller
public class TimerHandlerController {

	private Logger log=Logger.getLogger("TimerHandlerController");
	
	@RequestMapping("/createTimerEntity.htm")
	@ResponseBody public String createTimerEntity(@RequestParam("name")String name,@RequestParam("id")String id,@RequestParam("timerStartTime")String startTime,@RequestParam("timerEndTime")String endTime){
		String result = null;
		PersistenceManager pm = null;
		try{
			
			//sameple url /createTimerEntity.htm?name=discountProgram&id=7387236&timerStartTime=2013-06-25 00:00:00&timerEndTime=2013-06-25 00:00:00
			
			TimerHandler timer = new TimerHandler();
			timer.setDateAdded(new Date());
			timer.setIsDeleted(false);
			timer.setTimerEnd(convertStringToDate(endTime));
			timer.setTimerForId(Long.parseLong(id));
			timer.setTimerForName(name);
			timer.setTimerStart(convertStringToDate(startTime));
			timer.setToShow(false);
			
			pm = PMF.get().getPersistenceManager();
			pm.makePersistent(timer);
			pm.close();
			
			result = "success";
		}
		catch(Exception e){
			log.warning("Error came in createTimerEntity : "+e.getMessage());
			for(StackTraceElement s:e.getStackTrace()){
				log.warning(s.toString());
			}
			result="fail";
		}
		return result;
	}
	
	@RequestMapping("/deleteTimerEntity.htm")
	@ResponseBody public String deleteTimerEntity(@RequestParam("timerId")String timerId){
		String result = null;
		PersistenceManager pm = null;
		try{
			//sample url = /deleteTimerEntity.htm?timerId=2
			pm = PMF.get().getPersistenceManager();
			Key key = KeyFactory.createKey(TimerHandler.class.getSimpleName(), Long.parseLong(timerId));
			TimerHandler timer = (TimerHandler) pm.getObjectById(TimerHandler.class,key);
			timer.setIsDeleted(true);
			pm.close();
			result = "deleted the timer entity successfully";
		}
		catch(Exception e){
			log.warning("Error came in deleteTimerEntity : "+e.getMessage());
			for(StackTraceElement s:e.getStackTrace()){
				log.warning(s.toString());
			}
			result="failed to delete the entity";
		}
		return result;
	}
	
	@RequestMapping("/manageTimerSetShow.htm")
	@ResponseBody public String manageTimerSetShow(@RequestParam("timerId")String timerId,@RequestParam("toShow")String toShow){
		String result = null;
		PersistenceManager pm = null;
		try{
			//sample url = /manageTimerSetShow.htm?timerId=2&toShow=false
			pm = PMF.get().getPersistenceManager();
			Key key = KeyFactory.createKey(TimerHandler.class.getSimpleName(), Long.parseLong(timerId));
			TimerHandler timer = (TimerHandler) pm.getObjectById(TimerHandler.class,key);
			timer.setToShow(Boolean.parseBoolean(toShow));
			pm.close();
			result = "the timer entity  toShow is made :"+toShow;
		}
		catch(Exception e){
			log.warning("Error came in manageTimerSetShow : "+e.getMessage());
			for(StackTraceElement s:e.getStackTrace()){
				log.warning(s.toString());
			}
			result="failed to set toShow to "+toShow;
		}
		return result;
	}
	
	public void deleteTimer(Key key){
		PersistenceManager pm = null;
		try{
			//sample url = /deleteTimerEntity.htm?timerId=2
			pm = PMF.get().getPersistenceManager();
			
			TimerHandler timer = (TimerHandler) pm.getObjectById(TimerHandler.class,key);
			timer.setIsDeleted(true);
			timer.setToShow(false);
			pm.close();
		}
		catch(Exception e){
			log.warning("Error came in deleteTimerEntity : "+e.getMessage());
			for(StackTraceElement s:e.getStackTrace()){
				log.warning(s.toString());
			}
		}
	}
	
	
	@RequestMapping("/manageTimerSetDates.htm")
	@ResponseBody public String manageTimerSetDates(@RequestParam("timerId")String timerId,@RequestParam("timerStartTime")String startTime,@RequestParam("timerEndTime")String endTime){
		String result = null;
		PersistenceManager pm = null;
		try{
			//sample url = /manageTimerSetDates.htm?timerId=2&timerStartTime=2013-06-25 00:00:00&timerEndTime=2013-06-25 00:00:00
			pm = PMF.get().getPersistenceManager();
			Key key = KeyFactory.createKey(TimerHandler.class.getSimpleName(), Long.parseLong(timerId));
			TimerHandler timer = (TimerHandler) pm.getObjectById(TimerHandler.class,key);
			timer.setTimerStart(convertStringToDate(startTime));
			timer.setTimerEnd(convertStringToDate(endTime));
			pm.close();
			result = "Modified the dates successfully";
		}
		catch(Exception e){
			log.warning("Error came in manageTimerSetDates : "+e.getMessage());
			for(StackTraceElement s:e.getStackTrace()){
				log.warning(s.toString());
			}
			result="failed to modify the entity";
		}
		return result;
	}
	
	@RequestMapping("/getTimerHandlerByTimerForId.htm")
	@ResponseBody public TimerHandler getTimerHandlerByTimerForIdHttp(@RequestParam("timerForId")String timerForId){
		TimerHandler timer = null;
		try{
			//sample url = /getTimerHandlerByTimerForId.htm?timerForId=5876578
			//timer = getTimerHandlerByTimerForId(timerForId);
		}
		catch(Exception e){
			log.warning("Error came in getTimerHandlerByTimerForIdHttp : "+e.getMessage());
			for(StackTraceElement s:e.getStackTrace()){
				log.warning(s.toString());
			}
		}
		return timer;
	}
	
	public TimerHandler getTimerHandlerByTimerForName(String timerForName,Date filterTime){
		TimerHandler timer = null;
		PersistenceManager pm = null;
		try{
			pm = PMF.get().getPersistenceManager();
			Query query = pm.newQuery(TimerHandler.class);
			query.setFilter("timerForName==:timerForName && timerStart<=:timerStart && isDeleted==false");
			List<TimerHandler> timerList = (List<TimerHandler>) query.execute(timerForName,filterTime);
			timerList = (List<TimerHandler>) pm.detachCopyAll(timerList);
			if(timerList!=null && timerList.size()>0){
				timer = timerList.get(0);
			}
			pm.close();
		}
		catch(Exception e){
			log.warning("Error came in getTimerHandlerByTimerForId : "+e.getMessage());
			for(StackTraceElement s:e.getStackTrace()){
				log.warning(s.toString());
			}
		}
		return timer;
	}
	
	public Date convertStringToDate(String dateStr){
		Date date = null;
		try{	
			//date = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.ENGLISH).parse(dateStr);
			date = new SimpleDateFormat("yyyy-MM-dd HH:mm:ss", Locale.ENGLISH).parse(changeTimeZone("IST","UTC",dateStr,"yyyy-MM-dd HH:mm:ss","yyyy-MM-dd HH:mm:ss"));
		}
		catch(Exception e){
			log.warning("Error came in convertStringToDate : "+e.getMessage());
			for(StackTraceElement s:e.getStackTrace()){
				log.warning(s.toString());
			}
		}
		return date;
	}
	
	public String changeTimeZone(String inTZ,String outTZ, String inDateStr, String inFormat,String outFormat){
		
		Date inDate=null;
		DateFormat inDf=new SimpleDateFormat(inFormat);
		inDf.setTimeZone(TimeZone.getTimeZone(inTZ));
		try{
			inDate=inDf.parse(inDateStr);
		}catch(Exception e){
		}
		DateFormat outDf=new SimpleDateFormat(outFormat);
		outDf.setTimeZone(TimeZone.getTimeZone(outTZ));
		String st=outDf.format(inDate);
		return st;
	}
}
