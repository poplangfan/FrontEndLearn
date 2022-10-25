<template>
    <div>
        <Student name="ls" sex="女" />
        <Student name="zs" sex="男" :age='18'/>
    </div>
</template>

<script>
    import Student from './componenets/Student.vue'
    export default {
        name:'App',
        data() {
            return {
                msg:'hello'
            }
        },
        components:{ Student }
    }
</script>

<style>

</style>