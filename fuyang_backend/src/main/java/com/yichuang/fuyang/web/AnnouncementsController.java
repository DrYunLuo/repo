package com.yichuang.fuyang.web;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.entity.Announcements;
import com.yichuang.fuyang.service.AnnouncementsService;
import com.yichuang.fuyang.service.PropertyService;
import com.yichuang.fuyang.util.JsonResult;
import com.yichuang.fuyang.util.Utils;

@Controller
@RequestMapping("announcements")
public class AnnouncementsController {

	@Autowired
	private AnnouncementsService announcementsService;
	
	@Autowired
	private PropertyService propertyService;
	
	/**
	 * 获取通知公告
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	@RequestMapping("getAll")
	@ResponseBody
	public JsonResult<PageInfo<Announcements>> getAnnouncements(Integer pageNo,Integer pageSize,String keyParams){
		JsonResult<PageInfo<Announcements>> result = null;
		try {
			JsonResult<PageInfo<Announcements>> checkResult = Utils.checkKeyParams(propertyService.KEY, keyParams);
			if(checkResult != null){
				result = checkResult;
			}else{
				PageInfo<Announcements> pageInfo = announcementsService.findAnnouncements(pageNo, pageSize);
				if(pageInfo != null){
					return new JsonResult<PageInfo<Announcements>>(pageInfo);
				}
				result = new JsonResult<PageInfo<Announcements>>(1,"数据库信息是空哒,亲",null);
			}
			return result;
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<PageInfo<Announcements>>(1,"获取信息失败",null);
		}
	}
}
