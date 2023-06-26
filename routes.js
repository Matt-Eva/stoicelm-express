const express = require('express')
const router = express.Router()

const writingController = require('./controllers/writing_controller.js')

router.get("/writing/:skip", writingController.index)

router.get("/content/:creator/:title", writingController.show)

router.get("/:creatorName/writing", writingController.creatorWriting)


module.exports = router