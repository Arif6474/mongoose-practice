import express from 'express';
import { createUser, getSingleUser, getUsers } from './user.controller';
const router = express.Router();

router.get('/', getUsers)
router.post('/create-user', createUser)
router.get('/getSingleUser/:id', getSingleUser)

export default router;