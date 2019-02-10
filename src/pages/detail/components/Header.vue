<template>
  <div class="container">
    <router-link tag="div" to="/" class="header-abs" v-show="!showInfo">
      <div class="iconfont icon-back">&#xe624;</div>
    </router-link>
    <div class="header-fixed" v-show="showInfo" :style="opacityStyle">
      景点详情
      <router-link to="/">
        <div class="iconfont header-back">&#xe624;</div>
      </router-link>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailHeader',
  data() {
    return {
      showInfo: false,
      opacityStyle: {
        opacity: 0,
      },
    };
  },
  methods: {
    changeShowInfo() {
      const top = document.documentElement.scrollTop;
      if (top > 60) {
        let opacity = top / 140;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.showInfo = true;
      } else {
        this.showInfo = false;
      }
    },
  },
  activated() {
    window.addEventListener('scroll', this.changeShowInfo);
  },
  deactivated() {
    window.removeEventListener('scroll', this.changeShowInfo);
  },
};
</script>
<style lang="stylus" scoped>
  @import '~style/variable.styl';
  .header-abs
    position absolute
    left .2rem
    top .2rem
    height .8rem
    line-height .8rem
    width .8rem
    border-radius .4rem
    background #000
    text-align center
    .icon-back
      color #fff
      font-size .4rem
  .header-fixed
    z-index 2
    line-height $headerHeight
    height $headerHeight
    width 100%
    background $bgColor
    font-size .32rem
    text-align center
    overflow hidden
    color #fff
    position fixed
    top 0
    left 0
    .header-back
      position absolute
      left 0
      top 0
      color #fff
      font-size .4rem
      width .64rem
</style>
