import artists from './artists';
import comments from './comments';
import posts from './posts';
import shows from './shows'
import venues from './venues'
import users from './users'


import { Router } from 'express';

const router: Router = Router();

router
    .use('/artists', artists)
    .use('/comments', comments)
    .use('/posts', posts)
    .use('/shows', shows)
    .use('/venues', shows)
    .use('/users', shows);

export default router;