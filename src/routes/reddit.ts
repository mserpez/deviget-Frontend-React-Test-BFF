import fetch from 'node-fetch'
import { Router, Request, Response } from 'express';
import { REDDIT_TOP_50_URL } from '../constants';
import { transformTop50Data } from '../utils/transformer';

const router = Router();

router.get('/posts', (req: Request, res: Response) => {
    return fetch(REDDIT_TOP_50_URL)
        .then(response => response.json())
        .then(response => {
            res.json(transformTop50Data(response));
        });
});

export default router;
