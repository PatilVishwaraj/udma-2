import express from 'express';
import {
  newUser,
  getUsers,
  getUser,
  editUser,
  deleteUsr,
} from '../controller/user-controller.js';

const router = express.Router();

router.post('/create', newUser);
router.get('/list', getUsers);
router.get('/:id', getUser);
router.put('/:id', editUser);
router.delete('/:id', deleteUsr);

export default router;
