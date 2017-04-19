package com.yichuang.fuyang.entity.rolePower;

import java.io.Serializable;
/**
 * 角色对应权限
 * @author zhuoming
 * 2017-1-20 11:20:06
 */
public class RolePower implements Serializable{
	/**
	 * serialVersionUID
	 */
	private static final long serialVersionUID = 4847338583334791684L;
		//角色编码
		private String roleId;
		//角色名称
		private String roleName;
		//权限编码
		private int powerId; 
		//权限名称
		private String powerName;
		//权限页面地址
		private String powerUrl;
		//权限级别
		private String powerLevel;
		//父级权限编码
		private String parentId;
		
		public String getPowerLevel() {
			return powerLevel;
		}
		public void setPowerLevel(String powerLevel) {
			this.powerLevel = powerLevel;
		}
		public String getParentId() {
			return parentId;
		}
		public void setParentId(String parentId) {
			this.parentId = parentId;
		}
		public int getPowerId() {
			return powerId;
		}
		public void setPowerId(int powerId) {
			this.powerId = powerId;
		}
		public String getRoleId() {
			return roleId;
		}
		public void setRoleId(String roleId) {
			this.roleId = roleId;
		}
		public String getRoleName() {
			return roleName;
		}
		public void setRoleName(String roleName) {
			this.roleName = roleName;
		}
		public String getPowerName() {
			return powerName;
		}
		public void setPowerName(String powerName) {
			this.powerName = powerName;
		}
		public String getPowerUrl() {
			return powerUrl;
		}
		public void setPowerUrl(String powerUrl) {
			this.powerUrl = powerUrl;
		}
		@Override
		public String toString() {
			return "RolePower [roleId=" + roleId + ", roleName=" + roleName + ", powerName=" + powerName + ", powerUrl="
					+ powerUrl + "]";
		}
}
