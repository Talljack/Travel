<template>
  <div>
    <div class="item" v-for="(item, index) in list" :key="index">
      <div class="item-title border-bottom">
        <div class="item-title-icon"></div>
        {{item.title}}
      </div>
      <div class="item-children" v-if="item.children">
        <detail-list :list="item.children"></detail-list>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'DetailList',
  props: {
    list: Array,
  },
};
</script>
<style lang="stylus" scoped>
  .item-title-icon
    display: inline-block;
    position: relative;
    width: .36rem;
    height: .36rem;
    top .06rem
    left .06rem
    background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.45rem no-repeat;
    margin-right: .1rem;
    background-size: .4rem 3rem;
  .item-title
    line-height .8rem
    height .8rem
    font-size .4rem
    padding 0 .2rem
  .item-children
    padding 0 .3rem
</style>
