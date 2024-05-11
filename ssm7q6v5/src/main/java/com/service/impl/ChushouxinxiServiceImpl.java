package com.service.impl;

import org.springframework.stereotype.Service;
import java.util.Map;
import java.util.List;

import com.baomidou.mybatisplus.mapper.Wrapper;
import com.baomidou.mybatisplus.mapper.EntityWrapper;
import com.baomidou.mybatisplus.plugins.Page;
import com.baomidou.mybatisplus.service.impl.ServiceImpl;
import com.utils.PageUtils;
import com.utils.Query;


import com.dao.ChushouxinxiDao;
import com.entity.ChushouxinxiEntity;
import com.service.ChushouxinxiService;
import com.entity.vo.ChushouxinxiVO;
import com.entity.view.ChushouxinxiView;

@Service("chushouxinxiService")
public class ChushouxinxiServiceImpl extends ServiceImpl<ChushouxinxiDao, ChushouxinxiEntity> implements ChushouxinxiService {
	

    @Override
    public PageUtils queryPage(Map<String, Object> params) {
        Page<ChushouxinxiEntity> page = this.selectPage(
                new Query<ChushouxinxiEntity>(params).getPage(),
                new EntityWrapper<ChushouxinxiEntity>()
        );
        return new PageUtils(page);
    }
    
    @Override
	public PageUtils queryPage(Map<String, Object> params, Wrapper<ChushouxinxiEntity> wrapper) {
		  Page<ChushouxinxiView> page =new Query<ChushouxinxiView>(params).getPage();
	        page.setRecords(baseMapper.selectListView(page,wrapper));
	    	PageUtils pageUtil = new PageUtils(page);
	    	return pageUtil;
 	}
    
    @Override
	public List<ChushouxinxiVO> selectListVO(Wrapper<ChushouxinxiEntity> wrapper) {
 		return baseMapper.selectListVO(wrapper);
	}
	
	@Override
	public ChushouxinxiVO selectVO(Wrapper<ChushouxinxiEntity> wrapper) {
 		return baseMapper.selectVO(wrapper);
	}
	
	@Override
	public List<ChushouxinxiView> selectListView(Wrapper<ChushouxinxiEntity> wrapper) {
		return baseMapper.selectListView(wrapper);
	}

	@Override
	public ChushouxinxiView selectView(Wrapper<ChushouxinxiEntity> wrapper) {
		return baseMapper.selectView(wrapper);
	}


}
