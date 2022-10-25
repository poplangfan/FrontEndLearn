<template>
    <div class="student">
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>当前求和：{{number}}</h2>
        <button @click="add">点我number++</button>
        <button @click="sendStudentName">把学生名传给app</button>
        <button @click="unbind">解绑事件</button>
        <button @click="death">销毁student组件的实例</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                name:'zs',
                sex:'男',
                number:0
            }
        },
        methods: {
            add(){
                console.log('add被调用')
                this.number++
            },
            sendStudentName(){
                // 触发student身上实例的自定义事件
                this.$emit('athz', this.name)
                // this.$emit('demo')
            },
            unbind(){
                this.$off('athz')
                // this.$off(['athz','demo']) //解绑多个
                // this.$off() //解绑所有
            },
            death(){
                this.$destroy() //销毁了当前组件的实例，销毁后所有的实例自定义事件都不奏效
                console.log('销毁student组件的实例')
            },
        },
    }
</script>

<style scoped>
    .student{
        background-color:orange;
    }
</style>