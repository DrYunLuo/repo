package com.yichuang.fuyang.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;

import com.yichuang.fuyang.dao.TestUserDao;
import com.yichuang.fuyang.entity.TestUser;

@Service("testUserService")
public class TestUserServiceImpl implements TestUserService {
	@Autowired
	private TestUserDao testUserDao;
	
	public PageInfo<TestUser> queryByPage(String name, Integer pageNo,Integer pageSize) {
	    pageNo = pageNo == null?1:pageNo;
	    pageSize = pageSize == null?10:pageSize;
	    PageHelper.startPage(pageNo, pageSize);
	    List<TestUser> list = testUserDao.selectUserByUserName();
	    for(TestUser p:list){
	    	System.out.println(p);
	    }
	    //用PageInfo对结果进行包装
	    PageInfo<TestUser> page = new PageInfo<TestUser>(list);
	    //测试PageInfo全部属性 
	    return page;
	} 
}
