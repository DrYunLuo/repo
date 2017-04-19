package com.yichuang.fuyang.dao;

import java.util.List;
import com.yichuang.fuyang.entity.PostAtoms;

public interface PostAtomsDao {
	
	/**
	 * 发表评论
	 * @param postatoms
	 */
	void savePostAtoms(PostAtoms postatoms);
	
	/**
	 * 评论详情列表
	 * @return
	 */
	List<PostAtoms> selectPostAtoms(String postId);
	
	/**
	 * 查询帖子评论数
	 * @param postAtoms
	 * @return
	 */
	Integer findAtomsSum(PostAtoms postAtoms);
}
