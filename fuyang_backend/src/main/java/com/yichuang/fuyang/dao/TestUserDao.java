package com.yichuang.fuyang.dao;
import java.util.List;
import com.yichuang.fuyang.entity.TestUser;



public interface TestUserDao {
	void save(TestUser user);
	List<TestUser> selectUserByUserName();  
}
