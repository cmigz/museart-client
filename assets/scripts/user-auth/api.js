'use strict'
const app = require('../app.js')

// POST => Sign Up
const signUp = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + 'sign-up/',
    method: 'POST',
    data
  })
}

module.exports = {
  signUp
}
