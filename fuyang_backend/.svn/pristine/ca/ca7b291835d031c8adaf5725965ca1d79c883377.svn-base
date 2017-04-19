package com.yichuang.fuyang.service;

import java.util.List;
import java.util.UUID;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.github.pagehelper.PageHelper;
import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.dao.NewsDao;
import com.yichuang.fuyang.entity.News;


@Service("NewsService")
public class NewsServiceImpl implements NewsService{

	@Autowired
	private NewsDao newsDao;
	
	/**
	 * 获取首页头图
	 */
	public PageInfo<News> getHeadNews(Integer pageNo,Integer pageSize){
		pageNo = pageNo ==null?1:pageNo;
		pageSize = pageSize == null?3:pageSize;
		PageHelper.orderBy("recommend desc");
		PageHelper.startPage(pageNo, pageSize);
		List<News> list = newsDao.getAllNews();
		PageInfo<News> pageInfo = new PageInfo<News>(list);
		return pageInfo;
	}
	

	/**
	 * 根据标题搜索热门新闻
	 */
	public PageInfo<News> getNewsByTitle(String title, Integer pageNo, Integer pageSize) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		if(title == null || title.trim() == ""){
			return new PageInfo<News>(null);
		}
		PageHelper.orderBy("recommend desc");
		PageHelper.startPage(pageNo,pageSize);
		List<News> list = newsDao.getNewsByTitle(title);
		PageInfo<News> pageInfo = new PageInfo<News>(list);
		return pageInfo;
	}
	

	/**
	 * 获取新闻详情
	 */
	public List<News> getNewById(String id) {
		List<News> list = newsDao.getNewById(id);
		return list;
	}

	
	/**
	 * 更新新闻热门度
	 */
	public boolean updateRecommend(String id) {
		if(id == null || id.trim()==""){
			return false;
		}
		newsDao.updateRecommend(id);
		return true;
	}

	
	/**
	 * 最新新闻排序
	 */
	public PageInfo<News> getNewNews(Integer pageNo, Integer pageSize) {
		pageNo = pageNo == null?1:pageNo ;
		pageSize = pageSize ==null?10:pageSize;
		PageHelper.orderBy("createdAt desc");
		PageHelper.startPage(pageNo, pageSize);
		List<News> list = newsDao.getAllNews();
		PageInfo<News> pageInfo = new PageInfo<News>(list);
		return pageInfo;
	}

	
	/**
	 * 根据热门度排序新闻
	 */
	public PageInfo<News> getRecommendNews(Integer pageNo, Integer pageSize) {
		pageNo = pageNo ==null?1:pageNo;
		pageSize = pageSize ==null?10:pageSize;
		PageHelper.orderBy("recommend desc");
		PageHelper.startPage(pageNo, pageSize);
		List<News> list = newsDao.getAllNews();
		PageInfo<News> pageInfo = new PageInfo<News>(list);
		return pageInfo;
	}

	
	/**
	 * 获取所有新闻
	 */
	public PageInfo<News> allNews(Integer pageNo, Integer pageSize) {
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.startPage(pageNo, pageSize);
		List<News> list = newsDao.getAllNews();
		PageInfo<News> pageInfo = new PageInfo<News>(list);
		return pageInfo;
	}
	
	/**
	 * 动态获取新闻列表
	 */
	public PageInfo<News> newsDynamic(Integer pageNo,Integer pageSize,News news){
		pageNo = pageNo == null?1:pageNo;
		pageSize = pageSize == null?10:pageSize;
		PageHelper.orderBy("createdAt desc");
		PageHelper.startPage(pageNo, pageSize);
		List<News> list = newsDao.getNewsDynamic(news);
		PageInfo<News> pageInfo = new PageInfo<News>(list);
		return pageInfo;
	}


	/**
	 * 根据地删除新闻
	 */
	@Override
	public void deleteById(String id) {
		newsDao.deleteById(id);
	}


	/**
	 * 发布新闻
	 */
	@Override
	public void saveNews(News news) {
		news.setId(UUID.randomUUID().toString());
		newsDao.saveNews(news);
	}


	/**
	 * 修改新闻
	 */
	@Override
	public void updateById(News news) {
		newsDao.updateById(news);
	}


	
	
	
	
}
