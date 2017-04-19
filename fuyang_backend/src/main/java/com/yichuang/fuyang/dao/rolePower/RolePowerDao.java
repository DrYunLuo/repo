package com.yichuang.fuyang.dao.rolePower;

import java.util.List;

import com.yichuang.fuyang.entity.rolePower.RolePower;
/**
 * 角色权限持久化层
 * @author zhuoming
 * 2017-1-20 11:56:04
 */
public interface RolePowerDao {
	/**
	 * 根据角色ID获取权限列表
	 * @param roleId
	 * @return
	 */
	public List<RolePower> getRolePowers(String roleId);

}
