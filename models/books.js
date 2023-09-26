import { DataTypes } from "sequelize";

const Books = {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  name: DataTypes.STRING,
  release_year: DataTypes.DATE,
};

export default Books;
