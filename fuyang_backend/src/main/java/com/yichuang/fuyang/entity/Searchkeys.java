package com.yichuang.fuyang.entity;

import java.io.Serializable;
import java.sql.Timestamp;

/**
 * 对应数据库中Searchkeys表
 * @author yml
 *
 */
public class Searchkeys implements Serializable {
	
	private static final long serialVersionUID = -8072128766113500510L;
	
	/*
	 * 
Field   TypeComment
_id     varchar(255) NOT NULL
key     varchar(255) NULL
count   int(11) NULL
createdAt   datetime NOT NULL
updatedAt   datetime NOT NULL
	 */
	
	private String id;
	private String key;
	private Integer count;
	private Timestamp createdAt;
	private Timestamp updatedAt;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getKey() {
		return key;
	}
	public void setKey(String key) {
		this.key = key;
	}
	public Integer getCount() {
		return count;
	}
	public void setCount(Integer count) {
		this.count = count;
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
	
	
}
