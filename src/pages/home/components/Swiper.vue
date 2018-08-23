<!-- The ref attr used to find the swiper instance -->
<template>
  <div class="wrapper">
    <swiper :options="swiperOption" >
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img :src="item.imgURL" :alt="item.imgURL"  class="swiper-img">
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination' // 最新版写法 2018-8-23
        },
        loop: true
      },
      swiperList: [
        {
          id: '0001',
          imgURL: 'http://img1.qunarzz.com/piao/fusion/1609/4e/f65131dc92596702.jpg_890x330_1bf2a0ac.jpg'
        },
        {
          id: '0002',
          imgURL: 'http://img1.qunarzz.com/piao/fusion/1802/87/a581166992dff502.jpg_890x330_575c5dfb.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #ffffff
  .wrapper
    overflow: auto
    height: 0
    width: 100%
    padding-bottom: 37.07%;  /*防下方内容抖动*/
    .swiper-img
      width: 100%
</style>
