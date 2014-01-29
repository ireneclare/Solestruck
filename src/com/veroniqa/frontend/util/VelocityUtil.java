package com.veroniqa.frontend.util;

import java.io.StringWriter;
import java.util.Map;

import org.apache.velocity.VelocityContext;
import org.apache.velocity.app.Velocity;

public class VelocityUtil {

	public static String getMappedString(Map vmMap, String vmText)
			throws Exception {
		String vmString = null;
		try {
			VelocityContext context = new VelocityContext(vmMap);
			StringWriter w = new StringWriter();
			Velocity.evaluate(context, w, "vmlog", vmText);
			vmString = w.getBuffer().toString();
		} catch (Exception ex) {
			throw ex;
		} finally {

		}
		return vmString;
	}

}
