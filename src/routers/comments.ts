import { Router } from 'express';
import { all, create } from '../controllers/comments.ctrl';


const router: Router = Router();

router
    .get('/', all)
    .post('/', create)

export default router;