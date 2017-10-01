'user strict'
const app = require('../app.js')

const getDrawings = function (data) {
  return $.ajax({
    url: app.host + 'drawings/',
    method: 'GET'
  })
}

const getUserDrawings = function (data) {
  return $.ajax({
    url: app.host + 'drawings/' + app.user.id,
    method: 'GET'
  })
}

const createDrawing = function (data) {
  return $.ajax({
    url: app.host + 'drawings/',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'drawing': {
        'userId': app.user.id,
        'imageLink': data.credentials.imageLink,
        'songTitle': data.credentials.songTitle,
        'songArtist': data.credentials.songArtist,
        'songLink': data.credentials.songLink,
        'lyrics': data.credentials.lyrics
      }
    }
  })
}

const deleteDrawing = function (data) {
  return $.ajax({
    url: app.host + 'drawings/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

const updateDrawing = function (data) {
  return $.ajax({
    url: app.host + 'drawings/' + app.user.id + '/' + data.credentials._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + app.user.token
    },
    data: {
      'drawing': {
        'imageLink': data.credentials.imageLink,
        'songTitle': data.credentials.songTitle,
        'songArtist': data.credentials.songArtist,
        'songLink': data.credentials.songLink,
        'lyrics': data.credentials.lyrics
      }
    }
  })
}

module.exports = {
  getDrawings,
  getUserDrawings,
  createDrawing,
  deleteDrawing,
  updateDrawing
}
