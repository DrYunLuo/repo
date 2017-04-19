package com.yichuang.fuyang.service;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

/**
 * 记录相关路径的东西
 * 
 * @author Ubuntu
 *
 */
@Service
public class PropertyService {
	@Value("${REMOTE_IMAGE_ORGANIZATIONS}")
	public String REMOTE_IMAGE_ORGANIZATIONS;

	@Value("${REMOTE_IMAGE_PHOTO}")
	public String REMOTE_IMAGE_PHOTO;

	@Value("${REMOTE_IMAGE_ACTIVE}")
	public String REMOTE_IMAGE_ACTIVE;

	@Value("${REMOTE_IMAGE_NEWS}")
	public String REMOTE_IMAGE_NEWS;

	@Value("${REMOTE_IMAGE_PERSON}")
	public String REMOTE_IMAGE_PERSON;

	@Value("${REMOTE_IMAGE_POST}")
	public String REMOTE_IMAGE_POST;
	
	@Value("${REMOTE_IMAGE_FOLDER}")
	public String REMOTE_IMAGE_FOLDER;

	@Value("${KEY}")
	public String KEY;

	@Value("${REMOTE_IMAGE_IP}")
	public String REMOTE_IMAGE_IP;

	@Value("${REMOTE_IMAGE_USERNAME}")
	public String REMOTE_IMAGE_USERNAME;

	@Value("${REMOTE_IMAGE_PASSWORD}")
	public String REMOTE_IMAGE_PASSWORD;

	@Value("${REMOTE_IMAGE_PORT}")
	public int REMOTE_IMAGE_PORT;
	
	@Value("${SESSION_USER}")
	public String SESSION_USER;

	@Value("${USERTYPE_VOL}")
	public String USERTYPE_VOL;
	
	@Value("${USERTYPE_GRO}")
	public String USERTYPE_GRO;
	
	@Value("${USERTYPE_MAN}")
	public String USERTYPE_MAN;
	
	//活动分享地址
	@Value("${CAMPAIGHS_SHARE_URL}")
	public String CAMPAIGHS_SHARE_URL;
	
	//新闻分享地址
	@Value("${NEWS_SHARE_URL}")
	public String NEWS_SHARE_URL;

	@Value("${CODE_PARTY}")
	public String CODE_PARTY;
	
	@Value("${CODE_RACEID}")
	public String CODE_RACEID;
	
	@Value("${CODE_TRADEID}")
	public String CODE_TRADEID;
	
	@Value("${CODE_EDUCATIONID}")
	public String CODE_EDUCATIONID;
	
	@Value("${CODE_SPECIALTY}")
	public String CODE_SPECIALTY;
	
	@Value("${CODE_SERVICEAREA}")
	public String CODE_SERVICEAREA;
	
	//积分
	@Value("${ACCOUNT_SIGNIN}")
	public Integer ACCOUNT_SIGNIN;
	
	@Value("${ACCOUNT_SHARECAM}")
	public Integer ACCOUNT_SHARECAM;
	
	@Value("${ACCOUNT_SHAREAPP}")
	public Integer ACCOUNT_SHAREAPP;
	
	@Value("${ACCOUNT_TAST}")
	public Integer ACCOUNT_TAST;
	@Value("${REMOTE_NEWS_EDITOR}")
	public String REMOTE_NEWS_EDITOR;
	@Value("${OFFICIAL_SITE}")
	public String OFFICIAL_SITE;
	
	@Value("${REMOTE_NEWS_EDITOR_LOOK}")
	public String REMOTE_NEWS_EDITOR_LOOK;
	
	@Value("${REMOTE_IMAGE_NEWS_TITLE}")
	public String REMOTE_IMAGE_NEWS_TITLE;
	
	@Value("${REMOTE_IMAGE_NEWS_LOOK}")
	public String REMOTE_IMAGE_NEWS_LOOK;
	
	@Value("${REMOTE_IMAGE_ACTIVITY}")
	public String REMOTE_IMAGE_ACTIVITY;
	
	@Value("${REMOTE_IMAGE_ACTIVITY_LOOK}")
	public String REMOTE_IMAGE_ACTIVITY_LOOK;
	
	@Value("${REMOTE_IMAGE_ORGANIZATIONS_LOOK}")
	public String REMOTE_IMAGE_ORGANIZATIONS_LOOK;
	
	@Value("${REMOTE_IMAGE_PHOTO_LOOK}")
	public String REMOTE_IMAGE_PHOTO_LOOK;
	
	@Value("${REMOTE_IMAGE_POST_LOOK}")
	public String REMOTE_IMAGE_POST_LOOK;
	
	@Value("${REMOTE_IMAGE_FOLDER_LOOK}")
	public String REMOTE_IMAGE_FOLDER_LOOK;
}
