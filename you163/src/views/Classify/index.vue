<template>
  <div class="classify">
    <Head></Head>
    <Main></Main>
    <Foot></Foot>
  </div>
</template>

<script>
import Head from './head'
import Main from './Main'
import Foot from '../../components/Foot'
export default {
  components: {
    Foot,
    Main,
    Head
  }
}
</script>

<style scoped lang="scss">
  .classify {
    height: 100%;
    padding-bottom: 50px;
  }
</style>
