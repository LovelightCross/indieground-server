import { Router } from 'express';
import { all, read, create } from '../controllers/posts.ctrl';


const router: Router = Router();

router
    .get('/', all)
    .get('/:id', read)
    .post('/', create)

export default router;