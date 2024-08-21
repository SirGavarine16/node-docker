import mongoose from "mongoose";

import { env } from "../configs/env";

const { PREFIX, HOST, PORT, USER, PASS, DBNAME } = env.mongo;

export const connect = async () => {
    await mongoose.connect(
        `${PREFIX}://${USER}:${PASS}@${HOST}:${PORT}/`, {
            dbName: DBNAME,
        }
    )
}

export const disconnect = async () => {
    await mongoose.disconnect();
}