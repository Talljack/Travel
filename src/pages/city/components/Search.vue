
<template>
  <div>
    <div class="search">
      <input v-model="keyword" class="inp-search" type="text" placeholder="输入城市名或拼音"/>
    </div>
    <div class="search-content" ref='search' v-show="keyword">
      <ul>
        <li class="search-item border-bottom"
          v-for="item of list" :key="item.id"
          @click="handleCityClick(item.name)"
        >
          {{item.name}}
        </li>
        <li class="search-item border-bottom" v-show="hasNoData">没有找到匹配数据</li>
      </ul>
    </div>
  </div>
</template>
<script>
import BScroll from 'better-scroll';
import { mapMutations } from 'vuex';

export default {
  name: 'CitySearch',
  props: {
    cities: Object,
  },
  data() {
    return {
      keyword: '',
      list: [],
      timer: null,
    };
  },
  computed: {
    hasNoData() {
      return !this.list.length;
    },
  },
  methods: {
    handleCityClick(city) {
      this.changeCityClick(city);
      this.$router.push('/');
    },
    ...mapMutations(['changeCityClick']),
  },
  watch: {
    keyword() {
      if (this.timer) {
        clearTimeout(this.timer);
      }
      if (!this.keyword) {
        this.list = [];
        return;
      }
      this.timer = setTimeout(() => {
        const results = [];
        for (const i of Object.keys(this.cities)) {
          this.cities[i].forEach((value) => {
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              results.push(value);
            }
          });
        }
        this.list = results;
      }, 100);
    },
  },
  mounted() {
    this.scroll = new BScroll(this.$refs.search);
  },
};
</script>
<style lang="stylus" scoped>
  @import '~style/variable.styl';
  .search
    height .72rem
    padding 0 .1rem
    background $bgColor
    .inp-search
      height .62rem
      padding 0 .1rem
      width 100%
      line-height .62rem
      text-align center
      border-radius .06rem
      color #666
      box-sizing border-box
      border none
  .search-content
    position absolute
    overflow hidden
    top 1.58rem
    left 0
    right 0
    bottom 0
    background-color #eee
    z-index 1
    .search-item
      line-height .62rem
      height .62rem
      background-color #fff
      color #666
</style>
