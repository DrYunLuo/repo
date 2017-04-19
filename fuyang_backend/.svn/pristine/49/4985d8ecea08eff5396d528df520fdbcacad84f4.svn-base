package com.yichuang.fuyang.service;

import org.springframework.stereotype.Service;

import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.entity.StepRecords;


@Service
public interface StepRecordsService {

	/**
	 * 新添捐步记录
	 * @param stepRecords
	 * @return
	 */
	public Integer addSteps(StepRecords stepRecords);
	
	/**
	 * 查询步数记录
	 * @param stepRecords
	 * @return
	 */
	public PageInfo<StepRecords> findByUserId(StepRecords stepRecords,Integer pageNo,Integer pageSize);
}
