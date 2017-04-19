package com.yichuang.fuyang.web;

import java.io.File;
import java.sql.Timestamp;
import java.util.Iterator;
import java.util.List;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.fileupload.disk.DiskFileItem;
import org.apache.commons.net.ftp.FTPClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.entity.PostAtomsbbs;
import com.yichuang.fuyang.entity.Postbbs;
import com.yichuang.fuyang.entity.Postbbsreplay;
import com.yichuang.fuyang.entity.Volunteers;
import com.yichuang.fuyang.service.PostAtomsbbsService;
import com.yichuang.fuyang.service.PostbbsService;
import com.yichuang.fuyang.service.PostbbsreplayService;
import com.yichuang.fuyang.service.PropertyService;
import com.yichuang.fuyang.service.VolunteersService;
import com.yichuang.fuyang.service.YichuangException;
import com.yichuang.fuyang.util.DefaultResponse;
import com.yichuang.fuyang.util.FTPUtil;
import com.yichuang.fuyang.util.JsonResult;
import com.yichuang.fuyang.util.Utils;
import com.yichuang.fuyang.util.YCConstants;
/**
 * 论坛功能
 */
@Controller
@RequestMapping("bbs")
public class PostbbsController {

	@Autowired
	private PostbbsService bbspostService;
	
	@Autowired
	private PropertyService propertyService;
	
	@Autowired
	private PostAtomsbbsService postAtomsbbsService;
	
	@Autowired
	private PostbbsreplayService postbbsreplayService;
	
	@Autowired
	private VolunteersService volunteersService;
		
	/**
	 * 获取论坛帖子
	 * @param type	论坛帖子类型
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	@RequestMapping("getPostList")
	@ResponseBody
	public JsonResult<PageInfo<Postbbs>> getPostList(String type,Integer pageNo,Integer pageSize,String keyParams){
		JsonResult checkJsonResult = Utils.checkKeyParams(type+propertyService.KEY, keyParams);
		if(checkJsonResult != null){
			return checkJsonResult;
		}
		if(type == null || type.trim() == ""){
			return new JsonResult<PageInfo<Postbbs>>(DefaultResponse.PARAM_NULL_ERROR,null);
		}
		try{
			PageInfo<Postbbs> pageInfo = bbspostService.getPostList(type, pageNo, pageSize);
			return new JsonResult<PageInfo<Postbbs>>(pageInfo);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<PageInfo<Postbbs>>(DefaultResponse.QUERY_ERROR,null);
		}
	}
	
	/**
	 * 根据标题搜索帖子
	 * @param title
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	@RequestMapping("search")
	@ResponseBody
	public JsonResult<PageInfo<Postbbs>> getPostByTitle(String title,Integer pageNo,Integer pageSize){
		try{
				PageInfo<Postbbs> pageInfo = bbspostService.getPostByTitle(title, pageNo, pageSize);
				return new JsonResult<PageInfo<Postbbs>>(pageInfo);
			
		} catch (YichuangException e) {
			e.printStackTrace();
			return new JsonResult<PageInfo<Postbbs>>(e.getField(),e.getMessage(),null);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<PageInfo<Postbbs>>(DefaultResponse.QUERY_ERROR,null);
		}
	}
	
	/**
	 * 根据id获取帖子
	 * @param id
	 * @return
	 */
	@RequestMapping("getPostById")
	@ResponseBody
	public JsonResult<Postbbs> getPostById(String id,String keyParams){
		JsonResult<Postbbs> result = null;
		try {
			JsonResult<Postbbs> checkResult = Utils.checkKeyParams(id+propertyService.KEY, keyParams);
			if(checkResult != null){
				result = checkResult;
			}else{
				Postbbs postbbs = bbspostService.getPostById(id);
				result = new JsonResult<Postbbs>(postbbs);
			}
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<Postbbs>(DefaultResponse.QUERY_ERROR,null);
		}
	}
	
	
	
	
	/**
	 * 帖子上传图片
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
					connectReturnMap = FTPUtil.connect(propertyService.REMOTE_IMAGE_POST, propertyService.REMOTE_IMAGE_IP,
							propertyService.REMOTE_IMAGE_PORT, propertyService.REMOTE_IMAGE_USERNAME,
							propertyService.REMOTE_IMAGE_PASSWORD);
					if(connectReturnMap != null && (boolean)connectReturnMap.get("connectFlag")){
						ftp = (FTPClient) connectReturnMap.get("FTPClient");
						FTPUtil.upload(fileFrom,systFileName,ftp);
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
				// 根据 name 获取上传的文件...
				String fileName = file1.getOriginalFilename();
				String serverPath = propertyService.OFFICIAL_SITE+propertyService.REMOTE_IMAGE_POST_LOOK + systFileName;
				return new JsonResult<String>(DefaultResponse.SUCCESS,serverPath);
				
			}
		}
		return new JsonResult<String>(DefaultResponse.INSERT_ERROR,null);
	}
		
	/**
	 * 发表帖子
	 * @param postbbs
	 * @return
	 */
	@RequestMapping("savePost")
	@ResponseBody
	public JsonResult<String> savePost(Postbbs postbbs){
		try {
			if(postbbs == null || StringUtils.isEmpty(postbbs.getVolunteerId())
					|| StringUtils.isEmpty(postbbs.getContent()) || StringUtils.isEmpty(postbbs.getType())){
				return new JsonResult<String>(DefaultResponse.PARAM_NULL_ERROR,null);
			}
			
			List<Volunteers> list = volunteersService.getVolunById(postbbs.getVolunteerId());
			if(list == null || list.size() <= 0){
				return new JsonResult<String>(1,"志愿者信息不存在",null);
			}
			if(!list.get(0).getStatus().equals(YCConstants.AUDIT_TURE)){
				return new  JsonResult<String>(DefaultResponse.NOT_PASS_VOLUN,null);
			}
			
			postbbs.setId(UUID.randomUUID().toString());
			postbbs.setPhoto(list.get(0).getPhoto());
			postbbs.setRealname(list.get(0).getRealname());
			postbbs.setAuthor(list.get(0).getNickname());
			postbbs.setGroupId(list.get(0).getGroupId());
			
			long time = System.currentTimeMillis();
			Timestamp timestamp = new Timestamp(time);
			postbbs.setCreateTime(timestamp);
			Integer integer = bbspostService.addPost(postbbs);
			if(integer > 0){
				return new JsonResult<String>(DefaultResponse.SUCCESS,null);
			}else{
				return new JsonResult<String>(DefaultResponse.INSERT_ERROR,null);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<String>(DefaultResponse.INSERT_ERROR,null);
		}
	}
	
		
	
	/**
	 * 发表帖子评论
	 * @param postAtomsbbs
	 * @return
	 */
	@RequestMapping("addAtoms")
	@ResponseBody
	public JsonResult<String> addAtoms(PostAtomsbbs postAtomsbbs,String keyParams){
		JsonResult<String> result = null;
		try {
			JsonResult<String> chekcResult = Utils.checkKeyParams(postAtomsbbs.getPostId()+propertyService.KEY, keyParams);
			if(chekcResult != null){
				result = chekcResult;
			}else{
				
				if(postAtomsbbs == null || StringUtils.isEmpty(postAtomsbbs.getVolunteerId())
						|| StringUtils.isEmpty(postAtomsbbs.getContent()) || StringUtils.isEmpty(postAtomsbbs.getPostId())){
					return new JsonResult<String>(DefaultResponse.PARAM_NULL_ERROR,null);
				}
				
				List<Volunteers> list = volunteersService.getVolunById(postAtomsbbs.getVolunteerId());
				if(list == null || list.size() <= 0){
					return new JsonResult<String>(1,"志愿者信息不存在",null);
				}
				if(!list.get(0).getStatus().equals(YCConstants.AUDIT_TURE)){
					return new  JsonResult<String>(DefaultResponse.NOT_PASS_VOLUN,null);
				}
				
				postAtomsbbs.setId(UUID.randomUUID().toString());
				
				long time = System.currentTimeMillis();
				Timestamp datetime = new Timestamp(time);
				postAtomsbbs.setTime(datetime);
				
				Integer integer = postAtomsbbsService.addAtoms(postAtomsbbs);
				if(integer > 0){
					result = new JsonResult<String>(DefaultResponse.SUCCESS,null);
				}else{
					result = new JsonResult<String>(DefaultResponse.INSERT_ERROR,null);
				}
			}
			return result;
		} catch (YichuangException e) {
			e.printStackTrace();
			return new JsonResult<String>(e.getField(),e.getMessage(),null);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<String>(DefaultResponse.INSERT_ERROR,null);
		}
	}
	
	
	
	
	/**
	 * 帖子评论回复
	 * @param postbbsreplay
	 * @return
	 */
	@RequestMapping("addReplay")
	@ResponseBody
	public JsonResult<String> add(Postbbsreplay postbbsreplay){
		try {
			if(postbbsreplay == null || StringUtils.isEmpty(postbbsreplay.getVolunteerId())){
				return new JsonResult<String>(DefaultResponse.PARAM_NULL_ERROR,null);
			}
			
			List<Volunteers> list = volunteersService.getVolunById(postbbsreplay.getVolunteerId());
			if(list == null || list.size() <= 0){
				return new JsonResult<String>(1,"志愿者信息不存在",null);
			}
			if(!list.get(0).getStatus().equals(YCConstants.AUDIT_TURE)){
				return new  JsonResult<String>(DefaultResponse.NOT_PASS_VOLUN,null);
			}
			
			Integer integer = postbbsreplayService.addPostbbsReplay(postbbsreplay);
			if(integer > 0){
				return new JsonResult<String>(0,"回复成功",null);
			}
			return new JsonResult<String>(1,"回复失败",null);
		} catch (YichuangException e) {
			e.printStackTrace();
			return new JsonResult<String>(e.getField(),e.getMessage(),null);
		}
	}
	
	/**
	 * 根据postatomsbbsId获取帖子回复列表
	 * @param pageNo
	 * @param pageSize
	 * @param postatomsbbsId
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping("postReplays")
	@ResponseBody
	public JsonResult<PageInfo<Postbbsreplay>> getPostReplayByPostAtomsbbsId(Integer pageNo,Integer pageSize,String postatomsbbsId,String keyParams){
		JsonResult<PageInfo<Postbbsreplay>> checkResult = Utils.checkKeyParams(postatomsbbsId+propertyService.KEY, keyParams);
		if(checkResult != null){
			return checkResult;
		}
		if(StringUtils.isEmpty(postatomsbbsId)){
			return new JsonResult<PageInfo<Postbbsreplay>>(DefaultResponse.PARAM_NULL_ERROR,null);
		}else{
			PageInfo<Postbbsreplay> list = postbbsreplayService.getPostbbsReplay(pageNo,pageSize,postatomsbbsId);
			return new JsonResult<PageInfo<Postbbsreplay>>(list);
		}
		
	}

	/**
	 * 根据postId获取帖子评论
	 * @param postId
	 * @param pageNo
	 * @param pageSize
	 * @param keyParams
	 * @return
	 */
	@SuppressWarnings("unchecked")
	@RequestMapping("postComments")
	@ResponseBody
	public JsonResult<PageInfo<PostAtomsbbs>> getPostComments(String postId,Integer pageNo,Integer pageSize,String keyParams){
			JsonResult<PageInfo<PostAtomsbbs>> checkResult = Utils.checkKeyParams(postId+propertyService.KEY, keyParams);
			if(checkResult != null){
				return checkResult;
			}
			if(StringUtils.isEmpty(postId)){
				return new JsonResult<PageInfo<PostAtomsbbs>>(DefaultResponse.PARAM_NULL_ERROR,null);
			}else{
				PageInfo<PostAtomsbbs> pageInfo = postAtomsbbsService.getPostAtomsbbs(postId, pageNo, pageSize);
				return new JsonResult<PageInfo<PostAtomsbbs>>(pageInfo);
			}
	}
	/**
	 * 获取评论及回复
	 * @param postId
	 * @param pageNo
	 * @param pageSize
	 * @return
	 *//*
	@RequestMapping("getAtomsReplay")
	@ResponseBody
	public JsonResult<Map<Object, Object>> getAtomsReplay(String postId,Integer pageNo,Integer pageSize,String keyParams){
		try {
			JsonResult checkResult = Utils.checkKeyParams(postId+propertyService.KEY, keyParams);
			if(checkResult != null){
				return checkResult;
			}
			PageInfo<PostAtomsbbs> pageInfo = postAtomsbbsService.getPostAtomsbbs(postId, pageNo, pageSize);
			List<PostAtomsbbs> list = pageInfo.getList();
			Map<Object, Object> map = new HashMap<Object,Object>();
			if(list != null){
				for (int i = 0; i < list.size(); i++) {
					List<Postbbsreplay> list2 = postbbsreplayService.getPostbbsReplay(list.get(i).getId());
					map.put(list.get(i).toString(), list2);
				}
				return new JsonResult<Map<Object,Object>>(map);
			}else {
				return new JsonResult<Map<Object,Object>>(DefaultResponse.QUERY_ERROR,null);
			}
		} catch (YichuangException e) {
			e.printStackTrace();
			return new JsonResult<Map<Object,Object>>(e.getField(),e.getMessage(),null);
		} catch (Exception e) {
			e.printStackTrace();
		}
		return new JsonResult<Map<Object,Object>>(DefaultResponse.QUERY_ERROR,null);
	}
	*/
	/**
	 * 获取帖子总数
	 * @return
	 */
	@RequestMapping("postTotal")
	@ResponseBody
	public JsonResult<Integer> postTotal(String keyParams){
			try {
				JsonResult<Integer> checkJsonResult = Utils.checkKeyParams(propertyService.KEY, keyParams);
				if(checkJsonResult != null){
					return checkJsonResult;
				} 
				Integer integer = bbspostService.postTotal();
				return new JsonResult<Integer>(integer);
			} catch (Exception e) {
				e.printStackTrace();
				return new JsonResult<Integer>(DefaultResponse.QUERY_ERROR,null);
			}
	}
	
	/**
	 * 根据帖子id获取评论数
	 * @param postId
	 * @param keyParams
	 * @return
	 */
	@RequestMapping("atomsTotal")
	@ResponseBody
	public JsonResult<Integer> atomsTotal(String postId,String keyParams){
		try {
			JsonResult checkResult = Utils.checkKeyParams(postId+propertyService.KEY,keyParams);
			if( checkResult != null){
				return checkResult;
			}
			Integer integer = postAtomsbbsService.atomsTotal(postId);
			return  new JsonResult<Integer>(integer);
		} catch (YichuangException e) {
				e.printStackTrace();
				return new JsonResult<Integer>(e.getField(),e.getMessage(),null);
		}
	}
	
	/**
	 * 根据帖子类型获取总条数
	 * @param type
	 * @return
	 */
	@RequestMapping("totalCount")
	@ResponseBody
	public JsonResult<Integer> totalCount(String type,String keyParams){
		JsonResult checkJsonResult = Utils.checkKeyParams(type+propertyService.KEY, keyParams);
		if(checkJsonResult != null){
			return checkJsonResult;
		}
		if(type == null || type.trim() == ""){
			return new JsonResult<Integer>(DefaultResponse.PARAM_NULL_ERROR,null);
		}
		try {
			Integer integer = bbspostService.totalCount(type);
			if(integer > 0){
				return new JsonResult<Integer>(DefaultResponse.SUCCESS,integer);
			}
			return new JsonResult<Integer>(DefaultResponse.QUERY_ERROR,null);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<Integer>(DefaultResponse.QUERY_ERROR,null);
		}
	}
	
	/**
	 * 根据id更新帖子点击量
	 * @param id
	 * @return
	 */
	@RequestMapping("updateClick")
	@ResponseBody
	public JsonResult<Integer> updateClick(String id,String keyParams){
		JsonResult checkJsonResult = Utils.checkKeyParams(id+propertyService.KEY, keyParams);
		if(checkJsonResult != null){
			return checkJsonResult;
		}
		if(StringUtils.isEmpty(id)){
			return new JsonResult<Integer>(DefaultResponse.PARAM_NULL_ERROR,null);
		}
		try {
			Integer integer = bbspostService.updateClickById(id);
			if(integer > 0){
				return new JsonResult<Integer>(DefaultResponse.SUCCESS,null);
			}else{
				return new JsonResult<Integer>(DefaultResponse.UPDATE_ERROR,null);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<Integer>(DefaultResponse.UPDATE_ERROR, null);
		}
	}
	
	/**
	 * 获取评论总数
	 * @return
	 */
	@RequestMapping("getAtomsTotal")
	@ResponseBody
	public JsonResult<Integer> getAtomsTotal(String keyParams){
		JsonResult checkJsonResult = Utils.checkKeyParams(propertyService.KEY, keyParams);
		if(checkJsonResult != null){
			return checkJsonResult;
		}
		try {
			Integer integer = postAtomsbbsService.getAtomsTotal();
			return new JsonResult<Integer>(DefaultResponse.SUCCESS,integer);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<Integer>(DefaultResponse.QUERY_ERROR,null);
		}
	}
	
	/**
	 * 根据条件获取帖子列表
	 * @param pageNo
	 * @param pageSize
	 * @param postbbs
	 * @return
	 */
	@RequestMapping("postList")
	@ResponseBody
	public JsonResult<PageInfo<Postbbs>> findPostList(Integer pageNo,Integer pageSize,Postbbs postbbs){
		try {
			PageInfo<Postbbs> pageInfo = bbspostService.findPostList(pageNo, pageSize, postbbs);
			return new JsonResult<PageInfo<Postbbs>>(pageInfo);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<PageInfo<Postbbs>>(DefaultResponse.QUERY_ERROR,null);
		}
	}
	
	
	/**
	 * 我的评论
	 * @param pageNo
	 * @param pageSize
	 * @param postAtomsbbs
	 * @return
	 */
	@RequestMapping("myAtoms")
	@ResponseBody
	public JsonResult<?> findAtomsList(Integer pageNo,Integer pageSize,PostAtomsbbs postAtomsbbs){
		try {
			PageInfo<PostAtomsbbs> pageInfo = postAtomsbbsService.findAtomsList(pageNo, pageSize, postAtomsbbs);
			List<PostAtomsbbs> list = pageInfo.getList();
			Map<PostAtomsbbs,List<Postbbs>> map = null;
			Postbbs postbbs = new Postbbs();
			if(list != null && list.size() > 0){
				for(int i = 0;i < list.size();i++){
					postbbs.setId(list.get(i).getPostId());
					PageInfo<Postbbs> pageInfo2 = bbspostService.findPostList(1, 1, postbbs);
					List<Postbbs> list2 = pageInfo2.getList();
					if(list2 != null && list2.size() > 0){
						map.put(list.get(i), (List<Postbbs>) list2.get(0) );
					}
				}
				return new JsonResult<Map>(map);
			}
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<String>(DefaultResponse.QUERY_ERROR,null);
		}
		return new JsonResult<String>(DefaultResponse.QUERY_ERROR,null);
		
	}
}

