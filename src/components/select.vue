<template>
  <Popup ref="popup">
    <mt-picker :slots="slots" @change="onValuesChange"></mt-picker>
  </Popup>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import Popup from './popup'
import { Picker } from 'mint-ui'

Vue.component(Picker.name, Picker)

export default{
  props: {
    items: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  components: {
    Popup
  },
  computed: {
    slots () {
      return [{
        flex: 1,
        values: this.items,
        className: 'slot1',
        textAlign: 'center'
      }]
    }
  },
  methods: {
    toggle () {
      this.$refs.popup.toggle()
    },
    onValuesChange (picker, values) {
      this.$emit('change', values[0])
    }
  }
}
</script>

<style lang="stylus">
</style>
