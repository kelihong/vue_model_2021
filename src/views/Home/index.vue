<template>
  <div class="home">
    <Headers></Headers>
  </div>
</template>

<script>
// @ is an alias to /src
import Headers from "@/components/Headers";

export default {
  name: "Home",
  data() {
    return {};
  },
  components: {
    Headers,
  },
  methods: {},
};
</script>

<style lang="less">
@import "~@style/index.less";
</style>
