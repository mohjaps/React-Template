require('dotenv').config();
import { Pool } from 'pg';
import database from '../Configurations/connection'
import { readFileSync } from "fs";
import { join } from "path";

const connection: Pool = new Pool(database);

class DB {
    static connection: any;
    constructor() {
        DB.connection = new Pool(database);
    }

    static build = () => {
        const sql = readFileSync(join(__dirname, "build.sql")).toString();
        return connection.query(sql);
    };
}

export = DB;