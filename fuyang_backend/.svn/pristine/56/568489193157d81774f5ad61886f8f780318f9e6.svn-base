package com.yichuang.fuyang.entity;

import java.io.Serializable;
import java.sql.Timestamp;
import java.util.List;

import javax.validation.constraints.Pattern;

import org.hibernate.validator.constraints.Email;
import org.hibernate.validator.constraints.NotBlank;

/**
 * 组织
 * 
 * @author Administrator
 * 
 */
public class Groups implements Serializable {

	private static final long serialVersionUID = -6076505531770290907L;

	private String id;
	@NotBlank
	private String name;
	private String description;
	@NotBlank
	private String institution;
	private Timestamp registrationDate;
	private String status;
	private String filed;
	private String imageUrl;
	private String phonenumber;
	private Integer campaignCount;
	private Timestamp createdAt;
	private Timestamp updatedAt;
	private String EnglishName;
	private String contactWork;
	@NotBlank
	private String address;
	private String regionid;
	@Email
	private String email;
	private String web;
	private String domains;
	@NotBlank
	private String contactsname;
	@NotBlank
	@Pattern(regexp = "^1(3[0-9]|4[57]|5[0-35-9]|7[0135678]|8[0-9])\\d{8}$", message = "手机格式不正确")
	private String contactstel;
	private String contactspost;
	// @NotBlank
	// @Pattern(regexp="/^(0|86|17951)?(13[0-9]|15[012356789]|17[678]|18[0-9]|14[57])[0-9]{8}$/",message="身份证号码输入不合法")
	private String contactsIscard;
	private String businessScope;
	/**
	 * 组织类型编码
	 */
	private String groupType;
	/**
	 * 组织类型描述
	 */
	private String groupTypeValue;
	private Float totalAssert;
	private Integer volTotal;
	private String logo;
	private String notes;
	private Timestamp loginTime;
	private Integer recommend;
	private String groupTypeId;
	private String groupCode;
	private String telephone;
	private String uid;
	private String pwd;
	private String token;
	private List<Campaigns> campaignsList;
	private int serverTime;
	private String inTime;
	private String checkBy;
	private String officeAddressImg;

	public String getOfficeAddressImg() {
		return officeAddressImg;
	}

	public void setOfficeAddressImg(String officeAddressImg) {
		this.officeAddressImg = officeAddressImg;
	}

	public String getGroupTypeValue() {
		return groupTypeValue;
	}

	public void setGroupTypeValue(String groupTypeValue) {
		this.groupTypeValue = groupTypeValue;
	}

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getInstitution() {
		return institution;
	}

	public void setInstitution(String institution) {
		this.institution = institution;
	}

	public Timestamp getRegistrationDate() {
		return registrationDate;
	}

	public void setRegistrationDate(Timestamp registrationDate) {
		this.registrationDate = registrationDate;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public String getFiled() {
		return filed;
	}

	public void setFiled(String filed) {
		this.filed = filed;
	}

	public String getImageUrl() {
		return imageUrl;
	}

	public void setImageUrl(String imageUrl) {
		this.imageUrl = imageUrl;
	}

	public String getPhonenumber() {
		return phonenumber;
	}

	public void setPhonenumber(String phonenumber) {
		this.phonenumber = phonenumber;
	}

	public Integer getCampaignCount() {
		return campaignCount;
	}

	public void setCampaignCount(Integer campaignCount) {
		this.campaignCount = campaignCount;
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

	public String getEnglishName() {
		return EnglishName;
	}

	public void setEnglishName(String englishName) {
		EnglishName = englishName;
	}

	public String getContactWork() {
		return contactWork;
	}

	public void setContactWork(String contactWork) {
		this.contactWork = contactWork;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}

	public String getRegionid() {
		return regionid;
	}

	public void setRegionid(String regionid) {
		this.regionid = regionid;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public String getWeb() {
		return web;
	}

	public void setWeb(String web) {
		this.web = web;
	}

	public String getDomains() {
		return domains;
	}

	public void setDomains(String domains) {
		this.domains = domains;
	}

	public String getContactsname() {
		return contactsname;
	}

	public void setContactsname(String contactsname) {
		this.contactsname = contactsname;
	}

	public String getContactstel() {
		return contactstel;
	}

	public void setContactstel(String contactstel) {
		this.contactstel = contactstel;
	}

	public String getContactspost() {
		return contactspost;
	}

	public void setContactspost(String contactspost) {
		this.contactspost = contactspost;
	}

	public String getContactsIscard() {
		return contactsIscard;
	}

	public void setContactsIscard(String contactsIscard) {
		this.contactsIscard = contactsIscard;
	}

	public String getBusinessScope() {
		return businessScope;
	}

	public void setBusinessScope(String businessScope) {
		this.businessScope = businessScope;
	}

	public String getGroupType() {
		return groupType;
	}

	public void setGroupType(String groupType) {
		this.groupType = groupType;
	}

	public Float getTotalAssert() {
		return totalAssert;
	}

	public void setTotalAssert(Float totalAssert) {
		this.totalAssert = totalAssert;
	}

	public Integer getVolTotal() {
		return volTotal;
	}

	public void setVolTotal(Integer volTotal) {
		this.volTotal = volTotal;
	}

	public String getLogo() {
		return logo;
	}

	public void setLogo(String logo) {
		this.logo = logo;
	}

	public String getNotes() {
		return notes;
	}

	public void setNotes(String notes) {
		this.notes = notes;
	}

	public Timestamp getLoginTime() {
		return loginTime;
	}

	public void setLoginTime(Timestamp loginTime) {
		this.loginTime = loginTime;
	}

	public Integer getRecommend() {
		return recommend;
	}

	public void setRecommend(Integer recommend) {
		this.recommend = recommend;
	}

	public String getGroupTypeId() {
		return groupTypeId;
	}

	public void setGroupTypeId(String groupTypeId) {
		this.groupTypeId = groupTypeId;
	}

	public String getGroupCode() {
		return groupCode;
	}

	public void setGroupCode(String groupCode) {
		this.groupCode = groupCode;
	}

	public String getTelephone() {
		return telephone;
	}

	public void setTelephone(String telephone) {
		this.telephone = telephone;
	}

	public String getUid() {
		return uid;
	}

	public void setUid(String uid) {
		this.uid = uid;
	}

	public String getPwd() {
		return pwd;
	}

	public void setPwd(String pwd) {
		this.pwd = pwd;
	}

	public String getToken() {
		return token;
	}

	public void setToken(String token) {
		this.token = token;
	}

	public List<Campaigns> getCampaignsList() {
		return campaignsList;
	}

	public void setCampaignsList(List<Campaigns> campaignsList) {
		this.campaignsList = campaignsList;
	}

	public int getServerTime() {
		return serverTime;
	}

	public void setServerTime(int serverTime) {
		this.serverTime = serverTime;
	}

	public String getInTime() {
		return inTime;
	}

	public void setInTime(String inTime) {
		this.inTime = inTime;
	}

	public String getCheckBy() {
		return checkBy;
	}

	public void setCheckBy(String checkBy) {
		this.checkBy = checkBy;
	}

	
	
	
}
