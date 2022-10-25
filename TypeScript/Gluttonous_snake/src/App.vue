<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

</script>

<template>
  <RouterView />
</template>

<style lang="scss">
/*引入全局样式*/
* {
	margin:0;
	padding:0;
}

html,
body,
#app {
  width: 100%;
  height: 100%;
  // position: fixed;
}
</style>
