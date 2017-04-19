package com.yichuang.fuyang.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * 系统通知公告
 * @author Administrator
 *
 */
public class Announcements implements Serializable{

	
	private static final long serialVersionUID = 4700174750968887353L;

	private String id;
	private String title;
	private String content;
	private String image;
	private Date createdAt;
	
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public String getImage() {
		return image;
	}
	public void setImage(String image) {
		this.image = image;
	}
	public Date getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Date createdAt) {
		this.createdAt = createdAt;
	}
	
	
	
	
}
