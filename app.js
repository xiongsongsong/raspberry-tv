const Koa = require('koa')
const app = new Koa()
const path = require('path')
const api = require('koa-router')()
const request = require('request')


// 静态文件
app.use(require('koa-static')(path.join(__dirname, 'static')))

// 是否联网
api.get('/isonline', async (ctx) => {
  ctx.body = await new Promise((resolve) => {
    request.get('https://hammurabi.ruoshui.me/', (err, res) => {
      if (err) {
        resolve(false)
      } else {
        resolve(res.statusCode === 200)
      }
    })
  })
})

app.use(api.routes())

app.listen(7001)
