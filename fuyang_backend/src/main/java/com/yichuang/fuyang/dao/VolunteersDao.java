package com.yichuang.fuyang.dao;

import java.util.List;
import java.util.Map;

import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Select;

import com.yichuang.fuyang.entity.Campaigns;
import com.yichuang.fuyang.entity.Volunteers;
/**
 * 志愿者DAO
 * @author Administrator
 *
 */
public interface VolunteersDao {
	
	/**
	 * 注册志愿者
	 * @param volunteers
	 */
	Integer saveVolunteers(Volunteers volunteers);
	
	/**
	 * 根据手机号查询志愿者
	 * @param phone：表示电话号
	 * @return
	 */
	Volunteers findByPhone(String phone);
	
	/**
	 * 志愿者总人数
	 * @return
	 */
	Integer getTotalVolunteers();
	
	/**
	 * 志愿者总服务时长
	 * @return
	 */
	Integer getSumServiceTime();
	
	/**
	 * 志愿者排行（根据服务时长排行）
	 * @return
	 */
	List<Volunteers> getRankingVolun();
	/**
	 * 获取志愿者列表
	 * @param volunteer
	 * @return
	 */
	List<Volunteers> getVolun(Volunteers volunteer);
	
	/**
	 * 根据志愿者id查询志愿者
	 * @param id：主键id
	 * @return
	 */
	List<Volunteers> getVolunById(String id);
	
	/**
	 * 查询所有的自愿者
	 * @return
	 */
	List<Map<String, Object>> selectAllVol();
	
	/**
	 * 加入组织
	 * @param GroupId
	 * @param id
	 */
	public void joinGroup(@Param("GroupId")String GroupId,@Param("id")String id);

	@Select("SELECT photo from volunteers where _id = #{volunteerId}")
	String getPhoto(String volunteerId);
	
	/**
	 * 获取该id的名次
	 * @param id
	 * @return
	 */
	Integer getRankingById(String id);
	
	/**
	 * 官方审核志愿者
	 * @param id
	 * @return
	 */
	Integer ourShenHe(Volunteers volunteer);
	
	/**
	 * 组织审核志愿者
	 * @param volunteerId
	 * @return
	 */
	Integer groupShenHe(Volunteers volunteer);
	
	/**
	 * 获取组织未审核志愿者信息
	 * */
	List<Volunteers> findVolunByGroupCheck(Volunteers Volunteer);
	
	
	/**
	 * 官方未审核志愿者
	 * */
	List<Volunteers> findVolunByStatus(Volunteers volunteer);
	
	/**
	 * 组织查询待审核加入活动志愿者   LH
	 * @return
	 */
	List<Volunteers> getVolByIscalc();
	
	/**
	 * 更新志愿者信息
	 * @param volunteers
	 */
	Integer updateVolunInfo(Volunteers volunteers);

	/**
	 * 根据志愿者id获取参加活动的信息
	 * @param volunteer
	 * @return
	 */
	List<Campaigns> getAllCampaignsById(Volunteers volunteer);
}
