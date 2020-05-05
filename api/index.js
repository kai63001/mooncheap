const express = require('express')
const app = express()
const cors = require('cors')
const axios = require('axios')
// const cheerio = require('cheerio')
// const con = require('../db/server')

app.use(cors())

app.get('/', (req, res) => {
  res.setHeader('Content-Type', 'application/json')
  axios.get('https://www.cheapshark.com/redirect?dealID=pApcdZ80lQEgMKwvtMZcsDIJGLri9gCFqfWY0CAC9x4%3D')
    .then(function (response) {
      // console.log(response);

      res.end(response.data)
    })
    .catch(function (error) {
      // handle error
      console.log(error)
    })
    .then(function () {
      // always executed
    })
})
module.exports = {
  path: '/api/',
  handler: app
}
