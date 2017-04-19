package com.yichuang.fuyang.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.dao.PostAtomsbbsDao;
import com.yichuang.fuyang.entity.PostAtomsbbs;

@Service("PostAtomsbbsService")
public class PostAtomsbbsServiceImpl implements PostAtomsbbsService{

	@Autowired
	private PostAtomsbbsDao postAtomsbbsDao;
	
	
	/**
	 * 发表帖子评论
	 */
	@Transactional
	public Integer addAtoms(PostAtomsbbs postAtomsbbs){
		return postAtomsbbsDao.addAtoms(postAtomsbbs);
	}

	/**
	 * 根据帖子id获取评论
	 */
	public PageInfo<PostAtomsbbs> getPostAtomsbbs(String postId,Integer pageNo,Integer pageSize) throws YichuangException{
		if(postId == null || postId.trim() == ""){
			throw new YichuangException(1,"参数错误");
		}
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.orderBy("time DESC");
		PageHelper.startPage(pageNo, pageSize);
		List<PostAtomsbbs> list = postAtomsbbsDao.findPostAtomsbbsByPostId(postId);
		PageInfo<PostAtomsbbs> pageInfo = new PageInfo<PostAtomsbbs>(list);
		return pageInfo;
	}

	/**
	 * 根据帖子id获取帖子评论数
	 */
	public Integer atomsTotal(String postId) throws YichuangException {
		if(postId == null || postId.trim() == ""){
			throw new YichuangException(1,"参数错误");
		}
		Integer integer = postAtomsbbsDao.atomsTotal(postId);
		return integer;
	}

	/**
	 * 获取评论总数
	 */
	@Override
	public Integer getAtomsTotal() {
		Integer integer = postAtomsbbsDao.getAtomsTotal();
		return integer;
	}

	
	/**
	 * 根据条件获取评论列表
	 */
	@Override
	public PageInfo<PostAtomsbbs> findAtomsList(Integer pageNo,
			Integer pageSize, PostAtomsbbs postAtomsbbs) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.startPage(pageNo, pageSize);
		List<PostAtomsbbs> list = postAtomsbbsDao.findAtomsList(postAtomsbbs);
		PageInfo<PostAtomsbbs> pageInfo = new PageInfo<PostAtomsbbs>(list);
		return pageInfo;
	}
		
}

	

