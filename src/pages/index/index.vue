<template>
  <div class="index">
    <TimePicker v-model='test'/>
  </div>
</template>

<script type="text/ecmascript-6">
import TimePicker from '@/components/timePicker'

export default{
  data () {
    return {
      test: new Date()
    }
  },
  components: {
    TimePicker
  }
}
</script>

<style>
</style>
