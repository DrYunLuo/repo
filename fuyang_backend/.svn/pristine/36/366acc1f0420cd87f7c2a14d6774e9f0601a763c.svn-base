package com.yichuang.fuyang.dao;

import java.util.List;

import com.yichuang.fuyang.entity.PostAtomsbbs;

public interface PostAtomsbbsDao {

	/**
	 * 发表评论
	 * @param postAtomsbbs
	 * @return
	 */
	Integer addAtoms(PostAtomsbbs postAtomsbbs);
	
	/**
	 * 根据帖子id获取评论
	 * @param postId
	 * @return
	 */
	List<PostAtomsbbs> findPostAtomsbbsByPostId(String postId);
	
	/**
	 * 根据帖子id获取评论数
	 * @param postId
	 * @return
	 */
	Integer atomsTotal(String postId);
	
	/**
	 * 获取评论总数
	 * @return
	 */
	Integer getAtomsTotal();
	
	/**
	 * 根据条件获取评论列表
	 * @param pageNo
	 * @param pageSize
	 * @param postAtomsbbs
	 * @return
	 */
	List<PostAtomsbbs> findAtomsList(PostAtomsbbs postAtomsbbs);
}
