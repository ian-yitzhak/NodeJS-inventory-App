const express = require('express')
const router = express.Router()

const originController = require('../controllers/origin')

router.post('/' , originController.newOrigin)
router.get('/' , originController.allOrigin )
router.get('/:id' , originController.allOriginById )
router.patch('/:id' , originController.updateOrigin)
router.delete('/:id' , originController.deleteOrigin )

module.exports = router