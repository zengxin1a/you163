<template>
  <div class="banner">
    <van-swipe :autoplay="2000">
      <van-swipe-item v-for="(item, index) in bannerList" :key="index">
        <img :src="item.picUrl" alt="">
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
// import axios from 'axios'
export default {
  name: 'banner',
  props: ['bannerList']
}
</script>

<style scoped lang="scss">
  .van-swipe {
    transform: translateZ(0);
    img {
      width: 7.5rem;
      height: 3rem;
    }
  }
</style>
