/**
 * Created by song on 03/07/2017.
 */

new Vue({
  el: '#app',
  data() {
    return {
      code: 100,
      reconnect: 1,
      raspberryCode: {
        100: '正在检测网络状态',
        102: '请配置WiFi',
        105: '网络异常，正在重试...',
        200: '网络正常，接收指令中...',
        500: '无法连接到网络，请联系管理员设置WiFi账户',
      }
    }
  },
  methods: {
    search() {
      axios.get('/isonline').then((res) => {
        if (res.data === true) {
          this.code = 200
          this.reconnect = 0;
        } else {
          this.code = 105
          setTimeout(() => {
            this.reconnect++;
            this.search()
          }, 1000)
        }
      })
    }
  },
  mounted() {
    this.search()
  }
})