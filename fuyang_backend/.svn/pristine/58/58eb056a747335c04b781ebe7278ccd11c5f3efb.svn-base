package com.yichuang.fuyang.service;


import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.entity.PostAtoms;

public interface PostAtomsService {
	/**
	 * 业务层发表评论方法
	 * @param postAtoms
	 */
	void savePostAtoms(PostAtoms postAtoms);
	
	/**
	 * 查询评论详情列表
	 * @param pageNo 每页数量
	 * @param pageSize 页数
	 * @return
	 */
	PageInfo<PostAtoms> queryPostatoms(String postId,Integer pageNo,Integer pageSize);
	
	/**
	 * 获取帖子评论数
	 * @param postAtoms
	 * @return
	 */
	Integer findAtomsSum(PostAtoms postAtoms);
}
