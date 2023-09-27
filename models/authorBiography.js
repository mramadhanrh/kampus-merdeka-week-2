import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";
import Authors from "./authors.js";

const AuthorBiography = sequelize.define(
  "AuthorBiography",
  {
    birthPlace: DataTypes.STRING,
    education: DataTypes.STRING,
    awards: DataTypes.INTEGER,
    description: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

Authors.hasOne(AuthorBiography);
AuthorBiography.belongsTo(Authors);

export default AuthorBiography;
