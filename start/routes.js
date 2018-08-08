'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|``
*/ 
const Route = use('Route')
const DataBase = use('Database')

Route.on('/').render('welcome')
// Route.get('/hello', (obj) => {
//   // 显示查询符的值
//   const { request } = obj
//   return `hello ${ request.input('name') }`
// })
Route.get('/hello', 'HelloController.render')

/**
 * async 查询数据表为异步操作
 * await 等待异步的查询结果
 */
Route.get('/post', async () => {
  return await DataBase.table('posts').select('*')
})