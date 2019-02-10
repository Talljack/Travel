<template>
  <div>
    <div class="title">热销推荐</div>
    <ul>
      <router-link tag='li'
        class="item border-bottom"
        v-for="item of recommendList"
        :key="item.id"
        :to="'/detail/' + item.id"
      >
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <div class="item-title">{{item.title}}</div>
          <div class="item-des">{{item.desc}}</div>
          <button class="item-btn">查看详情</button>
        </div>
      </router-link>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array,
  },
};
</script>
<style lang="stylus" scoped>
  @import '~style/mixins.styl'
  .title
    overflow hidden
    padding .2rem;
    font-size .32rem
    margin .2rem 0 0 0;
    background-color #eee
  .item
    display flex
    height 1.9rem
    overflow hidden
    .item-img
      width 1.7rem
      height 1.7rem
      padding .1rem
    .item-info
      flex 1
      padding .1rem
      min-width 0
      .item-title
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-des
        line-height .4rem
        color #ccc
        ellipsis()
      .item-btn
        line-height .44rem
        padding .1rem
        margin-top .16rem
        background-color #ff9300
        border-radius .06rem
        border none
</style>
