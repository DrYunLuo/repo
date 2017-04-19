package com.yichuang.fuyang.web.rolePower;

import java.util.List;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yichuang.fuyang.entity.rolePower.RolePower;
import com.yichuang.fuyang.service.rolePower.IRolePowerService;
import com.yichuang.fuyang.util.DefaultResponse;
import com.yichuang.fuyang.util.JsonResult;

@Controller
@RequestMapping("/rolePower")
public class RolePowerController {
	static Logger logger = Logger.getLogger(RolePowerController.class);
	@Autowired
	private IRolePowerService rolePowerService;

	@RequestMapping("getUserPowers")
	@ResponseBody
	public JsonResult<List<RolePower>> getUserPowers(String roleId, String keyParams) {
		List<RolePower> powerLists = null;
		try {
			if(StringUtils.isEmpty(roleId)){
				return new JsonResult<List<RolePower>>(DefaultResponse.SUCCESS, null);
			}
			powerLists = rolePowerService.getRolePowers(roleId);
			return new JsonResult<List<RolePower>>(DefaultResponse.SUCCESS, powerLists);
		} catch (Exception e) {
			logger.error(DefaultResponse.QUERY_ERROR.getMessage() + e.getMessage());
			return new JsonResult<List<RolePower>>(DefaultResponse.QUERY_ERROR, null);
		}
	}

}
