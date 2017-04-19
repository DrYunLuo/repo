package com.yichuang.fuyang.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yichuang.fuyang.dao.ChinaDao;
import com.yichuang.fuyang.entity.China;

@Service("ChinaService")
public class ChinaServiceImpl implements ChinaService{

	@Autowired
	private ChinaDao chinaDao;
	
	/**
	 * 根据pid获取地区列表
	 */
	@Override
	public List<China> findByPid(int pid) {
		List<China> list = chinaDao.findByPid(pid);
		return list;
	}

	/**
	 * 根据地区名称模糊查询地区
	 */
	@Override
	public China findByName(String name) {
		China china = chinaDao.findByName(name);
		return china;
	}

	
}
