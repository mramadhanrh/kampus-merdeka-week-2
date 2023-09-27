import Genres from "../models/genres.js";

export const createGenre = async (name) => {
  return await Genres.create({ name });
};
