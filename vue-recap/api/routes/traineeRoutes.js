const express = require('express')
const { getAllTrainees, getOneTrainee, addTrainee, editTrainee, deleteTrainee } = require('../controllers/traineeController')
const router = express.Router()

router.get('/', getAllTrainees)
router.get('/:id', getOneTrainee)
router.post('/', addTrainee)
router.put('/:id', editTrainee)
router.delete('/:id',deleteTrainee)

module.exports = router;