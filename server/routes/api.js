const express = require('express');
const router = express.Router();

const userController = require('../controllers/UserController')
const medicController = require('../controllers/MedicController')
const sessionController = require('../controllers/sessionController')

const validators = require('../helpers/validators')


//User related
router.post('/register', userController.create);
router.post('/authenticate', userController.authenticate);
router.get('/confirm/:token', userController.confirm)

router.get('/users',  userController.getAllUsers)
router.post('/users', validators.validateAdmin, userController.addSpecial)
router.put('/user/profile', validators.validateUser, userController.updateUser)
router.get('/user/:id/profile', validators.validateUser, userController.getProfile)

router.get('/medics',  validators.validateUser, medicController.getAllMedics)
router.put('/medic/:id/confirm', validators.validateAdmin, medicController.confirmMedic)
router.delete('/medic/:id', validators.validateAdmin, medicController.deleteMedic)

router.get('/sessions', validators.validateUser, sessionController.getAllSessions)
router.post('/sessions', validators.validateUser, sessionController.createSession)
router.get('/session/:id', validators.validateUser, sessionController.getOneSession)
router.put('/session/:id/rate', validators.validateUser, sessionController.rateMedic)
router.put('/session/:id/accept', validators.validateUser, sessionController.acceptSession)
router.delete('/session/:id', validators.validateUser, sessionController.deleteSession)



router.post('/test', (req, res)=>{
    res.send(req.body)
})
module.exports = router;