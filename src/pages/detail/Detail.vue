<template>
  <div>
    <banner-detail
      :sightName="sightName"
      :bannerImg="bannerImg"
      :gallaryImgs="gallaryImgs"
    ></banner-detail>
    <detail-header></detail-header>
    <div class="content">
      <detail-list :list="list"></detail-list>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
import BannerDetail from './components/Banner';
import DetailHeader from './components/Header';
import DetailList from './components/List';

export default {
  name: 'Detail',
  components: {
    BannerDetail,
    DetailHeader,
    DetailList,
  },
  data() {
    return {
      sightName: '',
      bannerImg: '',
      gallaryImgs: [],
      list: [],
    };
  },
  methods: {
    getDetailInfo() {
      axios.get('/api/detail.json', {
        params: {
          id: this.$route.params.id,
        },
      }).then(this.handleDetailInfoSucc);
    },
    handleDetailInfoSucc(res) {
      const respond = res.data;
      if (respond.ret && respond.data) {
        const data = respond.data;
        this.sightName = data.sightName;
        this.bannerImg = data.bannerImg;
        this.gallaryImgs = data.gallaryImgs;
        this.list = data.categoryList;
      }
    },
  },
  mounted() {
    this.getDetailInfo();
  },
};
</script>

<style lang="stylus" scoped>
  .content
    height 50rem
</style>
