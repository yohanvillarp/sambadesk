import { Router } from 'express';
import { createUser, listUser} from '../controllers/user.controller.js';

const router = Router();

router.post('/create', createUser);
router.get('/list', listUser);


export default router;
