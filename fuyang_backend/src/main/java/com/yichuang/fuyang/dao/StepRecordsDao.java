package com.yichuang.fuyang.dao;

import java.util.List;

import com.yichuang.fuyang.entity.StepRecords;

public interface StepRecordsDao {

	/**
	 * 新添步数及记录
	 * @param stepRecords
	 * @return
	 */
	public Integer addSteps(StepRecords stepRecords);
	
	
	/**
	 * 查询捐步记录
	 * @param stepRecords
	 * @return
	 */
	public List<StepRecords> findByUserId(StepRecords stepRecords);
}
