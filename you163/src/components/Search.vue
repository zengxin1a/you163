<template>
  <div class="search">
    <div class="inpborder">
      <div class="left">
        <van-icon name="search" />
        <input type="text" placeholder="好货内部价">
      </div>
      <span @click="back">取消</span>
    </div>
    <div class="navKey">
      <h3>热门搜索</h3>
      <div class="hotKey">
        <p v-for="(item, index) in listSearch" :key="index">{{item.keyword}}</p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data () {
    return {
      listSearch: []
    }
  },
  methods: {
    back () {
      if (window.history.length <= 1) {
        this.$router.push({ path: '/' })
        return false
      } else {
        this.$router.go(-1)
      }
    }
  },
  mounted () {
    const url = 'luFei/xhr/search/init.json'
    axios.post(url)
      .then((res) => {
        console.log(res)
        this.listSearch = res.data.data.hotKeywordVOList
      })
  }
}
</script>

<style scoped lang="scss">
  .search {
    width: 7.5rem;
    padding: 0 .2rem;
    .inpborder {
      padding: 0.2rem 0;
      position: relative;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .van-icon {
        position: absolute;
        left: .2rem;
        top: .3rem;
      }
      input {
        width: 6rem;
        height: .56rem;
        line-height: .56rem;
        padding-left: .6rem;
        background: #f4f4f4;
        border-radius: 5px;
        border: none;
      }
    }
    .navKey {
      h3 {
        margin: .2rem 0;
      }
      .hotKey {
        display: flex;
        justify-content: start;
        flex-wrap: wrap;
        p {
          border: .01rem solid #333;
          padding: 0 .1rem;
          margin-bottom: .3rem;
          margin-right: .2rem;
        }
      }
    }
  }
</style>
