// 该文件用于创建vuex中sotre
import Vue from 'vue'
//引入vuex
import Vuex from 'vuex'
//准备actions -- 用于响应组件中的动作
const actions = {
    // add:function(miniStore, value){
    //     miniStore.commit('ADD', value)
    // },
    // reduce:function(miniStore, value){
    //     miniStore.commit('REDUCE', value)
    // },
    addOdd:function(miniStore, value){
        if (miniStore.state.sum % 2){
            miniStore.commit('ADD', value)
        }
    },
    addWait:function(miniStore, value){
       setTimeout(()=>{
            miniStore.commit('ADD', value)
        }, 1000)
    },
}

//准备mutations -- 用于操作数据
const mutations = {
    ADD(state, value){
        state.sum += value
    },
    REDUCE(state, value){
        state.sum -= value
    },
    ADD_PERSON(state, value){
        state.personList.unshift(value)
    }

}

//准备state -- 用于存储数据
const state = {
    sum:0,
    name:'zs',
    addr:'hz',
    personList:[
        {id:'001', name:'zs'}
    ]
}

//准备getters用于将state中的数据加工
const getters = {
    bigSum(state){
        return state.sum*10
    }
}

Vue.use(Vuex)
//创建并暴露sstore
export default new Vuex.Store({
    actions,
    mutations,
    state,
    getters
})