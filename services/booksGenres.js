import BooksGenres from "../models/booksGenres.js";

export const createBookGenre = async (bookId, genreId) => {
  return await BooksGenres.create({
    BookId: bookId,
    GenreId: genreId,
  });
};
