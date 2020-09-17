<template>
  <div class="head">
    <div class="left">
      <van-icon name="wap-home-o" />
    </div>
    <p>值得买</p>
    <div class="right">
      <van-icon name="search" />
      <van-icon name="shopping-cart-o" />
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
  @mixin flex($display:flex,$justy:space-between,$align:center) {
    display: $display;
    justify-content: $justy;
    align-items: $align;
  }
  .head {
    @include flex();
    padding: 0 .3rem;
    position: relative;
    text-align: center;
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
</style>
