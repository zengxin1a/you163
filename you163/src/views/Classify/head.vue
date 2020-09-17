<template>
  <div class="head">
    <div class="ipt" @click="go">
      <van-icon name="search" /><span>搜索商品, 共37197款好物</span>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    go () {
      this.$router.push('/search')
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
  .head {
    position: relative;
    padding: .2rem 0;
    .ipt {
      margin: 0 auto;
      text-align: center;
      background: #ededed;
      width: 7rem;
      height: .56rem;
      line-height: .56rem;
      border-radius: 8px;
      i {
        font-size: .33rem;
      }
      span {
        font-size: .33rem;
      }
    }
  }
</style>
