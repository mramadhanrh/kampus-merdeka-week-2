import { Router } from "express";
import { getById, post } from "../controllers/authors.js";

const authorsRouter = Router();

authorsRouter.get("/:id", getById);

authorsRouter.post("/", post);

export default authorsRouter;
