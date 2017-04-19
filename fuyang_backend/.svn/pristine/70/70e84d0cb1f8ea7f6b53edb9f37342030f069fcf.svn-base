package com.yichuang.fuyang.dao;

import java.util.List;

import org.apache.ibatis.annotations.Param;

import com.yichuang.fuyang.entity.Posts;
import com.yichuang.fuyang.entity.Volunteers;

public interface PostsDao {
	/**
	 * 发帖
	 * @param posts
	 */
	void savePosts(Posts posts);//发帖
	
	/**
	 * 最新帖子
	 * @return
	 */
	List<Posts> selectPosts();
	
	/**
	 * 更新帖子
	 * @param posts
	 */
	void updatePosts(Posts posts);//更新帖子
	
	/**
	 * 查询帖子，id表示主键
	 * @param id
	 * @return
	 */
	Posts selectByPostsId(String id);//查询帖子，id表示
	
	/**
	 * 点赞
	 * @param posts
	 */
	void updateZan(Posts posts);
	
	/**
	 * 点赞更新志愿者信息
	 * @param volunteers
	 */
	void updateZanVolunteers(Volunteers volunteers);
	
	/**
	 * 删除社区帖子
	 * @param id
	 * @return
	 */
	Integer deletePosts(String id);
	
	/**
	 * 根据志愿者Id获取所有社区帖子
	 * @param volunteerId
	 * @return
	 */
	List<Posts> getPostsByVolunteerId(String volunteerId);
	
	/**
	 * 根据标题获取帖子
	 * @param title
	 * @return
	 */
	List<Posts> getPostByTitle(@Param("title")String title);
}
