import axions from 'axios'

// 创建axions实例
const service=axions.create({
    baseURL:"",
    timeout:5000,
    headers:{
        "Content-Type":"application/json;charset=utf-8"
    }
})

//请求拦截
service.interceptors.request.use((config)=>{
    config.headers = config.headers || {}
    if(localStoreage.getItem('token')){
        config.hjeaders.token=localStoreage.getItem('token') || ""
    }
})