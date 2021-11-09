<template>
  <div class="headers">This is a test project.</div>
</template>

<script>
import { testGetFetch, testPostFetch } from "@api/test";

export default {
  name: "Headers",
  created() {
    testGetFetch({
      name:'张小洋',
      age:18
    });
    testPostFetch({
      name:'柯宝宝',
      age:18
    });
  },
};
</script>

<style lang="less">
@import "~@style/index.less";
@import "./headers.less";
</style>