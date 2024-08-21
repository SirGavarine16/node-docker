import { Router } from "express";

import { getShipgirls } from "../controllers/shipgirls";

const router = Router();

router.route('/')
    .get([], getShipgirls);

export default router;
