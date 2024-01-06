import express, { Express } from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import routes from "./routes";

const cors = require("cors");
const bodyParser = require("body-parser");

dotenv.config();
const app: Express = express();

const PORT: string | number = process.env.PORT || 4000;

app.use(cors());
app.use(bodyParser.json());
app.use(routes);

const uri: string = `${process.env.DB_CONN_STRING}/${process.env.DB_NAME}`;

mongoose
  .connect(uri)
  .then(() =>
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    })
  )
  .catch((error) => {
    throw error;
  });
