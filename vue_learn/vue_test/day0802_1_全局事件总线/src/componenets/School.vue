<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{addr}}</h2>
    </div>
</template>

<script>
    export default {
        name:'School',
        props:['getSchoolName'],
        data() {
            return {
                name:'zbdxzbdx',
                addr:'hz'
            }
        },
        mounted() {
            console.log("School", this.x)
            this.$bus.$on('hello',(data)=>{
                console.log('我是school组件',data)
            })
        },
        beforeDestroy(){
            this.$bus$off('hello')
        }
    }
</script>

<style scoped>
    .school{
        background-color: aquamarine;
    }
</style>