import express from 'express';
import { config } from 'dotenv';
import pool from './db/db';
config();

const app = express();

pool.query('SELECT * FROM "Customer".customer', (err, res) => {
    console.log(err, res);
    pool.end();
});

const query = ('Insert into "Customer".customer values ($1, $2, $3, $4) returning *');
const values = ['C002', 'John', 'England', 1000];
pool.query(query, values, (err, res) => {
    console.log(err, res);
    pool.end();
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
    }
);
