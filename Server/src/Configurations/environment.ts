import dotenv from "dotenv";
dotenv.config();

const { NODE_ENV, PROD_DATABASE_URL, DEV_DATABASE_URL, TEST_DATABASE_URL, PORT } = process.env;
let connectinString: String | undefined = '';
let ssl: any = false;

switch (NODE_ENV) {
    case "PROD":
        connectinString = PROD_DATABASE_URL;
        ssl = {
            rejectUnauthorized: false
        }
        break;
    case 'DEV':
        connectinString = DEV_DATABASE_URL;
        break;
    case "TEST":
        connectinString = TEST_DATABASE_URL;
    default:
        throw new Error('Database Connection Error');
}

const config = {
    database: {
        connectinString, ssl
    },
    port: PORT || 3000,
    nodeEnv: NODE_ENV || "DEV",
};

export = { ...config };