package com.camp.app.recru.service;

import java.util.List;

import org.springframework.stereotype.Service;

@Service
public interface RecruService {
	//최신글번호 조회
	public int getMaxRecruId();
	//등록
	public int insertRecru(RecruVO recruVO);
	//전체조회
	public List<RecruVO> recruAllList();
	//검색조회
	public List<RecruVO> recruKeywordList(String keyword);
}