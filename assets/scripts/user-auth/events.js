'use strict'
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signUp(data)
    .done(ui.onSignUpSuccess)
    .fail(ui.onSignUpFailure)
}

module.exports = {
  onSignUp
}
