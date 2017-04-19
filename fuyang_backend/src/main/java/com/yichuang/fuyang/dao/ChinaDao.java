package com.yichuang.fuyang.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.yichuang.fuyang.entity.China;

public interface ChinaDao {

	/**
	 * 根据pid获取地区
	 * @param pid
	 * @return
	 */
	List<China> findByPid(int pid);
	
	/**
	 * 根据地区名称模糊查询获取地区id
	 * @param name
	 * @return
	 */
	public China findByName(@Param("name")String name);
}
