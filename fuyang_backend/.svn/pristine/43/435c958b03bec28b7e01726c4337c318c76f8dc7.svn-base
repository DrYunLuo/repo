package com.yichuang.fuyang.service;

import java.math.BigInteger;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;
import java.util.LinkedHashMap;
import java.util.List;
import java.util.Map.Entry;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.RequestMapping;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.yichuang.fuyang.dao.AccountDao;
import com.yichuang.fuyang.dao.CampaignsDao;
import com.yichuang.fuyang.dao.CreditrecordDao;
import com.yichuang.fuyang.dao.SigninDao;
import com.yichuang.fuyang.dao.VolunteersDao;
import com.yichuang.fuyang.entity.Accounts;
import com.yichuang.fuyang.entity.Campaigns;
import com.yichuang.fuyang.entity.Creditrecord;
import com.yichuang.fuyang.entity.Donatrecord;
import com.yichuang.fuyang.entity.Signin;

@Service
public class AccountServiceImpl implements AccountService {

	//jackson json数据处理 最近七天提交的步数记录
	private  ObjectMapper mapper = new ObjectMapper();
	
	@Autowired
	private AccountDao accountDao;
	@Autowired
	private SigninDao signinDao;
	@Autowired
	private CampaignsDao campaignsDao;
	@Autowired
	private VolunteersDao volunteersDao;
	@Autowired
	private CreditrecordDao creditrecordDao;
	
	/**
	 * 捐步
	 */
	@Transactional
	public Accounts donateStep(String volunteerId, Integer currentStep) throws Exception {
		Accounts accounts = accountDao.findByVolunteerId(volunteerId);
		if(accounts==null){
			throw new RuntimeException("你还不是志愿者");
		}
		Date lastStepTime = accounts.getLastStepTime();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		if(lastStepTime!=null){
			String now = sdf.format(new Date());
			if(now.equals(sdf.format(lastStepTime))){
				throw new RuntimeException("请勿重复提交");
			}
		}
		Calendar calendar = Calendar.getInstance();
		int day = calendar.get(Calendar.DAY_OF_MONTH);
		String sevenDay = accounts.getSevenDay();
		LinkedHashMap<String, Integer> map =null;
		if(sevenDay==null){
			map = new LinkedHashMap<String, Integer>();
		}else{
			map = mapper.readValue(sevenDay, LinkedHashMap.class);			
		}
		if(map!=null&&map.size()>=7){
			//calendar.add(Calendar.DAY_OF_MONTH, -7);
			//int last_ = calendar.get(Calendar.DAY_OF_MONTH);
			for (Entry<String, Integer> en : map.entrySet()) {
				String key = en.getKey();
				map.remove(key);
				break;
			}
			
		}
		map.put("_"+day, currentStep);
		
		//统计总步数
		BigInteger stepCount = accounts.getStepCount().add(new BigInteger(currentStep+""));
		Integer c1 = accounts.getCredit();
		if(c1==null){
			accounts.setCredit(0);
		}
		Integer credit = accounts.getCredit();
		//TODO 积分算法待补充

		
		accounts.setCurrentStep(currentStep);
		accounts.setStepCount(stepCount);
		accounts.setLastStepTime(new Date());
		String jsonString = mapper.writeValueAsString(map);
		accounts.setSevenDay(jsonString);
		//更新账户
		accountDao.updateAccount(accounts);
		return accounts;
	}

	
	/**
	 * 判断用户登录是否失效更新账户和签到
	 */
	@Transactional
	public void signin(String volunteerId) throws YichuangException{
		//判断参数是否为空
		if(volunteerId == null || volunteerId.trim() == ""){
			throw new YichuangException(1, "用户id为空");
		}
		Accounts account = accountDao.findByVolunteerId(volunteerId);
		//判断志愿者是否存在
		if(account == null){
			throw new YichuangException(2,"志愿者不存在");
		}else {
			Date nowDate = new Date();
			SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
			String accountId = account.getId();
			//根据账户id获取签到表的签到时间
			List<Signin> signinList = signinDao.getNowTime(accountId);
			if(signinList.get(0).getSigninTime() != null){
				//对比签到表中签到更新时间是否与当前时间相等
				if(sdf.format(signinList.get(0).getSigninTime()).equals(sdf.format(nowDate))){
					throw new YichuangException(3,"今天已签到");
				}
			}
			
			Integer i = signinDao.updateSignin(account.getId());
			//判断是否签到成功
			if(i<0){
				throw new YichuangException(3,"签到失败");
			}
		}
	}
	
	
	
	
	/**
	 * 判断用户今天是否已经签到
	 */
	public String signon(String volunteerId) {
		Accounts account = accountDao.findByVolunteerId(volunteerId);
		Date nowDate = new Date();
		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
		String accountId = account.getId();
		String string = null;
		//根据账户id获取签到表的签到时间
		List<Signin> signinList = signinDao.getNowTime(accountId);
		if(signinList.get(0).getSigninTime() != null){
			//对比签到表中签到更新时间是否与当前时间相等
			if(sdf.format(signinList.get(0).getSigninTime()).equals(sdf.format(nowDate))){
				string = "今天已经签到";
			}else {
				string = "今天未签到";
			}
			
		}
		return string;
	}


	public String findSenvenDay(String volunteerId) throws Exception {
		return this.accountDao.findSevByVolunteerId(volunteerId);
	}


	
	/**
	 * 捐赠
	 */
	@Transactional
	public void lovingHeart(String vid, String cid, Double credit)
			throws YichuangException {
		if(	vid == null || vid.trim() == "" ){
			throw new YichuangException(1,"志愿者id为空");
		}
		if( cid == null || cid.trim() == ""){
			throw new YichuangException(1,"公益项目id为空");
		}
		if(	credit == null || credit < 0){
			throw new YichuangException(1,"积分参数错误");
		}
		Accounts accounts = accountDao.findByVolunteerId(vid);
		if(accounts == null){
			throw new YichuangException(2,"个人账户不存在");
		}
		if(accounts.getCredit() < credit){
			throw new YichuangException(2,"积分余额不足");
		}
		Integer jInteger = accountDao.juan(credit, vid);
		Integer integer = campaignsDao.updateLovingHeart(cid, credit);
		if(jInteger <= 0 || integer <= 0){
			throw new YichuangException(3,"捐赠失败");
		}
		List<Campaigns> list = campaignsDao.getBenefitById(cid);
		if(list != null){
			Creditrecord creditrecord = new Creditrecord();
			creditrecord.setVolunteerId(vid);
			creditrecord.setCreditrecord("捐献给"+list.get(0).getTitle()+"项目"+credit.intValue()+"积分");
			creditrecordDao.addRecord(creditrecord);
		}
		
	}


	/**
	 * 获取积分
	 */
	public synchronized Accounts getCredit(String vid) {
		Accounts accounts = accountDao.findByVolunteerId(vid);
		return accounts;
	}

	
	/**
	 * 更新任务积分
	 */
	@Override
	public synchronized void updateByMissing(Accounts accounts) {
		accountDao.updateByMissing(accounts);
	}


	/**
	 * 添加积分
	 */
	public Integer updateAccount(Accounts accounts){
		return accountDao.updateAccount(accounts);
	}
	
	/**
	 * 根据志愿者ID  更新账户信息 
	 * @param accounts
	 */
	public Integer updateAccountByVolId(Accounts accounts){
		return accountDao.updateAccountByVolId(accounts);
	}

	/**
	 * 添加捐赠物品明细记录
	 */
	@Override
	public Integer addDonatrecord(Donatrecord donatrecord) {
		return accountDao.addDonatrecord(donatrecord);
	}


	@Override
	public Integer resetDonatCredit(String volunteerId) {
		return accountDao.resetDonatCredit(volunteerId);
	}
	
}
