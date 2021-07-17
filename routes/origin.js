const express = require('express')
const router = express.Router()

const originController = require('../controllers/origin')


router.post('/new' , originController.newOrigin)
router.get('/new' , originController.showOrigin )
router.get('/origin' , originController.allOrigin )
router.get('/:id' , originController.allOriginById )
router.patch('/:id' , originController.updateOrigin)
router.delete('/:id' , originController.deleteOrigin )

router.get('/origin/:id', originController.categoryProduct )


module.exports = router