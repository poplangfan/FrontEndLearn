// 该文件用于创建整个应用的路由器
import VueRouter from "vue-router";
//引入组件
import About from '../pages/About'
import Home from '../pages/Home'
import News from '../pages/News'
import Message from '../pages/Message'
import Detail from '../pages/Detail'

const router =  new VueRouter({
    mode:'history',
    routes:[
        {
            name:'guanyu',
            path:'/about',
            component: About,
            meta:{isAuth:true, 'title':'关于'}
        },
        {
            name:'zhuye',
            path:'/home',
            component: Home,
            meta:{'title':'主页'},
            children:[
                {
                    name:'xinwen',
                    path:'news',
                    component:News,
                    meta:{isAuth:true, 'title':'新闻'},
                    // beforeEnter: (to, from, next) => {
                    //     console.log(to, from)
                    //     // if(to.path === '/home/news' || to.path === '/home/message'){
                    //     if(to.meta.isAuth){
                    //         if(localStorage.getItem('addr')==='hz'){
                    //             next()
                    //         }else{
                    //             alert('没有权限')
                    //         }
                    //     }else{
                    //         next()
                    //     }
                    // }
                },
                {
                    name:'xiaoxi',
                    path:'message',
                    component:Message,
                    meta:{isAuth:true, 'title':'消息'},
                    children:[
                        {
                            name:'xiangqing',
                            path:'detail',
                            component:Detail,
                            // props的第一种写法，值为对象，该对象中所有key-value都会以props的形式传给detail组件
                            // props:{'a':1, 'b':2}

                            // props的第二种写法，值为bool值，若bool值为真，就会把该路由组件收到的所有params参数，以props的形式传给detial组件
                            // props:true

                            // props的第三种写法，值为函数，
                            props($route){
                                return {
                                    id:$route.query.id,
                                    title:$route.query.title
                                }
                            }
                        }
                    ]
                },
            ]
        }
    ]
})
// 独享路由守卫


// 全局前置路由守卫，初始化之前被调用,每次路由被调用之前被调用
// router.beforeEach((to, from, next)=>{
//     console.log(to, from)
//     // if(to.path === '/home/news' || to.path === '/home/message'){
//     if(to.meta.isAuth){
//         if(localStorage.getItem('addr')==='hz'){
//             next()
//         }else{
//             alert('没有权限')
//         }
//     }else{
//         next()
//     }
// })

// 全局后置路由守卫
// router.afterEach((to, from)=>{
//     document.title = to.meta.title || 'hz'
// })
export default router

