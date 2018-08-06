<template>
  <Popup ref="popup">
    <div class="picker-toolbar" :class="$style.toolbar">
      <div class="mint-datetime-action mint-datetime-cancel" @click="toggle">
        取消
      </div>
      <div class="mint-datetime-action mint-datetime-confirm" @click="selected">
        确定
      </div>
    </div>
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
        textAlign: 'center',
        nowSelectedVal: ''
      }]
    }
  },
  methods: {
    toggle () {
      this.$refs.popup.toggle()
    },
    onValuesChange (picker, values) {
      this.$emit('change', values[0])
      this.nowSelectedVal = values[0]
    },
    selected () {
      this.$emit('change', this.nowSelectedVal)
      this.toggle()
    }
  }
}
</script>

<style lang="stylus" module>
  .toolbar{
    border-bottom: solid 0.042666666666667rem #eaeaea
  }
</style>
