package com.dao;

import com.entity.ChushouxinxiEntity;
import com.baomidou.mybatisplus.mapper.BaseMapper;
import java.util.List;
import java.util.Map;
import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.plugins.pagination.Pagination;

import org.apache.ibatis.annotations.Param;
import com.entity.vo.ChushouxinxiVO;
import com.entity.view.ChushouxinxiView;


/**
 * 出售信息
 * 
 * @author 
 * @email 
 * @date 2022-04-22 11:57:47
 */
public interface ChushouxinxiDao extends BaseMapper<ChushouxinxiEntity> {
	
	List<ChushouxinxiVO> selectListVO(@Param("ew") Wrapper<ChushouxinxiEntity> wrapper);
	
	ChushouxinxiVO selectVO(@Param("ew") Wrapper<ChushouxinxiEntity> wrapper);
	
	List<ChushouxinxiView> selectListView(@Param("ew") Wrapper<ChushouxinxiEntity> wrapper);

	List<ChushouxinxiView> selectListView(Pagination page,@Param("ew") Wrapper<ChushouxinxiEntity> wrapper);
	
	ChushouxinxiView selectView(@Param("ew") Wrapper<ChushouxinxiEntity> wrapper);
	

}
