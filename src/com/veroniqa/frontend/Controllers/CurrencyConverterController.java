package com.veroniqa.frontend.Controllers;

import java.io.InputStreamReader;
import java.io.Reader;
import java.net.URL;
import java.util.logging.Logger;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

//import com.google.gson.Gson;
import com.veroniqa.dto.CurrencyResult;
import com.veroniqa.frontend.util.MemcachedConstants;
import com.veroniqa.frontend.util.MemcachedUtil;

@Controller
public class CurrencyConverterController {
	private static final Logger log=Logger.getLogger(CurrencyConverterController.class.getSimpleName());

	
	@RequestMapping(value="/getExchangeRates.htm")
	public void getSearchKeyWords(HttpServletRequest req,HttpServletResponse res) throws Exception
	{
		String google = "http://openexchangerates.org/latest.json";
	    String baseCurrency = req.getParameter("src");
	    String termCurrency = req.getParameter("dest");
	    String charset = "UTF-8";
	    CurrencyResult cachedResult=(CurrencyResult)MemcachedUtil.get("rates", MemcachedConstants.CURRENCY_RATES);
	    if(cachedResult==null)
	    {
	    URL url = new URL(google);

	    Reader reader = new InputStreamReader(url.openStream(), charset);
	    //cachedResult = new Gson().fromJson(reader, CurrencyResult.class);
	    MemcachedUtil.setWithTime("rates",cachedResult,1800, MemcachedConstants.CURRENCY_RATES);
	    }
	    
	    // Get the value without the term currency.
	    String amount = cachedResult.getRates().get(termCurrency);

	    log.info("opensource - "+amount);
	    
	    
		res.setContentType("application/json");
		res.getWriter().println("{\"exchange\":"+amount+"}");
		res.getWriter().flush();
	}

}
