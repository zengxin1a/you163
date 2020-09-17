<template>
  <div class="hotRank">
    <h3>{{title}}</h3>
    <div class="hotList">
      <div
        class="itemData"
        v-for="(item, index) in hotRankList"
        :key="index"
        :class="item.extra.operationResource.categoryId === '0' ? 'bigWidth' : ''"
      >
        <div class="title" :class="item.extra.operationResource.categoryId === '0' ? 'lineBot' : ''">
          <p>{{item.categoryName}}</p>
        </div>
        <img :src="item.picUrl" alt="">
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'hotRank',
  props: ['hotRankList', 'title']
}
</script>

<style scoped lang="scss">
  @mixin flex($display:flex,$justy:space-between,$align:center) {
    display: $display;
    justify-content: $justy;
    align-items: $align;
  }
  .hotRank {
    padding: 0 .2rem;
    h3 {
      font-size: .4rem;
      line-height: 1rem;
    }
    .hotList {
      @include flex();
      flex-wrap: wrap;
      background: #fff;
      .itemData {
        width: 1.7rem;
        height: 1.8rem;
        background: #f5f5f5;
        margin-bottom: .1rem;
        .title {
          position: relative;
          text-align: center;
          p {
            font-size: .24rem;
          }
        }
        .lineBot {
          &::after {
            content: '';
            border-bottom: .02rem solid #000;
            width: .5rem;
            position: absolute;
            bottom: -.08rem;
            left: 0;
          }
        }
        img {
          width: 1.2rem;
          height: 1.2rem;
          margin: 0 auto;
        }
        &:nth-child(1) {
          background: #f9f3e4;
          img {
            width: 2rem;
            height: 2rem;
          }
        }
        &:nth-child(2) {
          background: #ebeff6;
          img {
            width: 2rem;
            height: 2rem;
          }
        }
      }
      .bigWidth {
        width: 3.5rem;
        height: 2rem;
        @include flex(flex, space-around);
        padding-left: .1rem;
        img {
          margin: 0;
        }
        .title {
          p {
            font-size: .32rem;
          }
        }
      }
    }
  }
</style>
