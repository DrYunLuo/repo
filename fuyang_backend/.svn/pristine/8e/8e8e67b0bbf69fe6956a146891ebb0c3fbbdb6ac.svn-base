package com.yichuang.fuyang.service;

import org.springframework.stereotype.Service;

import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.entity.Creditrecord;

@Service
public interface CreditrecordService {

	/**
	 * 获取志愿者积分明细
	 * @param vid
	 * @param pageNo
	 * @param pageSize
	 * @return
	 * @throws YichuangException
	 */
	public PageInfo<Creditrecord> findByVolunteerId(String vid,Integer pageNo,Integer pageSize) throws YichuangException;
	
	/**
	 * 添加积分明细记录
	 * @param creditrecord
	 */
	public Integer addRecord(Creditrecord creditrecord);
}
