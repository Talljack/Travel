<template>
  <div class="header">
    城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>
</template>
<script>
export default {
  name: 'CityHeader',
};
</script>
<style lang="stylus" scoped>
  @import '~style/variable.styl';
  .header
    line-height $headerHeight
    height $headerHeight
    background $bgColor
    font-size .32rem
    text-align center
    overflow hidden
    color #fff
    position relative
    .header-back
      position absolute
      left 0
      top 0
      color #fff
      font-size .4rem
      width .64rem
</style>
