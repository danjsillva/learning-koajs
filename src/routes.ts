import * as Koa from 'koa'
import * as Router from 'koa-router'

const router: Router = new Router()

router.get('/', async (ctx: Koa.Context, next) => {
    ctx.body = { message: 'Hello World!' }
})

router.get('/teste', async (ctx: Koa.Context, next) => {
    ctx.body = { message: 'Teste!' }
})

export default router