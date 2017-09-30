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

// Post => Sign In
const signIn = function (data) {
  console.log(data)
  return $.ajax({
    url: app.host + 'sign-in/',
    method: 'POST',
    data
  })
}

// Delete => Sign Out
const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: app.host + 'sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

// Patch => Change Password
const changePassword = function (data) {
  return $.ajax({
    method: 'PATCH',
    url: app.host + 'change-password/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}