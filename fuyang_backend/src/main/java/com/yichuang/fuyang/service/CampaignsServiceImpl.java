package com.yichuang.fuyang.service;

import java.sql.Timestamp;
import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.dao.CampaignrecordsDao;
import com.yichuang.fuyang.dao.CampaignsDao;
import com.yichuang.fuyang.entity.Campaigns;
import com.yichuang.fuyang.util.Utils;
import com.yichuang.fuyang.util.YCConstants;




@Service("CampaignsService")
public class CampaignsServiceImpl implements CampaignsService{

	@Autowired
	private CampaignsDao campaignsDao;
	@Autowired
	private CampaignrecordsDao campaignrecordsDao;
	
	

	/**
	 * 获取热门活动
	 */
	public PageInfo<Campaigns> getHostCampaigns(Integer pageNo,
			Integer pageSize) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.orderBy("a.memberCount desc");
		PageHelper.startPage(pageNo, pageSize);
		List<Campaigns> list = campaignsDao.getCampaigns();
		PageInfo<Campaigns> pageInfo = new PageInfo<Campaigns>(list);
		return pageInfo;
	}

	
	/**
	 * 获取最新活动
	 */
	public PageInfo<Campaigns> getNewCampaigns(Integer pageNo, Integer pageSize) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.orderBy("a.createdAt desc");
		PageHelper.startPage(pageNo, pageSize);
		List<Campaigns> list = campaignsDao.getCampaigns();
		PageInfo<Campaigns> pageInfo = new PageInfo<Campaigns>(list);
		return pageInfo;
	}
	

	/**
	 * 首页精品活动
	 */
	public PageInfo<Campaigns> getRecommend(Integer pageNo, Integer pageSize) {
		pageNo = pageNo ==null?1:pageNo;
		pageSize = pageSize ==null?2:pageSize;
		PageHelper.orderBy("a.memberCount DESC");
		PageHelper.startPage(pageNo, pageSize);
		List<Campaigns> list = campaignsDao.getRecommend();
		PageInfo<Campaigns> pageInfo = new PageInfo<Campaigns>(list);
		return pageInfo;
	}

	
	/**
	 * 获取活动详情
	 */
	public List<Campaigns> getCampaignInfoId(String id) throws YichuangException{
		if(id == null || id == ""){
			throw new YichuangException(1,"id为空");
		}
		List<Campaigns> list = campaignsDao.getCampaignById(id);
		return list;
	}

	
	/**
	 * 根据key查询活动
	 */
	public PageInfo<Campaigns> getCampaignsByKey(String title,Integer pageNo,Integer pageSize) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		if(title == null || title.trim() == ""){
			return new PageInfo<Campaigns>(null);
		}
		PageHelper.orderBy("a.recommend desc");
		PageHelper.startPage(pageNo, pageSize);
		List<Campaigns> list = campaignsDao.getCampaignsByTitle(title);
		if(list==null){
			return null;
		}
		PageInfo<Campaigns> pageInfo = new PageInfo<Campaigns>(list);
		return pageInfo;
	}

	
	/**
	 * 更新活动热门度
	 */
	public boolean updateRecommend(String id) {
		if(id == null || id.trim()==""){
			return false;
		}
		campaignsDao.updateRecommend(id);
		return true;
	}

	
	/**
	 * 获取公益项目按爱心捐赠数排序
	 */
	public PageInfo<Campaigns> getBenefit(Integer pageNo, Integer pageSize) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?5:pageSize;
		PageHelper.orderBy("a.lovingHeart desc");
		PageHelper.startPage(pageNo, pageSize);
		List<Campaigns> list = campaignsDao.getBenefit();
		PageInfo<Campaigns> pageInfo = new PageInfo<Campaigns>(list);
		return pageInfo;
	}
	
	/**
	 * 动态更新活动信息
	 */
	public void updateCampaignDynamic(Campaigns campaigns){
		campaignsDao.updateCampaignDynamic(campaigns);
	}

	/**
	 * 
	 */
	public void updateCampBatch(String[] ids){
		campaignsDao.updateCampBatch(ids);
	}
	/**
	 * 根据id获取公益项目详情
	 */
	public List<Campaigns> getBenefitById(String id) throws YichuangException{
		if(id == null || id.trim() == ""){
			throw new YichuangException(1,"项目id为空");
		}
		List<Campaigns> list = campaignsDao.getBenefitById(id);
		return list;
	}

	/**
	 * 获取爱心捐助总数
	 */
	public Integer getLovingHeart() {
		Integer integer = campaignsDao.getLovingHeart();
		return integer;
	}

	/**
	 * 组织发布活动
	 * 
	 */
	public void save(Campaigns campaigns) {
		String formatStr = "yyyy-MM-dd HH:mm";
		long time = System.currentTimeMillis();
		Timestamp timestamp = new Timestamp(time);
		campaigns.setCreatedAt(timestamp);
		campaigns.setUpdatedAt(timestamp);
		
		//获取活动时长/每人
		Date startTime = Utils.stringToDate(campaigns.getStartTime(), formatStr);
		Date endTime = Utils.stringToDate(campaigns.getEndTime(), formatStr);
		int duration = (int)((endTime.getTime() - startTime.getTime())/(1000*60*60));
		campaigns.setDuration(duration);
		//活动限制人数
		int limit = campaigns.getLimit();
		//活动共需VT币数量 = 活动人数*活动时长*每个活动奖励VTB数量
		campaigns.setAward(String.valueOf(limit*YCConstants.VT_PER_ACTIVITY*duration));
		
		campaignsDao.saveCampaigns(campaigns);
	}


	/**
	 * 获取未审核活动
	 */
	public PageInfo<Campaigns> getCampaignsByCheck(Integer pageNo,Integer pageSize,Campaigns campaigns) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.startPage(pageNo, pageSize);
		List<Campaigns> list = campaignsDao.getCampaignsByCheck(campaigns);
		//给活动设置默认图片
		for(Campaigns camp:list){
			if(StringUtils.isEmpty(camp.getImage())){
				camp.setImage(YCConstants.CAMPAIGN_DEFAULT_TITLEIMG_URL);
			}
		}
		PageInfo<Campaigns> pageInfo = new PageInfo<Campaigns>(list);
		return pageInfo;
	}


	/**
	 * 根据id审核活动
	 */
	@Transactional
	public Integer updateCampaignById(Campaigns campaigns) {
		long time = System.currentTimeMillis();
		Timestamp timestamp = new Timestamp(time);
		campaigns.setUpdatedAt(timestamp);
		Integer integer = campaignsDao.updateCampaignById(campaigns);
		return integer;
	}
	
	public void updateCampaignsById(Campaigns campaigns){
		campaignsDao.updateCampaignsById(campaigns);
	}


	/**
	 * 获取今日活动
	 */
	@Override
	public PageInfo<Campaigns> getTodayCam(Integer pageNo, Integer pageSize) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.startPage(pageNo, pageSize);
		List<Campaigns> list = campaignsDao.getTodayCam();
		PageInfo<Campaigns> pageInfo = new PageInfo<Campaigns>(list);
		return pageInfo;
	}


	/**
	 * 获取本周活动
	 */
	@Override
	public PageInfo<Campaigns> getWeekCam(Integer pageNo, Integer pageSize) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.startPage(pageNo,pageSize);
		List<Campaigns> list = campaignsDao.getWeekCam();
		PageInfo<Campaigns> pageInfo = new PageInfo<Campaigns>(list);
		return pageInfo;
	}

	/**
	 * 获取本月活动
	 */
	@Override
	public PageInfo<Campaigns> getMonthCam(Integer pageNo, Integer pageSize) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.startPage(pageNo, pageSize);
		List<Campaigns> list = campaignsDao.getMonthCam();
		PageInfo<Campaigns> pageInfo = new PageInfo<Campaigns>(list);
		return pageInfo;
	}


	@Override
	public List<Campaigns> getCampainName(Campaigns campaigns) {
		return campaignsDao.getCampainName(campaigns);
	}
	
	

	/**
	 * 查询未发放积分活动
	 */
	
	public List<Campaigns> unpaidCam(){
		return campaignsDao.unpaidCam();
	};
	
	/**
	 * 查询活动  符合条件志愿者是否全部发放积分
	 * @return
	 */
	public List<Campaigns> paidCam(){
		return campaignsDao.paidCam();
	}


	/**
	 * 根据活动id更新发布信息
	 * @param campaigns
	 * @return
	 */
	public Integer updateReleaseCampaignById(Campaigns campaigns) {
		return campaignsDao.updateReleaseCampaignById(campaigns);
	}
}
