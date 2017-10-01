'use strict'
const app = require('../app.js')

const signUp = function (data) {
  return $.ajax({
    url: app.host + 'sign-up/',
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: app.host + 'sign-in/',
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    method: 'DELETE',
    url: app.host + 'sign-out/' + app.user.id,
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

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
