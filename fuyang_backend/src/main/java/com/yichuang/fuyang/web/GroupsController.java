package com.yichuang.fuyang.web;

import java.io.File;
import java.sql.Timestamp;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.disk.DiskFileItem;
import org.apache.commons.net.ftp.FTPClient;
import org.apache.ibatis.annotations.Param;
import org.apache.log4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.entity.Campaigns;
import com.yichuang.fuyang.entity.Groups;
import com.yichuang.fuyang.entity.User;
import com.yichuang.fuyang.service.GroupsService;
import com.yichuang.fuyang.service.PropertyService;
import com.yichuang.fuyang.service.UserService;
import com.yichuang.fuyang.util.DefaultResponse;
import com.yichuang.fuyang.util.FTPUtil;
import com.yichuang.fuyang.util.JsonResult;
import com.yichuang.fuyang.util.Utils;
import com.yichuang.fuyang.util.YCConstants;

@Controller
@RequestMapping("/groups")
public class GroupsController {
	
	
	static Logger logger = Logger.getLogger(GroupsController.class);
	
	@Autowired
	private  PropertyService propertyService;
	
	@Autowired
	private GroupsService groupsService;
	
	
	@Autowired
	private UserService userService;
	
	/**
	 * 组织排行
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	@RequestMapping("/getRankingGroups")
	@ResponseBody
	public JsonResult<PageInfo<Groups>> getRankingGroups(Integer pageNo,Integer pageSize,String keyParams){
		
		JsonResult<PageInfo<Groups>> result = null;
		try{
			JsonResult<PageInfo<Groups>> checkResult = Utils.checkKeyParams(propertyService.KEY, keyParams);
			
			if(checkResult != null){
				result = checkResult;
			}else{
				PageInfo<Groups> page = groupsService.getRankingGroups(pageNo, pageSize);
				result = new JsonResult<PageInfo<Groups>>(page);
			}
			return result ;
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<PageInfo<Groups>>(DefaultResponse.QUERY_ERROR,null);
		}
	}
	
	/**
	 * 根据组织名称搜索组织
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	@RequestMapping("search")
	@ResponseBody
	public JsonResult<PageInfo<Groups>> search(Integer pageNo,Integer pageSize,String name){
		if(StringUtils.isEmpty(name)){
			return new JsonResult<PageInfo<Groups>>(DefaultResponse.PARAM_NULL_ERROR,null);
		}
		try {
			PageInfo<Groups> pageInfo = groupsService.search(pageNo, pageSize, name);
			return new JsonResult<PageInfo<Groups>>(pageInfo);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<PageInfo<Groups>>(DefaultResponse.QUERY_ERROR,null);
		}
	}
	/**
	 * 根据组织名称或类型获得组织列表
	 * @param pageNo
	 * @param pageSize
	 * @param name
	 * @param groupType
	 * @param keyParams
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping("getGroupListByTypeOrName")
	@ResponseBody
	public JsonResult<PageInfo<Groups>> getGroupListByTypeOrName(Integer pageNo,Integer pageSize,String name,String groupType,String keyParams){
		JsonResult<PageInfo<Groups>> result = null;
		try {
			JsonResult<PageInfo<Groups>> checkResult = Utils.checkKeyParams(groupType+propertyService.KEY, keyParams);
			if(checkResult != null){
				result = checkResult;
			}else{
				PageInfo<Groups> list = groupsService.getGroupListByTypeOrName(pageNo, pageSize, name, groupType);
				result = new JsonResult<PageInfo<Groups>>(list);
			}
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<PageInfo<Groups>>(DefaultResponse.QUERY_ERROR,null);
		}
	}
	
	/**
	 * 根据id获取组织详情
	 * @param id
	 * @return
	 */
	@RequestMapping("/getGroupById")
	@ResponseBody
	public JsonResult<List<Groups>> getGroupsInfo(String id,String keyParams){
		JsonResult<List<Groups>> result = null;
		try {
			JsonResult<List<Groups>> checkResult = Utils.checkKeyParams(id+propertyService.KEY, keyParams);
			if(checkResult != null){
				result = checkResult;
			}else{
				List<Groups> list = groupsService.getGroupById(id);
				result = new JsonResult<List<Groups>>(list);
			}
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<List<Groups>>(DefaultResponse.QUERY_ERROR,null);
		}
	}
	
	/**
	 * 根据组织id更新组织热门度
	 * @param id
	 * @return
	 */
	@RequestMapping("updateRecommend")
	@ResponseBody
	public JsonResult<String> updateRecommend(String id,String keyParams){
		
		if(id == null || id.trim() == ""){
			return new JsonResult<String>(DefaultResponse.PARAM_NULL_ERROR,null);
		}
		JsonResult checkJsonResult = Utils.checkKeyParams(id+propertyService.KEY, keyParams);
		if(checkJsonResult != null){
			return checkJsonResult;
		}
		try {
			Integer integer = groupsService.updateRecommend(id);
			if(integer > 0){
				return new JsonResult<String>(DefaultResponse.SUCCESS,null);
			}
			return new JsonResult<String>(DefaultResponse.OPERATE_ERROR,null);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<String>(DefaultResponse.OPERATE_ERROR,null);
		}
	}
	
//	/**
//	 * 组织注册
//	 * @param httpServletRequest
//	 * @param groups
//	 * @param result
//	 * @return
//	 */
//	@RequestMapping(value="saveGroups")
//	@ResponseBody
//	public JsonResult<Groups> saveGroupsInfo(HttpServletRequest httpServletRequest,@Valid Groups groups,BindingResult result) {
//		
//		
//		if(!(httpServletRequest instanceof MultipartHttpServletRequest)){
//			logger.info("请求方式错误----->"+httpServletRequest.getMethod());
//			return new JsonResult<Groups>(1,"请求方式错误",null);
//		}
//		if(result.getErrorCount()>0){
//			for (FieldError error : result.getFieldErrors()) {
//				logger.info("信息验证不通过----->"+error.getField()+":"+error.getDefaultMessage());
//			}
//			return new JsonResult<Groups>(1,"请填写完整信息",null);
//		}
//		MultipartHttpServletRequest request = (MultipartHttpServletRequest)httpServletRequest;
//		CommonsMultipartFile filed = (CommonsMultipartFile) request.getFile("filed_");
//		CommonsMultipartFile imageUrl = (CommonsMultipartFile) request.getFile("imageUrl_");
//		Map<String, Object> connectReturnMap = null;
//		FTPClient ftp = null;
//
//		if(filed==null){
//			logger.info("文档未上传-----> filed字段");
//			return new JsonResult<Groups>(1,"请上传文档",null);
//		}
//		if(imageUrl==null){
//			logger.info("文档未上传-----> imageUrl字段");
//			return new JsonResult<Groups>(1,"请上传图片",null);
//		}
//		
//		//图片正则表达式
//		String reg = ".+(.JPEG|.jpeg|.JPG|.jpg|.GIF|.gif|.BMP|.bmp|.PNG|.png|.pdf)$";
//		boolean Filedflag = checkeFile(reg,filed.getOriginalFilename());
//		String reg2 = ".+(.JPEG|.jpeg|.JPG|.jpg|.GIF|.gif|.BMP|.bmp|.PNG|.png)$";
//		boolean imageUrlflag = checkeFile(reg2,imageUrl.getOriginalFilename());
//		if(!(Filedflag&&imageUrlflag)){
//			logger.info("-----------上传文档格式错误----- ");
//			return new JsonResult<Groups>(1, "请上传正确的数据格式", null);
//		}
//		
//		String pwd = groups.getPwd();
//		String pwdmd5 = Utils.md5salt(pwd);
//		groups.setPwd(pwdmd5);
//		groups.setCreatedAt(new Timestamp(System.currentTimeMillis()));
//		groups.setRegistrationDate(new Timestamp(System.currentTimeMillis()));
//		groups.setUpdatedAt(new Timestamp(System.currentTimeMillis()));
//		
//		DiskFileItem fi = (DiskFileItem) filed.getFileItem();
//		File fileFrom = fi.getStoreLocation();
//		try {
//			connectReturnMap = FTPUtil.connect(propertyService.REMOTE_IMAGE_FOLDER, propertyService.REMOTE_IMAGE_IP,
//					propertyService.REMOTE_IMAGE_PORT, propertyService.REMOTE_IMAGE_USERNAME,
//					propertyService.REMOTE_IMAGE_PASSWORD);
//			if(connectReturnMap != null && (boolean)connectReturnMap.get("connectFlag")){
//				ftp = (FTPClient) connectReturnMap.get("FTPClient");
//				FTPUtil.upload(fileFrom, fi.getName(),ftp);
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//		String filedOldName = filed.getOriginalFilename();
//		String serverPath = propertyService.REMOTE_IMAGE_FOLDER + filedOldName;
//		groups.setFiled(serverPath);
//		
//		DiskFileItem fj = (DiskFileItem) imageUrl.getFileItem();
//		File imageFrom = fj.getStoreLocation();
//		try {
//			connectReturnMap = FTPUtil.connect(propertyService.REMOTE_IMAGE_FOLDER, propertyService.REMOTE_IMAGE_IP,
//					propertyService.REMOTE_IMAGE_PORT, propertyService.REMOTE_IMAGE_USERNAME,
//					propertyService.REMOTE_IMAGE_PASSWORD);
//			if(connectReturnMap != null && (boolean)connectReturnMap.get("connectFlag")){
//				ftp = (FTPClient) connectReturnMap.get("FTPClient");
//				FTPUtil.upload(imageFrom, fj.getName(),ftp);
//			}
//		} catch (Exception e) {
//			e.printStackTrace();
//		}
//			String imageOldName = imageUrl.getOriginalFilename();
//			String serverPath1 = propertyService.REMOTE_IMAGE_FOLDER + imageOldName;
//			groups.setImageUrl(serverPath1);
//		try{
//			groupsService.saveGroup(groups);
//			return new JsonResult<Groups>(0, "提交成功,请等待审核", groups);
//		} catch (Exception e) {
//			e.printStackTrace();
//			logger.error("------------->"+e.getMessage());
//		}
//		return new JsonResult<Groups>(1, "提交失败", groups);
//	}
	
	/**
	 * 组织上传证件照
	 * @param file
	 * @param request
	 * @param response
	 * @param keyParams
	 * @return
	 */
	@RequestMapping("/registPic")
	@ResponseBody
	public JsonResult<String> registPic(MultipartFile file, HttpServletRequest request, HttpServletResponse response){
		
		CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(
				request.getSession().getServletContext());
		// 判断request是否存在附件
		if (multipartResolver.isMultipart(request)) {
			
			Map<String, Object> connectReturnMap = null;
			FTPClient ftp = null;

			// 转换成多部分request
			MultipartHttpServletRequest multRequest = (MultipartHttpServletRequest) request;
			Iterator<String> iter = multRequest.getFileNames();
			while (iter.hasNext()) {

				// 根据上传文件名称获取上传的文件
				MultipartFile file1 = multRequest.getFile(iter.next());
				
				// 将MultipartFile 转为 File
				CommonsMultipartFile cf = (CommonsMultipartFile) file1;
				DiskFileItem fi = (DiskFileItem) cf.getFileItem();
				File fileFrom = fi.getStoreLocation();
				String systFileName = UUID.randomUUID().toString()+"."+Utils.getFileSuffix(fi.getName());
				try {
					connectReturnMap = FTPUtil.connect(propertyService.REMOTE_IMAGE_ORGANIZATIONS, propertyService.REMOTE_IMAGE_IP,
							propertyService.REMOTE_IMAGE_PORT, propertyService.REMOTE_IMAGE_USERNAME,
							propertyService.REMOTE_IMAGE_PASSWORD);
					if(connectReturnMap != null && (boolean)connectReturnMap.get("connectFlag")){
						ftp = (FTPClient) connectReturnMap.get("FTPClient");
						FTPUtil.upload(fileFrom, systFileName,ftp);
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
				//图片访问路径
				String serverPath = propertyService.OFFICIAL_SITE+propertyService.REMOTE_IMAGE_ORGANIZATIONS_LOOK + systFileName;
				return new JsonResult<String>(DefaultResponse.SUCCESS,serverPath);
				
			}
		}
		return new JsonResult<String>(DefaultResponse.INSERT_ERROR,null);
	}
	
	/**
	 * 组织注册
	 * @param file
	 * @param request
	 * @param response
	 * @param volunteers
	 * @param uid
	 * @param keyParams
	 * @return
	 */
	@RequestMapping("registGroup")
	@ResponseBody
	public JsonResult<String> registVol(Groups groups){
		Timestamp timestamp = new Timestamp(System.currentTimeMillis());
		
		String groupId = UUID.randomUUID().toString();
		groups.setId(groupId);
		groups.setCreatedAt(timestamp);
		groups.setUpdatedAt(timestamp);
		groups.setVolTotal(1);
		String password = Utils.md5salt(groups.getPwd());
		groups.setPwd(password);
		groups.setCampaignCount(0);
		try {
			userService.saveUser(groups.getUid(), groups.getPwd(),null, groupId);
			groups.setStatus(YCConstants.AUDIT_NOAUDIT);
			groupsService.saveGroup(groups);
			return new JsonResult<String>(DefaultResponse.SUCCESS,null);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<String>(DefaultResponse.INSERT_ERROR,null);
		}
	}
	
	/**
	 * 管理员查询待审核组织 LH
	 * @param groups  --status checkBy
	 * @return
	 */
	@SuppressWarnings({ "unchecked", "rawtypes", "unused" })
	@RequestMapping("/unreviewedGroups")
	@ResponseBody
	public JsonResult<PageInfo<Groups>> getGroupsByStatus(Integer pageNo,Integer pageSize,Groups group,String keyParams){
		JsonResult<PageInfo<Groups>> result = null;
		try{
			JsonResult checkJsonResult = Utils.checkKeyParams(propertyService.KEY, keyParams);
			if(checkJsonResult != null){
				return checkJsonResult;
			}
			
			//如果传入页面为空 则设置为默认
			pageNo = pageNo == null ? 1 : pageNo;
			pageSize = pageSize == null?10 : pageSize;
			PageHelper.startPage(pageNo,pageSize);
			
			//查询未审核组织
			List<Groups> list = groupsService.getGroupsByStatus(group);
			PageInfo<Groups> page =new PageInfo<Groups>(list);
			
			return new JsonResult<PageInfo<Groups>>(page);
		}catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<PageInfo<Groups>>(DefaultResponse.OPERATE_ERROR,null);
		}
	};
	
	/**
	 * 管理员审核待审核组织 LH
	 * @param groups
	 * @return
	 * 
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping("/reviewedGroups")
	@ResponseBody
	public JsonResult<Integer> updateGroupsStatus(String auditStatus,String notes,String id,String keyParams){
		JsonResult<Integer> result = null;
		
		try{
			//验证keyParams
			JsonResult<Integer> checkResult = Utils.checkKeyParams(id+propertyService.KEY, keyParams);
			if(checkResult != null){
				result = checkResult;
			}
			
			//判断id是否为空
			if(StringUtils.isEmpty(id)){
				return  new JsonResult<Integer>(DefaultResponse.PARAM_NULL_ERROR,null);
			}
			Timestamp timestamp = new Timestamp(System.currentTimeMillis());
			Groups groups = new Groups();
			groups.setId(id);
			groups.setUpdatedAt(timestamp);
			groups.setNotes(notes);
			groups.setStatus(auditStatus);
			//审核组织
			int i = groupsService.updateGroupsStatus(groups);
				List<Groups> list = groupsService.getGroupById(id);
				if(list != null && list.size() > 0){
					Groups userGroup = list.get(0);
					User user = new User();
					user.setPhone(userGroup.getUid());
					user.setType(YCConstants.USER_TYPE_GROUP);
					userService.updateUserType(user);
					return new JsonResult<Integer>(DefaultResponse.SUCCESS,null);
			}
		}catch (Exception e) {
			e.printStackTrace();
			return new  JsonResult<Integer>(DefaultResponse.OPERATE_ERROR,null);
		}
		return result;
	};

	
	

	
	private boolean checkeFile(String reg,String fileName) {
		Pattern pattern = Pattern.compile(reg);
		Matcher matcher = pattern.matcher(fileName);
		boolean matches = matcher.matches();
		logger.info("正则校验结果---->"+matches);
		return matches;
	}
	
	/**
	 * 根据组织类型获取组织列表
	 * @param groupType
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	@RequestMapping("findGroupListByType")
	@ResponseBody
	public JsonResult<PageInfo<Groups>> findGroupListByType(String groupType,Integer pageNo,Integer pageSize){
		try {
			if(StringUtils.isEmpty(groupType)){
				return new JsonResult<PageInfo<Groups>>(DefaultResponse.PARAM_NULL_ERROR,null);
			}
			pageNo = pageNo == null?1:pageNo;
			pageSize = pageSize == null?10:pageSize;
			PageInfo<Groups> pageInfo = groupsService.findGroupListByType(groupType, pageNo, pageSize);
			return new JsonResult<PageInfo<Groups>>(pageInfo);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<PageInfo<Groups>>(DefaultResponse.QUERY_ERROR,null);
		}
	}
	
	/**
	 * 获取热门组织
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	@RequestMapping("getRecommend")
	@ResponseBody
	public JsonResult<PageInfo<Groups>> getRecommend(Integer pageNo,Integer pageSize,String keyParams){
		JsonResult checkJsonResult = Utils.checkKeyParams(propertyService.KEY, keyParams);
		if(checkJsonResult != null){
			return checkJsonResult;
		}
		try {
			PageInfo<Groups> pageInfo = groupsService.getRecommendGroups(pageNo, pageSize);
			return new JsonResult<PageInfo<Groups>>(pageInfo);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<PageInfo<Groups>>(DefaultResponse.QUERY_ERROR,null);
		}
	}
	
	/**
	 * 最新
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	@RequestMapping("newGroup")
	@ResponseBody
	public JsonResult<PageInfo<Groups>> newGroup(Integer pageNo,Integer pageSize){
		try {
			PageInfo<Groups> pageInfo = groupsService.newGroup(pageNo, pageSize);
			return new JsonResult<PageInfo<Groups>>(pageInfo);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<PageInfo<Groups>>(DefaultResponse.QUERY_ERROR, null);
		}
	}
	
	/**
	 * 获取所有组织
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	@RequestMapping("allGroups")
	@ResponseBody
	public JsonResult<PageInfo<Groups>> allGroups(Integer pageNo,Integer pageSize){
		try {
			PageInfo<Groups> pageInfo = groupsService.getAllGroups(pageNo, pageSize);
			return new JsonResult<PageInfo<Groups>>(pageInfo);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<PageInfo<Groups>>(DefaultResponse.QUERY_ERROR,null);
		}
	}
	
	/**
	 * 人数最多
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	@RequestMapping("mostVol")
	@ResponseBody
	public JsonResult<PageInfo<Groups>> mostVol(Integer pageNo,Integer pageSize){
		try {
			PageInfo<Groups> pageInfo = groupsService.volTotal(pageNo, pageSize);
			return new JsonResult<PageInfo<Groups>>(pageInfo);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<PageInfo<Groups>>(DefaultResponse.QUERY_ERROR,null);
		}
	}
	/**
	 * 根据组织id获取活动详情列表
	 * @param pageNo
	 * @param pageSize
	 * @param id
	 * @param keyParams
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping("getCampaignListByGroupId")
	@ResponseBody
	public JsonResult<PageInfo<Campaigns>> getCampaignListByGroupId(Integer pageNo,Integer pageSize,String id,String keyParams){
		JsonResult<PageInfo<Campaigns>> checkJsonResult = Utils.checkKeyParams(id+propertyService.KEY, keyParams);
		if(checkJsonResult != null){
			return checkJsonResult;
		}
		if(StringUtils.isEmpty(id)){
			return new JsonResult<PageInfo<Campaigns>>(DefaultResponse.PARAM_NULL_ERROR, null);
		}else{
			PageInfo<Campaigns> pageInfo = groupsService.getCampaignListByGroupId(pageNo, pageSize, id);
			return new JsonResult<PageInfo<Campaigns>>(pageInfo);
		}
	}
	
	/**
	 * 根据id更新组织信息
	 * @param groups
	 * @return
	 */
	@RequestMapping("updateGroupbyId")
	@ResponseBody
	public JsonResult<String> updateGroupById(Groups groups){
		if(StringUtils.isEmpty(groups.getId())){
			return new JsonResult<String>(DefaultResponse.PARAM_NULL_ERROR,null);
		}
		try {
			groups.setStatus(YCConstants.AUDIT_NOAUDIT);
			groupsService.updateGroupById(groups);
			return new JsonResult<String>(DefaultResponse.SUCCESS,null);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<String>(DefaultResponse.UPDATE_ERROR,null);
		}
	}
}
