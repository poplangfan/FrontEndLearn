<template>
    <div>
        <School/>
        <hr/>
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
                msg:'hello'
            }
        },
        components:{ School, Student }
    }
</script>

<style>

</style>