import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import Authors from "./authors.js";
import Publishers from "./publishers.js";

const Books = sequelize.define("Books", {
  title: DataTypes.STRING,
  releaseYear: DataTypes.DATE,
});

Authors.hasMany(Books, {
  foreignKey: {
    allowNull: false,
  },
});
Publishers.hasMany(Books);

Books.belongsTo(Authors);
Books.belongsTo(Publishers);

export default Books;
