<template>
    <div>
        <h2 @click="showName">学生姓名：{{name}}</h2>
        <h2>学生性别：{{sex}}</h2>
    </div>
</template>

<script>
    //引入混合
    // import {mixin, mixin1} from '../mixin'
    export default {
        name:'Student',
        data() {
            return {
                name:'zs',
                sex:'男'
            }
        },
        //新的配置项
        // mixins:[mixin, mixin1]
    }
</script>

<style>
</style>