import { Router } from "express";
import {
  get,
  post,
  put,
  destroy,
  getWithAuthor,
} from "../controllers/books.js";

const booksRouter = Router();

booksRouter.get("/:id", get);

booksRouter.get("/:id/author", getWithAuthor);

booksRouter.post("/", post);

booksRouter.put("/:id", put);

booksRouter.delete("/:id", destroy);

export default booksRouter;
