
<template>
  <div class="list" ref="wrapper">
    <div>
      <div class="area">
        <div class="title border-topbottom">当前城市</div>
        <div class="button-list">
          <div class="button-wrapper">
            <div class="button">{{this.currentCity}}</div>
          </div>
        </div>
      </div>
      <div class="area">
        <div class="title border-topbottom">热门城市</div>
        <div class="button-list">
          <div class="button-wrapper"
            v-for="item of hotCities" :key="item.id"
            @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>
      <div class="area"  v-for="(item, key) of cities" :key="key" :ref="key">
        <div class="title border-topbottom">{{key}}</div>
        <div class="item-list">
          <div class="item border-bottom"
            v-for="innerItem of item"
            :key="innerItem.id"
            @click="handleCityClick(innerItem.name)"
          >
            {{innerItem.name}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll';
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'CityList',
  props: {
    cities: Object,
    hotCities: Array,
    keyWord: String,
  },
  computed: {
    ...mapState({
      currentCity: 'city',
    }),
  },
  methods: {
    handleCityClick(city) {
      this.changeCityClick(city);
      this.$router.push('/');
    },
    ...mapMutations(['changeCityClick']),
  },
  watch: {
    keyWord() {
      if (this.keyWord) {
        const element = this.$refs[this.keyWord][0];
        this.scroll.scrollToElement(element);
      }
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper);
  },
};
</script>
<style lang="stylus" scoped>
  .border-topbottom
    &:before
      border-color #ccc
    &:after
      border-color #ccc
  .border-bottom
    &:before
      border-color #eee
  .list
    position absolute
    left 0
    top 1.58rem
    right 0
    bottom 0
    overflow hidden
    .title
      line-height .54rem
      padding-left .2rem
      background-color #eee
      font-size .32rem
    .button-list
      overflow hidden
      padding .1rem .6rem .1rem .1rem
      .button-wrapper
        width 33.33%
        float left
        .button
          margin .1rem
          padding .1rem
          text-align center
          font-size .26rem
          color #666
          border .02rem solid #ccc
          border-radius .06rem
    .item-list
      margin .1rem 0
      .item
        padding .1rem
        line-height .76rem
        padding-left .2rem
</style>
