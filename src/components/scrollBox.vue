<template>
  <div ref="mainScroll" :class="$style.mainScroll">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import BaseClass from '@/modules/Base'

const Base = new BaseClass()

export default{
  props: {
    pullDownFn: {
      type: Function,
      default: null
    },
    pullUpFn: {
      type: Function,
      default: null
    },
    scrollFn: {
      type: Function,
      default: null
    },
    scrollEndFn: {
      type: Function,
      default: null
    }
  },
  data () {
    return {
    }
  },
  methods: {
    refreshScroll () {
      Base.initPageScroll(this, this.pullDownFn, this.pullUpFn, this.scrollFn, this.scrollEndFn)
    }
  },
  mounted () {
    this.refreshScroll()
  }
}
</script>

<style lang="stylus" module>
  .main-scroll{
    height: 100%;
    overflow: hidden;
  }
</style>
