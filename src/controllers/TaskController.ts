import * as Koa from 'koa'

const TaskController = {
  index: async (ctx: Koa.Context) => {
    ctx.body = { message: 'index', params: ctx.params }
  },

  show: async (ctx: Koa.Context) => {
    ctx.body = { message: 'show', params: ctx.params }
  },

  store: async (ctx: Koa.Context) => {
    ctx.body = { message: 'store', params: ctx.params }
  },

  update: async (ctx: Koa.Context) => {
    ctx.body = { message: 'update', params: ctx.params }
  },

  destroy: async (ctx: Koa.Context) => {
    ctx.body = { message: 'destroy', params: ctx.params }
  },
}

export default TaskController