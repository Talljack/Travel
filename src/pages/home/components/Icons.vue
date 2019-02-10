<template>
  <div class="icons">
    <swiper :options="swiperOption">
      <swiper-slide v-for="(page, index) of pages" :key="index">
        <div class="icon" v-for="item of page" :key="item.id">
          <div class="icon-img">
            <img :src="item.imgUrl" class="icon-img-content">
          </div>
          <p class="icon-des">{{item.desc}}</p>
        </div>
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>
<script>
export default {
  name: 'HomeIcon',
  props: {
    iconList: Array,
  },
  data() {
    return {
      swiperOption: {
        pagination: '.swiper-pagination',
        autoplay: false,
      },
    };
  },
  computed: {
    pages() {
      const pages = [];
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8);
        if (!pages[page]) {
          pages[page] = [];
        }
        pages[page].push(item);
      });
      return pages;
    },
  },
};
</script>
<style lang="stylus" scoped>
  @import '~style/variable.styl'
  @import '~style/mixins.styl'
  .icons >>> .swiper-pagination-bullet
    background rgba(0,175,190,.8)
  .icons >>> .swiper-container
    margin-top .1rem
    overflow hidden
    width 100%
    height 0
    padding-bottom 40%
    background-color #fff
  .icon
    width 25%
    float left
    padding-bottom 20%
    overflow hidden
    position relative
    box-sizing border-box
    text-align center
    .icon-img
      position absolute
      left 0
      top 0
      right 0
      bottom .36rem
      .icon-img-content
        width 50%
        height 75%
    .icon-des
      position absolute
      left 0
      right 0
      bottom .1rem
      line-height .36rem
      height .36rem
      color $darkTextColor
      text-align center
      font-size .28rem
      ellipsis()
</style>
