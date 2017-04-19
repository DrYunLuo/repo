package com.yichuang.fuyang.web;

import java.io.File;
import java.util.HashMap;
import java.util.Iterator;
import java.util.Map;
import java.util.UUID;

import javax.servlet.http.HttpServletRequest;

import org.apache.commons.fileupload.disk.DiskFileItem;
import org.apache.commons.net.ftp.FTPClient;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.multipart.MultipartHttpServletRequest;
import org.springframework.web.multipart.commons.CommonsMultipartFile;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;

import com.yichuang.fuyang.service.PropertyService;
import com.yichuang.fuyang.util.FTPUtil;
import com.yichuang.fuyang.util.Utils;

@Controller
@RequestMapping("fileUpload")
public class FileUploadController {
	@Autowired
	private PropertyService propertyService;
	
	/**
	 * 新闻编辑器上传图片
	 * @param request
	 * @return
	 */
	@RequestMapping("/upload")
	@ResponseBody
	public Map<String,Object> upload(HttpServletRequest request){
		CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(
				request.getSession().getServletContext());
		
		Map<String,Object> returnMap = new HashMap<String,Object>();
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
					connectReturnMap = FTPUtil.connect(propertyService.REMOTE_NEWS_EDITOR, propertyService.REMOTE_IMAGE_IP,
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
				String url = propertyService.OFFICIAL_SITE+propertyService.REMOTE_NEWS_EDITOR_LOOK + systFileName;
				
				returnMap.put("error", 0);
				returnMap.put("url", url);
				return returnMap;
			}
		}
		
		returnMap.put("error", 1);
		returnMap.put("message", "有点拥挤，请稍后再试");
		return returnMap;
	}
	
	/**
	 * 上传活动标题图片
	 * @param request
	 * @return
	 */
	@RequestMapping("/uploadCampaignImg")
	@ResponseBody
	public Map<String,Object> uploadCampaignImg(HttpServletRequest request){
		CommonsMultipartResolver multipartResolver = new CommonsMultipartResolver(
				request.getSession().getServletContext());
		
		Map<String,Object> returnMap = new HashMap<String,Object>();
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
					connectReturnMap = FTPUtil.connect(propertyService.REMOTE_IMAGE_ACTIVITY, propertyService.REMOTE_IMAGE_IP,
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
				String url = propertyService.OFFICIAL_SITE+propertyService.REMOTE_IMAGE_ACTIVITY_LOOK + systFileName;
				
				returnMap.put("error", 0);
				returnMap.put("url", url);
				return returnMap;
			}
		}
		
		returnMap.put("error", 1);
		returnMap.put("message", "有点拥挤，请稍后再试");
		return returnMap;
	}
}
