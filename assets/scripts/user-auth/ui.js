'use strict'
const app = require('../app.js')

// Sign Up
const onSignUpSuccess = (data) => {
  app.user = data.user
  // console.log('Sign Up Successful')
  $('<p class="success">Sign Up Successful!</p>').insertAfter('#sign-up').delay(3000).fadeOut()
  $('#sign-up').find('.error').remove()
  $('input:not([type="submit"]), textarea').val('')
}

const badPasswordConfirmation = () => {
  $('#sign-up').find('.error').remove()
  $('#sign-up').append(
    '<p class="error"> Password Confirmation Not Matching</p>'
  )
}

const incompleteSignUpError = () => {
  $('#sign-up').find('.error').remove()
  $('#sign-up').append(
    '<p class="error">Please Fill All Fields</p>'
  )
}

const onSignUpFailure = (error) => {
  console.error(error)
  // console.log('Sign Up Failed')
  $('#sign-up').find('.error').remove()
  $('#sign-up').append(
    '<p class="error">Sorry, Email Already In Use</p>'
  )
  $('input:not([type="submit"]), textarea').val('')
}

// Sign In
const onSignInSuccess = (data) => {
  app.user = data.user
  // console.log(app.user)
  // console.log('Sign In Successful')
  $('#nav-sign-up, #nav-sign-in').hide()
  $('#nav-sign-out, #nav-change-password, #nav-my-drawings').removeClass('hidden')
  $('<li class="success">Sign In Successful!</li>').insertAfter('#nav-my-drawings').delay(3000).fadeOut()
  $('#sign-in').find('.error').remove()
  $('input:not([type="submit"]), textarea').val('')
}

const onSignInFailure = (error) => {
  console.error(error)
  // console.log('Sign In Failed')
  $('#sign-in').find('.error').remove()
  $('#sign-in').append(
    '<p class="error">Username and or Password Incorrect</p>'
  )
  $('input:not([type="submit"]), textarea').val('')
}

// Sign Out
const onSignOutSuccess = () => {
  app.user = null
  // console.log('Sign Out Successful')
  $('#nav-sign-out, #nav-change-password, #nav-my-drawings').addClass('hidden')
  $('#nav-sign-up, #nav-sign-in').show()
  $('#home-feed').show()
  $('#create-drawing').hide()
  $('#user-drawings').children().remove()
}

const onSignOutFailure = () => {
  // console.log('Sign Out Failed')
}

// Change Password
const onChangePasswordSuccess = () => {
  // console.log('Password Change Successful')
  $('<p class="success">Password Changed</p>').insertAfter('#change-password').delay(3000).fadeOut()
  $('input:not([type="submit"]), textarea').val('')
}

const onChangePasswordFailure = () => {
  // console.log('Password Change Failed')
  $('<p class="error">Original Password Incorrect</p>').insertAfter('#change-password').delay(3000).fadeOut()
  $('input:not([type="submit"]), textarea').val('')
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
  badPasswordConfirmation,
  incompleteSignUpError
}
