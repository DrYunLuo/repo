package com.yichuang.fuyang.util;
/**
 * 接口返回信息
 * @author zhuoming
 *
 */
public class DefaultResponse {
	//返回码
	private int code;
	//返回信息
	private String message;
	
	public DefaultResponse(int code, String message){
		this.code = code;
		this.message = message;
	}
	public int getCode() {
		return code;
	}
	public void setCode(int code) {
		this.code = code;
	}
	public String getMessage() {
		return message;
	}
	public void setMessage(String message) {
		this.message = message;
	}
	@Override
	public String toString() {
		return "DefaultResponse [code=" + code + ", message=" + message + "]";
	}
	/**
	 * 操作成功
	 */
	public static DefaultResponse SUCCESS = new DefaultResponse(0,"操作成功");
	/**
	 *  操作失败
	 */
	public static DefaultResponse OPERATE_ERROR = new DefaultResponse(1001,"操作失败");
	/**
	 *  查询错误
	 */
	public static DefaultResponse QUERY_ERROR = new DefaultResponse(1002,"查询错误");
	/**
	 * 删除出错
	 */
	public static DefaultResponse DELETE_ERROR = new DefaultResponse(1003,"删除出错");
	/**
	 * 更新出错
	 */
	public static DefaultResponse UPDATE_ERROR = new DefaultResponse(1004,"更新出错");
	/**
	 * 添加出错
	 */
	public static DefaultResponse INSERT_ERROR = new DefaultResponse(1005,"添加出错");
	/**
	 * 参数为空
	 */
	public static DefaultResponse PARAM_NULL_ERROR = new DefaultResponse(1006,"参数为空");
	/**
	 * 志愿者不存在
	 */
	public static DefaultResponse VOLUN_NOT_EXISTED = new DefaultResponse(1007,"志愿者不存在");
	/**
	 * 查询不到结果
	 */
	public static DefaultResponse RESULT_NULL_ERROR = new DefaultResponse(2001, "查询不到结果");
	// and so on ...
	/**
	 * token失效
	 */
	public static DefaultResponse TOKEN_NULL_ERROR = new DefaultResponse(2002, "token失效");
	
	/**
	 * 数据已存在
	 */
	public static DefaultResponse RESULT_EXISTED = new DefaultResponse(2003, "数据已存在");
	/**
	 * 该活动已经开始,停止报名
	 */
	public static DefaultResponse ALREADY_START = new DefaultResponse(2004, "该活动已经开始,停止报名");
	/**
	 * 该活动参与人数已满停止报名
	 */
	public static DefaultResponse FULL_NUMBER = new DefaultResponse(2005, "该活动参与人数已满停止报名");
	/**
	 * 您已申请过此活动，没有通过审核，看看其他活动吧！
	 */
	public static DefaultResponse ALREADY_PART_REJECT = new DefaultResponse(2006, "您已申请过此活动，没有通过审核，看看其他活动吧！");
	/**
	 * 您已申请并已通过审核，请准时参加！
	 */
	public static DefaultResponse ALREADY_PART_PASS = new DefaultResponse(2007, "您已申请并已通过审核，请准时参加！");
	/**
	 * 您已申请过此活动，请勿重复申请，耐心等待审核！
	 */
	public static DefaultResponse ALREADY_PART_NOAUDIT = new DefaultResponse(2008, "您已申请过此活动，请勿重复申请，耐心等待审核！");
	
	/**
	 * 未查询到此活动，请重新刷新页面后重试
	 */
	public static DefaultResponse NO_PART_EXIST = new DefaultResponse(2009, "未查询到此活动，请重新刷新页面后重试");
	/**
	 * 对比结果不同
	 */
	public static DefaultResponse COMPARE_DIFFERENCE = new DefaultResponse(2010, "对比结果不相同");
	/**
	 * 未通过志愿者审核，你还不是志愿者
	 */
	public static DefaultResponse NOT_PASS_VOLUN = new DefaultResponse(2011, "未通过志愿者审核，你还不是志愿者");
}
