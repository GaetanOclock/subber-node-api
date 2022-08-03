require('dotenv').config();

const {DB_HOST, DB_PORT, DB_NAME, DB_USERNAME, DB_PASSWORD, DB_TYPE} = process.env;

module.exports = {
    dbHost: DB_HOST,
    dbPort: DB_PORT,
    dbName: DB_NAME,
    dbUsername: DB_USERNAME,
    dbPassword: DB_PASSWORD,
    dbType: DB_TYPE
};