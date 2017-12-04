import { Router } from 'express';
import { all, read, create} from '../controllers/shows.ctrl';


const router: Router = Router();

router
    .get('/', all)
    .get('/:id', read)
    .post('/', create)

export default router;