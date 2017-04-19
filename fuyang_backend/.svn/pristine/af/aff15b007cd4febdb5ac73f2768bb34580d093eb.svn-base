package com.yichuang.fuyang.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.dao.CreditrecordDao;
import com.yichuang.fuyang.entity.Creditrecord;

@Service("CredirrecordService")
public class CreditrecordServiceImpl implements CreditrecordService{
	
	@Autowired
	private CreditrecordDao creditrecordDao;

	/**
	 * 获取志愿者积分明细
	 */
	public PageInfo<Creditrecord> findByVolunteerId(String vid,Integer pageNo,Integer pageSize) throws YichuangException{
		if(vid == null || vid.trim() == ""){
			throw new YichuangException(1,"志愿者id为空");
		}
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.orderBy("time desc");
		PageHelper.startPage(pageNo, pageSize);
		List<Creditrecord> list = creditrecordDao.findByVolunteerId(vid);
		PageInfo<Creditrecord> pageInfo = new PageInfo<Creditrecord>(list);
		return pageInfo;
	}

	
	/**
	 * 添加积分明细记录
	 */
	@Override
	public Integer addRecord(Creditrecord creditrecord) {
		return creditrecordDao.addRecord(creditrecord);
	}





}
