<template>
  <div class="foot">
    <van-tabbar route>
      <van-tabbar-item
        v-for="(item, index) in listFoot"
        :key="index"
        :to="item.path"
        :icon="item.icon"
      >
        {{item.title}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Foot',
  data () {
    return {
      listFoot: [
        {
          title: '首页',
          icon: 'home-o',
          path: '/'
        },
        {
          title: '分类',
          icon: 'cluster-o',
          path: '/classify'
        },
        {
          title: '值得买',
          icon: 'smile-o',
          path: '/deserveBuy'
        },
        {
          title: '购物车',
          icon: 'cart-o',
          path: '/cart'
        },
        {
          title: '个人',
          icon: 'friends-o',
          path: '/mine'
        }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
  .foot {
    .van-tabbar-item--active {
      color: #dd1a21;
    }
  }
</style>
