<template>
  <div class="cart">
    <Head></Head>
    <Main></Main>
    <Foot></Foot>
  </div>
</template>

<script>
import Head from './Head'
import Foot from '../../components/Foot'
import Main from './Main'
export default {
  name: 'index',
  components: {
    Main,
    Foot,
    Head
  }
}
</script>

<style scoped lang="scss">
  .cart {
    height: 100%;
  }
</style>
