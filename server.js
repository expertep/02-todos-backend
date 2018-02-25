require('dotenv').config()
const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

var todoFunc = require('./app/routers/todos.js')
app.use('/func', todoFunc)
const port = process.env.PORT || 9999

app.listen(port)
console.log('Server is running on port: ' + port)
