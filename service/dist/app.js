"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const pg_1 = require("pg");
const dotenv_1 = require("dotenv");
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
(0, dotenv_1.config)();
const { PORT, POSTGRES_USERNAME, POSTGRES_PASSWORD, POSTGRES_HOSTNAME, POSTGRES_PORT, POSTGRES_DB, } = process.env;
app.use(express_1.default.json());
app.use((0, cors_1.default)());
const client = new pg_1.Client({
    host: POSTGRES_HOSTNAME,
    user: POSTGRES_USERNAME,
    password: POSTGRES_PASSWORD,
    port: parseInt(POSTGRES_PORT || ""),
    database: POSTGRES_DB,
});
client.connect();
app.get("/vasee", (req, res) => {
    client.query("SELECT * FROM users", (err, data) => {
        res.send(data.rows[0]);
    });
});
app.listen(PORT, () => console.log(`Listening at ${PORT}`));
//# sourceMappingURL=app.js.map