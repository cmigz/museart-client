'use strict'
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')

const onGetDrawings = function (event) {
  api.getDrawings()
    .then(ui.onGetDrawingsSuccess)
    .catch(ui.onGetDrawingsFailure)
}

const onGetUserDrawings = function (event) {
  api.getUserDrawings()
    .then(ui.onGetUserDrawingsSuccess)
    .catch(ui.onGetUserDrawingsFailure)
}

const onAddDrawing = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  console.log('Event Add Drawing Data')
  console.log(data)
  //   if (Object.values(obj).indexOf('test1') > -1) {
  //    console.log('has test1');
  // }
  if (Object.values(data.credentials).indexOf('') > -1) {
    ui.onAddDrawingIncomplete()
  } else {
    api.createDrawing(data)
      .then(ui.onAddDrawingSuccess)
      .catch(ui.onAddDrawingFailure)
  }
}

const onDeleteDrawing = function (event) {
  const data = event
  api.deleteDrawing(data)
    .then(ui.onDeleteDrawingSuccess)
    .catch(ui.onDeleteDrawingFailure)
}

const onUpdateDrawing = function (event) {
  const data = getFormFields(event.currentTarget)
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
