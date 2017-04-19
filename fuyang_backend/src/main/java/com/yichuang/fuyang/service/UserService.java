package com.yichuang.fuyang.service;

import java.util.List;
import java.util.Map;

import com.yichuang.fuyang.entity.User;

/**
 * 服务接口
 */
public interface UserService {
	/**
	 * 封装登录逻辑
	 * 如果登录成功就返回登录的成功的用户信息
	 * 否则登录失败就抛出异常
	 * @param name 用户名
	 * @param password 密码
	 * @return 登录成功的用户信息
	 * @throws NameOrPasswordException 登录失败
	 */
	User login(String name, String password)throws NameOrPasswordException;
	
	/**
	 * 获取用户个人信息
	 * @param id
	 * @return
	 */
	Map<String , Object> getUserById(String id) throws YichuangException;
	
	/**
	 * 普通用户注册
	 * @param phone 手机号
	 * @param password 密码
	 */
	void saveUser(String phone, String password,String nickname,String groupId);

	/**
	 * 退出登录 根据用户登录时生成的token设置为空
	 * @param token
	 */
	void updateTokenToNull(String userId) throws Exception ;
	
	/**
	 * 管理后台修改密码 LH
	 * @param user
	 * @return
	 */
	int updateUserById(User user);
	
	/**
	 * 根据用户token查找用户Id LH
	 * @param token
	 * @return
	 */
	User getUserIdByToken(String token);
	
	/**
	 * 根据用户ID查找用户
	 * @param id
	 * @return 
	 */
	List<User> getUserByID(String id);
	
	/**
	 * 根据id更新任务标志
	 * @param user
	 * @return
	 */
	Integer updateDateByid(User user);
	
	/**
	 * 增加用户
	 * @param user
	 * @return
	 */
	Integer addUser(User user);
	
	/**
	 * 根据志愿者id获取用户信息
	 * @param user
	 * @return
	 */
	List<User> getUserByVolunId(User user);
	
	
	void updateUserType(User user);
	
	/**
	 * 根据手机查询用户
	 * @param phone
	 * @return
	 */
	User findUserByPhone(String phone);
}






