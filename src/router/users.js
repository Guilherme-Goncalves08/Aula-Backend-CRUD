import express from 'express'
import ControllerUser from '../controller/users.js'
import authMiddleware from '../../middleware/auth.js'

const router = express.Router()

router.post('/login', ControllerUser.Login)

router.get('/users', authMiddleware, ControllerUser.FindAll)
router.get('/user/:id', authMiddleware, ControllerUser.FindOne)
router.post('/user', ControllerUser.Create)
router.put('/user/:id', authMiddleware, ControllerUser.Update)
router.delete('/user/:id', authMiddleware, ControllerUser.Delete)


export default router