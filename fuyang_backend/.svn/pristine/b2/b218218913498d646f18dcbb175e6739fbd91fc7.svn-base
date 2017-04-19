package com.yichuang.fuyang.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.dao.StepRecordsDao;
import com.yichuang.fuyang.entity.StepRecords;

@Service("StepRecordsService")
public class StepRecordsServiceImpl implements StepRecordsService{
	
	@Autowired
	private StepRecordsDao stepRecordsDao;

	/**
	 * 新添捐步记录
	 */
	@Override
	public Integer addSteps(StepRecords stepRecords) {
		Integer integer = stepRecordsDao.addSteps(stepRecords);
		return integer;
	}

	/**
	 * 获取步数记录
	 */
	@Override
	public PageInfo<StepRecords> findByUserId(StepRecords stepRecords,Integer pageNo,Integer pageSize) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.orderBy("stepTime desc");
		PageHelper.startPage(pageNo, pageSize);
		List<StepRecords> list = stepRecordsDao.findByUserId(stepRecords);
		PageInfo<StepRecords> pageInfo = new PageInfo<StepRecords>(list);
		return pageInfo;
	}

}
