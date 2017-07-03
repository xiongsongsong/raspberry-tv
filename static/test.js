/**
 * Created by song on 03/07/2017.
 */

new Vue({
  el: '#app',
  data() {
    return {
      status: {
        100: '正在检测网络状态',
        102: '请配置WiFi',
        105: '正在重连WiFi',
        200: '网络连接成功',
        500: '无法连接到网络，请联系管理员设置WiFi账户',
      }
    }
  }
})