import { Router } from "express";
import { get, post } from "../controllers/books.js";

const booksRouter = Router();

booksRouter.get("/", get);

booksRouter.post("/", post);

export default booksRouter;
