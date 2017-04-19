package com.yichuang.fuyang.service.notice;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.dao.notice.NoticeDao;
import com.yichuang.fuyang.entity.notice.Notice;

/**
 * 通知业务处理层
 * 
 * @author zhuoming
 *
 */
@Service
public class NoticeServiceImpl implements INoticeService {

	@Autowired
	private NoticeDao noticeDao;

	/**
	 * 获取通知信息列表（分页）
	 */
	public PageInfo<Notice> getNotice(Integer pageNo, Integer pageSize) {
		pageNo = pageNo == null ? 1 : pageNo;
		pageSize = pageSize == null ? 10 : pageSize;
		PageHelper.orderBy("create_time");
		PageHelper.startPage(pageNo, pageSize);
		List<Notice> list = noticeDao.getNotice();
		PageInfo<Notice> page = new PageInfo<Notice>(list);
		return page;
	}
}
