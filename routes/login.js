const express = require('express')
const router = express.Router()
const loginController = require('../controllers/login')



router.post('/register', loginController.newUser )
router.get('/register', loginController.register )


router.post('/login', loginController.login  )
router.get('/login', loginController.userLogin)

module.exports = router;
