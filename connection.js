import pg from 'pg';

const { Pool } = pg;

const pool = new Pool({
    user : "postgres",
    password: "Postgre.2023",
    database: "softlife",
    port : 5432,
});

pool.connect();

export {pool};
