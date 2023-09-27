import express from "express";
import { createGenre } from "../services/genres.js";

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const post = async (request, response) => {
  const { name } = request.body;
  const genre = await createGenre(name);

  response.json({
    data: genre,
    message: "Data created successfully!",
  });
};
