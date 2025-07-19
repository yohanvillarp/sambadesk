import { Router } from 'express';
import { createUser, listUser } from '../controllers/user.controller.js';

const router = Router();

router.post('/user/create', createUser);
router.get('/user/list', listUser);


export default router;
