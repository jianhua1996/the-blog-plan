<template>
  <el-card shadow="hover" class="box-card">
    <template #header>
      <div class="card-header">{{ item.title || "这是标题" }}</div>
    </template>
    <div class="card-content">
      <p>{{ item.content ? cutText(item.content) : "这是内容" }}</p>
      <div class="card-tags">
        <span v-for="(tag, index) in item.tags" :key="index">
          {{ tag }}
        </span>
      </div>
    </div>
  </el-card>
</template>

<script>
import { cutText } from "@/utils/index.js"
export default {
  props: {
    item: {
      type: Object,
      default() {
        return {}
      },
    },
  },
  methods: {
    cutText,
  },
  setup(props) {},
}
</script>

<style lang="less" scoped>
.box-card {
  display: inline-block;
  width: 32%;
  position: relative;
  &:not(:first-of-type) {
    margin-left: 2%;
  }
  &:deep(.el-card) {
    height: 42vh;
    padding: 10px 30px 20px;
    box-sizing: border-box;
    border-radius: 4px;
    .el-card__header {
      font-size: 26px;
      font-weight: bold;
      padding: 16px;
      .card-header {
        cursor: pointer;
        &:hover {
          color: var(--main-clor);
        }
      }
    }
    .el-card__body {
      padding: 16px;
    }
    .card-tags {
      position: absolute;
      bottom: 20px;
      left: 30px;
      padding: 0 10px;
      display: flex;
      flex-wrap: wrap;
      span {
        display: block;
        padding: 4px;
        border-radius: 4px;
        background: var(--main-clor);
        color: #fff;
        &:not(:first-of-type) {
          margin-left: 10px;
        }
      }
    }
  }
}
</style>
