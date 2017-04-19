package com.yichuang.fuyang.entity;

import java.io.Serializable;
import java.sql.Timestamp;

/**
 * 对应数据库中VolunteerCampaigns表
 * @author yml
 *
 */
public class VolunteerCampaigns implements Serializable {

	private static final long serialVersionUID = 5268304756099383803L;
	/*
	 * 
Field          TypeComment
_id            int(11) NOT NULL
createdAt      datetime NOT NULL
updatedAt      datetime NOT NULL
CampaignId     varchar(255) NULL
VolunteerId    varchar(255) NULL
status         int(11) NULL
	 */
	private String id;
	private Timestamp createdAt;
	private Timestamp updatedAt;
	private String CampaignId;
	private String VolunteerId;
	private String status;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
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
	public String getCampaignId() {
		return CampaignId;
	}
	public void setCampaignId(String campaignId) {
		CampaignId = campaignId;
	}
	public String getVolunteerId() {
		return VolunteerId;
	}
	public void setVolunteerId(String volunteerId) {
		VolunteerId = volunteerId;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	
	
}
