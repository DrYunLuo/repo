package com.yichuang.fuyang.web;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.entity.StepRecords;
import com.yichuang.fuyang.service.StepRecordsService;
import com.yichuang.fuyang.service.UserService;
import com.yichuang.fuyang.util.DefaultResponse;
import com.yichuang.fuyang.util.JsonResult;

@Controller
@RequestMapping("step")
public class StepRecordsController {
	
	@Autowired
	private StepRecordsService stepRecordsService;
	@Autowired
	private UserService userService;
	
	/**
	 * 新添捐步记录
	 * @param stepRecords
	 * @param stepsCount
	 * @return
	 */
	@RequestMapping("add")
	@ResponseBody
	public JsonResult<String> addSteps(StepRecords stepRecords){
		String userId = stepRecords.getUserId();
		if(StringUtils.isEmpty(userId)){
			return new JsonResult<String>(DefaultResponse.PARAM_NULL_ERROR,null);
		}
		Date date = new Date();
		stepRecords.setStepRecordsId(UUID.randomUUID().toString());
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		stepRecords.setStepTime(timestamp);
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		PageInfo<StepRecords> pageInfo = stepRecordsService.findByUserId(stepRecords, 1, 1);
		List<StepRecords> list = pageInfo.getList();
		if(list != null && list.size() > 0){
			StepRecords stepRecords2 = list.get(0);
			Date date2 = stepRecords2.getStepTime();
			if(sdf.format(date).equals(sdf.format(date2))){
				return new JsonResult<String>(DefaultResponse.INSERT_ERROR,null);
			}
		}
		try {
			Integer integer = stepRecordsService.addSteps(stepRecords);
			if(integer > 0){
				return new JsonResult<String>(DefaultResponse.SUCCESS,null);
			}
			return new JsonResult<String>(DefaultResponse.INSERT_ERROR,null);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<String>(DefaultResponse.INSERT_ERROR,null);
		}
	}
	
	
	/**
	 * 获取捐步记录
	 * @param stepRecords
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	@RequestMapping("findRecords")
	@ResponseBody
	public JsonResult<PageInfo<StepRecords>> findRecords(StepRecords stepRecords,Integer pageNo,Integer pageSize){
		String userId = stepRecords.getUserId();
		if(StringUtils.isEmpty(userId)){
			return new JsonResult<PageInfo<StepRecords>>(DefaultResponse.PARAM_NULL_ERROR,null);
		}
		try {
			PageInfo<StepRecords> pageInfo = stepRecordsService.findByUserId(stepRecords, pageNo, pageSize);
			return new JsonResult<PageInfo<StepRecords>>(pageInfo);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<PageInfo<StepRecords>>(DefaultResponse.QUERY_ERROR,null);
		}
		
	}
}
