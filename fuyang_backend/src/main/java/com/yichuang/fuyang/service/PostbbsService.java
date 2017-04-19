package com.yichuang.fuyang.service;

import org.springframework.stereotype.Service;

import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.entity.Postbbs;

@Service
public interface PostbbsService {

	/**
	 * 获取论坛帖子
	 * @param type
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<Postbbs> getPostList(String type,Integer pageNo,Integer pageSize) ;
	
	/**
	 * 根据标题获取帖子
	 * @param title
	 * @param pageNo
	 * @param PageSize
	 * @return
	 */
	PageInfo<Postbbs> getPostByTitle(String title,Integer pageNo,Integer PageSize) throws YichuangException;
	
	/**
	 * 根据id获取帖子详情
	 * @param id
	 * @return
	 */
	Postbbs getPostById(String id)throws YichuangException;
	
	/**
	 * 发帖
	 * @param postbbs
	 * @return
	 */
	Integer addPost(Postbbs postbbs);
	
	/**
	 * 帖子总数
	 * @return
	 */
	Integer postTotal();
	
	/**
	 * 总条数
	 * @param type
	 * @return
	 */
	Integer totalCount(String type);
	
	/**
	 * 根据id更新帖子点击量
	 * @param id
	 * @return
	 */
	Integer updateClickById(String id);
	
	/**
	 * 根据条件获取论坛帖子列表
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<Postbbs> findPostList(Integer pageNo,Integer pageSize,Postbbs postbbs);
}
