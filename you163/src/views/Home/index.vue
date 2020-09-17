<template>
  <div class="home">
    <Header></Header>
    <Banner :bannerList = 'bannerList'></Banner>
    <HotList :hotList = 'hotList' :selfSell = 'selfSell' :bigImg = 'bigImg' :imgItem = 'imgItem'></HotList>
    <HotRank :hotRankList = 'hotRankList' :title = 'title'></HotRank>
    <LimitBuy :listItem = 'listItem' :time = 'time'></LimitBuy>
    <Foot></Foot>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'
import Header from './head.vue'
import Banner from './banner.vue'
import HotList from './hotList.vue'
import Foot from '@/components/Foot.vue'
import HotRank from './hotRank'
import LimitBuy from './limitBuy'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    LimitBuy,
    HotRank,
    Banner,
    HotList,
    Header,
    Foot
  },
  data () {
    return {
      bannerList: [],
      hotList: [],
      selfSell: [],
      bigImg: [],
      imgItem: [],
      hotRankList: [],
      title: '',
      listItem: [],
      time: []
    }
  },
  created () {
    const url = '/luFei/xhr/index.json?__timestamp=1600085629279'
    axios.get(url)
      .then((res) => {
        this.bannerList = res.data.data.data.focusList
        this.hotList = res.data.data.data.kingKongModule.kingKongList
        this.selfSell = res.data.data.data.policyDescList
        this.bigImg = res.data.data.data.bigPromotionModule.floorList[0].cells[0].picUrl
        this.imgItem = res.data.data.data.bigPromotionModule.floorList[1].cells
        this.hotRankList = res.data.data.data.categoryHotSellModule.categoryList
        this.title = res.data.data.data.categoryHotSellModule.title
        this.listItem = res.data.data.data.flashSaleModule.itemList
        this.time = res.data.data.data.flashSaleModule.remainTime
      })
  }
}
</script>

<style scoped lang="scss">
  .home {
    padding-bottom: 50px;
  }
</style>
