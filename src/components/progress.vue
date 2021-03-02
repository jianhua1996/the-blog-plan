<template>
  <el-progress
    class="scroll-bar"
    :percentage="percent"
    :stroke-width="3"
  ></el-progress>
</template>

<script>
import { ref, onMounted } from "vue"
export default {
  setup(props) {
    let percent = ref(0)
    const srollEvent = e => {
      const currentPx = document.scrollingElement.scrollTop
      const totalPx =
        document.scrollingElement.scrollHeight -
        document.scrollingElement.clientHeight
      // debugger
      percent.value = Math.round((currentPx / totalPx) * 100)
      // console.log(percent)
    }
    onMounted(() => {
      document.addEventListener("scroll", srollEvent)
    })
    return {
      percent,
    }
  },
}
</script>

<style lang="less" scoped>
.scroll-bar {
  position: fixed !important;
  top: 0;
  left: 0;
  width: 100%;
  &:deep(.el-progress__text) {
    display: none;
  }
}
</style>
