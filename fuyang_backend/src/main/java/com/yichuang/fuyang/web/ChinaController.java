package com.yichuang.fuyang.web;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.net.URLEncoder;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.mysql.jdbc.Util;
import com.yichuang.fuyang.entity.China;
import com.yichuang.fuyang.service.ChinaService;
import com.yichuang.fuyang.service.PropertyService;
import com.yichuang.fuyang.util.DefaultResponse;
import com.yichuang.fuyang.util.JsonResult;
import com.yichuang.fuyang.util.Utils;

@Controller
@RequestMapping("china")
public class ChinaController {
	
	@Autowired
	private ChinaService chinaService;
	@Autowired
	private PropertyService propertyService;

	/**
	 * 根据pid获取地区列表
	 * @param pid
	 * @return
	 */
	@RequestMapping("findByPid")
	@ResponseBody
	public JsonResult<List<China>> findByPid(Integer pid,String keyParams){
		JsonResult checkJsonResult = Utils.checkKeyParams(pid+propertyService.KEY, keyParams);
		if(checkJsonResult != null){
			return checkJsonResult;
		}
		if(pid == null || pid == 0){
			return new JsonResult<List<China>>(DefaultResponse.PARAM_NULL_ERROR,null);
		}
		try {
			List<China> list = chinaService.findByPid(pid);
			return new JsonResult<List<China>>(list);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<List<China>>(DefaultResponse.QUERY_ERROR,null);
		}
	}
	
	/**
	 * 根据地区名称获取地区id
	 * @param name
	 * @return
	 */
	@RequestMapping("findByName")
	@ResponseBody
	public JsonResult<China> findByName(String name,String keyParams){
		JsonResult checkJsonResult = Utils.checkKeyParams(name+propertyService.KEY, keyParams);
		if(checkJsonResult != null){
			return checkJsonResult;
		}
		if(name == null || name.trim() == ""){
			return new JsonResult<China>(DefaultResponse.PARAM_NULL_ERROR,null);
		}
		try {
			China china = chinaService.findByName(name);
			return new JsonResult<China>(china);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<China>(DefaultResponse.QUERY_ERROR,null);
		}
	}
	
	/**
	 * 根据地区名称获取地区id
	 * @param name
	 * @return
	 */
	@RequestMapping("getLocation")
	@ResponseBody
	public JsonResult<double[]> getLocation(String city,String keywords){
		try {
			city = URLEncoder.encode(city, "utf-8");
			city = URLDecoder.decode(city, "utf-8");
		} catch (UnsupportedEncodingException e) {
			e.printStackTrace();
		}
		//city = "%E9%98%9C%E9%98%B3";
		//keywords = "%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA";
		//URLEncoder.encode(s, enc)
		//http://restapi.amap.com/v3/place/text?key=f5cf511d42f040774a7ab56cb2d889bd&keywords=%E4%B8%87%E8%BE%BE%E5%B9%BF%E5%9C%BA&city=%E9%98%9C%E9%98%B3&children=1&offset=10&page=1&extensions=base
		double[] location = Utils.getLocation(city, keywords);
		return new JsonResult<>(location);
	}
}
