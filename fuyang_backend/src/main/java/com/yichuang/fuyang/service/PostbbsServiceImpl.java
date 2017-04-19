package com.yichuang.fuyang.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.dao.PostbbsDao;
import com.yichuang.fuyang.entity.Postbbs;

@Service("PostbbsService")
public class PostbbsServiceImpl implements PostbbsService{

	@Autowired
	private PostbbsDao bbspostDao;

	
	/**
	 * 获取论坛帖子
	 */
	public PageInfo<Postbbs> getPostList(String type, Integer pageNo,
			Integer pageSize){
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.orderBy("createTime DESC");
		PageHelper.startPage(pageNo, pageSize);
		List<Postbbs> list = bbspostDao.getPostList(type.toString());
		PageInfo<Postbbs> pageInfo = new PageInfo<Postbbs>(list);
		return pageInfo;
	}


	/**
	 * 根据标题搜索帖子
	 */
	public PageInfo<Postbbs> getPostByTitle(String title, Integer pageNo,
			Integer pageSize) throws YichuangException{
		if(title == null){
			throw new YichuangException(1,"参数为空");
		}
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.orderBy("createTime DESC");
		PageHelper.startPage(pageNo, pageSize);
		List<Postbbs> list = bbspostDao.getPostByTitle(title);
		if(list != null){
			PageInfo<Postbbs> pageInfo = new PageInfo<Postbbs>(list);
			return pageInfo;
		}else {
			throw new YichuangException(2,"无结果");
		}
		
	}

	
	/**
	 * 根据id获取帖子详情
	 */
	public Postbbs getPostById(String id) throws YichuangException{
		if(id == null || id.trim() == ""){
			throw new YichuangException(1,"参数为空");
		}
		Postbbs postbbs = bbspostDao.getPostById(id);
		if(postbbs != null){
			return postbbs;
		}else {
			throw new YichuangException(2,"无结果");
		}
	}


	/**
	 * 发帖
	 */
	public Integer addPost(Postbbs postbbs) {
		return bbspostDao.addPost(postbbs);
	}


	/**
	 * 获取帖子总数
	 */
	public Integer postTotal() {
		Integer integer = bbspostDao.postTotal();
		return integer;
	}


	/**
	 * 总条数
	 */
	@Override
	public Integer totalCount(String type) {
		Integer integer = bbspostDao.totalCount(type);
		return integer;
	}

	/**
	 * 根据帖子id更新点击量
	 */
	@Override
	public Integer updateClickById(String id) {
		Integer integer = bbspostDao.updateClickById(id);
		return integer;
	}


	/**
	 * 根据条件获取帖子列表
	 */
	@Override
	public PageInfo<Postbbs> findPostList(Integer pageNo, Integer pageSize,Postbbs postbbs) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.startPage(pageNo, pageSize);
		PageHelper.orderBy("createTime DESC");
		List<Postbbs> list = bbspostDao.findPostList(postbbs);
		PageInfo<Postbbs> pageInfo = new PageInfo<Postbbs>(list);
		return pageInfo;
	}
	
	
}
