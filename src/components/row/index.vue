<template>
  <div :class="[$style.row, cName]">
    <div :class="$style.left">
    123213
    </div>
    <div :class="$style.right">
    2222
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
export default{
  props: {
    cName: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="stylus" module>
  @import '../../common/stylus/layout.styl'
  .row{
    row()
  }
</style>
