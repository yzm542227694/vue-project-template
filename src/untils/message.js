import { Toast, MessageBox } from 'mint-ui'

export function _msg (msg, fontAwsomeIconName) {
  Toast({
    message: msg,
    position: 'middle',
    duration: 5000,
    iconClass: fontAwsomeIconName ? `fa fa-${fontAwsomeIconName}` : ''
  })
}
export function _alert (msg, successFn) {
  MessageBox.alert('操作成功').then(action => successFn && successFn(), action => {})
}
export function _confirm (msg, successFn, failFn) {
  MessageBox.confirm(msg).then(action => successFn && successFn(), action => failFn && failFn())
}
