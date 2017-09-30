'use strict'
const app = require('../app.js')

// POST (signup)
const onSignUpSuccess = (data) => {
  app.user = data.user
  console.log('Sign Up Successful')
}

const onSignUpFail = (error) => {
  console.error(error)
  console.log('Sign Up Failed')
}

module.exports = {
  onSignUpSuccess,
  onSignUpFail
}
