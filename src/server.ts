import * as Koa from 'koa'

import routes from './routes'

const app: Koa = new Koa()

app.use(routes.routes())

app.listen(3000, () => {
  console.log("Server is running at port 3000");
})