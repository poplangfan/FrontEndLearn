<template>
    <div class="app">
        <h1>{{msg}}, 学生姓名是{{studentName}}</h1>

        <!-- 通过父组件给子组件传递函数类型的pros实现：子给父传递数据 -->
        <School :getSchoolName='getSchoolName'/>

        <!-- 通过父组件给子组件传递自定义事件实现：子给父传递数据(第一种写法，使用@或者v-on) -->
        <!-- <Student v-on:athz='getStudentName' @demo='m1'/> -->

        <!-- 通过父组件给子组件传递自定义事件实现：子给父传递数据(第二种写法， 使用ref) -->
        <Student ref='student' @click.native="show"/>
    </div>
</template>

<script>
    import Student from './componenets/Student.vue'
    import School from './componenets/School.vue'
    export default {
        name:'App',
        data() {
            return {
                msg:'hello',
                studentName:''
            }
        },
        components:{School, Student},
        methods: {
            getSchoolName(name){
                console.log('app收到学校名:', name)
            },
            getStudentName(name){
                console.log('app收到了学生名', name)
                this.studentName = name
            },
            m1(){
                console.log('demo被调用')
            },
            show(){
                alert(123)
            }
        },
        mounted() {
            this.$refs.student.$on('athz', this.getStudentName)
        //     //延时3秒再打印
        //     setTimeout(() => {
        //         this.$refs.student.$on('athz', this.getStudentName)
        //         //只触发一次
        //         // this.$refs.student.$once('athz', this.getStudentName)
        //     }, 3000);
        },
    }
</script>

<style lang="css">
    .app{
        background-color: gray;
    }
</style>