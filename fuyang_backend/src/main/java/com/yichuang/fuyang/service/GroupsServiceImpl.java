package com.yichuang.fuyang.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.dao.GroupsDao;
import com.yichuang.fuyang.dao.UserDao;
import com.yichuang.fuyang.entity.Campaigns;
import com.yichuang.fuyang.entity.Code;
import com.yichuang.fuyang.entity.Groups;
import com.yichuang.fuyang.util.YCConstants;



@Service("GroupsService")
public class GroupsServiceImpl implements GroupsService{
	@Autowired
	private GroupsDao groupsDao;

	@Autowired
	private CodeService codeService;
	
	/**
	 * 获取组织排行
	 */
	public PageInfo<Groups> getRankingGroups(Integer pageNo, Integer pageSize) {
		pageNo = pageNo == null?1:pageNo;
	    pageSize = pageSize == null?10:pageSize;
	    PageHelper.orderBy("campaignCount DESC");
	    PageHelper.startPage(pageNo, pageSize);
	    List<Groups> list = groupsDao.getRankingGroups();
	    //用PageInfo对结果进行包装
	    PageInfo<Groups> page = new PageInfo<Groups>(list);
		return page;
		
	}

	/**
	 * 根据组织id获取组织信息
	 */
	public List<Groups> getGroupById(String id) {
		List<Groups> list = groupsDao.getGroupsById(id);
		Code codeParam = new Code();
		for(Groups group:list){
			codeParam.setCodeType(YCConstants.CODE_TYPE_GROUP);
			codeParam.setCodeValue(group.getGroupType());
			List<Code> codeList = codeService.getCodeDynamic(codeParam);
			if(codeList != null && codeList.size()>0){
				group.setGroupTypeValue(codeList.get(0).getCodeValue());
			}
			codeList = null;
		}
		return list;
	}
	
	
	/**
	 * 组织注册
	 */
	@Transactional
	public void saveGroup(Groups groups) {
		groupsDao.saveGroups(groups);
	}

	

	/**
	 * 根据组织id更新组织热门度
	 */
	public Integer updateRecommend(String id) {
		Integer integer = groupsDao.updateRecommend(id);
		return integer;
	}

	/**
	 * 管理员查询待审核组织
	 * @param groups
	 * @return
	 */
	public List<Groups> getGroupsByStatus(Groups groups){
		List<Groups> list = groupsDao.getGroupsByStatus(groups);
		Code codeParam = new Code();
		for(Groups group:list){
			codeParam.setCodeType(YCConstants.CODE_TYPE_GROUP);
			codeParam.setCodeValue(group.getGroupType());
			List<Code> codeList = codeService.getCodeDynamic(codeParam);
			if(codeList != null && codeList.size()>0){
				group.setGroupTypeValue(codeList.get(0).getCodeValueName());
			}
			codeList = null;
		}
		return list;
	};
	
	/**
	 * 管理员审核待审核组织
	 * @param groups
	 * @return
	 */
	public int updateGroupsStatus(Groups groups){
		return groupsDao.updateGroupsStatus(groups);
	}

	/**
	 * 根据组织类型获取组织列表
	 */
	@Override
	public PageInfo<Groups> findGroupListByType(String groupType,Integer pageNo,Integer pageSize) throws YichuangException{
		PageHelper.orderBy("createdAt desc");
		PageHelper.startPage(pageNo, pageSize);
		List<Groups> list = groupsDao.findGroupListByType(groupType);
		PageInfo<Groups> pageInfo = new PageInfo<Groups>(list);
		return pageInfo;
	}

	/**
	 * 根据热门度获取组织
	 */
	@Override
	public PageInfo<Groups> getRecommendGroups(Integer pageNo, Integer pageSize) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.orderBy("recommend desc");
		PageHelper.startPage(pageNo,pageSize);
		List<Groups> list = groupsDao.getRankingGroups();
		PageInfo<Groups> pageInfo = new PageInfo<Groups>(list);
		return pageInfo;
	}

	/**
	 * 最新
	 */
	@Override
	public PageInfo<Groups> newGroup(Integer pageNo, Integer pageSize) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.orderBy("createdAt desc");
		PageHelper.startPage(pageNo,pageSize);
		List<Groups> list = groupsDao.getRankingGroups();
		PageInfo<Groups> pageInfo = new PageInfo<Groups>(list);
		return pageInfo;
	}

	/**
	 * 获取所有组织
	 */
	@Override
	public PageInfo<Groups> getAllGroups(Integer pageNo,Integer pageSize) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.startPage(pageNo, pageSize);
		List<Groups> list = groupsDao.getRankingGroups();
		PageInfo<Groups> pageInfo = new PageInfo<Groups>(list);
		return pageInfo;
	}

	/**
	 * 人数最多
	 */
	@Override
	public PageInfo<Groups> volTotal(Integer pageNo, Integer pageSize) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.orderBy("volTotal desc");
		PageHelper.startPage(pageNo,pageSize);
		List<Groups> list = groupsDao.getRankingGroups();
		PageInfo<Groups> pageInfo = new PageInfo<Groups>(list);
		return pageInfo;
	}

	/**
	 * 根据id更新活动数
	 */
	@Override
	public void updateCamCount(String id) {
		groupsDao.updateCamCount(id);
	}

	/**
	 * 根据组织名称模糊查询组织
	 */
	@Override
	public PageInfo<Groups> search(Integer pageNo, Integer pageSize, String name) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize ==null?10:pageSize;
		PageHelper.startPage(pageNo, pageSize);
		List<Groups> list = groupsDao.search(name);
		PageInfo<Groups> pageInfo = new PageInfo<Groups>(list);
		return pageInfo;
	}

	/**
	 * 根据组织名称或类型查询组织列表
	 */
	@Override
	public PageInfo<Groups> getGroupListByTypeOrName(Integer pageNo, Integer pageSize, String name, String groupType) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize ==null?10:pageSize;
		PageHelper.startPage(pageNo, pageSize);
		List<Groups> list = groupsDao.getGroupListByTypeOrName(name, groupType);
		return new PageInfo<Groups>(list);
	}

	/**
	 * 根据组织id获取活动详情列表
	 */
	@Override
	public PageInfo<Campaigns> getCampaignListByGroupId(Integer pageNo, Integer pageSize, String id) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize ==null?10:pageSize;
		PageHelper.startPage(pageNo, pageSize);  
		List<Campaigns> list = groupsDao.getCampaignListByGroupId(id);
		return new PageInfo<Campaigns>(list);
	};
	
	/**
	 * 根据id修改组织信息
	 * @param groups
	 * @return
	 */
	public Integer updateGroupById(Groups groups){
		return groupsDao.updateGroupById(groups);
	}
	
	
	/**
	 * 更新组织信息
	 * @param groups
	 * @return
	 */
	public Integer updateGroup(Groups groups){
		return groupsDao.updateGroup(groups);
	};
}
