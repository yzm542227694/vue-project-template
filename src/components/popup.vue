<template>
  <mt-popup
    v-model="showProps"
    :position="position"
    :closeOnClickModal="closeOnClickModal">
    <slot></slot>
  </mt-popup>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import { Popup } from 'mint-ui'

Vue.component(Popup.name, Popup)

export default{
  props: {
    closeOnClickModal: {
      type: Boolean,
      default: true
    },
    position: {
      type: String,
      default: 'bottom'
    }
  },
  data () {
    return {
      showProps: false
    }
  },
  methods: {
    toggle () {
      this.showProps = !this.showProps
    }
  }
}
</script>

<style lang="stylus">
</style>
