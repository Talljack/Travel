<template>
    <div>
        <home-header></home-header>
        <home-swiper :swiperList="swiperList"></home-swiper>
        <home-icon :iconList="iconList"></home-icon>
        <home-recommend :recommendList="recommendList"></home-recommend>
        <home-weekend :weekendList="weekendList"></home-weekend>
    </div>
</template>

<script>
import axios from 'axios';
import { mapState } from 'vuex';
import HomeHeader from './components/Header';
import HomeSwiper from './components/Swiper';
import HomeIcon from './components/Icons';
import HomeRecommend from './components/Recommend';
import HomeWeekend from './components/Weekend';

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcon,
    HomeRecommend,
    HomeWeekend,
  },
  data() {
    return {
      lastCity: '',
      iconList: [],
      recommendList: [],
      swiperList: [],
      weekendList: [],
    };
  },
  computed: {
    ...mapState(['city']),
  },
  methods: {
    getHomeInfo() {
      axios.get(`/api/index.json?city=${this.city}`)
        .then(this.getHomeInfoSucc);
    },
    getHomeInfoSucc(respond) {
      const res = respond.data;
      if (res.ret && res.data) {
        const data = res.data;
        this.iconList = data.iconList;
        this.recommendList = data.recommendList;
        this.swiperList = data.swiperList;
        this.weekendList = data.weekendList;
      }
    },
  },
  mounted() {
    this.lastCity = this.city;
    this.getHomeInfo();
  },
  activated() {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city;
      this.getHomeInfo();
    }
  },
};
</script>

<style>

</style>
