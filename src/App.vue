<template>
  <Progress></Progress>
  <div
    id="placeHoldEle"
    style="width: 100%; height: 1px; visibility: hidden"
  ></div>
  <router-view class="global"></router-view>
  <back-top></back-top>
</template>

<script>
import Progress from "@/components/Progress.vue"
import BackTop from "@/components/BackTop.vue"
export default {
  components: {
    Progress,
    BackTop,
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
  width: 100%;
  height: 2000px;
  box-sizing: border-box;
  padding: 20px 80px;
}
</style>
