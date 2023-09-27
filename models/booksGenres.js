import sequelize from "../config/sequelize.js";
import Books from "./books.js";
import Genres from "./genres.js";

const BooksGenres = sequelize.define("BooksGenres");

Books.belongsToMany(Genres, { through: BooksGenres });
Genres.belongsToMany(Books, { through: BooksGenres });

export default BooksGenres;
