package com.yichuang.fuyang.entity;

import java.io.Serializable;
import java.sql.Timestamp;

/**
 * 社区帖子评论
 * 对应数据库中PostAtoms
 * @author Administrator
 *
 */
public class PostAtoms implements Serializable {

	private static final long serialVersionUID = -7533896492014204484L;
	/*
	 * 
Field         TypeComment
_id           varchar(255) NOT NULL
content       text NULL
time          datetime NULL
createdAt     datetime NOT NULL
updatedAt     datetime NOT NULL
VolunteerId   varchar(255) NULL
PostId        varchar(255) NULL
NewId         varchar(255) NULL
	 */
	private String id;
	private String content;//内容
	private Timestamp time;
	private Timestamp createdAt;
	private Timestamp updatedAt;
	private String VolunteerId;//志愿者Id
	private String PostId;//社区帖子Id
	private String NewId;
	private String postatomsId;
	private Volunteers volunteers;
	
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
	public Timestamp getTime() {
		return time;
	}
	public void setTime(Timestamp time) {
		this.time = time;
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
	public String getPostId() {
		return PostId;
	}
	public void setPostId(String postId) {
		PostId = postId;
	}
	public String getNewId() {
		return NewId;
	}
	public void setNewId(String newId) {
		NewId = newId;
	}
	public String getPostatomsId() {
		return postatomsId;
	}
	public void setPostatomsId(String postatomsId) {
		this.postatomsId = postatomsId;
	}
	public Volunteers getVolunteers() {
		return volunteers;
	}
	public void setVolunteers(Volunteers volunteers) {
		this.volunteers = volunteers;
	}
	
	

	
}
