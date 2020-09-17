<template>
  <div class="limit">
    <div class="limitBuy">
      <div class="left">
        <p>限时购</p>
        <span>{{h}}</span>
        <p>:</p>
        <span>{{m}}</span>
        <p>:</p>
        <span>{{s}}</span>
      </div>
      <div class="right">
        <span>更多</span>
        <van-icon name="arrow" />
      </div>
    </div>
    <div class="listItem">
      <div
        v-for="(item, index) in listItem"
        :key="index"
        class="itemBg"
      >
        <img :src="item.showPicUrl" alt="">
        <div>
          <span class="activityPrice">￥{{item.activityPrice}}</span>
          <span class="originPrice">￥{{item.originPrice}}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'limitBuy',
  data () {
    return {
      h: '',
      m: '',
      s: ''
    }
  },
  props: ['listItem', 'time'],
  methods: {
    timer () {
      this.h = parseInt(this.time / 1000 / 60 / 60).toString()
      this.m = parseInt(this.time / 1000 / 60 % 60).toString()
      this.s = parseInt((this.time - this.h * 1000 * 60 * 60 - this.m * 60 * 1000) / 1000)
      this.h = this.h.toString().padStart(2, '0')
      this.m = this.m.toString().padStart(2, '0')
      this.s = this.s.toString().padStart(2, '0')
      setInterval(() => {
        this.s--
        if (this.s === 0) {
          this.s = 59
          this.m--
          if (this.m === 0) {
            this.h--
            this.m = 59
            this.s = 59
            if (this.h === 0) {
              return
            }
          }
        }
        this.h = this.h.toString().padStart(2, '0')
        this.m = this.m.toString().padStart(2, '0')
        this.s = this.s.toString().padStart(2, '0')
      }, 1000)
    }
  },
  watch: {
    time () {
      this.timer()
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
  .limit {
    .limitBuy {
      @include flex();
      line-height: 1rem;
      .left {
        @include flex();
        padding-left: .2rem;
        span {
          background: #000;
          display: inline-block;
          color: #fff;
          height: .4rem;
          line-height: .4rem;
          margin: 0 .1rem;
        }
      }
      .right {
        padding-right: .2rem;
      }
    }
    .listItem {
      padding: 0 .2rem;
      @include flex();
      flex-wrap: wrap;
      .itemBg {
        margin-bottom: .2rem;
        background: #f5f5f5;
        img {
          width: 2.161rem;
          height: 2.161rem;
        }
        .activityPrice {
          color: #dd1a21;
          font-size: .27rem;
          margin-right: .1rem;
        }
        .originPrice {
          color: #7f7f7f;
          font-size: .23rem;
          text-decoration: line-through;
        }
      }
    }
  }
</style>
