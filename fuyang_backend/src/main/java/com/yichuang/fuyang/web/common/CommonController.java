package com.yichuang.fuyang.web.common;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.yichuang.fuyang.entity.User;
import com.yichuang.fuyang.service.PropertyService;
import com.yichuang.fuyang.service.UserService;
import com.yichuang.fuyang.util.DefaultResponse;
import com.yichuang.fuyang.util.JsonResult;
import com.yichuang.fuyang.util.Utils;
import com.yichuang.fuyang.util.YCConstants;

@Controller
@RequestMapping("/common")
public class CommonController {
	@Autowired
	private PropertyService propertyService;
	
	@Autowired
	private UserService userService;

	/**
	 * 获取分享url页面地址
	 * 
	 * @param id
	 * @return
	 */
	@RequestMapping("chareUrl")
	@ResponseBody
	@SuppressWarnings({ "rawtypes", "unchecked" })
	public JsonResult<String> chareUrl(String shareName, String keyParams) {

		//分享url页面地址
		String shareUrl = "";
		try {
//			JsonResult checkResult = Utils.checkKeyParams(shareName + propertyService.KEY, keyParams);
//			if (checkResult != null) {
//				return checkResult;
//			}
			if (YCConstants.SHARE_NAME_CAMPAIGN.equals(shareName)) {
				shareUrl = propertyService.CAMPAIGHS_SHARE_URL;
			} else if (YCConstants.SHARE_NAME_NEWS.equals(shareName)) {
				shareUrl = propertyService.NEWS_SHARE_URL;
			}
			return new JsonResult<String>(DefaultResponse.SUCCESS, shareUrl);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<String>(DefaultResponse.OPERATE_ERROR, null);
		}
	}
	
	/**
	 * 验证token 异地登录
	 * @param token
	 * @param keyParams
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping("checkToken")
	@ResponseBody
	public JsonResult<Boolean> checkToken(String token,String keyParams) {
		User user = new User();
		List<User> list = null;
		
		//System.out.println(Utils.sh1(token+propertyService.KEY));
		try {
			//接口验证
			JsonResult<Boolean> checkResult = Utils.checkKeyParams(token + propertyService.KEY, keyParams);
			if(checkResult != null){
				return  checkResult;
			}
			//验证参数是否为空
			if(StringUtils.isEmpty(token)){
				return new JsonResult<Boolean>(DefaultResponse.PARAM_NULL_ERROR,false);
			}
			//验证传入token与数据库token是否相同
			user.setToken(token);
			list = userService.getUserByVolunId(user);
			
			if(list != null && list.size() > 0){
				return new JsonResult<Boolean>(DefaultResponse.SUCCESS,true);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<Boolean>(DefaultResponse.OPERATE_ERROR,false);
		}
		
		//list为空 根据传入token未查询到user
		return new JsonResult<Boolean>(DefaultResponse.RESULT_NULL_ERROR,false);
		
	}
	
	
}
