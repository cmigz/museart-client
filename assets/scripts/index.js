'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const userEvents = require('./user-auth/events')
const drawingEvents = require('./drawings/events')

$(() => {
  setAPIOrigin(location, config)
  drawingEvents.onGetDrawings()

  // User Auth Actions
  $('#sign-up').on('submit', userEvents.onSignUp)
  $('#sign-in').on('submit', userEvents.onSignIn)
  $('#sign-out').on('submit', userEvents.onSignOut)
  $('#change-password').on('submit', userEvents.onChangePassword)
})

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')

// use require without a reference to ensure a file is bundled
// require('./example')
