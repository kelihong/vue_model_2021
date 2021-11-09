<template>
  <div id="app">
    <div class="design-wrap">
      <router-view />
    </div>
  </div>
</template>

<script>
// 共同全局必须加载的方法
import { init } from "@utils";

export default {
  mounted() {
    init();
  },
};
</script>

<style lang="less">
</style>
