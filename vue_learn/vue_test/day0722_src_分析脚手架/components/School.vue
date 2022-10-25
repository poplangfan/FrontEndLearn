<template>
    <!-- 组件的结构 -->
    <div class="demo">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{addr}}</h2>
        <button @click='showX'>点我输出x</button>
    </div>
</template>

<script>
    //组件交互相关的代码（数据，方法）
    export default {
    name:'School',
    data(){
        return{
            name:'zb',
            addr:'hz'
        }
    },
    methods: {
        showX(){
            console.log(this)
            console.log(this.x)
        }
    }
    }
</script>

<style>
    /* 组件的样式 */
    .demo{
        background-color: orange;
    }
</style>