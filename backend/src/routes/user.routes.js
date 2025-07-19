import { Router } from 'express';
import { createUser, listUser, deleteUser } from '../controllers/user.controller.js';

const router = Router();

router.post('/create', createUser);
router.get('/list', listUser);
router.delete('/delete/:username', deleteUser);


export default router;
