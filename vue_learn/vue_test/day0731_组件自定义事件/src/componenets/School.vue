<template>
    <div class="school">
        <h2>学校名称：{{name}}</h2>
        <h2>学校地址：{{addr}}</h2>
        <button @click="sendSchoolName">把学校名传给app</button>
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
        methods: {
            sendSchoolName(){
                this.getSchoolName(this.name)
            }
        },
    }
</script>

<style scoped>
    .school{
        background-color: aquamarine;
    }
</style>