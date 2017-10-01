'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const userEvents = require('./user-auth/events')
const drawingEvents = require('./drawings/events')
const drawingsApi = require('./drawings/api')

$(() => {
  setAPIOrigin(location, config)

  // Render All Drawings on page load
  drawingEvents.onGetDrawings()

  // Nav-Home Handler
  $('#nav-home').on('click', function () {
    $('#user-drawings, #create-drawing').hide()
    $('#home-feed').show()
    $('#home-feed').children().remove()
    drawingEvents.onGetDrawings()
  })

  // Nav-My-Drawings Handler
  $('#nav-my-drawings').on('click', function () {
    drawingEvents.onGetUserDrawings()
    $('#user-drawings').show()
    $('#create-drawing').show()
  })

  // Create-Drawing Handler
  $('#create-drawing').on('submit', drawingEvents.onAddDrawing)

  // Delete-Drawing Handler
  $(document).on('click', '#delete-drawing', function (event) {
    event.preventDefault()
    console.log('Index This')
    console.log(this)
    console.log('Index Event')
    console.log(event.target.id)
    drawingEvents.onDeleteDrawing(event.target.id)
  })

  // Update-Drawing Handler
  $(document).on('submit', '#update-drawing', function (event) {
    event.preventDefault()
    console.log('Index This')
    console.log(this)
    console.log('Index Event Target')
    console.log(event)
    drawingEvents.onUpdateDrawing(event)
    drawingsApi.getUserDrawings()
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
