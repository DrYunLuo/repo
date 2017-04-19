package com.yichuang.fuyang.entity;

import java.io.Serializable;
import java.sql.Timestamp;

public class Markrecords implements Serializable{

	
	private static final long serialVersionUID = 3810934245062588582L;

	private int id;
	private Timestamp time;
	private Timestamp createdAt;
	private Timestamp updatedAt;
	private String VolunteerId;
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
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

	
}
