package com.yichuang.fuyang.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.entity.Campaigns;

@Service
public interface CampaignsService {

	/**
	 * 获取热门活动并分页
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<Campaigns>  getHostCampaigns(Integer pageNo,Integer pageSize);
	
	/**
	 * 获取最新活动并分页
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<Campaigns> getNewCampaigns(Integer pageNo,Integer pageSize);
	
	/**
	 * 获取精品活动并分页
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<Campaigns> getRecommend(Integer pageNo,Integer pageSize);
	
	/**
	 * 根据id获取活动
	 * @param id
	 * @return
	 */
	List<Campaigns> getCampaignInfoId(String id) throws YichuangException;
	
	/**
	 * 根据标题获取活动
	 * @param title
	 * @return
	 */
	PageInfo<Campaigns> getCampaignsByKey(String title,Integer pageNo,Integer pageSize);
	
	/**
	 * 根据id更新热门度
	 * @param id
	 * @return
	 */
	public boolean updateRecommend(String id);
	
	/**
	 * 动态更新活动信息
	 * @param campaigns
	 */
	public void updateCampaignDynamic(Campaigns campaigns);
	/**
	 *根据id串更新活动信息
	 * @param ids
	 */
	public void updateCampBatch(String[] ids);
	
	/**
	 * 获取公益项目
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<Campaigns> getBenefit(Integer pageNo,Integer pageSize);
	
	/**
	 * 根据id获取公益项目
	 * @param id
	 * @return
	 */
	List<Campaigns> getBenefitById(String id) throws YichuangException;
	
	/**
	 * 获取爱心捐助总数
	 * @return
	 */
	Integer getLovingHeart();

	/**
	 * 发布活动
	 * @param campaigns
	 */
	void save(Campaigns campaigns);

	/**
	 * 获取未审核活动
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<Campaigns> getCampaignsByCheck(Integer pageNo,Integer pageSize,Campaigns campaigns);
	
	/**
	 * 根据id审核活动
	 * @param updatedAt
	 * @param id
	 * @return
	 */
	Integer updateCampaignById(Campaigns campaigns);
	
	void updateCampaignsById(Campaigns campaigns);
	
	/**
	 * 获取今日活动
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<Campaigns> getTodayCam(Integer pageNo,Integer pageSize);
	
	/**
	 * 获取本周活动
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<Campaigns> getWeekCam(Integer pageNo,Integer pageSize);
	
	/**
	 * 获取本月活动
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<Campaigns> getMonthCam(Integer pageNo,Integer pageSize);
	
	List<Campaigns> getCampainName(Campaigns campaigns);

	/**
	 * 查询未发放积分活动 
	 */
	List<Campaigns> unpaidCam();
	
	
	/**
	 * 查询活动  符合条件志愿者是否全部发放积分
	 * @return
	 */
	List<Campaigns> paidCam();

	/**
	 * 根据活动id更新发布信息
	 * @param campaigns
	 * @return
	 */
	Integer updateReleaseCampaignById(Campaigns campaigns);
}
