package com.yichuang.fuyang.service;

import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.Date;
import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.dao.PostsDao;
import com.yichuang.fuyang.entity.Posts;
import com.yichuang.fuyang.entity.Volunteers;
import com.yichuang.fuyang.util.JsonResult;

@Service("postsService")
public class PostsServiceImpl implements PostsService {

	@Autowired
	private PostsDao postsDao;
	
	
	/**
	 * 发帖
	 */
    public void savePosts(Posts posts) {
			posts.setId(UUID.randomUUID().toString());
			posts.setPass("2");
			long time = System.currentTimeMillis();
			Timestamp datetime = new Timestamp(time);
			posts.setZan(0);
			posts.setTime(datetime);
			posts.setPostPlateId("");
			posts.setCreatedAt(datetime);
			posts.setUpdatedAt(null);
			postsDao.savePosts(posts);
	}

    
    /**
     * 获取帖子列表
     */
	public PageInfo<Posts> queryPosts(Integer pageNo, Integer pageSize) {
		pageNo = pageNo == null?1:pageNo;
	    pageSize = pageSize == null?10:pageSize;
	    PageHelper.orderBy("p.createdAt desc");
	    PageHelper.startPage(pageNo, pageSize);
	    List<Posts> list = postsDao.selectPosts();
	    PageInfo<Posts> page = new PageInfo<Posts>(list);
		return page;
	}
	
	
	/**
	 * 点赞
	 */
	public JsonResult<Posts> updatePostsZan(String id, String volunteerId, String zpids){
		if(id == null || id.trim() == ""){
			return new JsonResult<Posts>(1,"帖子id为空",null);
		}
		Posts posts = postsDao.selectByPostsId(id);
		if(posts == null){
			return new JsonResult<Posts>(2,"帖子不存在",null);
		}
		
//		Date date = new Date();
//		SimpleDateFormat sdf = new SimpleDateFormat("yyyy-MM-dd");
//		if(posts.getUpdatedAt() != null){
//			if(sdf.format(date).equals(sdf.format(posts.getUpdatedAt()))){
//				throw new YichuangException(2,"今天已经点赞");
//			}
//		}
		String currZanVolunIds = posts.getZanVolunteerIds();//已赞志愿者Ids
		if(currZanVolunIds != null && currZanVolunIds.length() > 0){
			String[] czvl = currZanVolunIds.split(",");
			for(int i=0;i<czvl.length;i++){
				if(czvl[i].equals(volunteerId)){//已赞过，不要再赞
					return new JsonResult<Posts>(3,"已赞过，不要再赞",null);
				}
			}
		}
		
		String upZanVolunIds = "";
		
		Posts updposts = new Posts();
		updposts.setId(id);
		updposts.setZan(1);
		if(currZanVolunIds == null || currZanVolunIds.length() <= 0){
			upZanVolunIds = volunteerId + ",";
		}else{
			upZanVolunIds = currZanVolunIds+volunteerId+",";
		}
		updposts.setZanVolunteerIds(upZanVolunIds);
		updposts.setUpdatedAt(new Timestamp(System.currentTimeMillis()));
		
		postsDao.updateZan(updposts);
		
		String upZanPostIds = "";
		if(zpids == null || zpids.length() <= 0){
			upZanPostIds = id + ",";
		}else{
			upZanPostIds = zpids+id+",";
		}
		Volunteers volunteers = new Volunteers();
		volunteers.setId(volunteerId);
		volunteers.setUpdatedAt(new Timestamp(System.currentTimeMillis()));
		volunteers.setZanPostIds(upZanPostIds);
		postsDao.updateZanVolunteers(volunteers);
		
		Posts posts2 = postsDao.selectByPostsId(id);
		return new JsonResult<Posts>(0,"点赞成功",posts2);
	}

	/**
	 * 删除社区帖子
	 */
	@Override
	public Integer deletePosts(Posts posts) {
		
		return postsDao.deletePosts(posts.getId());
	}

	/**
	 * 根据id获取社区帖子
	 */
	@Override
	public Posts getPostsById(String id) {
		
		return postsDao.selectByPostsId(id);
	}

	/**
	 * 根据志愿者Id获取所有社区帖子
	 */
	@Override
	public List<Posts> getPostsByVolunteerId(String volunteerId) {
		
		return postsDao.getPostsByVolunteerId(volunteerId);
	}

	/**
	 * 根据标题搜索帖子
	 */
	public PageInfo<Posts> getPostByTitle(String title, Integer pageNo,
			Integer pageSize) throws YichuangException{
		if(title == null){
			throw new YichuangException(1,"参数为空");
		}
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.startPage(pageNo, pageSize);
		List<Posts> list = postsDao.getPostByTitle(title);
		if(list != null){
			PageInfo<Posts> pageInfo = new PageInfo<Posts>(list);
			return pageInfo;
		}else {
			throw new YichuangException(2,"无结果");
		}
		
	}
	
}
