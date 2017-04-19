package com.yichuang.fuyang.dao;


import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;
import org.springframework.transaction.annotation.Transactional;

import com.yichuang.fuyang.entity.Accounts;
import com.yichuang.fuyang.entity.Donatrecord;


public interface AccountDao {

	

	/**
	 * 根据id获取账户信息
	 * @param volunteerId
	 * @return
	 */
	Accounts findByVolunteerId(String volunteerId);

	/**
	 * 创建自愿者账户
	 * @param accounts
	 * @return 
	 */
	Integer updateAccount(Accounts accounts);
	
	/**
	 * 根据账户id更新积分
	 * @param id
	 * @return
	 */
	Integer updateCredit(@Param("volunteerId")String volunteerId);

	/**
	 * 捐积分
	 * @param credit
	 * @param volunteerId
	 * @return
	 */
	public Integer juan(@Param("credit")Double credit,@Param("volunteerId")String volunteerId);
	

	
	@Select("SELECT sevenDay FROM accounts where volunteerId = #{volunteerId}")
	String findSevByVolunteerId(String volunteerId);
	
	
	/**
	 * 创建自愿者账户
	 * @param accounts
	 */
	void saveAccounts(Accounts accounts);
	
	/**
	 * 更新任务积分
	 * @param accounts
	 */
	@Transactional
	void updateByMissing(Accounts accounts);
	
	/**
	 * 根据志愿者ID  更新账户信息 
	 * @param accounts
	 */
	Integer updateAccountByVolId(Accounts accounts);
	
	/**
	 * 添加捐赠物品明细记录
	 * @param donatrecord
	 */
	public Integer addDonatrecord(Donatrecord donatrecord);
	
	/**
	 * 根据账户id重置今日捐赠已获得积分
	 * @param volunteerId
	 * @return
	 */
	Integer resetDonatCredit(@Param("volunteerId")String volunteerId);
}
