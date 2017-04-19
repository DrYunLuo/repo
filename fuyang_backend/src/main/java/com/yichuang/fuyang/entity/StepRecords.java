package com.yichuang.fuyang.entity;

import java.io.Serializable;
import java.util.Date;

/**
 * 用户捐步记录
 * @author joke
 *
 */
public class StepRecords implements Serializable{

	/**
	 * 
	 */
	private static final long serialVersionUID = -2970280609805513578L;

	private String stepRecordsId;  //主键id
	private Integer steps;	//步数
	private Date stepTime;	//捐步时间
	private String userId;	//用户
	private Integer stepsCount;
	public String getStepRecordsId() {
		return stepRecordsId;
	}
	public void setStepRecordsId(String stepRecordsId) {
		this.stepRecordsId = stepRecordsId;
	}
	public Integer getSteps() {
		return steps;
	}
	public void setSteps(Integer steps) {
		this.steps = steps;
	}
	public Date getStepTime() {
		return stepTime;
	}
	public void setStepTime(Date stepTime) {
		this.stepTime = stepTime;
	}
	public String getUserId() {
		return userId;
	}
	public void setUserId(String userId) {
		this.userId = userId;
	}
	public Integer getStepsCount() {
		return stepsCount;
	}
	public void setStepsCount(Integer stepsCount) {
		this.stepsCount = stepsCount;
	}
	
}
