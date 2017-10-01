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

const onGetUserDrawings = function (event) {
  api.getUserDrawings()
    .then(ui.onGetUserDrawingsSuccess)
    .catch(ui.onGetUserDrawingsFailure)
}

const onAddDrawing = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.createDrawing(data)
    .then(ui.onAddDrawingSuccess)
    .catch(ui.onAddDrawingFailure)
}

const onDeleteDrawing = function (event) {
  const data = event
  console.log('Events.js Data')
  console.log(data)
  console.log('Events This')
  console.log(this)
  api.deleteDrawing(data)
    .then(ui.onDeleteDrawingSuccess)
    .catch(ui.onDeleteDrawingFailure)
}

const onUpdateDrawing = function (event) {
  const data = getFormFields(event.currentTarget)
  console.log('Events.js Data')
  console.log(data)
  console.log('Events This')
  console.log(this)
  api.updateDrawing(data)
    .then(ui.onUpdateDrawingSuccess)
    .catch(ui.onUpdateDrawingFailure)
}

module.exports = {
  onGetDrawings,
  onGetUserDrawings,
  onAddDrawing,
  onDeleteDrawing,
  onUpdateDrawing
}
