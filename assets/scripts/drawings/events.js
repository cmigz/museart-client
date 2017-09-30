'use strict'
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')
const app = require('../app.js')

const onGetDrawings = function (event) {
  api.getDrawings()
    .then(ui.onGetDrawingsSuccess)
    .catch(ui.onGetDrawingsFailure)
}

// const onGetGames = function (event) {
//   event.preventDefault()
//   let data = app.user.game
//   console.log(data)
//   api.index(data)
//     .then(ui.getSuccess)
//     .catch(ui.fail)
//   console.log(api.index())
// }

module.exports = {
  onGetDrawings
}
