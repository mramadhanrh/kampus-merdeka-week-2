import Books from "../models/books.js";
import Genres from "../models/genres.js";

export const getBookById = async (id) => {
  return await Books.findOne({
    // Same as { id: id }
    where: { id },
    attributes: ["id", "title", "AuthorId"],
    include: [
      {
        model: Genres,
        attributes: ["name"],
        through: { where: { BookId: id }, attributes: [] },
      },
    ],
  });
};

export const createBook = async (title, releaseYear, authorId) => {
  return await Books.create({
    title,
    releaseYear,
    AuthorId: authorId,
  });
};

export const updateBookTitleById = async (id, title) => {
  return await Books.update({ title }, { where: { id } });
};

export const destroyBookById = async (id) => {
  await Books.destroy({ where: { id } });
};
