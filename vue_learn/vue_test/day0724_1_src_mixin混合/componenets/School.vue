<template>
    <div>
        <h2 @click="showName">学校名称：{{name}}</h2>
        <h2>学校地址：{{addr}}</h2>
    </div>
</template>

<script>
    //引入混合
    // import {mixin} from '../mixin'
    
    export default {
        name:'School',
        data() {
            return {
                name:'zb',
                addr:'hz'
            }
        },
        // mixins:[mixin]
    }
</script>

<style>
</style>