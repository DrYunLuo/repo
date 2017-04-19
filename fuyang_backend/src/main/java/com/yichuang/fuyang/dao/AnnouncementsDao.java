package com.yichuang.fuyang.dao;

import java.util.List;

import com.yichuang.fuyang.entity.Announcements;

public interface AnnouncementsDao {

	/**
	 * 获取通知公告
	 * @return
	 */
	List<Announcements> findAnnouncements();
}
