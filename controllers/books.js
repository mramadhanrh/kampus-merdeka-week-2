import express from "express";
import {
  createBook,
  destroyBookById,
  getBookById,
  updateBookTitleById,
} from "../services/books.js";
import { findById } from "../services/authors.js";
import { createBookGenre } from "../services/booksGenres.js";

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const get = async (request, response) => {
  const book = await getBookById(request.params.id);

  response.json({
    data: {
      ...book.dataValues,
      Genres: [...book.dataValues.Genres.map(({ name }) => name)],
    },
    message: "Books data are on the way!",
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const getWithAuthor = async (request, response) => {
  const {
    dataValues: { AuthorId, id, title },
  } = await getBookById(request.params.id);
  const author = await findById(AuthorId);

  if (!id) return response.status(404).json({ message: "Data not found!" });

  response.json({
    data: {
      id,
      title,
      author,
    },
    message: "Data retreived successfully",
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const post = async (request, response) => {
  const { title, releaseYear, authorId, genresId } = request.body;

  const book = await createBook(title, releaseYear, authorId);

  genresId.split(",").forEach((genreId) => {
    createBookGenre(book.dataValues.id, genreId);
  });

  response.json({
    message: "Data created successfully",
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const put = async (request, response) => {
  await updateBookTitleById(request.params.id, request.body.title);
  const book = await getBookById(request.params.id);

  response.json({
    data: book,
    message: "Data updated successfully!",
  });
};

/**
 *
 * @param {express.Request} request
 * @param {express.Response} response
 */
export const destroy = async (request, response, next) => {
  try {
    await destroyBookById(request.params.id);

    response.json({
      message: "Data removed successfully!",
    });
  } catch (e) {
    next(e);
  }
};
