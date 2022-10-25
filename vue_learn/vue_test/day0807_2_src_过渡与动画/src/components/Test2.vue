<template>
  <div>
    <button @click="isShow = !isShow">
        显示/隐藏
    </button>
    <transition-group name="hello">
        <h1 v-show="!isShow" key="1">你好啊</h1>
        <h1 v-show="isShow" key="2">杭州</h1>
    </transition-group>
  </div>
</template>

<script>
export default {
    name:"Test2",
    data(){
        return{
            isShow:true
        }
    }
}
</script>

<style scoped>
    h1{
        background-color: aqua;
        transition: 0.5s linear;
    }
    /* 进入的起点 */
    .hello-enter,.hello-leave-to{
        transform: translateX(50%);

    }
    /* 进入的终点 */
    .hello-enter-to,.hello-leave{
        transform: translateX(0);

    }
    /* 离开的起点
    .hello-leave{
        transform: translateX(0);

    }
    /* 进入的终点 
    .hello-leave-to{
        transform: translateX(-100%);

    } */
</style>