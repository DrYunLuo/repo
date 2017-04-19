package com.yichuang.fuyang.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.entity.Campaigns;
import com.yichuang.fuyang.entity.Groups;

@Service
public interface GroupsService {
 
	/**
	 * 获取组织排行
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<Groups> getRankingGroups(Integer pageNo,Integer pageSize);
	
	/**
	 * 根据组织id获取组织信息
	 * @param id
	 * @return
	 */
	List<Groups> getGroupById(String id);
	
	/**
	 * 组织注册
	 * @param groups
	 */
	void saveGroup(Groups groups);
	
	/**
	 * 根据id更新热门度
	 * @param id
	 */
	public Integer updateRecommend(String id);
	
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
	PageInfo<Groups> findGroupListByType(String groupType,Integer pageNo,Integer pageSize) throws YichuangException;
	
	/**
	 * 获取最热组织
	 * @param pageNo
	 * @param pageSIze
	 * @return
	 */
	PageInfo<Groups> getRecommendGroups(Integer pageNo,Integer pageSize);
	
	/**
	 * 最新
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<Groups> newGroup(Integer pageNo,Integer pageSize);
	
	/**
	 * 获取所有组织
	 * @return
	 */
	PageInfo<Groups> getAllGroups(Integer pageNo,Integer pageSize);
	
	/**
	 * 人数最多
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<Groups> volTotal(Integer pageNo,Integer pageSize);
	
	/**
	 * 根据id更新活动数
	 * @param id
	 */
	void updateCamCount(String id);
	
	/**
	 * 根据组织名称模糊查询组织
	 * @param pageNo
	 * @param pageSize
	 * @param name
	 * @return
	 */
	PageInfo<Groups> search(Integer pageNo,Integer pageSize,String name);
	
	/**
	 * 根据组织类型或名称查询组织列表
	 * @param pageNo
	 * @param pageSize
	 * @param name
	 * @param groupType
	 * @return
	 */
	PageInfo<Groups> getGroupListByTypeOrName(Integer pageNo,Integer pageSize,String name,String groupType);
	
	/**
	 * 根据组织id获取活动详情列表
	 * @param pageNo
	 * @param pageSize
	 * @param id
	 * @return
	 */
	PageInfo<Campaigns> getCampaignListByGroupId(Integer pageNo,Integer pageSize,String id);
	
	
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
