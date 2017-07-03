const Koa = require('koa')
const app = new Koa()
const fs = require('fs')
const path = require('path')

app.use(ctx => {
  ctx.type = 'html'
  const type = path.extname(ctx.path).substring(1)
  switch (type) {
    case 'html':
      ctx.type = 'html'
      break
    case 'js':
      ctx.type = 'js'
      break
    case 'css':
      ctx.type = 'css'
      break;
  }
  let file = ctx.path;
  if (file === '/') file = 'index.html'
  // 防止../这种访问路径
  file = file.replace(/\.+/, '.')
  let _path = path.join(__dirname, 'static', file)
  ctx.body = fs.createReadStream(_path)
})

app.listen(7001)