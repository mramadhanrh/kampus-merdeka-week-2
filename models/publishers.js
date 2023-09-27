import { DataTypes } from "sequelize";
import sequelize from "../config/sequelize.js";

const Publishers = sequelize.define("Publishers", {
  name: DataTypes.STRING,
  foundedYear: DataTypes.DATE,
});

export default Publishers;
