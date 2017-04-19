package com.yichuang.fuyang.util;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;

import com.yichuang.fuyang.entity.User;
import com.yichuang.fuyang.service.UserService;

public class TokenUtils {
	@Autowired
	private static UserService userService;

	public static boolean checkToken(String token) {
		if(!StringUtils.isEmpty(token)){
			User user = new User();
			user.setToken(token);
			List<User> list = null;
			try{
				list = userService.getUserByVolunId(user);
			}catch(Exception e){
				return false;
			}
			if(list != null && list.size() > 0){
				return true;
			}
				return false;
		}else {
			return false;
		}
	}
}
