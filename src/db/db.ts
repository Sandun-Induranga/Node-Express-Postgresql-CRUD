import { Pool } from "pg";
import { config } from "dotenv";
config();

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: String(process.env.DB_PASS),
    port: Number(process.env.DB_PORT),
});

export default pool;
