import { Router, type Application } from "express"

import shipgirlsRouter from "./shipgirls";

export const configureRouter = (app: Application) => {
    const router = Router();

    router.use('/shipgirls', shipgirlsRouter);

    app.use('/api/v1', router);
}
