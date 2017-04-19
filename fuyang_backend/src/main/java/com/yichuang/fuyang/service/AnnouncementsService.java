package com.yichuang.fuyang.service;

import org.springframework.stereotype.Service;

import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.entity.Announcements;

@Service
public interface AnnouncementsService {

	/**
	 * 获取通知公告并分页
	 * @param pageNo
	 * @param PageSize
	 * @return
	 */
	PageInfo<Announcements> findAnnouncements(Integer pageNo,Integer PageSize);
}
