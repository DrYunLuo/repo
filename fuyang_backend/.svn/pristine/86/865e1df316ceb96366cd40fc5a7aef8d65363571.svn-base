package com.yichuang.fuyang.service;

import org.springframework.stereotype.Service;

import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.entity.PostAtomsbbs;

@Service
public interface PostAtomsbbsService {
	
	/**
	 * 发表评论
	 * @param postAtomsbbs
	 * @return
	 */
	Integer addAtoms(PostAtomsbbs postAtomsbbs) throws YichuangException;
	
	/**
	 * 获取帖子评论
	 * @param postId
	 * @return
	 */
	PageInfo<PostAtomsbbs> getPostAtomsbbs(String postId,Integer pageNo,Integer pageSize) throws YichuangException;
	
	/**
	 * 根据帖子id获取评论总数
	 * @param postId
	 * @return
	 */
	Integer atomsTotal(String postId) throws YichuangException;
	
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
	PageInfo<PostAtomsbbs> findAtomsList(Integer pageNo,Integer pageSize,PostAtomsbbs postAtomsbbs);
}
