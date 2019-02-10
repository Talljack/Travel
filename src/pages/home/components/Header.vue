<template>
    <div class="header">
        <div class="header-left">
            <div class="iconfont icon-back">&#xe624;</div>
        </div>
        <div class="header-input">
            <span class="iconfont">&#xe632;</span>
            输入城市/景点/游玩主题
        </div>
        <router-link to="/city">
            <div class="header-right">
                {{this.city}}
                <span class="iconfont arrow-icon">&#xe62d;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city']),
  },
};
</script>

<style lang="stylus" scoped>
    //  less的适用方法
    // .header {
    //     background-color: #00bcd4
    // }
    // 下面是stylus的使用方法
    @import '~style/variable.styl';
    .header
        line-height $headerHeight
        height $headerHeight
        display flex
        background-color $bgColor
        color #fff
        .header-left
            width .64rem
            float left
            .icon-back
                text-align center
                font-size .4rem
        .header-input
            flex 1
            background #fff
            border-radius .1rem
            height .64rem
            line-height .64rem
            color #ccc
            padding-left .2rem
            margin-left .2rem
            margin-top .12rem
        .header-right
            min-width 1.04rem
            padding 0 .1rem
            float right
            text-align center
            color #fff
            .arrow-icon
                font-size .24rem
                margin-left -.04rem
</style>
