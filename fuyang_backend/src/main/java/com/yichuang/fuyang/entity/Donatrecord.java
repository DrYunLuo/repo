package com.yichuang.fuyang.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * 捐赠记录
 * @author Administrator
 *
 */
public class Donatrecord implements Serializable{

	
	private static final long serialVersionUID = 8899191029857325496L;

	private String id;
	private String campaignId;
	private String volunteerId;
	private String leaveMessage;
	private Date messageTime;
	private Date donatTime;
	private double donationAmount;
	private Date createdTime;
	private Date updatedTime;
	private String goodsCode;
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public String getCampaignId() {
		return campaignId;
	}
	public void setCampaignId(String campaignId) {
		this.campaignId = campaignId;
	}
	public String getVolunteerId() {
		return volunteerId;
	}
	public void setVolunteerId(String volunteerId) {
		this.volunteerId = volunteerId;
	}
	public String getLeaveMessage() {
		return leaveMessage;
	}
	public void setLeaveMessage(String leaveMessage) {
		this.leaveMessage = leaveMessage;
	}
	public Date getMessageTime() {
		return messageTime;
	}
	public void setMessageTime(Date messageTime) {
		this.messageTime = messageTime;
	}
	public Date getDonatTime() {
		return donatTime;
	}
	public void setDonatTime(Date donatTime) {
		this.donatTime = donatTime;
	}
	public double getDonationAmount() {
		return donationAmount;
	}
	public void setDonationAmount(double donationAmount) {
		this.donationAmount = donationAmount;
	}
	public Date getCreatedTime() {
		return createdTime;
	}
	public void setCreatedTime(Date createdTime) {
		this.createdTime = createdTime;
	}
	public Date getUpdatedTime() {
		return updatedTime;
	}
	public void setUpdatedTime(Date updatedTime) {
		this.updatedTime = updatedTime;
	}
	public String getGoodsCode() {
		return goodsCode;
	}
	public void setGoodsCode(String goodsCode) {
		this.goodsCode = goodsCode;
	}
	
	
	
}
