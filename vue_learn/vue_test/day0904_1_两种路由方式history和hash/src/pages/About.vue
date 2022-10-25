<template>
  <h2>我是About的内容</h2>
</template>

<script>
export default {
    name:"About",
    mounted() {
      console.log('--', this.$router)
    },
    // 通过路由规则进入该组件时调用
    beforeRouteEnter (to, from, next) {
      console.log('--', 'beforeRouteEnter')
      console.log(to, from)
      // if(to.path === '/home/news' || to.path === '/home/message'){
      if(to.meta.isAuth){
          if(localStorage.getItem('addr')==='hz'){
              next()
          }else{
              alert('没有权限')
          }
      }else{
          next()
      }
    },
    // 通过路由规则离开该组件时调用
    beforeRouteLeave (to, from, next) {
      console.log('--', 'beforeRouteLeave')
      next()
    }
}
</script>

<style>

</style>