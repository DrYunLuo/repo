package com.yichuang.fuyang.web;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yichuang.fuyang.entity.Code;
import com.yichuang.fuyang.service.CodeService;
import com.yichuang.fuyang.service.PropertyService;
import com.yichuang.fuyang.util.DefaultResponse;
import com.yichuang.fuyang.util.JsonResult;
import com.yichuang.fuyang.util.Utils;

@Controller
@RequestMapping("code")
public class CodeController {

	@Autowired
	private CodeService codeService;
	@Autowired
	private PropertyService propertyService;
	
	/**
	 * 获取code类型
	 * @return
	 */
	@RequestMapping("postTypeList")
	@ResponseBody
	public JsonResult<List<Code>> postTypeList(String type,String keyParams){
		JsonResult checkJsonResult = Utils.checkKeyParams(propertyService.KEY, keyParams);
		if(checkJsonResult != null){
			return checkJsonResult;
		}
		try {
			List<Code> list = codeService.getPostTypeList(type);
			return new JsonResult<List<Code>>(list);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<List<Code>>(DefaultResponse.QUERY_ERROR,null);
		}
	}
	
	/**
	 * 根据codeVaule 查询Code LH
	 * 
	 * @param type
	 * @param keyParams
	 * @return
	 */
	@RequestMapping("getCodesByType")
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@ResponseBody
	protected JsonResult<List<Code>> getCodesByType(String codeType, String keyParams) {
		JsonResult<List<Code>> result = null;
//		JsonResult checkResult = Utils.checkKeyParams(codeType + propertyService.KEY, keyParams);
//		if (checkResult != null) {
//			return checkResult;
//		}
		if (StringUtils.isEmpty(codeType)) {
			return new JsonResult<List<Code>>(DefaultResponse.PARAM_NULL_ERROR, null);
		}
		try {
			List<Code> list = codeService.getCodeByCodeValue(codeType);
			if (list == null || list.size() < 1) {
				result = new JsonResult<List<Code>>(DefaultResponse.RESULT_NULL_ERROR, null);
			} else {
				result = new JsonResult<List<Code>>(DefaultResponse.SUCCESS, list);
			}
		} catch (Exception e) {
			e.printStackTrace();
			result = new JsonResult<List<Code>>(DefaultResponse.OPERATE_ERROR, null);
		}
		return result;
	}
	@RequestMapping("getCodesDynamic")
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@ResponseBody
	protected JsonResult<List<Code>> getCodesDynamic(Code code, String keyParams) {
		JsonResult<List<Code>> result = null;
//		JsonResult checkResult = Utils.checkKeyParams(codeType + propertyService.KEY, keyParams);
//		if (checkResult != null) {
//			return checkResult;
//		}
		if (code == null || StringUtils.isEmpty(code.getCodeType())) {
			return new JsonResult<List<Code>>(DefaultResponse.PARAM_NULL_ERROR, null);
		}
		try {
			List<Code> list = codeService.getCodeDynamic(code);
			if (list == null || list.size() < 1) {
				result = new JsonResult<List<Code>>(DefaultResponse.RESULT_NULL_ERROR, null);
			} else {
				result = new JsonResult<List<Code>>(DefaultResponse.SUCCESS, list);
			}
		} catch (Exception e) {
			e.printStackTrace();
			result = new JsonResult<List<Code>>(DefaultResponse.OPERATE_ERROR, null);
		}
		return result;
	}
	
	/**
	 * 获取政治面貌   LH
	 * @param keyParams
	 * @return
	 */
	@RequestMapping("/getParty")
	@ResponseBody
	public JsonResult<List<Code>> getParty(String keyParams){
		return getCodesByType(propertyService.CODE_PARTY,keyParams);
	}
	
	/**
	 * 获取民族   LH
	 * @param keyParams
	 * @return
	 */
	@RequestMapping("/getRaceId")
	@ResponseBody
	public JsonResult<List<Code>> getRaceId(String keyParams){
		return getCodesByType(propertyService.CODE_RACEID,keyParams);
	}
	
	/**
	 * 获取从业情况   LH
	 * @param keyParams
	 * @return
	 */
	@RequestMapping("/getTradeId")
	@ResponseBody
	public JsonResult<List<Code>> getTradeId(String keyParams){
		return getCodesByType(propertyService.CODE_TRADEID,keyParams);
	}
	
	/**
	 * 获取最高学历   LH
	 * @param keyParams
	 * @return
	 */
	@RequestMapping("/getEducationId")
	@ResponseBody
	public JsonResult<List<Code>> getEducationId(String keyParams){
		return getCodesByType(propertyService.CODE_EDUCATIONID,keyParams);
	}
	
	/**
	 * 获取特长   LH
	 * @param keyParams
	 * @return
	 */
	@RequestMapping("/getSpecialty")
	@ResponseBody
	public JsonResult<List<Code>> getSpecialty(String keyParams){
		return getCodesByType(propertyService.CODE_SPECIALTY,keyParams);
	}
	
	/**
	 * 获取服务领域   LH
	 * @param keyParams
	 * @return
	 */
	@RequestMapping("/getServiceArea")
	@ResponseBody
	public JsonResult<List<Code>> getServiceArea(String keyParams){
		return getCodesByType(propertyService.CODE_SERVICEAREA,keyParams);
	}
	
	
}
