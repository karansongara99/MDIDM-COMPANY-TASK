import {
  getUser,
  createUser,
  getUserById,
  updateUser,
  deleteUser
} from '../controller/UserController.js'

import express from 'express'

const router = express.Router()

router.get('/', getUser)
router.post('/create', createUser)
router.get('/:id', getUserById)
router.put('/update/:id', updateUser)
router.delete('/delete/:id', deleteUser)

export default router
