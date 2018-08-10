<template>
  <div :class="$style.wrapper">

  </div>
</template>

<script>
</script>

<style lang="stylus" module>
  @import '../../common/stylus/px2rem'
  .wrapper{
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: px2rem(49);
    background: green;
  }
</style>
