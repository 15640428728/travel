<template>
  <div class="icons">
    <swiper>
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div v-for="item of page" :key="item.id" class="icon">
          <img :src="item.imgURL" :alt="item.imgURL" class="img-content">
          <p class="icon-desc">{{item.desc}}</p>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  data () {
    return {
      iconList: [{
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
        desc: '热门景点',
        id: '0001'
      }, {
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/6a/45f595250c73d102.png',
        desc: '夏日玩水',
        id: '0002'
      }, {
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/e3/67df61427c8e1302.png',
        desc: '云南印象',
        id: '0003'
      }, {
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/96/c70f1e85ae4a4f02.png',
        desc: '石林',
        id: '0004'
      }, {
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
        desc: '昆明必游',
        id: '0005'
      }, {
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1805/57/1e29afd06f881102.png',
        desc: '游云南',
        id: '0006'
      }, {
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/75/eca3ce656c886502.png',
        desc: '普者黑',
        id: '0007'
      }, {
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1803/b1/528a9e80403b8c02.png',
        desc: '七彩云南',
        id: '0008'
      }, {
        imgURL: 'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
        desc: '一日游',
        id: '0009'
      }
      ]}
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  @import '~styles/mixins.styl'
  .icons >>> .swiper-slide
    height: 0
    padding-bottom: 50%
    overflow: hidden
  .icon
    position: relative
    overflow hidden
    width: 25%
    float: left
    padding-bottom: 25%
    box-sizing: border-box
    .img-content
      position: absolute
      height: 100%
      box-sizing: border-box
      padding-bottom: .44rem
      right: .22rem
    .icon-desc
      position: absolute
      box-sizing: border-box
      bottom: 0
      height: .44rem
      width: 100%
      line-height: .44rem
      text-align: center
      color: $darkTextColor
      ellipsis()
</style>
