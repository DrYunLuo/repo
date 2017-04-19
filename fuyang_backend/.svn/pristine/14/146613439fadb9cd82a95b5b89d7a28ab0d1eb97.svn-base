package com.yichuang.fuyang.service;

import java.sql.Timestamp;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.dao.PostAtomsDao;
import com.yichuang.fuyang.entity.PostAtoms;



@Service("postAtomsService")
public class PostAtomsServiceImpl implements PostAtomsService {

	@Autowired
	private PostAtomsDao postAtomsDao;
	
	/**
	 * 查询帖子信息
	 */
	public PageInfo<PostAtoms> queryPostatoms(String postId,Integer pageNo, Integer pageSize) {
		pageNo = pageNo == null?1:pageNo;
	    pageSize = pageSize == null?10:pageSize;
	    PageHelper.orderBy("p.time desc");
	    PageHelper.startPage(pageNo, pageSize);
	    List<PostAtoms> list = postAtomsDao.selectPostAtoms(postId);
	    PageInfo<PostAtoms> page = new PageInfo<PostAtoms>(list);
		return page;
	}

	
	/**
	 * 发表评论
	 */
	public void savePostAtoms(PostAtoms postAtoms) {
		String id = UUID.randomUUID().toString();
		if(postAtoms.getVolunteerId() == null || postAtoms.getVolunteerId().trim() == "" ){
			throw new YichuangException(1,"Parameters cannot be empty");
		}
		if(postAtoms.getPostId() == null || postAtoms.getPostId().trim() == "" ){
			throw new YichuangException(1,"Parameters cannot be empty");
		}
		long time1 = System.currentTimeMillis();
		Timestamp datetime = new Timestamp(time1);
		postAtoms.setId(id);
		postAtoms.setTime(datetime);
		postAtoms.setCreatedAt(datetime);
		postAtoms.setUpdatedAt(datetime);
		postAtoms.setPostatomsId(null);
		postAtomsDao.savePostAtoms(postAtoms);
	}


	/**
	 * 获取帖子评论数
	 */
	@Override
	public Integer findAtomsSum(PostAtoms postAtoms) {
		Integer integer = postAtomsDao.findAtomsSum(postAtoms);
		return integer;
	}
}
