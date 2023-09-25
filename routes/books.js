import { Router } from "express";
import { get, post } from "../controllers/books.js";

const booksRouter = Router();

booksRouter.get("/", get);

booksRouter.post("/:id", post);

export default booksRouter;
