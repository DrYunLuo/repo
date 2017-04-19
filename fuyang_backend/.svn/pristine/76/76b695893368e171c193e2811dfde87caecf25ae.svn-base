package com.yichuang.fuyang.service;


import com.yichuang.fuyang.entity.Accounts;
import com.yichuang.fuyang.entity.Donatrecord;

public interface AccountService {

	Accounts donateStep(String volunteerId, Integer currentStep)throws Exception;
	
	/**
	 * 根据志愿者id更新签到天数
	 * @param volunteerId
	 * @param token
	 * @return
	 */
	public void signin(String volunteerId) throws YichuangException;

	/**
	 * 查询志愿者今天是否已经签到
	 * @param volunteerId
	 * @throws YichuangException
	 */
	public String signon(String volunteerId) ;
	
	/**
	 * 七天步数记录
	 * @param volunteerId
	 * @return
	 * @throws Exception
	 */
	String findSenvenDay(String volunteerId) throws Exception ;
	
	/**
	 * 捐积分
	 * @param vid
	 * @param cid
	 * @param credit
	 * @return
	 * @throws YichuangException
	 */
	public void lovingHeart(String vid,String cid,Double credit) throws YichuangException; 
	
	/**
	 * 获取个人账户积分
	 * @param vid
	 * @return
	 */
	Accounts getCredit(String vid);
	
	/**
	 * 更新任务积分
	 * @param accounts
	 */
	void updateByMissing(Accounts accounts);
	
	/**
	 * 添加积分
	 */
	public Integer updateAccount(Accounts accounts);
	
	
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
	 */
	Integer resetDonatCredit(String volunteerId);
}
