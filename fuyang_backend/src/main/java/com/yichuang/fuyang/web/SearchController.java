package com.yichuang.fuyang.web;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.entity.Campaigns;
import com.yichuang.fuyang.entity.Groups;
import com.yichuang.fuyang.entity.News;
import com.yichuang.fuyang.service.CampaignsService;
import com.yichuang.fuyang.service.GroupsService;
import com.yichuang.fuyang.service.NewsService;
import com.yichuang.fuyang.service.PropertyService;
import com.yichuang.fuyang.util.DefaultResponse;
import com.yichuang.fuyang.util.JsonResult;
import com.yichuang.fuyang.util.Utils;

@Controller
@RequestMapping("/search")
public class SearchController {

	@Autowired
	private GroupsService groupsService;
	@Autowired
	private NewsService newsService;
	@Autowired
	private CampaignsService campaignsService;
	@Autowired
	private PropertyService propertyService;
	
	
	@RequestMapping("/searchAny")
	@ResponseBody
	public JsonResult<Map<String, Object>> searchAnyThing( String key,Integer pageNo,Integer pageSize,String keyParams){
		
			JsonResult<Map<String, Object>> checkResult = Utils.checkKeyParams(key+propertyService.KEY, keyParams);
			if(checkResult != null){
				return checkResult;
			}
				try {
				Map<String , Object> map = new HashMap<String, Object>();
				PageInfo<Groups> groupsInfo = groupsService.search(pageSize, pageNo, key);
				PageInfo<News> newsInfo = newsService.getNewsByTitle(key, pageNo, pageSize);
				PageInfo<Campaigns> campaignsInfo = campaignsService.getCampaignsByKey(key, pageNo, pageSize);
				if(groupsInfo==null && newsInfo==null && campaignsInfo==null){
					return new  JsonResult<Map<String,Object>>(DefaultResponse.PARAM_NULL_ERROR,null);
				}
				map.put("groups", groupsInfo==null?"":groupsInfo);
				map.put("news", newsInfo==null?"":newsInfo);
				map.put("campaigns",  campaignsInfo==null?"":campaignsInfo);
				return new JsonResult<Map<String,Object>>(DefaultResponse.SUCCESS,map);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<Map<String,Object>>(DefaultResponse.QUERY_ERROR,null);
		}
	}
	
	
	
}
