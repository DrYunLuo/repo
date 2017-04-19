package com.yichuang.fuyang.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.yichuang.fuyang.entity.Campaignrecords;
import com.yichuang.fuyang.entity.Campaigns;

public interface CampaignrecordsDao {
	
	/**
	 * 参加活动
	 * @param campaignrecords
	 * @return
	 */
	public Integer partTake(Campaignrecords campaignrecords);
	
	/**
	 * 获取已经审核参加该活动的人数
	 * @param VolunteerId
	 * @param CampaignId
	 * @return
	 */
	public Integer getPeoPle(@Param("VolunteerId")String VolunteerId,@Param("CampaignId")String CampaignId);

	/**
	 * 组织查询待审核加入活动志愿者
	 * @param campaignrecords
	 * @return
	 */
	public List<Campaignrecords> getCamRecByIscalc(Campaignrecords campaignrecords);
	
	public List<Campaignrecords> getCamRec(Campaignrecords campaignrecords);
	
	/**
	 * 组织审核志愿者参加活动
	 * @param campaignrecords
	 * @return
	 */
	public Integer updateCamRecIscalc(Campaignrecords campaignrecords);
	
	public void updateCamRecDynamic(Campaignrecords campaignrecords);
	/**
	 * 更新志愿者参与活动记录
	 */
	public void updateCampaignRecordsById(Campaignrecords campaignrecords);
	/**
	 * 获取活动记录
	 * @param campaignrecords
	 * @return
	 */
	public List<Campaignrecords> findVolunRecords(Campaignrecords campaignrecords);
	
	/**
	 * 根据活动id或志愿者id获取单挑
	 * @param campaignrecords
	 * @return
	 */
	public Campaignrecords findByCidVid(Campaignrecords campaignrecords);
	
	/**
	 * 根据volunteerId查询当前志愿者参加的所有活动信息
	 * @param VolunteerId
	 * @param CampaignId
	 * @return
	 */
	public List<Campaigns> findAllActivitis(@Param("pageNo")Integer pageNo, @Param("pageSize")Integer pageSize,@Param("volunteerId")String volunteerId);
	
	/**
	 * 根据campaignID 查找符合积分发放条件的志愿者ID
	 * @return
	 */
	public List<Campaignrecords> unpaidCamRecords(Campaignrecords campaignrecords);
 	
	/**
	 * 更新活动记录
	 * @param campaignrecords
	 * @return
	 */
	public Integer updateCamRecord(Campaignrecords campaignrecords);
	
}
