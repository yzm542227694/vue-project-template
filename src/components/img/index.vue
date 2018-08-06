<template>
  <div class="$style.imgWrapper" :style="{'padding-bottom':paddingBottomHeight}">
    <div class="$style.mainImgWrapper">
      <img v-lazy="imgSrc" class="$style.mainImg" v-if="imgSrc"/>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default{
  props: {
    // 图片地址
    imgSrc: {
      type: String,
      default: ''
    },
    // 图片的高占宽的比例
    scale: {
      type: Number,
      default: 1
    }
  },
  computed: {
    paddingBottomHeight () {
      return this.scale * 100 + '%'
    }
  }
}
</script>

<style lang="stylus" module>
  .img-wrapper{
    position: relative
    width:100%
    box-sizing: border-box
    background:#cccccc;
    .main-img-wrapper{
      position: absolute
      left: 0
      top: 0
      width: 100%
      height: 100%
      z-index: 2
      text-align: center
      background: url('imgLoadingBg.png') no-repeat
      background-size: auto 80%
      background-position: center center;
      .main-img{
        width: 100%
        height: 100%
      }
    }
  }
</style>
