import express from 'express'
import ControllerUser from '../controller/users.js'

const router = express.Router()

router.get('/users', ControllerUser.FindAll)
router.get('/user/:id', ControllerUser.FindOne)
router.post('/user', ControllerUser.Create)
router.put('/user/:id', ControllerUser.Update)
router.delete('/user/:id', ControllerUser.Delete)

export default router