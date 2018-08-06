<template>
  <div :class="$style.bannerWrapper" :style="{'height': showBannerHeight+'px'}">
    <mt-swipe :auto="4000" @change="changeHeight">
      <mt-swipe-item v-for="(item, index) in showItems" :key="index">
        <img :src="item.src" :class="$style.bannerImg" @click="clickImg(item)"/>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import $ from 'jquery'
import { Swipe, SwipeItem } from 'mint-ui'

Vue.component(Swipe.name, Swipe)
Vue.component(SwipeItem.name, SwipeItem)

export default{
  props: {
    /*
     轮播图数组
     对象格式：
     {
       src: "",
       href: ""
     }
     * */
    items: {
      type: Array,
      default () {
        return []
      }
    },
    sacle: {
      type: Number,
      default: -1
    }
  },
  data () {
    return {
      showItems: [],
      bannerHeight: 0
    }
  },
  methods: {
    clickImg (item) {
      if (item.href) {
        window.location.href = item.href
      }
    },
    syncItems () {
      this.items.forEach(obj => {
        let img = new Image()
        img.src = obj.src
        this.showItems.push({
          src: obj.src,
          href: obj.href,
          height: img.height * ($(window).width() / img.width)
        })
      })
      this.bannerHeight = this.showItems.length > 0 ? this.showItems[0].height : 0
    },
    changeHeight (itemIndex) {
      this.bannerHeight = this.showItems[itemIndex].height
    }
  },
  computed: {
    showBannerHeight () {
      if (this.sacle === -1) return this.bannerHeight
      return $(window).width() * this.sacle
    }
  },
  wacth: {
    items () {
      this.syncItems()
    }
  },
  mounted () {
    this.syncItems()
  }
}
</script>

<style lang="stylus" module>
  .banner-wrapper{
    height: 0;
    transition: height 100ms;
    .bannerImg{
      width: 100%;
      height: 100%;
    }
  }
</style>
