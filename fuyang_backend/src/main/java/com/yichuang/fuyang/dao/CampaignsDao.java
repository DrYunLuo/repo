package com.yichuang.fuyang.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.yichuang.fuyang.entity.Campaigns;

public interface CampaignsDao {
	
	
	
	/**
	 * 获取活动
	 * @return
	 */
	List<Campaigns> getCampaigns();
	/**
	 * 获取已完成活动
	 * @return
	 */
	List<Campaigns> getRecommend();
	/**
	 * 根据id查询活动
	 * @param id
	 * @return
	 */
	List<Campaigns> getCampaignById(@Param("id")String id);
	/**
	 * 根据标题搜索活动 
	 * @param title
	 * @return
	 */
	List<Campaigns> getCampaignsByTitle(@Param("title") String title);
	
	/**
	 * 根据id更新热门搜索度
	 * @param id
	 */
	public void updateRecommend(String id);
	
	/**
	 * 获取公益项目
	 * @return
	 */
	List<Campaigns> getBenefit();
	
	/**
	 * 动态更新活动信息
	 * @param campaigns
	 */
	public void updateCampaignDynamic(Campaigns campaigns);
	
	public void updateCampBatch(String[] ids);
	
	/**
	 * 根据id获取公益项目
	 * @param id
	 * @return
	 */
	List<Campaigns> getBenefitById(String id);
	
	/**
	 * 获取爱心总数
	 * @return
	 */
	Integer getLovingHeart();
	
	/**
	 * 添加活动
	 * @param campaigns
	 */
	void saveCampaigns(Campaigns campaigns);
	
	/**
	 * 捐款
	 * @param id
	 * @param contributions
	 * @return
	 */
	public Integer updateLovingHeart(@Param("id")String id,@Param("contributions")Double contributions);
	
	/**
	 * 获取未审核活动
	 * @return
	 */
	public List<Campaigns> getCampaignsByCheck(Campaigns campaigns);
	
	/**updateCampaignsById
	 * 根据id审核活动
	 * @param updatedAt
	 * @param id
	 * @return
	 */
	Integer updateCampaignById(Campaigns campaigns);
	
	void updateCampaignsById(Campaigns campaigns);
	
	/**
	 * 获取今日活动
	 * @return
	 */
	List<Campaigns> getTodayCam();
	
	/**
	 * 获取本周活动
	 * @return
	 */
	List<Campaigns> getWeekCam();
	
	/**
	 * 获取本月活动
	 * @return
	 */
	List<Campaigns> getMonthCam();
	
	
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
