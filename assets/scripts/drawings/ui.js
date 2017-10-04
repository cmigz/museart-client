'use strict'

// Getting all drawings
const loopAllDrawings = (data) => {
  for (let i = 0; i < data.drawings.length; i++) {
    $('#home-feed').append(
      '<div class="drawing-container">' +
        '<div class="container">' +
          '<div class="row">' +
            '<div class="col-12 col-md-auto">' +
              '<h1 class="drawing-header">' + data.drawings[i].songTitle + '</h1>' +
              '<img class="drawing-image" src="' + data.drawings[i].imageLink + '">' +
            '</div>' +
          '</div>' +
          '<div class="row">' +
            '<div class="col col-md-8">' +
              '<p class="song-info"><span>Song Title:</span> ' + data.drawings[i].songTitle + '<br><span>Artist:</span> ' + data.drawings[i].songArtist + '</p>' +
            '</div>' +
            '<div class="col-6 col-md-4">' +
              '<p class="check-out-song">' + '<a target="about_blank" href="' + data.drawings[i].songLink + '">Check Out the Song</a>' + '</p>' +
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

const loopUserDrawings = (data) => {
  $('#user-drawings').children().remove()
  for (let i = 0; i < data.drawings.length; i++) {
    $('#user-drawings').append(
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
          // Update Drawing Form
          '<form id="update-drawing">' +
            '<fieldset>' +
              '<input class="hidden" type="text" name="credentials[_id]" value="' + data.drawings[i]._id + '">' +
              'Image Link ' + '<input type="text" class="update-form" name="credentials[imageLink]" value="' + data.drawings[i].imageLink + '">' + '<br>' +
              'Song Title <br>' + '<input type="text" class="update-form" name="credentials[songTitle]" value="' + data.drawings[i].songTitle + '">' + '<br>' +
              'Song Artist ' + '<input type="text" class="update-form" name="credentials[songArtist]" value="' + data.drawings[i].songArtist + '">' + '<br>' +
              'Lyrics <br>' + '<input type="text" class="update-form" name="credentials[lyrics]" value="' + data.drawings[i].lyrics + '">' + '<br>' +
              'Link to Song ' + '<input type="text" class="update-form" name="credentials[songLink]" value="' + data.drawings[i].songLink + '">' + '<br>' +
              '<input id="' + data.drawings[i]._id + '"class="btn btn-success" type="submit" name="submit" value="Update Drawing">' +
            '</fieldset>' +
          // Delete Drawing Form
          '</form>' +
          '<form id="delete-drawing">' +
            '<fieldset>' +
              '<input class="hidden" type="text" name="credentials[_id]" value="' + data.drawings[i]._id + '">' +
              '<input id="' + data.drawings[i]._id + '"class="btn btn-danger delete-button" type="submit" name="submit" value="Delete Drawing">' +
            '</fieldset>' +
          '</form>' +
        '</div>' +
      '</div>'
    )
  }
}

const onGetDrawingsSuccess = (data) => {
  // console.log('Got Drawings Success')
  // console.log(data)
  loopAllDrawings(data)
}

const onGetDrawingsFailure = () => {
  // console.log('Got Drawings Failed')
}

const onGetUserDrawingsSuccess = (data) => {
  // console.log('Get User Drawings Success')
  $('#home-feed').hide()
  $('#create-drawing').removeClass('hidden')
  loopUserDrawings(data)
}

const onGetUserDrawingsFailure = (data) => {
  // console.log('Failed to get User Drawings')
}

const onAddDrawingSuccess = (data) => {
  // console.log('Add Drawing Success')
  // console.log(data)
  $('#image-link').siblings('.error-small').remove()
  $('<p class="success">Drawing Successfully Added!</p>').insertAfter('#create-drawing').delay(3000).fadeOut()
  $('#create-drawing').find('.error').remove()
  $('input:not([type="submit"]), textarea').val('')
}

const onAddDrawingIncomplete = () => {
  $('<p class="error">Please Fill All Fields</p>').insertAfter('#create-drawing').delay(3000).fadeOut()
}

const onAddDrawingBadLink = () => {
  // console.log('bad link')
  // $('#image-link').append('<p class="error">Please provide proper link</p>')
  $('#image-link').siblings('.error-small').remove()
  $('<p class="error-small">Error: Incorrect Link<br>Link must end with one of the following: .jpg, .png, .jpeg</p>').insertAfter('#image-link')
}

const onAddDrawingBadUrl = () => {
  // console.log('bad url')
  // $('#image-link').append('<p class="error">Please provide proper link</p>')
  $('#image-link').siblings('.error-small').remove()
  $('<p class="error-small">Error: Please Provide Valid URL</p>').insertAfter('#song-link')
}

const onAddDrawingFailure = (data) => {
  // console.log('Add Drawing Failed')
}

const onDeleteDrawingSuccess = () => {
  // console.log('Delete Successfull')
  $('#delete-drawing').siblings('.error').remove()
  $('<p class="success">Drawing Deleted</p>').insertBefore('#delete-drawing')
}

const onDeleteDrawingFailure = () => {
  // console.log('Delete Failed')
}

const onUpdateDrawingSuccess = () => {
  // console.log('Update Successful')
  $('#update-drawing').siblings('.error').remove()
  $('<p class="success">Drawing Updated</p>').insertAfter('#update-drawing').delay(3000).fadeOut()
  $('input:not([type="submit"]), textarea').val('')
}

const onUpdateDrawingIncomplete = () => {
  // console.log('Incomplete')
  $('#update-drawing').siblings('.error').remove()
  $('<p class="error">Please Fill All Fields</p>').insertAfter('#update-drawing')
}

const onUpdateDrawingBadLink = () => {
  // console.log('bad img link')
  $('#update-drawing').siblings('.error').remove()
  $('<p class="error">Error: Incorrect Image Link<br>Link must end with one of the following: .jpg, .png, .jpeg</p>').insertAfter('#update-drawing')
}

const onUpdateDrawingBadUrl = () => {
  // console.log('bad url')
  $('#update-drawing').siblings('.error').remove()
  $('<p class="error">Error: Please Provide Valid URL</p>').insertAfter('#update-drawing')
}

const onUpdateDrawingFailure = () => {
  // console.log('Update Failed')
}

module.exports = {
  onGetDrawingsSuccess,
  onGetDrawingsFailure,
  onGetUserDrawingsSuccess,
  onGetUserDrawingsFailure,
  onAddDrawingSuccess,
  onAddDrawingFailure,
  onDeleteDrawingSuccess,
  onDeleteDrawingFailure,
  onUpdateDrawingSuccess,
  onUpdateDrawingFailure,
  onAddDrawingIncomplete,
  onAddDrawingBadLink,
  onAddDrawingBadUrl,
  onUpdateDrawingIncomplete,
  onUpdateDrawingBadLink,
  onUpdateDrawingBadUrl
}
