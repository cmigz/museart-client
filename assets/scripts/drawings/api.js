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

module.exports = {
  getDrawings
}
