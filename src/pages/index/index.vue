<template>
  <div class="index">
    <div @click="$refs.timePicker.show()">
      {{test}}
    </div>
    <TimePicker v-model='test' ref="timePicker"/>
    <Btn @click="test2">按钮</Btn>
    <Row/>
    <Banner :items="bannerItems"/>
    <div @click="showSelect">
          打开select选择器
    </div>
    <Select ref="select" :items="selectItems" @change="selectChange"/>
    <div :class="$style.scrollBoxWrapper">
      <ScrollBox>
        <p>123123</p>
        <p>123123</p>
        <p>123123</p>
        <p>123123</p>
        <p>123123</p>
        <p>123123</p>
        <p>123123</p>
        <p>123123</p>
        <p>123123</p>
        <p>123123</p>
      </ScrollBox>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
import TimePicker from '@/components/timePicker'
import Btn from '@/components/btn'
import Row from '@/components/row'
import Banner from '@/components/banner'
import Select from '@/components/select'
import ScrollBox from '@/components/scrollBox'

export default{
  data () {
    return {
      test: new Date(),
      bannerItems: [
        {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533211863170&di=476e80cdb567c3d91deb3fc53a92653b&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2F00%2F04%2F13%2F75%2Fe2c9ba0f77de71a56780926f6ac654b7.jpg',
          href: 'http://www.baidu.com'
        }, {
          src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1533212982735&di=0c61c5c572b0d4a3ad5f345f07bf44be&imgtype=0&src=http%3A%2F%2Fpic.90sjimg.com%2Fback_pic%2Fqk%2Fback_origin_pic%2F00%2F03%2F11%2F3e0210f7a00859a4ae0a9991fcbbe8b2.jpg',
          href: 'http://www.baidu.com'
        }
      ],
      selectItems: [
        '测试选项1',
        '测试选项2',
        '测试选项3',
        '测试选项4'
      ]
    }
  },
  components: {
    TimePicker,
    Btn,
    Row,
    Banner,
    Select,
    ScrollBox
  },
  methods: {
    test2 () {
      console.log(222)
    },
    showSelect () {
      this.$refs.select.toggle()
    },
    selectChange (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="stylus" module>
  @import '../../common/stylus/element.styl'
  .scroll-box-wrapper{
    height: 5rem;
    background: darkgreen;
    color: white;
  }
</style>
