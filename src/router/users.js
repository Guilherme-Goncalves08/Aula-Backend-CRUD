import express from 'express'
import ControllerUser from '../controller/users.js'

const router = express.Router()

router.get('/users', ControllerUser.FindAll)
router.get('/user/:index', ControllerUser.FindOne)
router.post('/user', ControllerUser.Create)
router.put('/user/:index', ControllerUser.Update)
router.delete('/user/:index', ControllerUser.Delete)

export default router