<template>
  <div class="main">
    <div class="topTitle">
      <div><van-icon name="circle" /><span>30天无忧退货</span></div>
      <div><van-icon name="circle" /><span>48小时快速退款</span></div>
      <div><van-icon name="circle" /><span>满99元免邮</span></div>
    </div>
    <div class="bgCart">
      <img src="https://yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/noCart-d6193bd6e4.png?imageView&type=webp" alt="">
      <p>登陆</p>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from 'vuex'
export default {
  name: 'Main',
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      imgCartLogo: state => state.cart.noneImg
    })
  },
  methods: {
    ...mapActions(['cart/getImgCartLogo']),
    ...mapMutations(['cart/replaceImg'])
  },
  created () {
    this['cart/getImgCartLogo']('')
  }
}
</script>

<style scoped lang="scss">
  body.html {
    height: 100%;
  }
  .main {
    height: 100%;
    padding-bottom: 50px;
    padding-top: 1rem;
    .topTitle {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: .5rem;
      height: .7rem;
      background: #eeeeee;
      ::v-deep .van-icon {
        font-size: .2rem;
      }
      span {
        font-size: .25rem;
      }
    }
    .bgCart {
      height: 100%;
      background: #f4f4f4;
      text-align: center;
      padding-bottom: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      img {
        width: 2.48rem;
        height: 2.48rem;
        display: inline-block;
      }
      p {
        width: 5rem;
        height: 1rem;
        color: #fff;
        background: red;
        text-align: center;
        line-height: 1rem;
      }
    }
  }
</style>
