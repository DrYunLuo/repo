package com.yichuang.fuyang.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.yichuang.fuyang.entity.Code;

@Service
public interface CodeService {
	
	/**
	 * 获取code类型
	 * @return
	 */
	List<Code> getPostTypeList(String type);
	
	
	/**
	 * 根据codeVaule 查询Code  LH
	 * @param type
	 * @return
	 */
	List<Code> getCodeByCodeValue(String type);
	
	List<Code> getCodeDynamic(Code code);
	
}
