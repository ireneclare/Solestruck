package com.veroniqa.frontend.util;

import java.util.logging.Logger;

import org.apache.velocity.Template;
import org.apache.velocity.app.VelocityEngine;
import org.apache.velocity.exception.ParseErrorException;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.apache.velocity.runtime.RuntimeConstants;


public final class VelocityEngineManager {
	public static final Logger log = Logger.getLogger(VelocityEngineManager.class.getName());
	static VelocityEngine engine = new VelocityEngine();
	static boolean init = false;

	public static void init(){
		if (!init) {
			//engine = new VelocityEngine();
			engine.setProperty("resource.loader", "file");
			engine.setProperty("file.resource.loader.class","jvdkamp.example.velocity.velocityResourceLoader");
			engine.setProperty("file.resource.loader.path","./templates");
			engine.setProperty( RuntimeConstants.RUNTIME_LOG_LOGSYSTEM_CLASS, "org.apache.velocity.runtime.log.Log4JLogChute" );
			engine.setProperty("runtime.log.logsystem.log4j.logger", log.getName());
			try {
				engine.init();
				init=true;
			} catch (Exception e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		}
	}

	public static Template getTemplate(String template){
		try {
			return engine.getTemplate( template );
		} catch (ResourceNotFoundException e) {
			e.printStackTrace();
		} catch (ParseErrorException e) {
			e.printStackTrace();
		} catch (Exception e) {
			e.printStackTrace();
		}

		return null;
	}
}
