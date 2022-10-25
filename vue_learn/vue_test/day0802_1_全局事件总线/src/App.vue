<template>
    <div class="app">
        <h1>{{msg}}</h1>
        <School/>
        <Student/>
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
        components:{ School, Student }
    }
</script>

<style lang="css">
    .app{
        background-color: gray;
    }
</style>