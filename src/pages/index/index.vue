<template>
  <div class="index-wrapper">
    <Card
      v-for="item in articles"
      :key="item.id"
      :item="item"
      @click-header="
        $router.push({
          path: '/details',
        })
      "
    ></Card>
  </div>
</template>

<script>
import Card from "@/components/Card.vue"
export default {
  components: {
    Card,
  },
  setup() {
    const articles = [
      {
        id: 1,
        title: "标题1",
        content: `如果是用的是单文件组件，可以通过 <style lang="sass">（或其他与处理器）自动开启。Vite 为 Sass 和 Less 改进了 @import 解析，因而 Vite 别名也同样受用，另外，url() 中的相对路径引用的，与根文件不同目录中的 Sass/Less 文件会自动变基以保证正确性。由于与其 API 冲突，@import 别名和 URL 变基不支持 Stylus。你还可以通过在文件扩展名前加上 .module 来结合使用 CSS modules 和预处理器，例如 style.module.scss。`,
        tags: ["标签1", "标签2"],
      },
      {
        id: 2,
        title: "标题2",
        content: "内容2",
        tags: ["标签1", "标签2"],
      },
      {
        id: 3,
        title: "标题3",
        content: "内容3",
        tags: ["标签1", "标签2"],
      },
    ]
    return {
      articles,
    }
  },
}
</script>

<style lang="less" scoped>
.index-wrapper {
 
}
</style>
