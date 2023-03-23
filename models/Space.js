const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection");

class Space extends Model {}

Space.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    space_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    square_feet: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    max_occupancy_no_tbl: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    max_occupancy_tbl: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    max_tables_r: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    max_tables_l: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    max_chairs: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    dj: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    dancefloor: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    projector: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    media_ready: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    expandable: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: "space",
  }
);

module.exports = Space;
