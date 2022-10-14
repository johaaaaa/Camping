package com.camp.app.used.mapper;

import java.util.List;

import com.camp.app.used.service.UsedVO;

public interface UsedMapper {
	//게시글 번호 조회
	public int getUsedId();
	
	//게시글 등록
	public int insertUsed(UsedVO usedVO);
	
	//게시글 수정
	public void updateUsed(UsedVO usedVO);
	
	//게시글 전체조회
	public List<UsedVO> selectAllUsedList();
	
	//게시글 단건조회
	public UsedVO findDetail(int usedId);
	
	//게시글 조건조회
	public List<UsedVO> searchUsedList();
	
	//게시글 키워드조회
	public int findUsedKeyword(String keyword);
	
	//게시글 삭제
	public int deleteUsed();
	
	//거래상태변경
	public int updateDeal();
	
	//게시물상태변경
	public int updateRestrict();
	
	//조회수증가
	public int updateCnt();

	//찜 증가
	public int updateLike();
}
