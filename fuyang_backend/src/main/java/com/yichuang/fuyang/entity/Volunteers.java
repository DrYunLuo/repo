package com.yichuang.fuyang.entity;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.Date;

/**
 * 对应数据库中Volunteers表
 * @author yml
 *
 */
public class Volunteers implements Serializable {
	
	private static final long serialVersionUID = 8680776958793790772L;
	
	

	private String id;
	private String realname;
	private Integer duration;
	private Integer quality;
	private String photo;
	private Timestamp createdAt;
	private Timestamp updatedAt;
	private String GroupId;
	private String sex;
	private Integer age;
	private String raceId;
	private String identification;
	private String educationId;
	private String emplee;
	private String tradeId;
	private String tel;
	private String email;
	private String cardId;
	private String homeAddress;
	private String regionId;
	private String illness;
	private String illnessExplain;
	private String experience;
	private String specialty;
	//管理员审核志愿者备注
	private String notes;
	private Integer serviceTime;
	private String status;
	private Timestamp loginTime;
	private String blood;
	private String GroupCheck;
	private String party;
	private String cardType;    //证件类型 -- 身份证
	private String nativePlace; //籍贯
	private String workAddress; //应届毕业
	private String qq;  //QQ号
	private String serviceArea;   //志愿服务领域
	private Integer campaignTotal;//参与活动数
	private Integer studying;//是否在读
	private String studentId;//学号
	//组织审核志愿者备注
	private String groupCheckNotes;
	private String school;
	private Date birth;
	private String nickname;
	//模糊查询条件 姓名
	private String sRealName;
	//模糊查询条件 手机号
	private String sTel;
	//组织信息
	private Groups groups;
	private String groupName;//组织名称
	private Integer credit;//积分
	private Integer ranking; //排行时长
	private String zanPostIds;//已赞社区帖子Id列表
	
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
	
	public Groups getGroups() {
		return groups;
	}
	public void setGroups(Groups groups) {
		this.groups = groups;
	}
	public String getNickname() {
		return nickname;
	}
	public void setNickname(String nickname) {
		this.nickname = nickname;
	}
	public Date getBirth() {
		return birth;
	}
	public void setBirth(Date birth) {
		this.birth = birth;
	}
	public String getSchool() {
		return school;
	}
	public void setSchool(String school) {
		this.school = school;
	}
	public String getGroupCheckNotes() {
		return groupCheckNotes;
	}
	public void setGroupCheckNotes(String groupCheckNotes) {
		this.groupCheckNotes = groupCheckNotes;
	}
	public Integer getStudying() {
		return studying;
	}
	public void setStudying(Integer studying) {
		this.studying = studying;
	}
	public String getStudentId() {
		return studentId;
	}
	public void setStudentId(String studentId) {
		this.studentId = studentId;
	}
	public Integer getCampaignTotal() {
		return campaignTotal;
	}
	public void setCampaignTotal(Integer campaignTotal) {
		this.campaignTotal = campaignTotal;
	}
	public String getCardType() {
		return cardType;
	}
	public void setCardType(String cardType) {
		this.cardType = cardType;
	}
	public String getNativePlace() {
		return nativePlace;
	}
	public void setNativePlace(String nativePlace) {
		this.nativePlace = nativePlace;
	}
	public String getWorkAddress() {
		return workAddress;
	}
	public void setWorkAddress(String workAddress) {
		this.workAddress = workAddress;
	}
	public String getQq() {
		return qq;
	}
	public void setQq(String qq) {
		this.qq = qq;
	}
	public String getServiceArea() {
		return serviceArea;
	}
	public void setServiceArea(String serviceArea) {
		this.serviceArea = serviceArea;
	}
	
	public String getId() {
		return id;
	}
	public void setId(String id) {
		this.id = id;
	}
	public void setGroupId(String groupId) {
		GroupId = groupId;
	}
	public String getRealname() {
		return realname;
	}
	public void setRealname(String realname) {
		this.realname = realname;
	}
	public Integer getDuration() {
		return duration;
	}
	public void setDuration(Integer duration) {
		this.duration = duration;
	}
	public Integer getQuality() {
		return quality;
	}
	public void setQuality(Integer quality) {
		this.quality = quality;
	}
	public String getPhoto() {
		return photo;
	}
	public void setPhoto(String photo) {
		this.photo = photo;
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
	
	public String getGroupId() {
		return GroupId;
	}
	public String getSex() {
		return sex;
	}
	public void setSex(String sex) {
		this.sex = sex;
	}
	public Integer getAge() {
		return age;
	}
	public void setAge(Integer age) {
		this.age = age;
	}
	public String getRaceId() {
		return raceId;
	}
	public void setRaceId(String raceId) {
		this.raceId = raceId;
	}
	

	public String getIdentification() {
		return identification;
	}
	public void setIdentification(String identification) {
		this.identification = identification;
	}
	public String getEducationId() {
		return educationId;
	}
	public void setEducationId(String educationId) {
		this.educationId = educationId;
	}
	public String getEmplee() {
		return emplee;
	}
	public void setEmplee(String emplee) {
		this.emplee = emplee;
	}
	public String getTradeId() {
		return tradeId;
	}
	public void setTradeId(String tradeId) {
		this.tradeId = tradeId;
	}
	public String getTel() {
		return tel;
	}
	public void setTel(String tel) {
		this.tel = tel;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getCardId() {
		return cardId;
	}
	public void setCardId(String cardId) {
		this.cardId = cardId;
	}
	public String getHomeAddress() {
		return homeAddress;
	}
	public void setHomeAddress(String homeAddress) {
		this.homeAddress = homeAddress;
	}
	public String getRegionId() {
		return regionId;
	}
	public void setRegionId(String regionId) {
		this.regionId = regionId;
	}
	public String getIllness() {
		return illness;
	}
	public void setIllness(String illness) {
		this.illness = illness;
	}
	public String getIllnessExplain() {
		return illnessExplain;
	}
	public void setIllnessExplain(String illnessExplain) {
		this.illnessExplain = illnessExplain;
	}
	public String getExperience() {
		return experience;
	}
	public void setExperience(String experience) {
		this.experience = experience;
	}
	public String getSpecialty() {
		return specialty;
	}
	public void setSpecialty(String specialty) {
		this.specialty = specialty;
	}
	public String getNotes() {
		return notes;
	}
	public void setNotes(String notes) {
		this.notes = notes;
	}
	public Integer getServiceTime() {
		return serviceTime;
	}
	public void setServiceTime(Integer serviceTime) {
		this.serviceTime = serviceTime;
	}
	public String getStatus() {
		return status;
	}
	public void setStatus(String status) {
		this.status = status;
	}
	public Timestamp getLoginTime() {
		return loginTime;
	}
	public void setLoginTime(Timestamp loginTime) {
		this.loginTime = loginTime;
	}
	public String getBlood() {
		return blood;
	}
	public void setBlood(String blood) {
		this.blood = blood;
	}
	public String getGroupCheck() {
		return GroupCheck;
	}
	public void setGroupCheck(String groupCheck) {
		GroupCheck = groupCheck;
	}
	public String getParty() {
		return party;
	}
	public void setParty(String party) {
		this.party = party;
	}
	public Integer getCredit() {
		return credit;
	}
	public void setCredit(Integer credit) {
		this.credit = credit;
	}
	public Integer getRanking() {
		return ranking;
	}
	public void setRanking(Integer ranking) {
		this.ranking = ranking;
	}
	public String getGroupName() {
		return groupName;
	}
	public void setGroupName(String groupName) {
		this.groupName = groupName;
	}
	public String getZanPostIds() {
		return zanPostIds;
	}
	public void setZanPostIds(String zanPostIds) {
		this.zanPostIds = zanPostIds;
	}


	

	

	
		
}