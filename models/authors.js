import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Authors = sequelize.define("Authors", {
  firstName: DataTypes.STRING,
  lastName: DataTypes.STRING,
  birthDate: DataTypes.DATE,
  nationality: DataTypes.STRING,
});

export default Authors;
