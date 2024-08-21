import express from "express";

import { env } from "./configs/env";
import { configureRouter } from "./routes";

export const createApp = async () => {
    const app = express();

    app.use(express.json());

    app.get('/health', (_, res) => {
        return res.status(200).json({
            message: "Server is up and running correctly!",
        });
    });

    configureRouter(app);

    app.use('*', (req, res) => {
        return res.status(404).json({
            message: `API Endpoint with method ${req.method} is not defined.`,
        });
    });

    return {
        app,
        port: env.PORT,
    }
}
