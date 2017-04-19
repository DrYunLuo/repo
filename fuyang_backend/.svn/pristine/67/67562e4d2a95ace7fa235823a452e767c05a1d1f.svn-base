package com.yichuang.fuyang.web;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import javax.servlet.http.HttpSession;

import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import com.yichuang.fuyang.entity.Accounts;
import com.yichuang.fuyang.entity.Creditrecord;
import com.yichuang.fuyang.entity.Donatrecord;
import com.yichuang.fuyang.entity.User;
import com.yichuang.fuyang.entity.Volunteers;
import com.yichuang.fuyang.service.AccountService;
import com.yichuang.fuyang.service.CreditrecordService;
import com.yichuang.fuyang.service.PropertyService;
import com.yichuang.fuyang.service.UserService;
import com.yichuang.fuyang.service.VolunteersService;
import com.yichuang.fuyang.service.YichuangException;
import com.yichuang.fuyang.util.DefaultResponse;
import com.yichuang.fuyang.util.JsonResult;
import com.yichuang.fuyang.util.Utils;
import com.yichuang.fuyang.util.YCConstants;
/**
 * 个人账户相关信息操作
 * 涉及表:accounts
 */
@Controller
@RequestMapping("account")
public class AccountController {
	
	@Autowired
	private AccountService accountService;
	
	@Autowired
	private PropertyService propertyService;
	
	@Autowired
	private CreditrecordService creditrecordService;
	
	@Autowired
	private UserService userService;
	
	@Autowired
	private VolunteersService volunteersService;
	
	static Logger logger = Logger.getLogger(AccountController.class);
	
	
	/**
	 * 捐步功能
	 * 根据 步数/志愿者id/ 执行
	 * @param accounts
	 * @return
	 */
	@RequestMapping("donateStep")
	@ResponseBody
	public JsonResult<Accounts> donateStep(HttpSession session,String token,String volunteerId,@RequestParam(defaultValue="0")Integer currentStep,String keyParams){
		JsonResult<Accounts> result = null;
		try {
			JsonResult<Accounts> checkResult = Utils.checkKeyParams(volunteerId+currentStep+propertyService.KEY, keyParams);
			if(checkResult != null){
				result = checkResult;
			}else if(session.getAttribute(token ) == null){
				result = new JsonResult<Accounts>(1,"会话失效，请退出重新登录",null);
			}else if(5000>currentStep){
				logger.info("步数未达到上传基本要求");
				result = new JsonResult<Accounts>(1, "步数未达到要求-->5000",null);
			}else{
				Accounts accounts = accountService.donateStep(volunteerId,currentStep);
				result = new JsonResult<Accounts>(0, "ok", accounts);
			}
			return result;
		} catch (Exception e) {
			logger.error("步数捐赠失败："+e.getMessage());
			return new JsonResult<Accounts>(1, e.getMessage(),null);
		}
	}
	
	
	/**
	 * 签到
	 * @param volunteerId
	 * @param token
	 * @param session
	 * @return
	 */
	@RequestMapping("/signin")
	@ResponseBody
	public JsonResult<Void> signin(String volunteerId,String token,String keyParams){
		JsonResult<Void> checkResult= Utils.checkKeyParams(volunteerId+propertyService.KEY, keyParams);
		if(checkResult != null){
			return checkResult;
		}
		
		User user = new User();
		user.setVolunteerId(volunteerId);
		
		List<User> list = userService.getUserByID(volunteerId);
		if(list != null && list.size() > 0){
			if(!list.get(0).getToken().equals(token)){
				return new JsonResult<Void>(DefaultResponse.TOKEN_NULL_ERROR,null);
			}
		}
		try {
				accountService.signin(volunteerId);
				return new JsonResult<Void>(0,"签到成功",null);
			
		} catch (YichuangException e) {
			e.printStackTrace();
			return new JsonResult<Void>(e.getField(),e.getMessage(),null);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<Void>(1,"签到失败",null);
		}
	}
	
	
	/**
	 * 判断志愿者是否已经签到
	 * @param volunteerId
	 * @return
	 */
	@RequestMapping("signon")
	@ResponseBody
	public JsonResult<String> signon(String volunteerId,String keyParams){
		JsonResult<String> result = null;
		try {
			JsonResult<String> checkResult = Utils.checkKeyParams(volunteerId+propertyService.KEY, keyParams);
			if(checkResult != null){
				result = checkResult;
			}else {
				String string = accountService.signon(volunteerId);
				result = new JsonResult<String>(0,string,null);
			}
			return result;
		} catch (Exception e) {
			return new JsonResult<String>(1,"获取信息失败",null);
		}
	}
	
	
	/**
	 * 查询最近7天的步数
	 * @param volunteerId
	 * @param token
	 * @param session
	 * @return
	 */
	@RequestMapping("/sevenDay")
	@ResponseBody
	public JsonResult<String> sevenDay(String volunteerId,String token,String keyParams){
		JsonResult<String> checkResult = Utils.checkKeyParams(volunteerId+propertyService.KEY, keyParams);
		if(checkResult != null){
			return checkResult;
		}
		
		User user = new User();
		user.setVolunteerId(volunteerId);
		
		List<User> list = userService.getUserByVolunId(user);
		if(list != null && list.size() > 0){
			if(!list.get(0).getToken().equals(token)){
				return new JsonResult<String>(DefaultResponse.TOKEN_NULL_ERROR,null);
			}
		}
		try {
				String sevenString = this.accountService.findSenvenDay(volunteerId);
				return new JsonResult<String>(1, "成功", sevenString);
			
		} catch (Exception e) {
			logger.error("查询失败",e);
			return new JsonResult<String>(1, "失败", null);
		}
	}
	
	
	/**
	 * 捐赠积分
	 * @param vid
	 * @param cid
	 * @return
	 */
	@RequestMapping("/juan")
	@ResponseBody
	public JsonResult<String> lovingHeart(String vid,String cid,String credit,String keyParams){
		JsonResult<String> result = null;
		Double double1 = Double.parseDouble(credit); 
		try {
			JsonResult<String> checkResult = Utils.checkKeyParams(vid+cid+credit+propertyService.KEY, keyParams);
			if(checkResult != null){
				result = checkResult;
			}else {
				accountService.lovingHeart(vid, cid, double1);
				result = new JsonResult<String>(0,"捐赠成功",null);
			}
			return result;
		} catch (YichuangException e) {
			e.printStackTrace();
			return new JsonResult<String>(e.getField(),e.getMessage(),null);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<String>(1,"捐赠失败",null);
		}
	}
	
	
	/**
	 * 获取个人积分
	 * @param vid
	 * @return
	 */
	@RequestMapping("/getCredit")
	@ResponseBody
	public JsonResult<Accounts> getCredit(String vid,String keyParams){
		JsonResult<Accounts> result = null;
		try {
			JsonResult<Accounts> checkResult = Utils.checkKeyParams(vid+propertyService.KEY, keyParams);
			if(checkResult != null){
				result = checkResult ;
			}else {
				Accounts accounts = accountService.getCredit(vid);
				result = new JsonResult<Accounts>(accounts);
			}
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<Accounts>(1,"获取信息失败",null);
		}
	}
	
	/**
	 * 更新积分
	 * @param accounts
	 * @return
	 */
	@RequestMapping("updateByMissing")
	@ResponseBody
	public JsonResult<?> updateByMissing(String volunteerId,String type){
		if(volunteerId == null || volunteerId.trim() == ""){
			return new JsonResult<String>(DefaultResponse.PARAM_NULL_ERROR,null);
		}
		Creditrecord creditrecord = new Creditrecord();
		long time = System.currentTimeMillis();
		Timestamp timestamp = new Timestamp(time);
		creditrecord.setId(UUID.randomUUID().toString());
		creditrecord.setTime(timestamp);
		creditrecord.setVolunteerId(volunteerId);
		try {
			Accounts accounts = new Accounts();
			if(type.trim() == "signin" || type.equals("signin")){
				accounts.setVolunteerId(volunteerId);
				accounts.setCredit(propertyService.ACCOUNT_SIGNIN);
				accounts.setUpdatedAt(timestamp);
				accountService.updateByMissing(accounts);
				creditrecord.setCreditrecord("签到成功，获得"+propertyService.ACCOUNT_SIGNIN+"VT币");
				creditrecordService.addRecord(creditrecord);
				return new JsonResult<String>(DefaultResponse.SUCCESS,null);
			}
			if(type.trim() == "shareCam" || type.equals("shareCam")){
				accounts.setVolunteerId(volunteerId);
				accounts.setCredit(propertyService.ACCOUNT_SHARECAM);
				accounts.setUpdatedAt(timestamp);
				accountService.updateByMissing(accounts);
				creditrecord.setCreditrecord("分享活动成功,获得"+propertyService.ACCOUNT_SHARECAM+"VT币");
				creditrecordService.addRecord(creditrecord);
				return new JsonResult<String>(DefaultResponse.SUCCESS,null);
			}
			if(type.trim() == "shareApp" || type.equals("shareApp")){
				accounts.setVolunteerId(volunteerId);
				accounts.setCredit(propertyService.ACCOUNT_SHAREAPP);
				accounts.setUpdatedAt(timestamp);
				accountService.updateByMissing(accounts);
				creditrecord.setCreditrecord("分享APP成功,获得"+propertyService.ACCOUNT_SHAREAPP+"VT币");
				creditrecordService.addRecord(creditrecord);
				return new JsonResult<String>(DefaultResponse.SUCCESS,null);
			}
			if(type.trim() == "taskfinished" || type.equals("taskfinished")){
				accounts.setVolunteerId(volunteerId);
				accounts.setCredit(propertyService.ACCOUNT_TAST);
				accounts.setUpdatedAt(timestamp);
				accountService.updateByMissing(accounts);
				creditrecord.setCreditrecord("完成今日任务,获得"+propertyService.ACCOUNT_TAST+"VT币");
				creditrecordService.addRecord(creditrecord);
				return new JsonResult<String>(DefaultResponse.SUCCESS,null);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<String>(DefaultResponse.OPERATE_ERROR,null);
		}
		return new JsonResult<String>(DefaultResponse.OPERATE_ERROR,null);
	}
	
	/**
	 * 捐赠物品
	 * @param volunteerId	志愿者Id
	 * @param goodsCode		物品条形码
	 * @param keyParams		
	 * @return
	 */
	@RequestMapping("donateGoods")
	@ResponseBody
	public JsonResult<List<Volunteers>> donateGoods(String volunteerId,String goodsCode,String keyParams){
		JsonResult<List<Volunteers>> result = null;
		
		if(StringUtils.isEmpty(volunteerId) || StringUtils.isEmpty(goodsCode) || StringUtils.isEmpty(keyParams)){
			return new JsonResult<List<Volunteers>>(DefaultResponse.PARAM_NULL_ERROR,null);
		}
		
		try {
			JsonResult<List<Volunteers>> checkResult = Utils.checkKeyParams(volunteerId+propertyService.KEY, keyParams);
			if(checkResult != null){
				result = checkResult ;
			}else {
				List<Volunteers> list = volunteersService.getVolunById(volunteerId);
				if(list == null || list.size() <= 0){
					return new JsonResult<List<Volunteers>>(1,"志愿者信息不存在",null);
				}
				//验证上次捐赠时间是否符合间隔时间
				Accounts accounts1 = accountService.getCredit(volunteerId);
				if(accounts1 != null){
					Date lastUpdate = accounts1.getUpdatedAt();
					Date nowTime = new Date();
//					long lastUpdateTime = lastUpdate.getTime();
//					long nowTime = System.currentTimeMillis();
//					
//					if((nowTime <= lastUpdateTime) || ((nowTime - lastUpdateTime) / 1000 <= YCConstants.DONATE_GOODS_TIME_LIMIT)){
//						return new JsonResult<List<Volunteers>>(1,"捐赠时间间隔限制",null);
//					}
					SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
					
					if(!sdf.format(lastUpdate).equals(sdf.format(nowTime))){//不是同一天重置donatCredit
						Integer rs = accountService.resetDonatCredit(volunteerId);
						if(rs > 0){
							accounts1.setDonatCredit(0);
						}
					}
					
					int donatCredit = accounts1.getDonatCredit();
					if(donatCredit >= YCConstants.DONATE_GOODS_VTB_LIMIT){
						return new JsonResult<List<Volunteers>>(1,"今日捐赠获得积分已达上限",null);
					}
					
				}else{
					return new JsonResult<List<Volunteers>>(1,"个人账户不存在",null);
				}
				
				Creditrecord creditrecord = new Creditrecord();
				long time = System.currentTimeMillis();
				Timestamp timestamp = new Timestamp(time);
				creditrecord.setId(UUID.randomUUID().toString());
				creditrecord.setTime(timestamp);
				creditrecord.setVolunteerId(volunteerId);
				
				Accounts accounts = new Accounts();
				accounts.setVolunteerId(volunteerId);
				accounts.setCredit(YCConstants.DONATE_GOODS_SEND_VTB);
				accounts.setUpdatedAt(timestamp);
				accounts.setDonatCredit(YCConstants.DONATE_GOODS_SEND_VTB);
				
				Donatrecord donatrecord = new Donatrecord();
				donatrecord.setId(UUID.randomUUID().toString());
				donatrecord.setVolunteerId(volunteerId);
				donatrecord.setCreatedTime(timestamp);
				donatrecord.setDonatTime(timestamp);
				donatrecord.setDonationAmount(YCConstants.DONATE_GOODS_SEND_VTB);
				donatrecord.setGoodsCode(goodsCode);
				donatrecord.setLeaveMessage("捐赠物品");
				
				accountService.updateByMissing(accounts);
				creditrecord.setCreditrecord("捐赠物品成功，获得"+YCConstants.DONATE_GOODS_SEND_VTB+"VT币");
				creditrecord.setVTValue(YCConstants.DONATE_GOODS_SEND_VTB);
				creditrecordService.addRecord(creditrecord);
				accountService.addDonatrecord(donatrecord);
				
				Integer ranking = volunteersService.getRngkingById(volunteerId);
				list.get(0).setRanking(ranking);
				
				Accounts accountsNew = accountService.getCredit(volunteerId);
				if(accountsNew != null){
					list.get(0).setCredit(accountsNew.getCredit());
				}
				
				return new JsonResult<List<Volunteers>>(list);
			}
			
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<List<Volunteers>>(DefaultResponse.OPERATE_ERROR,null);
		}finally {
			try {
				Thread.sleep(1000);
			} catch (InterruptedException e) {
				e.printStackTrace();
			}
		}
		return result;
	}
}
