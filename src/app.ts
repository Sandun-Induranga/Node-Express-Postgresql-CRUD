import express from 'express';
import { config } from 'dotenv';
import pool from './db/db';
config();

const app = express();

pool.query('SELECT * FROM "Customer".customer', (err, res) => {
    console.log(err, res);
});

const query = ('Insert into "Customer".customer values ($1, $2, $3, $4) returning *');
const values = ['C003', 'Ramal', 'Colombo', 2000];
pool.query(query, values, (err, res) => {
    console.log(err, res);
});

pool.query('UPDATE "Customer".customer SET cusName = $1 WHERE cusId = $2 returning *', ['Dasun', 'C003'], (err, res) => {
    console.log(err, res);
});

pool.query('DELETE FROM "Customer".customer WHERE cusId = $1 returning *', ['C003'], (err, res) => {
    console.log(err, res);
    pool.end();
});

app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
    }
);
