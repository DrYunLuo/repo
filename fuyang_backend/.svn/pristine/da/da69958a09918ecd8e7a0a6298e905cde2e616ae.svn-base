package com.yichuang.fuyang.service;




import java.util.List;
import java.util.Map;

import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.entity.Campaigns;
import com.yichuang.fuyang.entity.Volunteers;

public interface VolunteersService {
	/**
	 * 志愿者总人数
	 * @return
	 */
	Integer getTotalVol();
	
	/**
	 * 志愿者总服务时长
	 * @return
	 */
	Integer getSumServiceTimes();
	
	/**
	 * 志愿者根据服务时长排行
	 * @param pageNo 数量
	 * @param pageSize 页数
	 * @return
	 */
	PageInfo<Volunteers> getRankingVolun(Integer pageNo,Integer pageSize);
	
	List<Map<String, Object>> getVols();
	
	
	/**
	 * 志愿者注册
	 * @param volunteers
	 */
	void registVol(Volunteers volunteers,String uid) throws YichuangException;
	
	/**
	 * 官网志愿者注册 LH
	 * @param volunteers
	 */
	Integer reVol(Volunteers volunteers);
	
	/**
	 * 加入组织
	 * @param GroupId
	 * @param id
	 * @throws YichuangException
	 */
	public void joinGroup(String GroupId,String id) throws YichuangException;
	
	/**
	 * 官方审核志愿者
	 * @param id
	 */
	public Integer ourShenHe(Volunteers volunteer) throws YichuangException;

	String getPhoto(String volunteerId);
	
	/**
	 * 组织审核
	 * @param vid
	 * @return
	 * @throws YichuangException
	 */
	public Integer groupShenHe(Volunteers volunteer) throws YichuangException;
	
	
	
	/**
	 * 根据志愿者组织审核获取志愿者信息
	 * */
	PageInfo<Volunteers> findVolunByGroupCheck(Integer pageNo,Integer pageSize,Volunteers volunteer);
	
	/**
	 * 官方未审核志愿者
	 * */
	PageInfo<Volunteers> findVolunByStatus(Integer pageNo,Integer pageSize,Volunteers volunteer);
	
	
	/**
	 * 根据志愿者id查询志愿者 LH
	 * @param id：主键id
	 * @return
	 */
	List<Volunteers> getVolunById(String id);
	
	
	/**
	 * 组织查询待审核加入活动志愿者   LH
	 * @return
	 */
	List<Volunteers> getVolByIscalc();
	
	/**
	 * 获取推荐志愿者根据参与活动数排行
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<Volunteers> getMostCam(Integer pageNo,Integer pageSize);
	
	
	/**
	 * 获取最新志愿者根据注册时间排行
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<Volunteers> getNewVolun(Integer pageNo,Integer pageSize);
	
	/**
	 * 获取全部志愿者
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<Volunteers> getAllVolun(Integer pageNo,Integer pageSize);
	/**
	 * 获取全部志愿者
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<Volunteers> getVolunList(Integer pageNo,Integer pageSize,Volunteers volunteer);
	
	/**
	 * 更新志愿者信息
	 * @param volunteers
	 */
	void  updateVolunInfo(Volunteers volunteers);
	
	/**
	 * 根据id获取志愿者当前名次
	 * @param id
	 * @return
	 */
	public Integer getRngkingById(String id);
	
	
	/**
	 * 获取志愿者列表
	 * @param volunteer
	 * @return
	 */
	List<Volunteers> getVolun(Volunteers volunteer);
	
	/**
	 * 根据志愿者id获取参加活动的信息
	 */
	public PageInfo<Campaigns> getAllCampaignsById(Integer pageNo,Integer pageSize,Volunteers volunteer);
}
