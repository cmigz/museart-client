'use strict'
const app = require('../app.js')

// Sign Up
const onSignUpSuccess = (data) => {
  app.user = data.user
  console.log('Sign Up Successful')
}

const onSignUpFailure = (error) => {
  console.error(error)
  console.log('Sign Up Failed')
}

// Sign In
const onSignInSuccess = (data) => {
  app.user = data.user
  console.log('Sign In Successful')
  $('#nav-sign-up, #nav-sign-in').hide()
  $('#nav-sign-out, #nav-change-password, #nav-my-drawings').removeClass('hidden')
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
  onChangePasswordFailure
}
