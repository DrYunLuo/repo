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
import com.sun.org.apache.bcel.internal.generic.NEW;
import com.yichuang.fuyang.entity.News;
import com.yichuang.fuyang.service.NewsService;
import com.yichuang.fuyang.service.PropertyService;
import com.yichuang.fuyang.util.DefaultResponse;
import com.yichuang.fuyang.util.FTPUtil;
import com.yichuang.fuyang.util.JsonResult;
import com.yichuang.fuyang.util.Utils;
/**
 * 新闻功能
 * @author Administrator
 *
 */
@Controller
@RequestMapping("/news")
public class NewsController {
	
	@Autowired
	private NewsService newsService;
	
	@Autowired
	private PropertyService propertyService;
	
	
	/**
	 * 根据标题搜索新闻
	 * @param title
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	@RequestMapping("/getNewsByTitle")
	@ResponseBody
	public JsonResult<PageInfo<News>> getNews(String title,Integer pageNo,Integer pageSize){
		try {
		
				PageInfo<News> pageInfo = newsService.getNewsByTitle(title, pageNo, pageSize);
				return new JsonResult<PageInfo<News>>(pageInfo);
			
		} catch (Exception e) {
			return new JsonResult<PageInfo<News>>(1,"获取信息失败",null);
		}
	}
	
	
	/**
	 * 最新新闻
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	@RequestMapping("/getNewNews")
	@ResponseBody
	public JsonResult<PageInfo<News>> getNewNews(Integer pageNo,Integer pageSize,String keyParams){
		JsonResult<PageInfo<News>> result = null;
		try{
			JsonResult<PageInfo<News>> checkResult = Utils.checkKeyParams(propertyService.KEY, keyParams);
			if(checkResult != null){
				result = checkResult;
			}else{
				
				PageInfo<News> pageInfo = newsService.getNewNews(pageNo, pageSize);
				result = new JsonResult<PageInfo<News>>(pageInfo);
			}
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<PageInfo<News>>(1,"获取信息失败",null);
		}
	}
	
	
	/**
	 * 根据热门度排序新闻
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	@RequestMapping("/getRecommendNews")
	@ResponseBody
	public JsonResult<PageInfo<News>> getRecommendNews(Integer pageNo,Integer pageSize,String keyParams){
		JsonResult<PageInfo<News>> result = null;
		try {
			JsonResult<PageInfo<News>> checkResult = Utils.checkKeyParams(propertyService.KEY, keyParams);
			if(checkResult != null){
				result = checkResult;
			}else{
				PageInfo<News> pageInfo = newsService.getRecommendNews(pageNo, pageSize);
				result =  new JsonResult<PageInfo<News>>(pageInfo);
			}
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<PageInfo<News>>(1,"获取信息失败",null);
		}
	}
	
	
	/**
	 * 获取新闻详情
	 * @param id
	 * @return
	 */
	@RequestMapping("/getNewById")
	@ResponseBody
	public JsonResult<List<News>> getNewById(String id,String keyParams){
		JsonResult<List<News>> result = null;
		try {
			JsonResult<List<News>> checkResult = Utils.checkKeyParams(id+propertyService.KEY, keyParams);
			if (checkResult != null) {
				result = checkResult;
			}else{
				List<News> list = newsService.getNewById(id);
				result = new JsonResult<List<News>>(list);
			}
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<List<News>>(1,"获取信息失败",null);
		}
	}
	
	/**
	 * 获取新闻列表
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	@RequestMapping("getAllNews")
	@ResponseBody
	public JsonResult<PageInfo<News>> getAllNews(Integer pageNo,Integer pageSize,String keyParams){
		JsonResult<PageInfo<News>> result = null;
		try {
			JsonResult<PageInfo<News>> checkResult = Utils.checkKeyParams(propertyService.KEY, keyParams);
			if (checkResult != null) {
				result = checkResult;
			}else{
				PageInfo<News> pageInfo = newsService.allNews(pageNo, pageSize);
				result = new JsonResult<PageInfo<News>>(pageInfo);
			}
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<PageInfo<News>>(1,"获取信息失败",null);
		}
	}
	
	/**
	 * 获取新闻列表
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	@RequestMapping("getNewsDynamicParam")
	@ResponseBody
	public JsonResult<PageInfo<News>> getNewsDynamicParam(Integer pageNo,Integer pageSize,News news,String keyParams){
		JsonResult<PageInfo<News>> result = null;
		try {
			JsonResult<PageInfo<News>> checkResult = Utils.checkKeyParams(propertyService.KEY, keyParams);
			if (checkResult != null) {
				result = checkResult;
			}else{
				PageInfo<News> pageInfo = newsService.newsDynamic(pageNo, pageSize,news);
				result = new JsonResult<PageInfo<News>>(pageInfo);
			}
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<PageInfo<News>>(1,"获取信息失败",null);
		}
	}
	
	
	
	/**
	 * 根据id删除新闻
	 * @param id
	 * @return
	 */
	@RequestMapping("delete")
	@ResponseBody
	public JsonResult<String> delete(String[] id){
		if(id == null || id.length <1){
			return new JsonResult<String>(DefaultResponse.PARAM_NULL_ERROR,null);
		}
		try {
			for(int i = 0;i < id.length;i++){
				newsService.deleteById(id[i]);
			}
			return new JsonResult<String>(DefaultResponse.SUCCESS,null);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<String>(DefaultResponse.DELETE_ERROR,null);
		}
	}
	
	
	
	/**
	 * 上传新闻图片
	 * @param file
	 * @param request
	 * @param response
	 * @param keyParams
	 * @return
	 */
	@RequestMapping("/registPic")
	@ResponseBody
	public JsonResult<String> registPic(MultipartFile file, HttpServletRequest request, HttpServletResponse response,String keyParams){
		JsonResult<String> checkResult = Utils.checkKeyParams(propertyService.KEY, keyParams);
		if(checkResult != null){
			return checkResult;
		}
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
				//重新生成文件名，避免上传重复文件名后覆盖文件
				String systFileName = UUID.randomUUID().toString()+"."+Utils.getFileSuffix(fi.getName());
				try {
					connectReturnMap = FTPUtil.connect(propertyService.REMOTE_IMAGE_NEWS, propertyService.REMOTE_IMAGE_IP,
							propertyService.REMOTE_IMAGE_PORT, propertyService.REMOTE_IMAGE_USERNAME,
							propertyService.REMOTE_IMAGE_PASSWORD);
					if(connectReturnMap != null && (boolean)connectReturnMap.get("connectFlag")){
						ftp = (FTPClient) connectReturnMap.get("FTPClient");
						FTPUtil.upload(fileFrom, systFileName,ftp);
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
				// 根据 name 获取上传的文件...
				String fileName = file1.getOriginalFilename();
				String serverPath = propertyService.REMOTE_IMAGE_NEWS + fileName;
				return new JsonResult<String>(DefaultResponse.SUCCESS,serverPath);
			}
		}
		return new JsonResult<String>(DefaultResponse.PARAM_NULL_ERROR,null);
	}
	
	
	
	/**
	 * 编辑新闻
	 * @param news
	 * @return
	 */
	@RequestMapping("updateOrAdd")
	@ResponseBody
	public JsonResult<String> updateOrAdd(News news){
		try {
			if(StringUtils.isEmpty(news.getId())){
				news.setCreatedAt(new Timestamp(System.currentTimeMillis()));
				newsService.saveNews(news);
				return new JsonResult<String>(DefaultResponse.SUCCESS,null);
			}
			newsService.updateById(news);
			return new JsonResult<String>(DefaultResponse.SUCCESS,null);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<String>(DefaultResponse.INSERT_ERROR,null);
		}
	}
	
	/**
	 * 上传新闻标题图片
	 * @param file
	 * @param request
	 * @param response
	 * @param keyParams
	 * @return
	 */
	@RequestMapping("/uploadNewsTitle")
	@ResponseBody
	public JsonResult<String> uploadNewsTitle(MultipartFile newsPic, HttpServletRequest request, HttpServletResponse response,String keyParams){
//		JsonResult<String> checkResult = Utils.checkKeyParams(propertyService.KEY, keyParams);
//		if(checkResult != null){
//			return checkResult;
//		}
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
				
				//重新生成文件名，避免上传重复文件名后覆盖文件
				String systFileName = UUID.randomUUID().toString()+"."+Utils.getFileSuffix(fi.getName());
				try {
					connectReturnMap = FTPUtil.connect(propertyService.REMOTE_IMAGE_NEWS_TITLE, propertyService.REMOTE_IMAGE_IP,
							propertyService.REMOTE_IMAGE_PORT, propertyService.REMOTE_IMAGE_USERNAME,
							propertyService.REMOTE_IMAGE_PASSWORD);
					if(connectReturnMap != null && (boolean)connectReturnMap.get("connectFlag")){
						ftp = (FTPClient) connectReturnMap.get("FTPClient");
						
						FTPUtil.upload(fileFrom, systFileName,ftp);
					}
				} catch (Exception e) {
					e.printStackTrace();
				}
				// 根据 name 获取上传的文件...
				String url = propertyService.OFFICIAL_SITE+propertyService.REMOTE_IMAGE_NEWS_LOOK + systFileName;
				return new JsonResult<String>(DefaultResponse.SUCCESS,url);
			}
		}
		return new JsonResult<String>(DefaultResponse.PARAM_NULL_ERROR,null);
	}
}
