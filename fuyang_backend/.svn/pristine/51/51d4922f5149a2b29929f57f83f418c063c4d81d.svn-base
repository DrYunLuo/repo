package com.yichuang.fuyang.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.yichuang.fuyang.dao.CodeDao;
import com.yichuang.fuyang.entity.Code;

@Service("CodeService")
public class CodeServiceImpl implements CodeService{
	
	@Autowired
	private CodeDao codeDao;

	/**
	 * 获取code类型
	 */
	public List<Code> getPostTypeList(String type){
		List<Code> list = codeDao.getPostTypeList(type);
		return list;
	}

	
	/**
	 * 根据codeVaule 查询Code  LH
	 * @param type
	 * @return
	 */
	@Override
	public List<Code> getCodeByCodeValue(String type) {
		return codeDao.getCodeByCodeValue(type);
	}
	
	public List<Code> getCodeDynamic(Code code){
		return codeDao.getCodeDynamic(code);
	}
	
	
}
