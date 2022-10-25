<template>
    <div>
        <h2>学校名称：{{name | mySlice}}</h2>
        <h2>学校地址：{{addr}}</h2>
        <button @click="testHello">点我hello</button>
    </div>
</template>

<script>
    export default {
        name:'School',
        data() {
            return {
                name:'zbdxzbdx',
                addr:'hz'
            }
        },
        methods:{
            testHello(){
                this.hello()
            }
        }
    }
</script>

<style>
</style>