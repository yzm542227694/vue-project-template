<template>
  <div class="time-picker">
    <mt-datetime-picker
      ref="picker"
      :type="type"
      v-model="pickerValue"
      :startDate="startDate"
      :endDate="endDate"
      :startHour="startHour"
      :endHour="endHour"
      >
    </mt-datetime-picker>
  </div>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import { DatetimePicker } from 'mint-ui'
Vue.component(DatetimePicker.name, DatetimePicker)

export default{
  props: {
    /*
      datetime: 日期时间选择器，可选择年、月、日、时、分，value 值为一个 Date 对象
      date: 日期选择器，可选择年、月、日，value 值为一个 Date 对象
      time: 时间选择器，可选择时、分，value 值为一个格式为 HH:mm 的字符串
     * */
    type: {
      type: String,
      default: 'datetime'
    },
    value: {
      type: Date,
      required: true
    },
    startDate: {
      type: Date
    },
    endDate: {
      type: Date
    },
    startHour: {
      type: Number,
      default: 0
    },
    endHour: {
      type: Number,
      default: 23
    }
  },
  data () {
    return {
      pickerValue: this.value || new Date()
    }
  },
  methods: {
    show () {
      this.$refs.picker.open()
    },
    hide () {
      this.$refs.picker.close()
    }
  },
  watch: {
    pickerValue () {
      this.$emit('input', this.pickerValue)
    }
  }
}
</script>

<style lang="stylus" module>

</style>
