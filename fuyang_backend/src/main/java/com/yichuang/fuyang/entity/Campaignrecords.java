package com.yichuang.fuyang.entity;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;


/**
 * 志愿者参与活动记录
 * @author Administrator
 *
 */
public class Campaignrecords implements Serializable{

	
	private static final long serialVersionUID = 2712940428191753510L;

	private String id;
	private Integer volduration;
	private String volquality;
	private Timestamp createdAt;
	private Timestamp updatedAt;
	private String VolunteerId;
	private String CampaignId;
	private String volnotes;
	private Timestamp voltimes;
	private Integer groupduration;
	private String groupquality;
	private String groupnotes;
	private Timestamp grouptime;
	private Timestamp volpartaketime;
	//志愿者加入活动审核标识
	private String iscalc;
	//志愿者进入活动的时间
	private String enterTime;
	//志愿者离开活动的时间
	private String leaveTime;
	//志愿者姓名
	private String realname;
	//活动名称
	private String title;
	//活动简介
	private String description;
	//发布活动的组织ID
	private String groupId;
	//审核操作备注
	private String auditNotes;
	//是否发放过积分
	private Integer payFlag;
	//志愿者手机号
	private String tel;
	//模糊查询条件 姓名
	private String sRealName;
	//模糊查询条件 手机号
	private String sTel;
	
	private Campaigns campaigns;

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public Integer getVolduration() {
		return volduration;
	}

	public void setVolduration(Integer volduration) {
		this.volduration = volduration;
	}

	public String getVolquality() {
		return volquality;
	}

	public void setVolquality(String volquality) {
		this.volquality = volquality;
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

	public String getCampaignId() {
		return CampaignId;
	}

	public void setCampaignId(String campaignId) {
		CampaignId = campaignId;
	}

	public String getVolnotes() {
		return volnotes;
	}

	public void setVolnotes(String volnotes) {
		this.volnotes = volnotes;
	}

	public Timestamp getVoltimes() {
		return voltimes;
	}

	public void setVoltimes(Timestamp voltimes) {
		this.voltimes = voltimes;
	}

	public Integer getGroupduration() {
		return groupduration;
	}

	public void setGroupduration(Integer groupduration) {
		this.groupduration = groupduration;
	}

	public String getGroupquality() {
		return groupquality;
	}

	public void setGroupquality(String groupquality) {
		this.groupquality = groupquality;
	}

	public String getGroupnotes() {
		return groupnotes;
	}

	public void setGroupnotes(String groupnotes) {
		this.groupnotes = groupnotes;
	}

	public Timestamp getGrouptime() {
		return grouptime;
	}

	public void setGrouptime(Timestamp grouptime) {
		this.grouptime = grouptime;
	}

	public Timestamp getVolpartaketime() {
		return volpartaketime;
	}

	public void setVolpartaketime(Timestamp volpartaketime) {
		this.volpartaketime = volpartaketime;
	}

	public String getIscalc() {
		return iscalc;
	}

	public void setIscalc(String iscalc) {
		this.iscalc = iscalc;
	}

	public String getEnterTime() {
		return enterTime;
	}

	public void setEnterTime(String enterTime) {
		this.enterTime = enterTime;
	}

	public String getLeaveTime() {
		return leaveTime;
	}

	public void setLeaveTime(String leaveTime) {
		this.leaveTime = leaveTime;
	}

	public String getRealname() {
		return realname;
	}

	public void setRealname(String realname) {
		this.realname = realname;
	}

	public String getTitle() {
		return title;
	}

	public void setTitle(String title) {
		this.title = title;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getGroupId() {
		return groupId;
	}

	public void setGroupId(String groupId) {
		this.groupId = groupId;
	}

	public String getAuditNotes() {
		return auditNotes;
	}

	public void setAuditNotes(String auditNotes) {
		this.auditNotes = auditNotes;
	}

	public Integer getPayFlag() {
		return payFlag;
	}

	public void setPayFlag(Integer payFlag) {
		this.payFlag = payFlag;
	}

	public String getTel() {
		return tel;
	}

	public void setTel(String tel) {
		this.tel = tel;
	}

	public String getsRealName() {
		return sRealName;
	}

	public void setsRealName(String sRealName) {
		this.sRealName = sRealName;
	}

	public String getsTel() {
		return sTel;
	}

	public void setsTel(String sTel) {
		this.sTel = sTel;
	}

	public Campaigns getCampaigns() {
		return campaigns;
	}

	public void setCampaigns(Campaigns campaigns) {
		this.campaigns = campaigns;
	}
	
	
	
	
	
	
}
