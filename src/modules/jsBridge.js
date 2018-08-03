import { Toast } from 'mint-ui'

class JsBridge {
  constructor () {
    this.anacliticObject = window.appObject = {}
    this.callbackFnIndex = 0// 当前回调函数索引
    this.appConfig = {
      title: '', // 框标题
      uploadImgUrl: '', // 上传图片地址
      payUrl: ''// 支付地址
    }
    this.appNative = window.native// 原生方法绑定对象
    this.isAppPlant = (() => {
      const result = !!this.appNative
      if (!result) Toast('请于app环境中测试')
      return result
    })()// 检查是否处于app环境下
  }

  // ==================================工具函数=========================================
  // 把传递过去的对象转换为字符串并做统一处理
  changeObj (obj, successFn = () => {}, failFn = () => {}) {
    return JSON.stringify(Object.assign(obj, {
      success: this.createCallbackFnOnce(successFn),
      fail: this.createCallbackFnOnce(failFn)
    }))
  }

  // 动态创建回调函数
  createCallbackFn (callback) {
    const callbackFnName = `callbackFn_${this.callbackFnIndex++}`
    this.anacliticObject[callbackFnName] = (data) => callback(data)
    return callbackFnName
  }

  // 动态创建仅使用一次的回调函数
  createCallbackFnOnce (callback) {
    const callbackFnName = `callbackFn_${this.callbackFnIndex++}`
    this.anacliticObject[callbackFnName] = (data) => {
      callback(data)
      this.delCallbackFn(callbackFnName)
    }
    return callbackFnName
  }

  // 删除创建的回调函数
  delCallbackFn (name) {
    delete this.anacliticObject[name]
  }

  // ==================================基本交互=========================================
  // 定义app中的属性
  config (configObj = {}, successFn = null) {
    this.appConfig.title = configObj.title || ''
    this.appConfig.uploadImgUrl = configObj.uploadImgUrl || ''
    this.appConfig.payUrl = configObj.payUrl || ''
    this.isAppPlant && this.appNative.config(this.changeObj(this.appConfig), successFn, (err) => {
      Toast('app配置失败，请重试')
      console.log(err)
    })
  }

  // 直接退出app
  exit () {
    console.log('退出APP')
    this.isAppPlant && this.isAppPlant.close()
  }

  // 两次退出app
  exitTwice () {
    const appOutFn = () => {
      this.exit()
    }
    if (this.outAppCount === 1) {
      appOutFn()
    } else {
      Toast('再按一次退出页面')
      this.outAppCount = 1
      setTimeout(() => {
        this.outAppCount = 0
      }, 3000)
    }
  }

  // ==================================上传、下载文件=========================================
  // 上传文件
  uploadFile (callback) {
    this.isAppPlant && this.appNative.uploadFile(this.changeObj({}, callback, (err) => {
      Toast('上传文件失败')
      console.log(err)
    }))
  }

  // 下载文件
  downloadFile (callback) {
    this.isAppPlant && this.appNative.downloadFile(this.changeObj({}, callback, (err) => {
      Toast('下载文件失败')
      console.log(err)
    }))
  }

  // 上传图片
  uploadImg (callback) {
    this.isAppPlant && this.appNative.uploadImg(this.changeObj({}, callback, (err) => {
      Toast('上传文件失败')
      console.log(err)
    }))
  }

  // ==================================数据缓存=========================================
  setStorage (key, data) {
    this.isAppPlant && this.appNative.setStorage(key, data)
  }
  getStorage (key) {
    if (this.isAppPlant) return this.appNative.getStorage(key)
  }

  // ==================================用户信息=========================================
  getUserInfo () {
    if (this.isAppPlant) return this.appNative.getUserInfo()
  }

  // ==================================支付=========================================
  pay (payString) {
    this.isAppPlant && this.appNative.pay(payString)
  }
}

export default JsBridge
