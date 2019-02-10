<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img
        :src="bannerImg"
        class="banner-img">
        <div class="banner-info">
          <div class="banner-title">{{this.sightName}}</div>
          <div class="banner-number">
            <span class="iconfont banner-icon">&#xe6f5;</span>
            {{this.gallaryImgs.length}}
          </div>
        </div>
    </div>
    <fade-animation>
      <common-gallary
        :imgs="gallaryImgs"
        v-show="showStatus"
        @close="handleSwiperClose"
      >
      </common-gallary>
    </fade-animation>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary';
import FadeAnimation from 'common/fade/FadeAnimation';

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary,
    FadeAnimation,
  },
  props: {
    sightName: String,
    bannerImg: String,
    gallaryImgs: Array,
  },
  data() {
    return {
      showStatus: false,
    };
  },
  methods: {
    handleBannerClick() {
      this.showStatus = true;
    },
    handleSwiperClose() {
      this.showStatus = false;
    },
  },
};
</script>

<style lang="stylus" scoped>
  .banner
    overflow hidden
    position relative
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      line-height .6rem
      color #fff
      background-image linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, .8))
      .banner-title
        flex 1
        font-size .32rem
        padding 0 .2rem
      .banner-number
        font-size .24rem
        height .32rem
        line-height .32rem
        padding .05rem .4rem
        margin-top .04rem
        border-radius .2rem
        background rgba(0, 0, 0, .8);
        .banner-icon
          font-size .24rem
          maring-right .06rem
</style>
