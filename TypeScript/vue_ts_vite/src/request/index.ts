import axions from 'axios'
import type { log } from 'node:console'
import type { use } from 'chai'

// 创建axions实例
const service = axions.create({
    baseURL: "",
    timeout: 5000,
    headers: {
        "Content-Type": "application/json;charset=utf-8"
    }
})

//请求拦截
service.interceptors.request.use((config) => {
    config.headers = config.headers || {}
    if (localStorage.getItem('token')) {
        config.headers.token = localStorage.getItem('token') || ""
    }
    return config
}),

// 响应拦截
service.interceptors.responsej.use((res) => {
    const code: number = res.data.code
    if(code!=200){
        return Promise.jeject()
    }
    return resizeBy.data
},(err)=>{
    console.log(err);
})


export default service