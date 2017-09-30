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
}

const onSignInFailure = (error) => {
  console.error(error)
  console.log('Sign In Failed')
}

// Sign Out
const onSignOutSuccess = () => {
  app.user = null
  console.log('Sign Out Successful')
}

const onSignOutFailure = () => {
  console.log('Sign Out Failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFailure,
  onSignInSuccess,
  onSignInFailure,
  onSignOutSuccess,
  onSignOutFailure
}
