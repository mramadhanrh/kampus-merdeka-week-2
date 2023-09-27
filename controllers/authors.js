import express from "express";
import { createAuthor, findById } from "../services/authors.js";

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const getById = async (request, response) => {
  const author = await findById(request.params.id);

  if (!author) {
    response.status(404);
    response.json({
      message: "Data not found!",
    });
    return;
  }

  response.json({
    data: author,
    message: "Data retreived successfully!",
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const post = async (request, response) => {
  const { firstName, lastName, birthDate, nationality } = request.body;

  const author = await createAuthor(
    firstName,
    lastName,
    birthDate,
    nationality
  );

  response.json({
    data: author,
    message: "Data created successfully!",
  });
};
