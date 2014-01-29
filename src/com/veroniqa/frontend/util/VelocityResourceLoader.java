package com.veroniqa.frontend.util;
import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.InputStream;
import java.util.Vector;

import org.apache.commons.collections.ExtendedProperties;
import org.apache.velocity.exception.ResourceNotFoundException;
import org.apache.velocity.runtime.resource.Resource;
import org.apache.velocity.runtime.resource.loader.ResourceLoader;

public class VelocityResourceLoader extends ResourceLoader {
	private Vector<String> paths = null;

	@Override
	public long getLastModified(Resource arg0) {
		return arg0.getLastModified();
	}

	@Override
	public InputStream getResourceStream(String template) throws ResourceNotFoundException {
		int size = paths.size();
		for (int i = 0; i < size; i++) {
			String path = paths.get(i);

			InputStream is = null;
			try {
				is = new FileInputStream(path +"/"+ template);
				return is;
			} catch (FileNotFoundException e) {
				//skip
			}
		}
		throw new ResourceNotFoundException(template);
	}

	
	@Override
	public boolean isSourceModified(Resource arg0) {
		return false;
	}

	@Override
	public void init(ExtendedProperties arg0) {
		// TODO Auto-generated method stub
		paths = arg0.getVector("path");
	}

	
}
 