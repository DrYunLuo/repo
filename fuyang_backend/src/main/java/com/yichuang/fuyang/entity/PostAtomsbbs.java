package com.yichuang.fuyang.entity;

import java.io.Serializable;
import java.util.Date;


/**
 * 论坛帖子评论
 * @author Administrator
 *
 */
public class PostAtomsbbs  implements Serializable{

	
	private static final long serialVersionUID = -2467855302761891462L;

	private String id;
	private String postId;
	private String volunteerId;
	private String content;
	private Date time;
	private Volunteers volunteers;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getPostId() {
		return postId;
	}
	public void setPostId(String postId) {
		this.postId = postId;
	}
	public String getVolunteerId() {
		return volunteerId;
	}
	public void setVolunteerId(String volunteerId) {
		this.volunteerId = volunteerId;
	}
	public String getContent() {
		return content;
	}
	public void setContent(String content) {
		this.content = content;
	}
	public Date getTime() {
		return time;
	}
	public void setTime(Date time) {
		this.time = time;
	}
	public Volunteers getVolunteers() {
		return volunteers;
	}
	public void setVolunteers(Volunteers volunteers) {
		this.volunteers = volunteers;
	}
	@Override
	public String toString() {
		return "PostAtomsbbs [id:" + id + ", postId:" + postId
				+ ", volunteerId:" + volunteerId + ", content:" + content
				+ ", time:" + time + "]";
	}
	
	
	

}
