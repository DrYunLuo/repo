package com.yichuang.fuyang.web;

import java.io.IOException;

import org.apache.commons.httpclient.HttpClient;
import org.apache.commons.httpclient.HttpException;
import org.apache.commons.httpclient.NameValuePair;
import org.apache.commons.httpclient.methods.PostMethod;
import org.dom4j.Document;
import org.dom4j.DocumentException;
import org.dom4j.DocumentHelper;
import org.dom4j.Element;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yichuang.fuyang.util.DefaultResponse;
import com.yichuang.fuyang.util.JsonResult;

@Controller
@RequestMapping("/sendMsg")
public class SendMess {
	
		private static final String UID = "cf_yongle19";  
		private static final String KEY = "12c3121524a23a5aa7322c594c0ac2e9";  
		private static String Url = "http://106.ihuyi.cn/webservice/sms.php?method=Submit";
	
	      
	    // 发送短信  
		@RequestMapping("/send")
		@ResponseBody
	    public  JsonResult<String> sendMessage(String phone) {  
	    	
	    	JsonResult<String> result = null;
	    	HttpClient client = new HttpClient(); 
			PostMethod method = new PostMethod(Url);

			client.getParams().setContentCharset("utf-8");
			method.setRequestHeader("ContentType","application/x-www-form-urlencoded;charset=utf-8");
			
			//随机生成验证码
			int mobile_code = (int)((Math.random()*9+1)*100000);

		    String content = new String("您的验证码是：" + mobile_code + "。请不要把验证码泄露给其他人。");
		    
		  //提交短信
			NameValuePair[] data = {
				    new NameValuePair("account", UID), 
				    new NameValuePair("password", KEY), 
				    //new NameValuePair("password", util.StringUtil.MD5Encode("密码")),
				    new NameValuePair("mobile", phone), 
				    new NameValuePair("content", content),
			};
			method.setRequestBody(data);

			try {
				client.executeMethod(method);
				
				String SubmitResult =method.getResponseBodyAsString();

				//System.out.println(SubmitResult);

				Document doc = DocumentHelper.parseText(SubmitResult);
				Element root = doc.getRootElement();

				String code = root.elementText("code");
				String msg = root.elementText("msg");
				String smsid = root.elementText("smsid");

				//System.out.println(code);
				//System.out.println(msg);
				//System.out.println(smsid);

				 if("2".equals(code)){
					return new JsonResult<String>(DefaultResponse.SUCCESS,String.valueOf(mobile_code));
				}
			} 	catch (HttpException e) {
				e.printStackTrace();
				return new JsonResult<String>(DefaultResponse.OPERATE_ERROR,null);
			} catch (IOException e) {
				e.printStackTrace();
				return new JsonResult<String>(DefaultResponse.OPERATE_ERROR,null);
			} catch (DocumentException e) {
				e.printStackTrace();
				return new JsonResult<String>(DefaultResponse.OPERATE_ERROR,null);
			}	
			return result ;
			
	    }  
	      
	  
	      
	    
		
	
}
