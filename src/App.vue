<template>
  <Progress></Progress>
  <router-view class="global"></router-view>
</template>

<script>
import Progress from "@/components/progress.vue"
export default {
  components: {
    Progress,
  },
  setup(props, context) {},
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  /* 主题色 */
  --main-clor: #409eff;
}
.global {
  background: #eee;
}
</style>
