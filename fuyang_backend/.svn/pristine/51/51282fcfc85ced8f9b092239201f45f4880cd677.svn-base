package com.yichuang.fuyang.service;

import java.sql.Timestamp;
import java.util.Calendar;
import java.util.Date;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.dao.AccountDao;
import com.yichuang.fuyang.dao.CampaignrecordsDao;
import com.yichuang.fuyang.dao.CampaignsDao;
import com.yichuang.fuyang.dao.CreditrecordDao;
import com.yichuang.fuyang.dao.GroupsDao;
import com.yichuang.fuyang.dao.VolunteersDao;
import com.yichuang.fuyang.entity.Accounts;
import com.yichuang.fuyang.entity.Campaignrecords;
import com.yichuang.fuyang.entity.Campaigns;
import com.yichuang.fuyang.entity.Creditrecord;
import com.yichuang.fuyang.entity.Groups;
import com.yichuang.fuyang.entity.Volunteers;
import com.yichuang.fuyang.util.Utils;
import com.yichuang.fuyang.util.YCConstants;

@Service("CampaignrecordsService")
public class CampaignrecordsServiceImpl implements CampaignrecordsService{

	@Autowired
	private CampaignrecordsDao campaignrecordsDao;
	@Autowired
	private CampaignsDao campaignsDao;
	@Autowired
	private VolunteersDao volunteersDao;
	@Autowired
	private AccountDao accountDao;
	@Autowired
	private CreditrecordDao creditrecordDao;
	@Autowired
	private GroupsDao groupsDao;

	/**
	 * 志願者申請加入活動 新建記錄
	 */
	@Transactional
	public Map<String, Object> partTake(String volunteerId,String campaignId ){
		
		Map<String, Object> returnMap = new HashMap<String, Object>();
		
		//默认成功
		returnMap.put("status", 0);
		Calendar calendar = Calendar.getInstance();
		List<Campaigns> list = campaignsDao.getCampaignById(campaignId);
		if(list == null || list.size() == 0){
			returnMap.put("status", 6);
			returnMap.put("msg", "未查询到此活动，请重新刷新页面后重试");
		}
		if(list != null && list.size() > 0){
			Campaigns campaigns = list.get(0);
			Integer integer = Utils.stringToDate(campaigns.getStartTime(), "yyyy-MM-dd HH:mm:ss").compareTo(calendar.getTime());
			if(integer < 1 ){
				returnMap.put("status", 1);
				returnMap.put("msg", "该活动已经开始,停止报名");
			}else if(campaigns.getMemberCount() >= campaigns.getLimit()){
				returnMap.put("status", 2);
				returnMap.put("msg", "该活动参与人数已满停止报名");
			} else{
				Campaignrecords campaignrecords1 = new Campaignrecords();
				campaignrecords1.setVolunteerId(volunteerId);
				campaignrecords1.setCampaignId(campaignId);
				Campaignrecords campaignrecords2 = campaignrecordsDao.findByCidVid(campaignrecords1);
				if(campaignrecords2 == null ){
					Campaignrecords campaignrecords = new Campaignrecords();
					campaignrecords.setId(UUID.randomUUID().toString());
					campaignrecords.setVolunteerId(volunteerId);
					campaignrecords.setCampaignId(campaignId);
					long time = System.currentTimeMillis();
					Timestamp timestamp = new Timestamp(time);
					campaignrecords.setCreatedAt(timestamp);
					campaignrecords.setUpdatedAt(timestamp);
					campaignrecords.setIscalc(YCConstants.AUDIT_NOAUDIT);
					campaignrecordsDao.partTake(campaignrecords);
					returnMap.put("msg", "参加成功");
					returnMap.put("status", 0);
				}else{
					if("0".equals(campaignrecords2.getIscalc())){
						returnMap.put("status", 3);
						returnMap.put("msg", "您已申请过此活动，没有通过审核，看看其他活动吧！");
					}else if("1".equals(campaignrecords2.getIscalc())){
						returnMap.put("status", 4);
						returnMap.put("msg", "您已申请并已通过审核，请准时参加！");
					}else if("2".equals(campaignrecords2.getIscalc())){
						returnMap.put("status", 5);
						returnMap.put("msg", "您已申请过此活动，请勿重复申请，耐心等待审核！");
					}
				}
			}
		}
		
		return returnMap;
	}
	
	/**
	 * 组织查询待审核加入活动志愿者
	 * @param campaignrecords
	 * @return
	 */
	public List<Campaignrecords> getCamRecByIscalc(Campaignrecords campaignrecords){
		return  campaignrecordsDao.getCamRecByIscalc(campaignrecords);
	};
	
	public List<Campaignrecords> getCamRec(Campaignrecords campaignrecords){
		return  campaignrecordsDao.getCamRec(campaignrecords);
	}
	
	/**
	 * 组织审核志愿者参加活动
	 * @param campaignrecords
	 * @return
	 */
	public Integer updateCamRecIscalc(Campaignrecords campaignrecords){
		return campaignrecordsDao.updateCamRecIscalc(campaignrecords);
	}
	
	public void updateCamRecDynamic(Campaignrecords campaignrecords){
		
	}
	
	/**
	 * 更新志愿者参与活动记录
	 */
	public void updateCampaignRecordsById(Campaignrecords campaignrecords){
		campaignrecordsDao.updateCampaignRecordsById(campaignrecords);
	}


	/**
	 * 根据活动，志愿者id获取记录
	 */
	@Override
	public Campaignrecords findByCidVid(Campaignrecords campaignrecords) {
		
		Campaignrecords campaignrecords2 = campaignrecordsDao.findByCidVid(campaignrecords);
		return campaignrecords2;
	}

	/**
	 * 获取记录列表
	 */
	@Override
	public PageInfo<Campaignrecords> findVolunRecords(
			Campaignrecords campaignrecords, Integer pageNo, Integer pageSize) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?30:pageSize;
		PageHelper.orderBy("createdAt desc");
		PageHelper.startPage(pageNo, pageSize);
		List<Campaignrecords> list = campaignrecordsDao.findVolunRecords(campaignrecords);
		PageInfo<Campaignrecords> pageInfo = new PageInfo<Campaignrecords>(list);
		return pageInfo;
	};
	/**
	 * 根据volunteerId查询当前志愿者参加的所有活动信息
	 * @param VolunteerId
	 * @param CampaignId
	 * @return
	 */
	@Override
	public PageInfo<Campaigns> findAllActivitis(Integer pageNo, Integer pageSize,String volunteerId) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.startPage(pageNo, pageSize);
		
		List<Campaigns> results = campaignrecordsDao.findAllActivitis(pageNo, pageSize,volunteerId);
		PageInfo<Campaigns> pageInfo = new PageInfo<Campaigns>(results);
		return pageInfo;
	}
	
	
	/**
	 * 根据campaignID 查找符合积分发放条件的志愿者ID
	 * @return
	 */
	public List<Campaignrecords> unpaidCamRecords(Campaignrecords campaignrecords){
		return campaignrecordsDao.unpaidCamRecords(campaignrecords);
	};
	
	
	
	/**
	 * 更新活动记录
	 * @param campaignrecords
	 * @return
	 */
	public Integer updateCamRecord(Campaignrecords campaignrecords){
		return campaignrecordsDao.updateCamRecord(campaignrecords);
	}
	
	/**
	 * 发放活动积分
	 * 
	 * 修改Campaignrecords表  更新payflag updateAt
	 * 修改Accounts   更新 credit updateAt 
	 * 修改Volunteers 更新serviceTime updateAt  campaignTotal
	 * 添加creditrecord   添加 id   volunteerId  time  creditrecord  VTValue
	 * 修改groups  更新serviceTime updateAt 
	 * 
	 */
	/*@Transactional*/
	public void tx_camRecIntegral(Campaignrecords campaignrecords,Volunteers volunteers
			,Accounts accounts,Creditrecord creditrecord,Groups groups){
		
		//定义当前时间  志愿者id
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		String volunteerId = campaignrecords.getVolunteerId();
		
		//1.修改Campaignrecords表  更新payflag updateAt
		campaignrecords.setPayFlag(YCConstants.SYSTEM_INT_ONE);
		campaignrecords.setUpdatedAt(timestamp);
		
		campaignrecordsDao.updateCamRecord(campaignrecords);
		
		//2.修改Accounts   更新 credit updateAt 
		accounts.setVolunteerId(volunteerId);
		accounts.setUpdatedAt(timestamp);
		
		accountDao.updateAccountByVolId(accounts);
		
		//3.添加creditrecord   添加 id   volunteerId    creditrecord  VTValue
		creditrecord.setVolunteerId(volunteerId);
		
		creditrecordDao.addRecord(creditrecord);
		
		//4.修改Volunteers 更新serviceTime updateAt  campaignTotal
		volunteers.setId(volunteerId);
		volunteers.setUpdatedAt(timestamp);
		
		volunteersDao.updateVolunInfo(volunteers);
		
		//5.修改groups  更新serviceTime updateAt 
		groups.setUpdatedAt(timestamp);
		
		groupsDao.updateGroup(groups);
		
	}

	
	
}
