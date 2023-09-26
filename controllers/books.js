import express from "express";
import sequelize from "../config/sequelize.js";

export const get = async (request, response) => {
  const bookList = await sequelize.models.Books.findAll();

  response.json({
    data: bookList,
    message: "Books data are on the way!",
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const post = (request, response) => {
  const { id, name, release_year } = request.body;

  sequelize.models.Books.create({
    id,
    name,
    release_year,
  });

  response.json({
    message: "Data created successfully",
  });
};
