const router = require("express").Router()

const BookController = require('../controllers/BookController')

router.get('', BookController.index)
router.post('', BookController.store)

module.exports = router