package com.yichuang.fuyang.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.yichuang.fuyang.entity.Campaigns;
import com.yichuang.fuyang.entity.Groups;

public interface GroupsDao {
	
	/**
	 * 组织排行
	 * @return
	 */
	List<Groups> getRankingGroups();
	
	/**
	 * 根据id查询组织
	 * @param id
	 * @return
	 */
	List<Groups> getGroupsById(String id);
	
	
	/**
	 * 根据组织类型或名称查询组织列表
	 * @param name
	 * @param groupType
	 * @return
	 */
	List<Groups> getGroupListByTypeOrName(@Param("name") String name,@Param("groupType") String groupType);
	
	/**
	 * 根据id更新组织热门度
	 * @param id
	 */
	public Integer updateRecommend(String id);
	
	/**
	 * 组织注册
	 * @param groups
	 */
	public void saveGroups(Groups groups);
	
	/**
	 * 组织登录更新token
	 * @param token
	 * @param id
	 */
	public void updateToken(String token,String id);
	
	/**
	 * 管理员查询待审核组织
	 * @param groups
	 * @return
	 */
	public List<Groups> getGroupsByStatus(Groups groups);
	
	/**
	 * 管理员审核待审核组织
	 * @param groups
	 * @return
	 */
	public int updateGroupsStatus(Groups groups);
	
	/**
	 * 根据组织类型获取组织列表
	 * @param groupType
	 * @return
	 */
	List<Groups> findGroupListByType(String groupType);
	
	/**
	 * 根据id更新活动数量
	 * @param id
	 */
	void updateCamCount(String id);
	
	/**
	 * 根据组织名称模糊查询组织
	 * @param name
	 * @return
	 */
	List<Groups> search(@Param("name")String name);
	
	/**
	 * 根据组织id获取活动详情列表
	 * @param id
	 * @return   
	 */
	List<Campaigns> getCampaignListByGroupId(@Param("id") String id);
	
	/**
	 * 根据id修改组织信息
	 * @param groups
	 * @return
	 */
	Integer updateGroupById(Groups groups);
	
	/**
	 * 更新组织信息
	 * @param groups
	 * @return
	 */
	Integer updateGroup(Groups groups);
}
