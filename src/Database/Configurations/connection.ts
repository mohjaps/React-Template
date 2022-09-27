require('dotenv').config();
const { Pool } = require('pg');
const database = require('../../Configurations/environment');
const { readFileSync } = require('fs');
const { join } = require('path');

class DB {
  static connection: any;
  constructor() {
    DB.connection = new Pool(database);
  }

  static build = () => {
    const sql = readFileSync(join(__dirname, 'build.sql')).toString();
    return this.connection.query(sql);
  };
}

export = DB;
