<template>
  <transition name="opa">
    <div class="showImgWrapper" v-show="showImgBig" @click="hide">
      <div :style="{'height':divHeight+'px','margin-bottom':-(divHeight/2)+'px'}"></div>
      <img id="bigImg" :src="imgUrl" :style="{'height':imgHeight,'width':imgWidth}"/>
    </div>
  </transition>
</template>

<script type="text/ecmascript-6">
import $ from 'jquery'
export default{
  data () {
    return {
      showImgBig: false,
      imgUrl: '',
      imgHeight: 'auto',
      imgWidth: 'auto',
      divHeight: 0
    }
  },
  methods: {
    show (imgUrl) {
      this.imgUrl = imgUrl
      this.showImgBig = true
    },
    hide () {
      this.showImgBig = false
    }
  },
  watch: {
    imgUrl () {
      const oImg = new Image()
      oImg.src = this.imgUrl
      oImg.onload = () => {
        let wW = $(window).width()
        let wH = $(window).height()

        let imgW = $('#bigImg').width()
        let imgH = $('#bigImg').height()

        let prop = imgH / imgW

        this.imgWidth = wW + 'px'
        setTimeout(() => {
          if (wW * prop > wH) {
            // 大长图,
            this.divHeight = 0
          } else {
            // 大宽图,上下居中
            this.divHeight = wH - $('#bigImg').height()
          }
        }, 0)
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
  .opa-enter-active,.opa-leave
    opacity: 1
  .opa-leave-active,.opa-enter
    opacity: 0
  .show-img-wrapper
    position: fixed
    left: 0
    top: 0
    width: 100vw
    height: 100vh
    z-index: 999999999
    background: rgba(0,0,0,0.9)
    overflow-y: scroll
    transition: all 200ms
</style>
