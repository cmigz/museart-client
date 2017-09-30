'use strict'
const app = require('../app.js')

// Getting all drawings
const loopDrawings = (data) => {
  for (let i = 0; i < data.drawings.length; i++) {
    $('#home-feed').append(
      '<div class="drawing-container">' +
        '<div class="container">' +
          '<div class="row">' +
            '<div class="col-12 col-md-auto">' +
              '<img class="drawing-image" src="' + data.drawings[i].imageLink + '">' +
            '</div>' +
          '</div>' +
          '<div class="row">' +
            '<div class="col col-md-8">' +
              '<p>' + data.drawings[i].songTitle + ': ' + data.drawings[i].songArtist + '</p>' +
            '</div>' +
            '<div class="col-6 col-md-4">' +
              '<p>' + '<a target="about_blank" href="' + data.drawings[i].songLink + '">Check Out the Song</a>' + '</p>' +
            '</div>' +
          '</div>' +
          '<div class="row">' +
            '<p class="drawing-lyrics">' + data.drawings[i].lyrics + '</p>' +
          '</div>' +
        '</div>' +
      '</div>'
    )
  }
}

const onGetDrawingsSuccess = (data) => {
  console.log('Got Drawings Success')
  console.log(data)
  loopDrawings(data)
}

const onGetDrawingsFailure = () => {
  console.log('Got Drawings Failed')
}

module.exports = {
  onGetDrawingsSuccess,
  onGetDrawingsFailure
}
