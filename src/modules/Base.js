import LocalStorage from './LocalStorage'

import axios from 'axios'
import { Toast, Indicator } from 'mint-ui'
import BScroll from 'better-scroll'
let activeAjaxNum = 0// 当前正在进行的ajax请求数量

const AJAX_CODE = 'OFX'
const AJAX_KEY = 'OFXH4B79CJ5GK8CX'
/* const AJAX_SIGN = 'eae7aba2f7c9365ee92c8030eadf3308' */

class Base extends LocalStorage {
  require (url, data, callback) {
    const authTimestmap = new Date().getTime().toString()
    const authSign = window.hex_md5(AJAX_CODE + AJAX_KEY + authTimestmap)

    activeAjaxNum++
    if (activeAjaxNum === 1) {
      Indicator.open({
        text: 'loading',
        spinnerType: 'fading-circle'
      })
    }

    const finishAjaxEvent = () => {
      activeAjaxNum--
      if (activeAjaxNum === 0) {
        Indicator.close()
      }
    }

    return new Promise((resolve, reject) => {
      // 都走post请求
      axios({
        method: 'post',
        url: url,
        data: data || {},
        headers: {
          code: AJAX_CODE,
          key: AJAX_KEY,
          timestamp: authTimestmap,
          sign: authSign
        }
      }).then((response) => {
        finishAjaxEvent()
        response = response.data
        console.log(response)
        if (response.status === 0) {
          resolve(response.data)
        } else {
          Toast(response.msg)
        }
      }).catch(function (error) {
        finishAjaxEvent()
        if (error.response) {
          // 请求已发出，但服务器响应的状态码不在 2xx 范围内
          console.log(error.response.data)
          console.log(error.response.status)
          console.log(error.response.headers)
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('Error', error.message)
        }
        console.log(error.config)
        Toast('网络连接错误，请重试')
        reject(error)
      })
    })
  }

  initPageScroll ($this, pullDownFn, pullUpFn, scrollFn, scrollEndFn) {
    $this.$nextTick(() => {
      if (!$this.mainScroll) {
        let BScrollOption = {
          click: true,
          probeType: 3,
          bounce: false,
          bounceTime: 300,
          swipeTime: 1500
        }

        if (pullDownFn) {
          BScrollOption['pullDownRefresh'] = {
            threshold: 70, // 负值是当上拉到超过低部 70px；正值是距离底部距离 时，
            stop: 50
          }
        }
        $this.mainScroll = new BScroll($this.$refs.mainScroll, BScrollOption)

        if (pullDownFn) {
          $this.mainScroll.on('pullingDown', () => {
            // 触发刷新事件
            pullDownFn && pullDownFn()
          })
        }
        if (pullUpFn) {
          $this.mainScroll.on('scrollEnd', (pos) => {
            if (Math.abs(pos.y) >= Math.abs($this.mainScroll.maxScrollY)) {
              pullUpFn && pullUpFn()
            }
            scrollEndFn && scrollEndFn(pos)
          })
        }
        if (scrollFn) {
          $this.mainScroll.on('scroll', (pos) => {
            scrollFn && scrollFn(pos)
          })
        }
      } else {
        $this.mainScroll.refresh()
      }
    })
  }

  initCommonScroll ($this, refName) {
    $this.$nextTick(() => {
      if (!$this[refName]) {
        $this[refName] = new BScroll($this.$refs[refName], {
          click: true
        })
      } else {
        $this[refName].refresh()
      }
    })
  }

  closePullingDown ($this) {
    $this.mainScroll.finishPullDown()
  }
}

export default Base
