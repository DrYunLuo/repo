package com.yichuang.fuyang.service;

import java.util.List;

import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.entity.Posts;
import com.yichuang.fuyang.util.JsonResult;

public interface PostsService {
	/**
	 * 发表帖子
	 * @param posts
	 */
	void savePosts(Posts posts);
	
	/**
	 * 帖子列表
	 * @param pageNo 数量
	 * @param pageSize 页数
	 * @return
	 */
	PageInfo<Posts> queryPosts(Integer pageNo,Integer pageSize);
	
	/**
	 * 点赞
	 * @param id：表示帖子ID
	 */
	JsonResult<Posts> updatePostsZan(String id,String volunteerId,String zpids);
	
	/**
	 * 根据id获取社区帖子
	 * @param id
	 * @return
	 */
	Posts getPostsById(String id);
	
	/**
	 * 根据志愿者Id获取所有社区帖子
	 * @param volunteerId
	 * @return
	 */
	List<Posts> getPostsByVolunteerId(String volunteerId);
	
	/**
	 * 删除社区帖子
	 * @param posts
	 * @return
	 */
	Integer deletePosts(Posts posts);
	
	/**
	 * 根据标题搜索帖子
	 * @param title
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<Posts> getPostByTitle(String title, Integer pageNo,Integer pageSize);
}
