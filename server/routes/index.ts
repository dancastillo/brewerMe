import { Request, Response, Router } from "express";

const router: Router = Router();

router.get('/hello', (req: Request, res: Response) => {
    res.send('hello welcome to api');
});

export default router;
