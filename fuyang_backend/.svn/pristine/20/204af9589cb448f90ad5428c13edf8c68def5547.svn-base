package com.yichuang.fuyang.service.rolePower;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yichuang.fuyang.dao.rolePower.RolePowerDao;
import com.yichuang.fuyang.entity.rolePower.RolePower;

/**
 * 角色权限接口实现类
 * 
 * @author zhuoming 2017-1-20 11:02:05
 */
@Service
public class RolePowerServiceImpl implements IRolePowerService {

	@Autowired
	private RolePowerDao rolePowerDao;

	@Override
	public List<RolePower> getRolePowers(String roleId) {
		List<RolePower> powerList = null;
		try {
			powerList = rolePowerDao.getRolePowers(roleId);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return powerList;
	}

}
