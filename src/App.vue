<template>
  <div id="app">
    <router-view/>
    <ShowImg ref="showImg"/>
  </div>
</template>

<script type="text/ecmascript-6">
import ShowImg from '@/components/showImg'
export default {
  name: 'App',
  components: {
    ShowImg
  },
  mounted () {
    window.showImg = (imgUrl) => {
      this.$refs.showImg.show(imgUrl)
    }
  }
}
</script>

<style lang="stylus" module>

</style>
