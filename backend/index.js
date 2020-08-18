// required libraries
require('rootpath')();
const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const router = express.Router()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors())
app.use(bodyParser.json())

const scrapController = require('./scrap')

app.get('/scrapIt', scrapController.cheerioScrap)

const apiPort = 4000;
app.listen(apiPort, () => console.log(`Server running on port ${apiPort}`))