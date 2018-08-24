<template>
  <div>
    <home-header></home-header>
    <home-swiper></home-swiper>
    <HomeIcons></HomeIcons>
  </div>
</template>

<script>

import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'

export default {
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons
  },
  name: 'Home'
}
</script>

<style lang="stylus" scoped>

</style>
