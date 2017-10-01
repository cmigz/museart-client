'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const userEvents = require('./user-auth/events')
const drawingEvents = require('./drawings/events')

$(() => {
  setAPIOrigin(location, config)
  drawingEvents.onGetDrawings()
  $('#nav-my-drawings').click(drawingEvents.onGetUserDrawings)
  $('#create-drawing').on('submit', drawingEvents.onAddDrawing)

  $(document).on('click', '#delete-drawing', function (event) {
    event.preventDefault()
    console.log('Index This')
    console.log(this)
    console.log('Index Event')
    console.log(event.target.id)
    drawingEvents.onDeleteDrawing(event.target.id)
  })

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
