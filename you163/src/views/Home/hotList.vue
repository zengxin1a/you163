<template>
  <div class="hotList">
    <div class="hotTop">
      <div
        class="self"
        v-for="(item, index) in selfSell"
        :key="index"
      >
        <img :src="item.icon" alt=""><span>{{item.desc}}</span>
      </div>
    </div>
    <div class="list">
      <div
        v-for="(item, index) in hotList"
        :key="index"
      >
        <img :src="item.picUrl" alt="">
        <p>{{item.text}}</p>
      </div>
    </div>
    <div class="bannerImg">
      <img :src="this.bigImg" alt="">
    </div>
    <div class="imgItems">
      <div
        v-for="(item, index) in imgItem"
        :key="index"
      >
        <img :src="item.picUrl" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hotList',
  props: ['hotList', 'selfSell', 'bigImg', 'imgItem']
}
</script>

<style scoped lang="scss">
  @mixin flex($display:flex,$justy:space-between,$align:center) {
    display: $display;
    justify-content: $justy;
    align-items: $align;
  }
  .hotList {
    padding-bottom: .2rem;
    background: #eeeeee;
    .hotTop {
      @include flex(flex, space-between);
      padding: .2rem .5rem;
      .self {
        img {
          width: .34rem;
          height: .34rem;
        }
        @include flex();
        font-size: .23rem;
      }
    }
    .list {
      @include flex();
      flex-wrap: wrap;
      div {
        text-align: center;
        img {
          width: 1.3rem;
          height: 1.1rem;
        }
        p {
          font-size: .25rem;
        }
      }
    }
    .bannerImg {
      img {
        width: 7.5rem;
        height: 3.2rem;
      }
    }
    .imgItems {
      width: 7.5rem;
      @include flex();
      padding: .2rem;
      background: #f7b487;
      div {
        img {
          width: 2.31rem;
          height: 2.2rem;
        }
      }
    }
  }
</style>
