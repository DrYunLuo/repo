package com.yichuang.fuyang.dao;

import java.util.List;
import org.apache.ibatis.annotations.Param;
import com.yichuang.fuyang.entity.News;


public interface NewsDao {

	
	/***
	 * 获取所有新闻
	 */
	List<News> getAllNews();
	
	List<News> getNewsDynamic(News news);
	
	
	/**
	 * 根据标题查询新闻
	 * @param title
	 * @return
	 */
	List<News> getNewsByTitle(@Param("title") String title);
	
	
	/**
	 * 根据id查询新闻
	 * @param id
	 * @return
	 */
	List<News> getNewById(String id);
	
	
	/**
	 * 根据id更新热门度
	 * @param id
	 */
	public void updateRecommend(String id);
	
	
	/**
	 * 添加新闻
	 * @param news
	 */
	void saveNews(News news);
	
	/**
	 * 根据id删除新闻
	 * @param id
	 */
	void deleteById(String id);
	
	/**
	 * 修改新闻
	 * @param news
	 */
	void updateById(News news);
}
