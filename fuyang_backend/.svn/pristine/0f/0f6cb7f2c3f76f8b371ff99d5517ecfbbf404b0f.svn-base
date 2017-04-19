package com.yichuang.fuyang.service;

import java.math.BigInteger;
import java.sql.Timestamp;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.dao.AccountDao;
import com.yichuang.fuyang.dao.CreditrecordDao;
import com.yichuang.fuyang.dao.SigninDao;
import com.yichuang.fuyang.dao.UserDao;
import com.yichuang.fuyang.dao.VolunteersDao;
import com.yichuang.fuyang.entity.Accounts;
import com.yichuang.fuyang.entity.Campaigns;
import com.yichuang.fuyang.entity.Creditrecord;
import com.yichuang.fuyang.entity.Signin;
import com.yichuang.fuyang.entity.User;
import com.yichuang.fuyang.entity.Volunteers;
import com.yichuang.fuyang.util.YCConstants;

@Service("volunteersService")
public class VolunteersServiceImpl implements VolunteersService {
	@Autowired
	private VolunteersDao volunteersDao;
	
	@Autowired
	private SigninDao signinDao;
	
	@Autowired
	private UserDao userDao;
	
	@Autowired
	private CreditrecordDao  creditrecordDao;
	
	@Autowired
	private AccountDao accountDao;
	
	
	/**
	 * 志愿者总数
	 */
	public Integer getTotalVol(){
		Integer total = volunteersDao.getTotalVolunteers();
		if(total!=null){
			return total;
		}
		return null;
	}

	/**
	 * 服务时长
	 */
	public Integer getSumServiceTimes() {
		Integer sum = volunteersDao.getSumServiceTime();
		if(sum!=null){
			return sum;
		}
		return null;
	}


	/**
	 * 志愿者排行
	 */
	public PageInfo<Volunteers> getRankingVolun(Integer pageNo, Integer pageSize) {
		pageNo = pageNo == null?1:pageNo;
	    pageSize = pageSize == null?10:pageSize;
	    PageHelper.orderBy("serviceTime DESC");
	    PageHelper.startPage(pageNo, pageSize);
	    List<Volunteers> list = volunteersDao.getRankingVolun();
	    //用PageInfo对结果进行包装
	    PageInfo<Volunteers> page = new PageInfo<Volunteers>(list);
		return page;
	}
	
	
	/**
	 * 志愿者注册
	 */
	@Transactional
	public void registVol(Volunteers volunteers,String uid) throws YichuangException{
		Volunteers volunteers2 = new Volunteers();
		volunteers2.setCardId(volunteers.getCardId());
		//根据身份证号查询是否已注册过志愿者
		List<Volunteers> volunList = volunteersDao.getVolun(volunteers2);
		if(volunList != null && volunList.size() > 0){//此身份证号已注册
			volunteers2 = volunList.get(0);
			
			if(volunteers2.getStatus().equals("0")){//审核未通过，修改信息保存
				
				User user = new User();
				user.setId(uid);
				List<User> userList = userDao.getUserById(user);
				
				if(userList != null && userList.size() > 0){
					
					volunteers.setTel(userList.get(0).getPhone());   
					volunteers.setId(volunteers2.getId());
					volunteers.setDuration(0);
					volunteers.setQuality(0);
					long t = System.currentTimeMillis();
					Timestamp datetime = new Timestamp(t);
					volunteers.setUpdatedAt(datetime);
					volunteers.setServiceTime(0);
					volunteers.setStatus(YCConstants.AUDIT_NOAUDIT);
					volunteers.setLoginTime(datetime);
					volunteers.setNickname(userList.get(0).getNickname());
					user.setVolunteerId(volunteers2.getId());
					userDao.updateUserById(user); 
					volunteersDao.updateVolunInfo(volunteers);
				}else{
					throw new YichuangException(2,"用户不存在，请确认");
				}
			}else if(volunteers2.getStatus().equals("1")){//审核通过
				
				throw new YichuangException(2,"志愿者已经认证通过");
			}else if(volunteers2.getStatus().equals("2")){//未审核
				
				throw new YichuangException(2,"志愿者已经注册,请耐心等待审核");
			}
		}else{//身份证号未注册
			
			User user = new User();
			user.setId(uid);
			List<User> userList = userDao.getUserById(user);
			if(userList != null && userList.size() > 0){
				
				if(!StringUtils.isEmpty(userList.get(0).getVolunteerId())){//当前用户已认证过志愿者
					Volunteers volunteers3 = new Volunteers();
					volunteers3.setId(userList.get(0).getVolunteerId());
					//根据身份证号查询是否已注册过志愿者
					volunList = volunteersDao.getVolun(volunteers3);
					if(volunList != null && volunList.size() > 0){
						volunteers3 = volunList.get(0);
						
						if(volunteers3.getStatus().equals("0")){//审核未通过，修改信息保存
							
							volunteers.setTel(userList.get(0).getPhone());   
							volunteers.setId(volunteers3.getId());
							volunteers.setDuration(0);
							volunteers.setQuality(0);
							long t = System.currentTimeMillis();
							Timestamp datetime = new Timestamp(t);
							volunteers.setUpdatedAt(datetime);
							volunteers.setServiceTime(0);
							volunteers.setStatus(YCConstants.AUDIT_NOAUDIT);
							volunteers.setLoginTime(datetime);
							volunteers.setNickname(userList.get(0).getNickname());
							volunteersDao.updateVolunInfo(volunteers);
							
						}else if(volunteers3.getStatus().equals("1")){//审核通过
							
							throw new YichuangException(2,"志愿者已经认证通过");
						}else if(volunteers3.getStatus().equals("2")){//未审核
							
							throw new YichuangException(2,"志愿者已经注册,请耐心等待审核");
						}
					}
				}else{
					String uuid = UUID.randomUUID().toString();
					volunteers.setTel(userList.get(0).getPhone());   
					volunteers.setId(uuid);
					volunteers.setDuration(0);
					volunteers.setQuality(0);
					long t = System.currentTimeMillis();
					Timestamp datetime = new Timestamp(t);
					volunteers.setCreatedAt(datetime);
					volunteers.setUpdatedAt(datetime);
					volunteers.setServiceTime(0);
					volunteers.setStatus(YCConstants.AUDIT_NOAUDIT);
					volunteers.setLoginTime(datetime);
					volunteers.setNickname(userList.get(0).getNickname());
					user.setVolunteerId(uuid);
					userDao.updateUserById(user); 
					volunteersDao.saveVolunteers(volunteers);
				}
			}else{
				throw new YichuangException(2,"用户不存在，请确认");
			}
		}
	}
	
	
	

	public List<Map<String, Object>> getVols() {
		
		return volunteersDao.selectAllVol();
	}

	
	/**
	 * 加入组织
	 */
	public void joinGroup(String GroupId, String id) throws YichuangException{
		if(GroupId == null || GroupId.trim() ==""||id == null||id.trim()==""){
			throw new YichuangException(1, "参数为空");
		}
		volunteersDao.joinGroup(GroupId, id);
	}

	public String getPhoto(String volunteerId) {
		return this.volunteersDao.getPhoto(volunteerId);
	}

	
	/**
	 * 审核志愿者
	 */
	@Transactional
	public Integer ourShenHe(Volunteers volunteer) throws YichuangException{
		
		String volunteerId = volunteer.getId();
		if(StringUtils.isEmpty(volunteerId)){
			throw new YichuangException(1,"志愿者id为空");
		}
		
		List<Volunteers> volsFond = volunteersDao.getVolunById(volunteerId);
		if(volsFond!=null && volsFond.size()>0){
			if(YCConstants.AUDIT_TURE.equals(volsFond.get(0).getStatus())){
				throw new YichuangException(2,"志愿者已审核,请勿重复审核");
			}
		}else{
			throw new YichuangException(2,"志愿者未认证");
		}
		
		User user = new User();
		user.setVolunteerId(volunteerId);
		List<User> userList = userDao.getUserById(user);
		if(userList == null || userList.size() <= 0){
			throw new YichuangException(2,"用户不存在");
		}else{
			volunteer.setPhoto(userList.get(0).getPhoto());
		}
		
		Integer integer = volunteersDao.ourShenHe(volunteer);
		if(integer > 0){
			 try{
				 List<Volunteers> list = volunteersDao.getVolunById(volunteerId);
				 if(list != null && list.size() > 0){
					 if(list.get(0).getStatus().equals(YCConstants.AUDIT_TURE)){
						 
						 long t = System.currentTimeMillis();
					     Timestamp datetime = new Timestamp(t);
					     
					     //创建志愿者之后给志愿者创建账户
					     Accounts accounts = new Accounts();
					     accounts.setCreatedAt(datetime);
					     accounts.setLastMarkTime(null);
					     accounts.setMark(0);
					     accounts.setCredit(YCConstants.AUDIT_SEND_VTB);
					     accounts.setStepCount(new BigInteger("0"));
					     accounts.setUpdatedAt(datetime);
					     accounts.setLastStepTime(null);
					     accounts.setVolunteerId(volunteerId);
					     accountDao.saveAccounts(accounts);
					     //创建账户之后创建签到表
					     Signin signin = new Signin();
					     signin.setCount(0);
					     signin.setDay(0);
					     signin.setCreatedAt(datetime);
					     signin.setUpdatedAt(datetime);
					     signin.setAccountId(accounts.getId());
					     signinDao.saveSignin(signin);
					     
					     Creditrecord creditrecord = new Creditrecord();
						 creditrecord.setVolunteerId(volunteerId);
						 creditrecord.setCreditrecord("审核通过,VT币 +5");
						 creditrecord.setVTValue(YCConstants.AUDIT_SEND_VTB);
						 creditrecordDao.addRecord(creditrecord);
						 String str1 = list.get(0).getTel();
						 userDao.updateByPhone(volunteerId, str1);
					 }
				 }
			 }catch(YichuangException e){
			     e.printStackTrace();
			     throw new YichuangException(1,"审核失败");
			 }catch(Exception e){
			     e.printStackTrace();
			 }
		}
		return integer;
	}

	
	/**
	 * 组织审核志愿者
	 */
	@Transactional
	public Integer groupShenHe(Volunteers volunteer) throws YichuangException {
		String vid = volunteer.getId();
		if(StringUtils.isEmpty(vid)){
			throw new YichuangException(1,"志愿者id为空");
		}
		Integer integer = volunteersDao.groupShenHe(volunteer);
//		List<Volunteers> list = volunteersDao.getVolunById(vid);
//		if(list != null){
//			Integer integer2 = userDao.updateByVid(list.get(0).getGroupId(), vid);
//			if(integer2 > 0){
//				return integer;
//			}
//		}
		return integer;
	}

	
	
	/**
	 * 获取组织未审核志愿者
	 */
	public PageInfo<Volunteers> findVolunByGroupCheck(Integer pageNo,
			Integer pageSize,Volunteers volunteer) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.startPage(pageNo, pageSize);
		
		List<Volunteers> list = volunteersDao.findVolunByGroupCheck(volunteer);
		
		PageInfo<Volunteers> pageInfo = new PageInfo<Volunteers>(list);
		
		return pageInfo;
	}

	
	/**
	 * 官方未审核志愿者
	 * */
	public PageInfo<Volunteers> findVolunByStatus(Integer pageNo,Integer pageSize,Volunteers volunteer) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.startPage(pageNo,pageSize);
		
		List<Volunteers> list = volunteersDao.findVolunByStatus(volunteer);
		PageInfo<Volunteers> pageInfo = new PageInfo<Volunteers>(list);
		
		return pageInfo;
	}

	
	
	/**
	 * 根据志愿者id查询志愿者
	 * @param id：主键id
	 * @return
	 */
	public List<Volunteers> getVolunById(String id){
		return volunteersDao.getVolunById(id);
	}

	/**
	 *  组织查询待审核加入活动志愿者   LH
	 */
	@Override
	public List<Volunteers> getVolByIscalc() {
		return volunteersDao.getVolByIscalc();
	}

	/**
	 * 获取志愿者根据参与活动数排行
	 */
	@Override
	public PageInfo<Volunteers> getMostCam(Integer pageNo, Integer pageSize) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.orderBy("campaignTotal desc");
		PageHelper.startPage(pageNo,pageSize);
		List<Volunteers> list = volunteersDao.getRankingVolun();
		PageInfo<Volunteers> pageInfo = new PageInfo<Volunteers>(list);
		return pageInfo;
	}

	/**
	 * 获取志愿者根据注册时间排行
	 */
	@Override
	public PageInfo<Volunteers> getNewVolun(Integer pageNo, Integer pageSize) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.orderBy("createdAt desc");
		PageHelper.startPage(pageNo, pageSize);
		List<Volunteers> list = volunteersDao.getRankingVolun();
		PageInfo<Volunteers> pageInfo = new PageInfo<Volunteers>(list);
		return pageInfo;
	}

	/**
	 * 获取全部志愿者
	 */
	@Override
	public PageInfo<Volunteers> getAllVolun(Integer pageNo, Integer pageSize) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.startPage(pageNo, pageSize);
		List<Volunteers> list = volunteersDao.getRankingVolun();
		PageInfo<Volunteers> pageInfo = new PageInfo<Volunteers>(list);
		return pageInfo;
	};
	
	/**
	 * 获取志愿者列表
	 */
	public PageInfo<Volunteers> getVolunList(Integer pageNo,Integer pageSize,Volunteers volunteer){
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.startPage(pageNo, pageSize);
		List<Volunteers> list = volunteersDao.getVolun(volunteer);
		PageInfo<Volunteers> pageInfo = new PageInfo<Volunteers>(list);
		return pageInfo;
	}
	
	
	/**
	 * 官网志愿者注册 LH
	 * @param volunteers
	 */
	public Integer reVol(Volunteers volunteers){
		return volunteersDao.saveVolunteers(volunteers);
	}

	
	/**
	 * 更新志愿者信息
	 */
	@Override
	public void updateVolunInfo(Volunteers volunteers) {
		volunteersDao.updateVolunInfo(volunteers);
	}

	
	/**
	 * 根据id获取志愿者当前名次
	 */
	@Override
	public Integer getRngkingById(String id) {
		return volunteersDao.getRankingById(id);
	};
	
	/**
	 * 获取志愿者列表
	 * @param volunteer
	 * @return
	 */
	public List<Volunteers> getVolun(Volunteers volunteer){
		return volunteersDao.getVolun(volunteer);
	}
	
	/**
	 * 根据志愿者id获取参加活动的信息
	 */
	public PageInfo<Campaigns> getAllCampaignsById(Integer pageNo,Integer pageSize,Volunteers volunteer) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.startPage(pageNo, pageSize);
		List<Campaigns> lists = volunteersDao.getAllCampaignsById(volunteer);
		return new PageInfo<Campaigns>(lists);
	};
	
	
}
