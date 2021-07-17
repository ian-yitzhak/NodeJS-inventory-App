const express = require('express')
const router = express.Router()

const originController = require('../controllers/origin')


router.post('/new' , originController.newOrigin)
router.get('/new' , originController.showOrigin )
router.get('/origin' , originController.allOrigin )

router.delete('/:id' , originController.deleteOrigin )
router.put('/update/:id', originController.updateOrigin)
router.get('/update/:id', originController.update)

router.get('/origin/:id', originController.categoryProduct )


module.exports = router