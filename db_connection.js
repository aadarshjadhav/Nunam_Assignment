const {Client} = require("pg");

const client = new Client({
    host: "localhost",
    user: "postgres",
    password: "password",
    database: "postgres",
    port: 5432


});

module.exports = client;