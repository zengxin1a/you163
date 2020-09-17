<template>
  <div class="main">
    <div class="content" v-if="listAll.currentCategory">
      <div class="nav">
        <div
          v-for="(item, index) in listAll.categoryL1List"
          :key="index"
          :class="indexActive === index ? 'active' : ''"
          @click="skip(index, item.id)"
          :id="item.id"
        >{{item.name}}</div>
      </div>
      <div class="rig-main">
        <van-swipe class="my-swipe" :autoplay="3000">
          <van-swipe-item
            v-for="(item, index) in listAll.currentCategory.bannerList"
            :key="index"
          >
            <img :src="item.picUrl" alt="">
          </van-swipe-item>
          <template #indicator>
            <div class="custom-indicator"></div>
          </template>
        </van-swipe>
        <div class="product" v-for="(item, index) in listAll.categoryGroupList" :key="index">
          <h3>{{item.name}}</h3>
          <div v-for="(NextItem, NextIndex) in item.categoryList" :key="NextIndex">
            <img :src="NextItem.wapBannerUrl" alt="">
            <p>{{NextItem.name}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Main',
  data () {
    return {
      listTitle: [],
      indexActive: 0,
      swpList: [],
      listProduct: [],
      listProduct2: [],
      indexNext: 2,
      isShow: true,
      arr1: []
    }
  },
  computed: {
    ...mapState({
      listAll: state => state.classify.listAllClassify
    })
  },
  methods: {
    ...mapActions(['classify/classifyGetData']),
    skip (index, id) {
      this.indexActive = index
      this['classify/classifyGetData'](id)
    }
  },
  created () {
    this['classify/classifyGetData']('')
  }
}
</script>

<style scoped lang="scss">
  @mixin flex($display:flex,$justy:space-between,$align:center) {
    display: $display;
    justify-content: $justy;
    align-items: $align;
  }
  .main {
    height: 100%;
    .content {
      position: relative;
      top: 0;
      left: 0;
      height: 100%;
      @include flex(flex, start, start);
      .nav {
        @include flex(flex, space-between, start);
        flex-direction: column;
        width: 1.62rem;
        div {
          height: .5rem;
          padding-left: .2rem;
          margin: .25rem 0;
          font-size: .28rem;
        }
        div.active {
          border-left: .07rem solid #ab2b2b;
          padding-left: .1rem;
        }
      }
      .rig-main {
        width: 5.88rem;
        height: 100%;
        overflow-y: scroll;
        border-left: .05rem solid #efefef;
        padding: .15rem;
        .my-swipe {
          width: 100%;
          height: 1.92rem;
          margin-bottom: .4rem;
          transform: translateZ(0);
          img {
            width: 100%;
            height: 100%;
          }
        }
        .product {
          @include flex(flex, start);
          flex-wrap: wrap;
          text-align: center;
          h3 {
            width: 100%;
            text-align: left;
            margin: .2rem 0;
          }
          div {
            width: 1.44rem;
            height: 2rem;
            margin-right: .4rem;
            img {
              width: 1.44rem;
              height: 1.44rem;
            }
            p {
              font-size: .23rem;
            }
          }
        }
      }
    }
  }
</style>
