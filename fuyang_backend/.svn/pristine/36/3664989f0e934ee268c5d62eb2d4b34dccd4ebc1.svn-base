package com.yichuang.fuyang.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.dao.AnnouncementsDao;
import com.yichuang.fuyang.entity.Announcements;

@Service("AnnouncementsService")
public class AnnouncementsServiceImpl implements AnnouncementsService{
	
	@Autowired
	private AnnouncementsDao announcementsDao;

	/**
	 * 获取通知公告
	 */
	public PageInfo<Announcements> findAnnouncements(Integer pageNo,Integer pageSize) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.orderBy("createdAt desc");
		PageHelper.startPage(pageNo,pageSize);
		List<Announcements> list = announcementsDao.findAnnouncements();
		PageInfo<Announcements> pageInfo = new PageInfo<Announcements>(list);
		return pageInfo;
	}

}
