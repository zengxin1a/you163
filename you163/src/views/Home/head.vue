<template>
  <div class="header">
    <div class="headTop">
      <h3>网易严选</h3>
      <div class="search" @click="search">
        <van-icon name="search" /><span>搜索商品, 共37119款好物</span>
      </div>
      <div class="login" @click="login">登录</div>
    </div>
    <div class="wrapNav">
      <div class="wrapper" ref="wrapper">
        <ul class="content">
          <li
            v-for="(item, index) in navs"
            :key="index"
            :class="indexValue === index ? 'active' : ''"
            @click="changeLine(index, $event)"
          >
            {{item}}
          </li>
        </ul>
      </div>
      <div class="icon" @click="iconRotate" :class="rotate ? '' : 'rote'">
        <van-icon name="arrow-down" />
      </div>
    </div>
    <div class="toggleNav" :class="rotate ? '' : 'show'">
      <h3>全部频道</h3>
      <div class="container">
        <div class="items" v-for="(item, index) in navs" :key="index">
          <p :class="indexValue === index ? 'bord' : ''">{{item}}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
// import axios from 'axios'
export default {
  data () {
    return {
      navs: ['推荐', '居家生活', '服饰鞋包', '美食酒水', '个护清洁', '母婴亲子', '运动旅行', '数码家电', '严选全球'],
      indexValue: 0,
      rotate: true
    }
  },
  methods: {
    changeLine (index, e) {
      this.indexValue = index
      this.scroll.scrollToElement(e.target, 0, 0)
    },
    iconRotate () {
      console.log(55)
      this.rotate = !this.rotate
    },
    search () {
      this.$router.push('/search')
    },
    login () {
      this.$router.push('/intercept')
    }
  },
  mounted () {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true,
      scrollX: true // 沿着x轴滚动
    })
  }
}
</script>

<style scoped lang="scss">
  @mixin background($url,$no-repeat:no-repeat,$x:center,$y:center,$size:100%) {
    background: $url $no-repeat $x $y;
    background-size: $size;
  }

  @mixin flex($display:flex,$justy:space-between,$align:center) {
    display: $display;
    justify-content: $justy;
    align-items: $align;
  }
  .header {
    position: relative;
    .headTop {
      height: .88rem;
      @include flex();
      padding: 0.1rem .3rem;
      h3 {
        font-size: .3rem;
      }
      .search {
        width: 4.5rem;
        @include flex(flex, center);
        height: .66rem;
        font-size: .27rem;
        background: #ededed;
        border-radius: .05rem;
      }
      .login {
        border: 1px solid #dd1a21;
        color: #dd1a21;
        font-size: .25rem;
        padding: 0 .1rem;
        border-radius: 5px;
        height: .4rem;
        line-height: .4rem;
      }
    }
    .wrapNav {
      overflow: hidden;
      margin-top: .1rem;
      padding-left: .4rem;
      padding-bottom: .1rem;
      @include flex();
      .wrapper {
        ul {
          @include flex();
          flex-wrap: wrap;
          width: 235%;
          li {
            font-size: .31rem;
            padding: 0 .1rem .1rem;
            margin-right: .3rem;
          }
          li.active {
            border-bottom: .02rem solid #dd1a21;
          }
        }
      }
      .icon {
        width: 1rem;
        height: 0.5rem;
        padding-top: 0;
        background: #fff;
        text-align: center;
        position: relative;
        z-index: 99999999;
        transition: all 1s;
      }
      .rote {
        transform: rotate(180deg);
      }
    }
    .toggleNav {
      position: absolute;
      top: .88rem;
      left: 0;
      background: #fff;
      z-index: 999999;
      display: none;
      h3 {
        padding-left: .2rem;
      }
      .container {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        padding: 0 .2rem;
        margin: .3rem 0;
        .items {
          p {
            border: .01rem solid #333;
            width: 1.5rem;
            height: .56rem;
            text-align: center;
            line-height: .56rem;
            margin: 0 0 .2rem 0;
          }
          p.bord {
            border: .01rem solid red;
          }
        }
      }
    }
    .show {
      display: block;
    }
  }
</style>
