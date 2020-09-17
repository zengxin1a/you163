<template>
  <div class="deserve">
    <Head></Head>
    <Top></Top>
    <Foot></Foot>
  </div>
</template>

<script>
import Head from './head'
import Foot from '../../components/Foot'
import Top from './top'
export default {
  name: 'index',
  components: {
    Top,
    Foot,
    Head
  }
}
</script>

<style scoped lang="scss">
  body,html {
    height: 100%;
  }
  .deserve {
    padding-bottom: 50px;
  }
</style>
