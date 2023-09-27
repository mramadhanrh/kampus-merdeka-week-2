import { Router } from "express";
import { post } from "../controllers/genres.js";

const genresRouter = Router();

genresRouter.post("/", post);

export default genresRouter;
