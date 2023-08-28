import cors from "cors";
import { Client, QueryResult } from "pg";
import { config } from "dotenv";
import express, { Request, Response  } from "express";
const app = express();
config();
const {
  PORT,
  POSTGRES_USERNAME,
  POSTGRES_PASSWORD,
  POSTGRES_HOSTNAME,
  POSTGRES_PORT,
  POSTGRES_DB,
} = process.env;

app.use(express.json());
app.use(cors());

const client = new Client({
  host: POSTGRES_HOSTNAME,
  user: POSTGRES_USERNAME,
  password: POSTGRES_PASSWORD,
  port: parseInt(POSTGRES_PORT ?? ""),
  database: POSTGRES_DB,
});

client.connect();

app.get("/vasee", (req: Request, res: Response) => {
  client.query("SELECT * FROM users", (err: Error, data: QueryResult): any => {
    res.send(data.rows[0]);
  });
});

app.listen(PORT, () => console.log(`Listening at ${PORT}`));
