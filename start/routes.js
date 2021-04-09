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
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')
Route.on('/games').render('games')
Route.on('/about').render('about')



Route.get('/register','AuthController.registrationView').as('register.create')
Route.post('/register-store','AuthController.postRegister').as('register.store')
Route.get('/login','AuthController.loginView').as('login.create')
Route.post('/login-store','AuthController.postLogin').as('login.store')
Route.get('/suport','MensajeController.index').as('view.message')


Route.group(() => {
    Route.get('/create-message','MensajeController.create').as('create.mesage')
    Route.post('/store-message','MensajeController.store').as('store.message')
    Route.get('/edit-message/:id','MensajeController.edit').as('edit.message')
    Route.post('/update-message/:id','MensajeController.update').as('update.message')
    Route.get('/delete-message/:id','MensajeController.destroy').as('delete.message')
    Route.get('/logout','AuthController.logout').as('logout')
}).middleware(['auth'])


