package com.yichuang.fuyang.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.yichuang.fuyang.entity.China;

@Service
public interface ChinaService {

	/**
	 * 根据pid获取地区
	 * @param pid
	 * @return
	 */
	public List<China> findByPid(int pid);
	
	/**
	 * 根据地区名称模糊查询获取地区id
	 * @param name
	 * @return
	 */
	public China findByName(String name);
}
