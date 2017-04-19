package com.yichuang.fuyang.entity;

import java.io.Serializable;

/**
 * 对应VolunteerService表
 * @author yml
 *
 */
public class VolunteerService implements Serializable {

	private static final long serialVersionUID = 8089681973267130321L;
	/*
	 * 
  Field      TypeComment
  _id        varchar(255) NOT NULL
  title      varchar(255) NULL
  sequence   int(11) NULL
	 */
	private String id;
	private String title;
	private Integer sequence;
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public static long getSerialversionuid() {
		return serialVersionUID;
	}
	public String getTitle() {
		return title;
	}
	public void setTitle(String title) {
		this.title = title;
	}
	public Integer getSequence() {
		return sequence;
	}
	public void setSequence(Integer sequence) {
		this.sequence = sequence;
	}
	

	
	
}
