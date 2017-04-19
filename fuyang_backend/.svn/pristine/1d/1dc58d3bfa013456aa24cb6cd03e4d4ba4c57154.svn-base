package com.yichuang.fuyang.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.sun.org.apache.bcel.internal.generic.NEW;
import com.yichuang.fuyang.entity.News;
import com.yichuang.fuyang.service.CampaignsService;
import com.yichuang.fuyang.service.NewsService;
import com.yichuang.fuyang.service.PropertyService;
import com.yichuang.fuyang.util.JsonResult;
import com.yichuang.fuyang.util.Utils;


@Controller
@RequestMapping("/home")
public class HomeController {

	@Autowired
	private NewsService newsService;
	@Autowired
	private CampaignsService campaignsService;
	@Autowired
	private PropertyService propertyService;
	/**
	 * 获取头图
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	@RequestMapping("/headNews")
	@ResponseBody
	public JsonResult<PageInfo<News>> getAllNews(Integer pageNo,Integer pageSize,String keyParams){
		//System.out.println(keyParams);
		//System.out.println(Utils.sh1(propertyService.KEY));
		JsonResult<PageInfo<News>> result = null;
		try {
			JsonResult<PageInfo<News>> checkResult = Utils.checkKeyParams(propertyService.KEY, keyParams);
			if(checkResult != null){
				result = checkResult;
			}else{
				//System.out.println("进入方法");
				PageInfo<News> pageInfo = newsService.getHeadNews(pageNo, pageSize);
				result =  new JsonResult<PageInfo<News>>(pageInfo);
			}
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<PageInfo<News>>(1,"获取信息失败",null);
		}
				
			
		
	}
	
	
	
	
	
	
	
	
	
}
