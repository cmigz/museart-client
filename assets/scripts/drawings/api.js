'user strict'
const app = require('../app.js')

const getDrawings = function (data) {
  return $.ajax({
    url: app.host + 'drawings/',
    method: 'GET'
    // headers: {
    //   Authorization: 'Token token=' + app.user.token
    // }
  })
}

const getUserDrawings = function (data) {
  return $.ajax({
    url: app.host + 'drawings/' + app.user.id,
    method: 'GET'
  })
}

const createDrawing = function (data) {
  console.log('API Data')
  console.log(data)

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
  console.log('API Data')
  console.log(data)
  return $.ajax({
    url: app.host + 'drawings/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + app.user.token
    }
  })
}

module.exports = {
  getDrawings,
  getUserDrawings,
  createDrawing,
  deleteDrawing
}
