package com.entity.view;

import com.entity.ChushouxinxiEntity;

import com.baomidou.mybatisplus.annotations.TableName;
import org.apache.commons.beanutils.BeanUtils;
import java.lang.reflect.InvocationTargetException;

import java.io.Serializable;
 

/**
 * 出售信息
 * 后端返回视图实体辅助类   
 * （通常后端关联的表或者自定义的字段需要返回使用）
 * @author 
 * @email 
 * @date 2022-04-22 11:57:47
 */
@TableName("chushouxinxi")
public class ChushouxinxiView  extends ChushouxinxiEntity implements Serializable {
	private static final long serialVersionUID = 1L;

	public ChushouxinxiView(){
	}
 
 	public ChushouxinxiView(ChushouxinxiEntity chushouxinxiEntity){
 	try {
			BeanUtils.copyProperties(this, chushouxinxiEntity);
		} catch (IllegalAccessException | InvocationTargetException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
 		
	}
}
