import fetch from 'node-fetch'
import { Router, Request, Response } from 'express';
import { REDDIT_TOP_50_URL } from '../constants';
import { transformTop50Data } from '../utils/transformer';

const router = Router();

router.get('/posts', async (req: Request, res: Response) => {

    const afterPagination = req.query.after;
    const url = `${REDDIT_TOP_50_URL}&after=${afterPagination}`;

    const redditResponse = await fetch(url);
    const redditResponseJSON = await redditResponse.json();

    res.json(transformTop50Data(redditResponseJSON));
});

export default router;
