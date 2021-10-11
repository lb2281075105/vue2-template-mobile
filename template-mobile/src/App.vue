<template>
  <div id="app">
    <router-view />
    <van-button type="primary">主要按钮</van-button>
    <van-button type="info">信息按钮</van-button>
    <van-button type="default">默认按钮</van-button>
    <van-button type="warning">警告按钮</van-button>
    <van-button type="danger">危险按钮</van-button>
    <h1>heima</h1>
    <i class="toutiao toutiao-dianzan2"></i>
    <h1>标题</h1>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {

  }
}
</script>

<style>
/* 全局样式在这里设置也可以 */
/*@import "styles/index.less";*/

</style>
