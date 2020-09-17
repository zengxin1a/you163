<template>
  <div class="top">
    <div class="bg">
      <img class="imgBg" src="../../images/topicTitle.png" alt="">
      <img class="logo" src="../../images/topic_logo.png" alt="">
      <h3>严选好物 用心生活</h3>
    </div>
    <!--<div class="main">-->
      <!--<div class="content">-->
        <!--<div class="container">-->
          <!--<div-->
            <!--v-for="(item, index) in list"-->
            <!--:key="index"-->
          <!--&gt;-->
            <!--<img :src="item.picUrl" alt="">-->
            <!--<p class="p1">{{item.mainTitle}}</p>-->
            <!--<p class="p2">{{item.viceTitle}}</p>-->
          <!--</div>-->
        <!--</div>-->
      <!--</div>-->
    <!--</div>-->
    <div class="containerSwiper">
      <div class="swiper-container TopSwiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide topItem" v-for="(item, index) in list" :key="index">
            <div class="groupItem" v-for="(nextItem, nextIndex) in item" :key="nextIndex">
              <div>
                <img :src="nextItem.picUrl" alt="">
                <p>{{nextItem.mainTitle}}</p>
                <span>{{nextItem.viceTitle}}</span>
              </div>
            </div>
          </div>
        </div>
        <!-- 如果需要分页器 -->
        <div class="swiper-pagination iconBtn"></div>
      </div>
    </div>
    <div class="product">
      <div class="left">
        <div v-for="(item, index) in arr1" :key="index" class="leftItem">
          <img :src="item.picUrl" alt="" :class="indexP === item.layoutType ? 'small' : 'big'">
          <p>{{item.title}}</p>
        </div>
      </div>
      <div class="right">
        <div v-for="(item, index) in arr2" :key="index" class="leftItem">
          <img :src="item.picUrl" alt="" :class="indexP === item.layoutType ? 'small' : 'big'">
          <p>{{item.title}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Swiper from 'swiper'
import 'swiper/css/swiper.min.css'
export default {
  name: 'top',
  data () {
    return {
      list: [],
      nextList: [],
      listProduct: [],
      arr1: [],
      arr2: [],
      indexP: 1,
      banners: ['https://yanxuan.nosdn.127.net/aa86b1b3a97b10c52466da90332d62aa.jpg', 'https://yanxuan.nosdn.127.net/aa86b1b3a97b10c52466da90332d62aa.jpg', 'https://yanxuan.nosdn.127.net/aa86b1b3a97b10c52466da90332d62aa.jpg']
    }
  },
  methods: {
    initSwiper () {
      var mySwiper = new Swiper('.swiper-container', { // eslint-disable-line no-unused-vars
        loop: false,
        slidesPerView: 4,
        pagination: {
          el: '.swiper-pagination'
        }
      })
    }
  },
  mounted () {
    const url = '/luFei/topic/v1/know/navWap.json'
    axios.get(url)
      .then((res) => {
        this.list = res.data.data.navList
        var temp = []
        var result = []
        for (let i = 0; i < this.list.length; i++) {
          for (let j = i + 1; j < this.list.length; j++) {
            if ((j - i) === 8) {
              temp.push(this.list[i])
              temp.push(this.list[j])
              result.push(temp)
              temp = []
            }
          }
        }
        this.list = result
      })
    const url2 = 'luFei/topic/v1/find/recAuto.json?'
    axios.get(url2, {
      params: {
        page: 1,
        size: 5,
        exceptIds: ''
      }
    })
      .then((res) => {
        var arr1 = []
        var arr2 = []
        this.listProduct = res.data.data.result[0].topics
        this.listProduct.forEach((item, index) => {
          if (index % 2 === 0) {
            arr1.push(item)
          } else {
            arr2.push(item)
          }
        })
        this.arr1 = arr1
        this.arr2 = arr2
      })
  },
  watch: {
    list () {
      this.$nextTick(() => {
        this.initSwiper()
      })
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
  .top{
    position: relative;
    margin-top: .2rem;
    background: #eeeeee;
    height: 100%;
    .bg {
      .imgBg {
        width: 7.5rem;
        height: 3.59rem;
      }
      .logo {
        width: 1.5rem;
        height: .8rem;
        position: absolute;
        top: .6rem;
        left: .2rem;
        z-index: 5;
      }
      h3 {
        position: absolute;
        top: .9rem;
        left: 1.8rem;
        z-index: 5;
        color: #fff;
      }
    }
    .containerSwiper {
      height: 3.38rem;
      ::v-deep .TopSwiper {
        padding: .2rem 0 .6rem;
        position: absolute;
        top: 1.7rem;
        left: .22rem;
        width: 94%;
        background: #fff;
        border-radius: .3rem;
        .iconBtn {
          display: block;
          span {
            background: #D9D9D9;
            width: .3rem;
            height: .05rem;
            border-radius: 0;
            opacity: 1;
            margin: 0;
            padding: 0;
          }
          .swiper-pagination-bullet-active {
            background: #DD1A21;
          }
        }
        .topItem {
          text-align: center;
          img {
            width: 1.2rem;
            height: 1.2rem;
            margin: 0 auto;
          }
          p {
            font-size: .28rem;
          }
          span {
            font-size: .25rem;
            color: #666;
          }
        }
      }
    }
    .product {
      width: 7.5rem;
      display: flex;
      justify-content: space-between;
      padding: 0 .2rem;
      background: #eeeeee;
      .left, .right {
        width: 49%;
        .leftItem {
          margin-bottom: .2rem;
          border-radius: .3rem;
          background: #fff;
          img.big {
            width: 100%;
            height: 3rem;
          }
          img.small {
            width: 100%;
            height: 1.5rem;
          }
        }
      }
      img {
        margin: 0 auto;
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
      }
      img.big {
        width: 3rem;
        height: 3rem;
      }
      img.small {
        width: 3rem;
        height: 1.5rem;
      }
      p {
        font-size: .28rem;
        padding: 0 .2rem;
        text-align: center;
      }
    }
  }
</style>
