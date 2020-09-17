<template>
  <div class="intercept">
    <div class="head">
      <div class="left">
        <van-icon @click="back" name="wap-home-o" />
      </div>
      <p>值得买</p>
      <div class="right">
        <van-icon @click="search" name="search" />
        <van-icon @click="goCart" name="shopping-cart-o" />
      </div>
    </div>
    <div class="main">
      <div class="containerImg">
        <img src="https://yanxuan.nosdn.127.net/39c5e4583753d4c3cb868a64c2c109ea.png " alt=""><span></span>
      </div>
      <div class="iphone">手机号登陆</div>
      <div class="email">邮箱账号快捷登陆</div>
      <div class="thirdWrap"  >
        <div class="itemWrap"  >
          <span class="name">微信</span>
        </div>
        <div class="itemWrap"  >
          <span class="name">QQ</span>
        </div>
        <div class="itemWrap"  >
          <span class="name">微博</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Intercept',
  methods: {
    back () {
      this.$router.push('/')
    },
    search () {
      this.$router.push('/search')
    },
    goCart () {
      this.$router.push('/cart')
    }
  }
}
</script>

<style scoped lang="scss">
  @mixin flex($display:flex,$justy:space-between,$align:center) {
    display: $display;
    justify-content: $justy;
    align-items: $align;
  }
  html,body {
    height: 100%;
  }
  .intercept {
    height: 100vh;
    background: #f2f5f4;
    .head {
      @include flex();
      padding: 0 .3rem;
      position: relative;
      text-align: center;
      background: #fff;
      height: .88rem;
      p {
        text-align: center;
        width: 100%;
        margin-top: .2rem;
      }
      .left{
        position: absolute;
        left: 0;
        top: .2rem;
        i {
          font-size: .5rem;
        }
      }
      .right {
        position: absolute;
        right: 0;
        top: .2rem;
        i {
          margin-left: .3rem;
          font-size: .5rem;
        }
      }
    }
    .main {
      .containerImg {
        width: 7.5rem;
        height: 5rem;
        text-align: center;
        img {
          width: 2.45rem;
          height: .9rem;
          display: inline-block;
          vertical-align: middle;
        }
        span {
          height: 100%;
          display: inline-block;
          vertical-align: middle;
        }
      }
      .iphone {
        background: red;
        height: 1rem;
        width: 5.5rem;
        text-align: center;
        line-height: 1rem;
        margin: 0 auto;
        color: #fff;
      }
      .email {
        height: 1rem;
        width: 5.5rem;
        text-align: center;
        line-height: 1rem;
        margin: .5rem auto;
        border: .01rem solid red;
        color: red;
      }
      .thirdWrap{
        margin-top: 4rem;
        padding: 0 1rem;
        @include flex();
      }
  }
}
</style>
