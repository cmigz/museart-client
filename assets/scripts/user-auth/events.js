'use strict'
const api = require('./api.js')
const getFormFields = require('../../../lib/get-form-fields.js')
const ui = require('./ui.js')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (data.credentials.email === '' ||
      data.credentials.password === '' ||
      data.credentials.password_confirmation === ''
  ) {
    ui.incompleteSignUpError()
  } else if (data.credentials.password === data.credentials.password_confirmation) {
    api.signUp(data)
      .done(ui.onSignUpSuccess)
      .fail(ui.onSignUpFailure)
  } else {
    ui.badPasswordConfirmation()
  }
}

const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signIn(data)
    .done(ui.onSignInSuccess)
    .fail(ui.onSignInFailure)
}

const onSignOut = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.signOut(data)
    .done(ui.onSignOutSuccess)
    .fail(ui.onSignOutFailure)
}

const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.changePassword(data)
    .done(ui.onChangePasswordSuccess)
    .fail(ui.onChangePasswordFailure)
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onChangePassword
}
