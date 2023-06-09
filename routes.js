const express = require('express')
const router = express.Router()

const writingController = require('./controllers/writing_controller.js')

router.get("/writing/:offset", writingController.index)

router.get("/content/:creatorName/:title", writingController.show)

router.get("/:creatorName/writing", writingController.creatorWriting)


module.exports = router