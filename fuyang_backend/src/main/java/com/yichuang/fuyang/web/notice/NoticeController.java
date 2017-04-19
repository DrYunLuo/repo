package com.yichuang.fuyang.web.notice;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.entity.notice.Notice;
import com.yichuang.fuyang.service.notice.INoticeService;
import com.yichuang.fuyang.util.DefaultResponse;
import com.yichuang.fuyang.util.JsonResult;

/**
 * 获取通知
 * 
 * @author zhuoming
 */
@Controller
@RequestMapping("/notice")
public class NoticeController {
	@Autowired
	private INoticeService noticeService;

	@RequestMapping("/getNotice")
	@ResponseBody
	public JsonResult<PageInfo<Notice>> getNotice(Integer pageNo, Integer pageSize,
			String keyParams) {
		PageInfo<Notice> pageInfoNotes = null;
		try {
			pageInfoNotes = noticeService.getNotice(pageNo, pageSize);
			return new JsonResult<PageInfo<Notice>>(DefaultResponse.SUCCESS, pageInfoNotes);
		} catch (Exception e) {
			e.printStackTrace();
			return new JsonResult<PageInfo<Notice>>(DefaultResponse.OPERATE_ERROR, null);
		}
	}

}
