package com.yichuang.fuyang.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.entity.Creditrecord;
import com.yichuang.fuyang.service.CreditrecordService;
import com.yichuang.fuyang.service.PropertyService;
import com.yichuang.fuyang.util.JsonResult;
import com.yichuang.fuyang.util.Utils;

@Controller
@RequestMapping("/creditrecord")
public class CreditrecordController {

	
	@Autowired
	private CreditrecordService creditrecordService;
	
	@Autowired
	private PropertyService propertyService;
	
	/**
	 * 获取个人积分信息
	 * @param vid
	 * @return
	 */
	@RequestMapping("personCreditRecord")
	@ResponseBody
	public JsonResult<PageInfo<Creditrecord>> findByVolunteerId(String vid,Integer pageNo,Integer pageSize,String keyParams){
		JsonResult<PageInfo<Creditrecord>> result = null;
		try {
			JsonResult<PageInfo<Creditrecord>> checkResult = Utils.checkKeyParams(vid+propertyService.KEY, keyParams);
			if(checkResult != null){
				result = checkResult;
			}else{
				PageInfo<Creditrecord> pageInfo = creditrecordService.findByVolunteerId(vid, pageNo, pageSize);
				result = new JsonResult<PageInfo<Creditrecord>>(pageInfo);
			}
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<PageInfo<Creditrecord>>(1,"获取信息失败",null);
		}
	}
	
}
