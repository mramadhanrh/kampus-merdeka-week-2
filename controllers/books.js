import express from "express";

export const get = (request, response) => {
  response.json({
    message: "Books data are on the way!",
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const post = (request, response) => {
  // Dynamic Path http://localhost/books/9
  const { id } = request.params;

  // Url Query http://localhost/books?name=Mockingbird
  const { name } = request.query;

  // Body Process
  const { full_name, partner } = request.body;

  response.json({
    id,
    name,
    full_name,
    partner,
  });
};
