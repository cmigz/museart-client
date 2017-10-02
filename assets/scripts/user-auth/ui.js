'use strict'
const app = require('../app.js')

// Sign Up
const onSignUpSuccess = (data) => {
  app.user = data.user
  console.log('Sign Up Successful')
  // $('#sign-up').append(
  //   '<p class="success"> Sign Up Successful!</p>'
  // ).delay(5000).remove('p')
  $('<p class="success">Sign Up Successful!</p>').insertAfter('#sign-up').delay(3000).fadeOut()
  $('#sign-up').find('.error').remove()
}

const badPasswordConfirmation = () => {
  $('#sign-up').append(
    '<p class="error"> Password Confirmation Not Matching</p>'
  )
}

const onSignUpFailure = (error) => {
  console.error(error)
  console.log('Sign Up Failed')
  $('#sign-up').append(
    '<p class="error">Sorry, Email Already In Use</p>'
  )
}

// Sign In
const onSignInSuccess = (data) => {
  app.user = data.user
  console.log('Sign In Successful')
  $('#nav-sign-up, #nav-sign-in').hide()
  $('#nav-sign-out, #nav-change-password, #nav-my-drawings').removeClass('hidden')
  console.log(app.user._id)
}

const onSignInFailure = (error) => {
  console.error(error)
  console.log('Sign In Failed')
}

// Sign Out
const onSignOutSuccess = () => {
  app.user = null
  console.log('Sign Out Successful')
  $('#nav-sign-out, #nav-change-password, #nav-my-drawings').addClass('hidden')
  $('#nav-sign-up, #nav-sign-in').show()
  $('#home-feed').show()
  $('#create-drawing').hide()
  $('#user-drawings').children().remove()
}

const onSignOutFailure = () => {
  console.log('Sign Out Failed')
}

// Change Password
const onChangePasswordSuccess = () => {
  console.log('Password Change Successful')
}

const onChangePasswordFailure = () => {
  console.log('Password Change Failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  badPasswordConfirmation
}
