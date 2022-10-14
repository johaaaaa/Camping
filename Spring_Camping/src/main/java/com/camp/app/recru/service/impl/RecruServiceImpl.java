package com.camp.app.recru.service.impl;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.camp.app.recru.mapper.RecruMapper;
import com.camp.app.recru.service.RecruService;
import com.camp.app.recru.service.RecruVO;
import com.camp.app.recruEntry.mapper.EntryMapper;
import com.camp.app.recruEntry.service.EntryVO;

@Service
public class RecruServiceImpl implements RecruService {

	@Autowired
	RecruMapper mapper;
	@Autowired
	EntryMapper entryMapper;
	
	//게시글 입력
	@Override
	public int insertRecru(RecruVO recruVO) {
		return mapper.insertRecru(recruVO);
	}
	//전체 조회
	@Override
	public List<RecruVO> recruAllList() {
		return mapper.findAll();
	}
	//검색 조회
	@Override
	public List<RecruVO> recruKeywordList(String keyword) {
		return mapper.findKeyword(keyword);
	}
	//최신아이디 조회
	@Override
	public int getMaxRecruId() {
		return mapper.getMaxRecruId();
	}
	//단건조회
	@Override
	public RecruVO findOne(String recruId) {
		return mapper.selectOne(recruId);
	}
	//상태변경
	@Override
	public int changeStatus(RecruVO recruVO) {
		return mapper.changeStatus(recruVO);
	}

}
