package com.yichuang.fuyang.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * 积分明细
 * @author Administrator
 *
 */
public class Creditrecord implements Serializable{

	
	private static final long serialVersionUID = -7358805552096302170L;


	private String id;
	private String volunteerId;
	//VT币更新时间
	private Date time;
	//VT变动描述
	private String creditrecord;
	//组织ID
	private String groupId;
	//操作VT币
	private double VTValue;
	//活动ID
	private String campaignId;
	
	
	
	public String getCampaignId() {
		return campaignId;
	}
	public void setCampaignId(String campaignId) {
		this.campaignId = campaignId;
	}
	public double getVTValue() {
		return VTValue;
	}
	public void setVTValue(double vTValue) {
		VTValue = vTValue;
	}
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getVolunteerId() {
		return volunteerId;
	}
	public void setVolunteerId(String volunteerId) {
		this.volunteerId = volunteerId;
	}
	public Date getTime() {
		return time;
	}
	public void setTime(Date time) {
		this.time = time;
	}
	public String getCreditrecord() {
		return creditrecord;
	}
	public void setCreditrecord(String creditrecord) {
		this.creditrecord = creditrecord;
	}
	public String getGroupId() {
		return groupId;
	}
	public void setGroupId(String groupId) {
		this.groupId = groupId;
	}
	
	
	
	
	
}
