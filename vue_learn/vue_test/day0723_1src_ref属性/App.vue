<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDom" ref="btn">点我输出上方的DOM元素</button>
        <School ref="sch"/>
    </div>
</template>

<script>
    import School from './componenets/School.vue'
    export default {
        name:'App',
        data() {
            return {
                msg:'hello'
            }
        },
        components:{School},
        methods: {
            showDom(){
                console.log(this.$refs.title) //真实DOM元素
                console.log(this.$refs.btn) //真实DOM元素
                console.log(this.$refs.sch)//组件school实例对象，vc
            }
        },
    }
</script>

<style>

</style>