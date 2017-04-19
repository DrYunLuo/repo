package com.yichuang.fuyang.dao;


import java.util.List;

import com.yichuang.fuyang.entity.Signin;

public interface SigninDao {

	/**
	 * 根据账单id更新签到天数
	 * @param AccountId
	 * @return
	 */
	public int updateSignin(String AccountId);
	/**
	 * 根据id获取签到次数和更新时间
	 * @param id
	 * @return
	 */
	public List<Signin> getNowTime(String accountId);
	
	/**
	 * 保存签到
	 */
	void saveSignin(Signin signin);
}
