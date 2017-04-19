package com.yichuang.fuyang.util;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.net.MalformedURLException;
import java.net.URL;
import java.net.URLConnection;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import org.apache.commons.codec.digest.DigestUtils;
import org.springframework.util.StringUtils;

/**
 * 利用工具类封装 通用算法 
 */
public class Utils {
	//private static final String SALT="今天你吃了么?";
	
	public static String md5salt(String pwd){
		return DigestUtils.md5Hex(pwd);
	}
	
	//sh1Hex 加密
	public static String sh1(String params){
		//System.out.println(DigestUtils.sha1Hex(params));
		return DigestUtils.sha1Hex(params);
	}
	
	
	//接口加密
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public static JsonResult checkKeyParams(String requestParams,String keyParams){
		JsonResult jsonResult = null;
		if(StringUtils.isEmpty(keyParams) || !keyParams.equals(Utils.sh1(requestParams))){
			jsonResult = new JsonResult(1,"接口验证未通过，请核实",null);
		}
		return jsonResult;
	}
	
	/**
	 *  g根据文件名获取文件后缀
	 * @param fileName
	 * @return
	 */
	public static String getFileSuffix(String fileName){
		String fileSuffix = "";
		
		if(!StringUtils.isEmpty(fileName)){
			String[] FileNameArr = fileName.split("\\.");
			
			if(FileNameArr != null &&  FileNameArr.length>0){
				fileSuffix = FileNameArr[FileNameArr.length-1];
				
			}
		}
		return fileSuffix;
	}
	
	/**
	 *	string 转为Date
	 * @param dateStr
	 * @return
	 */
	public static Date stringToDate(String dateStr,String formatStr){
		SimpleDateFormat sdf =new SimpleDateFormat(formatStr);
		Date parseDate = null;
		try {
			parseDate = sdf.parse(dateStr);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return parseDate;
	}
	
	/**
	 * 正则表达式验证
	 * @param regex	正则表达式
	 * @param checkStr	要验证字符串
	 * @return
	 */
	public static boolean regexCheck(String regex, String checkStr){
		Pattern pattern = Pattern.compile(regex);
		Matcher matcher = pattern.matcher(checkStr);
		boolean matches = matcher.matches();
		return matches;
	}
	
	public static final String KEY = "f5cf511d42f040774a7ab56cb2d889bd";
	private static Pattern pattern = Pattern.compile("\"location\":\"(\\d+\\.\\d+),(\\d+\\.\\d+)\"");
	/**
	 * 查询地址坐标
	 * @param city
	 * @param keywords
	 * @return
	 */
	public static double[] getLocation(String city, String keywords){
		
		//String url = "http://restapi.amap.com/v3/place/text?key=f5cf511d42f040774a7ab56cb2d889bd&keywords=%E5%92%8C%E5%B9%B3%E5%85%AC%E5%9B%AD&city=%E9%98%9C%E9%98%B3&children=1&offset=10&page=1&extensions=base";
		String urlstr = "http://restapi.amap.com/v3/place/text?"
				+ "key=" + KEY
				+ "&keywords=" + keywords
				+ "&city=" + city
				+ "&children=1&offset=10&page=1&extensions=base";//base|all
		
		try {
			URL url = new URL(urlstr);
			URLConnection urlConnection = (URLConnection)url.openConnection();
			if(urlConnection != null){
				InputStream inputStream = urlConnection.getInputStream();
				InputStreamReader streamReader = new InputStreamReader(inputStream,"UTF-8");
				
				BufferedReader br = new BufferedReader(streamReader);
				
				String data = "";
				String line = null;
				while((line = br.readLine()) != null){
					data += line;
				}
				
				Matcher matcher = pattern.matcher(data);
				//System.out.println(data);
				if(matcher.find() && matcher.groupCount() == 2){
					double[] gps = new double[2];
					gps[0] = Double.valueOf(matcher.group(1));
					gps[1] = Double.valueOf(matcher.group(2));
					return gps;
				}
			}
		} catch (MalformedURLException e) {
			e.printStackTrace();
		} catch (IOException e) {
			e.printStackTrace();
		} 
		
		return null;
	}
	
}


