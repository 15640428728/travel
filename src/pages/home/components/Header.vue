<template>
  <div class="header">
    <div class="headerLeft"><div class="iconfont back-icon">&#xe624;</div></div>
    <div class="headerInput"><span class="iconfont">&#xe632;</span>输入城市/景点/游玩主题</div>
    <div class="headerRight">城市<span class="iconfont arrow-icon">&#xe600;</span></div>
  </div>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variables.styl'
  .header
    display: flex
    background: $bgColor
    color: #ffffff
    line-height: .86rem
    .headerLeft
      width: .64rem
      float: left
      .back-icon
        font-size: .4rem
        text-align: center
    .headerInput
      flex: 1
      background: #ffffff
      border-radius: .1rem
      margin-top: .12rem
      height: .64rem
      line-height .64rem
      margin-left: .2rem
      color: #ccc
      padding-left: .2rem
    .headerRight
      width: 1.24rem
      float: right
      text-align: center
      .arrow-icon
        font-size: .24rem

</style>
