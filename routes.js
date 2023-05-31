const express = require('express')
const router = express.Router()

const writingController = require('./controllers/writing_controller.js')

router.get("/writing", writingController.index)

router.get("/content/:creatorName/:title", writingController.show)

router.get("/writing/:creatorName", writingController.creatorWriting)


module.exports =router