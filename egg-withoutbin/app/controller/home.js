const Controller = require('egg').Controller

class HomeController extends Controller {
  async index(ctx) {
    ctx.body = 'hi, me'
  }
}

module.exports = HomeController