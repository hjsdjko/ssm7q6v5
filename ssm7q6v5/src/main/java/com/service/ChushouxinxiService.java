package com.service;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.service.IService;
import com.utils.PageUtils;
import com.entity.ChushouxinxiEntity;
import java.util.List;
import java.util.Map;
import com.entity.vo.ChushouxinxiVO;
import org.apache.ibatis.annotations.Param;
import com.entity.view.ChushouxinxiView;


/**
 * 出售信息
 *
 * @author 
 * @email 
 * @date 2022-04-22 11:57:47
 */
public interface ChushouxinxiService extends IService<ChushouxinxiEntity> {

    PageUtils queryPage(Map<String, Object> params);
    
   	List<ChushouxinxiVO> selectListVO(Wrapper<ChushouxinxiEntity> wrapper);
   	
   	ChushouxinxiVO selectVO(@Param("ew") Wrapper<ChushouxinxiEntity> wrapper);
   	
   	List<ChushouxinxiView> selectListView(Wrapper<ChushouxinxiEntity> wrapper);
   	
   	ChushouxinxiView selectView(@Param("ew") Wrapper<ChushouxinxiEntity> wrapper);
   	
   	PageUtils queryPage(Map<String, Object> params,Wrapper<ChushouxinxiEntity> wrapper);
   	

}

