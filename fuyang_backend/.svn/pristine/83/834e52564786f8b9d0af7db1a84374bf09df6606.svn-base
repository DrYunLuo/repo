package com.yichuang.fuyang.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.yichuang.fuyang.entity.User;

/**
 * 封装用户User对象的CRUD方法
 * MapperScanner 会扫描这个接口,自动为接口创建
 * 实现类,  并且实例化接口的子类Bean对象
 */
public interface UserDao {
	/**
	 * 将用户对象保存到数据库
	 * @param user
	 */
	void saveUser(User user);
	
	/**
	 * 根据name或者phone查询用户
	 * @param name：用户昵称
	 * @return
	 */
	User findUserByName(String name);
	
	User getUserDynamic(String phone);
	
	/**
	 * 根据手机查询用户
	 * @param phone
	 * @return
	 */
	User findUserByPhone(String phone);

	/**
	 * 根据nick那么查询用户
	 * @param nickname
	 * @return
	 */
	User findUserByNickname(String nickname);
	
	/**
	 * 更新token值
	 * @param user
	 */
	void updateToken(User user);
	
	/**
	 * 志愿者注册
	 * @param id
	 * @param volunteerId
	 * @return
	 */
	public Integer updateVolun(@Param("volunteerId")String volunteerId,@Param("id")String id);
	
	/**
	 * 根据id获取用户信息
	 * @param user
	 * @return
	 */
	List<User> getUserById(User user);

	/**
	 * 退出登录
	 * @param userId
	 * @return
	 */
	Integer updateTokenToNull(String userId);
	
	/**
	 * 根据手机号更新审核后的user表
	 * @param volunteerId
	 * @param phone
	 * @return
	 */
	Integer updateByPhone(@Param("volunteerId")String volunteerId,@Param("phone")String phone);

	/**
	 * 根据志愿者id更新组织id
	 * @param groupId
	 * @param volunteerId
	 * @return
	 */
	Integer updateByVid(@Param("groupId")String groupId,@Param("volunteerId")String volunteerId);
	
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
	 * 根据id更新任务时间
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
	
	
	void updateUserType(User user);
}







