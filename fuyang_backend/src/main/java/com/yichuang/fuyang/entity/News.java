package com.yichuang.fuyang.entity;

import java.io.Serializable;
import java.sql.Timestamp;

public class News implements Serializable{

	/**
	 * 新闻
	 */
	private static final long serialVersionUID = -526939972963619617L;

	private String id;
	private String content;
	private String url;
	private Timestamp time;
	private int zan;
	private String pass;
	private String title;
	private String image;
	private String hottest;
	private Integer recommend;
	private Timestamp updatedAt;
	private Timestamp createdAt;
	private String status;
	private String newsType;
	private String author;
	/**
	 * 标题图片url
	 */
	private String titleImgUrl;
	/**
	 * 新闻摘要
	 */
	private String summary;
	/**
	 * 是否将标题图片作为新闻轮播图，1表示作为轮播图 0和空表示不作为轮播图
	 */
	private String isPublish;
	
	public String getIsPublish() {
		return isPublish;
	}
	public void setIsPublish(String isPublish) {
		this.isPublish = isPublish;
	}
	public String getTitleImgUrl() {
		return titleImgUrl;
	}
	public void setTitleImgUrl(String titleImgUrl) {
		this.titleImgUrl = titleImgUrl;
	}
	public String getSummary() {
		return summary;
	}
	public void setSummary(String summary) {
		this.summary = summary;
	}
	public String getAuthor() {
		return author;
	}
	public void setAuthor(String author) {
		this.author = author;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public Timestamp getTime() {
		return time;
	}
	public void setTime(Timestamp time) {
		this.time = time;
	}
	public int getZan() {
		return zan;
	}
	public void setZan(int zan) {
		this.zan = zan;
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public String getHottest() {
		return hottest;
	}
	public void setHottest(String hottest) {
		this.hottest = hottest;
	}
	public Integer getRecommend() {
		return recommend;
	}
	public void setRecommend(Integer recommend) {
		this.recommend = recommend;
	}
	public Timestamp getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(Timestamp updatedAt) {
		this.updatedAt = updatedAt;
	}
	public Timestamp getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Timestamp createdAt) {
		this.createdAt = createdAt;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public String getNewsType() {
		return newsType;
	}
	public void setNewsType(String newsType) {
		this.newsType = newsType;
	}
	
	
	
	
}
