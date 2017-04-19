package com.yichuang.fuyang.service;

import java.util.List;
import org.springframework.stereotype.Service;
import com.github.pagehelper.PageInfo;
import com.yichuang.fuyang.entity.News;


@Service
public interface NewsService {
	
	
	/**
	 * 获取头条
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<News> getHeadNews(Integer pageNo,Integer pageSize);
	

	/**
	 * 最新新闻
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<News> getNewNews(Integer pageNo,Integer pageSize);
	
	
	/**
	 * 最热新闻
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<News> getRecommendNews(Integer pageNo,Integer pageSize);
	
	
	/**
	 * 新闻详情
	 * @param id
	 * @return
	 */
	List<News> getNewById(String id);
	
	
	/**
	 * 更新热门度
	 * @param id
	 */
	public boolean updateRecommend(String id);
	
	
	/**
	 * 根据标题获取新闻
	 * @param title
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<News> getNewsByTitle(String title,Integer pageNo,Integer pageSize);
	
	/**
	 * 获取所有新闻列表
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<News> allNews(Integer pageNo,Integer pageSize);
	
	/**
	 * 获取所有新闻列表
	 * @param pageNo
	 * @param pageSize
	 * @return
	 */
	PageInfo<News> newsDynamic(Integer pageNo,Integer pageSize,News news);
	
	/**
	 * 根据id删除新闻
	 * @param id
	 */
	void deleteById(String id);
	
	
	/**
	 * 发布新闻
	 * @param news
	 */
	void saveNews(News news);
	
	
	/**
	 * 修改新闻
	 * @param news
	 */
	void updateById(News news);
}
