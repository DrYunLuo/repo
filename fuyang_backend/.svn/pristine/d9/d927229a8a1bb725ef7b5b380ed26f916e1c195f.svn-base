package com.yichuang.fuyang.entity;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

/**
 * 社区帖子
 * 对应数据库中posts表（帖子、邮件）
 * @author Administrator
 *
 */
public class Posts implements Serializable {

	private static final long serialVersionUID = -3373156310410491257L;
	/*
	 * 
Field      TypeComment
_id        varchar(255) NOT NULL
content    text NULL
url        varchar(255) NULL
time       datetime NULL
zan        int(11) NULL
pass       varchar(255) NULL
createdAt  datetime NOT NULL
updatedAt  datetime NOT NULL
VolunteerId   varchar(255) NULL
PostPlateId   varchar(255) NULL
	 */
	private String id;
	private String title;//标题
	private String content;//帖子内容
	private String url;//帖子图片地址
	private Timestamp time;
	private Integer zan;//点赞数
	private String pass;
	private Timestamp createdAt;
	private Timestamp updatedAt;
	private String VolunteerId;//志愿者Id
	private String PostPlateId;
	private String zanVolunteerIds;//点赞志愿者Id列表，格式以","隔开
	private List<Volunteers> listVolunteers;
	
	public List<Volunteers> getListVolunteers() {
		return listVolunteers;
	}
	public void setListVolunteers(List<Volunteers> listVolunteers) {
		this.listVolunteers = listVolunteers;
	}
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
	public Integer getZan() {
		return zan;
	}
	public void setZan(Integer zan) {
		this.zan = zan;
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	public Timestamp getCreatedAt() {
		return createdAt;
	}
	public void setCreatedAt(Timestamp createdAt) {
		this.createdAt = createdAt;
	}
	public Timestamp getUpdatedAt() {
		return updatedAt;
	}
	public void setUpdatedAt(Timestamp updatedAt) {
		this.updatedAt = updatedAt;
	}
	public String getVolunteerId() {
		return VolunteerId;
	}
	public void setVolunteerId(String volunteerId) {
		VolunteerId = volunteerId;
	}
	public String getPostPlateId() {
		return PostPlateId;
	}
	public void setPostPlateId(String postPlateId) {
		PostPlateId = postPlateId;
	}
	public String getZanVolunteerIds() {
		return zanVolunteerIds;
	}
	public void setZanVolunteerIds(String zanVolunteerIds) {
		this.zanVolunteerIds = zanVolunteerIds;
	}
	
	

	
	
	
}






