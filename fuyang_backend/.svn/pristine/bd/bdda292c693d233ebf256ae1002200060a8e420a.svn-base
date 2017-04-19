package com.yichuang.fuyang.service;

import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.dao.PostbbsreplayDao;
import com.yichuang.fuyang.entity.Postbbsreplay;

@Service("PostbbsreplayService")
public class PostbbsreplayServiceImpl implements PostbbsreplayService{

	@Autowired
	private PostbbsreplayDao postbbsreplayDao;
	
	/**
	 * 论坛帖子评论回复
	 */
	@Transactional
	public Integer addPostbbsReplay(Postbbsreplay postbbsreplay) throws YichuangException{
		if(StringUtils.isEmpty(postbbsreplay.getContent()) || StringUtils.isEmpty(postbbsreplay.getVolunteerId())
				|| StringUtils.isEmpty(postbbsreplay.getPostatomsbbsId())){
			throw new YichuangException(1,"参数为空");
		}
		postbbsreplay.setId(UUID.randomUUID().toString());
		long time = System.currentTimeMillis();
		Timestamp datetime = new Timestamp(time);
		postbbsreplay.setReplayTime(datetime);
		Integer integer = postbbsreplayDao.addPostbbsReplay(postbbsreplay);
		return integer;
	}

	/**
	 * 获取评论回复
	 */
	public PageInfo<Postbbsreplay> getPostbbsReplay(Integer pageNo,Integer pageSize,String postatomsbbsId)throws YichuangException {
		if(StringUtils.isEmpty(postatomsbbsId)){
			throw new YichuangException(1,"参数错误");
		}
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.startPage(pageNo, pageSize);
		List<Postbbsreplay> list = postbbsreplayDao.findByPostAtomsbbs(postatomsbbsId);
		return new PageInfo<Postbbsreplay>(list);
	}
	
}
