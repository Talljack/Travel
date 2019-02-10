<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search>
    <city-list :cities="cities" :hotCities="hotCities" :keyWord="keyWord"></city-list>
    <city-alphabet :cities = "cities" @change="letterChange"></city-alphabet>
  </div>
</template>
<script>
import axios from 'axios';
import CityHeader from './components/Header';
import CitySearch from './components/Search';
import CityList from './components/List';
import CityAlphabet from './components/Alphabet';

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      keyWord: '',
    };
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json')
        .then(this.getCityInfoSucc);
    },
    getCityInfoSucc(res) {
      const respond = res.data;
      if (respond.ret && respond.data) {
        const data = respond.data;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    letterChange(letter) {
      const keyWord = letter;
      this.keyWord = keyWord;
    },
  },
  mounted() {
    this.getCityInfo();
  },
};
</script>
<style lang="stylus" scoped>

</style>
