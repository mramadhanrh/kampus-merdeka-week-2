import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Genres = sequelize.define("Genres", {
  name: {
    type: DataTypes.STRING,
    unique: true,
  },
});

export default Genres;
