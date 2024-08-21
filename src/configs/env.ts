import dotenv from "dotenv";

dotenv.config();

export const env = {
    PORT: process.env.PORT || '3000',
    mongo: {
        PREFIX: process.env.MONGODB_PREFIX,
        HOST: process.env.MONGODB_HOST,
        PORT: process.env.MONGODB_PORT,
        USER: process.env.MONGODB_USER,
        PASS: process.env.MONGODB_PASS,
        DBNAME: process.env.MONGODB_DBNAME,
    },
};
