<template>
  <div>
    <div class="title">周末去哪儿</div>
    <ul>
      <li class="item border-bottom" v-for="item of weekendList" :key="item.id">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <div class="item-title">{{item.title}}</div>
          <div class="item-des">{{item.desc}}</div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array,
  },
};
</script>
<style lang="stylus" scoped>
  @import '~style/mixins.styl'
  .title
    overflow hidden
    padding .2rem;
    font-size .32rem
    background-color #eee
    .item-img-wrapper
      height 0
      overflow hidden
      padding-bottom 37.09%
      .item-img
        width 100%
  .item-info
    padding .1rem
    .item-title
      line-height .54rem
      font-size .28rem
      color #212121
      ellipsis()
    .item-des
      line-height .42rem
      font-size .24rem
      color #616161
      color #ccc
      ellipsis()
</style>
