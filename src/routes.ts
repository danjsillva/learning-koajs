import * as Koa from 'koa'
import * as Router from 'koa-router'

import TaskController from './controllers/TaskController'

const router: Router = new Router()

router.get('/', async (ctx: Koa.Context) => {
  ctx.body = { message: 'Hello World!' }
})

router.get('/tasks', TaskController.index)
router.get('/tasks/:id', TaskController.show)
router.post('/tasks', TaskController.store)
router.put('/tasks/:id', TaskController.update)
router.delete('/tasks/:id', TaskController.destroy)

export default router