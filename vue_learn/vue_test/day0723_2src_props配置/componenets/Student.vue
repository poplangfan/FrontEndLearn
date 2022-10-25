<template>
    <div>
        <h1>{{msg}}</h1>
        <h2>学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
        <h2>学生年龄：{{age+1}}</h2>
        <button @click="changeAge">尝试修改李四的年龄</button>
    </div>
</template>

<script>
    export default {
        name:'Student',
        data() {
            return {
                msg:'hello',
            }
        },
        methods: {
            changeAge(){
                this.age++
            }
        },
        // props:['name', 'sex', 'age']  //简单接受

        // props:{ //接受并进行类型检验
        //     name:String,
        //     age:Number,
        //     sex:String
        // } 

        props:{ //接受并进行类型检验,加默认值的指定，加必要性的限制
            name:{
                type:String,
                required:true
            },
            age:{
                type:Number,
                default:99
            },
            sex:{
                type:String,
                required:true
            },
        }
    }
</script>

<style>
</style>