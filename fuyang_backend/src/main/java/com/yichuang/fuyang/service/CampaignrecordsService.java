package com.yichuang.fuyang.service;

import java.util.List;
import java.util.Map;

import org.springframework.stereotype.Service;

import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.entity.Accounts;
import com.yichuang.fuyang.entity.Campaignrecords;
import com.yichuang.fuyang.entity.Campaigns;
import com.yichuang.fuyang.entity.Creditrecord;
import com.yichuang.fuyang.entity.Groups;
import com.yichuang.fuyang.entity.Volunteers;



@Service
public interface CampaignrecordsService {

	/**
	 * 志愿者申请加入活动 新建活动记录
	 * @param voluteerId
	 * @param campaignId
	 * @throws Exception
	 */
	public Map<String, Object> partTake(String voluteerId ,String campaignId);
	
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
	
	public void updateCampaignRecordsById(Campaignrecords campaignrecords);
	
	/**
	 * 根据活动，志愿者id查询记录
	 * @param campaignrecords
	 * @return
	 */
	public Campaignrecords findByCidVid(Campaignrecords campaignrecords);
	
	/**
	 * 获取活动记录
	 * @param campaignrecords
	 * @param pageNo
	 * @return
	 */
	public PageInfo<Campaignrecords> findVolunRecords(Campaignrecords campaignrecords,Integer pageNo,Integer pageSize);
	
	/**
	 * 根据volunteerId查询当前志愿者参加的所有活动信息
	 * @param VolunteerId
	 * @param CampaignId
	 * @return
	 */
	public PageInfo<Campaigns> findAllActivitis(Integer pageNo, Integer pageSize, String volunteerId);
	
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
	
	
	
	/**
	 * 发放活动积分  （Campaignrecords表相关）
	 * 
	 * 更新Campaignrecords 更新payflag updateAt
	 * 更新Accounts   更新 credit updateAt 
	 * 更新Volunteers 更新serviceTime updateAt
	 * 更新groups  更新serviceTime updateAt
	 */
	public void tx_camRecIntegral(Campaignrecords campaignrecords,Volunteers volunteers
			,Accounts accounts,Creditrecord creditrecord,Groups groups);
	
}
