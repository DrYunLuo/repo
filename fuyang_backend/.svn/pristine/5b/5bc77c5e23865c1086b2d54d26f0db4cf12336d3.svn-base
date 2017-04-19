package com.yichuang.fuyang.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.yichuang.fuyang.entity.Postbbs;

public interface PostbbsDao {

	/**
	 * 获取论坛帖子
	 * @param type
	 * @return
	 */
	List<Postbbs> getPostList(String type);
	
	/**
	 * 根据标题获取帖子
	 * @param title
	 * @return
	 */
	List<Postbbs> getPostByTitle(@Param("title")String title);
	
	/**
	 * 根据id获取帖子详情
	 * @param id
	 * @return
	 */
	Postbbs getPostById(String id);
	
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
	 * 根据条件查询论坛列表
	 * @param postbbs
	 * @return
	 */
	List<Postbbs> findPostList(Postbbs postbbs);
}
