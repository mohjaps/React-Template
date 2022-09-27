require('dotenv').config();
const { PRODUCTION, DEVELOPMENT, TESTING } = require('../Utils/consts');

const { NODE_ENV, PROD_DATABASE_URL, DEV_DATABASE_URL, TEST_DATABASE_URL, PORT } = process.env;
let connectinString: String | undefined = '';
let ssl: any = false;

switch (NODE_ENV) {
  case PRODUCTION:
    connectinString = PROD_DATABASE_URL;
    ssl = {
      rejectUnauthorized: false,
    };
    break;
  case DEVELOPMENT:
    connectinString = DEV_DATABASE_URL;
    break;
  case TESTING:
    connectinString = TEST_DATABASE_URL;
  default:
    throw new Error('Database Connection Error');
}

const config = {
  database: {
    connectinString,
    ssl,
  },
  port: PORT || 8080,
  nodeEnv: NODE_ENV || DEVELOPMENT,
};

export = { ...config };
