<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <button @click="sendStudentName">把学生名给school组件</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:'zs',
                sex:'男'
            }
        },
        methods: {
            sendStudentName(){
                this.$bus.$emit('hello', 666)
            }
        },
        mounted() {
            console.log("School", this.x)
            this.$bus.$on('hello',(data)=>{
                console.log('我是student组件')
            })
        },
    }
</script>

<style scoped>
    .student{
        background-color:orange;
    }
</style>