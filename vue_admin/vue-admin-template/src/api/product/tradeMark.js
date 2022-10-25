//这个模块主要获取的是品牌管理的数据的模块
// /admin/product/baseTrademark/{page}/{limit}
import request from '@/utils/request';

export const reqTradeMarkList = (page,limit)=>request({url:`/admin/product/baseTrademark/${page}/${limit}`, method:`get`})

// 处理新增品牌 /admin/product/baseTrademark/save  POST  2个参数：品牌名称，LOGO，不需要传递ID，由服务器生成

// 处理修改品牌 /admin/product/baseTrademark/update  put 3个参数：id，品牌名称，品牌logo
export const reqAddOrUpdateTradeMark = (tradeMark)=>{
    if(tradeMark.id){
        return request({url:`/admin/product/baseTrademark/update`, method:`put`, data:tradeMark});
    }else{
        return request({url:`/admin/product/baseTrademark/save`, method:`post`, data:tradeMark});
    }
}

// 删除品牌接口 /admin/product/baseTrademark/remove/{id} 
export const reqDeleteTradeMark = (id)=>request({url:`/admin/product/baseTrademark/remove/${id}`, method:`delete`})