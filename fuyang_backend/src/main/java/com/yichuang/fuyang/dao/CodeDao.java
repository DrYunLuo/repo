package com.yichuang.fuyang.dao;

import java.util.List;

import com.yichuang.fuyang.entity.Code;

public interface CodeDao {

	/**
	 * 获取code类型
	 * @return
	 */
	List<Code> getPostTypeList(String codeType);
	
	
	/**
	 * 根据codeVaule 查询Code LH
	 * @param type
	 * @return
	 */
	List<Code> getCodeByCodeValue(String type);
	
	List<Code> getCodeDynamic(Code code);
}
