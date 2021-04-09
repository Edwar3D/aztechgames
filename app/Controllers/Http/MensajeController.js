'use strict'
const Mensaje = use('App/Models/Mensaje')

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with mensajes
 */
class MensajeController {
  /**
   * Show a list of all mensajes.
   * GET mensajes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index ({ request, response, view }) {
    const mesaje = await Mensaje.all()
    return view.render('suport', {
      messages: mesaje.toJSON()
    })
  }

  /**
   * Render a form to be used for creating a new mensaje.
   * GET mensajes/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create ({ request, response, view }) {
     return view.render('suport')
  }

  /**
   * Create/save a new mensaje.
   * POST mensajes
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store ({ request,auth,session, response }) {
    const mensaje = await Mensaje.create({
      user_id: auth.user.id,
      username: auth.user.username,
      body: request.input('body')
    })
    session.flash({ successmessage: 'User have been created successfully'})
    return response.redirect('/suport')
  }

  /**
   * Display a single mensaje.
   * GET mensajes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show ({ params, request, response, view }) {
    const mensaje = await Mensaje.find(params.id)
    return view.render('suport', {
      quote: mensaje.toJSON()
    })
  }

  /**
   * Render a form to update an existing mensaje.
   * GET mensajes/:id/edit
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit ({ params, request, response, view }) {
    const mensaje = await Mensaje.find(params.id)
    return view.render('Foro/edit-message', {
      message: mensaje.toJSON()
    })
  }

  /**
   * Update mensaje details.
   * PUT or PATCH mensajes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update ({ params, request, response }) {
    const mesaje = await Mensaje.find(params.id)
    mesaje.body = request.input('body')
    await mesaje.save()
   
    return response.redirect('/suport')
  }

  /**
   * Delete a mensaje with id.
   * DELETE mensajes/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy ({ params, request, response }) {
    const mesaje = await Mensaje.find(params.id)
    await mesaje.delete()
    return response.redirect('/suport')
  }
}

module.exports = MensajeController
