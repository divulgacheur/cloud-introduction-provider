const express = require('express')
const app = express()

const config = require('./config')

require('./routes')(app)


app.listen(config.port)
console.log(`Server started on port ${config.port}`)
