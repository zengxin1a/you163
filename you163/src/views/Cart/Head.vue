<template>
  <div class="head">
    <h3>购物车</h3>
    <p>领券</p>
  </div>
</template>

<script>
export default {
  name: 'Head'
}
</script>

<style scoped lang="scss">
  .head {
    display: flex;
    justify-content: space-between;
    padding: 0 .5rem;
    height: 1rem;
    background: #fff;
    line-height: 1rem;
    position: absolute;
    top: 0;
    left: 0;
    h3 {
      font-size: .3rem;
    }
    p {
      font-size: .3rem;
      color: red;
    }
  }
</style>
