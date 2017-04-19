package com.yichuang.fuyang.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.entity.Postbbsreplay;

@Service
public interface PostbbsreplayService {

	/**
	 * 论坛帖子评论回复
	 * @param postbbsreplay
	 * @return
	 */
	Integer addPostbbsReplay(Postbbsreplay postbbsreplay) throws YichuangException;
	
	/**
	 * 获取评论回复
	 * @param postatomsbbsId
	 * @return
	 */
	PageInfo<Postbbsreplay> getPostbbsReplay(Integer pageNo,Integer pageSize,String postatomsbbsId) throws YichuangException;
}
