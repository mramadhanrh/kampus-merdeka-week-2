import express from "express";
import bodyParser from "body-parser";
import booksRouter from "./routes/books.js";
import { Sequelize } from "sequelize";

const server = express();
const port = 3000;

const sequelize = new Sequelize("db_baru", "root", "root", {
  host: "localhost",
  dialect: "mysql",
});

// Promise

const startSequelize = async () => {
  await sequelize.authenticate();
  console.log("Connection to database successful!");
};

startSequelize();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.raw());
server.use(bodyParser.json());

server.use("/books", booksRouter);

server.use((error, request, response, next) => {
  response.status(500);
  response.json({
    message: "Internal server error!",
  });

  console.log("Log error from middleware:");
  console.error(error);
  next();
});

server.listen(port, () => {
  console.log(`Server is running at port ${port}!`);
});
