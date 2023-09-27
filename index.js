import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import booksRouter from "./routes/books.js";
import { startSequelize } from "./utils/startSequelize.js";
import sequelize from "./config/sequelize.js";
import authorsRouter from "./routes/authors.js";
import genresRouter from "./routes/genres.js";

dotenv.config();

const server = express();
const port = 3000;

startSequelize();

// Untuk mensinkronisasikan models dengan table di database
sequelize.sync({ alter: true });

console.log("Models", sequelize.models);

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.raw());
server.use(bodyParser.json());

server.use("/books", booksRouter);
server.use("/authors", authorsRouter);
server.use("/genres", genresRouter);

server.use((error, request, response, next) => {
  response.status(500).json({
    message: "Internal server error!",
  });

  console.log(error);
  next();
});

server.listen(port, () => {
  console.log(`Server is running at port ${port}!`);
});
