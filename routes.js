const express = require('express')
const router = express.Router()

const writingController = require('./controllers/writing_controller.js')

router.get("/writing", writingController.index)

router.get("/content/:creatorName/:title", writingController.show)


module.exports =router