<template>
  <a href="javascript:void(0)" :class="[$style.btn, cName]" @click="clickFn">
    <slot></slot>
  </a>
</template>

<script type="text/ecmascript-6">
export default{
  props: {
    cName: {
      type: String,
      default: ''
    }
  },
  methods: {
    clickFn () {
      this.$emit('click')
    }
  }
}
</script>

<style lang="stylus" module>
  @import '../common/stylus/element.styl'
  .btn{
    btn();
  }
</style>
