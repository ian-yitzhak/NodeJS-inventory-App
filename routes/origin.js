const express = require('express')
const router = express.Router()

const originController = require('../controllers/origin')
const loginController = require('../controllers/login')

router.post('/new' , originController.newOrigin)
router.get('/new' , originController.showOrigin )
router.get('/origin' , originController.allOrigin )
router.get('/:id' , originController.allOriginById )
router.patch('/:id' , originController.updateOrigin)
router.delete('/:id' , originController.deleteOrigin )

router.get('/origin/:id', originController.categoryProduct )


router.post('/register', loginController.newUser )
router.get('/register', loginController.register )


router.post('/login', loginController.userLoginPost  )
router.get('/login', loginController.userLogin)



module.exports = router