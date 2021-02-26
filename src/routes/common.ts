import { Router, Request, Response } from 'express';
import os from 'os';

const router = Router();

router.get('/', (req: Request, res: Response) => {
    res.json("Hello! I'm alive");
});

router.get('/usage/ram', (req: Request, res: Response) => {
    res.json({
        used: `${Math.round((process.memoryUsage().heapUsed / 1024 / 1024) * 100) / 100} MB`,
        free: `${Math.round((os.freemem() / 1024 / 1024) * 100) / 100} MB`,
        total: `${Math.round((os.totalmem() / 1024 / 1024) * 100) / 100} MB`,
    });
});


export default router;
