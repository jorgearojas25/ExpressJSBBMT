import { createPool, Pool } from "mysql2/promise";

/**
 * Method for create a pool of connections to the database
 * @returns Pool for re use connections to database
 */
export async function connect(): Promise<Pool> {
    const { MYSQL_USER, MYSQL_PASSWORD, MYSQL_HOST, MYSQL_DBNAME } =
        process.env;

    const connection = await createPool({
        host: MYSQL_HOST || "localhost",
        user: MYSQL_USER || "root",
        password: MYSQL_PASSWORD,
        database: MYSQL_DBNAME || "test",
        connectionLimit: 10,
    });

    return connection;
}
