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

// async function connect() {
//         try {
//         const conexion = await pool.connect();
//         console.log("Connected to the database");
//         return conexion;
//     } catch (err) {
//         console.error("Error al conectarse a la base de datos:", err);
//     }
// }

// async function iniciarQuery(query) {
//     try {
//         let result = await pool.query(query);
        
//         return result.rows;
//         } catch (err) {
//         console.error("Error en la query:", err);
//         return [];
//         }
//     }

//     export { connect, iniciarQuery};