import sequelize from "../config/sequelize.js";
import "../models/index.js";

export const startSequelize = async () => {
  await sequelize.authenticate();
  console.log("Connection to database successful!");
};
